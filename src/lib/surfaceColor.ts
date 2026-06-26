import type { CSSProperties } from "react";
import { componentColors, resolveColor } from "./resolveColor.ts";

// Permisivo-pero-real: salida de estilos inline = CSSProperties React + custom properties CSS.
type StyleMap = CSSProperties & { [customProp: `--${string}`]: string | number | undefined };
// Permisivo: acepta `{ style, variant, ... }` o un objeto de estilo suelto (callers pasan ambos).
type SurfaceOpts = { style?: CSSProperties } & Record<string, any>;
type SurfaceAttrs = { "data-surface-color"?: string; style?: StyleMap };

const CSS_SURFACE_COLORS = new Set(
  componentColors.filter((c) => !["inherit", "currentColor", "white", "black", "transparent", "neutral", "bg", "card", "border", "color"].includes(c)),
);

export function surfaceColorAttrs(color: string | undefined, opts: SurfaceOpts = {}): SurfaceAttrs {
  if (!color) return {};
  if (color === "currentColor") return {};
  if (color === "neutral") return { "data-surface-color": "neutral" };
  if (CSS_SURFACE_COLORS.has(color)) return { "data-surface-color": color };
  return { style: { "--surface-accent": resolveColor(color) } };
}

export function mergeSurfaceStyle(color: string | undefined, opts: SurfaceOpts = {}): SurfaceAttrs {
  const colorAttrs = surfaceColorAttrs(color, opts);
  const out: SurfaceAttrs = {};
  if (colorAttrs["data-surface-color"]) out["data-surface-color"] = colorAttrs["data-surface-color"];
  const merged = { ...(colorAttrs.style || {}), ...(opts.style && typeof opts.style === "object" ? opts.style : {}) };
  if (Object.keys(merged).length) out.style = merged;
  return out;
}
