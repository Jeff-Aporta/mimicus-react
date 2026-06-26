/**
 * datagrid/react/GridToolbar — isla: datagrid
 * llm:  ./GridToolbar.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/GridToolbar.tsx
 * Barra superior: filtro rápido, selector de densidad y exportación CSV. Capa delgada con tokens Mimicus.
 */
import type { ReactElement } from "react";
import { Icon } from "../../components/Icon.tsx";
import type { Density } from "../core/types.ts";

export interface GridToolbarProps {
  quickFilter: string;
  onQuickFilter: (text: string) => void;
  density: Density;
  onDensity: (d: Density) => void;
  onExport: () => void;
  showQuickFilter?: boolean;
  showDensity?: boolean;
  showExport?: boolean;
}

const DENSITIES: { key: Density; icon: string; label: string }[] = [
  { key: "compact", icon: "mdi:view-headline", label: "Compacta" },
  { key: "normal", icon: "mdi:view-sequential", label: "Normal" },
  { key: "comfortable", icon: "mdi:view-stream", label: "Cómoda" },
];

export function GridToolbar(props: GridToolbarProps): ReactElement {
  const { quickFilter, onQuickFilter, density, onDensity, onExport, showQuickFilter = true, showDensity = true, showExport = true } = props;
  return (
    <div className="mim-dg__toolbar" role="toolbar">
      {showQuickFilter && (
        <label className="mim-dg__quick">
          <Icon icon="mdi:magnify" className="mim-dg__quick-icon" />
          <input type="search" className="mim-dg__quick-input" placeholder="Buscar…" value={quickFilter} onChange={(e) => onQuickFilter(e.target.value)} />
        </label>
      )}
      <div className="mim-dg__toolbar-spacer" />
      {showDensity && (
        <div className="mim-dg__density" role="group" aria-label="Densidad">
          {DENSITIES.map((d) => (
            <button key={d.key} type="button" className={`mim-dg__density-btn${density === d.key ? " is-active" : ""}`} title={d.label} aria-label={d.label} aria-pressed={density === d.key} onClick={() => onDensity(d.key)}>
              <Icon icon={d.icon} />
            </button>
          ))}
        </div>
      )}
      {showExport && (
        <button type="button" className="mim-dg__tool-btn" onClick={onExport}><Icon icon="mdi:file-delimited-outline" />Exportar CSV</button>
      )}
    </div>
  );
}
