import { Children, isValidElement } from "react";

function HeaderZone({ children }) {
  return children;
}

function Brand(props) {
  return <HeaderZone {...props} />;
}
Brand.__appLayoutHeaderSlot = "brand";

function Center(props) {
  return <HeaderZone {...props} />;
}
Center.__appLayoutHeaderSlot = "center";

function Tools(props) {
  return <HeaderZone {...props} />;
}
Tools.__appLayoutHeaderSlot = "tools";

function collectHeaderSlots(children) {
  const slots = { brand: null, center: null, tools: null, extra: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      if (child != null && child !== false) slots.extra.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutHeaderSlot;
    if (slotName === "brand" || slotName === "center" || slotName === "tools") slots[slotName] = child;
    else slots.extra.push(child);
  });
  return slots;
}

function renderZone(slot, className) {
  if (!slot) return null;
  return <div className={className}>{slot.props.children}</div>;
}

export function AppLayoutHeader({ className, barClassName, children, ...rest }) {
  const slots = collectHeaderSlots(children);
  const hasZones = Boolean(slots.brand || slots.center || slots.tools);
  const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");

  if (!hasZones) {
    return <header {...rest} className={rootClass}>{children}</header>;
  }

  const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");

  return (
    <header {...rest} className={rootClass}>
      <div className={barClass}>
        {renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand")}
        {renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center")}
        {renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")}
      </div>
      {slots.extra.length > 0 ? slots.extra : null}
    </header>
  );
}

AppLayoutHeader.Brand = Brand;
AppLayoutHeader.Center = Center;
AppLayoutHeader.Tools = Tools;
