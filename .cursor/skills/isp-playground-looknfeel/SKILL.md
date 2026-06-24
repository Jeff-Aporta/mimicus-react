---
name: isp-playground-looknfeel
description: >-
  Índice de looks del ISP-Svelte-Playground (data-looknfeel). Usar al tocar estilos
  por look, demo config, surfaces, inputs, preview o chrome del shell. Enruta a la
  skill específica del look activo. Tras cambios de UI, ejecutar siempre
  isp-playground-theming-qa.
---

# ISP Playground — looks & feel

## QA obligatorio

Antes de cerrar cualquier cambio visual, seguir [isp-playground-theming-qa](../isp-playground-theming-qa/SKILL.md) (todos los looks × paletas × luminancia).

## Contrato global

- **Activación:** solo `html[data-looknfeel="…"]` — nunca clases sueltas en `<body>`.
- **Tematización:** `data-luminance`, `data-theme-color`, `data-design-scheme` en `<html>`.
- **Componentes:** `data-variant` + `data-surface-color` (o `--surface-accent`); ver `lib/theme/theming.css`.
- **Demo config (CONFIGURACIÓN):** tokens en `playground/theme/pg-demo-config.css`:
  - `--pg-config-section-*` — card contenedora
  - `--pg-config-field-*` — tiles de campo (`pg-demo-config-card`)
  - `--pg-config-input-*` — inputs inline (`CodeEditField`, number, autocomplete) — **derivar del field con `color-mix` + alpha**, no colores sueltos
- **Regla:** inputs y surfaces del mismo look deben compartir la misma familia de tokens; el impacto de un cambio se limita ajustando el mix por look.

## Skills por look

| Look | Skill | CSS principal |
|------|-------|----------------|
| `contapyme` | [isp-look-contapyme](../isp-look-contapyme/SKILL.md) | `playground/theme/playground-contapyme.css` (si existe), `pg-demo-config.css` |
| `neon-glass` | [isp-look-neon-glass](../isp-look-neon-glass/SKILL.md) | `playground/neon-glass/playground-glass.css`, `lib/neon-glass/ng-surface.css` |
| `mac-liquidglass` | [isp-look-mac-liquidglass](../isp-look-mac-liquidglass/SKILL.md) | `playground/mac-liquidglass/playground-liquidglass.css` |
| `w98` / `wxp` / `wvista` | [isp-look-windows](../isp-look-windows/SKILL.md) | `playground/theme/playground-windows.css`, `lib/windows-looks/windows-surfaces.css` |
| `lab-dual` / `lab-triad` | [isp-look-lab](../isp-look-lab/SKILL.md) | `playground/theme/playground-scheme-lab.css` |

## Workflow agente

1. Identificar `data-looknfeel` del bug o feature.
2. Leer la skill del look **antes** de editar CSS.
3. Preferir **tokens** (`--pg-config-input-bg`, `--isa-glass-*`, `--pg-wxp-*`) sobre hex/rgba fijos.
4. Para demo config: tocar `pg-demo-config.css` primero; el look puede solo override `--pg-config-*`.
5. No mezclar paleta (`--is-primary`) en chrome Windows — usar `--pg-wxp-fg`, `--pg-win-chrome-*`.
6. Build: `npm run build` en `ISP-Svelte-Playground`.

## Archivos transversales

- `playground/theme/pg-demo-config.css` — config + inputs
- `playground/theme/pg-skin-toggles.css` — pickers header
- `components/preview/CodeEditField.svelte` — consume `--pg-config-input-*`
- `lib/looknfeel/looknfeel.ts` — ids y esquema por look
