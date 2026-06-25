/** Genera catálogo por categoría (100–1000 líneas por archivo) + índice liviano. */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const demosRoot = join(root, "demo", "config", "demos");
const sectionsPath = join(root, "demo", "config", "catalog-sections.json");
const generatedDir = join(root, "demo", "js", "app", "playground", "catalog", "generated");
const indexOut = join(root, "demo", "js", "app", "playground", "catalog", "catalogItems.js");

const MIN_LINES = 100;
const MAX_LINES = 1000;

const sectionsConfig = JSON.parse(readFileSync(sectionsPath, "utf8"));

function resolveSection(definition) {
  if (sectionsConfig.demoSection?.[definition.id]) return sectionsConfig.demoSection[definition.id];
  if (sectionsConfig.legacyCategory?.[definition.category]) return sectionsConfig.legacyCategory[definition.category];
  return "other";
}

function walkJson(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkJson(p, acc);
    else if (name.endsWith(".json")) acc.push(p);
  }
  return acc;
}

function demoSlug(id) {
  return String(id).replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function stripCategoryPrefix(label, category) {
  const prefix = category.endsWith("s") ? category.slice(0, -1) : category;
  if (prefix && label.length > prefix.length && label.toLowerCase().startsWith(prefix.toLowerCase())) return label.slice(prefix.length);
  return label;
}

function categoryFileName(category) {
  return String(category).normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function countLines(body) {
  return body.split("\n").length;
}

function writeCatalogModule(filePath, items, header) {
  const body = `${header}\nexport const items = ${JSON.stringify(items, null, 2)};\n`;
  writeFileSync(filePath, body, "utf8");
  return countLines(body);
}

function chunkItems(items, maxLines) {
  const chunks = [];
  let batch = [];
  for (const item of items) {
    const trial = [...batch, item];
    const trialBody = `export const items = ${JSON.stringify(trial, null, 2)};\n`;
    if (batch.length && countLines(trialBody) > maxLines) {
      chunks.push(batch);
      batch = [item];
    } else batch = trial;
  }
  if (batch.length) chunks.push(batch);
  return chunks.length ? chunks : [items];
}

const files = walkJson(demosRoot);
const items = files
  .map((path) => {
    const definition = JSON.parse(readFileSync(path, "utf8"));
    const rel = relative(join(root, "demo", "config"), path).replace(/\\/g, "/");
    const { id, label, category } = definition;
    const section = resolveSection(definition);
    return { section, category, slug: demoSlug(id), id, label, displayLabel: stripCategoryPrefix(label, category), path: rel, definition };
  })
  .sort((a, b) => (a.category === b.category ? a.label.localeCompare(b.label) : a.category.localeCompare(b.category)));

const byCategory = new Map();
for (const item of items) {
  if (!byCategory.has(item.category)) byCategory.set(item.category, []);
  byCategory.get(item.category).push(item);
}

rmSync(generatedDir, { recursive: true, force: true });
mkdirSync(generatedDir, { recursive: true });

const moduleExports = [];

function registerModule(importVar, relPath) {
  moduleExports.push({ importVar, relPath });
}

function safeVar(base, suffix = "") {
  const v = `${base}${suffix}`.replace(/-/g, "_");
  return /^\d/.test(v) ? `c_${v}` : v;
}

function estimateModuleLines(items) {
  return countLines(`export const items = ${JSON.stringify(items, null, 2)};\n`);
}

const pendingSmall = [];

for (const [category, catItems] of byCategory) {
  const base = categoryFileName(category);
  const header = `/** Auto-generado — ${category} */`;
  const probe = `${header}\nexport const items = ${JSON.stringify(catItems, null, 2)};\n`;
  const lines = countLines(probe);

  if (lines > MAX_LINES) {
    const chunks = chunkItems(catItems, MAX_LINES - 4);
    chunks.forEach((chunk, i) => {
      const partLabel = chunks.length > 1 ? ` (parte ${i + 1}/${chunks.length})` : "";
      const suffix = chunks.length > 1 ? `-part${i + 1}` : "";
      const fileName = `${base}${suffix}.catalog.js`;
      const importVar = safeVar(base, chunks.length > 1 ? `_part${i + 1}` : "");
      writeCatalogModule(join(generatedDir, fileName), chunk, `/** Auto-generado — ${category}${partLabel} */`);
      registerModule(importVar, `./generated/${fileName}`);
    });
    continue;
  }

  if (lines < MIN_LINES) {
    pendingSmall.push({ category, catItems, base, header, lines });
    continue;
  }

  const fileName = `${base}.catalog.js`;
  writeCatalogModule(join(generatedDir, fileName), catItems, header);
  registerModule(safeVar(base), `./generated/${fileName}`);
}

if (pendingSmall.length) {
  let pool = [];
  const poolCategories = [];
  for (const p of pendingSmall) {
    pool = pool.concat(p.catItems);
    poolCategories.push(p.category);
  }
  let targetPath = null;
  let targetVar = null;
  let targetItems = pool;
  let targetHeader = `/** Auto-generado — ${poolCategories.join(" + ")} */`;

  if (estimateModuleLines(pool) < MIN_LINES) {
    const candidates = moduleExports
      .map((m) => ({ ...m, abs: join(generatedDir, m.relPath.replace("./generated/", "")) }))
      .filter((m) => countLines(readFileSync(m.abs, "utf8")) + estimateModuleLines(pool) <= MAX_LINES)
      .sort((a, b) => countLines(readFileSync(a.abs, "utf8")) - countLines(readFileSync(b.abs, "utf8")));
    if (candidates.length) {
      const pick = candidates[0];
      const existing = readFileSync(pick.abs, "utf8");
      const existingItems = JSON.parse(existing.replace(/^[\s\S]*?=\s*/, "").replace(/;\s*$/, ""));
      targetItems = existingItems.concat(pool);
      targetHeader = existing.split("\n")[0].replace(" */", ` + ${poolCategories.join(" + ")} */`);
      targetPath = pick.abs;
      targetVar = pick.importVar;
    }
  }

  if (targetPath) {
    writeCatalogModule(targetPath, targetItems, targetHeader);
  } else {
    const fileName = `${poolCategories.map(categoryFileName).join("-")}.catalog.js`;
    writeCatalogModule(join(generatedDir, fileName), targetItems, targetHeader);
    registerModule(safeVar(poolCategories.map(categoryFileName).join("-")), `./generated/${fileName}`);
  }
}

const imports = moduleExports.map(({ importVar, relPath }) => `import { items as ${importVar} } from "${relPath}";`);
const spreads = moduleExports.map(({ importVar }) => `...${importVar}`);
const indexBody = `/** Auto-generado por scripts/gen-catalog-items.mjs — no editar a mano */\n${imports.join("\n")}\n\nexport const catalogItems = [${spreads.join(", ")}];\n`;
writeFileSync(indexOut, indexBody, "utf8");
console.log("catalogItems.js OK", items.length, "demos", moduleExports.length, "módulos");
