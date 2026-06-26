export const BREAKPOINT_W = { xs: 0, sm: 480, md: 600, lg: 800, xl: 1200 };
export const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];

export function getBreakPoint(clientWidth = 0) {
  const w = clientWidth;
  if (w < BREAKPOINT_W.sm) return "xs";
  if (w <= BREAKPOINT_W.md) return "sm";
  if (w <= BREAKPOINT_W.lg) return "md";
  if (w < BREAKPOINT_W.xl) return "lg";
  return "xl";
}

export function getSizeFlags(sizew = "md") {
  const currentIdx = BREAKPOINTS.indexOf(sizew);
  const flags = { xs: false, sm: false, md: false, lg: false, xl: false };
  for (const bp of BREAKPOINTS) flags[bp] = BREAKPOINTS.indexOf(bp) <= currentIdx;
  return flags;
}

export function buildLerpw(clientWidth = 0) {
  return (b0 = "sm", b1 = "xl") => {
    const w0 = BREAKPOINT_W[b0];
    const w1 = BREAKPOINT_W[b1];
    return w1 === w0 ? 0 : (clientWidth - w0) / (w1 - w0);
  };
}

export function getSlotResume(sizew, clientWidth = 0) {
  return { sizew, boolszw: getSizeFlags(sizew), lerpw: buildLerpw(clientWidth) };
}

const RGX_OVERFLOW_SCROLL = /\boverflow(?:-x|-y)?\s*:\s*(auto|scroll)\b/i;

export function dataDebug(rest, segment) {
  if (!rest["data-element"] && !segment) return {};
  return { "data-element": [rest["data-element"], segment].flat(Infinity).filter(Boolean).join(" / ") };
}

function stylePartToString(part) {
  if (part == null || part === false) return "";
  if (typeof part === "object") {
    return Object.entries(part)
      .filter(([, v]) => v != null && v !== "")
      .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${v}`)
      .join("; ");
  }
  return String(part).trim();
}

function cssStringToStyle(str) {
  if (!str || typeof str !== "string") return {};
  const out = {};
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

export function hasOverflowStyle(style = "") {
  const s = typeof style === "string" ? style : stylePartToString(style);
  return RGX_OVERFLOW_SCROLL.test(s);
}

export function getScrollbarClass(cscroll = false, style) {
  return cscroll || hasOverflowStyle(style) ? "custom-scrollbar" : "";
}

const GAP_BY_SIZEW = { xs: "0.2rem", sm: "0.35rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
const JUSTIFY_ALIASES = { between: "space-between", around: "space-around", evenly: "space-evenly" };

export function resolveGap(gap, sizew = "md") {
  if (gap && String(gap).trim()) return String(gap).trim();
  return GAP_BY_SIZEW[sizew] ?? GAP_BY_SIZEW.md;
}

export function resolveJustify(justify) {
  if (!justify) return "";
  if (justify in JUSTIFY_ALIASES) return JUSTIFY_ALIASES[justify];
  return justify;
}

export function resolveGridTemplate(cells, cellsFit = false) {
  const value = typeof cells === "string" ? cells.trim() : typeof cells === "number" ? String(cells).trim() : "";
  if (!value) return "";
  if (/^\d+(\.\d+)?$/.test(value)) {
    return `repeat(${value}, ${cellsFit ? "max-content" : "minmax(0, 1fr)"})`;
  }
  return value;
}

/** Une fragmentos CSS (string u objeto) en un objeto `style` válido para React. */
export function joinStyle(...parts) {
  const css = parts.map(stylePartToString).filter(Boolean).join("; ");
  return css ? cssStringToStyle(css) : undefined;
}
