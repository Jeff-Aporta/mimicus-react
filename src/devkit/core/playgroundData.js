/**
 * playgroundData — devkit
 * llm:  ./playgroundData.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/core/playgroundData.js
 * Store de datos del playground inyectados en runtime (catálogo, secciones, shell, plantillas, brand).
 */
let _d = { catalogMeta: { sections: {} }, sectionsMeta: {}, shellConfig: {}, previewTemplates: {}, brand: {} };
export function configurePlayground(d) { _d = { ..._d, ...(d || {}) }; }
export function playgroundData() { return _d; }
