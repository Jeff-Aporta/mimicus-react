var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/layout/AppLayout.jsx
import { Children, isValidElement, useMemo as useMemo2 } from "react";

// src/layout/appLayoutVariants.js
var APP_LAYOUT_VARIANT_OPTIONS = [
  { id: "side", label: "Side" },
  { id: "top-side", label: "Top + side" },
  { id: "top-side-2", label: "Side derecho" },
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

// src/layout/appLayoutContext.jsx
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

// src/layout/AppLayout.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };
function collectSlots(children) {
  const slots = { header: null, sider: null, footer: null, default: [] };
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
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
function Header(props) {
  return /* @__PURE__ */ jsx2(Slot, { ...props });
}
Header.__appLayoutSlot = "header";
function Sider(props) {
  return /* @__PURE__ */ jsx2(Slot, { ...props });
}
Sider.__appLayoutSlot = "sider";
function Footer(props) {
  return /* @__PURE__ */ jsx2(Slot, { ...props });
}
Footer.__appLayoutSlot = "footer";
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
  return /* @__PURE__ */ jsxs("div", { ...rest, className: rootClass, style: rootStyle, children: [
    hasHeader && /* @__PURE__ */ jsx2("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--header", children: slots.header }),
    hasSider && /* @__PURE__ */ jsx2("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--sider", children: slots.sider }),
    /* @__PURE__ */ jsx2("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--content", children: slots.default }),
    hasFooter && /* @__PURE__ */ jsx2("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--footer", children: slots.footer })
  ] });
}
var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

// src/layout/AppLayoutSider.jsx
import { useEffect } from "react";

// src/lib/resolveColor.js
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
function colorMix(c1, c2, p) {
  const r1 = resolveColor(c1);
  if (p <= 0) return r1;
  const r2 = resolveColor(c2);
  if (p >= 100) return r2;
  return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
}

// src/components/Button.jsx
import { useState as useState2 } from "react";

// src/theme/constants.js
var LUMINANCE_STORAGE_KEY = "theme-luminance";
var THEME_COLOR_STORAGE_KEY = "theme-color";
var DESIGN_SCHEME_STORAGE_KEY = "design-scheme";
var LEGACY_LUMINANCE_KEYS = ["color-theme", "THEME_PREFERENCE_KEY"];
var LEGACY_THEME_COLOR_MAP = {
  contapyme: "hues-dodgerblue",
  ocean: "oceano",
  emerald: "natural",
  sunset: "ambar",
  violet: "lavanda",
  rose: "cereza",
  slate: "grafito",
  mint: "menta",
  magenta: "fucsia"
};
var THEME_COLOR_OPTIONS = [
  { id: "hues-dodgerblue", label: "Dodger" },
  { id: "vulcano", label: "Vulcano" },
  { id: "natural", label: "Natural" },
  { id: "coral", label: "Coral" },
  { id: "oceano", label: "Oc\xE9ano" },
  { id: "lavanda", label: "Lavanda" },
  { id: "ambar", label: "\xC1mbar" },
  { id: "cereza", label: "Cereza" },
  { id: "grafito", label: "Grafito" },
  { id: "menta", label: "Menta" },
  { id: "indigo", label: "\xCDndigo" },
  { id: "tierra", label: "Tierra" },
  { id: "fucsia", label: "Fucsia" }
];
var DESIGN_SCHEME_OPTIONS = [
  { id: "mono", label: "Mono" },
  { id: "dual", label: "Dual" },
  { id: "triad", label: "Tr\xEDada" }
];
var LOOKNFEEL_STORAGE_KEY = "looknfeel";
var LOOKNFEEL_DEFAULT = "contapyme";
var NEON_LOOKNFEELS = ["neon-mono", "neon-dual", "neon-triad"];
var LOOKNFEEL_OPTIONS = [
  { id: "contapyme", label: "ContaPyme" },
  { id: "neon-mono", label: "Neon mono" },
  { id: "neon-dual", label: "Neon dual" },
  { id: "neon-triad", label: "Neon tr\xEDada" },
  { id: "mac-liquidglass", label: "Mac glass" },
  { id: "lab-dual", label: "Lab dual" },
  { id: "lab-triad", label: "Lab tr\xEDada" },
  { id: "w98", label: "Windows 98" },
  { id: "wxp", label: "Windows XP" },
  { id: "wvista", label: "Windows Vista" }
];
var LOOKNFEEL_DESIGN_SCHEME = {
  contapyme: "triad",
  "neon-mono": "mono",
  "neon-dual": "dual",
  "neon-triad": "triad",
  "mac-liquidglass": "dual",
  w98: "mono",
  wxp: "mono",
  wvista: "mono",
  "lab-dual": "dual",
  "lab-triad": "triad"
};
var LEGACY_LOOKNFEEL_MAP = {
  classic: "contapyme",
  "neon-glass": "neon-triad"
};
var LOOKNFEEL_IDS = LOOKNFEEL_OPTIONS.map((o) => o.id);
function isLuminance(value) {
  return value === "light" || value === "dark";
}
function isThemeColor(value) {
  return THEME_COLOR_OPTIONS.some((o) => o.id === value);
}
function isDesignScheme(value) {
  return DESIGN_SCHEME_OPTIONS.some((o) => o.id === value);
}
function normalizeDesignScheme(value) {
  return isDesignScheme(value) ? value : "mono";
}
function normalizeThemeColor(value) {
  if (isThemeColor(value)) return value;
  if (typeof value === "string" && LEGACY_THEME_COLOR_MAP[value]) return LEGACY_THEME_COLOR_MAP[value];
  return "hues-dodgerblue";
}
function isLooknfeel(value) {
  return typeof value === "string" && LOOKNFEEL_IDS.includes(value);
}
function normalizeLooknfeel(value) {
  if (isLooknfeel(value)) return value;
  if (typeof value === "string" && LEGACY_LOOKNFEEL_MAP[value]) return LEGACY_LOOKNFEEL_MAP[value];
  return LOOKNFEEL_DEFAULT;
}
function designSchemeForLooknfeel(value) {
  return LOOKNFEEL_DESIGN_SCHEME[value] ?? "mono";
}
function readLuminanceFromDom() {
  if (typeof document === "undefined") return "light";
  const v = document.documentElement.dataset.luminance;
  return isLuminance(v) ? v : "light";
}
function readThemeColorFromDom() {
  if (typeof document === "undefined") return "hues-dodgerblue";
  return normalizeThemeColor(document.documentElement.dataset.themeColor);
}
function readDesignSchemeFromDom() {
  if (typeof document === "undefined") return "mono";
  return normalizeDesignScheme(document.documentElement.dataset.designScheme);
}
function readLooknfeelFromDom() {
  if (typeof document === "undefined") return LOOKNFEEL_DEFAULT;
  return normalizeLooknfeel(document.documentElement.dataset.looknfeel);
}
function isNgVariant(value) {
  return typeof value === "string" && value.startsWith("ng-");
}
function ngBaseVariant(value) {
  return isNgVariant(value) ? value.slice(3) : value;
}
function normalizeVariant(variant, fallback = "solid") {
  if (variant == null || variant === "") return fallback;
  if (isNgVariant(variant)) return ngBaseVariant(variant);
  return variant;
}
function surfaceVariantAttrs(variant, fallback = "solid") {
  return { "data-variant": normalizeVariant(variant, fallback) };
}
function isGlassVariant(variant) {
  return normalizeVariant(variant, "") === "glass";
}

