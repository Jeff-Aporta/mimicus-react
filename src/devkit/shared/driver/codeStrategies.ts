// @ts-nocheck — devkit interno (motor del playground); tipado estricto pendiente.
/**
 * codeStrategies — devkit
 * llm:  ./codeStrategies.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/codeStrategies.ts
 * Estrategias de generación de código JSX por componente para el panel "Ver código".
 */
import { buildTag, LAYOUT_PREVIEW_EMOJIS } from "../playgroundKit.ts";

const styleAttrs = (demoStyle, demoClass) => [
  { name: "style", value: demoStyle || null, type: "str", default: null },
  { name: "className", value: demoClass || null, type: "str", default: null },
];

const nClampGrid = (v) => Math.min(50, Math.max(3, Math.round(Number(v)) || 7));
const clampFlexItems = (n) => Math.min(50, Math.max(1, Math.round(Number(n)) || 4));

function layoutItemSnippet(emoji, useCard) {
  if (useCard) return buildTag("Card", [{ name: "variant", value: "flat", type: "str" }, { name: "inline", value: true, type: "bool" }], {}, () => emoji);
  return buildTag("div", [{ name: "style", value: "padding: 0.45rem", type: "str" }], {}, (h) => h.txt(emoji));
}

function readPaneGrid(demoConfig, pane, fallback) {
  const prefix = pane === "panel" ? "panel" : "main";
  return {
    itemCount: Math.round(Number(demoConfig?.[`${prefix}ItemCount`])) || fallback.items,
    cells: Math.round(Number(demoConfig?.[`${prefix}Cells`])) || fallback.cells,
    direction: "column",
  };
}

