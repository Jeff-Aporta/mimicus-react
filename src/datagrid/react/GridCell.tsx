/**
 * datagrid/react/GridCell — isla: datagrid
 * llm:  ./GridCell.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridCell.tsx
 * Celda de datos: resuelve valor + formato + renderer y aplica alineación/clase. Capa delgada sobre el core.
 */
import type { CSSProperties, ReactElement } from "react";
import type { ColumnState, RowData, RowNode } from "../core/types.ts";
import { getCellValue, formatCellValue } from "../core/valueFormatter.ts";
import { getCellRenderer } from "./cellRenderers.tsx";

export interface GridCellProps<T extends RowData> { column: ColumnState; node: RowNode<T>; pinStyle?: CSSProperties }

export function GridCell<T extends RowData>({ column, node, pinStyle }: GridCellProps<T>): ReactElement {
  const value = getCellValue(column, node);
  const formatted = formatCellValue(column, value, node);
  const renderer = getCellRenderer(column.def.cellRenderer);
  const extra = typeof column.def.cellClass === "function" ? column.def.cellClass(value, node.data) : column.def.cellClass;
  const content = renderer ? renderer({ value, formatted, data: node.data, node, column }) : formatted;
  const pinClass = column.pinned ? ` is-pinned is-pinned-${column.pinned}` : "";
  return (
    <div
      className={`mim-dg__cell mim-dg__cell--${column.align}${pinClass}${extra ? ` ${extra}` : ""}`}
      style={{ width: column.width, ...pinStyle }}
      role="gridcell"
      title={typeof content === "string" ? content : undefined}
    >
      <span className="mim-dg__cell-inner">{content}</span>
    </div>
  );
}
