---
isla: theme
subpath: "@jeff-aporta/mimicus-react/theme"
css: "@jeff-aporta/mimicus-react/theme.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla theme

Motor de tema y look&feel de Mimicus: aplica esquemas de diseño, luminancia y color, expone el `ThemeProvider` de React y las constantes del tema. Es la isla base de la que dependen casi todas las demás. `bootMimicusUI()` arranca tema + look&feel de una sola llamada.

## Exporta
- Motor de tema: `bootTheme`, `applyTheme`, `setLuminance`, `setThemeColor`, `setDesignScheme`, `getThemeState`, `subscribeTheme`
- Motor de look&feel: `bootLooknfeel`, `applyLooknfeel`, `getLooknfeelState`, `subscribeLooknfeel`
- Componente: `ThemeProvider`
- Constantes: re-exporta todo desde `../theme/constants.js`
- Helper: `bootMimicusUI()` (arranca tema + look&feel)

## Depende de
Isla base. No depende de otras islas.

## Uso
import { ThemeProvider, bootMimicusUI } from "@jeff-aporta/mimicus-react/theme";
// + cargar el CSS: @jeff-aporta/mimicus-react/theme.css
