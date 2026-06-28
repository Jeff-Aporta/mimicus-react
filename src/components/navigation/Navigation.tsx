/**
 * Navigation — isla: navigation
 * repo: Jeff-Aporta/mimicus-react · src/components/navigation/Navigation.tsx
 * Monolito de componentes de navegación (Anchor, Breadcrumbs, Menu, Dropdown, Tabs, Steps, Drawer, etc.).
 */
import { Children, useEffect, useMemo, useRef } from "react";
import type { CSSProperties, ElementType, ReactElement, ReactNode } from "react";
import { useNavBinding } from "../../nav/useNavBinding.ts";

interface BaseProps { className?: string; style?: CSSProperties; children?: ReactNode }

function cx(...p: unknown[]): string { return p.filter(Boolean).join(" "); }

/* ── Anchor ── */
export interface AnchorLinkProps extends BaseProps { href?: string; title?: ReactNode; [key: string]: unknown }
export function AnchorLink({ href, title, children, className, ...rest }: AnchorLinkProps) {
  return (
    <a {...rest} href={href} title={typeof title === "string" ? title : undefined} className={cx("mimicus-anchor__link", className)} data-mimicus-anchor-link>
      <span className="mimicus-anchor__link-title">{children ?? title}</span>
    </a>
  );
}

