// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * index — devkit
 * llm:  ./index.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/index.ts
 * Barrel público del devkit: Playground, renderers, driver y store de datos del playground.
 */
export { Playground } from "./Playground.tsx";

export { JsonRenderer, PlaygroundJsonPanel } from "./shared/jsonRenderer.tsx";

export { DemoPage, createJsonAdapter, JsonDemoAdapter, resolveComponent, isStubComponent } from "./shared/driver/driverCore.tsx";

export { PreviewRenderer } from "./shared/driver/previewRenderer.tsx";

export { configurePlayground, playgroundData } from "./core/playgroundData.ts";

export {
  buildTag, buildJsxTag, demoSlug, optionsToItems, columnsConfig, columnsGridPlayground,
  mergeStyleString, parseStyleString, normalizeCssLength, stepCssLength, responsiveGridCols,
  packCardRelieve, colorOptions, iconEnum, MIMICUS_UI, mimicusPageTitle,
  LAYOUT_PREVIEW_EMOJIS, CARD_PREVIEW_SAMPLE_TEXT, CARD_INLINE_SAMPLE_TEXT,
  CARD_INLINE_FLOW_BEFORE, CARD_INLINE_FLOW_AFTER,
} from "./shared/playgroundKit.ts";
