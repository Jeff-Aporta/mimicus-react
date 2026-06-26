// src/layout/app-layout/AppLayout.tsx
import { Children as Children2, isValidElement as isValidElement2, useMemo as useMemo2 } from "react";

// src/layout/app-layout/appLayoutVariants.ts
var PLAYGROUND_APP_LAYOUT_OPTIONS = [
  { id: "side", label: "Panel izquierdo" },
  { id: "top-side-2", label: "Panel derecho" }
];
var APP_LAYOUT_VARIANT_OPTIONS = [
  ...PLAYGROUND_APP_LAYOUT_OPTIONS,
  { id: "top-side", label: "Top + side" },
  { id: "top", label: "Top" }
];
function isAppLayoutVariant(value) {
  return APP_LAYOUT_VARIANT_OPTIONS.some((o) => o.id === value);
}
function normalizeAppLayoutVariant(value) {
  if (value === "top-side") return "side";
  if (isAppLayoutVariant(value)) return value;
  return "side";
}
function normalizePlaygroundAppLayoutVariant(value) {
  return value === "top-side-2" ? "top-side-2" : "side";
}
var SIDER = "var(--mimicus-app-layout-sider-w, 200px)";
function row(name, size) {
  return `"${name}" ${size}`;
}
function joinRows(...rows) {
  return rows.join("\n");
}
function appLayoutGridTemplate(variant, slots) {
  const { hasHeader, hasSider, hasFooter } = slots;
  if (variant === "side" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"sider header" auto`);
    rows2.push(`"sider content" 1fr`);
    if (hasFooter) rows2.push(`"sider footer" auto`);
    return `${joinRows(...rows2)} / ${SIDER} 1fr`;
  }
  if (variant === "top-side" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"header header" auto`);
    rows2.push(`"sider content" 1fr`);
    if (hasFooter) rows2.push(`"footer footer" auto`);
    return `${joinRows(...rows2)} / ${SIDER} 1fr`;
  }
  if (variant === "top-side-2" && hasSider) {
    const rows2 = [];
    if (hasHeader) rows2.push(`"header header" auto`);
    rows2.push(`"content sider" 1fr`);
    if (hasFooter) rows2.push(`"footer footer" auto`);
    return `${joinRows(...rows2)} / 1fr ${SIDER}`;
  }
  const rows = [];
  if (hasHeader) rows.push(row("header", "auto"));
  rows.push(row("content", "1fr"));
  if (hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}
function appLayoutResponsiveGridTemplate(variant, slots) {
  if (!slots.hasSider || variant === "top") return null;
  const rows = [];
  if (slots.hasHeader) rows.push(row("header", "auto"));
  rows.push(row("sider", "auto"));
  rows.push(row("content", "1fr"));
  if (slots.hasFooter) rows.push(row("footer", "auto"));
  return `${joinRows(...rows)} / 1fr`;
}

// src/layout/app-layout/appLayoutContext.tsx
import { createContext, useContext, useMemo, useState } from "react";
import { jsx } from "react/jsx-runtime";
var AppLayoutContext = createContext(null);
function AppLayoutProvider({ children, defaultSiderWidth = "200px" }) {
  const [siderWidth, setSiderWidth] = useState(defaultSiderWidth);
  const value = useMemo(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
  return /* @__PURE__ */ jsx(AppLayoutContext.Provider, { value, children });
}
function useAppLayoutContext() {
  return useContext(AppLayoutContext);
}

// src/layout/app-layout/AppLayoutSider.tsx
import { useEffect } from "react";

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

// src/components/Button.tsx
import { useState as useState2 } from "react";

// src/theme/constants.ts
var LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme" },
  { id: "neon-mono", label: "Neon mono" },
  { id: "neon-dual", label: "Neon dual" },
  { id: "neon-triad", label: "Neon tr\xEDada" }
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
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  size = "medium",
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
  const [busy, setBusy] = useState2(false);
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
    "data-size": size,
    "data-variant": normalizedVariant,
    "data-block": block ? "true" : void 0,
    "data-danger": danger ? "true" : void 0,
    "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : void 0,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : void 0,
    ...surfaceStyle,
    className: cls,
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? void 0 : "100%", ...surfaceStyle.style }
  };
  const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ jsx2("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true, children: "\u2026" }) : icon);
  const content = iconPlacement === "end" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    children != null && children !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children }),
    iconNode
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    iconNode,
    children != null && children !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children })
  ] });
  if (href && !wrap) {
    const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
    return /* @__PURE__ */ jsx2("a", { ...rest, ...dataProps, href: isDisabled ? void 0 : href, target, rel: linkRel, role: "button", "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, children: content });
  }
  if (wrap) {
    return /* @__PURE__ */ jsx2("div", { ...rest, ...dataProps, role: "button", tabIndex: isDisabled ? -1 : 0, "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, onKeyDown: onWrapKeydown, children: content });
  }
  return /* @__PURE__ */ jsx2("button", { ...rest, ...dataProps, type: htmlType, disabled: isDisabled, onClick: handleClick, children: content });
}

// src/layout/app-layout/AppLayoutSider.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function AppLayoutSider({
  width = 200,
  collapsed = false,
  collapsible = false,
  collapsedWidth = 80,
  theme = "dark",
  className,
  style,
  onCollapse,
  children,
  ...rest
}) {
  const ctx = useAppLayoutContext();
  const w = collapsed ? collapsedWidth : width;
  const wCss = typeof w === "number" ? `${w}px` : w;
  const isDark = theme === "dark";
  const bg = isDark ? resolveColor("primary") : resolveColor("card");
  const fg = isDark ? "white" : resolveColor("color");
  useEffect(() => {
    ctx?.setSiderWidth(wCss);
  }, [ctx, wCss]);
  const rootClass = [
    "mimicus-app-layout-sider",
    `mimicus-app-layout-sider--${theme}`,
    collapsed && "mimicus-app-layout-sider--collapsed",
    className
  ].filter(Boolean).join(" ");
  const mergedStyle = {
    width: "100%",
    maxWidth: wCss,
    background: bg,
    color: fg,
    ...style && typeof style === "object" ? style : {}
  };
  function toggle() {
    onCollapse?.(!collapsed);
  }
  const bodyClass = [
    "mimicus-app-layout-sider__body",
    !collapsed && "custom-scrollbar",
    collapsed && "mimicus-app-layout-sider__body--collapsed mimicus-scrollbar--hidden"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs2("aside", { ...rest, className: rootClass, style: mergedStyle, children: [
    /* @__PURE__ */ jsx3("div", { className: bodyClass, children }),
    collapsible && /* @__PURE__ */ jsx3("div", { className: "mimicus-app-layout-sider__trigger", children: /* @__PURE__ */ jsx3(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" }, children: collapsed ? "\u203A" : "\u2039" }) })
  ] });
}

// src/layout/app-layout/AppLayoutHeader.tsx
import { Children, isValidElement } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function HeaderZone({ children }) {
  return children;
}
var Brand = Object.assign((props) => /* @__PURE__ */ jsx4(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "brand" });
var Center = Object.assign((props) => /* @__PURE__ */ jsx4(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "center" });
var Tools = Object.assign((props) => /* @__PURE__ */ jsx4(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "tools" });
var Nav = Object.assign((props) => /* @__PURE__ */ jsx4(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "nav" });
function collectHeaderSlots(children) {
  const slots = { brand: null, center: null, tools: null, nav: null, extra: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      if (child != null && child !== false) slots.extra.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutHeaderSlot;
    if (slotName === "brand" || slotName === "center" || slotName === "tools" || slotName === "nav") slots[slotName] = child;
    else slots.extra.push(child);
  });
  return slots;
}
function renderZone(slot, className) {
  if (!slot) return null;
  return /* @__PURE__ */ jsx4("div", { className, children: slot.props.children });
}
function AppLayoutHeaderBase({ className, barClassName, navClassName, children, ...rest }) {
  const slots = collectHeaderSlots(children);
  const hasZones = Boolean(slots.brand || slots.center || slots.tools || slots.nav);
  const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");
  if (!hasZones) {
    return /* @__PURE__ */ jsx4("header", { ...rest, className: rootClass, children });
  }
  const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");
  const navClass = ["mimicus-app-layout-header__nav", "pg-shell-header-nav", navClassName].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs3("header", { ...rest, className: rootClass, children: [
    /* @__PURE__ */ jsxs3("div", { className: barClass, children: [
      renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand"),
      renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center"),
      renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")
    ] }),
    slots.nav ? /* @__PURE__ */ jsx4("div", { className: navClass, children: slots.nav.props.children }) : null,
    slots.extra.length > 0 ? slots.extra : null
  ] });
}
var AppLayoutHeader = Object.assign(AppLayoutHeaderBase, { Brand, Center, Tools, Nav });

// src/layout/app-layout/AppLayout.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };
function collectSlots(children) {
  const slots = { header: null, sider: null, footer: null, default: [] };
  Children2.forEach(children, (child) => {
    if (!isValidElement2(child)) {
      slots.default.push(child);
      return;
    }
    const slotName = child.type?.__appLayoutSlot;
    if (slotName === "header" || slotName === "sider" || slotName === "footer") slots[slotName] = child;
    else slots.default.push(child);
  });
  return slots;
}
function Slot({ children }) {
  return children;
}
var Header = Object.assign(
  (props) => /* @__PURE__ */ jsx5(AppLayoutHeader, { ...props }),
  {
    __appLayoutSlot: "header",
    Brand: AppLayoutHeader.Brand,
    Center: AppLayoutHeader.Center,
    Tools: AppLayoutHeader.Tools,
    Nav: AppLayoutHeader.Nav
  }
);
function SiderBase({ children, width, collapsed, collapsible, collapsedWidth, theme, onCollapse, className, style, ...rest }) {
  const useSiderChrome = width !== void 0 || collapsible || collapsed !== void 0 || theme !== void 0;
  if (useSiderChrome) {
    return /* @__PURE__ */ jsx5(
      AppLayoutSider,
      {
        width,
        collapsed,
        collapsible,
        collapsedWidth,
        theme,
        onCollapse,
        className,
        style,
        ...rest,
        children
      }
    );
  }
  return children;
}
var Sider = Object.assign(SiderBase, { __appLayoutSlot: "sider" });
var Footer = Object.assign(
  (props) => /* @__PURE__ */ jsx5(Slot, { ...props }),
  { __appLayoutSlot: "footer" }
);
function AppLayoutRoot({
  variant = "top",
  fixedHeader = false,
  fixedSider = false,
  responsive = true,
  responsiveDrawer = false,
  className,
  style,
  children,
  ...rest
}) {
  const ctx = useAppLayoutContext();
  const siderWidthCss = ctx?.siderWidth ?? "200px";
  const slots = useMemo2(() => collectSlots(children), [children]);
  const hasHeader = !!slots.header;
  const hasSider = !!slots.sider;
  const hasFooter = !!slots.footer;
  const slotFlags = { hasHeader, hasSider, hasFooter };
  const gridTemplate = appLayoutGridTemplate(variant, slotFlags);
  const responsiveGridTemplate = responsive ? appLayoutResponsiveGridTemplate(variant, slotFlags) : null;
  const rootClass = [
    "mimicus-app-layout",
    `mimicus-app-layout--${variant}`,
    hasSider && "mimicus-app-layout--has-sider",
    fixedHeader && "mimicus-app-layout--fixed-header",
    fixedSider && "mimicus-app-layout--fixed-sider",
    responsive && "mimicus-app-layout--responsive",
    responsiveDrawer && "mimicus-app-layout--drawer-sider",
    className
  ].filter(Boolean).join(" ");
  const rootStyle = {
    "--mimicus-app-layout-sider-w": siderWidthCss,
    gridTemplate,
    ...responsiveGridTemplate ? { "--mimicus-app-layout-grid-responsive": responsiveGridTemplate } : {},
    ...style && typeof style === "object" ? style : {}
  };
  return /* @__PURE__ */ jsxs4("div", { ...rest, className: rootClass, style: rootStyle, children: [
    hasHeader && /* @__PURE__ */ jsx5("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--header", children: slots.header }),
    hasSider && /* @__PURE__ */ jsx5("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--sider", children: slots.sider }),
    /* @__PURE__ */ jsx5("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--content", children: slots.default }),
    hasFooter && /* @__PURE__ */ jsx5("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--footer", children: slots.footer })
  ] });
}
var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

