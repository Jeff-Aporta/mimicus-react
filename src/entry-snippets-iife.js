/**

 * Legacy IIFE bootstrap — MimicusBootstrap.loadCDNs durante document.write.

 * Preferir: import { loadCDNs } from "@jeff-aporta/mimicus-react/bootstrap"

 */

import * as bootstrap from "./bootstrap.js";



globalThis.MimicusSnippets = bootstrap;

globalThis.MimicusBootstrap = bootstrap;


