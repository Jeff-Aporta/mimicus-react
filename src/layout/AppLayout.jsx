import { Children, isValidElement, useMemo } from "react";
import { appLayoutGridTemplate, appLayoutResponsiveGridTemplate } from "./appLayoutVariants.js";
import { useAppLayoutContext } from "./appLayoutContext.jsx";

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
  return <Slot {...props} />;
}
Header.__appLayoutSlot = "header";

function Sider(props) {
  return <Slot {...props} />;
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
    "is-app-layout",
    `is-app-layout--${variant}`,
    hasSider && "is-app-layout--has-sider",
    fixedHeader && "is-app-layout--fixed-header",
    fixedSider && "is-app-layout--fixed-sider",
    responsive && "is-app-layout--responsive",
    responsiveDrawer && "is-app-layout--drawer-sider",
    className,
  ].filter(Boolean).join(" ");

  const rootStyle = [
    `--is-app-layout-sider-w:${siderWidthCss}`,
    `grid-template:${gridTemplate}`,
    responsiveGridTemplate ? `--is-app-layout-grid-responsive:${responsiveGridTemplate}` : null,
    style,
  ].filter(Boolean).join(";");

  return (
    <div {...rest} className={rootClass} style={rootStyle}>
      {hasHeader && <div className="is-app-layout__cell is-app-layout__cell--header">{slots.header}</div>}
      {hasSider && <div className="is-app-layout__cell is-app-layout__cell--sider">{slots.sider}</div>}
      <div className="is-app-layout__cell is-app-layout__cell--content">{slots.default}</div>
      {hasFooter && <div className="is-app-layout__cell is-app-layout__cell--footer">{slots.footer}</div>}
    </div>
  );
}

export const AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });
