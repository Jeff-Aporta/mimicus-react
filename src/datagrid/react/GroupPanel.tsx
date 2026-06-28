/**
 * datagrid/react/GroupPanel — isla: datagrid
 * llm:  ./GroupPanel.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GroupPanel.tsx
 * Panel superior de agrupación: zona donde se arrastran columnas para agrupar por valores repetidos. Capa delgada.
 */
import { useState } from "react";
import type { DragEvent, ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnState } from "../core/types.ts";

export const COL_DND_TYPE = "application/x-mim-col";

export interface GroupPanelProps {
  columns: ColumnState[];
  rowGroupCols: string[];
  onAdd: (colId: string) => void;
  onRemove: (colId: string) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

export function GroupPanel(props: GroupPanelProps): ReactElement {
  const { columns, rowGroupCols, onAdd, onRemove, onExpandAll, onCollapseAll } = props;
  const [over, setOver] = useState(false);
  const byId = new Map(columns.map((c) => [c.colId, c]));

  const onDrop = (e: DragEvent) => {
    e.preventDefault(); setOver(false);
    const colId = e.dataTransfer.getData(COL_DND_TYPE);
    if (colId) onAdd(colId);
  };
  const chipDragStart = (colId: string) => (e: DragEvent) => e.dataTransfer.setData(COL_DND_TYPE, colId);

  return (
    <div
      className={`mim-dg__group-panel${over ? " is-over" : ""}${rowGroupCols.length ? " has-groups" : ""}`}
      role="toolbar"
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
    >
      <Icon icon="mdi:group" className="mim-dg__group-panel-icon" />
      {rowGroupCols.length === 0 && <span className="mim-dg__group-hint">Arrastra una columna aquí para agrupar por sus valores</span>}
      {rowGroupCols.map((colId, i) => {
        const col = byId.get(colId);
        return (
          <span key={colId} className="mim-dg__group-chip-wrap">
            {i > 0 && <Icon icon="mdi:chevron-right" className="mim-dg__group-chip-arrow" />}
            <span className="mim-dg__group-chip" draggable onDragStart={chipDragStart(colId)}>
              <Icon icon="mdi:drag-vertical" className="mim-dg__group-chip-grip" />
              <span className="mim-dg__group-chip-label">{col?.headerName ?? colId}</span>
              <button type="button" className="mim-dg__group-chip-x" aria-label={`Quitar ${col?.headerName ?? colId}`} onClick={() => onRemove(colId)}><Icon icon="mdi:close" /></button>
            </span>
          </span>
        );
      })}
      {rowGroupCols.length > 0 && (
        <span className="mim-dg__group-panel-actions">
          <button type="button" className="mim-dg__group-panel-btn" title="Expandir todo" onClick={onExpandAll}><Icon icon="mdi:unfold-more-horizontal" /></button>
          <button type="button" className="mim-dg__group-panel-btn" title="Colapsar todo" onClick={onCollapseAll}><Icon icon="mdi:unfold-less-horizontal" /></button>
        </span>
      )}
    </div>
  );
}
