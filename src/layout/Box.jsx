/**
 * Box — isla: layout
 * demo: demo/config/demos/lib/Box.json
 * llm:  ./Box.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/Box.jsx
 * Contenedor genérico polimórfico estilo MUI Box (component + className + style + sx).
 */
import { createElement } from "react";
import { joinStyle } from "./layoutHelpers.js";

/** MUI Box — contenedor genérico theme-aware (className + style). */
export function Box({ component: Component = "div", className, style, sx, children, ...rest }) {
  const mergedStyle = joinStyle(style, sx && typeof sx === "object" ? objectToStyle(sx) : "");
  const cls = ["mimicus-box", className].filter(Boolean).join(" ");
  return createElement(Component, { className: cls, style: mergedStyle || undefined, ...rest }, children);
}

function objectToStyle(sx) {
  return Object.entries(sx)
    .map(([k, v]) => `${camelToKebab(k)}:${v}`)
    .join("; ");
}

function camelToKebab(s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
