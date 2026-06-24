/** Rutas CDN del paquete jagudeloe-react-ui (sin front-shared / MUI). */
export const JAGU_UI_REF = "main";

const isDevHost =
  typeof location !== "undefined" && /localhost|127\.0\.0\.1|\[::1\]/.test(location.hostname);

const isGhPagesDemo =
  typeof location !== "undefined" &&
  /jeff-aporta\.github\.io\/jagudeloe-react-ui/i.test(location.href);

export function jaguUiBase() {
  const base = document.querySelector("base")?.href || location.href;
  if (isDevHost || isGhPagesDemo) {
    return new URL("cdn/", base).href.replace(/\/?$/, "/");
  }
  return `https://cdn.jsdelivr.net/gh/Jeff-Aporta/jagudeloe-react-ui@${JAGU_UI_REF}/cdn/`;
}

function ensureStylesheet(href) {
  if (document.querySelector("[data-jagu-ui-css]")) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-jagu-ui-css", "1");
    link.onload = () => resolve();
    link.onerror = () => reject(new Error("No se pudo cargar " + href));
    document.head.appendChild(link);
  });
}

function ensureScript(src) {
  if (globalThis.ISAComponents?.JaguUI?.bootJaguUI) return Promise.resolve();
  const stale = document.querySelector("script[data-jagu-ui-js]");
  if (stale) stale.remove();
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.setAttribute("data-jagu-ui-js", "1");
    el.onload = () => {
      if (!globalThis.ISAComponents?.JaguUI?.bootJaguUI) {
        reject(new Error("JaguUI no registró ISAComponents.JaguUI"));
        return;
      }
      resolve();
    };
    el.onerror = () => reject(new Error("No se pudo cargar " + src));
    document.head.appendChild(el);
  });
}

export async function ensureJaguUI(base = jaguUiBase()) {
  const b = base.endsWith("/") ? base : base + "/";
  await ensureStylesheet(b + "jagu-ui.min.css");
  await ensureScript(b + "jagu-ui.min.js");
  globalThis.ISAComponents.JaguUI.bootJaguUI();
  return globalThis.ISAComponents.JaguUI;
}

export function demoAppUrl() {
  const base = document.querySelector("base")?.href || location.href;
  if (globalThis.__ISA_DIST__) {
    return new URL("_dist/app.min.js", base).href;
  }
  return new URL("js/app/App.jsx", base).href;
}
