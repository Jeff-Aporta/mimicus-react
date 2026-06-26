// NOTE: script Node (ESM) ejecutado por `node` en los npm scripts (build/build:demo). No se convierte a TypeScript para no requerir un runner TS (tsx/ts-node) ni un paso de compilación adicional.
import { readFileSync, writeFileSync } from "node:fs";

import { dirname, join } from "node:path";

import { fileURLToPath } from "node:url";

import { createRequire } from "node:module";



const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, "..");

const require = createRequire(import.meta.url);

const esbuild = require("esbuild");



const ENTRY = join(root, "demo", "js", "app", "App.jsx");

const OUT = join(root, "demo", "_dist", "app.esm.js");



const ESM_EXTERNAL = [

  "react",

  "react-dom",

  "react-dom/client",

  "react/jsx-runtime",

  "@jeff-aporta/mimicus-react",

];



esbuild.buildSync({

  entryPoints: [ENTRY],

  outfile: OUT,

  bundle: true,

  format: "esm",

  platform: "browser",

  target: "es2020",

  jsx: "automatic",

  external: ESM_EXTERNAL,

  minify: true,

  legalComments: "none",

  loader: { ".jsx": "jsx", ".js": "jsx", ".json": "json" },

});



// Alias legacy para tooling que aún busca app.min.js

copyAlias(join(root, "demo", "_dist", "app.min.js"), OUT);



function copyAlias(dest, src) {

  writeFileSync(dest, readFileSync(src, "utf8"), "utf8");

}



console.log("demo build OK", OUT);

