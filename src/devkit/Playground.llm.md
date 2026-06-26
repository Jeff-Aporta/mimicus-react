---
componente: Playground
subpath: "@jeff-aporta/mimicus-react/devkit"
css: "@jeff-aporta/mimicus-react/devkit.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# `<Playground>` (componente raíz del devkit)

`<Playground>` es el componente público raíz del playground: monta el shell completo (cabecera, navegación, panel lateral y área de contenido), resuelve la ruta desde el estado en URL y renderiza la vista correspondiente (catálogo, sección, demo individual o el laboratorio de paleta/look). Es el punto de entrada para que una app consumidora levante un playground/catálogo de componentes a partir de sus propios datos.

## Props
Recibe el catálogo y los metadatos por props:

- `catalog` (array, por defecto `[]`): items del catálogo a renderizar; se filtran los componentes "stub" (no implementados).
- `catalogMeta`: metadatos del catálogo.
- `sectionsMeta`: metadatos de secciones (orden, etiquetas, colores).
- `shellConfig`: configuración del shell/navegación.
- `previewTemplates`: plantillas de preview.
- `brand`: marca (nombre, etc.).

## Inyección de datos
Al renderizar, `<Playground>` llama internamente a `configurePlayground({ catalogMeta, sectionsMeta, shellConfig, previewTemplates, brand })`, de modo que esos datos quedan disponibles vía `playgroundData()` para el resto del motor (driver, renderers, shell). Es decir: los datos se inyectan en runtime, no se importan estáticamente.

## Vistas que resuelve
- Catálogo (home), por defecto cuando no hay categoría ni slug.
- Vista de sección (categoría sin slug).
- Demo individual (categoría + slug) renderizada con `DemoPage`.
- Laboratorio de paleta/look (`ThemeLab`) cuando la ruta es `palette`.
- Modo embed cuando la ruta lo indica.

## Uso
import { Playground } from "@jeff-aporta/mimicus-react/devkit";

<Playground
  catalog={catalogItems}
  catalogMeta={catalogMeta}
  sectionsMeta={sectionsMeta}
  shellConfig={shellConfig}
  previewTemplates={previewTemplates}
  brand={brand}
/>;
// + cargar el CSS: @jeff-aporta/mimicus-react/devkit.css
