import { CODEMIRROR_CDN } from "./constants.js";

const LAZY_CSS_ATTR = "data-mimicus-cm-href";
const LAZY_SCRIPT_ATTR = "data-mimicus-cm-src";
const LAZY_SCRIPT_READY = "data-mimicus-cm-ready";

const CM_STYLES = [
  `${CODEMIRROR_CDN}/codemirror.min.css`,
  `${CODEMIRROR_CDN}/theme/dracula.min.css`,
];

const CM_SCRIPT_SQL = `${CODEMIRROR_CDN}/mode/sql/sql.min.js`;
const CM_SCRIPT_CSS = `${CODEMIRROR_CDN}/mode/css/css.min.js`;

const CM_SCRIPTS = [
  `${CODEMIRROR_CDN}/codemirror.min.js`,
  `${CODEMIRROR_CDN}/mode/javascript/javascript.min.js`,
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
    link.onerror = () => reject(new Error(`CSS no cargó: ${url}`));
    document.head.appendChild(link);
  });
}

function loadScript(src) {
  const url = String(src || "").trim();
  if (!url || typeof document === "undefined") return Promise.resolve();
  const sel = `script[${LAZY_SCRIPT_ATTR}="${url}"]`;
  const existing = document.querySelector(sel);
  if (existing) {
    return existing.getAttribute(LAZY_SCRIPT_READY) === "1"
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error(`Script no cargó: ${url}`)), { once: true });
        });
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = url;
    el.async = false;
    el.setAttribute(LAZY_SCRIPT_ATTR, url);
    el.onload = () => { el.setAttribute(LAZY_SCRIPT_READY, "1"); resolve(); };
    el.onerror = () => reject(new Error(`Script no cargó: ${url}`));
    document.head.appendChild(el);
  });
}

async function loadScriptsSequential(urls) {
  for (const src of urls) await loadScript(src);
}

let cmLoad = null;

/** Carga CodeMirror 5 + modos desde CDN (una sola vez). */
export function ensureCodeMirrorLoaded(opts = {}) {
  if (typeof window !== "undefined" && window.CodeMirror) return Promise.resolve();
  if (cmLoad) return cmLoad;

  const scripts = [...CM_SCRIPTS];
  if (opts.sql) scripts.splice(1, 0, CM_SCRIPT_SQL);
  if (opts.css) scripts.push(CM_SCRIPT_CSS);

  cmLoad = (async () => {
    await Promise.all(CM_STYLES.map(ensureStylesheet));
    await loadScriptsSequential(scripts);
    if (typeof window.CodeMirror === "undefined") throw new Error("CodeMirror no disponible tras carga CDN");
  })().catch((err) => { cmLoad = null; throw err; });

  return cmLoad;
}

export function ensureCodeMirrorCss() {
  if (typeof document === "undefined") return Promise.resolve();
  return Promise.all(CM_STYLES.map(ensureStylesheet));
}
