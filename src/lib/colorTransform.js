/**
 * Transformaciones de color CSS — reactivas a la paleta activa (`html[data-theme-color]`).
 * Paridad con ISP-Svelte-Playground color-transform.ts
 */
import { colorMix, resolveColor } from "./resolveColor.js";

/** @typedef {"primary"|"design-1"|"design-2"|"design-3"|"info"|"success"|"warning"|"error"|"danger"|"color"|"bg"|"card"|"border"|"neutral"} ComponentColor */

/** Mezcla con negro (sombra, pressed). */
export const mkDarken = (c, p = 0) => colorMix(c, "black", p);

/** Mezcla con blanco (hover, highlight). */
export const mkLighten = (c, p = 0) => colorMix(c, "white", p);

/** Mezcla con transparente (velos, soft). */
export const mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);

/** Invierte luminancia relativa al token (contraste complementario). */
export const mkInvertL = (c) => `hsl(from ${resolveColor(c)} h s calc(100 - l))`;

/** Tint hacia el color de texto de la paleta (`--mimicus-color`). */
export const mkBow = (color, percent = 0) => colorMix(color, "color", percent);

/** Tint hacia el inverso luminante del texto de paleta. */
export const mkUnbow = (color, percent = 0) => colorMix(color, mkInvertL("color"), percent);

/** Texto legible sobre un fondo dado (contraste automático OKLCH). */
export const bg2font = (c) => `oklch(from ${c} calc((sign(0.75 - l) + 1) / 2 * 100%) 0 h / 1)`;

/** Texto legible sobre fondo semitransparente del acento. */
export const bgTransparent2font = (c, alphaPct, bg) => bg2font(colorMix(bg, c, 100 - alphaPct));

/** Acento Windows Luna — OKLCH con piso de croma. */
export const mkWinChromeAccent = (color = "primary") =>
  `oklch(from ${resolveColor(color)} l calc(min(0.26, max(c, 0.14) + 0.05)) h)`;

/** Rampa OKLCH: misma croma/matiz, luminancia desplazada. */
export const mkOklchShiftL = (c, delta, min = 0.06, max = 0.98) =>
  `oklch(from ${resolveColor(c)} calc(clamp(${min}, l + ${delta}, ${max})) c h)`;

/** Fondo soft del token semántico. */
export const mkSoftBg = (color, veilPct = 88) => mkAlpha(color, veilPct);

/** Borde derivado del token. */
export function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
}

/** Título / heading: tinte progresivo hacia `--mimicus-color`. */
export const mkHeadingColor = (color = "primary", bowPct) => mkBow(color, bowPct);

/** Establece `--ct-base` para utilidades CSS (`color-transform.css`). */
export function paletteBaseStyle(color = "primary") {
  return { "--ct-base": resolveColor(color) };
}

/** Superficie alert/tint: fondo, texto y borde coherentes con la paleta. */
export function paletteSurfaceTint(color, opts = {}) {
  const accent = resolveColor(color);
  const bg = colorMix(resolveColor(opts.surface ?? "card"), color, opts.cardMix ?? 15);
  const fg = colorMix(bg2font(bg), color, opts.fgMix ?? 40);
  const border = colorMix(bg, color, opts.borderMix ?? 35);
  return { accent, bg, fg, border };
}

/** Une reglas inline de transformación de paleta. */
export function joinColorStyle(...parts) {
  return parts.filter(Boolean).join("; ");
}

export function applyColorTransform(base, kind, amount = 0) {
  switch (kind) {
    case "darken": return mkDarken(base, amount);
    case "lighten": return mkLighten(base, amount);
    case "alpha": return mkAlpha(base, amount);
    case "bow": return mkBow(base, amount);
    case "unbow": return mkUnbow(base, amount);
    case "invertL": return mkInvertL(base);
    case "bg2font": return bg2font(resolveColor(base));
    default: return resolveColor(base);
  }
}

/** Estados interactivos estándar (hover / active) sobre una custom property. */
export function paletteStateVarRules(cssVarName) {
  const ref = cssVarName.startsWith("var(") ? cssVarName : `var(${cssVarName})`;
  return [`${cssVarName}-hvr: ${mkLighten(ref, 15)}`, `${cssVarName}-ctv: ${mkDarken(ref, 20)}`];
}
