// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * fieldHydration — devkit
 * llm:  ./fieldHydration.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/fieldHydration.ts
 * Hidrata definiciones de campos JSON (enumRef, iconMap, attrEmit, normalize) a objetos runtime.
 */
import { iconEnum, normalizeCssLength } from "../playgroundKit.ts";

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
const CARDINAL_PLACEMENT_KEYS = new Set(["placement", "side"]);
const CARDINAL_PLACEMENT_VALUES = new Set(["top", "bottom", "left", "right"]);
const CARDINAL_PLACEMENT_LABELS = { top: "Top", bottom: "Bottom", left: "Left", right: "Right" };

function enumValueToOptions(enumValue) {
  const out = {};
  for (const [lbl, val] of Object.entries(enumValue ?? {})) {
    const key = CARDINAL_PLACEMENT_LABELS[val] ?? lbl;
    out[key] = val;
  }
  return out;
}

function isCardinalPlacementField(f) {
  if (!CARDINAL_PLACEMENT_KEYS.has(String(f.key ?? ""))) return false;
  const vals = Object.values(f.enumValue ?? f.options ?? {});
  return vals.length === 4 && vals.every((v) => CARDINAL_PLACEMENT_VALUES.has(String(v)));
}

export function hydrateField(raw) {
  const f = { ...raw };
  if (typeof f.enumRef === "string") { f.enumValue = ENUM_REFS[f.enumRef] ?? {}; delete f.enumRef; }
  if (f.kind === "select-enum" && isCardinalPlacementField(f)) {
    f.kind = "palette";
    f.layout = "sideCross";
    f.iconMapRef = "drawerSide";
    f.options = enumValueToOptions(f.enumValue);
    f.accent = f.accent ?? "primary";
    delete f.enumValue;
  }
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
