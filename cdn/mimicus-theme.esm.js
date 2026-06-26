// src/theme/constants.js
var LUMINANCE_STORAGE_KEY = "theme-luminance";
var THEME_COLOR_STORAGE_KEY = "theme-color";
var DESIGN_SCHEME_STORAGE_KEY = "design-scheme";
var LEGACY_LUMINANCE_KEYS = ["color-theme", "THEME_PREFERENCE_KEY"];
var LEGACY_THEME_COLOR_MAP = {
  contapyme: "hues-dodgerblue",
  ocean: "oceano",
  emerald: "natural",
  sunset: "ambar",
  violet: "lavanda",
  rose: "cereza",
  slate: "grafito",
  mint: "menta",
  magenta: "fucsia"
};
var THEME_COLOR_OPTIONS = [
  { id: "hues-dodgerblue", label: "Dodger" },
  { id: "vulcano", label: "Vulcano" },
  { id: "natural", label: "Natural" },
  { id: "coral", label: "Coral" },
  { id: "oceano", label: "Oc\xE9ano" },
  { id: "lavanda", label: "Lavanda" },
  { id: "ambar", label: "\xC1mbar" },
  { id: "cereza", label: "Cereza" },
  { id: "grafito", label: "Grafito" },
  { id: "menta", label: "Menta" },
  { id: "indigo", label: "\xCDndigo" },
  { id: "tierra", label: "Tierra" },
  { id: "fucsia", label: "Fucsia" }
];
var DESIGN_SCHEME_OPTIONS = [
  { id: "mono", label: "Mono" },
  { id: "dual", label: "Dual" },
  { id: "triad", label: "Tr\xEDada" }
];
var LOOKNFEEL_STORAGE_KEY = "looknfeel";
var LOOKNFEEL_DEFAULT = "contapyme";
var NEON_LOOKNFEELS = ["neon-mono", "neon-dual", "neon-triad"];
var LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme" },
  { id: "neon-mono", label: "Neon mono" },
  { id: "neon-dual", label: "Neon dual" },
  { id: "neon-triad", label: "Neon tr\xEDada" }
];
var LOOKNFEEL_DESIGN_SCHEME = {
  contapyme: "triad",
  "neon-mono": "mono",
  "neon-dual": "dual",
  "neon-triad": "triad"
};
var LEGACY_LOOKNFEEL_MAP = {
  classic: "contapyme",
  "neon-glass": "neon-triad"
};
var LOOKNFEEL_IDS = LOOKNFEEL_OPTIONS.map((o) => o.id);
function isLuminance(value) {
  return value === "light" || value === "dark";
}
function isThemeColor(value) {
  return THEME_COLOR_OPTIONS.some((o) => o.id === value);
}
function isDesignScheme(value) {
  return DESIGN_SCHEME_OPTIONS.some((o) => o.id === value);
}
function normalizeDesignScheme(value) {
  return isDesignScheme(value) ? value : "mono";
}
function normalizeThemeColor(value) {
  if (isThemeColor(value)) return value;
  if (typeof value === "string" && LEGACY_THEME_COLOR_MAP[value]) return LEGACY_THEME_COLOR_MAP[value];
  return "hues-dodgerblue";
}
function isLooknfeel(value) {
  return typeof value === "string" && LOOKNFEEL_IDS.includes(value);
}
function normalizeLooknfeel(value) {
  if (isLooknfeel(value)) return value;
  if (typeof value === "string" && LEGACY_LOOKNFEEL_MAP[value]) return LEGACY_LOOKNFEEL_MAP[value];
  return LOOKNFEEL_DEFAULT;
}
function designSchemeForLooknfeel(value) {
  return LOOKNFEEL_DESIGN_SCHEME[value] ?? "mono";
}
function readLuminanceFromDom() {
  if (typeof document === "undefined") return "light";
  const v = document.documentElement.dataset.luminance;
  return isLuminance(v) ? v : "light";
}
function readThemeColorFromDom() {
  if (typeof document === "undefined") return "hues-dodgerblue";
  return normalizeThemeColor(document.documentElement.dataset.themeColor);
}
function readDesignSchemeFromDom() {
  if (typeof document === "undefined") return "mono";
  return normalizeDesignScheme(document.documentElement.dataset.designScheme);
}
function readLooknfeelFromDom() {
  if (typeof document === "undefined") return LOOKNFEEL_DEFAULT;
  return normalizeLooknfeel(document.documentElement.dataset.looknfeel);
}
function isNgVariant(value) {
  return typeof value === "string" && value.startsWith("ng-");
}
function ngBaseVariant(value) {
  return isNgVariant(value) ? value.slice(3) : value;
}
function normalizeVariant(variant, fallback = "solid") {
  if (variant == null || variant === "") return fallback;
  if (isNgVariant(variant)) return ngBaseVariant(variant);
  return variant;
}
function surfaceVariantAttrs(variant, fallback = "solid") {
  return { "data-variant": normalizeVariant(variant, fallback) };
}
function isGlassVariant(variant) {
  return normalizeVariant(variant, "") === "glass";
}

