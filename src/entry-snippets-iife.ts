/**
 * Legacy IIFE bootstrap — MimicusBootstrap.loadCDNs durante document.write.
 * Preferir: import { loadCDNs } from "@jeff-aporta/mimicus-react/bootstrap"
 */
import * as bootstrap from "./bootstrap.ts";

const g = globalThis as any; // globals del CDN (MimicusSnippets/MimicusBootstrap) no tipados
g.MimicusSnippets = bootstrap;
g.MimicusBootstrap = bootstrap;
