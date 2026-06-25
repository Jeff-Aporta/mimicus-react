/** Auto-generado — Layouts (parte 2/2) */
export const items = [
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "image-list",
    "id": "ImageList",
    "label": "ImageList",
    "displayLabel": "ImageList",
    "path": "demos/lib/ImageList.json",
    "definition": {
      "id": "ImageList",
      "category": "Layouts",
      "label": "ImageList",
      "titleIcon": "mdi:image-multiple",
      "status": "approved",
      "intro": "Cuadrícula de imágenes (MUI <code>ImageList</code>): variantes standard y masonry.",
      "component": {
        "name": "ImageList",
        "path": "src/layout/ImageList.jsx"
      },
      "preview": {
        "template": "layout-grid"
      },
      "state": {
        "cols": 3,
        "gap": 8,
        "variant": "standard",
        "rowHeight": 120
      },
      "details": {
        "itemCount": 6
      },
      "fields": [
        {
          "kind": "number",
          "key": "cols",
          "label": "cols",
          "min": 1,
          "max": 6,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "variant",
          "label": "variant",
          "enumValue": {
            "standard": "standard",
            "masonry": "masonry"
          }
        },
        {
          "kind": "number",
          "key": "gap",
          "label": "gap",
          "min": 0,
          "max": 24,
          "step": 4
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "min": 3,
          "max": 12,
          "step": 1
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
    "slug": "masonry",
    "id": "Masonry",
    "label": "Masonry",
    "displayLabel": "Masonry",
    "path": "demos/lib/Masonry.json",
    "definition": {
      "id": "Masonry",
      "category": "Layouts",
      "label": "Masonry",
      "titleIcon": "mdi:view-dashboard-variant",
      "status": "approved",
      "intro": "Cuadrícula masonry con alturas variables (Ant Design <code>Masonry</code>).",
      "component": {
        "name": "Masonry",
        "path": "src/layout/Masonry.jsx"
      },
      "preview": {
        "template": "layout-grid"
      },
      "state": {
        "columns": 3,
        "gutter": 8
      },
      "details": {
        "itemCount": 9
      },
      "fields": [
        {
          "kind": "number",
          "key": "columns",
          "label": "columns",
          "min": 1,
          "max": 6,
          "step": 1
        },
        {
          "kind": "number",
          "key": "gutter",
          "label": "gutter",
          "min": 0,
          "max": 32,
          "step": 4
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "min": 3,
          "max": 24,
          "step": 1
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
    "slug": "separator",
    "id": "Separator",
    "label": "Separator",
    "displayLabel": "Separator",
    "path": "demos/components/Separator.json",
    "definition": {
      "id": "Separator",
      "category": "Layouts",
      "label": "Separator",
      "titleIcon": "mdi:minus",
      "status": "pending",
      "intro": "Separador visual horizontal o vertical (línea CSS). Complementa a <code>Divider</code> cuando no hace falta texto ni variantes Ant Design.",
      "component": {
        "name": "Separator",
        "path": "src/components/primitives/Separator.svelte"
      },
      "preview": {
        "template": "component",
        "options": {
          "wrapperStyle": "width: 100%; max-width: 28rem; padding: 0.5rem 0;"
        }
      },
      "state": {
        "orientation": "horizontal",
        "color": "",
        "borderStyle": "solid",
        "thickness": 1,
        "startMargin": 8,
        "endMargin": 8
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "orientation",
          "label": "orientation",
          "labelIcon": "mdi:arrow-split-vertical",
          "enumValue": {
            "Horizontal": "horizontal",
            "Vertical": "vertical"
          }
        },
        {
          "kind": "select-enum",
          "key": "borderStyle",
          "label": "borderStyle",
          "labelIcon": "mdi:line-style",
          "enumValue": {
            "solid": "solid",
            "dashed": "dashed",
            "dotted": "dotted"
          }
        },
        {
          "kind": "color",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette"
        },
        {
          "kind": "number",
          "key": "thickness",
          "label": "thickness",
          "labelIcon": "mdi:format-line-spacing",
          "min": 1,
          "max": 8,
          "step": 1
        },
        {
          "kind": "number",
          "key": "startMargin",
          "label": "startMargin",
          "labelIcon": "mdi:format-indent-increase",
          "min": 0,
          "max": 48,
          "step": 2
        },
        {
          "kind": "number",
          "key": "endMargin",
          "label": "endMargin",
          "labelIcon": "mdi:format-indent-decrease",
          "min": 0,
          "max": 48,
          "step": 2
        }
      ]
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "side-panel",
    "id": "SidePanel",
    "label": "SidePanel",
    "displayLabel": "SidePanel",
    "path": "demos/lib/SidePanel.json",
    "definition": {
      "id": "SidePanel",
      "category": "Layouts",
      "label": "SidePanel",
      "titleIcon": "mdi:dock-left",
      "status": "approved",
      "intro": "Panel lateral estándar del ecosistema Mimicus: expandido, <code>rail</code> (colapsado, solo iconos) o <code>drawer</code>. Las vistas y la navegación del header se alimentan por JSON — ver <code>demo/config/playground-shell.json</code> (<code>views</code>, <code>navigation.rows</code>). Usa <code>SidePanelSection</code> para acordeones. En rail el scrollbar se oculta.",
      "component": {
        "name": "SidePanel",
        "path": "src/layout/SidePanel.jsx"
      },
      "preview": {
        "template": "layout-side-panel",
        "style": "width: 100%; align-self: stretch;"
      },
      "shell": {
        "relieve": 62,
        "configBlockCount": 2
      },
      "state": {
        "open": true,
        "drawer": false
      },
      "details": {
        "sectionCount": 3
      },
      "panelViews": {
        "collapsed": {
          "type": "stack",
          "className": "pg-panel-view pg-panel-view--rail",
          "gap": "0.35rem",
          "children": [
            {
              "type": "catalog-categories",
              "mode": "rail"
            }
          ]
        },
        "expanded": {
          "type": "stack",
          "className": "pg-panel-view pg-panel-view--expanded",
          "gap": "0.25rem",
          "children": [
            {
              "type": "catalog-categories",
              "mode": "sections"
            }
          ]
        }
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "modes",
          "label": "Modos",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "open",
              "label": "expandido"
            },
            {
              "key": "drawer",
              "label": "drawer"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "sectionCount",
          "label": "secciones demo",
          "labelIcon": "mdi:counter",
          "min": 1,
          "max": 6,
          "step": 1
        }
      ],
      "presets": [
        {
          "label": "Expandido",
          "icon": "mdi:dock-left",
          "state": {
            "open": true,
            "drawer": false
          },
          "details": {
            "sectionCount": 3
          }
        },
        {
          "label": "Rail",
          "icon": "mdi:dock-window",
          "state": {
            "open": false,
            "drawer": false
          },
          "details": {
            "sectionCount": 4
          }
        },
        {
          "label": "Drawer",
          "icon": "mdi:page-layout-sidebar-left",
          "state": {
            "open": true,
            "drawer": true
          },
          "details": {
            "sectionCount": 2
          }
        }
      ],
      "code": {
        "strategy": "side-panel-pattern",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "space",
    "id": "Space",
    "label": "Space",
    "displayLabel": "Space",
    "path": "demos/lib/Space.json",
    "definition": {
      "id": "Space",
      "category": "Layouts",
      "label": "Space",
      "titleIcon": "mdi:arrow-expand-horizontal",
      "status": "approved",
      "intro": "Espaciado entre elementos inline (Ant Design <code>Space</code>): orientación, tamaño y wrap.",
      "component": {
        "name": "Space",
        "path": "src/layout/Space.jsx"
      },
      "preview": {
        "template": "layout-flex",
        "options": {
          "wrapperStyle": "width: 100%;"
        }
      },
      "state": {
        "orientation": "horizontal",
        "size": "middle",
        "wrap": false
      },
      "details": {
        "itemCount": 4
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "orientation",
          "label": "orientation",
          "enumValue": {
            "Horizontal": "horizontal",
            "Vertical": "vertical"
          }
        },
        {
          "kind": "select-enum",
          "key": "size",
          "label": "size",
          "enumValue": {
            "small": "small",
            "middle": "middle",
            "large": "large"
          }
        },
        {
          "kind": "switch",
          "key": "wrap",
          "label": "wrap"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "min": 1,
          "max": 12,
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
    "slug": "splitter",
    "id": "Splitter",
    "label": "Splitter",
    "displayLabel": "Splitter",
    "path": "demos/lib/Splitter.json",
    "definition": {
      "id": "Splitter",
      "category": "Layouts",
      "label": "Splitter",
      "titleIcon": "mdi:arrow-split-vertical",
      "status": "approved",
      "intro": "Layout de dos paneles con separador arrastrable (estilo Ant Design Splitter / IsaSplitView). <code>direction=&quot;horizontal&quot;</code> → paneles laterales (barra vertical); <code>direction=&quot;vertical&quot;</code> → paneles apilados (barra horizontal). Modo <code>inline</code> (<code>inline-flex</code>), <code>minSize</code>/<code>maxSize</code> y <code>storageKey</code>.",
      "component": {
        "name": "Splitter",
        "path": "src/lib/containers/layout/Splitter.svelte"
      },
      "preview": {
        "template": "layout-splitter",
        "style": "width: 100%; align-self: stretch;"
      },
      "shell": {
        "relieve": 65,
        "configBlockCount": 2
      },
      "state": {
        "inline": false,
        "direction": "horizontal",
        "panelSize": 240,
        "minSize": 160,
        "maxSize": 480
      },
      "demoConfig": {
        "panelItemCount": 2,
        "panelCells": 1,
        "panelLayout": "columns",
        "mainItemCount": 4,
        "mainCells": 2,
        "mainLayout": "columns"
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
              "label": "inline"
            }
          ]
        },
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Lateral ↔ (horizontal)": "horizontal",
            "Apilado ↕ (vertical)": "vertical"
          }
        },
        {
          "kind": "number",
          "key": "panelSize",
          "label": "panelSize",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "min": 120,
          "max": 640,
          "step": 8
        },
        {
          "kind": "number",
          "key": "minSize",
          "label": "minSize",
          "labelIcon": "mdi:arrow-collapse-horizontal",
          "min": 80,
          "max": 400,
          "step": 8
        },
        {
          "kind": "number",
          "key": "maxSize",
          "label": "maxSize",
          "labelIcon": "mdi:arrow-expand-all",
          "min": 200,
          "max": 800,
          "step": 8
        }
      ],
      "demoConfigFields": [
        {
          "kind": "number",
          "key": "panelItemCount",
          "label": "Panel · ítems",
          "labelIcon": "mdi:counter",
          "min": 1,
          "max": 12,
          "step": 1
        },
        {
          "kind": "number",
          "key": "panelCells",
          "label": "Panel · celdas",
          "labelIcon": "mdi:view-grid-outline",
          "min": 1,
          "max": 6,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "panelLayout",
          "label": "Panel · disposición",
          "labelIcon": "mdi:view-column-outline",
          "enumValue": {
            "Columnas": "columns",
            "Filas": "rows"
          }
        },
        {
          "kind": "number",
          "key": "mainItemCount",
          "label": "Contenido · ítems",
          "labelIcon": "mdi:counter",
          "min": 1,
          "max": 12,
          "step": 1
        },
        {
          "kind": "number",
          "key": "mainCells",
          "label": "Contenido · celdas",
          "labelIcon": "mdi:view-grid-outline",
          "min": 1,
          "max": 6,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "mainLayout",
          "label": "Contenido · disposición",
          "labelIcon": "mdi:view-column-outline",
          "enumValue": {
            "Columnas": "columns",
            "Filas": "rows"
          }
        }
      ],
      "code": {
        "strategy": "splitter-layout",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "layout",
    "category": "Layouts",
    "slug": "stack",
    "id": "Stack",
    "label": "Stack",
    "displayLabel": "Stack",
    "path": "demos/lib/Stack.json",
    "definition": {
      "id": "Stack",
      "category": "Layouts",
      "label": "Stack",
      "titleIcon": "mdi:view-sequential",
      "status": "approved",
      "intro": "Layout unidimensional (MUI <code>Stack</code>): columna o fila con <code>spacing</code>.",
      "component": {
        "name": "Stack",
        "path": "src/layout/Stack.jsx"
      },
      "preview": {
        "template": "layout-flex"
      },
      "state": {
        "direction": "column",
        "spacing": 1
      },
      "details": {
        "itemCount": 3
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "enumValue": {
            "column": "column",
            "row": "row"
          }
        },
        {
          "kind": "number",
          "key": "spacing",
          "label": "spacing",
          "min": 0,
          "max": 8,
          "step": 1
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemCount",
          "label": "Elementos",
          "min": 1,
          "max": 12,
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
  }
];
