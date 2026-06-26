/**
 * playgroundKit — devkit
 * llm:  ./playgroundKit.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/playgroundKit.js
 * Utils, codegen, CSS helpers y branding Mimicus para el playground.
 */

const CSS_LEN_RE = /^(-?\d*\.?\d+)(px|rem|em|%|vh|vw|ch|ex)?$/i;

export const LAYOUT_PREVIEW_EMOJIS = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(
  "😂❤️🔥😍✨🎉🙏👍⭐💯😊😎🤣😢🙌💀🙋🙊🌟🚀🥰😘🤔😅😜🤩😱😭😡🥺😴🤤🤯🤗🤝👏🙈🐶🐱🦄🍕🍔🍟🍩🍦🍓🍎🍇🌈☀️🌙",
)].map((seg) => seg.segment);

export const CARD_PREVIEW_SAMPLE_TEXT =
  "Texto de ejemplo para la vista previa. Sirve únicamente para ver la tarjeta con contenido; no está ligado a los valores del panel.";
export const CARD_INLINE_SAMPLE_TEXT = "Tarjeta inline";
export const CARD_INLINE_FLOW_BEFORE = "En el flujo del párrafo, ";
export const CARD_INLINE_FLOW_AFTER = " y el texto continúa en la misma línea cuando hay espacio.";

export function packCardRelieve(details) {
  const relieve = Math.round(Number(details?.relieve));
  return Number.isFinite(relieve) ? relieve : 65;
}

export const colorOptions = [
  { label: "Ninguno", value: "" },
  { label: "Primario", value: "primary" },
  { label: "Design 1", value: "design-1" },
  { label: "Design 2", value: "design-2" },
  { label: "Design 3", value: "design-3" },
  { label: "Info", value: "info" },
  { label: "Éxito", value: "success" },
  { label: "Aviso", value: "warning" },
  { label: "Error", value: "error" },
  { label: "Peligro", value: "danger" },
  { label: "Neutro", value: "neutral" },
];

export const iconEnum = {
  "": "Ninguno",
  "mdi:gesture-tap": "Tap",
  "mdi:heart": "Corazón",
  "mdi:star": "Estrella",
  "mdi:check": "Check",
  "mdi:alert": "Alerta",
  "mdi:home": "Inicio",
};

export const MIMICUS_UI = {
  name: "Mimicus React",
  tagline: "Design system React",
  catalogLabel: "Components Overview",
  author: "Mimicus",
  description: "Catálogo y playground interactivo de Mimicus React: primitivas, layouts, navegación e inputs.",
  catalogLead: "Explora la biblioteca por categorías. Cada tarjeta abre un demo interactivo con vista previa, ejemplos y referencia de API.",
};

export function mimicusPageTitle(suffix) {
  if (suffix) return `${suffix} · ${MIMICUS_UI.name}`;
  return `${MIMICUS_UI.name} — ${MIMICUS_UI.tagline}`;
}

export function demoSlug(id) {
  return String(id).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function optionsToItems(options) {
  if (Array.isArray(options)) return options.map((o) => [o.label ?? String(o.value ?? ""), o.value]);
  return Object.entries(options ?? {});
}

export function columnsConfig(count, size = "md") {
  const n = Math.max(1, Number(count) || 1);
  if (size === "xs" || size === "sm") return Math.min(2, n);
  if (size === "lg" || size === "xl") return Math.min(4, n);
  return Math.min(3, n);
}

export function columnsGridPlayground(size = "md") {
  return size === "xs" || size === "sm" ? 2 : size === "lg" || size === "xl" ? 4 : 3;
}

export function mergeStyleString(base, extra) {
  const parts = [base, extra].filter((s) => s && String(s).trim());
  return parts.length ? parts.join("; ") : undefined;
}

export function parseStyleString(str) {
  if (!str || typeof str !== "string") return undefined;
  const out = {};
  for (const part of str.split(";")) {
    const idx = part.indexOf(":");
    if (idx < 1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) continue;
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = val;
  }
  return Object.keys(out).length ? out : undefined;
}

export function normalizeCssLength(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return "";
  const m = s.match(CSS_LEN_RE);
  if (!m) return s;
  const n = parseFloat(m[1]);
  if (!Number.isFinite(n)) return s;
  const unit = m[2] || "rem";
  return `${Math.round(n * 100) / 100}${unit}`;
}

export function stepCssLength(raw, delta) {
  const s = String(raw ?? "").trim();
  const m = s.match(CSS_LEN_RE);
  if (!m) return normalizeCssLength(String((parseFloat(s) || 0) + delta));
  const n = (parseFloat(m[1]) || 0) + delta;
  return normalizeCssLength(`${n}${m[2] || "rem"}`);
}

export function responsiveGridCols(count) {
  if (count <= 2) return 2;
  if (count <= 4) return Math.min(count, 3);
  if (count <= 6) return 3;
  return Math.min(4, count);
}

const filterAttrs = (attrs) =>
  attrs.filter((a) => {
    if (!a || typeof a.name !== "string") return false;
    const t = a.type ?? (typeof a.value === "boolean" ? "bool" : typeof a.value === "number" ? "num" : typeof a.value === "string" ? "str" : undefined);
    if (t === "bind") return true;
    if (a.value === undefined || a.value === null) return false;
    const def = a.default !== undefined ? a.default : t === "str" ? "" : undefined;
    if (def !== undefined && a.value === def) return false;
    return true;
  });

const renderAttr = (a) => {
  const t = a.type ?? (typeof a.value === "boolean" ? "bool" : typeof a.value === "number" ? "num" : "str");
  if (t === "bool") return a.value ? a.name : a.explicitFalse ? `${a.name}={false}` : "";
  if (t === "bind") return a.value && a.value !== a.name ? `${a.name}={${a.value}}` : `${a.name}={${a.name}}`;
  if (t === "num") return `${a.name}={${a.value}}`;
  if (t === "color" || t === "str") return `${a.name}="${a.value}"`;
  return `${a.name}="${a.value}"`;
};

const plainHelpers = {
  txt: (s) => s,
  pt: (s) => s,
  comm: (s) => `/* ${s} */`,
  punc: (s) => s,
  cl: (s) => s,
  str: (s) => `"${s}"`,
  prop: (s) => s,
  kw: (s) => s,
};

export function buildTag(name, attrs = [], opts = {}, bodyFn) {
  const parts = filterAttrs(attrs).map(renderAttr).filter(Boolean);
  const open = parts.length ? `<${name} ${parts.join(" ")}>` : `<${name}>`;
  if (!bodyFn) return `${open} />`;
  const content = bodyFn(plainHelpers).split("\n").map((l) => l.trim()).filter(Boolean).join("\n  ");
  if (!content) return `${open}</${name}>`;
  return `${open}\n  ${content}\n</${name}>`;
}

export const buildJsxTag = buildTag;
