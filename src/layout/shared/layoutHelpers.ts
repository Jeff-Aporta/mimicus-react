import type { CSSProperties } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export const BREAKPOINT_W: Record<Breakpoint, number> = { xs: 0, sm: 480, md: 600, lg: 800, xl: 1200 };
export const BREAKPOINTS: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

export type SizeFlags = Record<Breakpoint, boolean>;
// Permisivo-real: los callers pasan strings sueltos como breakpoint.
export type Lerpw = (b0?: string, b1?: string) => number;

export interface SlotResume {
  sizew: string;
  boolszw: SizeFlags;
  lerpw: Lerpw;
  width: number;
}

export function getBreakPoint(clientWidth = 0): Breakpoint {
  const w = clientWidth;
  if (w < BREAKPOINT_W.sm) return "xs";
  if (w <= BREAKPOINT_W.md) return "sm";
  if (w <= BREAKPOINT_W.lg) return "md";
  if (w < BREAKPOINT_W.xl) return "lg";
  return "xl";
}

export function getSizeFlags(sizew: string = "md"): SizeFlags {
  const currentIdx = BREAKPOINTS.indexOf(sizew as Breakpoint);
  const flags: SizeFlags = { xs: false, sm: false, md: false, lg: false, xl: false };
  for (const bp of BREAKPOINTS) flags[bp] = BREAKPOINTS.indexOf(bp) <= currentIdx;
  return flags;
}

export function buildLerpw(clientWidth = 0): Lerpw {
  return (b0: string = "sm", b1: string = "xl") => {
    const w0 = BREAKPOINT_W[b0 as Breakpoint];
    const w1 = BREAKPOINT_W[b1 as Breakpoint];
    return w1 === w0 ? 0 : (clientWidth - w0) / (w1 - w0);
  };
}

export function getSlotResume(sizew: string, clientWidth = 0): SlotResume {
  return { sizew, boolszw: getSizeFlags(sizew), lerpw: buildLerpw(clientWidth), width: clientWidth };
}

const RGX_OVERFLOW_SCROLL = /\boverflow(?:-x|-y)?\s*:\s*(auto|scroll)\b/i;

// Permisivo: los callers reenvían el objeto completo de props.
type DataElementRest = Record<string, any>;

export function dataDebug(
  rest: DataElementRest,
  segment: unknown,
): { "data-element"?: string } {
  if (!rest["data-element"] && !segment) return {};
  return { "data-element": [rest["data-element"], segment].flat(Infinity).filter(Boolean).join(" / ") };
}

// Permisivo-real: acepta string, objeto de estilo (CSSProperties) o falsy.
type StylePart = string | number | false | null | undefined | CSSProperties | Record<string, unknown>;

function stylePartToString(part: StylePart): string {
  if (part == null || part === false) return "";
  if (typeof part === "object") {
    return Object.entries(part)
      .filter(([, v]) => v != null && v !== "")
      .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${v}`)
      .join("; ");
  }
  return String(part).trim();
}

function cssStringToStyle(str: string): Record<string, string> {
  if (!str || typeof str !== "string") return {};
  const out: Record<string, string> = {};
  for (const part of str.split(";")) {
    const idx = part.indexOf(":");
    if (idx < 1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) continue;
    out[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  }
  return out;
}

export function hasOverflowStyle(style: StylePart = ""): boolean {
  const s = typeof style === "string" ? style : stylePartToString(style);
  return RGX_OVERFLOW_SCROLL.test(s);
}

export function getScrollbarClass(cscroll = false, style?: StylePart): string {
  return cscroll || hasOverflowStyle(style) ? "custom-scrollbar" : "";
}

const GAP_BY_SIZEW: Record<string, string> = { xs: "0.2rem", sm: "0.35rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
const JUSTIFY_ALIASES: Record<string, string> = { between: "space-between", around: "space-around", evenly: "space-evenly" };

export function resolveGap(gap: string | number | null | undefined, sizew: string = "md"): string {
  if (gap && String(gap).trim()) return String(gap).trim();
  return GAP_BY_SIZEW[sizew] ?? GAP_BY_SIZEW.md;
}

export function resolveJustify(justify: string | null | undefined): string {
  if (!justify) return "";
  if (justify in JUSTIFY_ALIASES) return JUSTIFY_ALIASES[justify];
  return justify;
}

export function resolveGridTemplate(cells: string | number | null | undefined, cellsFit = false): string {
  const value = typeof cells === "string" ? cells.trim() : typeof cells === "number" ? String(cells).trim() : "";
  if (!value) return "";
  if (/^\d+(\.\d+)?$/.test(value)) {
    return `repeat(${value}, ${cellsFit ? "max-content" : "minmax(0, 1fr)"})`;
  }
  return value;
}

/** Une fragmentos CSS (string u objeto) en un objeto `style` válido para React. */
export function joinStyle(...parts: StylePart[]): CSSProperties | undefined {
  const css = parts.map(stylePartToString).filter(Boolean).join("; ");
  return css ? (cssStringToStyle(css) as CSSProperties) : undefined;
}
