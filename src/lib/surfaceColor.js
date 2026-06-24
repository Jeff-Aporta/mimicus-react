import { componentColors, resolveColor } from "./resolveColor.js";

const CSS_SURFACE_COLORS = new Set(
  componentColors.filter((c) => !["inherit", "currentColor", "white", "black", "transparent", "neutral", "bg", "card", "border", "color"].includes(c)),
);

export function surfaceColorAttrs(color, opts = {}) {
  if (!color) return {};
  if (color === "currentColor") return {};
  if (color === "neutral") return { "data-surface-color": "neutral" };
  if (CSS_SURFACE_COLORS.has(color)) return { "data-surface-color": color };
  return { style: { "--surface-accent": resolveColor(color) } };
}

export function mergeSurfaceStyle(color, opts = {}) {
  const colorAttrs = surfaceColorAttrs(color, opts);
  const out = {};
  if (colorAttrs["data-surface-color"]) out["data-surface-color"] = colorAttrs["data-surface-color"];
  const merged = { ...(colorAttrs.style || {}), ...(opts.style && typeof opts.style === "object" ? opts.style : {}) };
  if (Object.keys(merged).length) out.style = merged;
  return out;
}
