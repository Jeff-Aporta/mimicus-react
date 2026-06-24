---
name: jagu-react-ui
description: UI React temática InSoft (jagudeloe-react-ui). Contrato html data-luminance/theme-color/design-scheme/looknfeel; componentes data-variant + data-surface-color. CDN window.ISAComponents.JaguUI. Guía ISP-Svelte-Playground.
---

# jagudeloe-react-ui

Port React del ISP-Svelte-Playground. **CSS-first**: JS solo escribe atributos en `<html>` y `data-*` en superficies.

## Contrato

- Global: `data-luminance`, `data-theme-color`, `data-design-scheme`, `data-looknfeel`
- Superficies: `data-variant`, `data-surface-color` (o `--surface-accent` inline)
- API: `ISAComponents.JaguUI.bootJaguUI()`, `applyTheme`, `applyLooknfeel`

## Componentes v0

- `AppLayout` + `AppLayout.Header|Sider|Footer`, `AppLayoutSider`, `AppLayoutProvider`
- `Button`, `Card`
- `SpaRouter`, `SpaNavLink`, `SpaOutlet` — ruta en `?s=` (JSON base64url, campo `r`)

## CSS

Fuente en `css/isp/` (copiado del ISP). No duplicar tokens; extender en `css/components/`.

## Skills ISP relacionados

En `.cursor/skills/`: `isp-playground-looknfeel`, `isp-look-*`, `isp-playground-theming-qa`.

## Build

```bash
npm run build       # cdn/jagu-ui.min.js + .css
npm run build:demo
```
