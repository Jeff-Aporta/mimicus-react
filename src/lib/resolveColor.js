export const componentColors = [
  "primary", "design-1", "design-2", "design-3",
  "info", "success", "warning", "error", "danger",
  "color", "bg", "card", "border", "neutral",
  "inherit", "currentColor", "white", "black", "transparent",
];

const cssVar = (c) => `var(--mimicus-${c})`;

export function resolveColor(color, defaultColor = "") {
  color ||= defaultColor;
  if (!color) return "";
  if (["inherit", "currentColor", "white", "black", "transparent"].includes(color)) return color;
  if (color === "neutral") return `color-mix(in srgb, ${cssVar("color")} 62%, transparent)`;
  if (color === "bg") return cssVar("bg-primary");
  if (color === "card") return cssVar("bg-secondary");
  if (color === "border") return cssVar("b-color");
  if (color === "primary") return cssVar("design-1");
  if (componentColors.includes(color)) return cssVar(color);
  return color;
}

export function colorMix(c1, c2, p) {
  const r1 = resolveColor(c1);
  if (p <= 0) return r1;
  const r2 = resolveColor(c2);
  if (p >= 100) return r2;
  return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
}
