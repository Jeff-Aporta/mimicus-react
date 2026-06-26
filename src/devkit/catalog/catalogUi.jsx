/**
 * catalogUi — devkit
 * llm:  ./catalogUi.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/catalog/catalogUi.jsx
 * UI del catálogo: tarjetas, sketches, overview (CatalogHome), ThemeLab y helpers de estado/iconos.
 */
import { useMemo, useState } from "react";
import { Button } from "../_ui.js";
import { resolveColor } from "../_ui.js";
import { Icon } from "../../components/Icon.jsx";
import { itemsInSection, overviewMeta, sectionDescription, sectionIcon, sectionLabel, sectionsWithItems } from "./catalogSections.js";
import { MIMICUS_UI } from "../shared/playgroundKit.js";
import { markViewTransitionCardSource } from "../shell/routing.js";

export { MIMICUS_UI };
export { Icon };

const demoIcons = {
  Button: "mdi:gesture-tap-button", ButtonIconify: "mdi:button-pointer", FloatButton: "mdi:plus-circle-outline", Fab: "mdi:plus-circle", Switch: "mdi:toggle-switch-outline", CheckboxIcon: "mdi:check-bold",
  BlockLayout: "mdi:rectangle-outline", Card: "mdi:card-outline", FlexLayout: "mdi:view-week-outline", GridLayout: "mdi:grid", Box: "mdi:checkbox-blank-outline",
  Container: "mdi:page-layout-body", Stack: "mdi:view-agenda-outline", Space: "mdi:arrow-expand-horizontal", Masonry: "mdi:view-dashboard-variant", ImageList: "mdi:image-multiple-outline",
  ActionDrawer: "mdi:dock-right", Loading: "mdi:loading", Modal: "mdi:application-outline", Headings: "mdi:format-header-pound",
  Iconify: "mdi:emoticon-outline", Text: "mdi:format-text", Chip: "mdi:tag-outline", CheckboxChip: "mdi:checkbox-multiple-blank-circle-outline",
  Dialog: "mdi:message-text-outline", Accordion: "mdi:unfold-more-horizontal", Tabs: "mdi:tab", Toaster: "mdi:bell-badge-outline",
  Tooltip: "mdi:tooltip-text-outline", CodeBlock: "mdi:code-tags", Anchor: "mdi:anchor",
  TransferBoard: "mdi:view-column-outline", Splitter: "mdi:arrow-split-vertical", Divider: "mdi:minus", AppLayout: "mdi:view-dashboard-outline", SidePanel: "mdi:dock-left",
  Separator: "mdi:minus", Alert: "mdi:alert-circle-outline", TipInfo: "mdi:information-outline", FlexOptions: "mdi:dots-horizontal-circle-outline",
  InvokedFloater: "mdi:message-arrow-right-outline", FloatingComponent: "mdi:arrange-bring-forward", GridResponsiveForm: "mdi:form-select",
  LabeledSwitch: "mdi:toggle-switch-outline", FpsHistogram: "mdi:chart-timeline-variant-shimmer",
};

export function getDemoIcon(demoId, item) {
  return item?.definition?.titleIcon ?? demoIcons[demoId] ?? "mdi:circle-small";
}

const demoStatus = {
  Button: "approved", ButtonIconify: "approved", CheckboxIcon: "approved", Switch: "approved", Card: "approved", BlockLayout: "pending",
  FlexLayout: "approved", GridLayout: "approved", Splitter: "approved", Divider: "approved", AppLayout: "approved", SidePanel: "approved", Anchor: "approved",
  TransferBoard: "approved", Modal: "approved", ActionDrawer: "approved", Loading: "approved", Iconify: "approved", Spinner: "approved",
  Text: "approved", Headings: "approved", CodeBlock: "approved", Chip: "pending", CheckboxChip: "pending", Dialog: "pending", Accordion: "pending", Tabs: "pending",
  Toaster: "pending", Tooltip: "pending", Separator: "pending", Alert: "pending", TipInfo: "pending",
  FlexOptions: "pending", InvokedFloater: "pending", FloatingComponent: "pending", GridResponsiveForm: "pending", LabeledSwitch: "pending", FpsHistogram: "approved",
  Box: "approved", Container: "approved", Stack: "approved", Space: "approved", Masonry: "approved", ImageList: "approved",
};

const reviewColorFor = { approved: "success", pending: "warning", rejected: "error" };

export function statusFor(demoId, item) { return item?.definition?.status ?? demoStatus[demoId]; }
export function statusDotFor(demoId, item) { const s = statusFor(demoId, item); return s ? reviewColorFor[s] : undefined; }
export function statusDotsFor(demoIds, itemsById) {
  return [...new Set(demoIds.map((id) => statusFor(id, itemsById?.[id])).filter(Boolean).map((s) => reviewColorFor[s]))];
}

