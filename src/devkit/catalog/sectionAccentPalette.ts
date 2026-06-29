/**
 * Paleta base por sección — colores puros (sin bow). El bow 80% se aplica
 * después en CSS/JS mezclando contra `--mimicus-color`, por lo que estos
 * valores son solo el "tinte" del que se tira. Saltos irregulares de hue
 * para diferenciar secciones contiguas.
 */
const VARIED_HUES = [210, 350, 30, 270, 160, 220, 12, 290, 140, 340, 50, 250];

export function buildSectionAccentPalette(count = 12): string[] {
  return Array.from({ length: count }, (_, i) => {
    const h = VARIED_HUES[i % VARIED_HUES.length];
    const s = 70 + (i % 3) * 4;
    const l = 48 + (i % 2) * 5;
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