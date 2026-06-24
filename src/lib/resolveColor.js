const DirectColors = ["inherit", "currentColor", "white", "black", "transparent"];

export const componentColorsIS = [
  "primary", "design-1", "design-2", "design-3",
  "info", "success", "warning", "error", "danger",
  "color", "bg", "card", "border", "neutral",
  ...DirectColors,
];

const cssVarIs = (c) => `var(--is-${c})`;

export function resolveColor(color, defaultColor = "") {
  color ||= defaultColor;
  if (!color) return "";
  if (DirectColors.includes(color)) return color;
  if (color === "neutral") return `color-mix(in srgb, ${cssVarIs("color")} 62%, transparent)`;
  if (color === "bg") return cssVarIs("bg-primary");
  if (color === "card") return cssVarIs("bg-secondary");
  if (color === "border") return cssVarIs("b-color");
  if (color === "primary") return cssVarIs("design-1");
  if (componentColorsIS.includes(color)) return cssVarIs(color);
  return color;
}

export function colorMix(c1, c2, p) {
  const r1 = resolveColor(c1);
  if (p <= 0) return r1;
  const r2 = resolveColor(c2);
  if (p >= 100) return r2;
  return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
}
