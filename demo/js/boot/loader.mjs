import { stackReady } from "./stack.mjs";
import { ensureJaguUI, demoAppUrl } from "./cdn.mjs";

async function boot() {
  if (new URLSearchParams(location.search).has("jagu_boot_hold")) return;

  await stackReady;

  await ensureJaguUI();

  const React = globalThis.React;
  const ReactDOM = globalThis.ReactDOM;
  const { App } = await import(demoAppUrl());

  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("#root no encontrado");

  ReactDOM.createRoot(rootEl).render(React.createElement(App));
}

boot().catch((err) => {
  const root = document.getElementById("root");
  const msg = err instanceof Error ? err.stack || err.message : String(err);
  if (root) {
    root.innerHTML = `<pre style="color:#ff8a80;padding:24px;font-family:monospace">Error de arranque:\n${msg}</pre>`;
  }
  console.error(err);
});
