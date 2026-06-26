---
componente: Divider
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Divider

Separador con `role="separator"`. Puede llevar texto (children) y orientarse horizontal o verticalmente, con distintas variantes de línea.

## Props
- `orientation` (`"horizontal"`|`"vertical"`): eje; alternativa `vertical` (bool).
- `variant` (string, def `"solid"`): variante de línea (solid/glow/...).
- `dashed` (bool): línea discontinua.
- `titlePlacement` (string, def `"center"`): posición del texto (`left`/`center`/`right`).
- `plain` (bool): estilo de texto plano.
- `size` (string, def `"medium"`): márgenes (small/medium/large).
- `orientationMargin` (number|string): base del borde cuando el texto no está centrado.
- `className`, `style`, `children` (texto opcional).

## Uso
import { Divider } from "@jeff-aporta/mimicus-react/layout";
