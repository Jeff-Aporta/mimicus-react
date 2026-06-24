/**
 * Stack mínimo: React 18 sin MUI ni front-shared.
 * Expone globalThis.React, globalThis.ReactDOM.createRoot y require() para el IIFE CDN.
 */
const w = globalThis;

export const stackReady = (async () => {
  const [ReactMod, clientMod] = await Promise.all([
    import("react"),
    import("react-dom/client"),
  ]);
  const React = ReactMod.default ?? ReactMod;
  const createRoot = clientMod.createRoot ?? clientMod.default?.createRoot;
  if (!createRoot) throw new Error("react-dom/client: createRoot no disponible");

  w.React = React;
  w.ReactDOM = { createRoot };

  w.require = function require(id) {
    if (id === "react") return w.React;
    if (id === "react-dom" || id === "react-dom/client") return w.ReactDOM;
    throw new Error(`Dynamic require of "${id}" is not supported`);
  };
})();
