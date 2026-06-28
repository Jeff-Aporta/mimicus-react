// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * previewBuiltins — devkit
 * llm:  ./previewBuiltins.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/previewBuiltins.tsx
 * Previews React "builtin" por componente (mapa previewBuiltins) usados por el renderer del playground.
 */
import { useEffect, useMemo, useState } from "react";
import {
  AppLayout, AppLayoutProvider, Card, CodeBlock, BlockLayout, Divider, FlexLayout, GridLayout, Splitter, resolveColor,
  Anchor, Breadcrumbs, Dropdown, Menu, Tabs, TabItem, Pagination, Steps, Step, Drawer, BottomNavigation, BottomNavigationAction, NavLink, SpeedDial, SpeedDialAction, Button,
  Form, FormItem, Input, TextField, TextArea, InputNumber, Checkbox, CheckboxIcon, CheckboxChip,
  Switch, LabeledSwitch, Radio, RadioGroup, Slider, Rate, Rating, Select, AutoComplete,
  ToggleButton, ToggleButtonGroup, Transfer, TransferBoard, Upload, ColorPicker, DatePicker, TimePicker, Cascader, TreeSelect, Mentions,
  Badge, Tag, Avatar, AvatarGroup, Carousel, Collapse, CollapsePanel, Descriptions, DescriptionsItem, Empty, QRCode, Segmented, Statistic, Table, Timeline, TimelineItem, Tooltip, Tour, Tree, Calendar, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,
  LoginButton, ContapymeSessionProvider, createDemoSession, SidePanel, SidePanelSection, DataGrid,
  Dialog, Modal, ActionDrawer, Loading, Toaster, toastSuccess, toastError, toastLoading, Alert, TipInfo, InvokedFloater, FloatingComponent,
} from "../../_ui.ts";
import { Icon } from "../../../components/Icon.tsx";
import {
  CARD_INLINE_FLOW_AFTER, CARD_INLINE_FLOW_BEFORE, CARD_INLINE_SAMPLE_TEXT, CARD_PREVIEW_SAMPLE_TEXT,
  LAYOUT_PREVIEW_EMOJIS, mergeStyleString, packCardRelieve, parseStyleString,
} from "../playgroundKit.ts";
import { resolveComponent } from "./componentRegistry.tsx";

export function stateForPreview(state) {
  const out = {};
  for (const [k, v] of Object.entries(state ?? {})) {
    if (v === null || v === undefined || v === "") continue;
    out[k] = v;
  }
  return out;
}

const LAYOUT_BP_NARROW = 768;

