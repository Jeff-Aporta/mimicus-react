/** Distribuciones de shell vía grid-template (áreas: header, sider, content, footer). */

import type { Option } from "../../theme/constants.ts";

export type AppLayoutVariant = "side" | "top-side-2" | "top-side" | "top";

export interface AppLayoutSlots {
  hasHeader?: boolean;
  hasSider?: boolean;
  hasFooter?: boolean;
}

/** Solo panel lateral en el playground (izquierda / derecha). */
export const PLAYGROUND_APP_LAYOUT_OPTIONS: Option[] = [
  { id: "side", label: "Panel izquierdo", icon: "mdi:dock-left" },
  { id: "top-side-2", label: "Panel derecho", icon: "mdi:dock-right" },
];

export const APP_LAYOUT_VARIANT_OPTIONS: Option[] = [
  ...PLAYGROUND_APP_LAYOUT_OPTIONS,
  { id: "top-side", label: "Top + side" },
  { id: "top", label: "Top" },
];

export function isAppLayoutVariant(value: unknown): boolean {
  return APP_LAYOUT_VARIANT_OPTIONS.some((o) => o.id === value);
}

export function normalizeAppLayoutVariant(value: unknown): AppLayoutVariant {
  if (value === "top-side") return "side";
  if (isAppLayoutVariant(value)) return value as AppLayoutVariant;
  return "side";
}

/** Variante persistida en el shell del playground (solo paneles laterales). */
export function normalizePlaygroundAppLayoutVariant(value: unknown): "top-side-2" | "side" {
  return value === "top-side-2" ? "top-side-2" : "side";
}

const SIDER = "var(--mimicus-app-layout-sider-w, 200px)";

function row(name: string, size: string): string {
  return `"${name}" ${size}`;
}

function joinRows(...rows: string[]): string {
  return rows.join("\n");
}

export function appLayoutGridTemplate(variant: string, slots: AppLayoutSlots): string {
  const { hasHeader, hasSider, hasFooter } = slots;

  if (variant === "side" && hasSider) {
    const rows: string[] = [];
    if (hasHeader) rows.push(`"sider header" auto`);
    rows.push(`"sider content" 1fr`);
    if (hasFooter) rows.push(`"sider footer" auto`);
    return `${joinRows(...rows)} / ${SIDER} 1fr`;
  }

  if (variant === "top-side" && hasSider) {
    const rows: string[] = [];
    if (hasHeader) rows.push(`"header header" auto`);
    rows.push(`"sider content" 1fr`);
    if (hasFooter) rows.push(`"footer footer" auto`);
    return `${joinRows(...rows)} / ${SIDER} 1fr`;
  }

  if (variant === "top-side-2" && hasSider) {
    const rows: string[] = [];
    if (hasHeader) rows.push(`"header header" auto`);
    rows.push(`"content sider" 1fr`);
    if (hasFooter) rows.push(`"footer footer" auto`);
    return `${joinRows(...rows)} / 1fr ${SIDER}`;
  }

  const rows: string[] = [];
  if (hasHeader) rows.push(row("header", "auto"));
  rows.push(row("content", "1fr"));
  if (hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}

export function appLayoutResponsiveGridTemplate(variant: string, slots: AppLayoutSlots): string | null {
  if (!slots.hasSider || variant === "top") return null;
  const rows: string[] = [];
  if (slots.hasHeader) rows.push(row("header", "auto"));
  rows.push(row("sider", "auto"));
  rows.push(row("content", "1fr"));
  if (slots.hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}
