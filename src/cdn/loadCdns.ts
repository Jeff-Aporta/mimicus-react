import { CDN_PACKS, CDN_GROUPS, type CdnPack, type CdnImports } from "./packs.ts";
import { mimicusCdnBase } from "./baseUrl.ts";

/**
 * Expande grupos y packs; deduplica preservando orden.
 */
export function resolveCdnKeys(keys: string[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();

  function addPackId(id: string): void {
    if (!id || seen.has(id)) return;
    if (!CDN_PACKS[id]) throw new Error(`CDN pack desconocido: ${id}`);
    seen.add(id);
    out.push(id);
  }

  function addKey(key: string): void {
    const k = String(key || "").trim();
    if (!k) return;
    if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, k)) {
      for (const child of CDN_GROUPS[k]) {
        if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, child)) addKey(child);
        else addPackId(child);
      }
      return;
    }
    addPackId(k);
  }

  for (const key of keys) addKey(key);
  return out;
}

export function listCdnGroups(): string[] {
  return Object.keys(CDN_GROUPS);
}

function resolveHref(href: string | ((base: string) => string), base: string): string {
  return typeof href === "function" ? href(base) : href;
}

function resolveImportMap(raw: CdnImports, base: string): Record<string, string> {
  if (typeof raw === "function") return raw(base);
  return raw || {};
}

export function buildCdnHeadHtml(packIds: string[], opts: { base?: string; indent?: string } = {}): string {
  const base = opts.base || mimicusCdnBase();
  const indent = opts.indent || "";
  const lines: string[] = [];
  const importMaps: Record<string, string> = {};

  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      lines.push(pack.html);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack.imports, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      const attrs = Object.entries({ rel: "stylesheet", href, ...pack.attrs })
        .map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`)
        .join(" ");
      lines.push(`<link ${attrs} />`);
      continue;
    }
    if (pack.kind === "script-src") {
      const src = resolveHref(pack.src, base);
      const defer = pack.defer ? " defer" : "";
      const attrs = Object.entries({ src, ...pack.attrs })
        .map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`)
        .join(" ");
      lines.push(`<script${defer} ${attrs}></script>`);
    }
  }

  if (Object.keys(importMaps).length) {
    const json = JSON.stringify({ imports: importMaps }, null, 2);
    lines.push(`<script type="importmap">\n${json}\n</script>`);
  }

  return lines.map((line) => (indent ? line.split("\n").map((l) => indent + l).join("\n") : line)).join("\n");
}

/**
 * document.write de CDNs estándar (solo durante el parse del documento).
 * Cargar antes: `<script src="mimicus-snippets.min.js"></script>` (bloqueante, sin defer).
 */
export function loadCDNs(...keys: Array<string | string[]>): string[] {
  const doc = document;
  const flat = keys.flat();
  const packIds = resolveCdnKeys(flat);
  const html = buildCdnHeadHtml(packIds);

  if (!html) return packIds;

  if (doc.readyState === "loading") {
    doc.write(html);
    return packIds;
  }

  injectCdnHead(packIds, doc);
  return packIds;
}

/**
 * Bloque HTML: script bloqueante de snippets + loadCDNs inline.
 */
export function buildCdnLoaderBlock(keys: string[], opts: { snippetsSrc?: string; indent?: string } = {}): string {
  const indent = opts.indent || "  ";
  const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "iife/mimicus-snippets.min.js";
  const keysLit = keys.map((k) => JSON.stringify(k)).join(", ");
  return `${indent}<script src="${snippetsSrc}"></script>
${indent}<script>
${indent}  MimicusBootstrap.loadCDNs(${keysLit});
${indent}</script>`;
}

/**
 * Inyección en runtime (fallback si el parse ya terminó).
 */
export function injectCdnHead(packIds: string[], doc: Document = document): void {
  const base = mimicusCdnBase();
  const head = doc.head;
  if (!head) throw new Error("document.head no disponible");

  const importMaps: Record<string, string> = {};
  const scriptSrcs: Array<Extract<CdnPack, { kind: "script-src" }>> = [];

  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      const tpl = doc.createElement("template");
      tpl.innerHTML = pack.html.trim();
      const node = tpl.content.firstChild;
      if (node) head.appendChild(node);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack.imports, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      if (head.querySelector(`link[href="${href}"]`)) continue;
      const link = doc.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      for (const [k, v] of Object.entries(pack.attrs || {})) link.setAttribute(k, v);
      head.appendChild(link);
      continue;
    }
    if (pack.kind === "script-src") {
      scriptSrcs.push(pack);
    }
  }

  if (Object.keys(importMaps).length && !head.querySelector('script[type="importmap"]')) {
    const s = doc.createElement("script");
    s.type = "importmap";
    s.textContent = JSON.stringify({ imports: importMaps }, null, 2);
    head.appendChild(s);
  }

  for (const pack of scriptSrcs) {
    const src = resolveHref(pack.src, base);
    if (head.querySelector(`script[src="${src}"]`)) continue;
    const el = doc.createElement("script");
    el.src = src;
    if (pack.defer) el.defer = true;
    for (const [k, v] of Object.entries(pack.attrs || {})) el.setAttribute(k, v);
    head.appendChild(el);
  }
}
