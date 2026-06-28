import paletteCatalog from "./palette-catalog.json";

export type Luminance = "light" | "dark";
export type ThemeColor = (typeof paletteCatalog)[number]["id"];
export type DesignScheme = "mono" | "dual" | "triad";
export type Looknfeel = "contapyme" | "neon";

export interface Option<T extends string = string> {
  id: T;
  label: string;
  icon?: string;
}

export const LUMINANCE_STORAGE_KEY = "theme-luminance";
export const THEME_COLOR_STORAGE_KEY = "theme-color";
export const DESIGN_SCHEME_STORAGE_KEY = "design-scheme";
export const LEGACY_LUMINANCE_KEYS = ["color-theme", "THEME_PREFERENCE_KEY"];

export const LEGACY_THEME_COLOR_MAP: Record<string, ThemeColor> = {
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

export const THEME_COLOR_OPTIONS: Option<ThemeColor>[] = paletteCatalog.map(({ id, label, icon }) => ({ id, label, icon }));

export const DESIGN_SCHEME_OPTIONS: Option<DesignScheme>[] = [
  { id: "mono", label: "Mono", icon: "mdi:circle" },
  { id: "dual", label: "Dual", icon: "mdi:circle-half-full" },
  { id: "triad", label: "Tríada", icon: "mdi:triangle-outline" },
];

/** Scheme preferido por cada paleta. La paleta manda, no el look n feel. */
export const THEME_COLOR_DESIGN_SCHEME = Object.fromEntries(
  paletteCatalog.map((p) => [p.id, p.scheme]),
) as Record<ThemeColor, DesignScheme>;

export const LOOKNFEEL_STORAGE_KEY = "looknfeel";
export const LOOKNFEEL_DEFAULT: Looknfeel = "contapyme";

export const NEON_LOOKNFEELS = ["neon"] as const;

export const LOOKNFEEL_OPTIONS: Option<Looknfeel>[] = [
  { id: "contapyme", label: "ContaPyme", icon: "mdi:office-building" },
  { id: "neon", label: "Neon", icon: "mdi:lightbulb-on-outline" },
];

export const LEGACY_LOOKNFEEL_MAP: Record<string, Looknfeel> = {
  classic: "contapyme",
  "neon-glass": "neon",
  "neon-mono": "neon",
  "neon-dual": "neon",
  "neon-triad": "neon",
};

const LOOKNFEEL_IDS: string[] = LOOKNFEEL_OPTIONS.map((o) => o.id);

export function isLuminance(value: unknown): value is Luminance {
  return value === "light" || value === "dark";
}

export function isThemeColor(value: unknown): value is ThemeColor {
  return THEME_COLOR_OPTIONS.some((o) => o.id === value);
}

export function isDesignScheme(value: unknown): value is DesignScheme {
  return DESIGN_SCHEME_OPTIONS.some((o) => o.id === value);
}

export function normalizeDesignScheme(value: unknown): DesignScheme {
  return isDesignScheme(value) ? value : "mono";
}

export function normalizeThemeColor(value: unknown): ThemeColor {
  if (isThemeColor(value)) return value;
  if (typeof value === "string" && LEGACY_THEME_COLOR_MAP[value]) return LEGACY_THEME_COLOR_MAP[value];
  return "hues-dodgerblue";
}

export function isLooknfeel(value: unknown): value is Looknfeel {
  return typeof value === "string" && LOOKNFEEL_IDS.includes(value);
}

export function normalizeLooknfeel(value: unknown): Looknfeel {
  if (isLooknfeel(value)) return value;
  if (typeof value === "string" && LEGACY_LOOKNFEEL_MAP[value]) return LEGACY_LOOKNFEEL_MAP[value];
  return LOOKNFEEL_DEFAULT;
}

export function designSchemeForThemeColor(value: string): DesignScheme {
  return THEME_COLOR_DESIGN_SCHEME[value as ThemeColor] ?? "mono";
}

export function designSchemeColorCount(scheme: DesignScheme): 1 | 2 | 3 {
  if (scheme === "mono") return 1;
  if (scheme === "dual") return 2;
  return 3;
}

export function readLuminanceFromDom(): Luminance {
  if (typeof document === "undefined") return "light";
  const v = document.documentElement.dataset.luminance;
  return isLuminance(v) ? v : "light";
}

export function readThemeColorFromDom(): ThemeColor {
  if (typeof document === "undefined") return "hues-dodgerblue";
  return normalizeThemeColor(document.documentElement.dataset.themeColor);
}

export function readDesignSchemeFromDom(): DesignScheme {
  if (typeof document === "undefined") return "mono";
  return normalizeDesignScheme(document.documentElement.dataset.designScheme);
}

export function readLooknfeelFromDom(): Looknfeel {
  if (typeof document === "undefined") return LOOKNFEEL_DEFAULT;
  return normalizeLooknfeel(document.documentElement.dataset.looknfeel);
}

export function isNgVariant(value: unknown): boolean {
  return typeof value === "string" && value.startsWith("ng-");
}

export function ngBaseVariant(value: string | undefined): string | undefined {
  return isNgVariant(value) ? (value as string).slice(3) : value;
}

export function normalizeVariant(variant: string | undefined | null, fallback = "solid"): string {
  if (variant == null || variant === "") return fallback;
  if (isNgVariant(variant)) return variant.slice(3);
  return variant;
}

export function surfaceVariantAttrs(
  variant: string | undefined | null,
  fallback = "solid",
): { "data-variant": string } {
  return { "data-variant": normalizeVariant(variant, fallback) };
}

export function isGlassVariant(variant: string | undefined | null): boolean {
  return normalizeVariant(variant, "") === "glass";
}
