---
componente: Card
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Card

Contenedor de superficie themeable. Calcula fondo, borde y sombra según la variante y el nivel de relieve.

## Props
- `inline` (bool): si es true renderiza `<span>` en lugar de `<div>`.
- `variant` (string, def `""`): variante de superficie (solid/onion/flat...). Determina si aplica fondo y sombra automáticos.
- `relieve` (number, def `-1`): intensidad de sombra/relieve; `<0` usa el valor por defecto (55).
- `sizew` (string, def `"md"`): controla el padding (xs/sm/md/lg/xl).
- `className`, `style`, `children`: estándar (`style` se fusiona sobre los cálculos internos).

## Uso
import { Card } from "@jeff-aporta/mimicus-react/primitives";