// src/lib/surfaceColor.js
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

// src/components/Button.jsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Button({
  type = "button",
  disabled = false,
  variant = "solid",
  color,
  shape = "round",
  loading = false,
  glassActive = false,
  wrap = false,
  className,
  style,
  onClick,
  children,
  icon,
  ...rest
}) {
  const [busy, setBusy] = useState2(false);
  const normalizedVariant = normalizeVariant(variant, "solid");
  const surfaceStyle = mergeSurfaceStyle(color, { variant: normalizedVariant, style });
  const isLoading = loading || busy;
  const isDisabled = disabled || isLoading;
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
  const cls = [wrap && "button-wrap", isLoading && "loading", className].filter(Boolean).join(" ");
  const dataProps = {
    "data-shape": shape,
    "data-variant": normalizedVariant,
    "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : void 0,
    ...surfaceStyle,
    className: cls,
    style: surfaceStyle.style
  };
  const content = /* @__PURE__ */ jsxs2(Fragment, { children: [
    (icon || isLoading) && (isLoading ? /* @__PURE__ */ jsx3("span", { className: "mimicus-text-icon", "aria-hidden": true, children: "\u2026" }) : icon),
    children != null && /* @__PURE__ */ jsx3("span", { className: "button-content", children })
  ] });
  if (wrap) {
    return /* @__PURE__ */ jsx3(
      "div",
      {
        ...rest,
        ...dataProps,
        role: "button",
        tabIndex: isDisabled ? -1 : 0,
        "aria-disabled": isDisabled ? "true" : void 0,
        onClick: handleClick,
        onKeyDown: onWrapKeydown,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx3(
    "button",
    {
      ...rest,
      ...dataProps,
      type,
      disabled: isDisabled,
      onClick: handleClick,
      children: content
    }
  );
}

// src/layout/AppLayoutSider.jsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3("aside", { ...rest, className: rootClass, style: mergedStyle, children: [
    /* @__PURE__ */ jsx4("div", { className: "mimicus-app-layout-sider__body", children }),
    collapsible && /* @__PURE__ */ jsx4("div", { className: "mimicus-app-layout-sider__trigger", children: /* @__PURE__ */ jsx4(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" }, children: collapsed ? "\u203A" : "\u2039" }) })
  ] });
}

// src/lib/colorTransform.js
var mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);
var mkUnbow = (color, percent = 0) => colorMix(color, `hsl(from ${resolveColor("color")} h s calc(100 - l))`, percent);
function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
}

// src/lib/cardHelpers.js
var px = (n) => `${n.toFixed(2)}px`;
var clamp01 = (n) => Math.max(0, Math.min(1, n));
var rgba = (r, g, b, a) => `rgba(${r},${g},${b},${a.toFixed(4)})`;
var boxShadowLayer = (inset, ox, oy, blur, spread, color) => `${inset ? "inset " : ""}${px(ox)} ${px(oy)} ${px(blur)} ${px(spread)} ${color}`;
function insetSigns(angleDeg) {
  const known = { 0: [-1, 0], 90: [0, 1], 180: [1, 0], 270: [0, -1] };
  const preset = known[angleDeg];
  if (preset) return preset;
  const rad = angleDeg * Math.PI / 180;
  const cos = Math.cos(rad);
  const sin = -Math.sin(rad);
  if (Math.abs(cos) < 1e-15 && Math.abs(sin) < 1e-15) return [-1, -1];
  let sx = -Math.sign(cos);
  let sy = -Math.sign(sin);
  if (sx === 0) sx = -Math.sign(sin) || -1;
  if (sy === 0) sy = -Math.sign(cos) || -1;
  return [sx, sy];
}
function decodeRelieve(n) {
  const packed = Math.floor(Number(n)) || 0;
  const percent = Math.min(100, Math.max(0, packed & 127));
  let angleIndex = packed >> 7 & 15;
  if (angleIndex > 8) angleIndex = 0;
  return {
    percent,
    angleIndex,
    elevation: packed >> 11 !== 0 ? Math.min(100, Math.max(0, packed >> 11 & 127)) : 10
  };
}
function cardShadow(vrnt, rlv) {
  if (vrnt === "flat") return void 0;
  const { percent, angleIndex, elevation } = decodeRelieve(Number(rlv) || 0);
  const angleDeg = angleIndex <= 0 || angleIndex > 8 ? 320 : (angleIndex - 1) * 45;
  const layers = [];
  if (elevation > 0) {
    const t = clamp01(elevation / 100);
    const rad = (angleIndex > 1 ? (angleDeg + 180) % 360 : angleDeg) * Math.PI / 180;
    const dist = t * 24;
    layers.push(boxShadowLayer(false, dist * Math.cos(rad), -dist * Math.sin(rad), 2 + t * 15, t * 3, colorMix(rgba(0, 0, 0, 1), "transparent", 95 - 10 * t)));
  }
  const relief = percent - 50;
  if (relief !== 0) {
    const t = Math.min(1, Math.abs(relief) / 50);
    const curve = Math.pow(t, 0.7);
    const maxInset = 6 * 0.8;
    const insetLen = curve * maxInset;
    const blur = Math.max(0.5, (1 - curve) * maxInset);
    const concave = relief < 0;
    const strength = concave ? Math.min(2 * t * 0.7, 0.1) * 0.6 : Math.min(t * 0.7, 0.05);
    const light = rgba(255, 255, 255, clamp01(strength * (concave ? 0.3 : 1)));
    const dark = rgba(0, 0, 0, (concave ? Math.min(strength * 2.5 * 1.7, 1) : strength) * 0.5);
    const spread = (concave ? Math.max(blur * 2, 2) : blur) + 3 * clamp01((percent - 50) / 50);
    const [sx, sy] = insetSigns(angleDeg);
    layers.push(boxShadowLayer(true, sx * insetLen, sy * insetLen, relief > 0 ? spread : blur, 0, relief > 0 ? light : dark));
    layers.push(boxShadowLayer(true, -sx * insetLen, -sy * insetLen, relief > 0 ? blur : spread, 0, relief > 0 ? dark : light));
  }
  return layers.length > 0 ? layers.join(", ") : void 0;
}
function cardBg(vrnt, rlv, clr) {
  if (!["solid", "onion", "flat"].includes(String(vrnt))) return "";
  const { percent } = decodeRelieve(Number(rlv) || 0);
  const onion = vrnt === "onion";
  if (percent <= 50) {
    const t = (50 - percent) / 50;
    return colorMix(colorMix(onion ? "transparent" : clr, resolveColor("bg"), 50 * t), "black", 3 * t);
  }
  return colorMix(onion ? "transparent" : clr, "white", 5 * ((percent - 50) / 50));
}

