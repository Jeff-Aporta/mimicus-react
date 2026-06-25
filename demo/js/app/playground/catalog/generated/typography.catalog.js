/** Auto-generado — Typography */
export const items = [
  {
    "section": "general",
    "category": "Typography",
    "slug": "code-block",
    "id": "CodeBlock",
    "label": "CodeBlock",
    "displayLabel": "CodeBlock",
    "path": "demos/components/CodeBlock.json",
    "definition": {
      "id": "CodeBlock",
      "category": "Typography",
      "label": "CodeBlock",
      "titleIcon": "mdi:code-tags",
      "status": "approved",
      "intro": "Editor de código con <strong>CodeMirror 5</strong> cargado por CDN. El tema (<code>default</code> / <code>dracula</code>) sigue <code>html[data-luminance]</code> de Mimicus.",
      "component": {
        "name": "CodeBlock",
        "path": "src/components/CodeBlock.jsx"
      },
      "preview": {
        "template": "cmp-code-block"
      },
      "state": {
        "code": "<Button color=\"primary\" variant=\"soft\">\n  Guardar\n</Button>",
        "minHeight": "7rem"
      },
      "fields": [
        {
          "kind": "code",
          "key": "code",
          "label": "code",
          "labelIcon": "mdi:code-braces",
          "lang": "html",
          "minHeight": "16rem"
        },
        {
          "kind": "text",
          "key": "minHeight",
          "label": "minHeight",
          "labelIcon": "mdi:arrow-expand-vertical"
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  },
  {
    "section": "general",
    "category": "Typography",
    "slug": "headings",
    "id": "Headings",
    "label": "Headings",
    "displayLabel": "Headings",
    "path": "demos/lib/Headings.json",
    "definition": {
      "id": "Headings",
      "category": "Typography",
      "label": "Headings",
      "title": "Headings (H1–H6)",
      "titleIcon": "mdi:format-header-1",
      "status": "approved",
      "intro": "Encabezados <code>H1</code>–<code>H6</code> con color de paleta y truncado opcional en varias líneas.",
      "component": {
        "name": "Headings",
        "path": "src/components/typography/Typography.jsx"
      },
      "preview": {
        "template": "headings"
      },
      "shell": {
        "class": "demo-headings-wrapper"
      },
      "state": {
        "color": null,
        "lines": 0
      },
      "details": {
        "sampleText": "Encabezado de demostración para validar estilos."
      },
      "fields": [
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:palette",
          "attrOmit": true
        },
        {
          "kind": "number",
          "key": "lines",
          "label": "lines",
          "labelIcon": "mdi:format-line-spacing",
          "min": 0,
          "max": 20,
          "attrOmit": true
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "sampleText",
          "label": "slot",
          "labelIcon": "mdi:text",
          "placeholder": "Texto de encabezado"
        }
      ],
      "code": {
        "strategy": "headings-all"
      }
    }
  },
  {
    "section": "general",
    "category": "Typography",
    "slug": "text",
    "id": "Text",
    "label": "Text",
    "displayLabel": "Text",
    "path": "demos/lib/Text.json",
    "definition": {
      "id": "Text",
      "category": "Typography",
      "label": "Text",
      "titleIcon": "mdi:text-long",
      "status": "approved",
      "intro": "Párrafo con color semántico opcional y <code>lines</code> para truncar por número de líneas.",
      "component": {
        "name": "Text",
        "path": "src/components/typography/Typography.jsx"
      },
      "preview": {
        "template": "text"
      },
      "shell": {
        "configBlockCount": 2
      },
      "state": {
        "color": null,
        "lines": 0
      },
      "details": {
        "sampleText": "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a orillas de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo."
      },
      "fields": [
        {
          "kind": "color",
          "key": "color",
          "label": "Color",
          "labelIcon": "mdi:format-color-text",
          "attrType": "color"
        },
        {
          "kind": "number",
          "key": "lines",
          "label": "lines",
          "labelIcon": "mdi:format-line-spacing",
          "min": 0,
          "max": 20,
          "attrDefault": 0,
          "attrEmit": "floorPositive"
        }
      ],
      "detailFields": [
        {
          "kind": "text",
          "key": "sampleText",
          "label": "slot",
          "labelIcon": "mdi:text-long",
          "placeholder": "Ingrese el texto a visualizar"
        }
      ],
      "code": {
        "strategy": "text-wrap"
      }
    }
  }
];
