---
isla: spa
subpath: "@jeff-aporta/mimicus-react/spa"
css: "@jeff-aporta/mimicus-react/spa.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla spa

Router de aplicación de página única (SPA) con el estado de navegación reflejado en la URL. Provee el router, enlaces, sidebar, outlet y hooks/utilidades para leer y escribir la ruta.

## Exporta
- `SpaRouter`, `SpaNavLink`, `SpaOutlet`, `MimicusSidebar`
- Hooks: `useSpa`, `useSpaRoute`
- Acceso a ruta: `getSpaRoute`, `setSpaRoute`
- Estado en URL: `urlState`

## Depende de
Isla `theme`.

## Uso
import { SpaRouter, SpaNavLink, useSpa } from "@jeff-aporta/mimicus-react/spa";
// + cargar el CSS: @jeff-aporta/mimicus-react/spa.css
