/**
 * Button — isla: primitives
 * demo: demo/config/demos/lib/Button.json
 * llm:  ./Button.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/components/Button.jsx
 * Botón polimórfico (button/a/div) con variantes, color de superficie, estados loading/disabled e icono.
 */
import { useState } from "react";
import { normalizeVariant, isGlassVariant } from "../theme/constants.js";
import { mergeSurfaceStyle } from "../lib/surfaceColor.js";

function resolveButtonVariant(variant, { danger, ghost, dashed, link }) {
  if (link) return "text";
  if (ghost) return "ghost";
  if (dashed) return "dashed";
  return normalizeVariant(variant, "solid");
}

function resolveButtonColor(color, { danger }) {
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
  size = "medium",
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
}) {
  const [busy, setBusy] = useState(false);
  const isLink = Boolean(href) || link;
  const normalizedVariant = resolveButtonVariant(variant, { danger, ghost, dashed, link: isLink && !href });
  const resolvedColor = resolveButtonColor(color, { danger });
  const surfaceStyle = mergeSurfaceStyle(resolvedColor, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;
  const iconOnly = Boolean(icon) && (children == null || children === "");
  const resolvedShape = iconOnly && shape === "round" ? "circle" : shape;

  async function handleClick(e) {
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

  function onWrapKeydown(e) {
    if (!wrap || isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
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
    "data-size": size,
    "data-variant": normalizedVariant,
    "data-block": block ? "true" : undefined,
    "data-danger": danger ? "true" : undefined,
    "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : undefined,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : undefined,
    ...surfaceStyle,
    className: cls,
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? undefined : "100%", ...surfaceStyle.style },
  };

  const iconNode = (icon || isLoading) && (isLoading ? <span className="mimicus-text-icon mimicus-btn-spinner" aria-hidden>…</span> : icon);
  const content = iconPlacement === "end"
    ? <>{children != null && children !== "" && <span className="button-content">{children}</span>}{iconNode}</>
    : <>{iconNode}{children != null && children !== "" && <span className="button-content">{children}</span>}</>;

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
