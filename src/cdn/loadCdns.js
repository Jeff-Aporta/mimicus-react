import { CDN_PACKS, CDN_GROUPS } from "./packs.js";
import { mimicusCdnBase } from "./baseUrl.js";

/**
 * Expande grupos y packs; deduplica preservando orden.
 * @param {string[]} keys
 * @returns {string[]}
 */
export function resolveCdnKeys(keys) {
  const out = [];
  const seen = new Set();

  function addPackId(id) {
    if (!id || seen.has(id)) return;
    if (!CDN_PACKS[id]) throw new Error(`CDN pack desconocido: ${id}`);
    seen.add(id);
    out.push(id);
  }

  function addKey(key) {
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

/** @returns {string[]} */
export function listCdnGroups() {
  return Object.keys(CDN_GROUPS);
}

function resolveHref(href, base) {
  return typeof href === "function" ? href(base) : href;
}

function resolveImportMap(pack, base) {
  const raw = pack.imports;
  if (typeof raw === "function") return raw(base);
  return raw || {};
}

/**
 * @param {string[]} packIds
 * @param {{ base?: string, indent?: string }} [opts]
 */
export function buildCdnHeadHtml(packIds, opts = {}) {
  const base = opts.base || mimicusCdnBase();
  const indent = opts.indent || "";
  const lines = [];
  /** @type {Record<string, string>} */
  const importMaps = {};

  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      lines.push(pack.html);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack, base));
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
 * @param {...string} keys
 */
export function loadCDNs(...keys) {
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
 * @param {string[]} keys
 * @param {{ snippetsSrc?: string, indent?: string }} [opts]
 */
export function buildCdnLoaderBlock(keys, opts = {}) {
  const indent = opts.indent || "  ";
  const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "mimicus-snippets.min.js";
  const keysLit = keys.map((k) => JSON.stringify(k)).join(", ");
  return `${indent}<script src="${snippetsSrc}"></script>
${indent}<script>
${indent}  MimicusBootstrap.loadCDNs(${keysLit});
${indent}</script>`;
}

/**
 * Inyección en runtime (fallback si el parse ya terminó).
 * @param {string[]} packIds
 * @param {Document} [doc]
 */
export function injectCdnHead(packIds, doc = document) {
  const base = mimicusCdnBase();
  const head = doc.head;
  if (!head) throw new Error("document.head no disponible");

  /** @type {Record<string, string>} */
  const importMaps = {};
  const scriptSrcs = [];

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
      Object.assign(importMaps, resolveImportMap(pack, base));
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
