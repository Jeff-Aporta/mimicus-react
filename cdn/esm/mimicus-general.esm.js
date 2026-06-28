var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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

// src/lib/resolveColor.ts
var componentColors = [
  "primary",
  "design-1",
  "design-2",
  "design-3",
  "info",
  "success",
  "warning",
  "error",
  "danger",
  "color",
  "bg",
  "card",
  "border",
  "neutral",
  "inherit",
  "currentColor",
  "white",
  "black",
  "transparent"
];
var cssVar = (c) => `var(--mimicus-${c})`;
function resolveColor(color, defaultColor = "") {
  color || (color = defaultColor);
  if (!color) return "";
  if (["inherit", "currentColor", "white", "black", "transparent"].includes(color)) return color;
  if (color === "neutral") return `color-mix(in srgb, ${cssVar("color")} 62%, transparent)`;
  if (color === "bg") return cssVar("bg-primary");
  if (color === "card") return cssVar("bg-secondary");
  if (color === "border") return cssVar("b-color");
  if (color === "primary") return cssVar("design-1");
  if (componentColors.includes(color)) return cssVar(color);
  return color;
}
function colorMix(c1, c2, p) {
  const r1 = resolveColor(c1);
  if (p <= 0) return r1;
  const r2 = resolveColor(c2);
  if (p >= 100) return r2;
  return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
}

// src/lib/surfaceColor.ts
var CSS_SURFACE_COLORS = new Set(
  componentColors.filter((c) => !["inherit", "currentColor", "white", "black", "transparent", "neutral", "bg", "card", "border", "color"].includes(c))
);
function surfaceColorAttrs(color, opts = {}) {
  if (!color) return {};
  if (color === "currentColor") return {};
  if (color === "neutral") return { "data-surface-color": "neutral" };
  if (CSS_SURFACE_COLORS.has(color)) return { "data-surface-color": color };
  return { style: { "--surface-accent": resolveColor(color) } };
}
function mergeSurfaceStyle(color, opts = {}) {
  const colorAttrs = surfaceColorAttrs(color, opts);
  const out = {};
  if (colorAttrs["data-surface-color"]) out["data-surface-color"] = colorAttrs["data-surface-color"];
  const merged = { ...colorAttrs.style || {}, ...opts.style && typeof opts.style === "object" ? opts.style : {} };
  if (Object.keys(merged).length) out.style = merged;
  return out;
}

// src/lib/colorTransform.ts
var colorTransform_exports = {};
__export(colorTransform_exports, {
  applyColorTransform: () => applyColorTransform,
  bg2font: () => bg2font,
  bgTransparent2font: () => bgTransparent2font,
  joinColorStyle: () => joinColorStyle,
  mkAlpha: () => mkAlpha,
  mkBow: () => mkBow,
  mkDarken: () => mkDarken,
  mkHeadingColor: () => mkHeadingColor,
  mkInvertL: () => mkInvertL,
  mkLighten: () => mkLighten,
  mkOklchShiftL: () => mkOklchShiftL,
  mkSemanticBorder: () => mkSemanticBorder,
  mkSoftBg: () => mkSoftBg,
  mkUnbow: () => mkUnbow,
  mkWinChromeAccent: () => mkWinChromeAccent,
  paletteBaseStyle: () => paletteBaseStyle,
  paletteStateVarRules: () => paletteStateVarRules,
  paletteSurfaceTint: () => paletteSurfaceTint
});
var mkDarken = (c, p = 0) => colorMix(c, "black", p);
var mkLighten = (c, p = 0) => colorMix(c, "white", p);
var mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);
var mkInvertL = (c) => `hsl(from ${resolveColor(c)} h s calc(100 - l))`;
var mkBow = (color, percent = 0) => colorMix(color, "color", percent);
var mkUnbow = (color, percent = 0) => colorMix(color, mkInvertL("color"), percent);
var bg2font = (c) => `oklch(from ${c} calc((sign(0.75 - l) + 1) / 2 * 100%) 0 h / 1)`;
var bgTransparent2font = (c, alphaPct, bg) => bg2font(colorMix(bg, c, 100 - alphaPct));
var mkWinChromeAccent = (color = "primary") => `oklch(from ${resolveColor(color)} l calc(min(0.26, max(c, 0.14) + 0.05)) h)`;
var mkOklchShiftL = (c, delta, min = 0.06, max = 0.98) => `oklch(from ${resolveColor(c)} calc(clamp(${min}, l + ${delta}, ${max})) c h)`;
var mkSoftBg = (color, veilPct = 88) => mkAlpha(color, veilPct);
function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
}
var mkHeadingColor = (color = "primary", bowPct) => mkBow(color, bowPct);
function paletteBaseStyle(color = "primary") {
  return { "--ct-base": resolveColor(color) };
}
function paletteSurfaceTint(color, opts = {}) {
  const accent = resolveColor(color);
  const bg = colorMix(resolveColor(opts.surface ?? "card"), color, opts.cardMix ?? 15);
  const fg = colorMix(bg2font(bg), color, opts.fgMix ?? 40);
  const border = colorMix(bg, color, opts.borderMix ?? 35);
  return { accent, bg, fg, border };
}
function joinColorStyle(...parts) {
  return parts.filter(Boolean).join("; ");
}
function applyColorTransform(base, kind, amount = 0) {
  switch (kind) {
    case "darken":
      return mkDarken(base, amount);
    case "lighten":
      return mkLighten(base, amount);
    case "alpha":
      return mkAlpha(base, amount);
    case "bow":
      return mkBow(base, amount);
    case "unbow":
      return mkUnbow(base, amount);
    case "invertL":
      return mkInvertL(base);
    case "bg2font":
      return bg2font(resolveColor(base));
    default:
      return resolveColor(base);
  }
}
function paletteStateVarRules(cssVarName) {
  const ref = cssVarName.startsWith("var(") ? cssVarName : `var(${cssVarName})`;
  return [`${cssVarName}-hvr: ${mkLighten(ref, 15)}`, `${cssVarName}-ctv: ${mkDarken(ref, 20)}`];
}

// src/snippets/fluidCss.js
var CSS_PROP_RE = /^[a-z][a-zA-Z0-9]*$/;
function camelToKebab(key) {
  return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
function declarations(decls) {
  return Object.entries(decls).filter(([, v]) => v != null && v !== "").map(([k, v]) => `${camelToKebab(k)}:${v}`).join(";");
}
function isPlainDeclarations(obj) {
  return Object.keys(obj).every((k) => CSS_PROP_RE.test(k) || k.startsWith("Webkit") || k.startsWith("Moz"));
}
function fluidCss(tree, indent = "") {
  const pad = indent;
  const inner = indent ? `${indent}  ` : "";
  const chunks = [];
  for (const [selector, rules] of Object.entries(tree)) {
    if (selector.startsWith("@media")) {
      chunks.push(`${pad}${selector}{${fluidCss(
        /** @type {Record<string, Record<string, unknown>>} */
        rules,
        ""
      )}}`);
      continue;
    }
    if (selector.startsWith("@keyframes")) {
      const frames = Object.entries(
        /** @type {Record<string, Record<string, unknown>>} */
        rules
      ).map(([pct, decls]) => `${pct}{${declarations(
        /** @type {Record<string, string|number>} */
        decls
      )}}`).join("");
      chunks.push(`${pad}${selector}{${frames}}`);
      continue;
    }
    if (typeof rules === "object" && rules !== null && isPlainDeclarations(
      /** @type {Record<string, unknown>} */
      rules
    )) {
      chunks.push(`${pad}${selector}{${declarations(
        /** @type {Record<string, string|number>} */
        rules
      )}}`);
    }
  }
  return chunks.join(indent ? `
${pad}` : "");
}
var js2css = fluidCss;

// src/snippets/constants.js
var BRAND_LOGO_URL = "https://pub-1c290cc606c8478899f5764899278571.r2.dev/brand/logo-insoft.png";
var MIMICUS_LOGO_PATH = "assets/mimicus-logo.svg";
var BRAND_DISPLAY_NAME = "Mimicus React";
function brandLoadingLabel(name = BRAND_DISPLAY_NAME) {
  return `Cargando ${name}\u2026`;
}
var DEMO_BOOT_META = {
  logoSrc: MIMICUS_LOGO_PATH,
  icon: "mdi:atom",
  name: BRAND_DISPLAY_NAME,
  label: brandLoadingLabel()
};

// src/snippets/index.ts
var snippets_exports = {};
__export(snippets_exports, {
  BOOT_CSS_TREE: () => BOOT_CSS_TREE,
  BRAND_DISPLAY_NAME: () => BRAND_DISPLAY_NAME,
  BRAND_LOGO_URL: () => BRAND_LOGO_URL,
  DEMO_BOOT_META: () => DEMO_BOOT_META,
  bootCssText: () => bootCssText,
  bootHtmlInner: () => bootHtmlInner,
  brandLoadingLabel: () => brandLoadingLabel,
  buildConnBootApplyInline: () => buildConnBootApplyInline,
  buildRootBlock: () => buildRootBlock,
  buildThemeInitInline: () => buildThemeInitInline,
  fluidCss: () => fluidCss,
  js2css: () => js2css,
  parseAppBootMeta: () => parseAppBootMeta,
  patchIndexRoot: () => patchIndexRoot,
  writeAppBoot: () => writeAppBoot
});

// src/snippets/bootScreen.js
var BOOT_CSS_TREE = {
  html: {
    colorScheme: "dark",
    background: "#0b1220"
  },
  'html[data-luminance="light"]': {
    colorScheme: "light",
    background: "#f0f6ff"
  },
  body: {
    margin: 0,
    height: "100%",
    background: "inherit"
  },
  "#root": {
    height: "100%",
    minHeight: "100vh"
  },
  ".mimicus-app-boot": {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
    background: "#0b1220",
    color: "#94a3b8"
  },
  'html[data-luminance="light"] .mimicus-app-boot': {
    background: "#f0f6ff",
    color: "#64748b"
  },
  ".mimicus-app-boot__mesh": {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(99, 102, 241, 0.22), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(0, 229, 255, 0.1), transparent 48%), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(30, 144, 255, 0.08), transparent 55%)"
  },
  'html[data-luminance="light"] .mimicus-app-boot__mesh': {
    background: "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(30, 144, 255, 0.14), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(99, 102, 241, 0.08), transparent 48%)"
  },
  ".mimicus-app-boot__card": {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.55rem",
    padding: "1.65rem 2rem 1.45rem",
    minWidth: "min(17.5rem, 88vw)",
    maxWidth: "22rem",
    borderRadius: "14px",
    border: "1px solid rgba(0, 229, 255, 0.24)",
    background: "linear-gradient(165deg, rgba(11, 18, 32, 0.94), rgba(15, 23, 42, 0.82))",
    boxShadow: "0 0 0 1px rgba(30, 144, 255, 0.08), 0 10px 36px rgba(30, 144, 255, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    textAlign: "center"
  },
  'html[data-luminance="light"] .mimicus-app-boot__card': {
    borderColor: "rgba(30, 144, 255, 0.2)",
    background: "linear-gradient(165deg, rgba(255, 255, 255, 0.98), rgba(240, 247, 255, 0.92))",
    boxShadow: "0 8px 28px rgba(30, 144, 255, 0.1)"
  },
  ".mimicus-app-boot__icon-wrap": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3.1rem",
    height: "3.1rem",
    marginBottom: "0.15rem",
    borderRadius: "12px",
    border: "1px solid rgba(0, 229, 255, 0.38)",
    background: "rgba(14, 165, 233, 0.12)",
    boxShadow: "0 0 18px rgba(0, 229, 255, 0.16)",
    color: "#7dd3fc",
    animation: "mimicus-boot-icon-pulse 2.4s ease-in-out infinite"
  },
  'html[data-luminance="light"] .mimicus-app-boot__icon-wrap': {
    borderColor: "rgba(30, 144, 255, 0.28)",
    background: "rgba(224, 242, 254, 0.95)",
    color: "#0369a1",
    boxShadow: "0 0 14px rgba(30, 144, 255, 0.12)"
  },
  ".mimicus-app-boot__title": {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: "#e2e8f0",
    lineHeight: 1.25
  },
  'html[data-luminance="light"] .mimicus-app-boot__title': {
    color: "#0f172a"
  },
  ".mimicus-app-boot__label": {
    margin: 0,
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#94a3b8",
    lineHeight: 1.35
  },
  'html[data-luminance="light"] .mimicus-app-boot__label': {
    color: "#64748b"
  },
  ".mimicus-app-boot__bar": {
    width: "100%",
    height: "3px",
    marginTop: "0.45rem",
    borderRadius: "999px",
    background: "rgba(148, 163, 184, 0.2)",
    overflow: "hidden"
  },
  'html[data-luminance="light"] .mimicus-app-boot__bar': {
    background: "rgba(148, 163, 184, 0.28)"
  },
  ".mimicus-app-boot__bar-fill": {
    display: "block",
    height: "100%",
    width: "36%",
    borderRadius: "inherit",
    background: "linear-gradient(90deg, #1e90ff, #6366f1, #00e5ff)",
    boxShadow: "0 0 10px rgba(30, 144, 255, 0.4)",
    animation: "mimicus-boot-bar-slide 1.75s ease-in-out infinite"
  },
  ".mimicus-app-boot-watermark": {
    position: "fixed",
    right: "1.25rem",
    bottom: "1.25rem",
    width: "min(100px, 16vw)",
    height: "auto",
    opacity: 0.16,
    filter: "grayscale(1) brightness(1.15)",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: 0
  },
  'html[data-luminance="light"] .mimicus-app-boot-watermark': {
    opacity: 0.12,
    filter: "grayscale(1) brightness(0.85)"
  },
  "@keyframes mimicus-boot-icon-pulse": {
    "0%, 100%": {
      transform: "translateY(0)",
      boxShadow: "0 0 18px rgba(0, 229, 255, 0.16)"
    },
    "50%": {
      transform: "translateY(-2px)",
      boxShadow: "0 0 26px rgba(0, 229, 255, 0.28)"
    }
  },
  "@keyframes mimicus-boot-bar-slide": {
    "0%": { transform: "translateX(-130%)" },
    "100%": { transform: "translateX(330%)" }
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".mimicus-app-boot__icon-wrap, .mimicus-app-boot__bar-fill": {
      animation: "none !important"
    }
  }
};
function bootCssText(indent = "      ") {
  return fluidCss(BOOT_CSS_TREE, indent);
}
function buildThemeInitInline(themeLsKey, indent = "  ") {
  const key = JSON.stringify(String(themeLsKey || "mimicus:theme"));
  const in2 = `${indent}  `;
  return `${indent}<script>
${in2}(function () {
${in2}  var k = ${key};
${in2}  var m = "dark";
${in2}  try {
${in2}    var v = localStorage.getItem(k);
${in2}    if (v === "light" || v === "dark") m = v;
${in2}  } catch (e) { /* ignore */ }
${in2}  document.documentElement.setAttribute("data-luminance", m);
${in2}  document.documentElement.style.colorScheme = m;
${in2}})();
${indent}<\/script>`;
}
function buildConnBootApplyInline(indent = "    ") {
  const in2 = `${indent}  `;
  return `${indent}<script>
${in2}(function () {
${in2}  try {
${in2}    var raw = new URLSearchParams(location.search).get("conn");
${in2}    if (!raw) return;
${in2}    var pad = String(raw).replace(/-/g, "+").replace(/_/g, "/");
${in2}    while (pad.length % 4) pad += "=";
${in2}    var bin = atob(pad);
${in2}    var bytes = new Uint8Array(bin.length);
${in2}    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
${in2}    var conn = JSON.parse(new TextDecoder().decode(bytes));
${in2}    if (!conn || typeof conn !== "object") return;
${in2}    var t = conn.title || conn.name || conn.appName || (conn.brand && conn.brand.title);
${in2}    var ic = conn.icon || (conn.brand && conn.brand.icon);
${in2}    if (!t && !ic) return;
${in2}    globalThis.__MIMICUS_CONN__ = conn;
${in2}    var titleEl = document.getElementById("mimicus-boot-title");
${in2}    var labelEl = document.getElementById("mimicus-boot-label");
${in2}    var iconEl = document.getElementById("mimicus-boot-icon");
${in2}    if (t && titleEl) {
${in2}      titleEl.textContent = String(t);
${in2}      if (labelEl) labelEl.textContent = "Cargando " + String(t) + "\\u2026";
${in2}      document.title = String(t);
${in2}      var appName = document.querySelector('meta[name="application-name"]');
${in2}      if (appName) appName.setAttribute("content", String(t));
${in2}      var og = document.querySelector('meta[property="og:title"]');
${in2}      if (og) og.setAttribute("content", String(t));
${in2}    }
${in2}    if (ic && iconEl) {
${in2}      if (iconEl.tagName === "ICONIFY-ICON") iconEl.setAttribute("icon", String(ic));
${in2}      else if (String(ic).match(/\\.(svg|png|webp)$/i)) iconEl.setAttribute("src", String(ic));
${in2}    }
${in2}    if (ic) {
${in2}      var appIcon = document.querySelector('meta[name="app-icon"]');
${in2}      if (appIcon) appIcon.setAttribute("content", String(ic));
${in2}    }
${in2}  } catch (e) { /* ignore */ }
${in2}})();
${indent}<\/script>`;
}
function bootHtmlInner({ icon, logoSrc, label, name, watermark = true, logoUrl = BRAND_LOGO_URL }) {
  const safeIcon = String(icon || "mdi:loading").replace(/"/g, "");
  const safeLogoSrc = logoSrc ? String(logoSrc).replace(/"/g, "") : "";
  const safeLabel = String(label).replace(/</g, "");
  const displayName = String(name || "").trim() || safeLabel.replace(/^Cargando\s+/i, "").replace(/…$/, "").trim() || "App";
  const safeName = displayName.replace(/</g, "");
  const safeLogoUrl = String(logoUrl).replace(/"/g, "");
  const wm = watermark ? `<img class="mimicus-app-boot-watermark" src="${safeLogoUrl}" alt="" aria-hidden="true" decoding="async" />` : "";
  const iconInner = safeLogoSrc ? `<img id="mimicus-boot-icon" src="${safeLogoSrc}" alt="" width="42" height="42" decoding="async" />` : `<iconify-icon id="mimicus-boot-icon" icon="${safeIcon}" width="1.85em" height="1.85em"></iconify-icon>`;
  return `<div class="mimicus-app-boot">
  <div class="mimicus-app-boot__mesh" aria-hidden="true"></div>
  <div class="mimicus-app-boot__card" role="status" aria-live="polite" aria-busy="true">
    <div class="mimicus-app-boot__icon-wrap">
      ${iconInner}
    </div>
    <p class="mimicus-app-boot__title" id="mimicus-boot-title">${safeName}</p>
    <p class="mimicus-app-boot__label" id="mimicus-boot-label">${safeLabel}</p>
    ${buildConnBootApplyInline("    ")}
    <div class="mimicus-app-boot__bar" aria-hidden="true"><span class="mimicus-app-boot__bar-fill"></span></div>
  </div>
  ${wm}
</div>`;
}
function buildRootBlock(opts, indent = "  ") {
  const in2 = `${indent}  `;
  const cssBlock = opts.inlineCss !== false ? `${in2}<style>
${bootCssText(in2)}
${in2}</style>
` : "";
  return `${indent}<div id="root">
${cssBlock}${bootHtmlInner(opts).split("\n").map((line) => line ? in2 + line : line).join("\n")}
${indent}</div>`;
}
function writeAppBoot(doc, opts) {
  if (opts.inlineCss !== false) {
    doc.write(`<style>${bootCssText("")}</style>`);
  }
  doc.write(bootHtmlInner(opts));
}
function parseAppBootMeta(html) {
  let name = html.match(/<meta\s+name="application-name"\s+content="([^"]+)"/i)?.[1]?.trim();
  let icon = html.match(/<meta\s+name="app-icon"\s+content="([^"]+)"/i)?.[1]?.trim();
  if (!name) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
    name = title?.split("\u2014")[0]?.trim() || title || "App";
  }
  if (!icon) icon = "mdi:loading";
  return { name, icon, label: `Cargando ${name}\u2026` };
}
var ROOT_OPEN_RE = /<div\s+id="root"[^>]*>/i;
function findRootRange(html) {
  const start = html.search(ROOT_OPEN_RE);
  if (start < 0) throw new Error('No se encontr\xF3 <div id="root">');
  const openTag = html.match(ROOT_OPEN_RE)[0];
  const openEnd = start + openTag.length;
  let depth = 1;
  let i = openEnd;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", i);
    const nextClose = html.indexOf("</div>", i);
    if (nextClose < 0) throw new Error("</div> de cierre para #root");
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }
    depth -= 1;
    i = nextClose + "</div>".length;
    if (depth === 0) return { start, end: i };
  }
  throw new Error("#root sin cerrar");
}
function patchIndexRoot(html, meta) {
  const block = buildRootBlock(meta);
  const { start, end } = findRootRange(html);
  return html.slice(0, start) + block + html.slice(end);
}

// src/cdn/index.ts
var cdn_exports = {};
__export(cdn_exports, {
  CDN_GROUPS: () => CDN_GROUPS,
  CDN_PACKS: () => CDN_PACKS,
  MIMICUS_UI_REF: () => MIMICUS_UI_REF,
  buildCdnHeadHtml: () => buildCdnHeadHtml,
  buildCdnLoaderBlock: () => buildCdnLoaderBlock,
  injectCdnHead: () => injectCdnHead,
  listCdnGroups: () => listCdnGroups,
  loadCDNs: () => loadCDNs,
  mimicusCdnBase: () => mimicusCdnBase,
  resolveCdnKeys: () => resolveCdnKeys
});

// src/cdn/baseUrl.ts
var MIMICUS_UI_REF = "main";
function mimicusCdnBase() {
  if (typeof location === "undefined") {
    return `https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@${MIMICUS_UI_REF}/cdn/`;
  }
  const isDevHost = /localhost|127\.0\.0\.1|\[::1\]/.test(location.hostname);
  const isGhPagesDemo = /jeff-aporta\.github\.io\/mimicus-react/i.test(location.href);
  const base = document.querySelector("base")?.href || location.href;
  if (isDevHost || isGhPagesDemo || globalThis.__MIMICUS_UI_DIST__) {
    return new URL("cdn/", base).href.replace(/\/?$/, "/");
  }
  return `https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@${MIMICUS_UI_REF}/cdn/`;
}

// src/cdn/packs.ts
var CDN_PACKS = {
  "preconnect-jsdelivr": {
    kind: "html",
    html: '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />'
  },
  "preconnect-esmsh": {
    kind: "html",
    html: '<link rel="preconnect" href="https://esm.sh" crossorigin />'
  },
  "preconnect-iconify": {
    kind: "html",
    html: '<link rel="preconnect" href="https://code.iconify.design" crossorigin />'
  },
  "importmap-react18": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime"
    }
  },
  "importmap-react18-mui": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
      "@emotion/react": "https://esm.sh/@emotion/react@11.14.0?external=react,react-dom",
      "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.1?external=react,react-dom,@emotion/react",
      "@mui/material": "https://esm.sh/@mui/material@9.1.0?external=react,react-dom,@emotion/react,@emotion/styled",
      "@mui/material/": "https://esm.sh/@mui/material@9.1.0/"
    }
  },
  "script-iconify": {
    kind: "script-src",
    src: "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "iconify" }
  },
  "script-babel": {
    kind: "script-src",
    src: "https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.9/babel.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "babel" }
  },
  "link-mimicus-ui-css": {
    kind: "link-css",
    href: (base) => base + "css/mimicus-ui.min.css",
    attrs: { "data-mimicus-ui-css": "1", "data-mimicus-cdn": "mimicus-ui-css" }
  },
  "script-mimicus-react-iife": {
    kind: "script-src",
    src: (base) => base + "iife/mimicus-react.iife.min.js",
    defer: false,
    attrs: { "data-mimicus-react-iife": "1", "data-mimicus-cdn": "mimicus-react-iife" }
  },
  /** @deprecated alias de script-mimicus-react-iife */
  "script-mimicus-ui": {
    kind: "script-src",
    src: (base) => base + "iife/mimicus-react.iife.min.js",
    defer: false,
    attrs: { "data-mimicus-ui-js": "1", "data-mimicus-cdn": "mimicus-ui" }
  },
  "link-app-boot-css": {
    kind: "link-css",
    href: (base) => base + "css/app-boot.min.css",
    attrs: { "data-mimicus-cdn": "app-boot-css" }
  },
  "importmap-mimicus-ui": {
    kind: "importmap",
    imports: (base) => ({
      "@jeff-aporta/mimicus-react": base + "esm/mimicus-react.esm.min.js",
      "@jeff-aporta/mimicus-react/bootstrap": base + "esm/mimicus-react.bootstrap.esm.min.js"
    })
  }
};
var CDN_GROUPS = {
  preconnect: ["preconnect-jsdelivr", "preconnect-esmsh", "preconnect-iconify"],
  react18: ["importmap-react18"],
  "react18-mui": ["importmap-react18-mui"],
  iconify: ["script-iconify"],
  babel: ["script-babel"],
  "mimicus-ui-css": ["link-mimicus-ui-css"],
  /** Modo variable — React global + CSS + MimicusUI en globalThis */
  "mimicus-ui": ["link-mimicus-ui-css", "script-mimicus-react-iife"],
  "importmap-mimicus": ["importmap-mimicus-ui"],
  "app-boot-css": ["link-app-boot-css"],
  /** Modo import — React importmap + CSS + alias @jeff-aporta/mimicus-react */
  "stack-esm": ["preconnect", "react18", "iconify", "mimicus-ui-css", "importmap-mimicus-ui"],
  /** Modo variable — React UMD/global + CSS + mimicus-react.iife */
  "stack-global": ["preconnect", "react18", "iconify", "mimicus-ui-css", "script-mimicus-react-iife"],
  /** Stack mínimo Mimicus React ESM (sin MUI). */
  "stack-mimicus": ["stack-esm"],
  /** Stack mínimo Mimicus React global (sin MUI). */
  "stack-mimicus-global": ["stack-global"],
  /** Stack tipo swagger (React + MUI + babel + iconify). */
  "stack-mui": ["preconnect", "react18-mui", "iconify", "babel"]
};

// src/cdn/loadCdns.ts
function resolveCdnKeys(keys) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  function addPackId(id) {
    if (!id || seen.has(id)) return;
    if (!CDN_PACKS[id]) throw new Error(`CDN pack desconocido: ${id}`);
    seen.add(id);
    out.push(id);
  }
  function addKey(key) {
    const k = String(key || "").trim();
    if (!k) return;
    if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, k)) {
      for (const child of CDN_GROUPS[k]) {
        if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, child)) addKey(child);
        else addPackId(child);
      }
      return;
    }
    addPackId(k);
  }
  for (const key of keys) addKey(key);
  return out;
}
function listCdnGroups() {
  return Object.keys(CDN_GROUPS);
}
function resolveHref(href, base) {
  return typeof href === "function" ? href(base) : href;
}
function resolveImportMap(raw, base) {
  if (typeof raw === "function") return raw(base);
  return raw || {};
}
function buildCdnHeadHtml(packIds, opts = {}) {
  const base = opts.base || mimicusCdnBase();
  const indent = opts.indent || "";
  const lines = [];
  const importMaps = {};
  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      lines.push(pack.html);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack.imports, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      const attrs = Object.entries({ rel: "stylesheet", href, ...pack.attrs }).map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`).join(" ");
      lines.push(`<link ${attrs} />`);
      continue;
    }
    if (pack.kind === "script-src") {
      const src = resolveHref(pack.src, base);
      const defer = pack.defer ? " defer" : "";
      const attrs = Object.entries({ src, ...pack.attrs }).map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`).join(" ");
      lines.push(`<script${defer} ${attrs}><\/script>`);
    }
  }
  if (Object.keys(importMaps).length) {
    const json = JSON.stringify({ imports: importMaps }, null, 2);
    lines.push(`<script type="importmap">
${json}
<\/script>`);
  }
  return lines.map((line) => indent ? line.split("\n").map((l) => indent + l).join("\n") : line).join("\n");
}
function loadCDNs(...keys) {
  const doc = document;
  const flat = keys.flat();
  const packIds = resolveCdnKeys(flat);
  const html = buildCdnHeadHtml(packIds);
  if (!html) return packIds;
  if (doc.readyState === "loading") {
    doc.write(html);
    return packIds;
  }
  injectCdnHead(packIds, doc);
  return packIds;
}
function buildCdnLoaderBlock(keys, opts = {}) {
  const indent = opts.indent || "  ";
  const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "iife/mimicus-snippets.min.js";
  const keysLit = keys.map((k) => JSON.stringify(k)).join(", ");
  return `${indent}<script src="${snippetsSrc}"><\/script>
${indent}<script>
${indent}  MimicusBootstrap.loadCDNs(${keysLit});
${indent}<\/script>`;
}
function injectCdnHead(packIds, doc = document) {
  const base = mimicusCdnBase();
  const head = doc.head;
  if (!head) throw new Error("document.head no disponible");
  const importMaps = {};
  const scriptSrcs = [];
  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      const tpl = doc.createElement("template");
      tpl.innerHTML = pack.html.trim();
      const node = tpl.content.firstChild;
      if (node) head.appendChild(node);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack.imports, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      if (head.querySelector(`link[href="${href}"]`)) continue;
      const link = doc.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      for (const [k, v] of Object.entries(pack.attrs || {})) link.setAttribute(k, v);
      head.appendChild(link);
      continue;
    }
    if (pack.kind === "script-src") {
      scriptSrcs.push(pack);
    }
  }
  if (Object.keys(importMaps).length && !head.querySelector('script[type="importmap"]')) {
    const s = doc.createElement("script");
    s.type = "importmap";
    s.textContent = JSON.stringify({ imports: importMaps }, null, 2);
    head.appendChild(s);
  }
  for (const pack of scriptSrcs) {
    const src = resolveHref(pack.src, base);
    if (head.querySelector(`script[src="${src}"]`)) continue;
    const el = doc.createElement("script");
    el.src = src;
    if (pack.defer) el.defer = true;
    for (const [k, v] of Object.entries(pack.attrs || {})) el.setAttribute(k, v);
    head.appendChild(el);
  }
}

