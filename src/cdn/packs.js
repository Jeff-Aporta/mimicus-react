/**
 * Catálogo de fragmentos head para document.write — preconnect, importmap, scripts, CSS.
 * Grupos en CDN_GROUPS; packs atómicos aquí.
 */

/** @typedef {{ kind: "html", html: string } | { kind: "importmap", imports: Record<string, string> } | { kind: "link-css", href: string | ((base: string) => string), attrs?: Record<string, string> } | { kind: "script-src", src: string | ((base: string) => string), defer?: boolean, attrs?: Record<string, string> }} CdnPack */

/** @type {Record<string, CdnPack>} */
export const CDN_PACKS = {
  "preconnect-jsdelivr": {
    kind: "html",
    html: '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />',
  },
  "preconnect-esmsh": {
    kind: "html",
    html: '<link rel="preconnect" href="https://esm.sh" crossorigin />',
  },
  "preconnect-iconify": {
    kind: "html",
    html: '<link rel="preconnect" href="https://code.iconify.design" crossorigin />',
  },
  "importmap-react18": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
    },
  },
  "importmap-react18-mui": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
      "@emotion/react": "https://esm.sh/@emotion/react@11.14.0?external=react,react-dom",
      "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.1?external=react,react-dom,@emotion/react",
      "@mui/material": "https://esm.sh/@mui/material@9.1.0?external=react,react-dom,@emotion/react,@emotion/styled",
      "@mui/material/": "https://esm.sh/@mui/material@9.1.0/",
    },
  },
  "script-iconify": {
    kind: "script-src",
    src: "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "iconify" },
  },
  "script-babel": {
    kind: "script-src",
    src: "https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.9/babel.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "babel" },
  },
  "link-mimicus-ui-css": {
    kind: "link-css",
    href: (base) => base + "mimicus-ui.min.css",
    attrs: { "data-mimicus-ui-css": "1", "data-mimicus-cdn": "mimicus-ui-css" },
  },
  "script-mimicus-react-iife": {
    kind: "script-src",
    src: (base) => base + "mimicus-react.iife.min.js",
    defer: false,
    attrs: { "data-mimicus-react-iife": "1", "data-mimicus-cdn": "mimicus-react-iife" },
  },
  /** @deprecated alias de script-mimicus-react-iife */
  "script-mimicus-ui": {
    kind: "script-src",
    src: (base) => base + "mimicus-react.iife.min.js",
    defer: false,
    attrs: { "data-mimicus-ui-js": "1", "data-mimicus-cdn": "mimicus-ui" },
  },
  "link-app-boot-css": {
    kind: "link-css",
    href: (base) => base + "app-boot.min.css",
    attrs: { "data-mimicus-cdn": "app-boot-css" },
  },
  "importmap-mimicus-ui": {
    kind: "importmap",
    imports: (base) => ({
      "@jeff-aporta/mimicus-react": base + "mimicus-react.esm.min.js",
      "@jeff-aporta/mimicus-react/bootstrap": base + "mimicus-react.bootstrap.esm.min.js",
    }),
  },
};

/**
 * Grupos estándar — claves para MimicusBootstrap.loadCDNs(...).
 * @type {Record<string, string[]>}
 */
export const CDN_GROUPS = {
  preconnect: ["preconnect-jsdelivr", "preconnect-esmsh", "preconnect-iconify"],
  react18: ["importmap-react18"],
  "react18-mui": ["importmap-react18-mui"],
  iconify: ["script-iconify"],
  babel: ["script-babel"],
  "mimicus-ui-css": ["link-mimicus-ui-css"],
  /** Modo variable — React global + CSS + MimicusUI en globalThis */
  "mimicus-ui": ["link-mimicus-ui-css", "script-mimicus-react-iife"],
  "importmap-mimicus": ["importmap-mimicus-ui"],
  "app-boot-css": ["link-app-boot-css"],
  /** Modo import — React importmap + CSS + alias @jeff-aporta/mimicus-react */
  "stack-esm": ["preconnect", "react18", "iconify", "mimicus-ui-css", "importmap-mimicus-ui"],
  /** Modo variable — React UMD/global + CSS + mimicus-react.iife */
  "stack-global": ["preconnect", "react18", "iconify", "mimicus-ui-css", "script-mimicus-react-iife"],
  /** Stack mínimo Mimicus React ESM (sin MUI). */
  "stack-mimicus": ["stack-esm"],
  /** Stack mínimo Mimicus React global (sin MUI). */
  "stack-mimicus-global": ["stack-global"],
  /** Stack tipo swagger (React + MUI + babel + iconify). */
  "stack-mui": ["preconnect", "react18-mui", "iconify", "babel"],
};
