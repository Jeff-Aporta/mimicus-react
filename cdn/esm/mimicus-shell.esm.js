// src/shell/shellNavResolver.ts
function sortedCategories(ctx) {
  const order = ctx.sectionOrder ?? [];
  return [...ctx.categories ?? []].sort(
    (a, b) => (order.indexOf(a) === -1 ? 99 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 99 : order.indexOf(b))
  );
}
function sectionMeta(ctx, sectionId) {
  return ctx.catalog?.sections?.[sectionId] ?? ctx.catalog?.categories?.[sectionId] ?? {};
}
function sectionColorFor(ctx, categoryId) {
  const categories = sortedCategories(ctx);
  const i = categories.indexOf(categoryId);
  const palette = ctx.sectionColors ?? ["primary"];
  return palette[i >= 0 ? i % palette.length : 0];
}
function resolveCategoryTabDescriptors(ctx) {
  return sortedCategories(ctx).map((cat) => {
    const meta = sectionMeta(ctx, cat);
    return { id: cat, label: meta.label ?? cat, icon: meta.icon ?? "mdi:folder-outline", color: sectionColorFor(ctx, cat), kind: "category" };
  });
}
function resolveCatalogDemoTabDescriptors(ctx) {
  const { route, catalogItems } = ctx;
  if (!route?.category) return [];
  const color = sectionColorFor(ctx, route.category);
  return catalogItems.filter((it) => (it.section ?? it.category) === route.category).map((it) => ({
    id: it.slug,
    label: it.displayLabel ?? it.slug,
    icon: ctx.getDemoIcon?.(it) ?? it.icon ?? it.definition?.titleIcon ?? "mdi:file-document-outline",
    color,
    kind: "demo",
    category: route.category
  }));
}
function normalizeShellNavRows(shellConfig) {
  if (shellConfig?.navigation?.rows?.length) return shellConfig.navigation.rows;
  const legacy = shellConfig?.headerNav;
  if (!legacy) return [];
  const rows = [];
  if (legacy.primary) {
    rows.push({
      id: "primary",
      tier: legacy.primary.tier ?? "primary",
      when: "always",
      active: { type: "primary" },
      children: legacy.primary.children ?? []
    });
  }
  if (legacy.secondary) {
    rows.push({
      id: "secondary",
      tier: legacy.secondary.tier ?? "secondary",
      when: legacy.secondary.when ?? "category-active",
      active: { type: "slug" },
      children: legacy.secondary.children ?? []
    });
  }
  return rows;
}
function evaluateNavWhen(when, ctx) {
  const w = when ?? "always";
  if (w === true || w === "always") return true;
  if (w === false || w === "never") return false;
  if (w === "palette") return Boolean(ctx.isPaletteLabView);
  if (w === "catalog" || w === "home") return Boolean(ctx.isCatalogView);
  if (w === "category-active" || w === "category-demos") return Boolean(ctx.route?.category) && !ctx.isPaletteLabView;
  if (w === "category-demo") return Boolean(ctx.route?.category && ctx.route?.slug) && !ctx.isPaletteLabView;
  if (w === "category") return Boolean(ctx.route?.category) && !ctx.isPaletteLabView && !ctx.isCatalogView;
  return true;
}
function resolveNavNode(node, ctx) {
  if (!node) return [];
  if (node.type === "action") {
    return [{
      id: node.id,
      label: node.label ?? node.id,
      icon: node.icon,
      color: node.color ?? "neutral",
      nav: node.nav,
      target: node.target,
      disabled: node.disabled,
      disabledTitle: node.disabledTitle,
      kind: "action"
    }];
  }
  if (node.type === "catalog-categories" && (!node.mode || node.mode === "tabs")) {
    return resolveCategoryTabDescriptors(ctx);
  }
  if (node.type === "catalog-demos" && (!node.mode || node.mode === "tabs")) {
    return resolveCatalogDemoTabDescriptors(ctx);
  }
  if (node.type === "tabs" && Array.isArray(node.items)) {
    return node.items.map((item) => ({
      id: item.id,
      label: item.label ?? item.id,
      icon: item.icon,
      color: item.color ?? "neutral",
      nav: item.nav,
      target: item.target,
      disabled: item.disabled,
      kind: item.kind ?? "static"
    }));
  }
  return [];
}
function resolveNavRowTabs(row, ctx) {
  const tabs = [];
  for (const child of row.children ?? []) tabs.push(...resolveNavNode(child, ctx));
  return tabs;
}
function resolveNavRowValue(row, ctx) {
  const type = row.active?.type ?? row.activeType ?? (row.tier === "secondary" ? "slug" : "primary");
  if (type === "slug") return ctx.route?.slug ?? "";
  if (type === "category") return ctx.route?.category ?? "";
  if (type === "primary") {
    if (ctx.isPaletteLabView || ctx.isCatalogView) return "__home__";
    return ctx.route?.category ?? "__home__";
  }
  if (type === "id" && row.active?.id) return row.active.id;
  return ctx.route?.category ?? "";
}
function resolveShellNavigation(shellConfig, ctx) {
  return {
    rows: normalizeShellNavRows(shellConfig).map((row) => ({
      id: row.id ?? row.tier ?? "nav",
      tier: row.tier ?? "primary",
      when: row.when ?? "always",
      visible: evaluateNavWhen(row.when, ctx),
      tabs: resolveNavRowTabs(row, ctx),
      value: resolveNavRowValue(row, ctx)
    }))
  };
}
function dispatchShellNav(tabId, ctx, shellConfig) {
  for (const row of normalizeShellNavRows(shellConfig)) {
    for (const child of row.children ?? []) {
      if (child.type !== "action" || child.id !== tabId) continue;
      const nav = child.nav ?? child.id;
      if (nav === "home" || tabId === "__home__") return ctx.onHome?.();
      if (nav === "palette" || tabId === "__palette__") return ctx.onPalette?.();
      if (nav === "category" && child.target) return ctx.onCategory?.(child.target);
      if (nav === "demo" && child.target && child.category) return ctx.onDemo?.(child.category, child.target);
    }
  }
  const cat = ctx.route?.category;
  if (cat && ctx.catalogItems?.some((it) => (it.section ?? it.category) === cat && it.slug === tabId)) {
    return ctx.onDemo?.(cat, tabId);
  }
  if (ctx.categories?.includes(tabId) || ctx.catalogItems?.some((it) => (it.section ?? it.category) === tabId)) {
    return ctx.onCategory?.(tabId);
  }
  return void 0;
}