// src/components/Icon.tsx
import { useEffect as useEffect2, useRef } from "react";
import { jsx } from "react/jsx-runtime";
function Icon({ icon, className, style }) {
  const ref = useRef(null);
  useEffect2(() => {
    const el = ref.current;
    if (!el) return;
    if (className) el.setAttribute("class", className);
    else el.removeAttribute("class");
  }, [className]);
  if (!icon) return null;
  return /* @__PURE__ */ jsx("iconify-icon", { ref, icon, style: style && typeof style === "object" ? style : void 0 });
}

// src/components/Button.tsx
import { useState as useState2 } from "react";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function resolveButtonVariant(variant, { danger, ghost, dashed, link }) {
  if (link) return "text";
  if (ghost) return "ghost";
  if (dashed) return "dashed";
  return normalizeVariant(variant, "solid");
}
function resolveButtonColor(color, { danger }) {
  if (color) return color;
  if (danger) return "danger";
  return color;
}
function Button({
  type: htmlType = "button",
  disabled = false,
  variant = "solid",
  color,
  shape = "round",
  block = false,
  danger = false,
  ghost = false,
  dashed = false,
  link = false,
  href,
  target,
  rel,
  loading = false,
  glassActive = false,
  wrap = false,
  iconPlacement = "start",
  className,
  style,
  onClick,
  children,
  icon,
  ...rest
}) {
  const [busy, setBusy] = useState2(false);
  const isLink = Boolean(href) || link;
  const normalizedVariant = resolveButtonVariant(variant, { danger, ghost, dashed, link: isLink && !href });
  const resolvedColor = resolveButtonColor(color, { danger });
  const surfaceStyle = mergeSurfaceStyle(resolvedColor, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;
  const iconOnly = Boolean(icon) && (children == null || children === "");
  const resolvedShape = iconOnly && shape === "round" ? "circle" : shape;
  async function handleClick(e) {
    if (isDisabled) return;
    if (wrap) {
      onClick?.(e);
      return;
    }
    setBusy(true);
    try {
      const res = onClick?.(e);
      if (res instanceof Promise) await res;
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  }
  function onWrapKeydown(e) {
    if (!wrap || isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  }
  const cls = [
    wrap && "button-wrap",
    isLoading && "loading",
    block && "button-block",
    iconOnly && "button-icon-only",
    href && "button-link",
    className
  ].filter(Boolean).join(" ");
  const dataProps = {
    "data-shape": resolvedShape,
    "data-variant": normalizedVariant,
    "data-block": block ? "true" : void 0,
    "data-danger": danger ? "true" : void 0,
    "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : void 0,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : void 0,
    ...surfaceStyle,
    className: cls,
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? void 0 : "100%", ...surfaceStyle.style, ...style }
  };
  const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ jsx2("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true, children: "\u2026" }) : icon);
  const extractChildIcon = (nodes) => {
    let iconEl = null;
    let rest2 = null;
    const arr = Array.isArray(nodes) ? nodes : nodes != null ? [nodes] : [];
    for (const n of arr) {
      if (iconEl == null && n && typeof n === "object" && "type" in n && (n.type === "iconify-icon" || n.type?.displayName === "Icon")) {
        iconEl = n;
        continue;
      }
      rest2 = rest2?.length ? [...rest2, n] : n;
    }
    return { iconEl, rest: rest2 };
  };
  const inlineIcon = icon == null && children != null && children !== "" ? extractChildIcon(children).iconEl : null;
  const inlineRest = inlineIcon != null ? extractChildIcon(children).rest : null;
  const finalIcon = iconNode ?? inlineIcon;
  const finalChildren = inlineIcon != null ? inlineRest : children;
  const content = iconPlacement === "end" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children: finalChildren }),
    finalIcon
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    finalIcon,
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children: finalChildren })
  ] });
  if (href && !wrap) {
    const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    return /* @__PURE__ */ jsx2("a", { ...rest, ...dataProps, href: isDisabled ? void 0 : href, target, rel: linkRel, role: "button", "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, children: content });
  }
  if (wrap) {
    return /* @__PURE__ */ jsx2("div", { ...rest, ...dataProps, role: "button", tabIndex: isDisabled ? -1 : 0, "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, onKeyDown: onWrapKeydown, children: content });
  }
  return /* @__PURE__ */ jsx2("button", { ...rest, ...dataProps, type: htmlType, disabled: isDisabled, onClick: handleClick, children: content });
}

// src/components/FloatButton.tsx
import { Children, useEffect as useEffect3, useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function FloatButtonBase({
  icon,
  content,
  children,
  type = "default",
  shape = "circle",
  href,
  target,
  tooltip,
  disabled = false,
  className,
  style,
  onClick,
  ...rest
}) {
  const label = content ?? children;
  const extended = Boolean(label);
  const surface = mergeSurfaceStyle(type === "primary" ? "primary" : void 0, { style });
  const cls = [
    "mimicus-float-btn",
    extended && "mimicus-float-btn--extended",
    className
  ].filter(Boolean).join(" ");
  const inner = /* @__PURE__ */ jsxs2(Fragment2, { children: [
    icon && /* @__PURE__ */ jsx3("span", { className: "mimicus-float-btn__icon", "aria-hidden": true, children: icon }),
    extended && /* @__PURE__ */ jsx3("span", { className: "mimicus-float-btn__content", children: label })
  ] });
  const dataProps = {
    "data-type": type,
    "data-shape": shape,
    ...surface,
    className: cls,
    style: surface.style,
    title: typeof tooltip === "string" ? tooltip : void 0,
    "aria-label": rest["aria-label"] ?? (typeof tooltip === "string" ? tooltip : extended ? String(label) : "Acci\xF3n flotante"),
    onClick: disabled ? void 0 : onClick
  };
  if (href && !disabled) {
    return /* @__PURE__ */ jsx3("a", { href, target, ...rest, ...dataProps, children: inner });
  }
  return /* @__PURE__ */ jsx3("button", { type: "button", disabled, ...rest, ...dataProps, children: inner });
}
function FloatButtonGroup({
  children,
  trigger = "click",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  shape = "circle",
  placement = "top",
  className,
  style,
  closeIcon
}) {
  const [internalOpen, setInternalOpen] = useState3(defaultOpen);
  const open = openProp ?? internalOpen;
  const setOpen = (v) => {
    if (openProp === void 0) setInternalOpen(v);
    onOpenChange?.(v);
  };
  const items = Children.toArray(children).filter(Boolean);
  const main = items[0];
  const extras = items.slice(1);
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: ["mimicus-float-btn-group", open && "is-open", className].filter(Boolean).join(" "),
      style,
      "data-trigger": trigger,
      "data-placement": placement,
      "data-shape": shape,
      onMouseEnter: trigger === "hover" ? () => setOpen(true) : void 0,
      onMouseLeave: trigger === "hover" ? () => setOpen(false) : void 0,
      children: [
        open && extras.length > 0 && /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__menu", role: "menu", children: extras.map((child, i) => /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__item", role: "none", children: child }, i)) }),
        /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__trigger", role: "none", children: trigger === "click" && extras.length > 0 ? /* @__PURE__ */ jsx3(
          FloatButtonBase,
          {
            ...main?.props ?? {},
            icon: open ? closeIcon ?? main?.props?.icon : main?.props?.icon,
            onClick: (e) => {
              setOpen(!open);
              main?.props?.onClick?.(e);
            }
          }
        ) : main })
      ]
    }
  );
}
function FloatButtonBackTop({
  visibilityHeight = 400,
  duration = 450,
  target,
  onClick,
  icon,
  className,
  style
}) {
  const [visible, setVisible] = useState3(false);
  useEffect3(() => {
    const el = target?.() ?? (typeof window !== "undefined" ? window : null);
    if (!el) return void 0;
    const node = el;
    const onScroll = () => setVisible((node.scrollY ?? node.scrollTop ?? 0) > visibilityHeight);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [target, visibilityHeight]);
  if (!visible) return null;
  const scrollTop = () => {
    const el = target?.() ?? window;
    el.scrollTo?.({ top: 0, behavior: duration > 0 ? "smooth" : "auto" });
    onClick?.();
  };
  return /* @__PURE__ */ jsx3(
    FloatButtonBase,
    {
      type: "primary",
      shape: "circle",
      className: ["mimicus-float-btn--back-top", className].filter(Boolean).join(" "),
      style,
      icon: icon ?? /* @__PURE__ */ jsx3("span", { className: "mimicus-text-icon", children: "\u2191" }),
      tooltip: "Volver arriba",
      onClick: scrollTop
    }
  );
}
function FloatButtonRoot(props) {
  return /* @__PURE__ */ jsx3(FloatButtonBase, { ...props });
}
var FloatButton = Object.assign(FloatButtonRoot, {
  Group: FloatButtonGroup,
  BackTop: FloatButtonBackTop
});
function Fab(props) {
  return /* @__PURE__ */ jsx3(FloatButton, { type: props.color === "secondary" ? "default" : "primary", ...props });
}
function IconButton({ color, variant = "text", className, style, children, icon, ...rest }) {
  return /* @__PURE__ */ jsx3(
    Button,
    {
      ...rest,
      variant,
      color,
      shape: "circle",
      icon: icon ?? children,
      className: ["mimicus-icon-btn", className].filter(Boolean).join(" "),
      style: { width: "fit-content", ...style }
    }
  );
}

// src/lib/cardHelpers.ts
var px = (n) => `${n.toFixed(2)}px`;
var clamp01 = (n) => Math.max(0, Math.min(1, n));
var rgba = (r, g, b, a) => `rgba(${r},${g},${b},${a.toFixed(4)})`;
var boxShadowLayer = (inset, ox, oy, blur, spread, color) => `${inset ? "inset " : ""}${px(ox)} ${px(oy)} ${px(blur)} ${px(spread)} ${color}`;
function insetSigns(angleDeg) {
  const known = { 0: [-1, 0], 90: [0, 1], 180: [1, 0], 270: [0, -1] };
  const preset = known[angleDeg];
  if (preset) return preset;
  const rad = angleDeg * Math.PI / 180;
  const cos = Math.cos(rad);
  const sin = -Math.sin(rad);
  if (Math.abs(cos) < 1e-15 && Math.abs(sin) < 1e-15) return [-1, -1];
  let sx = -Math.sign(cos);
  let sy = -Math.sign(sin);
  if (sx === 0) sx = -Math.sign(sin) || -1;
  if (sy === 0) sy = -Math.sign(cos) || -1;
  return [sx, sy];
}
function decodeRelieve(n) {
  const packed = Math.floor(Number(n)) || 0;
  const percent = Math.min(100, Math.max(0, packed & 127));
  let angleIndex = packed >> 7 & 15;
  if (angleIndex > 8) angleIndex = 0;
  return {
    percent,
    angleIndex,
    elevation: packed >> 11 !== 0 ? Math.min(100, Math.max(0, packed >> 11 & 127)) : 10
  };
}
function cardShadow(vrnt, rlv) {
  if (vrnt === "flat") return void 0;
  const { percent, angleIndex, elevation } = decodeRelieve(Number(rlv) || 0);
  const angleDeg = angleIndex <= 0 || angleIndex > 8 ? 320 : (angleIndex - 1) * 45;
  const layers = [];
  if (elevation > 0) {
    const t = clamp01(elevation / 100);
    const rad = (angleIndex > 1 ? (angleDeg + 180) % 360 : angleDeg) * Math.PI / 180;
    const dist = t * 24;
    layers.push(boxShadowLayer(false, dist * Math.cos(rad), -dist * Math.sin(rad), 2 + t * 15, t * 3, colorMix(rgba(0, 0, 0, 1), "transparent", 95 - 10 * t)));
  }
  const relief = percent - 50;
  if (relief !== 0) {
    const t = Math.min(1, Math.abs(relief) / 50);
    const curve = Math.pow(t, 0.7);
    const maxInset = 6 * 0.8;
    const insetLen = curve * maxInset;
    const blur = Math.max(0.5, (1 - curve) * maxInset);
    const concave = relief < 0;
    const strength = concave ? Math.min(2 * t * 0.7, 0.1) * 0.6 : Math.min(t * 0.7, 0.05);
    const light = rgba(255, 255, 255, clamp01(strength * (concave ? 0.3 : 1)));
    const dark = rgba(0, 0, 0, (concave ? Math.min(strength * 2.5 * 1.7, 1) : strength) * 0.5);
    const spread = (concave ? Math.max(blur * 2, 2) : blur) + 3 * clamp01((percent - 50) / 50);
    const [sx, sy] = insetSigns(angleDeg);
    layers.push(boxShadowLayer(true, sx * insetLen, sy * insetLen, relief > 0 ? spread : blur, 0, relief > 0 ? light : dark));
    layers.push(boxShadowLayer(true, -sx * insetLen, -sy * insetLen, relief > 0 ? blur : spread, 0, relief > 0 ? dark : light));
  }
  return layers.length > 0 ? layers.join(", ") : void 0;
}
function cardBg(vrnt, rlv, clr) {
  if (!["solid", "onion", "flat"].includes(String(vrnt))) return "";
  const { percent } = decodeRelieve(Number(rlv) || 0);
  const onion = vrnt === "onion";
  if (percent <= 50) {
    const t = (50 - percent) / 50;
    return colorMix(colorMix(onion ? "transparent" : clr, resolveColor("bg"), 50 * t), "black", 3 * t);
  }
  return colorMix(onion ? "transparent" : clr, "white", 5 * ((percent - 50) / 50));
}

// src/components/Card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var PADDING_BY_SIZE = { xs: "0.35rem", sm: "0.4rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
var DEFAULT_RELIEVE = 55;
function Card({
  inline = false,
  variant = "",
  relieve = -1,
  sizew = "md",
  className,
  style,
  children,
  ...rest
}) {
  const variantAttrs = surfaceVariantAttrs(variant, "solid");
  const normalizedVariant = variantAttrs["data-variant"];
  const resolvedRelieve = (relieve ?? -1) < 0 ? DEFAULT_RELIEVE : relieve;
  const borderColor = mkSemanticBorder("neutral", 50, 85);
  const autoBoxShadow = normalizedVariant === "solid" || normalizedVariant === "onion";
  const autoBackground = normalizedVariant === "solid" || normalizedVariant === "onion" || normalizedVariant === "flat";
  const baseBg = cardBg(normalizedVariant, resolvedRelieve, resolveColor("card"));
  const fillBg = normalizedVariant === "onion" ? colorMix(baseBg, "transparent", 60) : baseBg;
  const boxShadow = autoBoxShadow ? cardShadow(normalizedVariant, resolvedRelieve) : void 0;
  const cardStyle = {
    color: resolveColor("color"),
    padding: PADDING_BY_SIZE[sizew] || PADDING_BY_SIZE.md,
    border: `1px solid ${borderColor}`,
    ...boxShadow ? { boxShadow } : {},
    ...autoBackground ? { backgroundColor: fillBg } : {},
    ...style && typeof style === "object" ? style : {}
  };
  const Tag2 = inline ? "span" : "div";
  return /* @__PURE__ */ jsx4(
    Tag2,
    {
      ...rest,
      className: ["card-root", className].filter(Boolean).join(" "),
      style: cardStyle,
      "data-variant": normalizedVariant,
      children
    }
  );
}

// src/components/GlassHeaderBand.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function GlassHeaderBand({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  compact = false,
  className = "",
  as: Tag2 = "header",
  sectionColor,
  children
}) {
  const rootClass = ["mimicus-glass-header", compact && "mimicus-glass-header--compact", className].filter(Boolean).join(" ");
  const accentStyle = sectionColor ? { "--sm-accent": resolveColor(sectionColor) } : void 0;
  return /* @__PURE__ */ jsxs3(Tag2, { className: rootClass, "data-section-color": sectionColor || void 0, style: accentStyle, children: [
    icon !== false && icon ? /* @__PURE__ */ jsx5("span", { className: "mimicus-glass-header__icon", "aria-hidden": true, children: /* @__PURE__ */ jsx5(Icon, { icon }) }) : null,
    /* @__PURE__ */ jsxs3("div", { className: "mimicus-glass-header__body", children: [
      /* @__PURE__ */ jsx5("span", { id: titleId, className: "mimicus-glass-header__title", children: title }),
      subtitle ? /* @__PURE__ */ jsx5("span", { className: "mimicus-glass-header__subtitle", children: subtitle }) : null
    ] }),
    children ? /* @__PURE__ */ jsx5("div", { className: "mimicus-glass-header__tools", children }) : null
  ] });
}

// src/components/TitleCard.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function TitleCard({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  sectionColor,
  className = "",
  as = "div",
  children
}) {
  return /* @__PURE__ */ jsx6(
    GlassHeaderBand,
    {
      as,
      compact: true,
      title,
      titleId,
      icon,
      subtitle,
      sectionColor,
      className: ["mimicus-title-card", className].filter(Boolean).join(" "),
      children
    }
  );
}

// src/components/CodeBlock.tsx
import { useEffect as useEffect4, useRef as useRef2, useState as useState4 } from "react";

// src/codemirror/constants.ts
var CODEMIRROR_VERSION = "5.65.18";
var CODEMIRROR_CDN = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}`;

// src/codemirror/lazyLoad.ts
var LAZY_CSS_ATTR = "data-mimicus-cm-href";
var LAZY_SCRIPT_ATTR = "data-mimicus-cm-src";
var LAZY_SCRIPT_READY = "data-mimicus-cm-ready";
var CM_STYLES = [
  `${CODEMIRROR_CDN}/codemirror.min.css`,
  `${CODEMIRROR_CDN}/theme/dracula.min.css`
];
var CM_SCRIPT_SQL = `${CODEMIRROR_CDN}/mode/sql/sql.min.js`;
var CM_SCRIPT_CSS = `${CODEMIRROR_CDN}/mode/css/css.min.js`;
var CM_SCRIPTS = [
  `${CODEMIRROR_CDN}/codemirror.min.js`,
  `${CODEMIRROR_CDN}/mode/javascript/javascript.min.js`
];
function ensureStylesheet(href) {
  const url = String(href || "").trim();
  if (!url || typeof document === "undefined") return Promise.resolve();
  const sel = `link[${LAZY_CSS_ATTR}="${url}"]`;
  if (document.querySelector(sel)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.setAttribute(LAZY_CSS_ATTR, url);
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`CSS no carg\xF3: ${url}`));
    document.head.appendChild(link);
  });
}
function loadScript(src) {
  const url = String(src || "").trim();
  if (!url || typeof document === "undefined") return Promise.resolve();
  const sel = `script[${LAZY_SCRIPT_ATTR}="${url}"]`;
  const existing = document.querySelector(sel);
  if (existing) {
    return existing.getAttribute(LAZY_SCRIPT_READY) === "1" ? Promise.resolve() : new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Script no carg\xF3: ${url}`)), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = url;
    el.async = false;
    el.setAttribute(LAZY_SCRIPT_ATTR, url);
    el.onload = () => {
      el.setAttribute(LAZY_SCRIPT_READY, "1");
      resolve();
    };
    el.onerror = () => reject(new Error(`Script no carg\xF3: ${url}`));
    document.head.appendChild(el);
  });
}
async function loadScriptsSequential(urls) {
  for (const src of urls) await loadScript(src);
}
var cmLoad = null;
function ensureCodeMirrorLoaded(opts = {}) {
  if (typeof window !== "undefined" && window.CodeMirror) return Promise.resolve();
  if (cmLoad) return cmLoad;
  const scripts = [...CM_SCRIPTS];
  if (opts.sql) scripts.splice(1, 0, CM_SCRIPT_SQL);
  if (opts.css) scripts.push(CM_SCRIPT_CSS);
  cmLoad = (async () => {
    await Promise.all(CM_STYLES.map(ensureStylesheet));
    await loadScriptsSequential(scripts);
    if (typeof window.CodeMirror === "undefined") throw new Error("CodeMirror no disponible tras carga CDN");
  })().catch((err) => {
    cmLoad = null;
    throw err;
  });
  return cmLoad;
}
function ensureCodeMirrorCss() {
  if (typeof document === "undefined") return Promise.resolve();
  return Promise.all(CM_STYLES.map(ensureStylesheet));
}

// src/codemirror/mount.ts
function readMimicusLuminance() {
  if (typeof document === "undefined") return "dark";
  const l = document.documentElement.getAttribute("data-luminance");
  if (l === "light" || l === "dark") return l;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}
function resolveCodeMirrorTheme(luminance = readMimicusLuminance()) {
  return luminance === "light" ? "default" : "dracula";
}
function resolveMode(opts = {}) {
  if (opts.json) return { name: "javascript", json: true };
  if (opts.mode === "sql" || opts.mode === "text/x-sql") return "text/x-sql";
  return opts.mode || "javascript";
}
function parseCssLength(value, fallback = 160) {
  if (value == null || value === "") return fallback;
  const s = String(value).trim();
  if (s.endsWith("rem")) return parseFloat(s) * 16;
  if (s.endsWith("px")) return parseFloat(s);
  if (s.endsWith("dvh") || s.endsWith("vh")) return parseFloat(s) / 100 * window.innerHeight;
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : fallback;
}
function syncCmBoundedSize(cm, maxHeight, host, minHeight) {
  if (!cm || !maxHeight) return;
  const minH = parseCssLength(minHeight ?? "0", 0);
  const maxH = parseCssLength(maxHeight, 160);
  const wrap = cm.getOption?.("lineWrapping") === true;
  cm.refresh();
  const contentH = cm.getScrollInfo?.().height || minH;
  const h = Math.min(Math.max(contentH + 4, minH), maxH);
  const chain = [host?.closest?.(".mimicus-cm-panel--bounded"), host].filter(Boolean);
  for (const el of chain) {
    el.style.height = `${h}px`;
    el.style.maxHeight = String(maxHeight);
    if (minHeight) el.style.minHeight = String(minHeight);
    el.style.overflow = "hidden";
  }
  const wrapper = cm.getWrapperElement?.();
  if (wrapper) {
    wrapper.style.height = `${h}px`;
    wrapper.style.maxHeight = `${h}px`;
    wrapper.style.overflow = "hidden";
  }
  const scroller = cm.getScrollerElement?.();
  if (scroller) {
    scroller.style.height = `${h}px`;
    scroller.style.maxHeight = `${h}px`;
    scroller.style.overflowY = "auto";
    scroller.style.overflowX = wrap ? "hidden" : "auto";
  }
  cm.setSize(null, h);
  cm.refresh();
}
function mountCodeMirror(host, opts = {}) {
  ensureCodeMirrorCss();
  const CM = window.CodeMirror;
  if (!CM || !host) return null;
  const readOnly = !!opts.readOnly;
  const extraKeys = readOnly ? { "Ctrl-A": (cm2) => cm2.execCommand("selectAll"), "Cmd-A": (cm2) => cm2.execCommand("selectAll"), ...opts.extraKeys || {} } : { Tab: (ed) => ed.replaceSelection("  ", "end"), "Ctrl-A": (cm2) => cm2.execCommand("selectAll"), "Cmd-A": (cm2) => cm2.execCommand("selectAll"), ...opts.extraKeys || {} };
  const cm = CM(host, {
    value: opts.value ?? "",
    mode: resolveMode(opts),
    theme: opts.theme ?? resolveCodeMirrorTheme(),
    lineNumbers: opts.lineNumbers !== false,
    lineWrapping: !!opts.lineWrapping,
    readOnly,
    tabSize: 2,
    indentUnit: 2,
    indentWithTabs: false,
    viewportMargin: opts.viewportMargin ?? (readOnly && !opts.maxHeight ? Infinity : 10),
    extraKeys
  });
  if (typeof opts.onChange === "function") cm.on("change", () => opts.onChange(cm.getValue(), cm));
  return cm;
}
function destroyCodeMirror(cm) {
  if (!cm) return;
  const wrapper = cm.getWrapperElement?.();
  wrapper?.parentNode?.removeChild(wrapper);
}
async function copyEditorText(text) {
  const s = String(text ?? "");
  if (!s) return false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(s);
      return true;
    }
  } catch {
  }
  const ta = document.createElement("textarea");
  ta.value = s;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  } catch {
    document.body.removeChild(ta);
    return false;
  }
}

// src/components/CodeBlock.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function cx(...p) {
  return p.filter(Boolean).join(" ");
}
function needsSqlMode(mode) {
  return mode === "sql" || mode === "text/x-sql";
}
function needsCssMode(mode) {
  return mode === "css" || mode === "text/css";
}
function CodeBlock({
  value = "",
  onChange,
  readOnly = true,
  json = false,
  mode,
  lang,
  minHeight = "8rem",
  maxHeight,
  lineWrapping = true,
  lineNumbers = true,
  className,
  style,
  copyTitle = "Copiar",
  placeholder = ""
}) {
  const hostRef = useRef2(null);
  const cmRef = useRef2(null);
  const onChangeRef = useRef2(onChange);
  const syncingRef = useRef2(false);
  const [cmReady, setCmReady] = useState4(() => typeof window !== "undefined" && !!window.CodeMirror);
  const [copied, setCopied] = useState4(false);
  useEffect4(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  useEffect4(() => {
    if (cmReady) return void 0;
    let cancelled = false;
    ensureCodeMirrorLoaded({ sql: needsSqlMode(mode), css: needsCssMode(mode) }).then(() => {
      if (!cancelled) setCmReady(true);
    }).catch((err) => console.warn("[mimicus] CodeMirror:", err));
    return () => {
      cancelled = true;
    };
  }, [cmReady, json, mode, lang]);
  useEffect4(() => {
    const host = hostRef.current;
    if (!host || !cmReady || typeof window.CodeMirror === "undefined") return void 0;
    const cm = mountCodeMirror(host, {
      value: value || "",
      json,
      mode: mode || (lang === "jsx" ? "javascript" : void 0),
      readOnly,
      lineWrapping,
      lineNumbers,
      maxHeight,
      onChange: readOnly ? void 0 : (next) => {
        if (syncingRef.current) return;
        onChangeRef.current?.(next);
      }
    });
    cmRef.current = cm;
    const resize = () => {
      if (maxHeight) syncCmBoundedSize(cm, maxHeight, host, minHeight);
      else cm?.refresh?.();
    };
    window.addEventListener("resize", resize);
    const t = setTimeout(resize, 0);
    const t2 = setTimeout(resize, 120);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
      window.removeEventListener("resize", resize);
      destroyCodeMirror(cm);
      cmRef.current = null;
    };
  }, [cmReady, json, mode, lang, readOnly, lineWrapping, lineNumbers, maxHeight, minHeight]);
  useEffect4(() => {
    const cm = cmRef.current;
    if (!cm) return;
    const cur = cm.getValue();
    const next = value ?? "";
    if (cur === next) return;
    syncingRef.current = true;
    const scroll = cm.getScrollInfo();
    const cursor = cm.getCursor();
    cm.setValue(next);
    cm.scrollTo(scroll.left, scroll.top);
    if (next && !readOnly) cm.setCursor(cursor);
    syncingRef.current = false;
    if (maxHeight) syncCmBoundedSize(cm, maxHeight, hostRef.current, minHeight);
  }, [value, readOnly, maxHeight, minHeight]);
  useEffect4(() => {
    if (!cmReady) return void 0;
    const apply = () => {
      const cm = cmRef.current;
      if (!cm?.setOption) return;
      const next = resolveCodeMirrorTheme();
      if (cm.getOption("theme") !== next) {
        cm.setOption("theme", next);
        cm.refresh();
      }
    };
    apply();
    const unsub = subscribeTheme(apply);
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-luminance", "class"] });
    return () => {
      unsub();
      obs.disconnect();
    };
  }, [cmReady]);
  const panelClass = cx("mimicus-cm-panel", maxHeight && "mimicus-cm-panel--bounded", className);
  const hostStyle = { minHeight, ...maxHeight ? { maxHeight, overflow: "hidden" } : {} };
  async function handleCopy() {
    const text = cmRef.current?.getValue?.() ?? value;
    const ok = await copyEditorText(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }
  if (!cmReady) {
    return /* @__PURE__ */ jsxs4("div", { className: panelClass, style, children: [
      /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx7(IconButton, { "aria-label": copyTitle, onClick: () => copyEditorText(value), title: copyTitle, children: "\u29C9" }) }),
      /* @__PURE__ */ jsx7("pre", { className: "mimicus-cm-fallback", style: hostStyle, children: value || placeholder })
    ] });
  }
  return /* @__PURE__ */ jsxs4("div", { className: panelClass, style, children: [
    /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx7(IconButton, { className: "mimicus-cm-panel__copy", "aria-label": copyTitle, title: copied ? "Copiado" : copyTitle, onClick: handleCopy, children: copied ? "\u2713" : "\u29C9" }) }),
    /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-host", ref: hostRef, style: hostStyle })
  ] });
}
var CodeMirrorPanel = CodeBlock;

