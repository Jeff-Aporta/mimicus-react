import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button.jsx";
import { Dropdown, Menu } from "../../components/navigation/Navigation.jsx";
import { FlexLayout } from "../../layout/FlexLayout.jsx";
import { readLoginCredentials, saveLoginCredentials } from "../auth/loginCredentials.js";
import { formatContapymeLoginInput, normalizeContapymeLoginId, resolveSessionHeaderLabel } from "../auth/loginFormat.js";
import { defaultIterceroFromTerceros, loginWithInsoftAutoRetry } from "../auth/loginMultiempresa.js";
import { useResolvedContapymeSession } from "../auth/sessionContext.jsx";
import { ContapymeIcon } from "./ContapymeIcon.jsx";
import { LoginDialog } from "./LoginDialog.jsx";
import { LoginFormActions, LoginFormFields } from "./LoginFormFields.jsx";

function sessionView(auth) {
  const s = auth.current?.() ?? auth.getSession?.();
  if (!s) return null;
  return {
    username: s.username ?? auth.username?.(),
    displayName: s.displayName ?? auth.displayName?.() ?? null,
    role: s.role ?? null,
    expiresAt: s.expiresAt ?? null,
  };
}

function defaultToast(kind, message, onToast) {
  if (onToast?.[kind]) {
    onToast[kind](message);
    return;
  }
  const fb = typeof window !== "undefined" ? window.ISAFront?.[`toast${kind.charAt(0).toUpperCase()}${kind.slice(1)}`] : null;
  if (typeof fb === "function") fb(message);
}

/**
 * Botón de sesión + modal login ContaPyme — paridad front-shared `UI.LoginButton`.
 * Colocar en `AppLayout.Header.Tools` o toolbar de la app.
 *
 * Sesión: prop `session`, `ContapymeSessionProvider`, o `window[ns].Session` (ISAFront).
 */
