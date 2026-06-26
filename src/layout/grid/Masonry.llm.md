---
componente: Masonry
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Masonry

Distribución en columnas CSS (`column-count`) con alturas variables, estilo Ant Masonry. Acepta `children` o una lista `items` con renderizador.

## Props
- `columns` (number|object, def `3`): nº de columnas; objeto por breakpoint (`{xs, sm, md, lg, xl}`).
- `gutter` (number|string, def `0`): separación entre columnas/ítems.
- `items` (array): datos a renderizar (cada item usa `key`/`id`).
- `itemRender` (func): render por item; sin él usa `item.children`.
- `className`, `style`, `children`.

## Uso
import { Masonry } from "@jeff-aporta/mimicus-react/layout";
