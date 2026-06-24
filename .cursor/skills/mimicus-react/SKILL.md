---
name: mimicus-react
description: >-
  Mimicus React — biblioteca React temática ESM (import from @jeff-aporta/mimicus-react).
  Contrato html data-luminance/theme-color/design-scheme/looknfeel; bootstrap MimicusBootstrap.loadCDNs.
---

# Mimicus React

Biblioteca UI React personal — **CSS-first**: JS solo escribe atributos en `<html>` y `data-*` en superficies.

## CDN bootstrap (`MimicusBootstrap.loadCDNs`)

Carga bloqueante del bootstrap + `document.write` del head estándar:

```html
<script src="cdn/mimicus-snippets.min.js"></script>
<script>MimicusBootstrap.loadCDNs("stack-esm");</script>
<script type="module" src="js/boot/loader.mjs"></script>
```

Grupos: `stack-esm` / `stack-mimicus`, `stack-mui`, o claves sueltas (`react18`, `iconify`, …).

## ESM (meta — sin globals en apps)

```jsx
import { AppLayout, Button, bootMimicusUI } from "@jeff-aporta/mimicus-react";
```

CDN: `mimicus-react.esm.min.js` vía importmap (`stack-esm`).
Bootstrap: `@jeff-aporta/mimicus-react/bootstrap` → `loadCDNs`, `fluidCss`, boot screen.
App: `App.jsx` + build → `app.esm.js` (external react + librería).
Legacy IIFE `MimicusUI` solo compatibilidad.

## CDN

## Snippets (boot + fluidCss)

Módulo aparte de componentes React — pantalla de carga canónica `mimicus-app-boot` (mesh, tarjeta, barra, watermark).

| API | Uso |
|-----|-----|
| `fluidCss` / `js2css` | Árbol JSON → string CSS |
| `bootCssText()` | CSS de arranque desde `BOOT_CSS_TREE` |
| `buildRootBlock({ icon, label, name })` | HTML `#root` con estilos inline |
| `writeAppBoot(document, opts)` | `document.write` durante parse |
| `patchIndexRoot(html, meta)` | Parchea `index.html` en generadores |
| `buildThemeInitInline(lsKey)` | Script síncrono `data-luminance` |

También en `MimicusUI.snippets` y `MimicusUI.fluidCss` al cargar el bundle principal.

Demo: `npm run build:all` → parchea `demo/index.html` con boot canónico.

## Componentes v0

`AppLayout`, `AppLayoutSider`, `Button`, `Card`, `SpaRouter`, `SpaNavLink`, `MimicusSidebar`, `SpaOutlet`

## Clases layout

- `mimicus-app-layout`, `mimicus-app-layout-sider`
- Variables: `--mimicus-app-layout-sider-w`, `--mimicus-color`, `--mimicus-design-1`, etc.

## Skills de looks (en este repo)

Usar skills `mimicus-look-*` si existen; los estilos viven en `css/theme/*.css` bajo selectores `html[data-looknfeel]`.
