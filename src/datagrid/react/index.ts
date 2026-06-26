/**
 * datagrid/react — isla: datagrid
 * llm:  ./index.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/react/index.ts
 * API React pública del DataGrid (capa de render delgada sobre el core).
 */
export { DataGrid } from "./DataGrid.tsx";
export type { DataGridProps } from "./DataGrid.tsx";
export { useGridModel } from "./useGridModel.ts";
export type { UseGridModel } from "./useGridModel.ts";
export { GridToolbar } from "./GridToolbar.tsx";
export { registerCellRenderer, getCellRenderer } from "./cellRenderers.tsx";
export type { CellRenderer, CellRendererParams } from "./cellRenderers.tsx";