// src/components/typography/typographyHelpers.ts
var TYPOGRAPHY_VARIANTS = {
  h1: { tag: "h1", fontSize: "2.125rem", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" },
  h2: { tag: "h2", fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.015em" },
  h3: { tag: "h3", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
  h4: { tag: "h4", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35 },
  h5: { tag: "h5", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 },
  h6: { tag: "h6", fontSize: "1rem", fontWeight: 600, lineHeight: 1.45 },
  body1: { tag: "p", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
  body2: { tag: "p", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
  caption: { tag: "span", fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.45 },
  overline: { tag: "span", fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.5, letterSpacing: "0.08em", textTransform: "uppercase" }
};
function levelToVariant(level) {
  const n = Math.round(Number(level)) || 1;
  return `h${Math.min(6, Math.max(1, n))}`;
}
function buildTypographyStyle({ color, variant, style, lines, ellipsis }) {
  const v = (variant ? TYPOGRAPHY_VARIANTS[variant] : void 0) ?? TYPOGRAPHY_VARIANTS.body1;
  const surface = mergeSurfaceStyle(color, { style });
  const nLines = Number(lines);
  const clamp = (nLines > 0 || ellipsis) && nLines !== 0 ? {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: Math.max(1, Math.round(nLines) || 1),
    overflow: "hidden",
    textOverflow: "ellipsis"
  } : {};
  return {
    ...surface,
    style: {
      fontSize: v.fontSize,
      fontWeight: v.fontWeight,
      lineHeight: v.lineHeight,
      letterSpacing: v.letterSpacing,
      textTransform: v.textTransform,
      ...color ? { color: resolveColor(color) } : {},
      margin: 0,
      ...clamp,
      ...surface.style ?? {},
      ...style && typeof style === "object" ? style : {}
    }
  };
}
function typographyClass(parts) {
  return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
}

// src/components/typography/Typography.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function TypographyText({
  color,
  variant = "body1",
  lines = 0,
  ellipsis = false,
  strong = false,
  italic = false,
  underline = false,
  delete: del = false,
  disabled = false,
  component,
  className,
  style,
  children,
  ...rest
}) {
  const v = variant === "text" ? "body1" : variant;
  const spec = buildTypographyStyle({ color, variant: v, style, lines, ellipsis });
  const Tag2 = component ?? (v.startsWith("h") ? v : v === "body1" || v === "body2" ? "p" : "span");
  const mods = [strong && "mimicus-typography--strong", italic && "mimicus-typography--italic", underline && "mimicus-typography--underline", del && "mimicus-typography--delete", disabled && "mimicus-typography--disabled"].filter(Boolean);
  return /* @__PURE__ */ jsx8(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${v}`, ...mods, className]), "data-variant": v, "aria-disabled": disabled || void 0, children });
}
function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
  const variant = levelToVariant(level);
  const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
  const Tag2 = variant;
  return /* @__PURE__ */ jsx8(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className]), "data-level": level, "data-variant": variant, children });
}
function TypographyParagraph(props) {
  return /* @__PURE__ */ jsx8(TypographyText, { ...props, variant: props.variant ?? "body1", component: "p", className: ["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ") });
}
function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
  const spec = buildTypographyStyle({ color, variant: "body1", style, lines: 0, ellipsis: false });
  if (target === "_blank" && !rel) rel = "noopener noreferrer";
  return /* @__PURE__ */ jsx8("a", { ...rest, href: disabled ? void 0 : href, target, rel, ...spec, className: typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className]), "aria-disabled": disabled || void 0, children });
}
function Text({ sampleText, children, ...rest }) {
  const content = children ?? sampleText;
  return /* @__PURE__ */ jsx8(TypographyText, { ...rest, children: content });
}
function Headings({ color, lines = 0, sampleText, children, className, style }) {
  const text = children ?? sampleText ?? "Heading";
  return /* @__PURE__ */ jsx8("div", { className: ["mimicus-typography-headings-demo", className].filter(Boolean).join(" "), style, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ jsxs5(TypographyTitle, { level, color, lines, children: [
    text,
    " \u2014 H",
    level
  ] }, level)) });
}
function TypographyRoot(props) {
  return /* @__PURE__ */ jsx8(TypographyText, { ...props });
}
var Typography = Object.assign(TypographyRoot, {
  Text: TypographyText,
  Title: TypographyTitle,
  Paragraph: TypographyParagraph,
  Link: TypographyLink
});

// src/layout/app-layout/AppLayout.tsx
import { Children as Children3, isValidElement as isValidElement2, useMemo as useMemo2 } from "react";

// src/layout/app-layout/appLayoutVariants.ts
var PLAYGROUND_APP_LAYOUT_OPTIONS = [
  { id: "side", label: "Panel izquierdo", icon: "mdi:dock-left" },
  { id: "top-side-2", label: "Panel derecho", icon: "mdi:dock-right" }
];
var APP_LAYOUT_VARIANT_OPTIONS = [
  ...PLAYGROUND_APP_LAYOUT_OPTIONS,
  { id: "top-side", label: "Top + side" },
  { id: "top", label: "Top" }
];
function isAppLayoutVariant(value) {
  return APP_LAYOUT_VARIANT_OPTIONS.some((o) => o.id === value);
}
function normalizeAppLayoutVariant(value) {
  if (value === "top-side") return "side";
  if (isAppLayoutVariant(value)) return value;
  return "side";
}
function normalizePlaygroundAppLayoutVariant(value) {
  return value === "top-side-2" ? "top-side-2" : "side";
}
var SIDER = "var(--mimicus-app-layout-sider-w, 200px)";
function row(name, size) {
  return `"${name}" ${size}`;
}
function joinRows(...rows) {
  return rows.join("\n");
}
function appLayoutGridTemplate(variant, slots) {
  const { hasHeader, hasSider, hasFooter } = slots;
  if (variant === "side" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"sider header" auto`);
    rows2.push(`"sider content" 1fr`);
    if (hasFooter) rows2.push(`"sider footer" auto`);
    return `${joinRows(...rows2)} / ${SIDER} 1fr`;
  }
  if (variant === "top-side" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"header header" auto`);
    rows2.push(`"sider content" 1fr`);
    if (hasFooter) rows2.push(`"footer footer" auto`);
    return `${joinRows(...rows2)} / ${SIDER} 1fr`;
  }
  if (variant === "top-side-2" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"header header" auto`);
    rows2.push(`"content sider" 1fr`);
    if (hasFooter) rows2.push(`"footer footer" auto`);
    return `${joinRows(...rows2)} / 1fr ${SIDER}`;
  }
  const rows = [];
  if (hasHeader) rows.push(row("header", "auto"));
  rows.push(row("content", "1fr"));
  if (hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}
function appLayoutResponsiveGridTemplate(variant, slots) {
  if (!slots.hasSider || variant === "top") return null;
  const rows = [];
  if (slots.hasHeader) rows.push(row("header", "auto"));
  rows.push(row("sider", "auto"));
  rows.push(row("content", "1fr"));
  if (slots.hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}

// src/layout/app-layout/appLayoutContext.tsx
import { createContext, useContext, useMemo, useState as useState5 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var AppLayoutContext = createContext(null);
function AppLayoutProvider({ children, defaultSiderWidth = "200px" }) {
  const [siderWidth, setSiderWidth] = useState5(defaultSiderWidth);
  const value = useMemo(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
  return /* @__PURE__ */ jsx9(AppLayoutContext.Provider, { value, children });
}
function useAppLayoutContext() {
  return useContext(AppLayoutContext);
}

// src/layout/app-layout/AppLayoutSider.tsx
import { useEffect as useEffect5 } from "react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function AppLayoutSider({
  width = 200,
  collapsed = false,
  collapsible = false,
  collapsedWidth = 80,
  theme = "dark",
  className,
  style,
  onCollapse,
  children,
  ...rest
}) {
  const ctx = useAppLayoutContext();
  const w = collapsed ? collapsedWidth : width;
  const wCss = typeof w === "number" ? `${w}px` : w;
  const isDark = theme === "dark";
  const bg = isDark ? resolveColor("primary") : resolveColor("card");
  const fg = isDark ? "white" : resolveColor("color");
  useEffect5(() => {
    ctx?.setSiderWidth(wCss);
  }, [ctx, wCss]);
  const rootClass = [
    "mimicus-app-layout-sider",
    `mimicus-app-layout-sider--${theme}`,
    collapsed && "mimicus-app-layout-sider--collapsed",
    className
  ].filter(Boolean).join(" ");
  const mergedStyle = {
    width: "100%",
    maxWidth: wCss,
    background: bg,
    color: fg,
    ...style && typeof style === "object" ? style : {}
  };
  function toggle() {
    onCollapse?.(!collapsed);
  }
  const bodyClass = [
    "mimicus-app-layout-sider__body",
    !collapsed && "custom-scrollbar",
    collapsed && "mimicus-app-layout-sider__body--collapsed mimicus-scrollbar--hidden"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs6("aside", { ...rest, className: rootClass, style: mergedStyle, children: [
    /* @__PURE__ */ jsx10("div", { className: bodyClass, children }),
    collapsible && /* @__PURE__ */ jsx10("div", { className: "mimicus-app-layout-sider__trigger", children: /* @__PURE__ */ jsx10(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" }, children: collapsed ? "\u203A" : "\u2039" }) })
  ] });
}

// src/layout/app-layout/AppLayoutHeader.tsx
import { Children as Children2, isValidElement } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function HeaderZone({ children }) {
  return children;
}
var Brand = Object.assign((props) => /* @__PURE__ */ jsx11(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "brand" });
var Center = Object.assign((props) => /* @__PURE__ */ jsx11(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "center" });
var Tools = Object.assign((props) => /* @__PURE__ */ jsx11(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "tools" });
var Nav = Object.assign((props) => /* @__PURE__ */ jsx11(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "nav" });
function collectHeaderSlots(children) {
  const slots = { brand: null, center: null, tools: null, nav: null, extra: [] };
  Children2.forEach(children, (child) => {
    if (!isValidElement(child)) {
      if (child != null && child !== false) slots.extra.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutHeaderSlot;
    if (slotName === "brand" || slotName === "center" || slotName === "tools" || slotName === "nav") slots[slotName] = child;
    else slots.extra.push(child);
  });
  return slots;
}
function renderZone(slot, className) {
  if (!slot) return null;
  return /* @__PURE__ */ jsx11("div", { className, children: slot.props.children });
}
function AppLayoutHeaderBase({ className, barClassName, navClassName, children, ...rest }) {
  const slots = collectHeaderSlots(children);
  const hasZones = Boolean(slots.brand || slots.center || slots.tools || slots.nav);
  const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");
  if (!hasZones) {
    return /* @__PURE__ */ jsx11("header", { ...rest, className: rootClass, children });
  }
  const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");
  const navClass = ["mimicus-app-layout-header__nav", "pg-shell-header-nav", navClassName].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs7("header", { ...rest, className: rootClass, children: [
    /* @__PURE__ */ jsxs7("div", { className: barClass, children: [
      renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand"),
      renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center"),
      renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")
    ] }),
    slots.nav ? /* @__PURE__ */ jsx11("div", { className: navClass, children: slots.nav.props.children }) : null,
    slots.extra.length > 0 ? slots.extra : null
  ] });
}
var AppLayoutHeader = Object.assign(AppLayoutHeaderBase, { Brand, Center, Tools, Nav });

// src/layout/app-layout/AppLayout.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };
function collectSlots(children) {
  const slots = { header: null, sider: null, footer: null, default: [] };
  Children3.forEach(children, (child) => {
    if (!isValidElement2(child)) {
      slots.default.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutSlot;
    if (slotName === "header" || slotName === "sider" || slotName === "footer") slots[slotName] = child;
    else slots.default.push(child);
  });
  return slots;
}
function Slot({ children }) {
  return children;
}
var Header = Object.assign(
  (props) => /* @__PURE__ */ jsx12(AppLayoutHeader, { ...props }),
  {
    __appLayoutSlot: "header",
    Brand: AppLayoutHeader.Brand,
    Center: AppLayoutHeader.Center,
    Tools: AppLayoutHeader.Tools,
    Nav: AppLayoutHeader.Nav
  }
);
function SiderBase({ children, width, collapsed, collapsible, collapsedWidth, theme, onCollapse, className, style, ...rest }) {
  const useSiderChrome = width !== void 0 || collapsible || collapsed !== void 0 || theme !== void 0;
  if (useSiderChrome) {
    return /* @__PURE__ */ jsx12(
      AppLayoutSider,
      {
        width,
        collapsed,
        collapsible,
        collapsedWidth,
        theme,
        onCollapse,
        className,
        style,
        ...rest,
        children
      }
    );
  }
  return children;
}
var Sider = Object.assign(SiderBase, { __appLayoutSlot: "sider" });
var Footer = Object.assign(
  (props) => /* @__PURE__ */ jsx12(Slot, { ...props }),
  { __appLayoutSlot: "footer" }
);
function AppLayoutRoot({
  variant = "top",
  fixedHeader = false,
  fixedSider = false,
  responsive = true,
  responsiveDrawer = false,
  className,
  style,
  children,
  ...rest
}) {
  const ctx = useAppLayoutContext();
  const siderWidthCss = ctx?.siderWidth ?? "200px";
  const slots = useMemo2(() => collectSlots(children), [children]);
  const hasHeader = !!slots.header;
  const hasSider = !!slots.sider;
  const hasFooter = !!slots.footer;
  const slotFlags = { hasHeader, hasSider, hasFooter };
  const gridTemplate = appLayoutGridTemplate(variant, slotFlags);
  const responsiveGridTemplate = responsive ? appLayoutResponsiveGridTemplate(variant, slotFlags) : null;
  const rootClass = [
    "mimicus-app-layout",
    `mimicus-app-layout--${variant}`,
    hasSider && "mimicus-app-layout--has-sider",
    fixedHeader && "mimicus-app-layout--fixed-header",
    fixedSider && "mimicus-app-layout--fixed-sider",
    responsive && "mimicus-app-layout--responsive",
    responsiveDrawer && "mimicus-app-layout--drawer-sider",
    className
  ].filter(Boolean).join(" ");
  const rootStyle = {
    "--mimicus-app-layout-sider-w": siderWidthCss,
    gridTemplate,
    ...responsiveGridTemplate ? { "--mimicus-app-layout-grid-responsive": responsiveGridTemplate } : {},
    ...style && typeof style === "object" ? style : {}
  };
  return /* @__PURE__ */ jsxs8("div", { ...rest, className: rootClass, style: rootStyle, children: [
    hasHeader && /* @__PURE__ */ jsx12("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--header", children: slots.header }),
    hasSider && /* @__PURE__ */ jsx12("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--sider", children: slots.sider }),
    /* @__PURE__ */ jsx12("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--content", children: slots.default }),
    hasFooter && /* @__PURE__ */ jsx12("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--footer", children: slots.footer })
  ] });
}
var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

// src/layout/app-layout/layoutSlotContext.tsx
import { createContext as createContext2, useContext as useContext2, useEffect as useEffect6, useRef as useRef3, useState as useState6 } from "react";

// src/layout/shared/layoutHelpers.ts
var BREAKPOINT_W = { xs: 0, sm: 480, md: 600, lg: 800, xl: 1200 };
var BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
function getBreakPoint(clientWidth = 0) {
  const w = clientWidth;
  if (w < BREAKPOINT_W.sm) return "xs";
  if (w <= BREAKPOINT_W.md) return "sm";
  if (w <= BREAKPOINT_W.lg) return "md";
  if (w < BREAKPOINT_W.xl) return "lg";
  return "xl";
}
function getSizeFlags(sizew = "md") {
  const currentIdx = BREAKPOINTS.indexOf(sizew);
  const flags = { xs: false, sm: false, md: false, lg: false, xl: false };
  for (const bp of BREAKPOINTS) flags[bp] = BREAKPOINTS.indexOf(bp) <= currentIdx;
  return flags;
}
function buildLerpw(clientWidth = 0) {
  return (b0 = "sm", b1 = "xl") => {
    const w0 = BREAKPOINT_W[b0];
    const w1 = BREAKPOINT_W[b1];
    return w1 === w0 ? 0 : (clientWidth - w0) / (w1 - w0);
  };
}
function getSlotResume(sizew, clientWidth = 0) {
  return { sizew, boolszw: getSizeFlags(sizew), lerpw: buildLerpw(clientWidth), width: clientWidth };
}
var RGX_OVERFLOW_SCROLL = /\boverflow(?:-x|-y)?\s*:\s*(auto|scroll)\b/i;
function dataDebug(rest, segment) {
  if (!rest["data-element"] && !segment) return {};
  return { "data-element": [rest["data-element"], segment].flat(Infinity).filter(Boolean).join(" / ") };
}
function stylePartToString(part) {
  if (part == null || part === false) return "";
  if (typeof part === "object") {
    return Object.entries(part).filter(([, v]) => v != null && v !== "").map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${v}`).join("; ");
  }
  return String(part).trim();
}
function cssStringToStyle(str) {
  if (!str || typeof str !== "string") return {};
  const out = {};
  for (const part of str.split(";")) {
    const idx = part.indexOf(":");
    if (idx < 1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) continue;
    out[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  }
  return out;
}
function hasOverflowStyle(style = "") {
  const s = typeof style === "string" ? style : stylePartToString(style);
  return RGX_OVERFLOW_SCROLL.test(s);
}
function getScrollbarClass(cscroll = false, style) {
  return cscroll || hasOverflowStyle(style) ? "custom-scrollbar" : "";
}
var GAP_BY_SIZEW = { xs: "0.2rem", sm: "0.35rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
var JUSTIFY_ALIASES = { between: "space-between", around: "space-around", evenly: "space-evenly" };
function resolveGap(gap, sizew = "md") {
  if (gap && String(gap).trim()) return String(gap).trim();
  return GAP_BY_SIZEW[sizew] ?? GAP_BY_SIZEW.md;
}
function resolveJustify(justify) {
  if (!justify) return "";
  if (justify in JUSTIFY_ALIASES) return JUSTIFY_ALIASES[justify];
  return justify;
}
function resolveGridTemplate(cells, cellsFit = false) {
  const value = typeof cells === "string" ? cells.trim() : typeof cells === "number" ? String(cells).trim() : "";
  if (!value) return "";
  if (/^\d+(\.\d+)?$/.test(value)) {
    return `repeat(${value}, ${cellsFit ? "max-content" : "minmax(0, 1fr)"})`;
  }
  return value;
}
function joinStyle(...parts) {
  const css = parts.map(stylePartToString).filter(Boolean).join("; ");
  return css ? cssStringToStyle(css) : void 0;
}

// src/layout/app-layout/layoutSlotContext.tsx
var DEFAULT_SLOT = getSlotResume("md", 0);
var LayoutSlotContext = createContext2(DEFAULT_SLOT);
function useLayoutSlot() {
  return useContext2(LayoutSlotContext) ?? DEFAULT_SLOT;
}
function useLayoutContainer(sizewProp) {
  const ref = useRef3(null);
  const [clientWidth, setClientWidth] = useState6(0);
  const sizew = sizewProp ?? getBreakPoint(clientWidth);
  const slot = getSlotResume(sizew, clientWidth);
  useEffect6(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return void 0;
    const ro = new ResizeObserver(([entry]) => setClientWidth(entry.contentRect.width));
    ro.observe(el);
    setClientWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  const bpIndex = ["xs", "sm", "md", "lg", "xl"].indexOf(sizew);
  const vars = { "--mlg-w": `${Math.round(clientWidth)}px`, "--mlg-bp": String(bpIndex) };
  return { ref, sizew, slot, clientWidth, dataSizew: sizew, vars };
}

// src/layout/grid/BlockLayout.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }) {
  const { ref, slot, dataSizew, vars } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = { ...joinStyle(style, `display: ${inline ? "inline-block" : "block"}`), ...vars };
  return /* @__PURE__ */ jsx13(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx13("div", { ref, className: cls, style: mergedStyle, "data-sizew": dataSizew, ...rest, ...dataDebug(rest, "block-layout"), children }) });
}

// src/layout/grid/FlexLayout.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function FlexLayout({
  direction,
  wrap = false,
  inline = false,
  justify,
  items,
  gap,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}) {
  const { ref, sizew, slot, dataSizew, vars } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = {
    ...joinStyle(
      `gap: ${resolveGap(gap, sizew)}`,
      direction && `flex-direction: ${direction}`,
      `flex-wrap: ${wrap ? "wrap" : "nowrap"}`,
      justify && `justify-content: ${resolveJustify(justify)}`,
      items && `align-items: ${items}`,
      style,
      `display: ${inline ? "inline-flex" : "flex"}`
    ),
    ...vars
  };
  return /* @__PURE__ */ jsx14(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx14("div", { ref, className: cls, style: mergedStyle, "data-sizew": dataSizew, ...rest, ...dataDebug(rest, "flex-layout"), children }) });
}

// src/layout/grid/GridLayout.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function GridLayout({
  cells = "",
  cellsFit = false,
  direction = "column",
  justify,
  items,
  gap,
  inline = false,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}) {
  const { ref, sizew, slot } = useLayoutContainer(sizewProp);
  const isColumn = (direction || "column") === "column";
  const isRow = direction === "row";
  const gridTemplate = resolveGridTemplate(cells, cellsFit);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `gap: ${resolveGap(gap, sizew)}`,
    isColumn && gridTemplate && `grid-template-columns: ${gridTemplate}`,
    isRow && gridTemplate && `grid-template-rows: ${gridTemplate}`,
    isRow && "grid-auto-flow: column",
    justify && `justify-content: ${resolveJustify(justify)}`,
    items && `align-items: ${items}`,
    style,
    `display: ${inline ? "inline-grid" : "grid"}`
  );
  return /* @__PURE__ */ jsx15(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx15("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "grid-layout"), children }) });
}

// src/layout/dividers/Divider.tsx
import { Children as Children4 } from "react";
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function toCssLength(v) {
  if (v == null || v === "") return void 0;
  if (typeof v === "number") return `${v}px`;
  const s = String(v).trim();
  if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`;
  return s;
}
function Divider({
  orientation,
  vertical = false,
  variant = "solid",
  dashed = false,
  titlePlacement = "center",
  plain = false,
  orientationMargin,
  className,
  style,
  children,
  ...rest
}) {
  const axis = orientation ?? (vertical ? "vertical" : "horizontal");
  const normalizedVariant = normalizeVariant(variant, "solid");
  const lineVariant = normalizedVariant === "glow" ? "glow" : dashed ? "dashed" : normalizedVariant;
  const lineColor = resolveColor("border");
  const marginCss = axis === "horizontal" ? `1em 0` : `0 0.5em`;
  const edgeBasis = toCssLength(orientationMargin) ?? "5%";
  const hasText = children != null && children !== false && Children4.count(children) > 0;
  const cls = [
    "is-divider",
    `is-divider--${axis}`,
    `is-divider--${lineVariant}`,
    hasText && "is-divider--with-text",
    hasText && `is-divider--title-${titlePlacement}`,
    plain && "is-divider--plain",
    className
  ].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `--is-divider-color: ${lineColor}`,
    `margin: ${marginCss}`,
    axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge: ${edgeBasis}`,
    style
  );
  return /* @__PURE__ */ jsx16("div", { className: cls, style: mergedStyle, role: "separator", "aria-orientation": axis, ...dataDebug(rest, "divider"), ...rest, children: hasText ? axis === "horizontal" ? /* @__PURE__ */ jsxs9(Fragment3, { children: [
    /* @__PURE__ */ jsx16("span", { className: "is-divider__rail is-divider__rail--before", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx16("span", { className: "is-divider__content", children }),
    /* @__PURE__ */ jsx16("span", { className: "is-divider__rail is-divider__rail--after", "aria-hidden": "true" })
  ] }) : /* @__PURE__ */ jsx16("span", { className: "is-divider__content", children }) : axis === "horizontal" ? /* @__PURE__ */ jsx16("span", { className: "is-divider__rail is-divider__rail--solo", "aria-hidden": "true" }) : /* @__PURE__ */ jsx16("span", { className: "is-divider__rail is-divider__rail--solo-vertical", "aria-hidden": "true" }) });
}

// src/layout/panels/Splitter.tsx
import { useEffect as useEffect7, useRef as useRef4, useState as useState7 } from "react";

// src/layout/shared/layoutBreakpoints.ts
var LAYOUT_BP_NARROW = 768;
function subscribeNarrowViewport(onChange) {
  if (typeof window === "undefined") return () => {
  };
  const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW - 1}px)`);
  const sync = () => onChange(mq.matches);
  sync();
  mq.addEventListener("change", sync);
  return () => mq.removeEventListener("change", sync);
}

// src/layout/panels/splitterResize.ts
function clampSplitterSize(w, min, max) {
  return Math.min(max, Math.max(min, Math.round(w)));
}
function readSplitterStorage(key, fallback, min, max) {
  if (!key || typeof localStorage === "undefined") return fallback;
  try {
    const n = Number(localStorage.getItem(key));
    if (Number.isFinite(n)) return clampSplitterSize(n, min, max);
  } catch {
  }
  return fallback;
}
function writeSplitterStorage(key, w) {
  if (!key || typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(key, String(w));
  } catch {
  }
}

// src/layout/panels/Splitter.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function Splitter({
  direction = "horizontal",
  panelSize: panelSizeProp = 280,
  minSize = 180,
  maxSize = 720,
  collapsed = false,
  collapsedSize = 52,
  resizable = true,
  storageKey = "",
  responsive = true,
  panelEnd = false,
  inline = false,
  className,
  style,
  panel,
  children,
  ...rest
}) {
  const [panelSize, setPanelSize] = useState7(panelSizeProp);
  const [dragging, setDragging] = useState7(false);
  const [narrow, setNarrow] = useState7(false);
  const dragStart = useRef4({ x: 0, y: 0, size: panelSizeProp });
  const resizeHandle = useRef4(null);
  useEffect7(() => {
    setPanelSize(panelSizeProp);
  }, [panelSizeProp]);
  useEffect7(() => {
    if (storageKey) setPanelSize(readSplitterStorage(storageKey, panelSizeProp, minSize, maxSize));
    return subscribeNarrowViewport(setNarrow);
  }, [storageKey, panelSizeProp, minSize, maxSize]);
  const sizePx = collapsed ? collapsedSize : panelSize;
  const isHorizontal = direction === "horizontal";
  const stacked = responsive && narrow && isHorizontal;
  const resizeAlongX = isHorizontal && !stacked;
  const panelStyle = resizeAlongX ? { width: sizePx, flex: `0 0 ${sizePx}px` } : stacked ? { width: "100%", flex: `0 0 ${sizePx}px`, maxWidth: "100%" } : { height: sizePx, flex: `0 0 ${sizePx}px` };
  const resizeCursor = resizeAlongX ? "col-resize" : "row-resize";
  const bodyResizeClass = resizeAlongX ? "is-split-resize-active--horizontal" : "is-split-resize-active--vertical";
  const rootClass = [
    "is-splitter",
    isHorizontal ? "is-splitter--horizontal" : "is-splitter--vertical",
    inline && "is-splitter--inline",
    stacked && "is-splitter--stacked",
    responsive && "is-splitter--responsive",
    panelEnd && "is-splitter--panel-end",
    collapsed && "is-splitter--collapsed",
    dragging && "is-splitter--dragging",
    className
  ].filter(Boolean).join(" ");
  function onResizeStart(e) {
    if (collapsed || !resizable) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    resizeHandle.current?.setPointerCapture(e.pointerId);
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, size: panelSize };
    document.body.classList.add("is-split-resize-active", bodyResizeClass);
  }
  function onResizeMove(e) {
    if (!dragging) return;
    const delta = resizeAlongX ? e.clientX - dragStart.current.x : e.clientY - dragStart.current.y;
    setPanelSize(clampSplitterSize(dragStart.current.size + delta, minSize, maxSize));
  }
  function onResizeEnd(e) {
    if (!dragging) return;
    setDragging(false);
    setPanelSize((s) => {
      const next = clampSplitterSize(s, minSize, maxSize);
      writeSplitterStorage(storageKey, next);
      return next;
    });
    document.body.classList.remove("is-split-resize-active", bodyResizeClass);
    try {
      resizeHandle.current?.releasePointerCapture(e.pointerId);
    } catch {
    }
  }
  return /* @__PURE__ */ jsxs10("div", { className: rootClass, style, ...rest, children: [
    /* @__PURE__ */ jsxs10("div", { className: "is-splitter__panel", style: panelStyle, children: [
      /* @__PURE__ */ jsx17("div", { className: "is-splitter__panel-body", children: panel }),
      resizable && !collapsed && /* @__PURE__ */ jsx17(
        "div",
        {
          ref: resizeHandle,
          className: ["is-splitter__resize-handle", resizeAlongX ? "is-splitter__resize-handle--col" : "is-splitter__resize-handle--row", dragging && "is-dragging"].filter(Boolean).join(" "),
          role: "presentation",
          "aria-hidden": "true",
          title: "Arrastrar para cambiar tama\xF1o",
          style: { cursor: resizeCursor },
          onPointerDown: onResizeStart,
          onPointerMove: onResizeMove,
          onPointerUp: onResizeEnd,
          onPointerCancel: onResizeEnd
        }
      )
    ] }),
    /* @__PURE__ */ jsx17("div", { className: "is-splitter__main", children })
  ] });
}

// src/layout/panels/SidePanel.tsx
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
function View({ mode = "expanded", gap = "0.25rem", className, style, children, ...rest }) {
  const rail = mode === "rail";
  return /* @__PURE__ */ jsx18(
    "div",
    {
      ...rest,
      className: ["mimicus-side-panel-view", "pg-panel-view", rail ? "mimicus-side-panel-view--rail pg-panel-view--rail" : "mimicus-side-panel-view--expanded pg-panel-view--expanded", className].filter(Boolean).join(" "),
      style: { display: "flex", flexDirection: "column", gap, width: "100%", minWidth: 0, ...style && typeof style === "object" ? style : {} },
      children
    }
  );
}
function SidePanelBase({
  open = true,
  drawer = false,
  onClose,
  onToggle,
  collapsedView,
  expandedView,
  railView,
  children,
  closeIcon = "mdi:close",
  closeTitle = "Cerrar men\xFA",
  expandTitle = "Expandir panel",
  collapseTitle = "Compactar panel",
  className,
  style,
  ...rest
}) {
  const rail = !open && !drawer;
  const collapsed = collapsedView ?? railView;
  const bodyClass = [
    "mimicus-side-panel__body",
    "pg-sidebar-body",
    "sidebar-body",
    !rail && "custom-scrollbar pg-scrollbar",
    rail && "mimicus-side-panel__body--rail pg-sidebar-body--rail mimicus-scrollbar--hidden"
  ].filter(Boolean).join(" ");
  const content = children ?? (drawer || open ? expandedView : collapsed);
  return /* @__PURE__ */ jsxs11(
    "aside",
    {
      ...rest,
      className: ["mimicus-side-panel", "sidebar", "pg-sidebar", "pg-vt-sidebar", drawer && "mimicus-side-panel--drawer pg-sidebar--drawer", rail && "mimicus-side-panel--rail is-collapsed"].filter(Boolean).join(" "),
      style: { ...style && typeof style === "object" ? style : {} },
      children: [
        drawer && onClose && /* @__PURE__ */ jsx18("div", { className: "mimicus-side-panel__drawer-bar pg-sidebar-drawer-bar", children: /* @__PURE__ */ jsx18(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onClose, className: "sidebar-toggle-btn", title: closeTitle, style: { width: "auto", marginLeft: "auto" }, children: /* @__PURE__ */ jsx18("iconify-icon", { icon: closeIcon, "aria-hidden": true }) }) }),
        !drawer && onToggle && /* @__PURE__ */ jsx18("div", { className: ["mimicus-side-panel__header", "pg-sidebar-header", "pg-sidebar-header--panel", rail && "pg-sidebar-header--rail"].filter(Boolean).join(" "), children: /* @__PURE__ */ jsx18(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onToggle, className: ["sidebar-header-btn", rail ? "sidebar-header-btn--rail" : "sidebar-toggle-btn"].filter(Boolean).join(" "), title: open ? collapseTitle : expandTitle, style: rail ? { width: "100%", justifyContent: "center" } : { flexShrink: 0, width: "auto" }, children: /* @__PURE__ */ jsx18("iconify-icon", { icon: open ? "mdi:menu-open" : "mdi:menu", "aria-hidden": true }) }) }),
        /* @__PURE__ */ jsx18("div", { className: bodyClass, children: content })
      ]
    }
  );
}
var SidePanel = Object.assign(SidePanelBase, { View });

