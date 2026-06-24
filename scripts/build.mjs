/**
 * Build jagudeloe-react-ui: bundle src → IIFE CDN + CSS aplanado.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");

const ENTRY = join(root, "src", "entry-iife.jsx");
const CSS_IN = join(root, "css", "jagu-ui.css");
const CDN_JS = join(root, "cdn", "jagu-ui.js");
const CDN_MIN = join(root, "cdn", "jagu-ui.min.js");
const CDN_CSS = join(root, "cdn", "jagu-ui.min.css");

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

const REQUIRE_SHIM = `var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};`;

function build() {
  const banner =
    REQUIRE_SHIM +
    "\n/**\n * @jeff-aporta/jagudeloe-react-ui — CDN\n * Registra window.JaguUI\n * Requiere globalThis.React y globalThis.ReactDOM.createRoot\n */\n";

  esbuild.buildSync({
    entryPoints: [ENTRY],
    outfile: CDN_JS,
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    external: ["react", "react-dom", "react/jsx-runtime"],
    legalComments: "none",
    loader: { ".jsx": "jsx", ".js": "jsx" },
  });

  let js = readFileSync(CDN_JS, "utf8");
  if (!js.startsWith("/**")) js = banner + js;
  writeFileSync(CDN_JS, js, "utf8");

  esbuild.buildSync({
    entryPoints: [CDN_JS],
    outfile: CDN_MIN,
    minify: true,
    legalComments: "none",
    target: "es2020",
    format: "iife",
    loader: { ".js": "jsx" },
  });

  writeFileSync(CDN_CSS, minifyCss(flattenCss(CSS_IN)), "utf8");

  const demoCdn = join(root, "demo", "cdn");
  mkdirSync(demoCdn, { recursive: true });
  for (const name of ["jagu-ui.js", "jagu-ui.min.js", "jagu-ui.min.css", "versions.json"]) {
    copyFileSync(join(root, "cdn", name), join(demoCdn, name));
  }

  console.log("jagudeloe-react-ui build OK");
  console.log("  ", CDN_MIN);
  console.log("  ", CDN_CSS);
}

build();
