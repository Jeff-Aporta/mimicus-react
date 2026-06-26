# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

`@jeff-aporta/mimicus-react` (**Mimicus React**) — biblioteca UI React temática, **CSS-first**, consumida por **CDN** (jsDelivr desde `Jeff-Aporta/mimicus-react`). Demo publicado en GitHub Pages.

Principio rector: **el JS no calcula color ni estilo**. JS solo escribe atributos en `<html>` (`data-luminance`, `data-theme-color`, `data-design-scheme`, `data-looknfeel`) y `data-*` en las superficies (`data-variant`, `data-surface-color`). Todo el aspecto se deriva en CSS con `oklch()` / `color-mix()` sobre tokens `--mimicus-*`. Al añadir o tocar componentes, mantené esta separación: lógica de tema = atributos; apariencia = CSS.

## Comandos

```bash
npm install
npm run build        # cdn/: ESM + IIFE (global MimicusUI) + snippets + mimicus-ui.min.css (+ copia a demo/cdn)
npm run build:demo   # demo/_dist/app.esm.js (+ catálogo generado + parche boot en demo/index.html)
npm run build:all    # ambos
```

- No hay test runner ni linter configurados.
- El demo se sirve estático (Live Server u otro). Tras tocar `src/` o `css/`, hay que **rebuildear** para que el demo refleje cambios — el demo consume `demo/cdn/*` (artefactos), no `src/`/`css/` directamente.
- `build:demo` = `scripts/gen-catalog-items.mjs` → `scripts/build-demo.mjs` → `scripts/patch-demo-index.mjs`.

## Arquitectura

### Pipeline de build (`scripts/build.mjs`)
- Entradas: `src/entry-esm.jsx` (ESM), `src/entry-iife.jsx` (global `MimicusUI`), `src/bootstrap.js`, `src/entry-snippets-iife.js`. React es **external** (se espera React 18 global / vía importmap).
- CSS: `flattenCss()` resuelve recursivamente los `@import` de `css/mimicus-ui.css` en un solo archivo y lo minifica → `cdn/mimicus-ui.min.css`. **`css/mimicus-ui.css` es el índice maestro**: un CSS nuevo no se aplica hasta agregar su `@import` ahí.
- Copia los artefactos `cdn/*` a `demo/cdn/*` y escribe `cdn/versions.json`.

### API pública
`src/index.jsx` es el barrel único (lo reexportan ambos entries). `bootMimicusUI()` = `bootTheme()` + `bootLooknfeel()`. Familias: layout (`AppLayout`, `Stack`, `GridLayout`, `Splitter`, `SidePanel`…), `components/` (Button, Card, FloatButton, CodeBlock), `forms/`, `display/`, `navigation/`, `typography/`, SPA (`SpaRouter` con estado en `?s=` base64url), tema, `contapyme/` (login/sesión contra el orquestador), `shell/` y `snippets/` (pantalla de carga `mimicus-app-boot`, `fluidCss`).

### Sistema de tema (núcleo — `src/theme/`)
Cuatro ejes independientes, todos como atributos en `<html>`:

| Atributo | Valores | Fuente de verdad |
|----------|---------|------------------|
| `data-luminance` | `light` \| `dark` | `themeEngine.js` |
| `data-theme-color` | 13 paletas (`hues-dodgerblue`=ContaPyme, `vulcano`, `oceano`, …) | `constants.THEME_COLOR_OPTIONS` + `css/theme/theme-color-palettes.css` |
| `data-design-scheme` | `mono` \| `dual` \| `triad` | `constants.DESIGN_SCHEME_OPTIONS` |
| `data-looknfeel` | `contapyme` \| `neon-mono` \| `neon-dual` \| `neon-triad` | `constants.LOOKNFEEL_OPTIONS` |

- **`src/theme/constants.js` es la fuente de verdad de los looknfeel disponibles.** El selector del demo lee `LOOKNFEEL_OPTIONS`; agregar/quitar un look se hace ahí. Cada look fija su esquema de diseño vía `LOOKNFEEL_DESIGN_SCHEME` (`applyLooknfeel` → `setDesignScheme`).
- Solo existen dos familias de look: **`contapyme`** (estilo aplicación, esquema triad) y **`neon-*`** (estilo glass/neón). Sus estilos viven en `css/theme/playground-contapyme.css`, `css/theme/ng-surface.css` y `css/theme/playground-glass.css`; el radius unificado en `css/theme/look-radius.css`.
- Las paletas definen `--mimicus-design-1/2/3` + semánticos (`--mimicus-primary`, `--mimicus-info/success/warning/danger`, fondos `--mimicus-bg-*`, bordes `--mimicus-b-*`). `data-design-scheme` decide cuántos design-colors entran en juego.
- Tokens de acento por superficie en `css/theme/surface-tokens.css`: `data-surface-color` (primary/info/success/warning/danger/design-1…3) → `--surface-accent` → derivados `--bttn-*` / `--bdg-*`. Los componentes pintan desde esos tokens, no desde colores literales.

