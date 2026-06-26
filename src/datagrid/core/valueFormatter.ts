/**
 * datagrid/core/valueFormatter — isla: datagrid
 * llm:  ./valueFormatter.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/valueFormatter.ts
 * Obtención y formato de valores de celda (agnóstico).
 */
import type { CellValue, ColumnState, RowData, RowNode } from "./types.ts";

/** Valor crudo de una celda (respeta valueGetter de la def). */
export function getCellValue<T extends RowData>(col: ColumnState, node: RowNode<T>): CellValue {
  const def = col.def;
  if (typeof def.valueGetter === "function") return def.valueGetter(node.data as never);
  return (node.data as RowData)[col.field];
}

/** Texto mostrado de una celda (valueFormatter o coerción por tipo). */
export function formatCellValue<T extends RowData>(col: ColumnState, value: CellValue, node: RowNode<T>): string {
  const def = col.def;
  if (typeof def.valueFormatter === "function") return def.valueFormatter(value, node.data as never);
  if (value == null) return "";
  if (col.type === "number" && typeof value === "number") return String(value);
  if (col.type === "boolean") return value ? "✓" : "";
  if (col.type === "date") {
    const d = value instanceof Date ? value : new Date(String(value));
    return Number.isNaN(d.getTime()) ? String(value) : d.toISOString().slice(0, 10);
  }
  return String(value);
}

/** Texto plano para búsqueda/quick-filter/export. */
export function cellText<T extends RowData>(col: ColumnState, node: RowNode<T>): string {
  return formatCellValue(col, getCellValue(col, node), node);
}
