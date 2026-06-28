/**
 * Paleta de acentos por sección del catálogo — tonos libres espaciados en la rueda
 * para que dos secciones contiguas contrasten claramente.
 */
const GOLDEN_HUE = 137.508;

export function buildSectionAccentPalette(count = 12): string[] {
  return Array.from({ length: count }, (_, i) => {
    const h = Math.round((i * GOLDEN_HUE) % 360);
    const s = 70 + (i % 3) * 5;
    const l = 50 + (i % 2) * 6;
    return `hsl(${h} ${s}% ${l}%)`;
  });
}

export const DEFAULT_SECTION_ACCENT_PALETTE = buildSectionAccentPalette(12);

export function sectionAccentByIndex(index: number, palette = DEFAULT_SECTION_ACCENT_PALETTE): string {
  if (index < 0) return palette[0];
  return palette[index % palette.length];
}

export function sectionAccentSlot(index: number): string {
  return `accent-${index >= 0 ? index : 0}`;
}
