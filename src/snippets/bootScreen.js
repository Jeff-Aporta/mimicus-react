// NOTE: se mantiene .js — lo importan scripts Node (scripts/build.mjs, scripts/patch-demo-index.mjs) que no ejecutan TypeScript. No convertir a .ts.
/**
 * Pantalla de arranque canónica Mimicus React — mesh + tarjeta glass + barra animada.
 * Consumible vía document.write, patch de index.html o MimicusUI.snippets / MimicusSnippets.
 */
import { fluidCss } from "./fluidCss.js";
import { BRAND_LOGO_URL, BRAND_DISPLAY_NAME, brandLoadingLabel } from "./constants.js";

export { BRAND_LOGO_URL, BRAND_DISPLAY_NAME, brandLoadingLabel, DEMO_BOOT_META } from "./constants.js";

/** @type {Record<string, Record<string, string|number>>} */
export const BOOT_CSS_TREE = {
  html: {
    colorScheme: "dark",
    background: "#0b1220",
  },
  'html[data-luminance="light"]': {
    colorScheme: "light",
    background: "#f0f6ff",
  },
  body: {
    margin: 0,
    height: "100%",
    background: "inherit",
  },
  "#root": {
    height: "100%",
    minHeight: "100vh",
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
    color: "#94a3b8",
  },
  'html[data-luminance="light"] .mimicus-app-boot': {
    background: "#f0f6ff",
    color: "#64748b",
  },
  ".mimicus-app-boot__mesh": {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(99, 102, 241, 0.22), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(0, 229, 255, 0.1), transparent 48%), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(30, 144, 255, 0.08), transparent 55%)",
  },
  'html[data-luminance="light"] .mimicus-app-boot__mesh': {
    background:
      "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(30, 144, 255, 0.14), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(99, 102, 241, 0.08), transparent 48%)",
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
    boxShadow:
      "0 0 0 1px rgba(30, 144, 255, 0.08), 0 10px 36px rgba(30, 144, 255, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    textAlign: "center",
  },
  'html[data-luminance="light"] .mimicus-app-boot__card': {
    borderColor: "rgba(30, 144, 255, 0.2)",
    background: "linear-gradient(165deg, rgba(255, 255, 255, 0.98), rgba(240, 247, 255, 0.92))",
    boxShadow: "0 8px 28px rgba(30, 144, 255, 0.1)",
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
    animation: "mimicus-boot-icon-pulse 2.4s ease-in-out infinite",
  },
  'html[data-luminance="light"] .mimicus-app-boot__icon-wrap': {
    borderColor: "rgba(30, 144, 255, 0.28)",
    background: "rgba(224, 242, 254, 0.95)",
    color: "#0369a1",
    boxShadow: "0 0 14px rgba(30, 144, 255, 0.12)",
  },
  ".mimicus-app-boot__title": {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: "#e2e8f0",
    lineHeight: 1.25,
  },
  'html[data-luminance="light"] .mimicus-app-boot__title': {
    color: "#0f172a",
  },
  ".mimicus-app-boot__label": {
    margin: 0,
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#94a3b8",
    lineHeight: 1.35,
  },
  'html[data-luminance="light"] .mimicus-app-boot__label': {
    color: "#64748b",
  },
  ".mimicus-app-boot__bar": {
    width: "100%",
    height: "3px",
    marginTop: "0.45rem",
    borderRadius: "999px",
    background: "rgba(148, 163, 184, 0.2)",
    overflow: "hidden",
  },
  'html[data-luminance="light"] .mimicus-app-boot__bar': {
    background: "rgba(148, 163, 184, 0.28)",
  },
  ".mimicus-app-boot__bar-fill": {
    display: "block",
    height: "100%",
    width: "36%",
    borderRadius: "inherit",
    background: "linear-gradient(90deg, #1e90ff, #6366f1, #00e5ff)",
    boxShadow: "0 0 10px rgba(30, 144, 255, 0.4)",
    animation: "mimicus-boot-bar-slide 1.75s ease-in-out infinite",
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
    zIndex: 0,
  },
  'html[data-luminance="light"] .mimicus-app-boot-watermark': {
    opacity: 0.12,
    filter: "grayscale(1) brightness(0.85)",
  },
  "@keyframes mimicus-boot-icon-pulse": {
    "0%, 100%": {
      transform: "translateY(0)",
      boxShadow: "0 0 18px rgba(0, 229, 255, 0.16)",
    },
    "50%": {
      transform: "translateY(-2px)",
      boxShadow: "0 0 26px rgba(0, 229, 255, 0.28)",
    },
  },
  "@keyframes mimicus-boot-bar-slide": {
    "0%": { transform: "translateX(-130%)" },
    "100%": { transform: "translateX(330%)" },
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".mimicus-app-boot__icon-wrap, .mimicus-app-boot__bar-fill": {
      animation: "none !important",
    },
  },
};

