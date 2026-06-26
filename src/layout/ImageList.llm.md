---
componente: ImageList
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# ImageList

Cuadrícula de imágenes estilo MUI ImageList. Variante standard/quilted usa CSS grid; masonry usa columnas CSS. Expone `ImageList.Item` para span de columnas/filas.

## Props (ImageList)
- `cols` (number, def `3`): columnas.
- `rowHeight` (number, def `164`): alto de fila (px) en variantes de grid.
- `gap` (number|string, def `4`): separación.
- `variant` (string, def `"standard"`): `standard`/`masonry`/`quilted`.
- `className`, `style`, `children`.

## ImageList.Item
- `cols` (number, def `1`): `grid-column: span`.
- `rows` (number, def `1`): `grid-row: span`.
- `className`, `style`, `children`.

## Uso
import { ImageList } from "@jeff-aporta/mimicus-react/layout";
