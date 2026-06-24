/**
 * One-shot rebrand jagudeloe-react-ui → mimicus-react (fuentes + css + demo + scripts).
 */
import { readFileSync, writeFileSync, renameSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");

const REPLACEMENTS = [
  ["@jeff-aporta/jagudeloe-react-ui/bootstrap", "@jeff-aporta/mimicus-react/bootstrap"],
  ["@jeff-aporta/jagudeloe-react-ui", "@jeff-aporta/mimicus-react"],
  ["jeff-aporta.github.io/jagudeloe-react-ui", "jeff-aporta.github.io/mimicus-react"],
  ["Jeff-Aporta/jagudeloe-react-ui", "Jeff-Aporta/mimicus-react"],
  ["jagudeloe-react-ui.bootstrap.esm", "mimicus-react.bootstrap.esm"],
  ["jagudeloe-react-ui.esm", "mimicus-react.esm"],
  ["jagudeloe-react-ui", "mimicus-react"],
  ["JAGUDELOE React UI", "Mimicus React"],
  ["JAGUDELOE-UI", "Mimicus UI"],
  ["JAGUDELOE", "Mimicus"],
  ["bootJaguUI", "bootMimicusUI"],
  ["MimicusSnippets", "__MIMICUS_SNIPPETS_PLACEHOLDER__"],
  ["JaguSnippets", "MimicusSnippets"],
  ["__MIMICUS_SNIPPETS_PLACEHOLDER__", "MimicusSnippets"],
  ["JAE_UI", "MimicusBootstrap"],
  ["JaguUI", "MimicusUI"],
  ["JagSidebar", "MimicusSidebar"],
  ["JAGU_UI_REF", "MIMICUS_UI_REF"],
  ["jaguCdnBase", "mimicusCdnBase"],
  ["importmap-jagudeloe-ui", "importmap-mimicus-ui"],
  ["importmap-jagudeloe", "importmap-mimicus"],
  ["link-jagu-ui-css", "link-mimicus-ui-css"],
  ["script-jagu-ui", "script-mimicus-ui"],
  ["stack-jagu", "stack-mimicus"],
  ["jagu-snippets", "mimicus-snippets"],
  ["jagu-ui.min", "mimicus-ui.min"],
  ["jagu-ui.css", "mimicus-ui.css"],
  ["jagu-ui.js", "mimicus-ui.js"],
  ["jagu-ui", "mimicus-ui"],
  ["__JAGU_UI_DIST__", "__MIMICUS_UI_DIST__"],
  ["__JAGU_CONN__", "__MIMICUS_CONN__"],
  ["jagu_boot_hold", "mimicus_boot_hold"],
  ["jagu:theme", "mimicus:theme"],
  ["data-jagu-", "data-mimicus-"],
  ["jagu-boot-", "mimicus-boot-"],
  ["jagu-app-boot", "mimicus-app-boot"],
  ["jagu-app-layout", "mimicus-app-layout"],
  ["jagu-shell-main", "mimicus-shell-main"],
  ["jagu-shell", "mimicus-shell"],
  ["jagu-ui-glass-card", "mimicus-ui-glass-card"],
  ["jagu-ui-brand-gradient", "mimicus-ui-brand-gradient"],
  ["jagu-ui-glass-", "mimicus-ui-glass-"],
  ["jagu-ui-brand", "mimicus-ui-brand"],
  ["jagu-ui-root", "mimicus-ui-root"],
  ["jagu-text-icon", "mimicus-text-icon"],
  ["jagu-nav-link", "mimicus-nav-link"],
  ["jagu-sidebar-header", "mimicus-sidebar-header"],
  ["jagu-sidebar-body", "mimicus-sidebar-body"],
  ["jagu-sidebar", "mimicus-sidebar"],
  ["jagu-autocomplete", "mimicus-autocomplete"],
  ["--jagu-", "--mimicus-"],
  [".jagu-", ".mimicus-"],
  ["pages-jagudeloe-react-ui", "pages-mimicus-react"],
  ["jagu-react-ui", "mimicus-react"],
  ["jagudeloe", "mimicus"],
];

const SKIP_DIRS = new Set([".git", "node_modules", "cdn", "demo/cdn", "demo/_dist"]);
const EXT = new Set([".js", ".jsx", ".mjs", ".css", ".html", ".json", ".md", ".yml", ".yaml", ".svg"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const rel = p.slice(root.length + 1).replace(/\\/g, "/");
    if (SKIP_DIRS.has(rel) || [...SKIP_DIRS].some((s) => rel.startsWith(s + "/"))) continue;
    const st = statSync(p);
    if (st.isDirectory()) walk(p, files);
    else if (EXT.has(extname(name))) files.push(p);
  }
  return files;
}

function apply(txt) {
  let out = txt;
  for (const [from, to] of REPLACEMENTS) out = out.split(from).join(to);
  return out;
}

let n = 0;
for (const file of walk(root)) {
  if (file.includes("rebrand-to-mimicus.mjs")) continue;
  const raw = readFileSync(file, "utf8");
  const next = apply(raw);
  if (next !== raw) {
    writeFileSync(file, next, "utf8");
    n++;
  }
}

const cssOld = join(root, "css", "jagu-ui.css");
const cssNew = join(root, "css", "mimicus-ui.css");
if (existsSync(cssOld)) {
  renameSync(cssOld, cssNew);
  console.log("renamed css → mimicus-ui.css");
}

const skillOld = join(root, ".cursor", "skills", "jagu-react-ui");
const skillNew = join(root, ".cursor", "skills", "mimicus-react");
if (existsSync(skillOld)) {
  renameSync(skillOld, skillNew);
  console.log("renamed skill → mimicus-react");
}

console.log(`rebrand OK — ${n} files updated`);
