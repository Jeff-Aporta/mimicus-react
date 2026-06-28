/**
 * CodeBlock — isla: primitives
 * demo: demo/config/demos/lib/CodeBlock.json
 * llm:  ./CodeBlock.llm.md
 * css:  css/components/codemirror.css
 * repo: Jeff-Aporta/mimicus-react · src/components/CodeBlock.tsx
 * Editor/visor de código con CodeMirror 5 (CDN lazy), copia al portapapeles y tema sincronizado.
 */
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { IconButton } from "./FloatButton.tsx";
import {
  ensureCodeMirrorLoaded, mountCodeMirror, destroyCodeMirror, resolveCodeMirrorTheme,
  syncCmBoundedSize, copyEditorText,
} from "../codemirror/index.ts";
import { subscribeTheme } from "../theme/themeEngine.ts";

function cx(...p: Array<string | false | null | undefined>) { return p.filter(Boolean).join(" "); }

function needsSqlMode(mode?: string) {
  return mode === "sql" || mode === "text/x-sql";
}

function needsCssMode(mode?: string) {
  return mode === "css" || mode === "text/css";
}

export interface CodeBlockProps {
  value?: string;
  onChange?: (next: string) => void;
  readOnly?: boolean;
  json?: boolean;
  mode?: string;
  lang?: string;
  minHeight?: string;
  maxHeight?: string;
  lineWrapping?: boolean;
  lineNumbers?: boolean;
  className?: string;
  style?: CSSProperties;
  copyTitle?: string;
  placeholder?: string;
}

/**
 * Editor de código con CodeMirror 5 (CDN lazy). Sincroniza tema con `html[data-luminance]`.
 * Alias histórico: `CodeMirrorPanel`.
 */
export function CodeBlock({
  value = "",
  onChange,
  readOnly = true,
  json = false,
  mode,
  lang,
  minHeight = "8rem",
  maxHeight,
  lineWrapping = true,
  lineNumbers = true,
  className,
  style,
  copyTitle = "Copiar",
  placeholder = "",
}: CodeBlockProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  // cmRef guarda la instancia de CodeMirror 5 (cargada por CDN); sin tipos disponibles, any pragmático.
  const cmRef = useRef<any>(null);
  const onChangeRef = useRef(onChange);
  const syncingRef = useRef(false);
  const [cmReady, setCmReady] = useState(() => typeof window !== "undefined" && !!(window as any).CodeMirror);
  const [copied, setCopied] = useState(false);

  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);

  useEffect(() => {
    if (cmReady) return undefined;
    let cancelled = false;
    ensureCodeMirrorLoaded({ sql: needsSqlMode(mode), css: needsCssMode(mode) })
      .then(() => { if (!cancelled) setCmReady(true); })
      .catch((err: unknown) => console.warn("[mimicus] CodeMirror:", err));
    return () => { cancelled = true; };
  }, [cmReady, json, mode, lang]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !cmReady || typeof (window as any).CodeMirror === "undefined") return undefined;

    const cm = mountCodeMirror(host, {
      value: value || "",
      json,
      mode: mode || (lang === "jsx" ? "javascript" : undefined),
      readOnly,
      lineWrapping,
      lineNumbers,
      maxHeight,
      onChange: readOnly ? undefined : (next: string) => {
        if (syncingRef.current) return;
        onChangeRef.current?.(next);
      },
    });
    cmRef.current = cm;

    const resize = () => {
      if (maxHeight) syncCmBoundedSize(cm, maxHeight, host, minHeight);
      else cm?.refresh?.();
    };
    window.addEventListener("resize", resize);
    const t = setTimeout(resize, 0);
    const t2 = setTimeout(resize, 120);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
      window.removeEventListener("resize", resize);
      destroyCodeMirror(cm);
      cmRef.current = null;
    };
  }, [cmReady, json, mode, lang, readOnly, lineWrapping, lineNumbers, maxHeight, minHeight]);

  useEffect(() => {
    const cm = cmRef.current;
    if (!cm) return;
    const cur = cm.getValue();
    const next = value ?? "";
    if (cur === next) return;
    syncingRef.current = true;
    const scroll = cm.getScrollInfo();
    const cursor = cm.getCursor();
    cm.setValue(next);
    cm.scrollTo(scroll.left, scroll.top);
    if (next && !readOnly) cm.setCursor(cursor);
    syncingRef.current = false;
    if (maxHeight) syncCmBoundedSize(cm, maxHeight, hostRef.current, minHeight);
  }, [value, readOnly, maxHeight, minHeight]);

  useEffect(() => {
    if (!cmReady) return undefined;
    const apply = () => {
      const cm = cmRef.current;
      if (!cm?.setOption) return;
      const next = resolveCodeMirrorTheme();
      if (cm.getOption("theme") !== next) { cm.setOption("theme", next); cm.refresh(); }
    };
    apply();
    const unsub = subscribeTheme(apply);
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-luminance", "class"] });
    return () => { unsub(); obs.disconnect(); };
  }, [cmReady]);

  const panelClass = cx("mimicus-cm-panel", maxHeight && "mimicus-cm-panel--bounded", className);
  const hostStyle: CSSProperties = { minHeight, ...(maxHeight ? { maxHeight, overflow: "hidden" } : {}) };

  async function handleCopy() {
    const text = cmRef.current?.getValue?.() ?? value;
    const ok = await copyEditorText(text);
    if (ok) { setCopied(true); setTimeout(() => setCopied(false), 1400); }
  }

  if (!cmReady) {
    return (
      <div className={panelClass} style={style}>
        <div className="mimicus-cm-panel__toolbar">
          <IconButton aria-label={copyTitle} onClick={() => copyEditorText(value)} title={copyTitle}>⧉</IconButton>
        </div>
        <pre className="mimicus-cm-fallback" style={hostStyle}>{value || placeholder}</pre>
      </div>
    );
  }

  return (
    <div className={panelClass} style={style}>
      <div className="mimicus-cm-panel__toolbar">
        <IconButton className="mimicus-cm-panel__copy" aria-label={copyTitle} title={copied ? "Copiado" : copyTitle} onClick={handleCopy}>
          {copied ? "✓" : "⧉"}
        </IconButton>
      </div>
      <div className="mimicus-cm-host" ref={hostRef} style={hostStyle} />
    </div>
  );
}

export const CodeMirrorPanel = CodeBlock;
