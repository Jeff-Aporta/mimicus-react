// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * playgroundNav — devkit
 * llm:  ./playgroundNav.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/playgroundNav.tsx
 * Marca del playground (PlaygroundBrand) y re-export de las barras de navegación del shell.
 */
export { NavTabRow as PlaygroundNavTabRow } from "../_ui.ts";
export { ShellHeaderNav as PlaygroundShellHeaderNav } from "../_ui.ts";

import { Button } from "../_ui.ts";

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
