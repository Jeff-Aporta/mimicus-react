/**
 * ThemeProvider — isla: theme
 * repo: Jeff-Aporta/mimicus-react · src/theme/ThemeProvider.tsx
 * Suscribe el árbol a los motores de tema y looknfeel.
 */
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getThemeState, subscribeTheme } from "./themeEngine.ts";
import { getLooknfeelState, subscribeLooknfeel } from "./looknfeelEngine.ts";

export function useTheme() {
  const [theme, setTheme] = useState(() => getThemeState());
  // subscribeTheme retorna () => boolean; envolvemos para que el cleanup sea void.
  useEffect(() => { const off = subscribeTheme(setTheme); return () => { off(); }; }, []);
  return theme;
}

export function useLooknfeel() {
  const [look, setLook] = useState(() => getLooknfeelState());
  // subscribeLooknfeel retorna () => boolean; envolvemos para que el cleanup sea void.
  useEffect(() => { const off = subscribeLooknfeel(setLook); return () => { off(); }; }, []);
  return look;
}

export interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useTheme();
  useLooknfeel();
  return children as ReactNode;
}
