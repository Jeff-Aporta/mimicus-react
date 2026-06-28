/**
 * datagrid/react/GridBody — isla: datagrid
 * llm:  ./GridBody.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridBody.tsx
 * Cuerpo virtualizado: renderiza la ventana de filas visibles (hojas y filas de grupo) sobre un spacer total.
 */
import type { CSSProperties, MouseEvent, ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnState, DisplayRow, RowData, RowNode, SelectionMode } from "../core/types.ts";
import { formatValue } from "../core/valueFormatter.ts";
import { GridCell } from "./GridCell.tsx";

export interface GridBodyProps<T extends RowData> {
  rows: DisplayRow<T>[];       // ventana visible (grupos + hojas)
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
  onToggleGroup: (groupId: string) => void;
}

const INDENT = 18;

export function GridBody<T extends RowData>(props: GridBodyProps<T>): ReactElement {
  const { rows, columns, rowHeight, topPad, totalHeight, totalWidth, selection, selectionMode, focusedId, pinStyles, checkPinStyle, onRowSelect, onToggleGroup } = props;
  const aggCols = columns.filter((c) => c.aggFunc && !c.hide);
  return (
    <div className="mim-dg__body" style={{ height: totalHeight, width: totalWidth }} role="rowgroup">
      <div className="mim-dg__rows" style={{ transform: `translateY(${topPad}px)` }}>
        {rows.map((dr) => {
          if (dr.kind === "group") {
            return (
              <div
                key={dr.id}
                className={`mim-dg__row mim-dg__group-row${focusedId === dr.id ? " is-focused" : ""}`}
                style={{ height: rowHeight }}
                role="row"
                onClick={() => onToggleGroup(dr.id)}
              >
                <div className="mim-dg__group-cell" style={{ paddingLeft: 8 + dr.level * INDENT }}>
                  <Icon icon={dr.expanded ? "mdi:chevron-down" : "mdi:chevron-right"} className="mim-dg__group-chevron" />
                  <span className="mim-dg__group-label">{dr.label}</span>
                  <span className="mim-dg__group-count">({dr.count.toLocaleString()})</span>
                  {aggCols.map((c) => dr.agg[c.colId] != null && (
                    <span key={c.colId} className="mim-dg__group-agg"><b>{c.headerName}:</b> {formatValue(c, dr.agg[c.colId])}</span>
                  ))}
                </div>
              </div>
            );
          }
          const node = dr.node;
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
