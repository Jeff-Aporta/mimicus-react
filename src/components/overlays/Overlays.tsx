/**
 * Overlays — isla: overlays
 * css:  css/components/overlays.css
 * repo: Jeff-Aporta/mimicus-react · src/components/overlays/Overlays.tsx
 * Capas modales: Dialog, Modal, ActionDrawer, Loading, Toaster, Alert, TipInfo, InvokedFloater, FloatingComponent.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from "react";
import { Card } from "../Card.tsx";
import { Icon } from "../Icon.tsx";
import { Button } from "../Button.tsx";
import { Icon } from "../Icon.tsx";
import { IconButton } from "../FloatButton.tsx";
import { Tooltip } from "../display/Display.tsx";

interface BaseProps { className?: string; style?: CSSProperties; children?: ReactNode }

function cx(...p: unknown[]): string { return p.filter(Boolean).join(" "); }

export interface DialogProps extends Omit<HTMLAttributes<HTMLDialogElement>, "open"> {
  open?: boolean;
  loading?: boolean;
  notClose?: boolean;
  lockViewportScroll?: boolean;
  backeffect?: "blur" | "none";
  _scope?: "global" | "local";
  onCloseCancel?: (e?: Event) => void | boolean | Promise<void | boolean>;
  onClose?: () => void;
}

export function Dialog({
  open = false,
  loading = false,
  notClose = false,
  lockViewportScroll = true,
  backeffect = "blur",
  _scope = "global",
  className,
  style,
  children,
  onCloseCancel,
  onClose,
  onClick,
  onMouseDown,
  ...rest
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const blockCloseClickRef = useRef(false);
  const scope = _scope === "local" ? "local" : "global";
  const lockScroll = scope === "global" && lockViewportScroll;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onDialogCancel = async (e: Event) => {
      e.preventDefault();
      if (loading) return;
      if (notClose) {
        const force = await Promise.resolve(onCloseCancel?.(e));
        if (!force) return;
      }
      onClose?.();
    };
    el.addEventListener("cancel", onDialogCancel);
    if (open) {
      if (scope === "local") { if (!el.open) el.show(); }
      else if (!el.open) el.showModal();
    } else if (el.open) el.close();
    return () => el.removeEventListener("cancel", onDialogCancel);
  }, [open, loading, notClose, onClose, onCloseCancel, scope]);

  useEffect(() => {
    if (!open || !lockScroll) return undefined;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [open, lockScroll]);

  const isBlockCloseClick = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest(".blockCloseClick"));

  const handleMouseDown = (e: MouseEvent<HTMLDialogElement>) => {
    blockCloseClickRef.current = isBlockCloseClick(e.target);
    onMouseDown?.(e);
  };

  const isBackdropClick = (target: EventTarget | null) => {
    if (target === ref.current) return true;
    return target instanceof HTMLElement && target.classList.contains("mimicus-action-drawer__wrap");
  };

  const handleClick = async (e: MouseEvent<HTMLDialogElement>) => {
    onClick?.(e);
    if (loading) return;
    if (isBlockCloseClick(e.target) || blockCloseClickRef.current) {
      blockCloseClickRef.current = false;
      return;
    }
    if (!isBackdropClick(e.target)) return;
    if (notClose) {
      const force = await Promise.resolve(onCloseCancel?.(e.nativeEvent));
      if (!force) return;
    }
    onClose?.();
  };

  if (!open) return null;

  return (
    <dialog
      ref={ref}
      {...rest}
      className={cx("mimicus-dialog", "is-dialog", loading && "loading", lockScroll && "lockViewportScroll", className)}
      style={style}
      data-scope={scope}
      data-backeffect={backeffect}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {children}
    </dialog>
  );
}

export interface ModalProps extends Omit<DialogProps, "open" | "title"> {
  bshow?: boolean;
  open?: boolean;
  showCloseHeader?: boolean;
  variant?: string;
  title?: ReactNode;
  onClose?: () => void;
}

export function Modal({
  bshow,
  open,
  showCloseHeader = true,
  variant = "solid",
  title,
  loading,
  notClose,
  className,
  style,
  children,
  onClose,
  ...dialogProps
}: ModalProps) {
  const isOpen = open ?? bshow ?? false;
  const close = useCallback(() => onClose?.(), [onClose]);

  return (
    <Dialog {...dialogProps} open={isOpen} loading={loading} notClose={notClose} className={cx("is-modal", className)} onClose={close}>
      <Card variant={variant} id="modal-window" className="blockCloseClick mimicus-modal__card" style={{ padding: 0, border: "none", ...style }}>
        <div className="mimicus-modal__layout">
          {(title || showCloseHeader) && (
            <header className="mimicus-modal__header">
              {title && <div className="mimicus-modal__title">{title}</div>}
              {showCloseHeader && !notClose && (
                <IconButton variant="text" icon={<Icon icon="mdi:close" />} aria-label="Cerrar" disabled={loading || notClose} onClick={close} />
              )}
            </header>
          )}
          <div className={cx("mimicus-modal__content", loading && "loading")}>{children}</div>
        </div>
      </Card>
    </Dialog>
  );
}

const DRAWER_SIDE_ALIGN: Record<string, CSSProperties> = {
  right: { justifyContent: "flex-end" },
  bottom: { alignItems: "flex-end" },
  left: { justifyContent: "flex-start" },
  top: { alignItems: "flex-start" },
};

export interface ActionDrawerProps extends Omit<DialogProps, "open"> {
  bshow?: boolean;
  open?: boolean;
  side?: "top" | "right" | "bottom" | "left" | null;
  onClose?: () => void;
}

export function ActionDrawer({
  bshow,
  open,
  side = "right",
  className,
  style,
  children,
  onClose,
  ...dialogProps
}: ActionDrawerProps) {
  const isOpen = open ?? bshow ?? false;
  const placement = side ?? "right";
  const close = useCallback(() => onClose?.(), [onClose]);
  const isLR = placement === "left" || placement === "right";

  return (
    <Dialog {...dialogProps} open={isOpen} className={cx("is-action-drawer", className)} onClose={close}>
      <div
        className={cx("mimicus-action-drawer__wrap", `mimicus-action-drawer__wrap--${placement}`)}
        style={{ ...DRAWER_SIDE_ALIGN[placement], ...style }}
      >
        <Card
          variant="solid"
          className={cx("blockCloseClick", "mimicus-action-drawer__card", isLR ? "is-lr" : "is-tb")}
          style={{ padding: 0, border: "none" }}
        >
          <div className="mimicus-action-drawer__body">{children}</div>
        </Card>
      </div>
    </Dialog>
  );
}

export interface LoadingProps extends Omit<DialogProps, "open"> {
  bShow?: boolean;
  bshow?: boolean;
  open?: boolean;
  color?: string | null;
}

export function Loading({ bShow, bshow, open, color, className, style, children, onClose, ...dialogProps }: LoadingProps) {
  const isOpen = open ?? bshow ?? bShow ?? false;
  return (
    <Dialog {...dialogProps} open={isOpen} loading notClose className={cx("is-loading", className)} onClose={onClose}>
      <div className="mimicus-loading__panel" style={style} data-color={color ?? undefined}>
        {children ?? <span className="mimicus-loading__spinner" aria-hidden />}
      </div>
    </Dialog>
  );
}

type ToastKind = "success" | "error" | "loading";
type ToastRecord = { id: string; message: string; kind: ToastKind; duration: number };

const toastListeners = new Set<(items: ToastRecord[]) => void>();
let toastItems: ToastRecord[] = [];

function emitToasts() { toastListeners.forEach((fn) => fn([...toastItems])); }

function pushToast(message: string, kind: ToastKind, duration: number) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  toastItems = [...toastItems, { id, message, kind, duration }];
  emitToasts();
  if (duration > 0 && duration < 999999999) {
    window.setTimeout(() => toastRemove(id), duration);
  }
  return id;
}

export function toastSuccess(message: string, duration = 3000) { return pushToast(message, "success", duration); }
export function toastError(message: string, duration = 5000) { return pushToast(message, "error", duration); }
export function toastLoading(message: string, duration = 999999999) { return pushToast(message, "loading", duration); }
export function toastRemove(id: string) {
  toastItems = toastItems.filter((t) => t.id !== id);
  emitToasts();
}

export function Toaster() {
  const [items, setItems] = useState<ToastRecord[]>([]);
  useEffect(() => {
    toastListeners.add(setItems);
    setItems([...toastItems]);
    return () => { toastListeners.delete(setItems); };
  }, []);
  if (!items.length) return null;
  return (
    <div className="mimicus-toaster" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} className={cx("mimicus-toast", `mimicus-toast--${t.kind}`)}>
          {t.kind === "loading" && <span className="mimicus-toast__spinner" aria-hidden />}
          <span>{t.message}</span>
          {t.kind !== "loading" && (
            <button type="button" className="mimicus-toast__close" aria-label="Cerrar" onClick={() => toastRemove(t.id)}>×</button>
          )}
        </div>
      ))}
    </div>
  );
}

export interface AlertProps extends BaseProps {
  color?: string;
  title?: ReactNode;
  inline?: boolean;
}

export function Alert({ color = "info", title, inline, className, style, children, ...rest }: AlertProps) {
  return (
    <div {...rest} className={cx("mimicus-alert", `mimicus-alert--${color}`, inline && "mimicus-alert--inline", className)} style={style} role="alert">
      <Icon icon={color === "error" ? "mdi:alert-circle" : color === "warning" ? "mdi:alert" : color === "success" ? "mdi:check-circle" : "mdi:information"} className="mimicus-alert__icon" aria-hidden />
      <div className="mimicus-alert__content">
        {title && <strong className="mimicus-alert__title">{title}</strong>}
        {children && <div className="mimicus-alert__body">{children}</div>}
      </div>
    </div>
  );
}

export interface TipInfoProps extends BaseProps {
  label?: ReactNode;
  descripcion?: ReactNode;
  kind?: "info" | "warn";
  trigger?: "click" | "hover";
  useModal?: boolean;
}

export function TipInfo({ label, descripcion, kind = "info", trigger = "click", useModal = false, className, style }: TipInfoProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const icon = kind === "warn" ? "mdi:alert-circle-outline" : "mdi:information-outline";
  const triggerBtn = (
    <button type="button" className={cx("mimicus-tip-info__btn", `mimicus-tip-info__btn--${kind}`)} aria-label="Ayuda" onClick={useModal ? () => setModalOpen(true) : undefined}>
      <Icon icon={icon} />
    </button>
  );
  return (
    <span className={cx("mimicus-tip-info", className)} style={style}>
      {label && <span className="mimicus-tip-info__label">{label}</span>}
      {useModal ? triggerBtn : <Tooltip title={descripcion} placement="top">{triggerBtn}</Tooltip>}
      {useModal && (
        <Modal open={modalOpen} title={label ?? "Ayuda"} onClose={() => setModalOpen(false)} _scope="global">
          <p style={{ margin: 0 }}>{descripcion}</p>
        </Modal>
      )}
    </span>
  );
}

export interface InvokedFloaterProps extends BaseProps {
  anchorLabel?: ReactNode;
  panelText?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  trigger?: "click" | "hover" | "contextmenu" | "manual";
}

export function InvokedFloater({
  anchorLabel = "Abrir panel",
  panelText = "Contenido del floater",
  side = "bottom",
  align = "center",
  trigger = "click",
  className,
  style,
}: InvokedFloaterProps) {
  const [open, setOpen] = useState(trigger === "manual");
  const anchorRef = useRef<HTMLButtonElement>(null);
  const openPanel = () => setOpen(true);
  const closePanel = () => setOpen(false);
  const anchorProps = trigger === "hover"
    ? { onMouseEnter: openPanel, onMouseLeave: closePanel }
    : trigger === "contextmenu"
      ? { onContextMenu: (e: MouseEvent) => { e.preventDefault(); openPanel(); } }
      : { onClick: () => setOpen((v) => !v) };

  return (
    <span className={cx("mimicus-invoked-floater", className)} style={style}>
      <button ref={anchorRef} type="button" className="mimicus-invoked-floater__anchor" {...anchorProps}>{anchorLabel}</button>
      {open && (
        <div className={cx("mimicus-invoked-floater__panel", `is-${side}`, `align-${align}`)} role="dialog">
          <p style={{ margin: 0 }}>{panelText}</p>
          <Button variant="text" onClick={closePanel}>Cerrar</Button>
        </div>
      )}
    </span>
  );
}

export interface FloatingComponentProps extends BaseProps {
  showfloat?: boolean;
  rowText?: ReactNode;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "center" | "bottom";
}

export function FloatingComponent({
  showfloat = false,
  rowText = "Fila de ejemplo",
  horizontal = "right",
  vertical = "center",
  className,
  style,
}: FloatingComponentProps) {
  const [hover, setHover] = useState(false);
  const visible = showfloat || hover;
  return (
    <div
      className={cx("mimicus-floating-component", visible && "is-active", className)}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mimicus-floating-component__row">
        <span className="mimicus-floating-component__row-text">{rowText}</span>
        {!visible && <span className="mimicus-floating-component__row-hint" aria-hidden="true">Acciones</span>}
      </div>
      {visible && (
        <div className={cx("mimicus-floating-component__panel", `h-${horizontal}`, `v-${vertical}`)}>
          <Button variant="text" icon={<Icon icon="mdi:pencil-outline" />}>Editar</Button>
          <Button variant="text" icon={<Icon icon="mdi:delete-outline" />}>Eliminar</Button>
        </div>
      )}
    </div>
  );
}
