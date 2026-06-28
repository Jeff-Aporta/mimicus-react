// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * resolveShellConfig — devkit
 * llm:  ./resolveShellConfig.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/resolveShellConfig.ts
 * Accesores a la config del shell (panel, storage, colores de sección) leyendo de playgroundData().
 */
import { playgroundData } from "../core/playgroundData.ts";
import { DEFAULT_SECTION_ACCENT_PALETTE } from "../catalog/sectionAccentPalette.ts";

export function shellConfig() {
  return playgroundData().shellConfig ?? {};
}

export function panelSizePx(open) {
  const s = shellConfig().panel?.size ?? {};
  const n = open ? s.expanded : s.collapsed;
  return Number(n) || (open ? 260 : 52);
}

export function panelSizeCss(open) {
  const s = shellConfig().panel?.size ?? {};
  const unit = s.unit || "px";
  return `${panelSizePx(open)}${unit}`;
}

export function panelStorageKey() {
  return shellConfig().panel?.storageKey || "mimicus:sidebarOpen";
}

export function sectionColors() {
  const custom = shellConfig().theme?.sectionColors;
  if (Array.isArray(custom) && custom.length) return custom;
  return DEFAULT_SECTION_ACCENT_PALETTE;
}
