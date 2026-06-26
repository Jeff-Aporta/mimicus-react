// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * routing — devkit
 * llm:  ./routing.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/routing.ts
 * Estado de ruta en URL (?s=), view transitions y navegación del playground.
 */
const VT_CARD_SOURCE = "pg-vt-card-source";
let lastRoute = { category: null, slug: null };

function navDepth(route) {
  if (!route.category) return 0;
  if (!route.slug) return 1;
  return 2;
}

function modeFor(from, to) {
  const df = navDepth(from);
  const dt = navDepth(to);
  if (dt === 0 && df > 0) return "home";
  if (dt > df) return "forward";
  if (dt < df) return "back";
  return "swap";
}

export function supportsViewTransitions() {
  return typeof document !== "undefined" && "startViewTransition" in document;
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function syncViewTransitionRoute(route) {
  lastRoute = { category: route.category, slug: route.slug };
}

export function markViewTransitionCardSource(el) {
  if (!(el instanceof HTMLElement)) return;
  document.querySelectorAll(`.${VT_CARD_SOURCE}`).forEach((n) => n.classList.remove(VT_CARD_SOURCE));
  el.classList.add(VT_CARD_SOURCE);
}

async function flushDom() {
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

export async function runViewTransition(update, nextRoute) {
  const from = { ...lastRoute };
  const to = nextRoute ?? from;
  const mode = modeFor(from, to);

  const apply = async () => {
    await Promise.resolve(update());
    await flushDom();
  };

  if (!supportsViewTransitions() || prefersReducedMotion()) {
    await apply();
    lastRoute = { category: to.category, slug: to.slug };
    return;
  }

  const root = document.documentElement;
  root.dataset.vt = mode;
  if (to.slug) root.dataset.vtSlug = to.slug;
  else delete root.dataset.vtSlug;

  try {
    const vt = document.startViewTransition(apply);
    await vt.finished;
  } catch {
    await apply();
  } finally {
    delete root.dataset.vt;
    delete root.dataset.vtSlug;
    document.querySelectorAll(`.${VT_CARD_SOURCE}`).forEach((n) => n.classList.remove(VT_CARD_SOURCE));
    lastRoute = { category: to.category, slug: to.slug };
  }
}

export function routeFromNav(category, slug = null) {
  return { category, slug: slug ?? null };
}

export function bootViewTransitionRoute() {
  syncViewTransitionRoute({ category: null, slug: null });
}

export const URL_STATE_PARAM = "s";
const STATE_VERSION = 1;

function initial() {
  return { v: STATE_VERSION };
}

function normalize(raw) {
  if (!raw || typeof raw !== "object") return initial();
  const o = raw;
  const out = { v: typeof o.v === "number" ? o.v : STATE_VERSION };
  if (typeof o.c === "string" && o.c.trim()) out.c = o.c.trim();
  if (typeof o.d === "string" && o.d.trim()) out.d = o.d.trim();
  if (o.e === 1 || o.e === true) out.e = 1;
  if (o.p === "palette" || o.p === "theme") out.p = "palette";
  if (out.p === "palette") {
    delete out.c;
    delete out.d;
  }
  if (out.d && !out.c) delete out.d;
  return out;
}

function slimForUrl(state) {
  const out = { v: state.v ?? STATE_VERSION };
  if (state.p === "palette") {
    out.p = "palette";
    if (state.e === 1) out.e = 1;
    return out;
  }
  if (state.c) out.c = state.c;
  if (state.d && state.c) out.d = state.d;
  if (state.e === 1) out.e = 1;
  return out;
}

function mergeState(state, partial) {
  if ("c" in partial && !partial.c) return initial();
  if (partial.p === "palette") {
    const next = { v: STATE_VERSION, p: "palette" };
    if (partial.e === 1 || state.e === 1) next.e = 1;
    return next;
  }
  if (!partial.c) return state;
  const next = { v: STATE_VERSION, c: partial.c };
  if ("d" in partial) {
    if (partial.d) next.d = partial.d;
  } else if (state.c === partial.c && state.d) {
    next.d = state.d;
  }
  if (partial.e === 1) next.e = 1;
  else if (partial.e === undefined && state.e === 1) next.e = 1;
  return next;
}

export function stateToRoute(state) {
  return { category: state.c ?? null, slug: state.d ?? null };
}

export function isEmbedView(state) {
  return state.e === 1;
}

export function b64urlEncode(str) {
  return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function b64urlDecode(str) {
  let b = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (b.length % 4) b += "=";
  return decodeURIComponent(escape(atob(b)));
}

function createUrlState() {
  let state = initial();
  const listeners = new Set();
  let writeTimer = null;
  let booted = false;

  const getSnapshot = () => ({ ...state });

  const readUrl = () => {
    const raw = new URLSearchParams(location.search).get(URL_STATE_PARAM);
    if (!raw) return null;
    try {
      return normalize(JSON.parse(b64urlDecode(raw)));
    } catch {
      return null;
    }
  };

  const writeUrl = () => {
    try {
      const slimmed = slimForUrl(state);
      const json = JSON.stringify(slimmed);
      const url = new URL(location.href);
      if (json === "{}" || json === `{"v":${STATE_VERSION}}`) url.searchParams.delete(URL_STATE_PARAM);
      else url.searchParams.set(URL_STATE_PARAM, b64urlEncode(json));
      url.hash = "";
      history.replaceState({ pgNav: true }, "", url);
    } catch (e) {
      console.warn("urlState: no se pudo escribir ?s=", e);
    }
  };

  const scheduleWrite = () => {
    if (writeTimer) clearTimeout(writeTimer);
    writeTimer = setTimeout(writeUrl, 200);
  };

  const notify = () => {
    const snap = getSnapshot();
    listeners.forEach((fn) => {
      try { fn(snap); } catch { /* ignore */ }
    });
  };

  const api = {
    get: getSnapshot,
    merge(partial) {
      state = mergeState(state, partial);
      notify();
      scheduleWrite();
      return getSnapshot();
    },
    reset() {
      state = initial();
      notify();
      if (writeTimer) clearTimeout(writeTimer);
      writeTimer = null;
      writeUrl();
      return getSnapshot();
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    boot() {
      if (booted) return getSnapshot();
      booted = true;
      state = readUrl() ?? initial();
      if (typeof window !== "undefined") {
        window.addEventListener("popstate", () => {
          const next = readUrl() ?? initial();
          void runViewTransition(() => {
            state = next;
            notify();
          }, stateToRoute(next));
        });
      }
      return getSnapshot();
    },
  };

  return api;
}

export const urlState = createUrlState();
if (typeof window !== "undefined") urlState.boot();

export function setPaletteLab() {
  return urlState.merge({ p: "palette" });
}

export function setNav(category, slug = null) {
  if (!category) urlState.reset();
  else if (slug) urlState.merge({ c: category, d: slug });
  else urlState.merge({ c: category, d: undefined });
  void runViewTransition(() => {}, routeFromNav(category, slug));
}

export function buildShareUrl(category, slug) {
  if (typeof location === "undefined") return "";
  const payload = { v: STATE_VERSION, c: category, d: slug, e: 1 };
  const url = new URL(location.href);
  url.searchParams.set(URL_STATE_PARAM, b64urlEncode(JSON.stringify(payload)));
  url.hash = "";
  return url.href;
}