// src/components/display/Display.tsx
import { Children as Children5, useId, useRef as useRef5 } from "react";

// src/display/useDisplayBinding.ts
import { useEffect as useEffect8 } from "react";

// src/nav/core.ts
function on(el, type, fn, opts) {
  if (!el) return () => {
  };
  el.addEventListener(type, fn, opts);
  return () => el.removeEventListener(type, fn, opts);
}
function qs(sel, root = document) {
  return root?.querySelector?.(sel) ?? null;
}
function qsa(sel, root = document) {
  return root ? [...root.querySelectorAll(sel)] : [];
}
function parseBool(v) {
  return v === true || v === "" || v === "true" || v === "1";
}
function parseNum(v, fb = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fb;
}
function clickOutside(root, onAway) {
  const fn = (e) => {
    if (!root?.contains(e.target)) onAway(e);
  };
  const clean = on(document, "pointerdown", fn, true);
  return clean;
}
function resolveScrollRoot(root, selector) {
  if (selector) {
    const el = typeof selector === "string" ? qs(selector, document) : selector;
    if (el) return el;
  }
  return root?.closest?.("[data-mimicus-anchor-container]") ?? document;
}
function scrollToTarget(target, { offset = 0, root } = {}) {
  if (!target) return;
  const scrollEl = root === document ? null : root;
  const top = target.getBoundingClientRect().top + (scrollEl?.scrollTop ?? window.scrollY ?? 0) - offset;
  if (scrollEl) scrollEl.scrollTo({ top, behavior: "smooth" });
  else window.scrollTo({ top, behavior: "smooth" });
}
function emit(root, name, detail) {
  root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
}

