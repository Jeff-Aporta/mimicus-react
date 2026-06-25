export { LoginButton } from "./components/LoginButton.jsx";
export { LoginDialog } from "./components/LoginDialog.jsx";
export { LoginFormFields, LoginFormActions } from "./components/LoginFormFields.jsx";
export { ContapymeIcon } from "./components/ContapymeIcon.jsx";

export { createOrchestratorSession, createDemoSession } from "./auth/orchestratorSession.js";
export { ContapymeSessionProvider, useContapymeSession, resolveContapymeSession, useResolvedContapymeSession } from "./auth/sessionContext.jsx";
export { readLoginCredentials, saveLoginCredentials, clearLoginCredentials } from "./auth/loginCredentials.js";
export { normalizeContapymeLoginId, formatContapymeLoginInput, resolveSessionHeaderLabel, CONTAPYME_LOGIN_DOMAIN } from "./auth/loginFormat.js";
export { loginWithInsoftAutoRetry, defaultIterceroFromTerceros, DEFAULT_APP_ITERCERO } from "./auth/loginMultiempresa.js";
export { wrapPassword } from "./auth/caesar.js";

export {
  MAIN_ORCHESTRATOR_URL_PROD,
  MAIN_ORCHESTRATOR_URL_LOCAL,
  MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS,
  LOGIN_SUBTITLE_DEFAULT,
  CONTAPYME_LOGIN_ID_HELPER,
  LOGIN_REMEMBER_LABEL,
} from "./constants.js";
