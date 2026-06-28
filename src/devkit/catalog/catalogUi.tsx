// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * catalogUi — devkit
 * llm:  ./catalogUi.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/catalog/catalogUi.tsx
 * UI del catálogo: tarjetas, sketches, overview (CatalogHome), ThemeLab y helpers de estado/iconos.
 */
import { useMemo, useState } from "react";
import { Button, Input } from "../_ui.ts";
import { resolveColor } from "../_ui.ts";
import { Icon } from "../../components/Icon.tsx";
import { itemsInSection, overviewMeta, sectionDescription, sectionIcon, sectionLabel, sectionsWithItems } from "./catalogSections.ts";
import { MIMICUS_UI } from "../shared/playgroundKit.ts";
import { markViewTransitionCardSource } from "../shell/routing.ts";

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

/* ── Botones: Button, ButtonIconify, FloatButton, Fab, Link ── */
function ButtonSketch() {
  return (
    <>
      <rect x="14" y="30" width="40" height="16" rx="5" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
      <line x1="22" y1="38" x2="46" y2="38" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="66" y="30" width="40" height="16" rx="5" stroke={stroke} strokeWidth="1.3" opacity={0.32} />
    </>
  );
}
function FloatButtonSketch() {
  return (
    <>
      <rect x="18" y="16" width="84" height="48" rx="6" stroke={stroke} strokeWidth="1.1" opacity={0.22} />
      <circle cx="86" cy="52" r="11" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
      <line x1="86" y1="47" x2="86" y2="57" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="81" y1="52" x2="91" y2="52" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
    </>
  );
}
function LinkSketch() {
  return (
    <>
      <line x1="30" y1="44" x2="74" y2="44" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M52 34 h22 a6 6 0 0 1 0 12 h-10" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 34 h-22 a6 6 0 0 0 0 12 h10" stroke={stroke} strokeWidth="1.4" fill="none" opacity={faint} strokeLinecap="round" />
    </>
  );
}

/* ── Superficie: Card, Box, Container ── */
function CardSketch() {
  return (
    <>
      <rect x="26" y="16" width="68" height="52" rx="7" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="26" y="16" width="68" height="14" rx="7" fill={accent} fillOpacity="0.25" />
      <line x1="34" y1="40" x2="86" y2="40" stroke={stroke} strokeWidth="1.3" opacity={faint} />
    </>
  );
}
function BoxSketch() {
  return (
    <>
      <rect x="30" y="20" width="60" height="40" rx="5" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.4" />
      <rect x="38" y="28" width="44" height="24" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeDasharray="3 3" />
    </>
  );
}
function ContainerSketch() {
  return (
    <>
      <rect x="14" y="16" width="92" height="48" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="34" y="22" width="52" height="36" rx="4" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.4" />
      <line x1="28" y1="16" x2="28" y2="64" stroke={stroke} strokeWidth="1" opacity={0.22} strokeDasharray="3 3" />
      <line x1="92" y1="16" x2="92" y2="64" stroke={stroke} strokeWidth="1" opacity={0.22} strokeDasharray="3 3" />
    </>
  );
}

