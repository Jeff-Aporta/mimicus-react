/**
 * datagrid/react/GridFooter — isla: datagrid
 * llm:  ./GridFooter.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridFooter.tsx
 * Pie del grid: paginación (reusa buildPageRange) y conteo de filas/selección. Capa delgada.
 */
import type { ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import { buildPageRange } from "../../nav/paginationMath.ts";

export interface GridFooterProps {
  page: number;            // 0-based
  pageSize: number;
  totalRows: number;
  selectedCount: number;
  pagination: boolean;
  onPage: (page: number) => void;
}

export function GridFooter(props: GridFooterProps): ReactElement {
  const { page, pageSize, totalRows, selectedCount, pagination, onPage } = props;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
  const range = buildPageRange(pageCount, page + 1, 1);
  const from = totalRows === 0 ? 0 : page * pageSize + 1;
  const to = pagination ? Math.min(totalRows, (page + 1) * pageSize) : totalRows;

  return (
    <div className="mim-dg__footer" role="row">
      <span className="mim-dg__count">
        {from.toLocaleString()}–{to.toLocaleString()} de {totalRows.toLocaleString()}
        {selectedCount > 0 && <span className="mim-dg__count-sel"> · {selectedCount.toLocaleString()} seleccionadas</span>}
      </span>
      {pagination && (
        <div className="mim-dg__pager">
          <button type="button" className="mim-dg__pager-btn" disabled={page <= 0} aria-label="Anterior" onClick={() => onPage(page - 1)}><Icon icon="mdi:chevron-left" /></button>
          {range.items.map((it) => it.type === "ellipsis"
            ? <span key={it.key} className="mim-dg__pager-gap">…</span>
            : <button key={it.key} type="button" className={`mim-dg__pager-btn${it.page === page + 1 ? " is-active" : ""}`} onClick={() => onPage(it.page - 1)}>{it.page}</button>)}
          <button type="button" className="mim-dg__pager-btn" disabled={page >= pageCount - 1} aria-label="Siguiente" onClick={() => onPage(page + 1)}><Icon icon="mdi:chevron-right" /></button>
        </div>
      )}
    </div>
  );
}
