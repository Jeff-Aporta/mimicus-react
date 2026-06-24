/**
 * fluidCss — convierte un árbol JSON de reglas CSS en texto CSS moderno.
 * Soporta selectores planos, @media, @keyframes y propiedades camelCase → kebab-case.
 */

const CSS_PROP_RE = /^[a-z][a-zA-Z0-9]*$/;

function camelToKebab(key) {
  return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

/** @param {Record<string, string|number>} decls */
function declarations(decls) {
  return Object.entries(decls)
    .filter(([, v]) => v != null && v !== "")
    .map(([k, v]) => `${camelToKebab(k)}:${v}`)
    .join(";");
}

/** @param {Record<string, unknown>} obj */
function isPlainDeclarations(obj) {
  return Object.keys(obj).every((k) => CSS_PROP_RE.test(k) || k.startsWith("Webkit") || k.startsWith("Moz"));
}

/**
 * @param {Record<string, Record<string, unknown>>} tree
 * @param {string} [indent]
 */
export function fluidCss(tree, indent = "") {
  const pad = indent;
  const inner = indent ? `${indent}  ` : "";
  const chunks = [];

  for (const [selector, rules] of Object.entries(tree)) {
    if (selector.startsWith("@media")) {
      chunks.push(`${pad}${selector}{${fluidCss(/** @type {Record<string, Record<string, unknown>>} */ (rules), "")}}`);
      continue;
    }
    if (selector.startsWith("@keyframes")) {
      const frames = Object.entries(/** @type {Record<string, Record<string, unknown>>} */ (rules))
        .map(([pct, decls]) => `${pct}{${declarations(/** @type {Record<string, string|number>} */ (decls))}}`)
        .join("");
      chunks.push(`${pad}${selector}{${frames}}`);
      continue;
    }
    if (typeof rules === "object" && rules !== null && isPlainDeclarations(/** @type {Record<string, unknown>} */ (rules))) {
      chunks.push(`${pad}${selector}{${declarations(/** @type {Record<string, string|number>} */ (rules))}}`);
    }
  }

  return chunks.join(indent ? `\n${pad}` : "");
}

/** Alias histórico: objeto JS → string CSS. */
export const js2css = fluidCss;
