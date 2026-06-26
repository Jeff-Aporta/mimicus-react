export { LoginButton } from "./components/LoginButton.tsx";
export { LoginDialog } from "./components/LoginDialog.tsx";
export { LoginFormFields, LoginFormActions } from "./components/LoginFormFields.tsx";
export { ContapymeIcon } from "./components/ContapymeIcon.tsx";

export { createOrchestratorSession, createDemoSession } from "./auth/orchestratorSession.ts";
export { ContapymeSessionProvider, useContapymeSession, resolveContapymeSession, useResolvedContapymeSession } from "./auth/sessionContext.tsx";
export { readLoginCredentials, saveLoginCredentials, clearLoginCredentials } from "./auth/loginCredentials.ts";
export { normalizeContapymeLoginId, formatContapymeLoginInput, resolveSessionHeaderLabel, CONTAPYME_LOGIN_DOMAIN } from "./auth/loginFormat.ts";
export { loginWithInsoftAutoRetry, defaultIterceroFromTerceros, DEFAULT_APP_ITERCERO } from "./auth/loginMultiempresa.ts";
export { wrapPassword } from "./auth/caesar.ts";

export {
  MAIN_ORCHESTRATOR_URL_PROD,
  MAIN_ORCHESTRATOR_URL_LOCAL,
  MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS,
  LOGIN_SUBTITLE_DEFAULT,
  CONTAPYME_LOGIN_ID_HELPER,
  LOGIN_REMEMBER_LABEL,
} from "./constants.ts";
