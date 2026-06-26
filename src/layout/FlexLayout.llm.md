---
componente: FlexLayout
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# FlexLayout

Contenedor flexbox themeable con gap resuelto por breakpoint del contenedor.

## Props
- `direction` (string): `flex-direction` (row/column/...).
- `wrap` (bool, def `false`): wrap/nowrap.
- `inline` (bool): `inline-flex`.
- `justify` (string): `justify-content` (resuelve alias como start/end/between).
- `items` (string): `align-items`.
- `gap` (number|string): separación; se resuelve según `sizew`.
- `sizew` (string): override del tamaño de contenedor.
- `cscroll` (bool): scrollbar custom.
- `className`, `style`, `children`.

## Uso
import { FlexLayout } from "@jeff-aporta/mimicus-react/layout";
