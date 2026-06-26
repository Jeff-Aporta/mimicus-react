// NOTE: se mantiene .js — lo importan scripts Node (scripts/build.mjs, scripts/patch-demo-index.mjs) que no ejecutan TypeScript. No convertir a .ts.
/** Logo InSoft — marca de agua en pantallas de arranque (R2 público). */
export const BRAND_LOGO_URL = "https://pub-1c290cc606c8478899f5764899278571.r2.dev/brand/logo-insoft.png";

/** Logo Mimicus — pulpo-núcleo atómico (silueta SVG). */
export const MIMICUS_LOGO_PATH = "assets/mimicus-logo.svg";

/** Nombre visible en toda la UI (títulos, boot, sidebar, meta). */
export const BRAND_DISPLAY_NAME = "Mimicus React";

/** @param {string} [name] */
export function brandLoadingLabel(name = BRAND_DISPLAY_NAME) {
  return `Cargando ${name}…`;
}

export const DEMO_BOOT_META = {
  logoSrc: MIMICUS_LOGO_PATH,
  icon: "mdi:atom",
  name: BRAND_DISPLAY_NAME,
  label: brandLoadingLabel(),
};
