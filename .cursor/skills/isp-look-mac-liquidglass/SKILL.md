---
name: isp-look-mac-liquidglass
description: >-
  Guía look mac-liquidglass en ISP-Svelte-Playground. Usar con data-looknfeel=mac-liquidglass,
  blur tipo macOS, bordes claros y sombras suaves.
---

# Look: mac-liquidglass

**Esquema:** dual.

## Estética

- Frosted glass macOS: `--mlg-fill`, `--mlg-border`, `--mlg-blur`, `--mlg-shadow-sm/lg`.
- Bordes `color-mix(in srgb, white, transparent …)`; highlights inset superiores.
- Radios generosos (~0.75rem en config).

## CSS

| Área | Archivo |
|------|---------|
| Shell | `src/playground/mac-liquidglass/playground-liquidglass.css` |
| Demo config | `pg-demo-config.css` → bloque `mac-liquidglass` |
| Skin toggles | `pg-skin-toggles.css` → sección mlg |

## Demo config / inputs

```css
html[data-looknfeel="mac-liquidglass"] {
  --pg-config-field-bg: var(--mlg-fill, color-mix(in srgb, var(--is-bg-secondary), transparent 28%));
  --pg-config-input-bg: color-mix(in srgb, var(--pg-config-field-bg), transparent 12%);
  --pg-config-input-backdrop: blur(16px) saturate(165%);
}
```

Cards config usan `backdrop-filter: var(--mlg-blur)`.

## No hacer

- Glow neon ni cuadrícula cyber.
- Sombras duras tipo Windows 98.