// src/layout/app-layout/layoutSlotContext.tsx
import { createContext as createContext2, useContext as useContext2, useEffect as useEffect2, useRef, useState as useState3 } from "react";

// src/layout/shared/layoutHelpers.ts
var BREAKPOINT_W = { xs: 0, sm: 480, md: 600, lg: 800, xl: 1200 };
var BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
function getBreakPoint(clientWidth = 0) {
  const w = clientWidth;
  if (w < BREAKPOINT_W.sm) return "xs";
  if (w <= BREAKPOINT_W.md) return "sm";
  if (w <= BREAKPOINT_W.lg) return "md";
  if (w < BREAKPOINT_W.xl) return "lg";
  return "xl";
}
function getSizeFlags(sizew = "md") {
  const currentIdx = BREAKPOINTS.indexOf(sizew);
  const flags = { xs: false, sm: false, md: false, lg: false, xl: false };
  for (const bp of BREAKPOINTS) flags[bp] = BREAKPOINTS.indexOf(bp) <= currentIdx;
  return flags;
}
function buildLerpw(clientWidth = 0) {
  return (b0 = "sm", b1 = "xl") => {
    const w0 = BREAKPOINT_W[b0];
    const w1 = BREAKPOINT_W[b1];
    return w1 === w0 ? 0 : (clientWidth - w0) / (w1 - w0);
  };
}
function getSlotResume(sizew, clientWidth = 0) {
  return { sizew, boolszw: getSizeFlags(sizew), lerpw: buildLerpw(clientWidth) };
}
var RGX_OVERFLOW_SCROLL = /\boverflow(?:-x|-y)?\s*:\s*(auto|scroll)\b/i;
function dataDebug(rest, segment) {
  if (!rest["data-element"] && !segment) return {};
  return { "data-element": [rest["data-element"], segment].flat(Infinity).filter(Boolean).join(" / ") };
}
function stylePartToString(part) {
  if (part == null || part === false) return "";
  if (typeof part === "object") {
    return Object.entries(part).filter(([, v]) => v != null && v !== "").map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${v}`).join("; ");
  }
  return String(part).trim();
}
function cssStringToStyle(str) {
  if (!str || typeof str !== "string") return {};
  const out = {};
  for (const part of str.split(";")) {
    const idx = part.indexOf(":");
    if (idx < 1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) continue;
    out[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  }
  return out;
}
function hasOverflowStyle(style = "") {
  const s = typeof style === "string" ? style : stylePartToString(style);
  return RGX_OVERFLOW_SCROLL.test(s);
}
function getScrollbarClass(cscroll = false, style) {
  return cscroll || hasOverflowStyle(style) ? "custom-scrollbar" : "";
}
var GAP_BY_SIZEW = { xs: "0.2rem", sm: "0.35rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
var JUSTIFY_ALIASES = { between: "space-between", around: "space-around", evenly: "space-evenly" };
function resolveGap(gap, sizew = "md") {
  if (gap && String(gap).trim()) return String(gap).trim();
  return GAP_BY_SIZEW[sizew] ?? GAP_BY_SIZEW.md;
}
function resolveJustify(justify) {
  if (!justify) return "";
  if (justify in JUSTIFY_ALIASES) return JUSTIFY_ALIASES[justify];
  return justify;
}
function resolveGridTemplate(cells, cellsFit = false) {
  const value = typeof cells === "string" ? cells.trim() : typeof cells === "number" ? String(cells).trim() : "";
  if (!value) return "";
  if (/^\d+(\.\d+)?$/.test(value)) {
    return `repeat(${value}, ${cellsFit ? "max-content" : "minmax(0, 1fr)"})`;
  }
  return value;
}
function joinStyle(...parts) {
  const css = parts.map(stylePartToString).filter(Boolean).join("; ");
  return css ? cssStringToStyle(css) : void 0;
}

// src/layout/app-layout/layoutSlotContext.tsx
var DEFAULT_SLOT = getSlotResume("md", 0);
var LayoutSlotContext = createContext2(DEFAULT_SLOT);
function useLayoutSlot() {
  return useContext2(LayoutSlotContext) ?? DEFAULT_SLOT;
}
function useLayoutContainer(sizewProp) {
  const ref = useRef(null);
  const [clientWidth, setClientWidth] = useState3(0);
  const sizew = sizewProp ?? getBreakPoint(clientWidth);
  const slot = getSlotResume(sizew, clientWidth);
  useEffect2(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return void 0;
    const ro = new ResizeObserver(([entry]) => setClientWidth(entry.contentRect.width));
    ro.observe(el);
    setClientWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  return { ref, sizew, slot };
}

// src/layout/grid/BlockLayout.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }) {
  const { ref, slot } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(style, `display: ${inline ? "inline-block" : "block"}`);
  return /* @__PURE__ */ jsx6(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx6("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "block-layout"), children }) });
}

// src/layout/grid/FlexLayout.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function FlexLayout({
  direction,
  wrap = false,
  inline = false,
  justify,
  items,
  gap,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}) {
  const { ref, sizew, slot } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `gap: ${resolveGap(gap, sizew)}`,
    direction && `flex-direction: ${direction}`,
    `flex-wrap: ${wrap ? "wrap" : "nowrap"}`,
    justify && `justify-content: ${resolveJustify(justify)}`,
    items && `align-items: ${items}`,
    style,
    `display: ${inline ? "inline-flex" : "flex"}`
  );
  return /* @__PURE__ */ jsx7(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx7("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "flex-layout"), children }) });
}

// src/layout/grid/GridLayout.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function GridLayout({
  cells = "",
  cellsFit = false,
  direction = "column",
  justify,
  items,
  gap,
  inline = false,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}) {
  const { ref, sizew, slot } = useLayoutContainer(sizewProp);
  const isColumn = (direction || "column") === "column";
  const isRow = direction === "row";
  const gridTemplate = resolveGridTemplate(cells, cellsFit);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `gap: ${resolveGap(gap, sizew)}`,
    isColumn && gridTemplate && `grid-template-columns: ${gridTemplate}`,
    isRow && gridTemplate && `grid-template-rows: ${gridTemplate}`,
    isRow && "grid-auto-flow: column",
    justify && `justify-content: ${resolveJustify(justify)}`,
    items && `align-items: ${items}`,
    style,
    `display: ${inline ? "inline-grid" : "grid"}`
  );
  return /* @__PURE__ */ jsx8(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ jsx8("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "grid-layout"), children }) });
}

// src/layout/dividers/Divider.tsx
import { Children as Children3 } from "react";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function toCssLength(v) {
  if (v == null || v === "") return void 0;
  if (typeof v === "number") return `${v}px`;
  const s = String(v).trim();
  if (/^\d+(\.\d+)?$/.test(s)) return `${s}px`;
  return s;
}
function Divider({
  orientation,
  vertical = false,
  variant = "solid",
  dashed = false,
  titlePlacement = "center",
  plain = false,
  size = "medium",
  orientationMargin,
  className,
  style,
  children,
  ...rest
}) {
  const axis = orientation ?? (vertical ? "vertical" : "horizontal");
  const normalizedVariant = normalizeVariant(variant, "solid");
  const lineVariant = normalizedVariant === "glow" ? "glow" : dashed ? "dashed" : normalizedVariant;
  const lineColor = resolveColor("border");
  const marginBlock = size === "small" ? "0.5rem" : size === "large" ? "1.5rem" : "1rem";
  const marginCss = axis === "horizontal" ? `${marginBlock} 0` : `0 0.5rem`;
  const edgeBasis = toCssLength(orientationMargin) ?? "5%";
  const hasText = children != null && children !== false && Children3.count(children) > 0;
  const cls = [
    "is-divider",
    `is-divider--${axis}`,
    `is-divider--${lineVariant}`,
    hasText && "is-divider--with-text",
    hasText && `is-divider--title-${titlePlacement}`,
    plain && "is-divider--plain",
    className
  ].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `--is-divider-color: ${lineColor}`,
    `margin: ${marginCss}`,
    axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge: ${edgeBasis}`,
    style
  );
  return /* @__PURE__ */ jsx9("div", { className: cls, style: mergedStyle, role: "separator", "aria-orientation": axis, ...dataDebug(rest, "divider"), ...rest, children: hasText ? axis === "horizontal" ? /* @__PURE__ */ jsxs5(Fragment2, { children: [
    /* @__PURE__ */ jsx9("span", { className: "is-divider__rail is-divider__rail--before", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx9("span", { className: "is-divider__content", children }),
    /* @__PURE__ */ jsx9("span", { className: "is-divider__rail is-divider__rail--after", "aria-hidden": "true" })
  ] }) : /* @__PURE__ */ jsx9("span", { className: "is-divider__content", children }) : axis === "horizontal" ? /* @__PURE__ */ jsx9("span", { className: "is-divider__rail is-divider__rail--solo", "aria-hidden": "true" }) : /* @__PURE__ */ jsx9("span", { className: "is-divider__rail is-divider__rail--solo-vertical", "aria-hidden": "true" }) });
}

// src/layout/panels/Splitter.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState4 } from "react";

// src/layout/shared/layoutBreakpoints.ts
var LAYOUT_BP_NARROW = 768;
function subscribeNarrowViewport(onChange) {
  if (typeof window === "undefined") return () => {
  };
  const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW - 1}px)`);
  const sync = () => onChange(mq.matches);
  sync();
  mq.addEventListener("change", sync);
  return () => mq.removeEventListener("change", sync);
}

// src/layout/panels/splitterResize.ts
function clampSplitterSize(w, min, max) {
  return Math.min(max, Math.max(min, Math.round(w)));
}
function readSplitterStorage(key, fallback, min, max) {
  if (!key || typeof localStorage === "undefined") return fallback;
  try {
    const n = Number(localStorage.getItem(key));
    if (Number.isFinite(n)) return clampSplitterSize(n, min, max);
  } catch {
  }
  return fallback;
}
function writeSplitterStorage(key, w) {
  if (!key || typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(key, String(w));
  } catch {
  }
}

// src/layout/panels/Splitter.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function Splitter({
  direction = "horizontal",
  panelSize: panelSizeProp = 280,
  minSize = 180,
  maxSize = 720,
  collapsed = false,
  collapsedSize = 52,
  resizable = true,
  storageKey = "",
  responsive = true,
  panelEnd = false,
  inline = false,
  className,
  style,
  panel,
  children,
  ...rest
}) {
  const [panelSize, setPanelSize] = useState4(panelSizeProp);
  const [dragging, setDragging] = useState4(false);
  const [narrow, setNarrow] = useState4(false);
  const dragStart = useRef2({ x: 0, y: 0, size: panelSizeProp });
  const resizeHandle = useRef2(null);
  useEffect3(() => {
    setPanelSize(panelSizeProp);
  }, [panelSizeProp]);
  useEffect3(() => {
    if (storageKey) setPanelSize(readSplitterStorage(storageKey, panelSizeProp, minSize, maxSize));
    return subscribeNarrowViewport(setNarrow);
  }, [storageKey, panelSizeProp, minSize, maxSize]);
  const sizePx = collapsed ? collapsedSize : panelSize;
  const isHorizontal = direction === "horizontal";
  const stacked = responsive && narrow && isHorizontal;
  const resizeAlongX = isHorizontal && !stacked;
  const panelStyle = resizeAlongX ? { width: sizePx, flex: `0 0 ${sizePx}px` } : stacked ? { width: "100%", flex: `0 0 ${sizePx}px`, maxWidth: "100%" } : { height: sizePx, flex: `0 0 ${sizePx}px` };
  const resizeCursor = resizeAlongX ? "col-resize" : "row-resize";
  const bodyResizeClass = resizeAlongX ? "is-split-resize-active--horizontal" : "is-split-resize-active--vertical";
  const rootClass = [
    "is-splitter",
    isHorizontal ? "is-splitter--horizontal" : "is-splitter--vertical",
    inline && "is-splitter--inline",
    stacked && "is-splitter--stacked",
    responsive && "is-splitter--responsive",
    panelEnd && "is-splitter--panel-end",
    collapsed && "is-splitter--collapsed",
    dragging && "is-splitter--dragging",
    className
  ].filter(Boolean).join(" ");
  function onResizeStart(e) {
    if (collapsed || !resizable) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    resizeHandle.current?.setPointerCapture(e.pointerId);
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, size: panelSize };
    document.body.classList.add("is-split-resize-active", bodyResizeClass);
  }
  function onResizeMove(e) {
    if (!dragging) return;
    const delta = resizeAlongX ? e.clientX - dragStart.current.x : e.clientY - dragStart.current.y;
    setPanelSize(clampSplitterSize(dragStart.current.size + delta, minSize, maxSize));
  }
  function onResizeEnd(e) {
    if (!dragging) return;
    setDragging(false);
    setPanelSize((s) => {
      const next = clampSplitterSize(s, minSize, maxSize);
      writeSplitterStorage(storageKey, next);
      return next;
    });
    document.body.classList.remove("is-split-resize-active", bodyResizeClass);
    try {
      resizeHandle.current?.releasePointerCapture(e.pointerId);
    } catch {
    }
  }
  return /* @__PURE__ */ jsxs6("div", { className: rootClass, style, ...rest, children: [
    /* @__PURE__ */ jsxs6("div", { className: "is-splitter__panel", style: panelStyle, children: [
      /* @__PURE__ */ jsx10("div", { className: "is-splitter__panel-body", children: panel }),
      resizable && !collapsed && /* @__PURE__ */ jsx10(
        "div",
        {
          ref: resizeHandle,
          className: ["is-splitter__resize-handle", resizeAlongX ? "is-splitter__resize-handle--col" : "is-splitter__resize-handle--row", dragging && "is-dragging"].filter(Boolean).join(" "),
          role: "presentation",
          "aria-hidden": "true",
          title: "Arrastrar para cambiar tama\xF1o",
          style: { cursor: resizeCursor },
          onPointerDown: onResizeStart,
          onPointerMove: onResizeMove,
          onPointerUp: onResizeEnd,
          onPointerCancel: onResizeEnd
        }
      )
    ] }),
    /* @__PURE__ */ jsx10("div", { className: "is-splitter__main", children })
  ] });
}

// src/layout/panels/SidePanel.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function View({ mode = "expanded", gap = "0.25rem", className, style, children, ...rest }) {
  const rail = mode === "rail";
  return /* @__PURE__ */ jsx11(
    "div",
    {
      ...rest,
      className: ["mimicus-side-panel-view", "pg-panel-view", rail ? "mimicus-side-panel-view--rail pg-panel-view--rail" : "mimicus-side-panel-view--expanded pg-panel-view--expanded", className].filter(Boolean).join(" "),
      style: { display: "flex", flexDirection: "column", gap, width: "100%", minWidth: 0, ...style && typeof style === "object" ? style : {} },
      children
    }
  );
}
function SidePanelBase({
  open = true,
  drawer = false,
  onClose,
  onToggle,
  collapsedView,
  expandedView,
  railView,
  children,
  closeIcon = "mdi:close",
  closeTitle = "Cerrar men\xFA",
  expandTitle = "Expandir panel",
  collapseTitle = "Compactar panel",
  className,
  style,
  ...rest
}) {
  const rail = !open && !drawer;
  const collapsed = collapsedView ?? railView;
  const bodyClass = [
    "mimicus-side-panel__body",
    "pg-sidebar-body",
    "sidebar-body",
    !rail && "custom-scrollbar pg-scrollbar",
    rail && "mimicus-side-panel__body--rail pg-sidebar-body--rail mimicus-scrollbar--hidden"
  ].filter(Boolean).join(" ");
  const content = children ?? (drawer || open ? expandedView : collapsed);
  return /* @__PURE__ */ jsxs7(
    "aside",
    {
      ...rest,
      className: ["mimicus-side-panel", "sidebar", "pg-sidebar", "pg-vt-sidebar", drawer && "mimicus-side-panel--drawer pg-sidebar--drawer", rail && "mimicus-side-panel--rail is-collapsed"].filter(Boolean).join(" "),
      style: { ...style && typeof style === "object" ? style : {} },
      children: [
        drawer && onClose && /* @__PURE__ */ jsx11("div", { className: "mimicus-side-panel__drawer-bar pg-sidebar-drawer-bar", children: /* @__PURE__ */ jsx11(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onClose, className: "sidebar-toggle-btn", title: closeTitle, style: { width: "auto", marginLeft: "auto" }, children: /* @__PURE__ */ jsx11("iconify-icon", { icon: closeIcon, "aria-hidden": true }) }) }),
        !drawer && onToggle && /* @__PURE__ */ jsx11("div", { className: ["mimicus-side-panel__header", "pg-sidebar-header", "pg-sidebar-header--panel", rail && "pg-sidebar-header--rail"].filter(Boolean).join(" "), children: /* @__PURE__ */ jsx11(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onToggle, className: ["sidebar-header-btn", rail ? "sidebar-header-btn--rail" : "sidebar-toggle-btn"].filter(Boolean).join(" "), title: open ? collapseTitle : expandTitle, style: rail ? { width: "100%", justifyContent: "center" } : { flexShrink: 0, width: "auto" }, children: /* @__PURE__ */ jsx11("iconify-icon", { icon: open ? "mdi:menu-open" : "mdi:menu", "aria-hidden": true }) }) }),
        /* @__PURE__ */ jsx11("div", { className: bodyClass, children: content })
      ]
    }
  );
}
var SidePanel = Object.assign(SidePanelBase, { View });

// src/components/display/Display.tsx
import { Children as Children4, useId, useRef as useRef3 } from "react";

// src/display/useDisplayBinding.ts
import { useEffect as useEffect4 } from "react";

// src/nav/core.ts
function on(el, type, fn, opts) {
  if (!el) return () => {
  };
  el.addEventListener(type, fn, opts);
  return () => el.removeEventListener(type, fn, opts);
}
function qs(sel, root = document) {
  return root?.querySelector?.(sel) ?? null;
}
function qsa(sel, root = document) {
  return root ? [...root.querySelectorAll(sel)] : [];
}
function parseBool(v) {
  return v === true || v === "" || v === "true" || v === "1";
}
function parseNum(v, fb = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fb;
}
function emit(root, name, detail) {
  root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
}

// src/display/controllers.ts
function cleanupPrev(root, fn) {
  const r = root;
  r.__mimicusDisplayCleanup?.();
  r.__mimicusDisplayCleanup = fn;
}
function bindCarousel(root) {
  const track = qs("[data-mimicus-carousel-track]", root);
  const slides = qsa("[data-mimicus-carousel-slide]", root);
  const dots = qsa("[data-mimicus-carousel-dot]", root);
  const prev = qs("[data-mimicus-carousel-prev]", root);
  const next = qs("[data-mimicus-carousel-next]", root);
  if (!track || !slides.length) return () => {
  };
  const infinite = root.dataset.infinite !== "false";
  const autoplay = parseBool(root.dataset.autoplay);
  const speed = parseNum(root.dataset.speed, 500);
  const autoplaySpeed = parseNum(root.dataset.autoplaySpeed, 3e3);
  let idx = parseNum(root.dataset.activeIndex, 0);
  let timer = null;
  const go = (n, animate = true) => {
    const max = slides.length;
    if (!max) return;
    if (infinite) idx = (n % max + max) % max;
    else idx = Math.max(0, Math.min(max - 1, n));
    root.dataset.activeIndex = String(idx);
    track.style.transitionDuration = animate ? `${speed}ms` : "0ms";
    track.style.transform = `translateX(-${idx * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
      d.setAttribute("aria-selected", i === idx ? "true" : "false");
    });
    emit(root, "mimicus-carousel-change", { index: idx });
  };
  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  const start = () => {
    stop();
    if (autoplay && slides.length > 1) timer = setInterval(() => go(idx + 1), autoplaySpeed);
  };
  go(idx, false);
  start();
  const cleanups = [
    on(prev, "click", () => {
      go(idx - 1);
      start();
    }),
    on(next, "click", () => {
      go(idx + 1);
      start();
    }),
    ...dots.map((d, i) => on(d, "click", () => {
      go(i);
      start();
    })),
    () => stop()
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindCollapse(root) {
  const accordion = parseBool(root.dataset.accordion);
  const panels = qsa("[data-mimicus-collapse-panel]", root);
  const parseKeys = () => String(root.dataset.activeKey ?? "").split(",").filter(Boolean);
  const setKeys = (keys) => {
    root.dataset.activeKey = keys.join(",");
    panels.forEach((p) => {
      const open = keys.includes(p.dataset.mimicusCollapsePanel ?? "");
      p.classList.toggle("is-open", open);
      const body = qs("[data-mimicus-collapse-body]", p);
      if (body) body.hidden = !open;
      const trigger = qs("[data-mimicus-collapse-trigger]", p);
      if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    emit(root, "mimicus-collapse-change", { activeKey: accordion ? keys[0] ?? "" : keys });
  };
  setKeys(parseKeys().length ? parseKeys() : panels.filter((p) => p.dataset.defaultOpen === "true").map((p) => p.dataset.mimicusCollapsePanel ?? ""));
  const cleanups = panels.map((p) => on(qs("[data-mimicus-collapse-trigger]", p), "click", () => {
    const key = p.dataset.mimicusCollapsePanel ?? "";
    const cur = parseKeys();
    if (accordion) setKeys(cur.includes(key) ? [] : [key]);
    else setKeys(cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]);
  }));
  return () => cleanups.forEach((fn) => fn());
}
function bindTooltip(root) {
  const tip = qs("[data-mimicus-tooltip-popup]", root);
  const trigger = qs("[data-mimicus-tooltip-trigger]", root) ?? root.firstElementChild;
  if (!tip || !trigger) return () => {
  };
  const placement = root.dataset.placement ?? "top";
  let open = false;
  const show = () => {
    open = true;
    root.classList.add("is-open");
    tip.hidden = false;
    tip.dataset.placement = placement;
  };
  const hide = () => {
    open = false;
    root.classList.remove("is-open");
    tip.hidden = true;
  };
  hide();
  const cleanups = [
    on(trigger, "mouseenter", show),
    on(trigger, "focus", show),
    on(trigger, "mouseleave", hide),
    on(trigger, "blur", hide),
    on(root, "keydown", (e) => {
      if (e.key === "Escape" && open) hide();
    })
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindSegmented(root) {
  const btns = qsa("[data-mimicus-segmented]", root);
  const set = (v) => {
    root.dataset.value = v;
    btns.forEach((b) => {
      const on2 = b.dataset.mimicusSegmented === v;
      b.classList.toggle("is-active", on2);
      b.setAttribute("aria-pressed", on2 ? "true" : "false");
    });
    emit(root, "mimicus-segmented-change", { value: v });
  };
  set(root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusSegmented ?? btns[0]?.dataset.mimicusSegmented ?? "");
  return btns.map((b) => on(b, "click", () => set(b.dataset.mimicusSegmented ?? "")));
}
function bindTree(root) {
  const checkable = parseBool(root.dataset.checkable);
  const nodes = qsa("[data-mimicus-tree-node]", root);
  const toggleExpand = (node) => {
    const open = !node.classList.contains("is-expanded");
    node.classList.toggle("is-expanded", open);
    const child = qs("[data-mimicus-tree-children]", node);
    if (child) child.hidden = !open;
    const btn = qs("[data-mimicus-tree-switcher]", node);
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  const cleanups = nodes.flatMap((node) => {
    const switcher = qs("[data-mimicus-tree-switcher]", node);
    const checkbox = qs("[data-mimicus-tree-check]", node);
    const outs = [];
    if (switcher) outs.push(on(switcher, "click", (e) => {
      e.stopPropagation();
      toggleExpand(node);
    }));
    if (checkable && checkbox) outs.push(on(checkbox, "change", () => {
      node.classList.toggle("is-checked", checkbox.checked);
      emit(root, "mimicus-tree-check", { key: node.dataset.mimicusTreeNode, checked: checkbox.checked });
    }));
    return outs;
  });
  return () => cleanups.forEach((fn) => fn());
}
function bindCalendar(root) {
  const grid = qs("[data-mimicus-calendar-grid]", root);
  const title = qs("[data-mimicus-calendar-title]", root);
  const prev = qs("[data-mimicus-calendar-prev]", root);
  const next = qs("[data-mimicus-calendar-next]", root);
  if (!grid) return () => {
  };
  let year = parseNum(root.dataset.year, (/* @__PURE__ */ new Date()).getFullYear());
  let month = parseNum(root.dataset.month, (/* @__PURE__ */ new Date()).getMonth());
  const paint = () => {
    root.dataset.year = String(year);
    root.dataset.month = String(month);
    if (title) title.textContent = new Date(year, month, 1).toLocaleDateString(void 0, { month: "long", year: "numeric" });
    grid.innerHTML = "";
    const first = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const today = /* @__PURE__ */ new Date();
    for (let i = 0; i < first; i++) {
      const cell = document.createElement("span");
      cell.className = "mimicus-calendar__cell mimicus-calendar__cell--empty";
      grid.appendChild(cell);
    }
    for (let d = 1; d <= days; d++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "mimicus-calendar__cell";
      cell.textContent = String(d);
      if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) cell.classList.add("is-today");
      cell.addEventListener("click", () => {
        qsa(".is-selected", grid).forEach((el) => el.classList.remove("is-selected"));
        cell.classList.add("is-selected");
        emit(root, "mimicus-calendar-select", { year, month: month + 1, day: d });
      });
      grid.appendChild(cell);
    }
  };
  paint();
  return [
    on(prev, "click", () => {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      paint();
    }),
    on(next, "click", () => {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      paint();
    })
  ];
}
function bindTableSort(root) {
  const headers = qsa("[data-mimicus-table-sort]", root);
  if (!headers.length) return () => {
  };
  const tbody = qs("tbody", root);
  const cleanups = headers.map((th) => on(th, "click", () => {
    const col = parseNum(th.dataset.mimicusTableSort, 0);
    const asc = th.dataset.sortDir !== "asc";
    headers.forEach((h) => {
      h.dataset.sortDir = "";
      h.classList.remove("is-asc", "is-desc");
    });
    th.dataset.sortDir = asc ? "asc" : "desc";
    th.classList.add(asc ? "is-asc" : "is-desc");
    if (!tbody) return;
    const rows = [...tbody.querySelectorAll("tr")];
    rows.sort((a, b) => {
      const av = a.children[col]?.textContent?.trim() ?? "";
      const bv = b.children[col]?.textContent?.trim() ?? "";
      const an = Number(av);
      const bn = Number(bv);
      const cmp = Number.isFinite(an) && Number.isFinite(bn) ? an - bn : av.localeCompare(bv);
      return asc ? cmp : -cmp;
    });
    rows.forEach((r) => tbody.appendChild(r));
    emit(root, "mimicus-table-sort", { column: col, direction: asc ? "asc" : "desc" });
  }));
  return () => cleanups.forEach((fn) => fn());
}
function bindTour(root) {
  const steps = qsa("[data-mimicus-tour-step]", root);
  const overlay = qs("[data-mimicus-tour-overlay]", root);
  const card = qs("[data-mimicus-tour-card]", root);
  const titleEl = qs("[data-mimicus-tour-title]", root);
  const descEl = qs("[data-mimicus-tour-desc]", root);
  const prev = qs("[data-mimicus-tour-prev]", root);
  const next = qs("[data-mimicus-tour-next]", root);
  const close = qs("[data-mimicus-tour-close]", root);
  let idx = 0;
  let open = parseBool(root.dataset.open);
  const paint = () => {
    open = parseBool(root.dataset.open);
    if (!open || !steps.length) {
      root.classList.remove("is-active");
      if (overlay) overlay.hidden = true;
      return;
    }
    root.classList.add("is-active");
    if (overlay) overlay.hidden = false;
    const step = steps[idx];
    const targetSel = step?.dataset.target;
    const target = targetSel ? qs(targetSel, root) ?? qs(targetSel, document) : null;
    steps.forEach((s, i) => s.classList.toggle("is-current", i === idx));
    if (titleEl) titleEl.textContent = step?.dataset.title ?? "";
    if (descEl) descEl.textContent = step?.dataset.description ?? "";
    if (card && target) {
      const rect = target.getBoundingClientRect();
      card.style.position = "fixed";
      card.style.top = `${rect.bottom + 8}px`;
      card.style.left = `${rect.left}px`;
      target.classList.add("mimicus-tour-target");
      steps.forEach((s, i) => {
        if (i !== idx) {
          const sel = s.dataset.target;
          const el = sel ? qs(sel, root) ?? qs(sel, document) : null;
          el?.classList.remove("mimicus-tour-target");
        }
      });
    }
    if (prev) prev.disabled = idx <= 0;
    if (next) next.textContent = idx >= steps.length - 1 ? "Finalizar" : "Siguiente";
  };
  const end = () => {
    root.dataset.open = "false";
    qsa(".mimicus-tour-target", root).forEach((el) => el.classList.remove("mimicus-tour-target"));
    paint();
    emit(root, "mimicus-tour-close");
  };
  paint();
  return [
    on(next, "click", () => {
      if (idx >= steps.length - 1) end();
      else {
        idx += 1;
        paint();
      }
    }),
    on(prev, "click", () => {
      if (idx > 0) {
        idx -= 1;
        paint();
      }
    }),
    on(close, "click", end),
    on(overlay, "click", end)
  ];
}
var BINDERS = {
  carousel: bindCarousel,
  collapse: bindCollapse,
  tooltip: bindTooltip,
  segmented: bindSegmented,
  tree: bindTree,
  calendar: bindCalendar,
  table: bindTableSort,
  tour: bindTour
};
function bindDisplayComponent(root) {
  const r = root;
  const type = r?.dataset?.mimicusDisplay;
  cleanupPrev(r, () => {
  });
  const cleanup = (type ? BINDERS[type]?.(r) : void 0) ?? (() => {
  });
  const fn = Array.isArray(cleanup) ? () => cleanup.forEach((c) => c?.()) : cleanup;
  r.__mimicusDisplayCleanup = fn;
  return () => {
    fn();
    delete r.__mimicusDisplayCleanup;
  };
}

// src/display/useDisplayBinding.ts
function useDisplayBinding(ref, type, deps = []) {
  useEffect4(() => {
    const el = ref.current;
    if (!el || !type) return void 0;
    el.dataset.mimicusDisplay = type;
    return bindDisplayComponent(el);
  }, deps);
}

// src/components/display/Display.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function cx(...p) {
  return p.filter(Boolean).join(" ");
}
function Badge({
  count,
  dot,
  showZero = false,
  max = 99,
  color = "primary",
  offset,
  size = "medium",
  children,
  className,
  style,
  ...rest
}) {
  const n = Number(count);
  const show = dot || (showZero ? n >= 0 : n > 0);
  const label = Number.isFinite(n) && n > max ? `${max}+` : count;
  return /* @__PURE__ */ jsxs8("span", { ...rest, className: cx("mimicus-badge-wrap", className), style, children: [
    children,
    show && /* @__PURE__ */ jsx12(
      "sup",
      {
        className: cx("mimicus-badge", dot && "mimicus-badge--dot", `mimicus-badge--${color}`, `mimicus-badge--${size}`),
        style: offset ? { transform: `translate(${offset[0] ?? 0}px, ${offset[1] ?? 0}px)` } : void 0,
        children: !dot && label
      }
    )
  ] });
}
function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }) {
  const autoId = useId();
  const key = panelKey ?? autoId;
  return /* @__PURE__ */ jsxs8("div", { ...rest, className: cx("mimicus-collapse__panel", defaultOpen && "is-open", className), "data-mimicus-collapse-panel": key, "data-default-open": defaultOpen, children: [
    /* @__PURE__ */ jsxs8("button", { type: "button", className: "mimicus-collapse__trigger", "data-mimicus-collapse-trigger": true, "aria-expanded": defaultOpen ? "true" : "false", children: [
      /* @__PURE__ */ jsx12("span", { className: "mimicus-collapse__arrow", "aria-hidden": true, children: "\u25B8" }),
      /* @__PURE__ */ jsx12("span", { className: "mimicus-collapse__header", children: header })
    ] }),
    /* @__PURE__ */ jsx12("div", { className: "mimicus-collapse__body", "data-mimicus-collapse-body": true, hidden: !defaultOpen, children })
  ] });
}
function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }) {
  const ref = useRef3(null);
  const keys = activeKey ?? defaultActiveKey;
  useDisplayBinding(ref, "collapse", [accordion, keys]);
  return /* @__PURE__ */ jsx12(
    "div",
    {
      ...rest,
      ref,
      className: cx("mimicus-collapse", className),
      style,
      "data-mimicus-display": "collapse",
      "data-accordion": accordion,
      "data-active-key": Array.isArray(keys) ? keys.join(",") : keys ?? "",
      children
    }
  );
}
Collapse.Panel = CollapsePanel;
function DescriptionsItem({ label, span = 1, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs8("div", { ...rest, className: cx("mimicus-descriptions__item", className), style: { gridColumn: `span ${span}` }, children: [
    /* @__PURE__ */ jsx12("dt", { className: "mimicus-descriptions__label", children: label }),
    /* @__PURE__ */ jsx12("dd", { className: "mimicus-descriptions__content", children })
  ] });
}
function Descriptions({ title, bordered = false, column = 3, size = "medium", children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs8("div", { ...rest, className: cx("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", `mimicus-descriptions--${size}`, className), style, children: [
    title && /* @__PURE__ */ jsx12("div", { className: "mimicus-descriptions__title", children: title }),
    /* @__PURE__ */ jsx12("dl", { className: "mimicus-descriptions__list", style: { "--mimicus-desc-cols": column }, children })
  ] });
}
Descriptions.Item = DescriptionsItem;
function TimelineItem({ label, color, dot, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs8("li", { ...rest, className: cx("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className), children: [
    /* @__PURE__ */ jsx12("div", { className: "mimicus-timeline__dot", children: dot }),
    /* @__PURE__ */ jsxs8("div", { className: "mimicus-timeline__content", children: [
      label && /* @__PURE__ */ jsx12("div", { className: "mimicus-timeline__label", children: label }),
      /* @__PURE__ */ jsx12("div", { className: "mimicus-timeline__body", children })
    ] })
  ] });
}
function Timeline({ mode = "left", pending, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs8("ul", { ...rest, className: cx("mimicus-timeline", `mimicus-timeline--${mode}`, className), style, children: [
    children,
    pending && /* @__PURE__ */ jsxs8("li", { className: "mimicus-timeline__item mimicus-timeline__item--pending", children: [
      /* @__PURE__ */ jsx12("div", { className: "mimicus-timeline__dot" }),
      /* @__PURE__ */ jsx12("div", { className: "mimicus-timeline__content", children: pending })
    ] })
  ] });
}
Timeline.Item = TimelineItem;
function ListItemText({ primary, secondary, className, ...rest }) {
  return /* @__PURE__ */ jsxs8("div", { ...rest, className: cx("mimicus-list-item__text", className), children: [
    primary && /* @__PURE__ */ jsx12("span", { className: "mimicus-list-item__primary", children: primary }),
    secondary && /* @__PURE__ */ jsx12("span", { className: "mimicus-list-item__secondary", children: secondary })
  ] });
}
function ListItemIcon({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx12("span", { ...rest, className: cx("mimicus-list-item__icon", className), children });
}
function ListItemAvatar({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx12("span", { ...rest, className: cx("mimicus-list-item__avatar", className), children });
}
function ListItem({ button, secondaryAction, children, className, ...rest }) {
  const Tag = button ? "button" : "li";
  return /* @__PURE__ */ jsxs8(Tag, { ...rest, className: cx("mimicus-list-item", button && "mimicus-list-item--button", className), type: button ? "button" : void 0, children: [
    children,
    secondaryAction && /* @__PURE__ */ jsx12("span", { className: "mimicus-list-item__secondary-action", children: secondaryAction })
  ] });
}
function List({ dense, disableGutters, subheader, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs8("ul", { ...rest, className: cx("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className), style, children: [
    subheader && /* @__PURE__ */ jsx12("li", { className: "mimicus-list__subheader", children: subheader }),
    children
  ] });
}
List.Item = ListItem;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;

// src/layout/panels/SidePanelSection.tsx
import { Fragment as Fragment3, jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function StatusDot({ color, size = "0.48rem" }) {
  return /* @__PURE__ */ jsx13("span", { className: "mimicus-side-panel-section__status-dot", style: { width: size, height: size, borderRadius: "50%", background: resolveColor(color), display: "inline-block", flexShrink: 0 }, "aria-hidden": true });
}
function PanelIcon({ icon, style }) {
  if (!icon) return null;
  return /* @__PURE__ */ jsx13("iconify-icon", { icon, style: { fontSize: "1.1rem", flexShrink: 0, ...style }, "aria-hidden": true });
}
function SidePanelSection({
  icon = "mdi:folder-outline",
  label,
  open,
  active,
  forceOpen,
  count,
  statusDots = [],
  color = "primary",
  collapsed,
  onToggle,
  onHeaderClick,
  children
}) {
  const statusDotsUnique = [...new Set(statusDots)];
  const accentStyle = { "--sm-accent": resolveColor(color) };
  return /* @__PURE__ */ jsxs9("div", { className: ["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" "), style: accentStyle, "data-section-color": color, children: [
    /* @__PURE__ */ jsxs9("div", { style: { display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" }, children: [
      /* @__PURE__ */ jsxs9(Button, { variant: active ? "soft" : "text", shape: "rect", color, onClick: onHeaderClick, style: { flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }, title: typeof label === "string" ? label : void 0, children: [
        /* @__PURE__ */ jsx13(PanelIcon, { icon, style: collapsed ? { fontSize: "1.2rem" } : void 0 }),
        !collapsed && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("span", { className: "sm-title-group", children: [
            /* @__PURE__ */ jsx13("span", { className: "sm-label", children: label }),
            statusDotsUnique.length > 0 && /* @__PURE__ */ jsx13("span", { className: "sm-status-dots", children: statusDotsUnique.map((dotColor) => /* @__PURE__ */ jsx13(StatusDot, { color: dotColor }, dotColor)) })
          ] }),
          count != null && /* @__PURE__ */ jsx13("span", { className: "sm-trail", children: /* @__PURE__ */ jsx13(Badge, { children: count }) })
        ] })
      ] }),
      !forceOpen && !collapsed && /* @__PURE__ */ jsx13(Button, { variant: "text", shape: "rect", color, onClick: (e) => {
        e.stopPropagation();
        onToggle?.();
      }, style: { flex: "0 0 auto", width: "fit-content", minWidth: "2rem", paddingInline: "0.25rem" }, title: open ? "Contraer" : "Expandir", "aria-expanded": open, children: /* @__PURE__ */ jsx13(PanelIcon, { icon: "mdi:chevron-down", style: { transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" } }) })
    ] }),
    open && !collapsed && /* @__PURE__ */ jsx13("div", { className: "sm-content mimicus-side-panel-section__content", style: { paddingLeft: "0.35rem" }, children: /* @__PURE__ */ jsx13("div", { style: { display: "flex", flexDirection: "column", gap: "0.1rem" }, children }) })
  ] });
}

// src/layout/containers/Space.tsx
import { Children as Children5 } from "react";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var SIZE_MAP = { small: "0.5rem", middle: "0.75rem", medium: "0.75rem", large: "1rem" };
function resolveSpaceSize(size) {
  if (size == null || size === "") return SIZE_MAP.small;
  if (typeof size === "number") return `${size}px`;
  if (typeof size === "string" && SIZE_MAP[size]) return SIZE_MAP[size];
  return String(size);
}
function Space({
  orientation = "horizontal",
  vertical = false,
  size = "small",
  wrap = false,
  align,
  separator,
  className,
  style,
  children,
  ...rest
}) {
  const dir = vertical || orientation === "vertical" ? "column" : "row";
  const gap = resolveSpaceSize(size);
  const items = Children5.toArray(children).filter((c) => c != null && c !== false);
  const cls = ["mimicus-space", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(
    "display: flex",
    `flex-direction: ${dir}`,
    `gap: ${gap}`,
    wrap && "flex-wrap: wrap",
    align && `align-items: ${align}`,
    style
  );
  if (!separator) {
    return /* @__PURE__ */ jsx14("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ jsx14("span", { className: "mimicus-space__item", children: child }, i)) });
  }
  return /* @__PURE__ */ jsx14("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ jsxs10("span", { className: "mimicus-space__item", children: [
    child,
    i < items.length - 1 ? /* @__PURE__ */ jsx14("span", { className: "mimicus-space__sep", "aria-hidden": "true", children: separator }) : null
  ] }, i)) });
}

// src/layout/containers/Stack.tsx
import { Children as Children6 } from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var SPACING_PRESET = { small: "0.5rem", medium: "0.75rem", large: "1rem" };
function resolveSpacing(spacing) {
  if (spacing == null || spacing === "") return 0;
  if (typeof spacing === "number") return `${spacing * 8}px`;
  if (typeof spacing === "string" && SPACING_PRESET[spacing]) return SPACING_PRESET[spacing];
  return String(spacing);
}
function Stack({
  direction = "column",
  spacing = 0,
  divider,
  alignItems,
  justifyContent,
  className,
  style,
  children,
  ...rest
}) {
  const gap = resolveSpacing(spacing);
  const flexDir = direction === "row" || direction === "row-reverse" ? direction : direction === "column-reverse" ? "column-reverse" : "column";
  const items = Children6.toArray(children).filter((c) => c != null && c !== false);
  return /* @__PURE__ */ jsx15(
    FlexLayout,
    {
      direction: flexDir,
      gap: gap || void 0,
      items: alignItems,
      justify: justifyContent,
      className: ["mimicus-stack", className].filter(Boolean).join(" "),
      style,
      ...rest,
      children: divider ? items.flatMap((child, i) => i < items.length - 1 ? [child, /* @__PURE__ */ jsx15("span", { className: "mimicus-stack__divider", children: divider }, `d-${i}`)] : [child]) : children
    }
  );
}

// src/layout/containers/Box.tsx
import { createElement } from "react";
function Box({ component: Component = "div", className, style, sx, children, ...rest }) {
  const mergedStyle = joinStyle(style, sx && typeof sx === "object" ? objectToStyle(sx) : "");
  const cls = ["mimicus-box", className].filter(Boolean).join(" ");
  return createElement(Component, { className: cls, style: mergedStyle || void 0, ...rest }, children);
}
function objectToStyle(sx) {
  return Object.entries(sx).map(([k, v]) => `${camelToKebab(k)}:${v}`).join("; ");
}
function camelToKebab(s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

// src/layout/containers/Container.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var MAX_WIDTHS = { xs: 444, sm: 600, md: 900, lg: 1200, xl: 1536 };
function resolveMaxWidth(maxWidth) {
  if (maxWidth == null || maxWidth === false) return void 0;
  if (typeof maxWidth === "number") return `${maxWidth}px`;
  if (maxWidth in MAX_WIDTHS) return `${MAX_WIDTHS[maxWidth]}px`;
  return String(maxWidth);
}
function Container({ maxWidth = "lg", fixed = false, disableGutters = false, className, style, children, ...rest }) {
  const mw = resolveMaxWidth(maxWidth);
  const cls = ["mimicus-container", fixed && "mimicus-container--fixed", disableGutters && "mimicus-container--no-gutters", className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    "width: 100%",
    "margin-inline: auto",
    mw && `max-width: ${mw}`,
    !disableGutters && "padding-inline: clamp(0.75rem, 3vw, 1.5rem)",
    style
  );
  return /* @__PURE__ */ jsx16("div", { className: cls, style: mergedStyle, ...rest, children });
}

// src/layout/grid/Masonry.tsx
import { Children as Children7 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
function resolveGutter(gutter) {
  if (gutter == null || gutter === "") return "0";
  if (typeof gutter === "number") return `${gutter}px`;
  return String(gutter);
}
function resolveColumns(columns, sizew = "md") {
  if (typeof columns === "number") return columns;
  if (columns && typeof columns === "object") {
    const order = ["xs", "sm", "md", "lg", "xl"];
    const idx = order.indexOf(sizew);
    let n = columns.xs ?? 1;
    for (const bp of order) {
      if (columns[bp] != null) n = columns[bp];
      if (bp === sizew || order.indexOf(bp) >= idx) break;
    }
    return n;
  }
  return 3;
}
function Masonry({ columns = 3, gutter = 0, className, style, children, items, itemRender, ...rest }) {
  const cols = resolveColumns(columns);
  const gap = resolveGutter(gutter);
  const cls = ["mimicus-masonry", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(`column-count: ${cols}`, `column-gap: ${gap}`, style);
  if (items?.length) {
    return /* @__PURE__ */ jsx17("div", { className: cls, style: rootStyle, ...rest, children: items.map((item) => /* @__PURE__ */ jsx17("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: itemRender ? itemRender(item) : item.children }, item.key ?? item.id)) });
  }
  return /* @__PURE__ */ jsx17("div", { className: cls, style: rootStyle, ...rest, children: Children7.map(children, (child, i) => /* @__PURE__ */ jsx17("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: child }, i)) });
}

// src/layout/grid/ImageList.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function resolveGap2(gap) {
  if (gap == null || gap === "") return "4px";
  if (typeof gap === "number") return `${gap}px`;
  return String(gap);
}
function ImageListItem({ cols = 1, rows = 1, className, style, children, ...rest }) {
  const spanStyle = joinStyle(
    cols > 1 && `grid-column: span ${cols}`,
    rows > 1 && `grid-row: span ${rows}`,
    style
  );
  return /* @__PURE__ */ jsx18("li", { className: ["mimicus-image-list__item", className].filter(Boolean).join(" "), style: spanStyle, ...rest, children });
}
function ImageList({
  cols = 3,
  rowHeight = 164,
  gap = 4,
  variant = "standard",
  className,
  style,
  children,
  ...rest
}) {
  const g = resolveGap2(gap);
  const cls = ["mimicus-image-list", variant === "masonry" && "mimicus-image-list--masonry", className].filter(Boolean).join(" ");
  if (variant === "masonry") {
    return /* @__PURE__ */ jsx18("ul", { className: cls, style: joinStyle(`column-count: ${cols}`, `column-gap: ${g}`, "list-style: none", "margin: 0", "padding: 0", style), ...rest, children });
  }
  return /* @__PURE__ */ jsx18(
    "ul",
    {
      className: cls,
      style: joinStyle(
        "display: grid",
        `grid-template-columns: repeat(${cols}, minmax(0, 1fr))`,
        `gap: ${g}`,
        variant === "quilted" && "grid-auto-rows: auto",
        `grid-auto-rows: ${rowHeight}px`,
        "list-style: none",
        "margin: 0",
        "padding: 0",
        style
      ),
      ...rest,
      children
    }
  );
}
ImageList.Item = ImageListItem;

// src/layout/dividers/Separator.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function Separator({
  orientation = "horizontal",
  color = "",
  borderStyle = "solid",
  thickness = 1,
  startMargin = 8,
  endMargin = 8,
  className,
  style,
  ...rest
}) {
  const axis = orientation === "vertical" ? "vertical" : "horizontal";
  const lineColor = color ? resolveColor(color) : resolveColor("border");
  const cls = ["mimicus-separator", `mimicus-separator--${axis}`, className].filter(Boolean).join(" ");
  const mergedStyle = axis === "horizontal" ? {
    display: "block",
    width: "100%",
    height: 0,
    border: "none",
    borderTop: `${thickness}px ${borderStyle} ${lineColor}`,
    margin: `${startMargin}px 0 ${endMargin}px`,
    ...style && typeof style === "object" ? style : {}
  } : {
    display: "inline-block",
    alignSelf: "stretch",
    width: 0,
    minHeight: "1em",
    height: "auto",
    border: "none",
    borderLeft: `${thickness}px ${borderStyle} ${lineColor}`,
    margin: `0 ${startMargin}px 0 ${endMargin}px`,
    verticalAlign: "middle",
    flexShrink: 0,
    ...style && typeof style === "object" ? style : {}
  };
  return /* @__PURE__ */ jsx19("span", { className: cls, role: "separator", "aria-orientation": axis, style: mergedStyle, ...rest });
}

// src/layout/grid/GridResponsiveForm.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var CELLS_BY_SIZEW = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };
function computeCells(sizew, maxcells, mincells) {
  const base = CELLS_BY_SIZEW[sizew] ?? 1;
  const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
  return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
}
function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }) {
  const { sizew } = useLayoutSlot();
  const cells = computeCells(sizew ?? "md", maxcells, mincells);
  return /* @__PURE__ */ jsx20(GridLayout, { sizew, cells: String(cells), gap, ...gridProps, children });
}
function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }) {
  return /* @__PURE__ */ jsx20(BlockLayout, { className: ["mimicus-grid-responsive-form", className].filter(Boolean).join(" "), style, children: /* @__PURE__ */ jsx20(GridResponsiveFormInner, { maxcells, mincells, gap, ...gridProps, children }) });
}
export {
  APP_LAYOUT_VARIANT_OPTIONS,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  BlockLayout,
  Box,
  Container,
  Divider,
  FlexLayout,
  GridLayout,
  GridResponsiveForm,
  ImageList,
  Masonry,
  PLAYGROUND_APP_LAYOUT_OPTIONS,
  Separator,
  SidePanel,
  SidePanelSection,
  Space,
  Splitter,
  Stack,
  appLayoutGridTemplate,
  appLayoutResponsiveGridTemplate,
  isAppLayoutVariant,
  normalizeAppLayoutVariant,
  normalizePlaygroundAppLayoutVariant,
  useLayoutSlot
};