### Convenciones de estilo
- Prefijo de todos los tokens y clases públicas: `--mimicus-*` / `.mimicus-*`. Snippets/bootstrap usan `MimicusBootstrap`, `MimicusSnippets`, `MimicusUI`.
- `data-variant` (solid/soft/outlined/ghost/text/glass) + `data-surface-color` es el contrato de las superficies; ver `normalizeVariant`/`surfaceVariantAttrs` en `constants.js` (incluye prefijo legacy `ng-`).
- Estilos específicos de un look van bajo `html[data-looknfeel="…"]` (o `^="neon-"`). No introducir un valor de looknfeel sin registrarlo en `constants.js`.

### Islas de desarrollo (subpaths)
La librería se expone por **islas** componibles para que el consumidor cargue solo lo mínimo. Cada isla = `src/islands/<isla>.js` (barrel) + `cdn/mimicus-<isla>.esm.js` (bundle) + `cdn/mimicus-<isla>.css` (salvo `utils`), declaradas en `package.json` `exports` y en `ISLANDS` de `scripts/build.mjs`. Islas: `theme` (base, sin skins), `utils` (solo-JS), `primitives`, `layout`, `forms`, `display`, `navigation`, `spa`, `shell`, `general` (compone las anteriores), `contapyme` (general + login/sesión), `devkit` (motor del playground). `.`/`./full` = todo. **Al añadir/quitar una isla**: tocar `src/islands/`, `css/islands/`, `ISLANDS` en `build.mjs` y `exports` en `package.json`.
- **CSS por componente**: `css/components/<familia>/<Componente>.css` + índice `css/components/<familia>.css` (reexporta por `@import`). Las islas importan el índice.
- **CSS por looknfeel (opt-in)**: `css/looknfeel/{contapyme,neon}.css` → `./looknfeel/<look>.css`. El base-theme no incluye skins.
- **Convención**: cada JS/CSS lleva header de contexto compacto; cada isla y componente tiene su `*.llm.md` junto al archivo (para agentes/LLM).

### devkit — el playground es un componente (`src/devkit/`)
El motor del playground vive en la librería: `src/devkit/core/` (JS agnóstico: fieldHydration, codeStrategies, playgroundKit, routing, catalogSections, playgroundData) y `src/devkit/{shared,shell,catalog}` + `Playground.jsx` (capa React). Se consume como `<Playground catalog={…} catalogMeta sectionsMeta shellConfig previewTemplates />`; los datos se inyectan vía `configurePlayground()` (`src/devkit/core/playgroundData.js`), no por import de JSON. `Icon` (Iconify) es `src/components/Icon.jsx`.

### Demo / playground (`demo/`)
`demo/js` es **solo bootstrap**: `App.jsx` monta `<Playground>` de la librería e inyecta los datos (catálogo generado + JSON de `demo/config/`). El catálogo se **genera** (`gen-catalog-items.mjs` → `demo/js/app/playground/catalog/generated/*`) desde `demo/config/`. `demo/index.html` se parchea con la pantalla de boot. `demo/cdn/` y `demo/_dist/` son **artefactos de build** (no editar a mano). El motor de UI ya **no** vive en el demo (migrado a `src/devkit/`).

## Notas de mantenimiento
- Al quitar un looknfeel: borrar su entrada en `constants.js` (`LOOKNFEEL_OPTIONS` + `LOOKNFEEL_DESIGN_SCHEME`), su `@import` en `css/mimicus-ui.css`, sus CSS dedicados y los bloques `html[data-looknfeel="…"]` muertos repartidos por `css/`. Después rebuildear.
- `scripts/rebrand-to-mimicus.mjs` documenta el mapeo histórico de nombres `jagu*`/`JAGUDELOE` → `mimicus`/`Mimicus` (rebrand ya aplicado).
- El remoto git ya es `Jeff-Aporta/mimicus-react`.
