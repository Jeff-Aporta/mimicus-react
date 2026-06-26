/**
 * datagrid/react/FilterPopover — isla: datagrid
 * llm:  ./FilterPopover.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/FilterPopover.tsx
 * Popover de filtro por columna (texto/número/fecha/conjunto). Construye un ColumnFilter del core y lo aplica.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { ColumnFilter, ColumnState, DateFilterOp, NumberFilterOp, TextFilterOp } from "../core/types.ts";

export interface FilterPopoverProps {
  column: ColumnState;
  filter: ColumnFilter | null;
  uniqueValues: string[];
  x: number;
  y: number;
  onApply: (filter: ColumnFilter | null) => void;
  onClose: () => void;
}

const TEXT_OPS: { v: TextFilterOp; t: string }[] = [
  { v: "contains", t: "Contiene" }, { v: "notContains", t: "No contiene" }, { v: "equals", t: "Igual a" },
  { v: "notEqual", t: "Distinto de" }, { v: "startsWith", t: "Empieza con" }, { v: "endsWith", t: "Termina con" },
  { v: "blank", t: "Vacío" }, { v: "notBlank", t: "No vacío" },
];
const NUM_OPS: { v: NumberFilterOp; t: string }[] = [
  { v: "eq", t: "=" }, { v: "neq", t: "≠" }, { v: "gt", t: ">" }, { v: "gte", t: "≥" }, { v: "lt", t: "<" }, { v: "lte", t: "≤" },
  { v: "inRange", t: "Entre" }, { v: "blank", t: "Vacío" }, { v: "notBlank", t: "No vacío" },
];
const DATE_OPS: { v: DateFilterOp; t: string }[] = [
  { v: "eq", t: "Igual a" }, { v: "before", t: "Antes de" }, { v: "after", t: "Después de" }, { v: "inRange", t: "Entre" },
];

export function FilterPopover(props: FilterPopoverProps): ReactElement {
  const { column, filter, uniqueValues, x, y, onApply, onClose } = props;
  const type = column.filterType ?? "text";
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: Event) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener("mousedown", onDoc, true);
    return () => document.removeEventListener("mousedown", onDoc, true);
  }, [onClose]);

  // ---- estado local por tipo
  const tf = filter?.type === "text" ? filter : null;
  const nf = filter?.type === "number" ? filter : null;
  const df = filter?.type === "date" ? filter : null;
  const sf = filter?.type === "set" ? filter : null;

  const [textOp, setTextOp] = useState<TextFilterOp>(tf?.op ?? "contains");
  const [textVal, setTextVal] = useState(tf?.value ?? "");
  const [numOp, setNumOp] = useState<NumberFilterOp>(nf?.op ?? "eq");
  const [numVal, setNumVal] = useState<string>(nf?.value != null ? String(nf.value) : "");
  const [numTo, setNumTo] = useState<string>(nf?.to != null ? String(nf.to) : "");
  const [dateOp, setDateOp] = useState<DateFilterOp>(df?.op ?? "eq");
  const [dateVal, setDateVal] = useState(df?.value ?? "");
  const [dateTo, setDateTo] = useState(df?.to ?? "");
  const [setSel, setSetSel] = useState<Set<string>>(new Set(sf?.values ?? uniqueValues));
  const [setSearch, setSetSearch] = useState("");

  const shownVals = useMemo(() => uniqueValues.filter((v) => v.toLowerCase().includes(setSearch.toLowerCase())), [uniqueValues, setSearch]);
  const needsValue = (op: string) => op !== "blank" && op !== "notBlank";

  const apply = () => {
    if (type === "text") onApply(textOp && (textVal || !needsValue(textOp)) ? { type: "text", op: textOp, value: textVal } : null);
    else if (type === "number") {
      const v = numVal === "" ? null : Number(numVal);
      const to = numTo === "" ? null : Number(numTo);
      onApply(needsValue(numOp) && v == null ? null : { type: "number", op: numOp, value: v, to });
    } else if (type === "date") onApply(dateVal || !needsValue(dateOp) ? { type: "date", op: dateOp, value: dateVal, to: dateTo } : null);
    else onApply(setSel.size === uniqueValues.length ? null : { type: "set", values: [...setSel] });
    onClose();
  };
  const clear = () => { onApply(null); onClose(); };
  const toggleVal = (v: string) => setSetSel((p) => { const n = new Set(p); if (n.has(v)) n.delete(v); else n.add(v); return n; });

  return (
    <div ref={ref} className="mim-dg__filter pg-scrollbar" style={{ left: x, top: y }} role="dialog" aria-label={`Filtrar ${column.headerName}`}>
      {type === "text" && (
        <>
          <select className="mim-dg__filter-field" value={textOp} onChange={(e) => setTextOp(e.target.value as TextFilterOp)}>
            {TEXT_OPS.map((o) => <option key={o.v} value={o.v}>{o.t}</option>)}
          </select>
          {needsValue(textOp) && <input className="mim-dg__filter-field" placeholder="Valor…" autoFocus value={textVal} onChange={(e) => setTextVal(e.target.value)} onKeyDown={(e) => e.key === "Enter" && apply()} />}
        </>
      )}
      {type === "number" && (
        <>
          <select className="mim-dg__filter-field" value={numOp} onChange={(e) => setNumOp(e.target.value as NumberFilterOp)}>
            {NUM_OPS.map((o) => <option key={o.v} value={o.v}>{o.t}</option>)}
          </select>
          {needsValue(numOp) && <input type="number" className="mim-dg__filter-field" placeholder="Valor…" autoFocus value={numVal} onChange={(e) => setNumVal(e.target.value)} onKeyDown={(e) => e.key === "Enter" && apply()} />}
          {numOp === "inRange" && <input type="number" className="mim-dg__filter-field" placeholder="Hasta…" value={numTo} onChange={(e) => setNumTo(e.target.value)} />}
        </>
      )}
      {type === "date" && (
        <>
          <select className="mim-dg__filter-field" value={dateOp} onChange={(e) => setDateOp(e.target.value as DateFilterOp)}>
            {DATE_OPS.map((o) => <option key={o.v} value={o.v}>{o.t}</option>)}
          </select>
          <input type="date" className="mim-dg__filter-field" value={dateVal} onChange={(e) => setDateVal(e.target.value)} />
          {dateOp === "inRange" && <input type="date" className="mim-dg__filter-field" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />}
        </>
      )}
      {type === "set" && (
        <>
          <input className="mim-dg__filter-field" placeholder="Buscar valores…" value={setSearch} onChange={(e) => setSetSearch(e.target.value)} />
          <div className="mim-dg__filter-actions-row">
            <button type="button" className="mim-dg__filter-link" onClick={() => setSetSel(new Set(uniqueValues))}>Todo</button>
            <button type="button" className="mim-dg__filter-link" onClick={() => setSetSel(new Set())}>Nada</button>
          </div>
          <div className="mim-dg__filter-set pg-scrollbar">
            {shownVals.map((v) => (
              <label key={v} className="mim-dg__filter-set-item">
                <button type="button" className={`mim-dg__checkbox mim-dg__checkbox--${setSel.has(v) ? "all" : "none"}`} onClick={() => toggleVal(v)}>
                  <Icon icon={setSel.has(v) ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline"} />
                </button>
                <span>{v || "(vacío)"}</span>
              </label>
            ))}
          </div>
        </>
      )}
      <div className="mim-dg__filter-actions">
        <button type="button" className="mim-dg__tool-btn" onClick={clear}>Limpiar</button>
        <button type="button" className="mim-dg__tool-btn is-primary" onClick={apply}>Aplicar</button>
      </div>
    </div>
  );
}
