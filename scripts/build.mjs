// NOTE: script Node (ESM) ejecutado por `node` en los npm scripts (build/build:demo). No se convierte a TypeScript para no requerir un runner TS (tsx/ts-node) ni un paso de compilación adicional.
/**

 * Build mimicus-react: ESM (import) + IIFE (global MimicusUI) + CSS + snippets.

 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";

import { dirname, join, resolve } from "node:path";

import { fileURLToPath } from "node:url";

import { createRequire } from "node:module";

import { bootCssText } from "../src/snippets/bootScreen.js";



const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, "..");

const require = createRequire(import.meta.url);

const esbuild = require("esbuild");



const ESM_ENTRY = join(root, "src", "entry-esm.tsx");

const BOOTSTRAP_ESM = join(root, "src", "bootstrap.ts");

const IIFE_ENTRY = join(root, "src", "entry-iife.tsx");

const SNIPPETS_IIFE = join(root, "src", "entry-snippets-iife.ts");

const CSS_IN = join(root, "css", "mimicus-ui.css");



const OUT = {

  esm: join(root, "cdn", "esm", "mimicus-react.esm.js"),

  esmMin: join(root, "cdn", "esm", "mimicus-react.esm.min.js"),

  bootstrapEsm: join(root, "cdn", "esm", "mimicus-react.bootstrap.esm.js"),

  bootstrapMin: join(root, "cdn", "esm", "mimicus-react.bootstrap.esm.min.js"),

  iife: join(root, "cdn", "iife", "mimicus-react.iife.js"),

  iifeMin: join(root, "cdn", "iife", "mimicus-react.iife.min.js"),

  iifeAlias: join(root, "cdn", "iife", "mimicus-ui.js"),

  iifeAliasMin: join(root, "cdn", "iife", "mimicus-ui.min.js"),

  snippets: join(root, "cdn", "iife", "mimicus-snippets.js"),

  snippetsMin: join(root, "cdn", "iife", "mimicus-snippets.min.js"),

  css: join(root, "cdn", "css", "mimicus-ui.min.css"),

  bootCss: join(root, "css", "snippets", "app-boot.css"),

  bootCssMin: join(root, "cdn", "css", "app-boot.min.css"),

};



const REACT_EXTERNAL = ["react", "react-dom", "react-dom/client", "react/jsx-runtime"];

/**
 * Islas de desarrollo: cada una emite su propio bundle ESM (+min) y, si tiene CSS,
 * su propio índice CSS. Permiten que el consumidor cargue solo lo mínimo necesario.
 * `hasCss: false` → isla solo-JS (sin hoja de estilos propia).
 */
const ISLANDS = [
  { name: "theme", dir: "category", hasCss: true },
  { name: "utils", dir: "category", hasCss: false },
  { name: "primitives", dir: "category", hasCss: true },
  { name: "layout", dir: "category", hasCss: true },
  { name: "forms", dir: "category", hasCss: true },
  { name: "display", dir: "category", hasCss: true },
  { name: "navigation", dir: "category", hasCss: true },
  { name: "datagrid", dir: "category", hasCss: true },
  { name: "spa", dir: "category", hasCss: true },
  { name: "shell", dir: "category", hasCss: true },
  { name: "general", dir: "bundle", hasCss: true },
  { name: "contapyme", dir: "bundle", hasCss: true },
  { name: "devkit", dir: "bundle", hasCss: true },
];

/** Skins de looknfeel: cada uno con su CSS propio (opt-in) → carga mínima si la app usa uno solo. */
const LOOKNFEELS = ["contapyme", "neon"];



