---
isla: primitives
subpath: "@jeff-aporta/mimicus-react/primitives"
css: "@jeff-aporta/mimicus-react/primitives.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla primitives

Componentes base de la librería: iconos, botones, tarjetas, tipografía y bloques de código. Incluye también las utilidades de CodeMirror. Es el punto de entrada típico para construir UI con los bloques fundamentales.

## Exporta
- `Icon`, `Button`
- `FloatButton`, `Fab`, `IconButton`
- `Card`
- `CodeBlock`, `CodeMirrorPanel`
- `Typography`, `Text`, `Headings`
- CodeMirror: `ensureCodeMirrorLoaded`, `ensureCodeMirrorCss`, `mountCodeMirror`, `destroyCodeMirror`, `resolveCodeMirrorTheme`, `copyEditorText`

## Depende de
Isla `theme` (tokens y proveedor de tema).

## Uso
import { Button, Card, Icon } from "@jeff-aporta/mimicus-react/primitives";
// + cargar el CSS: @jeff-aporta/mimicus-react/primitives.css