export function Badge({ children, className, style }) {
  return <span className={["mimicus-badge", "catalog-badge", className].filter(Boolean).join(" ")} style={style}>{children}</span>;
}

const statusColor = { success: "success", warning: "warning", error: "error", info: "info", primary: "primary" };

export function ReviewStatusDot({ status, color, size = "0.58rem" }) {
  const token = color ?? (status === "approved" ? "success" : status === "pending" ? "warning" : status === "rejected" ? "error" : "neutral");
  const c = statusColor[token] ?? token;
  return <span className="review-status-dot" style={{ width: size, height: size, background: resolveColor(c) }} title={status ?? c} aria-hidden />;
}

const accent = "var(--catalog-sketch-accent, var(--mimicus-primary))";
const stroke = "currentColor";
const faint = 0.32;

function DefaultSketch() {
  return (
    <>
      <rect x="32" y="24" width="56" height="32" rx="7" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      <circle cx="60" cy="40" r="7" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.5" />
    </>
  );
}

function ButtonSketch() {
  return (
    <>
      <rect x="14" y="30" width="40" height="16" rx="5" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
      <line x1="22" y1="38" x2="46" y2="38" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="66" y="30" width="40" height="16" rx="5" stroke={stroke} strokeWidth="1.3" opacity={0.32} />
    </>
  );
}

function CardSketch() {
  return (
    <>
      <rect x="26" y="16" width="68" height="52" rx="7" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="26" y="16" width="68" height="14" rx="7" fill={accent} fillOpacity="0.25" />
      <line x1="34" y1="40" x2="86" y2="40" stroke={stroke} strokeWidth="1.3" opacity={faint} />
    </>
  );
}

function LayoutSketch() {
  return (
    <>
      <rect x="18" y="18" width="84" height="44" rx="6" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="24" y="24" width="28" height="32" rx="4" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <rect x="58" y="24" width="38" height="14" rx="3" stroke={stroke} strokeWidth="1.1" opacity={faint} />
      <rect x="58" y="42" width="38" height="14" rx="3" stroke={stroke} strokeWidth="1.1" opacity={faint} />
    </>
  );
}

function SwitchSketch() {
  return (
    <>
      <rect x="34" y="34" width="52" height="20" rx="10" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.4" />
      <circle cx="48" cy="44" r="7" fill={accent} fillOpacity="0.85" />
    </>
  );
}