/** CSS de arranque generado desde BOOT_CSS_TREE. */
export function bootCssText(indent = "      ") {
  return fluidCss(BOOT_CSS_TREE, indent);
}

/**
 * Script síncrono: aplica luminancia desde localStorage antes de pintar boot.
 * @param {string} themeLsKey
 * @param {string} [indent]
 */
export function buildThemeInitInline(themeLsKey, indent = "  ") {
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
${indent}</script>`;
}

/** Script síncrono: title/icon desde ?conn= base64url antes del arranque React. */
export function buildConnBootApplyInline(indent = "    ") {
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
${indent}</script>`;
}

/**
 * @param {{ icon?: string; logoSrc?: string; label: string; name?: string; watermark?: boolean; logoUrl?: string }} opts
 */
export function bootHtmlInner({ icon, logoSrc, label, name, watermark = true, logoUrl = BRAND_LOGO_URL }) {
  const safeIcon = String(icon || "mdi:loading").replace(/"/g, "");
  const safeLogoSrc = logoSrc ? String(logoSrc).replace(/"/g, "") : "";
  const safeLabel = String(label).replace(/</g, "");
  const displayName =
    String(name || "")
      .trim()
      || safeLabel.replace(/^Cargando\s+/i, "").replace(/…$/, "").trim()
      || "App";
  const safeName = displayName.replace(/</g, "");
  const safeLogoUrl = String(logoUrl).replace(/"/g, "");
  const wm = watermark
    ? `<img class="mimicus-app-boot-watermark" src="${safeLogoUrl}" alt="" aria-hidden="true" decoding="async" />`
    : "";
  const iconInner = safeLogoSrc
    ? `<img id="mimicus-boot-icon" src="${safeLogoSrc}" alt="" width="42" height="42" decoding="async" />`
    : `<iconify-icon id="mimicus-boot-icon" icon="${safeIcon}" width="1.85em" height="1.85em"></iconify-icon>`;

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

/**
 * @param {{ icon: string; label: string; name?: string; watermark?: boolean; logoUrl?: string; inlineCss?: boolean }} opts
 * @param {string} [indent]
 */
export function buildRootBlock(opts, indent = "  ") {
  const in2 = `${indent}  `;
  const cssBlock = opts.inlineCss !== false
    ? `${in2}<style>\n${bootCssText(in2)}\n${in2}</style>\n`
    : "";
  return `${indent}<div id="root">
${cssBlock}${bootHtmlInner(opts).split("\n").map((line) => (line ? in2 + line : line)).join("\n")}
${indent}</div>`;
}

/**
 * document.write del bloque boot (solo durante el parse del documento).
 * @param {Document} doc
 * @param {{ icon: string; label: string; name?: string; watermark?: boolean; inlineCss?: boolean }} opts
 */
export function writeAppBoot(doc, opts) {
  if (opts.inlineCss !== false) {
    doc.write(`<style>${bootCssText("")}</style>`);
  }
  doc.write(bootHtmlInner(opts));
}

/** @param {string} html */
export function parseAppBootMeta(html) {
  let name = html.match(/<meta\s+name="application-name"\s+content="([^"]+)"/i)?.[1]?.trim();
  let icon = html.match(/<meta\s+name="app-icon"\s+content="([^"]+)"/i)?.[1]?.trim();

  if (!name) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
    name = title?.split("—")[0]?.trim() || title || "App";
  }
  if (!icon) icon = "mdi:loading";

  return { name, icon, label: `Cargando ${name}…` };
}

const ROOT_OPEN_RE = /<div\s+id="root"[^>]*>/i;

/** @param {string} html */
function findRootRange(html) {
  const start = html.search(ROOT_OPEN_RE);
  if (start < 0) throw new Error('No se encontró <div id="root">');
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

/** @param {string} html @param {Parameters<typeof buildRootBlock>[0]} meta */
export function patchIndexRoot(html, meta) {
  const block = buildRootBlock(meta);
  const { start, end } = findRootRange(html);
  return html.slice(0, start) + block + html.slice(end);
}