// src/display/controllers.ts
function cleanupPrev(root, fn) {
  const r = root;
  r.__mimicusDisplayCleanup?.();
  r.__mimicusDisplayCleanup = fn;
}
function bindCarousel(root) {
  const track = qs("[data-mimicus-carousel-track]", root);
  const slides = qsa("[data-mimicus-carousel-slide]", root);
  const dots = qsa("[data-mimicus-carousel-dot]", root);
  const prev = qs("[data-mimicus-carousel-prev]", root);
  const next = qs("[data-mimicus-carousel-next]", root);
  if (!track || !slides.length) return () => {
  };
  const infinite = root.dataset.infinite !== "false";
  const autoplay = parseBool(root.dataset.autoplay);
  const speed = parseNum(root.dataset.speed, 500);
  const autoplaySpeed = parseNum(root.dataset.autoplaySpeed, 3e3);
  let idx = parseNum(root.dataset.activeIndex, 0);
  let timer = null;
  const go = (n, animate = true) => {
    const max = slides.length;
    if (!max) return;
    if (infinite) idx = (n % max + max) % max;
    else idx = Math.max(0, Math.min(max - 1, n));
    root.dataset.activeIndex = String(idx);
    track.style.transitionDuration = animate ? `${speed}ms` : "0ms";
    track.style.transform = `translateX(-${idx * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
      d.setAttribute("aria-selected", i === idx ? "true" : "false");
    });
    emit(root, "mimicus-carousel-change", { index: idx });
  };
  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  const start = () => {
    stop();
    if (autoplay && slides.length > 1) timer = setInterval(() => go(idx + 1), autoplaySpeed);
  };
  go(idx, false);
  start();
  const cleanups = [
    on(prev, "click", () => {
      go(idx - 1);
      start();
    }),
    on(next, "click", () => {
      go(idx + 1);
      start();
    }),
    ...dots.map((d, i) => on(d, "click", () => {
      go(i);
      start();
    })),
    () => stop()
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindCollapse(root) {
  const accordion = parseBool(root.dataset.accordion);
  const panels = qsa("[data-mimicus-collapse-panel]", root);
  const parseKeys = () => String(root.dataset.activeKey ?? "").split(",").filter(Boolean);
  const setKeys = (keys) => {
    root.dataset.activeKey = keys.join(",");
    panels.forEach((p) => {
      const open = keys.includes(p.dataset.mimicusCollapsePanel ?? "");
      p.classList.toggle("is-open", open);
      const body = qs("[data-mimicus-collapse-body]", p);
      if (body) body.hidden = !open;
      const trigger = qs("[data-mimicus-collapse-trigger]", p);
      if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    emit(root, "mimicus-collapse-change", { activeKey: accordion ? keys[0] ?? "" : keys });
  };
  setKeys(parseKeys().length ? parseKeys() : panels.filter((p) => p.dataset.defaultOpen === "true").map((p) => p.dataset.mimicusCollapsePanel ?? ""));
  const cleanups = panels.map((p) => on(qs("[data-mimicus-collapse-trigger]", p), "click", () => {
    const key = p.dataset.mimicusCollapsePanel ?? "";
    const cur = parseKeys();
    if (accordion) setKeys(cur.includes(key) ? [] : [key]);
    else setKeys(cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]);
  }));
  return () => cleanups.forEach((fn) => fn());
}
function bindTooltip(root) {
  const tip = qs("[data-mimicus-tooltip-popup]", root);
  const trigger = qs("[data-mimicus-tooltip-trigger]", root) ?? root.firstElementChild;
  if (!tip || !trigger) return () => {
  };
  const placement = root.dataset.placement ?? "top";
  let open = false;
  let hideTimer = null;
  const clearHideTimer = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  };
  const show = () => {
    clearHideTimer();
    if (open) return;
    open = true;
    root.classList.add("is-open");
    tip.hidden = false;
    tip.setAttribute("aria-hidden", "false");
    tip.dataset.placement = placement;
  };
  const hide = () => {
    clearHideTimer();
    if (!open) return;
    open = false;
    root.classList.remove("is-open");
    hideTimer = setTimeout(() => {
      if (!open) {
        tip.hidden = true;
        tip.setAttribute("aria-hidden", "true");
      }
      hideTimer = null;
    }, 120);
  };
  const scheduleHide = () => {
    clearHideTimer();
    hideTimer = setTimeout(hide, 60);
  };
  hide();
  const cleanups = [
    on(root, "pointerenter", show),
    on(root, "pointerleave", scheduleHide),
    on(root, "focusin", show),
    on(root, "focusout", (e) => {
      const next = e.relatedTarget;
      if (next && root.contains(next)) return;
      scheduleHide();
    }),
    on(root, "keydown", (e) => {
      if (e.key === "Escape" && open) hide();
    }),
    () => clearHideTimer()
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindSegmented(root) {
  const btns = qsa("[data-mimicus-segmented]", root);
  const set = (v) => {
    root.dataset.value = v;
    btns.forEach((b) => {
      const on2 = b.dataset.mimicusSegmented === v;
      b.classList.toggle("is-active", on2);
      b.setAttribute("aria-pressed", on2 ? "true" : "false");
    });
    emit(root, "mimicus-segmented-change", { value: v });
  };
  set(root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusSegmented ?? btns[0]?.dataset.mimicusSegmented ?? "");
  return btns.map((b) => on(b, "click", () => set(b.dataset.mimicusSegmented ?? "")));
}
function bindTree(root) {
  const checkable = parseBool(root.dataset.checkable);
  const nodes = qsa("[data-mimicus-tree-node]", root);
  const toggleExpand = (node) => {
    const open = !node.classList.contains("is-expanded");
    node.classList.toggle("is-expanded", open);
    const child = qs("[data-mimicus-tree-children]", node);
    if (child) child.hidden = !open;
    const btn = qs("[data-mimicus-tree-switcher]", node);
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  const cleanups = nodes.flatMap((node) => {
    const switcher = qs("[data-mimicus-tree-switcher]", node);
    const checkbox = qs("[data-mimicus-tree-check]", node);
    const outs = [];
    if (switcher) outs.push(on(switcher, "click", (e) => {
      e.stopPropagation();
      toggleExpand(node);
    }));
    if (checkable && checkbox) outs.push(on(checkbox, "change", () => {
      node.classList.toggle("is-checked", checkbox.checked);
      emit(root, "mimicus-tree-check", { key: node.dataset.mimicusTreeNode, checked: checkbox.checked });
    }));
    return outs;
  });
  return () => cleanups.forEach((fn) => fn());
}
function bindCalendar(root) {
  const grid = qs("[data-mimicus-calendar-grid]", root);
  const title = qs("[data-mimicus-calendar-title]", root);
  const prev = qs("[data-mimicus-calendar-prev]", root);
  const next = qs("[data-mimicus-calendar-next]", root);
  if (!grid) return () => {
  };
  let year = parseNum(root.dataset.year, (/* @__PURE__ */ new Date()).getFullYear());
  let month = parseNum(root.dataset.month, (/* @__PURE__ */ new Date()).getMonth());
  const paint = () => {
    root.dataset.year = String(year);
    root.dataset.month = String(month);
    if (title) title.textContent = new Date(year, month, 1).toLocaleDateString(void 0, { month: "long", year: "numeric" });
    grid.innerHTML = "";
    const first = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const today = /* @__PURE__ */ new Date();
    for (let i = 0; i < first; i++) {
      const cell = document.createElement("span");
      cell.className = "mimicus-calendar__cell mimicus-calendar__cell--empty";
      grid.appendChild(cell);
    }
    for (let d = 1; d <= days; d++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "mimicus-calendar__cell";
      cell.textContent = String(d);
      if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) cell.classList.add("is-today");
      cell.addEventListener("click", () => {
        qsa(".is-selected", grid).forEach((el) => el.classList.remove("is-selected"));
        cell.classList.add("is-selected");
        emit(root, "mimicus-calendar-select", { year, month: month + 1, day: d });
      });
      grid.appendChild(cell);
    }
  };
  paint();
  return [
    on(prev, "click", () => {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      paint();
    }),
    on(next, "click", () => {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      paint();
    })
  ];
}
function bindTableSort(root) {
  const headers = qsa("[data-mimicus-table-sort]", root);
  if (!headers.length) return () => {
  };
  const tbody = qs("tbody", root);
  const cleanups = headers.map((th) => on(th, "click", () => {
    const col = parseNum(th.dataset.mimicusTableSort, 0);
    const asc = th.dataset.sortDir !== "asc";
    headers.forEach((h) => {
      h.dataset.sortDir = "";
      h.classList.remove("is-asc", "is-desc");
    });
    th.dataset.sortDir = asc ? "asc" : "desc";
    th.classList.add(asc ? "is-asc" : "is-desc");
    if (!tbody) return;
    const rows = [...tbody.querySelectorAll("tr")];
    rows.sort((a, b) => {
      const av = a.children[col]?.textContent?.trim() ?? "";
      const bv = b.children[col]?.textContent?.trim() ?? "";
      const an = Number(av);
      const bn = Number(bv);
      const cmp = Number.isFinite(an) && Number.isFinite(bn) ? an - bn : av.localeCompare(bv);
      return asc ? cmp : -cmp;
    });
    rows.forEach((r) => tbody.appendChild(r));
    emit(root, "mimicus-table-sort", { column: col, direction: asc ? "asc" : "desc" });
  }));
  return () => cleanups.forEach((fn) => fn());
}
function bindTour(root) {
  const steps = qsa("[data-mimicus-tour-step]", root);
  const overlay = qs("[data-mimicus-tour-overlay]", root);
  const card = qs("[data-mimicus-tour-card]", root);
  const titleEl = qs("[data-mimicus-tour-title]", root);
  const descEl = qs("[data-mimicus-tour-desc]", root);
  const prev = qs("[data-mimicus-tour-prev]", root);
  const next = qs("[data-mimicus-tour-next]", root);
  const close = qs("[data-mimicus-tour-close]", root);
  const scope = root.closest(".mimicus-tour-demo");
  const local = Boolean(scope);
  let idx = 0;
  const clearTargets = () => {
    qsa(".mimicus-tour-target", document).forEach((el) => el.classList.remove("mimicus-tour-target"));
  };
  const resetCard = () => {
    if (!card) return;
    card.style.top = "";
    card.style.left = "";
    card.style.right = "";
    card.style.bottom = "";
    card.style.transform = "";
    card.style.position = local ? "absolute" : "fixed";
  };
  const placeCard = (target) => {
    if (!card) return;
    resetCard();
    const box = local && scope ? scope.getBoundingClientRect() : { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    if (!target) {
      card.style.top = "50%";
      card.style.left = "50%";
      card.style.transform = "translate(-50%, -50%)";
      return;
    }
    const rect = target.getBoundingClientRect();
    const top = rect.bottom - box.top + 8;
    let left = rect.left - box.left;
    const maxLeft = Math.max(8, box.width - card.offsetWidth - 8);
    left = Math.max(8, Math.min(left, maxLeft));
    card.style.top = `${Math.max(8, top)}px`;
    card.style.left = `${left}px`;
  };
  const paint = () => {
    const open = parseBool(root.dataset.open);
    if (!open || !steps.length) {
      root.classList.remove("is-active");
      if (overlay) overlay.hidden = true;
      clearTargets();
      return;
    }
    root.classList.add("is-active");
    if (overlay) {
      overlay.hidden = false;
      overlay.style.position = local ? "absolute" : "fixed";
    }
    const step = steps[idx];
    const targetSel = step?.dataset.target;
    const target = targetSel ? qs(targetSel, scope ?? root) ?? qs(targetSel, document) : null;
    steps.forEach((s, i) => s.classList.toggle("is-current", i === idx));
    if (titleEl) titleEl.textContent = step?.dataset.title ?? "";
    if (descEl) descEl.textContent = step?.dataset.description ?? "";
    clearTargets();
    if (target) target.classList.add("mimicus-tour-target");
    requestAnimationFrame(() => placeCard(target));
    if (prev) prev.disabled = idx <= 0;
    if (next) next.textContent = idx >= steps.length - 1 ? "Finalizar" : "Siguiente";
  };
  const end = () => {
    root.dataset.open = "false";
    clearTargets();
    paint();
    emit(root, "mimicus-tour-close");
  };
  paint();
  return [
    on(next, "click", () => {
      if (idx >= steps.length - 1) end();
      else {
        idx += 1;
        paint();
      }
    }),
    on(prev, "click", () => {
      if (idx > 0) {
        idx -= 1;
        paint();
      }
    }),
    on(close, "click", end),
    on(overlay, "click", end),
    () => clearTargets()
  ];
}
var BINDERS = {
  carousel: bindCarousel,
  collapse: bindCollapse,
  tooltip: bindTooltip,
  segmented: bindSegmented,
  tree: bindTree,
  calendar: bindCalendar,
  table: bindTableSort,
  tour: bindTour
};
function bindDisplayComponent(root) {
  const r = root;
  const type = r?.dataset?.mimicusDisplay;
  cleanupPrev(r, () => {
  });
  const cleanup = (type ? BINDERS[type]?.(r) : void 0) ?? (() => {
  });
  const fn = Array.isArray(cleanup) ? () => cleanup.forEach((c) => c?.()) : cleanup;
  r.__mimicusDisplayCleanup = fn;
  return () => {
    fn();
    delete r.__mimicusDisplayCleanup;
  };
}
function mountDisplay(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-display]", document) : [scope].filter((el) => el?.dataset?.mimicusDisplay);
  return () => roots.map(bindDisplayComponent).forEach((fn) => fn());
}

// src/display/useDisplayBinding.ts
function useDisplayBinding(ref, type, deps = []) {
  useEffect8(() => {
    const el = ref.current;
    if (!el || !type) return void 0;
    el.dataset.mimicusDisplay = type;
    return bindDisplayComponent(el);
  }, deps);
}

// src/components/display/Display.tsx
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
function cx2(...p) {
  return p.filter(Boolean).join(" ");
}
function initials(name) {
  return String(name ?? "?").trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}
function hashColor(s) {
  let h = 0;
  const str = String(s);
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return `hsl(${Math.abs(h) % 360} 55% 45%)`;
}
function Badge({
  count,
  dot,
  showZero = false,
  max = 99,
  color = "primary",
  offset,
  children,
  className,
  style,
  ...rest
}) {
  const n = Number(count);
  const show = dot || (showZero ? n >= 0 : n > 0);
  const label = Number.isFinite(n) && n > max ? `${max}+` : count;
  return /* @__PURE__ */ jsxs12("span", { ...rest, className: cx2("mimicus-badge-wrap", className), style, children: [
    children,
    show && /* @__PURE__ */ jsx19(
      "sup",
      {
        className: cx2("mimicus-badge", dot && "mimicus-badge--dot", `mimicus-badge--${color}`),
        style: offset ? { transform: `translate(${offset[0] ?? 0}px, ${offset[1] ?? 0}px)` } : void 0,
        children: !dot && label
      }
    )
  ] });
}
function Tag({
  variant = "ghost",
  color,
  shape = "pill",
  closable,
  icon,
  uppercase,
  onClose,
  children,
  className,
  style,
  ...rest
}) {
  return /* @__PURE__ */ jsxs12(
    "span",
    {
      ...rest,
      className: cx2("mimicus-tag", `mimicus-tag--${variant}`, shape && `mimicus-tag--${shape}`, uppercase && "mimicus-tag--upper", className),
      style: mergeSurfaceStyle(color, style),
      children: [
        icon && /* @__PURE__ */ jsx19("span", { className: "mimicus-tag__icon", children: icon }),
        /* @__PURE__ */ jsx19("span", { className: "mimicus-tag__text", children }),
        closable && /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-tag__close", "aria-label": "Cerrar", onClick: onClose, children: "\xD7" })
      ]
    }
  );
}
var Chip = Tag;
function Avatar({ src, alt, variant = "circular", children, className, style, ...rest }) {
  const label = alt ?? (typeof children === "string" ? children : "?");
  return /* @__PURE__ */ jsx19(
    "span",
    {
      ...rest,
      className: cx2("mimicus-avatar", `mimicus-avatar--${variant}`, className),
      style,
      title: alt,
      children: src ? /* @__PURE__ */ jsx19("img", { className: "mimicus-avatar__img", src, alt: alt ?? "" }) : /* @__PURE__ */ jsx19("span", { className: "mimicus-avatar__fallback", style: { background: hashColor(label) }, children: children ?? initials(label) })
    }
  );
}
function AvatarGroup({ max = 5, total, spacing = "medium", children, className, style, ...rest }) {
  const items = Children5.toArray(children);
  const shown = items.slice(0, max);
  const surplus = (total ?? items.length) - shown.length;
  return /* @__PURE__ */ jsxs12("span", { ...rest, className: cx2("mimicus-avatar-group", `mimicus-avatar-group--${spacing}`, className), style, children: [
    shown,
    surplus > 0 && /* @__PURE__ */ jsxs12(Avatar, { className: "mimicus-avatar-group__surplus", children: [
      "+",
      surplus
    ] })
  ] });
}
function Carousel({
  autoplay = false,
  autoplaySpeed = 3e3,
  arrows = false,
  dots = true,
  infinite = true,
  speed = 500,
  dotPlacement = "bottom",
  fade,
  children,
  className,
  style,
  defaultActiveIndex = 0,
  ...rest
}) {
  const ref = useRef5(null);
  const slides = Children5.toArray(children);
  useDisplayBinding(ref, "carousel", [slides.length, autoplay, arrows, dots]);
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      ...rest,
      ref,
      className: cx2("mimicus-carousel", fade && "mimicus-carousel--fade", `mimicus-carousel--dots-${dotPlacement}`, className),
      style,
      "data-mimicus-display": "carousel",
      "data-autoplay": autoplay,
      "data-autoplay-speed": autoplaySpeed,
      "data-infinite": infinite,
      "data-speed": speed,
      "data-active-index": defaultActiveIndex,
      children: [
        arrows && /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--prev", "data-mimicus-carousel-prev": true, "aria-label": "Anterior", children: "\u2039" }),
        /* @__PURE__ */ jsx19("div", { className: "mimicus-carousel__viewport", children: /* @__PURE__ */ jsx19("div", { className: "mimicus-carousel__track", "data-mimicus-carousel-track": true, children: slides.map((slide, i) => /* @__PURE__ */ jsx19("div", { className: cx2("mimicus-carousel__slide", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-slide": true, children: slide }, i)) }) }),
        arrows && /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--next", "data-mimicus-carousel-next": true, "aria-label": "Siguiente", children: "\u203A" }),
        dots && slides.length > 1 && /* @__PURE__ */ jsx19("div", { className: "mimicus-carousel__dots", role: "tablist", children: slides.map((_, i) => /* @__PURE__ */ jsx19("button", { type: "button", className: cx2("mimicus-carousel__dot", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-dot": true, "aria-label": `Slide ${i + 1}` }, i)) })
      ]
    }
  );
}
function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }) {
  const autoId = useId();
  const key = panelKey ?? autoId;
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-collapse__panel", defaultOpen && "is-open", className), "data-mimicus-collapse-panel": key, "data-default-open": defaultOpen, children: [
    /* @__PURE__ */ jsxs12("button", { type: "button", className: "mimicus-collapse__trigger", "data-mimicus-collapse-trigger": true, "aria-expanded": defaultOpen ? "true" : "false", children: [
      /* @__PURE__ */ jsx19("span", { className: "mimicus-collapse__arrow", "aria-hidden": true, children: "\u25B8" }),
      /* @__PURE__ */ jsx19("span", { className: "mimicus-collapse__header", children: header })
    ] }),
    /* @__PURE__ */ jsx19("div", { className: "mimicus-collapse__body", "data-mimicus-collapse-body": true, hidden: !defaultOpen, children })
  ] });
}
function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }) {
  const ref = useRef5(null);
  const keys = activeKey ?? defaultActiveKey;
  useDisplayBinding(ref, "collapse", [accordion, keys]);
  return /* @__PURE__ */ jsx19(
    "div",
    {
      ...rest,
      ref,
      className: cx2("mimicus-collapse", className),
      style,
      "data-mimicus-display": "collapse",
      "data-accordion": accordion,
      "data-active-key": Array.isArray(keys) ? keys.join(",") : keys ?? "",
      children
    }
  );
}
Collapse.Panel = CollapsePanel;
var Accordion = Collapse;
function DescriptionsItem({ label, span = 1, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-descriptions__item", className), style: { gridColumn: `span ${span}` }, children: [
    /* @__PURE__ */ jsx19("dt", { className: "mimicus-descriptions__label", children: label }),
    /* @__PURE__ */ jsx19("dd", { className: "mimicus-descriptions__content", children })
  ] });
}
function Descriptions({ title, bordered = false, column = 3, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", className), style, children: [
    title && /* @__PURE__ */ jsx19("div", { className: "mimicus-descriptions__title", children: title }),
    /* @__PURE__ */ jsx19("dl", { className: "mimicus-descriptions__list", style: { "--mimicus-desc-cols": column }, children })
  ] });
}
Descriptions.Item = DescriptionsItem;
function Empty({ description = "No data", image = "default", children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-empty", image === "simple" && "mimicus-empty--simple", className), style, children: [
    /* @__PURE__ */ jsx19("div", { className: "mimicus-empty__image", "aria-hidden": true }),
    description && /* @__PURE__ */ jsx19("p", { className: "mimicus-empty__desc", children: description }),
    children && /* @__PURE__ */ jsx19("div", { className: "mimicus-empty__footer", children })
  ] });
}
function paintQr(canvas, value, size) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const n = 21;
  const cell = Math.floor(size / n);
  const pad = Math.floor((size - cell * n) / 2);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#111";
  const bit = (r, c) => {
    const code = String(value).charCodeAt((r * n + c) % Math.max(1, String(value).length)) ^ r * 7 + c * 13;
    if (r < 7 && c < 7) return r === 0 || r === 6 || c === 0 || c === 6 || r >= 2 && r <= 4 && c >= 2 && c <= 4;
    if (r < 7 && c >= n - 7) return r === 0 || r === 6 || c === n - 7 || c === n - 1 || r >= 2 && r <= 4 && c >= n - 5 && c <= n - 3;
    if (r >= n - 7 && c < 7) return r === n - 7 || r === n - 1 || c === 0 || c === 6 || r >= n - 5 && r <= n - 3 && c >= 2 && c <= 4;
    return code % 3 === 0;
  };
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (bit(r, c)) ctx.fillRect(pad + c * cell, pad + r * cell, cell, cell);
}
function QRCode({ value = "", size = 128, bordered = true, className, style, ...rest }) {
  const ref = (el) => {
    if (el) paintQr(el, value, size);
  };
  return /* @__PURE__ */ jsx19("span", { ...rest, className: cx2("mimicus-qrcode", bordered && "mimicus-qrcode--bordered", className), style, children: /* @__PURE__ */ jsx19("canvas", { ref, width: size, height: size, className: "mimicus-qrcode__canvas", "aria-label": `QR: ${value}` }) });
}
function Segmented({ options = [], value, defaultValue, onChange, block, className, style, ...rest }) {
  const ref = useRef5(null);
  const cur = value ?? defaultValue ?? options[0]?.value;
  useDisplayBinding(ref, "segmented", [cur, options.length]);
  return /* @__PURE__ */ jsx19(
    "div",
    {
      ...rest,
      ref,
      className: cx2("mimicus-segmented", block && "mimicus-segmented--block", className),
      style,
      "data-mimicus-display": "segmented",
      "data-value": cur,
      role: "group",
      children: options.map((opt) => /* @__PURE__ */ jsxs12(
        "button",
        {
          type: "button",
          className: cx2("mimicus-segmented__item", cur === opt.value && "is-active"),
          "data-mimicus-segmented": opt.value,
          "aria-pressed": cur === opt.value ? "true" : "false",
          onClick: () => onChange?.(opt.value),
          children: [
            opt.icon,
            opt.label ?? opt.value
          ]
        },
        opt.value
      ))
    }
  );
}
function Statistic({ title, value, prefix, suffix, precision, className, style, ...rest }) {
  const fmt = precision != null && Number.isFinite(Number(value)) ? Number(value).toFixed(precision) : value;
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-statistic", className), style, children: [
    title && /* @__PURE__ */ jsx19("div", { className: "mimicus-statistic__title", children: title }),
    /* @__PURE__ */ jsxs12("div", { className: "mimicus-statistic__value", children: [
      prefix && /* @__PURE__ */ jsx19("span", { className: "mimicus-statistic__prefix", children: prefix }),
      /* @__PURE__ */ jsx19("span", { className: "mimicus-statistic__number", children: fmt }),
      suffix && /* @__PURE__ */ jsx19("span", { className: "mimicus-statistic__suffix", children: suffix })
    ] })
  ] });
}
function Table({ columns = [], dataSource = [], bordered, sortable, pagination, className, style, children, ...rest }) {
  const ref = useRef5(null);
  useDisplayBinding(ref, sortable ? "table" : null, [sortable, dataSource.length]);
  if (children) {
    return /* @__PURE__ */ jsx19("table", { ...rest, ref, className: cx2("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children });
  }
  return /* @__PURE__ */ jsxs12("table", { ...rest, ref, className: cx2("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children: [
    /* @__PURE__ */ jsx19("thead", { children: /* @__PURE__ */ jsx19("tr", { children: columns.map((col, i) => /* @__PURE__ */ jsx19("th", { "data-mimicus-table-sort": sortable && col.sorter ? i : void 0, className: sortable && col.sorter ? "mimicus-table__sortable" : void 0, children: col.title }, col.key ?? i)) }) }),
    /* @__PURE__ */ jsx19("tbody", { children: dataSource.map((row2, ri) => /* @__PURE__ */ jsx19("tr", { children: columns.map((col, ci) => /* @__PURE__ */ jsx19("td", { children: col.render ? col.render(row2[col.dataIndex], row2) : row2[col.dataIndex] }, col.key ?? ci)) }, row2.key ?? ri)) })
  ] });
}
function TimelineItem({ label, color, dot, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs12("li", { ...rest, className: cx2("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className), children: [
    /* @__PURE__ */ jsx19("div", { className: "mimicus-timeline__dot", children: dot }),
    /* @__PURE__ */ jsxs12("div", { className: "mimicus-timeline__content", children: [
      label && /* @__PURE__ */ jsx19("div", { className: "mimicus-timeline__label", children: label }),
      /* @__PURE__ */ jsx19("div", { className: "mimicus-timeline__body", children })
    ] })
  ] });
}
function Timeline({ mode = "left", pending, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs12("ul", { ...rest, className: cx2("mimicus-timeline", `mimicus-timeline--${mode}`, className), style, children: [
    children,
    pending && /* @__PURE__ */ jsxs12("li", { className: "mimicus-timeline__item mimicus-timeline__item--pending", children: [
      /* @__PURE__ */ jsx19("div", { className: "mimicus-timeline__dot" }),
      /* @__PURE__ */ jsx19("div", { className: "mimicus-timeline__content", children: pending })
    ] })
  ] });
}
Timeline.Item = TimelineItem;
function Tooltip({ title, placement = "top", arrow, children, className, ...rest }) {
  const ref = useRef5(null);
  useDisplayBinding(ref, "tooltip", [title, placement]);
  return /* @__PURE__ */ jsxs12("span", { ...rest, ref, className: cx2("mimicus-tooltip", className), "data-mimicus-display": "tooltip", "data-placement": placement, children: [
    /* @__PURE__ */ jsx19("span", { className: "mimicus-tooltip__trigger", "data-mimicus-tooltip-trigger": true, tabIndex: 0, children }),
    /* @__PURE__ */ jsx19("span", { className: cx2("mimicus-tooltip__popup", arrow && "mimicus-tooltip__popup--arrow"), "data-mimicus-tooltip-popup": true, role: "tooltip", hidden: true, children: title })
  ] });
}
function Tour({ steps = [], open = false, className, style, ...rest }) {
  const ref = useRef5(null);
  useDisplayBinding(ref, "tour", [open, steps.length]);
  return /* @__PURE__ */ jsxs12("div", { ...rest, ref, className: cx2("mimicus-tour", open && "is-active", className), style, "data-mimicus-display": "tour", "data-open": open ? "true" : "false", children: [
    /* @__PURE__ */ jsx19("div", { className: "mimicus-tour__overlay", "data-mimicus-tour-overlay": true, hidden: !open }),
    steps.map((s, i) => /* @__PURE__ */ jsx19("div", { "data-mimicus-tour-step": true, "data-target": s.target, "data-title": s.title, "data-description": s.description, hidden: true }, i)),
    /* @__PURE__ */ jsxs12("div", { className: "mimicus-tour__card", "data-mimicus-tour-card": true, children: [
      /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-tour__close", "data-mimicus-tour-close": true, "aria-label": "Cerrar", children: "\xD7" }),
      /* @__PURE__ */ jsx19("strong", { "data-mimicus-tour-title": true }),
      /* @__PURE__ */ jsx19("p", { "data-mimicus-tour-desc": true }),
      /* @__PURE__ */ jsxs12("div", { className: "mimicus-tour__actions", children: [
        /* @__PURE__ */ jsx19("button", { type: "button", "data-mimicus-tour-prev": true, children: "Anterior" }),
        /* @__PURE__ */ jsx19("button", { type: "button", "data-mimicus-tour-next": true, children: "Siguiente" })
      ] })
    ] })
  ] });
}
function TreeNode({ node, checkable, level = 0 }) {
  const hasKids = Boolean(node.children?.length);
  const key = node.key ?? node.title;
  return /* @__PURE__ */ jsxs12("div", { className: cx2("mimicus-tree__node", hasKids && "is-expanded"), "data-mimicus-tree-node": key, style: { paddingLeft: `${level * 1.1}rem` }, children: [
    hasKids ? /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-tree__switcher", "data-mimicus-tree-switcher": true, "aria-expanded": "true", children: "\u25BE" }) : /* @__PURE__ */ jsx19("span", { className: "mimicus-tree__switcher mimicus-tree__switcher--leaf" }),
    checkable && /* @__PURE__ */ jsx19("input", { type: "checkbox", className: "mimicus-tree__check", "data-mimicus-tree-check": true }),
    /* @__PURE__ */ jsx19("span", { className: "mimicus-tree__title", children: node.title }),
    hasKids && /* @__PURE__ */ jsx19("div", { className: "mimicus-tree__children", "data-mimicus-tree-children": true, children: node.children.map((c) => /* @__PURE__ */ jsx19(TreeNode, { node: c, checkable, level: level + 1 }, c.key ?? c.title)) })
  ] });
}
function Tree({ treeData = [], checkable, defaultExpandAll, className, style, ...rest }) {
  const ref = useRef5(null);
  useDisplayBinding(ref, "tree", [checkable, treeData.length]);
  return /* @__PURE__ */ jsx19("div", { ...rest, ref, className: cx2("mimicus-tree", className), style, "data-mimicus-display": "tree", "data-checkable": checkable, "data-default-expand-all": defaultExpandAll, children: treeData.map((n) => /* @__PURE__ */ jsx19(TreeNode, { node: n, checkable }, n.key ?? n.title)) });
}
function Calendar({ fullscreen, className, style, ...rest }) {
  const ref = useRef5(null);
  const now = /* @__PURE__ */ new Date();
  useDisplayBinding(ref, "calendar", []);
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      ...rest,
      ref,
      className: cx2("mimicus-calendar", fullscreen && "mimicus-calendar--fullscreen", className),
      style,
      "data-mimicus-display": "calendar",
      "data-year": now.getFullYear(),
      "data-month": now.getMonth(),
      children: [
        /* @__PURE__ */ jsxs12("div", { className: "mimicus-calendar__header", children: [
          /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-prev": true, "aria-label": "Mes anterior", children: "\u2039" }),
          /* @__PURE__ */ jsx19("span", { className: "mimicus-calendar__title", "data-mimicus-calendar-title": true }),
          /* @__PURE__ */ jsx19("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-next": true, "aria-label": "Mes siguiente", children: "\u203A" })
        ] }),
        /* @__PURE__ */ jsx19("div", { className: "mimicus-calendar__weekdays", children: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => /* @__PURE__ */ jsx19("span", { className: "mimicus-calendar__weekday", children: d }, d)) }),
        /* @__PURE__ */ jsx19("div", { className: "mimicus-calendar__grid", "data-mimicus-calendar-grid": true })
      ]
    }
  );
}
function ListItemText({ primary, secondary, className, ...rest }) {
  return /* @__PURE__ */ jsxs12("div", { ...rest, className: cx2("mimicus-list-item__text", className), children: [
    primary && /* @__PURE__ */ jsx19("span", { className: "mimicus-list-item__primary", children: primary }),
    secondary && /* @__PURE__ */ jsx19("span", { className: "mimicus-list-item__secondary", children: secondary })
  ] });
}
function ListItemIcon({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx19("span", { ...rest, className: cx2("mimicus-list-item__icon", className), children });
}
function ListItemAvatar({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx19("span", { ...rest, className: cx2("mimicus-list-item__avatar", className), children });
}
function ListItem({ button, secondaryAction, children, className, ...rest }) {
  const Tag2 = button ? "button" : "li";
  return /* @__PURE__ */ jsxs12(Tag2, { ...rest, className: cx2("mimicus-list-item", button && "mimicus-list-item--button", className), type: button ? "button" : void 0, children: [
    children,
    secondaryAction && /* @__PURE__ */ jsx19("span", { className: "mimicus-list-item__secondary-action", children: secondaryAction })
  ] });
}
function List({ dense, disableGutters, subheader, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs12("ul", { ...rest, className: cx2("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className), style, children: [
    subheader && /* @__PURE__ */ jsx19("li", { className: "mimicus-list__subheader", children: subheader }),
    children
  ] });
}
List.Item = ListItem;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;

// src/layout/panels/SidePanelSection.tsx
import { Fragment as Fragment4, jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
function PanelIcon({ icon, style }) {
  if (!icon) return null;
  return /* @__PURE__ */ jsx20("iconify-icon", { icon, style: { fontSize: "1.1rem", flexShrink: 0, ...style }, "aria-hidden": true });
}
function SidePanelSection({
  icon = "mdi:folder-outline",
  label,
  open,
  active,
  forceOpen,
  count,
  color = "primary",
  colorSlot,
  collapsed,
  onToggle,
  onHeaderClick,
  children
}) {
  const accentStyle = { "--sm-accent": resolveColor(color) };
  return /* @__PURE__ */ jsxs13("div", { className: ["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" "), style: accentStyle, "data-section-color": colorSlot ?? color, children: [
    /* @__PURE__ */ jsxs13("div", { style: { display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" }, children: [
      /* @__PURE__ */ jsxs13(Button, { variant: active ? "soft" : "text", shape: "rect", color, onClick: onHeaderClick, style: { flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }, title: typeof label === "string" ? label : void 0, children: [
        /* @__PURE__ */ jsx20(PanelIcon, { icon, style: collapsed ? { fontSize: "1.2rem" } : void 0 }),
        !collapsed && /* @__PURE__ */ jsxs13(Fragment4, { children: [
          /* @__PURE__ */ jsx20("span", { className: "sm-title-group", children: /* @__PURE__ */ jsx20("span", { className: "sm-label", children: label }) }),
          count != null && /* @__PURE__ */ jsx20("span", { className: "sm-trail", children: /* @__PURE__ */ jsx20(Badge, { children: count }) })
        ] })
      ] }),
      !forceOpen && !collapsed && /* @__PURE__ */ jsx20(Button, { variant: "text", shape: "rect", color, onClick: (e) => {
        e.stopPropagation();
        onToggle?.();
      }, style: { flex: "0 0 auto", width: "fit-content", minWidth: "2rem", paddingInline: "0.25rem" }, title: open ? "Contraer" : "Expandir", "aria-expanded": open, children: /* @__PURE__ */ jsx20(PanelIcon, { icon: "mdi:chevron-down", style: { transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" } }) })
    ] }),
    open && !collapsed && /* @__PURE__ */ jsx20("div", { className: "sm-content mimicus-side-panel-section__content", style: { paddingLeft: "0.35rem" }, children: /* @__PURE__ */ jsx20("div", { style: { display: "flex", flexDirection: "column", gap: "0.1rem" }, children }) })
  ] });
}

// src/layout/containers/Space.tsx
import { Children as Children6 } from "react";
import { jsx as jsx21, jsxs as jsxs14 } from "react/jsx-runtime";
var SIZE_MAP = { small: "0.5rem", middle: "0.75rem", medium: "0.75rem", large: "1rem" };
function resolveSpaceSize(size) {
  if (size == null || size === "") return SIZE_MAP.small;
  if (typeof size === "number") return `${size}px`;
  if (typeof size === "string" && SIZE_MAP[size]) return SIZE_MAP[size];
  return String(size);
}
function Space({
  orientation = "horizontal",
  vertical = false,
  size = "small",
  wrap = false,
  align,
  separator,
  className,
  style,
  children,
  ...rest
}) {
  const dir = vertical || orientation === "vertical" ? "column" : "row";
  const gap = resolveSpaceSize(size);
  const items = Children6.toArray(children).filter((c) => c != null && c !== false);
  const cls = ["mimicus-space", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(
    "display: flex",
    `flex-direction: ${dir}`,
    `gap: ${gap}`,
    wrap && "flex-wrap: wrap",
    align && `align-items: ${align}`,
    style
  );
  if (!separator) {
    return /* @__PURE__ */ jsx21("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ jsx21("span", { className: "mimicus-space__item", children: child }, i)) });
  }
  return /* @__PURE__ */ jsx21("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ jsxs14("span", { className: "mimicus-space__item", children: [
    child,
    i < items.length - 1 ? /* @__PURE__ */ jsx21("span", { className: "mimicus-space__sep", "aria-hidden": "true", children: separator }) : null
  ] }, i)) });
}

// src/layout/containers/Stack.tsx
import { Children as Children7 } from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var SPACING_PRESET = { small: "0.5rem", medium: "0.75rem", large: "1rem" };
function resolveSpacing(spacing) {
  if (spacing == null || spacing === "") return 0;
  if (typeof spacing === "number") return `${spacing * 8}px`;
  if (typeof spacing === "string" && SPACING_PRESET[spacing]) return SPACING_PRESET[spacing];
  return String(spacing);
}
function Stack({
  direction = "column",
  spacing = 0,
  divider,
  alignItems,
  justifyContent,
  className,
  style,
  children,
  ...rest
}) {
  const gap = resolveSpacing(spacing);
  const flexDir = direction === "row" || direction === "row-reverse" ? direction : direction === "column-reverse" ? "column-reverse" : "column";
  const items = Children7.toArray(children).filter((c) => c != null && c !== false);
  return /* @__PURE__ */ jsx22(
    FlexLayout,
    {
      direction: flexDir,
      gap: gap || void 0,
      items: alignItems,
      justify: justifyContent,
      className: ["mimicus-stack", className].filter(Boolean).join(" "),
      style,
      ...rest,
      children: divider ? items.flatMap((child, i) => i < items.length - 1 ? [child, /* @__PURE__ */ jsx22("span", { className: "mimicus-stack__divider", children: divider }, `d-${i}`)] : [child]) : children
    }
  );
}

// src/layout/containers/Box.tsx
import { createElement } from "react";
function Box({ component: Component = "div", className, style, sx, children, ...rest }) {
  const mergedStyle = joinStyle(style, sx && typeof sx === "object" ? objectToStyle(sx) : "");
  const cls = ["mimicus-box", className].filter(Boolean).join(" ");
  return createElement(Component, { className: cls, style: mergedStyle || void 0, ...rest }, children);
}
function objectToStyle(sx) {
  return Object.entries(sx).map(([k, v]) => `${camelToKebab2(k)}:${v}`).join("; ");
}
function camelToKebab2(s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

// src/layout/containers/Container.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
var MAX_WIDTHS = { xs: 444, sm: 600, md: 900, lg: 1200, xl: 1536 };
function resolveMaxWidth(maxWidth) {
  if (maxWidth == null || maxWidth === false) return void 0;
  if (typeof maxWidth === "number") return `${maxWidth}px`;
  if (maxWidth in MAX_WIDTHS) return `${MAX_WIDTHS[maxWidth]}px`;
  return String(maxWidth);
}
function Container({ maxWidth = "lg", fixed = false, disableGutters = false, className, style, children, ...rest }) {
  const mw = resolveMaxWidth(maxWidth);
  const cls = ["mimicus-container", fixed && "mimicus-container--fixed", disableGutters && "mimicus-container--no-gutters", className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    "width: 100%",
    "margin-inline: auto",
    mw && `max-width: ${mw}`,
    !disableGutters && "padding-inline: clamp(0.75rem, 3vw, 1.5rem)",
    style
  );
  return /* @__PURE__ */ jsx23("div", { className: cls, style: mergedStyle, ...rest, children });
}

// src/layout/grid/Masonry.tsx
import { Children as Children8 } from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
function resolveGutter(gutter) {
  if (gutter == null || gutter === "") return "0";
  if (typeof gutter === "number") return `${gutter}px`;
  return String(gutter);
}
function resolveColumns(columns, sizew = "md") {
  if (typeof columns === "number") return columns;
  if (columns && typeof columns === "object") {
    const order = ["xs", "sm", "md", "lg", "xl"];
    const idx = order.indexOf(sizew);
    let n = columns.xs ?? 1;
    for (const bp of order) {
      if (columns[bp] != null) n = columns[bp];
      if (bp === sizew || order.indexOf(bp) >= idx) break;
    }
    return n;
  }
  return 3;
}
function Masonry({ columns = 3, gutter = 0, className, style, children, items, itemRender, ...rest }) {
  const cols = resolveColumns(columns);
  const gap = resolveGutter(gutter);
  const cls = ["mimicus-masonry", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(`column-count: ${cols}`, `column-gap: ${gap}`, style);
  if (items?.length) {
    return /* @__PURE__ */ jsx24("div", { className: cls, style: rootStyle, ...rest, children: items.map((item) => /* @__PURE__ */ jsx24("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: itemRender ? itemRender(item) : item.children }, item.key ?? item.id)) });
  }
  return /* @__PURE__ */ jsx24("div", { className: cls, style: rootStyle, ...rest, children: Children8.map(children, (child, i) => /* @__PURE__ */ jsx24("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: child }, i)) });
}

// src/layout/grid/ImageList.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function resolveGap2(gap) {
  if (gap == null || gap === "") return "4px";
  if (typeof gap === "number") return `${gap}px`;
  return String(gap);
}
function ImageListItem({ cols = 1, rows = 1, className, style, children, ...rest }) {
  const spanStyle = joinStyle(
    cols > 1 && `grid-column: span ${cols}`,
    rows > 1 && `grid-row: span ${rows}`,
    style
  );
  return /* @__PURE__ */ jsx25("li", { className: ["mimicus-image-list__item", className].filter(Boolean).join(" "), style: spanStyle, ...rest, children });
}
function ImageList({
  cols = 3,
  rowHeight = 164,
  gap = 4,
  variant = "standard",
  className,
  style,
  children,
  ...rest
}) {
  const g = resolveGap2(gap);
  const cls = ["mimicus-image-list", variant === "masonry" && "mimicus-image-list--masonry", className].filter(Boolean).join(" ");
  if (variant === "masonry") {
    return /* @__PURE__ */ jsx25("ul", { className: cls, style: joinStyle(`column-count: ${cols}`, `column-gap: ${g}`, "list-style: none", "margin: 0", "padding: 0", style), ...rest, children });
  }
  return /* @__PURE__ */ jsx25(
    "ul",
    {
      className: cls,
      style: joinStyle(
        "display: grid",
        `grid-template-columns: repeat(${cols}, minmax(0, 1fr))`,
        `gap: ${g}`,
        variant === "quilted" && "grid-auto-rows: auto",
        `grid-auto-rows: ${rowHeight}px`,
        "list-style: none",
        "margin: 0",
        "padding: 0",
        style
      ),
      ...rest,
      children
    }
  );
}
ImageList.Item = ImageListItem;

// src/layout/dividers/Separator.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function Separator({
  orientation = "horizontal",
  color = "",
  borderStyle = "solid",
  thickness = 1,
  startMargin = 8,
  endMargin = 8,
  className,
  style,
  ...rest
}) {
  const axis = orientation === "vertical" ? "vertical" : "horizontal";
  const lineColor = color ? resolveColor(color) : resolveColor("border");
  const cls = ["mimicus-separator", `mimicus-separator--${axis}`, className].filter(Boolean).join(" ");
  const mergedStyle = axis === "horizontal" ? {
    display: "block",
    width: "100%",
    height: 0,
    border: "none",
    borderTop: `${thickness}px ${borderStyle} ${lineColor}`,
    margin: `${startMargin}px 0 ${endMargin}px`,
    ...style && typeof style === "object" ? style : {}
  } : {
    display: "inline-block",
    alignSelf: "stretch",
    width: 0,
    minHeight: "1em",
    height: "auto",
    border: "none",
    borderLeft: `${thickness}px ${borderStyle} ${lineColor}`,
    margin: `0 ${startMargin}px 0 ${endMargin}px`,
    verticalAlign: "middle",
    flexShrink: 0,
    ...style && typeof style === "object" ? style : {}
  };
  return /* @__PURE__ */ jsx26("span", { className: cls, role: "separator", "aria-orientation": axis, style: mergedStyle, ...rest });
}

// src/layout/grid/GridResponsiveForm.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var CELLS_BY_SIZEW = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };
function computeCells(sizew, maxcells, mincells) {
  const base = CELLS_BY_SIZEW[sizew] ?? 1;
  const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
  return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
}
function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }) {
  const { sizew } = useLayoutSlot();
  const cells = computeCells(sizew ?? "md", maxcells, mincells);
  return /* @__PURE__ */ jsx27(GridLayout, { sizew, cells: String(cells), gap, ...gridProps, children });
}
function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }) {
  return /* @__PURE__ */ jsx27(BlockLayout, { className: ["mimicus-grid-responsive-form", className].filter(Boolean).join(" "), style, children: /* @__PURE__ */ jsx27(GridResponsiveFormInner, { maxcells, mincells, gap, ...gridProps, children }) });
}

// src/components/forms/Forms.tsx
import { Children as Children9, useEffect as useEffect10, useId as useId2, useLayoutEffect, useRef as useRef6, useState as useState8 } from "react";

// src/forms/useFormBinding.ts
import { useEffect as useEffect9 } from "react";

// src/forms/controllers.ts
function bindSlider(root) {
  const input = qs("input[type='range']", root) ?? qs("[data-mimicus-slider-input]", root);
  const fill = qs("[data-mimicus-slider-fill]", root);
  const label = qs("[data-mimicus-slider-value]", root);
  if (!input) return () => {
  };
  const paint = () => {
    const min = parseNum(input.min, 0);
    const max = parseNum(input.max, 100);
    const val = parseNum(input.value, min);
    const pct = max === min ? 0 : (val - min) / (max - min) * 100;
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = String(val);
    root.dataset.value = String(val);
  };
  paint();
  const clean = on(input, "input", () => {
    paint();
    emit(root, "mimicus-slider-change", { value: parseNum(input.value) });
  });
  return () => {
    clean();
    delete root.__mimicusFormCleanup;
  };
}
function bindRate(root) {
  const allowHalf = parseBool(root.dataset.allowHalf);
  const allowClear = root.dataset.allowClear !== "false";
  const stars = qsa("[data-mimicus-rate-star]", root);
  let value = parseNum(root.dataset.value ?? root.dataset.defaultValue, 0);
  const paint = (v, hover = false) => {
    value = v;
    root.dataset.value = String(v);
    stars.forEach((star, i) => {
      const idx = i + 1;
      const full = v >= idx;
      const half = allowHalf && v + 0.5 >= idx && v < idx;
      star.classList.toggle("is-full", full);
      star.classList.toggle("is-half", half);
      star.classList.toggle("is-hover", hover && v >= idx - (allowHalf ? 0.5 : 0));
    });
  };
  paint(value);
  const cleanups = stars.map((star) => {
    const idx = parseNum(star.dataset.mimicusRateStar, 1);
    return [
      on(star, "mousemove", (e) => {
        if (parseBool(root.dataset.disabled)) return;
        const rect = star.getBoundingClientRect();
        const half = allowHalf && e.clientX - rect.left < rect.width / 2;
        paint(half ? idx - 0.5 : idx, true);
      }),
      on(star, "mouseleave", () => paint(parseNum(root.dataset.value, value))),
      on(star, "click", () => {
        if (parseBool(root.dataset.disabled)) return;
        const next = allowClear && parseNum(root.dataset.value) === idx ? 0 : idx;
        paint(next);
        emit(root, "mimicus-rate-change", { value: next });
      })
    ];
  }).flat();
  return () => cleanups.forEach((fn) => fn());
}
function bindAutocomplete(root) {
  const input = qs("input", root);
  const panel = qs("[data-mimicus-autocomplete-panel]", root);
  if (!input || !panel) return () => {
  };
  const options = () => qsa("[data-mimicus-autocomplete-option]", panel);
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
  const filter = () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    options().forEach((opt) => {
      const show = !q || String(opt.textContent).toLowerCase().includes(q);
      opt.hidden = !show;
      if (show) visible += 1;
    });
    visible ? open() : close();
  };
  const cleanups = [
    on(input, "input", filter),
    on(input, "focus", filter),
    on(root, "keydown", (e) => {
      if (e.key === "Escape") close();
    }),
    clickOutside(root, close),
    ...options().map((opt) => on(opt, "click", () => {
      input.value = opt.dataset.value ?? opt.textContent ?? "";
      close();
      emit(root, "mimicus-autocomplete-select", { value: input.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindToggleGroup(root) {
  const exclusive = root.dataset.exclusive !== "false";
  const btns = qsa("[data-mimicus-toggle]", root);
  const setActive = (vals) => {
    btns.forEach((b) => {
      const on2 = vals.includes(b.dataset.mimicusToggle ?? "");
      b.classList.toggle("is-active", on2);
      b.setAttribute("aria-pressed", on2 ? "true" : "false");
    });
    root.dataset.value = exclusive ? vals[0] ?? "" : vals.join(",");
  };
  const initial = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
  setActive(exclusive ? initial ? [initial] : [] : String(initial).split(",").filter(Boolean));
  const cleanups = btns.map((b) => on(b, "click", () => {
    if (b.disabled) return;
    const v = b.dataset.mimicusToggle ?? "";
    if (exclusive) setActive([v]);
    else {
      const cur = String(root.dataset.value ?? "").split(",").filter(Boolean);
      setActive(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
    }
    emit(root, "mimicus-toggle-change", { value: root.dataset.value });
  }));
  return () => cleanups.forEach((fn) => fn());
}
function moveSelected(from, to) {
  const selected = qsa("[data-mimicus-transfer-item].is-selected", from);
  selected.forEach((el) => to.appendChild(el));
}
function bindTransfer(root) {
  const left = qs("[data-mimicus-transfer-left]", root);
  const right = qs("[data-mimicus-transfer-right]", root);
  if (!left || !right) return () => {
  };
  const toggleSelect = (item) => item.classList.toggle("is-selected");
  const cleanups = [
    on(root, "click", (e) => {
      const target = e.target;
      const item = target.closest("[data-mimicus-transfer-item]");
      if (item && !parseBool(root.dataset.disabled)) toggleSelect(item);
      const action = target.closest("[data-mimicus-transfer-action]")?.dataset.mimicusTransferAction;
      if (!action || parseBool(root.dataset.disabled)) return;
      if (action === "toRight") moveSelected(left, right);
      if (action === "toLeft") moveSelected(right, left);
      emit(root, "mimicus-transfer-change", {});
    })
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindTransferBoard(root) {
  if (parseBool(root.dataset.disabled)) return () => {
  };
  let dragEl = null;
  const stacks = qsa("[data-mimicus-transfer-stack]", root);
  const cleanups = stacks.flatMap((stack) => [
    on(stack, "dragover", (e) => {
      e.preventDefault();
      stack.classList.add("is-drag-over");
    }),
    on(stack, "dragleave", () => stack.classList.remove("is-drag-over")),
    on(stack, "drop", (e) => {
      e.preventDefault();
      stack.classList.remove("is-drag-over");
      if (dragEl) stack.querySelector("[data-mimicus-transfer-list]")?.appendChild(dragEl);
      dragEl = null;
      emit(root, "mimicus-transfer-board-change", {});
    })
  ]);
  qsa("[data-mimicus-transfer-item]", root).forEach((item) => {
    item.draggable = true;
    cleanups.push(on(item, "dragstart", () => {
      dragEl = item;
      item.classList.add("is-dragging");
    }));
    cleanups.push(on(item, "dragend", () => item.classList.remove("is-dragging")));
  });
  return () => cleanups.forEach((fn) => fn());
}
function bindCascader(root) {
  const trigger = qs("[data-mimicus-cascader-trigger]", root);
  const panel = qs("[data-mimicus-cascader-panel]", root);
  if (!trigger || !panel) return () => {
  };
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
  const cleanups = [
    on(trigger, "click", (e) => {
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    }),
    clickOutside(root, close),
    ...qsa("[data-mimicus-cascader-option]", panel).map((opt) => on(opt, "click", () => {
      trigger.textContent = opt.dataset.label ?? opt.textContent;
      root.dataset.value = opt.dataset.value ?? "";
      close();
      emit(root, "mimicus-cascader-change", { value: root.dataset.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindTreeSelect(root) {
  const trigger = qs("[data-mimicus-tree-trigger]", root);
  const panel = qs("[data-mimicus-tree-panel]", root);
  if (!trigger || !panel) return () => {
  };
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
  const cleanups = [
    on(trigger, "click", (e) => {
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    }),
    clickOutside(root, close),
    ...qsa("[data-mimicus-tree-node]", panel).map((node) => on(node, "click", (e) => {
      const toggle = e.target.closest("[data-mimicus-tree-toggle]");
      if (toggle) {
        const sub = node.querySelector("[data-mimicus-tree-children]");
        if (sub) sub.hidden = !sub.hidden;
        return;
      }
      const label = node.dataset.label ?? node.textContent;
      trigger.textContent = label?.trim() ?? "";
      root.dataset.value = node.dataset.value ?? "";
      close();
      emit(root, "mimicus-tree-select-change", { value: root.dataset.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindMentions(root) {
  const area = qs("textarea", root);
  const panel = qs("[data-mimicus-mentions-panel]", root);
  if (!area || !panel) return () => {
  };
  const show = (q) => {
    const opts = qsa("[data-mimicus-mentions-option]", panel);
    let n = 0;
    opts.forEach((o) => {
      const showIt = !q || String(o.dataset.value).toLowerCase().includes(q.toLowerCase());
      o.hidden = !showIt;
      if (showIt) n += 1;
    });
    panel.hidden = n === 0;
    root.classList.toggle("is-open", n > 0);
  };
  const cleanups = [
    on(area, "input", () => {
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      show(m ? m[1] : "");
    }),
    ...qsa("[data-mimicus-mentions-option]", panel).map((opt) => on(opt, "click", () => {
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      if (!m) return;
      const before = area.value.slice(0, m.index);
      const after = area.value.slice(area.selectionStart ?? 0);
      area.value = `${before}@${opt.dataset.value} ${after}`;
      panel.hidden = true;
      emit(root, "mimicus-mentions-change", { value: area.value });
    }))
  ];
  panel.hidden = true;
  return () => cleanups.forEach((fn) => fn());
}
function bindInputNumber(root) {
  const input = qs("input", root);
  const dec = qs("[data-mimicus-input-number-dec]", root);
  const inc = qs("[data-mimicus-input-number-inc]", root);
  if (!input) return () => {
  };
  const step = () => parseNum(root.dataset.step, 1);
  const min = () => parseNum(root.dataset.min, -Infinity);
  const max = () => parseNum(root.dataset.max, Infinity);
  const clamp = (v) => Math.min(max(), Math.max(min(), v));
  const set = (v) => {
    input.value = String(clamp(v));
    root.dataset.value = input.value;
    emit(root, "mimicus-input-number-change", { value: parseNum(input.value) });
  };
  const cleanups = [
    on(input, "change", () => set(parseNum(input.value, 0))),
    dec && on(dec, "click", () => set(parseNum(input.value, 0) - step())),
    inc && on(inc, "click", () => set(parseNum(input.value, 0) + step()))
  ].filter(Boolean);
  return () => cleanups.forEach((fn) => fn());
}
function bindUpload(root) {
  const input = qs("input[type='file']", root);
  const list = qs("[data-mimicus-upload-list]", root);
  if (!input) return () => {
  };
  const paint = () => {
    if (!list) return;
    list.innerHTML = "";
    [...input.files ?? []].forEach((f) => {
      const li = document.createElement("li");
      li.className = "mimicus-upload__file";
      li.textContent = f.name;
      list.appendChild(li);
    });
  };
  return on(input, "change", () => {
    paint();
    emit(root, "mimicus-upload-change", { count: input.files?.length ?? 0 });
  });
}
function bindColorPicker(root) {
  const input = qs("input[type='color']", root) ?? qs("input", root);
  const swatch = qs("[data-mimicus-color-swatch]", root);
  const hex = qs("[data-mimicus-color-hex]", root);
  if (!input) return () => {
  };
  const paint = () => {
    const v = input.value;
    if (swatch) swatch.style.background = v;
    if (hex) hex.textContent = v;
    root.dataset.value = v;
  };
  paint();
  return on(input, "input", () => {
    paint();
    emit(root, "mimicus-color-change", { value: input.value });
  });
}
var BINDERS2 = {
  slider: bindSlider,
  rate: bindRate,
  autocomplete: bindAutocomplete,
  "toggle-group": bindToggleGroup,
  transfer: bindTransfer,
  "transfer-board": bindTransferBoard,
  cascader: bindCascader,
  "tree-select": bindTreeSelect,
  mentions: bindMentions,
  "input-number": bindInputNumber,
  upload: bindUpload,
  "color-picker": bindColorPicker
};
function bindFormComponent(root) {
  const r = root;
  const type = r?.dataset?.mimicusForm;
  r.__mimicusFormCleanup?.();
  const cleanup = (type ? BINDERS2[type]?.(r) : void 0) ?? (() => {
  });
  r.__mimicusFormCleanup = cleanup;
  return () => {
    cleanup();
    delete r.__mimicusFormCleanup;
  };
}
function mountForms(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-form]", document) : [scope].filter((el) => el?.dataset?.mimicusForm);
  return () => roots.map(bindFormComponent).forEach((fn) => fn());
}

// src/forms/useFormBinding.ts
function useFormBinding(ref, type, deps = []) {
  useEffect9(() => {
    const el = ref.current;
    if (!el) return void 0;
    el.dataset.mimicusForm = type;
    return bindFormComponent(el);
  }, deps);
}

// src/components/forms/Forms.tsx
import { jsx as jsx28, jsxs as jsxs15 } from "react/jsx-runtime";
function cx3(...p) {
  return p.filter(Boolean).join(" ");
}
function useCtrl(value, defaultValue, onChange) {
  const [inner, setInner] = useState8(defaultValue);
  const v = value ?? inner;
  const set = (next) => {
    if (value === void 0) setInner(next);
    onChange?.(next);
  };
  return [v, set];
}
function FormItem({ label, required, help, error, children, className, layout = "vertical", ...rest }) {
  return /* @__PURE__ */ jsxs15("label", { ...rest, className: cx3("mimicus-form-item", `mimicus-form-item--${layout}`, error && "has-error", className), children: [
    label && /* @__PURE__ */ jsxs15("span", { className: "mimicus-form-item__label", children: [
      label,
      required && /* @__PURE__ */ jsx28("span", { className: "mimicus-form-item__req", children: "*" })
    ] }),
    /* @__PURE__ */ jsx28("span", { className: "mimicus-form-item__control", children }),
    (help || error) && /* @__PURE__ */ jsx28("span", { className: "mimicus-form-item__extra", children: error ?? help })
  ] });
}
function Form({ layout = "vertical", className, style, children, ...rest }) {
  return /* @__PURE__ */ jsx28("form", { ...rest, className: cx3("mimicus-form", `mimicus-form--${layout}`, className), style, onSubmit: (e) => e.preventDefault(), children });
}
Form.Item = FormItem;
function Input({
  value,
  defaultValue,
  onChange,
  status,
  prefix,
  suffix,
  allowClear,
  disabled,
  readOnly,
  placeholder,
  type = "text",
  className,
  style,
  ...rest
}) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsxs15("span", { className: cx3("mimicus-input", status && `is-${status}`, disabled && "is-disabled", className), style, children: [
    prefix && /* @__PURE__ */ jsx28("span", { className: "mimicus-input__affix mimicus-input__prefix", children: prefix }),
    /* @__PURE__ */ jsx28(
      "input",
      {
        ...rest,
        type,
        className: "mimicus-input__native",
        value: val ?? "",
        readOnly,
        disabled,
        placeholder,
        onChange: (e) => set(e.target.value)
      }
    ),
    allowClear && val && !disabled && /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-input__clear", "aria-label": "Limpiar", onClick: () => set(""), children: "\xD7" }),
    suffix && /* @__PURE__ */ jsx28("span", { className: "mimicus-input__affix mimicus-input__suffix", children: suffix })
  ] });
}
var TextField = Input;
function TextArea({ value, defaultValue, onChange, rows = 4, autoSize, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx28(
    "textarea",
    {
      ...rest,
      rows,
      className: cx3("mimicus-textarea", autoSize && "mimicus-textarea--autosize", className),
      style,
      value: val ?? "",
      onChange: (e) => set(e.target.value)
    }
  );
}
function InputNumber({ value, defaultValue = 0, onChange, min, max, step = 1, disabled, className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "input-number", [min, max, step, val]);
  return /* @__PURE__ */ jsxs15(
    "span",
    {
      ref,
      className: cx3("mimicus-input-number", disabled && "is-disabled", className),
      style,
      "data-min": min,
      "data-max": max,
      "data-step": step,
      "data-value": val,
      "data-mimicus-form": "input-number",
      children: [
        /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-dec": true, disabled, tabIndex: -1, children: "\u2212" }),
        /* @__PURE__ */ jsx28(
          "input",
          {
            ...rest,
            type: "text",
            inputMode: "decimal",
            className: "mimicus-input-number__native",
            value: val ?? 0,
            disabled,
            onChange: (e) => set(Number(e.target.value) || 0)
          }
        ),
        /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-inc": true, disabled, tabIndex: -1, children: "+" })
      ]
    }
  );
}
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  indeterminate,
  disabled,
  loading,
  children,
  className,
  style,
  ...rest
}) {
  const [on2, set] = useCtrl(checked, defaultChecked, onChange);
  const id = useId2();
  return /* @__PURE__ */ jsxs15("label", { className: cx3("mimicus-checkbox", on2 && "is-checked", indeterminate && "is-indeterminate", disabled && "is-disabled", loading && "is-loading", className), style, children: [
    /* @__PURE__ */ jsx28(
      "input",
      {
        ...rest,
        id,
        type: "checkbox",
        className: "mimicus-checkbox__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ),
    /* @__PURE__ */ jsx28("span", { className: "mimicus-checkbox__box", "aria-hidden": true }),
    children != null && /* @__PURE__ */ jsx28("span", { className: "mimicus-checkbox__label", children })
  ] });
}
function resolveIconNode(icon) {
  if (icon == null || icon === "") return null;
  if (typeof icon === "string") return /* @__PURE__ */ jsx28("iconify-icon", { icon });
  return icon;
}
function CheckboxIcon({ checked, defaultChecked, onChange, disabled, loading, color, variant, children, icon, iconChecked, iconUnchecked, colorChecked, colorUnchecked, className, ...rest }) {
  const surface = mergeSurfaceStyle(color, { variant: variant ?? "solid" });
  const [on2, set] = useCtrl(checked, defaultChecked ?? false, onChange);
  const id = useId2();
  const onNode = resolveIconNode(iconChecked ?? icon) ?? /* @__PURE__ */ jsx28("iconify-icon", { icon: "mdi:check" });
  const offNode = resolveIconNode(iconUnchecked) ?? /* @__PURE__ */ jsx28("iconify-icon", { icon: "mdi:circle-outline" });
  const activeNode = on2 ? onNode : offNode;
  const fgVar = on2 ? "--cb-on-fg" : "--cb-off-fg";
  const fgValue = on2 ? colorChecked : colorUnchecked;
  return /* @__PURE__ */ jsxs15(
    "label",
    {
      className: cx3("mimicus-checkbox", "mimicus-checkbox--icon", variant === "glass" && "mimicus-checkbox--glass", on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className),
      style: { ...surface.style, "--cb-on-fg": colorChecked || void 0, "--cb-off-fg": colorUnchecked || void 0 },
      children: [
        /* @__PURE__ */ jsx28(
          "input",
          {
            ...rest,
            id,
            type: "checkbox",
            className: "mimicus-checkbox__native",
            checked: Boolean(on2),
            disabled: disabled || loading,
            onChange: (e) => set(e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx28("span", { className: cx3("mimicus-checkbox__icon-box", on2 && "is-on"), style: fgValue ? { [fgVar]: fgValue } : void 0, "aria-hidden": true, children: activeNode }),
        children != null && /* @__PURE__ */ jsx28("span", { className: "mimicus-checkbox__label", children })
      ]
    }
  );
}
function CheckboxChip({ value, options, onChange, className, style }) {
  return /* @__PURE__ */ jsx28(ToggleButtonGroup, { exclusive: true, value, onChange, className: cx3("mimicus-checkbox-chip", className), style, children: options?.map((opt) => /* @__PURE__ */ jsx28(ToggleButton, { value: opt.value, icon: opt.icon, children: opt.label ?? opt.value }, opt.value)) });
}
function resolveIcon(icon) {
  if (icon == null || icon === "") return null;
  if (typeof icon === "string") return /* @__PURE__ */ jsx28("iconify-icon", { icon });
  return icon;
}
function Switch({ checked, defaultChecked = false, onChange, disabled, loading, icon, iconOn, iconOff, colorOn, colorOff, children, className, style, ...rest }) {
  const [on2, set] = useCtrl(checked, defaultChecked, onChange);
  const activeIcon = resolveIcon(iconOn ?? icon ?? "mdi:toggle-switch");
  const offIcon = resolveIcon(iconOff ?? icon ?? "mdi:toggle-switch-outline");
  const activeNode = on2 ? activeIcon : offIcon;
  const fgVar = on2 ? "--sw-on-fg" : "--sw-off-fg";
  const fgValue = on2 ? colorOn : colorOff;
  return /* @__PURE__ */ jsxs15("label", { className: cx3("mimicus-switch", on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className), style, children: [
    /* @__PURE__ */ jsx28(
      "input",
      {
        ...rest,
        type: "checkbox",
        role: "switch",
        className: "mimicus-switch__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ),
    /* @__PURE__ */ jsx28(
      "span",
      {
        className: cx3("mimicus-switch__icon-box", on2 && "is-on"),
        style: fgValue ? { [fgVar]: fgValue } : void 0,
        "aria-hidden": true,
        children: activeNode
      }
    ),
    children != null && /* @__PURE__ */ jsx28("span", { className: "mimicus-switch__label", children })
  ] });
}
function LabeledSwitch({ label, checked, defaultChecked, onChange, readonly, ...rest }) {
  return /* @__PURE__ */ jsx28(FormItem, { label, layout: "horizontal", className: "mimicus-labeled-switch", children: /* @__PURE__ */ jsx28(Switch, { checked, defaultChecked, onChange, disabled: readonly, ...rest }) });
}
function Radio({ value, checked, defaultChecked, onChange, disabled, children, className, name, ...rest }) {
  return /* @__PURE__ */ jsxs15("label", { className: cx3("mimicus-radio", checked && "is-checked", disabled && "is-disabled", className), children: [
    /* @__PURE__ */ jsx28(
      "input",
      {
        ...rest,
        type: "radio",
        name,
        value,
        className: "mimicus-radio__native",
        checked,
        defaultChecked,
        disabled,
        onChange
      }
    ),
    /* @__PURE__ */ jsx28("span", { className: "mimicus-radio__dot", "aria-hidden": true }),
    children != null && /* @__PURE__ */ jsx28("span", { className: "mimicus-radio__label", children })
  ] });
}
function RadioGroup({ value, defaultValue, onChange, name, direction = "horizontal", options, children, className, style, ...rest }) {
  const groupName = useId2();
  const [val, set] = useCtrl(value, defaultValue, onChange);
  const resolvedName = name ?? groupName;
  const body = children ?? options?.map((opt) => /* @__PURE__ */ jsx28(
    Radio,
    {
      name: resolvedName,
      value: opt.value,
      checked: val === opt.value,
      disabled: opt.disabled,
      onChange: () => set(opt.value),
      children: opt.label
    },
    opt.value
  ));
  return /* @__PURE__ */ jsx28("div", { ...rest, role: "radiogroup", className: cx3("mimicus-radio-group", `mimicus-radio-group--${direction}`, className), style, "data-value": val, children: body });
}
function Slider({ value, defaultValue = 0, onChange, min = 0, max = 100, step = 1, disabled, vertical, className, style, showValue, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "slider", [min, max, step]);
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      ref,
      ...rest,
      className: cx3("mimicus-slider", vertical && "mimicus-slider--vertical", disabled && "is-disabled", className),
      style,
      "data-value": val,
      "data-mimicus-form": "slider",
      children: [
        /* @__PURE__ */ jsx28("div", { className: "mimicus-slider__rail", children: /* @__PURE__ */ jsx28("div", { className: "mimicus-slider__fill", "data-mimicus-slider-fill": true }) }),
        /* @__PURE__ */ jsx28(
          "input",
          {
            type: "range",
            className: "mimicus-slider__input",
            "data-mimicus-slider-input": true,
            min,
            max,
            step,
            value: val,
            disabled,
            onInput: (e) => set(Number(e.target.value)),
            onChange: (e) => set(Number(e.target.value))
          }
        ),
        showValue && /* @__PURE__ */ jsx28("span", { className: "mimicus-slider__value", "data-mimicus-slider-value": true, children: val })
      ]
    }
  );
}
function Rate({ value, defaultValue = 0, onChange, count = 5, allowHalf, allowClear = true, disabled, character = "\u2605", className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "rate", [count, allowHalf, allowClear, val, disabled]);
  return /* @__PURE__ */ jsx28(
    "div",
    {
      ref,
      ...rest,
      role: "radiogroup",
      className: cx3("mimicus-rate", disabled && "is-disabled", className),
      style,
      "data-count": count,
      "data-value": val,
      "data-default-value": defaultValue,
      "data-allow-half": allowHalf ? "true" : void 0,
      "data-allow-clear": allowClear ? "true" : "false",
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "rate",
      children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-rate__star", "data-mimicus-rate-star": i + 1, disabled, "aria-label": `${i + 1} estrellas`, children: character }, i))
    }
  );
}
var Rating = Rate;
function Select({ value, defaultValue, onChange, options, placeholder, disabled, size = "medium", className, style, children, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  const [open, setOpen] = useState8(false);
  const rootRef = useRef6(null);
  const dialogRef = useRef6(null);
  const triggerRef = useRef6(null);
  const refocusTriggerAfterPickRef = useRef6(false);
  const pickOption = (next) => {
    refocusTriggerAfterPickRef.current = true;
    set(next);
    setOpen(false);
  };
  const isStructured = Array.isArray(options) && options.every((o) => o && typeof o === "object" && "value" in o);
  const items = isStructured ? options : [];
  const current = items.find((o) => String(o.value) === String(val));
  const fallbackLabel = children ? void 0 : items.find((o) => String(o.value) === String(val))?.label;
  const enabledItems = items.filter((o) => !o.disabled);
  const stepSelect = (dir) => {
    if (!enabledItems.length) return;
    const i = enabledItems.findIndex((o) => String(o.value) === String(val));
    const nextIdx = i < 0 ? dir === 1 ? 0 : enabledItems.length - 1 : (i + dir + enabledItems.length) % enabledItems.length;
    set(enabledItems[nextIdx].value);
  };
  const onSelectKeyStep = (e) => {
    if (disabled) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      stepSelect(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      stepSelect(-1);
    } else if (e.key === "Enter" && open) {
      e.preventDefault();
      pickOption(String(val ?? ""));
    }
  };
  useLayoutEffect(() => {
    if (!open) return;
    const dlg = dialogRef.current;
    const trg = triggerRef.current;
    if (!dlg || !trg) return;
    const place = () => {
      const r = trg.getBoundingClientRect();
      const w = Math.round(r.width);
      const left = Math.round(r.left);
      const top = Math.round(r.bottom) - 1;
      const maxLeft = window.innerWidth - w - 8;
      const x = `${Math.max(8, Math.min(left, maxLeft))}px`;
      dlg.style.setProperty("--mimicus-select-w", `${w}px`);
      dlg.style.setProperty("--mimicus-select-left", x);
      dlg.style.setProperty("--mimicus-select-top", `${top}px`);
      const panel = dlg.querySelector(".mimicus-select__panel");
      if (rootRef.current) dlg.style.fontSize = getComputedStyle(rootRef.current).fontSize;
      if (panel) {
        panel.style.width = `${w}px`;
        panel.style.minWidth = `${w}px`;
        panel.style.maxWidth = `${w}px`;
        panel.style.left = x;
        panel.style.top = `${top}px`;
      }
    };
    place();
    const raf = requestAnimationFrame(place);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open]);
  useEffect10(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open) {
      if (!dlg.open) dlg.showModal();
    } else if (dlg.open) {
      dlg.close();
    }
  }, [open]);
  useEffect10(() => {
    if (open || !refocusTriggerAfterPickRef.current) return;
    refocusTriggerAfterPickRef.current = false;
    const btn = triggerRef.current;
    if (!btn) return;
    requestAnimationFrame(() => btn.focus());
  }, [open, val]);
  useEffect10(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (!isStructured) {
    return /* @__PURE__ */ jsxs15("span", { className: cx3("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", className), style, children: [
      /* @__PURE__ */ jsxs15("select", { ...rest, className: "mimicus-select__native", value: val ?? "", disabled, onChange: (e) => set(e.target.value), children: [
        placeholder && /* @__PURE__ */ jsx28("option", { value: "", children: placeholder }),
        children ?? options?.map((opt) => /* @__PURE__ */ jsx28("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
      ] }),
      /* @__PURE__ */ jsx28("span", { className: "mimicus-select__arrow", "aria-hidden": true, children: "\u25BE" })
    ] });
  }
  return /* @__PURE__ */ jsxs15(
    "span",
    {
      ref: rootRef,
      className: cx3("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", open && "is-open", className),
      style,
      "data-value": val ?? "",
      children: [
        /* @__PURE__ */ jsxs15(
          "button",
          {
            ref: triggerRef,
            type: "button",
            className: "mimicus-select__trigger",
            disabled,
            "aria-haspopup": "dialog",
            "aria-expanded": open,
            onClick: () => !disabled && setOpen((o) => !o),
            onKeyDown: onSelectKeyStep,
            children: [
              /* @__PURE__ */ jsxs15("span", { className: "mimicus-select__value", children: [
                current?.icon && /* @__PURE__ */ jsx28("span", { className: "mimicus-select__icon", "aria-hidden": true, children: current.icon }),
                /* @__PURE__ */ jsx28("span", { className: "mimicus-select__label", children: current?.label ?? placeholder ?? "" }),
                current?.suffix && /* @__PURE__ */ jsx28("span", { className: "mimicus-select__suffix", children: current.suffix })
              ] }),
              /* @__PURE__ */ jsx28("span", { className: "mimicus-select__arrow", "aria-hidden": true, children: "\u25BE" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsx28(
          "dialog",
          {
            ref: dialogRef,
            className: "mimicus-select__dialog",
            "data-mimicus-select-dialog": true,
            onClose: () => setOpen(false),
            onCancel: (e) => {
              e.preventDefault();
              setOpen(false);
            },
            onKeyDown: onSelectKeyStep,
            onClick: (e) => {
              const panel = dialogRef.current?.querySelector(".mimicus-select__panel");
              if (panel && !panel.contains(e.target)) setOpen(false);
            },
            children: /* @__PURE__ */ jsxs15("ul", { role: "listbox", className: "mimicus-select__panel", "data-mimicus-select-panel": true, onClick: (e) => e.stopPropagation(), children: [
              placeholder && /* @__PURE__ */ jsx28("li", { role: "option", "aria-selected": !val, className: cx3("mimicus-select__option", !val && "is-selected"), onClick: () => pickOption(""), children: /* @__PURE__ */ jsx28("span", { className: "mimicus-select__label", children: placeholder }) }),
              items.map((opt) => {
                const selected = String(opt.value) === String(val);
                return /* @__PURE__ */ jsxs15(
                  "li",
                  {
                    role: "option",
                    "aria-selected": selected,
                    "aria-disabled": opt.disabled,
                    className: cx3("mimicus-select__option", selected && "is-selected", opt.disabled && "is-disabled"),
                    onClick: () => {
                      if (!opt.disabled) pickOption(String(opt.value));
                    },
                    children: [
                      opt.icon && /* @__PURE__ */ jsx28("span", { className: "mimicus-select__icon", "aria-hidden": true, children: opt.icon }),
                      /* @__PURE__ */ jsx28("span", { className: "mimicus-select__label", children: opt.label ?? opt.value }),
                      opt.suffix && /* @__PURE__ */ jsx28("span", { className: "mimicus-select__suffix", children: opt.suffix })
                    ]
                  },
                  String(opt.value)
                );
              })
            ] })
          }
        ),
        /* @__PURE__ */ jsx28("select", { ...rest, tabIndex: -1, "aria-hidden": true, className: "mimicus-select__native mimicus-select__native--sr", value: val ?? "", disabled, onChange: (e) => set(e.target.value), children: items.map((o) => /* @__PURE__ */ jsx28("option", { value: String(o.value), children: typeof fallbackLabel === "string" ? fallbackLabel : "" }, String(o.value))) })
      ]
    }
  );
}
function AutoComplete({ options = [], value, defaultValue, onChange, onSelect, placeholder, disabled, className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "autocomplete", [options.length]);
  return /* @__PURE__ */ jsxs15("div", { ref, className: cx3("mimicus-autocomplete", disabled && "is-disabled", className), style, "data-mimicus-form": "autocomplete", children: [
    /* @__PURE__ */ jsx28(Input, { ...rest, value: val, onChange: set, placeholder, disabled }),
    /* @__PURE__ */ jsx28("div", { className: "mimicus-autocomplete__panel", "data-mimicus-autocomplete-panel": true, role: "listbox", hidden: true, children: options.map((opt) => /* @__PURE__ */ jsx28(
      "button",
      {
        type: "button",
        role: "option",
        className: "mimicus-autocomplete__option",
        "data-mimicus-autocomplete-option": true,
        "data-value": opt.value ?? opt,
        onClick: () => {
          set(opt.value ?? opt);
          onSelect?.(opt.value ?? opt);
        },
        children: opt.label ?? opt
      },
      opt.value ?? opt
    )) })
  ] });
}
function ToggleButton({ value, selected, onChange, disabled, children, icon, className, ...rest }) {
  const on2 = selected ?? rest["aria-pressed"] === "true";
  return /* @__PURE__ */ jsxs15(
    "button",
    {
      ...rest,
      type: "button",
      className: cx3("mimicus-toggle-btn", on2 && "is-active", className),
      "data-mimicus-toggle": value,
      "aria-pressed": on2 ? "true" : "false",
      disabled,
      onClick: () => onChange?.(!on2),
      children: [
        icon && /* @__PURE__ */ jsx28("span", { className: "mimicus-toggle-btn__icon", "aria-hidden": true, children: icon }),
        children
      ]
    }
  );
}
function ToggleButtonGroup({ value, defaultValue, onChange, exclusive = true, orientation = "horizontal", children, className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue ?? (exclusive ? "" : []), onChange);
  const normalized = exclusive ? val : Array.isArray(val) ? val.join(",") : val;
  return /* @__PURE__ */ jsx28(
    "div",
    {
      ref,
      ...rest,
      role: "group",
      className: cx3("mimicus-toggle-group", `mimicus-toggle-group--${orientation}`, className),
      style,
      "data-exclusive": exclusive ? "true" : "false",
      "data-value": normalized,
      "data-mimicus-form": "toggle-group",
      children: Children9.map(children, (child) => {
        const node = child;
        if (!node?.props) return child;
        const v = node.props.value;
        const active = exclusive ? val === v : Array.isArray(val) ? val.includes(v) : String(val).split(",").includes(v);
        return /* @__PURE__ */ jsx28(ToggleButton, { ...node.props, selected: active, onChange: () => {
          if (exclusive) set(v);
          else {
            const arr = Array.isArray(val) ? [...val] : String(val || "").split(",").filter(Boolean);
            set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
          }
        } });
      })
    }
  );
}
function Transfer({ dataSource, targetKeys, onChange, titles = ["Origen", "Destino"], disabled, className, style }) {
  const ref = useRef6(null);
  const left = (dataSource ?? []).filter((d) => !(targetKeys ?? []).includes(d.key));
  const right = (dataSource ?? []).filter((d) => (targetKeys ?? []).includes(d.key));
  useFormBinding(ref, "transfer", [left.length, right.length, disabled]);
  const Item = ({ item }) => /* @__PURE__ */ jsx28("li", { className: "mimicus-transfer__item", "data-mimicus-transfer-item": true, "data-key": item.key, children: item.title });
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      ref,
      className: cx3("mimicus-transfer", disabled && "is-disabled", className),
      style,
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "transfer",
      children: [
        /* @__PURE__ */ jsxs15("div", { className: "mimicus-transfer__panel", children: [
          /* @__PURE__ */ jsx28("div", { className: "mimicus-transfer__title", children: titles[0] }),
          /* @__PURE__ */ jsx28("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-left": true, children: left.map((item) => /* @__PURE__ */ jsx28(Item, { item }, item.key)) })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "mimicus-transfer__actions", children: [
          /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toRight", children: "\u203A" }),
          /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toLeft", children: "\u2039" })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "mimicus-transfer__panel", children: [
          /* @__PURE__ */ jsx28("div", { className: "mimicus-transfer__title", children: titles[1] }),
          /* @__PURE__ */ jsx28("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-right": true, children: right.map((item) => /* @__PURE__ */ jsx28(Item, { item }, item.key)) })
        ] })
      ]
    }
  );
}
var TransferList = Transfer;
function TransferBoard({ stackCount = 3, stackWidth = 248, disabled, itemsPerStack = 3, className, style }) {
  const ref = useRef6(null);
  useFormBinding(ref, "transfer-board", [stackCount, stackWidth, disabled, itemsPerStack]);
  const stacks = Array.from({ length: stackCount }, (_, s) => /* @__PURE__ */ jsxs15("div", { className: "mimicus-transfer-board__stack", "data-mimicus-transfer-stack": true, style: { width: stackWidth }, children: [
    /* @__PURE__ */ jsxs15("div", { className: "mimicus-transfer-board__stack-title", children: [
      "Stack ",
      s + 1
    ] }),
    /* @__PURE__ */ jsx28("ul", { className: "mimicus-transfer-board__list", "data-mimicus-transfer-list": true, children: Array.from({ length: itemsPerStack }, (_2, i) => /* @__PURE__ */ jsxs15("li", { className: "mimicus-transfer-board__card", "data-mimicus-transfer-item": true, draggable: !disabled, children: [
      "Tarjeta ",
      s * itemsPerStack + i + 1
    ] }, i)) })
  ] }, s));
  return /* @__PURE__ */ jsx28(
    "div",
    {
      ref,
      className: cx3("mimicus-transfer-board", disabled && "is-disabled", className),
      style,
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "transfer-board",
      children: stacks
    }
  );
}
function Upload({ accept, multiple, disabled, children, className, style, ...rest }) {
  const ref = useRef6(null);
  useFormBinding(ref, "upload", [accept, multiple]);
  return /* @__PURE__ */ jsxs15("div", { ref, className: cx3("mimicus-upload", disabled && "is-disabled", className), style, "data-mimicus-form": "upload", children: [
    /* @__PURE__ */ jsxs15("label", { className: "mimicus-upload__trigger", children: [
      /* @__PURE__ */ jsx28("input", { ...rest, type: "file", className: "mimicus-upload__native", accept, multiple, disabled }),
      children ?? /* @__PURE__ */ jsx28("span", { className: "mimicus-upload__btn", children: "Subir archivo" })
    ] }),
    /* @__PURE__ */ jsx28("ul", { className: "mimicus-upload__list", "data-mimicus-upload-list": true })
  ] });
}
function ColorPicker({ value = "#1677ff", defaultValue, onChange, disabled, className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue ?? "#1677ff", onChange);
  useFormBinding(ref, "color-picker", [val]);
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      ref,
      className: cx3("mimicus-color-picker", disabled && "is-disabled", className),
      style,
      "data-value": val,
      "data-mimicus-form": "color-picker",
      children: [
        /* @__PURE__ */ jsx28("span", { className: "mimicus-color-picker__swatch", "data-mimicus-color-swatch": true, style: { background: val } }),
        /* @__PURE__ */ jsx28("input", { ...rest, type: "color", value: val, disabled, onChange: (e) => set(e.target.value) }),
        /* @__PURE__ */ jsx28("code", { className: "mimicus-color-picker__hex", "data-mimicus-color-hex": true, children: val })
      ]
    }
  );
}
function DatePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx28(Input, { ...rest, type: "date", className: cx3("mimicus-date-picker", className), style, value: val, disabled, onChange: set });
}
function TimePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx28(Input, { ...rest, type: "time", className: cx3("mimicus-time-picker", className), style, value: val, disabled, onChange: set });
}
function Cascader({ options = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
  const ref = useRef6(null);
  useFormBinding(ref, "cascader", [options.length]);
  const flat = options.flatMap((o) => o.children ? o.children.map((c) => ({ ...c, parent: o.label })) : [o]);
  return /* @__PURE__ */ jsxs15("div", { ref, className: cx3("mimicus-cascader", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "cascader", children: [
    /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-cascader__trigger", "data-mimicus-cascader-trigger": true, disabled, children: placeholder }),
    /* @__PURE__ */ jsx28("div", { className: "mimicus-cascader__panel", "data-mimicus-cascader-panel": true, hidden: true, children: flat.map((opt) => /* @__PURE__ */ jsx28(
      "button",
      {
        type: "button",
        className: "mimicus-cascader__option",
        "data-mimicus-cascader-option": true,
        "data-value": opt.value,
        "data-label": opt.parent ? `${opt.parent} / ${opt.label}` : opt.label,
        onClick: () => onChange?.(opt.value),
        children: opt.parent ? `${opt.parent} / ${opt.label}` : opt.label
      },
      opt.value
    )) })
  ] });
}
function TreeSelect({ treeData = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
  const ref = useRef6(null);
  useFormBinding(ref, "tree-select", [treeData.length]);
  const Node = ({ node, depth = 0 }) => /* @__PURE__ */ jsxs15("li", { className: "mimicus-tree-select__node", "data-mimicus-tree-node": true, "data-value": node.value, "data-label": node.title, style: { paddingLeft: `${depth * 0.75}rem` }, children: [
    node.children?.length ? /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-tree-select__toggle", "data-mimicus-tree-toggle": true, children: "\u25B8" }) : /* @__PURE__ */ jsx28("span", { className: "mimicus-tree-select__spacer" }),
    /* @__PURE__ */ jsx28("span", { className: "mimicus-tree-select__label", children: node.title }),
    node.children?.length > 0 && /* @__PURE__ */ jsx28("ul", { className: "mimicus-tree-select__children", "data-mimicus-tree-children": true, hidden: true, children: node.children.map((c) => /* @__PURE__ */ jsx28(Node, { node: c, depth: depth + 1 }, c.value ?? c.title)) })
  ] });
  return /* @__PURE__ */ jsxs15("div", { ref, className: cx3("mimicus-tree-select", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "tree-select", children: [
    /* @__PURE__ */ jsx28("button", { type: "button", className: "mimicus-tree-select__trigger", "data-mimicus-tree-trigger": true, disabled, children: placeholder }),
    /* @__PURE__ */ jsx28("div", { className: "mimicus-tree-select__panel", "data-mimicus-tree-panel": true, hidden: true, children: /* @__PURE__ */ jsx28("ul", { className: "mimicus-tree-select__tree", children: treeData.map((n) => /* @__PURE__ */ jsx28(Node, { node: n }, n.value ?? n.title)) }) })
  ] });
}
function Mentions({ options = [], value, defaultValue, onChange, rows = 3, placeholder, disabled, className, style, ...rest }) {
  const ref = useRef6(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "mentions", [options.length]);
  return /* @__PURE__ */ jsxs15("div", { ref, className: cx3("mimicus-mentions", disabled && "is-disabled", className), style, "data-mimicus-form": "mentions", children: [
    /* @__PURE__ */ jsx28(TextArea, { ...rest, rows, value: val, onChange: set, placeholder: placeholder ?? "Escribe @ para mencionar", disabled }),
    /* @__PURE__ */ jsx28("div", { className: "mimicus-mentions__panel", "data-mimicus-mentions-panel": true, hidden: true, children: options.map((opt) => /* @__PURE__ */ jsxs15("button", { type: "button", className: "mimicus-mentions__option", "data-mimicus-mentions-option": true, "data-value": opt.value ?? opt, children: [
      "@",
      opt.label ?? opt
    ] }, opt.value ?? opt)) })
  ] });
}

// src/components/navigation/Navigation.tsx
import { Children as Children10, useEffect as useEffect12, useMemo as useMemo3, useRef as useRef7 } from "react";

// src/nav/useNavBinding.ts
import { useEffect as useEffect11 } from "react";

// src/nav/paginationMath.ts
function buildPageRange(count, page, siblingCount = 1) {
  const total = Math.max(1, Math.round(Number(count)) || 1);
  const current = Math.min(total, Math.max(1, Math.round(Number(page)) || 1));
  const siblings = Math.max(0, Math.round(Number(siblingCount)) || 0);
  const items = [];
  const pageItem = (n) => ({ type: "page", page: n, key: `p-${n}` });
  const ellipsis = (key) => ({ type: "ellipsis", key });
  if (total <= 5 + siblings * 2) {
    for (let i = 1; i <= total; i++) items.push(pageItem(i));
    return { items, current, total };
  }
  items.push(pageItem(1));
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  if (left > 2) items.push(ellipsis("start"));
  for (let i = left; i <= right; i++) items.push(pageItem(i));
  if (right < total - 1) items.push(ellipsis("end"));
  items.push(pageItem(total));
  return { items, current, total };
}

// src/nav/controllers.ts
function setActiveLink(links, href) {
  for (const a of links) {
    const match = a.getAttribute("href") === href;
    a.classList.toggle("is-active", match);
    a.setAttribute("aria-current", match ? "true" : "false");
  }
}
function bindAnchor(root) {
  const affix = parseBool(root.dataset.affix);
  const offset = parseNum(root.dataset.targetOffset, 0);
  const bounds = parseNum(root.dataset.bounds, 5);
  const container = resolveScrollRoot(root, root.dataset.container);
  const links = qsa("[data-mimicus-anchor-link], a[href^='#']", root);
  const sections = links.map((a) => {
    const id = (a.getAttribute("href") ?? "").slice(1);
    return id ? qs(`#${CSS.escape(id)}`, container) : null;
  }).filter(Boolean);
  const cleanups = [];
  const activateById = (id) => setActiveLink(links, `#${id}`);
  for (const a of links) {
    cleanups.push(on(a, "click", (e) => {
      const href = a.getAttribute("href");
      if (!href?.startsWith("#")) return;
      e.preventDefault();
      const target = qs(href, container);
      scrollToTarget(target, { offset, root: container === document ? null : container });
      activateById(href.slice(1));
      emit(root, "mimicus-anchor-change", { href });
    }));
  }
  if (affix && sections.length) {
    const scrollEl = container === document ? window : container;
    const onScroll = () => {
      const scrollTop = container === document ? window.scrollY : container.scrollTop;
      let active = sections[0];
      for (const sec of sections) {
        const top = sec.offsetTop - offset - bounds;
        if (scrollTop >= top) active = sec;
      }
      if (active?.id) activateById(active.id);
    };
    cleanups.push(on(scrollEl, "scroll", onScroll, { passive: true }));
    onScroll();
  }
  return () => cleanups.forEach((fn) => fn());
}
function readTabKey(el) {
  return el.dataset.mimicusTab ?? el.dataset.key ?? el.getAttribute("data-key");
}
function setTabActive(root, key) {
  const tabs = qsa("[data-mimicus-tab]", root);
  const panels = qsa("[data-mimicus-tab-panel]", root);
  for (const tab of tabs) {
    const on2 = readTabKey(tab) === key;
    tab.classList.toggle("is-active", on2);
    tab.setAttribute("aria-selected", on2 ? "true" : "false");
    tab.tabIndex = on2 ? 0 : -1;
  }
  for (const panel of panels) {
    const on2 = panel.dataset.mimicusTabPanel === key || panel.dataset.key === key;
    panel.classList.toggle("is-active", on2);
    panel.hidden = !on2;
  }
  root.dataset.activeKey = key;
}
function bindTabs(root) {
  const defaultKey = root.dataset.defaultActiveKey ?? root.dataset.activeKey;
  const tabs = qsa("[data-mimicus-tab]", root);
  const cleanups = [];
  let active = defaultKey ?? readTabKey(tabs.find((t) => t.classList.contains("is-active")) ?? tabs[0]);
  if (active) setTabActive(root, active);
  for (const tab of tabs) {
    if (tab.disabled || tab.getAttribute("aria-disabled") === "true") continue;
    cleanups.push(on(tab, "click", () => {
      const key = readTabKey(tab);
      if (!key || key === root.dataset.activeKey) return;
      setTabActive(root, key);
      emit(root, "mimicus-tabs-change", { activeKey: key });
    }));
  }
  return () => cleanups.forEach((fn) => fn());
}
function bindDropdown(root) {
  const trigger = qs("[data-mimicus-dropdown-trigger]", root) ?? qs("button, [role='button']", root);
  const panel = qs("[data-mimicus-dropdown-panel]", root);
  if (!trigger || !panel) return () => {
  };
  const open = () => {
    root.classList.add("is-open");
    root.setAttribute("data-open", "true");
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    root.removeAttribute("data-open");
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  };
  const toggle = () => root.classList.contains("is-open") ? close() : open();
  const cleanups = [
    on(trigger, "click", (e) => {
      e.stopPropagation();
      toggle();
    }),
    on(root, "keydown", (e) => {
      if (e.key === "Escape") close();
    }),
    clickOutside(root, close)
  ];
  for (const item of qsa("[data-mimicus-menu-item], [role='menuitem']", panel)) {
    cleanups.push(on(item, "click", () => {
      if (!parseBool(item.dataset.keepOpen)) close();
      emit(root, "mimicus-dropdown-select", { key: item.dataset.key });
    }));
  }
  close();
  return () => {
    close();
    cleanups.forEach((fn) => fn());
  };
}
function bindMenu(root) {
  const items = qsa("[role='menuitem']:not([aria-disabled='true'])", root);
  let idx = Math.max(0, items.findIndex((el) => el.classList.contains("is-active")));
  const focusAt = (i) => {
    idx = (i + items.length) % items.length;
    items[idx]?.focus();
  };
  const cleanups = [
    on(root, "keydown", (e) => {
      if (!items.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        focusAt(idx + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        focusAt(idx - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        focusAt(0);
      } else if (e.key === "End") {
        e.preventDefault();
        focusAt(items.length - 1);
      }
    })
  ];
  for (const item of items) {
    cleanups.push(on(item, "click", () => {
      items.forEach((el) => el.classList.toggle("is-active", el === item));
      emit(root, "mimicus-menu-select", { key: item.dataset.key });
    }));
  }
  return () => cleanups.forEach((fn) => fn());
}
function paintPagination(root, count, page, siblingCount) {
  const { items, current, total } = buildPageRange(count, page, siblingCount);
  const list = qs("[data-mimicus-pagination-list]", root);
  if (!list) return;
  list.innerHTML = "";
  const mkBtn = (label, action, disabled, active) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = ["mimicus-pagination__btn", active && "is-active", disabled && "is-disabled"].filter(Boolean).join(" ");
    b.textContent = label;
    b.dataset.mimicusPage = action;
    if (disabled) b.disabled = true;
    if (active) b.setAttribute("aria-current", "page");
    return b;
  };
  list.appendChild(mkBtn("\u2039", "prev", current <= 1, false));
  for (const it of items) {
    if (it.type === "ellipsis") {
      const s = document.createElement("span");
      s.className = "mimicus-pagination__ellipsis";
      s.textContent = "\u2026";
      list.appendChild(s);
    } else list.appendChild(mkBtn(String(it.page), String(it.page), false, it.page === current));
  }
  list.appendChild(mkBtn("\u203A", "next", current >= total, false));
  root.dataset.page = String(current);
  root.dataset.count = String(total);
}
function bindPagination(root) {
  const count = parseNum(root.dataset.count, 10);
  let page = parseNum(root.dataset.page ?? root.dataset.defaultPage, 1);
  const sibling = parseNum(root.dataset.siblingCount, 1);
  const setPage = (next) => {
    page = Math.min(count, Math.max(1, next));
    paintPagination(root, count, page, sibling);
    emit(root, "mimicus-pagination-change", { page, count });
  };
  paintPagination(root, count, page, sibling);
  const cleanups = [on(root, "click", (e) => {
    const btn = e.target.closest("[data-mimicus-page]");
    if (!btn || btn.disabled) return;
    const action = btn.dataset.mimicusPage;
    if (action === "prev") setPage(page - 1);
    else if (action === "next") setPage(page + 1);
    else setPage(parseNum(action, page));
  })];
  return () => cleanups.forEach((fn) => fn());
}
function bindSteps(root) {
  const clickable = parseBool(root.dataset.clickable);
  if (!clickable) return () => {
  };
  const steps = qsa("[data-mimicus-step]", root);
  const cleanups = steps.map((step, i) => on(step, "click", () => {
    root.dataset.current = String(i);
    steps.forEach((s, j) => {
      s.classList.toggle("is-finish", j < i);
      s.classList.toggle("is-process", j === i);
      s.classList.toggle("is-wait", j > i);
    });
    emit(root, "mimicus-steps-change", { current: i });
  }));
  return () => cleanups.forEach((fn) => fn());
}
function bindDrawer(root) {
  const backdrop = qs("[data-mimicus-drawer-backdrop]", root) ?? qs(".mimicus-drawer__backdrop", root);
  const panel = qs("[data-mimicus-drawer-panel]", root) ?? qs(".mimicus-drawer__panel", root);
  const closeBtn = qs("[data-mimicus-drawer-close]", root);
  const sync = () => {
    const open = parseBool(root.dataset.open);
    root.classList.toggle("is-open", open);
    root.setAttribute("aria-hidden", open ? "false" : "true");
    if (panel) panel.inert = !open;
    document.documentElement.classList.toggle("mimicus-drawer-open", open);
  };
  const close = () => {
    root.dataset.open = "false";
    sync();
    emit(root, "mimicus-drawer-close", {});
  };
  sync();
  const cleanups = [
    on(backdrop, "click", close),
    on(closeBtn, "click", close),
    on(document, "keydown", (e) => {
      if (e.key === "Escape" && parseBool(root.dataset.open)) close();
    })
  ];
  const obs = new MutationObserver(sync);
  obs.observe(root, { attributes: true, attributeFilter: ["data-open"] });
  return () => {
    obs.disconnect();
    cleanups.forEach((fn) => fn());
    document.documentElement.classList.remove("mimicus-drawer-open");
  };
}
function bindBottomNav(root) {
  const actions = qsa("[data-mimicus-bottom-action]", root);
  const cleanups = [];
  const setValue = (val) => {
    root.dataset.value = val;
    for (const a of actions) {
      const on2 = a.dataset.mimicusBottomAction === val;
      a.classList.toggle("is-active", on2);
      a.setAttribute("aria-selected", on2 ? "true" : "false");
    }
  };
  setValue(root.dataset.value ?? actions[0]?.dataset.mimicusBottomAction ?? "");
  for (const a of actions) {
    cleanups.push(on(a, "click", () => {
      const v = a.dataset.mimicusBottomAction ?? "";
      setValue(v);
      emit(root, "mimicus-bottom-nav-change", { value: v });
    }));
  }
  return () => cleanups.forEach((fn) => fn());
}
function bindSpeedDial(root) {
  const fab = qs("[data-mimicus-speed-dial-trigger]", root) ?? qs(".mimicus-speed-dial__trigger", root);
  const openCls = "is-open";
  const close = () => {
    root.classList.remove(openCls);
    fab?.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    root.classList.add(openCls);
    fab?.setAttribute("aria-expanded", "true");
  };
  const toggle = () => root.classList.contains(openCls) ? close() : open();
  const cleanups = [
    on(fab, "click", (e) => {
      e.stopPropagation();
      toggle();
    }),
    on(root, "keydown", (e) => {
      if (e.key === "Escape") close();
    }),
    clickOutside(root, close)
  ];
  for (const action of qsa("[data-mimicus-speed-dial-action]", root)) {
    cleanups.push(on(action, "click", () => {
      close();
      emit(root, "mimicus-speed-dial-action", { key: action.dataset.mimicusSpeedDialAction });
    }));
  }
  close();
  return () => {
    close();
    cleanups.forEach((fn) => fn());
  };
}
var BINDERS3 = {
  anchor: bindAnchor,
  tabs: bindTabs,
  dropdown: bindDropdown,
  menu: bindMenu,
  pagination: bindPagination,
  steps: bindSteps,
  drawer: bindDrawer,
  "bottom-nav": bindBottomNav,
  "speed-dial": bindSpeedDial
};
function bindNavComponent(root) {
  const r = root;
  const type = r?.dataset?.mimicusNav;
  r.__mimicusNavCleanup?.();
  const cleanup = (type ? BINDERS3[type]?.(r) : void 0) ?? (() => {
  });
  r.__mimicusNavCleanup = cleanup;
  return () => {
    cleanup();
    delete r.__mimicusNavCleanup;
  };
}
function mountNavigation(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-nav]", document) : [scope].filter((el) => el?.dataset?.mimicusNav);
  const cleanups = roots.map(bindNavComponent);
  return () => cleanups.forEach((fn) => fn());
}

