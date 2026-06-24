---
name: isp-look-contapyme
description: >-
  Guía look contapyme (default) en ISP-Svelte-Playground. Usar con data-looknfeel=contapyme
  o estilos base del producto sin chrome Windows ni glass extremo.
---

# Look: contapyme

**Esquema:** tríada. **Default** del playground (`LOOKNFEEL_DEFAULT`).

## Estética

- Superficies semánticas vía paleta `--is-*` y `data-variant`.
- Sin glass agresivo ni glow neon; sombras suaves con `color-mix` de `--is-color`.
- Legibilidad: texto con `--is-color`, fondos `--is-bg-primary/secondary`.

## CSS

| Área | Archivo |
|------|---------|
| Demo config | `pg-demo-config.css` → bloque `contapyme` |
| Botones base | `lib/surfaces/button.css` (bloque contapyme) |
| Paletas | `playground/theme/theme-color-palettes.css` |

## Demo config / inputs

```css
html[data-looknfeel="contapyme"] {
  --pg-config-field-bg: color-mix(in srgb, var(--is-bg-readonly), var(--is-bg-secondary) 40%);
  --pg-config-input-bg: color-mix(in srgb, var(--pg-config-field-bg), var(--is-bg-readonly) 38%);
}
```

Inputs deben verse como el tile de campo (mismo tono, ligero mix con readonly).

## No hacer

- Copiar reglas de neon-glass o Windows sin adaptar tokens.
- Hardcodear dodgerblue fuera de paletas CSS.
