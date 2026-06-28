/**
 * Divider — isla: layout
 * demo: demo/config/demos/lib/Divider.json
 * llm:  ./Divider.llm.md
 * css:  css/components/divider.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/dividers/Divider.tsx
 * Separador con texto opcional, orientación horizontal/vertical y variantes (solid/dashed/glow).
 */
import { Children } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { normalizeVariant } from "../../theme/constants.ts";
import { resolveColor } from "../../lib/resolveColor.ts";
import { dataDebug, joinStyle } from "../shared/layoutHelpers.ts";

export interface DividerProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  orientation?: "horizontal" | "vertical";
  vertical?: boolean;
  variant?: string;
  dashed?: boolean;
  titlePlacement?: "left" | "center" | "right";
  plain?: boolean;
  orientationMargin?: string | number;
  style?: CSSProperties;
  children?: ReactNode;
}

function toCssLength(v: string | number | undefined): string | undefined {
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
  orientationMargin,
  className,
  style,
  children,
  ...rest
}: DividerProps) {
  const axis = orientation ?? (vertical ? "vertical" : "horizontal");
  const normalizedVariant = normalizeVariant(variant, "solid");
  const lineVariant = normalizedVariant === "glow" ? "glow" : dashed ? "dashed" : normalizedVariant;
  const lineColor = resolveColor("border");
  const marginCss = axis === "horizontal" ? `1em 0` : `0 0.5em`;
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

  const mergedStyle = joinStyle(
    `--is-divider-color: ${lineColor}`,
    `margin: ${marginCss}`,
    axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge: ${edgeBasis}`,
    style,
  );

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
