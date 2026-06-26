/**
 * datagrid/react/GridBody — isla: datagrid
 * llm:  ./GridBody.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridBody.tsx
 * Cuerpo virtualizado: renderiza sólo la ventana de filas visibles (alto fijo) sobre un spacer total.
 */
import type { CSSProperties, MouseEvent, ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnState, RowData, RowNode, SelectionMode } from "../core/types.ts";
import { GridCell } from "./GridCell.tsx";

export interface GridBodyProps<T extends RowData> {
  rows: RowNode<T>[];          // ventana visible
  columns: ColumnState[];
  rowHeight: number;
  topPad: number;
  totalHeight: number;
  totalWidth: number;
  selection: Set<string>;
  selectionMode: SelectionMode;
  focusedId?: string | null;
  pinStyles: Record<string, CSSProperties>;
  checkPinStyle?: CSSProperties;
  onRowSelect: (node: RowNode<T>, e: MouseEvent) => void;
}

export function GridBody<T extends RowData>(props: GridBodyProps<T>): ReactElement {
  const { rows, columns, rowHeight, topPad, totalHeight, totalWidth, selection, selectionMode, focusedId, pinStyles, checkPinStyle, onRowSelect } = props;
  return (
    <div className="mim-dg__body" style={{ height: totalHeight, width: totalWidth }} role="rowgroup">
      <div className="mim-dg__rows" style={{ transform: `translateY(${topPad}px)` }}>
        {rows.map((node) => {
          const selected = selection.has(node.id);
          return (
            <div
              key={node.id}
              className={`mim-dg__row${selected ? " is-selected" : ""}${focusedId === node.id ? " is-focused" : ""}${node.index % 2 ? " is-odd" : ""}`}
              style={{ height: rowHeight }}
              role="row"
              aria-selected={selected}
              onClick={selectionMode !== "none" ? (e) => onRowSelect(node, e) : undefined}
            >
              {selectionMode !== "none" && (
                <div className="mim-dg__cell mim-dg__cell--check is-pinned is-pinned-left" style={checkPinStyle} role="gridcell">
                  <span className={`mim-dg__checkbox mim-dg__checkbox--${selected ? "all" : "none"}`}>
                    <Icon icon={selected ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline"} />
                  </span>
                </div>
              )}
              {columns.map((col) => <GridCell key={col.colId} column={col} node={node} pinStyle={pinStyles[col.colId]} />)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
