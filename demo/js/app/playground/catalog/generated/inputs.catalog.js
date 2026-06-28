/** Auto-generado — Inputs */
export const items = [
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "auto-complete",
    "id": "AutoComplete",
    "label": "AutoComplete",
    "displayLabel": "AutoComplete",
    "path": "demos/lib/AutoComplete.json",
    "definition": {
      "id": "AutoComplete",
      "category": "Inputs",
      "label": "AutoComplete",
      "titleIcon": "mdi:form-dropdown",
      "status": "approved",
      "intro": "Autocompletado Ant / MUI con panel filtrable (<code>bindAutocomplete</code>).",
      "component": {
        "name": "AutoComplete",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-autocomplete"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "cascader",
    "id": "Cascader",
    "label": "Cascader",
    "displayLabel": "Cascader",
    "path": "demos/lib/Cascader.json",
    "definition": {
      "id": "Cascader",
      "category": "Inputs",
      "label": "Cascader",
      "titleIcon": "mdi:file-tree",
      "status": "approved",
      "intro": "Selección en cascada Ant.",
      "component": {
        "name": "Cascader",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-cascader"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "checkbox",
    "id": "Checkbox",
    "label": "Checkbox",
    "displayLabel": "Checkbox",
    "path": "demos/lib/Checkbox.json",
    "definition": {
      "id": "Checkbox",
      "category": "Inputs",
      "label": "Checkbox",
      "titleIcon": "mdi:checkbox-marked-outline",
      "status": "approved",
      "intro": "Casilla Ant / MUI con estado indeterminado.",
      "component": {
        "name": "Checkbox",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-checkbox"
      },
      "state": {
        "indeterminate": false,
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "color-picker",
    "id": "ColorPicker",
    "label": "ColorPicker",
    "displayLabel": "ColorPicker",
    "path": "demos/lib/ColorPicker.json",
    "definition": {
      "id": "ColorPicker",
      "category": "Inputs",
      "label": "ColorPicker",
      "titleIcon": "mdi:palette",
      "status": "approved",
      "intro": "Selector de color Ant con muestra y hex.",
      "component": {
        "name": "ColorPicker",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-color-picker"
      },
      "state": {
        "defaultValue": "#1677ff",
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "date-picker",
    "id": "DatePicker",
    "label": "DatePicker",
    "displayLabel": "DatePicker",
    "path": "demos/lib/DatePicker.json",
    "definition": {
      "id": "DatePicker",
      "category": "Inputs",
      "label": "DatePicker",
      "titleIcon": "mdi:calendar",
      "status": "approved",
      "intro": "Fecha Ant — input nativo estilizado.",
      "component": {
        "name": "DatePicker",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-date-picker"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "form",
    "id": "Form",
    "label": "Form",
    "displayLabel": "Form",
    "path": "demos/lib/Form.json",
    "definition": {
      "id": "Form",
      "category": "Inputs",
      "label": "Form",
      "titleIcon": "mdi:form-select",
      "status": "approved",
      "intro": "Formulario Ant con <code>FormItem</code> y layout vertical/horizontal.",
      "component": {
        "name": "Form",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-form"
      },
      "state": {
        "layout": "vertical"
      },
      "details": {
        "placeholder": "Comentarios"
      },
      "fields": [
        {
          "kind": "select-enum",
          "key": "layout",
          "label": "layout",
          "attrType": "str",
          "enumValue": {
            "Vertical": "vertical",
            "Horizontal": "horizontal"
          }
        }
      ],
      "code": {
        "strategy": "form-entry",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "input",
    "id": "Input",
    "label": "Input",
    "displayLabel": "Input",
    "path": "demos/lib/Input.json",
    "definition": {
      "id": "Input",
      "category": "Inputs",
      "label": "Input",
      "titleIcon": "mdi:form-textbox",
      "status": "approved",
      "intro": "Campo de texto Ant / MUI <code>TextField</code>: tamaños, clear, prefijos y estados.",
      "component": {
        "name": "Input",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-input"
      },
      "state": {
        "disabled": false,
        "allowClear": true
      },
      "details": {
        "placeholder": "Escribe aquí…"
      },
      "fields": [
        {
          "kind": "switch",
          "key": "disabled",
          "label": "disabled",
          "iconOn": "mdi:cancel",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        },
        {
          "kind": "switch",
          "key": "allowClear",
          "label": "allowClear",
          "iconOn": "mdi:eraser",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "input-number",
    "id": "InputNumber",
    "label": "InputNumber",
    "displayLabel": "Number",
    "path": "demos/lib/InputNumber.json",
    "definition": {
      "id": "InputNumber",
      "category": "Inputs",
      "label": "InputNumber",
      "titleIcon": "mdi:numeric",
      "status": "approved",
      "intro": "Entrada numérica Ant con botones ±.",
      "component": {
        "name": "InputNumber",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-input-number"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "mentions",
    "id": "Mentions",
    "label": "Mentions",
    "displayLabel": "Mentions",
    "path": "demos/lib/Mentions.json",
    "definition": {
      "id": "Mentions",
      "category": "Inputs",
      "label": "Mentions",
      "titleIcon": "mdi:at",
      "status": "approved",
      "intro": "Menciones Ant con panel @.",
      "component": {
        "name": "Mentions",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-mentions"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "radio",
    "id": "Radio",
    "label": "Radio",
    "displayLabel": "Radio",
    "path": "demos/lib/Radio.json",
    "definition": {
      "id": "Radio",
      "category": "Inputs",
      "label": "Radio",
      "titleIcon": "mdi:radiobox-marked",
      "status": "approved",
      "intro": "Grupo de radio Ant / MUI <code>RadioGroup</code>.",
      "component": {
        "name": "RadioGroup",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-radio"
      },
      "state": {
        "direction": "horizontal",
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "rate",
    "id": "Rate",
    "label": "Rate",
    "displayLabel": "Rate",
    "path": "demos/lib/Rate.json",
    "definition": {
      "id": "Rate",
      "category": "Inputs",
      "label": "Rate",
      "titleIcon": "mdi:star-outline",
      "status": "approved",
      "intro": "Valoración Ant <code>Rate</code> / MUI <code>Rating</code> con medias estrellas.",
      "component": {
        "name": "Rate",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-rate"
      },
      "state": {
        "allowHalf": true,
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "rating",
    "id": "Rating",
    "label": "Rating",
    "displayLabel": "Rating",
    "path": "demos/lib/Rating.json",
    "definition": {
      "id": "Rating",
      "category": "Inputs",
      "label": "Rating",
      "titleIcon": "mdi:star",
      "status": "approved",
      "intro": "Alias MUI de <code>Rate</code>.",
      "component": {
        "name": "Rating",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-rate"
      },
      "state": {
        "allowHalf": true
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "select",
    "id": "Select",
    "label": "Select",
    "displayLabel": "Select",
    "path": "demos/lib/Select.json",
    "definition": {
      "id": "Select",
      "category": "Inputs",
      "label": "Select",
      "titleIcon": "mdi:menu-down",
      "status": "approved",
      "intro": "Selector nativo estilizado Ant / MUI.",
      "component": {
        "name": "Select",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-select"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "slider",
    "id": "Slider",
    "label": "Slider",
    "displayLabel": "Slider",
    "path": "demos/lib/Slider.json",
    "definition": {
      "id": "Slider",
      "category": "Inputs",
      "label": "Slider",
      "titleIcon": "mdi:tune-vertical",
      "status": "approved",
      "intro": "Deslizador MUI / Ant con riel relleno vía CSS.",
      "component": {
        "name": "Slider",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-slider"
      },
      "state": {
        "defaultValue": 40,
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "text-field",
    "id": "TextField",
    "label": "TextField",
    "displayLabel": "TextField",
    "path": "demos/lib/TextField.json",
    "definition": {
      "id": "TextField",
      "category": "Inputs",
      "label": "TextField",
      "titleIcon": "mdi:textbox",
      "status": "approved",
      "intro": "Alias MUI de <code>Input</code>.",
      "component": {
        "name": "TextField",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-input"
      },
      "state": {
        "allowClear": true
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "time-picker",
    "id": "TimePicker",
    "label": "TimePicker",
    "displayLabel": "TimePicker",
    "path": "demos/lib/TimePicker.json",
    "definition": {
      "id": "TimePicker",
      "category": "Inputs",
      "label": "TimePicker",
      "titleIcon": "mdi:clock-outline",
      "status": "approved",
      "intro": "Hora Ant — input <code>type=time</code> estilizado.",
      "component": {
        "name": "TimePicker",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-time-picker"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "toggle-button",
    "id": "ToggleButton",
    "label": "Toggle Button",
    "displayLabel": "Toggle Button",
    "path": "demos/lib/ToggleButton.json",
    "definition": {
      "id": "ToggleButton",
      "category": "Inputs",
      "label": "Toggle Button",
      "titleIcon": "mdi:toggle-switch",
      "status": "approved",
      "intro": "MUI ToggleButtonGroup exclusivo o múltiple.",
      "component": {
        "name": "ToggleButtonGroup",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-toggle"
      },
      "state": {
        "exclusive": true,
        "orientation": "horizontal"
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "transfer",
    "id": "Transfer",
    "label": "Transfer",
    "displayLabel": "Transfer",
    "path": "demos/lib/Transfer.json",
    "definition": {
      "id": "Transfer",
      "category": "Inputs",
      "label": "Transfer",
      "titleIcon": "mdi:swap-horizontal",
      "status": "approved",
      "intro": "Lista de transferencia Ant / MUI Transfer List.",
      "component": {
        "name": "Transfer",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-transfer"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "transfer-board",
    "id": "TransferBoard",
    "label": "TransferBoard",
    "displayLabel": "TransferBoard",
    "path": "demos/components/TransferBoard.json",
    "definition": {
      "id": "TransferBoard",
      "category": "Inputs",
      "label": "TransferBoard",
      "titleIcon": "mdi:view-column-outline",
      "status": "approved",
      "intro": "Tablero tipo Trello / <a href=\"https://mui.com/material-ui/react-transfer-list/\" target=\"_blank\" rel=\"noreferrer\">MUI Transfer List</a> sin botones: varias columnas (stacks) con tarjetas que se mueven por <strong>drag &amp; drop</strong> entre stacks y se reordenan dentro de cada uno. Superficie <code>neon-glass</code> con acentos por columna.",
      "component": {
        "name": "TransferBoard",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "cmp-transfer-board"
      },
      "shell": {
        "relieve": 62,
        "configBlockCount": 2
      },
      "state": {
        "stackCount": 3,
        "stackWidth": 248,
        "disabled": false
      },
      "details": {
        "itemsPerStack": 3
      },
      "fields": [
        {
          "kind": "number",
          "key": "stackCount",
          "label": "stacks",
          "labelIcon": "mdi:view-column-outline",
          "min": 2,
          "max": 6,
          "step": 1
        },
        {
          "kind": "number",
          "key": "stackWidth",
          "label": "stackWidth",
          "labelIcon": "mdi:arrow-expand-horizontal",
          "min": 180,
          "max": 360,
          "step": 8
        },
        {
          "kind": "switch",
          "key": "disabled",
          "label": "disabled",
          "labelIcon": "mdi:lock-outline",
          "iconOn": "mdi:cancel",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
        }
      ],
      "detailFields": [
        {
          "kind": "number",
          "key": "itemsPerStack",
          "label": "Tarjetas / stack",
          "labelIcon": "mdi:cards-outline",
          "min": 1,
          "max": 6,
          "step": 1
        }
      ],
      "presets": [
        {
          "label": "Kanban 3 columnas",
          "icon": "mdi:view-column-outline",
          "state": {
            "stackCount": 3,
            "stackWidth": 248,
            "disabled": false
          },
          "details": {
            "itemsPerStack": 3
          }
        },
        {
          "label": "Trello 4 stacks",
          "icon": "mdi:view-dashboard-outline",
          "state": {
            "stackCount": 4,
            "stackWidth": 232,
            "disabled": false
          },
          "details": {
            "itemsPerStack": 2
          }
        },
        {
          "label": "Transfer 2 listas",
          "icon": "mdi:swap-horizontal",
          "state": {
            "stackCount": 2,
            "stackWidth": 280,
            "disabled": false
          },
          "details": {
            "itemsPerStack": 4
          }
        },
        {
          "label": "Solo lectura",
          "icon": "mdi:lock-outline",
          "state": {
            "stackCount": 3,
            "stackWidth": 248,
            "disabled": true
          },
          "details": {
            "itemsPerStack": 2
          }
        }
      ],
      "tests": "extras/TransferBoardTests.svelte",
      "code": {
        "strategy": "transfer-board",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "tree-select",
    "id": "TreeSelect",
    "label": "TreeSelect",
    "displayLabel": "TreeSelect",
    "path": "demos/lib/TreeSelect.json",
    "definition": {
      "id": "TreeSelect",
      "category": "Inputs",
      "label": "TreeSelect",
      "titleIcon": "mdi:file-tree-outline",
      "status": "approved",
      "intro": "Árbol seleccionable Ant.",
      "component": {
        "name": "TreeSelect",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-tree-select"
      },
      "state": {
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  },
  {
    "section": "data-entry",
    "category": "Inputs",
    "slug": "upload",
    "id": "Upload",
    "label": "Upload",
    "displayLabel": "Upload",
    "path": "demos/lib/Upload.json",
    "definition": {
      "id": "Upload",
      "category": "Inputs",
      "label": "Upload",
      "titleIcon": "mdi:cloud-upload-outline",
      "status": "approved",
      "intro": "Subida de archivos Ant con lista de nombres.",
      "component": {
        "name": "Upload",
        "path": "src/components/forms/Forms.jsx"
      },
      "preview": {
        "template": "form-upload"
      },
      "state": {
        "multiple": true,
        "disabled": false
      },
      "code": {
        "strategy": "form-entry"
      }
    }
  }
];
