/**
 * fieldHydration — devkit
 * llm:  ./fieldHydration.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/fieldHydration.js
 * Hidrata definiciones de campos JSON (enumRef, iconMap, attrEmit, normalize) a objetos runtime.
 */
import { iconEnum, normalizeCssLength } from "../playgroundKit.js";

const ENUM_REFS = { iconEnum };
const ATTR_EMITS = {
  emptyToUndefined: (v) => (v === "" ? undefined : v),
  emptyToNull: (v) => (v === "" ? null : v),
  floorPositive: (v) => Math.max(0, Math.floor(Number(v))) || undefined,
  colorDefaultNeutral: (v) => (!v ? "neutral" : v),
};
const NORMALIZERS = { cssLength: normalizeCssLength };
const SIDE_ICON_MAP = {
  top: "mdi:arrow-up", right: "mdi:arrow-right", bottom: "mdi:arrow-down", left: "mdi:arrow-left", "": "mdi:block-helper",
};

export function hydrateField(raw) {
  const f = { ...raw };
  if (typeof f.enumRef === "string") { f.enumValue = ENUM_REFS[f.enumRef] ?? {}; delete f.enumRef; }
  if (typeof f.iconMap === "object" && f.iconMap !== null) {
    const iconMap = f.iconMap;
    f.getIcon = (val) => iconMap[String(val ?? "")] ?? iconMap[""] ?? "mdi:block-helper";
    delete f.iconMap;
  }
  if (f.iconMapRef === "drawerSide") {
    f.getIcon = (val) => SIDE_ICON_MAP[String(val ?? "")] ?? "mdi:block-helper";
    f.layout = f.layout ?? "sideCross";
    delete f.iconMapRef;
  }
  if (typeof f.attrEmit === "string") f.attrEmit = ATTR_EMITS[f.attrEmit];
  if (typeof f.normalize === "string") f.normalize = NORMALIZERS[f.normalize];
  if (f.kind === "select-enum-row" && Array.isArray(f.selects)) f.selects = f.selects.map(hydrateField);
  return f;
}

export function hydrateFields(fields) {
  return (fields ?? []).map(hydrateField);
}
