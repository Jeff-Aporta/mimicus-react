/**
 * datagrid/react/cellRenderers — isla: datagrid
 * llm:  ./cellRenderers.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/cellRenderers.tsx
 * Registro extensible de renderers de celda (nombre→componente). El core sólo guarda el nombre.
 */
import type { ReactNode } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { CellValue, ColumnState, RowData, RowNode } from "../core/types.ts";

export interface CellRendererParams<T extends RowData = RowData> {
  value: CellValue;
  formatted: string;
  data: T;
  node: RowNode<T>;
  column: ColumnState;
}
export type CellRenderer<T extends RowData = RowData> = (params: CellRendererParams<T>) => ReactNode;

const registry = new Map<string, CellRenderer>();

/** Registra (o reemplaza) un renderer de celda por nombre. */
export function registerCellRenderer(name: string, renderer: CellRenderer): void { registry.set(name, renderer as CellRenderer); }
/** Obtiene un renderer por nombre. */
export function getCellRenderer(name: string | undefined): CellRenderer | undefined { return name ? registry.get(name) : undefined; }

// Renderers integrados ---------------------------------------------------------
registerCellRenderer("boolean", ({ value }) => (
  <Icon icon={value ? "mdi:check-circle" : "mdi:close-circle-outline"} className={value ? "mim-dg-bool mim-dg-bool--on" : "mim-dg-bool mim-dg-bool--off"} />
));
registerCellRenderer("tag", ({ formatted }) => <span className="mim-dg-tag">{formatted}</span>);
registerCellRenderer("link", ({ formatted, value }) => <a className="mim-dg-link" href={typeof value === "string" ? value : "#"}>{formatted}</a>);
