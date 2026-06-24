import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");

const ENTRY = join(root, "demo", "js", "app", "App.jsx");
const OUT = join(root, "demo", "_dist", "app.min.js");

const REQUIRE_SHIM = `var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};`;

esbuild.buildSync({
    entryPoints: [ENTRY],
    outfile: OUT,
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    external: ["react", "react-dom", "react-dom/client"],
    banner: { js: REQUIRE_SHIM },
    minify: true,
    legalComments: "none",
    loader: { ".jsx": "jsx", ".js": "jsx" },
  });

console.log("demo build OK", OUT);
