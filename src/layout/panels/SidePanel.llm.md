---
componente: SidePanel
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# SidePanel

Panel lateral (`<aside>`) con tres modos: expandido, rail (colapsado) y drawer. Renderiza la vista adecuada según el estado o usa `children`. Expone `SidePanel.View` para componer vistas.

## Props
- `open` (bool, def `true`): expandido vs rail.
- `drawer` (bool, def `false`): modo drawer con barra de cierre.
- `onClose` (func): muestra botón de cierre (modo drawer).
- `onToggle` (func): muestra botón de expandir/compactar (no drawer).
- `collapsedView` / `railView` (node): vista en modo rail.
- `expandedView` (node): vista expandida.
- `closeIcon` (string, def `"mdi:close"`), `closeTitle`, `expandTitle`, `collapseTitle`: textos/iconos de los botones.
- `children` (node): override directo del contenido.
- `className`, `style`.

## SidePanel.View
- `mode` (`"expanded"`|`"rail"`, def `"expanded"`), `gap` (def `"0.25rem"`), `className`, `style`, `children`.

## Uso
import { SidePanel } from "@jeff-aporta/mimicus-react/layout";
