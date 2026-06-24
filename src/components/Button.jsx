import { useState } from "react";
import { normalizeVariant, isGlassVariant } from "../theme/constants.js";
import { mergeSurfaceStyle } from "../lib/surfaceColor.js";

export function Button({
  type = "button",
  disabled = false,
  variant = "solid",
  color,
  shape = "round",
  loading = false,
  glassActive = false,
  wrap = false,
  className,
  style,
  onClick,
  children,
  icon,
  ...rest
}) {
  const [busy, setBusy] = useState(false);
  const normalizedVariant = normalizeVariant(variant, "solid");
  const surfaceStyle = mergeSurfaceStyle(color, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;

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

  const cls = [wrap && "button-wrap", isLoading && "loading", className].filter(Boolean).join(" ");
  const dataProps = {
    "data-shape": shape,
    "data-variant": normalizedVariant,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : undefined,
    ...surfaceStyle,
    className: cls,
    style: surfaceStyle.style,
  };

  const content = (
    <>
      {(icon || isLoading) && (isLoading ? <span className="mimicus-text-icon" aria-hidden>…</span> : icon)}
      {children != null && <span className="button-content">{children}</span>}
    </>
  );

  if (wrap) {
    return (
      <div
        {...rest}
        {...dataProps}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled ? "true" : undefined}
        onClick={handleClick}
        onKeyDown={onWrapKeydown}
      >
        {content}
      </div>
    );
  }

  return (
    <button
      {...rest}
      {...dataProps}
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
