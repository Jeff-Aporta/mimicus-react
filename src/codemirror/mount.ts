import { ensureCodeMirrorCss } from "./lazyLoad.ts";

// CodeMirror 5 viene del CDN sin tipos: instancias y global se modelan como `any`.
type CmInstance = any;
type CmOptions = {
  value?: string;
  mode?: string;
  json?: boolean;
  theme?: string;
  lineNumbers?: boolean;
  lineWrapping?: boolean;
  readOnly?: boolean;
  viewportMargin?: number;
  maxHeight?: string | number;
  extraKeys?: Record<string, (cm: CmInstance) => void>;
  onChange?: (value: string, cm: CmInstance) => void;
};

export function readMimicusLuminance(): "light" | "dark" {
  if (typeof document === "undefined") return "dark";
  const l = document.documentElement.getAttribute("data-luminance");
  if (l === "light" || l === "dark") return l;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

/** Tema CM: default en claro, dracula en oscuro (alineado con Mimicus). */
export function resolveCodeMirrorTheme(luminance: "light" | "dark" = readMimicusLuminance()): string {
  return luminance === "light" ? "default" : "dracula";
}

function resolveMode(opts: CmOptions = {}): string | { name: string; json: boolean } {
  if (opts.json) return { name: "javascript", json: true };
  if (opts.mode === "sql" || opts.mode === "text/x-sql") return "text/x-sql";
  return opts.mode || "javascript";
}

function parseCssLength(value: string | number | null | undefined, fallback = 160): number {
  if (value == null || value === "") return fallback;
  const s = String(value).trim();
  if (s.endsWith("rem")) return parseFloat(s) * 16;
  if (s.endsWith("px")) return parseFloat(s);
  if (s.endsWith("dvh") || s.endsWith("vh")) return (parseFloat(s) / 100) * window.innerHeight;
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : fallback;
}

export function syncCmBoundedSize(cm: CmInstance, maxHeight: string | number, host: HTMLElement | null, minHeight?: string | number): void {
  if (!cm || !maxHeight) return;
  const minH = parseCssLength(minHeight ?? "0", 0);
  const maxH = parseCssLength(maxHeight, 160);
  const wrap = cm.getOption?.("lineWrapping") === true;
  cm.refresh();
  const contentH = cm.getScrollInfo?.().height || minH;
  const h = Math.min(Math.max(contentH + 4, minH), maxH);
  const chain = [host?.closest?.(".mimicus-cm-panel--bounded"), host].filter(Boolean) as HTMLElement[];
  for (const el of chain) {
    el.style.height = `${h}px`;
    el.style.maxHeight = String(maxHeight);
    if (minHeight) el.style.minHeight = String(minHeight);
    el.style.overflow = "hidden";
  }
  const wrapper = cm.getWrapperElement?.();
  if (wrapper) { wrapper.style.height = `${h}px`; wrapper.style.maxHeight = `${h}px`; wrapper.style.overflow = "hidden"; }
  const scroller = cm.getScrollerElement?.();
  if (scroller) {
    scroller.style.height = `${h}px`;
    scroller.style.maxHeight = `${h}px`;
    scroller.style.overflowY = "auto";
    scroller.style.overflowX = wrap ? "hidden" : "auto";
  }
  cm.setSize(null, h);
  cm.refresh();
}

export function mountCodeMirror(host: HTMLElement | null, opts: CmOptions = {}): CmInstance | null {
  ensureCodeMirrorCss();
  // Global del CDN sin tipos.
  const CM = (window as any).CodeMirror;
  if (!CM || !host) return null;

  const readOnly = !!opts.readOnly;
  const extraKeys = readOnly
    ? { "Ctrl-A": (cm: CmInstance) => cm.execCommand("selectAll"), "Cmd-A": (cm: CmInstance) => cm.execCommand("selectAll"), ...(opts.extraKeys || {}) }
    : { Tab: (ed: CmInstance) => ed.replaceSelection("  ", "end"), "Ctrl-A": (cm: CmInstance) => cm.execCommand("selectAll"), "Cmd-A": (cm: CmInstance) => cm.execCommand("selectAll"), ...(opts.extraKeys || {}) };

  const cm = CM(host, {
    value: opts.value ?? "",
    mode: resolveMode(opts),
    theme: opts.theme ?? resolveCodeMirrorTheme(),
    lineNumbers: opts.lineNumbers !== false,
    lineWrapping: !!opts.lineWrapping,
    readOnly,
    tabSize: 2,
    indentUnit: 2,
    indentWithTabs: false,
    viewportMargin: opts.viewportMargin ?? (readOnly && !opts.maxHeight ? Infinity : 10),
    extraKeys,
  });

  if (typeof opts.onChange === "function") cm.on("change", () => opts.onChange!(cm.getValue(), cm));
  return cm;
}

export function destroyCodeMirror(cm: CmInstance): void {
  if (!cm) return;
  const wrapper = cm.getWrapperElement?.();
  wrapper?.parentNode?.removeChild(wrapper);
}

export async function copyEditorText(text: string): Promise<boolean> {
  const s = String(text ?? "");
  if (!s) return false;
  try {
    if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(s); return true; }
  } catch { /* fallback */ }
  const ta = document.createElement("textarea");
  ta.value = s;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); document.body.removeChild(ta); return true; } catch { document.body.removeChild(ta); return false; }
}
