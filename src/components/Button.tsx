/**
 * Button — isla: primitives
 * demo: demo/config/demos/lib/Button.json
 * llm:  ./Button.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/components/Button.tsx
 * Botón polimórfico (button/a/div) con variantes, color de superficie, estados loading/disabled e icono.
 */
import { useState } from "react";
import type { CSSProperties, HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode } from "react";
import { normalizeVariant, isGlassVariant } from "../theme/constants.ts";
import { mergeSurfaceStyle } from "../lib/surfaceColor.ts";

type ButtonShape = "round" | "rect" | "pill" | "circle";
type ButtonFlags = { danger?: boolean; ghost?: boolean; dashed?: boolean; link?: boolean };

export interface ButtonProps extends Omit<HTMLAttributes<HTMLElement>, "color" | "onClick"> {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: string;
  color?: string;
  shape?: ButtonShape;
  block?: boolean;
  danger?: boolean;
  ghost?: boolean;
  dashed?: boolean;
  link?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  loading?: boolean;
  glassActive?: boolean;
  wrap?: boolean;
  iconPlacement?: "start" | "end";
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLElement>) => unknown;
  icon?: ReactNode;
  children?: ReactNode;
}

function resolveButtonVariant(variant: string | undefined, { danger, ghost, dashed, link }: ButtonFlags): string {
  if (link) return "text";
  if (ghost) return "ghost";
  if (dashed) return "dashed";
  return normalizeVariant(variant, "solid");
}

function resolveButtonColor(color: string | undefined, { danger }: ButtonFlags): string | undefined {
  if (color) return color;
  if (danger) return "danger";
  return color;
}

export function Button({
  type: htmlType = "button",
  disabled = false,
  variant = "solid",
  color,
  shape = "round",
  block = false,
  danger = false,
  ghost = false,
  dashed = false,
  link = false,
  href,
  target,
  rel,
  loading = false,
  glassActive = false,
  wrap = false,
  iconPlacement = "start",
  className,
  style,
  onClick,
  children,
  icon,
  ...rest
}: ButtonProps) {
  const [busy, setBusy] = useState(false);
  const isLink = Boolean(href) || link;
  const normalizedVariant = resolveButtonVariant(variant, { danger, ghost, dashed, link: isLink && !href });
  const resolvedColor = resolveButtonColor(color, { danger });
  const surfaceStyle = mergeSurfaceStyle(resolvedColor, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;
  const iconOnly = Boolean(icon) && (children == null || children === "");
  const resolvedShape: ButtonShape = iconOnly && shape === "round" ? "circle" : shape;

  async function handleClick(e: MouseEvent<HTMLElement>) {
    if (isDisabled) return;
    if (wrap) {
      onClick?.(e);
      return;
    }
    setBusy(true);
    try {
      const res = onClick?.(e);
      if (res instanceof Promise) await res;
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  }

  function onWrapKeydown(e: KeyboardEvent<HTMLElement>) {
    if (!wrap || isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
    }
  }

  const cls = [
    wrap && "button-wrap",
    isLoading && "loading",
    block && "button-block",
    iconOnly && "button-icon-only",
    href && "button-link",
    className,
  ].filter(Boolean).join(" ");

  const dataProps = {
    "data-shape": resolvedShape,
    "data-variant": normalizedVariant,
    "data-block": block ? "true" : undefined,
    "data-danger": danger ? "true" : undefined,
    "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : undefined,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : undefined,
    ...surfaceStyle,
    className: cls,
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? undefined : "100%", ...surfaceStyle.style, ...style } as CSSProperties,
  };

  const iconNode = (icon || isLoading) && (isLoading ? <span className="mimicus-text-icon mimicus-btn-spinner" aria-hidden>…</span> : icon);
  // Si pasaron children que incluyen un <Icon> (iconify-icon) suelto, lo separamos del texto
  // para que reciba `gap` y no quede pegado al label (button > iconify-icon { gap }).
  const extractChildIcon = (nodes: ReactNode): { iconEl: ReactNode; rest: ReactNode } => {
    let iconEl: ReactNode = null;
    let rest: ReactNode = null;
    const arr = Array.isArray(nodes) ? nodes : nodes != null ? [nodes] : [];
    for (const n of arr) {
      if (
        iconEl == null &&
        n &&
        typeof n === "object" &&
        "type" in (n as { type?: unknown }) &&
        ((n as { type?: unknown }).type === "iconify-icon" ||
          (n as { type?: { displayName?: string } }).type?.displayName === "Icon")
      ) {
        iconEl = n;
        continue;
      }
      rest = (rest as ReactNode[] | null)?.length
        ? [...(rest as ReactNode[]), n]
        : n;
    }
    return { iconEl, rest };
  };

  const inlineIcon = icon == null && children != null && children !== "" ? extractChildIcon(children).iconEl : null;
  const inlineRest = inlineIcon != null ? extractChildIcon(children).rest : null;
  const finalIcon = iconNode ?? inlineIcon;
  const finalChildren = inlineIcon != null ? inlineRest : children;

  const content = iconPlacement === "end"
    ? <>{finalChildren != null && finalChildren !== "" && <span className="button-content">{finalChildren}</span>}{finalIcon}</>
    : <>{finalIcon}{finalChildren != null && finalChildren !== "" && <span className="button-content">{finalChildren}</span>}</>;

  if (href && !wrap) {
    const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    return (
      <a {...rest} {...dataProps} href={isDisabled ? undefined : href} target={target} rel={linkRel} role="button" aria-disabled={isDisabled ? "true" : undefined} onClick={handleClick}>
        {content}
      </a>
    );
  }

  if (wrap) {
    return (
      <div {...rest} {...dataProps} role="button" tabIndex={isDisabled ? -1 : 0} aria-disabled={isDisabled ? "true" : undefined} onClick={handleClick} onKeyDown={onWrapKeydown}>
        {content}
      </div>
    );
  }

  return (
    <button {...rest} {...dataProps} type={htmlType} disabled={isDisabled} onClick={handleClick}>
      {content}
    </button>
  );
}