export function LoginButton({
  session: sessionProp,
  ns,
  loginOpen: loginOpenProp,
  onLoginOpenChange,
  onLoggedIn,
  onToast,
  showPasswordToggle = true,
  showRemember = true,
  wrapClass = "header-session-wrap",
  btnClass = "header-session-btn",
  className,
  style,
}) {
  const auth = useResolvedContapymeSession({ session: sessionProp, ns });
  if (!auth?.login) {
    throw new Error("LoginButton: provea session (createOrchestratorSession), ContapymeSessionProvider o window[ns].Session");
  }

  const authEvt = auth.EVENT;
  const [openInternal, setOpenInternal] = useState(false);
  const open = loginOpenProp != null ? loginOpenProp : openInternal;
  const setOpen = onLoginOpenChange || setOpenInternal;
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [terceros, setTerceros] = useState([]);
  const [selectedItercero, setSelectedItercero] = useState("");
  const [, tick] = useState(0);

  useEffect(() => {
    if (!authEvt || typeof window === "undefined") return undefined;
    const onAuth = () => tick((n) => n + 1);
    window.addEventListener(authEvt, onAuth);
    return () => window.removeEventListener(authEvt, onAuth);
  }, [authEvt]);

  useEffect(() => {
    if (!open) return;
    const saved = readLoginCredentials();
    setUser(saved.username || "");
    setPass(saved.password || "");
    setRemember(saved.remember !== false);
    setErr("");
    setTerceros([]);
    setSelectedItercero("");
  }, [open]);

  const submit = useCallback(async () => {
    if (!user.trim() || !pass) {
      setErr("Usuario y contraseña requeridos");
      return;
    }
    if (terceros.length && !selectedItercero) {
      setErr("Seleccione la empresa para continuar");
      return;
    }
    const loginId = normalizeContapymeLoginId(user);
    setBusy(true);
    setErr("");
    try {
      if (showRemember) saveLoginCredentials(formatContapymeLoginInput(user) || user.trim(), pass, remember);
      const itercero = String(selectedItercero || "").trim();
      const loginOpts = itercero ? { itercero } : {};
      const result = await loginWithInsoftAutoRetry(
        (id, p, o) => auth.login(id, p, o),
        loginId,
        pass,
        loginOpts,
      );
      setPass("");
      setShowPass(false);
      setTerceros([]);
      setSelectedItercero("");
      setOpen(false);
      const sv = sessionView(auth) || result;
      defaultToast("success", "Sesión iniciada", onToast);
      onLoggedIn?.(sv || result);
      tick((n) => n + 1);
    } catch (e) {
      if (e?.code === "MULTI_EMPRESA" && Array.isArray(e.terceros) && e.terceros.length) {
        setTerceros(e.terceros);
        setSelectedItercero(defaultIterceroFromTerceros(e.terceros));
        setErr("");
        return;
      }
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      defaultToast("error", msg, onToast);
    } finally {
      setBusy(false);
    }
  }, [auth, user, pass, remember, showRemember, terceros.length, selectedItercero, setOpen, onLoggedIn, onToast]);

  const logout = useCallback(() => {
    auth.logout();
    tick((n) => n + 1);
    defaultToast("info", "Sesión cerrada", onToast);
  }, [auth, onToast]);

  const logged = sessionView(auth) || (auth.isLoggedIn?.() ? { username: auth.username?.() } : null);

  if (logged?.username) {
    const label = resolveSessionHeaderLabel(logged.displayName, logged.username, logged.username);
    return (
      <span className={[wrapClass, "mimicus-login-button", "mimicus-login-button--session", className].filter(Boolean).join(" ")} style={style}>
        <FlexLayout items="center" gap="0.35rem" className={btnClass}>
          <Dropdown
            placement="bottomRight"
            trigger={(
              <Button type="button" variant="soft" color="primary" shape="rect" className="header-session-chip mimicus-login-button__chip" style={{ width: "auto" }}>
                <ContapymeIcon icon="mdi:account-circle-outline" size={18} />
                <span>{label}</span>
              </Button>
            )}
            menu={(
              <Menu>
                <Menu.Item disabled>
                  <span className="mimicus-login-button__menu-user">{logged.username}</span>
                  {logged.role ? <span className="mimicus-login-button__menu-role">{logged.role}</span> : null}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={logout}>
                  <ContapymeIcon icon="mdi:logout" size={16} />
                  Cerrar sesión
                </Menu.Item>
              </Menu>
            )}
          />
        </FlexLayout>
      </span>
    );
  }

  return (
    <span className={[wrapClass, "mimicus-login-button", className].filter(Boolean).join(" ")} style={style}>
      <FlexLayout items="center" gap="0.35rem" className={btnClass}>
        <Button type="button" variant="outlined" color="neutral" shape="rect" onClick={() => setOpen(true)} style={{ width: "auto" }}>
          <ContapymeIcon icon="mdi:login" size={18} />
          Iniciar sesión
        </Button>
      </FlexLayout>
      <LoginDialog
        open={open}
        busy={busy}
        onClose={() => { if (!busy) { setOpen(false); setShowPass(false); } }}
        footer={(
          <LoginFormActions
            busy={busy}
            canSubmit={!!user.trim() && !!pass && (!terceros.length || !!selectedItercero)}
            onCancel={() => { setOpen(false); setShowPass(false); }}
            onSubmit={submit}
          />
        )}
      >
        <LoginFormFields
          user={user}
          setUser={setUser}
          pass={pass}
          setPass={setPass}
          remember={remember}
          setRemember={setRemember}
          showPass={showPass}
          setShowPass={setShowPass}
          err={err}
          busy={busy}
          showRemember={showRemember}
          showPasswordToggle={showPasswordToggle}
          onEnter={submit}
          terceros={terceros}
          selectedItercero={selectedItercero}
          setSelectedItercero={setSelectedItercero}
        />
      </LoginDialog>
    </span>
  );
}
