---
componente: BlockLayout
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# BlockLayout

Contenedor `block`/`inline-block` que actúa como punto de medición de tamaño de contenedor (`sizew`), proveyendo el `LayoutSlotContext` a sus descendientes responsive.

## Props
- `inline` (bool): `display: inline-block` en lugar de `block`.
- `sizew` (string): override del tamaño de contenedor (xs/sm/md/lg/xl); si se omite se calcula por ancho.
- `cscroll` (bool, def `false`): activa scrollbar custom.
- `className`, `style`, `children`.

## Uso
import { BlockLayout } from "@jeff-aporta/mimicus-react/layout";
