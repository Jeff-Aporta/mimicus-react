/**
 * Display — isla: display
 * repo: Jeff-Aporta/mimicus-react · src/components/display/Display.tsx
 * Monolito de componentes de presentación (Badge, Tag, Avatar, Carousel, Table, Timeline, Tree, etc.).
 */
import { Children, useId, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { mergeSurfaceStyle } from "../../lib/surfaceColor.ts";
import { useDisplayBinding } from "../../display/useDisplayBinding.ts";

type Size = "small" | "medium" | "large";
interface BaseProps { className?: string; style?: CSSProperties; children?: ReactNode }

function cx(...p: unknown[]): string { return p.filter(Boolean).join(" "); }
function initials(name: ReactNode): string { return String(name ?? "?").trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase(); }
function hashColor(s: ReactNode): string { let h = 0; const str = String(s); for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h); return `hsl(${Math.abs(h) % 360} 55% 45%)`; }

/* ── Badge (count / dot) ── */
export interface BadgeProps extends BaseProps {
  count?: number | string; dot?: boolean; showZero?: boolean; max?: number; color?: string; offset?: [number, number]; [key: string]: unknown;
}
export function Badge({
  count, dot, showZero = false, max = 99, color = "primary", offset, children, className, style, ...rest
}: BadgeProps) {
  const n = Number(count);
  const show = dot || (showZero ? n >= 0 : n > 0);
  const label = Number.isFinite(n) && n > max ? `${max}+` : count;
  return (
    <span {...rest} className={cx("mimicus-badge-wrap", className)} style={style}>
      {children}
      {show && (
        <sup className={cx("mimicus-badge", dot && "mimicus-badge--dot", `mimicus-badge--${color}`)}
          style={offset ? { transform: `translate(${offset[0] ?? 0}px, ${offset[1] ?? 0}px)` } : undefined}>
          {!dot && label}
        </sup>
      )}
    </span>
  );
}

/* ── Tag / Chip ── */
export interface TagProps extends BaseProps {
  variant?: string; color?: string; shape?: string; closable?: boolean; icon?: ReactNode; uppercase?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void; [key: string]: unknown;
}
export function Tag({
  variant = "ghost", color, shape = "pill", closable, icon, uppercase, onClose, children, className, style, ...rest
}: TagProps) {
  return (
    <span {...rest} className={cx("mimicus-tag", `mimicus-tag--${variant}`, shape && `mimicus-tag--${shape}`, uppercase && "mimicus-tag--upper", className)}
      style={mergeSurfaceStyle(color, style) as CSSProperties}>
      {icon && <span className="mimicus-tag__icon">{icon}</span>}
      <span className="mimicus-tag__text">{children}</span>
      {closable && <button type="button" className="mimicus-tag__close" aria-label="Cerrar" onClick={onClose}>×</button>}
    </span>
  );
}
export const Chip = Tag;

/* ── Avatar ── */
export interface AvatarProps extends BaseProps {
  src?: string; alt?: string; variant?: "circular" | "rounded" | "square"; [key: string]: unknown;
}
export function Avatar({ src, alt, variant = "circular", children, className, style, ...rest }: AvatarProps) {
  const label = alt ?? (typeof children === "string" ? children : "?");
  return (
    <span {...rest} className={cx("mimicus-avatar", `mimicus-avatar--${variant}`, className)} style={style}
      title={alt}>
      {src ? <img className="mimicus-avatar__img" src={src} alt={alt ?? ""} /> : (
        <span className="mimicus-avatar__fallback" style={{ background: hashColor(label) }}>{children ?? initials(label)}</span>
      )}
    </span>
  );
}

