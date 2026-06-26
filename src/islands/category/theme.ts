/**
 * isla: theme
 * llm:  ./theme.llm.md
 * css:  cdn/mimicus-theme.css
 * repo: Jeff-Aporta/mimicus-react · src/islands/category/theme.js
 * Motor de tema/looknfeel + ThemeProvider + constantes. Base de casi todas las islas.
 */
export {
  bootTheme, applyTheme, setLuminance, setThemeColor, setDesignScheme, getThemeState, subscribeTheme,
} from "../../theme/themeEngine.ts";
export {
  bootLooknfeel, applyLooknfeel, getLooknfeelState, subscribeLooknfeel,
} from "../../theme/looknfeelEngine.ts";
export { ThemeProvider } from "../../theme/ThemeProvider.tsx";
export * from "../../theme/constants.ts";

import { bootTheme } from "../../theme/themeEngine.ts";
import { bootLooknfeel } from "../../theme/looknfeelEngine.ts";

export function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}
