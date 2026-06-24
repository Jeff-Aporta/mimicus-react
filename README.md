# Mimicus React

`@jeff-aporta/mimicus-react` — biblioteca UI React personal de Jeff-Aporta, tematización CSS-first y consumo por **CDN** (`window.MimicusUI`).

## Contrato de tematización

Atributos en `<html>`:

| Atributo | Valores |
|----------|---------|
| `data-luminance` | `light` \| `dark` |
| `data-theme-color` | 13 paletas (`hues-dodgerblue`, `vulcano`, …) |
| `data-design-scheme` | `mono` \| `dual` \| `triad` |
| `data-looknfeel` | `contapyme`, `neon-*`, `mac-liquidglass`, `w*`, `lab-*` |

Componentes usan `data-variant` + `data-surface-color`. Tokens CSS: `--mimicus-*`.

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@main/cdn/mimicus-ui.min.css" />
<script src="https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@main/cdn/mimicus-ui.min.js"></script>
<script>
  MimicusUI.bootMimicusUI();
  const { AppLayout, Button, Card, SpaRouter } = MimicusUI;
</script>
```

Requiere React 18 global (`React`, `ReactDOM.createRoot`) vía import map o script previo. **Sin MUI.**

## Desarrollo ESM (`import from`) — meta

Todas las apps usan **`type="module"`** e imports nombrados; sin `globalThis.MimicusUI` en código de aplicación.

### index.html (head)

```html
<script src="cdn/mimicus-snippets.min.js"></script>
<script>MimicusBootstrap.loadCDNs("stack-esm");</script>
<script type="module" src="js/boot/loader.mjs"></script>
```

`stack-esm` escribe preconnect, importmap (React + `@jeff-aporta/mimicus-react`) y CSS.

### App.jsx (módulo de la app)

```jsx
import { useState } from "react";
import { AppLayout, Button, ThemeProvider, bootMimicusUI } from "@jeff-aporta/mimicus-react";

export function App() { /* ... */ }
```

### loader.mjs

```js
import React from "react";
import { createRoot } from "react-dom/client";
import { bootMimicusUI } from "@jeff-aporta/mimicus-react";
import { App } from "../_dist/app.esm.js";

bootMimicusUI();
createRoot(document.getElementById("root")).render(React.createElement(App));
```

Build app: `npm run build:demo` → `demo/_dist/app.esm.js` (externals: react + librería).

### Paquete

| Import | Archivo CDN |
|--------|-------------|
| `@jeff-aporta/mimicus-react` | `mimicus-react.esm.min.js` |
| `@jeff-aporta/mimicus-react/bootstrap` | `mimicus-react.bootstrap.esm.min.js` |

Legacy IIFE (`mimicus-ui.min.js`, `MimicusUI`) sigue en build por compatibilidad.

## CDN bootstrap (`MimicusBootstrap.loadCDNs`)

```html
<script src="cdn/mimicus-snippets.min.js"></script>
<script>
  MimicusBootstrap.loadCDNs("stack-esm");
</script>
```

Grupos: `stack-mimicus` (mínimo), `stack-mui` (React+MUI+babel+iconify), o claves sueltas.

## Snippets (boot + fluidCss)

Pantalla de carga estándar `mimicus-app-boot` para todas las apps GH Pages — prefijo `mimicus-*`.

```html
<!-- Solo snippets (sin React) -->
<script src="cdn/mimicus-snippets.min.js"></script>
<script>
  document.write('<style>' + MimicusSnippets.bootCssText() + '</style>');
  document.write(MimicusSnippets.bootHtmlInner({ icon: 'mdi:react', name: 'Mi App', label: 'Cargando…' }));
</script>
```

O CSS externo: `cdn/app-boot.min.css` + markup de `buildRootBlock()`.

API: `fluidCss` / `js2css`, `patchIndexRoot`, `writeAppBoot`, `buildThemeInitInline`.

## Build

```bash
npm install
npm run build        # cdn/mimicus-ui.min.js + mimicus-snippets + app-boot.min.css
npm run build:demo   # demo/_dist/app.min.js (ESM) + parche index boot
npm run build:all    # ambos
```

## Hola mundo (v0)

- `AppLayout` responsive (`side`, `top`, `top-side-2`)
- `AppLayoutSider` + `MimicusSidebar`
- `Button`, `Card`
- `SpaRouter` / `SpaNavLink` / `SpaOutlet` (`?s=` base64url)
- Fundación CSS: paletas y looks completos

Demo: https://jeff-aporta.github.io/mimicus-react/
