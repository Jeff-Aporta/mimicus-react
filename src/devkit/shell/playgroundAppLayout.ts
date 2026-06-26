// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * playgroundAppLayout — devkit
 * llm:  ./playgroundAppLayout.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/playgroundAppLayout.ts
 * Estado/selector del variant de AppLayout del shell del playground (persistido en localStorage).
 */
import { normalizePlaygroundAppLayoutVariant } from "../_ui.ts";

/** Opciones del selector Layout (fuente única en devkit; no depender del CDN desactualizado). */
export const PLAYGROUND_LAYOUT_SELECT_OPTIONS = [
  { id: "side", label: "Panel izquierdo" },
  { id: "top-side-2", label: "Panel derecho" },
];

export const PLAYGROUND_APP_LAYOUT_STORAGE_KEY = "pg-app-layout-variant";

let layoutVariant = "side";
const layoutListeners = new Set();

export function getPlaygroundAppLayoutVariant() {
  return layoutVariant;
}

function applyPlaygroundAppLayoutVariant(next) {
  layoutVariant = normalizePlaygroundAppLayoutVariant(next);
  if (typeof document !== "undefined") {
    document.documentElement.dataset.appLayoutVariant = layoutVariant;
  }
  try {
    localStorage.setItem(PLAYGROUND_APP_LAYOUT_STORAGE_KEY, layoutVariant);
  } catch { /* ignore */ }
  layoutListeners.forEach((fn) => { try { fn(layoutVariant); } catch { /* ignore */ } });
}

export function setPlaygroundAppLayoutVariant(next) {
  const value = normalizePlaygroundAppLayoutVariant(next);
  if (value === layoutVariant) return;
  applyPlaygroundAppLayoutVariant(value);
}

export function subscribePlaygroundAppLayoutVariant(fn) {
  layoutListeners.add(fn);
  return () => layoutListeners.delete(fn);
}

export function bootPlaygroundAppLayout() {
  let stored = "side";
  try {
    const v = localStorage.getItem(PLAYGROUND_APP_LAYOUT_STORAGE_KEY);
    if (v) stored = v;
  } catch { /* ignore */ }
  applyPlaygroundAppLayoutVariant(stored);
}

/** Grid AppLayout del shell: header propio arriba; panel + contenido abajo. */
export function playgroundShellAppLayoutVariant(shellVariant) {
  return shellVariant === "top-side-2" ? "top-side-2" : "top-side";
}

if (typeof document !== "undefined") bootPlaygroundAppLayout();
