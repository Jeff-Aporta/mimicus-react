import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { urlState, getSpaRoute, setSpaRoute } from "./urlState.js";
import { Button } from "../components/Button.jsx";

const SpaContext = createContext({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });

export function useSpa() {
  return useContext(SpaContext);
}

export function useSpaRoute() {
  const { route, defaultRoute } = useSpa();
  return route ?? defaultRoute ?? null;
}

export function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }) {
  const route = useSpaRoute() ?? defaultRoute;
  const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
  if (!Page) return null;
  return typeof Page === "function" ? <Page /> : Page;
}

export function SpaRouter({ routes, defaultRoute = "home", children }) {
  const [nav, setNav] = useState(() => urlState.get());

  useEffect(() => urlState.subscribe(setNav), []);

  const route = nav.r ?? defaultRoute;
  const navigate = (next) => urlState.setRoute(next);
  const value = useMemo(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);

  return <SpaContext.Provider value={value}>{children}</SpaContext.Provider>;
}

export function SpaNavLink({ route, children, className, variant = "text", ...rest }) {
  const { route: active, navigate } = useSpa();
  const isActive = active === route;
  return (
    <Button
      {...rest}
      variant={variant}
      className={["jagu-nav-link", isActive && "is-active", className].filter(Boolean).join(" ")}
      onClick={() => navigate(route)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Button>
  );
}

export function JagSidebar({ title, children, className, ...rest }) {
  return (
    <nav {...rest} className={["jagu-sidebar", className].filter(Boolean).join(" ")}>
      {title != null && <div className="jagu-sidebar-header pg-sidebar-header">{title}</div>}
      <div className="jagu-sidebar-body pg-sidebar-body">{children}</div>
    </nav>
  );
}

export { getSpaRoute, setSpaRoute };
