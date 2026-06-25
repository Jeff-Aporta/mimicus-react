/** @jeff-aporta/mimicus-react — IIFE CDN → globalThis.MimicusUI (modo variable; alternativa al import ESM). */
import * as UI from "./index.jsx";

import * as cdn from "./cdn/index.js";



globalThis.MimicusUI = { ...UI };



if (!globalThis.MimicusBootstrap) globalThis.MimicusBootstrap = {};

Object.assign(globalThis.MimicusBootstrap, cdn, UI.snippets, cdn);


