/**
 * AppLayoutSider — isla: layout
 * llm:  ./AppLayoutSider.llm.md
 * css:  css/components/app-layout.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/app-layout/AppLayoutSider.tsx
 * Barra lateral de AppLayout con tema dark/light, ancho colapsable y trigger de colapso.
 */
import { useEffect } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { resolveColor } from "../../lib/resolveColor.ts";
import { useAppLayoutContext } from "./appLayoutContext.tsx";
import { Button } from "../../components/Button.tsx";

export interface AppLayoutSiderProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  width?: string | number;
  collapsed?: boolean;
  collapsible?: boolean;
  collapsedWidth?: string | number;
  theme?: "dark" | "light";
  style?: CSSProperties;
  onCollapse?: (collapsed: boolean) => void;
  children?: ReactNode;
}

export function AppLayoutSider({
  width = 200,
  collapsed = false,
  collapsible = false,
  collapsedWidth = 80,
  theme = "dark",
  className,
  style,
  onCollapse,
  children,
  ...rest
}: AppLayoutSiderProps) {
  const ctx = useAppLayoutContext();
  const w = collapsed ? collapsedWidth : width;
  const wCss = typeof w === "number" ? `${w}px` : w;
  const isDark = theme === "dark";
  const bg = isDark ? resolveColor("primary") : resolveColor("card");
  const fg = isDark ? "white" : resolveColor("color");

  useEffect(() => {
    ctx?.setSiderWidth(wCss);
  }, [ctx, wCss]);

  const rootClass = [
    "mimicus-app-layout-sider",
    `mimicus-app-layout-sider--${theme}`,
    collapsed && "mimicus-app-layout-sider--collapsed",
    className,
  ].filter(Boolean).join(" ");

  const mergedStyle: CSSProperties = {
    width: "100%",
    maxWidth: wCss,
    background: bg,
    color: fg,
    ...(style && typeof style === "object" ? style : {}),
  };

  function toggle() {
    onCollapse?.(!collapsed);
  }

  const bodyClass = [
    "mimicus-app-layout-sider__body",
    !collapsed && "custom-scrollbar",
    collapsed && "mimicus-app-layout-sider__body--collapsed mimicus-scrollbar--hidden",
  ].filter(Boolean).join(" ");

  return (
    <aside {...rest} className={rootClass} style={mergedStyle}>
      <div className={bodyClass}>{children}</div>
      {collapsible && (
        <div className="mimicus-app-layout-sider__trigger">
          <Button variant="text" color={isDark ? "neutral" : "primary"} onClick={toggle} style={{ width: "100%", justifyContent: "center", color: "inherit" }}>
            {collapsed ? "›" : "‹"}
          </Button>
        </div>
      )}
    </aside>
  );
}
