/**
 * Separator — isla: layout
 * llm:  ./Separator.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/dividers/Separator.tsx
 * Línea separadora simple (span inline) con grosor, estilo, color y márgenes configurables.
 */
import type { CSSProperties, HTMLAttributes, ReactElement } from "react";
import { resolveColor } from "../../lib/resolveColor.ts";

export interface SeparatorProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  orientation?: "horizontal" | "vertical";
  color?: string;
  borderStyle?: CSSProperties["borderStyle"];
  thickness?: number;
  startMargin?: number;
  endMargin?: number;
}

export function Separator({
  orientation = "horizontal",
  color = "",
  borderStyle = "solid",
  thickness = 1,
  startMargin = 8,
  endMargin = 8,
  className,
  style,
  ...rest
}: SeparatorProps): ReactElement {
  const axis = orientation === "vertical" ? "vertical" : "horizontal";
  const lineColor = color ? resolveColor(color) : resolveColor("border");
  const cls = ["mimicus-separator", `mimicus-separator--${axis}`, className].filter(Boolean).join(" ");

  const mergedStyle: CSSProperties = axis === "horizontal"
    ? {
        display: "block",
        width: "100%",
        height: 0,
        border: "none",
        borderTop: `${thickness}px ${borderStyle} ${lineColor}`,
        margin: `${startMargin}px 0 ${endMargin}px`,
        ...(style && typeof style === "object" ? style : {}),
      }
    : {
        display: "inline-block",
        alignSelf: "stretch",
        width: 0,
        minHeight: "1em",
        height: "auto",
        border: "none",
        borderLeft: `${thickness}px ${borderStyle} ${lineColor}`,
        margin: `0 ${startMargin}px 0 ${endMargin}px`,
        verticalAlign: "middle",
        flexShrink: 0,
        ...(style && typeof style === "object" ? style : {}),
      };

  return <span className={cls} role="separator" aria-orientation={axis} style={mergedStyle} {...rest} />;
}
