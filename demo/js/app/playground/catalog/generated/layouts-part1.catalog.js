/** Auto-generado — Layouts (parte 1/2) */
export const items = [
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "app-layout",
    "id": "AppLayout",
    "label": "AppLayout",
    "displayLabel": "AppLayout",
    "path": "demos/lib/AppLayout.json",
    "definition": {
      "id": "AppLayout",
      "category": "Layouts",
      "label": "AppLayout",
      "titleIcon": "mdi:view-dashboard-outline",
      "status": "approved",
      "intro": "Layout de aplicación (Ant Design Layout): compuesto por <code>AppLayout</code>, <code>AppLayout.Header</code> (zonas <code>Brand</code>, <code>Center</code>, <code>Tools</code>), <code>AppLayout.Sider</code>, contenido y <code>AppLayout.Footer</code>. La distribución se define con la prop <code>variant</code> y CSS <code>grid-template</code>.",
      "component": {
        "name": "AppLayout",
        "path": "src/lib/containers/layout/AppLayout.svelte"
      },
      "preview": {
        "template": "layout-app"
      },
      "shell": {
        "relieve": 60,
        "configBlockCount": 2
      },
      "state": {
        "variant": "side",
        "fixedHeader": false,
        "fixedSider": false,
        "siderTheme": "dark",
        "siderCollapsible": true,
        "siderCollapsed": false,
        "siderWidth": 200
      },
      "details": {
        "brandLabel": "Brand",
        "headerLabel": "Center",
        "toolsLabel": "Tools",
        "contentLabel": "Content",
        "footerLabel": "Footer",
        "siderLabel": "Sider"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:view-dashboard-outline",
          "attrType": "str",
          "enumValue": {
            "side · Panel izquierdo": "side",
            "top-side-2 · Panel derecho": "top-side-2"
          }
        },
        {
          "kind": "select-enum",
          "key": "siderTheme",
          "label": "sider theme",
          "labelIcon": "mdi:theme-light-dark",
          "attrType": "str",
          "enumValue": {
            "dark": "dark",
            "light": "light"
          }
        },
        {
          "kind": "number",
          "key": "siderWidth",
          "label": "siderWidth",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "min": 120,
          "max": 320,
          "step": 8
        },
        {
          "kind": "switch-group",
          "key": "sider",
          "label": "Sider",
          "labelIcon": "mdi:dock-left",
          "switches": [
            {
              "key": "siderCollapsible",
              "label": "collapsible",
              "iconOn": "mdi:dock-left",
              "iconOff": "mdi:dock-right",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "siderCollapsed",
              "label": "collapsed",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        },
        {
          "kind": "switch-group",
          "key": "fixed",
          "label": "Fixed",
          "labelIcon": "mdi:pin",
          "switches": [
            {
              "key": "fixedHeader",
              "label": "fixedHeader",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "fixedSider",
              "label": "fixedSider",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "brandLabel",
          "label": "Brand",
          "labelIcon": "mdi:tag-outline"
        },
        {
          "kind": "text",
          "key": "headerLabel",
          "label": "Center",
          "labelIcon": "mdi:page-layout-header"
        },
        {
          "kind": "text",
          "key": "toolsLabel",
          "label": "Tools",
          "labelIcon": "mdi:tune-variant"
        },
        {
          "kind": "text",
          "key": "contentLabel",
          "label": "Content",
          "labelIcon": "mdi:file-document-outline"
        },
        {
          "kind": "text",
          "key": "footerLabel",
          "label": "Footer",
          "labelIcon": "mdi:page-layout-footer"
        },
        {
          "kind": "text",
          "key": "siderLabel",
          "label": "Sider",
          "labelIcon": "mdi:dock-left"
        }
      ],
      "presets": [
        {
          "label": "Panel izquierdo",
          "icon": "mdi:view-compact-outline",
          "state": {
            "variant": "side",
            "fixedHeader": false,
            "fixedSider": true,
            "siderTheme": "dark",
            "siderCollapsible": true,
            "siderCollapsed": false,
            "siderWidth": 200
          },
          "details": {
            "headerLabel": "Header",
            "contentLabel": "Content",
            "footerLabel": "Footer",
            "siderLabel": "Nav"
          }
        },
        {
          "label": "Panel derecho",
          "icon": "mdi:dock-right",
          "state": {
            "variant": "top-side-2",
            "fixedHeader": false,
            "fixedSider": false,
            "siderTheme": "light",
            "siderCollapsible": true,
            "siderCollapsed": false,
            "siderWidth": 180
          },
          "details": {
            "headerLabel": "Header",
            "contentLabel": "Content",
            "footerLabel": "Footer",
            "siderLabel": "Sider"
          }
        },
        {
          "label": "Header fijo",
          "icon": "mdi:pin",
          "state": {
            "variant": "side",
            "fixedHeader": true,
            "fixedSider": false,
            "siderTheme": "dark",
            "siderCollapsible": true,
            "siderCollapsed": false,
            "siderWidth": 200
          },
          "details": {
            "headerLabel": "Fixed Header",
            "contentLabel": "Scroll content…",
            "footerLabel": "Footer",
            "siderLabel": "Nav"
          }
        }
      ],
      "tests": "extras/AppLayoutTests.svelte",
      "code": {
        "strategy": "applayout-pattern",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "block-layout",
    "id": "BlockLayout",
    "label": "BlockLayout",
    "displayLabel": "BlockLayout",
    "path": "demos/lib/BlockLayout.json",
    "definition": {
      "id": "BlockLayout",
      "category": "Layouts",
      "label": "BlockLayout",
      "titleIcon": "mdi:view-quilt-outline",
      "status": "pending",
      "intro": "Base compartida para componentes tipo bloque. Expone <code>sizew</code> por slot y respeta modo <code>inline</code>.",
      "component": {
        "name": "BlockLayout",
        "path": "src/lib/containers/layout/BlockLayout.svelte"
      },
      "preview": {
        "template": "layout-block"
      },
      "state": {
        "inline": false
      },
      "details": {
        "itemCount": 1
      },
      "fields": [
        {
          "kind": "switch",
          "key": "inline",
          "label": "inline",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "labelIcon": "mdi:numeric",
          "min": 1,
          "max": 50,
          "step": 1
        }
      ],
      "code": {
        "strategy": "block-layout"
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "box",
    "id": "Box",
    "label": "Box",
    "displayLabel": "Box",
    "path": "demos/lib/Box.json",
    "definition": {
      "id": "Box",
      "category": "Layouts",
      "label": "Box",
      "titleIcon": "mdi:checkbox-blank-outline",
      "status": "approved",
      "intro": "Contenedor genérico theme-aware (MUI <code>Box</code>): <code>component</code>, className y style.",
      "component": {
        "name": "Box",
        "path": "src/layout/Box.jsx"
      },
      "preview": {
        "template": "layout-block"
      },
      "state": {},
      "details": {
        "itemCount": 2
      },
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "min": 1,
          "max": 6,
          "step": 1
        }
      ],
      "code": {
        "strategy": "default",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "container",
    "id": "Container",
    "label": "Container",
    "displayLabel": "Container",
    "path": "demos/lib/Container.json",
    "definition": {
      "id": "Container",
      "category": "Layouts",
      "label": "Container",
      "titleIcon": "mdi:arrow-collapse-horizontal",
      "status": "approved",
      "intro": "Centra el contenido con <code>maxWidth</code> fluido (MUI Container).",
      "component": {
        "name": "Container",
        "path": "src/layout/Container.jsx"
      },
      "preview": {
        "template": "layout-block",
        "options": {
          "wrapperStyle": "width: 100%;"
        }
      },
      "state": {
        "maxWidth": "md"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "maxWidth",
          "label": "maxWidth",
          "enumValue": {
            "xs": "xs",
            "sm": "sm",
            "md": "md",
            "lg": "lg",
            "xl": "xl"
          }
        }
      ],
      "code": {
        "strategy": "default",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "divider",
    "id": "Divider",
    "label": "Divider",
    "displayLabel": "Divider",
    "path": "demos/lib/Divider.json",
    "definition": {
      "id": "Divider",
      "category": "Layouts",
      "label": "Divider",
      "titleIcon": "mdi:minus",
      "status": "approved",
      "intro": "Línea separadora horizontal o vertical (estilo Ant Design Divider): variantes <code>solid</code>/<code>dashed</code>/<code>dotted</code>, texto en el centro o alineado (<code>titlePlacement</code>), estilo <code>plain</code> y espaciado <code>size</code>. Combina con FlexLayout, GridLayout, BlockLayout y Splitter.",
      "component": {
        "name": "Divider",
        "path": "src/lib/containers/layout/Divider.svelte"
      },
      "preview": {
        "template": "layout-divider"
      },
      "shell": {
        "relieve": 55,
        "configBlockCount": 2
      },
      "state": {
        "orientation": "horizontal",
        "variant": "solid",
        "titlePlacement": "center",
        "plain": false,
        "dashed": false
      },
      "details": {
        "showTitle": true,
        "title": "Sección",
        "orientationMargin": ""
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "orientation",
          "label": "orientation",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Horizontal": "horizontal",
            "Vertical": "vertical"
          }
        },
        {
          "kind": "select-enum",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:line-style",
          "attrType": "str",
          "enumValue": {
            "Solid": "solid",
            "Dashed": "dashed",
            "Dotted": "dotted",
            "Neon glow": "glow"
          }
        },
        {
          "kind": "select-enum",
          "key": "titlePlacement",
          "label": "titlePlacement",
          "labelIcon": "mdi:format-align-center",
          "attrType": "str",
          "enumValue": {
            "start": "start",
            "center": "center",
            "end": "end"
          }
        },
        {
          "kind": "switch-group",
          "key": "estilos",
          "label": "Estilo",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "plain",
              "label": "plain",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "dashed",
              "label": "dashed (legacy)",
              "iconOn": "mdi:border-style",
              "iconOff": "mdi:border-none-variant",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "switch",
          "key": "showTitle",
          "label": "Texto en divider"
        },
        {
          "kind": "text",
          "key": "title",
          "label": "title",
          "labelIcon": "mdi:text-short",
          "placeholder": "Etiqueta del separador"
        },
        {
          "kind": "text",
          "key": "orientationMargin",
          "label": "orientationMargin",
          "labelIcon": "mdi:format-indent-increase",
          "placeholder": "ej: 0, 48px, 12%",
          "normalize": "cssLength"
        }
      ],
      "presets": [
        {
          "label": "Horizontal sólido",
          "icon": "mdi:minus",
          "state": {
            "orientation": "horizontal",
            "variant": "solid",
            "titlePlacement": "center",
            "plain": false,
            "size": "medium",
            "dashed": false
          },
          "details": {
            "showTitle": false,
            "title": "",
            "orientationMargin": ""
          }
        },
        {
          "label": "Con título",
          "icon": "mdi:format-title",
          "state": {
            "orientation": "horizontal",
            "variant": "solid",
            "titlePlacement": "center",
            "plain": false,
            "size": "medium",
            "dashed": false
          },
          "details": {
            "showTitle": true,
            "title": "Sección A",
            "orientationMargin": ""
          }
        },
        {
          "label": "Título start plain",
          "icon": "mdi:format-align-left",
          "state": {
            "orientation": "horizontal",
            "variant": "solid",
            "titlePlacement": "start",
            "plain": true,
            "size": "medium",
            "dashed": false
          },
          "details": {
            "showTitle": true,
            "title": "Izquierda",
            "orientationMargin": "0"
          }
        },
        {
          "label": "Vertical en fila",
          "icon": "mdi:drag-vertical-variant",
          "state": {
            "orientation": "vertical",
            "variant": "solid",
            "titlePlacement": "center",
            "plain": false,
            "size": "medium",
            "dashed": false
          },
          "details": {
            "showTitle": false,
            "title": "",
            "orientationMargin": ""
          }
        },
        {
          "label": "Dashed large",
          "icon": "mdi:dots-horizontal",
          "state": {
            "orientation": "horizontal",
            "variant": "dashed",
            "titlePlacement": "center",
            "plain": false,
            "size": "large",
            "dashed": true
          },
          "details": {
            "showTitle": true,
            "title": "Dashed",
            "orientationMargin": ""
          }
        },
        {
          "label": "Dotted end",
          "icon": "mdi:dots-horizontal-circle-outline",
          "state": {
            "orientation": "horizontal",
            "variant": "dotted",
            "titlePlacement": "end",
            "plain": true,
            "size": "small",
            "dashed": false
          },
          "details": {
            "showTitle": true,
            "title": "Fin",
            "orientationMargin": "3rem"
          }
        }
      ],
      "tests": "extras/DividerLayoutTests.svelte",
      "code": {
        "strategy": "divider-layout",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "flex-layout",
    "id": "FlexLayout",
    "label": "FlexLayout",
    "displayLabel": "FlexLayout",
    "path": "demos/lib/FlexLayout.json",
    "definition": {
      "id": "FlexLayout",
      "category": "Layouts",
      "label": "FlexLayout",
      "titleIcon": "mdi:arrow-split-vertical",
      "status": "approved",
      "intro": "Contenedor en flex: dirección del eje, distribución y alineación de ítems, separación (<code>gap</code>) y opciones <code>inline</code> / <code>wrap</code> para adaptar filas y columnas.",
      "component": {
        "name": "FlexLayout",
        "path": "src/lib/containers/layout/FlexLayout.svelte"
      },
      "preview": {
        "template": "layout-flex"
      },
      "shell": {
        "relieve": 65
      },
      "state": {
        "direction": "row",
        "justify": null,
        "items": null,
        "inline": false,
        "wrap": false,
        "gap": null
      },
      "details": {
        "itemCount": 4
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Row": "row",
            "Column": "column",
            "Row Reverse": "row-reverse",
            "Column Reverse": "column-reverse"
          }
        },
        {
          "kind": "select-enum-row",
          "key": "justify-items",
          "label": "alineación",
          "labelIcon": "mdi:format-align-center",
          "selects": [
            {
              "kind": "select-enum",
              "key": "justify",
              "label": "justify",
              "labelIcon": "mdi:format-horizontal-align-left",
              "attrType": "str",
              "enumValue": {
                "Vacío": null,
                "start": "start",
                "end": "end",
                "center": "center",
                "between": "between",
                "around": "around",
                "evenly": "evenly"
              }
            },
            {
              "kind": "select-enum",
              "key": "items",
              "label": "items",
              "labelIcon": "mdi:format-vertical-align-center",
              "required": false,
              "attrType": "str",
              "enumValue": {
                "start": "start",
                "end": "end",
                "center": "center",
                "stretch": "stretch"
              }
            }
          ]
        },
        {
          "kind": "switch-group",
          "key": "estados",
          "label": "Estados",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "inline",
              "label": "inline",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "wrap",
              "label": "wrap",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        },
        {
          "kind": "text",
          "key": "gap",
          "label": "gap",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "placeholder": "ej: 0.75rem",
          "normalize": "cssLength"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "labelIcon": "mdi:numeric",
          "min": 1,
          "max": 50,
          "step": 1
        }
      ],
      "code": {
        "strategy": "layout-items",
        "tagOpts": {
          "multiline": true
        },
        "options": {
          "layout": "flex",
          "useCard": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "grid-layout",
    "id": "GridLayout",
    "label": "GridLayout",
    "displayLabel": "GridLayout",
    "path": "demos/lib/GridLayout.json",
    "definition": {
      "id": "GridLayout",
      "category": "Layouts",
      "label": "GridLayout",
      "titleIcon": "mdi:view-grid-outline",
      "status": "approved",
      "intro": "Cuadrícula CSS con <code>cells</code> y <code>direction</code>, <code>gap</code>, alineación de celdas y modo <code>inline-grid</code>. Para responsive, el patrón es envolver con <code>BlockLayout</code>, leer <code>sizew</code> y mapear <code>cells</code>.",
      "component": {
        "name": "GridLayout",
        "path": "src/lib/containers/layout/GridLayout.svelte"
      },
      "preview": {
        "template": "layout-grid"
      },
      "shell": {
        "relieve": 65,
        "configBlockCount": 2
      },
      "state": {
        "cells": 3,
        "cellsFit": false,
        "direction": "column",
        "justify": null,
        "items": null,
        "inline": false,
        "gap": null
      },
      "details": {
        "itemCount": 7,
        "tallHeight": false
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "modes",
          "label": "Modos",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "inline",
              "label": "inline",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "cellsFit",
              "label": "cellsFit",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        },
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-split-horizontal",
          "enumValue": {
            "Columnas": "column",
            "Filas": "row"
          }
        },
        {
          "kind": "select-enum-row",
          "key": "justify-items",
          "label": "alineación",
          "labelIcon": "mdi:format-align-center",
          "selects": [
            {
              "kind": "select-enum",
              "key": "justify",
              "label": "justify",
              "labelIcon": "mdi:format-horizontal-align-left",
              "enumValue": {
                "Vacío": null,
                "start": "start",
                "end": "end",
                "center": "center",
                "between": "between",
                "around": "around",
                "evenly": "evenly"
              }
            },
            {
              "kind": "select-enum",
              "key": "items",
              "label": "items",
              "labelIcon": "mdi:format-vertical-align-center",
              "enumValue": {
                "Vacío": null,
                "start": "start",
                "end": "end",
                "center": "center",
                "stretch": "stretch"
              }
            }
          ]
        },
        {
          "kind": "number",
          "key": "cells",
          "label": "cells",
          "labelIcon": "mdi:view-grid-plus",
          "min": 1,
          "step": 1
        },
        {
          "kind": "text",
          "key": "gap",
          "label": "gap",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "placeholder": "ej: 0.5rem",
          "normalize": "cssLength"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Número de elementos",
          "labelIcon": "mdi:numeric",
          "min": 3,
          "max": 50,
          "step": 1
        },
        {
          "kind": "switch",
          "key": "tallHeight",
          "label": "Forzar min-alto 400px",
          "labelIcon": "mdi:arrow-expand-vertical"
        }
      ],
      "code": {
        "strategy": "layout-items",
        "tagOpts": {
          "multiline": true
        },
        "options": {
          "layout": "grid",
          "useCard": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "grid-responsive-form",
    "id": "GridResponsiveForm",
    "label": "GridResponsiveForm",
    "displayLabel": "GridResponsiveForm",
    "path": "demos/components/GridResponsiveForm.json",
    "definition": {
      "id": "GridResponsiveForm",
      "category": "Layouts",
      "label": "GridResponsiveForm",
      "titleIcon": "mdi:form-select",
      "status": "pending",
      "intro": "Rejilla de formulario responsive (1–5 columnas según <code>sizew</code> de <code>BlockLayout</code>). Envuelve <code>GridLayout</code> con celdas automáticas.",
      "component": {
        "name": "GridResponsiveForm",
        "path": "src/components/form/GridResponsiveForm.svelte"
      },
      "preview": {
        "template": "cmp-grid-responsive-form",
        "style": "width: 100%;"
      },
      "demoConfig": {
        "fieldCount": 4,
        "maxcells": 0,
        "mincells": 0
      },
      "state": {},
      "demoConfigFields": [
        {
          "kind": "number",
          "key": "fieldCount",
          "label": "Campos",
          "labelIcon": "mdi:counter",
          "min": 2,
          "max": 8,
          "step": 1
        },
        {
          "kind": "number",
          "key": "maxcells",
          "label": "maxcells",
          "labelIcon": "mdi:view-column-outline",
          "min": 0,
          "max": 5,
          "step": 1
        },
        {
          "kind": "number",
          "key": "mincells",
          "label": "mincells",
          "labelIcon": "mdi:view-column-outline",
          "min": 0,
          "max": 5,
          "step": 1
        }
      ]
    }
  }
];
