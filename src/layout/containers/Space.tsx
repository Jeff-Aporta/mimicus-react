/**
 * Space — isla: layout
 * demo: demo/config/demos/lib/Space.json
 * llm:  ./Space.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/containers/Space.tsx
 * Espaciado uniforme entre hijos (Ant Space) con orientación, tamaño, wrap y separador opcional.
 */
import { Children } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { joinStyle } from "../shared/layoutHelpers.ts";

const SIZE_MAP: Record<string, string> = { small: "0.5rem", middle: "0.75rem", medium: "0.75rem", large: "1rem" };

export interface SpaceProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  orientation?: "horizontal" | "vertical";
  vertical?: boolean;
  size?: string | number;
  wrap?: boolean;
  align?: CSSProperties["alignItems"];
  separator?: ReactNode;
  style?: CSSProperties;
  children?: ReactNode;
}

function resolveSpaceSize(size: string | number | undefined): string {
  if (size == null || size === "") return SIZE_MAP.small;
  if (typeof size === "number") return `${size}px`;
  if (typeof size === "string" && SIZE_MAP[size]) return SIZE_MAP[size];
  return String(size);
}

export function Space({
  orientation = "horizontal",
  vertical = false,
  size = "small",
  wrap = false,
  align,
  separator,
  className,
  style,
  children,
  ...rest
}: SpaceProps) {
  const dir = vertical || orientation === "vertical" ? "column" : "row";
  const gap = resolveSpaceSize(size);
  const items = Children.toArray(children).filter((c: ReactNode) => c != null && c !== false);
  const cls = ["mimicus-space", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(
    "display: flex",
    `flex-direction: ${dir}`,
    `gap: ${gap}`,
    wrap && "flex-wrap: wrap",
    align && `align-items: ${align}`,
    style,
  );

  if (!separator) {
    return (
      <div className={cls} style={rootStyle} {...rest}>
        {items.map((child, i) => (
          <span key={i} className="mimicus-space__item">{child}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={cls} style={rootStyle} {...rest}>
      {items.map((child, i) => (
        <span key={i} className="mimicus-space__item">
          {child}
          {i < items.length - 1 ? <span className="mimicus-space__sep" aria-hidden="true">{separator}</span> : null}
        </span>
      ))}
    </div>
  );
}
