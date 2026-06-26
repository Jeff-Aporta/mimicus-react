/**
 * isla: theme
 * llm:  ./theme.llm.md
 * css:  cdn/mimicus-theme.css
 * repo: Jeff-Aporta/mimicus-react · src/islands/theme.js
 * Motor de tema/looknfeel + ThemeProvider + constantes. Base de casi todas las islas.
 */
export {
  bootTheme, applyTheme, setLuminance, setThemeColor, setDesignScheme, getThemeState, subscribeTheme,
} from "../theme/themeEngine.js";
export {
  bootLooknfeel, applyLooknfeel, getLooknfeelState, subscribeLooknfeel,
} from "../theme/looknfeelEngine.js";
export { ThemeProvider } from "../theme/ThemeProvider.jsx";
export * from "../theme/constants.js";

import { bootTheme } from "../theme/themeEngine.js";
import { bootLooknfeel } from "../theme/looknfeelEngine.js";

export function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}