export interface AvatarGroupProps extends BaseProps { max?: number; total?: number; spacing?: Size; [key: string]: unknown }
export function AvatarGroup({ max = 5, total, spacing = "medium", children, className, style, ...rest }: AvatarGroupProps) {
  const items = Children.toArray(children);
  const shown = items.slice(0, max);
  const surplus = (total ?? items.length) - shown.length;
  return (
    <span {...rest} className={cx("mimicus-avatar-group", `mimicus-avatar-group--${spacing}`, className)} style={style}>
      {shown}
      {surplus > 0 && <Avatar className="mimicus-avatar-group__surplus">+{surplus}</Avatar>}
    </span>
  );
}

/* ── Carousel ── */
export interface CarouselProps extends BaseProps {
  autoplay?: boolean; autoplaySpeed?: number; arrows?: boolean; dots?: boolean; infinite?: boolean; speed?: number;
  dotPlacement?: string; fade?: boolean; defaultActiveIndex?: number; [key: string]: unknown;
}
export function Carousel({
  autoplay = false, autoplaySpeed = 3000, arrows = false, dots = true, infinite = true, speed = 500,
  dotPlacement = "bottom", fade, children, className, style, defaultActiveIndex = 0, ...rest
}: CarouselProps) {
  const ref = useRef(null);
  const slides = Children.toArray(children);
  useDisplayBinding(ref, "carousel", [slides.length, autoplay, arrows, dots]);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-carousel", fade && "mimicus-carousel--fade", `mimicus-carousel--dots-${dotPlacement}`, className)} style={style}
      data-mimicus-display="carousel" data-autoplay={autoplay} data-autoplay-speed={autoplaySpeed} data-infinite={infinite} data-speed={speed} data-active-index={defaultActiveIndex}>
      {arrows && <button type="button" className="mimicus-carousel__arrow mimicus-carousel__arrow--prev" data-mimicus-carousel-prev aria-label="Anterior">‹</button>}
      <div className="mimicus-carousel__viewport">
        <div className="mimicus-carousel__track" data-mimicus-carousel-track>
          {slides.map((slide, i) => (
            <div key={i} className={cx("mimicus-carousel__slide", i === defaultActiveIndex && "is-active")} data-mimicus-carousel-slide>{slide}</div>
          ))}
        </div>
      </div>
      {arrows && <button type="button" className="mimicus-carousel__arrow mimicus-carousel__arrow--next" data-mimicus-carousel-next aria-label="Siguiente">›</button>}
      {dots && slides.length > 1 && (
        <div className="mimicus-carousel__dots" role="tablist">
          {slides.map((_, i) => <button key={i} type="button" className={cx("mimicus-carousel__dot", i === defaultActiveIndex && "is-active")} data-mimicus-carousel-dot aria-label={`Slide ${i + 1}`} />)}
        </div>
      )}
    </div>
  );
}

/* ── Collapse / Accordion ── */
export interface CollapsePanelProps extends BaseProps { panelKey?: string; header?: ReactNode; defaultOpen?: boolean; [key: string]: unknown }
export function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }: CollapsePanelProps) {
  const autoId = useId();
  const key = panelKey ?? autoId;
  return (
    <div {...rest} className={cx("mimicus-collapse__panel", defaultOpen && "is-open", className)} data-mimicus-collapse-panel={key} data-default-open={defaultOpen}>
      <button type="button" className="mimicus-collapse__trigger" data-mimicus-collapse-trigger aria-expanded={defaultOpen ? "true" : "false"}>
        <span className="mimicus-collapse__arrow" aria-hidden>▸</span>
        <span className="mimicus-collapse__header">{header}</span>
      </button>
      <div className="mimicus-collapse__body" data-mimicus-collapse-body hidden={!defaultOpen}>{children}</div>
    </div>
  );
}

