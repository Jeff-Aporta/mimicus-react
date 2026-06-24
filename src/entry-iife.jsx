/**
 * @jeff-aporta/mimicus-react — legacy IIFE → window.MimicusUI (deprecado; preferir import ESM).
 */
import * as UI from "./index.jsx";
import * as cdn from "./cdn/index.js";

globalThis.MimicusUI = { ...UI };

if (!globalThis.MimicusBootstrap) globalThis.MimicusBootstrap = {};
Object.assign(globalThis.MimicusBootstrap, cdn, UI.snippets, cdn);
