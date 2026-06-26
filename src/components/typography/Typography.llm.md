---
componente: Typography
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Typography

Sistema tipográfico. El export principal `Typography` es un componente con subcomponentes (`.Text`, `.Title`, `.Paragraph`, `.Link`). El archivo también exporta los alias de demo `Text` y `Headings`.

## Typography / Typography.Text
- `variant` (string, def `"body1"`): variante tipográfica (`body1`, `body2`, `h1`–`h6`, `text`→`body1`).
- `color` (string): color semántico/resuelto.
- `lines` (number, def `0`) + `ellipsis` (bool): truncado multilínea.
- `strong`, `italic`, `underline`, `delete`, `disabled` (bool): modificadores de estilo.
- `component` (elementType): override de la etiqueta renderizada.
- `className`, `style`, `children`.

## Typography.Title
- `level` (1–6, def `1`): mapea a variante h1–h6.
- `color`, `lines`, `ellipsis`, `className`, `style`, `children`.

## Typography.Paragraph
- Igual que Text pero fuerza `component="p"` y variante `body1` por defecto.

## Typography.Link
- `href`, `target`, `rel` (autocompleta en `_blank`), `color` (def `"primary"`), `disabled`, `children`.

## Text (alias demo)
- `sampleText` (string): contenido si no hay `children`; resto de props = Text.

## Headings (demo)
- Renderiza H1–H6 con `sampleText`/`children`, `color` y `lines`.

## Uso
import { Typography, Text, Headings } from "@jeff-aporta/mimicus-react/primitives";
