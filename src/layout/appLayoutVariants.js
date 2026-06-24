/** Distribuciones de shell vía grid-template (áreas: header, sider, content, footer). */

export const APP_LAYOUT_VARIANT_OPTIONS = [
  { id: "side", label: "Side" },
  { id: "top-side", label: "Top + side" },
  { id: "top-side-2", label: "Side derecho" },
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

const SIDER = "var(--jagu-app-layout-sider-w, 200px)";

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
