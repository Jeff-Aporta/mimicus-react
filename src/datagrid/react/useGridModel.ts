/**
 * datagrid/react/useGridModel — isla: datagrid
 * llm:  ./useGridModel.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/useGridModel.ts
 * Hook delgado que crea el store agnóstico una vez y lo suscribe a React vía useSyncExternalStore.
 */
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createGridModel } from "../core/gridModel.ts";
import type { GridApi } from "../core/gridModel.ts";
import type { GridOptions, GridState, RowData } from "../core/types.ts";

export interface UseGridModel<T extends RowData> { api: GridApi<T>; state: GridState<T> }

/** Crea/conserva el GridApi y devuelve su estado reactivo. Sincroniza rows/columns/quickFilter desde props. */
export function useGridModel<T extends RowData = RowData>(options: GridOptions<T>): UseGridModel<T> {
  const ref = useRef<GridApi<T> | null>(null);
  if (ref.current == null) ref.current = createGridModel<T>(options);
  const api = ref.current;

  const state = useSyncExternalStore(api.subscribe, api.getState, api.getState);

  useEffect(() => { api.setRows(options.rows ?? []); }, [api, options.rows]);
  useEffect(() => { api.setColumnDefs(options.columns ?? []); }, [api, options.columns]);
  useEffect(() => { if (options.quickFilter != null) api.setQuickFilter(options.quickFilter); }, [api, options.quickFilter]);

  return { api, state };
}
