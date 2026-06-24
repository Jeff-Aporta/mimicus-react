/** @typedef {"light"|"dark"} Luminance */
/** @typedef {"hues-dodgerblue"|"vulcano"|"natural"|"coral"|"oceano"|"lavanda"|"ambar"|"cereza"|"grafito"|"menta"|"indigo"|"tierra"|"fucsia"} ThemeColor */
/** @typedef {"mono"|"dual"|"triad"} DesignScheme */

export const LUMINANCE_STORAGE_KEY = "theme-luminance";
export const THEME_COLOR_STORAGE_KEY = "theme-color";
export const DESIGN_SCHEME_STORAGE_KEY = "design-scheme";
export const LEGACY_LUMINANCE_KEYS = ["color-theme", "THEME_PREFERENCE_KEY"];

export const LEGACY_THEME_COLOR_MAP = {
  contapyme: "hues-dodgerblue",
  ocean: "oceano",
  emerald: "natural",
  sunset: "ambar",
  violet: "lavanda",
  rose: "cereza",
  slate: "grafito",
  mint: "menta",
  magenta: "fucsia",
};

export const THEME_COLOR_OPTIONS = [
  { id: "hues-dodgerblue", label: "Dodger" },
  { id: "vulcano", label: "Vulcano" },
  { id: "natural", label: "Natural" },
  { id: "coral", label: "Coral" },
  { id: "oceano", label: "Océano" },
  { id: "lavanda", label: "Lavanda" },
  { id: "ambar", label: "Ámbar" },
  { id: "cereza", label: "Cereza" },
  { id: "grafito", label: "Grafito" },
  { id: "menta", label: "Menta" },
  { id: "indigo", label: "Índigo" },
  { id: "tierra", label: "Tierra" },
  { id: "fucsia", label: "Fucsia" },
];

export const DESIGN_SCHEME_OPTIONS = [
  { id: "mono", label: "Mono" },
  { id: "dual", label: "Dual" },
  { id: "triad", label: "Tríada" },
];

export const LOOKNFEEL_STORAGE_KEY = "looknfeel";
export const LOOKNFEEL_DEFAULT = "contapyme";

export const NEON_LOOKNFEELS = ["neon-mono", "neon-dual", "neon-triad"];

export const LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme" },
  { id: "neon-mono", label: "Neon mono" },
  { id: "neon-dual", label: "Neon dual" },
  { id: "neon-triad", label: "Neon tríada" },
  { id: "mac-liquidglass", label: "Mac glass" },
  { id: "lab-dual", label: "Lab dual" },
  { id: "lab-triad", label: "Lab tríada" },
  { id: "w98", label: "Windows 98" },
  { id: "wxp", label: "Windows XP" },
  { id: "wvista", label: "Windows Vista" },
];

export const LOOKNFEEL_DESIGN_SCHEME = {
  contapyme: "triad",
  "neon-mono": "mono",
  "neon-dual": "dual",
  "neon-triad": "triad",
  "mac-liquidglass": "dual",
  w98: "mono",
  wxp: "mono",
  wvista: "mono",
  "lab-dual": "dual",
  "lab-triad": "triad",
};

export const LEGACY_LOOKNFEEL_MAP = {
  classic: "contapyme",
  "neon-glass": "neon-triad",
};

const LOOKNFEEL_IDS = LOOKNFEEL_OPTIONS.map((o) => o.id);

export function isLuminance(value) {
  return value === "light" || value === "dark";
}

export function isThemeColor(value) {
  return THEME_COLOR_OPTIONS.some((o) => o.id === value);
}

export function isDesignScheme(value) {
  return DESIGN_SCHEME_OPTIONS.some((o) => o.id === value);
}

export function normalizeDesignScheme(value) {
  return isDesignScheme(value) ? value : "mono";
}

export function normalizeThemeColor(value) {
  if (isThemeColor(value)) return value;
  if (typeof value === "string" && LEGACY_THEME_COLOR_MAP[value]) return LEGACY_THEME_COLOR_MAP[value];
  return "hues-dodgerblue";
}

export function isLooknfeel(value) {
  return typeof value === "string" && LOOKNFEEL_IDS.includes(value);
}

export function normalizeLooknfeel(value) {
  if (isLooknfeel(value)) return value;
  if (typeof value === "string" && LEGACY_LOOKNFEEL_MAP[value]) return LEGACY_LOOKNFEEL_MAP[value];
  return LOOKNFEEL_DEFAULT;
}

export function designSchemeForLooknfeel(value) {
  return LOOKNFEEL_DESIGN_SCHEME[value] ?? "mono";
}

export function readLuminanceFromDom() {
  if (typeof document === "undefined") return "light";
  const v = document.documentElement.dataset.luminance;
  return isLuminance(v) ? v : "light";
}

export function readThemeColorFromDom() {
  if (typeof document === "undefined") return "hues-dodgerblue";
  return normalizeThemeColor(document.documentElement.dataset.themeColor);
}

export function readDesignSchemeFromDom() {
  if (typeof document === "undefined") return "mono";
  return normalizeDesignScheme(document.documentElement.dataset.designScheme);
}

export function readLooknfeelFromDom() {
  if (typeof document === "undefined") return LOOKNFEEL_DEFAULT;
  return normalizeLooknfeel(document.documentElement.dataset.looknfeel);
}

export function isNgVariant(value) {
  return typeof value === "string" && value.startsWith("ng-");
}

export function ngBaseVariant(value) {
  return isNgVariant(value) ? value.slice(3) : value;
}

export function normalizeVariant(variant, fallback = "solid") {
  if (variant == null || variant === "") return fallback;
  if (isNgVariant(variant)) return ngBaseVariant(variant);
  return variant;
}

export function surfaceVariantAttrs(variant, fallback = "solid") {
  return { "data-variant": normalizeVariant(variant, fallback) };
}

export function isGlassVariant(variant) {
  return normalizeVariant(variant, "") === "glass";
}
