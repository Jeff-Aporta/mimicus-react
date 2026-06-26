---
componente: CodeBlock
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# CodeBlock

Editor/visor de código basado en CodeMirror 5 (cargado lazy desde CDN). Sincroniza su tema con `html[data-luminance]`, incluye botón de copiar y un fallback `<pre>` mientras carga. Alias histórico exportado: `CodeMirrorPanel`.

## Props
- `value` (string, def `""`): contenido del editor (controlado).
- `onChange` (func): callback cuando `readOnly` es false.
- `readOnly` (bool, def `true`): modo solo lectura.
- `json` (bool): activa modo/parseo JSON.
- `mode` (string): modo CodeMirror (p.ej. `"sql"`, `"css"`, `"text/x-sql"`).
- `lang` (string): atajo; `"jsx"` mapea a modo javascript.
- `minHeight` (string, def `"8rem"`), `maxHeight` (string): si hay `maxHeight` el panel se vuelve bounded con scroll.
- `lineWrapping` (bool, def `true`), `lineNumbers` (bool, def `true`).
- `copyTitle` (string, def `"Copiar"`): título del botón de copia.
- `placeholder` (string, def `""`): texto del fallback.
- `className`, `style`: estándar.

## Uso
import { CodeBlock } from "@jeff-aporta/mimicus-react/primitives";
