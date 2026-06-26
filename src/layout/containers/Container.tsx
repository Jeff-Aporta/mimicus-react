/**
 * Container — isla: layout
 * demo: demo/config/demos/lib/Container.json
 * llm:  ./Container.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/containers/Container.tsx
 * Centra contenido con max-width por breakpoint (MUI Container), gutters fluidos opcionales.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { joinStyle } from "../shared/layoutHelpers.ts";

const MAX_WIDTHS: Record<string, number> = { xs: 444, sm: 600, md: 900, lg: 1200, xl: 1536 };

type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | number | false | string;

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  maxWidth?: ContainerMaxWidth;
  fixed?: boolean;
  disableGutters?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

function resolveMaxWidth(maxWidth: ContainerMaxWidth): string | undefined {
  if (maxWidth == null || maxWidth === false) return undefined;
  if (typeof maxWidth === "number") return `${maxWidth}px`;
  if (maxWidth in MAX_WIDTHS) return `${MAX_WIDTHS[maxWidth]}px`;
  return String(maxWidth);
}

/** MUI Container — centra contenido con max-width fluido o fijo por breakpoint. */
export function Container({ maxWidth = "lg", fixed = false, disableGutters = false, className, style, children, ...rest }: ContainerProps) {
  const mw = resolveMaxWidth(maxWidth);
  const cls = ["mimicus-container", fixed && "mimicus-container--fixed", disableGutters && "mimicus-container--no-gutters", className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    "width: 100%",
    "margin-inline: auto",
    mw && `max-width: ${mw}`,
    !disableGutters && "padding-inline: clamp(0.75rem, 3vw, 1.5rem)",
    style,
  );

  return (
    <div className={cls} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}
