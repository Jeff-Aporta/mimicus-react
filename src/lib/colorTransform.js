import { colorMix, resolveColor } from "./resolveColor.js";

export const mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);
export const mkUnbow = (color, percent = 0) => colorMix(color, `hsl(from ${resolveColor("color")} h s calc(100 - l))`, percent);

export function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
}
