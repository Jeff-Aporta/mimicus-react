---
name: isp-look-neon-glass
description: >-
  Guía look neon-glass en ISP-Svelte-Playground: glass, glows de color, cuadrícula,
  demo config y surfaces. Usar cuando data-looknfeel=neon-glass o el usuario mencione
  neon glass en el playground.
---

# Look: neon-glass

**Esquema:** tríada (`--is-design-active-1/2/3`).

## Estética

- **Glass:** transparencia + `backdrop-filter: blur() saturate()` — evitar fondos 100% opacos en cards/paneles.
- **Sombras:** glows cyan/blue/purple (`--neon-*`, `--isa-glass-shadow-*`). **Prohibido** sombras negras/grises en chrome y preview.
- **Preview:** cuadrícula neón en `.preview-viewport`; vignette de color, no `#000`.
- **Fondo:** `.pg-neon-bg` + mesh en `.jagu-ui-root::before`.

## CSS canónico

| Área | Archivo |
|------|---------|
| Shell, preview, catálogo | `src/playground/neon-glass/playground-glass.css` |
| Card/Button surfaces | `src/lib/neon-glass/ng-surface.css`, `src/lib/surfaces/button.css` |
| Demo config | `src/playground/theme/pg-demo-config.css` → bloque `neon-glass` |
| Tokens glass | `--isa-glass-bg-*`, `--isa-glass-shadow-*`, `--jagu-ui-glass-*` en `:root` de playground-glass.css |

## Demo config / inputs

Override solo tokens; no reglas sueltas salvo excepciones (w98 inset):

```css
html[data-looknfeel="neon-glass"] {
  --pg-config-field-bg: color-mix(in srgb, var(--isa-glass-bg-dark), transparent 46%);
  --pg-config-input-bg: color-mix(in srgb, var(--pg-config-field-bg), transparent 10%);
  --pg-config-input-backdrop: blur(10px) saturate(150%);
  --pg-config-input-shadow: 0 0 14px color-mix(in srgb, var(--neon-cyan), transparent 93%);
}
```

`CodeEditField` hereda `--pg-config-input-*` vía `pg-demo-config.css`.

## Card.svelte

Relieve inline gris → anular con `ng-surface.css` (`box-shadow: var(--isa-glass-shadow-*) !important`).

## Variantes neon

`ng-solid`, `ng-glass`, `glow` — ver `lib/neon-glass/ngVariants.ts` y `variantPalette.ts`.

## No hacer

- Vignette `#000` en AccordionDemo (usar `--pg-preview-vignette` de color).
- `rgba(0,0,0,…)` en hovers/glows.
- Fijar `--is-color` en preview/config (usar `--pg-text`, `--pg-wxp-*` solo en Windows).
