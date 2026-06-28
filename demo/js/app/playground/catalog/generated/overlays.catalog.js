/** Auto-generado — Overlays */
export const items = [
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "action-drawer",
    "id": "ActionDrawer",
    "label": "ActionDrawer",
    "displayLabel": "ActionDrawer",
    "path": "demos/lib/ActionDrawer.json",
    "definition": {
      "id": "ActionDrawer",
      "category": "Overlays",
      "label": "ActionDrawer",
      "titleIcon": "mdi:dock-bottom",
      "status": "approved",
      "intro": "Panel lateral o inferior que desliza sobre el contenido; ideal para acciones secundarias sin abandonar la vista.",
      "component": {
        "name": "ActionDrawer",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "action-drawer"
      },
      "state": {
        "side": "right",
        "_scope": "global"
      },
      "details": {
        "bSimularLoading": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "_scope",
          "label": "scope",
          "labelIcon": "mdi:earth",
          "attrOmit": true,
          "enumValue": {
            "global": "global",
            "local": "local"
          }
        },
        {
          "kind": "palette",
          "key": "side",
          "label": "Lado",
          "labelIcon": "mdi:dock-left",
          "attrType": "str",
          "attrName": "side",
          "layout": "sideCross",
          "accent": "primary",
          "options": {
            "Top": "top",
            "Left": "left",
            "Ninguno": null,
            "Right": "right",
            "Bottom": "bottom"
          },
          "name": "drawer-side-2",
          "iconMapRef": "drawerSide"
        }
      ],
      "detailFields": [
        {
          "kind": "switch",
          "key": "bSimularLoading",
          "label": "Simular loading (5s al abrir)"
        }
      ],
      "code": {
        "strategy": "action-drawer"
      }
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "dialog",
    "id": "Dialog",
    "label": "Dialog",
    "displayLabel": "Dialog",
    "path": "demos/lib/Dialog.json",
    "definition": {
      "id": "Dialog",
      "category": "Overlays",
      "label": "Dialog",
      "titleIcon": "mdi:message-text-outline",
      "status": "pending",
      "intro": "Diálogo nativo <code>&lt;dialog&gt;</code> con scope global/local, blur de fondo y cierre por backdrop o tecla Escape.",
      "component": {
        "name": "Dialog",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "dialog"
      },
      "state": {
        "_scope": "global",
        "notClose": false,
        "backeffect": "blur"
      },
      "details": {
        "titulo": "Dialog demo"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "_scope",
          "label": "scope",
          "labelIcon": "mdi:earth",
          "attrOmit": true,
          "enumValue": {
            "global": "global",
            "local": "local"
          }
        },
        {
          "kind": "select-enum",
          "key": "backeffect",
          "label": "backeffect",
          "labelIcon": "mdi:blur",
          "attrType": "str",
          "enumValue": {
            "blur": "blur",
            "none": "none"
          }
        },
        {
          "kind": "switch",
          "key": "notClose",
          "label": "notClose",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "code": {
        "strategy": "dialog"
      }
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "floating-component",
    "id": "FloatingComponent",
    "label": "FloatingComponent",
    "displayLabel": "FloatingComponent",
    "path": "demos/components/FloatingComponent.json",
    "definition": {
      "id": "FloatingComponent",
      "category": "Overlays",
      "label": "FloatingComponent",
      "titleIcon": "mdi:arrange-bring-forward",
      "status": "pending",
      "intro": "Panel flotante absoluto junto al contenido (p. ej. acciones de fila). Expone <code>FC_KEEP_ALIVE_CTX</code> para menús anidados. En la vista previa, pasa el cursor sobre la <strong>fila resaltada</strong> o activa <code>showfloat</code>.",
      "component": {
        "name": "FloatingComponent",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "cmp-floating-component",
        "style": "width: 100%; align-self: stretch;"
      },
      "shell": {
        "relieve": 58,
        "configBlockCount": 2
      },
      "state": {
        "showfloat": false,
        "rowText": "Factura #1042 — pendiente de revisión",
        "horizontal": "right",
        "vertical": "center"
      },
      "fields": [
        {
          "kind": "switch",
          "key": "showfloat",
          "label": "showfloat",
          "labelIcon": "mdi:eye-outline",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        },
        {
          "kind": "text",
          "key": "rowText",
          "label": "rowText",
          "labelIcon": "mdi:text"
        },
        {
          "kind": "select-enum",
          "key": "horizontal",
          "label": "horizontal",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "enumValue": {
            "left": "left",
            "center": "center",
            "right": "right"
          }
        },
        {
          "kind": "select-enum",
          "key": "vertical",
          "label": "vertical",
          "labelIcon": "mdi:arrow-expand-vertical",
          "enumValue": {
            "top": "top",
            "center": "center",
            "bottom": "bottom"
          }
        }
      ],
      "presets": [
        {
          "label": "Hover en fila",
          "icon": "mdi:cursor-default-gesture",
          "state": {
            "showfloat": false,
            "rowText": "Factura #1042 — pendiente de revisión",
            "horizontal": "right",
            "vertical": "center"
          }
        },
        {
          "label": "Siempre visible",
          "icon": "mdi:eye-outline",
          "state": {
            "showfloat": true,
            "rowText": "Fila con panel flotante fijo",
            "horizontal": "right",
            "vertical": "center"
          }
        },
        {
          "label": "Izquierda",
          "icon": "mdi:arrow-left",
          "state": {
            "showfloat": true,
            "rowText": "Acciones ancladas a la izquierda",
            "horizontal": "left",
            "vertical": "center"
          }
        },
        {
          "label": "Abajo centrado",
          "icon": "mdi:arrow-down",
          "state": {
            "showfloat": true,
            "rowText": "Métrica con barra inferior",
            "horizontal": "center",
            "vertical": "bottom"
          }
        }
      ],
      "tests": "extras/FloatingComponentTests.svelte"
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "invoked-floater",
    "id": "InvokedFloater",
    "label": "InvokedFloater",
    "displayLabel": "InvokedFloater",
    "path": "demos/components/InvokedFloater.json",
    "definition": {
      "id": "InvokedFloater",
      "category": "Overlays",
      "label": "InvokedFloater",
      "titleIcon": "mdi:message-arrow-right-outline",
      "status": "pending",
      "intro": "Popover anclado con <code>Dialog</code> nativo: posicionamiento viewport-aware, triggers click/hover/contextmenu y cierre exterior.",
      "component": {
        "name": "InvokedFloater",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "cmp-invoked-floater"
      },
      "state": {
        "anchorLabel": "Abrir panel",
        "panelText": "Contenido del floater reposicionado según espacio disponible.",
        "side": "bottom",
        "align": "center",
        "trigger": "click"
      },
      "fields": [
        {
          "kind": "text",
          "key": "anchorLabel",
          "label": "anchorLabel",
          "labelIcon": "mdi:gesture-tap-button"
        },
        {
          "kind": "text",
          "key": "panelText",
          "label": "panelText",
          "labelIcon": "mdi:text"
        },
        {
          "kind": "select-enum",
          "key": "side",
          "label": "side",
          "labelIcon": "mdi:arrow-decision",
          "enumValue": {
            "top": "top",
            "right": "right",
            "bottom": "bottom",
            "left": "left"
          }
        },
        {
          "kind": "select-enum",
          "key": "align",
          "label": "align",
          "labelIcon": "mdi:format-align-center",
          "enumValue": {
            "start": "start",
            "center": "center",
            "end": "end"
          }
        },
        {
          "kind": "select-enum",
          "key": "trigger",
          "label": "trigger",
          "labelIcon": "mdi:gesture-tap",
          "enumValue": {
            "click": "click",
            "hover": "hover",
            "contextmenu": "contextmenu",
            "manual": "manual"
          }
        }
      ]
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "loading",
    "id": "Loading",
    "label": "Loading",
    "displayLabel": "Loading",
    "path": "demos/lib/Loading.json",
    "definition": {
      "id": "Loading",
      "category": "Overlays",
      "label": "Loading",
      "titleIcon": "mdi:loading",
      "status": "approved",
      "intro": "Indicador a pantalla completa durante operaciones largas; color coherente con la paleta.",
      "component": {
        "name": "Loading",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "loading"
      },
      "state": {
        "color": null
      },
      "demoConfig": {
        "autoCloseSec": 3
      },
      "fields": [
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        }
      ],
      "demoConfigFields": [
        {
          "kind": "number",
          "key": "autoCloseSec",
          "label": "Autocierre (s)",
          "labelIcon": "mdi:timer-outline",
          "min": 0.5,
          "max": 60,
          "step": 0.5
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "modal",
    "id": "Modal",
    "label": "Modal",
    "displayLabel": "Modal",
    "path": "demos/lib/Modal.json",
    "definition": {
      "id": "Modal",
      "category": "Overlays",
      "label": "Modal",
      "titleIcon": "mdi:window-maximize",
      "status": "approved",
      "intro": "Diálogo modal centrado: título por slot o mínimo, cierre en cabecera, scope global/local (como ActionDrawer) e inclusión de modales anidados.",
      "component": {
        "name": "Modal",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "modal"
      },
      "tests": "extras/ModalTests.svelte",
      "state": {
        "_scope": "global",
        "showCloseHeader": true,
        "variant": "solid"
      },
      "details": {
        "titulo": "Modal Demo",
        "icono": "logos:svelte-icon",
        "bTituloPorSlot": true,
        "bSimularLoading": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "_scope",
          "label": "scope",
          "labelIcon": "mdi:earth",
          "attrOmit": true,
          "enumValue": {
            "global": "global",
            "local": "local"
          }
        },
        {
          "kind": "palette",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "options": {
            "solid": "solid",
            "flat": "flat",
            "glass": "glass"
          },
          "accent": "primary",
          "iconMap": {
            "solid": "mdi:card-bulleted",
            "flat": "mdi:card-outline",
            "glass": "mdi:shimmer"
          }
        },
        {
          "kind": "switch",
          "key": "showCloseHeader",
          "label": "showCloseHeader",
          "attrOmit": true,
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "icon-text",
          "key": "titulo-icono",
          "label": "Título",
          "labelIcon": "mdi:format-title",
          "iconKey": "icono",
          "textKey": "titulo"
        },
        {
          "kind": "switch",
          "key": "bTituloPorSlot",
          "label": "Título por slot"
        },
        {
          "kind": "switch",
          "key": "bSimularLoading",
          "label": "Simular loading (5s al abrir)"
        }
      ],
      "code": {
        "strategy": "modal"
      }
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "tip-info",
    "id": "TipInfo",
    "label": "TipInfo",
    "displayLabel": "TipInfo",
    "path": "demos/components/TipInfo.json",
    "definition": {
      "id": "TipInfo",
      "category": "Overlays",
      "label": "TipInfo",
      "titleIcon": "mdi:information-outline",
      "status": "pending",
      "intro": "Etiqueta de campo con icono de ayuda: tooltip flotante (<code>InvokedFloater</code>) o modal. <code>kind</code> info/warn.",
      "component": {
        "name": "TipInfo",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "cmp-tip-info"
      },
      "state": {
        "label": "Nombre del curso",
        "descripcion": "Nombre visible en el catálogo de capacitación.",
        "kind": "info",
        "trigger": "click",
        "useModal": false
      },
      "fields": [
        {
          "kind": "text",
          "key": "label",
          "label": "label",
          "labelIcon": "mdi:form-textbox"
        },
        {
          "kind": "text",
          "key": "descripcion",
          "label": "descripcion",
          "labelIcon": "mdi:text"
        },
        {
          "kind": "select-enum",
          "key": "kind",
          "label": "kind",
          "labelIcon": "mdi:alert",
          "enumValue": {
            "info": "info",
            "warn": "warn"
          }
        },
        {
          "kind": "select-enum",
          "key": "trigger",
          "label": "trigger",
          "labelIcon": "mdi:gesture-tap",
          "enumValue": {
            "click": "click",
            "hover": "hover"
          }
        },
        {
          "kind": "switch",
          "key": "useModal",
          "label": "useModal",
          "labelIcon": "mdi:application-outline",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ]
    }
  },
  {
    "section": "overlays",
    "category": "Overlays",
    "slug": "toaster",
    "id": "Toaster",
    "label": "Toaster",
    "displayLabel": "Toaster",
    "path": "demos/lib/Toaster.json",
    "definition": {
      "id": "Toaster",
      "category": "Overlays",
      "label": "Toaster",
      "titleIcon": "mdi:bell-badge-outline",
      "status": "pending",
      "intro": "Notificaciones toast (svelte-french-toast): éxito, error y carga. Incluye el proveedor <code>Toaster</code> y helpers <code>toastSuccess</code> / <code>toastError</code>.",
      "component": {
        "name": "Toaster",
        "path": "src/components/overlays/Overlays.tsx"
      },
      "preview": {
        "template": "toaster"
      },
      "state": {},
      "code": {
        "strategy": "toaster"
      }
    }
  }
];
