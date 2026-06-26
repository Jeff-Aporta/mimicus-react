/**
 * AppLayout — isla: layout
 * demo: demo/config/demos/lib/AppLayout.json
 * llm:  ./AppLayout.llm.md
 * css:  css/components/app-layout.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/AppLayout.jsx
 * Estructura de aplicación por slots (Header/Sider/Footer) sobre grid, con variantes y responsive.
 */
import { Children, isValidElement, useMemo } from "react";
import { appLayoutGridTemplate, appLayoutResponsiveGridTemplate } from "./appLayoutVariants.js";
import { useAppLayoutContext } from "./appLayoutContext.jsx";
import { AppLayoutSider } from "./AppLayoutSider.jsx";
import { AppLayoutHeader } from "./AppLayoutHeader.jsx";

const SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };

function collectSlots(children) {
  const slots = { header: null, sider: null, footer: null, default: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      slots.default.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutSlot;
    if (slotName === "header" || slotName === "sider" || slotName === "footer") slots[slotName] = child;
    else slots.default.push(child);
  });
  return slots;
}

function Slot({ children }) {
  return children;
}

function Header(props) {
  return <AppLayoutHeader {...props} />;
}
Header.__appLayoutSlot = "header";
Header.Brand = AppLayoutHeader.Brand;
Header.Center = AppLayoutHeader.Center;
Header.Tools = AppLayoutHeader.Tools;
Header.Nav = AppLayoutHeader.Nav;

function Sider({ children, width, collapsed, collapsible, collapsedWidth, theme, onCollapse, className, style, ...rest }) {
  const useSiderChrome = width !== undefined || collapsible || collapsed !== undefined || theme !== undefined;
  if (useSiderChrome) {
    return (
      <AppLayoutSider
        width={width}
        collapsed={collapsed}
        collapsible={collapsible}
        collapsedWidth={collapsedWidth}
        theme={theme}
        onCollapse={onCollapse}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </AppLayoutSider>
    );
  }
  return children;
}
Sider.__appLayoutSlot = "sider";

function Footer(props) {
  return <Slot {...props} />;
}
Footer.__appLayoutSlot = "footer";

function AppLayoutRoot({
  variant = "top",
  fixedHeader = false,
  fixedSider = false,
  responsive = true,
  responsiveDrawer = false,
  className,
  style,
  children,
  ...rest
}) {
  const ctx = useAppLayoutContext();
  const siderWidthCss = ctx?.siderWidth ?? "200px";
  const slots = useMemo(() => collectSlots(children), [children]);

  const hasHeader = !!slots.header;
  const hasSider = !!slots.sider;
  const hasFooter = !!slots.footer;
  const slotFlags = { hasHeader, hasSider, hasFooter };

  const gridTemplate = appLayoutGridTemplate(variant, slotFlags);
  const responsiveGridTemplate = responsive ? appLayoutResponsiveGridTemplate(variant, slotFlags) : null;

  const rootClass = [
    "mimicus-app-layout",
    `mimicus-app-layout--${variant}`,
    hasSider && "mimicus-app-layout--has-sider",
    fixedHeader && "mimicus-app-layout--fixed-header",
    fixedSider && "mimicus-app-layout--fixed-sider",
    responsive && "mimicus-app-layout--responsive",
    responsiveDrawer && "mimicus-app-layout--drawer-sider",
    className,
  ].filter(Boolean).join(" ");

  const rootStyle = {
    "--mimicus-app-layout-sider-w": siderWidthCss,
    gridTemplate,
    ...(responsiveGridTemplate ? { "--mimicus-app-layout-grid-responsive": responsiveGridTemplate } : {}),
    ...(style && typeof style === "object" ? style : {}),
  };

  return (
    <div {...rest} className={rootClass} style={rootStyle}>
      {hasHeader && <div className="mimicus-app-layout__cell mimicus-app-layout__cell--header">{slots.header}</div>}
      {hasSider && <div className="mimicus-app-layout__cell mimicus-app-layout__cell--sider">{slots.sider}</div>}
      <div className="mimicus-app-layout__cell mimicus-app-layout__cell--content">{slots.default}</div>
      {hasFooter && <div className="mimicus-app-layout__cell mimicus-app-layout__cell--footer">{slots.footer}</div>}
    </div>
  );
}

export const AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });
