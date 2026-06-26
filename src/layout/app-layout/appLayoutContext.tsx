import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export interface AppLayoutContextValue {
  siderWidth: string;
  setSiderWidth: (w: string) => void;
}

const AppLayoutContext = createContext<AppLayoutContextValue | null>(null);

export interface AppLayoutProviderProps {
  children?: ReactNode;
  defaultSiderWidth?: string;
}

export function AppLayoutProvider({ children, defaultSiderWidth = "200px" }: AppLayoutProviderProps) {
  const [siderWidth, setSiderWidth] = useState(defaultSiderWidth);
  const value = useMemo(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
  return <AppLayoutContext.Provider value={value}>{children}</AppLayoutContext.Provider>;
}

export function useAppLayoutContext() {
  return useContext(AppLayoutContext);
}