export interface CollapseProps extends BaseProps {
  accordion?: boolean; defaultActiveKey?: string | string[]; activeKey?: string | string[]; [key: string]: unknown;
}
export function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }: CollapseProps) {
  const ref = useRef(null);
  const keys = activeKey ?? defaultActiveKey;
  useDisplayBinding(ref, "collapse", [accordion, keys]);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-collapse", className)} style={style} data-mimicus-display="collapse"
      data-accordion={accordion} data-active-key={Array.isArray(keys) ? keys.join(",") : keys ?? ""}>
      {children}
    </div>
  );
}
Collapse.Panel = CollapsePanel;
export const Accordion = Collapse;

/* ── Descriptions ── */
export interface DescriptionsItemProps extends BaseProps { label?: ReactNode; span?: number; [key: string]: unknown }
export function DescriptionsItem({ label, span = 1, children, className, ...rest }: DescriptionsItemProps) {
  return (
    <div {...rest} className={cx("mimicus-descriptions__item", className)} style={{ gridColumn: `span ${span}` }}>
      <dt className="mimicus-descriptions__label">{label}</dt>
      <dd className="mimicus-descriptions__content">{children}</dd>
    </div>
  );
}

export interface DescriptionsProps extends BaseProps {
  title?: ReactNode; bordered?: boolean; column?: number; [key: string]: unknown;
}
export function Descriptions({ title, bordered = false, column = 3, children, className, style, ...rest }: DescriptionsProps) {
  return (
    <div {...rest} className={cx("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", className)} style={style}>
      {title && <div className="mimicus-descriptions__title">{title}</div>}
      <dl className="mimicus-descriptions__list" style={{ "--mimicus-desc-cols": column } as CSSProperties}>
        {children}
      </dl>
    </div>
  );
}
Descriptions.Item = DescriptionsItem;

/* ── Empty ── */
export interface EmptyProps extends BaseProps { description?: ReactNode; image?: string; [key: string]: unknown }
export function Empty({ description = "No data", image = "default", children, className, style, ...rest }: EmptyProps) {
  return (
    <div {...rest} className={cx("mimicus-empty", image === "simple" && "mimicus-empty--simple", className)} style={style}>
      <div className="mimicus-empty__image" aria-hidden />
      {description && <p className="mimicus-empty__desc">{description}</p>}
      {children && <div className="mimicus-empty__footer">{children}</div>}
    </div>
  );
}