interface AnchorItem { href?: string; title?: ReactNode }
export interface AnchorProps extends BaseProps {
  direction?: "vertical" | "horizontal"; affix?: boolean; targetOffset?: number; bounds?: number; container?: string; items?: AnchorItem[]; [key: string]: unknown;
}
export function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }: AnchorProps) {
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
export interface BreadcrumbItemProps extends BaseProps { href?: string; [key: string]: unknown }
export function BreadcrumbItem({ href, children, className, ...rest }: BreadcrumbItemProps) {
  const inner = href ? <a href={href} className="mimicus-breadcrumbs__link" {...rest}>{children}</a> : <span className="mimicus-breadcrumbs__page" aria-current="page" {...rest}>{children}</span>;
  return <li className={cx("mimicus-breadcrumbs__item", className)}>{inner}</li>;
}

interface BreadcrumbEntry { href?: string; label?: ReactNode }
export interface BreadcrumbsProps extends BaseProps { separator?: ReactNode; items?: BreadcrumbEntry[]; maxItems?: number; [key: string]: unknown }
export function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }: BreadcrumbsProps) {
  const nodes = children ?? items?.map((it, i) => <BreadcrumbItem key={i} href={it.href}>{it.label}</BreadcrumbItem>);
  const list = useMemo(() => Children.toArray(nodes), [nodes]);
  const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
  const withSep: ReactNode[] = [];
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
export interface MenuItemProps extends BaseProps { itemKey?: string; disabled?: boolean; icon?: ReactNode; [key: string]: unknown }
export function MenuItem({ itemKey, disabled, icon, children, className, ...rest }: MenuItemProps) {
  const dataKey = itemKey ?? rest["data-key"];
  return (
    <li role="none">
      <button type="button" role="menuitem" disabled={disabled} data-key={dataKey as string} data-mimicus-menu-item
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

export interface MenuProps extends BaseProps { mode?: string; selectable?: boolean; [key: string]: unknown }
export function Menu({ mode = "vertical", selectable, className, style, children, ...rest }: MenuProps) {
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
export interface DropdownProps extends BaseProps { trigger?: ReactNode; menu?: ReactNode; placement?: string; open?: boolean; [key: string]: unknown }
export function Dropdown({ trigger, menu, placement = "bottomLeft", open, className, style, children, ...rest }: DropdownProps) {
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

interface TabEntry { key?: string; tabKey?: string; label?: ReactNode; disabled?: boolean; icon?: ReactNode; children?: ReactNode; content?: ReactNode }
interface NormalizedTab { key: string; label?: ReactNode; disabled?: boolean; icon?: ReactNode; content?: ReactNode }

function normalizeTabItems(items: TabEntry[] | undefined, children: ReactNode): NormalizedTab[] {
  if (items?.length) return items.map((it, i) => ({ key: it.key ?? it.tabKey ?? `tab-${i}`, label: it.label, disabled: it.disabled, icon: it.icon, content: it.children ?? it.content }));
  return Children.map(children, (child, i) => {
    const node = child as ReactElement<TabEntry> | null;
    if (!node?.props) return null;
    const p = node.props;
    return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
  })?.filter(Boolean) as NormalizedTab[] ?? [];
}

export interface TabsProps extends BaseProps {
  type?: string; tabPosition?: string; activeKey?: string; defaultActiveKey?: string; items?: TabEntry[]; [key: string]: unknown;
}
export function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }: TabsProps) {
  const ref = useRef(null);
  const tabItems = normalizeTabItems(items, children);
  const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
  useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
  const tabs: ReactNode[] = [];
  const panels: ReactNode[] = [];
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
export interface PaginationProps extends BaseProps {
  count?: number; page?: number; defaultPage?: number; siblingCount?: number; boundaryCount?: number; simple?: boolean; [key: string]: unknown;
}
export function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, simple, className, style, ...rest }: PaginationProps) {
  const ref = useRef(null);
  useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
  return (
    <nav ref={ref} {...rest} aria-label="pagination" className={cx("mimicus-pagination", simple && "mimicus-pagination--simple", className)}
      style={style} data-count={count} data-page={page} data-default-page={defaultPage}
      data-sibling-count={siblingCount} data-boundary-count={boundaryCount} data-mimicus-nav="pagination">
      <div className="mimicus-pagination__list" data-mimicus-pagination-list role="navigation" />
    </nav>
  );
}

/* ── Steps / Stepper ── */
export interface StepProps extends BaseProps { title?: ReactNode; description?: ReactNode; status?: string; icon?: ReactNode; [key: string]: unknown }
export function Step({ title, description, status, icon, className, ...rest }: StepProps) {
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

interface StepEntry { title?: ReactNode; description?: ReactNode; status?: string; icon?: ReactNode }
export interface StepsProps extends BaseProps {
  current?: number; direction?: "horizontal" | "vertical"; clickable?: boolean; items?: StepEntry[]; [key: string]: unknown;
}
export function Steps({ current = 0, direction = "horizontal", clickable, items, className, style, children, ...rest }: StepsProps) {
  const ref = useRef(null);
  useNavBinding(ref, "steps", [current, direction, clickable]);
  const body = children ?? items?.map((it, i) => {
    const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
    return <Step key={i} title={it.title} description={it.description} status={st} icon={it.icon} />;
  });
  return (
    <div ref={ref} {...rest} className={cx("mimicus-steps", `mimicus-steps--${direction}`, className)}
      style={style} data-current={current} data-direction={direction} data-clickable={clickable ? "true" : undefined} data-mimicus-nav="steps">
      {body}
    </div>
  );
}
Steps.Step = Step;
export const Stepper = Steps;

/* ── Drawer ── */
export interface DrawerProps extends BaseProps {
  open?: boolean; placement?: string; width?: number | string; title?: ReactNode; footer?: ReactNode; onClose?: () => void; [key: string]: unknown;
}
export function Drawer({ open = false, placement = "left", width = 280, title, footer, className, style, children, onClose, ...rest }: DrawerProps) {
  const ref = useRef<HTMLDivElement>(null);
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
      style={{ ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width } as CSSProperties}
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
export interface BottomNavigationActionProps extends BaseProps { value?: string; label?: ReactNode; icon?: ReactNode; [key: string]: unknown }
export function BottomNavigationAction({ value, label, icon, className, ...rest }: BottomNavigationActionProps) {
  return (
    <button type="button" {...rest} className={cx("mimicus-bottom-nav__action", className)}
      data-mimicus-bottom-action={value} aria-label={typeof label === "string" ? label : undefined}>
      {icon && <span className="mimicus-bottom-nav__icon" aria-hidden>{icon}</span>}
      {label && <span className="mimicus-bottom-nav__label">{label}</span>}
    </button>
  );
}

export interface BottomNavigationProps extends BaseProps { value?: string; showLabels?: boolean; [key: string]: unknown }
export function BottomNavigation({ value, showLabels, className, style, children, ...rest }: BottomNavigationProps) {
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
export interface NavLinkProps extends BaseProps {
  href?: string; underline?: string; color?: string; disabled?: boolean; component?: ElementType; [key: string]: unknown;
}
export function NavLink({ href = "#", underline = "hover", color = "primary", className, style, children, disabled, component: Comp, ...rest }: NavLinkProps) {
  const Tag = (Comp ?? "a") as ElementType;
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
export interface SpeedDialActionProps extends BaseProps { icon?: ReactNode; tooltip?: ReactNode; actionKey?: string; [key: string]: unknown }
export function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }: SpeedDialActionProps) {
  const key = actionKey ?? (rest.key as string);
  return (
    <button type="button" {...rest} className={cx("mimicus-speed-dial__action", className)}
      data-mimicus-speed-dial-action={key} title={typeof tooltip === "string" ? tooltip : undefined} aria-label={typeof tooltip === "string" ? tooltip : undefined}>
      <span className="mimicus-speed-dial__action-icon" aria-hidden>{icon}</span>
      {tooltip && <span className="mimicus-speed-dial__tooltip">{tooltip}</span>}
    </button>
  );
}

export interface SpeedDialProps extends BaseProps { direction?: string; ariaLabel?: string; icon?: ReactNode; open?: boolean; [key: string]: unknown }
export function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }: SpeedDialProps) {
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
