export function clampSplitterSize(w, min, max) {
  return Math.min(max, Math.max(min, Math.round(w)));
}

export function readSplitterStorage(key, fallback, min, max) {
  if (!key || typeof localStorage === "undefined") return fallback;
  try {
    const n = Number(localStorage.getItem(key));
    if (Number.isFinite(n)) return clampSplitterSize(n, min, max);
  } catch { /* ignore */ }
  return fallback;
}

export function writeSplitterStorage(key, w) {
  if (!key || typeof localStorage === "undefined") return;
  try { localStorage.setItem(key, String(w)); } catch { /* ignore */ }
}
