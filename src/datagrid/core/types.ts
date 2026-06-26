/**
 * datagrid/core/types — isla: datagrid
 * llm:  ./types.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/datagrid/core/types.ts
 * Tipos del motor de DataGrid (agnóstico de framework). Sin React.
 */

export type CellValue = unknown;
export type RowData = Record<string, CellValue>;

export type ColumnType = "text" | "number" | "date" | "boolean";
export type SortDir = "asc" | "desc";
export type PinSide = "left" | "right" | null;
export type Align = "left" | "center" | "right";
export type Density = "compact" | "normal" | "comfortable";
export type SelectionMode = "none" | "single" | "multiple";
export type FilterType = "text" | "number" | "date" | "set";

/** Definición de columna provista por el consumidor. */
export interface ColumnDef<T = RowData> {
  field: string;
  colId?: string;
  headerName?: string;
  type?: ColumnType;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  flex?: number;
  sortable?: boolean;
  resizable?: boolean;
  filter?: boolean | FilterType;
  pinned?: PinSide;
  hide?: boolean;
  align?: Align;
  checkboxSelection?: boolean;
  valueGetter?: (row: T) => CellValue;
  valueFormatter?: (value: CellValue, row: T) => string;
  comparator?: (a: CellValue, b: CellValue, ra: T, rb: T) => number;
  cellRenderer?: string;
  cellClass?: string | ((value: CellValue, row: T) => string | undefined);
  headerClass?: string;
}

/** Estado resuelto de una columna (orden/ancho/pin/visibilidad). */
export interface ColumnState {
  colId: string;
  field: string;
  headerName: string;
  type: ColumnType;
  width: number;
  minWidth: number;
  maxWidth: number;
  flex?: number;
  sortable: boolean;
  resizable: boolean;
  filterType: FilterType | null;
  pinned: PinSide;
  hide: boolean;
  align: Align;
  checkboxSelection: boolean;
  def: ColumnDef;
}

export interface SortModelItem { colId: string; dir: SortDir }
export type SortModel = SortModelItem[];

export type TextFilterOp = "contains" | "notContains" | "equals" | "notEqual" | "startsWith" | "endsWith" | "blank" | "notBlank";
export type NumberFilterOp = "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "inRange" | "blank" | "notBlank";
export type DateFilterOp = "eq" | "before" | "after" | "inRange";

export interface TextFilter { type: "text"; op: TextFilterOp; value: string }
export interface NumberFilter { type: "number"; op: NumberFilterOp; value: number | null; to?: number | null }
export interface DateFilter { type: "date"; op: DateFilterOp; value: string; to?: string }
export interface SetFilter { type: "set"; values: string[] }
export type ColumnFilter = TextFilter | NumberFilter | DateFilter | SetFilter;
export type FilterModel = Record<string, ColumnFilter>;

export interface RowNode<T = RowData> { id: string; index: number; data: T }

export interface GridOptions<T = RowData> {
  columns: ColumnDef<T>[];
  rows: T[];
  getRowId?: (row: T, index: number) => string;
  rowHeight?: number;
  headerHeight?: number;
  selectionMode?: SelectionMode;
  pagination?: boolean;
  pageSize?: number;
  quickFilter?: string;
  density?: Density;
  defaultColWidth?: number;
}

export interface GridState<T = RowData> {
  columns: ColumnState[];
  sortModel: SortModel;
  filterModel: FilterModel;
  quickFilter: string;
  selection: Set<string>;
  density: Density;
  pagination: boolean;
  page: number;
  pageSize: number;
  displayedRows: RowNode<T>[];
  pageRows: RowNode<T>[];
  totalRows: number;
}

export type GridListener<T = RowData> = (state: GridState<T>) => void;
