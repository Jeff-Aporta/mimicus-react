/** Utilidades DOM compartidas — sin dependencias de framework. */
export function on<K extends keyof HTMLElementEventMap>(
  el: EventTarget | null | undefined,
  type: K | string,
  fn: (e: any) => void,
  opts?: boolean | AddEventListenerOptions,
): () => void {
  if (!el) return () => {};
  el.addEventListener(type, fn as EventListener, opts);
  return () => el.removeEventListener(type, fn as EventListener, opts);
}

export function qs<E extends Element = Element>(
  sel: string,
  root: ParentNode | null | undefined = document,
): E | null {
  return (root?.querySelector?.(sel) as E | null) ?? null;
}

export function qsa<E extends Element = Element>(
  sel: string,
  root: ParentNode | null | undefined = document,
): E[] {
  return root ? ([...root.querySelectorAll(sel)] as E[]) : [];
}

export function parseBool(v: unknown): boolean {
  return v === true || v === "" || v === "true" || v === "1";
}

export function parseNum(v: unknown, fb = 0): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : fb;
}

export function cx(...parts: unknown[]): string {
  return parts.filter(Boolean).join(" ");
}

export function clickOutside(root: Node | null | undefined, onAway: (e: Event) => void): () => void {
  const fn = (e: Event) => {
    if (!root?.contains(e.target as Node)) onAway(e);
  };
  const clean = on(document, "pointerdown", fn, true);
  return clean;
}

export function resolveScrollRoot(
  root: Element | null | undefined,
  selector?: string | Element | null,
): Element | Document {
  if (selector) {
    const el = typeof selector === "string" ? qs(selector, document) : selector;
    if (el) return el;
  }
  return root?.closest?.("[data-mimicus-anchor-container]") ?? document;
}

export function scrollToTarget(
  target: Element | null | undefined,
  { offset = 0, root }: { offset?: number; root?: Element | Document | null } = {},
): void {
  if (!target) return;
  const scrollEl = root === document ? null : (root as Element | null);
  const top = target.getBoundingClientRect().top + (scrollEl?.scrollTop ?? window.scrollY ?? 0) - offset;
  if (scrollEl) scrollEl.scrollTo({ top, behavior: "smooth" });
  else window.scrollTo({ top, behavior: "smooth" });
}

export function emit(root: EventTarget | null | undefined, name: string, detail?: unknown): void {
  root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
}
