import { colorMix, resolveColor } from "./resolveColor.ts";

const px = (n: number): string => `${n.toFixed(2)}px`;
const clamp01 = (n: number): number => Math.max(0, Math.min(1, n));
const rgba = (r: number, g: number, b: number, a: number): string => `rgba(${r},${g},${b},${a.toFixed(4)})`;

const boxShadowLayer = (inset: boolean, ox: number, oy: number, blur: number, spread: number, color: string): string =>
  `${inset ? "inset " : ""}${px(ox)} ${px(oy)} ${px(blur)} ${px(spread)} ${color}`;

function insetSigns(angleDeg: number): [number, number] {
  const known: Record<number, [number, number]> = { 0: [-1, 0], 90: [0, 1], 180: [1, 0], 270: [0, -1] };
  const preset = known[angleDeg];
  if (preset) return preset;
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = -Math.sin(rad);
  if (Math.abs(cos) < 1e-15 && Math.abs(sin) < 1e-15) return [-1, -1];
  let sx = -Math.sign(cos);
  let sy = -Math.sign(sin);
  if (sx === 0) sx = -Math.sign(sin) || -1;
  if (sy === 0) sy = -Math.sign(cos) || -1;
  return [sx, sy];
}

function decodeRelieve(n: number): { percent: number; angleIndex: number; elevation: number } {
  const packed = Math.floor(Number(n)) || 0;
  const percent = Math.min(100, Math.max(0, packed & 127));
  let angleIndex = (packed >> 7) & 15;
  if (angleIndex > 8) angleIndex = 0;
  return {
    percent,
    angleIndex,
    elevation: (packed >> 11) !== 0 ? Math.min(100, Math.max(0, (packed >> 11) & 127)) : 10,
  };
}

export function cardShadow(vrnt: string, rlv: number | string): string | undefined {
  if (vrnt === "flat") return undefined;
  const { percent, angleIndex, elevation } = decodeRelieve(Number(rlv) || 0);
  const angleDeg = angleIndex <= 0 || angleIndex > 8 ? 320 : (angleIndex - 1) * 45;
  const layers: string[] = [];
  if (elevation > 0) {
    const t = clamp01(elevation / 100);
    const rad = ((angleIndex > 1 ? (angleDeg + 180) % 360 : angleDeg) * Math.PI) / 180;
    const dist = t * 24;
    layers.push(boxShadowLayer(false, dist * Math.cos(rad), -dist * Math.sin(rad), 2 + t * 15, t * 3, colorMix(rgba(0, 0, 0, 1), "transparent", 95 - 10 * t)));
  }
  const relief = percent - 50;
  if (relief !== 0) {
    const t = Math.min(1, Math.abs(relief) / 50);
    const curve = Math.pow(t, 0.7);
    const maxInset = 6 * 0.8;
    const insetLen = curve * maxInset;
    const blur = Math.max(0.5, (1 - curve) * maxInset);
    const concave = relief < 0;
    const strength = concave ? Math.min(2 * t * 0.7, 0.1) * 0.6 : Math.min(t * 0.7, 0.05);
    const light = rgba(255, 255, 255, clamp01(strength * (concave ? 0.3 : 1)));
    const dark = rgba(0, 0, 0, (concave ? Math.min(strength * 2.5 * 1.7, 1) : strength) * 0.5);
    const spread = (concave ? Math.max(blur * 2, 2) : blur) + 3 * clamp01((percent - 50) / 50);
    const [sx, sy] = insetSigns(angleDeg);
    layers.push(boxShadowLayer(true, sx * insetLen, sy * insetLen, relief > 0 ? spread : blur, 0, relief > 0 ? light : dark));
    layers.push(boxShadowLayer(true, -sx * insetLen, -sy * insetLen, relief > 0 ? blur : spread, 0, relief > 0 ? dark : light));
  }
  return layers.length > 0 ? layers.join(", ") : undefined;
}

export function cardBg(vrnt: string, rlv: number | string, clr: string): string {
  if (!["solid", "onion", "flat"].includes(String(vrnt))) return "";
  const { percent } = decodeRelieve(Number(rlv) || 0);
  const onion = vrnt === "onion";
  if (percent <= 50) {
    const t = (50 - percent) / 50;
    return colorMix(colorMix(onion ? "transparent" : clr, resolveColor("bg"), 50 * t), "black", 3 * t);
  }
  return colorMix(onion ? "transparent" : clr, "white", 5 * ((percent - 50) / 50));
}
