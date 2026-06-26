---
componente: Box
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Box

Contenedor genérico polimórfico estilo MUI Box. Renderiza el elemento indicado por `component` y fusiona `style` con un objeto `sx`.

## Props
- `component` (elementType, def `"div"`): etiqueta/componente a renderizar.
- `sx` (object): estilos en objeto (camelCase) convertidos a CSS inline y fusionados.
- `className`, `style`, `children`: estándar.
- Resto de props se pasan al elemento.

## Uso
import { Box } from "@jeff-aporta/mimicus-react/layout";
