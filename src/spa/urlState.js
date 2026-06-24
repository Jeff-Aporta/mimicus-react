/** Navegación SPA vía ?s= (JSON → base64url), alineado con ISP / front-shared. */

export const URL_STATE_PARAM = "s";
const STATE_VERSION = 1;

function initial() {
  return { v: STATE_VERSION };
}

function normalize(raw) {
  if (!raw || typeof raw !== "object") return initial();
  const o = raw;
  const out = { v: typeof o.v === "number" ? o.v : STATE_VERSION };
  if (typeof o.r === "string" && o.r.trim()) out.r = o.r.trim();
  if (o.e === 1 || o.e === true) out.e = 1;
  return out;
}

function slimForUrl(state) {
  const out = { v: state.v ?? STATE_VERSION };
  if (state.r) out.r = state.r;
  if (state.e === 1) out.e = 1;
  return out;
}

export function b64urlEncode(str) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function b64urlDecode(str) {
  let b = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (b.length % 4) b += "=";
  return decodeURIComponent(escape(atob(b)));
}

function readUrl() {
  const raw = new URLSearchParams(location.search).get(URL_STATE_PARAM);
  if (!raw) return null;
  try {
    return normalize(JSON.parse(b64urlDecode(raw)));
  } catch {
    return null;
  }
}

function migrateLegacyHash() {
  if (!location.hash) return null;
  const raw = location.hash.replace(/^#\/?/, "").trim();
  if (!raw || raw === "root") {
    const url = new URL(location.href);
    url.hash = "";
    history.replaceState(null, "", url);
    return null;
  }
  const url = new URL(location.href);
  url.hash = "";
  history.replaceState(null, "", url);
  return normalize({ v: STATE_VERSION, r: decodeURIComponent(raw) });
}

function createUrlState() {
  let state = initial();
  const listeners = new Set();
  let writeTimer = null;
  let booted = false;

  const getSnapshot = () => ({ ...state });

  const writeUrl = () => {
    try {
      const slimmed = slimForUrl(state);
      const json = JSON.stringify(slimmed);
      const url = new URL(location.href);
      if (json === "{}" || json === `{"v":${STATE_VERSION}}`) url.searchParams.delete(URL_STATE_PARAM);
      else url.searchParams.set(URL_STATE_PARAM, b64urlEncode(json));
      url.hash = "";
      history.replaceState({ mimicusSpa: true }, "", url);
    } catch (e) {
      console.warn("urlState: no se pudo escribir ?s=", e);
    }
  };

  const scheduleWrite = () => {
    if (writeTimer) clearTimeout(writeTimer);
    writeTimer = setTimeout(writeUrl, 150);
  };

  const notify = () => {
    const snap = getSnapshot();
    listeners.forEach((fn) => {
      try { fn(snap); } catch { /* ignore */ }
    });
  };

  const api = {
    get: getSnapshot,
    setRoute(route) {
      state = normalize({ v: STATE_VERSION, r: route || undefined, e: state.e });
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
      const fromUrl = readUrl();
      const fromHash = fromUrl ? null : migrateLegacyHash();
      state = fromUrl ?? fromHash ?? initial();
      if (fromHash) scheduleWrite();
      if (typeof window !== "undefined") {
        window.addEventListener("popstate", () => {
          state = readUrl() ?? initial();
          notify();
        });
      }
      return getSnapshot();
    },
  };

  return api;
}

export const urlState = createUrlState();

if (typeof window !== "undefined") urlState.boot();

export function setSpaRoute(route) {
  return urlState.setRoute(route);
}

export function getSpaRoute() {
  return urlState.get().r ?? null;
}
