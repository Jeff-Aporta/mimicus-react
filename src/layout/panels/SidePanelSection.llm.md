---
componente: SidePanelSection
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# SidePanelSection

Sección tipo acordeón para usar dentro de `SidePanel`. Muestra un encabezado clicable (icono + label) con conteo opcional, dots de estado y contenido colapsable.

## Props
- `icon` (string, def `"mdi:folder-outline"`): ícono Iconify del encabezado.
- `label` (node): título de la sección.
- `open` (bool): contenido visible.
- `active` (bool): resalta la sección (variante `soft`).
- `forceOpen` (bool): oculta el botón de toggle (siempre abierta).
- `count` (number): badge con el conteo en el encabezado.
- `statusDots` (array de color, def `[]`): puntos de estado (se deduplican).
- `color` (string, def `"primary"`): acento de la sección.
- `collapsed` (bool): modo rail (solo icono, centrado).
- `onToggle` (func), `onHeaderClick` (func), `children` (contenido).

## Uso
import { SidePanelSection } from "@jeff-aporta/mimicus-react/layout";
