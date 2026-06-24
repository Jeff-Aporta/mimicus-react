import { createContext, useContext, useMemo, useState } from "react";

const AppLayoutContext = createContext(null);

export function AppLayoutProvider({ children, defaultSiderWidth = "200px" }) {
  const [siderWidth, setSiderWidth] = useState(defaultSiderWidth);
  const value = useMemo(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
  return <AppLayoutContext.Provider value={value}>{children}</AppLayoutContext.Provider>;
}

export function useAppLayoutContext() {
  return useContext(AppLayoutContext);
}
