import { Children, isValidElement } from "react";
import { normalizeVariant } from "../theme/constants.js";
import { resolveColor } from "../lib/resolveColor.js";
import { dataDebug } from "./layoutHelpers.js";

function toCssLength(v) {
  if (v == null || v === "") return undefined;
  if (typeof v === "number") return `${v}px`;
  const s = String(v).trim();
  if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`;
  return s;
}

export function Divider({
  orientation,
  vertical = false,
  variant = "solid",
  dashed = false,
  titlePlacement = "center",
  plain = false,
  size = "medium",
  orientationMargin,
  className,
  style,
  children,
  ...rest
}) {
  const axis = orientation ?? (vertical ? "vertical" : "horizontal");
  const normalizedVariant = normalizeVariant(variant, "solid");
  const lineVariant = normalizedVariant === "glow" ? "glow" : dashed ? "dashed" : normalizedVariant;
  const lineColor = resolveColor("border");
  const marginBlock = size === "small" ? "0.5rem" : size === "large" ? "1.5rem" : "1rem";
  const marginCss = axis === "horizontal" ? `${marginBlock} 0` : `0 0.5rem`;
  const edgeBasis = toCssLength(orientationMargin) ?? "5%";
  const hasText = children != null && children !== false && Children.count(children) > 0;

  const cls = [
    "is-divider",
    `is-divider--${axis}`,
    `is-divider--${lineVariant}`,
    hasText && "is-divider--with-text",
    hasText && `is-divider--title-${titlePlacement}`,
    plain && "is-divider--plain",
    className,
  ].filter(Boolean).join(" ");

  const mergedStyle = [
    `--is-divider-color:${lineColor}`,
    `margin:${marginCss}`,
    axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge:${edgeBasis}`,
    style,
  ].filter(Boolean).join(";");

  return (
    <div className={cls} style={mergedStyle} role="separator" aria-orientation={axis} {...dataDebug(rest, "divider")} {...rest}>
      {hasText ? (
        axis === "horizontal" ? (
          <>
            <span className="is-divider__rail is-divider__rail--before" aria-hidden="true" />
            <span className="is-divider__content">{children}</span>
            <span className="is-divider__rail is-divider__rail--after" aria-hidden="true" />
          </>
        ) : (
          <span className="is-divider__content">{children}</span>
        )
      ) : axis === "horizontal" ? (
        <span className="is-divider__rail is-divider__rail--solo" aria-hidden="true" />
      ) : (
        <span className="is-divider__rail is-divider__rail--solo-vertical" aria-hidden="true" />
      )}
    </div>
  );
}
