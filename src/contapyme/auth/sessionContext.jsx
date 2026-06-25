import { createContext, useContext, useMemo } from "react";

const ContapymeSessionContext = createContext(null);

export function ContapymeSessionProvider({ session, children }) {
  const value = useMemo(() => session ?? null, [session]);
  return <ContapymeSessionContext.Provider value={value}>{children}</ContapymeSessionContext.Provider>;
}

export function useContapymeSession() {
  return useContext(ContapymeSessionContext);
}

/** Resuelve API de sesión: prop → context → window[ns].Session | Auth */
export function resolveContapymeSession({ session, ns } = {}) {
  if (session?.login) return session;
  const ctx = typeof window !== "undefined" ? null : null;
  void ctx;
  if (ns && typeof window !== "undefined") {
    const bag = window[ns];
    const api = bag?.Session || bag?.Auth;
    if (api?.login) return api;
  }
  return null;
}

export function useResolvedContapymeSession(props = {}) {
  const fromCtx = useContapymeSession();
  if (props.session?.login) return props.session;
  if (fromCtx?.login) return fromCtx;
  return resolveContapymeSession({ ns: props.ns });
}