/* ── QRCode ── */
function paintQr(canvas: HTMLCanvasElement, value: string, size: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const n = 21;
  const cell = Math.floor(size / n);
  const pad = Math.floor((size - cell * n) / 2);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#111";
  const bit = (r: number, c: number) => {
    const code = String(value).charCodeAt((r * n + c) % Math.max(1, String(value).length)) ^ (r * 7 + c * 13);
    if (r < 7 && c < 7) return (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
    if (r < 7 && c >= n - 7) return (r === 0 || r === 6 || c === n - 7 || c === n - 1 || (r >= 2 && r <= 4 && c >= n - 5 && c <= n - 3));
    if (r >= n - 7 && c < 7) return (r === n - 7 || r === n - 1 || c === 0 || c === 6 || (r >= n - 5 && r <= n - 3 && c >= 2 && c <= 4));
    return code % 3 === 0;
  };
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (bit(r, c)) ctx.fillRect(pad + c * cell, pad + r * cell, cell, cell);
}

export interface QRCodeProps extends BaseProps { value?: string; size?: number; bordered?: boolean; [key: string]: unknown }
export function QRCode({ value = "", size = 128, bordered = true, className, style, ...rest }: QRCodeProps) {
  const ref = (el: HTMLCanvasElement | null) => { if (el) paintQr(el, value, size); };
  return (
    <span {...rest} className={cx("mimicus-qrcode", bordered && "mimicus-qrcode--bordered", className)} style={style}>
      <canvas ref={ref} width={size} height={size} className="mimicus-qrcode__canvas" aria-label={`QR: ${value}`} />
    </span>
  );
}

/* ── Segmented ── */
interface SegmentedOption { value: string; label?: ReactNode; icon?: ReactNode }
export interface SegmentedProps extends BaseProps {
  options?: SegmentedOption[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; block?: boolean; [key: string]: unknown;
}
export function Segmented({ options = [], value, defaultValue, onChange, block, className, style, ...rest }: SegmentedProps) {
  const ref = useRef(null);
  const cur = value ?? defaultValue ?? options[0]?.value;
  useDisplayBinding(ref, "segmented", [cur, options.length]);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-segmented", block && "mimicus-segmented--block", className)} style={style}
      data-mimicus-display="segmented" data-value={cur} role="group">
      {options.map((opt) => (
        <button key={opt.value} type="button" className={cx("mimicus-segmented__item", cur === opt.value && "is-active")}
          data-mimicus-segmented={opt.value} aria-pressed={cur === opt.value ? "true" : "false"} onClick={() => onChange?.(opt.value)}>
          {opt.icon}{opt.label ?? opt.value}
        </button>
      ))}
    </div>
  );
}

/* ── Statistic ── */
export interface StatisticProps extends BaseProps {
  title?: ReactNode; value?: number | string; prefix?: ReactNode; suffix?: ReactNode; precision?: number; [key: string]: unknown;
}
export function Statistic({ title, value, prefix, suffix, precision, className, style, ...rest }: StatisticProps) {
  const fmt = precision != null && Number.isFinite(Number(value)) ? Number(value).toFixed(precision) : value;
  return (
    <div {...rest} className={cx("mimicus-statistic", className)} style={style}>
      {title && <div className="mimicus-statistic__title">{title}</div>}
      <div className="mimicus-statistic__value">
        {prefix && <span className="mimicus-statistic__prefix">{prefix}</span>}
        <span className="mimicus-statistic__number">{fmt}</span>
        {suffix && <span className="mimicus-statistic__suffix">{suffix}</span>}
      </div>
    </div>
  );
}

/* ── Table ── */
// columns/dataSource son genéricos del consumidor; `any` puntual por la forma arbitraria de las filas.
interface TableColumn { key?: string; title?: ReactNode; dataIndex?: string; sorter?: unknown; render?: (cell: any, row: any) => ReactNode }
export interface TableProps extends BaseProps {
  columns?: TableColumn[]; dataSource?: any[]; bordered?: boolean; sortable?: boolean; pagination?: unknown; [key: string]: unknown;
}
export function Table({ columns = [], dataSource = [], bordered, sortable, pagination, className, style, children, ...rest }: TableProps) {
  const ref = useRef(null);
  useDisplayBinding(ref, sortable ? "table" : null, [sortable, dataSource.length]);
  if (children) {
    return <table {...rest} ref={ref} className={cx("mimicus-table", bordered && "mimicus-table--bordered", className)} style={style} data-mimicus-display={sortable ? "table" : undefined}>{children}</table>;
  }
  return (
    <table {...rest} ref={ref} className={cx("mimicus-table", bordered && "mimicus-table--bordered", className)} style={style} data-mimicus-display={sortable ? "table" : undefined}>
      <thead><tr>{columns.map((col, i) => (
        <th key={col.key ?? i} data-mimicus-table-sort={sortable && col.sorter ? i : undefined} className={sortable && col.sorter ? "mimicus-table__sortable" : undefined}>{col.title}</th>
      ))}</tr></thead>
      <tbody>{dataSource.map((row, ri) => (
        <tr key={row.key ?? ri}>{columns.map((col, ci) => <td key={col.key ?? ci}>{col.render ? col.render(row[col.dataIndex as string], row) : row[col.dataIndex as string]}</td>)}</tr>
      ))}</tbody>
    </table>
  );
}

/* ── Timeline ── */
export interface TimelineItemProps extends BaseProps { label?: ReactNode; color?: string; dot?: ReactNode; [key: string]: unknown }
export function TimelineItem({ label, color, dot, children, className, ...rest }: TimelineItemProps) {
  return (
    <li {...rest} className={cx("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className)}>
      <div className="mimicus-timeline__dot">{dot}</div>
      <div className="mimicus-timeline__content">
        {label && <div className="mimicus-timeline__label">{label}</div>}
        <div className="mimicus-timeline__body">{children}</div>
      </div>
    </li>
  );
}

export interface TimelineProps extends BaseProps { mode?: string; pending?: ReactNode; [key: string]: unknown }
export function Timeline({ mode = "left", pending, children, className, style, ...rest }: TimelineProps) {
  return (
    <ul {...rest} className={cx("mimicus-timeline", `mimicus-timeline--${mode}`, className)} style={style}>
      {children}
      {pending && <li className="mimicus-timeline__item mimicus-timeline__item--pending"><div className="mimicus-timeline__dot" /><div className="mimicus-timeline__content">{pending}</div></li>}
    </ul>
  );
}
Timeline.Item = TimelineItem;

/* ── Tooltip ── */
export interface TooltipProps extends BaseProps { title?: ReactNode; placement?: string; arrow?: boolean; [key: string]: unknown }
export function Tooltip({ title, placement = "top", arrow, children, className, ...rest }: TooltipProps) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tooltip", [title, placement]);
  return (
    <span {...rest} ref={ref} className={cx("mimicus-tooltip", className)} data-mimicus-display="tooltip" data-placement={placement}>
      <span className="mimicus-tooltip__trigger" data-mimicus-tooltip-trigger tabIndex={0}>{children}</span>
      <span className={cx("mimicus-tooltip__popup", arrow && "mimicus-tooltip__popup--arrow")} data-mimicus-tooltip-popup role="tooltip" hidden>{title}</span>
    </span>
  );
}

/* ── Tour ── */
interface TourStep { target?: string; title?: ReactNode; description?: ReactNode }
export interface TourProps extends BaseProps { steps?: TourStep[]; open?: boolean; [key: string]: unknown }
export function Tour({ steps = [], open = false, className, style, ...rest }: TourProps) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tour", [open, steps.length]);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-tour", open && "is-active", className)} style={style} data-mimicus-display="tour" data-open={open ? "true" : "false"}>
      <div className="mimicus-tour__overlay" data-mimicus-tour-overlay hidden={!open} />
      {steps.map((s, i) => <div key={i} data-mimicus-tour-step data-target={s.target} data-title={s.title} data-description={s.description} hidden />)}
      <div className="mimicus-tour__card" data-mimicus-tour-card>
        <button type="button" className="mimicus-tour__close" data-mimicus-tour-close aria-label="Cerrar">×</button>
        <strong data-mimicus-tour-title />
        <p data-mimicus-tour-desc />
        <div className="mimicus-tour__actions">
          <button type="button" data-mimicus-tour-prev>Anterior</button>
          <button type="button" data-mimicus-tour-next>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