function ModalSketch() {
  return (
    <>
      <rect x="22" y="14" width="76" height="52" rx="6" stroke={stroke} strokeWidth="1.1" opacity={0.22} />
      <rect x="30" y="22" width="60" height="36" rx="5" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.3" />
      <line x1="38" y1="32" x2="82" y2="32" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}

const SKETCHES = {
  Button: ButtonSketch, ButtonIconify: ButtonSketch, FloatButton: ButtonSketch, Fab: ButtonSketch, Card: CardSketch,
  FlexLayout: LayoutSketch, GridLayout: LayoutSketch, BlockLayout: LayoutSketch, AppLayout: LayoutSketch, SidePanel: LayoutSketch,
  Box: LayoutSketch, Container: LayoutSketch, Stack: LayoutSketch, Space: LayoutSketch, Masonry: LayoutSketch, ImageList: LayoutSketch,
  Switch: SwitchSketch, CheckboxIcon: SwitchSketch, LabeledSwitch: SwitchSketch,
  Modal: ModalSketch, Dialog: ModalSketch, Alert: ModalSketch,
};

export function DemoSketch({ demoId }) {
  const Inner = SKETCHES[demoId] ?? DefaultSketch;
  return (
    <svg className="demo-sketch" viewBox="0 0 120 80" aria-hidden fill="none">
      <Inner />
    </svg>
  );
}

export function CatalogCard({ demoId, displayLabel, status, item, onSelect }) {
  const handleSelect = (e) => {
    markViewTransitionCardSource(e.currentTarget);
    onSelect?.();
  };

  return (
    <button type="button" className="catalog-card" onClick={handleSelect} title={`Abrir demo ${displayLabel}`}>
      <div className="catalog-card__preview">
        <DemoSketch demoId={demoId} />
      </div>
      <div className="catalog-card__footer">
        <span className="catalog-card__name">{displayLabel}</span>
        {status && <ReviewStatusDot status={status} size="0.5rem" />}
      </div>
    </button>
  );
}

function CatalogToc({ sections, counts, activeSection, onSectionClick }) {
  return (
    <nav className="catalog-toc" aria-label="En esta página">
      <p className="catalog-toc__label">En esta página</p>
      <ul className="catalog-toc__list">
        {sections.map((sid) => (
          <li key={sid}>
            <a href={`#section-${sid}`} className={["catalog-toc__link", activeSection === sid && "is-active"].filter(Boolean).join(" ")} onClick={(e) => { e.preventDefault(); onSectionClick?.(sid); document.getElementById(`section-${sid}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
              {sectionLabel(sid)}
              <span className="catalog-toc__count">{counts[sid] ?? 0}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CatalogHome({
  items = [],
  onSelect,
  onOpenPaletteLab,
  filterSection = null,
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return items;
    return items.filter((it) => [it.displayLabel, it.id, it.label, sectionLabel(it.section)].some((s) => String(s ?? "").toLowerCase().includes(q)));
  }, [items, q]);

  const visibleSections = filterSection ? [filterSection] : sectionsWithItems(filtered);
  const showHero = !filterSection;
  const overview = overviewMeta();
  const heroTitle = filterSection ? sectionLabel(filterSection) : (overview.title ?? "Components Overview");
  const heroLead = filterSection ? sectionDescription(filterSection) : (overview.lead ?? MIMICUS_UI.catalogLead);

  const counts = useMemo(() => Object.fromEntries(visibleSections.map((sid) => [sid, itemsInSection(filtered, sid).length])), [filtered, visibleSections]);

  return (
    <div className="catalog-overview">
      {!filterSection && visibleSections.length > 1 && (
        <aside className="catalog-overview__toc">
          <CatalogToc sections={visibleSections} counts={counts} onSectionClick={() => {}} />
        </aside>
      )}

      <div className="catalog-overview__main catalog-home">
        {showHero && (
          <header className="catalog-overview__hero pg-vt-hero">
            <p className="catalog-home__kicker mimicus-ui-brand">{overview.kicker ?? MIMICUS_UI.name}</p>
            <h1 className="catalog-home__title">{heroTitle}</h1>
            <p className="catalog-home__lead">{heroLead}</p>
            <div className="catalog-overview__toolbar">
              <label className="catalog-search">
                <Icon icon="mdi:magnify" className="catalog-search__icon" />
                <input type="search" className="catalog-search__input" placeholder="Buscar componente…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Buscar componente" />
              </label>
              {onOpenPaletteLab && (
                <Button variant="outlined" color="primary" onClick={onOpenPaletteLab} style={{ width: "fit-content", flexShrink: 0 }}>
                  <Icon icon="mdi:palette-swatch-outline" />
                  Paleta & Look
                </Button>
              )}
            </div>
          </header>
        )}

        {!showHero && filterSection && (
          <header className="catalog-overview__hero catalog-overview__hero--section pg-vt-hero pg-vt-category">
            <div className="catalog-section-heading">
              <Icon icon={sectionIcon(filterSection)} className="catalog-section-heading__icon" />
              <div>
                <h1 className="catalog-home__title">{heroTitle}</h1>
                {heroLead && <p className="catalog-home__lead">{heroLead}</p>}
              </div>
            </div>
          </header>
        )}

        {visibleSections.map((sid) => {
          const sectionItems = itemsInSection(filtered, sid);
          if (!sectionItems.length) return null;
          return (
            <section key={sid} id={`section-${sid}`} className="catalog-section" aria-labelledby={`heading-${sid}`}>
              {!filterSection && (
                <div className="catalog-section-heading" id={`heading-${sid}`}>
                  <h2 className="catalog-section-heading__title">{sectionLabel(sid)}</h2>
                  <Badge>{sectionItems.length}</Badge>
                </div>
              )}
              <div className="catalog-grid catalog-grid--overview">
                {sectionItems.map((it) => (
                  <CatalogCard key={`${it.section}/${it.slug}`} demoId={it.id} displayLabel={it.displayLabel} item={it} status={statusFor(it.id, it)} onSelect={() => onSelect?.(it.section, it.slug)} />
                ))}
              </div>
            </section>
          );
        })}

        {filtered.length === 0 && <p className="catalog-home__lead">No hay componentes que coincidan con «{query}».</p>}
      </div>
    </div>
  );
}

export function ThemeLab() {
  return (
    <div className="catalog-home catalog-overview__main pg-vt-main">
      <header className="catalog-overview__hero pg-vt-hero">
        <p className="catalog-home__kicker mimicus-ui-brand">{MIMICUS_UI.name}</p>
        <h1 className="catalog-home__title">Paleta & Look</h1>
        <p className="catalog-home__lead">Laboratorio visual de paletas, look & feel y luminancia. Usa los selectores del header para probar combinaciones en tiempo real.</p>
      </header>
    </div>
  );
}
