/**
 * App (demo) — bootstrap mínimo
 * repo: Jeff-Aporta/mimicus-react · demo/js/app/App.jsx
 * El playground es ahora un componente de la librería (<Playground/>): este demo solo
 * le inyecta sus datos (catálogo generado + JSON de config). Sin UI local.
 */
import { ThemeProvider, Playground } from "@jeff-aporta/mimicus-react";

import { catalogItems } from "./playground/catalog/catalogItems.js";
import catalogMeta from "../../config/catalog.json";
import sectionsMeta from "../../config/catalog-sections.json";
import shellConfig from "../../config/playground-shell.json";
import previewTemplates from "../../config/preview-templates.json";

export function App() {
  return (
    <ThemeProvider>
      <Playground
        catalog={catalogItems}
        catalogMeta={catalogMeta}
        sectionsMeta={sectionsMeta}
        shellConfig={shellConfig}
        previewTemplates={previewTemplates}
      />
    </ThemeProvider>
  );
}
