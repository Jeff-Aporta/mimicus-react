/**
 * datagrid/react/HeaderMenu — isla: datagrid
 * llm:  ./HeaderMenu.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/HeaderMenu.tsx
 * Menú emergente de columna: orden, fijar (izq/der), autoajustar y ocultar. Capa delgada con tokens Mimicus.
 */
import { useEffect, useRef } from "react";
import type { ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnState } from "../core/types.ts";

export interface HeaderMenuProps {
  column: ColumnState;
  x: number;
  y: number;
  onClose: () => void;
  onSort: (colId: string, dir: "asc" | "desc" | null) => void;
  onPin: (colId: string, side: "left" | "right" | null) => void;
  onHide: (colId: string) => void;
  onAutosize: (colId: string) => void;
  onFilter: (column: ColumnState) => void;
  onToggleRowGroup: (colId: string) => void;
  isGrouped: boolean;
}

export function HeaderMenu(props: HeaderMenuProps): ReactElement {
  const { column, x, y, onClose, onSort, onPin, onHide, onAutosize, onFilter, onToggleRowGroup, isGrouped } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const close = (e: Event) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener("mousedown", close, true);
    document.addEventListener("keydown", (e) => { if ((e as KeyboardEvent).key === "Escape") onClose(); });
    return () => { document.removeEventListener("mousedown", close, true); };
  }, [onClose]);

  const act = (fn: () => void) => () => { fn(); onClose(); };
  return (
    <div ref={ref} className="mim-dg__menu pg-scrollbar" style={{ left: x, top: y }} role="menu">
      {column.sortable && (<>
        <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onSort(column.colId, "asc"))}><Icon icon="mdi:sort-ascending" />Ordenar ascendente</button>
        <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onSort(column.colId, "desc"))}><Icon icon="mdi:sort-descending" />Ordenar descendente</button>
        <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onSort(column.colId, null))}><Icon icon="mdi:sort-variant-remove" />Quitar orden</button>
        <div className="mim-dg__menu-sep" />
      </>)}
      {column.filterType && (<>
        <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onFilter(column))}><Icon icon="mdi:filter-outline" />Filtrar…</button>
        <div className="mim-dg__menu-sep" />
      </>)}
      <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onPin(column.colId, "left"))}><Icon icon="mdi:pin" />Fijar a la izquierda</button>
      <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onPin(column.colId, "right"))}><Icon icon="mdi:pin" />Fijar a la derecha</button>
      <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onPin(column.colId, null))}><Icon icon="mdi:pin-off-outline" />No fijar</button>
      <div className="mim-dg__menu-sep" />
      <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onAutosize(column.colId))}><Icon icon="mdi:arrow-expand-horizontal" />Autoajustar ancho</button>
      {column.enableRowGroup && (
        <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onToggleRowGroup(column.colId))}>
          <Icon icon={isGrouped ? "mdi:ungroup" : "mdi:group"} />{isGrouped ? "Quitar agrupación" : "Agrupar por esta columna"}
        </button>
      )}
      <button type="button" className="mim-dg__menu-item" role="menuitem" onClick={act(() => onHide(column.colId))}><Icon icon="mdi:eye-off-outline" />Ocultar columna</button>
    </div>
  );
}