// src/nav/useNavBinding.ts
function useNavBinding(ref, type, deps = []) {
  useEffect11(() => {
    const el = ref.current;
    if (!el) return void 0;
    el.dataset.mimicusNav = type;
    return bindNavComponent(el);
  }, deps);
}

// src/components/navigation/Navigation.tsx
import { Fragment as Fragment5, jsx as jsx29, jsxs as jsxs16 } from "react/jsx-runtime";
function cx4(...p) {
  return p.filter(Boolean).join(" ");
}
function AnchorLink({ href, title, children, className, ...rest }) {
  return /* @__PURE__ */ jsx29("a", { ...rest, href, title: typeof title === "string" ? title : void 0, className: cx4("mimicus-anchor__link", className), "data-mimicus-anchor-link": true, children: /* @__PURE__ */ jsx29("span", { className: "mimicus-anchor__link-title", children: children ?? title }) });
}
function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "anchor", [direction, affix, targetOffset, bounds, container]);
  const body = children ?? items?.map((it, i) => /* @__PURE__ */ jsx29(AnchorLink, { href: it.href, title: it.title, children: it.title }, it.href ?? i));
  return /* @__PURE__ */ jsx29(
    "nav",
    {
      ref,
      ...rest,
      className: cx4("mimicus-anchor", `mimicus-anchor--${direction}`, className),
      style,
      "data-direction": direction,
      "data-affix": affix ? "true" : void 0,
      "data-target-offset": targetOffset,
      "data-bounds": bounds,
      "data-container": container,
      "data-mimicus-nav": "anchor",
      children: /* @__PURE__ */ jsx29("div", { className: "mimicus-anchor__list", children: body })
    }
  );
}
Anchor.Link = AnchorLink;
function BreadcrumbItem({ href, children, className, ...rest }) {
  const inner = href ? /* @__PURE__ */ jsx29("a", { href, className: "mimicus-breadcrumbs__link", ...rest, children }) : /* @__PURE__ */ jsx29("span", { className: "mimicus-breadcrumbs__page", "aria-current": "page", ...rest, children });
  return /* @__PURE__ */ jsx29("li", { className: cx4("mimicus-breadcrumbs__item", className), children: inner });
}
function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }) {
  const nodes = children ?? items?.map((it, i) => /* @__PURE__ */ jsx29(BreadcrumbItem, { href: it.href, children: it.label }, i));
  const list = useMemo3(() => Children10.toArray(nodes), [nodes]);
  const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
  const withSep = [];
  visible.forEach((node, i) => {
    if (i > 0) withSep.push(/* @__PURE__ */ jsx29("li", { className: "mimicus-breadcrumbs__sep", "aria-hidden": true, children: separator }, `sep-${i}`));
    withSep.push(node);
  });
  return /* @__PURE__ */ jsx29("nav", { ...rest, "aria-label": "breadcrumb", className: cx4("mimicus-breadcrumbs", className), style, children: /* @__PURE__ */ jsx29("ol", { className: "mimicus-breadcrumbs__list", children: withSep }) });
}
Breadcrumbs.Item = BreadcrumbItem;
var Breadcrumb = Breadcrumbs;
function MenuItem({ itemKey, disabled, icon, children, className, ...rest }) {
  const dataKey = itemKey ?? rest["data-key"];
  return /* @__PURE__ */ jsx29("li", { role: "none", children: /* @__PURE__ */ jsxs16(
    "button",
    {
      type: "button",
      role: "menuitem",
      disabled,
      "data-key": dataKey,
      "data-mimicus-menu-item": true,
      className: cx4("mimicus-menu__item", disabled && "is-disabled", className),
      ...rest,
      children: [
        icon && /* @__PURE__ */ jsx29("span", { className: "mimicus-menu__icon", "aria-hidden": true, children: icon }),
        /* @__PURE__ */ jsx29("span", { className: "mimicus-menu__label", children })
      ]
    }
  ) });
}
function MenuDivider() {
  return /* @__PURE__ */ jsx29("li", { role: "separator", className: "mimicus-menu__divider" });
}
function Menu({ mode = "vertical", selectable, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "menu", [mode]);
  return /* @__PURE__ */ jsx29(
    "ul",
    {
      ref,
      role: "menu",
      ...rest,
      className: cx4("mimicus-menu", `mimicus-menu--${mode}`, selectable && "mimicus-menu--selectable", className),
      style,
      "data-mode": mode,
      "data-mimicus-nav": "menu",
      children
    }
  );
}
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
function Dropdown({ trigger, menu, placement = "bottomLeft", open, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "dropdown", [placement, open]);
  const body = children ?? /* @__PURE__ */ jsxs16(Fragment5, { children: [
    /* @__PURE__ */ jsx29("div", { className: "mimicus-dropdown__trigger", "data-mimicus-dropdown-trigger": true, children: trigger }),
    /* @__PURE__ */ jsx29("div", { className: "mimicus-dropdown__panel", "data-mimicus-dropdown-panel": true, role: "menu", children: menu })
  ] });
  return /* @__PURE__ */ jsx29(
    "div",
    {
      ref,
      ...rest,
      className: cx4("mimicus-dropdown", `mimicus-dropdown--${placement}`, open && "is-open", className),
      style,
      "data-placement": placement,
      "data-open": open ? "true" : void 0,
      "data-mimicus-nav": "dropdown",
      children: body
    }
  );
}
function TabItem() {
  return null;
}
function normalizeTabItems(items, children) {
  if (items?.length) return items.map((it, i) => ({ key: it.key ?? it.tabKey ?? `tab-${i}`, label: it.label, disabled: it.disabled, icon: it.icon, content: it.children ?? it.content }));
  return Children10.map(children, (child, i) => {
    const node = child;
    if (!node?.props) return null;
    const p = node.props;
    return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
  })?.filter(Boolean) ?? [];
}
function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }) {
  const ref = useRef7(null);
  const tabItems = normalizeTabItems(items, children);
  const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
  useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
  const tabs = [];
  const panels = [];
  tabItems.forEach((it) => {
    const k = it.key;
    const on2 = (activeKey ?? defaultKey) === k;
    tabs.push(
      /* @__PURE__ */ jsxs16(
        "button",
        {
          type: "button",
          role: "tab",
          "data-mimicus-tab": k,
          "data-key": k,
          disabled: it.disabled,
          className: cx4("mimicus-tabs__tab", on2 && "is-active"),
          "aria-selected": on2 ? "true" : "false",
          children: [
            it.icon && /* @__PURE__ */ jsx29("span", { className: "mimicus-tabs__icon", "aria-hidden": true, children: it.icon }),
            /* @__PURE__ */ jsx29("span", { className: "mimicus-tabs__label", children: it.label })
          ]
        },
        `t-${k}`
      )
    );
    panels.push(
      /* @__PURE__ */ jsx29(
        "div",
        {
          role: "tabpanel",
          "data-mimicus-tab-panel": k,
          "data-key": k,
          className: cx4("mimicus-tabs__panel", on2 && "is-active"),
          hidden: !on2,
          children: it.content
        },
        `p-${k}`
      )
    );
  });
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      ref,
      ...rest,
      className: cx4("mimicus-tabs", `mimicus-tabs--${type}`, `mimicus-tabs--${tabPosition}`, className),
      style,
      "data-type": type,
      "data-tab-position": tabPosition,
      "data-active-key": activeKey,
      "data-default-active-key": defaultKey,
      "data-mimicus-nav": "tabs",
      children: [
        /* @__PURE__ */ jsx29("div", { className: "mimicus-tabs__nav", role: "tablist", children: tabs }),
        /* @__PURE__ */ jsx29("div", { className: "mimicus-tabs__content", children: panels })
      ]
    }
  );
}
Tabs.Tab = TabItem;
function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, simple, className, style, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
  return /* @__PURE__ */ jsx29(
    "nav",
    {
      ref,
      ...rest,
      "aria-label": "pagination",
      className: cx4("mimicus-pagination", simple && "mimicus-pagination--simple", className),
      style,
      "data-count": count,
      "data-page": page,
      "data-default-page": defaultPage,
      "data-sibling-count": siblingCount,
      "data-boundary-count": boundaryCount,
      "data-mimicus-nav": "pagination",
      children: /* @__PURE__ */ jsx29("div", { className: "mimicus-pagination__list", "data-mimicus-pagination-list": true, role: "navigation" })
    }
  );
}
function Step({ title, description, status, icon, className, ...rest }) {
  return /* @__PURE__ */ jsxs16("div", { ...rest, className: cx4("mimicus-steps__item", status && `is-${status}`, className), "data-mimicus-step": true, children: [
    /* @__PURE__ */ jsx29("div", { className: "mimicus-steps__icon", children: icon ?? /* @__PURE__ */ jsx29("span", { className: "mimicus-steps__dot" }) }),
    /* @__PURE__ */ jsxs16("div", { className: "mimicus-steps__content", children: [
      title && /* @__PURE__ */ jsx29("div", { className: "mimicus-steps__title", children: title }),
      description && /* @__PURE__ */ jsx29("div", { className: "mimicus-steps__desc", children: description })
    ] })
  ] });
}
function Steps({ current = 0, direction = "horizontal", clickable, items, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "steps", [current, direction, clickable]);
  const body = children ?? items?.map((it, i) => {
    const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
    return /* @__PURE__ */ jsx29(Step, { title: it.title, description: it.description, status: st, icon: it.icon }, i);
  });
  return /* @__PURE__ */ jsx29(
    "div",
    {
      ref,
      ...rest,
      className: cx4("mimicus-steps", `mimicus-steps--${direction}`, className),
      style,
      "data-current": current,
      "data-direction": direction,
      "data-clickable": clickable ? "true" : void 0,
      "data-mimicus-nav": "steps",
      children: body
    }
  );
}
Steps.Step = Step;
var Stepper = Steps;
function Drawer({ open = false, placement = "right", width = 280, title, footer, className, style, children, onClose, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "drawer", [open, placement, width]);
  useEffect12(() => {
    const el = ref.current;
    if (!el || !onClose) return void 0;
    const fn = () => onClose();
    el.addEventListener("mimicus-drawer-close", fn);
    return () => el.removeEventListener("mimicus-drawer-close", fn);
  }, [onClose]);
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      ref,
      ...rest,
      className: cx4("mimicus-drawer", `mimicus-drawer--${placement}`, open && "is-open", className),
      style: { ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width },
      "data-open": open ? "true" : "false",
      "data-placement": placement,
      "data-mimicus-nav": "drawer",
      "aria-hidden": open ? "false" : "true",
      children: [
        /* @__PURE__ */ jsx29("div", { className: "mimicus-drawer__backdrop", "data-mimicus-drawer-backdrop": true, "aria-hidden": true }),
        /* @__PURE__ */ jsxs16("aside", { className: "mimicus-drawer__panel", "data-mimicus-drawer-panel": true, role: "dialog", "aria-modal": "true", children: [
          title && /* @__PURE__ */ jsxs16("header", { className: "mimicus-drawer__header", children: [
            title,
            /* @__PURE__ */ jsx29("button", { type: "button", className: "mimicus-drawer__close", "data-mimicus-drawer-close": true, "aria-label": "Cerrar", children: "\xD7" })
          ] }),
          /* @__PURE__ */ jsx29("div", { className: "mimicus-drawer__body", children }),
          footer && /* @__PURE__ */ jsx29("footer", { className: "mimicus-drawer__footer", children: footer })
        ] })
      ]
    }
  );
}
function BottomNavigationAction({ value, label, icon, className, ...rest }) {
  return /* @__PURE__ */ jsxs16(
    "button",
    {
      type: "button",
      ...rest,
      className: cx4("mimicus-bottom-nav__action", className),
      "data-mimicus-bottom-action": value,
      "aria-label": typeof label === "string" ? label : void 0,
      children: [
        icon && /* @__PURE__ */ jsx29("span", { className: "mimicus-bottom-nav__icon", "aria-hidden": true, children: icon }),
        label && /* @__PURE__ */ jsx29("span", { className: "mimicus-bottom-nav__label", children: label })
      ]
    }
  );
}
function BottomNavigation({ value, showLabels, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "bottom-nav", [value, showLabels]);
  return /* @__PURE__ */ jsx29(
    "nav",
    {
      ref,
      ...rest,
      className: cx4("mimicus-bottom-nav", showLabels && "mimicus-bottom-nav--labels", className),
      style,
      "data-value": value,
      "data-show-labels": showLabels ? "true" : void 0,
      "data-mimicus-nav": "bottom-nav",
      children
    }
  );
}
BottomNavigation.Action = BottomNavigationAction;
function NavLink({ href = "#", underline = "hover", color = "primary", className, style, children, disabled, component: Comp, ...rest }) {
  const Tag2 = Comp ?? "a";
  const props = Tag2 === "a" ? { href: disabled ? void 0 : href } : {};
  return /* @__PURE__ */ jsx29(
    Tag2,
    {
      ...rest,
      ...props,
      className: cx4("mimicus-nav-link", `mimicus-nav-link--underline-${underline}`, `mimicus-nav-link--${color}`, disabled && "is-disabled", className),
      style,
      "aria-disabled": disabled || void 0,
      children
    }
  );
}
var Link = NavLink;
function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }) {
  const key = actionKey ?? rest.key;
  return /* @__PURE__ */ jsxs16(
    "button",
    {
      type: "button",
      ...rest,
      className: cx4("mimicus-speed-dial__action", className),
      "data-mimicus-speed-dial-action": key,
      title: typeof tooltip === "string" ? tooltip : void 0,
      "aria-label": typeof tooltip === "string" ? tooltip : void 0,
      children: [
        /* @__PURE__ */ jsx29("span", { className: "mimicus-speed-dial__action-icon", "aria-hidden": true, children: icon }),
        tooltip && /* @__PURE__ */ jsx29("span", { className: "mimicus-speed-dial__tooltip", children: tooltip })
      ]
    }
  );
}
function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }) {
  const ref = useRef7(null);
  useNavBinding(ref, "speed-dial", [direction, open]);
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      ref,
      ...rest,
      className: cx4("mimicus-speed-dial", `mimicus-speed-dial--${direction}`, open && "is-open", className),
      style,
      "data-direction": direction,
      "data-mimicus-nav": "speed-dial",
      children: [
        /* @__PURE__ */ jsx29("div", { className: "mimicus-speed-dial__actions", role: "menu", children }),
        /* @__PURE__ */ jsx29("button", { type: "button", className: "mimicus-speed-dial__trigger", "data-mimicus-speed-dial-trigger": true, "aria-label": ariaLabel, "aria-haspopup": "menu", children: /* @__PURE__ */ jsx29("span", { className: "mimicus-speed-dial__icon", "aria-hidden": true, children: icon ?? "+" }) })
      ]
    }
  );
}
SpeedDial.Action = SpeedDialAction;

