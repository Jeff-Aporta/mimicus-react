/**
 * isla: contapyme
 * llm:  ./contapyme.llm.md
 * css:  cdn/mimicus-contapyme.css
 * repo: Jeff-Aporta/mimicus-react · src/islands/bundle/contapyme.js
 * Kit general + componentes/sesión especiales de ContaPyme (compone la isla general).
 */
export * from "./general.js";
export {
  LoginButton, LoginDialog, LoginFormFields, LoginFormActions, ContapymeIcon,
  createOrchestratorSession, createDemoSession,
  ContapymeSessionProvider, useContapymeSession, resolveContapymeSession, useResolvedContapymeSession,
  readLoginCredentials, saveLoginCredentials, clearLoginCredentials,
  normalizeContapymeLoginId, formatContapymeLoginInput, resolveSessionHeaderLabel, CONTAPYME_LOGIN_DOMAIN,
  loginWithInsoftAutoRetry, defaultIterceroFromTerceros, DEFAULT_APP_ITERCERO, wrapPassword,
  MAIN_ORCHESTRATOR_URL_PROD, MAIN_ORCHESTRATOR_URL_LOCAL, MAIN_ORCHESTRATOR_LS_KEY,
  AUTH_DEFAULTS, LOGIN_SUBTITLE_DEFAULT, CONTAPYME_LOGIN_ID_HELPER, LOGIN_REMEMBER_LABEL,
} from "../../contapyme/index.js";
