/**
 * datagrid/core/viewport — isla: datagrid
 * llm:  ./viewport.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/viewport.ts
 * Matemática de virtualización (ventana de filas y columnas) — agnóstico, sin DOM.
 */
import type { ColumnState } from "./types.ts";

export interface RowWindow {
  startIndex: number;
  endIndex: number;      // exclusivo
  topPad: number;        // px antes de la primera fila renderizada
  totalHeight: number;   // alto total del cuerpo
}

/** Ventana de filas a renderizar dado scrollTop/altura de viewport. Filas de alto fijo. */
export function rowWindow(rowCount: number, rowHeight: number, scrollTop: number, viewportHeight: number, overscan = 6): RowWindow {
  const totalHeight = rowCount * rowHeight;
  if (rowCount === 0 || rowHeight <= 0) return { startIndex: 0, endIndex: 0, topPad: 0, totalHeight };
  const first = Math.floor(scrollTop / rowHeight);
  const visible = Math.ceil(viewportHeight / rowHeight);
  const startIndex = Math.max(0, first - overscan);
  const endIndex = Math.min(rowCount, first + visible + overscan);
  return { startIndex, endIndex, topPad: startIndex * rowHeight, totalHeight };
}

export interface ColLayout {
  positions: number[];   // x acumulado por columna (centro)
  totalWidth: number;
  leftWidth: number;     // ancho total pinned-left
  rightWidth: number;    // ancho total pinned-right
}

/** Posiciones y anchos totales del grupo central (las pinned no se virtualizan). */
export function columnLayout(center: ColumnState[], left: ColumnState[], right: ColumnState[]): ColLayout {
  const positions: number[] = [];
  let x = 0;
  for (const c of center) { positions.push(x); x += c.width; }
  const totalWidth = x;
  const leftWidth = left.reduce((s, c) => s + c.width, 0);
  const rightWidth = right.reduce((s, c) => s + c.width, 0);
  return { positions, totalWidth, leftWidth, rightWidth };
}

/** Ventana de columnas centrales visibles según scrollLeft/ancho del viewport central. */
export function colWindow(layout: ColLayout, scrollLeft: number, viewportWidth: number, overscan = 2): { start: number; end: number } {
  const { positions, totalWidth } = layout;
  if (!positions.length) return { start: 0, end: 0 };
  let start = 0;
  while (start < positions.length - 1 && positions[start + 1]! <= scrollLeft) start++;
  let end = start;
  const right = scrollLeft + viewportWidth;
  while (end < positions.length && positions[end]! < right) end++;
  void totalWidth;
  return { start: Math.max(0, start - overscan), end: Math.min(positions.length, end + overscan) };
}

/** Distribuye flex entre columnas con `flex` definido para llenar el ancho disponible. */
export function applyFlex(cols: ColumnState[], availableWidth: number): ColumnState[] {
  const flexCols = cols.filter((c) => !c.hide && c.flex && c.flex > 0);
  if (!flexCols.length) return cols;
  const fixed = cols.filter((c) => !c.hide && !(c.flex && c.flex > 0)).reduce((s, c) => s + c.width, 0);
  const totalFlex = flexCols.reduce((s, c) => s + (c.flex ?? 0), 0);
  const remaining = Math.max(0, availableWidth - fixed);
  return cols.map((c) => {
    if (!c.flex || c.flex <= 0 || c.hide) return c;
    const w = Math.max(c.minWidth, Math.min(c.maxWidth, Math.round((remaining * c.flex) / totalFlex)));
    return { ...c, width: w };
  });
}
