---
componente: GridLayout
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# GridLayout

Contenedor CSS grid con plantilla de celdas configurable y dirección column/row.

## Props
- `cells` (string, def `""`): plantilla de celdas (columnas o filas según `direction`).
- `cellsFit` (bool, def `false`): ajusta la plantilla a contenido disponible.
- `direction` (string, def `"column"`): `"column"` define columnas; `"row"` define filas + `grid-auto-flow: column`.
- `justify` (string): `justify-content` (con alias resueltos).
- `items` (string): `align-items`.
- `gap` (number|string): separación resuelta por `sizew`.
- `inline` (bool): `inline-grid`.
- `sizew` (string): override del tamaño de contenedor.
- `cscroll` (bool): scrollbar custom.
- `className`, `style`, `children`.

## Uso
import { GridLayout } from "@jeff-aporta/mimicus-react/layout";
