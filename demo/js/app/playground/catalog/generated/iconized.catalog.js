/** Auto-generado — Iconized */
export const items = [
  {
    "section": "general",
    "category": "Iconized",
    "slug": "button",
    "id": "Button",
    "label": "Button",
    "displayLabel": "Button",
    "path": "demos/lib/Button.json",
    "definition": {
      "id": "Button",
      "category": "Iconized",
      "label": "Button",
      "titleIcon": "mdi:gesture-tap",
      "status": "approved",
      "intro": "Botón con variantes Ant/MUI (<code>solid</code>, <code>outlined</code>, <code>text</code>, <code>ghost</code>, <code>dashed</code>, <code>glass</code>), tamaños, <code>block</code>, <code>danger</code>, icono con placement y enlace. Se adapta a paleta y look & feel vía tokens <code>--bttn-*</code>.",
      "component": {
        "name": "Button",
        "path": "src/components/Button.jsx"
      },
      "preview": {
        "template": "icon-text",
        "scale": 1.6,
        "options": {
          "wrapperStyle": "width: fit-content; max-width: 100%;"
        }
      },
      "state": {
        "color": null,
        "variant": "solid",
        "size": "medium",
        "shape": "round",
        "type": "button",
        "block": false,
        "danger": false,
        "ghost": false,
        "dashed": false,
        "disabled": false,
        "loading": false,
        "iconPlacement": "start"
      },
      "details": {
        "text": "Button",
        "icon": "mdi:gesture-tap-button"
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "attrDefault": "solid",
          "options": [
            {
              "label": "solid",
              "value": "solid"
            },
            {
              "label": "outlined",
              "value": "outlined"
            },
            {
              "label": "ghost",
              "value": "ghost"
            },
            {
              "label": "soft",
              "value": "soft"
            },
            {
              "label": "text",
              "value": "text"
            },
            {
              "label": "dashed",
              "value": "dashed"
            },
            {
              "label": "glass",
              "value": "glass"
            }
          ],
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "size",
          "label": "size",
          "labelIcon": "mdi:resize",
          "attrType": "str",
          "attrDefault": "medium",
          "options": {
            "small": "small",
            "medium": "medium",
            "large": "large"
          },
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "shape",
          "label": "shape",
          "labelIcon": "mdi:circle-outline",
          "attrType": "str",
          "attrDefault": "round",
          "options": {
            "round": "round",
            "rect": "rect",
            "pill": "pill",
            "circle": "circle"
          },
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "iconPlacement",
          "label": "iconPlacement",
          "labelIcon": "mdi:arrow-left-right",
          "attrType": "str",
          "attrDefault": "start",
          "options": {
            "start": "start",
            "end": "end"
          },
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "type",
          "label": "htmlType",
          "labelIcon": "mdi:format-list-bulleted-type",
          "attrDefault": "button",
          "options": [
            {
              "label": "button",
              "value": "button"
            },
            {
              "label": "submit",
              "value": "submit"
            },
            {
              "label": "reset",
              "value": "reset"
            }
          ],
          "accent": "primary"
        },
        {
          "kind": "color",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        },
        {
          "kind": "switch-group",
          "key": "flags",
          "label": "Flags",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "block",
              "label": "block"
            },
            {
              "key": "danger",
              "label": "danger"
            },
            {
              "key": "ghost",
              "label": "ghost"
            },
            {
              "key": "dashed",
              "label": "dashed"
            },
            {
              "key": "disabled",
              "label": "disabled"
            },
            {
              "key": "loading",
              "label": "loading"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "icon-text",
          "key": "icon-text",
          "label": "Texto e ícono",
          "labelIcon": "mdi:text-box-multiple-outline",
          "iconKey": "icon",
          "textKey": "text"
        }
      ],
      "code": {
        "strategy": "icon-text-body"
      }
    }
  },
  {
    "section": "general",
    "category": "Iconized",
    "slug": "button-iconify",
    "id": "ButtonIconify",
    "label": "ButtonIconify",
    "displayLabel": "ButtonIconify",
    "path": "demos/lib/ButtonIconify.json",
    "definition": {
      "id": "ButtonIconify",
      "category": "Iconized",
      "label": "ButtonIconify",
      "titleIcon": "mdi:gesture-tap-button",
      "status": "approved",
      "intro": "Botón solo icono con forma, variante, color y estados.",
      "component": {
        "name": "ButtonIconify",
        "path": "src/lib/primitives/iconized/ButtonIconify.svelte"
      },
      "preview": {
        "template": "component",
        "scale": 2.5
      },
      "state": {
        "icon": "mdi:account",
        "color": null,
        "variant": null,
        "shape": "",
        "disabled": false,
        "loading": false
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "icon",
          "label": "icon",
          "enumRef": "iconEnum"
        },
        {
          "kind": "palette",
          "key": "shape",
          "label": "Forma",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "attrEmit": "emptyToNull",
          "options": [
            {
              "label": "Ninguno",
              "value": ""
            },
            {
              "label": "Round",
              "value": "round"
            },
            {
              "label": "Círculo",
              "value": "circle"
            },
            {
              "label": "Cuadrado",
              "value": "square"
            },
            {
              "label": "Píldora",
              "value": "pill"
            }
          ],
          "accent": "primary",
          "iconMap": {
            "": "mdi:block-helper",
            "round": "mdi:rounded-corner",
            "circle": "mdi:circle-outline",
            "square": "mdi:square-outline",
            "pill": "mdi:pill"
          }
        },
        {
          "kind": "palette",
          "key": "variant",
          "label": "Variante",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "options": [
            {
              "label": "Por defecto",
              "value": null
            },
            {
              "label": "solid",
              "value": "solid"
            },
            {
              "label": "outlined",
              "value": "outlined"
            },
            {
              "label": "ghost",
              "value": "ghost"
            },
            {
              "label": "text",
              "value": "text"
            },
            {
              "label": "glass",
              "value": "glass"
            }
          ],
          "accent": "primary",
          "iconMap": {
            "": "mdi:block-helper",
            "solid": "mdi:checkbox-blank-circle",
            "outlined": "mdi:checkbox-blank-circle-outline",
            "ghost": "mdi:ghost-outline",
            "text": "mdi:format-text",
            "glass": "mdi:shimmer"
          }
        },
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        },
        {
          "kind": "switch-group",
          "key": "estados",
          "label": "Estado",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "disabled",
              "label": "disabled"
            },
            {
              "key": "loading",
              "label": "loading"
            }
          ]
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Iconized",
    "slug": "checkbox-icon",
    "id": "CheckboxIcon",
    "label": "CheckboxIcon",
    "displayLabel": "CheckboxIcon",
    "path": "demos/lib/CheckboxIcon.json",
    "definition": {
      "id": "CheckboxIcon",
      "category": "Iconized",
      "label": "CheckboxIcon",
      "titleIcon": "mdi:checkbox-marked-circle-outline",
      "status": "approved",
      "intro": "Casilla con iconos personalizables en cada estado, colores activo/inactivo y modo carga.",
      "component": {
        "name": "CheckboxIcon",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "checkbox-icon",
        "scale": 1.3
      },
      "state": {
        "checked": true,
        "color": null,
        "colorFalse": null,
        "variant": null,
        "loading": false,
        "disabled": false
      },
      "details": {
        "previewLabel": "Texto de demostración",
        "previewIconTrue": "fluent-emoji:rocket",
        "previewIconFalse": "fluent-emoji:fire"
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "Variante",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "options": [
            {
              "label": "Por defecto",
              "value": null
            },
            {
              "label": "glass",
              "value": "glass"
            }
          ],
          "accent": "primary",
          "iconMap": {
            "": "mdi:block-helper",
            "glass": "mdi:shimmer"
          }
        },
        {
          "kind": "color",
          "key": "color",
          "label": "Activo",
          "labelIcon": "mdi:palette-swatch",
          "attrType": "color"
        },
        {
          "kind": "color",
          "key": "colorFalse",
          "label": "Inactivo",
          "labelIcon": "mdi:palette-outline",
          "attrType": "color"
        },
        {
          "kind": "switch-group",
          "key": "estados",
          "label": "Estado",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "loading",
              "label": "loading"
            },
            {
              "key": "disabled",
              "label": "disabled"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "previewLabel",
          "label": "slot",
          "labelIcon": "mdi:text-short",
          "placeholder": "Ingrese un texto descriptivo"
        },
        {
          "kind": "select-enum",
          "key": "previewIconTrue",
          "label": "Ícono on",
          "labelIcon": "mdi:image-multiple-outline",
          "enumRef": "iconEnum"
        },
        {
          "kind": "select-enum",
          "key": "previewIconFalse",
          "label": "Ícono off",
          "labelIcon": "mdi:image-multiple-outline",
          "enumRef": "iconEnum"
        }
      ],
      "presets": [
        {
          "label": "Modo claro",
          "icon": "mdi:weather-sunny",
          "state": {
            "checked": false,
            "color": "primary",
            "colorFalse": "neutral",
            "loading": false,
            "disabled": false
          },
          "details": {
            "previewLabel": "Modo Claro",
            "previewIconTrue": "mdi:weather-night",
            "previewIconFalse": "mdi:weather-sunny"
          }
        },
        {
          "label": "Notificaciones",
          "icon": "mdi:bell-outline",
          "state": {
            "checked": false,
            "color": "primary",
            "colorFalse": "neutral",
            "loading": false,
            "disabled": false
          },
          "details": {
            "previewLabel": "Notificaciones",
            "previewIconTrue": "mdi:bell",
            "previewIconFalse": "mdi:bell-off"
          }
        },
        {
          "label": "Bluetooth",
          "icon": "mdi:bluetooth",
          "state": {
            "checked": true,
            "color": "primary",
            "colorFalse": "neutral",
            "loading": false,
            "disabled": false
          },
          "details": {
            "previewLabel": "Bluetooth",
            "previewIconTrue": "mdi:bluetooth",
            "previewIconFalse": "mdi:bluetooth-off"
          }
        }
      ],
      "code": {
        "strategy": "checkbox-icon-body"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Iconized",
    "slug": "flex-options",
    "id": "FlexOptions",
    "label": "FlexOptions",
    "displayLabel": "FlexOptions",
    "path": "demos/components/FlexOptions.json",
    "definition": {
      "id": "FlexOptions",
      "category": "Iconized",
      "label": "FlexOptions",
      "titleIcon": "mdi:dots-horizontal-circle-outline",
      "status": "pending",
      "intro": "Barra de acciones tipo toolbar: botones <code>ButtonOption</code>, separadores automáticos y menú overflow <code>CascadeOptions</code>.",
      "component": {
        "name": "FlexOptions",
        "path": "src/components/options/FlexOptions.svelte"
      },
      "preview": {
        "template": "cmp-flex-options"
      },
      "demoConfig": {
        "showMore": true
      },
      "state": {},
      "demoConfigFields": [
        {
          "kind": "switch",
          "key": "showMore",
          "label": "Menú ⋮",
          "labelIcon": "mdi:dots-vertical"
        }
      ]
    }
  },
  {
    "section": "general",
    "category": "Iconized",
    "slug": "float-button",
    "id": "FloatButton",
    "label": "FloatButton",
    "displayLabel": "FloatButton",
    "path": "demos/lib/FloatButton.json",
    "definition": {
      "id": "FloatButton",
      "category": "Iconized",
      "label": "FloatButton",
      "titleIcon": "mdi:plus-circle-outline",
      "status": "approved",
      "intro": "Botón flotante (FAB) para la acción principal de una vista. Soporta <code>type</code> default/primary, formas circle/square, tamaños y modo extendido con texto — convenciones <a href=\"https://ant.design/components/float-button\">Ant Design</a> y <a href=\"https://mui.com/material-ui/react-floating-action-button/\">MUI Fab</a>.",
      "component": {
        "name": "FloatButton",
        "path": "src/components/FloatButton.jsx"
      },
      "preview": {
        "template": "float-button",
        "scale": 1
      },
      "state": {
        "type": "primary",
        "shape": "circle",
        "size": "large",
        "disabled": false
      },
      "details": {
        "icon": "mdi:plus",
        "label": ""
      },
      "fields": [
        {
          "kind": "palette",
          "key": "type",
          "label": "type",
          "labelIcon": "mdi:palette",
          "attrType": "str",
          "attrDefault": "default",
          "options": {
            "default": "default",
            "primary": "primary"
          },
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "shape",
          "label": "shape",
          "labelIcon": "mdi:circle-outline",
          "attrType": "str",
          "attrDefault": "circle",
          "options": {
            "circle": "circle",
            "square": "square"
          },
          "accent": "primary"
        },
        {
          "kind": "palette",
          "key": "size",
          "label": "size",
          "labelIcon": "mdi:resize",
          "attrType": "str",
          "attrDefault": "large",
          "options": {
            "small": "small",
            "large": "large"
          },
          "accent": "primary"
        },
        {
          "kind": "switch",
          "key": "disabled",
          "label": "disabled",
          "labelIcon": "mdi:cancel"
        }
      ],
      "detailFields": [
        {
          "kind": "icon-text",
          "key": "icon-text",
          "label": "Icono y etiqueta",
          "labelIcon": "mdi:text-box-outline",
          "iconKey": "icon",
          "textKey": "label"
        }
      ],
      "code": {
        "strategy": "icon-text-body",
        "options": {
          "iconKey": "icon",
          "textKey": "label"
        }
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Iconized",
    "slug": "labeled-switch",
    "id": "LabeledSwitch",
    "label": "LabeledSwitch",
    "displayLabel": "LabeledSwitch",
    "path": "demos/components/LabeledSwitch.json",
    "definition": {
      "id": "LabeledSwitch",
      "category": "Iconized",
      "label": "LabeledSwitch",
      "titleIcon": "mdi:toggle-switch-outline",
      "status": "pending",
      "intro": "<code>Switch</code> con etiqueta de texto inline (wrapper de capacitación). Distinto del <code>Switch</code> base del kit.",
      "component": {
        "name": "LabeledSwitch",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "cmp-labeled-switch"
      },
      "state": {
        "checked": true,
        "readonly": false,
        "label": "Publicar en catálogo"
      },
      "fields": [
        {
          "kind": "text",
          "key": "label",
          "label": "label",
          "labelIcon": "mdi:form-textbox"
        },
        {
          "kind": "switch-group",
          "key": "estados",
          "label": "Estado",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "checked",
              "label": "checked"
            },
            {
              "key": "readonly",
              "label": "readonly"
            }
          ]
        }
      ]
    }
  },
  {
    "section": "data-entry",
    "category": "Iconized",
    "slug": "switch",
    "id": "Switch",
    "label": "Switch",
    "displayLabel": "Switch",
    "path": "demos/lib/Switch.json",
    "definition": {
      "id": "Switch",
      "category": "Iconized",
      "label": "Switch",
      "titleIcon": "mdi:toggle-switch-outline",
      "status": "approved",
      "intro": "Interruptor deslizante con etiqueta, colores y estados equivalentes al checkbox compacto.",
      "component": {
        "name": "Switch",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "switch",
        "scale": 1.3
      },
      "state": {
        "checked": true,
        "color": null,
        "colorFalse": null,
        "variant": null,
        "loading": false,
        "disabled": false
      },
      "details": {
        "label": "Texto de demostración"
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "Variante",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "options": [
            {
              "label": "Por defecto",
              "value": null
            },
            {
              "label": "glass",
              "value": "glass"
            }
          ],
          "accent": "primary",
          "iconMap": {
            "": "mdi:block-helper",
            "glass": "mdi:shimmer"
          }
        },
        {
          "kind": "color",
          "key": "color",
          "label": "Activo",
          "labelIcon": "mdi:palette-swatch",
          "attrType": "color"
        },
        {
          "kind": "color",
          "key": "colorFalse",
          "label": "Inactivo",
          "labelIcon": "mdi:palette-outline",
          "attrType": "color"
        },
        {
          "kind": "switch-group",
          "key": "estados",
          "label": "Estado",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "loading",
              "label": "loading"
            },
            {
              "key": "disabled",
              "label": "disabled"
            }
          ]
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "label",
          "label": "slot",
          "labelIcon": "mdi:text-short",
          "placeholder": "Ingrese un texto descriptivo"
        }
      ],
      "code": {
        "strategy": "bind-checked-body",
        "options": {
          "textKey": "label"
        }
      }
    }
  }
];
