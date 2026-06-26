---
isla: datagrid
css: cdn/mimicus-datagrid.css
repo: Jeff-Aporta/mimicus-react · src/islands/category/datagrid.ts
---

# Isla `datagrid`

Grilla de datos de alto rendimiento (inspirada en el conjunto de funciones de AG Grid Enterprise; implementación **original**) con filosofía framework-agnóstica.

## Arquitectura
- **`datagrid/core/`** — motor TS puro, sin React (reutilizable en Svelte/Vue): `createGridModel(options)` mantiene estado y corre el pipeline `filter → quickFilter → sort → paginate`; más `columnState`, `selection`, `viewport` (virtualización), `valueFormatter`, `csvExport`. Patrón observer (`subscribe`/`getState`).
- **`datagrid/react/`** — capa de render delgada que consume el core vía `useSyncExternalStore`.

## API React
```tsx
import { DataGrid } from "@jeff-aporta/mimicus-react/datagrid";
import "@jeff-aporta/mimicus-react/datagrid.css";

<DataGrid
  columns={[{ field: "nombre", headerName: "Nombre", filter: true }, { field: "monto", type: "number", filter: true }]}
  rows={data}
  selectionMode="multiple"
  pagination
  pageSize={50}
/>
```

## Características v1
Virtualización de filas · orden multi-columna (shift en encabezado) · filtros por columna (texto/número/fecha/conjunto) + filtro rápido · selección (checkbox/múltiple/rango con shift) · resize/reorder/fijar (izq-der)/ocultar/autoajustar columnas · paginación · render/formato de celda (registry extensible) · densidad (compacta/normal/cómoda) · exportación CSV · navegación por teclado · theming Mimicus (4 ejes).

## Tokens / estilo
Usa `--mimicus-bg-*`, `--mimicus-color`, `--mimicus-b-color`, `--mimicus-primary`, `--mimicus-on-primary` y la clase `.pg-scrollbar`. CSS con nesting nativo en `css/components/datagrid/datagrid.css`.
