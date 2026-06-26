/** @jeff-aporta/mimicus-react — IIFE CDN → globalThis.MimicusUI (modo variable; alternativa al import ESM). */
import * as UI from "./index.tsx";

import * as cdn from "./cdn/index.ts";



const g = globalThis as any; // globals del CDN (MimicusUI/MimicusBootstrap) no tipados

g.MimicusUI = { ...UI };

if (!g.MimicusBootstrap) g.MimicusBootstrap = {};

Object.assign(g.MimicusBootstrap, cdn, UI.snippets, cdn);


