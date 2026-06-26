---
componente: FloatButton
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# FloatButton

Botón de acción flotante (FAB). El archivo exporta `FloatButton` (con subcomponentes `.Group` y `.BackTop`) y los alias de estilo MUI `Fab` e `IconButton`.

## FloatButton
- `icon` (node): icono del botón.
- `content` / `children` (node): etiqueta; si existe, el FAB se muestra extendido.
- `type` (string, def `"default"`): `"primary"` aplica superficie primaria.
- `shape` (string, def `"circle"`), `size` (string, def `"large"`).
- `href`, `target`: renderiza como enlace.
- `tooltip` (string): `title` y `aria-label`.
- `disabled` (bool), `onClick` (func), `className`, `style`.

## FloatButton.Group
- `trigger` (`"click"`|`"hover"`, def `"click"`), `open`/`defaultOpen`/`onOpenChange` (control de apertura).
- `placement` (def `"top"`), `shape` (def `"circle"`), `closeIcon` (node). El primer hijo es el disparador; el resto, el menú.

## FloatButton.BackTop
- `visibilityHeight` (number, def `400`): scroll mínimo para mostrarse.
- `duration` (number, def `450`): >0 hace scroll suave.
- `target` (func que devuelve el elemento scrollable), `onClick`, `icon`.

## Fab
- Alias de FloatButton; `color="secondary"` → `type="default"`, resto → `type="primary"`.

## IconButton
- Botón solo-icono basado en `Button` (`shape="circle"`).
- `size` (small/medium/large), `color`, `variant` (def `"text"`), `icon`/`children`.

## Uso
import { FloatButton, Fab, IconButton } from "@jeff-aporta/mimicus-react/primitives";
