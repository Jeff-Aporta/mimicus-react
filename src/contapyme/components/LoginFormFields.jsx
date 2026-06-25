import { Button } from "../../components/Button.jsx";
import { Checkbox } from "../../components/forms/Forms.jsx";
import { FormItem, Input, Select } from "../../components/forms/Forms.jsx";
import { Stack } from "../../layout/Stack.jsx";
import { LOGIN_REMEMBER_LABEL, CONTAPYME_LOGIN_ID_HELPER } from "../constants.js";
import { ContapymeIcon } from "./ContapymeIcon.jsx";

export function LoginFormFields({
  user, setUser, pass, setPass, remember, setRemember, showPass, setShowPass,
  err, busy, showRemember = true, showPasswordToggle = true, onEnter,
  terceros = [], selectedItercero, setSelectedItercero,
}) {
  const empresaOptions = Array.isArray(terceros) ? terceros : [];
  const needsEmpresa = empresaOptions.length > 0;

  return (
    <Stack spacing="0.75rem" className="mimicus-login-form">
      {err ? <div className="mimicus-login-form__alert" role="alert">{err}</div> : null}
      {needsEmpresa ? <div className="mimicus-login-form__info">Seleccione la empresa con la que desea ingresar.</div> : null}
      <FormItem label="Usuario" help={CONTAPYME_LOGIN_ID_HELPER}>
        <Input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onBlur={() => {
            const v = String(user ?? "").trim().toLowerCase();
            if (v && !v.includes("@")) setUser(v);
          }}
          autoComplete="username"
          disabled={busy}
          autoFocus={!busy && !needsEmpresa}
          onKeyDown={(e) => { if (e.key === "Enter" && onEnter) { e.preventDefault(); onEnter(); } }}
        />
      </FormItem>
      <FormItem label="Contraseña">
        <Input
          type={showPasswordToggle && showPass ? "text" : "password"}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          autoComplete="current-password"
          disabled={busy}
          suffix={showPasswordToggle ? (
            <Button type="button" variant="text" color="neutral" shape="rect" disabled={busy} title={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              onClick={() => setShowPass((v) => !v)} style={{ width: "auto", minWidth: "2rem", padding: "0 0.35rem" }}>
              <ContapymeIcon icon={showPass ? "mdi:eye-off-outline" : "mdi:eye-outline"} size={18} />
            </Button>
          ) : null}
          onKeyDown={(e) => { if (e.key === "Enter" && onEnter) { e.preventDefault(); onEnter(); } }}
        />
      </FormItem>
      {needsEmpresa ? (
        <FormItem label="Empresa">
          <Select value={selectedItercero} onChange={setSelectedItercero} disabled={busy}
            options={empresaOptions.map((t) => ({
              value: String(t.itercero ?? ""),
              label: String(t.nombre ?? t.razonsocial ?? t.itercero ?? ""),
            }))}
          />
        </FormItem>
      ) : null}
      {showRemember ? (
        <Checkbox checked={remember} onChange={setRemember} disabled={busy}>{LOGIN_REMEMBER_LABEL}</Checkbox>
      ) : null}
    </Stack>
  );
}

export function LoginFormActions({ busy, canSubmit, onCancel, onSubmit, showCancel = true }) {
  return (
    <div className="mimicus-login-form__actions">
      {showCancel ? (
        <Button type="button" variant="text" color="neutral" shape="rect" disabled={busy} onClick={onCancel} style={{ width: "auto" }}>Cancelar</Button>
      ) : null}
      <Button type="button" variant="solid" color="primary" shape="rect" disabled={busy || !canSubmit} loading={busy} onClick={onSubmit} style={{ width: "auto" }}>
        Iniciar sesión
      </Button>
    </div>
  );
}
