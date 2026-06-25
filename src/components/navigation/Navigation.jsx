import { Children, useEffect, useMemo, useRef } from "react";
import { useNavBinding } from "../../nav/useNavBinding.js";

function cx(...p) { return p.filter(Boolean).join(" "); }

/* ── Anchor ── */
export function AnchorLink({ href, title, children, className, ...rest }) {
  return (
    <a {...rest} href={href} title={title} className={cx("mimicus-anchor__link", className)} data-mimicus-anchor-link>
      <span className="mimicus-anchor__link-title">{children ?? title}</span>
    </a>
  );
}

export function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "anchor", [direction, affix, targetOffset, bounds, container]);
  const body = children ?? items?.map((it, i) => (
    <AnchorLink key={it.href ?? i} href={it.href} title={it.title}>{it.title}</AnchorLink>
  ));
  return (
    <nav ref={ref} {...rest} className={cx("mimicus-anchor", `mimicus-anchor--${direction}`, className)} style={style}
      data-direction={direction} data-affix={affix ? "true" : undefined} data-target-offset={targetOffset} data-bounds={bounds}
      data-container={container} data-mimicus-nav="anchor">
      <div className="mimicus-anchor__list">{body}</div>
    </nav>
  );
}
Anchor.Link = AnchorLink;

/* ── Breadcrumbs ── */
export function BreadcrumbItem({ href, children, className, ...rest }) {
  const inner = href ? <a href={href} className="mimicus-breadcrumbs__link" {...rest}>{children}</a> : <span className="mimicus-breadcrumbs__page" aria-current="page" {...rest}>{children}</span>;
  return <li className={cx("mimicus-breadcrumbs__item", className)}>{inner}</li>;
}

export function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }) {
  const nodes = children ?? items?.map((it, i) => <BreadcrumbItem key={i} href={it.href}>{it.label}</BreadcrumbItem>);
  const list = useMemo(() => Children.toArray(nodes), [nodes]);
  const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
  const withSep = [];
  visible.forEach((node, i) => {
    if (i > 0) withSep.push(<li key={`sep-${i}`} className="mimicus-breadcrumbs__sep" aria-hidden>{separator}</li>);
    withSep.push(node);
  });
  return (
    <nav {...rest} aria-label="breadcrumb" className={cx("mimicus-breadcrumbs", className)} style={style}>
      <ol className="mimicus-breadcrumbs__list">{withSep}</ol>
    </nav>
  );
}
Breadcrumbs.Item = BreadcrumbItem;
export const Breadcrumb = Breadcrumbs;

/* ── Menu ── */
export function MenuItem({ itemKey, disabled, icon, children, className, ...rest }) {
  const dataKey = itemKey ?? rest["data-key"];
  return (
    <li role="none">
      <button type="button" role="menuitem" disabled={disabled} data-key={dataKey} data-mimicus-menu-item
        className={cx("mimicus-menu__item", disabled && "is-disabled", className)} {...rest}>
        {icon && <span className="mimicus-menu__icon" aria-hidden>{icon}</span>}
        <span className="mimicus-menu__label">{children}</span>
      </button>
    </li>
  );
}

export function MenuDivider() {
  return <li role="separator" className="mimicus-menu__divider" />;
}

export function Menu({ mode = "vertical", selectable, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "menu", [mode]);
  return (
    <ul ref={ref} role="menu" {...rest} className={cx("mimicus-menu", `mimicus-menu--${mode}`, selectable && "mimicus-menu--selectable", className)}
      style={style} data-mode={mode} data-mimicus-nav="menu">
      {children}
    </ul>
  );
}
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

/* ── Dropdown ── */
export function Dropdown({ trigger, menu, placement = "bottomLeft", open, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "dropdown", [placement, open]);
  const body = children ?? (
    <>
      <div className="mimicus-dropdown__trigger" data-mimicus-dropdown-trigger>{trigger}</div>
      <div className="mimicus-dropdown__panel" data-mimicus-dropdown-panel role="menu">{menu}</div>
    </>
  );
  return (
    <div ref={ref} {...rest} className={cx("mimicus-dropdown", `mimicus-dropdown--${placement}`, open && "is-open", className)}
      style={style} data-placement={placement} data-open={open ? "true" : undefined} data-mimicus-nav="dropdown">
      {body}
    </div>
  );
}