/* ── Tree (display) ── */
// treeData recursivo heterogéneo; `any` puntual en node.
function TreeNode({ node, checkable, level = 0 }: { node: any; checkable?: boolean; level?: number }) {
  const hasKids = Boolean(node.children?.length);
  const key = node.key ?? node.title;
  return (
    <div className={cx("mimicus-tree__node", hasKids && "is-expanded")} data-mimicus-tree-node={key} style={{ paddingLeft: `${level * 1.1}rem` }}>
      {hasKids ? <button type="button" className="mimicus-tree__switcher" data-mimicus-tree-switcher aria-expanded="true">▾</button> : <span className="mimicus-tree__switcher mimicus-tree__switcher--leaf" />}
      {checkable && <input type="checkbox" className="mimicus-tree__check" data-mimicus-tree-check />}
      <span className="mimicus-tree__title">{node.title}</span>
      {hasKids && (
        <div className="mimicus-tree__children" data-mimicus-tree-children>
          {node.children.map((c: any) => <TreeNode key={c.key ?? c.title} node={c} checkable={checkable} level={level + 1} />)}
        </div>
      )}
    </div>
  );
}

export interface TreeProps extends BaseProps { treeData?: any[]; checkable?: boolean; defaultExpandAll?: boolean; [key: string]: unknown }
export function Tree({ treeData = [], checkable, defaultExpandAll, className, style, ...rest }: TreeProps) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tree", [checkable, treeData.length]);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-tree", className)} style={style} data-mimicus-display="tree" data-checkable={checkable} data-default-expand-all={defaultExpandAll}>
      {treeData.map((n) => <TreeNode key={n.key ?? n.title} node={n} checkable={checkable} />)}
    </div>
  );
}

