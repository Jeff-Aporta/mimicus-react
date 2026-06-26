/**
 * datagrid/core — isla: datagrid
 * llm:  ./index.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/index.ts
 * API pública del motor agnóstico del DataGrid (sin React).
 */
export * from "./types.ts";
export { createGridModel } from "./gridModel.ts";
export type { GridApi } from "./gridModel.ts";
export { resolveColumns, setColumnWidth, setColumnPinned, setColumnHidden, moveColumn, autosizeColumn, orderedForLayout } from "./columnState.ts";
export { sortRows, cycleSort } from "./pipeline/sorting.ts";
export { filterRows, uniqueValues } from "./pipeline/filtering.ts";
export { toggleRowSelection, selectAll, clearSelection, headerCheckboxState } from "./selection.ts";
export { rowWindow, columnLayout, colWindow, applyFlex } from "./viewport.ts";
export type { RowWindow, ColLayout } from "./viewport.ts";
export { getCellValue, formatCellValue, cellText } from "./valueFormatter.ts";
export { rowsToCsv } from "./csvExport.ts";
export type { CsvOptions } from "./csvExport.ts";
