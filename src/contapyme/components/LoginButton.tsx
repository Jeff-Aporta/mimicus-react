/**
 * LoginButton — isla: contapyme
 * repo: Jeff-Aporta/mimicus-react · src/contapyme/components/LoginButton.tsx
 * Botón de sesión + modal login ContaPyme — paridad front-shared `UI.LoginButton`.
 * Sesión: prop `session`, `ContapymeSessionProvider`, o `window[ns].Session` (ISAFront).
 */
import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Button } from "../../components/Button.tsx";
import { Dropdown, Menu } from "../../components/navigation/Navigation.tsx";
import { FlexLayout } from "../../layout/grid/FlexLayout.tsx";
import { readLoginCredentials, saveLoginCredentials } from "../auth/loginCredentials.ts";
import { formatContapymeLoginInput, normalizeContapymeLoginId, resolveSessionHeaderLabel } from "../auth/loginFormat.ts";
import { defaultIterceroFromTerceros, loginWithInsoftAutoRetry } from "../auth/loginMultiempresa.ts";
import { useResolvedContapymeSession } from "../auth/sessionContext.tsx";
import type { ContapymeSessionApi } from "../auth/sessionContext.tsx";
import { ContapymeIcon } from "./ContapymeIcon.tsx";
import { LoginDialog } from "./LoginDialog.tsx";
import { LoginFormActions, LoginFormFields } from "./LoginFormFields.tsx";

// Vistas de sesión/terceros provienen del backend (heterogéneas); `any` puntual de buena fe.
type SessionView = { username?: string; displayName?: string | null; role?: string | null; expiresAt?: any } | null;
type ToastKind = "success" | "error" | "info";
type ToastBag = Partial<Record<ToastKind, (message: string) => void>>;

function sessionView(auth: ContapymeSessionApi): SessionView {
  const s = auth.current?.() ?? auth.getSession?.();
  if (!s) return null;
  return {
    username: s.username ?? auth.username?.(),
    displayName: s.displayName ?? auth.displayName?.() ?? null,
    role: s.role ?? null,
    expiresAt: s.expiresAt ?? null,
  };
}

function defaultToast(kind: ToastKind, message: string, onToast?: ToastBag) {
  if (onToast?.[kind]) {
    onToast[kind]?.(message);
    return;
  }
  const fb = typeof window !== "undefined" ? (window as any).ISAFront?.[`toast${kind.charAt(0).toUpperCase()}${kind.slice(1)}`] : null;
  if (typeof fb === "function") fb(message);
}

export interface LoginButtonProps {
  session?: ContapymeSessionApi | null;
  ns?: string;
  loginOpen?: boolean;
  onLoginOpenChange?: (open: boolean) => void;
  onLoggedIn?: (session: any) => void;
  onToast?: ToastBag;
  showPasswordToggle?: boolean;
  showRemember?: boolean;
  wrapClass?: string;
  btnClass?: string;
  className?: string;
  style?: CSSProperties;
}

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
}: LoginButtonProps) {
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
  const [terceros, setTerceros] = useState<any[]>([]);
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
        (id: string, p: string, o: any) => auth.login(id, p, o),
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
    } catch (e: any) {
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
    auth.logout?.();
    tick((n) => n + 1);
    defaultToast("info", "Sesión cerrada", onToast);
  }, [auth, onToast]);

  const logged = sessionView(auth) || (auth.isLoggedIn?.() ? { username: auth.username?.() } : null);

  if (logged?.username) {
    const loggedAny = logged as any;
    const label = resolveSessionHeaderLabel(loggedAny.displayName, logged.username, logged.username);
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
                  {loggedAny.role ? <span className="mimicus-login-button__menu-role">{loggedAny.role}</span> : null}
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