// src/components/Card.jsx
import { jsx as jsx5 } from "react/jsx-runtime";
var PADDING_BY_SIZE = { xs: "0.35rem", sm: "0.4rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
var DEFAULT_RELIEVE = 55;
function Card({
  inline = false,
  variant = "",
  relieve = -1,
  sizew = "md",
  className,
  style,
  children,
  ...rest
}) {
  const variantAttrs = surfaceVariantAttrs(variant, "solid");
  const normalizedVariant = variantAttrs["data-variant"];
  const resolvedRelieve = (relieve ?? -1) < 0 ? DEFAULT_RELIEVE : relieve;
  const borderColor = mkSemanticBorder("neutral", 50, 85);
  const autoBoxShadow = normalizedVariant === "solid" || normalizedVariant === "onion";
  const autoBackground = normalizedVariant === "solid" || normalizedVariant === "onion" || normalizedVariant === "flat";
  const baseBg = cardBg(normalizedVariant, resolvedRelieve, resolveColor("card"));
  const fillBg = normalizedVariant === "onion" ? colorMix(baseBg, "transparent", 60) : baseBg;
  const boxShadow = autoBoxShadow ? cardShadow(normalizedVariant, resolvedRelieve) : void 0;
  const cardStyle = {
    color: resolveColor("color"),
    padding: PADDING_BY_SIZE[sizew] || PADDING_BY_SIZE.md,
    border: `1px solid ${borderColor}`,
    ...boxShadow ? { boxShadow } : {},
    ...autoBackground ? { backgroundColor: fillBg } : {},
    ...style && typeof style === "object" ? style : {}
  };
  const Tag = inline ? "span" : "div";
  return /* @__PURE__ */ jsx5(
    Tag,
    {
      ...rest,
      className: ["card-root", className].filter(Boolean).join(" "),
      style: cardStyle,
      "data-variant": normalizedVariant,
      children
    }
  );
}

// src/theme/ThemeProvider.jsx
import { useEffect as useEffect2, useState as useState3 } from "react";

// src/theme/themeEngine.js
var state = {
  luminance: "light",
  themeColor: "hues-dodgerblue",
  designScheme: "mono"
};
var listeners = /* @__PURE__ */ new Set();
function notify() {
  const snap = getThemeState();
  listeners.forEach((fn) => {
    try {
      fn(snap);
    } catch {
    }
  });
}
function getThemeState() {
  return { ...state };
}
function subscribeTheme(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function readStoredLuminance() {
  if (typeof localStorage === "undefined") return "light";
  try {
    for (const key of LEGACY_LUMINANCE_KEYS) {
      const legacy = localStorage.getItem(key);
      if (legacy === "dark" || legacy === "light") return legacy;
    }
    const v = localStorage.getItem(LUMINANCE_STORAGE_KEY);
    if (isLuminance(v)) return v;
  } catch {
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}
function readStoredThemeColor() {
  if (typeof localStorage === "undefined") return "hues-dodgerblue";
  try {
    const v = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (v) return normalizeThemeColor(v);
  } catch {
  }
  return "hues-dodgerblue";
}
function readStoredDesignScheme() {
  if (typeof localStorage === "undefined") return "mono";
  try {
    const v = localStorage.getItem(DESIGN_SCHEME_STORAGE_KEY);
    if (isDesignScheme(v)) return v;
  } catch {
  }
  return "mono";
}
function syncLegacyDomClasses(root, l) {
  root.classList.toggle("dark", l === "dark");
  root.classList.toggle("light", l === "light");
}
function applyTheme(nextLuminance, nextThemeColor, nextDesignScheme = state.designScheme) {
  state = {
    luminance: nextLuminance,
    themeColor: nextThemeColor,
    designScheme: nextDesignScheme
  };
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.dataset.luminance = nextLuminance;
    root.dataset.themeColor = nextThemeColor;
    root.dataset.designScheme = nextDesignScheme;
    syncLegacyDomClasses(root, nextLuminance);
  }
  try {
    localStorage.setItem(LUMINANCE_STORAGE_KEY, nextLuminance);
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, nextThemeColor);
    localStorage.setItem(DESIGN_SCHEME_STORAGE_KEY, nextDesignScheme);
    for (const key of LEGACY_LUMINANCE_KEYS) {
      localStorage.setItem(key, nextLuminance);
    }
  } catch {
  }
  notify();
}
function setLuminance(value) {
  if (state.luminance === value && readLuminanceFromDom() === value) return;
  applyTheme(value, state.themeColor, state.designScheme);
}
function setThemeColor(value) {
  if (state.themeColor === value && readThemeColorFromDom() === value) return;
  applyTheme(state.luminance, value, state.designScheme);
}
function setDesignScheme(value) {
  if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
  applyTheme(state.luminance, state.themeColor, value);
}
function bootTheme() {
  applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
}

// src/theme/looknfeelEngine.js
var looknfeel = LOOKNFEEL_DEFAULT;
var listeners2 = /* @__PURE__ */ new Set();
function getLooknfeelState() {
  return looknfeel;
}
function subscribeLooknfeel(fn) {
  listeners2.add(fn);
  return () => listeners2.delete(fn);
}
function readStoredLooknfeel() {
  if (typeof localStorage === "undefined") return LOOKNFEEL_DEFAULT;
  try {
    return normalizeLooknfeel(localStorage.getItem(LOOKNFEEL_STORAGE_KEY));
  } catch {
    return LOOKNFEEL_DEFAULT;
  }
}
function applyLooknfeel(value) {
  looknfeel = value;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.looknfeel = value;
  }
  try {
    localStorage.setItem(LOOKNFEEL_STORAGE_KEY, value);
  } catch {
  }
  setDesignScheme(designSchemeForLooknfeel(value));
  listeners2.forEach((fn) => {
    try {
      fn(value);
    } catch {
    }
  });
}
function bootLooknfeel() {
  applyLooknfeel(readStoredLooknfeel());
}

