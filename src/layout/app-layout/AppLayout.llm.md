---
componente: AppLayout
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# AppLayout

Estructura de aplicación basada en slots colocados sobre CSS grid. Detecta hijos `AppLayout.Header`, `AppLayout.Sider`, `AppLayout.Footer` (vía marca `__appLayoutSlot`); el resto va al área de contenido. Expone `Header` (con `.Brand/.Center/.Tools/.Nav`), `Sider` y `Footer`.

## Props (AppLayout)
- `variant` (string, def `"top"`): disposición del grid (p.ej. header arriba vs sider lateral).
- `fixedHeader` (bool), `fixedSider` (bool): fijan header/sider.
- `responsive` (bool, def `true`): aplica plantilla de grid responsive.
- `responsiveDrawer` (bool): el sider se comporta como drawer en pantallas estrechas.
- `className`, `style`, `children`.

## Sider (AppLayout.Sider)
- `width`, `collapsed`, `collapsible`, `collapsedWidth`, `theme`, `onCollapse`: si se define alguno, envuelve en `AppLayoutSider`; si no, renderiza los children tal cual.

## Uso
import { AppLayout } from "@jeff-aporta/mimicus-react/layout";
