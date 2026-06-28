/** Auto-generado — Primitives */
export const items = [
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "avatar",
    "id": "Avatar",
    "label": "Avatar",
    "displayLabel": "Avatar",
    "path": "demos/lib/Avatar.json",
    "definition": {
      "id": "Avatar",
      "category": "Primitives",
      "label": "Avatar",
      "titleIcon": "mdi:account-circle-outline",
      "status": "approved",
      "intro": "Avatar con imagen, iniciales o grupo apilado. <code>data-mimicus-display</code> opcional; ver <a href=\"https://mui.com/material-ui/react-avatar/\" target=\"_blank\" rel=\"noreferrer\">MUI Avatar</a>.",
      "component": {
        "name": "Avatar",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-avatar"
      },
      "state": {
        "variant": "circular",
        "group": false,
        "max": 4
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:crop-square",
          "attrType": "str",
          "enumValue": {
            "Circular": "circular",
            "Rounded": "rounded",
            "Square": "square"
          }
        },
        {
          "kind": "switch",
          "key": "group",
          "label": "AvatarGroup",
          "labelIcon": "mdi:account-group-outline",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "code": {
        "strategy": "disp-avatar"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Primitives",
    "slug": "checkbox-chip",
    "id": "CheckboxChip",
    "label": "CheckboxChip",
    "displayLabel": "CheckboxChip",
    "path": "demos/lib/CheckboxChip.json",
    "definition": {
      "id": "CheckboxChip",
      "category": "Primitives",
      "label": "CheckboxChip",
      "titleIcon": "mdi:checkbox-multiple-blank-circle-outline",
      "status": "approved",
      "intro": "Selector de valor único en chips (píldoras). Pensado para paletas de color semántico (<code>primary</code>, <code>success</code>, …) y opciones compactas con icono. Sustituye el layout <code>chips</code> de <code>PaletteGrid</code> en campos <code>color</code> del playground.",
      "component": {
        "name": "CheckboxChip",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "checkbox-chip",
        "scale": 1.15
      },
      "state": {
        "color": null
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
      "code": {
        "strategy": "checkbox-chip-body",
        "options": {
          "valueKey": "color"
        }
      }
    }
  },
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "chip",
    "id": "Chip",
    "label": "Chip",
    "displayLabel": "Chip",
    "path": "demos/lib/Chip.json",
    "definition": {
      "id": "Chip",
      "category": "Primitives",
      "label": "Chip",
      "titleIcon": "mdi:tag-outline",
      "status": "approved",
      "intro": "Alias de <code>Tag</code> para etiquetas informativas con variante, color y forma.",
      "component": {
        "name": "Chip",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-tag",
        "scale": 1.6
      },
      "state": {
        "variant": "ghost",
        "shape": "pill",
        "upper": false,
        "color": null
      },
      "details": {
        "text": "Nuevo",
        "icon": ""
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "attrDefault": "ghost",
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
              "label": "glass",
              "value": "glass"
            }
          ]
        },
        {
          "kind": "palette",
          "key": "shape",
          "label": "shape",
          "labelIcon": "mdi:vector-square",
          "attrType": "str",
          "attrDefault": "pill",
          "options": [
            {
              "label": "pill",
              "value": "pill"
            },
            {
              "label": "round",
              "value": "round"
            },
            {
              "label": "rect",
              "value": "rect"
            }
          ]
        },
        {
          "kind": "color",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        },
        {
          "kind": "switch",
          "key": "upper",
          "label": "uppercase",
          "labelIcon": "mdi:format-letter-case-upper",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "icon-text",
          "key": "icon-text",
          "label": "Texto",
          "labelIcon": "mdi:text",
          "iconKey": "icon",
          "textKey": "text"
        }
      ],
      "code": {
        "strategy": "disp-tag"
      }
    }
  },
  {
    "section": "general",
    "category": "Primitives",
    "slug": "iconify",
    "id": "Iconify",
    "label": "Iconify",
    "displayLabel": "Iconify",
    "path": "demos/lib/Iconify.json",
    "definition": {
      "id": "Iconify",
      "category": "Primitives",
      "label": "Iconify",
      "titleIcon": "mdi:emoticon-outline",
      "status": "approved",
      "intro": "Icono vectorial vía Iconify con volteo, rotación y estado de carga.",
      "component": {
        "name": "Iconify",
        "path": "src/lib/primitives/Iconify.svelte"
      },
      "preview": {
        "template": "cmp-iconify",
        "scale": 1.5
      },
      "state": {
        "icon": "fluent-emoji:rocket",
        "fliph": false,
        "flipv": false,
        "loading": false,
        "rotate": 0
      },
      "demoConfig": {
        "sizeEm": 2
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "icon",
          "label": "icon",
          "enumRef": "iconEnum"
        },
        {
          "kind": "switch-group",
          "key": "estado",
          "label": "Estado",
          "labelIcon": "mdi:tune",
          "switches": [
            {
              "key": "fliph",
              "label": "fliph",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "flipv",
              "label": "flipv",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "loading",
              "label": "loading",
              "iconOn": "mdi:loading",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            }
          ]
        },
        {
          "kind": "range",
          "key": "rotate",
          "label": "rotate",
          "labelIcon": "mdi:rotate-right",
          "min": 0,
          "max": 360,
          "step": 1,
          "attrDefault": 0
        }
      ],
      "demoConfigFields": [
        {
          "kind": "range",
          "key": "sizeEm",
          "label": "Tamaño (em)",
          "labelIcon": "mdi:format-size",
          "min": 1,
          "max": 5,
          "step": 0.1,
          "attrDefault": 2
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "qrcode",
    "id": "QRCode",
    "label": "QRCode",
    "displayLabel": "QRCode",
    "path": "demos/lib/QRCode.json",
    "definition": {
      "id": "QRCode",
      "category": "Primitives",
      "label": "QRCode",
      "titleIcon": "mdi:qrcode",
      "status": "approved",
      "intro": "Código QR renderizado en <code>canvas</code> (patrón demo determinista). Ver <a href=\"https://ant.design/components/qr-code\" target=\"_blank\" rel=\"noreferrer\">Ant QRCode</a>.",
      "component": {
        "name": "QRCode",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-qrcode"
      },
      "state": {
        "size": 128,
        "bordered": true
      },
      "details": {
        "value": "https://mimicus.dev"
      },
      "fields": [
        {
          "kind": "number",
          "key": "size",
          "label": "size",
          "labelIcon": "mdi:resize",
          "min": 64,
          "max": 256,
          "step": 8
        },
        {
          "kind": "switch",
          "key": "bordered",
          "label": "bordered",
          "labelIcon": "mdi:border-all",
          "iconOn": "mdi:border-all",
          "iconOff": "mdi:border-all-variant",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "value",
          "label": "value",
          "labelIcon": "mdi:link-variant"
        }
      ],
      "code": {
        "strategy": "disp-qrcode"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "segmented",
    "id": "Segmented",
    "label": "Segmented",
    "displayLabel": "Segmented",
    "path": "demos/lib/Segmented.json",
    "definition": {
      "id": "Segmented",
      "category": "Primitives",
      "label": "Segmented",
      "titleIcon": "mdi:view-week-outline",
      "status": "approved",
      "intro": "Selector segmentado estilo píldora. <code>bindSegmented</code>. Ver <a href=\"https://ant.design/components/segmented\" target=\"_blank\" rel=\"noreferrer\">Ant Segmented</a>.",
      "component": {
        "name": "Segmented",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-segmented"
      },
      "state": {
        "block": false
      },
      "fields": [
        {
          "kind": "switch",
          "key": "block",
          "label": "block",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "iconOn": "mdi:rectangle",
          "iconOff": "mdi:rectangle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "code": {
        "strategy": "disp-segmented"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "spinner",
    "id": "Spinner",
    "label": "Spinner",
    "displayLabel": "Spinner",
    "path": "demos/lib/Spinner.json",
    "definition": {
      "id": "Spinner",
      "category": "Primitives",
      "label": "Spinner",
      "titleIcon": "mdi:loading",
      "status": "approved",
      "intro": "Indicador de carga circular con color semántico opcional.",
      "component": {
        "name": "Spinner",
        "path": "src/lib/primitives/Spinner.svelte"
      },
      "preview": {
        "template": "component",
        "scale": 1.5
      },
      "state": {
        "color": null
      },
      "fields": [
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:palette",
          "attrType": "color",
          "attrEmit": "colorDefaultNeutral"
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  },
  {
    "section": "data-display",
    "category": "Primitives",
    "slug": "tag",
    "id": "Tag",
    "label": "Tag",
    "displayLabel": "Tag",
    "path": "demos/lib/Tag.json",
    "definition": {
      "id": "Tag",
      "category": "Primitives",
      "label": "Tag",
      "titleIcon": "mdi:tag-outline",
      "status": "approved",
      "intro": "Etiqueta informativa con variante, color y forma. Alias <code>Chip</code>. Inspirado en <a href=\"https://ant.design/components/tag\" target=\"_blank\" rel=\"noreferrer\">Ant Tag</a>.",
      "component": {
        "name": "Tag",
        "path": "src/components/display/Display.jsx"
      },
      "preview": {
        "template": "disp-tag",
        "scale": 1.6
      },
      "state": {
        "variant": "ghost",
        "shape": "pill",
        "upper": false,
        "color": null
      },
      "details": {
        "text": "Nuevo",
        "icon": ""
      },
      "fields": [
        {
          "kind": "palette",
          "key": "variant",
          "label": "variant",
          "labelIcon": "mdi:shape-outline",
          "attrType": "str",
          "attrDefault": "ghost",
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
              "label": "glass",
              "value": "glass"
            }
          ]
        },
        {
          "kind": "palette",
          "key": "shape",
          "label": "shape",
          "labelIcon": "mdi:vector-square",
          "attrType": "str",
          "attrDefault": "pill",
          "options": [
            {
              "label": "pill",
              "value": "pill"
            },
            {
              "label": "round",
              "value": "round"
            },
            {
              "label": "rect",
              "value": "rect"
            }
          ]
        },
        {
          "kind": "color",
          "key": "color",
          "label": "color",
          "labelIcon": "mdi:palette",
          "attrType": "color"
        },
        {
          "kind": "switch",
          "key": "upper",
          "label": "uppercase",
          "labelIcon": "mdi:format-letter-case-upper",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "icon-text",
          "key": "icon-text",
          "label": "Texto",
          "labelIcon": "mdi:text",
          "iconKey": "icon",
          "textKey": "text"
        }
      ],
      "code": {
        "strategy": "disp-tag"
      }
    }
  }
];
