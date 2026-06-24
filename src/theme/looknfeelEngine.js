import {
  LOOKNFEEL_STORAGE_KEY,
  LOOKNFEEL_DEFAULT,
  normalizeLooknfeel,
  readLooknfeelFromDom,
  designSchemeForLooknfeel,
} from "./constants.js";
import { setDesignScheme } from "./themeEngine.js";

let looknfeel = LOOKNFEEL_DEFAULT;
const listeners = new Set();

export function getLooknfeelState() {
  return looknfeel;
}

export function subscribeLooknfeel(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function readStoredLooknfeel() {
  if (typeof localStorage === "undefined") return LOOKNFEEL_DEFAULT;
  try {
    return normalizeLooknfeel(localStorage.getItem(LOOKNFEEL_STORAGE_KEY));
  } catch {
    return LOOKNFEEL_DEFAULT;
  }
}

export function applyLooknfeel(value) {
  looknfeel = value;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.looknfeel = value;
  }
  try {
    localStorage.setItem(LOOKNFEEL_STORAGE_KEY, value);
  } catch { /* ignore */ }
  setDesignScheme(designSchemeForLooknfeel(value));
  listeners.forEach((fn) => {
    try { fn(value); } catch { /* ignore */ }
  });
}

export function bootLooknfeel() {
  applyLooknfeel(readStoredLooknfeel());
}

export { readLooknfeelFromDom, normalizeLooknfeel };
