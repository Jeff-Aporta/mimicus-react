import {
  LEGACY_LUMINANCE_KEYS,
  LUMINANCE_STORAGE_KEY,
  THEME_COLOR_STORAGE_KEY,
  DESIGN_SCHEME_STORAGE_KEY,
  designSchemeForThemeColor,
  isLuminance,
  isDesignScheme,
  normalizeThemeColor,
  readLuminanceFromDom,
  readThemeColorFromDom,
  readDesignSchemeFromDom,
  type Luminance,
  type ThemeColor,
  type DesignScheme,
} from "./constants.ts";

export interface ThemeState {
  luminance: Luminance;
  themeColor: ThemeColor;
  designScheme: DesignScheme;
}

export type ThemeListener = (snapshot: ThemeState) => void;

let state: ThemeState = {
  luminance: "light",
  themeColor: "hues-dodgerblue",
  designScheme: "mono",
};

const listeners = new Set<ThemeListener>();

function notify(): void {
  const snap = getThemeState();
  listeners.forEach((fn) => {
    try { fn(snap); } catch { /* ignore */ }
  });
}

export function getThemeState(): ThemeState {
  return { ...state };
}

export function subscribeTheme(fn: ThemeListener): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

function readStoredLuminance(): Luminance {
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

function readStoredThemeColor(): ThemeColor {
  if (typeof localStorage === "undefined") return "hues-dodgerblue";
  try {
    const v = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (v) return normalizeThemeColor(v);
  } catch { /* ignore */ }
  return "hues-dodgerblue";
}

function readStoredDesignScheme(): DesignScheme {
  if (typeof localStorage === "undefined") return "mono";
  try {
    const v = localStorage.getItem(DESIGN_SCHEME_STORAGE_KEY);
    if (isDesignScheme(v)) return v;
  } catch { /* ignore */ }
  return "mono";
}

function syncLegacyDomClasses(root: HTMLElement, l: Luminance): void {
  root.classList.toggle("dark", l === "dark");
  root.classList.toggle("light", l === "light");
}

export function applyTheme(
  nextLuminance: Luminance,
  nextThemeColor: ThemeColor,
  nextDesignScheme: DesignScheme = state.designScheme,
): void {
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

export function setLuminance(value: Luminance): void {
  if (state.luminance === value && readLuminanceFromDom() === value) return;
  applyTheme(value, state.themeColor, state.designScheme);
}

export function setThemeColor(value: ThemeColor): void {
  if (state.themeColor === value && readThemeColorFromDom() === value) return;
  const scheme = designSchemeForThemeColor(value);
  applyTheme(state.luminance, value, scheme);
}

export function setDesignScheme(value: DesignScheme): void {
  if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
  applyTheme(state.luminance, state.themeColor, value);
}

export function bootTheme(): void {
  applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
}

export function isDark(luminance: Luminance = readLuminanceFromDom()): boolean {
  return luminance === "dark";
}
