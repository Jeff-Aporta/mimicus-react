/**
 * sessionContext — isla: contapyme
 * repo: Jeff-Aporta/mimicus-react · src/contapyme/auth/sessionContext.tsx
 * Contexto de sesión ContaPyme: provider, hooks y resolución (prop → context → window[ns]).
 */
import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

// API de sesión heterogénea (orchestrator/ISAFront); se tipa de buena fe con métodos opcionales.
export interface ContapymeSessionApi {
  login: (...args: any[]) => any;
  logout?: (...args: any[]) => any;
  current?: () => any;
  getSession?: () => any;
  isLoggedIn?: () => boolean;
  username?: () => string;
  displayName?: () => string | null;
  EVENT?: string;
  [key: string]: any;
}

const ContapymeSessionContext = createContext<ContapymeSessionApi | null>(null);

export interface ContapymeSessionProviderProps {
  session?: ContapymeSessionApi | null;
  children?: ReactNode;
}

export function ContapymeSessionProvider({ session, children }: ContapymeSessionProviderProps) {
  const value = useMemo(() => session ?? null, [session]);
  return <ContapymeSessionContext.Provider value={value}>{children}</ContapymeSessionContext.Provider>;
}

export function useContapymeSession() {
  return useContext(ContapymeSessionContext);
}

/** Resuelve API de sesión: prop → context → window[ns].Session | Auth */
export function resolveContapymeSession(
  { session, ns }: { session?: ContapymeSessionApi | null; ns?: string } = {},
): ContapymeSessionApi | null {
  if (session?.login) return session;
  const ctx = typeof window !== "undefined" ? null : null;
  void ctx;
  if (ns && typeof window !== "undefined") {
    const bag = (window as any)[ns];
    const api = bag?.Session || bag?.Auth;
    if (api?.login) return api;
  }
  return null;
}

export function useResolvedContapymeSession(
  props: { session?: ContapymeSessionApi | null; ns?: string } = {},
): ContapymeSessionApi | null {
  const fromCtx = useContapymeSession();
  if (props.session?.login) return props.session;
  if (fromCtx?.login) return fromCtx;
  return resolveContapymeSession({ ns: props.ns });
}
