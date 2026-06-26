/**
 * Stack — isla: layout
 * demo: demo/config/demos/lib/Stack.json
 * llm:  ./Stack.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/containers/Stack.tsx
 * Layout 1D estilo MUI Stack: dirección, spacing y divider entre hijos; delega en FlexLayout.
 */
import { Children } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { FlexLayout } from "../grid/FlexLayout.tsx";

const SPACING_PRESET: Record<string, string> = { small: "0.5rem", medium: "0.75rem", large: "1rem" };

type StackDirection = "row" | "row-reverse" | "column" | "column-reverse";

export interface StackProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  direction?: StackDirection;
  spacing?: string | number;
  divider?: ReactNode;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

function resolveSpacing(spacing: string | number | undefined): string | number {
  if (spacing == null || spacing === "") return 0;
  if (typeof spacing === "number") return `${spacing * 8}px`;
  if (typeof spacing === "string" && SPACING_PRESET[spacing]) return SPACING_PRESET[spacing];
  return String(spacing);
}

/** MUI Stack — layout 1D; delega en FlexLayout con defaults Mimicus. */
export function Stack({
  direction = "column",
  spacing = 0,
  divider,
  alignItems,
  justifyContent,
  className,
  style,
  children,
  ...rest
}: StackProps) {
  const gap = resolveSpacing(spacing);
  const flexDir = direction === "row" || direction === "row-reverse" ? direction : direction === "column-reverse" ? "column-reverse" : "column";
  const items = Children.toArray(children).filter((c: ReactNode) => c != null && c !== false);

  return (
    <FlexLayout
      direction={flexDir}
      gap={gap || undefined}
      items={alignItems}
      justify={justifyContent}
      className={["mimicus-stack", className].filter(Boolean).join(" ")}
      style={style}
      {...rest}
    >
      {divider
        ? items.flatMap((child, i) => (i < items.length - 1 ? [child, <span key={`d-${i}`} className="mimicus-stack__divider">{divider}</span>] : [child]))
        : children}
    </FlexLayout>
  );
}
