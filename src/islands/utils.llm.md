---
isla: utils
subpath: "@jeff-aporta/mimicus-react/utils"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla utils

Helpers de color, estilo y snippets en JS puro. No aporta componentes ni CSS propio; sirve para resolver y transformar colores, mezclar estilos de superficie y generar CSS fluido. Útil para consumo programático sin montar componentes.

## Exporta
- Color: `resolveColor`, `colorMix`, `mergeSurfaceStyle`
- Transformación de color: re-exporta todo desde `../lib/colorTransform.js` (y como namespace `colorTransform`)
- Estilo/snippets: `fluidCss`, `js2css`, `BRAND_DISPLAY_NAME`
- Namespaces: `snippets`, `cdn`

## Depende de
Isla base. No depende de otras islas (sin CSS).

## Uso
import { resolveColor, colorMix, fluidCss } from "@jeff-aporta/mimicus-react/utils";
// Esta isla no tiene CSS asociado.
