/**
 * datagrid/react/DataGrid — isla: datagrid
 * llm:  ./DataGrid.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/DataGrid.tsx
 * Componente público: capa de render delgada sobre el motor agnóstico (core). Virtualiza filas, fija/filtra columnas, exporta y navega por teclado. Tokens Mimicus.
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, MouseEvent, ReactElement, UIEvent } from "react";
import type { ColumnDef, ColumnFilter, ColumnState, Density, PinSide, RowData, RowNode, SelectionMode, SortDir } from "../core/types.ts";
import { orderedForLayout } from "../core/columnState.ts";
import { applyFlex, rowWindow } from "../core/viewport.ts";
import { toggleRowSelection, selectAll, clearSelection, headerCheckboxState } from "../core/selection.ts";
import { uniqueValues } from "../core/pipeline/filtering.ts";
import { rowsToCsv } from "../core/csvExport.ts";
import { useGridModel } from "./useGridModel.ts";
import { GridHeader } from "./GridHeader.tsx";
import { GridBody } from "./GridBody.tsx";
import { GridFooter } from "./GridFooter.tsx";
import { GridToolbar } from "./GridToolbar.tsx";
import { HeaderMenu } from "./HeaderMenu.tsx";
import { FilterPopover } from "./FilterPopover.tsx";

export interface DataGridProps<T extends RowData = RowData> {
  columns: ColumnDef<T>[];
  rows: T[];
  getRowId?: (row: T, index: number) => string;
  rowHeight?: number;
  headerHeight?: number;
  selectionMode?: SelectionMode;
  pagination?: boolean;
  pageSize?: number;
  density?: Density;
  height?: number | string;
  toolbar?: boolean;
  exportFileName?: string;
  className?: string;
  style?: CSSProperties;
  onSelectionChange?: (ids: string[], nodes: RowNode<T>[]) => void;
}

const DENSITY_ROW: Record<Density, number> = { compact: 32, normal: 40, comfortable: 52 };

export function DataGrid<T extends RowData = RowData>(props: DataGridProps<T>): ReactElement {
  const { columns, rows, getRowId, selectionMode = "none", pagination = false, pageSize,
    height = 480, toolbar = true, exportFileName = "datagrid.csv", className, style, onSelectionChange } = props;
  const headerHeight = props.headerHeight ?? 44;

  const [density, setDensity] = useState<Density>(props.density ?? "normal");
  const rowHeight = props.rowHeight ?? DENSITY_ROW[density];

  const options = useMemo(() => ({ columns, rows, getRowId, selectionMode, pagination, pageSize, density }),
    [columns, rows, getRowId, selectionMode, pagination, pageSize, density]);
  const { api, state } = useGridModel<T>(options);

  useEffect(() => { api.setDensity(density); }, [api, density]);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [menu, setMenu] = useState<{ col: ColumnState; x: number; y: number } | null>(null);
  const [filterPop, setFilterPop] = useState<{ col: ColumnState; x: number; y: number } | null>(null);
  const [focusRow, setFocusRow] = useState(-1);
  const lastRangeFrom = useRef<string | null>(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(() => setSize({ width: el.clientWidth, height: el.clientHeight }));
    ro.observe(el);
    setSize({ width: el.clientWidth, height: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop), []);

  const dataRows = pagination ? state.pageRows : state.displayedRows;
  const checkColWidth = selectionMode === "none" ? 0 : 44;
  const layout = orderedForLayout(state.columns);
  const flat = useMemo(() => {
    const merged = [...layout.left, ...layout.center, ...layout.right];
    const available = Math.max(0, size.width - checkColWidth);
    return applyFlex(merged, available);
  }, [layout.left, layout.center, layout.right, size.width, checkColWidth]);
  const totalWidth = flat.reduce((s, c) => s + c.width, 0) + checkColWidth;

  // Estilos sticky de columnas fijadas (offsets acumulados sobre los anchos ya con flex aplicado).
  const { pinStyles, checkPinStyle } = useMemo(() => {
    const styles: Record<string, CSSProperties> = {};
    let lx = checkColWidth;
    for (const c of flat) if (c.pinned === "left") { styles[c.colId] = { position: "sticky", left: lx, zIndex: 3 }; lx += c.width; }
    let rx = 0;
    for (let i = flat.length - 1; i >= 0; i--) { const c = flat[i]!; if (c.pinned === "right") { styles[c.colId] = { position: "sticky", right: rx, zIndex: 3 }; rx += c.width; } }
    const check: CSSProperties | undefined = checkColWidth ? { position: "sticky", left: 0, zIndex: 4 } : undefined;
    return { pinStyles: styles, checkPinStyle: check };
  }, [flat, checkColWidth]);

  const viewportHeight = Math.max(0, size.height - headerHeight);
  const win = rowWindow(dataRows.length, rowHeight, scrollTop, viewportHeight);
  const visible = dataRows.slice(win.startIndex, win.endIndex);

  const orderedIds = useMemo(() => dataRows.map((r) => r.id), [dataRows]);
  const headerCheckbox = headerCheckboxState(state.selection, dataRows);
  const filteredCols = useMemo(() => new Set(Object.keys(state.filterModel)), [state.filterModel]);

  const emit = useCallback((next: Set<string>) => {
    api.setSelection(next);
    if (onSelectionChange) {
      const map = new Map(state.displayedRows.map((r) => [r.id, r] as const));
      onSelectionChange([...next], [...next].map((id) => map.get(id)).filter(Boolean) as RowNode<T>[]);
    }
  }, [api, onSelectionChange, state.displayedRows]);

  const onRowSelect = useCallback((node: RowNode<T>, e: MouseEvent) => {
    const next = toggleRowSelection(state.selection, node.id, selectionMode,
      { additive: e.ctrlKey || e.metaKey, range: e.shiftKey, rangeFrom: lastRangeFrom.current ?? undefined, orderedIds });
    if (!e.shiftKey) lastRangeFrom.current = node.id;
    emit(next);
  }, [state.selection, selectionMode, orderedIds, emit]);

  const onToggleAll = useCallback(() => emit(headerCheckbox === "all" ? clearSelection() : selectAll(dataRows)), [emit, headerCheckbox, dataRows]);
  const onSort = useCallback((colId: string, additive: boolean) => api.toggleSort(colId, additive), [api]);
  const onResize = useCallback((colId: string, width: number) => api.resizeColumn(colId, width), [api]);
  const onReorder = useCallback((colId: string, targetColId: string) => {
    const toIndex = state.columns.findIndex((c) => c.colId === targetColId);
    if (toIndex >= 0) api.reorderColumn(colId, toIndex);
  }, [api, state.columns]);
  const onMenu = useCallback((col: ColumnState, x: number, y: number) => setMenu({ col, x, y }), []);
  const onMenuSort = useCallback((colId: string, dir: SortDir | null) => {
    const others = state.sortModel.filter((sm) => sm.colId !== colId);
    api.setSortModel(dir ? [...others, { colId, dir }] : others);
  }, [api, state.sortModel]);
  const onPage = useCallback((p: number) => { api.setPage(p); setScrollTop(0); if (viewportRef.current) viewportRef.current.scrollTop = 0; }, [api]);

  // Exportar CSV (solo seleccionadas si hay selección). Descarga vía Blob.
  const onExport = useCallback(() => {
    const sel = state.selection;
    const csv = rowsToCsv(state.columns, state.displayedRows, { onlySelected: sel.size > 0, selection: sel });
    if (typeof document === "undefined") return;
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = exportFileName; a.click();
    URL.revokeObjectURL(url);
  }, [state.columns, state.displayedRows, state.selection, exportFileName]);

  // Filtro por columna
  const onFilterOpen = useCallback((col: ColumnState) => { setFilterPop({ col, x: menu?.x ?? 120, y: menu?.y ?? 120 }); setMenu(null); }, [menu]);
  const onFilterApply = useCallback((colId: string, filter: ColumnFilter | null) => api.setFilter(colId, filter), [api]);
  const popUnique = useMemo(() => (filterPop ? uniqueValues(api.getAllRows(), filterPop.col) : []), [filterPop, api]);

  // Navegación por teclado (nivel fila)
  const scrollRowIntoView = useCallback((idx: number) => {
    const el = viewportRef.current; if (!el) return;
    const top = idx * rowHeight; const bottom = top + rowHeight;
    if (top < el.scrollTop) el.scrollTop = top;
    else if (bottom > el.scrollTop + viewportHeight) el.scrollTop = bottom - viewportHeight;
  }, [rowHeight, viewportHeight]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const last = dataRows.length - 1;
    const move = (idx: number) => { const c = Math.max(0, Math.min(last, idx)); setFocusRow(c); scrollRowIntoView(c); e.preventDefault(); };
    const pageStep = Math.max(1, Math.floor(viewportHeight / rowHeight) - 1);
    if (e.key === "ArrowDown") move(focusRow + 1);
    else if (e.key === "ArrowUp") move(focusRow < 0 ? 0 : focusRow - 1);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(last);
    else if (e.key === "PageDown") move(focusRow + pageStep);
    else if (e.key === "PageUp") move(focusRow - pageStep);
    else if (e.key === " " && focusRow >= 0 && selectionMode !== "none") {
      const node = dataRows[focusRow]; if (node) { lastRangeFrom.current = node.id; emit(toggleRowSelection(state.selection, node.id, selectionMode, { additive: true })); }
      e.preventDefault();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && selectionMode === "multiple") { emit(selectAll(dataRows)); e.preventDefault(); }
    else if (e.key === "Escape") { if (state.selection.size) emit(clearSelection()); }
  }, [dataRows, focusRow, viewportHeight, rowHeight, selectionMode, state.selection, emit, scrollRowIntoView]);

  const focusedId = focusRow >= 0 && focusRow < dataRows.length ? dataRows[focusRow]!.id : null;

  return (
    <div className={`mim-dg${className ? ` ${className}` : ""}`} data-density={density} style={{ height, ...style }}>
      {toolbar && (
        <GridToolbar
          quickFilter={state.quickFilter}
          onQuickFilter={(t) => api.setQuickFilter(t)}
          density={density}
          onDensity={setDensity}
          onExport={onExport}
        />
      )}
      <div className="mim-dg__viewport pg-scrollbar" ref={viewportRef} onScroll={onScroll} onKeyDown={onKeyDown} tabIndex={0} role="grid" aria-rowcount={state.totalRows}>
        <GridHeader
          columns={flat}
          sortModel={state.sortModel}
          selectionMode={selectionMode}
          headerCheckbox={headerCheckbox}
          totalWidth={totalWidth}
          headerHeight={headerHeight}
          pinStyles={pinStyles}
          checkPinStyle={checkPinStyle}
          filteredCols={filteredCols}
          onSort={onSort}
          onToggleAll={onToggleAll}
          onResize={onResize}
          onReorder={onReorder}
          onMenu={onMenu}
        />
        <GridBody
          rows={visible}
          columns={flat}
          rowHeight={rowHeight}
          topPad={win.topPad}
          totalHeight={win.totalHeight}
          totalWidth={totalWidth}
          selection={state.selection}
          selectionMode={selectionMode}
          focusedId={focusedId}
          pinStyles={pinStyles}
          checkPinStyle={checkPinStyle}
          onRowSelect={onRowSelect}
        />
      </div>
      <GridFooter page={state.page} pageSize={state.pageSize} totalRows={state.totalRows} selectedCount={state.selection.size} pagination={pagination} onPage={onPage} />
      {menu && (
        <HeaderMenu
          column={menu.col} x={menu.x} y={menu.y} onClose={() => setMenu(null)}
          onSort={onMenuSort}
          onPin={(colId: string, side: PinSide) => api.pinColumn(colId, side)}
          onHide={(colId: string) => api.hideColumn(colId, true)}
          onAutosize={(colId: string) => api.autosizeColumn(colId)}
          onFilter={onFilterOpen}
        />
      )}
      {filterPop && (
        <FilterPopover
          column={filterPop.col} filter={state.filterModel[filterPop.col.colId] ?? null} uniqueValues={popUnique}
          x={filterPop.x} y={filterPop.y}
          onApply={(f) => onFilterApply(filterPop.col.colId, f)}
          onClose={() => setFilterPop(null)}
        />
      )}
    </div>
  );
}
