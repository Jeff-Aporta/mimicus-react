---
componente: Separator
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Separator

Línea separadora simple (`<span role="separator">`) horizontal o vertical, con grosor, estilo y márgenes configurables. Más liviana que `Divider` (no admite texto).

## Props
- `orientation` (`"horizontal"`|`"vertical"`, def `"horizontal"`).
- `color` (string, def `""`): color de la línea; vacío usa el color de borde del tema.
- `borderStyle` (string, def `"solid"`): estilo de borde CSS (solid/dashed/dotted...).
- `thickness` (number, def `1`): grosor en px.
- `startMargin` (number, def `8`) / `endMargin` (number, def `8`): márgenes en px.
- `className`, `style`.

## Uso
import { Separator } from "@jeff-aporta/mimicus-react/layout";
