---
componente: Button
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Button

Botón polimórfico que se renderiza como `<button>`, `<a>` (si hay `href`) o `<div role="button"]` (con `wrap`). Soporta variantes de superficie, color semántico, icono, estado de carga y manejo async de `onClick`.

## Props
- `type` (string, def `"button"`): tipo HTML del botón nativo (se mapea a `htmlType`).
- `disabled` (bool): deshabilita el botón; también se activa durante `loading`.
- `variant` (string, def `"solid"`): variante de superficie (solid/ghost/dashed/text/glass...). Atajos: `ghost`, `dashed`, `link` la fuerzan.
- `color` (string): color semántico de superficie (p.ej. `primary`, `danger`, `neutral`).
- `shape` (string, def `"round"`): forma (round/circle/rect). Icon-only fuerza `circle`.
- `size` (string, def `"medium"`): small/medium/large.
- `block` (bool): ocupa el 100% del ancho.
- `danger` (bool): atajo para `color="danger"`.
- `ghost` / `dashed` / `link` (bool): atajos de variante.
- `href`, `target`, `rel`: renderiza como enlace; `rel` se autocompleta en `target="_blank"`.
- `loading` (bool): muestra spinner; combinable con loading automático del onClick async.
- `glassActive` (bool): estado activo para variantes glass.
- `wrap` (bool): renderiza como `<div role="button">` sin loading automático.
- `iconPlacement` (string, def `"start"`): posición del icono (`start`/`end`).
- `icon` (node): icono; si no hay children se considera icon-only.
- `onClick` (func): si devuelve Promise, el botón entra en loading hasta resolver.
- `className`, `style`, `children`: estándar.

## Uso
import { Button } from "@jeff-aporta/mimicus-react/primitives";
