/**
 * datagrid/core/gridModel — isla: datagrid
 * llm:  ./gridModel.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/gridModel.ts
 * Store observable del DataGrid: mantiene estado y corre el pipeline (filter→sort→paginate). Sin React.
 * Patrón observer (cf. src/spa/urlState.ts).
 */
import type {
  ColumnDef, ColumnFilter, ColumnState, Density, GridListener, GridOptions, GridState,
  PinSide, RowData, RowNode, SortModel,
} from "./types.ts";
import type { DisplayRow } from "./types.ts";
import { resolveColumns, setColumnWidth, setColumnPinned, setColumnHidden, moveColumn, autosizeColumn } from "./columnState.ts";
import { filterRows } from "./pipeline/filtering.ts";
import { sortRows, cycleSort } from "./pipeline/sorting.ts";
import { buildDisplayRows, collectGroupIds } from "./pipeline/grouping.ts";

export interface GridApi<T extends RowData = RowData> {
  getState(): GridState<T>;
  subscribe(fn: GridListener<T>): () => void;
  setRows(rows: T[]): void;
  setColumnDefs(defs: ColumnDef<T>[]): void;
  setSortModel(model: SortModel): void;
  toggleSort(colId: string, additive?: boolean): void;
  setFilter(colId: string, filter: ColumnFilter | null): void;
  setQuickFilter(text: string): void;
  setSelection(ids: Set<string>): void;
  setDensity(d: Density): void;
  setPage(page: number): void;
  setPageSize(size: number): void;
  resizeColumn(colId: string, width: number): void;
  pinColumn(colId: string, side: PinSide): void;
  hideColumn(colId: string, hide: boolean): void;
  reorderColumn(colId: string, toIndex: number): void;
  autosizeColumn(colId: string): void;
  setRowGroupCols(colIds: string[]): void;
  addRowGroupCol(colId: string, index?: number): void;
  removeRowGroupCol(colId: string): void;
  toggleGroup(groupId: string): void;
  expandAllGroups(): void;
  collapseAllGroups(): void;
  getColumns(): ColumnState[];
  getDisplayedRows(): RowNode<T>[];
  getAllRows(): RowNode<T>[];
}

interface Internal<T extends RowData> {
  rawRows: T[];
  nodes: RowNode<T>[];
  columns: ColumnState[];
  sortModel: SortModel;
  filterModel: Record<string, ColumnFilter>;
  quickFilter: string;
  selection: Set<string>;
  density: Density;
  pagination: boolean;
  page: number;
  pageSize: number;
  rowGroupCols: string[];
  expandedGroups: Set<string>;
  getRowId: (row: T, index: number) => string;
}

