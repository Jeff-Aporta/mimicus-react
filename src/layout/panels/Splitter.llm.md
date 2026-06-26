---
componente: Splitter
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Splitter

Layout de dos áreas con un panel redimensionable mediante handle de arrastre. Soporta colapso, persistencia del tamaño y apilado (stacking) en viewports estrechos.

## Props
- `direction` (string, def `"horizontal"`): eje de redimensionado (horizontal/vertical).
- `panelSize` (number, def `280`): tamaño inicial del panel (px).
- `minSize` (number, def `180`), `maxSize` (number, def `720`): límites de arrastre.
- `collapsed` (bool, def `false`), `collapsedSize` (number, def `52`): estado/tamaño colapsado.
- `resizable` (bool, def `true`): habilita el handle.
- `storageKey` (string): clave para persistir el tamaño.
- `responsive` (bool, def `true`): apila en pantallas estrechas (solo horizontal).
- `panelEnd` (bool): coloca el panel al final.
- `inline` (bool): variante inline.
- `panel` (node): contenido del panel; `children` = área principal.
- `className`, `style`.

## Uso
import { Splitter } from "@jeff-aporta/mimicus-react/layout";
