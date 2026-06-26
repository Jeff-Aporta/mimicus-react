---
componente: Container
isla: layout
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Container

Centra el contenido con un max-width según breakpoint (estilo MUI Container) y gutters fluidos opcionales.

## Props
- `maxWidth` (string|number|false, def `"lg"`): breakpoint (xs/sm/md/lg/xl → px), valor CSS, número (px) o `false` para sin límite.
- `fixed` (bool, def `false`): ancho fijo del breakpoint.
- `disableGutters` (bool, def `false`): elimina el padding lateral fluido.
- `className`, `style`, `children`.

## Uso
import { Container } from "@jeff-aporta/mimicus-react/layout";
