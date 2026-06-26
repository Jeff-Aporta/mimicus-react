---
componente: AppLayoutSider
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# AppLayoutSider

Barra lateral (`<aside>`) usada por `AppLayout.Sider`. Soporta tema dark/light, ancho colapsable y un trigger de colapso. Publica su ancho al contexto de AppLayout.

## Props
- `width` (number|string, def `200`): ancho expandido.
- `collapsed` (bool, def `false`): estado colapsado.
- `collapsible` (bool, def `false`): muestra el botón de colapso.
- `collapsedWidth` (number|string, def `80`): ancho colapsado.
- `theme` (`"dark"`|`"light"`, def `"dark"`): define fondo (primary/card) y color de texto.
- `onCollapse` (func): callback al alternar el colapso.
- `className`, `style`, `children`.

## Uso
import { AppLayoutSider } from "@jeff-aporta/mimicus-react/layout";