// src/theme/ThemeProvider.jsx
function useTheme() {
  const [theme, setTheme] = useState3(() => getThemeState());
  useEffect2(() => subscribeTheme(setTheme), []);
  return theme;
}
function useLooknfeel() {
  const [look, setLook] = useState3(() => getLooknfeelState());
  useEffect2(() => subscribeLooknfeel(setLook), []);
  return look;
}
function ThemeProvider({ children }) {
  useTheme();
  useLooknfeel();
  return children;
}

// src/spa/SpaRouter.jsx
import { createContext as createContext2, useContext as useContext2, useEffect as useEffect3, useMemo as useMemo3, useState as useState4 } from "react";

// src/spa/urlState.js
var URL_STATE_PARAM = "s";
var STATE_VERSION = 1;
function initial() {
  return { v: STATE_VERSION };
}
function normalize(raw) {
  if (!raw || typeof raw !== "object") return initial();
  const o = raw;
  const out = { v: typeof o.v === "number" ? o.v : STATE_VERSION };
  if (typeof o.r === "string" && o.r.trim()) out.r = o.r.trim();
  if (o.e === 1 || o.e === true) out.e = 1;
  return out;
}
function slimForUrl(state2) {
  const out = { v: state2.v ?? STATE_VERSION };
  if (state2.r) out.r = state2.r;
  if (state2.e === 1) out.e = 1;
  return out;
}
function b64urlEncode(str) {
  return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlDecode(str) {
  let b = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (b.length % 4) b += "=";
  return decodeURIComponent(escape(atob(b)));
}
function readUrl() {
  const raw = new URLSearchParams(location.search).get(URL_STATE_PARAM);
  if (!raw) return null;
  try {
    return normalize(JSON.parse(b64urlDecode(raw)));
  } catch {
    return null;
  }
}
function migrateLegacyHash() {
  if (!location.hash) return null;
  const raw = location.hash.replace(/^#\/?/, "").trim();
  if (!raw || raw === "root") {
    const url2 = new URL(location.href);
    url2.hash = "";
    history.replaceState(null, "", url2);
    return null;
  }
  const url = new URL(location.href);
  url.hash = "";
  history.replaceState(null, "", url);
  return normalize({ v: STATE_VERSION, r: decodeURIComponent(raw) });
}
function createUrlState() {
  let state2 = initial();
  const listeners3 = /* @__PURE__ */ new Set();
  let writeTimer = null;
  let booted = false;
  const getSnapshot = () => ({ ...state2 });
  const writeUrl = () => {
    try {
      const slimmed = slimForUrl(state2);
      const json = JSON.stringify(slimmed);
      const url = new URL(location.href);
      if (json === "{}" || json === `{"v":${STATE_VERSION}}`) url.searchParams.delete(URL_STATE_PARAM);
      else url.searchParams.set(URL_STATE_PARAM, b64urlEncode(json));
      url.hash = "";
      history.replaceState({ mimicusSpa: true }, "", url);
    } catch (e) {
      console.warn("urlState: no se pudo escribir ?s=", e);
    }
  };
  const scheduleWrite = () => {
    if (writeTimer) clearTimeout(writeTimer);
    writeTimer = setTimeout(writeUrl, 150);
  };
  const notify2 = () => {
    const snap = getSnapshot();
    listeners3.forEach((fn) => {
      try {
        fn(snap);
      } catch {
      }
    });
  };
  const api = {
    get: getSnapshot,
    setRoute(route) {
      state2 = normalize({ v: STATE_VERSION, r: route || void 0, e: state2.e });
      notify2();
      scheduleWrite();
      return getSnapshot();
    },
    reset() {
      state2 = initial();
      notify2();
      if (writeTimer) clearTimeout(writeTimer);
      writeTimer = null;
      writeUrl();
      return getSnapshot();
    },
    subscribe(fn) {
      listeners3.add(fn);
      return () => listeners3.delete(fn);
    },
    boot() {
      if (booted) return getSnapshot();
      booted = true;
      const fromUrl = readUrl();
      const fromHash = fromUrl ? null : migrateLegacyHash();
      state2 = fromUrl ?? fromHash ?? initial();
      if (fromHash) scheduleWrite();
      if (typeof window !== "undefined") {
        window.addEventListener("popstate", () => {
          state2 = readUrl() ?? initial();
          notify2();
        });
      }
      return getSnapshot();
    }
  };
  return api;
}
var urlState = createUrlState();
if (typeof window !== "undefined") urlState.boot();
function setSpaRoute(route) {
  return urlState.setRoute(route);
}
function getSpaRoute() {
  return urlState.get().r ?? null;
}

// src/spa/SpaRouter.jsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var SpaContext = createContext2({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });
function useSpa() {
  return useContext2(SpaContext);
}
function useSpaRoute() {
  const { route, defaultRoute } = useSpa();
  return route ?? defaultRoute ?? null;
}
function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }) {
  const route = useSpaRoute() ?? defaultRoute;
  const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
  if (!Page) return null;
  return typeof Page === "function" ? /* @__PURE__ */ jsx6(Page, {}) : Page;
}
function SpaRouter({ routes, defaultRoute = "home", children }) {
  const [nav, setNav] = useState4(() => urlState.get());
  useEffect3(() => urlState.subscribe(setNav), []);
  const route = nav.r ?? defaultRoute;
  const navigate = (next) => urlState.setRoute(next);
  const value = useMemo3(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);
  return /* @__PURE__ */ jsx6(SpaContext.Provider, { value, children });
}
function SpaNavLink({ route, children, className, variant = "text", ...rest }) {
  const { route: active, navigate } = useSpa();
  const isActive = active === route;
  return /* @__PURE__ */ jsx6(
    Button,
    {
      ...rest,
      variant,
      className: ["mimicus-nav-link", isActive && "is-active", className].filter(Boolean).join(" "),
      onClick: () => navigate(route),
      "aria-current": isActive ? "page" : void 0,
      children
    }
  );
}
function MimicusSidebar({ title, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs4("nav", { ...rest, className: ["mimicus-sidebar", className].filter(Boolean).join(" "), children: [
    title != null && /* @__PURE__ */ jsx6("div", { className: "mimicus-sidebar-header pg-sidebar-header", children: title }),
    /* @__PURE__ */ jsx6("div", { className: "mimicus-sidebar-body pg-sidebar-body", children })
  ] });
}

// src/snippets/index.js
var snippets_exports = {};
__export(snippets_exports, {
  BOOT_CSS_TREE: () => BOOT_CSS_TREE,
  BRAND_DISPLAY_NAME: () => BRAND_DISPLAY_NAME,
  BRAND_LOGO_URL: () => BRAND_LOGO_URL,
  DEMO_BOOT_META: () => DEMO_BOOT_META,
  bootCssText: () => bootCssText,
  bootHtmlInner: () => bootHtmlInner,
  brandLoadingLabel: () => brandLoadingLabel,
  buildConnBootApplyInline: () => buildConnBootApplyInline,
  buildRootBlock: () => buildRootBlock,
  buildThemeInitInline: () => buildThemeInitInline,
  fluidCss: () => fluidCss,
  js2css: () => js2css,
  parseAppBootMeta: () => parseAppBootMeta,
  patchIndexRoot: () => patchIndexRoot,
  writeAppBoot: () => writeAppBoot
});

// src/snippets/fluidCss.js
var CSS_PROP_RE = /^[a-z][a-zA-Z0-9]*$/;
function camelToKebab(key) {
  return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
function declarations(decls) {
  return Object.entries(decls).filter(([, v]) => v != null && v !== "").map(([k, v]) => `${camelToKebab(k)}:${v}`).join(";");
}
function isPlainDeclarations(obj) {
  return Object.keys(obj).every((k) => CSS_PROP_RE.test(k) || k.startsWith("Webkit") || k.startsWith("Moz"));
}
function fluidCss(tree, indent = "") {
  const pad = indent;
  const inner = indent ? `${indent}  ` : "";
  const chunks = [];
  for (const [selector, rules] of Object.entries(tree)) {
    if (selector.startsWith("@media")) {
      chunks.push(`${pad}${selector}{${fluidCss(
        /** @type {Record<string, Record<string, unknown>>} */
        rules,
        ""
      )}}`);
      continue;
    }
    if (selector.startsWith("@keyframes")) {
      const frames = Object.entries(
        /** @type {Record<string, Record<string, unknown>>} */
        rules
      ).map(([pct, decls]) => `${pct}{${declarations(
        /** @type {Record<string, string|number>} */
        decls
      )}}`).join("");
      chunks.push(`${pad}${selector}{${frames}}`);
      continue;
    }
    if (typeof rules === "object" && rules !== null && isPlainDeclarations(
      /** @type {Record<string, unknown>} */
      rules
    )) {
      chunks.push(`${pad}${selector}{${declarations(
        /** @type {Record<string, string|number>} */
        rules
      )}}`);
    }
  }
  return chunks.join(indent ? `
${pad}` : "");
}
var js2css = fluidCss;

// src/snippets/constants.js
var BRAND_LOGO_URL = "https://pub-1c290cc606c8478899f5764899278571.r2.dev/brand/logo-insoft.png";
var MIMICUS_LOGO_PATH = "assets/mimicus-logo.svg";
var BRAND_DISPLAY_NAME = "Mimicus React";
function brandLoadingLabel(name = BRAND_DISPLAY_NAME) {
  return `Cargando ${name}\u2026`;
}
var DEMO_BOOT_META = {
  logoSrc: MIMICUS_LOGO_PATH,
  icon: "mdi:atom",
  name: BRAND_DISPLAY_NAME,
  label: brandLoadingLabel()
};

// src/snippets/bootScreen.js
var BOOT_CSS_TREE = {
  html: {
    colorScheme: "dark",
    background: "#0b1220"
  },
  'html[data-luminance="light"]': {
    colorScheme: "light",
    background: "#f0f6ff"
  },
  body: {
    margin: 0,
    height: "100%",
    background: "inherit"
  },
  "#root": {
    height: "100%",
    minHeight: "100vh"
  },
  ".mimicus-app-boot": {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
    background: "#0b1220",
    color: "#94a3b8"
  },
  'html[data-luminance="light"] .mimicus-app-boot': {
    background: "#f0f6ff",
    color: "#64748b"
  },
  ".mimicus-app-boot__mesh": {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(99, 102, 241, 0.22), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(0, 229, 255, 0.1), transparent 48%), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(30, 144, 255, 0.08), transparent 55%)"
  },
  'html[data-luminance="light"] .mimicus-app-boot__mesh': {
    background: "radial-gradient(ellipse 90% 55% at 15% -8%, rgba(30, 144, 255, 0.14), transparent 52%), radial-gradient(ellipse 70% 45% at 92% 5%, rgba(99, 102, 241, 0.08), transparent 48%)"
  },
  ".mimicus-app-boot__card": {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.55rem",
    padding: "1.65rem 2rem 1.45rem",
    minWidth: "min(17.5rem, 88vw)",
    maxWidth: "22rem",
    borderRadius: "14px",
    border: "1px solid rgba(0, 229, 255, 0.24)",
    background: "linear-gradient(165deg, rgba(11, 18, 32, 0.94), rgba(15, 23, 42, 0.82))",
    boxShadow: "0 0 0 1px rgba(30, 144, 255, 0.08), 0 10px 36px rgba(30, 144, 255, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    textAlign: "center"
  },
  'html[data-luminance="light"] .mimicus-app-boot__card': {
    borderColor: "rgba(30, 144, 255, 0.2)",
    background: "linear-gradient(165deg, rgba(255, 255, 255, 0.98), rgba(240, 247, 255, 0.92))",
    boxShadow: "0 8px 28px rgba(30, 144, 255, 0.1)"
  },
  ".mimicus-app-boot__icon-wrap": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3.1rem",
    height: "3.1rem",
    marginBottom: "0.15rem",
    borderRadius: "12px",
    border: "1px solid rgba(0, 229, 255, 0.38)",
    background: "rgba(14, 165, 233, 0.12)",
    boxShadow: "0 0 18px rgba(0, 229, 255, 0.16)",
    color: "#7dd3fc",
    animation: "mimicus-boot-icon-pulse 2.4s ease-in-out infinite"
  },
  'html[data-luminance="light"] .mimicus-app-boot__icon-wrap': {
    borderColor: "rgba(30, 144, 255, 0.28)",
    background: "rgba(224, 242, 254, 0.95)",
    color: "#0369a1",
    boxShadow: "0 0 14px rgba(30, 144, 255, 0.12)"
  },
  ".mimicus-app-boot__title": {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: "#e2e8f0",
    lineHeight: 1.25
  },
  'html[data-luminance="light"] .mimicus-app-boot__title': {
    color: "#0f172a"
  },
  ".mimicus-app-boot__label": {
    margin: 0,
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#94a3b8",
    lineHeight: 1.35
  },
  'html[data-luminance="light"] .mimicus-app-boot__label': {
    color: "#64748b"
  },
  ".mimicus-app-boot__bar": {
    width: "100%",
    height: "3px",
    marginTop: "0.45rem",
    borderRadius: "999px",
    background: "rgba(148, 163, 184, 0.2)",
    overflow: "hidden"
  },
  'html[data-luminance="light"] .mimicus-app-boot__bar': {
    background: "rgba(148, 163, 184, 0.28)"
  },
  ".mimicus-app-boot__bar-fill": {
    display: "block",
    height: "100%",
    width: "36%",
    borderRadius: "inherit",
    background: "linear-gradient(90deg, #1e90ff, #6366f1, #00e5ff)",
    boxShadow: "0 0 10px rgba(30, 144, 255, 0.4)",
    animation: "mimicus-boot-bar-slide 1.75s ease-in-out infinite"
  },
  ".mimicus-app-boot-watermark": {
    position: "fixed",
    right: "1.25rem",
    bottom: "1.25rem",
    width: "min(100px, 16vw)",
    height: "auto",
    opacity: 0.16,
    filter: "grayscale(1) brightness(1.15)",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: 0
  },
  'html[data-luminance="light"] .mimicus-app-boot-watermark': {
    opacity: 0.12,
    filter: "grayscale(1) brightness(0.85)"
  },
  "@keyframes mimicus-boot-icon-pulse": {
    "0%, 100%": {
      transform: "translateY(0)",
      boxShadow: "0 0 18px rgba(0, 229, 255, 0.16)"
    },
    "50%": {
      transform: "translateY(-2px)",
      boxShadow: "0 0 26px rgba(0, 229, 255, 0.28)"
    }
  },
  "@keyframes mimicus-boot-bar-slide": {
    "0%": { transform: "translateX(-130%)" },
    "100%": { transform: "translateX(330%)" }
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".mimicus-app-boot__icon-wrap, .mimicus-app-boot__bar-fill": {
      animation: "none !important"
    }
  }
};
function bootCssText(indent = "      ") {
  return fluidCss(BOOT_CSS_TREE, indent);
}
function buildThemeInitInline(themeLsKey, indent = "  ") {
  const key = JSON.stringify(String(themeLsKey || "mimicus:theme"));
  const in2 = `${indent}  `;
  return `${indent}<script>
${in2}(function () {
${in2}  var k = ${key};
${in2}  var m = "dark";
${in2}  try {
${in2}    var v = localStorage.getItem(k);
${in2}    if (v === "light" || v === "dark") m = v;
${in2}  } catch (e) { /* ignore */ }
${in2}  document.documentElement.setAttribute("data-luminance", m);
${in2}  document.documentElement.style.colorScheme = m;
${in2}})();
${indent}<\/script>`;
}
function buildConnBootApplyInline(indent = "    ") {
  const in2 = `${indent}  `;
  return `${indent}<script>
${in2}(function () {
${in2}  try {
${in2}    var raw = new URLSearchParams(location.search).get("conn");
${in2}    if (!raw) return;
${in2}    var pad = String(raw).replace(/-/g, "+").replace(/_/g, "/");
${in2}    while (pad.length % 4) pad += "=";
${in2}    var bin = atob(pad);
${in2}    var bytes = new Uint8Array(bin.length);
${in2}    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
${in2}    var conn = JSON.parse(new TextDecoder().decode(bytes));
${in2}    if (!conn || typeof conn !== "object") return;
${in2}    var t = conn.title || conn.name || conn.appName || (conn.brand && conn.brand.title);
${in2}    var ic = conn.icon || (conn.brand && conn.brand.icon);
${in2}    if (!t && !ic) return;
${in2}    globalThis.__MIMICUS_CONN__ = conn;
${in2}    var titleEl = document.getElementById("mimicus-boot-title");
${in2}    var labelEl = document.getElementById("mimicus-boot-label");
${in2}    var iconEl = document.getElementById("mimicus-boot-icon");
${in2}    if (t && titleEl) {
${in2}      titleEl.textContent = String(t);
${in2}      if (labelEl) labelEl.textContent = "Cargando " + String(t) + "\\u2026";
${in2}      document.title = String(t);
${in2}      var appName = document.querySelector('meta[name="application-name"]');
${in2}      if (appName) appName.setAttribute("content", String(t));
${in2}      var og = document.querySelector('meta[property="og:title"]');
${in2}      if (og) og.setAttribute("content", String(t));
${in2}    }
${in2}    if (ic && iconEl) {
${in2}      if (iconEl.tagName === "ICONIFY-ICON") iconEl.setAttribute("icon", String(ic));
${in2}      else if (String(ic).match(/\\.(svg|png|webp)$/i)) iconEl.setAttribute("src", String(ic));
${in2}    }
${in2}    if (ic) {
${in2}      var appIcon = document.querySelector('meta[name="app-icon"]');
${in2}      if (appIcon) appIcon.setAttribute("content", String(ic));
${in2}    }
${in2}  } catch (e) { /* ignore */ }
${in2}})();
${indent}<\/script>`;
}
function bootHtmlInner({ icon, logoSrc, label, name, watermark = true, logoUrl = BRAND_LOGO_URL }) {
  const safeIcon = String(icon || "mdi:loading").replace(/"/g, "");
  const safeLogoSrc = logoSrc ? String(logoSrc).replace(/"/g, "") : "";
  const safeLabel = String(label).replace(/</g, "");
  const displayName = String(name || "").trim() || safeLabel.replace(/^Cargando\s+/i, "").replace(/…$/, "").trim() || "App";
  const safeName = displayName.replace(/</g, "");
  const safeLogoUrl = String(logoUrl).replace(/"/g, "");
  const wm = watermark ? `<img class="mimicus-app-boot-watermark" src="${safeLogoUrl}" alt="" aria-hidden="true" decoding="async" />` : "";
  const iconInner = safeLogoSrc ? `<img id="mimicus-boot-icon" src="${safeLogoSrc}" alt="" width="42" height="42" decoding="async" />` : `<iconify-icon id="mimicus-boot-icon" icon="${safeIcon}" width="1.85em" height="1.85em"></iconify-icon>`;
  return `<div class="mimicus-app-boot">
  <div class="mimicus-app-boot__mesh" aria-hidden="true"></div>
  <div class="mimicus-app-boot__card" role="status" aria-live="polite" aria-busy="true">
    <div class="mimicus-app-boot__icon-wrap">
      ${iconInner}
    </div>
    <p class="mimicus-app-boot__title" id="mimicus-boot-title">${safeName}</p>
    <p class="mimicus-app-boot__label" id="mimicus-boot-label">${safeLabel}</p>
    ${buildConnBootApplyInline("    ")}
    <div class="mimicus-app-boot__bar" aria-hidden="true"><span class="mimicus-app-boot__bar-fill"></span></div>
  </div>
  ${wm}
</div>`;
}
function buildRootBlock(opts, indent = "  ") {
  const in2 = `${indent}  `;
  const cssBlock = opts.inlineCss !== false ? `${in2}<style>
${bootCssText(in2)}
${in2}</style>
` : "";
  return `${indent}<div id="root">
${cssBlock}${bootHtmlInner(opts).split("\n").map((line) => line ? in2 + line : line).join("\n")}
${indent}</div>`;
}
function writeAppBoot(doc, opts) {
  if (opts.inlineCss !== false) {
    doc.write(`<style>${bootCssText("")}</style>`);
  }
  doc.write(bootHtmlInner(opts));
}
function parseAppBootMeta(html) {
  let name = html.match(/<meta\s+name="application-name"\s+content="([^"]+)"/i)?.[1]?.trim();
  let icon = html.match(/<meta\s+name="app-icon"\s+content="([^"]+)"/i)?.[1]?.trim();
  if (!name) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
    name = title?.split("\u2014")[0]?.trim() || title || "App";
  }
  if (!icon) icon = "mdi:loading";
  return { name, icon, label: `Cargando ${name}\u2026` };
}
var ROOT_OPEN_RE = /<div\s+id="root"[^>]*>/i;
function findRootRange(html) {
  const start = html.search(ROOT_OPEN_RE);
  if (start < 0) throw new Error('No se encontr\xF3 <div id="root">');
  const openTag = html.match(ROOT_OPEN_RE)[0];
  const openEnd = start + openTag.length;
  let depth = 1;
  let i = openEnd;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", i);
    const nextClose = html.indexOf("</div>", i);
    if (nextClose < 0) throw new Error("</div> de cierre para #root");
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }
    depth -= 1;
    i = nextClose + "</div>".length;
    if (depth === 0) return { start, end: i };
  }
  throw new Error("#root sin cerrar");
}
function patchIndexRoot(html, meta) {
  const block = buildRootBlock(meta);
  const { start, end } = findRootRange(html);
  return html.slice(0, start) + block + html.slice(end);
}

