/**
 * SpaRouter — isla: spa
 * repo: Jeff-Aporta/mimicus-react · src/spa/SpaRouter.tsx
 * Router SPA con estado en URL (?s=) + contexto, outlet, navlink y sidebar.
 */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { urlState, getSpaRoute, setSpaRoute } from "./urlState.ts";
import { Button } from "../components/Button.tsx";

// Page puede ser un componente o un elemento ya renderizado; mapa de rutas heterogéneo.
type RoutePage = (() => ReactNode) | ReactNode;
type RouteMap = Record<string, RoutePage>;

interface SpaContextValue {
  route: string | null;
  navigate: (next: string) => unknown;
  routes: RouteMap;
  defaultRoute: string;
}

const SpaContext = createContext<SpaContextValue>({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });

export function useSpa() {
  return useContext(SpaContext);
}

export function useSpaRoute() {
  const { route, defaultRoute } = useSpa();
  return route ?? defaultRoute ?? null;
}

export interface SpaOutletProps {
  routes?: RouteMap;
  defaultRoute?: string;
  fallback?: ReactNode;
}

export function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }: SpaOutletProps) {
  const route = useSpaRoute() ?? defaultRoute;
  const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
  if (!Page) return null;
  return typeof Page === "function" ? <Page /> : Page;
}

export interface SpaRouterProps {
  routes: RouteMap;
  defaultRoute?: string;
  children?: ReactNode;
}

export function SpaRouter({ routes, defaultRoute = "home", children }: SpaRouterProps) {
  // urlState.get() infiere { v: number }; el estado real puede incluir `r` (ruta). Cast pragmático.
  const [nav, setNav] = useState<{ v?: number; r?: string; e?: number }>(() => urlState.get());

  // urlState.subscribe retorna un unsubscribe; envolvemos para que el cleanup sea void.
  useEffect(() => { const off = urlState.subscribe(setNav); return () => { off(); }; }, []);

  const route = nav.r ?? defaultRoute;
  const navigate = (next: string) => urlState.setRoute(next);
  const value = useMemo(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);

  return <SpaContext.Provider value={value}>{children}</SpaContext.Provider>;
}

export interface SpaNavLinkProps {
  route: string;
  children?: ReactNode;
  className?: string;
  variant?: string;
  [key: string]: unknown;
}

export function SpaNavLink({ route, children, className, variant = "text", ...rest }: SpaNavLinkProps) {
  const { route: active, navigate } = useSpa();
  const isActive = active === route;
  return (
    <Button
      {...rest}
      variant={variant}
      className={["mimicus-nav-link", isActive && "is-active", className].filter(Boolean).join(" ")}
      onClick={() => navigate(route)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Button>
  );
}

export interface MimicusSidebarProps {
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

export function MimicusSidebar({ title, children, className, ...rest }: MimicusSidebarProps) {
  return (
    <nav {...rest} className={["mimicus-sidebar", className].filter(Boolean).join(" ")}>
      {title != null && <div className="mimicus-sidebar-header pg-sidebar-header">{title}</div>}
      <div className="mimicus-sidebar-body pg-sidebar-body">{children}</div>
    </nav>
  );
}

export { getSpaRoute, setSpaRoute };
