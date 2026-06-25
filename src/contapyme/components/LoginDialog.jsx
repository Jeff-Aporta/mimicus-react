import { useEffect, useRef } from "react";
import { ContapymeIcon } from "./ContapymeIcon.jsx";

export function LoginDialog({ open, busy, title = "Iniciar sesión", icon = "mdi:account-key-outline", onClose, children, footer }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onDialogCancel = (e) => {
      e.preventDefault();
      if (!busy) onClose?.();
    };
    el.addEventListener("cancel", onDialogCancel);
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
    return () => el.removeEventListener("cancel", onDialogCancel);
  }, [open, busy, onClose]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape" && !busy) onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, busy, onClose]);

  return (
    <dialog ref={ref} className="mimicus-login-dialog isa-login-dialog" aria-labelledby="mimicus-login-dialog-title">
      <div className="mimicus-login-dialog__card isa-login-card mimicus-glass-card">
        <header className="mimicus-login-dialog__header isa-login-header">
          <span className="mimicus-login-dialog__icon-box" aria-hidden>
            <ContapymeIcon icon={icon} size={22} />
          </span>
          <div className="mimicus-login-dialog__titles">
            <h2 id="mimicus-login-dialog-title" className="mimicus-login-dialog__title">{title}</h2>
            <p className="mimicus-login-dialog__subtitle">Use su usuario y contraseña de la organización.</p>
          </div>
          <button type="button" className="mimicus-login-dialog__close" aria-label="Cerrar" disabled={busy} onClick={() => !busy && onClose?.()}>×</button>
        </header>
        <div className="mimicus-login-dialog__body">{children}</div>
        {footer && <footer className="mimicus-login-dialog__footer">{footer}</footer>}
      </div>
    </dialog>
  );
}
