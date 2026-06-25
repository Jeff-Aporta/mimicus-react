/** Distribuciones de shell vía grid-template (áreas: header, sider, content, footer). */

/** Solo panel lateral en el playground (izquierda / derecha). */
export const PLAYGROUND_APP_LAYOUT_OPTIONS = [
  { id: "side", label: "Panel izquierdo" },
  { id: "top-side-2", label: "Panel derecho" },
];

export const APP_LAYOUT_VARIANT_OPTIONS = [
  ...PLAYGROUND_APP_LAYOUT_OPTIONS,
  { id: "top-side", label: "Top + side" },
  { id: "top", label: "Top" },
];

export function isAppLayoutVariant(value) {
  return APP_LAYOUT_VARIANT_OPTIONS.some((o) => o.id === value);
}

export function normalizeAppLayoutVariant(value) {
  if (value === "top-side") return "side";
  if (isAppLayoutVariant(value)) return value;
  return "side";
}

/** Variante persistida en el shell del playground (solo paneles laterales). */
export function normalizePlaygroundAppLayoutVariant(value) {
  return value === "top-side-2" ? "top-side-2" : "side";
}

const SIDER = "var(--mimicus-app-layout-sider-w, 200px)";

function row(name, size) {
  return `"${name}" ${size}`;
}

function joinRows(...rows) {
  return rows.join("\n");
}

export function appLayoutGridTemplate(variant, slots) {
  const { hasHeader, hasSider, hasFooter } = slots;

  if (variant === "side" && hasSider) {
    const rows = [];
    if (hasHeader) rows.push(`"sider header" auto`);
    rows.push(`"sider content" 1fr`);
    if (hasFooter) rows.push(`"sider footer" auto`);
    return `${joinRows(...rows)} / ${SIDER} 1fr`;
  }

  if (variant === "top-side" && hasSider) {
    const rows = [];
    if (hasHeader) rows.push(`"header header" auto`);
    rows.push(`"sider content" 1fr`);
    if (hasFooter) rows.push(`"footer footer" auto`);
    return `${joinRows(...rows)} / ${SIDER} 1fr`;
  }

  if (variant === "top-side-2" && hasSider) {
    const rows = [];
    if (hasHeader) rows.push(`"header header" auto`);
    rows.push(`"content sider" 1fr`);
    if (hasFooter) rows.push(`"footer footer" auto`);
    return `${joinRows(...rows)} / 1fr ${SIDER}`;
  }

  const rows = [];
  if (hasHeader) rows.push(row("header", "auto"));
  rows.push(row("content", "1fr"));
  if (hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}

export function appLayoutResponsiveGridTemplate(variant, slots) {
  if (!slots.hasSider || variant === "top") return null;
  const rows = [];
  if (slots.hasHeader) rows.push(row("header", "auto"));
  rows.push(row("sider", "auto"));
  rows.push(row("content", "1fr"));
  if (slots.hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}
