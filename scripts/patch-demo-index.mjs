// NOTE: script Node (ESM) ejecutado por `node` en los npm scripts (build/build:demo). No se convierte a TypeScript para no requerir un runner TS (tsx/ts-node) ni un paso de compilación adicional.
/**
 * Parchea demo/index.html con el bloque #root canónico (boot Mimicus React).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { patchIndexRoot } from "../src/snippets/bootScreen.js";
import { DEMO_BOOT_META } from "../src/snippets/constants.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const indexPath = join(root, "demo", "index.html");

const html = readFileSync(indexPath, "utf8");
const patched = patchIndexRoot(html, DEMO_BOOT_META);

writeFileSync(indexPath, patched, "utf8");
console.log("demo index patched OK", indexPath);
