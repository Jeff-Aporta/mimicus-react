import { useEffect } from "react";
import { resolveColor } from "../lib/resolveColor.js";
import { useAppLayoutContext } from "./appLayoutContext.jsx";
import { Button } from "../components/Button.jsx";

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
}) {
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

  const mergedStyle = {
    width: "100%",
    maxWidth: wCss,
    background: bg,
    color: fg,
    ...(style && typeof style === "object" ? style : {}),
  };

  function toggle() {
    onCollapse?.(!collapsed);
  }

  return (
    <aside {...rest} className={rootClass} style={mergedStyle}>
      <div className="mimicus-app-layout-sider__body">{children}</div>
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
