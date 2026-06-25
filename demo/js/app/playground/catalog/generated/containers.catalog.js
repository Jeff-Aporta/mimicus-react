/** Auto-generado — Containers */
export const items = [
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "accordion",
    "id": "Accordion",
    "label": "Accordion",
    "displayLabel": "Accordion",
    "path": "demos/lib/Accordion.json",
    "definition": {
      "id": "Accordion",
      "category": "Containers",
      "label": "Accordion",
      "titleIcon": "mdi:unfold-more-horizontal",
      "status": "approved",
      "intro": "Alias de <code>Collapse</code> con modo acordeón. Controlador <code>data-mimicus-display=\"collapse\"</code>.",
      "component": {
        "name": "Accordion",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-collapse"
      },
      "state": {
        "accordion": true
      },
      "fields": [
        {
          "kind": "switch",
          "key": "accordion",
          "label": "accordion",
          "labelIcon": "mdi:unfold-more-double"
        }
      ],
      "code": {
        "strategy": "disp-collapse",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "feedback",
    "category": "Containers",
    "slug": "alert",
    "id": "Alert",
    "label": "Alert",
    "displayLabel": "Alert",
    "path": "demos/components/Alert.json",
    "definition": {
      "id": "Alert",
      "category": "Containers",
      "label": "Alert",
      "titleIcon": "mdi:alert-circle-outline",
      "status": "pending",
      "intro": "Callout semántico sobre <code>Card</code>: icono, título opcional y cuerpo con color <code>info</code>/<code>success</code>/<code>warning</code>/<code>error</code>. Portado desde capacitación ContaPymeU.",
      "component": {
        "name": "Alert",
        "path": "src/components/containers/Alert.svelte"
      },
      "preview": {
        "template": "cmp-alert"
      },
      "state": {
        "color": "info",
        "title": "Aviso",
        "inline": false
      },
      "details": {
        "body": "Texto descriptivo del alert con contexto para el usuario."
      },
      "fields": [
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        },
        {
          "kind": "text",
          "key": "title",
          "label": "title",
          "labelIcon": "mdi:format-title"
        },
        {
          "kind": "switch",
          "key": "inline",
          "label": "inline",
          "labelIcon": "mdi:tune"
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "body",
          "label": "Cuerpo",
          "labelIcon": "mdi:text"
        }
      ]
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "badge",
    "id": "Badge",
    "label": "Badge",
    "displayLabel": "Badge",
    "path": "demos/lib/Badge.json",
    "definition": {
      "id": "Badge",
      "category": "Containers",
      "label": "Badge",
      "titleIcon": "mdi:bell-badge-outline",
      "status": "approved",
      "intro": "Insignia numérica o punto de estado sobre un control hijo. Compatible con patrones <a href=\"https://ant.design/components/badge\" target=\"_blank\" rel=\"noreferrer\">Ant Badge</a> y <a href=\"https://mui.com/material-ui/react-badge/\" target=\"_blank\" rel=\"noreferrer\">MUI Badge</a>.",
      "component": {
        "name": "Badge",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-badge"
      },
      "state": {
        "count": 5,
        "dot": false,
        "showZero": false,
        "max": 99,
        "color": "primary"
      },
      "fields": [
        {
          "kind": "number",
          "key": "count",
          "label": "count",
          "labelIcon": "mdi:counter",
          "min": 0,
          "max": 9999,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette",
          "attrType": "str",
          "enumValue": {
            "Primary": "primary",
            "Success": "success",
            "Warning": "warning",
            "Error": "error"
          }
        },
        {
          "kind": "switch-group",
          "key": "opts",
          "label": "Opciones",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "dot",
              "label": "dot"
            },
            {
              "key": "showZero",
              "label": "showZero"
            }
          ]
        }
      ],
      "code": {
        "strategy": "disp-badge"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "calendar",
    "id": "Calendar",
    "label": "Calendar",
    "displayLabel": "Calendar",
    "path": "demos/lib/Calendar.json",
    "definition": {
      "id": "Calendar",
      "category": "Containers",
      "label": "Calendar",
      "titleIcon": "mdi:calendar-month-outline",
      "status": "approved",
      "intro": "Calendario mensual con navegación vía <code>bindCalendar</code>. Inspirado en <a href=\"https://ant.design/components/calendar\" target=\"_blank\" rel=\"noreferrer\">Ant Calendar</a>.",
      "component": {
        "name": "Calendar",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-calendar"
      },
      "state": {
        "fullscreen": false
      },
      "fields": [
        {
          "kind": "switch",
          "key": "fullscreen",
          "label": "fullscreen",
          "labelIcon": "mdi:fullscreen"
        }
      ],
      "code": {
        "strategy": "disp-calendar"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "card",
    "id": "Card",
    "label": "Card",
    "displayLabel": "Card",
    "path": "demos/lib/Card.json",
    "definition": {
      "id": "Card",
      "category": "Containers",
      "label": "Card",
      "titleIcon": "mdi:credit-card-outline",
      "status": "approved",
      "intro": "Contenedor para agrupar contenido con volumen y sombra: sirve para jerarquizar la pantalla y dar contexto visual sin depender solo del texto. Abajo puedes explorar cómo cambian la forma de la superficie, la sensación de relieve y el modo en que la tarjeta ocupa el espacio (en bloque o en línea con el texto).",
      "component": {
        "name": "Card",
        "path": "src/lib/containers/Card.svelte"
      },
      "preview": {
        "template": "card"
      },
      "shell": {
        "relieve": 65,
        "configBlockCount": 3
      },
      "state": {
        "variant": "",
        "inline": false
      },
      "details": {
        "relieve": 65,
        "relieveDirIndex": 0,
        "elevation": 0
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "attrDefault": "solid",
          "attrEmit": "emptyToUndefined",
          "options": {
            "Ninguno": "",
            "solid": "solid",
            "flat": "flat",
            "glass": "glass"
          },
          "accent": "primary",
          "iconMap": {
            "": "mdi:card-bulleted",
            "solid": "mdi:card-bulleted",
            "flat": "mdi:card-outline",
            "glass": "mdi:shimmer"
          }
        },
        {
          "kind": "switch",
          "key": "inline",
          "label": "inline",
          "labelIcon": "mdi:tune"
        }
      ],
      "detailFields": [
        {
          "kind": "range",
          "key": "relieve",
          "label": "relieve",
          "labelIcon": "mdi:gradient-horizontal",
          "min": 0,
          "max": 100,
          "step": 1
        }
      ],
      "code": {
        "strategy": "preview"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "carousel",
    "id": "Carousel",
    "label": "Carousel",
    "displayLabel": "Carousel",
    "path": "demos/lib/Carousel.json",
    "definition": {
      "id": "Carousel",
      "category": "Containers",
      "label": "Carousel",
      "titleIcon": "mdi:view-carousel-outline",
      "status": "approved",
      "intro": "Carrusel con flechas, puntos y autoplay. Controlador <code>data-mimicus-display=\"carousel\"</code>. Ver <a href=\"https://ant.design/components/carousel\" target=\"_blank\" rel=\"noreferrer\">Ant Carousel</a>.",
      "component": {
        "name": "Carousel",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-carousel"
      },
      "state": {
        "autoplay": false,
        "arrows": true,
        "dots": true,
        "infinite": true
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "opts",
          "label": "Opciones",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "autoplay",
              "label": "autoplay"
            },
            {
              "key": "arrows",
              "label": "arrows"
            },
            {
              "key": "dots",
              "label": "dots"
            },
            {
              "key": "infinite",
              "label": "infinite"
            }
          ]
        }
      ],
      "code": {
        "strategy": "disp-carousel",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "collapse",
    "id": "Collapse",
    "label": "Collapse",
    "displayLabel": "Collapse",
    "path": "demos/lib/Collapse.json",
    "definition": {
      "id": "Collapse",
      "category": "Containers",
      "label": "Collapse",
      "titleIcon": "mdi:unfold-more-horizontal",
      "status": "approved",
      "intro": "Paneles colapsables con modo acordeón. <code>bindCollapse</code> en JS puro. Ver <a href=\"https://ant.design/components/collapse\" target=\"_blank\" rel=\"noreferrer\">Ant Collapse</a>.",
      "component": {
        "name": "Collapse",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-collapse"
      },
      "state": {
        "accordion": false
      },
      "fields": [
        {
          "kind": "switch",
          "key": "accordion",
          "label": "accordion",
          "labelIcon": "mdi:unfold-more-double"
        }
      ],
      "code": {
        "strategy": "disp-collapse",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "descriptions",
    "id": "Descriptions",
    "label": "Descriptions",
    "displayLabel": "Descriptions",
    "path": "demos/lib/Descriptions.json",
    "definition": {
      "id": "Descriptions",
      "category": "Containers",
      "label": "Descriptions",
      "titleIcon": "mdi:table-column-width",
      "status": "approved",
      "intro": "Lista clave-valor en rejilla. Ver <a href=\"https://ant.design/components/descriptions\" target=\"_blank\" rel=\"noreferrer\">Ant Descriptions</a>.",
      "component": {
        "name": "Descriptions",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-descriptions"
      },
      "state": {
        "bordered": false,
        "column": 3
      },
      "fields": [
        {
          "kind": "switch",
          "key": "bordered",
          "label": "bordered",
          "labelIcon": "mdi:border-all"
        },
        {
          "kind": "number",
          "key": "column",
          "label": "column",
          "labelIcon": "mdi:table-column",
          "min": 1,
          "max": 4,
          "step": 1
        }
      ],
      "code": {
        "strategy": "disp-descriptions",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "empty",
    "id": "Empty",
    "label": "Empty",
    "displayLabel": "Empty",
    "path": "demos/lib/Empty.json",
    "definition": {
      "id": "Empty",
      "category": "Containers",
      "label": "Empty",
      "titleIcon": "mdi:inbox-outline",
      "status": "approved",
      "intro": "Estado vacío con imagen y acción opcional. Ver <a href=\"https://ant.design/components/empty\" target=\"_blank\" rel=\"noreferrer\">Ant Empty</a>.",
      "component": {
        "name": "Empty",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-empty"
      },
      "state": {
        "description": "No data",
        "image": "default",
        "showAction": true
      },
      "fields": [
        {
          "kind": "text",
          "key": "description",
          "label": "description",
          "labelIcon": "mdi:text"
        },
        {
          "kind": "select-enum",
          "key": "image",
          "label": "image",
          "labelIcon": "mdi:image-outline",
          "attrType": "str",
          "enumValue": {
            "Default": "default",
            "Simple": "simple"
          }
        },
        {
          "kind": "switch",
          "key": "showAction",
          "label": "acción",
          "labelIcon": "mdi:gesture-tap-button"
        }
      ],
      "code": {
        "strategy": "disp-empty"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "list",
    "id": "List",
    "label": "List",
    "displayLabel": "List",
    "path": "demos/lib/List.json",
    "definition": {
      "id": "List",
      "category": "Containers",
      "label": "List",
      "titleIcon": "mdi:format-list-bulleted",
      "status": "approved",
      "intro": "Lista vertical estilo MUI con ítems, avatar y acciones. Ver <a href=\"https://mui.com/material-ui/react-list/\" target=\"_blank\" rel=\"noreferrer\">MUI List</a>.",
      "component": {
        "name": "List",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-list"
      },
      "state": {
        "dense": false,
        "subheader": true
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "opts",
          "label": "Opciones",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "dense",
              "label": "dense"
            },
            {
              "key": "subheader",
              "label": "subheader"
            }
          ]
        }
      ],
      "code": {
        "strategy": "disp-list",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "statistic",
    "id": "Statistic",
    "label": "Statistic",
    "displayLabel": "Statistic",
    "path": "demos/lib/Statistic.json",
    "definition": {
      "id": "Statistic",
      "category": "Containers",
      "label": "Statistic",
      "titleIcon": "mdi:chart-box-outline",
      "status": "approved",
      "intro": "Métrica destacada con prefijo/sufijo. Ver <a href=\"https://ant.design/components/statistic\" target=\"_blank\" rel=\"noreferrer\">Ant Statistic</a>.",
      "component": {
        "name": "Statistic",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-statistic"
      },
      "state": {
        "title": "Balance",
        "value": 112893,
        "prefix": "$",
        "precision": null,
        "suffix": null
      },
      "fields": [
        {
          "kind": "text",
          "key": "title",
          "label": "title",
          "labelIcon": "mdi:format-title"
        },
        {
          "kind": "number",
          "key": "value",
          "label": "value",
          "labelIcon": "mdi:numeric",
          "step": 1
        },
        {
          "kind": "text",
          "key": "prefix",
          "label": "prefix",
          "labelIcon": "mdi:currency-usd"
        }
      ],
      "code": {
        "strategy": "disp-statistic"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "table",
    "id": "Table",
    "label": "Table",
    "displayLabel": "Table",
    "path": "demos/lib/Table.json",
    "definition": {
      "id": "Table",
      "category": "Containers",
      "label": "Table",
      "titleIcon": "mdi:table",
      "status": "approved",
      "intro": "Tabla declarativa con ordenamiento opcional. Compatible con <a href=\"https://ant.design/components/table\" target=\"_blank\" rel=\"noreferrer\">Ant Table</a> y <a href=\"https://mui.com/material-ui/react-table/\" target=\"_blank\" rel=\"noreferrer\">MUI Table</a>.",
      "component": {
        "name": "Table",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-table"
      },
      "state": {
        "bordered": false,
        "size": "medium",
        "sortable": true
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "size",
          "label": "size",
          "labelIcon": "mdi:format-line-spacing",
          "attrType": "str",
          "enumValue": {
            "Small": "small",
            "Medium": "medium"
          }
        },
        {
          "kind": "switch-group",
          "key": "opts",
          "label": "Opciones",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "bordered",
              "label": "bordered"
            },
            {
              "key": "sortable",
              "label": "sortable"
            }
          ]
        }
      ],
      "code": {
        "strategy": "disp-table"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "timeline",
    "id": "Timeline",
    "label": "Timeline",
    "displayLabel": "Timeline",
    "path": "demos/lib/Timeline.json",
    "definition": {
      "id": "Timeline",
      "category": "Containers",
      "label": "Timeline",
      "titleIcon": "mdi:timeline-outline",
      "status": "approved",
      "intro": "Línea de tiempo vertical u horizontal. Ver <a href=\"https://ant.design/components/timeline\" target=\"_blank\" rel=\"noreferrer\">Ant Timeline</a>.",
      "component": {
        "name": "Timeline",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-timeline"
      },
      "state": {
        "mode": "left",
        "pending": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "mode",
          "label": "mode",
          "labelIcon": "mdi:align-horizontal-left",
          "attrType": "str",
          "enumValue": {
            "Left": "left",
            "Right": "right",
            "Alternate": "alternate"
          }
        },
        {
          "kind": "switch",
          "key": "pending",
          "label": "pending",
          "labelIcon": "mdi:clock-outline"
        }
      ],
      "code": {
        "strategy": "disp-timeline",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "tooltip",
    "id": "Tooltip",
    "label": "Tooltip",
    "displayLabel": "Tooltip",
    "path": "demos/lib/Tooltip.json",
    "definition": {
      "id": "Tooltip",
      "category": "Containers",
      "label": "Tooltip",
      "titleIcon": "mdi:tooltip-text-outline",
      "status": "approved",
      "intro": "Ayuda contextual al hover/foco. <code>bindTooltip</code>. Ver <a href=\"https://ant.design/components/tooltip\" target=\"_blank\" rel=\"noreferrer\">Ant Tooltip</a> y <a href=\"https://mui.com/material-ui/react-tooltip/\" target=\"_blank\" rel=\"noreferrer\">MUI Tooltip</a>.",
      "component": {
        "name": "Tooltip",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-tooltip"
      },
      "state": {
        "title": "Texto de ayuda",
        "placement": "top",
        "arrow": false
      },
      "fields": [
        {
          "kind": "text",
          "key": "title",
          "label": "title",
          "labelIcon": "mdi:text"
        },
        {
          "kind": "select-enum",
          "key": "placement",
          "label": "placement",
          "labelIcon": "mdi:arrow-all",
          "attrType": "str",
          "enumValue": {
            "Top": "top",
            "Bottom": "bottom",
            "Left": "left",
            "Right": "right"
          }
        },
        {
          "kind": "switch",
          "key": "arrow",
          "label": "arrow",
          "labelIcon": "mdi:arrow-top-right"
        }
      ],
      "code": {
        "strategy": "disp-tooltip"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "tour",
    "id": "Tour",
    "label": "Tour",
    "displayLabel": "Tour",
    "path": "demos/lib/Tour.json",
    "definition": {
      "id": "Tour",
      "category": "Containers",
      "label": "Tour",
      "titleIcon": "mdi:map-marker-path",
      "status": "approved",
      "intro": "Recorrido guiado por pasos con overlay. <code>bindTour</code>. Ver <a href=\"https://ant.design/components/tour\" target=\"_blank\" rel=\"noreferrer\">Ant Tour</a>.",
      "component": {
        "name": "Tour",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-tour"
      },
      "state": {
        "open": true
      },
      "fields": [
        {
          "kind": "switch",
          "key": "open",
          "label": "open",
          "labelIcon": "mdi:eye-outline"
        }
      ],
      "code": {
        "strategy": "disp-tour"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Containers",
    "slug": "tree",
    "id": "Tree",
    "label": "Tree",
    "displayLabel": "Tree",
    "path": "demos/lib/Tree.json",
    "definition": {
      "id": "Tree",
      "category": "Containers",
      "label": "Tree",
      "titleIcon": "mdi:file-tree-outline",
      "status": "approved",
      "intro": "Árbol jerárquico expandible (display). Distinto de <code>TreeSelect</code>. Ver <a href=\"https://ant.design/components/tree\" target=\"_blank\" rel=\"noreferrer\">Ant Tree</a>.",
      "component": {
        "name": "Tree",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-tree"
      },
      "state": {
        "checkable": false,
        "defaultExpandAll": true
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "opts",
          "label": "Opciones",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "checkable",
              "label": "checkable"
            },
            {
              "key": "defaultExpandAll",
              "label": "defaultExpandAll"
            }
          ]
        }
      ],
      "code": {
        "strategy": "disp-tree"
      }
    }
  }
];
