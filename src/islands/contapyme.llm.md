---
isla: contapyme
subpath: "@jeff-aporta/mimicus-react/contapyme"
css: "@jeff-aporta/mimicus-react/contapyme.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla contapyme

Kit general más los componentes y la sesión especiales de ContaPyme (login, sesión/orquestador, helpers de credenciales). Compone la isla `general` y añade lo específico de ContaPyme.

## Exporta
Compone y re-exporta la isla `general`, y añade:
- UI: `LoginButton`, `LoginDialog`, `LoginFormFields`, `LoginFormActions`, `ContapymeIcon`
- Sesión: `createOrchestratorSession`, `createDemoSession`, `ContapymeSessionProvider`, `useContapymeSession`, `resolveContapymeSession`, `useResolvedContapymeSession`
- Credenciales: `readLoginCredentials`, `saveLoginCredentials`, `clearLoginCredentials`, `normalizeContapymeLoginId`, `formatContapymeLoginInput`, `resolveSessionHeaderLabel`, `wrapPassword`
- Login/orquestador: `loginWithInsoftAutoRetry`, `defaultIterceroFromTerceros`, `DEFAULT_APP_ITERCERO`, `MAIN_ORCHESTRATOR_URL_PROD`, `MAIN_ORCHESTRATOR_URL_LOCAL`, `MAIN_ORCHESTRATOR_LS_KEY`
- Constantes: `CONTAPYME_LOGIN_DOMAIN`, `AUTH_DEFAULTS`, `LOGIN_SUBTITLE_DEFAULT`, `CONTAPYME_LOGIN_ID_HELPER`, `LOGIN_REMEMBER_LABEL`

## Depende de
Isla `general` (y por tanto de `theme` y demás islas base).

## Uso
import { LoginDialog, useContapymeSession } from "@jeff-aporta/mimicus-react/contapyme";
// + cargar el CSS: @jeff-aporta/mimicus-react/contapyme.css
