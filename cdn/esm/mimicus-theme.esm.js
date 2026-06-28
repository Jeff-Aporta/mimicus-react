// src/theme/constants.ts
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
  { id: "hues-dodgerblue", label: "Dodger", icon: "mdi:palette-swatch" },
  { id: "vulcano", label: "Vulcano", icon: "mdi:fire" },
  { id: "natural", label: "Natural", icon: "mdi:leaf" },
  { id: "coral", label: "Coral", icon: "mdi:flower-tulip" },
  { id: "oceano", label: "Oc\xE9ano", icon: "mdi:waves" },
  { id: "lavanda", label: "Lavanda", icon: "mdi:flower" },
  { id: "ambar", label: "\xC1mbar", icon: "mdi:weather-sunny" },
  { id: "cereza", label: "Cereza", icon: "mdi:fruit-cherries" },
  { id: "grafito", label: "Grafito", icon: "mdi:square" },
  { id: "menta", label: "Menta", icon: "mdi:sprout" },
  { id: "indigo", label: "\xCDndigo", icon: "mdi:moon-waning-crescent" },
  { id: "tierra", label: "Tierra", icon: "mdi:terrain" },
  { id: "fucsia", label: "Fucsia", icon: "mdi:star-four-points" }
];
var DESIGN_SCHEME_OPTIONS = [
  { id: "mono", label: "Mono", icon: "mdi:circle" },
  { id: "dual", label: "Dual", icon: "mdi:circle-half-full" },
  { id: "triad", label: "Tr\xEDada", icon: "mdi:triangle-outline" }
];
var THEME_COLOR_DESIGN_SCHEME = {
  "hues-dodgerblue": "triad",
  vulcano: "dual",
  natural: "triad",
  coral: "triad",
  oceano: "dual",
  lavanda: "triad",
  ambar: "dual",
  cereza: "triad",
  grafito: "mono",
  menta: "mono",
  indigo: "dual",
  tierra: "dual",
  fucsia: "triad"
};
var LOOKNFEEL_STORAGE_KEY = "looknfeel";
var LOOKNFEEL_DEFAULT = "contapyme";
var NEON_LOOKNFEELS = ["neon"];
var LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme", icon: "mdi:office-building" },
  { id: "neon", label: "Neon", icon: "mdi:lightbulb-on-outline" }
];
var LEGACY_LOOKNFEEL_MAP = {
  classic: "contapyme",
  "neon-glass": "neon",
  "neon-mono": "neon",
  "neon-dual": "neon",
  "neon-triad": "neon"
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
function designSchemeForThemeColor(value) {
  return THEME_COLOR_DESIGN_SCHEME[value] ?? "mono";
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
  if (isNgVariant(variant)) return variant.slice(3);
  return variant;
}
function surfaceVariantAttrs(variant, fallback = "solid") {
  return { "data-variant": normalizeVariant(variant, fallback) };
}
function isGlassVariant(variant) {
  return normalizeVariant(variant, "") === "glass";
}

// src/theme/themeEngine.ts
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
  return () => {
    listeners.delete(fn);
  };
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
  const scheme = designSchemeForThemeColor(value);
  applyTheme(state.luminance, value, scheme);
}
function setDesignScheme(value) {
  if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
  applyTheme(state.luminance, state.themeColor, value);
}
function bootTheme() {
  applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
}

// src/theme/looknfeelEngine.ts
var looknfeel = LOOKNFEEL_DEFAULT;
var listeners2 = /* @__PURE__ */ new Set();
function getLooknfeelState() {
  return looknfeel;
}
function subscribeLooknfeel(fn) {
  listeners2.add(fn);
  return () => {
    listeners2.delete(fn);
  };
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

// src/theme/ThemeProvider.tsx
import { useEffect, useState } from "react";
function useTheme() {
  const [theme, setTheme] = useState(() => getThemeState());
  useEffect(() => {
    const off = subscribeTheme(setTheme);
    return () => {
      off();
    };
  }, []);
  return theme;
}
function useLooknfeel() {
  const [look, setLook] = useState(() => getLooknfeelState());
  useEffect(() => {
    const off = subscribeLooknfeel(setLook);
    return () => {
      off();
    };
  }, []);
  return look;
}
function ThemeProvider({ children }) {
  useTheme();
  useLooknfeel();
  return children;
}

// src/islands/category/theme.ts
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
  LOOKNFEEL_OPTIONS,
  LOOKNFEEL_STORAGE_KEY,
  LUMINANCE_STORAGE_KEY,
  NEON_LOOKNFEELS,
  THEME_COLOR_DESIGN_SCHEME,
  THEME_COLOR_OPTIONS,
  THEME_COLOR_STORAGE_KEY,
  ThemeProvider,
  applyLooknfeel,
  applyTheme,
  bootLooknfeel,
  bootMimicusUI,
  bootTheme,
  designSchemeForThemeColor,
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
