// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * catalogSections — devkit
 * llm:  ./catalogSections.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/catalog/catalogSections.ts
 * Resolución de secciones del catálogo (orden, meta, label/desc/icon) leyendo de playgroundData() en runtime.
 */
import { playgroundData } from "../core/playgroundData.ts";
import { sectionColors } from "../shell/resolveShellConfig.ts";
import { sectionAccentByIndex, sectionAccentSlot } from "./sectionAccentPalette.ts";

function catalogDef() { return playgroundData().catalogMeta ?? {}; }
function sectionsDef() { return playgroundData().sectionsMeta ?? {}; }

export function sectionOrder() {
  return sectionsDef().order ?? Object.keys(catalogDef().sections ?? {});
}

export function sectionMeta() {
  return catalogDef().sections ?? sectionsDef().sections ?? {};
}

export function overviewMeta() {
  return sectionsDef().overview ?? {};
}

export function resolveItemSection(item) {
  const s = sectionsDef();
  return item.section ?? s.demoSection?.[item.id] ?? s.legacyCategory?.[item.category] ?? "other";
}

export function sectionLabel(sectionId) {
  return sectionMeta()[sectionId]?.label ?? sectionId;
}

export function sectionDescription(sectionId) {
  return sectionMeta()[sectionId]?.description ?? "";
}

export function sectionIcon(sectionId) {
  return sectionMeta()[sectionId]?.icon ?? "mdi:folder-outline";
}

export function sectionAccentIndex(sectionId) {
  const i = sectionOrder().indexOf(sectionId);
  return i >= 0 ? i : 0;
}

/** Color de acento (hsl/hex) — libre por sección, máximo contraste entre contiguas. */
export function sectionAccentColor(sectionId) {
  return sectionAccentByIndex(sectionAccentIndex(sectionId), sectionColors());
}

/** Slot estable para data-section-color (accent-0, accent-1…). */
export function sectionColorToken(sectionId) {
  return sectionAccentSlot(sectionAccentIndex(sectionId));
}

export function sectionsWithItems(items, filterFn = () => true) {
  return sectionOrder().filter((sid) => items.some((it) => resolveItemSection(it) === sid && filterFn(it)));
}

export function itemsInSection(items, sectionId, filterFn = () => true) {
  return items.filter((it) => resolveItemSection(it) === sectionId && filterFn(it));
}
