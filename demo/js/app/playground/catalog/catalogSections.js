import catalogDef from "../../../../config/catalog.json";
import sectionsDef from "../../../../config/catalog-sections.json";

export const sectionOrder = sectionsDef.order ?? Object.keys(catalogDef.sections ?? {});
export const sectionMeta = catalogDef.sections ?? sectionsDef.sections ?? {};
export const overviewMeta = sectionsDef.overview ?? {};

export function resolveItemSection(item) {
  return item.section ?? sectionsDef.demoSection?.[item.id] ?? sectionsDef.legacyCategory?.[item.category] ?? "other";
}

export function sectionLabel(sectionId) {
  return sectionMeta[sectionId]?.label ?? sectionId;
}

export function sectionDescription(sectionId) {
  return sectionMeta[sectionId]?.description ?? "";
}

export function sectionIcon(sectionId) {
  return sectionMeta[sectionId]?.icon ?? "mdi:folder-outline";
}

export function sectionsWithItems(items, filterFn = () => true) {
  return sectionOrder.filter((sid) => items.some((it) => resolveItemSection(it) === sid && filterFn(it)));
}

export function itemsInSection(items, sectionId, filterFn = () => true) {
  return items.filter((it) => resolveItemSection(it) === sectionId && filterFn(it));
}