// src/cdn/index.js
var cdn_exports = {};
__export(cdn_exports, {
  CDN_GROUPS: () => CDN_GROUPS,
  CDN_PACKS: () => CDN_PACKS,
  MIMICUS_UI_REF: () => MIMICUS_UI_REF,
  buildCdnHeadHtml: () => buildCdnHeadHtml,
  buildCdnLoaderBlock: () => buildCdnLoaderBlock,
  injectCdnHead: () => injectCdnHead,
  listCdnGroups: () => listCdnGroups,
  loadCDNs: () => loadCDNs,
  mimicusCdnBase: () => mimicusCdnBase,
  resolveCdnKeys: () => resolveCdnKeys
});

// src/cdn/baseUrl.js
var MIMICUS_UI_REF = "main";
function mimicusCdnBase() {
  if (typeof location === "undefined") {
    return `https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@${MIMICUS_UI_REF}/cdn/`;
  }
  const isDevHost = /localhost|127\.0\.0\.1|\[::1\]/.test(location.hostname);
  const isGhPagesDemo = /jeff-aporta\.github\.io\/mimicus-react/i.test(location.href);
  const base = document.querySelector("base")?.href || location.href;
  if (isDevHost || isGhPagesDemo || globalThis.__MIMICUS_UI_DIST__) {
    return new URL("cdn/", base).href.replace(/\/?$/, "/");
  }
  return `https://cdn.jsdelivr.net/gh/Jeff-Aporta/mimicus-react@${MIMICUS_UI_REF}/cdn/`;
}

