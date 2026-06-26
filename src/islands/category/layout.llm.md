---
isla: layout
subpath: "@jeff-aporta/mimicus-react/layout"
css: "@jeff-aporta/mimicus-react/layout.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla layout

Sistema de maquetación: el `AppLayout` y su contexto, contenedores flexibles/grid, separadores y paneles laterales. Provee las piezas para estructurar la página y organizar el espacio.

## Exporta
- App layout: `AppLayout`, `AppLayoutProvider`, `AppLayoutSider`
- Layouts: `BlockLayout`, `FlexLayout`, `GridLayout`, `GridResponsiveForm`
- Espaciado/contenedores: `Space`, `Stack`, `Box`, `Container`, `Masonry`, `ImageList`
- Separadores: `Divider`, `Splitter`, `Separator`
- Paneles: `SidePanel`, `SidePanelSection`
- Hook: `useLayoutSlot`
- Variantes: re-exporta todo desde `../layout/appLayoutVariants.js`

## Depende de
Isla `theme`.

## Uso
import { AppLayout, FlexLayout, Stack } from "@jeff-aporta/mimicus-react/layout";
// + cargar el CSS: @jeff-aporta/mimicus-react/layout.css
