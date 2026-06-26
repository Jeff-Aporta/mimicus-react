export const MAIN_ORCHESTRATOR_URL_PROD = "https://main-orchestrator.jeffaporta.workers.dev";
export const MAIN_ORCHESTRATOR_URL_LOCAL = "http://localhost:8790";
export const MAIN_ORCHESTRATOR_LS_KEY = "jeff:gateway-local";

export const AUTH_DEFAULTS = {
  sessionKey: "system-login:session",
  authEvent: "system-login:auth",
  authLocal: MAIN_ORCHESTRATOR_URL_LOCAL,
  authOnline: MAIN_ORCHESTRATOR_URL_PROD,
};

export const LOGIN_SUBTITLE_DEFAULT =
  "Use su usuario y contraseña de la organización. La misma sesión sirve en todas las aplicaciones.";

export const CONTAPYME_LOGIN_ID_HELPER = "Puede omitir @contapyme.com; se envía en minúsculas.";

export const LOGIN_REMEMBER_LABEL = "Recordarme";

export const LOGIN_CREDENTIALS_STORAGE_KEY = "jeffaporta:login-creds";
