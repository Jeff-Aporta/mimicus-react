# @jeff-aporta/jagudeloe-react-ui

UI React temática InSoft — port del contrato de [ISP-Svelte-Playground](https://github.com/Jeff-Aporta/ISP-Svelte-Playground). Consumo principal por **CDN** (`window.ISAComponents.JaguUI`).

## Contrato de tematización

Atributos en `<html>`:

| Atributo | Valores |
|----------|---------|
| `data-luminance` | `light` \| `dark` |
| `data-theme-color` | 13 paletas (`hues-dodgerblue`, `vulcano`, …) |
| `data-design-scheme` | `mono` \| `dual` \| `triad` |
| `data-looknfeel` | `contapyme`, `neon-*`, `mac-liquidglass`, `w*`, `lab-*` |

Componentes usan `data-variant` + `data-surface-color`.

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Jeff-Aporta/jagudeloe-react-ui@<ref>/cdn/jagu-ui.min.css" />
<script src="https://cdn.jsdelivr.net/gh/Jeff-Aporta/jagudeloe-react-ui@<ref>/cdn/jagu-ui.min.js"></script>
<script>
  ISAComponents.JaguUI.bootJaguUI();
  const { AppLayout, Button, Card, SpaRouter } = ISAComponents.JaguUI;
</script>
```

Requiere React 18 global (`React`, `ReactDOM.createRoot`) vía import map o script previo. **Sin MUI ni front-shared.**

## Build

```bash
npm install
npm run build        # cdn/jagu-ui.min.js + jagu-ui.min.css
npm run build:demo   # demo/_dist/app.min.js
```

## Hola mundo (v0)

- `AppLayout` responsive (`side`, `top`, `top-side-2`)
- `AppLayoutSider` + `JagSidebar`
- `Button`, `Card`
- `SpaRouter` / `SpaNavLink` / `SpaOutlet` (`?s=` base64url)
- Fundación CSS: todas las paletas y looks del ISP

Skills de look & feel del ISP copiados en `.cursor/skills/`.