// src/theme/themeEngine.js
var state = {
  luminance: "light",
  themeColor: "hues-dodgerblue",
  designScheme: "mono"
};
var listeners = /* @__PURE__ */ new Set();
function notify() {
  const snap = getThemeState();
  listeners.forEach((fn) => {
    try {
      fn(snap);
    } catch {
    }
  });
}
function getThemeState() {
  return { ...state };
}
function subscribeTheme(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function readStoredLuminance() {
  if (typeof localStorage === "undefined") return "light";
  try {
    for (const key of LEGACY_LUMINANCE_KEYS) {
      const legacy = localStorage.getItem(key);
      if (legacy === "dark" || legacy === "light") return legacy;
    }
    const v = localStorage.getItem(LUMINANCE_STORAGE_KEY);
    if (isLuminance(v)) return v;
  } catch {
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}
function readStoredThemeColor() {
  if (typeof localStorage === "undefined") return "hues-dodgerblue";
  try {
    const v = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (v) return normalizeThemeColor(v);
  } catch {
  }
  return "hues-dodgerblue";
}
function readStoredDesignScheme() {
  if (typeof localStorage === "undefined") return "mono";
  try {
    const v = localStorage.getItem(DESIGN_SCHEME_STORAGE_KEY);
    if (isDesignScheme(v)) return v;
  } catch {
  }
  return "mono";
}
function syncLegacyDomClasses(root, l) {
  root.classList.toggle("dark", l === "dark");
  root.classList.toggle("light", l === "light");
}
function applyTheme(nextLuminance, nextThemeColor, nextDesignScheme = state.designScheme) {
  state = {
    luminance: nextLuminance,
    themeColor: nextThemeColor,
    designScheme: nextDesignScheme
  };
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.dataset.luminance = nextLuminance;
    root.dataset.themeColor = nextThemeColor;
    root.dataset.designScheme = nextDesignScheme;
    syncLegacyDomClasses(root, nextLuminance);
  }
  try {
    localStorage.setItem(LUMINANCE_STORAGE_KEY, nextLuminance);
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, nextThemeColor);
    localStorage.setItem(DESIGN_SCHEME_STORAGE_KEY, nextDesignScheme);
    for (const key of LEGACY_LUMINANCE_KEYS) {
      localStorage.setItem(key, nextLuminance);
    }
  } catch {
  }
  notify();
}
function setLuminance(value) {
  if (state.luminance === value && readLuminanceFromDom() === value) return;
  applyTheme(value, state.themeColor, state.designScheme);
}
function setThemeColor(value) {
  if (state.themeColor === value && readThemeColorFromDom() === value) return;
  applyTheme(state.luminance, value, state.designScheme);
}
function setDesignScheme(value) {
  if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
  applyTheme(state.luminance, state.themeColor, value);
}
function bootTheme() {
  applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
}

// src/theme/looknfeelEngine.js
var looknfeel = LOOKNFEEL_DEFAULT;
var listeners2 = /* @__PURE__ */ new Set();
function getLooknfeelState() {
  return looknfeel;
}
function subscribeLooknfeel(fn) {
  listeners2.add(fn);
  return () => listeners2.delete(fn);
}
function readStoredLooknfeel() {
  if (typeof localStorage === "undefined") return LOOKNFEEL_DEFAULT;
  try {
    return normalizeLooknfeel(localStorage.getItem(LOOKNFEEL_STORAGE_KEY));
  } catch {
    return LOOKNFEEL_DEFAULT;
  }
}
function applyLooknfeel(value) {
  looknfeel = value;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.looknfeel = value;
  }
  try {
    localStorage.setItem(LOOKNFEEL_STORAGE_KEY, value);
  } catch {
  }
  setDesignScheme(designSchemeForLooknfeel(value));
  listeners2.forEach((fn) => {
    try {
      fn(value);
    } catch {
    }
  });
}
function bootLooknfeel() {
  applyLooknfeel(readStoredLooknfeel());
}

// src/theme/ThemeProvider.jsx
import { useEffect, useState } from "react";
function useTheme() {
  const [theme, setTheme] = useState(() => getThemeState());
  useEffect(() => subscribeTheme(setTheme), []);
  return theme;
}
function useLooknfeel() {
  const [look, setLook] = useState(() => getLooknfeelState());
  useEffect(() => subscribeLooknfeel(setLook), []);
  return look;
}
function ThemeProvider({ children }) {
  useTheme();
  useLooknfeel();
  return children;
}

// src/islands/theme.js
function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}
export {
  DESIGN_SCHEME_OPTIONS,
  DESIGN_SCHEME_STORAGE_KEY,
  LEGACY_LOOKNFEEL_MAP,
  LEGACY_LUMINANCE_KEYS,
  LEGACY_THEME_COLOR_MAP,
  LOOKNFEEL_DEFAULT,
  LOOKNFEEL_DESIGN_SCHEME,
  LOOKNFEEL_OPTIONS,
  LOOKNFEEL_STORAGE_KEY,
  LUMINANCE_STORAGE_KEY,
  NEON_LOOKNFEELS,
  THEME_COLOR_OPTIONS,
  THEME_COLOR_STORAGE_KEY,
  ThemeProvider,
  applyLooknfeel,
  applyTheme,
  bootLooknfeel,
  bootMimicusUI,
  bootTheme,
  designSchemeForLooknfeel,
  getLooknfeelState,
  getThemeState,
  isDesignScheme,
  isGlassVariant,
  isLooknfeel,
  isLuminance,
  isNgVariant,
  isThemeColor,
  ngBaseVariant,
  normalizeDesignScheme,
  normalizeLooknfeel,
  normalizeThemeColor,
  normalizeVariant,
  readDesignSchemeFromDom,
  readLooknfeelFromDom,
  readLuminanceFromDom,
  readThemeColorFromDom,
  setDesignScheme,
  setLuminance,
  setThemeColor,
  subscribeLooknfeel,
  subscribeTheme,
  surfaceVariantAttrs
};
