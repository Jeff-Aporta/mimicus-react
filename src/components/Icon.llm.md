---
componente: Icon
isla: primitives
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Icon

Wrapper de `<iconify-icon>` (web component) para renderizar íconos por nombre en React. Devuelve `null` si no hay `icon`.

## Props
- `icon` (string): nombre del ícono Iconify (p.ej. `"mdi:close"`). Requerido para renderizar.
- `className` (string): clase CSS.
- `style` (object): estilos en línea (se ignora si no es objeto).

## Uso
import { Icon } from "@jeff-aporta/mimicus-react/primitives";
