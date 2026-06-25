import { mergeSurfaceStyle } from "../../lib/surfaceColor.js";
import { resolveColor } from "../../lib/resolveColor.js";

export const TYPOGRAPHY_VARIANTS = {
  h1: { tag: "h1", fontSize: "2.125rem", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" },
  h2: { tag: "h2", fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.015em" },
  h3: { tag: "h3", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
  h4: { tag: "h4", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35 },
  h5: { tag: "h5", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 },
  h6: { tag: "h6", fontSize: "1rem", fontWeight: 600, lineHeight: 1.45 },
  body1: { tag: "p", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
  body2: { tag: "p", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
  caption: { tag: "span", fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.45 },
  overline: { tag: "span", fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.5, letterSpacing: "0.08em", textTransform: "uppercase" },
};

export function levelToVariant(level) {
  const n = Math.round(Number(level)) || 1;
  return `h${Math.min(6, Math.max(1, n))}`;
}

export function buildTypographyStyle({ color, variant, style, lines, ellipsis }) {
  const v = TYPOGRAPHY_VARIANTS[variant] ?? TYPOGRAPHY_VARIANTS.body1;
  const surface = mergeSurfaceStyle(color, { style });
  const clamp = (lines > 0 || ellipsis) && lines !== 0
    ? {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: Math.max(1, Math.round(Number(lines)) || 1),
        overflow: "hidden",
        textOverflow: "ellipsis",
      }
    : {};
  return {
    ...surface,
    style: {
      fontSize: v.fontSize,
      fontWeight: v.fontWeight,
      lineHeight: v.lineHeight,
      letterSpacing: v.letterSpacing,
      textTransform: v.textTransform,
      ...(color ? { color: resolveColor(color) } : {}),
      margin: 0,
      ...clamp,
      ...(surface.style ?? {}),
      ...(style && typeof style === "object" ? style : {}),
    },
  };
}

export function typographyClass(parts) {
  return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
}