// src/shell/NavTabRow.tsx
import { useEffect, useRef } from "react";

// src/components/Button.tsx
import { useState } from "react";

// src/theme/constants.ts
var LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme", icon: "mdi:office-building" },
  { id: "neon", label: "Neon", icon: "mdi:lightbulb-on-outline" }
];
var LOOKNFEEL_IDS = LOOKNFEEL_OPTIONS.map((o) => o.id);
function isNgVariant(value) {
  return typeof value === "string" && value.startsWith("ng-");
}
function normalizeVariant(variant, fallback = "solid") {
  if (variant == null || variant === "") return fallback;
  if (isNgVariant(variant)) return variant.slice(3);
  return variant;
}
function isGlassVariant(variant) {
  return normalizeVariant(variant, "") === "glass";
}

// src/lib/resolveColor.ts
var componentColors = [
  "primary",
  "design-1",
  "design-2",
  "design-3",
  "info",
  "success",
  "warning",
  "error",
  "danger",
  "color",
  "bg",
  "card",
  "border",
  "neutral",
  "inherit",
  "currentColor",
  "white",
  "black",
  "transparent"
];
var cssVar = (c) => `var(--mimicus-${c})`;
function resolveColor(color, defaultColor = "") {
  color || (color = defaultColor);
  if (!color) return "";
  if (["inherit", "currentColor", "white", "black", "transparent"].includes(color)) return color;
  if (color === "neutral") return `color-mix(in srgb, ${cssVar("color")} 62%, transparent)`;
  if (color === "bg") return cssVar("bg-primary");
  if (color === "card") return cssVar("bg-secondary");
  if (color === "border") return cssVar("b-color");
  if (color === "primary") return cssVar("design-1");
  if (componentColors.includes(color)) return cssVar(color);
  return color;
}

