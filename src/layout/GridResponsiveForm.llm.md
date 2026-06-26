---
componente: GridResponsiveForm
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# GridResponsiveForm

Rejilla de formulario responsive: combina `BlockLayout` (mide el contenedor) + `GridLayout`, calculando el número de columnas según el breakpoint (`sizew`) y acotándolo con min/maxcells. Columnas base por tamaño: xs/sm=1, md=3, lg=4, xl=5.

## Props
- `maxcells` (number): tope máximo de columnas.
- `mincells` (number): mínimo de columnas.
- `gap` (string, def `"1rem"`): separación de la rejilla.
- `className`, `style`, `children`.
- Resto de props se pasan al `GridLayout` interno.

## Uso
import { GridResponsiveForm } from "@jeff-aporta/mimicus-react/layout";