export function createGridModel<T extends RowData = RowData>(options: GridOptions<T>): GridApi<T> {
  const getRowId = options.getRowId ?? ((_row: T, i: number) => `row-${i}`);
  const s: Internal<T> = {
    rawRows: options.rows ?? [],
    nodes: [],
    columns: resolveColumns(options.columns ?? [], options.defaultColWidth),
    sortModel: [],
    filterModel: {},
    quickFilter: options.quickFilter ?? "",
    selection: new Set<string>(),
    density: options.density ?? "normal",
    pagination: options.pagination ?? false,
    page: 0,
    pageSize: options.pageSize ?? 50,
    rowGroupCols: options.rowGroupCols ?? [],
    expandedGroups: new Set<string>(),
    getRowId,
  };
  rebuildNodes();

  // Seed inicial de expansión por defecto (groupDefaultExpanded niveles).
  const groupDefaultExpanded = options.groupDefaultExpanded ?? 0;

  const listeners = new Set<GridListener<T>>();
  let cache: GridState<T> | null = null;

  function rebuildNodes(): void {
    s.nodes = s.rawRows.map((data, index) => ({ id: s.getRowId(data, index), index, data }));
  }

  function colById(): Map<string, ColumnState> {
    return new Map(s.columns.map((c) => [c.colId, c]));
  }

  function compute(): GridState<T> {
    const byId = colById();
    const filtered = filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, byId);
    const sorted = sortRows(filtered, s.sortModel, byId);
    const totalRows = sorted.length;
    const grouped = s.rowGroupCols.filter((c) => byId.has(c));
    const displayRows: DisplayRow<T>[] = buildDisplayRows(sorted, grouped, byId, s.expandedGroups);

    let page = s.page;
    let pageRows = sorted;
    let pageDisplayRows = displayRows;
    if (s.pagination) {
      const pages = Math.max(1, Math.ceil(displayRows.length / s.pageSize));
      page = Math.min(s.page, pages - 1);
      pageDisplayRows = displayRows.slice(page * s.pageSize, page * s.pageSize + s.pageSize);
      pageRows = sorted.slice(page * s.pageSize, page * s.pageSize + s.pageSize);
    }
    return {
      columns: s.columns,
      sortModel: s.sortModel,
      filterModel: s.filterModel,
      quickFilter: s.quickFilter,
      selection: s.selection,
      density: s.density,
      pagination: s.pagination,
      page,
      pageSize: s.pageSize,
      displayedRows: sorted,
      pageRows,
      rowGroupCols: grouped,
      expandedGroups: s.expandedGroups,
      displayRows,
      pageDisplayRows,
      totalRows,
    };
  }

  function reseedExpansion(): void {
    if (groupDefaultExpanded === -1 && s.rowGroupCols.length) {
      s.expandedGroups = new Set(collectGroupIds(sortRows(filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, colById()), s.sortModel, colById()), s.rowGroupCols, colById()));
    }
  }
  reseedExpansion();

  function notify(): void {
    cache = compute();
    for (const fn of listeners) { try { fn(cache); } catch { /* ignore listener error */ } }
  }

  const api: GridApi<T> = {
    getState() { return cache ?? (cache = compute()); },
    subscribe(fn) { listeners.add(fn); return () => { listeners.delete(fn); }; },
    setRows(rows) { s.rawRows = rows ?? []; rebuildNodes(); notify(); },
    setColumnDefs(defs) { s.columns = resolveColumns(defs ?? [], options.defaultColWidth); notify(); },
    setSortModel(model) { s.sortModel = model; notify(); },
    toggleSort(colId, additive = false) { s.sortModel = cycleSort(s.sortModel, colId, additive); notify(); },
    setFilter(colId, filter) {
      const next = { ...s.filterModel };
      if (filter == null) delete next[colId]; else next[colId] = filter;
      s.filterModel = next; s.page = 0; notify();
    },
    setQuickFilter(text) { s.quickFilter = text ?? ""; s.page = 0; notify(); },
    setSelection(ids) { s.selection = ids; notify(); },
    setDensity(d) { s.density = d; notify(); },
    setPage(page) { s.page = Math.max(0, page); notify(); },
    setPageSize(size) { s.pageSize = Math.max(1, size); s.page = 0; notify(); },
    resizeColumn(colId, width) { s.columns = setColumnWidth(s.columns, colId, width); notify(); },
    pinColumn(colId, side) { s.columns = setColumnPinned(s.columns, colId, side); notify(); },
    hideColumn(colId, hide) { s.columns = setColumnHidden(s.columns, colId, hide); notify(); },
    reorderColumn(colId, toIndex) { s.columns = moveColumn(s.columns, colId, toIndex); notify(); },
    autosizeColumn(colId) { s.columns = autosizeColumn(s.columns, colId, s.nodes); notify(); },
    setRowGroupCols(colIds) { s.rowGroupCols = [...colIds]; s.page = 0; reseedExpansion(); notify(); },
    addRowGroupCol(colId, index) {
      if (s.rowGroupCols.includes(colId)) return;
      const next = s.rowGroupCols.slice();
      next.splice(index == null ? next.length : Math.max(0, Math.min(index, next.length)), 0, colId);
      s.rowGroupCols = next; s.page = 0; reseedExpansion(); notify();
    },
    removeRowGroupCol(colId) { s.rowGroupCols = s.rowGroupCols.filter((c) => c !== colId); s.page = 0; reseedExpansion(); notify(); },
    toggleGroup(groupId) {
      const next = new Set(s.expandedGroups);
      if (next.has(groupId)) next.delete(groupId); else next.add(groupId);
      s.expandedGroups = next; notify();
    },
    expandAllGroups() {
      const byId = colById();
      const sorted = sortRows(filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, byId), s.sortModel, byId);
      s.expandedGroups = new Set(collectGroupIds(sorted, s.rowGroupCols, byId)); notify();
    },
    collapseAllGroups() { s.expandedGroups = new Set(); notify(); },
    getColumns() { return s.columns; },
    getDisplayedRows() { return api.getState().displayedRows; },
    getAllRows() { return s.nodes; },
  };

  cache = compute();
  return api;
}
