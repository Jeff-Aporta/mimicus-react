---
name: isp-playground-theming-qa
description: >-
  Revisión obligatoria de tematización en ISP-Svelte-Playground: validar que componentes,
  shell, catálogo y demo config se integren en todos los looks (contapyme, neon-glass,
  mac-liquidglass, w98, wxp, wvista, lab-dual, lab-triad) y paletas (Dodger, Vulcano,
  Natural) en light/dark. Usar al implementar o modificar UI, surfaces, CSS de look,
  catálogo, pickers o cualquier componente del playground.
---

# ISP Playground — QA de tematización

## Cuándo aplicar

**Siempre** al terminar cambios en:

- Componentes (`src/lib/**`)
- Shell / catálogo / demos (`src/playground/**`)
- Surfaces (`button.css`, `badge.css`, `*-surface.css`)
- Tokens de look (`playground-*-glass.css`, `playground-windows.css`, `pg-demo-config.css`)

## Contrato (resumen)

Índice de looks: [isp-playground-looknfeel](../isp-playground-looknfeel/SKILL.md).

| Eje | Atributo DOM | Valores |
|-----|--------------|---------|
| Look | `data-looknfeel` | 8 looks (esquema mono/dual/tríada **va dentro del look**, no picker aparte) |
| Paleta | `data-theme-color` | `hues-dodgerblue`, `vulcano`, `natural` |
| Luminancia | `data-luminance` | `light`, `dark` |

## Checklist obligatorio

Copiar y marcar antes de dar por cerrado un cambio de UI:

```
Theming QA:
- [ ] contapyme — light + dark (paleta por defecto)
- [ ] neon-glass — light + dark
- [ ] mac-liquidglass — light + dark
- [ ] w98 — light + dark
- [ ] wxp — light + dark (+ catálogo home)
- [ ] wvista — light + dark
- [ ] lab-dual — light + dark
- [ ] lab-triad — light + dark
- [ ] Paleta Vulcano en al menos 1 look Windows + 1 glass
- [ ] Sin texto ilegible (Card inline `color: var(--is-color)` bajo Windows)
- [ ] Demo CONFIGURACIÓN legible (`--pg-config-*` del look)
- [ ] Header pickers integrados (`.pg-content-header .pg-skin-picker`)
- [ ] Iconos acción header (compartir, doc, JSON) con `--pg-skin-chrome-fg`
- [ ] `npm run build` OK
```

## Áreas que suelen romperse

| Área | Archivo tokens | Señal de fallo |
|------|----------------|----------------|
| Catálogo home | `catalog-tokens.css` + override en `.catalog-home` por look | Tarjetas genéricas, acentos de paleta en wxp/w98 |
| Shell main | `playground-windows.css`, `playground-liquidglass.css`, … | Fondo/texto que no coincide con sidebar |
| Modal / dialog | look CSS + `Dialog.svelte` backdrop | Backdrop plano, chrome ajeno al look |
| Chips ACTIVO/INACTIVO | `button.css` / look CSS | No reaccionan en Windows looks |
| Scrollbars | `theme-color-palettes.css`, look CSS | Grosor/color distinto entre paneles |

## Patrón correcto

1. **Tokens en el bloque del look** (`html[data-looknfeel="wxp"] .catalog-home { --catalog-* }`), no hex sueltos en componentes.
2. **Windows:** `--pg-wxp-fg`, `--pg-wxp-surface`, `--pg-win-chrome-*` — no `--is-primary` en chrome/catálogo.
3. **Glass:** `--mlg-*`, `--neon-*`, `--isa-glass-*` según look.
4. **Catálogo:** sobrescribir **todos** los `--catalog-*` usados en `catalog-tokens.css` o reglas en el CSS del look.
5. **Componentes:** `data-variant` + `data-surface-color`; estilos en `lib/surfaces/` o `*-surface.css`.

## Si falta integración en un look

1. Leer skill del look en `.cursor/skills/isp-look-*/`.
2. Añadir tokens/reglas en el CSS del look (diff mínimo).
3. Repetir checklist en ese look + light/dark.

## Build

```bash
cd ISP-Svelte-Playground
npm run build
```
