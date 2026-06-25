export { NavTabRow as PlaygroundNavTabRow } from "@jeff-aporta/mimicus-react";
export { ShellHeaderNav as PlaygroundShellHeaderNav } from "@jeff-aporta/mimicus-react";

import { Button } from "@jeff-aporta/mimicus-react";

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