function useNarrowViewport() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW - 1}px)`);
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return narrow;
}

function LayoutAppPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const variant = state.variant === "top-side-2" ? "top-side-2" : "side";
  const narrow = useNarrowViewport();
  const [siderCollapsed, setSiderCollapsed] = useState(Boolean(state.siderCollapsed));
  const shellStyle = parseStyleString(mergeStyleString("width:100%;min-height:clamp(14rem,45vh,20rem);height:clamp(14rem,45vh,20rem);border:1px solid var(--mimicus-border, rgba(255,255,255,0.12));border-radius:0.5rem;overflow:hidden", demoStyle));
  const siderWidth = Math.round(Number(state.siderWidth)) || 200;
  return (
    <div className={["layout-app-preview", narrow && "layout-app-preview--drawer"].filter(Boolean).join(" ")} key={previewKey}>
      <AppLayoutProvider defaultSiderWidth={`${siderWidth}px`}>
        <AppLayout variant={variant} fixedHeader={Boolean(state.fixedHeader)} fixedSider={Boolean(state.fixedSider)} responsive responsiveDrawer={narrow} style={shellStyle} className={demoClass}>
          <AppLayout.Header>
            <AppLayout.Header.Brand><span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>{String(details.brandLabel ?? "Brand")}</span></AppLayout.Header.Brand>
            <AppLayout.Header.Center><span>{String(details.headerLabel ?? "Header")}</span></AppLayout.Header.Center>
            <AppLayout.Header.Tools><span style={{ fontSize: "0.75rem", opacity: 0.85 }}>{String(details.toolsLabel ?? "Tools")}</span></AppLayout.Header.Tools>
          </AppLayout.Header>
          {!narrow && <AppLayout.Sider collapsed={siderCollapsed} collapsible={Boolean(state.siderCollapsible)} width={siderWidth} theme={state.siderTheme === "light" ? "light" : "dark"} onCollapse={setSiderCollapsed}><span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{String(details.siderLabel ?? "Sider")}</span></AppLayout.Sider>}
          <div className="pg-shell-main" style={{ padding: "0.75rem", flex: "1 1 auto", minHeight: 0, overflow: "auto" }}>{String(details.contentLabel ?? "Content")}</div>
          <AppLayout.Footer>{String(details.footerLabel ?? "Footer")}</AppLayout.Footer>
        </AppLayout>
      </AppLayoutProvider>
    </div>
  );
}

function CardPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const inline = Boolean(state.inline);
  const relievePacked = packCardRelieve(details);
  const cardPreviewVariant = ["solid", "flat", "glass"].includes(state.variant) ? state.variant : undefined;
  const cardStyle = parseStyleString(inline ? mergeStyleString("width: fit-content; max-width: min(14rem, 100%); margin: 0 0.2rem; vertical-align: middle; padding: 0.35rem 0.55rem", demoStyle) : mergeStyleString("min-width: min(320px, 100%); max-width: 100%; margin: 0.75rem 0", demoStyle));
  if (inline) {
    return (
      <div className="card-inline-demo card-inline-demo--inline" key={previewKey}>
        <p className="card-inline-flow">{CARD_INLINE_FLOW_BEFORE}<Card inline relieve={relievePacked} variant={cardPreviewVariant} style={cardStyle} className={demoClass}><span style={{ fontSize: "0.85rem", lineHeight: 1.35, whiteSpace: "nowrap" }}>{CARD_INLINE_SAMPLE_TEXT}</span></Card>{CARD_INLINE_FLOW_AFTER}</p>
      </div>
    );
  }
  return (
    <div className="card-inline-demo" key={previewKey}>
      <p className="card-block-lead">En modo bloque, la tarjeta interrumpe el párrafo y ocupa el ancho disponible.</p>
      <Card relieve={relievePacked} variant={cardPreviewVariant} style={cardStyle} className={demoClass}>
        <div style={{ display: "flex", gap: "0.65rem", width: "100%" }}><Icon icon="mdi:text-box-outline" style={{ fontSize: "1.25rem", flexShrink: 0, opacity: 0.88 }} /><span style={{ fontSize: "0.9rem", lineHeight: 1.45 }}>{CARD_PREVIEW_SAMPLE_TEXT}</span></div>
      </Card>
    </div>
  );
}

function DividerPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const orientation = state.orientation === "vertical" ? "vertical" : "horizontal";
  const variant = ["dashed", "dotted", "glow"].includes(String(state.variant)) ? state.variant : "solid";
  const dividerProps = { orientation, variant, titlePlacement: state.titlePlacement ?? "center", plain: Boolean(state.plain), dashed: Boolean(state.dashed), orientationMargin: String(details.orientationMargin ?? "").trim() || undefined };
  const shellStyle = mergeStyleString(`border: ${resolveColor("border")} 1px solid; border-radius: 0.5rem; padding: 0.75rem; box-sizing: border-box`, demoStyle);
  const showTitle = Boolean(details.showTitle) && String(details.title ?? "").trim();
  return (
    <BlockLayout key={previewKey}>
      {orientation === "vertical" ? (
        <FlexLayout items="center" gap="0.35rem" wrap style={parseStyleString(shellStyle)} className={demoClass}>
          <span style={{ color: resolveColor("primary") }}>Inicio</span><Divider {...dividerProps} /><span>Catálogo</span>
          <Divider {...dividerProps} variant={variant === "solid" ? "dotted" : variant} /><span>Layouts</span><Divider {...dividerProps} />
          <Card variant="flat" inline style={{ border: `1px solid ${resolveColor("neutral")}` }}>Demo</Card>
        </FlexLayout>
      ) : (
        <FlexLayout direction="column" gap="0.35rem" style={parseStyleString(shellStyle)} className={demoClass}>
          <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>Bloque superior con contenido de ejemplo antes del separador.</span>
          <Divider {...dividerProps}>{showTitle ? String(details.title) : null}</Divider>
          <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>Bloque inferior: el divider respeta size, variant y titlePlacement.</span>
          <Divider {...dividerProps} />
          <Card variant="flat" style={{ border: `1px solid ${resolveColor("neutral")}`, padding: "0.5rem" }}>Contenido tras línea simple</Card>
        </FlexLayout>
      )}
    </BlockLayout>
  );
}

function SplitterPreview({ state, demoConfig, previewKey, demoStyle, demoClass }) {
  const inline = Boolean(state.inline);
  const direction = state.direction === "vertical" ? "vertical" : "horizontal";
  const panelCount = Math.round(Number(demoConfig?.panelItemCount)) || 2;
  const mainCount = Math.round(Number(demoConfig?.mainItemCount)) || 4;
  const shellStyle = mergeStyleString(inline ? "width: fit-content; max-width: 100%; height: clamp(10rem, 32vh, 16rem)" : "width: 100%; min-height: clamp(12rem, 36vh, 18rem)", demoStyle);
  const Pane = ({ title, count, cells, offset = 0 }) => (
    <div style={{ padding: "0.5rem", height: "100%", boxSizing: "border-box" }}>
      <div style={{ fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.35rem", opacity: 0.85 }}>{title}</div>
      <GridLayout cells={String(cells)} gap="0.35rem">
        {Array.from({ length: count }, (_, i) => <Card key={i} variant="flat" inline style={{ padding: "0.35rem", textAlign: "center", minHeight: "2rem" }}>{LAYOUT_PREVIEW_EMOJIS[(i + offset) % LAYOUT_PREVIEW_EMOJIS.length]}</Card>)}
      </GridLayout>
    </div>
  );
  const Surround = inline ? "span" : "div";
  return (
    <Surround className={inline ? "layout-inline-demo layout-inline-demo--inline" : "layout-inline-demo"} key={previewKey}>
      <Splitter inline={inline} direction={direction} panelSize={Math.round(Number(state.panelSize)) || 240} minSize={Math.round(Number(state.minSize)) || 160} maxSize={Math.round(Number(state.maxSize)) || 480} responsive={false} className={demoClass} style={parseStyleString(shellStyle)} panel={<Pane title="Panel" count={panelCount} cells={demoConfig?.panelCells ?? 1} />}>
        <Pane title="Contenido" count={mainCount} cells={demoConfig?.mainCells ?? 2} offset={panelCount} />
      </Splitter>
    </Surround>
  );
}

const SCROLL_ID = "mimicus-anchor-scroll";

function AnchorPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const n = Math.min(8, Math.max(2, Math.round(Number(details.sectionCount)) || 5));
  const direction = state.direction === "horizontal" ? "horizontal" : "vertical";
  const containerSel = `#${SCROLL_ID}`;
  const links = Array.from({ length: n }, (_, i) => ({ href: `#sec-${i + 1}`, title: `Sección ${i + 1}` }));
  return (
    <div key={previewKey} className={["mimicus-anchor-demo", direction === "horizontal" && "mimicus-anchor-demo--horizontal", "mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Anchor direction={direction} affix={Boolean(state.affix)} targetOffset={Math.round(Number(state.targetOffset)) || 0} bounds={Math.round(Number(state.bounds)) || 5} container={containerSel} items={links} />
      <div id={SCROLL_ID} data-mimicus-anchor-container className="mimicus-anchor-demo__scroll">
        {links.map((l, i) => (
          <section key={l.href} id={l.href.slice(1)} className="mimicus-anchor-demo__section">
            <strong>{l.title}</strong>
            <p style={{ margin: "0.35rem 0 0", fontSize: "0.85rem", opacity: 0.85 }}>Contenido de ejemplo para scroll {state.affix ? "con scroll spy" : "estático"}.</p>
          </section>
        ))}
      </div>
    </div>
  );
}

function TabsPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const count = Math.min(5, Math.max(2, Math.round(Number(details.tabCount)) || 3));
  const items = Array.from({ length: count }, (_, i) => ({ key: `t${i + 1}`, label: `Tab ${i + 1}`, content: <Card variant="flat" style={{ padding: "0.65rem" }}>Panel {i + 1}</Card> }));
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Tabs type={state.type === "card" ? "card" : "line"} tabPosition={state.tabPosition ?? "top"} defaultActiveKey={items[0].key} items={items} />
    </div>
  );
}

function BreadcrumbsPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const items = [{ label: "Inicio", href: "#" }, { label: "Catálogo", href: "#" }, { label: String(details.currentLabel ?? "Componente") }];
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Breadcrumbs separator={state.separator ?? "/"} maxItems={state.maxItems ? Math.round(Number(state.maxItems)) : undefined} items={items} />
    </div>
  );
}

function DropdownPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Dropdown placement={state.placement ?? "bottomLeft"} trigger={<Button variant="solid">Menú ▾</Button>} menu={(
        <Menu>
          <Menu.Item itemKey="1">Perfil</Menu.Item>
          <Menu.Item itemKey="2">Ajustes</Menu.Item>
          <Menu.Divider />
          <Menu.Item itemKey="3">Salir</Menu.Item>
        </Menu>
      )} />
    </div>
  );
}

function MenuPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Menu mode={state.mode === "horizontal" ? "horizontal" : "vertical"} selectable>
        <Menu.Item itemKey="home">Inicio</Menu.Item>
        <Menu.Item itemKey="docs">Documentación</Menu.Item>
        <Menu.Divider />
        <Menu.Item itemKey="about">Acerca de</Menu.Item>
      </Menu>
    </div>
  );
}

function PaginationPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Pagination count={Math.round(Number(state.count)) || 10} defaultPage={Math.round(Number(state.defaultPage)) || 1} siblingCount={Math.round(Number(state.siblingCount)) || 1} />
    </div>
  );
}

function StepsPreview({ state, previewKey, demoStyle, demoClass }) {
  const current = Math.max(0, Math.round(Number(state.current)) || 1);
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Steps current={current} direction={state.direction === "vertical" ? "vertical" : "horizontal"} clickable={Boolean(state.clickable)} items={[
        { title: "Inicio", description: "Datos básicos" },
        { title: "Proceso", description: "Validación" },
        { title: "Fin", description: "Confirmación" },
      ]} />
    </div>
  );
}

function DrawerPreview({ state, previewKey, demoStyle, demoClass }) {
  const [open, setOpen] = useState(Boolean(state.defaultOpen));
  useEffect(() => { setOpen(Boolean(state.defaultOpen)); }, [state.defaultOpen]);
  return (
    <div key={previewKey} className={["mimicus-drawer-preview", "mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Button variant="solid" onClick={() => setOpen(true)}>Abrir drawer</Button>
      <Drawer open={open} placement={state.placement ?? "left"} width={Math.round(Number(state.width)) || 280} title="Panel lateral" onClose={() => setOpen(false)}>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Contenido del drawer. Clic fuera o Escape para cerrar (controlador vanilla).</p>
      </Drawer>
    </div>
  );
}

function BottomNavPreview({ state, previewKey, demoStyle, demoClass }) {
  const icons = ["⌂", "♡", "◎", "☰"];
  const labels = ["Inicio", "Favoritos", "Cerca", "Más"];
  const n = Math.min(5, Math.max(3, Math.round(Number(state.actionCount)) || 4));
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <BottomNavigation value={state.value ?? "0"} showLabels={state.showLabels !== false}>
        {Array.from({ length: n }, (_, i) => (
          <BottomNavigationAction key={i} value={String(i)} label={labels[i]} icon={<span>{icons[i]}</span>} />
        ))}
      </BottomNavigation>
    </div>
  );
}

function LinkPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <p>Ejemplo de <NavLink href="#" underline={state.underline ?? "hover"} color={state.color ?? "primary"}>enlace temático</NavLink> en un párrafo.</p>
    </div>
  );
}

function SpeedDialPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-nav-preview", demoClass].filter(Boolean).join(" ")} style={{ ...parseStyleString(demoStyle), minHeight: "10rem", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "1rem" }}>
      <SpeedDial direction={state.direction ?? "up"} ariaLabel="Acciones rápidas">
        <SpeedDialAction actionKey="copy" icon="📋" tooltip="Copiar" />
        <SpeedDialAction actionKey="save" icon="💾" tooltip="Guardar" />
        <SpeedDialAction actionKey="share" icon="↗" tooltip="Compartir" />
      </SpeedDial>
    </div>
  );
}

const DEMO_AUTOCOMPLETE = [{ value: "react", label: "React" }, { value: "svelte", label: "Svelte" }, { value: "vue", label: "Vue" }];
const DEMO_TRANSFER = [{ key: "1", title: "Item 1" }, { key: "2", title: "Item 2" }, { key: "3", title: "Item 3" }, { key: "4", title: "Item 4" }];
const DEMO_CASCADER = [{ label: "Colombia", value: "co", children: [{ label: "Bogotá", value: "bog" }, { label: "Medellín", value: "med" }] }, { label: "México", value: "mx", children: [{ label: "CDMX", value: "cdmx" }] }];
const DEMO_TREE = [{ title: "General", value: "gen", children: [{ title: "Button", value: "btn" }, { title: "Input", value: "inp" }] }, { title: "Navigation", value: "nav" }];
const CHIP_OPTIONS = [{ value: "primary", label: "Primary" }, { value: "success", label: "Success" }, { value: "warning", label: "Warning" }, { value: "danger", label: "Danger" }];

function SwitchPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Switch checked={state.checked} disabled={state.disabled} loading={state.loading}>{details.label ?? "Texto de demostración"}</Switch>
    </div>
  );
}

function CheckboxIconPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <CheckboxIcon checked={state.checked} disabled={state.disabled} loading={state.loading} variant={state.variant}
        iconChecked={<Icon icon={String(details.previewIconTrue ?? "mdi:check")} />} iconUnchecked={<Icon icon={String(details.previewIconFalse ?? "mdi:close")} />}>
        {details.previewLabel ?? "Texto de demostración"}
      </CheckboxIcon>
    </div>
  );
}

function CheckboxChipPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <CheckboxChip value={state.color ?? "primary"} options={CHIP_OPTIONS} />
    </div>
  );
}

function LabeledSwitchPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <LabeledSwitch label={state.label ?? "Publicar en catálogo"} checked={state.checked} readonly={state.readonly} />
    </div>
  );
}

function TransferBoardPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <TransferBoard stackCount={Math.round(Number(state.stackCount)) || 3} stackWidth={Math.round(Number(state.stackWidth)) || 248}
        disabled={Boolean(state.disabled)} itemsPerStack={Math.round(Number(details.itemsPerStack)) || 3} />
    </div>
  );
}

function InputPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <FormItem label="Campo de texto">
        <Input disabled={state.disabled} allowClear={Boolean(state.allowClear)} placeholder={details.placeholder ?? "Escribe aquí…"} status={state.status} />
      </FormItem>
    </div>
  );
}

function AutoCompletePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <AutoComplete options={DEMO_AUTOCOMPLETE} disabled={state.disabled} placeholder="Buscar framework…" />
    </div>
  );
}

function SelectPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Select disabled={state.disabled} placeholder="Elige una opción" options={DEMO_AUTOCOMPLETE} defaultValue="react" />
    </div>
  );
}

function SliderPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Slider defaultValue={Math.round(Number(state.defaultValue)) || 40} min={0} max={100} disabled={state.disabled} showValue />
    </div>
  );
}

function RatePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Rate defaultValue={2.5} allowHalf={Boolean(state.allowHalf)} disabled={state.disabled} />
    </div>
  );
}

function RadioPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <RadioGroup direction={state.direction ?? "horizontal"} defaultValue="a" options={[{ value: "a", label: "Opción A" }, { value: "b", label: "Opción B" }, { value: "c", label: "Opción C", disabled: state.disabled }]} />
    </div>
  );
}

function CheckboxPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Checkbox defaultChecked indeterminate={Boolean(state.indeterminate)} disabled={state.disabled}>Acepto términos</Checkbox>
    </div>
  );
}

function InputNumberPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <InputNumber defaultValue={3} min={0} max={10} step={1} disabled={state.disabled} />
    </div>
  );
}

function TransferPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Transfer dataSource={DEMO_TRANSFER} targetKeys={["2"]} disabled={state.disabled} />
    </div>
  );
}

function UploadPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Upload multiple={Boolean(state.multiple)} disabled={state.disabled} />
    </div>
  );
}

function ColorPickerPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <ColorPicker defaultValue={state.defaultValue ?? "#1677ff"} disabled={state.disabled} />
    </div>
  );
}

function DatePickerPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <DatePicker disabled={state.disabled} />
    </div>
  );
}

function TimePickerPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <TimePicker disabled={state.disabled} />
    </div>
  );
}

function CascaderPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Cascader options={DEMO_CASCADER} disabled={state.disabled} placeholder="Ciudad" />
    </div>
  );
}

function TreeSelectPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <TreeSelect treeData={DEMO_TREE} disabled={state.disabled} placeholder="Componente" />
    </div>
  );
}

function MentionsPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Mentions options={[{ value: "paty", label: "Paty" }, { value: "mimicus", label: "Mimicus" }]} disabled={state.disabled} />
    </div>
  );
}

function ToggleButtonPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <ToggleButtonGroup exclusive={state.exclusive !== false} orientation={state.orientation ?? "horizontal"} defaultValue="web">
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

function FormPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-form-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Form layout={state.layout ?? "vertical"}>
        <FormItem label="Nombre" required><Input placeholder="Tu nombre" /></FormItem>
        <FormItem label="Framework"><Select options={DEMO_AUTOCOMPLETE} defaultValue="react" /></FormItem>
        <FormItem label="Notas"><TextArea rows={2} placeholder={details.placeholder ?? "Comentarios"} /></FormItem>
        <Button variant="solid" type="submit">Enviar</Button>
      </Form>
    </div>
  );
}

const DEMO_TABLE_COLS = [{ title: "Nombre", dataIndex: "name", key: "name", sorter: true }, { title: "Edad", dataIndex: "age", key: "age", sorter: true }, { title: "Ciudad", dataIndex: "city", key: "city" }];
const DEMO_TABLE_DATA = [{ key: "1", name: "Ana", age: 28, city: "Bogotá" }, { key: "2", name: "Luis", age: 34, city: "Medellín" }, { key: "3", name: "Sofía", age: 22, city: "Cali" }];
const DEMO_DISPLAY_TREE = [{ key: "0", title: "Raíz", children: [{ key: "0-0", title: "Hijo A", children: [{ key: "0-0-0", title: "Nieto A1" }] }, { key: "0-1", title: "Hijo B" }] }];

function BadgePreview({ state, previewKey, demoStyle, demoClass }) {
  const count = Math.round(Number(state.count)) || 5;
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Badge count={state.dot ? undefined : count} dot={Boolean(state.dot)} showZero={Boolean(state.showZero)} max={Math.round(Number(state.max)) || 99} color={state.color ?? "primary"}>
        <Button variant="ghost"><Icon icon="mdi:bell-outline" /></Button>
      </Badge>
    </div>
  );
}

function TagPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Tag variant={state.variant ?? "ghost"} shape={state.shape ?? "pill"} uppercase={Boolean(state.upper)} color={state.color} icon={details.icon ? <Icon icon={String(details.icon)} /> : undefined}>{details.text ?? "Nuevo"}</Tag>
    </div>
  );
}

function AvatarPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      {state.group ? (
        <AvatarGroup max={Math.round(Number(state.max)) || 4}>
          <Avatar alt="Ana">A</Avatar><Avatar alt="Luis">L</Avatar><Avatar alt="Sofía">S</Avatar><Avatar alt="María">M</Avatar><Avatar alt="Pedro">P</Avatar>
        </AvatarGroup>
      ) : (
        <Avatar variant={state.variant ?? "circular"} alt="Remy Sharp">{state.withImage ? undefined : "RS"}</Avatar>
      )}
    </div>
  );
}

function CarouselPreview({ state, previewKey, demoStyle, demoClass }) {
  const slides = ["#1", "#2", "#3", "#4"].map((n, i) => (
    <Card key={i} variant="flat" style={{ minHeight: "7rem", display: "flex", alignItems: "center", justifyContent: "center", background: `hsl(${i * 70} 45% 35%)` }}>{n}</Card>
  ));
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("max-width: 24rem", demoStyle))}>
      <Carousel autoplay={Boolean(state.autoplay)} arrows={Boolean(state.arrows)} dots={state.dots !== false} infinite={state.infinite !== false}>{slides}</Carousel>
    </div>
  );
}

function CollapsePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("max-width: 28rem", demoStyle))}>
      <Collapse accordion={Boolean(state.accordion)} defaultActiveKey={state.accordion ? "1" : ["1"]}>
        <CollapsePanel panelKey="1" header="Panel 1" defaultOpen>Contenido del primer panel.</CollapsePanel>
        <CollapsePanel panelKey="2" header="Panel 2">Segundo panel colapsable.</CollapsePanel>
        <CollapsePanel panelKey="3" header="Panel 3">Tercer panel de ejemplo.</CollapsePanel>
      </Collapse>
    </div>
  );
}

function DescriptionsPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Descriptions title="Usuario" bordered={Boolean(state.bordered)} column={Math.round(Number(state.column)) || 3}>
        <DescriptionsItem label="Nombre">Patricia</DescriptionsItem>
        <DescriptionsItem label="Teléfono">+57 300 000 0000</DescriptionsItem>
        <DescriptionsItem label="Ciudad">Bogotá</DescriptionsItem>
        <DescriptionsItem label="Rol" span={2}>Administrador</DescriptionsItem>
      </Descriptions>
    </div>
  );
}

function EmptyPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Empty description={state.description ?? "No data"} image={state.image ?? "default"}>{state.showAction && <Button variant="solid">Crear</Button>}</Empty>
    </div>
  );
}

function QRCodePreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <QRCode value={details.value ?? "https://mimicus.dev"} size={Math.round(Number(state.size)) || 128} bordered={state.bordered !== false} />
    </div>
  );
}

function SegmentedPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Segmented block={Boolean(state.block)} defaultValue="list" options={[{ value: "list", label: "Lista" }, { value: "kanban", label: "Kanban" }, { value: "grid", label: "Grid" }]} />
    </div>
  );
}

function StatisticPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Statistic title={state.title ?? "Balance"} value={state.value ?? 112893} prefix={state.prefix ?? "$"} precision={state.precision != null ? Math.round(Number(state.precision)) : undefined} suffix={state.suffix} />
    </div>
  );
}

function TablePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Table columns={DEMO_TABLE_COLS} dataSource={DEMO_TABLE_DATA} bordered={Boolean(state.bordered)} sortable={Boolean(state.sortable)} />
    </div>
  );
}

function TimelinePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Timeline mode={state.mode ?? "left"} pending={state.pending ? "Cargando…" : undefined}>
        <TimelineItem label="2024-01" color="success">Cuenta creada</TimelineItem>
        <TimelineItem label="2024-03">Primer login</TimelineItem>
        <TimelineItem label="2024-06" color="error">Intento fallido</TimelineItem>
      </Timeline>
    </div>
  );
}

function TooltipPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("padding: 1.5rem", demoStyle))}>
      <Tooltip title={state.title ?? "Texto de ayuda"} placement={state.placement ?? "top"} arrow={Boolean(state.arrow)}>
        <Button variant="solid">Hover me</Button>
      </Tooltip>
    </div>
  );
}

function TourPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview mimicus-tour-demo", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("min-height: 12rem", demoStyle))}>
      <Button variant="ghost" data-tour-a id="tour-a">Paso 1</Button>
      <Button variant="ghost" data-tour-b id="tour-b">Paso 2</Button>
      <Tour open={Boolean(state.open)} steps={[{ target: "#tour-a", title: "Bienvenida", description: "Primer paso del tour." }, { target: "#tour-b", title: "Siguiente", description: "Segundo objetivo." }]} />
    </div>
  );
}

function TreePreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Tree treeData={DEMO_DISPLAY_TREE} checkable={Boolean(state.checkable)} defaultExpandAll={state.defaultExpandAll !== false} />
    </div>
  );
}

function CalendarPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Calendar fullscreen={Boolean(state.fullscreen)} />
    </div>
  );
}

function ListPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("max-width: 22rem", demoStyle))}>
      <List dense={Boolean(state.dense)} subheader={state.subheader ? "Carpetas" : undefined}>
        <ListItem button><ListItemAvatar><Avatar alt="F">F</Avatar></ListItemAvatar><ListItemText primary="Fotos" secondary="Ene 9, 2024" /></ListItem>
        <ListItem button><ListItemAvatar><Avatar alt="W">W</Avatar></ListItemAvatar><ListItemText primary="Trabajo" secondary="Ene 7, 2024" /></ListItem>
        <ListItem button secondaryAction={<Icon icon="mdi:chevron-right" />}><ListItemText primary="Vacaciones" secondary="Jul 20, 2024" /></ListItem>
      </List>
    </div>
  );
}

function CodeBlockPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <CodeBlock value={state.code ?? details.code ?? ""} readOnly minHeight={state.minHeight ?? "7rem"} maxHeight="18rem" lang="jsx" lineWrapping />
    </div>
  );
}

function SidePanelPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const [open, setOpen] = useState(state.open !== false);
  const drawer = Boolean(state.drawer);
  useEffect(() => { setOpen(state.open !== false); }, [state.open]);
  const sectionCount = Math.min(6, Math.max(1, Math.round(Number(details.sectionCount)) || 3));
  const colors = ["primary", "info", "success", "warning", "error", "danger"];
  const sections = Array.from({ length: sectionCount }, (_, i) => ({
    id: `sec-${i}`,
    icon: ["mdi:gesture-tap-button", "mdi:view-grid-outline", "mdi:compass-outline", "mdi:form-select", "mdi:card-text-outline", "mdi:message-alert-outline"][i % 6],
    label: ["General", "Layout", "Navigation", "Data Entry", "Data Display", "Feedback"][i % 6],
    color: colors[i % colors.length],
    count: 4 + i,
  }));
  const railView = (
    <SidePanel.View mode="rail" gap="0.35rem">
      {sections.map((s) => (
        <Button key={s.id} variant="text" shape="rect" color={s.color} className="pg-panel-rail__btn" title={s.label} style={{ width: "100%", justifyContent: "center", minHeight: "2.35rem", paddingInline: "0.25rem" }}>
          <Icon icon={s.icon} style={{ fontSize: "1.2rem" }} />
        </Button>
      ))}
    </SidePanel.View>
  );
  const expandedView = (
    <SidePanel.View mode="expanded" gap="0.25rem">
      {sections.map((s, i) => (
        <SidePanelSection key={s.id} icon={s.icon} label={s.label} color={s.color} open={i === 0} count={s.count} onToggle={() => {}} onHeaderClick={() => {}}>
          {Array.from({ length: 2 }, (_, j) => (
            <Button key={j} variant="text" shape="rect" color={s.color} style={{ justifyContent: "flex-start", fontSize: "0.85rem", width: "100%" }}>
              <Icon icon="mdi:file-document-outline" /><span className="sm-item-text">Demo {j + 1}</span>
            </Button>
          ))}
        </SidePanelSection>
      ))}
    </SidePanel.View>
  );
  const shellStyle = parseStyleString(mergeStyleString("width:100%;height:clamp(14rem,42vh,18rem);border:1px solid var(--mimicus-b-color);border-radius:var(--mimicus-ui-radius,0.5rem);overflow:hidden;display:flex", demoStyle));
  return (
    <div key={previewKey} className={["layout-side-panel-preview", demoClass].filter(Boolean).join(" ")} style={shellStyle}>
      <SidePanel open={open} drawer={drawer} onToggle={drawer ? undefined : () => setOpen((v) => !v)} onClose={drawer ? () => {} : undefined} collapsedView={railView} expandedView={expandedView} style={{ flex: "1 1 auto", minHeight: 0 }} />
    </div>
  );
}

