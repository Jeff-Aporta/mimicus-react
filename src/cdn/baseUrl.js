/** Ref GH Pages / jsDelivr del paquete mimicus-react. */
export const MIMICUS_UI_REF = "main";

/** @returns {string} Base URL del folder cdn/ (termina en /). */
export function mimicusCdnBase() {
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
