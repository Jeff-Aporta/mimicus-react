// src/theme/palette-catalog.json
var palette_catalog_default = [
  {
    id: "grafito",
    label: "Grafito",
    icon: "mdi:square",
    scheme: "mono",
    note: "gris pizarra fr\xEDo",
    aliases: []
  },
  {
    id: "menta",
    label: "Menta",
    icon: "mdi:sprout",
    scheme: "mono",
    note: "verde menta / agua fresca",
    aliases: []
  },
  {
    id: "vulcano",
    label: "Vulcano",
    icon: "mdi:fire",
    scheme: "mono",
    note: "grises volc\xE1nicos",
    aliases: []
  },
  {
    id: "carbon",
    label: "Carb\xF3n",
    icon: "mdi:hexagon-outline",
    scheme: "mono",
    note: "carb\xF3n neutro",
    aliases: []
  },
  {
    id: "plata",
    label: "Plata",
    icon: "mdi:brightness-6",
    scheme: "mono",
    note: "plata azulada",
    aliases: []
  },
  {
    id: "humo",
    label: "Humo",
    icon: "mdi:smoke",
    scheme: "mono",
    note: "gris c\xE1lido humo",
    aliases: []
  },
  {
    id: "marfil",
    label: "Marfil",
    icon: "mdi:feather",
    scheme: "mono",
    note: "marfil c\xE1lido",
    aliases: []
  },
  {
    id: "azabache",
    label: "Azabache",
    icon: "mdi:circle-slice-8",
    scheme: "mono",
    note: "negro azulado",
    aliases: []
  },
  {
    id: "nieve",
    label: "Nieve",
    icon: "mdi:snowflake",
    scheme: "mono",
    note: "blanco helado",
    aliases: []
  },
  {
    id: "piedra",
    label: "Piedra",
    icon: "mdi:wall",
    scheme: "mono",
    note: "piedra tostada",
    aliases: []
  },
  {
    id: "oceano",
    label: "Oc\xE9ano",
    icon: "mdi:waves",
    scheme: "dual",
    note: "teal + cielo",
    aliases: []
  },
  {
    id: "ambar",
    label: "\xC1mbar",
    icon: "mdi:weather-sunny",
    scheme: "dual",
    note: "\xE1mbar + oro",
    aliases: []
  },
  {
    id: "indigo",
    label: "\xCDndigo",
    icon: "mdi:moon-waning-crescent",
    scheme: "dual",
    note: "\xEDndigo + violeta",
    aliases: []
  },
  {
    id: "tierra",
    label: "Tierra",
    icon: "mdi:terrain",
    scheme: "dual",
    note: "marr\xF3n + ocre",
    aliases: []
  },
  {
    id: "cobre",
    label: "Cobre",
    icon: "mdi:gold",
    scheme: "dual",
    note: "cobre + turquesa",
    aliases: []
  },
  {
    id: "oliva",
    label: "Oliva",
    icon: "mdi:fruit-grapes",
    scheme: "dual",
    note: "oliva + oro",
    aliases: []
  },
  {
    id: "glaciar",
    label: "Glaciar",
    icon: "mdi:snowflake-variant",
    scheme: "dual",
    note: "hielo + azul profundo",
    aliases: []
  },
  {
    id: "bosque",
    label: "Bosque",
    icon: "mdi:tree",
    scheme: "dual",
    note: "verde bosque + musgo",
    aliases: []
  },
  {
    id: "medianoche",
    label: "Medianoche",
    icon: "mdi:weather-night",
    scheme: "dual",
    note: "navy + cian",
    aliases: []
  },
  {
    id: "ciruela",
    label: "Ciruela",
    icon: "mdi:flower-tulip-outline",
    scheme: "dual",
    note: "ciruela + rosa",
    aliases: []
  },
  {
    id: "hues-dodgerblue",
    label: "Dodger",
    icon: "mdi:palette-swatch",
    scheme: "triad",
    note: "azul dodger ContaPyme",
    aliases: [
      "contapyme"
    ]
  },
  {
    id: "natural",
    label: "Natural",
    icon: "mdi:leaf",
    scheme: "triad",
    note: "verde + azul + naranja",
    aliases: []
  },
  {
    id: "coral",
    label: "Coral",
    icon: "mdi:flower-tulip",
    scheme: "triad",
    note: "coral + melocot\xF3n + violeta",
    aliases: []
  },
  {
    id: "lavanda",
    label: "Lavanda",
    icon: "mdi:flower",
    scheme: "triad",
    note: "violeta + rosa + cian",
    aliases: []
  },
  {
    id: "cereza",
    label: "Cereza",
    icon: "mdi:fruit-cherries",
    scheme: "triad",
    note: "cereza + rosa + violeta",
    aliases: []
  },
  {
    id: "fucsia",
    label: "Fucsia",
    icon: "mdi:star-four-points",
    scheme: "triad",
    note: "magenta + rosa + \xEDndigo",
    aliases: []
  },
  {
    id: "aurora",
    label: "Aurora",
    icon: "mdi:aurora",
    scheme: "triad",
    note: "verde + cian + rosa",
    aliases: []
  },
  {
    id: "tropico",
    label: "Tr\xF3pico",
    icon: "mdi:palm-tree",
    scheme: "triad",
    note: "amarillo + verde + azul",
    aliases: []
  },
  {
    id: "electrico",
    label: "El\xE9ctrico",
    icon: "mdi:flash",
    scheme: "triad",
    note: "magenta + cian + amarillo",
    aliases: []
  },
  {
    id: "crepusculo",
    label: "Crep\xFAsculo",
    icon: "mdi:weather-sunset",
    scheme: "triad",
    note: "violeta + naranja + azul",
    aliases: []
  }
];

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
var THEME_COLOR_OPTIONS = palette_catalog_default.map(({ id, label, icon }) => ({ id, label, icon }));
var DESIGN_SCHEME_OPTIONS = [
  { id: "mono", label: "Mono", icon: "mdi:circle" },
  { id: "dual", label: "Dual", icon: "mdi:circle-half-full" },
  { id: "triad", label: "Tr\xEDada", icon: "mdi:triangle-outline" }
];
var THEME_COLOR_DESIGN_SCHEME = Object.fromEntries(
  palette_catalog_default.map((p) => [p.id, p.scheme])
);
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
function designSchemeColorCount(scheme) {
  if (scheme === "mono") return 1;
  if (scheme === "dual") return 2;
  return 3;
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
  designSchemeColorCount,
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