export function buildCodeFromStrategy(strategy, ctx, state, details, demoStyle, demoClass, demoConfig = {}) {
  const { def, collectAttrs } = ctx;
  const name = def.component.name;
  const tagOpts = def.code?.tagOpts ?? {};
  const opts = def.code?.options ?? {};

  switch (strategy) {
    case "icon-text-body": {
      const iconKey = String(opts.iconKey ?? "icon");
      const textKey = String(opts.textKey ?? "text");
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag(name, attrs, tagOpts, () => {
        const lines = [];
        const icon = String(details[iconKey] ?? "");
        const text = String(details[textKey] ?? "");
        if (icon) lines.push(`<Icon icon="${icon}" />`);
        if (text.trim()) lines.push(text);
        return lines.join("\n");
      });
    }
    case "text-body": {
      const textKey = String(opts.textKey ?? "label");
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto")));
    }
    case "bind-checked-body": {
      const textKey = String(opts.textKey ?? "label");
      const attrs = [{ name: "checked", type: "bind", value: "checked" }, ...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag(name, attrs, tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto")));
    }
    case "checkbox-icon-body": {
      const attrs = [{ name: "checked", type: "bind", value: "checked" }, ...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag("CheckboxIcon", attrs, tagOpts, (h) => h.txt(String(details.previewLabel ?? "Texto")));
    }
    case "checkbox-chip-body": {
      const valueKey = String(opts.valueKey ?? "color");
      return buildTag("CheckboxChip", [{ name: "value", value: details[valueKey] ?? "primary", type: "str" }, ...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    }
    case "transfer-board":
      return buildTag("TransferBoard", [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    case "form-entry":
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    case "layout-items": {
      const useCard = Boolean(opts.useCard);
      const n = opts.layout === "flex" ? clampFlexItems(details.itemCount) : nClampGrid(details.itemCount);
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        Array.from({ length: n }, (_, i) => layoutItemSnippet(LAYOUT_PREVIEW_EMOJIS[i % LAYOUT_PREVIEW_EMOJIS.length], useCard)).join("\n"),
      );
    }
    case "splitter-layout": {
      const panel = readPaneGrid(demoConfig, "panel", { items: 2, cells: 1 });
      const main = readPaneGrid(demoConfig, "main", { items: 4, cells: 2 });
      const itemLine = (idx) => layoutItemSnippet(LAYOUT_PREVIEW_EMOJIS[idx % LAYOUT_PREVIEW_EMOJIS.length], true);
      const paneBody = (grid, offset) => buildTag("GridLayout", [{ name: "cells", value: String(grid.cells), type: "str" }, { name: "gap", value: "0.45rem", type: "str" }], { multiline: true }, () =>
        Array.from({ length: grid.itemCount }, (_, i) => itemLine(offset + i)).join("\n"),
      );
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        [buildTag("div", [{ name: "slot", value: "panel", type: "str" }], { multiline: true }, () => paneBody(panel, 0)), paneBody(main, panel.itemCount)].join("\n"),
      );
    }
    case "divider-layout": {
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      const margin = String(details.orientationMargin ?? "").trim();
      if (margin) attrs.push({ name: "orientationMargin", value: margin, type: "str" });
      const showTitle = Boolean(details.showTitle) && String(details.title ?? "").trim();
      return buildTag(name, attrs, tagOpts, (h) => (showTitle ? h.txt(String(details.title)) : ""));
    }
    case "applayout-pattern": {
      const variant = String(state.variant ?? state.pattern ?? "side");
      const shellAttrs = [{ name: "variant", value: variant, type: "str" }, ...styleAttrs(demoStyle || "min-height: 18rem;", demoClass)];
      if (state.fixedHeader) shellAttrs.push({ name: "fixedHeader", value: true, type: "bool" });
      if (state.fixedSider) shellAttrs.push({ name: "fixedSider", value: true, type: "bool" });
      const slot = (tag, slotName, label) => buildTag(tag, slotName ? [{ name: "slot", value: slotName, type: "str" }] : [], {}, (h) => h.txt(label));
      const hdr = String(details.headerLabel ?? "Header");
      const brand = String(details.brandLabel ?? "Brand");
      const tools = String(details.toolsLabel ?? "Tools");
      const cnt = String(details.contentLabel ?? "Content");
      const ftr = String(details.footerLabel ?? "Footer");
      const sid = String(details.siderLabel ?? "Sider");
      const headerBlock = [
        buildTag("AppLayout.Header.Brand", [], {}, (h) => h.txt(brand)),
        buildTag("AppLayout.Header.Center", [], {}, (h) => h.txt(hdr)),
        buildTag("AppLayout.Header.Tools", [], {}, (h) => h.txt(tools)),
      ].join("\n");
      const header = buildTag("AppLayout.Header", [{ name: "slot", value: "header", type: "str" }], { multiline: true }, () => headerBlock);
      const children = variant === "top"
        ? [header, slot("AppLayout.Content", null, cnt), slot("AppLayout.Footer", "footer", ftr)]
        : [header, slot("AppLayout.Sider", "sider", sid), slot("AppLayout.Content", null, cnt), slot("AppLayout.Footer", "footer", ftr)];
      return buildTag("AppLayout", shellAttrs, tagOpts, () => children.join("\n"));
    }
    case "block-layout":
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, (h) => h.txt("Contenido del bloque"));
    case "text-wrap": {
      const textKey = String(opts.textKey ?? "sampleText");
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag("Text", attrs, tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto de ejemplo")));
    }
    case "headings-all": {
      const textKey = String(opts.textKey ?? "sampleText");
      const text = String(details[textKey] ?? "Heading");
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag("Headings", attrs, { multiline: true }, () =>
        [1, 2, 3, 4, 5, 6].map((l) => buildTag("Typography.Title", [{ name: "level", value: l, type: "num" }, ...attrs], {}, (h) => h.txt(`${text} — H${l}`))).join("\n"),
      );
    }
    case "anchor-nav": {
      const n = Math.min(8, Math.max(2, Math.round(Number(details.sectionCount)) || 5));
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      const links = Array.from({ length: n }, (_, i) => buildTag("Anchor.Link", [{ name: "href", value: `#sec-${i + 1}`, type: "str" }, { name: "title", value: `Sección ${i + 1}`, type: "str" }], {}, (h) => h.txt(`Sección ${i + 1}`)));
      return buildTag("Anchor", attrs, { multiline: true }, () => links.join("\n"));
    }
    case "nav-tabs": {
      const n = Math.min(5, Math.max(2, Math.round(Number(details.tabCount)) || 3));
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      return buildTag(name, attrs, { multiline: true }, () =>
        Array.from({ length: n }, (_, i) => buildTag("TabItem", [{ name: "tabKey", value: `t${i + 1}`, type: "str" }, { name: "label", value: `Tab ${i + 1}`, type: "str" }], { multiline: true }, (h) => h.txt(`Panel ${i + 1}`))).join("\n"),
      );
    }
    case "nav-breadcrumbs":
    case "nav-menu":
    case "nav-pagination":
    case "nav-steps":
    case "nav-drawer":
    case "nav-bottom-nav":
    case "nav-link":
    case "nav-speed-dial":
    case "nav-dropdown":
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    case "disp-badge":
      return buildTag("Badge", [{ name: "count", value: state.count ?? 5, type: "num" }, { name: "dot", value: Boolean(state.dot), type: "bool" }, ...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt("…"));
    case "disp-tag":
      return buildTag(def.id === "Chip" ? "Chip" : "Tag", [{ name: "variant", value: state.variant ?? "ghost", type: "str" }, ...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt(String(details.text ?? "Nuevo")));
    case "disp-collapse":
      return buildTag(def.id === "Accordion" ? "Accordion" : "Collapse", [{ name: "accordion", value: Boolean(state.accordion), type: "bool" }, ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        [1, 2].map((i) => buildTag("Collapse.Panel", [{ name: "panelKey", value: String(i), type: "str" }, { name: "header", value: `Panel ${i}`, type: "str" }], { multiline: true }, (h) => h.txt(`Contenido ${i}`))).join("\n"),
      );
    case "disp-carousel":
      return buildTag("Carousel", [{ name: "autoplay", value: Boolean(state.autoplay), type: "bool" }, { name: "arrows", value: Boolean(state.arrows), type: "bool" }, ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        [1, 2, 3].map((i) => buildTag("Card", [{ name: "variant", value: "flat", type: "str" }], {}, (h) => h.txt(`Slide ${i}`))).join("\n"),
      );
    case "disp-table":
      return buildTag("Table", [{ name: "bordered", value: Boolean(state.bordered), type: "bool" }, { name: "sortable", value: Boolean(state.sortable), type: "bool" }, ...styleAttrs(demoStyle, demoClass)], tagOpts);
    case "disp-timeline":
      return buildTag("Timeline", [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        buildTag("Timeline.Item", [{ name: "label", value: "2024", type: "str" }], {}, (h) => h.txt("Evento")),
      );
    case "disp-list":
      return buildTag("List", [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, () =>
        buildTag("List.Item", [{ name: "button", value: true, type: "bool" }], {}, () => buildTag("List.ItemText", [{ name: "primary", value: "Ítem", type: "str" }], {})),
      );
    case "disp-avatar":
    case "disp-calendar":
    case "disp-descriptions":
    case "disp-empty":
    case "disp-qrcode":
    case "disp-segmented":
    case "disp-statistic":
    case "disp-tooltip":
    case "disp-tour":
    case "disp-tree":
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    case "side-panel-pattern": {
      const open = state.open !== false;
      const drawer = Boolean(state.drawer);
      return [
        "import { SidePanel, SidePanelSection } from \"@jeff-aporta/mimicus-react\";",
        "",
        "// Vistas típicas desde JSON (playground-shell.json → views.collapsed / views.expanded)",
        "const collapsedView = (",
        "  <SidePanel.View mode=\"rail\" gap=\"0.35rem\">{/* iconos categoría */}</SidePanel.View>",
        ");",
        "const expandedView = (",
        "  <SidePanel.View mode=\"expanded\" gap=\"0.25rem\">",
        "    <SidePanelSection icon=\"mdi:folder-outline\" label=\"Layout\" open count={12}>",
        "      {/* enlaces demo */}",
        "    </SidePanelSection>",
        "  </SidePanel.View>",
        ");",
        "",
        `<SidePanel open={${open}} drawer={${drawer}} collapsedView={collapsedView} expandedView={expandedView} />`,
      ].join("\n");
    }
    case "contapyme-login": {
      const attrs = [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)];
      const setup = [
        "const session = createOrchestratorSession({ app: \"mi-app-front\" });",
        "",
        "<ContapymeSessionProvider session={session}>",
        "  <AppLayout.Header.Tools>",
        "    <LoginButton />",
        "  </AppLayout.Header.Tools>",
        "</ContapymeSessionProvider>",
      ].join("\n");
      return `import { AppLayout, LoginButton, ContapymeSessionProvider, createOrchestratorSession } from "@jeff-aporta/mimicus-react";\n\n${setup}`;
    }
    case "datagrid": {
      const setup = [
        "const columns = [",
        "  { field: \"id\", headerName: \"#\", type: \"number\", pinned: \"left\", filter: true },",
        "  { field: \"producto\", headerName: \"Producto\", flex: 2, filter: true },",
        "  { field: \"categoria\", headerName: \"Categoría\", filter: \"set\" },",
        "  { field: \"total\", headerName: \"Total\", type: \"number\", filter: true,",
        "    valueFormatter: (v) => `$ ${Number(v).toLocaleString(\"es-CO\")}` },",
        "  { field: \"activo\", headerName: \"Activo\", type: \"boolean\", cellRenderer: \"boolean\" },",
        "];",
        "",
        `<DataGrid columns={columns} rows={rows} selectionMode="${state.selectionMode ?? "multiple"}"`,
        `  pagination={${Boolean(state.pagination)}} density="${state.density ?? "normal"}" />`,
      ].join("\n");
      return `import { DataGrid } from "@jeff-aporta/mimicus-react/datagrid";\nimport "@jeff-aporta/mimicus-react/datagrid.css";\n\n${setup}`;
    }
    case "preview":
      return `// Vista previa interactiva — ver panel de configuración`;
    default:
      return buildTag(name, [...collectAttrs(state), ...styleAttrs(demoStyle, demoClass)], tagOpts);
  }
}
