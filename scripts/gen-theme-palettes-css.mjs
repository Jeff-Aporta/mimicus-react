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

/** Convierte "#rrggbb" a hue OKLCH en grados (0-360, redondeado a 1 dec).
 *  Sirve para que el logo SVG (que tiene un hue fijo) pueda recibir
 *  `filter: hue-rotate(calc(var(--mimicus-primary-h) - 210deg))`
 *  y adaptarse al color principal de cada paleta. */
function hueFromHex(hex) {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16) / 255;
  const g = parseInt(v.slice(2, 4), 16) / 255;
  const b = parseInt(v.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let h;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  h = h * 60;
  if (h < 0) h += 360;
  return Math.round(h * 10) / 10;
}

function cssVars(side) {
  return `	--mimicus-design-1: ${side.d1};
	--mimicus-design-2: ${side.d2};
	--mimicus-design-3: ${side.d3};
	--mimicus-primary: var(--mimicus-design-1);
	--mimicus-primary-h: ${hueFromHex(side.d1)}deg;
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
	--mimicus-primary-h: ${hueFromHex(side.d1)}deg;
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