function LoginButtonPreview({ previewKey, demoStyle, demoClass }) {
  const session = useMemo(() => createDemoSession(), []);
  return (
    <ContapymeSessionProvider session={session}>
      <div key={previewKey} className={["mimicus-login-button-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("width:100%;padding:0.65rem 0.75rem;border:1px solid var(--mimicus-b-color);border-radius:var(--mimicus-ui-radius,0.5rem);background:color-mix(in srgb,var(--mimicus-bg-secondary),transparent 8%)", demoStyle))}>
        <FlexLayout items="center" justify="flex-end" gap="0.5rem">
          <LoginButton showPasswordToggle showRemember />
        </FlexLayout>
      </div>
    </ContapymeSessionProvider>
  );
}

const DG_CATS = ["Papelería", "Tecnología", "Aseo", "Cafetería", "Mobiliario", "Empaques"];
const DG_REGS = ["Andina", "Caribe", "Pacífica", "Orinoquía"];
const DG_PRODS = ["Resma carta", "Tóner láser", "Jabón líquido", "Café molido", "Silla ergonómica", "Caja kraft", "Marcador", "Disco SSD", "Servilletas", "Escritorio"];
function buildDataGridRows(n) {
  const rows = [];
  for (let i = 0; i < n; i++) {
    const cant = ((i * 7) % 120) + 1;
    const precio = 1500 + ((i * 13) % 90) * 950;
    const dia = ((i * 3) % 27) + 1;
    rows.push({
      id: i + 1,
      producto: `${DG_PRODS[i % DG_PRODS.length]} ${100 + i}`,
      categoria: DG_CATS[i % DG_CATS.length],
      region: DG_REGS[i % DG_REGS.length],
      cantidad: cant,
      precio,
      total: cant * precio,
      activo: i % 3 !== 0,
      fecha: `2026-${String((i % 12) + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`,
    });
  }
  return rows;
}
const DG_COLUMNS = [
  { field: "id", headerName: "#", type: "number", width: 70, pinned: "left", filter: true, enableRowGroup: false },
  { field: "producto", headerName: "Producto", flex: 2, minWidth: 180, filter: true },
  { field: "categoria", headerName: "Categoría", filter: "set", width: 140 },
  { field: "region", headerName: "Región", filter: "set", width: 120 },
  { field: "cantidad", headerName: "Cantidad", type: "number", filter: true, width: 110, aggFunc: "sum" },
  { field: "precio", headerName: "Precio", type: "number", filter: true, width: 130, aggFunc: "avg", valueFormatter: (v) => `$ ${Math.round(Number(v)).toLocaleString("es-CO")}` },
  { field: "total", headerName: "Total", type: "number", filter: true, width: 150, aggFunc: "sum", valueFormatter: (v) => `$ ${Math.round(Number(v)).toLocaleString("es-CO")}` },
  { field: "activo", headerName: "Activo", type: "boolean", cellRenderer: "boolean", width: 90, align: "center" },
  { field: "fecha", headerName: "Fecha", type: "date", filter: "date", width: 130 },
];

function DataGridPreview({ state, previewKey, demoStyle, demoClass }) {
  const rowCount = Math.max(0, Math.round(Number(state.rowCount)) || 1000);
  const rows = useMemo(() => buildDataGridRows(rowCount), [rowCount]);
  const rowGroupCols = useMemo(() => (state.groupBy ? [state.groupBy] : []), [state.groupBy]);
  return (
    <div key={previewKey} className={["mimicus-display-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("width:100%", demoStyle))}>
      <DataGrid
        columns={DG_COLUMNS}
        rows={rows}
        getRowId={(r) => String(r.id)}
        selectionMode={state.selectionMode ?? "multiple"}
        pagination={Boolean(state.pagination)}
        pageSize={Math.round(Number(state.pageSize)) || 50}
        density={state.density ?? "normal"}
        toolbar={state.toolbar !== false}
        rowGroupPanel={state.rowGroupPanel !== false}
        rowGroupCols={rowGroupCols}
        height={Math.round(Number(state.height)) || 460}
      />
    </div>
  );
}

function overlayScopeProps(scope) {
  return { _scope: scope === "local" ? "local" : "global" };
}

function ModalPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const scope = state._scope ?? "global";
  const localShell = scope === "local";
  useEffect(() => {
    if (!open || !details.bSimularLoading) { setLoading(false); return undefined; }
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 5000);
    return () => window.clearTimeout(t);
  }, [open, details.bSimularLoading]);
  const title = details.bTituloPorSlot !== false && (details.titulo || details.icono) ? (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
      {details.icono && <Icon icon={String(details.icono)} />}
      {details.titulo ?? "Modal"}
    </span>
  ) : undefined;
  const body = (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        open={open}
        loading={loading}
        variant={state.variant ?? "solid"}
        showCloseHeader={state.showCloseHeader !== false}
        title={title}
        onClose={() => setOpen(false)}
        {...overlayScopeProps(scope)}
      >
        <p style={{ margin: 0, maxWidth: "22rem" }}>Contenido del modal. Clic fuera o Escape para cerrar (salvo <code>notClose</code>).</p>
      </Modal>
    </>
  );
  return localShell ? (
    <div key={previewKey} className={["mimicus-overlay-preview--local", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  ) : (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  );
}

function DialogPreview({ state, previewKey, demoStyle, demoClass, details }) {
  const [open, setOpen] = useState(false);
  const scope = state._scope ?? "global";
  const localShell = scope === "local";
  const body = (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>Abrir dialog</Button>
      <Dialog open={open} notClose={Boolean(state.notClose)} backeffect={state.backeffect ?? "blur"} onClose={() => setOpen(false)} {...overlayScopeProps(scope)} className="mimicus-dialog-demo">
        <Card variant="flat" className="blockCloseClick" style={{ padding: "1rem", minWidth: "16rem" }}>
          <strong style={{ display: "block", marginBottom: "0.35rem" }}>{details.titulo ?? "Dialog demo"}</strong>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>Diálogo nativo <code>&lt;dialog&gt;</code> con backdrop configurable.</p>
        </Card>
      </Dialog>
    </>
  );
  return localShell ? (
    <div key={previewKey} className={["mimicus-overlay-preview--local", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  ) : (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  );
}

function ActionDrawerPreview({ state, details, previewKey, demoStyle, demoClass }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const scope = state._scope ?? "global";
  const side = state.side ?? "right";
  useEffect(() => {
    if (!open || !details.bSimularLoading) { setLoading(false); return undefined; }
    setLoading(true);
    const t = window.setTimeout(() => setLoading(false), 5000);
    return () => window.clearTimeout(t);
  }, [open, details.bSimularLoading]);
  const body = (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>Abrir action drawer</Button>
      <ActionDrawer open={open} loading={loading} side={side} onClose={() => setOpen(false)} {...overlayScopeProps(scope)}>
        <strong style={{ display: "block", marginBottom: "0.35rem" }}>Acciones secundarias</strong>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Panel deslizante desde <code>{side}</code>.</p>
      </ActionDrawer>
    </>
  );
  return scope === "local" ? (
    <div key={previewKey} className={["mimicus-overlay-preview--local", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  ) : (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>{body}</div>
  );
}

function LoadingPreview({ state, previewKey, demoStyle, demoClass, demoConfig }) {
  const [open, setOpen] = useState(false);
  const autoCloseSec = Number(demoConfig?.autoCloseSec) || 3;
  useEffect(() => {
    if (!open) return undefined;
    const t = window.setTimeout(() => setOpen(false), autoCloseSec * 1000);
    return () => window.clearTimeout(t);
  }, [open, autoCloseSec]);
  return (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Button variant="solid" onClick={() => setOpen(true)}>Mostrar loading</Button>
      <Loading open={open} color={state.color} onClose={() => setOpen(false)} />
    </div>
  );
}

function ToasterPreview({ previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("flex-direction: column; gap: 0.5rem", demoStyle))}>
      <Toaster />
      <Button variant="solid" color="success" onClick={() => toastSuccess("Operación completada")}>toastSuccess</Button>
      <Button variant="solid" color="error" onClick={() => toastError("Ha ocurrido un error")}>toastError</Button>
      <Button variant="outlined" onClick={() => { const id = toastLoading("Procesando…"); window.setTimeout(() => toastRemove(id), 2500); }}>toastLoading</Button>
    </div>
  );
}

function AlertPreview({ state, details, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <Alert color={state.color ?? "info"} title={state.title} inline={Boolean(state.inline)} style={{ width: state.inline ? undefined : "100%", maxWidth: "28rem" }}>
        {details.body ?? "Texto descriptivo del alert."}
      </Alert>
    </div>
  );
}

function TipInfoPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <TipInfo label={state.label} descripcion={state.descripcion} kind={state.kind ?? "info"} trigger={state.trigger ?? "click"} useModal={Boolean(state.useModal)} />
    </div>
  );
}

function InvokedFloaterPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-overlay-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(demoStyle)}>
      <InvokedFloater anchorLabel={state.anchorLabel} panelText={state.panelText} side={state.side ?? "bottom"} align={state.align ?? "center"} trigger={state.trigger ?? "click"} />
    </div>
  );
}

function FloatingComponentPreview({ state, previewKey, demoStyle, demoClass }) {
  return (
    <div key={previewKey} className={["mimicus-floating-component-preview", demoClass].filter(Boolean).join(" ")} style={parseStyleString(mergeStyleString("width: 100%", demoStyle))}>
      <FloatingComponent showfloat={Boolean(state.showfloat)} rowText={state.rowText} horizontal={state.horizontal ?? "right"} vertical={state.vertical ?? "center"} />
    </div>
  );
}

export const previewBuiltins = {
  card: CardPreview,
  datagrid: DataGridPreview,
  "layout-app": LayoutAppPreview,
  "layout-side-panel": SidePanelPreview,
  "layout-divider": DividerPreview,
  "layout-splitter": SplitterPreview,
  "nav-anchor": AnchorPreview,
  "nav-tabs": TabsPreview,
  "nav-breadcrumbs": BreadcrumbsPreview,
  "nav-dropdown": DropdownPreview,
  "nav-menu": MenuPreview,
  "nav-pagination": PaginationPreview,
  "nav-steps": StepsPreview,
  "nav-drawer": DrawerPreview,
  "nav-bottom-nav": BottomNavPreview,
  "nav-link": LinkPreview,
  "nav-speed-dial": SpeedDialPreview,
  switch: SwitchPreview,
  "checkbox-icon": CheckboxIconPreview,
  "checkbox-chip": CheckboxChipPreview,
  "cmp-labeled-switch": LabeledSwitchPreview,
  "cmp-transfer-board": TransferBoardPreview,
  "form-input": InputPreview,
  "form-autocomplete": AutoCompletePreview,
  "form-select": SelectPreview,
  "form-slider": SliderPreview,
  "form-rate": RatePreview,
  "form-radio": RadioPreview,
  "form-checkbox": CheckboxPreview,
  "form-input-number": InputNumberPreview,
  "form-transfer": TransferPreview,
  "form-upload": UploadPreview,
  "form-color-picker": ColorPickerPreview,
  "form-date-picker": DatePickerPreview,
  "form-time-picker": TimePickerPreview,
  "form-cascader": CascaderPreview,
  "form-tree-select": TreeSelectPreview,
  "form-mentions": MentionsPreview,
  "form-toggle": ToggleButtonPreview,
  "form-form": FormPreview,
  "disp-badge": BadgePreview,
  "disp-tag": TagPreview,
  "disp-avatar": AvatarPreview,
  "disp-carousel": CarouselPreview,
  "disp-collapse": CollapsePreview,
  "disp-descriptions": DescriptionsPreview,
  "disp-empty": EmptyPreview,
  "disp-qrcode": QRCodePreview,
  "disp-segmented": SegmentedPreview,
  "disp-statistic": StatisticPreview,
  "disp-table": TablePreview,
  "disp-timeline": TimelinePreview,
  "disp-tooltip": TooltipPreview,
  "disp-tour": TourPreview,
  "disp-tree": TreePreview,
  "disp-calendar": CalendarPreview,
  "disp-list": ListPreview,
  "cmp-code-block": CodeBlockPreview,
  "contapyme-login": LoginButtonPreview,
  modal: ModalPreview,
  dialog: DialogPreview,
  "action-drawer": ActionDrawerPreview,
  loading: LoadingPreview,
  toaster: ToasterPreview,
  "cmp-alert": AlertPreview,
  "cmp-tip-info": TipInfoPreview,
  "cmp-invoked-floater": InvokedFloaterPreview,
  "cmp-floating-component": FloatingComponentPreview,
};

export function PreviewStub({ template, componentName }) {
  return (
    <div className="mimicus-preview-stub mimicus-preview-stub--template">
      <div className="mimicus-preview-stub__badge"><Icon icon="mdi:television-play" /> Vista «{template}»</div>
      <p className="mimicus-preview-stub__hint">Preview <strong>{componentName ?? template}</strong> sin plantilla JSON.</p>
    </div>
  );
}

export function buildDemoComponentProps(node, ctx) {
  const { state, details, demoStyle, demoClass, definition } = ctx;
  const props = { style: parseStyleString(demoStyle), className: demoClass };
  if (node.passState === true) Object.assign(props, stateForPreview(state));
  else if (Array.isArray(node.passState)) {
    for (const k of node.passState) if (state[k] != null && state[k] !== "") props[k] = state[k];
  }
  if (node.gapDefault && !props.gap) props.gap = node.gapDefault;
  if (node.inline != null) props.inline = node.inline;
  if (node.className) props.className = [props.className, node.className].filter(Boolean).join(" ");
  let children;
  if (node.iconFromDetails && details[node.iconFromDetails]) props.icon = <Icon icon={String(details[node.iconFromDetails])} />;
  if (node.textFromDetails) children = details[node.textFromDetails];
  if (node.childrenFromDetails) children = details[node.childrenFromDetails];
  const name = node.name ?? definition?.component?.name;
  return { Comp: resolveComponent(name), props, children, name };
}