// src/cdn/packs.js
var CDN_PACKS = {
  "preconnect-jsdelivr": {
    kind: "html",
    html: '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />'
  },
  "preconnect-esmsh": {
    kind: "html",
    html: '<link rel="preconnect" href="https://esm.sh" crossorigin />'
  },
  "preconnect-iconify": {
    kind: "html",
    html: '<link rel="preconnect" href="https://code.iconify.design" crossorigin />'
  },
  "importmap-react18": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime"
    }
  },
  "importmap-react18-mui": {
    kind: "importmap",
    imports: {
      react: "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?external=react",
      "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
      "@emotion/react": "https://esm.sh/@emotion/react@11.14.0?external=react,react-dom",
      "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.1?external=react,react-dom,@emotion/react",
      "@mui/material": "https://esm.sh/@mui/material@9.1.0?external=react,react-dom,@emotion/react,@emotion/styled",
      "@mui/material/": "https://esm.sh/@mui/material@9.1.0/"
    }
  },
  "script-iconify": {
    kind: "script-src",
    src: "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "iconify" }
  },
  "script-babel": {
    kind: "script-src",
    src: "https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.9/babel.min.js",
    defer: true,
    attrs: { "data-mimicus-cdn": "babel" }
  },
  "link-mimicus-ui-css": {
    kind: "link-css",
    href: (base) => base + "mimicus-ui.min.css",
    attrs: { "data-mimicus-ui-css": "1", "data-mimicus-cdn": "mimicus-ui-css" }
  },
  "script-mimicus-ui": {
    kind: "script-src",
    src: (base) => base + "mimicus-ui.min.js",
    defer: false,
    attrs: { "data-mimicus-ui-js": "1", "data-mimicus-cdn": "mimicus-ui" }
  },
  "link-app-boot-css": {
    kind: "link-css",
    href: (base) => base + "app-boot.min.css",
    attrs: { "data-mimicus-cdn": "app-boot-css" }
  },
  "importmap-mimicus-ui": {
    kind: "importmap",
    imports: (base) => ({
      "@jeff-aporta/mimicus-react": base + "mimicus-react.esm.min.js",
      "@jeff-aporta/mimicus-react/bootstrap": base + "mimicus-react.bootstrap.esm.min.js"
    })
  }
};
var CDN_GROUPS = {
  preconnect: ["preconnect-jsdelivr", "preconnect-esmsh", "preconnect-iconify"],
  react18: ["importmap-react18"],
  "react18-mui": ["importmap-react18-mui"],
  iconify: ["script-iconify"],
  babel: ["script-babel"],
  "mimicus-ui-css": ["link-mimicus-ui-css"],
  /** @deprecated IIFE legacy — usar stack-esm */
  "mimicus-ui": ["link-mimicus-ui-css", "script-mimicus-ui"],
  "importmap-mimicus": ["importmap-mimicus-ui"],
  "app-boot-css": ["link-app-boot-css"],
  /** Stack ESM — React importmap + UI CSS + alias @jeff-aporta/mimicus-react */
  "stack-esm": ["preconnect", "react18", "iconify", "mimicus-ui-css", "importmap-mimicus-ui"],
  /** Stack mínimo Mimicus React (sin MUI). */
  "stack-mimicus": ["stack-esm"],
  /** Stack tipo swagger (React + MUI + babel + iconify). */
  "stack-mui": ["preconnect", "react18-mui", "iconify", "babel"]
};