function minifyCss(css) {

  return css

    .replace(/\/\*[\s\S]*?\*\//g, "")

    .replace(/\s+/g, " ")

    .replace(/\s*([{}:;,>+~])\s*/g, "$1")

    .trim();

}



function flattenCss(filePath, seen = new Set()) {

  const abs = resolve(filePath);

  if (seen.has(abs)) return "";

  seen.add(abs);

  let raw = readFileSync(abs, "utf8");

  const dir = dirname(abs);

  return raw.replace(/@import\s+["']([^"']+)["']\s*;/g, (_, rel) => {

    const imported = join(dir, rel);

    if (!existsSync(imported)) throw new Error(`CSS import no encontrado: ${imported}`);

    return flattenCss(imported, seen);

  });

}



function buildEsm(entry, outfile, { minOut } = {}) {

  esbuild.buildSync({

    entryPoints: [entry],

    outfile,

    bundle: true,

    format: "esm",

    platform: "browser",

    target: "es2020",

    jsx: "automatic",

    external: REACT_EXTERNAL,

    legalComments: "none",

    loader: { ".jsx": "jsx", ".js": "jsx" },

  });

  if (minOut) {

    esbuild.buildSync({

      entryPoints: [outfile],

      outfile: minOut,

      minify: true,

      format: "esm",

      target: "es2020",

      legalComments: "none",

    });

  }

}



const REQUIRE_SHIM = `var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};`;



function buildIife(entry, outfile, { reactExternal = true } = {}) {

  esbuild.buildSync({

    entryPoints: [entry],

    outfile,

    bundle: true,

    format: "iife",

    platform: "browser",

    target: "es2020",

    jsx: "transform",

    jsxFactory: "React.createElement",

    jsxFragment: "React.Fragment",

    external: reactExternal ? REACT_EXTERNAL : [],

    legalComments: "none",

    loader: { ".jsx": "jsx", ".js": "jsx" },

  });

  if (reactExternal) {

    let js = readFileSync(outfile, "utf8");

    if (!js.startsWith("/**")) js = REQUIRE_SHIM + "\n" + js;

    writeFileSync(outfile, js, "utf8");

  }

  const minOut = outfile.replace(/\.js$/, ".min.js");

  esbuild.buildSync({

    entryPoints: [outfile],

    outfile: minOut,

    minify: true,

    format: "iife",

    target: "es2020",

    legalComments: "none",

    loader: { ".js": "jsx" },

  });

}



function build() {

  mkdirSync(join(root, "cdn", "esm"), { recursive: true });
  mkdirSync(join(root, "cdn", "iife"), { recursive: true });
  mkdirSync(join(root, "cdn", "css"), { recursive: true });

  buildEsm(ESM_ENTRY, OUT.esm, { minOut: OUT.esmMin });

  buildEsm(BOOTSTRAP_ESM, OUT.bootstrapEsm, { minOut: OUT.bootstrapMin });

  buildIife(IIFE_ENTRY, OUT.iife);

  copyFileSync(OUT.iife, OUT.iifeAlias);

  copyFileSync(OUT.iifeMin, OUT.iifeAliasMin);

  buildIife(SNIPPETS_IIFE, OUT.snippets, { reactExternal: false });

  writeFileSync(OUT.snippetsMin, readFileSync(OUT.snippets.replace(".js", ".min.js"), "utf8"));



  writeFileSync(OUT.css, minifyCss(flattenCss(CSS_IN)), "utf8");

  // ── Islas de desarrollo: un bundle ESM (+min) y CSS por isla ──
  for (const { name, dir, hasCss } of ISLANDS) {
    buildEsm(
      join(root, "src", "islands", dir, `${name}.ts`),
      join(root, "cdn", "esm", `mimicus-${name}.esm.js`),
      { minOut: join(root, "cdn", "esm", `mimicus-${name}.esm.min.js`) }
    );
    if (hasCss) {
      writeFileSync(
        join(root, "cdn", "css", `mimicus-${name}.css`),
        minifyCss(flattenCss(join(root, "css", "islands", `${name}.css`))),
        "utf8"
      );
    }
  }

  // ── Skins de looknfeel: un CSS por look (opt-in) ──
  for (const look of LOOKNFEELS) {
    writeFileSync(
      join(root, "cdn", "css", `mimicus-looknfeel-${look}.css`),
      minifyCss(flattenCss(join(root, "css", "looknfeel", `${look}.css`))),
      "utf8"
    );
  }

  mkdirSync(dirname(OUT.bootCss), { recursive: true });

  const bootRaw = bootCssText("");

  writeFileSync(OUT.bootCss, bootRaw, "utf8");

  writeFileSync(OUT.bootCssMin, minifyCss(bootRaw), "utf8");



  const versions = {
    componentRef: "main",
    esm: {
      main: "esm/mimicus-react.esm.min.js",
      bootstrap: "esm/mimicus-react.bootstrap.esm.min.js",
      css: "css/mimicus-ui.min.css",
      loadCdns: "stack-esm",
    },
    global: {
      main: "iife/mimicus-react.iife.min.js",
      globalName: "MimicusUI",
      bootstrap: "iife/mimicus-snippets.min.js",
      bootstrapGlobal: "MimicusBootstrap",
      css: "css/mimicus-ui.min.css",
      loadCdns: "stack-global",
      alias: "iife/mimicus-ui.min.js",
    },
  };

  writeFileSync(join(root, "cdn", "versions.json"), JSON.stringify(versions, null, 2) + "\n");



  const demoCdn = join(root, "demo", "cdn");

  mkdirSync(demoCdn, { recursive: true });
  mkdirSync(join(demoCdn, "esm"), { recursive: true });
  mkdirSync(join(demoCdn, "iife"), { recursive: true });
  mkdirSync(join(demoCdn, "css"), { recursive: true });

  for (const rel of [
    "esm/mimicus-react.esm.js",
    "esm/mimicus-react.esm.min.js",
    "esm/mimicus-react.bootstrap.esm.js",
    "esm/mimicus-react.bootstrap.esm.min.js",
    "iife/mimicus-react.iife.js",
    "iife/mimicus-react.iife.min.js",
    "iife/mimicus-ui.js",
    "iife/mimicus-ui.min.js",

    "css/mimicus-ui.min.css",

    "iife/mimicus-snippets.js",

    "iife/mimicus-snippets.min.js",

    "css/app-boot.min.css",

    "versions.json",

  ]) {

    copyFileSync(join(root, "cdn", rel), join(demoCdn, rel));

  }

  const demoAssets = join(root, "demo", "assets");
  mkdirSync(demoAssets, { recursive: true });
  copyFileSync(join(root, "assets", "mimicus-logo.svg"), join(demoAssets, "mimicus-logo.svg"));



  console.log("mimicus-react build OK");
  console.log("  ESM ", OUT.esmMin);
  console.log("  IIFE", OUT.iifeMin, "(global MimicusUI)");

}



build();


