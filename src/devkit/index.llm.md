---
modulo: devkit
subpath: "@jeff-aporta/mimicus-react/devkit"
css: "@jeff-aporta/mimicus-react/devkit.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Devkit (barrel `src/devkit/index.js`)

El devkit es el **motor del playground empaquetado como componente de librería**: en lugar de ser una app autocontenida, expone el `<Playground>` y todas las piezas (renderers, driver de demos, kit de helpers y store de datos) para que una app consumidora monte su propio catálogo/playground alimentándolo con datos.

`src/devkit/index.js` es el barrel público de ese motor.

## Exporta
- Componente raíz: `Playground` (ver `./Playground.llm.md`)
- Renderers JSON: `JsonRenderer`, `PlaygroundJsonPanel`
- Driver de demos: `DemoPage`, `createJsonAdapter`, `JsonDemoAdapter`, `resolveComponent`, `isStubComponent`
- Preview: `PreviewRenderer`
- Datos (store en runtime): `configurePlayground`, `playgroundData`
- Kit de construcción (`shared/playgroundKit.js`): `buildTag`, `buildJsxTag`, `demoSlug`, `optionsToItems`, `columnsConfig`, `columnsGridPlayground`, `mergeStyleString`, `parseStyleString`, `normalizeCssLength`, `stepCssLength`, `responsiveGridCols`, `packCardRelieve`, `colorOptions`, `iconEnum`, `MIMICUS_UI`, `mimicusPageTitle`, y muestras de preview (`LAYOUT_PREVIEW_EMOJIS`, `CARD_PREVIEW_SAMPLE_TEXT`, `CARD_INLINE_SAMPLE_TEXT`, `CARD_INLINE_FLOW_BEFORE`, `CARD_INLINE_FLOW_AFTER`)

## Inyección de datos
Los datos del playground (catálogo, metadatos de secciones, configuración del shell, plantillas de preview y brand) no se importan: se inyectan en runtime vía `configurePlayground({ catalogMeta, sectionsMeta, shellConfig, previewTemplates, brand })` y se leen con `playgroundData()`. El propio `<Playground>` llama a `configurePlayground` con las props que recibe.

## Uso
import { Playground, configurePlayground, playgroundData } from "@jeff-aporta/mimicus-react/devkit";
// + cargar el CSS: @jeff-aporta/mimicus-react/devkit.css
