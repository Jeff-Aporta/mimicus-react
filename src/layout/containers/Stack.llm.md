---
componente: Stack
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Stack

Layout unidimensional estilo MUI Stack. Delega en `FlexLayout` con defaults Mimicus y permite insertar un divider entre cada par de hijos.

## Props
- `direction` (string, def `"column"`): column/row/column-reverse/row-reverse.
- `spacing` (number|string, def `0`): separación; número se multiplica x8px, también acepta presets `small`/`medium`/`large` o valor CSS.
- `divider` (node): elemento insertado entre hijos.
- `alignItems` (string): `align-items`.
- `justifyContent` (string): `justify-content`.
- `className`, `style`, `children`.

## Uso
import { Stack } from "@jeff-aporta/mimicus-react/layout";
