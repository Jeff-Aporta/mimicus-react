/**
 * Transformaciones de color CSS — reactivas a paleta activa (`html[data-theme-color]`).
 * Acepta cualquier color (semántico o libre) y combina mods (`blacken`, `whiten`,
 * `saturate`, `desaturate`, `hue`, `huerotate`, `alpha`, `transparent`, `bow`,
 * `unbow`, `bright`, `mixColor`, `pmix`). OKLCH nativo, sin tocar base original.
 */
import { colorMix, resolveColor } from "./resolveColor.ts";

export type ComponentColor = "primary" | "design-1" | "design-2" | "design-3" | "info" | "success" | "warning" | "error" | "danger" | "color" | "bg" | "card" | "border" | "neutral" | "inherit" | "currentColor" | "white" | "black" | "transparent";
export type TColorDef = string | { [K: string]: TTransformOpts };

export interface TTransformOpts {
  blacken?: number;
  whiten?: number;
  saturate?: number;
  desaturate?: number;
  huerotate?: number;
  alpha?: number;
  transparent?: number;
  bow?: number;
  unbow?: number;
  hue?: number;
  saturation?: number;
  bright?: number;
  mixColor?: string;
  pmix?: number;
}

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const fval = (v: number, p = 3): number => +v.toFixed(p);
const toFactor = (v: number): number => clamp(v) / 100;

