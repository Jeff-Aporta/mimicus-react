---
isla: general
subpath: "@jeff-aporta/mimicus-react/general"
css: "@jeff-aporta/mimicus-react/general.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla general

Kit completo de propósito general. No define símbolos propios: compone (re-exporta) varias islas base en un solo punto de entrada para consumo cómodo. Incluye todo menos los componentes especiales de ContaPyme, spa, shell y devkit.

## Exporta
Compone y re-exporta las islas:
- `theme`
- `utils`
- `primitives`
- `layout`
- `forms`
- `display`
- `navigation`

(Todos los símbolos de esas islas quedan disponibles desde aquí.)

## Depende de
Las islas que compone (theme, utils, primitives, layout, forms, display, navigation).

## Uso
import { Button, AppLayout, Form, ThemeProvider } from "@jeff-aporta/mimicus-react/general";
// + cargar el CSS: @jeff-aporta/mimicus-react/general.css
