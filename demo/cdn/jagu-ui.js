var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};
/**
 * @jeff-aporta/jagudeloe-react-ui — CDN
 * Registra window.ISAComponents.JaguUI
 * Requiere globalThis.React y globalThis.ReactDOM.createRoot
 */
(() => {
  var __defProp = Object.defineProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/layout/AppLayout.jsx
  var import_react2 = __require("react");

  // src/layout/appLayoutVariants.js
  var appLayoutVariants_exports = {};
  __export(appLayoutVariants_exports, {
    APP_LAYOUT_VARIANT_OPTIONS: () => APP_LAYOUT_VARIANT_OPTIONS,
    appLayoutGridTemplate: () => appLayoutGridTemplate,
    appLayoutResponsiveGridTemplate: () => appLayoutResponsiveGridTemplate,
    isAppLayoutVariant: () => isAppLayoutVariant,
    normalizeAppLayoutVariant: () => normalizeAppLayoutVariant
  });
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
  var SIDER = "var(--is-app-layout-sider-w, 200px)";
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
  var import_react = __require("react");
  var AppLayoutContext = (0, import_react.createContext)(null);
  function AppLayoutProvider({ children, defaultSiderWidth = "200px" }) {
    const [siderWidth, setSiderWidth] = (0, import_react.useState)(defaultSiderWidth);
    const value = (0, import_react.useMemo)(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
    return /* @__PURE__ */ React.createElement(AppLayoutContext.Provider, { value }, children);
  }
  function useAppLayoutContext() {
    return (0, import_react.useContext)(AppLayoutContext);
  }

  // src/layout/AppLayout.jsx
  var SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };
  function collectSlots(children) {
    const slots = { header: null, sider: null, footer: null, default: [] };
    import_react2.Children.forEach(children, (child) => {
      if (!(0, import_react2.isValidElement)(child)) {
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
    return /* @__PURE__ */ React.createElement(Slot, { ...props });
  }
  Header.__appLayoutSlot = "header";
  function Sider(props) {
    return /* @__PURE__ */ React.createElement(Slot, { ...props });
  }
  Sider.__appLayoutSlot = "sider";
  function Footer(props) {
    return /* @__PURE__ */ React.createElement(Slot, { ...props });
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
    const slots = (0, import_react2.useMemo)(() => collectSlots(children), [children]);
    const hasHeader = !!slots.header;
    const hasSider = !!slots.sider;
    const hasFooter = !!slots.footer;
    const slotFlags = { hasHeader, hasSider, hasFooter };
    const gridTemplate = appLayoutGridTemplate(variant, slotFlags);
    const responsiveGridTemplate = responsive ? appLayoutResponsiveGridTemplate(variant, slotFlags) : null;
    const rootClass = [
      "is-app-layout",
      `is-app-layout--${variant}`,
      hasSider && "is-app-layout--has-sider",
      fixedHeader && "is-app-layout--fixed-header",
      fixedSider && "is-app-layout--fixed-sider",
      responsive && "is-app-layout--responsive",
      responsiveDrawer && "is-app-layout--drawer-sider",
      className
    ].filter(Boolean).join(" ");
    const rootStyle = [
      `--is-app-layout-sider-w:${siderWidthCss}`,
      `grid-template:${gridTemplate}`,
      responsiveGridTemplate ? `--is-app-layout-grid-responsive:${responsiveGridTemplate}` : null,
      style
    ].filter(Boolean).join(";");
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: rootClass, style: rootStyle }, hasHeader && /* @__PURE__ */ React.createElement("div", { className: "is-app-layout__cell is-app-layout__cell--header" }, slots.header), hasSider && /* @__PURE__ */ React.createElement("div", { className: "is-app-layout__cell is-app-layout__cell--sider" }, slots.sider), /* @__PURE__ */ React.createElement("div", { className: "is-app-layout__cell is-app-layout__cell--content" }, slots.default), hasFooter && /* @__PURE__ */ React.createElement("div", { className: "is-app-layout__cell is-app-layout__cell--footer" }, slots.footer));
  }
  var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

  // src/layout/AppLayoutSider.jsx
  var import_react4 = __require("react");

  // src/lib/resolveColor.js
  var DirectColors = ["inherit", "currentColor", "white", "black", "transparent"];
  var componentColorsIS = [
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
    ...DirectColors
  ];
  var cssVarIs = (c) => `var(--is-${c})`;
  function resolveColor(color, defaultColor = "") {
    color || (color = defaultColor);
    if (!color) return "";
    if (DirectColors.includes(color)) return color;
    if (color === "neutral") return `color-mix(in srgb, ${cssVarIs("color")} 62%, transparent)`;
    if (color === "bg") return cssVarIs("bg-primary");
    if (color === "card") return cssVarIs("bg-secondary");
    if (color === "border") return cssVarIs("b-color");
    if (color === "primary") return cssVarIs("design-1");
    if (componentColorsIS.includes(color)) return cssVarIs(color);
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
  var import_react3 = __require("react");

  // src/theme/constants.js
  var constants_exports = {};
  __export(constants_exports, {
    DESIGN_SCHEME_OPTIONS: () => DESIGN_SCHEME_OPTIONS,
    DESIGN_SCHEME_STORAGE_KEY: () => DESIGN_SCHEME_STORAGE_KEY,
    LEGACY_LOOKNFEEL_MAP: () => LEGACY_LOOKNFEEL_MAP,
    LEGACY_LUMINANCE_KEYS: () => LEGACY_LUMINANCE_KEYS,
    LEGACY_THEME_COLOR_MAP: () => LEGACY_THEME_COLOR_MAP,
    LOOKNFEEL_DEFAULT: () => LOOKNFEEL_DEFAULT,
    LOOKNFEEL_DESIGN_SCHEME: () => LOOKNFEEL_DESIGN_SCHEME,
    LOOKNFEEL_OPTIONS: () => LOOKNFEEL_OPTIONS,
    LOOKNFEEL_STORAGE_KEY: () => LOOKNFEEL_STORAGE_KEY,
    LUMINANCE_STORAGE_KEY: () => LUMINANCE_STORAGE_KEY,
    NEON_LOOKNFEELS: () => NEON_LOOKNFEELS,
    THEME_COLOR_OPTIONS: () => THEME_COLOR_OPTIONS,
    THEME_COLOR_STORAGE_KEY: () => THEME_COLOR_STORAGE_KEY,
    designSchemeForLooknfeel: () => designSchemeForLooknfeel,
    isDesignScheme: () => isDesignScheme,
    isGlassVariant: () => isGlassVariant,
    isLooknfeel: () => isLooknfeel,
    isLuminance: () => isLuminance,
    isNgVariant: () => isNgVariant,
    isThemeColor: () => isThemeColor,
    ngBaseVariant: () => ngBaseVariant,
    normalizeDesignScheme: () => normalizeDesignScheme,
    normalizeLooknfeel: () => normalizeLooknfeel,
    normalizeThemeColor: () => normalizeThemeColor,
    normalizeVariant: () => normalizeVariant,
    readDesignSchemeFromDom: () => readDesignSchemeFromDom,
    readLooknfeelFromDom: () => readLooknfeelFromDom,
    readLuminanceFromDom: () => readLuminanceFromDom,
    readThemeColorFromDom: () => readThemeColorFromDom,
    surfaceVariantAttrs: () => surfaceVariantAttrs
  });
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
    componentColorsIS.filter((c) => !["inherit", "currentColor", "white", "black", "transparent", "neutral", "bg", "card", "border", "color"].includes(c))
  );
  function surfaceColorAttrs(color, opts = {}) {
    if (!color) return {};
    if (color === "currentColor") return {};
    if (color === "neutral") return { "data-surface-color": "neutral" };
    if (CSS_SURFACE_COLORS.has(color)) return { "data-surface-color": color };
    return { style: `--surface-accent: ${resolveColor(color)}` };
  }
  function mergeSurfaceStyle(color, opts = {}) {
    const colorAttrs = surfaceColorAttrs(color, opts);
    const style = [colorAttrs.style, opts.style].filter(Boolean).join("; ");
    const out = {};
    if (colorAttrs["data-surface-color"]) out["data-surface-color"] = colorAttrs["data-surface-color"];
    if (style) out.style = style;
    return out;
  }

  // src/components/Button.jsx
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
    const [busy, setBusy] = (0, import_react3.useState)(false);
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
    const content = /* @__PURE__ */ React.createElement(React.Fragment, null, (icon || isLoading) && (isLoading ? /* @__PURE__ */ React.createElement("span", { className: "is-text-icon", "aria-hidden": true }, "\u2026") : icon), children != null && /* @__PURE__ */ React.createElement("span", { className: "button-content" }, children));
    if (wrap) {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          ...rest,
          ...dataProps,
          role: "button",
          tabIndex: isDisabled ? -1 : 0,
          "aria-disabled": isDisabled ? "true" : void 0,
          onClick: handleClick,
          onKeyDown: onWrapKeydown
        },
        content
      );
    }
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        ...rest,
        ...dataProps,
        type,
        disabled: isDisabled,
        onClick: handleClick
      },
      content
    );
  }

  // src/layout/AppLayoutSider.jsx
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
    (0, import_react4.useEffect)(() => {
      ctx?.setSiderWidth(wCss);
    }, [ctx, wCss]);
    const rootClass = [
      "is-app-layout-sider",
      `is-app-layout-sider--${theme}`,
      collapsed && "is-app-layout-sider--collapsed",
      className
    ].filter(Boolean).join(" ");
    const mergedStyle = [
      "width:100%",
      `max-width:${wCss}`,
      `background:${bg}`,
      `color:${fg}`,
      style
    ].filter(Boolean).join(";");
    function toggle() {
      onCollapse?.(!collapsed);
    }
    return /* @__PURE__ */ React.createElement("aside", { ...rest, className: rootClass, style: mergedStyle }, /* @__PURE__ */ React.createElement("div", { className: "is-app-layout-sider__body" }, children), collapsible && /* @__PURE__ */ React.createElement("div", { className: "is-app-layout-sider__trigger" }, /* @__PURE__ */ React.createElement(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" } }, collapsed ? "\u203A" : "\u2039")));
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
    const cardStyle = [
      `color: ${resolveColor("color")}`,
      `padding: ${PADDING_BY_SIZE[sizew] || PADDING_BY_SIZE.md}`,
      `border: 1px solid ${borderColor}`,
      boxShadow && `box-shadow: ${boxShadow}`,
      autoBackground && `background-color: ${fillBg}`,
      style
    ].filter(Boolean).join("; ");
    const Tag = inline ? "span" : "div";
    return /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        className: ["card-root", className].filter(Boolean).join(" "),
        style: cardStyle,
        "data-variant": normalizedVariant
      },
      children
    );
  }

  // src/theme/ThemeProvider.jsx
  var import_react5 = __require("react");

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
    const [theme, setTheme] = (0, import_react5.useState)(() => getThemeState());
    (0, import_react5.useEffect)(() => subscribeTheme(setTheme), []);
    return theme;
  }
  function useLooknfeel() {
    const [look, setLook] = (0, import_react5.useState)(() => getLooknfeelState());
    (0, import_react5.useEffect)(() => subscribeLooknfeel(setLook), []);
    return look;
  }
  function ThemeProvider({ children }) {
    useTheme();
    useLooknfeel();
    return children;
  }

  // src/spa/SpaRouter.jsx
  var import_react6 = __require("react");

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
        history.replaceState({ jaguSpa: true }, "", url);
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
  var SpaContext = (0, import_react6.createContext)({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });
  function useSpa() {
    return (0, import_react6.useContext)(SpaContext);
  }
  function useSpaRoute() {
    const { route, defaultRoute } = useSpa();
    return route ?? defaultRoute ?? null;
  }
  function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }) {
    const route = useSpaRoute() ?? defaultRoute;
    const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
    if (!Page) return null;
    return typeof Page === "function" ? /* @__PURE__ */ React.createElement(Page, null) : Page;
  }
  function SpaRouter({ routes, defaultRoute = "home", children }) {
    const [nav, setNav] = (0, import_react6.useState)(() => urlState.get());
    (0, import_react6.useEffect)(() => urlState.subscribe(setNav), []);
    const route = nav.r ?? defaultRoute;
    const navigate = (next) => urlState.setRoute(next);
    const value = (0, import_react6.useMemo)(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);
    return /* @__PURE__ */ React.createElement(SpaContext.Provider, { value }, children);
  }
  function SpaNavLink({ route, children, className, variant = "text", ...rest }) {
    const { route: active, navigate } = useSpa();
    const isActive = active === route;
    return /* @__PURE__ */ React.createElement(
      Button,
      {
        ...rest,
        variant,
        className: ["jagu-nav-link", isActive && "is-active", className].filter(Boolean).join(" "),
        onClick: () => navigate(route),
        "aria-current": isActive ? "page" : void 0
      },
      children
    );
  }
  function JagSidebar({ title, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("nav", { ...rest, className: ["jagu-sidebar", className].filter(Boolean).join(" ") }, title != null && /* @__PURE__ */ React.createElement("div", { className: "jagu-sidebar-header pg-sidebar-header" }, title), /* @__PURE__ */ React.createElement("div", { className: "jagu-sidebar-body pg-sidebar-body" }, children));
  }

  // src/entry-iife.jsx
  globalThis.ISAComponents = globalThis.ISAComponents || {};
  function bootJaguUI() {
    bootTheme();
    bootLooknfeel();
  }
  globalThis.ISAComponents.JaguUI = {
    bootJaguUI,
    bootTheme,
    bootLooknfeel,
    applyTheme,
    applyLooknfeel,
    setLuminance,
    setThemeColor,
    setDesignScheme,
    getThemeState,
    subscribeTheme,
    getLooknfeelState,
    subscribeLooknfeel,
    ...constants_exports,
    AppLayout,
    AppLayoutProvider,
    AppLayoutSider,
    Button,
    Card,
    ThemeProvider,
    SpaRouter,
    SpaNavLink,
    JagSidebar,
    SpaOutlet,
    useSpa,
    useSpaRoute,
    getSpaRoute,
    setSpaRoute,
    urlState,
    ...appLayoutVariants_exports,
    resolveColor,
    colorMix,
    mergeSurfaceStyle
  };
})();
