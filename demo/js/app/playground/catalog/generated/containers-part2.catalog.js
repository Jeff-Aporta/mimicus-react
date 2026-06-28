/** Auto-generado — Containers (parte 2/2) */
export const items = [
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
          "labelIcon": "mdi:eye-outline",
          "iconOn": "mdi:check",
          "iconOff": "mdi:circle-outline",
          "colorOn": "var(--mimicus-success, #2e9e5a)",
          "colorOff": "var(--mimicus-color, currentColor)"
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
              "label": "checkable",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
            },
            {
              "key": "defaultExpandAll",
              "label": "defaultExpandAll",
              "iconOn": "mdi:check",
              "iconOff": "mdi:circle-outline",
              "colorOn": "var(--mimicus-success, #2e9e5a)",
              "colorOff": "var(--mimicus-color, currentColor)"
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
