---
componente: Space
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Space

Espaciado uniforme entre hijos (estilo Ant Space). Cada hijo se envuelve en un item; opcionalmente inserta un separador entre ellos.

## Props
- `orientation` (`"horizontal"`|`"vertical"`, def `"horizontal"`); alternativa `vertical` (bool).
- `size` (number|string, def `"small"`): separación; presets `small`/`middle`/`medium`/`large`, número (px) o valor CSS.
- `wrap` (bool, def `false`): permite envoltura.
- `align` (string): `align-items`.
- `separator` (node): elemento intercalado entre hijos.
- `className`, `style`, `children`.

## Uso
import { Space } from "@jeff-aporta/mimicus-react/layout";
