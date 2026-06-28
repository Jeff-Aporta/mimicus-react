/**
 * Genera CSS de paletas + JSON para constants.ts desde scripts/palette-catalog.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PALETTES } from "./palette-catalog.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cssOut = join(root, "css", "theme", "theme-color-palettes.data.css");
const jsonOut = join(root, "src", "theme", "palette-catalog.json");

function bColor(bBase, alpha) {
  const hex = bBase.replace("#", "");
  return `#${hex}${alpha}`;
}

function cssVars(side) {
  return `	--mimicus-design-1: ${side.d1};
	--mimicus-design-2: ${side.d2};
	--mimicus-design-3: ${side.d3};
	--mimicus-primary: var(--mimicus-design-1);
	--mimicus-color: ${side.color};
	--mimicus-bg-primary: ${side.bgPrimary};
	--mimicus-bg-secondary: ${side.bgSecondary};
	--mimicus-bg-readonly: ${side.bgReadonly};
	--mimicus-b-color: ${bColor(side.bBase, "55")};
	--mimicus-b-required: ${side.bRequired};
	--mimicus-b-optional: ${side.bOptional};
	--mimicus-b-readonly: ${bColor(side.bBase, "44")};
	--mimicus-info: ${side.info};
	--mimicus-success: ${side.success};
	--mimicus-warning: ${side.warning};
	--mimicus-error: ${side.error};
	--mimicus-danger: ${side.danger};`;
}

function cssVarsDark(side) {
  return `	--mimicus-design-1: ${side.d1};
	--mimicus-design-2: ${side.d2};
	--mimicus-design-3: ${side.d3};
	--mimicus-primary: var(--mimicus-design-1);
	--mimicus-color: ${side.color};
	--mimicus-bg-primary: ${side.bgPrimary};
	--mimicus-bg-secondary: ${side.bgSecondary};
	--mimicus-bg-readonly: ${side.bgReadonly};
	--mimicus-b-color: ${bColor(side.bBase, "66")};
	--mimicus-b-required: ${side.bRequired};
	--mimicus-b-optional: ${side.bOptional};
	--mimicus-b-readonly: ${bColor(side.bBase, "55")};
	--mimicus-info: ${side.info};
	--mimicus-success: ${side.success};
	--mimicus-warning: ${side.warning};
	--mimicus-error: ${side.error};
	--mimicus-danger: ${side.danger};`;
}

function selectors(id, aliases, luminance) {
  const ids = [id, ...(aliases ?? [])];
  const attr = ids.map((x) => `[data-theme-color="${x}"][data-luminance="${luminance}"]`).join(",\n");
  const html = ids.map((x) => `html[data-theme-color="${x}"][data-luminance="${luminance}"]`).join(",\n");
  return `${html},\n${attr}`;
}

const lines = [
  "/** Generado por scripts/gen-theme-palettes-css.mjs — no editar a mano */",
  "",
];

for (const pal of PALETTES) {
  lines.push(`/* ── ${pal.label} · ${pal.note} (${pal.scheme}) ── */`);
  lines.push(`${selectors(pal.id, pal.aliases, "light")} {`);
  lines.push(cssVars(pal.light));
  lines.push("}\n");
  lines.push(`${selectors(pal.id, pal.aliases, "dark")} {`);
  lines.push(cssVarsDark(pal.dark));
  lines.push("}\n");
}

writeFileSync(cssOut, `${lines.join("\n")}\n`, "utf8");

const jsonCatalog = PALETTES.map(({ id, label, icon, scheme, note, aliases }) => ({ id, label, icon, scheme, note, aliases: aliases ?? [] }));
writeFileSync(jsonOut, `${JSON.stringify(jsonCatalog, null, 2)}\n`, "utf8");

console.log(`theme palettes OK — ${PALETTES.length} paletas → ${cssOut}`);
