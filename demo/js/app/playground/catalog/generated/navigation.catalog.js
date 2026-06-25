/** Auto-generado — Navigation */
export const items = [
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "anchor",
    "id": "Anchor",
    "label": "Anchor",
    "displayLabel": "Anchor",
    "path": "demos/lib/Anchor.json",
    "definition": {
      "id": "Anchor",
      "category": "Navigation",
      "label": "Anchor",
      "titleIcon": "mdi:anchor",
      "status": "approved",
      "intro": "Navegación por anclas en una página (Ant Design Anchor): scroll suave a secciones, indicador activo tipo tabs, dirección <code>vertical</code> u <code>horizontal</code>. Con <code>affix={false}</code> queda en modo <strong>static</strong>: solo resalta al hacer clic, sin seguir el scroll.",
      "component": {
        "name": "Anchor",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-anchor"
      },
      "shell": {
        "relieve": 58,
        "configBlockCount": 2
      },
      "state": {
        "direction": "vertical",
        "affix": false,
        "targetOffset": 0,
        "bounds": 5
      },
      "details": {
        "sectionCount": 5,
        "nestedItems": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Vertical": "vertical",
            "Horizontal": "horizontal"
          }
        },
        {
          "kind": "switch",
          "key": "affix",
          "label": "affix (scroll spy)",
          "labelIcon": "mdi:eye-outline"
        },
        {
          "kind": "number",
          "key": "targetOffset",
          "label": "targetOffset",
          "labelIcon": "mdi:arrow-collapse-up",
          "min": 0,
          "max": 120,
          "step": 4
        },
        {
          "kind": "number",
          "key": "bounds",
          "label": "bounds",
          "labelIcon": "mdi:border-outside",
          "min": 0,
          "max": 40,
          "step": 1
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "sectionCount",
          "label": "Secciones",
          "labelIcon": "mdi:numeric",
          "min": 2,
          "max": 8,
          "step": 1
        },
        {
          "kind": "switch",
          "key": "nestedItems",
          "label": "Ítems anidados (API)"
        }
      ],
      "presets": [
        {
          "label": "Static (vertical)",
          "icon": "mdi:anchor",
          "state": {
            "direction": "vertical",
            "affix": false,
            "targetOffset": 0,
            "bounds": 5
          },
          "details": {
            "sectionCount": 5,
            "nestedItems": false
          }
        },
        {
          "label": "Basic (scroll spy)",
          "icon": "mdi:eye-outline",
          "state": {
            "direction": "vertical",
            "affix": true,
            "targetOffset": 8,
            "bounds": 5
          },
          "details": {
            "sectionCount": 5,
            "nestedItems": false
          }
        },
        {
          "label": "Horizontal tabs",
          "icon": "mdi:tab",
          "state": {
            "direction": "horizontal",
            "affix": true,
            "targetOffset": 0,
            "bounds": 5
          },
          "details": {
            "sectionCount": 4,
            "nestedItems": false
          }
        },
        {
          "label": "Horizontal static",
          "icon": "mdi:tab-unselected",
          "state": {
            "direction": "horizontal",
            "affix": false,
            "targetOffset": 0,
            "bounds": 5
          },
          "details": {
            "sectionCount": 4,
            "nestedItems": false
          }
        },
        {
          "label": "Con anidados",
          "icon": "mdi:file-tree-outline",
          "state": {
            "direction": "vertical",
            "affix": true,
            "targetOffset": 0,
            "bounds": 5
          },
          "details": {
            "sectionCount": 5,
            "nestedItems": true
          }
        }
      ],
      "tests": "extras/AnchorTests.svelte",
      "code": {
        "strategy": "anchor-nav",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "bottom-navigation",
    "id": "BottomNavigation",
    "label": "Bottom Navigation",
    "displayLabel": "Bottom Navigation",
    "path": "demos/lib/BottomNavigation.json",
    "definition": {
      "id": "BottomNavigation",
      "category": "Navigation",
      "label": "Bottom Navigation",
      "titleIcon": "mdi:dock-bottom",
      "status": "approved",
      "intro": "Barra inferior MUI <code>BottomNavigation</code>: 3–5 destinos con icono y etiqueta opcional.",
      "component": {
        "name": "BottomNavigation",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-bottom-nav"
      },
      "state": {
        "value": "0",
        "showLabels": true
      },
      "details": {
        "actionCount": 4
      },
      "fields": [
        {
          "kind": "switch",
          "key": "showLabels",
          "label": "showLabels",
          "labelIcon": "mdi:label-outline"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "actionCount",
          "label": "Acciones",
          "labelIcon": "mdi:numeric",
          "min": 3,
          "max": 5,
          "step": 1
        }
      ],
      "code": {
        "strategy": "nav-bottom-nav"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "breadcrumb",
    "id": "Breadcrumb",
    "label": "Breadcrumb",
    "displayLabel": "Breadcrumb",
    "path": "demos/lib/Breadcrumb.json",
    "definition": {
      "id": "Breadcrumb",
      "category": "Navigation",
      "label": "Breadcrumb",
      "titleIcon": "mdi:chevron-right",
      "status": "approved",
      "intro": "Migas de pan Ant / MUI <code>Breadcrumbs</code>: estructura semántica <code>nav &gt; ol</code>, separador configurable.",
      "component": {
        "name": "Breadcrumbs",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-breadcrumbs"
      },
      "state": {
        "separator": "/"
      },
      "details": {
        "currentLabel": "Navigation"
      },
      "fields": [
        {
          "kind": "text",
          "key": "separator",
          "label": "separator",
          "labelIcon": "mdi:slash-forward"
        },
        {
          "kind": "number",
          "key": "maxItems",
          "label": "maxItems",
          "labelIcon": "mdi:dots-horizontal",
          "min": 0,
          "max": 8,
          "step": 1
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "currentLabel",
          "label": "Página actual",
          "labelIcon": "mdi:file-document-outline"
        }
      ],
      "code": {
        "strategy": "nav-breadcrumbs"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "drawer",
    "id": "Drawer",
    "label": "Drawer",
    "displayLabel": "Drawer",
    "path": "demos/lib/Drawer.json",
    "definition": {
      "id": "Drawer",
      "category": "Navigation",
      "label": "Drawer",
      "titleIcon": "mdi:dock-left",
      "status": "approved",
      "intro": "Panel lateral MUI Drawer: overlay, animación CSS y cierre con backdrop / Escape.",
      "component": {
        "name": "Drawer",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-drawer"
      },
      "state": {
        "placement": "left",
        "width": 280,
        "defaultOpen": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "placement",
          "label": "placement",
          "labelIcon": "mdi:dock-left",
          "attrType": "str",
          "enumValue": {
            "Left": "left",
            "Right": "right",
            "Top": "top",
            "Bottom": "bottom"
          }
        },
        {
          "kind": "number",
          "key": "width",
          "label": "width",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "min": 200,
          "max": 480,
          "step": 20
        },
        {
          "kind": "switch",
          "key": "defaultOpen",
          "label": "defaultOpen",
          "labelIcon": "mdi:door-open"
        }
      ],
      "code": {
        "strategy": "nav-drawer"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "dropdown",
    "id": "Dropdown",
    "label": "Dropdown",
    "displayLabel": "Dropdown",
    "path": "demos/lib/Dropdown.json",
    "definition": {
      "id": "Dropdown",
      "category": "Navigation",
      "label": "Dropdown",
      "titleIcon": "mdi:menu-down",
      "status": "approved",
      "intro": "Menú desplegable Ant Design: apertura por clic, cierre con Escape o clic fuera (<code>bindDropdown</code>).",
      "component": {
        "name": "Dropdown",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-dropdown"
      },
      "state": {
        "placement": "bottomLeft"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "placement",
          "label": "placement",
          "labelIcon": "mdi:arrow-bottom-left",
          "attrType": "str",
          "enumValue": {
            "Bottom left": "bottomLeft",
            "Bottom right": "bottomRight",
            "Top left": "topLeft"
          }
        }
      ],
      "code": {
        "strategy": "nav-dropdown"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "link",
    "id": "Link",
    "label": "Link",
    "displayLabel": "Link",
    "path": "demos/lib/Link.json",
    "definition": {
      "id": "Link",
      "category": "Navigation",
      "label": "Link",
      "titleIcon": "mdi:link-variant",
      "status": "approved",
      "intro": "Enlace MUI con subrayado <code>none | hover | always</code> y color temático.",
      "component": {
        "name": "NavLink",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-link"
      },
      "state": {
        "underline": "hover",
        "color": "primary"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "underline",
          "label": "underline",
          "labelIcon": "mdi:format-underline",
          "attrType": "str",
          "enumValue": {
            "Hover": "hover",
            "Always": "always",
            "None": "none"
          }
        },
        {
          "kind": "select-enum",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette-outline",
          "attrType": "str",
          "enumValue": {
            "Primary": "primary",
            "Inherit": "inherit"
          }
        }
      ],
      "code": {
        "strategy": "nav-link"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "menu",
    "id": "Menu",
    "label": "Menu",
    "displayLabel": "Menu",
    "path": "demos/lib/Menu.json",
    "definition": {
      "id": "Menu",
      "category": "Navigation",
      "label": "Menu",
      "titleIcon": "mdi:menu",
      "status": "approved",
      "intro": "Menú de navegación con soporte teclado (↑↓ Home End) vía controlador vanilla.",
      "component": {
        "name": "Menu",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-menu"
      },
      "state": {
        "mode": "vertical"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "mode",
          "label": "mode",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Vertical": "vertical",
            "Horizontal": "horizontal"
          }
        }
      ],
      "code": {
        "strategy": "nav-menu",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "pagination",
    "id": "Pagination",
    "label": "Pagination",
    "displayLabel": "Pagination",
    "path": "demos/lib/Pagination.json",
    "definition": {
      "id": "Pagination",
      "category": "Navigation",
      "label": "Pagination",
      "titleIcon": "mdi:page-last",
      "status": "approved",
      "intro": "Paginación Ant / MUI: botones generados por <code>paginationMath.js</code>, evento <code>mimicus-pagination-change</code>.",
      "component": {
        "name": "Pagination",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-pagination"
      },
      "state": {
        "count": 10,
        "defaultPage": 1,
        "siblingCount": 1
      },
      "fields": [
        {
          "kind": "number",
          "key": "count",
          "label": "count",
          "labelIcon": "mdi:numeric",
          "min": 3,
          "max": 50,
          "step": 1
        },
        {
          "kind": "number",
          "key": "defaultPage",
          "label": "defaultPage",
          "labelIcon": "mdi:page-next-outline",
          "min": 1,
          "max": 50,
          "step": 1
        },
        {
          "kind": "number",
          "key": "siblingCount",
          "label": "siblingCount",
          "labelIcon": "mdi:dots-horizontal",
          "min": 0,
          "max": 3,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "size",
          "label": "size",
          "labelIcon": "mdi:format-size",
          "attrType": "str",
          "enumValue": {
            "Default": "",
            "Small": "small"
          }
        }
      ],
      "code": {
        "strategy": "nav-pagination"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "speed-dial",
    "id": "SpeedDial",
    "label": "Speed Dial",
    "displayLabel": "Speed Dial",
    "path": "demos/lib/SpeedDial.json",
    "definition": {
      "id": "SpeedDial",
      "category": "Navigation",
      "label": "Speed Dial",
      "titleIcon": "mdi:plus-circle-multiple-outline",
      "status": "approved",
      "intro": "FAB con acciones relacionadas MUI Speed Dial; animación y tooltips vía CSS.",
      "component": {
        "name": "SpeedDial",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-speed-dial"
      },
      "state": {
        "direction": "up"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-up",
          "attrType": "str",
          "enumValue": {
            "Up": "up",
            "Left": "left",
            "Right": "right"
          }
        }
      ],
      "code": {
        "strategy": "nav-speed-dial",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "stepper",
    "id": "Stepper",
    "label": "Stepper",
    "displayLabel": "Stepper",
    "path": "demos/lib/Stepper.json",
    "definition": {
      "id": "Stepper",
      "category": "Navigation",
      "label": "Stepper",
      "titleIcon": "mdi:stairs-up",
      "status": "approved",
      "intro": "Alias MUI de <code>Steps</code> — mismo DOM y controlador <code>data-mimicus-nav=\"steps\"</code>.",
      "component": {
        "name": "Stepper",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-steps"
      },
      "state": {
        "current": 1,
        "direction": "horizontal",
        "clickable": false
      },
      "fields": [
        {
          "kind": "number",
          "key": "current",
          "label": "activeStep",
          "labelIcon": "mdi:counter",
          "min": 0,
          "max": 2,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "orientation",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Horizontal": "horizontal",
            "Vertical": "vertical"
          }
        }
      ],
      "code": {
        "strategy": "nav-steps"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "steps",
    "id": "Steps",
    "label": "Steps",
    "displayLabel": "Steps",
    "path": "demos/lib/Steps.json",
    "definition": {
      "id": "Steps",
      "category": "Navigation",
      "label": "Steps",
      "titleIcon": "mdi:stairs",
      "status": "approved",
      "intro": "Pasos Ant Design / Stepper MUI: indicador de progreso; opcional <code>clickable</code> para saltar pasos.",
      "component": {
        "name": "Steps",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-steps"
      },
      "state": {
        "current": 1,
        "direction": "horizontal",
        "clickable": false
      },
      "fields": [
        {
          "kind": "number",
          "key": "current",
          "label": "current",
          "labelIcon": "mdi:counter",
          "min": 0,
          "max": 2,
          "step": 1
        },
        {
          "kind": "select-enum",
          "key": "direction",
          "label": "direction",
          "labelIcon": "mdi:arrow-split-vertical",
          "attrType": "str",
          "enumValue": {
            "Horizontal": "horizontal",
            "Vertical": "vertical"
          }
        },
        {
          "kind": "switch",
          "key": "clickable",
          "label": "clickable",
          "labelIcon": "mdi:gesture-tap"
        }
      ],
      "code": {
        "strategy": "nav-steps"
      }
    }
  },
  {
    "section": "navigation",
    "category": "Navigation",
    "slug": "tabs",
    "id": "Tabs",
    "label": "Tabs",
    "displayLabel": "Tabs",
    "path": "demos/lib/Tabs.json",
    "definition": {
      "id": "Tabs",
      "category": "Navigation",
      "label": "Tabs",
      "titleIcon": "mdi:tab",
      "status": "approved",
      "intro": "Pestañas Ant Design / MUI: navegación por paneles con controlador <code>data-mimicus-nav=\"tabs\"</code> en JS puro.",
      "component": {
        "name": "Tabs",
        "path": "src/components/navigation/Navigation.jsx"
      },
      "preview": {
        "template": "nav-tabs"
      },
      "state": {
        "type": "line",
        "tabPosition": "top"
      },
      "details": {
        "tabCount": 3
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "type",
          "label": "type",
          "labelIcon": "mdi:cards-outline",
          "attrType": "str",
          "enumValue": {
            "Line": "line",
            "Card": "card"
          }
        },
        {
          "kind": "select-enum",
          "key": "tabPosition",
          "label": "tabPosition",
          "labelIcon": "mdi:arrow-collapse-up",
          "attrType": "str",
          "enumValue": {
            "Top": "top",
            "Left": "left"
          }
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "tabCount",
          "label": "Pestañas",
          "labelIcon": "mdi:numeric",
          "min": 2,
          "max": 5,
          "step": 1
        }
      ],
      "code": {
        "strategy": "nav-tabs",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  }
];