// src/components/overlays/Overlays.tsx
import { useCallback, useEffect as useEffect13, useRef as useRef8, useState as useState9 } from "react";
import { jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
function cx5(...p) {
  return p.filter(Boolean).join(" ");
}
function Dialog({
  open = false,
  loading = false,
  notClose = false,
  lockViewportScroll = true,
  backeffect = "blur",
  _scope = "global",
  className,
  style,
  children,
  onCloseCancel,
  onClose,
  onClick,
  onMouseDown,
  ...rest
}) {
  const ref = useRef8(null);
  const blockCloseClickRef = useRef8(false);
  const scope = _scope === "local" ? "local" : "global";
  const lockScroll = scope === "global" && lockViewportScroll;
  useEffect13(() => {
    const el = ref.current;
    if (!el) return void 0;
    const onDialogCancel = async (e) => {
      e.preventDefault();
      if (loading) return;
      if (notClose) {
        const force = await Promise.resolve(onCloseCancel?.(e));
        if (!force) return;
      }
      onClose?.();
    };
    el.addEventListener("cancel", onDialogCancel);
    if (open) {
      if (scope === "local") {
        if (!el.open) el.show();
      } else if (!el.open) el.showModal();
    } else if (el.open) el.close();
    return () => el.removeEventListener("cancel", onDialogCancel);
  }, [open, loading, notClose, onClose, onCloseCancel, scope]);
  useEffect13(() => {
    if (!open || !lockScroll) return void 0;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open, lockScroll]);
  const isBlockCloseClick = (target) => target instanceof HTMLElement && Boolean(target.closest(".blockCloseClick"));
  const handleMouseDown = (e) => {
    blockCloseClickRef.current = isBlockCloseClick(e.target);
    onMouseDown?.(e);
  };
  const isBackdropClick = (target) => {
    if (target === ref.current) return true;
    return target instanceof HTMLElement && target.classList.contains("mimicus-action-drawer__wrap");
  };
  const handleClick = async (e) => {
    onClick?.(e);
    if (loading) return;
    if (isBlockCloseClick(e.target) || blockCloseClickRef.current) {
      blockCloseClickRef.current = false;
      return;
    }
    if (!isBackdropClick(e.target)) return;
    if (notClose) {
      const force = await Promise.resolve(onCloseCancel?.(e.nativeEvent));
      if (!force) return;
    }
    onClose?.();
  };
  if (!open) return null;
  return /* @__PURE__ */ jsx30(
    "dialog",
    {
      ref,
      ...rest,
      className: cx5("mimicus-dialog", "is-dialog", loading && "loading", lockScroll && "lockViewportScroll", className),
      style,
      "data-scope": scope,
      "data-backeffect": backeffect,
      onMouseDown: handleMouseDown,
      onClick: handleClick,
      children
    }
  );
}
function Modal({
  bshow,
  open,
  showCloseHeader = true,
  variant = "solid",
  title,
  loading,
  notClose,
  className,
  style,
  children,
  onClose,
  ...dialogProps
}) {
  const isOpen = open ?? bshow ?? false;
  const close = useCallback(() => onClose?.(), [onClose]);
  return /* @__PURE__ */ jsx30(Dialog, { ...dialogProps, open: isOpen, loading, notClose, className: cx5("is-modal", className), onClose: close, children: /* @__PURE__ */ jsx30(Card, { variant, id: "modal-window", className: "blockCloseClick mimicus-modal__card", style: { padding: 0, border: "none", ...style }, children: /* @__PURE__ */ jsxs17("div", { className: "mimicus-modal__layout", children: [
    (title || showCloseHeader) && /* @__PURE__ */ jsxs17("header", { className: "mimicus-modal__header", children: [
      title && /* @__PURE__ */ jsx30("div", { className: "mimicus-modal__title", children: title }),
      showCloseHeader && !notClose && /* @__PURE__ */ jsx30(IconButton, { variant: "text", icon: /* @__PURE__ */ jsx30(Icon, { icon: "mdi:close" }), "aria-label": "Cerrar", disabled: loading || notClose, onClick: close })
    ] }),
    /* @__PURE__ */ jsx30("div", { className: cx5("mimicus-modal__content", loading && "loading"), children })
  ] }) }) });
}
var DRAWER_SIDE_ALIGN = {
  right: { justifyContent: "flex-end" },
  bottom: { alignItems: "flex-end" },
  left: { justifyContent: "flex-start" },
  top: { alignItems: "flex-start" }
};
function ActionDrawer({
  bshow,
  open,
  side = "right",
  className,
  style,
  children,
  onClose,
  ...dialogProps
}) {
  const isOpen = open ?? bshow ?? false;
  const placement = side ?? "right";
  const close = useCallback(() => onClose?.(), [onClose]);
  const isLR = placement === "left" || placement === "right";
  return /* @__PURE__ */ jsx30(Dialog, { ...dialogProps, open: isOpen, className: cx5("is-action-drawer", className), onClose: close, children: /* @__PURE__ */ jsx30(
    "div",
    {
      className: cx5("mimicus-action-drawer__wrap", `mimicus-action-drawer__wrap--${placement}`),
      style: { ...DRAWER_SIDE_ALIGN[placement], ...style },
      children: /* @__PURE__ */ jsx30(
        Card,
        {
          variant: "solid",
          className: cx5("blockCloseClick", "mimicus-action-drawer__card", isLR ? "is-lr" : "is-tb"),
          style: { padding: 0, border: "none" },
          children: /* @__PURE__ */ jsx30("div", { className: "mimicus-action-drawer__body", children })
        }
      )
    }
  ) });
}
function Loading({ bShow, bshow, open, color, className, style, children, onClose, ...dialogProps }) {
  const isOpen = open ?? bshow ?? bShow ?? false;
  return /* @__PURE__ */ jsx30(Dialog, { ...dialogProps, open: isOpen, loading: true, notClose: true, className: cx5("is-loading", className), onClose, children: /* @__PURE__ */ jsx30("div", { className: "mimicus-loading__panel", style, "data-color": color ?? void 0, children: children ?? /* @__PURE__ */ jsx30("span", { className: "mimicus-loading__spinner", "aria-hidden": true }) }) });
}
var toastListeners = /* @__PURE__ */ new Set();
var toastItems = [];
function emitToasts() {
  toastListeners.forEach((fn) => fn([...toastItems]));
}
function pushToast(message, kind, duration) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  toastItems = [...toastItems, { id, message, kind, duration }];
  emitToasts();
  if (duration > 0 && duration < 999999999) {
    window.setTimeout(() => toastRemove(id), duration);
  }
  return id;
}
function toastSuccess(message, duration = 3e3) {
  return pushToast(message, "success", duration);
}
function toastError(message, duration = 5e3) {
  return pushToast(message, "error", duration);
}
function toastLoading(message, duration = 999999999) {
  return pushToast(message, "loading", duration);
}
function toastRemove(id) {
  toastItems = toastItems.filter((t) => t.id !== id);
  emitToasts();
}
function Toaster() {
  const [items, setItems] = useState9([]);
  useEffect13(() => {
    toastListeners.add(setItems);
    setItems([...toastItems]);
    return () => {
      toastListeners.delete(setItems);
    };
  }, []);
  if (!items.length) return null;
  return /* @__PURE__ */ jsx30("div", { className: "mimicus-toaster", "aria-live": "polite", children: items.map((t) => /* @__PURE__ */ jsxs17("div", { className: cx5("mimicus-toast", `mimicus-toast--${t.kind}`), children: [
    t.kind === "loading" && /* @__PURE__ */ jsx30("span", { className: "mimicus-toast__spinner", "aria-hidden": true }),
    /* @__PURE__ */ jsx30("span", { children: t.message }),
    t.kind !== "loading" && /* @__PURE__ */ jsx30("button", { type: "button", className: "mimicus-toast__close", "aria-label": "Cerrar", onClick: () => toastRemove(t.id), children: "\xD7" })
  ] }, t.id)) });
}
function Alert({ color = "info", title, inline, className, style, children, ...rest }) {
  return /* @__PURE__ */ jsxs17("div", { ...rest, className: cx5("mimicus-alert", `mimicus-alert--${color}`, inline && "mimicus-alert--inline", className), style, role: "alert", children: [
    /* @__PURE__ */ jsx30(Icon, { icon: color === "error" ? "mdi:alert-circle" : color === "warning" ? "mdi:alert" : color === "success" ? "mdi:check-circle" : "mdi:information", className: "mimicus-alert__icon", "aria-hidden": true }),
    /* @__PURE__ */ jsxs17("div", { className: "mimicus-alert__content", children: [
      title && /* @__PURE__ */ jsx30("strong", { className: "mimicus-alert__title", children: title }),
      children && /* @__PURE__ */ jsx30("div", { className: "mimicus-alert__body", children })
    ] })
  ] });
}
function TipInfo({ label, descripcion, kind = "info", trigger = "click", useModal = false, className, style }) {
  const [modalOpen, setModalOpen] = useState9(false);
  const icon = kind === "warn" ? "mdi:alert-circle-outline" : "mdi:information-outline";
  const triggerBtn = /* @__PURE__ */ jsx30("button", { type: "button", className: cx5("mimicus-tip-info__btn", `mimicus-tip-info__btn--${kind}`), "aria-label": "Ayuda", onClick: useModal ? () => setModalOpen(true) : void 0, children: /* @__PURE__ */ jsx30(Icon, { icon }) });
  return /* @__PURE__ */ jsxs17("span", { className: cx5("mimicus-tip-info", className), style, children: [
    label && /* @__PURE__ */ jsx30("span", { className: "mimicus-tip-info__label", children: label }),
    useModal ? triggerBtn : /* @__PURE__ */ jsx30(Tooltip, { title: descripcion, placement: "top", children: triggerBtn }),
    useModal && /* @__PURE__ */ jsx30(Modal, { open: modalOpen, title: label ?? "Ayuda", onClose: () => setModalOpen(false), _scope: "global", children: /* @__PURE__ */ jsx30("p", { style: { margin: 0 }, children: descripcion }) })
  ] });
}
function InvokedFloater({
  anchorLabel = "Abrir panel",
  panelText = "Contenido del floater",
  side = "bottom",
  align = "center",
  trigger = "click",
  className,
  style
}) {
  const [open, setOpen] = useState9(trigger === "manual");
  const anchorRef = useRef8(null);
  const openPanel = () => setOpen(true);
  const closePanel = () => setOpen(false);
  const anchorProps = trigger === "hover" ? { onMouseEnter: openPanel, onMouseLeave: closePanel } : trigger === "contextmenu" ? { onContextMenu: (e) => {
    e.preventDefault();
    openPanel();
  } } : { onClick: () => setOpen((v) => !v) };
  return /* @__PURE__ */ jsxs17("span", { className: cx5("mimicus-invoked-floater", className), style, children: [
    /* @__PURE__ */ jsx30("button", { ref: anchorRef, type: "button", className: "mimicus-invoked-floater__anchor", ...anchorProps, children: anchorLabel }),
    open && /* @__PURE__ */ jsxs17("div", { className: cx5("mimicus-invoked-floater__panel", `is-${side}`, `align-${align}`), role: "dialog", children: [
      /* @__PURE__ */ jsx30("p", { style: { margin: 0 }, children: panelText }),
      /* @__PURE__ */ jsx30(Button, { variant: "text", onClick: closePanel, children: "Cerrar" })
    ] })
  ] });
}
function FloatingComponent({
  showfloat = false,
  rowText = "Fila de ejemplo",
  horizontal = "right",
  vertical = "center",
  className,
  style
}) {
  const [hover, setHover] = useState9(false);
  const visible = showfloat || hover;
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: cx5("mimicus-floating-component", className),
      style,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: [
        /* @__PURE__ */ jsx30("div", { className: "mimicus-floating-component__row", children: rowText }),
        visible && /* @__PURE__ */ jsxs17("div", { className: cx5("mimicus-floating-component__panel", `h-${horizontal}`, `v-${vertical}`), children: [
          /* @__PURE__ */ jsx30(Button, { variant: "text", icon: "mdi:pencil-outline", children: "Editar" }),
          /* @__PURE__ */ jsx30(Button, { variant: "text", icon: "mdi:delete-outline", children: "Eliminar" })
        ] })
      ]
    }
  );
}
export {
  APP_LAYOUT_VARIANT_OPTIONS,
  Accordion,
  ActionDrawer,
  Alert,
  Anchor,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  AutoComplete,
  Avatar,
  AvatarGroup,
  BRAND_DISPLAY_NAME,
  Badge,
  BlockLayout,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumb,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  CheckboxChip,
  CheckboxIcon,
  Chip,
  CodeBlock,
  CodeMirrorPanel,
  Collapse,
  CollapsePanel,
  ColorPicker,
  Container,
  DESIGN_SCHEME_OPTIONS,
  DESIGN_SCHEME_STORAGE_KEY,
  DatePicker,
  Descriptions,
  DescriptionsItem,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Fab,
  FlexLayout,
  FloatButton,
  FloatingComponent,
  Form,
  FormItem,
  GridLayout,
  GridResponsiveForm,
  Headings,
  Icon,
  IconButton,
  ImageList,
  Input,
  InputNumber,
  InvokedFloater,
  LEGACY_LOOKNFEEL_MAP,
  LEGACY_LUMINANCE_KEYS,
  LEGACY_THEME_COLOR_MAP,
  LOOKNFEEL_DEFAULT,
  LOOKNFEEL_OPTIONS,
  LOOKNFEEL_STORAGE_KEY,
  LUMINANCE_STORAGE_KEY,
  LabeledSwitch,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Loading,
  Masonry,
  Mentions,
  Menu,
  Modal,
  NEON_LOOKNFEELS,
  NavLink,
  PLAYGROUND_APP_LAYOUT_OPTIONS,
  Pagination,
  QRCode,
  Radio,
  RadioGroup,
  Rate,
  Rating,
  Segmented,
  Select,
  Separator,
  SidePanel,
  SidePanelSection,
  Slider,
  Space,
  SpeedDial,
  SpeedDialAction,
  Splitter,
  Stack,
  Statistic,
  Step,
  Stepper,
  Steps,
  Switch,
  THEME_COLOR_DESIGN_SCHEME,
  THEME_COLOR_OPTIONS,
  THEME_COLOR_STORAGE_KEY,
  TabItem,
  Table,
  Tabs,
  Tag,
  Text,
  TextArea,
  TextField,
  ThemeProvider,
  TimePicker,
  Timeline,
  TimelineItem,
  TipInfo,
  TitleCard,
  Toaster,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Tour,
  Transfer,
  TransferBoard,
  TransferList,
  Tree,
  TreeSelect,
  Typography,
  Upload,
  appLayoutGridTemplate,
  appLayoutResponsiveGridTemplate,
  applyColorTransform,
  applyLooknfeel,
  applyTheme,
  bg2font,
  bgTransparent2font,
  bootLooknfeel,
  bootMimicusUI,
  bootTheme,
  cdn_exports as cdn,
  colorMix,
  colorTransform_exports as colorTransform,
  copyEditorText,
  designSchemeColorCount,
  designSchemeForThemeColor,
  destroyCodeMirror,
  ensureCodeMirrorCss,
  ensureCodeMirrorLoaded,
  fluidCss,
  getLooknfeelState,
  getThemeState,
  isAppLayoutVariant,
  isDesignScheme,
  isGlassVariant,
  isLooknfeel,
  isLuminance,
  isNgVariant,
  isThemeColor,
  joinColorStyle,
  js2css,
  mergeSurfaceStyle,
  mkAlpha,
  mkBow,
  mkDarken,
  mkHeadingColor,
  mkInvertL,
  mkLighten,
  mkOklchShiftL,
  mkSemanticBorder,
  mkSoftBg,
  mkUnbow,
  mkWinChromeAccent,
  mountCodeMirror,
  mountDisplay,
  mountForms,
  mountNavigation,
  ngBaseVariant,
  normalizeAppLayoutVariant,
  normalizeDesignScheme,
  normalizeLooknfeel,
  normalizePlaygroundAppLayoutVariant,
  normalizeThemeColor,
  normalizeVariant,
  paletteBaseStyle,
  paletteStateVarRules,
  paletteSurfaceTint,
  readDesignSchemeFromDom,
  readLooknfeelFromDom,
  readLuminanceFromDom,
  readThemeColorFromDom,
  resolveCodeMirrorTheme,
  resolveColor,
  setDesignScheme,
  setLuminance,
  setThemeColor,
  snippets_exports as snippets,
  subscribeLooknfeel,
  subscribeTheme,
  surfaceVariantAttrs,
  toastError,
  toastLoading,
  toastRemove,
  toastSuccess,
  useLayoutSlot
};