// src/cdn/loadCdns.js
function resolveCdnKeys(keys) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  function addPackId(id) {
    if (!id || seen.has(id)) return;
    if (!CDN_PACKS[id]) throw new Error(`CDN pack desconocido: ${id}`);
    seen.add(id);
    out.push(id);
  }
  function addKey(key) {
    const k = String(key || "").trim();
    if (!k) return;
    if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, k)) {
      for (const child of CDN_GROUPS[k]) {
        if (Object.prototype.hasOwnProperty.call(CDN_GROUPS, child)) addKey(child);
        else addPackId(child);
      }
      return;
    }
    addPackId(k);
  }
  for (const key of keys) addKey(key);
  return out;
}
function listCdnGroups() {
  return Object.keys(CDN_GROUPS);
}
function resolveHref(href, base) {
  return typeof href === "function" ? href(base) : href;
}
function resolveImportMap(pack, base) {
  const raw = pack.imports;
  if (typeof raw === "function") return raw(base);
  return raw || {};
}
function buildCdnHeadHtml(packIds, opts = {}) {
  const base = opts.base || mimicusCdnBase();
  const indent = opts.indent || "";
  const lines = [];
  const importMaps = {};
  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      lines.push(pack.html);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      const attrs = Object.entries({ rel: "stylesheet", href, ...pack.attrs }).map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`).join(" ");
      lines.push(`<link ${attrs} />`);
      continue;
    }
    if (pack.kind === "script-src") {
      const src = resolveHref(pack.src, base);
      const defer = pack.defer ? " defer" : "";
      const attrs = Object.entries({ src, ...pack.attrs }).map(([k, v]) => `${k}="${String(v).replace(/"/g, "")}"`).join(" ");
      lines.push(`<script${defer} ${attrs}><\/script>`);
    }
  }
  if (Object.keys(importMaps).length) {
    const json = JSON.stringify({ imports: importMaps }, null, 2);
    lines.push(`<script type="importmap">
${json}
<\/script>`);
  }
  return lines.map((line) => indent ? line.split("\n").map((l) => indent + l).join("\n") : line).join("\n");
}
function loadCDNs(...keys) {
  const doc = document;
  const flat = keys.flat();
  const packIds = resolveCdnKeys(flat);
  const html = buildCdnHeadHtml(packIds);
  if (!html) return packIds;
  if (doc.readyState === "loading") {
    doc.write(html);
    return packIds;
  }
  injectCdnHead(packIds, doc);
  return packIds;
}
function buildCdnLoaderBlock(keys, opts = {}) {
  const indent = opts.indent || "  ";
  const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "mimicus-snippets.min.js";
  const keysLit = keys.map((k) => JSON.stringify(k)).join(", ");
  return `${indent}<script src="${snippetsSrc}"><\/script>
${indent}<script>
${indent}  MimicusBootstrap.loadCDNs(${keysLit});
${indent}<\/script>`;
}
function injectCdnHead(packIds, doc = document) {
  const base = mimicusCdnBase();
  const head = doc.head;
  if (!head) throw new Error("document.head no disponible");
  const importMaps = {};
  const scriptSrcs = [];
  for (const id of packIds) {
    const pack = CDN_PACKS[id];
    if (pack.kind === "html") {
      const tpl = doc.createElement("template");
      tpl.innerHTML = pack.html.trim();
      const node = tpl.content.firstChild;
      if (node) head.appendChild(node);
      continue;
    }
    if (pack.kind === "importmap") {
      Object.assign(importMaps, resolveImportMap(pack, base));
      continue;
    }
    if (pack.kind === "link-css") {
      const href = resolveHref(pack.href, base);
      if (head.querySelector(`link[href="${href}"]`)) continue;
      const link = doc.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      for (const [k, v] of Object.entries(pack.attrs || {})) link.setAttribute(k, v);
      head.appendChild(link);
      continue;
    }
    if (pack.kind === "script-src") {
      scriptSrcs.push(pack);
    }
  }
  if (Object.keys(importMaps).length && !head.querySelector('script[type="importmap"]')) {
    const s = doc.createElement("script");
    s.type = "importmap";
    s.textContent = JSON.stringify({ imports: importMaps }, null, 2);
    head.appendChild(s);
  }
  for (const pack of scriptSrcs) {
    const src = resolveHref(pack.src, base);
    if (head.querySelector(`script[src="${src}"]`)) continue;
    const el = doc.createElement("script");
    el.src = src;
    if (pack.defer) el.defer = true;
    for (const [k, v] of Object.entries(pack.attrs || {})) el.setAttribute(k, v);
    head.appendChild(el);
  }
}

