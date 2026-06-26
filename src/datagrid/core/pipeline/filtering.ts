/**
 * datagrid/core/pipeline/filtering — isla: datagrid
 * llm:  ./filtering.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/pipeline/filtering.ts
 * Filtros por columna (texto/número/fecha/set) + quick filter global (agnóstico).
 */
import type { CellValue, ColumnFilter, ColumnState, FilterModel, RowData, RowNode } from "../types.ts";
import { cellText, getCellValue } from "../valueFormatter.ts";

function toNum(v: CellValue): number | null {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function toTime(v: CellValue): number | null {
  if (v == null || v === "") return null;
  const t = v instanceof Date ? v.getTime() : new Date(String(v)).getTime();
  return Number.isNaN(t) ? null : t;
}

function matchText(raw: string, f: Extract<ColumnFilter, { type: "text" }>): boolean {
  const hay = raw.toLowerCase();
  const needle = (f.value ?? "").toLowerCase();
  switch (f.op) {
    case "contains": return hay.includes(needle);
    case "notContains": return !hay.includes(needle);
    case "equals": return hay === needle;
    case "notEqual": return hay !== needle;
    case "startsWith": return hay.startsWith(needle);
    case "endsWith": return hay.endsWith(needle);
    case "blank": return raw.trim() === "";
    case "notBlank": return raw.trim() !== "";
    default: return true;
  }
}

function matchNumber(value: CellValue, f: Extract<ColumnFilter, { type: "number" }>): boolean {
  const n = toNum(value);
  if (f.op === "blank") return n === null;
  if (f.op === "notBlank") return n !== null;
  if (n === null) return false;
  const a = f.value ?? null;
  if (a === null && f.op !== "inRange") return true;
  switch (f.op) {
    case "eq": return n === a;
    case "neq": return n !== a;
    case "gt": return a !== null && n > a;
    case "gte": return a !== null && n >= a;
    case "lt": return a !== null && n < a;
    case "lte": return a !== null && n <= a;
    case "inRange": return (a === null || n >= a) && (f.to == null || n <= f.to);
    default: return true;
  }
}

function matchDate(value: CellValue, f: Extract<ColumnFilter, { type: "date" }>): boolean {
  const t = toTime(value);
  if (t === null) return false;
  const a = toTime(f.value);
  switch (f.op) {
    case "eq": return a !== null && new Date(t).toISOString().slice(0, 10) === new Date(a).toISOString().slice(0, 10);
    case "before": return a !== null && t < a;
    case "after": return a !== null && t > a;
    case "inRange": { const b = toTime(f.to ?? ""); return (a === null || t >= a) && (b === null || t <= b); }
    default: return true;
  }
}

function matchOne(col: ColumnState, node: RowNode, f: ColumnFilter): boolean {
  if (f.type === "set") return f.values.length === 0 || f.values.includes(cellText(col, node));
  if (f.type === "text") return matchText(cellText(col, node), f);
  if (f.type === "number") return matchNumber(getCellValue(col, node), f);
  if (f.type === "date") return matchDate(getCellValue(col, node), f);
  return true;
}

/** Aplica filterModel + quickFilter sobre las filas. */
export function filterRows<T extends RowData>(
  rows: RowNode<T>[], filterModel: FilterModel, quickFilter: string, columns: ColumnState[], colById: Map<string, ColumnState>,
): RowNode<T>[] {
  const entries = Object.entries(filterModel);
  const q = quickFilter.trim().toLowerCase();
  if (!entries.length && !q) return rows;
  const visibleCols = columns.filter((c) => !c.hide);
  return rows.filter((node) => {
    for (const [colId, f] of entries) {
      const col = colById.get(colId);
      if (col && !matchOne(col, node, f)) return false;
    }
    if (q) {
      const hit = visibleCols.some((c) => cellText(c, node).toLowerCase().includes(q));
      if (!hit) return false;
    }
    return true;
  });
}

/** Valores únicos de una columna (para set filter). */
export function uniqueValues<T extends RowData>(rows: RowNode<T>[], col: ColumnState): string[] {
  const set = new Set<string>();
  for (const node of rows) set.add(cellText(col, node));
  return [...set].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
