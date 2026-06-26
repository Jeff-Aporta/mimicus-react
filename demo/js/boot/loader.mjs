import React from "react";

import { createRoot } from "react-dom/client";

import { bootMimicusUI } from "@jeff-aporta/mimicus-react";

import { App } from "../../_dist/app.esm.js";



async function boot() {

  if (new URLSearchParams(location.search).has("mimicus_boot_hold")) return;



  bootMimicusUI();



  const rootEl = document.getElementById("root");

  if (!rootEl) throw new Error("#root no encontrado");



  createRoot(rootEl).render(React.createElement(App));

}



boot().catch((err) => {

  const root = document.getElementById("root");

  const msg = err instanceof Error ? err.stack || err.message : String(err);

  if (root) {

    root.innerHTML = `<pre style="color:#ff8a80;padding:24px;font-family:monospace">Error de arranque:\n${msg}</pre>`;

  }

  console.error(err);

});

