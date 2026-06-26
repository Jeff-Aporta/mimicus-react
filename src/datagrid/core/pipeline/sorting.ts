/**
 * datagrid/core/pipeline/sorting — isla: datagrid
 * llm:  ./sorting.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/pipeline/sorting.ts
 * Orden multi-columna con comparadores por tipo (agnóstico).
 */
import type { CellValue, ColumnState, RowData, RowNode, SortModel } from "../types.ts";
import { getCellValue } from "../valueFormatter.ts";

function defaultCompare(a: CellValue, b: CellValue, type: ColumnState["type"]): number {
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  if (type === "number") return Number(a) - Number(b);
  if (type === "boolean") return (a ? 1 : 0) - (b ? 1 : 0);
  if (type === "date") {
    const ta = a instanceof Date ? a.getTime() : new Date(String(a)).getTime();
    const tb = b instanceof Date ? b.getTime() : new Date(String(b)).getTime();
    return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
  }
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

/** Devuelve una copia ordenada de `rows` según el sortModel (estable). */
export function sortRows<T extends RowData>(rows: RowNode<T>[], sortModel: SortModel, colById: Map<string, ColumnState>): RowNode<T>[] {
  if (!sortModel.length) return rows;
  const active = sortModel.map((s) => ({ col: colById.get(s.colId), dir: s.dir })).filter((s): s is { col: ColumnState; dir: "asc" | "desc" } => Boolean(s.col));
  if (!active.length) return rows;
  // copia indexada para orden estable
  const indexed = rows.map((node, i) => ({ node, i }));
  indexed.sort((x, y) => {
    for (const { col, dir } of active) {
      const va = getCellValue(col, x.node);
      const vb = getCellValue(col, y.node);
      const c = typeof col.def.comparator === "function"
        ? col.def.comparator(va, vb, x.node.data as never, y.node.data as never)
        : defaultCompare(va, vb, col.type);
      if (c !== 0) return dir === "asc" ? c : -c;
    }
    return x.i - y.i;
  });
  return indexed.map((e) => e.node);
}

/** Alterna el sort de una columna: none → asc → desc → none. `additive` para multi-sort. */
export function cycleSort(model: SortModel, colId: string, additive: boolean): SortModel {
  const existing = model.find((s) => s.colId === colId);
  const next: SortModel = additive ? model.filter((s) => s.colId !== colId) : [];
  if (!existing) return [...next, { colId, dir: "asc" }];
  if (existing.dir === "asc") return [...next, { colId, dir: "desc" }];
  return next; // desc → quitar
}
