export function clampSplitterSize(w: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(w)));
}

export function readSplitterStorage(
  key: string | null | undefined,
  fallback: number,
  min: number,
  max: number,
): number {
  if (!key || typeof localStorage === "undefined") return fallback;
  try {
    const n = Number(localStorage.getItem(key));
    if (Number.isFinite(n)) return clampSplitterSize(n, min, max);
  } catch { /* ignore */ }
  return fallback;
}

export function writeSplitterStorage(key: string | null | undefined, w: number): void {
  if (!key || typeof localStorage === "undefined") return;
  try { localStorage.setItem(key, String(w)); } catch { /* ignore */ }
}
