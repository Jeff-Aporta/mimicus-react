---
isla: devkit
subpath: "@jeff-aporta/mimicus-react/devkit"
css: "@jeff-aporta/mimicus-react/devkit.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla devkit

Motor del playground como componente de librería: el `<Playground>`, los renderers, el driver de demos y el store de datos. Re-exporta todo desde `src/devkit/index.js`. Para montar un playground/catálogo de componentes alimentado por datos.

## Exporta
Re-exporta `src/devkit/index.js`:
- `Playground`
- Renderers: `JsonRenderer`, `PlaygroundJsonPanel`, `PreviewRenderer`
- Driver: `DemoPage`, `createJsonAdapter`, `JsonDemoAdapter`, `resolveComponent`, `isStubComponent`
- Datos: `configurePlayground`, `playgroundData`
- Kit: `buildTag`, `buildJsxTag`, `demoSlug`, `optionsToItems`, `columnsConfig`, `columnsGridPlayground`, `mergeStyleString`, `parseStyleString`, `normalizeCssLength`, `stepCssLength`, `responsiveGridCols`, `packCardRelieve`, `colorOptions`, `iconEnum`, `MIMICUS_UI`, `mimicusPageTitle`, y muestras de preview (`LAYOUT_PREVIEW_EMOJIS`, `CARD_PREVIEW_SAMPLE_TEXT`, etc.)

## Depende de
Las islas base (theme y demás) para renderizar las demos.

## Uso
import { Playground, configurePlayground } from "@jeff-aporta/mimicus-react/devkit";
// + cargar el CSS: @jeff-aporta/mimicus-react/devkit.css
