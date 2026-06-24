import { useEffect, useState } from "react";
import { getThemeState, subscribeTheme } from "./themeEngine.js";
import { getLooknfeelState, subscribeLooknfeel } from "./looknfeelEngine.js";

export function useTheme() {
  const [theme, setTheme] = useState(() => getThemeState());
  useEffect(() => subscribeTheme(setTheme), []);
  return theme;
}

export function useLooknfeel() {
  const [look, setLook] = useState(() => getLooknfeelState());
  useEffect(() => subscribeLooknfeel(setLook), []);
  return look;
}

export function ThemeProvider({ children }) {
  useTheme();
  useLooknfeel();
  return children;
}
