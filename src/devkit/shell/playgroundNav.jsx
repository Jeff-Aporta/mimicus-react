/**
 * playgroundNav — devkit
 * llm:  ./playgroundNav.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/playgroundNav.jsx
 * Marca del playground (PlaygroundBrand) y re-export de las barras de navegación del shell.
 */
export { NavTabRow as PlaygroundNavTabRow } from "../_ui.js";
export { ShellHeaderNav as PlaygroundShellHeaderNav } from "../_ui.js";

import { Button } from "../_ui.js";

export function PlaygroundBrand({ title, icon = "assets/mimicus-logo.svg", onClick }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      className={["pg-app-brand", "mimicus-ui-brand", onClick && "pg-app-brand--clickable"].filter(Boolean).join(" ")}
      onClick={onClick}
      title={onClick ? "Inicio" : title}
    >
      <img src={icon} alt="" width="22" height="22" className="pg-app-brand__icon" />
      <span className="pg-app-brand__title">{title}</span>
    </Tag>
  );
}
