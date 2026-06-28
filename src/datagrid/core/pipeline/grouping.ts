/**
 * datagrid/core/pipeline/grouping — isla: datagrid
 * llm:  ./grouping.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/pipeline/grouping.ts
 * Agrupación de filas por columnas (valores repetidos) + agregación, y aplanado según expansión. Agnóstico.
 */
import type { AggFunc, CellValue, ColumnState, DisplayRow, RowData, RowNode } from "../types.ts";
import { getCellValue, formatValue } from "../valueFormatter.ts";

/** Aplica una función de agregación sobre los valores de las hojas. */
function applyAgg(fn: AggFunc, values: CellValue[]): CellValue {
  if (fn === "count") return values.length;
  if (fn === "first") return values.length ? values[0] : null;
  if (fn === "last") return values.length ? values[values.length - 1] : null;
  const nums = values.filter((v): v is number => typeof v === "number" && !Number.isNaN(v));
  if (!nums.length) return null;
  if (fn === "sum") return nums.reduce((a, b) => a + b, 0);
  if (fn === "avg") return nums.reduce((a, b) => a + b, 0) / nums.length;
  if (fn === "min") return Math.min(...nums);
  if (fn === "max") return Math.max(...nums);
  return null;
}

/** Calcula los agregados de un grupo para todas las columnas con aggFunc. */
function aggregateGroup<T extends RowData>(leaves: RowNode<T>[], colById: Map<string, ColumnState>): Record<string, CellValue> {
  const agg: Record<string, CellValue> = {};
  for (const col of colById.values()) {
    if (!col.aggFunc) continue;
    agg[col.colId] = applyAgg(col.aggFunc, leaves.map((n) => getCellValue(col, n)));
  }
  return agg;
}

/** Agrupa hojas por el valor de una columna, preservando el orden de aparición. */
function groupLevel<T extends RowData>(leaves: RowNode<T>[], col: ColumnState): Array<{ value: CellValue; label: string; leaves: RowNode<T>[] }> {
  const map = new Map<string, { value: CellValue; label: string; leaves: RowNode<T>[] }>();
  for (const node of leaves) {
    const value = getCellValue(col, node);
    const key = String(value ?? "");
    let g = map.get(key);
    if (!g) { g = { value, label: formatValue(col, value) || "(vacío)", leaves: [] }; map.set(key, g); }
    g.leaves.push(node);
  }
  return [...map.values()];
}

/** Construye las filas de display (grupos + hojas) según las columnas de agrupación y la expansión. */
export function buildDisplayRows<T extends RowData>(
  leaves: RowNode<T>[], rowGroupCols: string[], colById: Map<string, ColumnState>, expandedGroups: Set<string>,
): DisplayRow<T>[] {
  if (!rowGroupCols.length) return leaves.map((node) => ({ kind: "leaf", level: 0, node }));
  const out: DisplayRow<T>[] = [];
  const walk = (rows: RowNode<T>[], depth: number, prefix: string): void => {
    const colId = rowGroupCols[depth]!;
    const col = colById.get(colId);
    if (!col) return;
    for (const g of groupLevel(rows, col)) {
      const id = prefix ? `${prefix}|${colId}=${String(g.value ?? "")}` : `${colId}=${String(g.value ?? "")}`;
      const expanded = expandedGroups.has(id);
      out.push({
        kind: "group", id, colId, field: col.field, value: g.value, label: g.label, level: depth,
        count: g.leaves.length, expanded, agg: aggregateGroup(g.leaves, colById), leafIds: g.leaves.map((n) => n.id),
      });
      if (!expanded) continue;
      if (depth + 1 < rowGroupCols.length) walk(g.leaves, depth + 1, id);
      else for (const node of g.leaves) out.push({ kind: "leaf", level: depth + 1, node });
    }
  };
  walk(leaves, 0, "");
  return out;
}

/** Recolecta TODOS los ids de grupo (todos los niveles) — para expandir/colapsar todo. */
export function collectGroupIds<T extends RowData>(leaves: RowNode<T>[], rowGroupCols: string[], colById: Map<string, ColumnState>): string[] {
  if (!rowGroupCols.length) return [];
  const ids: string[] = [];
  const walk = (rows: RowNode<T>[], depth: number, prefix: string): void => {
    const col = colById.get(rowGroupCols[depth]!);
    if (!col) return;
    for (const g of groupLevel(rows, col)) {
      const id = prefix ? `${prefix}|${col.colId}=${String(g.value ?? "")}` : `${col.colId}=${String(g.value ?? "")}`;
      ids.push(id);
      if (depth + 1 < rowGroupCols.length) walk(g.leaves, depth + 1, id);
    }
  };
  walk(leaves, 0, "");
  return ids;
}