// src/index.jsx
function bootMimicusUI() {
  bootTheme();
  bootLooknfeel();
}
export {
  APP_LAYOUT_VARIANT_OPTIONS,
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  BRAND_DISPLAY_NAME,
  Button,
  Card,
  DESIGN_SCHEME_OPTIONS,
  DESIGN_SCHEME_STORAGE_KEY,
  LEGACY_LOOKNFEEL_MAP,
  LEGACY_LUMINANCE_KEYS,
  LEGACY_THEME_COLOR_MAP,
  LOOKNFEEL_DEFAULT,
  LOOKNFEEL_DESIGN_SCHEME,
  LOOKNFEEL_OPTIONS,
  LOOKNFEEL_STORAGE_KEY,
  LUMINANCE_STORAGE_KEY,
  MimicusSidebar,
  NEON_LOOKNFEELS,
  SpaNavLink,
  SpaOutlet,
  SpaRouter,
  THEME_COLOR_OPTIONS,
  THEME_COLOR_STORAGE_KEY,
  ThemeProvider,
  appLayoutGridTemplate,
  appLayoutResponsiveGridTemplate,
  applyLooknfeel,
  applyTheme,
  bootLooknfeel,
  bootMimicusUI,
  bootTheme,
  cdn_exports as cdn,
  colorMix,
  designSchemeForLooknfeel,
  fluidCss,
  getLooknfeelState,
  getSpaRoute,
  getThemeState,
  isAppLayoutVariant,
  isDesignScheme,
  isGlassVariant,
  isLooknfeel,
  isLuminance,
  isNgVariant,
  isThemeColor,
  js2css,
  mergeSurfaceStyle,
  ngBaseVariant,
  normalizeAppLayoutVariant,
  normalizeDesignScheme,
  normalizeLooknfeel,
  normalizeThemeColor,
  normalizeVariant,
  readDesignSchemeFromDom,
  readLooknfeelFromDom,
  readLuminanceFromDom,
  readThemeColorFromDom,
  resolveColor,
  setDesignScheme,
  setLuminance,
  setSpaRoute,
  setThemeColor,
  snippets_exports as snippets,
  subscribeLooknfeel,
  subscribeTheme,
  surfaceVariantAttrs,
  urlState,
  useSpa,
  useSpaRoute
};
