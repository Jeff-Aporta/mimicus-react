/** Auto-generado — ContaPyme + Gráficas */
export const items = [
  {
    "section": "contapyme-context",
    "category": "ContaPyme",
    "slug": "login-button",
    "id": "LoginButton",
    "label": "LoginButton",
    "displayLabel": "LoginButton",
    "path": "demos/contapyme/LoginButton.json",
    "definition": {
      "id": "LoginButton",
      "category": "ContaPyme",
      "label": "LoginButton",
      "titleIcon": "mdi:login",
      "status": "approved",
      "intro": "Botón de inicio de sesión ContaPyme replicable en todas las apps del ecosistema. Modal glass con usuario corporativo (<code>@contapyme.com</code> opcional), ojo de contraseña, recordar credenciales y multi-empresa vía <code>main-orchestrator</code>. Colócalo en <code>AppLayout.Header.Tools</code>.",
      "component": {
        "name": "LoginButton",
        "path": "src/contapyme/components/LoginButton.jsx"
      },
      "preview": {
        "template": "contapyme-login"
      },
      "shell": {
        "relieve": 40,
        "configBlockCount": 1
      },
      "state": {
        "showPasswordToggle": true,
        "showRemember": true
      },
      "fields": [
        {
          "kind": "switch-group",
          "key": "login",
          "label": "Login",
          "labelIcon": "mdi:account-key-outline",
          "switches": [
            {
              "key": "showPasswordToggle",
              "label": "showPasswordToggle"
            },
            {
              "key": "showRemember",
              "label": "showRemember"
            }
          ]
        }
      ],
      "code": {
        "strategy": "contapyme-login",
        "tagOpts": {
          "multiline": true
        }
      }
    }
  },
  {
    "section": "other",
    "category": "Gráficas",
    "slug": "fps-histogram",
    "id": "FpsHistogram",
    "label": "FPS Histogram",
    "displayLabel": "FPS Histogram",
    "path": "demos/lib/FpsHistogram.json",
    "definition": {
      "id": "FpsHistogram",
      "category": "Gráficas",
      "label": "FPS Histogram",
      "titleIcon": "mdi:chart-timeline-variant-shimmer",
      "status": "approved",
      "intro": "Histograma de FPS del último minuto (60 muestras, una por segundo). Colorea cada barra con el semáforo semántico (success / warning / error). Variante <code>chip</code> para el sidebar con popover al hover.",
      "component": {
        "name": "FpsHistogram",
        "path": "src/lib/charts/FpsHistogram.svelte",
        "import": "$lib/charts/FpsHistogram.svelte"
      },
      "preview": {
        "template": "component",
        "scale": 1,
        "options": {
          "wrapperStyle": "width: 100%; max-width: 28rem;"
        }
      },
      "state": {
        "height": 88,
        "maxFps": 75,
        "showLegend": false,
        "showCurrent": true
      },
      "fields": [
        {
          "kind": "number",
          "key": "height",
          "label": "Altura (px)",
          "labelIcon": "mdi:arrow-expand-vertical",
          "min": 48,
          "max": 160,
          "step": 4
        },
        {
          "kind": "number",
          "key": "maxFps",
          "label": "Escala máx. FPS",
          "labelIcon": "mdi:speedometer",
          "min": 30,
          "max": 120,
          "step": 5
        },
        {
          "kind": "switch",
          "key": "showCurrent",
          "label": "FPS actual",
          "labelIcon": "mdi:speedometer-slow"
        },
        {
          "kind": "switch",
          "key": "showLegend",
          "label": "Leyenda de umbrales",
          "labelIcon": "mdi:format-list-bulleted"
        }
      ],
      "code": {
        "strategy": "default"
      }
    }
  }
];
