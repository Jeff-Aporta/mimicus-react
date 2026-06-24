/**
 * @jeff-aporta/jagudeloe-react-ui — entry IIFE → window.JaguUI
 */
import { AppLayout } from "./layout/AppLayout.jsx";
import { AppLayoutProvider } from "./layout/appLayoutContext.jsx";
import { AppLayoutSider } from "./layout/AppLayoutSider.jsx";
import { Button } from "./components/Button.jsx";
import { Card } from "./components/Card.jsx";
import { ThemeProvider } from "./theme/ThemeProvider.jsx";
import { bootTheme, applyTheme, setLuminance, setThemeColor, setDesignScheme, getThemeState, subscribeTheme } from "./theme/themeEngine.js";
import { bootLooknfeel, applyLooknfeel, getLooknfeelState, subscribeLooknfeel } from "./theme/looknfeelEngine.js";
import * as themeConstants from "./theme/constants.js";
import { SpaRouter, SpaNavLink, JagSidebar, SpaOutlet, useSpa, useSpaRoute, getSpaRoute, setSpaRoute } from "./spa/SpaRouter.jsx";
import { urlState } from "./spa/urlState.js";
import * as appLayoutVariants from "./layout/appLayoutVariants.js";
import { resolveColor, colorMix } from "./lib/resolveColor.js";
import { mergeSurfaceStyle } from "./lib/surfaceColor.js";

function bootJaguUI() {
  bootTheme();
  bootLooknfeel();
}

globalThis.JaguUI = {
  bootJaguUI,
  bootTheme,
  bootLooknfeel,
  applyTheme,
  applyLooknfeel,
  setLuminance,
  setThemeColor,
  setDesignScheme,
  getThemeState,
  subscribeTheme,
  getLooknfeelState,
  subscribeLooknfeel,
  ...themeConstants,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  Button,
  Card,
  ThemeProvider,
  SpaRouter,
  SpaNavLink,
  JagSidebar,
  SpaOutlet,
  useSpa,
  useSpaRoute,
  getSpaRoute,
  setSpaRoute,
  urlState,
  ...appLayoutVariants,
  resolveColor,
  colorMix,
  mergeSurfaceStyle,
};