/* ── Tabs ── */
/** Marcador declarativo — Tabs renderiza tab + panel desde props. */
export function TabItem() { return null; }

function normalizeTabItems(items, children) {
  if (items?.length) return items.map((it, i) => ({ key: it.key ?? it.tabKey ?? `tab-${i}`, label: it.label, disabled: it.disabled, icon: it.icon, content: it.children ?? it.content }));
  return Children.map(children, (child, i) => {
    if (!child?.props) return null;
    const p = child.props;
    return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
  }).filter(Boolean);
}

export function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  const tabItems = normalizeTabItems(items, children);
  const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
  useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
  const tabs = [];
  const panels = [];
  tabItems.forEach((it) => {
    const k = it.key;
    const on = (activeKey ?? defaultKey) === k;
    tabs.push(
      <button key={`t-${k}`} type="button" role="tab" data-mimicus-tab={k} data-key={k} disabled={it.disabled}
        className={cx("mimicus-tabs__tab", on && "is-active")} aria-selected={on ? "true" : "false"}>
        {it.icon && <span className="mimicus-tabs__icon" aria-hidden>{it.icon}</span>}
        <span className="mimicus-tabs__label">{it.label}</span>
      </button>,
    );
    panels.push(
      <div key={`p-${k}`} role="tabpanel" data-mimicus-tab-panel={k} data-key={k}
        className={cx("mimicus-tabs__panel", on && "is-active")} hidden={!on}>
        {it.content}
      </div>,
    );
  });
  return (
    <div ref={ref} {...rest} className={cx("mimicus-tabs", `mimicus-tabs--${type}`, `mimicus-tabs--${tabPosition}`, className)} style={style}
      data-type={type} data-tab-position={tabPosition} data-active-key={activeKey} data-default-active-key={defaultKey} data-mimicus-nav="tabs">
      <div className="mimicus-tabs__nav" role="tablist">{tabs}</div>
      <div className="mimicus-tabs__content">{panels}</div>
    </div>
  );
}
Tabs.Tab = TabItem;

/* ── Pagination ── */
export function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, size, simple, className, style, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
  return (
    <nav ref={ref} {...rest} aria-label="pagination" className={cx("mimicus-pagination", size && `mimicus-pagination--${size}`, simple && "mimicus-pagination--simple", className)}
      style={style} data-count={count} data-page={page} data-default-page={defaultPage}
      data-sibling-count={siblingCount} data-boundary-count={boundaryCount} data-mimicus-nav="pagination">
      <div className="mimicus-pagination__list" data-mimicus-pagination-list role="navigation" />
    </nav>
  );
}

/* ── Steps / Stepper ── */
export function Step({ title, description, status, icon, className, ...rest }) {
  return (
    <div {...rest} className={cx("mimicus-steps__item", status && `is-${status}`, className)} data-mimicus-step>
      <div className="mimicus-steps__icon">{icon ?? <span className="mimicus-steps__dot" />}</div>
      <div className="mimicus-steps__content">
        {title && <div className="mimicus-steps__title">{title}</div>}
        {description && <div className="mimicus-steps__desc">{description}</div>}
      </div>
    </div>
  );
}

export function Steps({ current = 0, direction = "horizontal", size, clickable, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "steps", [current, direction, clickable]);
  const body = children ?? items?.map((it, i) => {
    const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
    return <Step key={i} title={it.title} description={it.description} status={st} icon={it.icon} />;
  });
  return (
    <div ref={ref} {...rest} className={cx("mimicus-steps", `mimicus-steps--${direction}`, size && `mimicus-steps--${size}`, className)}
      style={style} data-current={current} data-direction={direction} data-clickable={clickable ? "true" : undefined} data-mimicus-nav="steps">
      {body}
    </div>
  );
}
Steps.Step = Step;
export const Stepper = Steps;

