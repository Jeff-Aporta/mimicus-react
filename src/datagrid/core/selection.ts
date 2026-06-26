/**
 * datagrid/core/selection — isla: datagrid
 * llm:  ./selection.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/selection.ts
 * Selección de filas (single/multiple, rango con shift) — agnóstico.
 */
import type { RowData, RowNode, SelectionMode } from "./types.ts";

/** Alterna/establece la selección de una fila según el modo y modificadores. */
export function toggleRowSelection(
  selection: Set<string>, rowId: string, mode: SelectionMode,
  opts: { additive?: boolean; range?: boolean; rangeFrom?: string; orderedIds?: string[] } = {},
): Set<string> {
  if (mode === "none") return selection;
  if (mode === "single") {
    const next = new Set<string>();
    if (!selection.has(rowId)) next.add(rowId);
    return next;
  }
  const next = new Set(selection);
  if (opts.range && opts.rangeFrom && opts.orderedIds) {
    const a = opts.orderedIds.indexOf(opts.rangeFrom);
    const b = opts.orderedIds.indexOf(rowId);
    if (a >= 0 && b >= 0) {
      const [lo, hi] = a < b ? [a, b] : [b, a];
      for (let i = lo; i <= hi; i++) { const id = opts.orderedIds[i]; if (id) next.add(id); }
      return next;
    }
  }
  if (!opts.additive && !opts.range) {
    // click simple en modo múltiple: alterna solo esa fila si ya era la única; si no, selecciona solo esa
    if (next.has(rowId) && next.size === 1) { next.delete(rowId); return next; }
    next.clear();
    next.add(rowId);
    return next;
  }
  if (next.has(rowId)) next.delete(rowId); else next.add(rowId);
  return next;
}

export function selectAll<T extends RowData>(rows: RowNode<T>[]): Set<string> {
  return new Set(rows.map((r) => r.id));
}

export function clearSelection(): Set<string> {
  return new Set<string>();
}

/** Estado del header checkbox: todo / nada / indeterminado sobre las filas visibles. */
export function headerCheckboxState<T extends RowData>(selection: Set<string>, rows: RowNode<T>[]): "all" | "none" | "some" {
  if (!rows.length) return "none";
  let sel = 0;
  for (const r of rows) if (selection.has(r.id)) sel++;
  if (sel === 0) return "none";
  if (sel === rows.length) return "all";
  return "some";
}
