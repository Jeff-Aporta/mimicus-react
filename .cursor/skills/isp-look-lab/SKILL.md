---
name: isp-look-lab
description: >-
  Guía looks lab-dual y lab-triad en ISP-Svelte-Playground. Usar para verificar esquemas
  de diseño (--is-design-active-*) y contraste de acentos 1/2/3.
---

# Looks: lab-dual · lab-triad

Labs para QA visual de **esquema de color** (no looks de producto finales).

## Esquema

| Look | `data-design-scheme` | Acentos activos |
|------|---------------------|-----------------|
| `lab-dual` | dual | `--is-design-active-1`, `-2` |
| `lab-triad` | triad | `-1`, `-2`, `-3` |

Definición en `lib/theme/design-scheme.css` y `looknfeel.ts` → `LOOKNFEEL_DESIGN_SCHEME`.

## CSS

`src/playground/theme/playground-scheme-lab.css` — sidebar, header, títulos con gradiente entre activos.

## Demo config

```css
html[data-looknfeel="lab-dual"],
html[data-looknfeel="lab-triad"] {
  --pg-config-field-bg: color-mix(in srgb, var(--is-bg-readonly), var(--is-bg-secondary) 42%);
  --pg-config-input-bg: color-mix(in srgb, var(--pg-config-field-bg), var(--is-design-active-1) 6%);
}
```

Hover inputs: tinte `--is-design-active-2` (triad añade ring con active-3).

## Uso

- Validar que cambiar paleta actualiza `--is-design-active-*` en chips y header.
- No usar como referencia de glass/neon/Windows.
