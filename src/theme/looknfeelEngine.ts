import {
  LOOKNFEEL_STORAGE_KEY,
  LOOKNFEEL_DEFAULT,
  normalizeLooknfeel,
  readLooknfeelFromDom,
  type Looknfeel,
} from "./constants.ts";

export type LooknfeelListener = (value: Looknfeel) => void;

let looknfeel: Looknfeel = LOOKNFEEL_DEFAULT;
const listeners = new Set<LooknfeelListener>();

export function getLooknfeelState(): Looknfeel {
  return looknfeel;
}

export function subscribeLooknfeel(fn: LooknfeelListener): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

function readStoredLooknfeel(): Looknfeel {
  if (typeof localStorage === "undefined") return LOOKNFEEL_DEFAULT;
  try {
    return normalizeLooknfeel(localStorage.getItem(LOOKNFEEL_STORAGE_KEY));
  } catch {
    return LOOKNFEEL_DEFAULT;
  }
}

export function applyLooknfeel(value: Looknfeel): void {
  looknfeel = value;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.looknfeel = value;
  }
  try {
    localStorage.setItem(LOOKNFEEL_STORAGE_KEY, value);
  } catch { /* ignore */ }
  listeners.forEach((fn) => {
    try { fn(value); } catch { /* ignore */ }
  });
}

export function bootLooknfeel(): void {
  applyLooknfeel(readStoredLooknfeel());
}

export { readLooknfeelFromDom, normalizeLooknfeel };
