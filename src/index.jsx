/**
 * @jeff-aporta/mimicus-react — API pública ESM (import from).
 */
import { AppLayout } from "./layout/AppLayout.jsx";
import { AppLayoutProvider } from "./layout/appLayoutContext.jsx";
import { AppLayoutSider } from "./layout/AppLayoutSider.jsx";
import { Button } from "./components/Button.jsx";
import { Card } from "./components/Card.jsx";
import { ThemeProvider } from "./theme/ThemeProvider.jsx";
import {
  bootTheme,
  applyTheme,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
} from "./theme/themeEngine.js";
import {
  bootLooknfeel,
  applyLooknfeel,
  getLooknfeelState,
  subscribeLooknfeel,
} from "./theme/looknfeelEngine.js";
import * as themeConstants from "./theme/constants.js";
import {
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
} from "./spa/SpaRouter.jsx";
import { urlState } from "./spa/urlState.js";
import * as appLayoutVariants from "./layout/appLayoutVariants.js";
import { resolveColor, colorMix } from "./lib/resolveColor.js";
import { mergeSurfaceStyle } from "./lib/surfaceColor.js";
import * as snippets from "./snippets/index.js";
import { fluidCss, js2css } from "./snippets/fluidCss.js";
import { BRAND_DISPLAY_NAME } from "./snippets/constants.js";
import * as cdn from "./cdn/index.js";

export function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}

export {
  bootTheme,
  applyTheme,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
  bootLooknfeel,
  applyLooknfeel,
  getLooknfeelState,
  subscribeLooknfeel,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  Button,
  Card,
  ThemeProvider,
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
  urlState,
  resolveColor,
  colorMix,
  mergeSurfaceStyle,
  fluidCss,
  js2css,
  BRAND_DISPLAY_NAME,
};

export { snippets, cdn };
export * from "./theme/constants.js";
export * from "./layout/appLayoutVariants.js";