/* ── Layout grid: GridLayout, BlockLayout, Masonry, ImageList, GridResponsiveForm ── */
function GridSketch() {
  return (
    <>
      {[26, 50, 74].map((x) =>
        [22, 46].map((y) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="18" height="14" rx="3" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.2" />
        ))
      )}
    </>
  );
}
function MasonrySketch() {
  return (
    <>
      <rect x="26" y="20" width="20" height="24" rx="3" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.2" />
      <rect x="26" y="48" width="20" height="14" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="50" y="20" width="20" height="14" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="50" y="38" width="20" height="24" rx="3" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.2" />
      <rect x="74" y="20" width="20" height="20" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="74" y="44" width="20" height="18" rx="3" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.2" />
    </>
  );
}
function ImageListSketch() {
  return (
    <>
      {[26, 50, 74].map((x) =>
        [22, 46].map((y) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="18" height="14" rx="2" fill={accent} fillOpacity="0.1" stroke={accent} strokeWidth="1.1" />
        ))
      )}
      <circle cx="32" cy="28" r="2.2" fill={accent} />
      <path d="M28 36 l5 -5 l4 4 l3 -3 l4 4" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── Layout flex: FlexLayout, Stack, Space, FlexOptions ── */
function FlexSketch() {
  return (
    <>
      <rect x="18" y="18" width="84" height="44" rx="6" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="24" y="26" width="20" height="28" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <rect x="50" y="26" width="20" height="28" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <rect x="76" y="26" width="20" height="28" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
    </>
  );
}
function StackSketch() {
  return (
    <>
      <rect x="34" y="20" width="52" height="11" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <rect x="34" y="35" width="52" height="11" rx="3" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.2" />
      <rect x="34" y="50" width="52" height="11" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}
function SpaceSketch() {
  return (
    <>
      <rect x="22" y="32" width="18" height="16" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <rect x="80" y="32" width="18" height="16" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.2" />
      <line x1="44" y1="40" x2="76" y2="40" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeDasharray="3 3" />
      <path d="M48 36 l-4 4 l4 4 M72 36 l4 4 l-4 4" stroke={accent} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── App shell: AppLayout, SidePanel ── */
function AppShellSketch() {
  return (
    <>
      <rect x="16" y="16" width="88" height="48" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="16" y="16" width="88" height="11" rx="5" fill={accent} fillOpacity="0.2" />
      <rect x="16" y="27" width="22" height="37" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.1" />
      <line x1="46" y1="36" x2="96" y2="36" stroke={stroke} strokeWidth="1.1" opacity={faint} />
      <line x1="46" y1="46" x2="96" y2="46" stroke={stroke} strokeWidth="1.1" opacity={faint} />
    </>
  );
}

/* ── Splitter ── */
function SplitterSketch() {
  return (
    <>
      <rect x="18" y="20" width="84" height="40" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="60" y1="20" x2="60" y2="60" stroke={accent} strokeWidth="1.6" />
      <circle cx="60" cy="40" r="6" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.4" />
      <path d="M50 36 l-4 4 l4 4 M70 36 l4 4 l-4 4" stroke={accent} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── Divider / Separator ── */
function DividerSketch() {
  return (
    <>
      <line x1="26" y1="30" x2="94" y2="30" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="26" y1="40" x2="94" y2="40" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="26" y1="50" x2="94" y2="50" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}

/* ── Toggles: Switch, LabeledSwitch, ToggleButton, CheckboxChip, CheckboxIcon ── */
function SwitchSketch() {
  return (
    <>
      <rect x="34" y="34" width="52" height="20" rx="10" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.4" />
      <circle cx="48" cy="44" r="7" fill={accent} fillOpacity="0.85" />
    </>
  );
}
function ToggleButtonSketch() {
  return (
    <>
      <rect x="24" y="32" width="72" height="18" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="24" y="32" width="36" height="18" rx="5" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.4" />
      <line x1="60" y1="32" x2="60" y2="50" stroke={stroke} strokeWidth="1.1" opacity={faint} />
    </>
  );
}
function CheckboxChipSketch() {
  return (
    <>
      <rect x="26" y="32" width="68" height="18" rx="9" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.4" />
      <circle cx="37" cy="41" r="5" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1.3" />
      <path d="M34.5 41 l1.8 1.8 l3.2 -3.6" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="48" y1="41" x2="86" y2="41" stroke={stroke} strokeWidth="1.4" opacity={faint} strokeLinecap="round" />
    </>
  );
}

/* ── Check / Radio: Checkbox, Radio ── */
function CheckRadioSketch() {
  return (
    <>
      <rect x="30" y="28" width="16" height="16" rx="3" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.4" />
      <path d="M33.5 36 l3 3 l6 -7" stroke={accent} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="78" cy="36" r="9" stroke={stroke} strokeWidth="1.4" opacity={faint} />
      <circle cx="78" cy="36" r="4" fill={accent} fillOpacity="0.85" />
      <line x1="30" y1="54" x2="90" y2="54" stroke={stroke} strokeWidth="1.2" opacity={0.2} />
    </>
  );
}

/* ── Inputs: Input, TextField, InputNumber, Mentions, AutoComplete ── */
function InputSketch() {
  return (
    <>
      <rect x="20" y="32" width="80" height="18" rx="4" stroke={accent} strokeWidth="1.4" fill={accent} fillOpacity="0.06" />
      <line x1="28" y1="41" x2="28" y2="41" stroke={accent} strokeWidth="0" />
      <rect x="27" y="36" width="1.6" height="10" rx="1" fill={accent} />
      <line x1="33" y1="41" x2="70" y2="41" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function InputNumberSketch() {
  return (
    <>
      <rect x="20" y="32" width="80" height="18" rx="4" stroke={accent} strokeWidth="1.4" fill={accent} fillOpacity="0.06" />
      <line x1="28" y1="41" x2="60" y2="41" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <line x1="84" y1="32" x2="84" y2="50" stroke={stroke} strokeWidth="1.1" opacity={faint} />
      <path d="M88 39 l3 -3 l3 3 M88 43 l3 3 l3 -3" stroke={accent} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── Selects: Select, Cascader, TreeSelect ── */
function SelectSketch() {
  return (
    <>
      <rect x="20" y="28" width="80" height="18" rx="4" stroke={accent} strokeWidth="1.4" fill={accent} fillOpacity="0.06" />
      <line x1="28" y1="37" x2="68" y2="37" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <path d="M85 34 l4 4 l4 -4" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="50" width="80" height="12" rx="3" fill={accent} fillOpacity="0.1" stroke={stroke} strokeWidth="1" opacity={0.5} />
    </>
  );
}

/* ── Fecha/hora: DatePicker, TimePicker, Calendar ── */
function CalendarSketch() {
  return (
    <>
      <rect x="28" y="20" width="64" height="44" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="28" y="20" width="64" height="12" rx="5" fill={accent} fillOpacity="0.22" />
      <line x1="40" y1="16" x2="40" y2="24" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="16" x2="80" y2="24" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      {[38, 50, 62, 74].map((x) =>
        [40, 52].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill={x === 50 && y === 52 ? accent : stroke} opacity={x === 50 && y === 52 ? 1 : faint} />
        ))
      )}
    </>
  );
}
function TimeSketch() {
  return (
    <>
      <circle cx="60" cy="40" r="22" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      <line x1="60" y1="40" x2="60" y2="26" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="60" y1="40" x2="72" y2="44" stroke={accent} strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="60" cy="40" r="2.4" fill={accent} />
    </>
  );
}

/* ── ColorPicker ── */
function ColorPickerSketch() {
  return (
    <>
      <rect x="30" y="20" width="60" height="36" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} fill={accent} fillOpacity="0.1" />
      <circle cx="56" cy="36" r="7" fill={accent} fillOpacity="0.5" stroke={accent} strokeWidth="1.3" />
      <rect x="30" y="60" width="60" height="6" rx="3" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1" />
      <circle cx="70" cy="63" r="3.5" fill={accent} stroke={stroke} strokeWidth="1" />
    </>
  );
}

/* ── Slider ── */
function SliderSketch() {
  return (
    <>
      <line x1="24" y1="40" x2="96" y2="40" stroke={stroke} strokeWidth="1.4" opacity={faint} strokeLinecap="round" />
      <line x1="24" y1="40" x2="64" y2="40" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <circle cx="64" cy="40" r="7" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.6" />
    </>
  );
}

/* ── Rate / Rating ── */
function RateSketch() {
  const star = (cx, on) =>
    `M${cx} 32 l2.4 5 l5.4 .6 l-4 3.7 l1.1 5.3 l-4.9 -2.7 l-4.9 2.7 l1.1 -5.3 l-4 -3.7 l5.4 -.6 z`;
  return (
    <>
      <path d={star(36)} fill={accent} fillOpacity="0.7" stroke={accent} strokeWidth="1" />
      <path d={star(60)} fill={accent} fillOpacity="0.7" stroke={accent} strokeWidth="1" />
      <path d={star(84)} fill="none" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}

/* ── Upload ── */
function UploadSketch() {
  return (
    <>
      <rect x="26" y="22" width="68" height="40" rx="6" stroke={accent} strokeWidth="1.4" strokeDasharray="4 3" fill={accent} fillOpacity="0.06" />
      <path d="M60 52 l0 -18 M52 40 l8 -8 l8 8" stroke={accent} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── Transfer / TransferBoard ── */
function TransferSketch() {
  return (
    <>
      <rect x="20" y="22" width="32" height="36" rx="4" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="68" y="22" width="32" height="36" rx="4" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="25" y="28" width="22" height="6" rx="2" fill={accent} fillOpacity="0.3" />
      <rect x="73" y="28" width="22" height="6" rx="2" fill={accent} fillOpacity="0.2" />
      <path d="M55 36 l8 0 M60 33 l4 3 l-4 3" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65 46 l-8 0 M60 43 l-4 3 l4 3" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

/* ── Form ── */
function FormSketch() {
  return (
    <>
      <rect x="24" y="16" width="72" height="48" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="32" y1="26" x2="52" y2="26" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
      <rect x="32" y="30" width="56" height="9" rx="2" stroke={accent} strokeWidth="1.2" fill={accent} fillOpacity="0.06" />
      <line x1="32" y1="46" x2="48" y2="46" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
      <rect x="32" y="50" width="30" height="9" rx="2" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.2" />
    </>
  );
}

/* ── Texto: Text, Headings, CodeBlock ── */
function TextSketch() {
  return (
    <>
      <line x1="26" y1="28" x2="94" y2="28" stroke={stroke} strokeWidth="1.6" opacity={faint} strokeLinecap="round" />
      <line x1="26" y1="38" x2="86" y2="38" stroke={stroke} strokeWidth="1.6" opacity={faint} strokeLinecap="round" />
      <line x1="26" y1="48" x2="90" y2="48" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="26" y1="58" x2="60" y2="58" stroke={stroke} strokeWidth="1.6" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function HeadingsSketch() {
  return (
    <>
      <text x="30" y="48" fontSize="34" fontWeight="700" fill={accent} fillOpacity="0.85" fontFamily="sans-serif">H</text>
      <line x1="58" y1="30" x2="92" y2="30" stroke={stroke} strokeWidth="1.5" opacity={faint} strokeLinecap="round" />
      <line x1="58" y1="42" x2="86" y2="42" stroke={stroke} strokeWidth="1.5" opacity={faint} strokeLinecap="round" />
      <line x1="58" y1="54" x2="90" y2="54" stroke={stroke} strokeWidth="1.5" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function CodeBlockSketch() {
  return (
    <>
      <rect x="22" y="20" width="76" height="40" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} fill={accent} fillOpacity="0.05" />
      <path d="M44 32 l-7 8 l7 8 M76 32 l7 8 l-7 8" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="56" y1="30" x2="64" y2="50" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

/* ── Nav: Tabs/Segmented, Menu/Dropdown, Breadcrumb/Anchor, Pagination, Steps/Stepper, BottomNavigation, SpeedDial ── */
function TabsSketch() {
  return (
    <>
      <rect x="20" y="24" width="80" height="36" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="20" y="24" width="28" height="13" rx="5" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.3" />
      <line x1="48" y1="37" x2="100" y2="37" stroke={stroke} strokeWidth="1.1" opacity={faint} />
      <line x1="56" y1="31" x2="70" y2="31" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
      <line x1="80" y1="31" x2="94" y2="31" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function MenuSketch() {
  return (
    <>
      <rect x="34" y="20" width="52" height="44" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} fill={accent} fillOpacity="0.05" />
      <rect x="34" y="20" width="52" height="12" rx="5" fill={accent} fillOpacity="0.2" />
      <line x1="42" y1="42" x2="78" y2="42" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <line x1="42" y1="52" x2="70" y2="52" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function BreadcrumbSketch() {
  return (
    <>
      <line x1="22" y1="40" x2="40" y2="40" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M46 35 l5 5 l-5 5" stroke={stroke} strokeWidth="1.3" fill="none" opacity={faint} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="56" y1="40" x2="72" y2="40" stroke={stroke} strokeWidth="1.5" opacity={faint} strokeLinecap="round" />
      <path d="M78 35 l5 5 l-5 5" stroke={stroke} strokeWidth="1.3" fill="none" opacity={faint} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="88" y1="40" x2="98" y2="40" stroke={stroke} strokeWidth="1.5" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function PaginationSketch() {
  return (
    <>
      {[26, 46, 66, 86].map((x, i) => (
        <rect key={x} x={x} y="32" width="16" height="16" rx="4" fill={i === 1 ? accent : "none"} fillOpacity={i === 1 ? 0.22 : 0} stroke={i === 1 ? accent : stroke} strokeWidth={i === 1 ? 1.4 : 1.2} opacity={i === 1 ? 1 : faint} />
      ))}
    </>
  );
}
function StepsSketch() {
  return (
    <>
      <line x1="30" y1="40" x2="90" y2="40" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      <circle cx="30" cy="40" r="6" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1.4" />
      <path d="M27.5 40 l1.8 1.8 l3.2 -3.6" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="40" r="6" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.4" />
      <circle cx="90" cy="40" r="6" stroke={stroke} strokeWidth="1.3" opacity={faint} />
    </>
  );
}
function BottomNavSketch() {
  return (
    <>
      <rect x="18" y="20" width="84" height="40" rx="5" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="18" y1="48" x2="102" y2="48" stroke={stroke} strokeWidth="1.1" opacity={faint} />
      <circle cx="38" cy="54" r="3" fill={accent} />
      <circle cx="60" cy="54" r="3" fill={stroke} opacity={faint} />
      <circle cx="82" cy="54" r="3" fill={stroke} opacity={faint} />
    </>
  );
}
function SpeedDialSketch() {
  return (
    <>
      <circle cx="84" cy="56" r="10" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
      <line x1="84" y1="51" x2="84" y2="61" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="79" y1="56" x2="89" y2="56" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="84" cy="34" r="5" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      <circle cx="62" cy="48" r="5" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      <line x1="84" y1="46" x2="84" y2="39" stroke={stroke} strokeWidth="1" opacity={0.25} strokeDasharray="2 2" />
    </>
  );
}

/* ── Overlays: Drawer, Modal/Dialog, Alert/Toaster/TipInfo, Tooltip, Tour ── */
function DrawerSketch() {
  return (
    <>
      <rect x="18" y="18" width="84" height="44" rx="5" stroke={stroke} strokeWidth="1.1" opacity={0.22} />
      <rect x="66" y="18" width="36" height="44" rx="5" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.4" />
      <line x1="74" y1="30" x2="94" y2="30" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
      <line x1="74" y1="40" x2="90" y2="40" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
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
function AlertSketch() {
  return (
    <>
      <rect x="22" y="30" width="76" height="20" rx="5" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.4" />
      <circle cx="34" cy="40" r="6" stroke={accent} strokeWidth="1.4" />
      <line x1="34" y1="37" x2="34" y2="41" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="44" r="0.9" fill={accent} />
      <line x1="46" y1="40" x2="88" y2="40" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function TooltipSketch() {
  return (
    <>
      <rect x="34" y="22" width="52" height="22" rx="5" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.4" />
      <path d="M54 44 l6 7 l6 -7 z" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.4" />
      <line x1="42" y1="33" x2="78" y2="33" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <circle cx="60" cy="58" r="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}
function TourSketch() {
  return (
    <>
      <rect x="18" y="18" width="84" height="44" rx="5" stroke={stroke} strokeWidth="1.1" opacity={0.22} />
      <circle cx="40" cy="40" r="11" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2" fill={accent} fillOpacity="0.08" />
      <rect x="58" y="32" width="38" height="18" rx="4" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.3" />
      <line x1="64" y1="41" x2="90" y2="41" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
    </>
  );
}

/* ── Display ── */
function BadgeSketch() {
  return (
    <>
      <rect x="30" y="34" width="40" height="16" rx="8" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.4" />
      <line x1="38" y1="42" x2="62" y2="42" stroke={accent} strokeWidth="1.4" opacity={0.6} strokeLinecap="round" />
      <circle cx="78" cy="30" r="7" fill={accent} fillOpacity="0.85" />
      <circle cx="78" cy="30" r="7" stroke={stroke} strokeWidth="1.1" opacity={0.2} />
    </>
  );
}
function AvatarSketch() {
  return (
    <>
      <circle cx="60" cy="40" r="20" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.4" />
      <circle cx="60" cy="34" r="6" fill={accent} fillOpacity="0.4" />
      <path d="M48 54 a12 10 0 0 1 24 0" fill={accent} fillOpacity="0.3" />
    </>
  );
}
function TableSketch() {
  return (
    <>
      <rect x="20" y="20" width="80" height="40" rx="4" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="20" y="20" width="80" height="11" fill={accent} fillOpacity="0.2" />
      <line x1="20" y1="42" x2="100" y2="42" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="46" y1="20" x2="46" y2="60" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="73" y1="20" x2="73" y2="60" stroke={stroke} strokeWidth="1" opacity={faint} />
    </>
  );
}
function DataGridSketch() {
  return (
    <>
      <rect x="16" y="18" width="88" height="46" rx="4" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="16" y="18" width="88" height="11" fill={accent} fillOpacity="0.22" />
      <rect x="16" y="18" width="16" height="46" fill={accent} fillOpacity="0.08" />
      <line x1="32" y1="18" x2="32" y2="64" stroke={accent} strokeWidth="1.1" opacity="0.5" />
      <line x1="58" y1="18" x2="58" y2="64" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="82" y1="18" x2="82" y2="64" stroke={stroke} strokeWidth="1" opacity={faint} />
      {[40, 51, 62].map((y) => <line key={y} x1="16" y1={y} x2="104" y2={y} stroke={stroke} strokeWidth="0.9" opacity={faint} />)}
      <path d="M88 21 l3 3 l3 -3" stroke={accent} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="33" width="8" height="4" rx="1" fill={accent} fillOpacity="0.6" />
    </>
  );
}
function ListSketch() {
  return (
    <>
      {[26, 38, 50].map((y) => (
        <g key={y}>
          <circle cx="32" cy={y} r="3" fill={accent} fillOpacity="0.7" />
          <line x1="42" y1={y} x2="92" y2={y} stroke={stroke} strokeWidth="1.4" opacity={faint} strokeLinecap="round" />
        </g>
      ))}
    </>
  );
}
function TreeSketch() {
  return (
    <>
      <rect x="26" y="24" width="14" height="9" rx="2" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1.2" />
      <path d="M33 33 v8 h10 M33 41 v8 h10" stroke={stroke} strokeWidth="1.2" opacity={faint} fill="none" />
      <rect x="46" y="37" width="14" height="9" rx="2" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="46" y="45" width="14" height="9" rx="2" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="66" y="24" width="26" height="9" rx="2" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}
function TimelineSketch() {
  return (
    <>
      <line x1="36" y1="20" x2="36" y2="60" stroke={stroke} strokeWidth="1.3" opacity={faint} />
      {[26, 40, 54].map((y, i) => (
        <g key={y}>
          <circle cx="36" cy={y} r="4" fill={i === 0 ? accent : "none"} fillOpacity={i === 0 ? 0.4 : 0} stroke={accent} strokeWidth="1.4" />
          <line x1="46" y1={y} x2={i === 0 ? 90 : 78} y2={y} stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
        </g>
      ))}
    </>
  );
}
function AccordionSketch() {
  return (
    <>
      <rect x="24" y="20" width="72" height="14" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.3" />
      <path d="M84 25 l4 4 l4 -4" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="72" height="22" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="32" y1="46" x2="80" y2="46" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
      <line x1="32" y1="53" x2="68" y2="53" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function CarouselSketch() {
  return (
    <>
      <rect x="40" y="24" width="40" height="32" rx="4" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.4" />
      <rect x="24" y="30" width="14" height="20" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <rect x="82" y="30" width="14" height="20" rx="3" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <circle cx="54" cy="62" r="2" fill={accent} />
      <circle cx="60" cy="62" r="2" fill={stroke} opacity={faint} />
      <circle cx="66" cy="62" r="2" fill={stroke} opacity={faint} />
    </>
  );
}
function StatisticSketch() {
  return (
    <>
      <line x1="30" y1="26" x2="58" y2="26" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <text x="29" y="48" fontSize="20" fontWeight="700" fill={accent} fillOpacity="0.85" fontFamily="sans-serif">1.2K</text>
      <path d="M76 50 l6 -8 l5 4 l8 -12" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M95 34 l0 5 l-5 0" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
function QRCodeSketch() {
  return (
    <>
      <rect x="34" y="20" width="14" height="14" rx="2" stroke={accent} strokeWidth="1.6" />
      <rect x="72" y="20" width="14" height="14" rx="2" stroke={accent} strokeWidth="1.6" />
      <rect x="34" y="46" width="14" height="14" rx="2" stroke={accent} strokeWidth="1.6" />
      <rect x="38" y="24" width="6" height="6" fill={accent} fillOpacity="0.7" />
      <rect x="72" y="46" width="5" height="5" fill={stroke} opacity={faint} />
      <rect x="81" y="46" width="5" height="5" fill={accent} fillOpacity="0.5" />
      <rect x="72" y="55" width="5" height="5" fill={accent} fillOpacity="0.5" />
      <rect x="81" y="55" width="5" height="5" fill={stroke} opacity={faint} />
    </>
  );
}
function EmptySketch() {
  return (
    <>
      <ellipse cx="60" cy="56" rx="26" ry="5" fill={stroke} opacity={0.14} />
      <rect x="40" y="28" width="40" height="24" rx="4" stroke={accent} strokeWidth="1.4" strokeDasharray="4 3" fill={accent} fillOpacity="0.06" />
      <line x1="48" y1="40" x2="72" y2="40" stroke={stroke} strokeWidth="1.2" opacity={faint} strokeLinecap="round" />
    </>
  );
}
function DescriptionsSketch() {
  return (
    <>
      <rect x="22" y="22" width="76" height="36" rx="4" stroke={stroke} strokeWidth="1.2" opacity={faint} />
      <line x1="56" y1="22" x2="56" y2="58" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="22" y1="34" x2="98" y2="34" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="22" y1="46" x2="98" y2="46" stroke={stroke} strokeWidth="1" opacity={faint} />
      <line x1="28" y1="28" x2="48" y2="28" stroke={accent} strokeWidth="1.3" opacity={0.6} strokeLinecap="round" />
      <line x1="28" y1="40" x2="48" y2="40" stroke={accent} strokeWidth="1.3" opacity={0.6} strokeLinecap="round" />
      <line x1="62" y1="28" x2="90" y2="28" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
      <line x1="62" y1="40" x2="84" y2="40" stroke={stroke} strokeWidth="1.3" opacity={faint} strokeLinecap="round" />
    </>
  );
}

/* ── Misc: Loading/Spinner/FpsHistogram, Iconify, LoginButton ── */
function LoadingSketch() {
  return (
    <>
      <circle cx="60" cy="40" r="16" stroke={stroke} strokeWidth="2.4" opacity={0.2} />
      <path d="M60 24 a16 16 0 0 1 16 16" stroke={accent} strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </>
  );
}
function FpsHistogramSketch() {
  const bars = [14, 22, 12, 28, 18, 24, 10, 20];
  return (
    <>
      {bars.map((h, i) => (
        <rect key={i} x={26 + i * 9} y={58 - h} width="6" height={h} rx="1.5" fill={accent} fillOpacity={i % 2 ? 0.3 : 0.55} stroke={accent} strokeWidth="0.8" />
      ))}
      <line x1="24" y1="58" x2="98" y2="58" stroke={stroke} strokeWidth="1.2" opacity={faint} />
    </>
  );
}
function IconifySketch() {
  return (
    <>
      <circle cx="60" cy="40" r="20" stroke={accent} strokeWidth="1.5" fill={accent} fillOpacity="0.08" />
      <circle cx="53" cy="36" r="2.4" fill={accent} />
      <circle cx="67" cy="36" r="2.4" fill={accent} />
      <path d="M51 47 a10 8 0 0 0 18 0" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  );
}
function LoginButtonSketch() {
  return (
    <>
      <rect x="22" y="30" width="56" height="18" rx="5" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.4" />
      <line x1="30" y1="39" x2="58" y2="39" stroke={accent} strokeWidth="1.4" opacity={0.6} strokeLinecap="round" />
      <path d="M82 33 l8 6 l-8 6 M74 39 l14 0" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

const SKETCHES = {
  // Botones
  Button: ButtonSketch, ButtonIconify: ButtonSketch, FloatButton: FloatButtonSketch, Fab: FloatButtonSketch, Link: LinkSketch,
  // Superficie
  Card: CardSketch, Box: BoxSketch, Container: ContainerSketch,
  // Layout grid
  GridLayout: GridSketch, BlockLayout: GridSketch, Masonry: MasonrySketch, ImageList: ImageListSketch, GridResponsiveForm: GridSketch,
  // Layout flex
  FlexLayout: FlexSketch, Stack: StackSketch, Space: SpaceSketch, FlexOptions: FlexSketch,
  // App shell
  AppLayout: AppShellSketch, SidePanel: AppShellSketch,
  // Splitter / Divider
  Splitter: SplitterSketch, Divider: DividerSketch, Separator: DividerSketch,
  // Toggles
  Switch: SwitchSketch, LabeledSwitch: SwitchSketch, ToggleButton: ToggleButtonSketch, CheckboxChip: CheckboxChipSketch, CheckboxIcon: CheckRadioSketch,
  // Check / Radio
  Checkbox: CheckRadioSketch, Radio: CheckRadioSketch,
  // Inputs
  Input: InputSketch, TextField: InputSketch, InputNumber: InputNumberSketch, Mentions: InputSketch, AutoComplete: InputSketch,
  // Selects
  Select: SelectSketch, Cascader: SelectSketch, TreeSelect: SelectSketch,
  // Fecha / hora
  DatePicker: CalendarSketch, Calendar: CalendarSketch, TimePicker: TimeSketch,
  // ColorPicker / Slider / Rate / Upload / Transfer / Form
  ColorPicker: ColorPickerSketch, Slider: SliderSketch, Rate: RateSketch, Rating: RateSketch,
  Upload: UploadSketch, Transfer: TransferSketch, TransferBoard: TransferSketch, Form: FormSketch,
  // Texto
  Text: TextSketch, Headings: HeadingsSketch, CodeBlock: CodeBlockSketch,
  // Nav
  Tabs: TabsSketch, Segmented: TabsSketch, Menu: MenuSketch, Dropdown: MenuSketch,
  Breadcrumb: BreadcrumbSketch, Anchor: BreadcrumbSketch, Pagination: PaginationSketch,
  Steps: StepsSketch, Stepper: StepsSketch, BottomNavigation: BottomNavSketch, SpeedDial: SpeedDialSketch,
  // Overlays
  Drawer: DrawerSketch, ActionDrawer: DrawerSketch, InvokedFloater: DrawerSketch, FloatingComponent: DrawerSketch,
  Modal: ModalSketch, Dialog: ModalSketch, Alert: AlertSketch, Toaster: AlertSketch, TipInfo: AlertSketch,
  Tooltip: TooltipSketch, Tour: TourSketch,
  // Display
  Badge: BadgeSketch, Tag: BadgeSketch, Chip: BadgeSketch, Avatar: AvatarSketch, Table: TableSketch, DataGrid: DataGridSketch,
  List: ListSketch, Descriptions: DescriptionsSketch, Tree: TreeSketch, Timeline: TimelineSketch,
  Accordion: AccordionSketch, Collapse: AccordionSketch, Carousel: CarouselSketch, Statistic: StatisticSketch,
  QRCode: QRCodeSketch, Empty: EmptySketch,
  // Misc
  Loading: LoadingSketch, Spinner: LoadingSketch, FpsHistogram: FpsHistogramSketch, Iconify: IconifySketch, LoginButton: LoginButtonSketch,
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
              <Input
                className="catalog-search"
                type="search"
                placeholder="Buscar componente…"
                aria-label="Buscar componente"
                value={query}
                onChange={(v) => setQuery(v)}
                allowClear
                prefix={<Icon icon="mdi:magnify" className="catalog-search__icon" />}
              />
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
