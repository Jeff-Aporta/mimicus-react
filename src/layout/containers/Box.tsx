/**
 * Box — isla: layout
 * demo: demo/config/demos/lib/Box.json
 * llm:  ./Box.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/containers/Box.tsx
 * Contenedor genérico polimórfico estilo MUI Box (component + className + style + sx).
 */
import { createElement } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { joinStyle } from "../shared/layoutHelpers.ts";

export interface BoxProps {
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: Record<string, string | number>;
  children?: ReactNode;
  [key: string]: unknown;
}

/** MUI Box — contenedor genérico theme-aware (className + style). */
export function Box({ component: Component = "div", className, style, sx, children, ...rest }: BoxProps) {
  const mergedStyle = joinStyle(style, sx && typeof sx === "object" ? objectToStyle(sx) : "");
  const cls = ["mimicus-box", className].filter(Boolean).join(" ");
  return createElement(Component, { className: cls, style: mergedStyle || undefined, ...rest }, children);
}

function objectToStyle(sx: Record<string, string | number>): string {
  return Object.entries(sx)
    .map(([k, v]) => `${camelToKebab(k)}:${v}`)
    .join("; ");
}

function camelToKebab(s: string): string {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