/* ── Calendar ── */
export interface CalendarProps extends BaseProps { fullscreen?: boolean; [key: string]: unknown }
export function Calendar({ fullscreen, className, style, ...rest }: CalendarProps) {
  const ref = useRef(null);
  const now = new Date();
  useDisplayBinding(ref, "calendar", []);
  return (
    <div {...rest} ref={ref} className={cx("mimicus-calendar", fullscreen && "mimicus-calendar--fullscreen", className)} style={style}
      data-mimicus-display="calendar" data-year={now.getFullYear()} data-month={now.getMonth()}>
      <div className="mimicus-calendar__header">
        <button type="button" className="mimicus-calendar__nav" data-mimicus-calendar-prev aria-label="Mes anterior">‹</button>
        <span className="mimicus-calendar__title" data-mimicus-calendar-title />
        <button type="button" className="mimicus-calendar__nav" data-mimicus-calendar-next aria-label="Mes siguiente">›</button>
      </div>
      <div className="mimicus-calendar__weekdays">
        {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => <span key={d} className="mimicus-calendar__weekday">{d}</span>)}
      </div>
      <div className="mimicus-calendar__grid" data-mimicus-calendar-grid />
    </div>
  );
}

/* ── List (MUI) ── */
export interface ListItemTextProps extends BaseProps { primary?: ReactNode; secondary?: ReactNode; [key: string]: unknown }
export function ListItemText({ primary, secondary, className, ...rest }: ListItemTextProps) {
  return (
    <div {...rest} className={cx("mimicus-list-item__text", className)}>
      {primary && <span className="mimicus-list-item__primary">{primary}</span>}
      {secondary && <span className="mimicus-list-item__secondary">{secondary}</span>}
    </div>
  );
}

export function ListItemIcon({ children, className, ...rest }: BaseProps & { [key: string]: unknown }) {
  return <span {...rest} className={cx("mimicus-list-item__icon", className)}>{children}</span>;
}

export function ListItemAvatar({ children, className, ...rest }: BaseProps & { [key: string]: unknown }) {
  return <span {...rest} className={cx("mimicus-list-item__avatar", className)}>{children}</span>;
}

export interface ListItemProps extends BaseProps { button?: boolean; secondaryAction?: ReactNode; [key: string]: unknown }
export function ListItem({ button, secondaryAction, children, className, ...rest }: ListItemProps) {
  const Tag = button ? "button" : "li";
  return (
    <Tag {...rest} className={cx("mimicus-list-item", button && "mimicus-list-item--button", className)} type={button ? "button" : undefined}>
      {children}
      {secondaryAction && <span className="mimicus-list-item__secondary-action">{secondaryAction}</span>}
    </Tag>
  );
}

export interface ListProps extends BaseProps { dense?: boolean; disableGutters?: boolean; subheader?: ReactNode; [key: string]: unknown }
export function List({ dense, disableGutters, subheader, children, className, style, ...rest }: ListProps) {
  return (
    <ul {...rest} className={cx("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className)} style={style}>
      {subheader && <li className="mimicus-list__subheader">{subheader}</li>}
      {children}
    </ul>
  );
}
List.Item = ListItem;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
