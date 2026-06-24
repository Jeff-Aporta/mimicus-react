---
name: jagu-react-ui
description: >-
  UI React temática personal (jagudeloe-react-ui). Contrato html data-luminance/theme-color/design-scheme/looknfeel;
  componentes data-variant + data-surface-color; tokens --jagu-*; CDN window.JaguUI.
---

# jagudeloe-react-ui

Biblioteca UI React personal — **CSS-first**: JS solo escribe atributos en `<html>` y `data-*` en superficies.

## CDN

- CSS: `cdn/jagu-ui.min.css`
- JS: `cdn/jagu-ui.min.js` → `globalThis.JaguUI`
- API: `JaguUI.bootJaguUI()`, `applyTheme`, `applyLooknfeel`

## Componentes v0

`AppLayout`, `AppLayoutSider`, `Button`, `Card`, `SpaRouter`, `SpaNavLink`, `JagSidebar`, `SpaOutlet`

## Clases layout

- `jagu-app-layout`, `jagu-app-layout-sider`
- Variables: `--jagu-app-layout-sider-w`, `--jagu-color`, `--jagu-design-1`, etc.

## Skills de looks (en este repo)

Usar skills `jagu-look-*` si existen; los estilos viven en `css/theme/*.css` bajo selectores `html[data-looknfeel]`.
