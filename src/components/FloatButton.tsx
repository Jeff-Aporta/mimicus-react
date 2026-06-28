/**
 * FloatButton — isla: primitives
 * demo: demo/config/demos/lib/FloatButton.json
 * llm:  ./FloatButton.llm.md
 * css:  css/components/float-button.css
 * repo: Jeff-Aporta/mimicus-react · src/components/FloatButton.tsx
 * Botón flotante (FAB) con Group, BackTop y alias MUI (Fab, IconButton).
 */
import { Children, useEffect, useState } from "react";
import type { CSSProperties, HTMLAttributes, MouseEvent, ReactElement, ReactNode } from "react";
import { mergeSurfaceStyle } from "../lib/surfaceColor.ts";
import { Button } from "./Button.tsx";

export interface FloatButtonBaseProps extends Omit<HTMLAttributes<HTMLElement>, "color" | "content"> {
  icon?: ReactNode;
  content?: ReactNode;
  type?: "default" | "primary";
  shape?: "circle" | "square";
  href?: string;
  target?: string;
  tooltip?: ReactNode;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}

function FloatButtonBase({
  icon,
  content,
  children,
  type = "default",
  shape = "circle",
  href,
  target,
  tooltip,
  disabled = false,
  className,
  style,
  onClick,
  ...rest
}: FloatButtonBaseProps) {
  const label = content ?? children;
  const extended = Boolean(label);
  const surface = mergeSurfaceStyle(type === "primary" ? "primary" : undefined, { style });
  const cls = [
    "mimicus-float-btn",
    extended && "mimicus-float-btn--extended",
    className,
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      {icon && <span className="mimicus-float-btn__icon" aria-hidden>{icon}</span>}
      {extended && <span className="mimicus-float-btn__content">{label}</span>}
    </>
  );

  const dataProps = {
    "data-type": type,
    "data-shape": shape,
    ...surface,
    className: cls,
    style: surface.style,
    title: typeof tooltip === "string" ? tooltip : undefined,
    "aria-label": (rest["aria-label"] ?? (typeof tooltip === "string" ? tooltip : extended ? String(label) : "Acción flotante")) as string,
    onClick: disabled ? undefined : onClick,
  };

  if (href && !disabled) {
    return <a href={href} target={target} {...rest} {...dataProps}>{inner}</a>;
  }

  return (
    <button type="button" disabled={disabled} {...rest} {...dataProps}>
      {inner}
    </button>
  );
}

export interface FloatButtonGroupProps {
  children?: ReactNode;
  trigger?: "click" | "hover";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  shape?: "circle" | "square";
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
  style?: CSSProperties;
  closeIcon?: ReactNode;
}

export function FloatButtonGroup({
  children,
  trigger = "click",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  shape = "circle",
  placement = "top",
  className,
  style,
  closeIcon,
}: FloatButtonGroupProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = openProp ?? internalOpen;
  const setOpen = (v: boolean) => {
    if (openProp === undefined) setInternalOpen(v);
    onOpenChange?.(v);
  };

  const items = Children.toArray(children).filter(Boolean) as ReactElement<FloatButtonBaseProps>[];
  const main = items[0];
  const extras = items.slice(1);

  return (
    <div
      className={["mimicus-float-btn-group", open && "is-open", className].filter(Boolean).join(" ")}
      style={style}
      data-trigger={trigger}
      data-placement={placement}
      data-shape={shape}
      onMouseEnter={trigger === "hover" ? () => setOpen(true) : undefined}
      onMouseLeave={trigger === "hover" ? () => setOpen(false) : undefined}
    >
      {open && extras.length > 0 && (
        <div className="mimicus-float-btn-group__menu" role="menu">
          {extras.map((child, i) => (
            <div key={i} className="mimicus-float-btn-group__item" role="none">
              {child}
            </div>
          ))}
        </div>
      )}
      <div className="mimicus-float-btn-group__trigger" role="none">
        {trigger === "click" && extras.length > 0 ? (
          <FloatButtonBase
            {...(main?.props ?? {})}
            icon={open ? (closeIcon ?? main?.props?.icon) : main?.props?.icon}
            onClick={(e) => {
              setOpen(!open);
              main?.props?.onClick?.(e);
            }}
          />
        ) : (
          main
        )}
      </div>
    </div>
  );
}

export interface FloatButtonBackTopProps {
  visibilityHeight?: number;
  duration?: number;
  target?: () => (Window | HTMLElement | null);
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FloatButtonBackTop({
  visibilityHeight = 400,
  duration = 450,
  target,
  onClick,
  icon,
  className,
  style,
}: FloatButtonBackTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = target?.() ?? (typeof window !== "undefined" ? window : null);
    if (!el) return undefined;
    const node = el as (Window & { scrollTop?: number }) | (HTMLElement & { scrollY?: number });
    const onScroll = () => setVisible(((node as { scrollY?: number }).scrollY ?? (node as { scrollTop?: number }).scrollTop ?? 0) > visibilityHeight);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [target, visibilityHeight]);

  if (!visible) return null;

  const scrollTop = () => {
    const el = target?.() ?? window;
    el.scrollTo?.({ top: 0, behavior: duration > 0 ? "smooth" : "auto" });
    onClick?.();
  };

  return (
    <FloatButtonBase
      type="primary"
      shape="circle"
      className={["mimicus-float-btn--back-top", className].filter(Boolean).join(" ")}
      style={style}
      icon={icon ?? <span className="mimicus-text-icon">↑</span>}
      tooltip="Volver arriba"
      onClick={scrollTop}
    />
  );
}

interface FloatButtonComponent {
  (props: FloatButtonBaseProps): ReactNode;
  Group: typeof FloatButtonGroup;
  BackTop: typeof FloatButtonBackTop;
}

function FloatButtonRoot(props: FloatButtonBaseProps) {
  return <FloatButtonBase {...props} />;
}

export const FloatButton: FloatButtonComponent = Object.assign(FloatButtonRoot, {
  Group: FloatButtonGroup,
  BackTop: FloatButtonBackTop,
});

export interface FabProps extends FloatButtonBaseProps {
  color?: string;
}

/** FAB compacto — alias MUI Fab */
export function Fab(props: FabProps) {
  return <FloatButton type={props.color === "secondary" ? "default" : "primary"} {...props} />;
}

export interface IconButtonProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  color?: string;
  variant?: string;
  style?: CSSProperties;
  children?: ReactNode;
  icon?: ReactNode;
}

/** Botón solo icono — convención MUI IconButton */
export function IconButton({ color, variant = "text", className, style, children, icon, ...rest }: IconButtonProps) {
  return (
    <Button
      {...rest}
      variant={variant}
      color={color}
      shape="circle"
      icon={icon ?? children}
      className={["mimicus-icon-btn", className].filter(Boolean).join(" ")}
      style={{ width: "fit-content", ...style }}
    />
  );
}