/* Resuelve alias semántico o deja pasar color CSS libre (hex/rgb/hsl/oklch/var). */
function resolveAny(input: string | undefined | null): string {
  if (!input) return "";
  if (input === "transparent" || input === "inherit" || input === "currentColor") return input;
  if (/^#|^rgb|^rgba|^hsl|^hsla|^oklch|^oklab|^color\(|^var\(|^white|^black/i.test(input)) return input;
  const resolved = resolveColor(input);
  return resolved || input;
}

/* Parsea OKLCH anidado en canales L/C/H/α para aplanar transformaciones. */
function unwrapOklch(color: string): { base: string; L: string; C: string; H: string; A: string } | null {
  const trimmed = color.trim();
  if (!trimmed.startsWith("oklch(")) return null;
  const inner = trimmed.slice(6, -1).trim();
  const fromMatch = inner.match(/^from\s+(.+?)\s+(.+)$/i);
  if (!fromMatch) {
    const parts = inner.split(/\s+/);
    return { base: "currentColor", L: parts[0] ?? "l", C: parts[1] ?? "c", H: parts[2] ?? "h", A: (parts[3] ?? "").replace(/^\//, "") || "alpha" };
  }
  const base = fromMatch[1].trim();
  const rest = fromMatch[2].trim();
  /* Split top-level por espacios, respeta paréntesis. */
  const comps: string[] = [];
  let depth = 0, current = "";
  for (const ch of rest) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === " " && depth === 0) { if (current) { comps.push(current); current = ""; } }
    else current += ch;
  }
  if (current) comps.push(current);
  const wrap = (s: string) => (s === "l" || s === "c" || s === "h" || s === "alpha" ? s : `(${s})`);
  const L = wrap((comps[0] ?? "l").replace(/^\//, ""));
  const C = wrap((comps[1] ?? "c").replace(/^\//, ""));
  const hSplit = (comps[2] ?? "h").split(/\s*\/\s*/);
  const H = wrap(hSplit[0]);
  const A = wrap((hSplit[1] ?? comps[3] ?? "").replace(/^\//, "") || "alpha");
  return { base, L, C, H, A };
}

function applyOpts(color: string, opts: TTransformOpts): string {
  const { blacken = 0, whiten = 0, saturate = 0, desaturate = 0, huerotate = 0, transparent = 0, bow = 0, unbow = 0, alpha, hue, saturation, bright } = opts;
  if (alpha === 0 || transparent === 100) return "transparent";
  if (!color) return "";

  const hasBlacken = blacken > 0;
  const hasWhiten = whiten > 0;
  const hasSaturate = saturate > 0;
  const hasDesaturate = desaturate > 0;
  const hasHuerotate = huerotate % 360 !== 0;
  const hasTransparent = transparent > 0;
  const hasBow = bow > 0;
  const hasUnbow = unbow > 0;
  const hasAlpha = alpha !== undefined && alpha > 0;
  const hasHue = hue !== undefined;
  const hasSaturation = saturation !== undefined && saturation > 0;
  const hasBright = bright !== undefined && bright > 0;
  const flags = [hasBlacken, hasWhiten, hasSaturate, hasDesaturate, hasHuerotate, hasTransparent, hasBow, hasUnbow, hasAlpha, hasHue, hasSaturation, hasBright];
  const active = flags.filter(Boolean).length;

  /* Sin mods: devuelve color tal cual. */
  if (active === 0) return color;

  /* Una sola mod: CSS nativo directo, sin OKLCH anidado. */
  let single: string | undefined;
  if (active === 1) {
    if (hasBlacken) single = `color-mix(in srgb, ${color}, black ${clamp(blacken)}%)`;
    else if (hasWhiten) single = `color-mix(in srgb, ${color}, white ${clamp(whiten)}%)`;
    else if (hasTransparent) single = `color-mix(in srgb, ${color}, transparent ${clamp(transparent)}%)`;
    else if (hasBow) single = `color-mix(in srgb, ${color}, rgb(0 0 0) ${clamp(bow)}%)`;
    else if (hasUnbow) single = `color-mix(in srgb, ${color}, rgb(255 255 255) ${clamp(unbow)}%)`;
    else if (hasDesaturate) single = `color-mix(in srgb, ${color}, oklch(from ${color} l 0 h) ${clamp(desaturate)}%)`;
    else if (hasSaturate) { const boost = clamp(saturate) * 0.002; single = `color-mix(in srgb, ${color}, oklch(from ${color} calc(l + ${boost}) 0.4 h) ${clamp(saturate)}%)`; }
    else if (hasAlpha) single = `oklch(from ${color} l c h / ${fval((alpha ?? 0) / 100)})`;
    else if (hasHue) single = `oklch(from ${color} l c ${hue})`;
    else if (hasHuerotate) single = `oklch(from ${color} l c calc(h + ${huerotate}))`;
    else if (hasSaturation) single = `oklch(from ${color} l ${fval((saturation ?? 0) / 100)} h)`;
    else if (hasBright) single = `oklch(from ${color} ${fval((bright ?? 0) / 100)} c h)`;
  }
  if (single) return single;

  /* Compuesto: aplana OKLCH y compone canales L/C/H/α con calc(). */
  const unwrapped = unwrapOklch(color);
  let base: string, eL: string, eC: string, eH: string, eA: string;
  if (unwrapped) { base = unwrapped.base === "currentColor" ? "currentColor" : unwrapped.base; eL = unwrapped.L; eC = unwrapped.C; eH = unwrapped.H; eA = unwrapped.A; }
  else { base = color; eL = "l"; eC = "c"; eH = "h"; eA = "alpha"; }

  const netBow = Math.max(0, bow - unbow);
  const netUnbow = Math.max(0, unbow - bow);
  const bowFactor = toFactor(netBow);
  const unbowFactor = toFactor(netUnbow);
  const blackenFactor = toFactor(blacken);
  const whitenFactor = toFactor(whiten);

  let huePart = eH;
  if (hue !== undefined) huePart = `${hue}`;
  else if (huerotate % 360 !== 0) huePart = `calc(${eH} + ${huerotate})`;

  let alphaPart = "";
  if (alpha !== undefined) alphaPart = ` / ${fval(alpha / 100)}`;
  else if (transparent > 0) alphaPart = ` / calc(${eA} * ${fval(1 - toFactor(transparent))})`;
  else if (eA !== "alpha") alphaPart = ` / ${eA}`;

  let satPart = eC;
  if (hasSaturation) { satPart = `${fval(saturation! / 100)}`; }
  else {
    const pieces: string[] = [];
    if (hasBow) pieces.push(`(1 - ${fval(bowFactor)})`);
    if (hasUnbow) pieces.push(`(1 - ${fval(unbowFactor)})`);
    if (hasBlacken) pieces.push(`(1 - ${fval(blackenFactor)})`);
    if (hasWhiten) pieces.push(`(1 - ${fval(whitenFactor)})`);
    const chromaMult = pieces.length > 0 ? pieces.join(" * ") : "";
    let currentSat = eC;
    if (hasSaturate) currentSat = `calc(${eC} + (0.5 - ${eC}) * ${fval(toFactor(saturate), 2)})`;
    else if (hasDesaturate) currentSat = `calc(${eC} * ${fval(1 - toFactor(desaturate), 2)})`;
    if (chromaMult) satPart = `calc(${currentSat} * ${chromaMult})`;
    else if (hasSaturate || hasDesaturate) satPart = currentSat;
  }

  let lightPart = eL;
  if (hasBright) { lightPart = `${fval(bright! / 100)}`; }
  else {
    const lOps: string[] = [];
    let baseL = eL;
    if (hasBlacken || hasWhiten) { baseL = `(${eL} * ${fval(1 - blackenFactor)} + (1 - ${eL}) * ${fval(whitenFactor)})`; }
    const neonL = hasSaturate ? ` + (1 - ${baseL}) * ${fval(toFactor(saturate), 2)}` : "";
    if (hasBow) lOps.push(`((1 - ${baseL}) * ${fval(bowFactor)} - ${baseL} * ${fval(bowFactor)})`);
    if (hasUnbow) lOps.push(`(${baseL} * ${fval(unbowFactor)} - (1 - ${baseL}) * ${fval(unbowFactor)})`);
    if (lOps.length > 0 || hasBlacken || hasWhiten || hasSaturate) {
      const opsStr = lOps.length > 0 ? " + " + lOps.join(" + ") : "";
      lightPart = `calc(${baseL}${neonL}${opsStr})`;
    }
  }

  return `oklch(from ${base} ${lightPart} ${satPart} ${huePart}${alphaPart})`;
}

/* Mezcla con negro (sombra, pressed). */
export const mkDarken = (c: string, p = 0): string => applyOpts(resolveAny(c), { blacken: p });

/* Mezcla con blanco (hover, highlight). */
export const mkLighten = (c: string, p = 0): string => applyOpts(resolveAny(c), { whiten: p });

/* Mezcla con transparente (velos, soft). */
export const mkAlpha = (c: string, p = 0): string => applyOpts(resolveAny(c), { transparent: p });

/* Invierte luminancia → contraste complementario. */
export const mkInvertL = (c: string): string => `oklch(from ${resolveAny(c)} l c calc(100% - l))`;

/* Tint hacia color de texto de paleta (`--mimicus-color`). */
export const mkBow = (color: string, percent = 0): string => applyOpts(resolveAny(color), { bow: percent });

/* Tint hacia inverso luminante de color de paleta. */
export const mkUnbow = (color: string, percent = 0): string => applyOpts(resolveAny(color), { unbow: percent });

/* Texto legible sobre fondo (contraste OKLCH auto). */
export const bg2font = (c: string): string => `oklch(from ${resolveAny(c)} calc((sign(0.75 - l) + 1) / 2 * 100%) 0 h / 1)`;

/* Texto legible sobre fondo semitransparente del acento. */
export const bgTransparent2font = (c: string, alphaPct: number, bg: string): string => bg2font(colorMix(bg, c, 100 - alphaPct));

/* Acento Windows Luna — OKLCH con piso de croma. */
export const mkWinChromeAccent = (color = "primary"): string => `oklch(from ${resolveAny(color)} l calc(min(0.26, max(c, 0.14) + 0.05)) h)`;

/* Rampa OKLCH: misma croma/matiz, luminancia desplazada. */
export const mkOklchShiftL = (c: string, delta: number, min = 0.06, max = 0.98): string => `oklch(from ${resolveAny(c)} calc(clamp(${min}, l + ${delta}, ${max})) c h)`;

/* Fondo soft del token semántico. */
export const mkSoftBg = (color: string, veilPct = 88): string => mkAlpha(color, veilPct);

/* Borde derivado del token (unbow + alpha). */
export function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85): string { return mkAlpha(mkUnbow(color, bowPct), alphaPct); }

/* Heading: tinte progresivo hacia color de paleta. */
export const mkHeadingColor = (color = "primary", bowPct?: number): string => mkBow(color, bowPct);

/* Setea `--ct-base` para utilidades CSS (`color-transform.css`). */
export function paletteBaseStyle(color = "primary"): Record<string, string> { return { "--ct-base": resolveAny(color) }; }

type SurfaceTintOpts = { surface?: string; cardMix?: number; fgMix?: number; borderMix?: number };

/* Superficie alert/tint: bg, fg y border coherentes con paleta. */
export function paletteSurfaceTint(color: string, opts: SurfaceTintOpts = {}): { accent: string; bg: string; fg: string; border: string } {
  const accent = resolveAny(color);
  const bg = colorMix(resolveAny(opts.surface ?? "card"), color, opts.cardMix ?? 15);
  const fg = colorMix(bg2font(bg), color, opts.fgMix ?? 40);
  const border = colorMix(bg, color, opts.borderMix ?? 35);
  return { accent, bg, fg, border };
}

/* Une reglas inline de transformación de paleta. */
export function joinColorStyle(...parts: Array<string | false | null | undefined>): string { return parts.filter(Boolean).join("; "); }

/* Aplica transformación por nombre (compat API previa). */
export function applyColorTransform(base: string, kind: string, amount = 0): string {
  switch (kind) {
    case "darken": return mkDarken(base, amount);
    case "lighten": return mkLighten(base, amount);
    case "alpha": return mkAlpha(base, amount);
    case "bow": return mkBow(base, amount);
    case "unbow": return mkUnbow(base, amount);
    case "invertL": return mkInvertL(base);
    case "bg2font": return bg2font(resolveAny(base));
    default: return resolveAny(base);
  }
}

/* Estados interactivos estándar (hover/active) sobre custom property. */
export function paletteStateVarRules(cssVarName: string): string[] {
  const ref = cssVarName.startsWith("var(") ? cssVarName : `var(${cssVarName})`;
  return [`${cssVarName}-hvr: ${mkLighten(ref, 15)}`, `${cssVarName}-ctv: ${mkDarken(ref, 20)}`];
}

export interface TElevationOpts { dx?: number; dy?: number; col?: string; darkshadow?: number; }

/* Variantes y colores auxiliares. */
export const border = "#80808050";
export const backdrop = "rgba(0, 128, 255, 0.05)";
export const modal_overlay = "rgba(0, 0, 0, 0.1)";
export const drawer_overlay = "rgba(0, 0, 0, 0.05)";
export const neutral = "#808080";
export const softBorder = "#80808018";

const especiales: Record<string, string> = { modal_overlay, drawer_overlay, neutral, softBorder, border, backdrop };

/* Separa { base: opts } en base y opts. */
function unwrapColorDef(input: TColorDef | undefined): { base: string; opts: TTransformOpts } | null {
  if (!input) return null;
  if (typeof input === "string") return { base: input, opts: {} };
  const entries = Object.entries(input);
  if (!entries.length) return null;
  const [base, opts] = entries[0];
  return { base, opts: (opts as TTransformOpts) ?? {} };
}

/* Nombre + transformación opcional. Acepta cualquier color. */
export const Color = {
  get: (name: TColorDef | undefined): string => {
    const parsed = unwrapColorDef(name);
    if (!parsed) return "";
    return Color.transform(parsed.base, parsed.opts);
  },
  primary: (opts: TTransformOpts = {}) => Color.transform("primary", opts),
  info: (opts: TTransformOpts = {}) => Color.transform("info", opts),
  success: (opts: TTransformOpts = {}) => Color.transform("success", opts),
  warning: (opts: TTransformOpts = {}) => Color.transform("warning", opts),
  error: (opts: TTransformOpts = {}) => Color.transform("error", opts),
  danger: (opts: TTransformOpts = {}) => Color.transform("danger", opts),
  design1: (opts: TTransformOpts = {}) => Color.transform("design-1", opts),
  design2: (opts: TTransformOpts = {}) => Color.transform("design-2", opts),
  design3: (opts: TTransformOpts = {}) => Color.transform("design-3", opts),
  bg: (opts: TTransformOpts = {}) => Color.transform("bg", opts),
  card: (opts: TTransformOpts = {}) => Color.transform("card", opts),
  fontcolor: (opts: TTransformOpts = {}) => Color.transform("color", opts),
  paper: (opts: TTransformOpts = {}) => Color.transform("bg", opts),
  background: (opts: TTransformOpts = {}) => Color.transform("bg", opts),
  border: (opts: TTransformOpts = {}) => Color.transform("border", opts),
  readonly: (opts: TTransformOpts = {}) => Color.transform("border", opts),
  currentColor: (opts: TTransformOpts = {}) => Color.transform("currentColor", opts),

  /* Resuelve todos los colores base del tema (token → CSS var resuelto). */
  getColors: () => ({ ...especiales, primary: resolveAny("primary"), info: resolveAny("info"), success: resolveAny("success"), warning: resolveAny("warning"), error: resolveAny("error"), danger: resolveAny("danger"), design1: resolveAny("design-1"), design2: resolveAny("design-2"), design3: resolveAny("design-3"), bg: resolveAny("bg"), card: resolveAny("card"), fontcolor: resolveAny("color"), border: resolveAny("border") }),

  /* Aplica mods. Acepta objeto `{ base: opts }`. */
  transform: (c: TColorDef | undefined, opts: TTransformOpts = {}): string => {
    const parsed = unwrapColorDef(c);
    if (!parsed) return "";
    const merged = { ...parsed.opts, ...opts };
    if (merged.mixColor) merged.mixColor = resolveAny(merged.mixColor);
    const resolved = resolveAny(parsed.base);
    let result = applyOpts(resolved, merged);
    if (opts.mixColor && opts.pmix !== undefined) result = `color-mix(in srgb, ${result}, ${resolveAny(opts.mixColor)} ${clamp(opts.pmix)}%)`;
    return result;
  },

  /* Mezcla dos colores. */
  mix: (c1: string, c2: string, p = 50): string => `color-mix(in srgb, ${resolveAny(c1)} ${clamp(p)}%, ${resolveAny(c2)})`,

  /* Sombra basada en elevación (0-100). */
  elevation: (p: number, opts: TElevationOpts = {}): string => {
    const { dx = 0, dy = 1, col, darkshadow = 1 } = opts;
    p = clamp(p);
    const dshadow = clamp(darkshadow, 0, 1);
    if (p === 0 || dshadow === 0) return "none";
    const f = p / 100;
    const ox = (f * 25 * dx).toFixed(2);
    const oy = (f * 25 * dy).toFixed(2);
    const b = (2.5 + f * 47.5).toFixed(2);
    const s = (f * -12).toFixed(2);
    const a = +((0.18 + Math.sqrt(f) * 0.12) * 0.7 * dshadow).toFixed(3);
    const c = col ? Color.transform(col, { alpha: Math.round(a * 100) }) : `rgb(0 0 0 / ${a})`;
    return `${ox}px ${oy}px ${b}px ${s}px ${c}`;
  },

  /* Contraste óptimo (blanco/negro) por luminancia. */
  getContrastColor: (c: TColorDef | undefined): string => {
    const resolved = resolveAny(Color.get(c) || (typeof c === "string" ? c : ""));
    return resolved ? `oklch(from ${resolved} calc((sign(0.7 - l) + 1) * 50%) 0 h / 1)` : "";
  },

  /* Opuesto al contraste óptimo. */
  getUncontrastColor: (c: TColorDef | undefined): string => {
    const resolved = resolveAny(Color.get(c) || (typeof c === "string" ? c : ""));
    return resolved ? `oklch(from ${resolved} calc(((sign(0.7 - l) * -1) + 1) * 50%) 0 h / 1)` : "";
  },
};

/* Atajos de color del tema (token resuelto). */
export const { primary, info, success, warning, error, danger, fontcolor } = Color.getColors();

/* Variante secundaria: matiz rotado 60° desde primary. */
export const secondary = Color.transform("primary", { huerotate: 60 });