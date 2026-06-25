import { AUTH_DEFAULTS, MAIN_ORCHESTRATOR_LS_KEY } from "../constants.js";
import { wrapPassword } from "./caesar.js";
import { normalizeContapymeLoginId } from "./loginFormat.js";
import { createTokenStore, isTokenValid } from "./tokenStore.js";

function sanitizeLoginError(raw) {
  const msg = String(raw ?? "").trim();
  if (!msg || /^HTTP \d{3}$/.test(msg)) return "No se pudo iniciar sesión";
  return msg;
}

/**
 * Sesión JWT vía main-orchestrator — replicable en cualquier app Mimicus / Jeff-Aporta.
 * Paridad con `ISAFront.registerApp({ session: true })` + `window[ns].Session`.
 */
export function createOrchestratorSession(opts = {}) {
  const appId = String(opts.appId || opts.app || "").trim();
  if (!appId) throw new Error("createOrchestratorSession: appId requerido");

  const sessionKey = opts.sessionKey || `${AUTH_DEFAULTS.sessionKey}:${appId}`;
  const authEvt = opts.authEvent || AUTH_DEFAULTS.authEvent;
  const authLocal = opts.authLocal || AUTH_DEFAULTS.authLocal;
  const authOnline = opts.authOnline || AUTH_DEFAULTS.authOnline;
  const store = createTokenStore(sessionKey);

  function authBase() {
    try {
      if (localStorage.getItem(MAIN_ORCHESTRATOR_LS_KEY) === "1") return authLocal;
    } catch { /* ignore */ }
    return authOnline;
  }

  function authUrl(path) {
    return authBase().replace(/\/$/, "") + (path.charAt(0) === "/" ? path : `/${path}`);
  }

  function readSession() {
    const data = store.read();
    if (!data) return null;
    if (data.app && data.app !== appId) {
      store.clear();
      return null;
    }
    if (!isTokenValid(data)) {
      store.clear();
      return null;
    }
    return data;
  }

  function saveSession(data) {
    store.save({
      username: data.username,
      displayName: data.displayName ?? null,
      role: data.role ?? null,
      token: data.token,
      expiresAt: data.expiresAt ?? null,
      app: appId,
    });
    if (typeof window !== "undefined") window.dispatchEvent(new Event(authEvt));
  }

  function clearSession() {
    store.clear();
    if (typeof window !== "undefined") window.dispatchEvent(new Event(authEvt));
  }

  function current() {
    return readSession();
  }

  function isLoggedIn() {
    return isTokenValid(readSession());
  }

  function username() {
    return current()?.username ?? null;
  }

  function displayName() {
    const dn = String(current()?.displayName ?? "").trim();
    return dn || null;
  }

  function authHeader() {
    const token = current()?.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  function loginErrorMessage(res, data) {
    if (data?.code === "MULTI_EMPRESA" && Array.isArray(data.terceros) && data.terceros.length) {
      const e = new Error(String(data.error || "Elija la empresa para continuar."));
      e.code = "MULTI_EMPRESA";
      e.terceros = data.terceros;
      return e;
    }
    const apiErr = String(data?.error || "").trim();
    if (apiErr && !/^HTTP \d{3}$/.test(apiErr)) return sanitizeLoginError(apiErr);
    if (res.status === 403) {
      if (data?.app) return `No tiene acceso a la aplicación (${data.app}). Solicite permiso al administrador.`;
      return "No tiene acceso a esta aplicación.";
    }
    if (res.status === 401) return "Usuario o contraseña incorrectos.";
    if (res.status >= 500) return "El servicio de acceso no está disponible. Intente más tarde.";
    return "No se pudo iniciar sesión";
  }

  async function login(user, pass, loginOpts = {}) {
    const loginId = normalizeContapymeLoginId(user);
    if (!loginId) throw new Error("Usuario y contraseña requeridos");

    const credBody = {
      password: wrapPassword(pass),
      app: appId,
      semail: loginId,
    };
    const itercero = String(loginOpts.itercero ?? "").trim();
    if (itercero) credBody.itercero = itercero;

    let res;
    try {
      res = await fetch(authUrl("/api/auth/token"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credBody),
      });
    } catch (e) {
      throw new Error(e instanceof Error ? e.message : "No se pudo conectar con el servicio de acceso");
    }

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.token) {
      const err = loginErrorMessage(res, data);
      if (err instanceof Error && err.code === "MULTI_EMPRESA") throw err;
      throw new Error(typeof err === "string" ? err : "No se pudo iniciar sesión");
    }
    if (data.app && data.app !== appId) {
      throw new Error("Token emitido para otra aplicación");
    }

    const session = {
      username: data.username || user,
      displayName: data.displayName || null,
      role: data.role || null,
      token: data.token,
      expiresAt: data.expiresAt || null,
      app: appId,
    };
    saveSession(session);
    return session;
  }

  function logout() {
    clearSession();
  }

  return {
    appId: () => appId,
    EVENT: authEvt,
    current,
    isLoggedIn,
    username,
    displayName,
    authHeader,
    login,
    logout,
    authBase,
    authUrl,
  };
}

/** Sesión en memoria para demos del playground (sin llamadas de red). */
export function createDemoSession(initial = null) {
  let session = initial;
  const EVENT = "mimicus-demo-session";
  const api = {
    EVENT,
    appId: () => "mimicus-playground",
    current: () => session,
    isLoggedIn: () => Boolean(session),
    username: () => session?.username ?? null,
    displayName: () => session?.displayName ?? null,
    authHeader: () => (session?.token ? { Authorization: `Bearer ${session.token}` } : {}),
    async login(user, pass) {
      if (!String(user).trim() || !pass) throw new Error("Usuario y contraseña requeridos");
      session = {
        username: normalizeContapymeLoginId(user),
        displayName: formatDemoName(user),
        token: "demo-token",
        role: "demo",
      };
      if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
      return session;
    },
    logout() {
      session = null;
      if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
    },
  };
  return api;
}

function formatDemoName(user) {
  const s = String(user ?? "").trim().split("@")[0];
  if (!s) return "Usuario";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
