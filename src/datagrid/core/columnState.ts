/**
 * datagrid/core/columnState — isla: datagrid
 * llm:  ./columnState.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/columnState.ts
 * Resolución y mutación de estado de columnas (orden/ancho/pin/visibilidad/resize/reorder) — agnóstico.
 */
import type { ColumnDef, ColumnState, FilterType, PinSide, RowData, RowNode } from "./types.ts";
import { cellText } from "./valueFormatter.ts";

const DEFAULT_WIDTH = 160;
const DEFAULT_MIN = 60;
const DEFAULT_MAX = 2000;

function filterTypeOf<T extends RowData>(def: ColumnDef<T>): FilterType | null {
  if (def.filter === false || def.filter == null) return def.filter === undefined ? defaultFilterFor(def) : null;
  if (def.filter === true) return defaultFilterFor(def) ?? "text";
  return def.filter;
}
function defaultFilterFor<T extends RowData>(def: ColumnDef<T>): FilterType | null {
  if (def.type === "number") return "number";
  if (def.type === "date") return "date";
  return "text";
}

/** Convierte ColumnDef[] en ColumnState[] resueltos. */
export function resolveColumns<T extends RowData>(defs: ColumnDef<T>[], defaultColWidth = DEFAULT_WIDTH): ColumnState[] {
  return defs.map((def, i) => ({
    colId: def.colId ?? def.field ?? `col-${i}`,
    field: def.field,
    headerName: def.headerName ?? def.field,
    type: def.type ?? "text",
    width: def.width ?? defaultColWidth,
    minWidth: def.minWidth ?? DEFAULT_MIN,
    maxWidth: def.maxWidth ?? DEFAULT_MAX,
    flex: def.flex,
    sortable: def.sortable !== false,
    resizable: def.resizable !== false,
    filterType: def.filter === false ? null : filterTypeOf(def),
    pinned: def.pinned ?? null,
    hide: def.hide === true,
    align: def.align ?? (def.type === "number" ? "right" : "left"),
    enableRowGroup: def.enableRowGroup !== false,
    aggFunc: def.aggFunc ?? null,
    checkboxSelection: def.checkboxSelection === true,
    def: def as unknown as ColumnDef,
  }));
}

const clamp = (n: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, n));

export function setColumnWidth(cols: ColumnState[], colId: string, width: number): ColumnState[] {
  return cols.map((c) => (c.colId === colId ? { ...c, width: clamp(Math.round(width), c.minWidth, c.maxWidth), flex: undefined } : c));
}

export function setColumnPinned(cols: ColumnState[], colId: string, pinned: PinSide): ColumnState[] {
  return cols.map((c) => (c.colId === colId ? { ...c, pinned } : c));
}

export function setColumnHidden(cols: ColumnState[], colId: string, hide: boolean): ColumnState[] {
  return cols.map((c) => (c.colId === colId ? { ...c, hide } : c));
}

/** Mueve una columna a un nuevo índice (reorder). */
export function moveColumn(cols: ColumnState[], colId: string, toIndex: number): ColumnState[] {
  const from = cols.findIndex((c) => c.colId === colId);
  if (from < 0) return cols;
  const next = cols.slice();
  const [moved] = next.splice(from, 1);
  if (moved) next.splice(clamp(toIndex, 0, next.length), 0, moved);
  return next;
}

/** Autosize: ancho aproximado por contenido (texto más largo, en px estimados). */
export function autosizeColumn<T extends RowData>(cols: ColumnState[], colId: string, rows: RowNode<T>[], charPx = 7.4, padding = 28): ColumnState[] {
  const col = cols.find((c) => c.colId === colId);
  if (!col) return cols;
  let max = col.headerName.length;
  for (const node of rows) max = Math.max(max, cellText(col, node).length);
  const width = clamp(Math.round(max * charPx + padding), col.minWidth, col.maxWidth);
  return setColumnWidth(cols, colId, width);
}

/** Ordena columnas para layout: pinned-left, centro, pinned-right (preservando orden relativo). */
export function orderedForLayout(cols: ColumnState[]): { left: ColumnState[]; center: ColumnState[]; right: ColumnState[] } {
  const visible = cols.filter((c) => !c.hide);
  return {
    left: visible.filter((c) => c.pinned === "left"),
    center: visible.filter((c) => !c.pinned),
    right: visible.filter((c) => c.pinned === "right"),
  };
}
