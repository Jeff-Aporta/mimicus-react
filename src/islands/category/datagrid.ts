/**
 * isla: datagrid
 * llm:  ./datagrid.llm.md
 * css:  cdn/mimicus-datagrid.css
 * repo: Jeff-Aporta/mimicus-react · src/islands/category/datagrid.ts
 * DataGrid (grilla virtualizada estilo enterprise): motor agnóstico (core) + capa React delgada.
 */
export * from "../../datagrid/core/index.ts";
export { DataGrid, GridToolbar, useGridModel, registerCellRenderer, getCellRenderer } from "../../datagrid/react/index.ts";
export type { DataGridProps } from "../../datagrid/react/DataGrid.tsx";
export type { CellRenderer, CellRendererParams } from "../../datagrid/react/cellRenderers.tsx";