/* ── Drawer ── */
export function Drawer({ open = false, placement = "left", width = 280, title, footer, className, style, children, onClose, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "drawer", [open, placement, width]);
  useEffect(() => {
    const el = ref.current;
    if (!el || !onClose) return undefined;
    const fn = () => onClose();
    el.addEventListener("mimicus-drawer-close", fn);
    return () => el.removeEventListener("mimicus-drawer-close", fn);
  }, [onClose]);
  return (
    <div ref={ref} {...rest} className={cx("mimicus-drawer", `mimicus-drawer--${placement}`, open && "is-open", className)}
      style={{ ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width }}
      data-open={open ? "true" : "false"} data-placement={placement} data-mimicus-nav="drawer" aria-hidden={open ? "false" : "true"}>
      <div className="mimicus-drawer__backdrop" data-mimicus-drawer-backdrop aria-hidden />
      <aside className="mimicus-drawer__panel" data-mimicus-drawer-panel role="dialog" aria-modal="true">
        {title && <header className="mimicus-drawer__header">{title}<button type="button" className="mimicus-drawer__close" data-mimicus-drawer-close aria-label="Cerrar">×</button></header>}
        <div className="mimicus-drawer__body">{children}</div>
        {footer && <footer className="mimicus-drawer__footer">{footer}</footer>}
      </aside>
    </div>
  );
}

/* ── Bottom Navigation (MUI) ── */
export function BottomNavigationAction({ value, label, icon, className, ...rest }) {
  return (
    <button type="button" {...rest} className={cx("mimicus-bottom-nav__action", className)}
      data-mimicus-bottom-action={value} aria-label={label}>
      {icon && <span className="mimicus-bottom-nav__icon" aria-hidden>{icon}</span>}
      {label && <span className="mimicus-bottom-nav__label">{label}</span>}
    </button>
  );
}

export function BottomNavigation({ value, showLabels, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "bottom-nav", [value, showLabels]);
  return (
    <nav ref={ref} {...rest} className={cx("mimicus-bottom-nav", showLabels && "mimicus-bottom-nav--labels", className)}
      style={style} data-value={value} data-show-labels={showLabels ? "true" : undefined} data-mimicus-nav="bottom-nav">
      {children}
    </nav>
  );
}
BottomNavigation.Action = BottomNavigationAction;

/* ── Link (MUI) ── */
export function NavLink({ href = "#", underline = "hover", color = "primary", className, style, children, disabled, component: Comp, ...rest }) {
  const Tag = Comp ?? "a";
  const props = Tag === "a" ? { href: disabled ? undefined : href } : {};
  return (
    <Tag {...rest} {...props} className={cx("mimicus-nav-link", `mimicus-nav-link--underline-${underline}`, `mimicus-nav-link--${color}`, disabled && "is-disabled", className)}
      style={style} aria-disabled={disabled || undefined}>
      {children}
    </Tag>
  );
}
export const Link = NavLink;

/* ── Speed Dial (MUI) ── */
export function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }) {
  const key = actionKey ?? rest.key;
  return (
    <button type="button" {...rest} className={cx("mimicus-speed-dial__action", className)}
      data-mimicus-speed-dial-action={key} title={tooltip} aria-label={tooltip}>
      <span className="mimicus-speed-dial__action-icon" aria-hidden>{icon}</span>
      {tooltip && <span className="mimicus-speed-dial__tooltip">{tooltip}</span>}
    </button>
  );
}

export function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "speed-dial", [direction, open]);
  return (
    <div ref={ref} {...rest} className={cx("mimicus-speed-dial", `mimicus-speed-dial--${direction}`, open && "is-open", className)}
      style={style} data-direction={direction} data-mimicus-nav="speed-dial">
      <div className="mimicus-speed-dial__actions" role="menu">{children}</div>
      <button type="button" className="mimicus-speed-dial__trigger" data-mimicus-speed-dial-trigger aria-label={ariaLabel} aria-haspopup="menu">
        <span className="mimicus-speed-dial__icon" aria-hidden>{icon ?? "+"}</span>
      </button>
    </div>
  );
}
SpeedDial.Action = SpeedDialAction;
