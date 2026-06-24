import {
  LEGACY_LUMINANCE_KEYS,
  LUMINANCE_STORAGE_KEY,
  THEME_COLOR_STORAGE_KEY,
  DESIGN_SCHEME_STORAGE_KEY,
  isLuminance,
  isDesignScheme,
  normalizeThemeColor,
  normalizeDesignScheme,
  readLuminanceFromDom,
  readThemeColorFromDom,
  readDesignSchemeFromDom,
} from "./constants.js";

let state = {
  luminance: "light",
  themeColor: "hues-dodgerblue",
  designScheme: "mono",
};

const listeners = new Set();

function notify() {
  const snap = getThemeState();
  listeners.forEach((fn) => {
    try { fn(snap); } catch { /* ignore */ }
  });
}

export function getThemeState() {
  return { ...state };
}

export function subscribeTheme(fn) {
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
  } catch { /* ignore */ }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function readStoredThemeColor() {
  if (typeof localStorage === "undefined") return "hues-dodgerblue";
  try {
    const v = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (v) return normalizeThemeColor(v);
  } catch { /* ignore */ }
  return "hues-dodgerblue";
}

function readStoredDesignScheme() {
  if (typeof localStorage === "undefined") return "mono";
  try {
    const v = localStorage.getItem(DESIGN_SCHEME_STORAGE_KEY);
    if (isDesignScheme(v)) return v;
  } catch { /* ignore */ }
  return "mono";
}

function syncLegacyDomClasses(root, l) {
  root.classList.toggle("dark", l === "dark");
  root.classList.toggle("light", l === "light");
}

export function applyTheme(nextLuminance, nextThemeColor, nextDesignScheme = state.designScheme) {
  state = {
    luminance: nextLuminance,
    themeColor: nextThemeColor,
    designScheme: nextDesignScheme,
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
  } catch { /* ignore */ }
  notify();
}

export function setLuminance(value) {
  if (state.luminance === value && readLuminanceFromDom() === value) return;
  applyTheme(value, state.themeColor, state.designScheme);
}

export function setThemeColor(value) {
  if (state.themeColor === value && readThemeColorFromDom() === value) return;
  applyTheme(state.luminance, value, state.designScheme);
}

export function setDesignScheme(value) {
  if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
  applyTheme(state.luminance, state.themeColor, value);
}

export function bootTheme() {
  applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
}

export function isDark(luminance = readLuminanceFromDom()) {
  return luminance === "dark";
}
