/**
 * AppLayout — isla: layout
 * demo: demo/config/demos/lib/AppLayout.json
 * llm:  ./AppLayout.llm.md
 * css:  css/components/app-layout.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/app-layout/AppLayout.tsx
 * Estructura de aplicación por slots (Header/Sider/Footer) sobre grid, con variantes y responsive.
 */
import { Children, isValidElement, useMemo } from "react";
import type { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from "react";
import { appLayoutGridTemplate, appLayoutResponsiveGridTemplate } from "./appLayoutVariants.ts";
import { useAppLayoutContext } from "./appLayoutContext.tsx";
import { AppLayoutSider } from "./AppLayoutSider.tsx";
import type { AppLayoutSiderProps } from "./AppLayoutSider.tsx";
import { AppLayoutHeader } from "./AppLayoutHeader.tsx";
import type { AppLayoutHeaderProps } from "./AppLayoutHeader.tsx";

const SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" } as const;

type AppSlotName = "header" | "sider" | "footer";

interface Slots {
  header: ReactElement | null;
  sider: ReactElement | null;
  footer: ReactElement | null;
  default: ReactNode[];
}

function collectSlots(children: ReactNode): Slots {
  const slots: Slots = { header: null, sider: null, footer: null, default: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      slots.default.push(child);
      return;
    }
    const slotName = (child.type as { __appLayoutSlot?: AppSlotName })?.__appLayoutSlot;
    if (slotName === "header" || slotName === "sider" || slotName === "footer") slots[slotName] = child;
    else slots.default.push(child);
  });
  return slots;
}

function Slot({ children }: { children?: ReactNode }) {
  return children;
}

// Marcador estático __appLayoutSlot sobre cada slot del layout.
type SlotComponent<P> = ((props: P) => ReactNode) & { __appLayoutSlot: AppSlotName };

interface HeaderSlotComponent extends SlotComponent<AppLayoutHeaderProps> {
  Brand: typeof AppLayoutHeader.Brand;
  Center: typeof AppLayoutHeader.Center;
  Tools: typeof AppLayoutHeader.Tools;
  Nav: typeof AppLayoutHeader.Nav;
}

const Header: HeaderSlotComponent = Object.assign(
  (props: AppLayoutHeaderProps) => <AppLayoutHeader {...props} />,
  {
    __appLayoutSlot: "header" as const,
    Brand: AppLayoutHeader.Brand,
    Center: AppLayoutHeader.Center,
    Tools: AppLayoutHeader.Tools,
    Nav: AppLayoutHeader.Nav,
  },
);

interface SiderProps extends AppLayoutSiderProps {
  children?: ReactNode;
}

function SiderBase({ children, width, collapsed, collapsible, collapsedWidth, theme, onCollapse, className, style, ...rest }: SiderProps) {
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
const Sider: SlotComponent<SiderProps> = Object.assign(SiderBase, { __appLayoutSlot: "sider" as const });

const Footer: SlotComponent<{ children?: ReactNode }> = Object.assign(
  (props: { children?: ReactNode }) => <Slot {...props} />,
  { __appLayoutSlot: "footer" as const },
);

export interface AppLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  variant?: "top" | "side" | string;
  fixedHeader?: boolean;
  fixedSider?: boolean;
  responsive?: boolean;
  responsiveDrawer?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

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
}: AppLayoutProps) {
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
  } as CSSProperties;

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
