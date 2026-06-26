import { Children, isValidElement } from "react";
import type { HTMLAttributes, ReactElement, ReactNode } from "react";

type HeaderSlotName = "brand" | "center" | "tools" | "nav";

// Componente "zona" del header con marcador estático __appLayoutHeaderSlot para identificar el slot.
type ZoneComponent = ((props: { children?: ReactNode }) => ReactNode) & { __appLayoutHeaderSlot: HeaderSlotName };

interface HeaderSlots {
  brand: ReactElement | null;
  center: ReactElement | null;
  tools: ReactElement | null;
  nav: ReactElement | null;
  extra: ReactNode[];
}

function HeaderZone({ children }: { children?: ReactNode }) {
  return children;
}

const Brand: ZoneComponent = Object.assign((props: { children?: ReactNode }) => <HeaderZone {...props} />, { __appLayoutHeaderSlot: "brand" as const });
const Center: ZoneComponent = Object.assign((props: { children?: ReactNode }) => <HeaderZone {...props} />, { __appLayoutHeaderSlot: "center" as const });
const Tools: ZoneComponent = Object.assign((props: { children?: ReactNode }) => <HeaderZone {...props} />, { __appLayoutHeaderSlot: "tools" as const });
const Nav: ZoneComponent = Object.assign((props: { children?: ReactNode }) => <HeaderZone {...props} />, { __appLayoutHeaderSlot: "nav" as const });

function collectHeaderSlots(children: ReactNode): HeaderSlots {
  const slots: HeaderSlots = { brand: null, center: null, tools: null, nav: null, extra: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      if (child != null && child !== false) slots.extra.push(child);
      return;
    }
    const slotName = (child.type as Partial<ZoneComponent>)?.__appLayoutHeaderSlot;
    if (slotName === "brand" || slotName === "center" || slotName === "tools" || slotName === "nav") slots[slotName] = child;
    else slots.extra.push(child);
  });
  return slots;
}

function renderZone(slot: ReactElement | null, className: string) {
  if (!slot) return null;
  return <div className={className}>{(slot.props as { children?: ReactNode }).children}</div>;
}

export interface AppLayoutHeaderProps extends HTMLAttributes<HTMLElement> {
  barClassName?: string;
  navClassName?: string;
  children?: ReactNode;
}

interface AppLayoutHeaderComponent {
  (props: AppLayoutHeaderProps): ReactNode;
  Brand: ZoneComponent;
  Center: ZoneComponent;
  Tools: ZoneComponent;
  Nav: ZoneComponent;
}

function AppLayoutHeaderBase({ className, barClassName, navClassName, children, ...rest }: AppLayoutHeaderProps) {
  const slots = collectHeaderSlots(children);
  const hasZones = Boolean(slots.brand || slots.center || slots.tools || slots.nav);
  const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");

  if (!hasZones) {
    return <header {...rest} className={rootClass}>{children}</header>;
  }

  const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");
  const navClass = ["mimicus-app-layout-header__nav", "pg-shell-header-nav", navClassName].filter(Boolean).join(" ");

  return (
    <header {...rest} className={rootClass}>
      <div className={barClass}>
        {renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand")}
        {renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center")}
        {renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")}
      </div>
      {slots.nav ? <div className={navClass}>{(slots.nav.props as { children?: ReactNode }).children}</div> : null}
      {slots.extra.length > 0 ? slots.extra : null}
    </header>
  );
}

export const AppLayoutHeader: AppLayoutHeaderComponent = Object.assign(AppLayoutHeaderBase, { Brand, Center, Tools, Nav });
