/**
 * datagrid/react/GridHeader — isla: datagrid
 * llm:  ./GridHeader.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridHeader.tsx
 * Fila de encabezados: títulos, orden multi-columna (shift), resize, reorder (drag) y menú de columna. Capa delgada.
 */
import { useRef } from "react";
import type { CSSProperties, DragEvent, MouseEvent, PointerEvent, ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnState, SelectionMode, SortModel } from "../core/types.ts";

export interface GridHeaderProps {
  columns: ColumnState[];
  sortModel: SortModel;
  selectionMode: SelectionMode;
  headerCheckbox: "all" | "none" | "some";
  totalWidth: number;
  headerHeight: number;
  pinStyles: Record<string, CSSProperties>;
  checkPinStyle?: CSSProperties;
  filteredCols: Set<string>;
  onSort: (colId: string, additive: boolean) => void;
  onToggleAll: () => void;
  onResize: (colId: string, width: number) => void;
  onReorder: (colId: string, targetColId: string) => void;
  onMenu: (column: ColumnState, x: number, y: number) => void;
}

const sortIcon: Record<string, string> = { asc: "mdi:arrow-up", desc: "mdi:arrow-down" };

export function GridHeader(props: GridHeaderProps): ReactElement {
  const { columns, sortModel, selectionMode, headerCheckbox, totalWidth, headerHeight, pinStyles, checkPinStyle, filteredCols, onSort, onToggleAll, onResize, onReorder, onMenu } = props;
  const drag = useRef<string | null>(null);

  const startResize = (col: ColumnState) => (e: PointerEvent) => {
    e.preventDefault(); e.stopPropagation();
    const startX = e.clientX; const startW = col.width;
    const move = (ev: globalThis.PointerEvent) => onResize(col.colId, startW + (ev.clientX - startX));
    const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
  };
  const handleSort = (col: ColumnState) => (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(".mim-dg__resizer, .mim-dg__head-menu-btn")) return;
    if (col.sortable) onSort(col.colId, e.shiftKey);
  };
  const onDragStart = (col: ColumnState) => (e: DragEvent) => {
    drag.current = col.colId;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("application/x-mim-col", col.colId); // para el panel de agrupación
  };
  const onDrop = (col: ColumnState) => (e: DragEvent) => { e.preventDefault(); if (drag.current && drag.current !== col.colId) onReorder(drag.current, col.colId); drag.current = null; };

  return (
    <div className="mim-dg__header" style={{ width: totalWidth, height: headerHeight }} role="row">
      {selectionMode !== "none" && (
        <div className="mim-dg__cell mim-dg__cell--check mim-dg__head-cell is-pinned is-pinned-left" style={checkPinStyle} role="columnheader">
          {selectionMode === "multiple" && (
            <button type="button" className={`mim-dg__checkbox mim-dg__checkbox--${headerCheckbox}`} aria-label="Seleccionar todo" onClick={onToggleAll}>
              <Icon icon={headerCheckbox === "all" ? "mdi:checkbox-marked" : headerCheckbox === "some" ? "mdi:minus-box" : "mdi:checkbox-blank-outline"} />
            </button>
          )}
        </div>
      )}
      {columns.map((col) => {
        const idx = sortModel.findIndex((s) => s.colId === col.colId);
        const dir = idx >= 0 ? sortModel[idx]!.dir : null;
        const pinClass = col.pinned ? ` is-pinned is-pinned-${col.pinned}` : "";
        return (
          <div
            key={col.colId}
            className={`mim-dg__cell mim-dg__cell--${col.align} mim-dg__head-cell${col.sortable ? " is-sortable" : ""}${dir ? " is-sorted" : ""}${pinClass}${col.def.headerClass ? ` ${col.def.headerClass}` : ""}`}
            style={{ width: col.width, height: headerHeight, ...pinStyles[col.colId] }}
            role="columnheader"
            aria-sort={dir === "asc" ? "ascending" : dir === "desc" ? "descending" : "none"}
            draggable
            onDragStart={onDragStart(col)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop(col)}
            onClick={handleSort(col)}
          >
            <span className="mim-dg__head-label">{col.headerName}</span>
            {filteredCols.has(col.colId) && <Icon icon="mdi:filter" className="mim-dg__filter-icon" />}
            {dir && <Icon icon={sortIcon[dir]!} className="mim-dg__sort-icon" />}
            {dir && sortModel.length > 1 && <span className="mim-dg__sort-order">{idx + 1}</span>}
            <button
              type="button"
              className="mim-dg__head-menu-btn"
              aria-label="Menú de columna"
              onClick={(e) => { e.stopPropagation(); const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); onMenu(col, r.left, r.bottom); }}
            ><Icon icon="mdi:dots-vertical" /></button>
            {col.resizable && <span className="mim-dg__resizer" onPointerDown={startResize(col)} role="separator" aria-orientation="vertical" />}
          </div>
        );
      })}
    </div>
  );
}
