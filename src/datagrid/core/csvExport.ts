/**
 * datagrid/core/csvExport — isla: datagrid
 * llm:  ./csvExport.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/csvExport.ts
 * Exporta las filas mostradas a CSV (agnóstico; la descarga la dispara la capa de UI).
 */
import type { ColumnState, RowData, RowNode } from "./types.ts";
import { cellText } from "./valueFormatter.ts";

function escapeCsv(value: string, sep: string): string {
  if (value.includes(sep) || value.includes('"') || value.includes("\n") || value.includes("\r")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export interface CsvOptions { separator?: string; onlySelected?: boolean; selection?: Set<string> }

/** Construye el contenido CSV de las columnas visibles y las filas dadas. */
export function rowsToCsv<T extends RowData>(columns: ColumnState[], rows: RowNode<T>[], opts: CsvOptions = {}): string {
  const sep = opts.separator ?? ",";
  const cols = columns.filter((c) => !c.hide);
  const src = opts.onlySelected && opts.selection ? rows.filter((r) => opts.selection!.has(r.id)) : rows;
  const head = cols.map((c) => escapeCsv(c.headerName, sep)).join(sep);
  const body = src.map((node) => cols.map((c) => escapeCsv(cellText(c, node), sep)).join(sep));
  return [head, ...body].join("\r\n");
}