// src/lib/surfaceColor.ts
var CSS_SURFACE_COLORS = new Set(
  componentColors.filter((c) => !["inherit", "currentColor", "white", "black", "transparent", "neutral", "bg", "card", "border", "color"].includes(c))
);
function surfaceColorAttrs(color, opts = {}) {
  if (!color) return {};
  if (color === "currentColor") return {};
  if (color === "neutral") return { "data-surface-color": "neutral" };
  if (CSS_SURFACE_COLORS.has(color)) return { "data-surface-color": color };
  return { style: { "--surface-accent": resolveColor(color) } };
}
function mergeSurfaceStyle(color, opts = {}) {
  const colorAttrs = surfaceColorAttrs(color, opts);
  const out = {};
  if (colorAttrs["data-surface-color"]) out["data-surface-color"] = colorAttrs["data-surface-color"];
  const merged = { ...colorAttrs.style || {}, ...opts.style && typeof opts.style === "object" ? opts.style : {} };
  if (Object.keys(merged).length) out.style = merged;
  return out;
}

// src/components/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function resolveButtonVariant(variant, { danger, ghost, dashed, link }) {
  if (link) return "text";
  if (ghost) return "ghost";
  if (dashed) return "dashed";
  return normalizeVariant(variant, "solid");
}
function resolveButtonColor(color, { danger }) {
  if (color) return color;
  if (danger) return "danger";
  return color;
}
function Button({
  type: htmlType = "button",
  disabled = false,
  variant = "solid",
  color,
  shape = "round",
  block = false,
  danger = false,
  ghost = false,
  dashed = false,
  link = false,
  href,
  target,
  rel,
  loading = false,
  glassActive = false,
  wrap = false,
  iconPlacement = "start",
  className,
  style,
  onClick,
  children,
  icon,
  ...rest
}) {
  const [busy, setBusy] = useState(false);
  const isLink = Boolean(href) || link;
  const normalizedVariant = resolveButtonVariant(variant, { danger, ghost, dashed, link: isLink && !href });
  const resolvedColor = resolveButtonColor(color, { danger });
  const surfaceStyle = mergeSurfaceStyle(resolvedColor, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;
  const iconOnly = Boolean(icon) && (children == null || children === "");
  const resolvedShape = iconOnly && shape === "round" ? "circle" : shape;
  async function handleClick(e) {
    if (isDisabled) return;
    if (wrap) {
      onClick?.(e);
      return;
    }
    setBusy(true);
    try {
      const res = onClick?.(e);
      if (res instanceof Promise) await res;
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  }
  function onWrapKeydown(e) {
    if (!wrap || isDisabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  }
  const cls = [
    wrap && "button-wrap",
    isLoading && "loading",
    block && "button-block",
    iconOnly && "button-icon-only",
    href && "button-link",
    className
  ].filter(Boolean).join(" ");
  const dataProps = {
    "data-shape": resolvedShape,
    "data-variant": normalizedVariant,
    "data-block": block ? "true" : void 0,
    "data-danger": danger ? "true" : void 0,
    "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : void 0,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : void 0,
    ...surfaceStyle,
    className: cls,
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? void 0 : "100%", ...surfaceStyle.style }
  };
  const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ jsx("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true, children: "\u2026" }) : icon);
  const extractChildIcon = (nodes) => {
    let iconEl = null;
    let rest2 = null;
    const arr = Array.isArray(nodes) ? nodes : nodes != null ? [nodes] : [];
    for (const n of arr) {
      if (iconEl == null && n && typeof n === "object" && "type" in n && (n.type === "iconify-icon" || n.type?.displayName === "Icon")) {
        iconEl = n;
        continue;
      }
      rest2 = rest2?.length ? [...rest2, n] : n;
    }
    return { iconEl, rest: rest2 };
  };
  const inlineIcon = icon == null && children != null && children !== "" ? extractChildIcon(children).iconEl : null;
  const inlineRest = inlineIcon != null ? extractChildIcon(children).rest : null;
  const finalIcon = iconNode ?? inlineIcon;
  const finalChildren = inlineIcon != null ? inlineRest : children;
  const content = iconPlacement === "end" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx("span", { className: "button-content", children: finalChildren }),
    finalIcon
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    finalIcon,
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx("span", { className: "button-content", children: finalChildren })
  ] });
  if (href && !wrap) {
    const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    return /* @__PURE__ */ jsx("a", { ...rest, ...dataProps, href: isDisabled ? void 0 : href, target, rel: linkRel, role: "button", "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, children: content });
  }
  if (wrap) {
    return /* @__PURE__ */ jsx("div", { ...rest, ...dataProps, role: "button", tabIndex: isDisabled ? -1 : 0, "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, onKeyDown: onWrapKeydown, children: content });
  }
  return /* @__PURE__ */ jsx("button", { ...rest, ...dataProps, type: htmlType, disabled: isDisabled, onClick: handleClick, children: content });
}

// src/shell/NavTabRow.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function NavTabRow({ tabs = [], value, onChange, tier = "primary", className, tabHref }) {
  const secondary = tier === "secondary";
  const scrollerRef = useRef(null);
  useEffect(() => {
    if (!value || !scrollerRef.current) return;
    const active = scrollerRef.current.querySelector(".pg-nav-tab.is-active, .pg-nav-tab[aria-selected='true']");
    active?.scrollIntoView?.({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [value, tabs.length]);
  return /* @__PURE__ */ jsx2("div", { className: ["pg-nav-row", secondary ? "pg-nav-row--secondary" : "pg-nav-row--primary", className].filter(Boolean).join(" "), role: "tablist", children: /* @__PURE__ */ jsx2("div", { ref: scrollerRef, className: "pg-nav-row__scroller custom-scrollbar", children: tabs.map((tab) => {
    const selected = value === tab.id;
    const label = tab.label || tab.title || tab.id;
    const tabColor = tab.color ?? "primary";
    const onClick = (e) => {
      if (tab.disabled) return;
      if (tabHref && (e.ctrlKey || e.metaKey || e.button === 1)) {
        const url = tabHref(tab.id);
        if (url) {
          e.preventDefault();
          window.open(url, "_blank", "noopener,noreferrer");
          return;
        }
      }
      onChange?.(tab.id, tab);
    };
    return /* @__PURE__ */ jsx2(
      Button,
      {
        type: "button",
        role: "tab",
        "aria-selected": selected,
        disabled: Boolean(tab.disabled),
        variant: selected ? "soft" : "text",
        shape: "rect",
        color: tabColor,
        className: ["pg-nav-tab", selected && "is-active"].filter(Boolean).join(" "),
        "data-section-color": tab.kind === "action" || tab.id?.startsWith("__") ? void 0 : tabColor,
        title: tab.disabled ? tab.disabledTitle || "No disponible" : String(label),
        onClick,
        onAuxClick: onClick,
        icon: tab.icon ? /* @__PURE__ */ jsx2("iconify-icon", { className: "pg-nav-tab__icon", icon: tab.disabled ? "mdi:lock-outline" : tab.icon, "aria-hidden": true }) : void 0,
        children: /* @__PURE__ */ jsx2("span", { className: "pg-nav-tab__label", children: label })
      },
      tab.id
    );
  }) }) });
}

// src/shell/ShellHeaderNav.tsx
import { useMemo } from "react";
import { Fragment as Fragment2, jsx as jsx3 } from "react/jsx-runtime";
function ShellHeaderNav({ shellConfig, ctx, onTab, className }) {
  const nav = useMemo(() => resolveShellNavigation(shellConfig, ctx), [shellConfig, ctx]);
  const handleTab = onTab ?? ((id) => dispatchShellNav(id, ctx, shellConfig));
  return /* @__PURE__ */ jsx3(Fragment2, { children: nav.rows.filter((row) => row.visible && row.tabs.length > 0).map((row) => /* @__PURE__ */ jsx3(NavTabRow, { tier: row.tier, tabs: row.tabs, value: row.value, onChange: handleTab, className }, row.id)) });
}
export {
  NavTabRow,
  ShellHeaderNav,
  dispatchShellNav,
  evaluateNavWhen,
  normalizeShellNavRows,
  resolveCatalogDemoTabDescriptors,
  resolveCategoryTabDescriptors,
  resolveNavRowTabs,
  resolveNavRowValue,
  resolveShellNavigation,
  sectionColorFor,
  sectionMeta,
  sortedCategories
};
