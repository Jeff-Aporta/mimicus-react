# @jeff-aporta/jagudeloe-react-ui

Biblioteca UI React personal de Jeff-Aporta — tematización CSS-first y consumo por **CDN** (`window.JaguUI`).

## Contrato de tematización

Atributos en `<html>`:

| Atributo | Valores |
|----------|---------|
| `data-luminance` | `light` \| `dark` |
| `data-theme-color` | 13 paletas (`hues-dodgerblue`, `vulcano`, …) |
| `data-design-scheme` | `mono` \| `dual` \| `triad` |
| `data-looknfeel` | `contapyme`, `neon-*`, `mac-liquidglass`, `w*`, `lab-*` |

Componentes usan `data-variant` + `data-surface-color`. Tokens CSS: `--jagu-*`.

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Jeff-Aporta/jagudeloe-react-ui@main/cdn/jagu-ui.min.css" />
<script src="https://cdn.jsdelivr.net/gh/Jeff-Aporta/jagudeloe-react-ui@main/cdn/jagu-ui.min.js"></script>
<script>
  JaguUI.bootJaguUI();
  const { AppLayout, Button, Card, SpaRouter } = JaguUI;
</script>
```

Requiere React 18 global (`React`, `ReactDOM.createRoot`) vía import map o script previo. **Sin MUI.**

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
- Fundación CSS: paletas y looks completos

Demo: https://jeff-aporta.github.io/jagudeloe-react-ui/
