---
isla: shell
subpath: "@jeff-aporta/mimicus-react/shell"
css: "@jeff-aporta/mimicus-react/shell.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla shell

Barras de navegación de aplicación y resolución de la configuración de navegación (categorías, secciones, pestañas y despacho de eventos de nav). Para armar el chrome/cabecera de una app.

## Exporta
- Componentes: `NavTabRow`, `ShellHeaderNav`
- Metadatos de sección: `sortedCategories`, `sectionMeta`, `sectionColorFor`
- Resolución de tabs: `resolveCategoryTabDescriptors`, `resolveCatalogDemoTabDescriptors`, `normalizeShellNavRows`, `resolveNavRowTabs`, `resolveNavRowValue`
- Navegación: `evaluateNavWhen`, `resolveShellNavigation`, `dispatchShellNav`

## Depende de
Isla `theme`.

## Uso
import { ShellHeaderNav, resolveShellNavigation } from "@jeff-aporta/mimicus-react/shell";
// + cargar el CSS: @jeff-aporta/mimicus-react/shell.css
