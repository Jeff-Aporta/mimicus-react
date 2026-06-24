---
name: isp-look-windows
description: >-
  Guía looks Windows (w98, wxp, wvista) en ISP-Svelte-Playground. Usar con data-looknfeel
  w98/wxp/wvista, legibilidad chrome, surfaces wxp y demo config sin fugas de paleta.
---

# Looks: Windows (w98 · wxp · wvista)

**Esquema:** mono en los tres.

## Principio

Chrome y demo usan **tokens Windows** (`--pg-wxp-*`, `--pg-w98-*`, `--pg-vista-*`, `--pg-win-chrome-*`), **no** `--is-primary` / paleta en sidebar, header, config ni preview.

**Degradados titlebar:** rampas `--pg-win-*` en `color-transform.css` (OKLCH desde `--is-primary` con misma intensidad Luna; Vulcano/Natural/Dodger cambian matiz automáticamente).

## CSS

| Look | Archivo principal |
|------|-------------------|
| w98 / wxp / wvista shell | `playground/theme/playground-windows.css` |
| Botones/cards wxp | `lib/windows-looks/windows-surfaces.css` |
| Demo config | `pg-demo-config.css` → bloques `w98`, `wxp`, `wvista` |

## Demo config / inputs

Tokens por look en `pg-demo-config.css`:

- **w98:** `--pg-w98-surface-deep`, bevel inset en inputs (`border: 2px inset`), radius 0.
- **wxp:** `--pg-wxp-surface`, borde `--pg-wxp-border`, inset shadow ligero.
- **wvista:** `--pg-vista-surface`, blur en cards, borde glass.

### Skin pickers (header)

Dropdown `.pg-skin-picker__panel` usa `--pg-skin-panel-fg` / `--pg-skin-panel-fg-emphasis` según fondo del panel, **no** `--is-color` global (evita texto claro sobre panel gris w98 en dark).

Dark wxp: `--pg-wxp-fg`, `--pg-wxp-surface` para texto y fondos en config (override descendientes de Card inline).

## Legibilidad

Si texto ilegible en dark wxp: revisar `Card` inline `color:` y reglas en `playground-windows.css` para `.demo-config-shell .card-root *`.

## No hacer

- Gradientes neon ni `--neon-*`.
- Depender de `--is-color` en preview/config bajo looks Windows.
