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

// src/cdn/baseUrl.js
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

// src/cdn/packs.js
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
    href: (base) => base + "mimicus-ui.min.css",
    attrs: { "data-mimicus-ui-css": "1", "data-mimicus-cdn": "mimicus-ui-css" }
  },
  "script-mimicus-ui": {
    kind: "script-src",
    src: (base) => base + "mimicus-ui.min.js",
    defer: false,
    attrs: { "data-mimicus-ui-js": "1", "data-mimicus-cdn": "mimicus-ui" }
  },
  "link-app-boot-css": {
    kind: "link-css",
    href: (base) => base + "app-boot.min.css",
    attrs: { "data-mimicus-cdn": "app-boot-css" }
  },
  "importmap-mimicus-ui": {
    kind: "importmap",
    imports: (base) => ({
      "@jeff-aporta/mimicus-react": base + "mimicus-react.esm.min.js",
      "@jeff-aporta/mimicus-react/bootstrap": base + "mimicus-react.bootstrap.esm.min.js"
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
  /** @deprecated IIFE legacy — usar stack-esm */
  "mimicus-ui": ["link-mimicus-ui-css", "script-mimicus-ui"],
  "importmap-mimicus": ["importmap-mimicus-ui"],
  "app-boot-css": ["link-app-boot-css"],
  /** Stack ESM — React importmap + UI CSS + alias @jeff-aporta/mimicus-react */
  "stack-esm": ["preconnect", "react18", "iconify", "mimicus-ui-css", "importmap-mimicus-ui"],
  /** Stack mínimo Mimicus React (sin MUI). */
  "stack-mimicus": ["stack-esm"],
  /** Stack tipo swagger (React + MUI + babel + iconify). */
  "stack-mui": ["preconnect", "react18-mui", "iconify", "babel"]
};

// src/cdn/loadCdns.js
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
function resolveImportMap(pack, base) {
  const raw = pack.imports;
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
      Object.assign(importMaps, resolveImportMap(pack, base));
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
  const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "mimicus-snippets.min.js";
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
      Object.assign(importMaps, resolveImportMap(pack, base));
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
export {
  BOOT_CSS_TREE,
  BRAND_DISPLAY_NAME,
  BRAND_LOGO_URL,
  CDN_GROUPS,
  CDN_PACKS,
  DEMO_BOOT_META,
  MIMICUS_UI_REF,
  bootCssText,
  bootHtmlInner,
  brandLoadingLabel,
  buildCdnHeadHtml,
  buildCdnLoaderBlock,
  buildConnBootApplyInline,
  buildRootBlock,
  buildThemeInitInline,
  fluidCss,
  injectCdnHead,
  js2css,
  listCdnGroups,
  loadCDNs,
  mimicusCdnBase,
  parseAppBootMeta,
  patchIndexRoot,
  resolveCdnKeys,
  writeAppBoot
};
