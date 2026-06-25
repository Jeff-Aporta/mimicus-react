/** Utilidades DOM compartidas — sin dependencias de framework. */
export function on(el, type, fn, opts) {
  if (!el) return () => {};
  el.addEventListener(type, fn, opts);
  return () => el.removeEventListener(type, fn, opts);
}

export function qs(sel, root = document) {
  return root?.querySelector?.(sel) ?? null;
}

export function qsa(sel, root = document) {
  return root ? [...root.querySelectorAll(sel)] : [];
}

export function parseBool(v) {
  return v === true || v === "" || v === "true" || v === "1";
}

export function parseNum(v, fb = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fb;
}

export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function clickOutside(root, onAway) {
  const fn = (e) => {
    if (!root?.contains(e.target)) onAway(e);
  };
  const clean = on(document, "pointerdown", fn, true);
  return clean;
}

export function resolveScrollRoot(root, selector) {
  if (selector) {
    const el = typeof selector === "string" ? qs(selector, document) : selector;
    if (el) return el;
  }
  return root?.closest?.("[data-mimicus-anchor-container]") ?? document;
}

export function scrollToTarget(target, { offset = 0, root } = {}) {
  if (!target) return;
  const scrollEl = root === document ? null : root;
  const top = target.getBoundingClientRect().top + (scrollEl?.scrollTop ?? window.scrollY ?? 0) - offset;
  if (scrollEl) scrollEl.scrollTo({ top, behavior: "smooth" });
  else window.scrollTo({ top, behavior: "smooth" });
}

export function emit(root, name, detail) {
  root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
}
