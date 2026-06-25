var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};
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

  // src/index.jsx
  var index_exports = {};
  __export(index_exports, {
    APP_LAYOUT_VARIANT_OPTIONS: () => APP_LAYOUT_VARIANT_OPTIONS,
    AUTH_DEFAULTS: () => AUTH_DEFAULTS,
    Accordion: () => Accordion,
    Anchor: () => Anchor,
    AppLayout: () => AppLayout,
    AppLayoutProvider: () => AppLayoutProvider,
    AppLayoutSider: () => AppLayoutSider,
    AutoComplete: () => AutoComplete,
    Avatar: () => Avatar,
    AvatarGroup: () => AvatarGroup,
    BRAND_DISPLAY_NAME: () => BRAND_DISPLAY_NAME,
    Badge: () => Badge,
    BlockLayout: () => BlockLayout,
    BottomNavigation: () => BottomNavigation,
    BottomNavigationAction: () => BottomNavigationAction,
    Box: () => Box,
    Breadcrumb: () => Breadcrumb,
    Breadcrumbs: () => Breadcrumbs,
    Button: () => Button,
    CONTAPYME_LOGIN_DOMAIN: () => CONTAPYME_LOGIN_DOMAIN,
    CONTAPYME_LOGIN_ID_HELPER: () => CONTAPYME_LOGIN_ID_HELPER,
    Calendar: () => Calendar,
    Card: () => Card,
    Carousel: () => Carousel,
    Cascader: () => Cascader,
    Checkbox: () => Checkbox,
    CheckboxChip: () => CheckboxChip,
    CheckboxIcon: () => CheckboxIcon,
    Chip: () => Chip,
    CodeBlock: () => CodeBlock,
    CodeMirrorPanel: () => CodeMirrorPanel,
    Collapse: () => Collapse,
    CollapsePanel: () => CollapsePanel,
    ColorPicker: () => ColorPicker,
    Container: () => Container,
    ContapymeIcon: () => ContapymeIcon,
    ContapymeSessionProvider: () => ContapymeSessionProvider,
    DEFAULT_APP_ITERCERO: () => DEFAULT_APP_ITERCERO,
    DESIGN_SCHEME_OPTIONS: () => DESIGN_SCHEME_OPTIONS,
    DESIGN_SCHEME_STORAGE_KEY: () => DESIGN_SCHEME_STORAGE_KEY,
    DatePicker: () => DatePicker,
    Descriptions: () => Descriptions,
    DescriptionsItem: () => DescriptionsItem,
    Divider: () => Divider,
    Drawer: () => Drawer,
    Dropdown: () => Dropdown,
    Empty: () => Empty,
    Fab: () => Fab,
    FlexLayout: () => FlexLayout,
    FloatButton: () => FloatButton,
    Form: () => Form,
    FormItem: () => FormItem,
    GridLayout: () => GridLayout,
    GridResponsiveForm: () => GridResponsiveForm,
    Headings: () => Headings,
    IconButton: () => IconButton,
    ImageList: () => ImageList,
    Input: () => Input,
    InputNumber: () => InputNumber,
    LEGACY_LOOKNFEEL_MAP: () => LEGACY_LOOKNFEEL_MAP,
    LEGACY_LUMINANCE_KEYS: () => LEGACY_LUMINANCE_KEYS,
    LEGACY_THEME_COLOR_MAP: () => LEGACY_THEME_COLOR_MAP,
    LOGIN_REMEMBER_LABEL: () => LOGIN_REMEMBER_LABEL,
    LOGIN_SUBTITLE_DEFAULT: () => LOGIN_SUBTITLE_DEFAULT,
    LOOKNFEEL_DEFAULT: () => LOOKNFEEL_DEFAULT,
    LOOKNFEEL_DESIGN_SCHEME: () => LOOKNFEEL_DESIGN_SCHEME,
    LOOKNFEEL_OPTIONS: () => LOOKNFEEL_OPTIONS,
    LOOKNFEEL_STORAGE_KEY: () => LOOKNFEEL_STORAGE_KEY,
    LUMINANCE_STORAGE_KEY: () => LUMINANCE_STORAGE_KEY,
    LabeledSwitch: () => LabeledSwitch,
    Link: () => Link,
    List: () => List,
    ListItem: () => ListItem,
    ListItemAvatar: () => ListItemAvatar,
    ListItemIcon: () => ListItemIcon,
    ListItemText: () => ListItemText,
    LoginButton: () => LoginButton,
    LoginDialog: () => LoginDialog,
    LoginFormActions: () => LoginFormActions,
    LoginFormFields: () => LoginFormFields,
    MAIN_ORCHESTRATOR_LS_KEY: () => MAIN_ORCHESTRATOR_LS_KEY,
    MAIN_ORCHESTRATOR_URL_LOCAL: () => MAIN_ORCHESTRATOR_URL_LOCAL,
    MAIN_ORCHESTRATOR_URL_PROD: () => MAIN_ORCHESTRATOR_URL_PROD,
    Masonry: () => Masonry,
    Mentions: () => Mentions,
    Menu: () => Menu,
    MimicusSidebar: () => MimicusSidebar,
    NEON_LOOKNFEELS: () => NEON_LOOKNFEELS,
    NavLink: () => NavLink,
    NavTabRow: () => NavTabRow,
    PLAYGROUND_APP_LAYOUT_OPTIONS: () => PLAYGROUND_APP_LAYOUT_OPTIONS,
    Pagination: () => Pagination,
    QRCode: () => QRCode,
    Radio: () => Radio,
    RadioGroup: () => RadioGroup,
    Rate: () => Rate,
    Rating: () => Rating,
    Segmented: () => Segmented,
    Select: () => Select,
    Separator: () => Separator,
    ShellHeaderNav: () => ShellHeaderNav,
    SidePanel: () => SidePanel,
    SidePanelSection: () => SidePanelSection,
    Slider: () => Slider,
    SpaNavLink: () => SpaNavLink,
    SpaOutlet: () => SpaOutlet,
    SpaRouter: () => SpaRouter,
    Space: () => Space,
    SpeedDial: () => SpeedDial,
    SpeedDialAction: () => SpeedDialAction,
    Splitter: () => Splitter,
    Stack: () => Stack,
    Statistic: () => Statistic,
    Step: () => Step,
    Stepper: () => Stepper,
    Steps: () => Steps,
    Switch: () => Switch,
    THEME_COLOR_OPTIONS: () => THEME_COLOR_OPTIONS,
    THEME_COLOR_STORAGE_KEY: () => THEME_COLOR_STORAGE_KEY,
    TabItem: () => TabItem,
    Table: () => Table,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Text: () => Text,
    TextArea: () => TextArea,
    TextField: () => TextField,
    ThemeProvider: () => ThemeProvider,
    TimePicker: () => TimePicker,
    Timeline: () => Timeline,
    TimelineItem: () => TimelineItem,
    ToggleButton: () => ToggleButton,
    ToggleButtonGroup: () => ToggleButtonGroup,
    Tooltip: () => Tooltip,
    Tour: () => Tour,
    Transfer: () => Transfer,
    TransferBoard: () => TransferBoard,
    TransferList: () => TransferList,
    Tree: () => Tree,
    TreeSelect: () => TreeSelect,
    Typography: () => Typography,
    Upload: () => Upload,
    appLayoutGridTemplate: () => appLayoutGridTemplate,
    appLayoutResponsiveGridTemplate: () => appLayoutResponsiveGridTemplate,
    applyColorTransform: () => applyColorTransform,
    applyLooknfeel: () => applyLooknfeel,
    applyTheme: () => applyTheme,
    bg2font: () => bg2font,
    bgTransparent2font: () => bgTransparent2font,
    bootLooknfeel: () => bootLooknfeel,
    bootMimicusUI: () => bootMimicusUI,
    bootTheme: () => bootTheme,
    cdn: () => cdn_exports,
    clearLoginCredentials: () => clearLoginCredentials,
    colorMix: () => colorMix,
    colorTransform: () => colorTransform_exports,
    copyEditorText: () => copyEditorText,
    createDemoSession: () => createDemoSession,
    createOrchestratorSession: () => createOrchestratorSession,
    defaultIterceroFromTerceros: () => defaultIterceroFromTerceros,
    designSchemeForLooknfeel: () => designSchemeForLooknfeel,
    destroyCodeMirror: () => destroyCodeMirror,
    dispatchShellNav: () => dispatchShellNav,
    ensureCodeMirrorCss: () => ensureCodeMirrorCss,
    ensureCodeMirrorLoaded: () => ensureCodeMirrorLoaded,
    evaluateNavWhen: () => evaluateNavWhen,
    fluidCss: () => fluidCss,
    formatContapymeLoginInput: () => formatContapymeLoginInput,
    getLooknfeelState: () => getLooknfeelState,
    getSpaRoute: () => getSpaRoute,
    getThemeState: () => getThemeState,
    isAppLayoutVariant: () => isAppLayoutVariant,
    isDesignScheme: () => isDesignScheme,
    isGlassVariant: () => isGlassVariant,
    isLooknfeel: () => isLooknfeel,
    isLuminance: () => isLuminance,
    isNgVariant: () => isNgVariant,
    isThemeColor: () => isThemeColor,
    joinColorStyle: () => joinColorStyle,
    js2css: () => js2css,
    loginWithInsoftAutoRetry: () => loginWithInsoftAutoRetry,
    mergeSurfaceStyle: () => mergeSurfaceStyle,
    mkAlpha: () => mkAlpha,
    mkBow: () => mkBow,
    mkDarken: () => mkDarken,
    mkHeadingColor: () => mkHeadingColor,
    mkInvertL: () => mkInvertL,
    mkLighten: () => mkLighten,
    mkOklchShiftL: () => mkOklchShiftL,
    mkSemanticBorder: () => mkSemanticBorder,
    mkSoftBg: () => mkSoftBg,
    mkUnbow: () => mkUnbow,
    mkWinChromeAccent: () => mkWinChromeAccent,
    mountCodeMirror: () => mountCodeMirror,
    mountDisplay: () => mountDisplay,
    mountForms: () => mountForms,
    mountNavigation: () => mountNavigation,
    ngBaseVariant: () => ngBaseVariant,
    normalizeAppLayoutVariant: () => normalizeAppLayoutVariant,
    normalizeContapymeLoginId: () => normalizeContapymeLoginId,
    normalizeDesignScheme: () => normalizeDesignScheme,
    normalizeLooknfeel: () => normalizeLooknfeel,
    normalizePlaygroundAppLayoutVariant: () => normalizePlaygroundAppLayoutVariant,
    normalizeShellNavRows: () => normalizeShellNavRows,
    normalizeThemeColor: () => normalizeThemeColor,
    normalizeVariant: () => normalizeVariant,
    paletteBaseStyle: () => paletteBaseStyle,
    paletteStateVarRules: () => paletteStateVarRules,
    paletteSurfaceTint: () => paletteSurfaceTint,
    readDesignSchemeFromDom: () => readDesignSchemeFromDom,
    readLoginCredentials: () => readLoginCredentials,
    readLooknfeelFromDom: () => readLooknfeelFromDom,
    readLuminanceFromDom: () => readLuminanceFromDom,
    readThemeColorFromDom: () => readThemeColorFromDom,
    resolveCatalogDemoTabDescriptors: () => resolveCatalogDemoTabDescriptors,
    resolveCategoryTabDescriptors: () => resolveCategoryTabDescriptors,
    resolveCodeMirrorTheme: () => resolveCodeMirrorTheme,
    resolveColor: () => resolveColor,
    resolveContapymeSession: () => resolveContapymeSession,
    resolveNavRowTabs: () => resolveNavRowTabs,
    resolveNavRowValue: () => resolveNavRowValue,
    resolveSessionHeaderLabel: () => resolveSessionHeaderLabel,
    resolveShellNavigation: () => resolveShellNavigation,
    saveLoginCredentials: () => saveLoginCredentials,
    sectionColorFor: () => sectionColorFor,
    sectionMeta: () => sectionMeta,
    setDesignScheme: () => setDesignScheme,
    setLuminance: () => setLuminance,
    setSpaRoute: () => setSpaRoute,
    setThemeColor: () => setThemeColor,
    snippets: () => snippets_exports,
    sortedCategories: () => sortedCategories,
    subscribeLooknfeel: () => subscribeLooknfeel,
    subscribeTheme: () => subscribeTheme,
    surfaceVariantAttrs: () => surfaceVariantAttrs,
    urlState: () => urlState,
    useContapymeSession: () => useContapymeSession,
    useLayoutSlot: () => useLayoutSlot,
    useResolvedContapymeSession: () => useResolvedContapymeSession,
    useSpa: () => useSpa,
    useSpaRoute: () => useSpaRoute,
    wrapPassword: () => wrapPassword
  });

  // src/layout/AppLayout.jsx
  var import_react5 = __require("react");

  // src/layout/appLayoutVariants.js
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

  // src/layout/AppLayoutSider.jsx
  var import_react3 = __require("react");

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
  var import_react2 = __require("react");

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
    const [busy, setBusy] = (0, import_react2.useState)(false);
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
    const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ React.createElement("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true }, "\u2026") : icon);
    const content = iconPlacement === "end" ? /* @__PURE__ */ React.createElement(React.Fragment, null, children != null && children !== "" && /* @__PURE__ */ React.createElement("span", { className: "button-content" }, children), iconNode) : /* @__PURE__ */ React.createElement(React.Fragment, null, iconNode, children != null && children !== "" && /* @__PURE__ */ React.createElement("span", { className: "button-content" }, children));
    if (href && !wrap) {
      const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
      return /* @__PURE__ */ React.createElement("a", { ...rest, ...dataProps, href: isDisabled ? void 0 : href, target, rel: linkRel, role: "button", "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick }, content);
    }
    if (wrap) {
      return /* @__PURE__ */ React.createElement("div", { ...rest, ...dataProps, role: "button", tabIndex: isDisabled ? -1 : 0, "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, onKeyDown: onWrapKeydown }, content);
    }
    return /* @__PURE__ */ React.createElement("button", { ...rest, ...dataProps, type: htmlType, disabled: isDisabled, onClick: handleClick }, content);
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
    (0, import_react3.useEffect)(() => {
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
    return /* @__PURE__ */ React.createElement("aside", { ...rest, className: rootClass, style: mergedStyle }, /* @__PURE__ */ React.createElement("div", { className: bodyClass }, children), collapsible && /* @__PURE__ */ React.createElement("div", { className: "mimicus-app-layout-sider__trigger" }, /* @__PURE__ */ React.createElement(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" } }, collapsed ? "\u203A" : "\u2039")));
  }

  // src/layout/AppLayoutHeader.jsx
  var import_react4 = __require("react");
  function HeaderZone({ children }) {
    return children;
  }
  function Brand(props) {
    return /* @__PURE__ */ React.createElement(HeaderZone, { ...props });
  }
  Brand.__appLayoutHeaderSlot = "brand";
  function Center(props) {
    return /* @__PURE__ */ React.createElement(HeaderZone, { ...props });
  }
  Center.__appLayoutHeaderSlot = "center";
  function Tools(props) {
    return /* @__PURE__ */ React.createElement(HeaderZone, { ...props });
  }
  Tools.__appLayoutHeaderSlot = "tools";
  function collectHeaderSlots(children) {
    const slots = { brand: null, center: null, tools: null, extra: [] };
    import_react4.Children.forEach(children, (child) => {
      if (!(0, import_react4.isValidElement)(child)) {
        if (child != null && child !== false) slots.extra.push(child);
        return;
      }
      const slotName = child.type?.__appLayoutHeaderSlot;
      if (slotName === "brand" || slotName === "center" || slotName === "tools") slots[slotName] = child;
      else slots.extra.push(child);
    });
    return slots;
  }
  function renderZone(slot, className) {
    if (!slot) return null;
    return /* @__PURE__ */ React.createElement("div", { className }, slot.props.children);
  }
  function AppLayoutHeader({ className, barClassName, children, ...rest }) {
    const slots = collectHeaderSlots(children);
    const hasZones = Boolean(slots.brand || slots.center || slots.tools);
    const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");
    if (!hasZones) {
      return /* @__PURE__ */ React.createElement("header", { ...rest, className: rootClass }, children);
    }
    const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");
    return /* @__PURE__ */ React.createElement("header", { ...rest, className: rootClass }, /* @__PURE__ */ React.createElement("div", { className: barClass }, renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand"), renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center"), renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")), slots.extra.length > 0 ? slots.extra : null);
  }
  AppLayoutHeader.Brand = Brand;
  AppLayoutHeader.Center = Center;
  AppLayoutHeader.Tools = Tools;

  // src/layout/AppLayout.jsx
  var SLOT_TYPES = { Header: "header", Sider: "sider", Footer: "footer" };
  function collectSlots(children) {
    const slots = { header: null, sider: null, footer: null, default: [] };
    import_react5.Children.forEach(children, (child) => {
      if (!(0, import_react5.isValidElement)(child)) {
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
    return /* @__PURE__ */ React.createElement(AppLayoutHeader, { ...props });
  }
  Header.__appLayoutSlot = "header";
  Header.Brand = AppLayoutHeader.Brand;
  Header.Center = AppLayoutHeader.Center;
  Header.Tools = AppLayoutHeader.Tools;
  function Sider({ children, width, collapsed, collapsible, collapsedWidth, theme, onCollapse, className, style, ...rest }) {
    const useSiderChrome = width !== void 0 || collapsible || collapsed !== void 0 || theme !== void 0;
    if (useSiderChrome) {
      return /* @__PURE__ */ React.createElement(
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
          ...rest
        },
        children
      );
    }
    return children;
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
    const slots = (0, import_react5.useMemo)(() => collectSlots(children), [children]);
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
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: rootClass, style: rootStyle }, hasHeader && /* @__PURE__ */ React.createElement("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--header" }, slots.header), hasSider && /* @__PURE__ */ React.createElement("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--sider" }, slots.sider), /* @__PURE__ */ React.createElement("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--content" }, slots.default), hasFooter && /* @__PURE__ */ React.createElement("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--footer" }, slots.footer));
  }
  var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

  // src/layout/layoutSlotContext.jsx
  var import_react6 = __require("react");

  // src/layout/layoutHelpers.js
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
  function hasOverflowStyle(style = "") {
    return RGX_OVERFLOW_SCROLL.test(style);
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
    return parts.filter(Boolean).join("; ");
  }

  // src/layout/layoutSlotContext.jsx
  var DEFAULT_SLOT = getSlotResume("md", 0);
  var LayoutSlotContext = (0, import_react6.createContext)(DEFAULT_SLOT);
  function useLayoutSlot() {
    return (0, import_react6.useContext)(LayoutSlotContext) ?? DEFAULT_SLOT;
  }
  function useLayoutContainer(sizewProp) {
    const ref = (0, import_react6.useRef)(null);
    const [clientWidth, setClientWidth] = (0, import_react6.useState)(0);
    const sizew = sizewProp ?? getBreakPoint(clientWidth);
    const slot = getSlotResume(sizew, clientWidth);
    (0, import_react6.useEffect)(() => {
      const el = ref.current;
      if (!el || typeof ResizeObserver === "undefined") return void 0;
      const ro = new ResizeObserver(([entry]) => setClientWidth(entry.contentRect.width));
      ro.observe(el);
      setClientWidth(el.clientWidth);
      return () => ro.disconnect();
    }, []);
    return { ref, sizew, slot };
  }

  // src/layout/BlockLayout.jsx
  function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }) {
    const { ref, slot } = useLayoutContainer(sizewProp);
    const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
    const mergedStyle = joinStyle(style, `display: ${inline ? "inline-block" : "block"}`);
    return /* @__PURE__ */ React.createElement(LayoutSlotContext.Provider, { value: slot }, /* @__PURE__ */ React.createElement("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "block-layout") }, children));
  }

  // src/layout/FlexLayout.jsx
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
    return /* @__PURE__ */ React.createElement(LayoutSlotContext.Provider, { value: slot }, /* @__PURE__ */ React.createElement("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "flex-layout") }, children));
  }

  // src/layout/GridLayout.jsx
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
    return /* @__PURE__ */ React.createElement(LayoutSlotContext.Provider, { value: slot }, /* @__PURE__ */ React.createElement("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "grid-layout") }, children));
  }

  // src/layout/Divider.jsx
  var import_react7 = __require("react");
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
    const hasText = children != null && children !== false && import_react7.Children.count(children) > 0;
    const cls = [
      "is-divider",
      `is-divider--${axis}`,
      `is-divider--${lineVariant}`,
      hasText && "is-divider--with-text",
      hasText && `is-divider--title-${titlePlacement}`,
      plain && "is-divider--plain",
      className
    ].filter(Boolean).join(" ");
    const mergedStyle = [
      `--is-divider-color:${lineColor}`,
      `margin:${marginCss}`,
      axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge:${edgeBasis}`,
      style
    ].filter(Boolean).join(";");
    return /* @__PURE__ */ React.createElement("div", { className: cls, style: mergedStyle, role: "separator", "aria-orientation": axis, ...dataDebug(rest, "divider"), ...rest }, hasText ? axis === "horizontal" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "is-divider__rail is-divider__rail--before", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "is-divider__content" }, children), /* @__PURE__ */ React.createElement("span", { className: "is-divider__rail is-divider__rail--after", "aria-hidden": "true" })) : /* @__PURE__ */ React.createElement("span", { className: "is-divider__content" }, children) : axis === "horizontal" ? /* @__PURE__ */ React.createElement("span", { className: "is-divider__rail is-divider__rail--solo", "aria-hidden": "true" }) : /* @__PURE__ */ React.createElement("span", { className: "is-divider__rail is-divider__rail--solo-vertical", "aria-hidden": "true" }));
  }

  // src/layout/Splitter.jsx
  var import_react8 = __require("react");

  // src/layout/layoutBreakpoints.js
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

  // src/layout/splitterResize.js
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

  // src/layout/Splitter.jsx
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
    const [panelSize, setPanelSize] = (0, import_react8.useState)(panelSizeProp);
    const [dragging, setDragging] = (0, import_react8.useState)(false);
    const [narrow, setNarrow] = (0, import_react8.useState)(false);
    const dragStart = (0, import_react8.useRef)({ x: 0, y: 0, size: panelSizeProp });
    const resizeHandle = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(() => {
      setPanelSize(panelSizeProp);
    }, [panelSizeProp]);
    (0, import_react8.useEffect)(() => {
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
    return /* @__PURE__ */ React.createElement("div", { className: rootClass, style, ...rest }, /* @__PURE__ */ React.createElement("div", { className: "is-splitter__panel", style: panelStyle }, /* @__PURE__ */ React.createElement("div", { className: "is-splitter__panel-body" }, panel), resizable && !collapsed && /* @__PURE__ */ React.createElement(
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
    )), /* @__PURE__ */ React.createElement("div", { className: "is-splitter__main" }, children));
  }

  // src/layout/SidePanel.jsx
  function View({ mode = "expanded", gap = "0.25rem", className, style, children, ...rest }) {
    const rail = mode === "rail";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        className: ["mimicus-side-panel-view", "pg-panel-view", rail ? "mimicus-side-panel-view--rail pg-panel-view--rail" : "mimicus-side-panel-view--expanded pg-panel-view--expanded", className].filter(Boolean).join(" "),
        style: { display: "flex", flexDirection: "column", gap, width: "100%", minWidth: 0, ...style && typeof style === "object" ? style : {} }
      },
      children
    );
  }
  function SidePanel({
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
    return /* @__PURE__ */ React.createElement(
      "aside",
      {
        ...rest,
        className: ["mimicus-side-panel", "sidebar", "pg-sidebar", "pg-vt-sidebar", drawer && "mimicus-side-panel--drawer pg-sidebar--drawer", rail && "mimicus-side-panel--rail is-collapsed"].filter(Boolean).join(" "),
        style
      },
      drawer && onClose && /* @__PURE__ */ React.createElement("div", { className: "mimicus-side-panel__drawer-bar pg-sidebar-drawer-bar" }, /* @__PURE__ */ React.createElement(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onClose, className: "sidebar-toggle-btn", title: closeTitle, style: { width: "auto", marginLeft: "auto" } }, /* @__PURE__ */ React.createElement("iconify-icon", { icon: closeIcon, "aria-hidden": true }))),
      !drawer && onToggle && /* @__PURE__ */ React.createElement("div", { className: ["mimicus-side-panel__header", "pg-sidebar-header", "pg-sidebar-header--panel", rail && "pg-sidebar-header--rail"].filter(Boolean).join(" ") }, /* @__PURE__ */ React.createElement(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onToggle, className: ["sidebar-header-btn", rail ? "sidebar-header-btn--rail" : "sidebar-toggle-btn"].filter(Boolean).join(" "), title: open ? collapseTitle : expandTitle, style: rail ? { width: "100%", justifyContent: "center" } : { flexShrink: 0, width: "auto" } }, /* @__PURE__ */ React.createElement("iconify-icon", { icon: open ? "mdi:menu-open" : "mdi:menu", "aria-hidden": true }))),
      /* @__PURE__ */ React.createElement("div", { className: bodyClass }, content)
    );
  }
  SidePanel.View = View;

  // src/components/display/Display.jsx
  var import_react10 = __require("react");

  // src/display/useDisplayBinding.js
  var import_react9 = __require("react");

  // src/nav/core.js
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
  function clickOutside(root, onAway) {
    const fn = (e) => {
      if (!root?.contains(e.target)) onAway(e);
    };
    const clean = on(document, "pointerdown", fn, true);
    return clean;
  }
  function resolveScrollRoot(root, selector) {
    if (selector) {
      const el = typeof selector === "string" ? qs(selector, document) : selector;
      if (el) return el;
    }
    return root?.closest?.("[data-mimicus-anchor-container]") ?? document;
  }
  function scrollToTarget(target, { offset = 0, root } = {}) {
    if (!target) return;
    const scrollEl = root === document ? null : root;
    const top = target.getBoundingClientRect().top + (scrollEl?.scrollTop ?? window.scrollY ?? 0) - offset;
    if (scrollEl) scrollEl.scrollTo({ top, behavior: "smooth" });
    else window.scrollTo({ top, behavior: "smooth" });
  }
  function emit(root, name, detail) {
    root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
  }

  // src/display/controllers.js
  function cleanupPrev(root, fn) {
    root.__mimicusDisplayCleanup?.();
    root.__mimicusDisplayCleanup = fn;
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
    let timer;
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
        const open = keys.includes(p.dataset.mimicusCollapsePanel);
        p.classList.toggle("is-open", open);
        const body = qs("[data-mimicus-collapse-body]", p);
        if (body) body.hidden = !open;
        const trigger = qs("[data-mimicus-collapse-trigger]", p);
        if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      emit(root, "mimicus-collapse-change", { activeKey: accordion ? keys[0] ?? "" : keys });
    };
    setKeys(parseKeys().length ? parseKeys() : panels.filter((p) => p.dataset.defaultOpen === "true").map((p) => p.dataset.mimicusCollapsePanel));
    const cleanups = panels.map((p) => on(qs("[data-mimicus-collapse-trigger]", p), "click", () => {
      const key = p.dataset.mimicusCollapsePanel;
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
    const set2 = (v) => {
      root.dataset.value = v;
      btns.forEach((b) => {
        const on2 = b.dataset.mimicusSegmented === v;
        b.classList.toggle("is-active", on2);
        b.setAttribute("aria-pressed", on2 ? "true" : "false");
      });
      emit(root, "mimicus-segmented-change", { value: v });
    };
    set2(root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusSegmented ?? btns[0]?.dataset.mimicusSegmented ?? "");
    return btns.map((b) => on(b, "click", () => set2(b.dataset.mimicusSegmented)));
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
            const el = qs(s.dataset.target, root) ?? qs(s.dataset.target, document);
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
    const type = root?.dataset?.mimicusDisplay;
    cleanupPrev(root, () => {
    });
    const cleanup = BINDERS[type]?.(root) ?? (() => {
    });
    const fn = Array.isArray(cleanup) ? () => cleanup.forEach((c) => c?.()) : cleanup;
    root.__mimicusDisplayCleanup = fn;
    return () => {
      fn();
      delete root.__mimicusDisplayCleanup;
    };
  }
  function mountDisplay(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-display]", document) : [scope].filter((el) => el?.dataset?.mimicusDisplay);
    return () => roots.map(bindDisplayComponent).forEach((fn) => fn());
  }

  // src/display/useDisplayBinding.js
  function useDisplayBinding(ref, type, deps = []) {
    (0, import_react9.useEffect)(() => {
      const el = ref.current;
      if (!el || !type) return void 0;
      el.dataset.mimicusDisplay = type;
      return bindDisplayComponent(el);
    }, deps);
  }

  // src/components/display/Display.jsx
  function cx(...p) {
    return p.filter(Boolean).join(" ");
  }
  function initials(name) {
    return String(name ?? "?").trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  }
  function hashColor(s) {
    let h = 0;
    for (let i = 0; i < String(s).length; i++) h = String(s).charCodeAt(i) + ((h << 5) - h);
    return `hsl(${Math.abs(h) % 360} 55% 45%)`;
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
    return /* @__PURE__ */ React.createElement("span", { ...rest, className: cx("mimicus-badge-wrap", className), style }, children, show && /* @__PURE__ */ React.createElement(
      "sup",
      {
        className: cx("mimicus-badge", dot && "mimicus-badge--dot", `mimicus-badge--${color}`, `mimicus-badge--${size}`),
        style: offset ? { transform: `translate(${offset[0] ?? 0}px, ${offset[1] ?? 0}px)` } : void 0
      },
      !dot && label
    ));
  }
  function Tag({
    variant = "ghost",
    color,
    shape = "pill",
    closable,
    icon,
    uppercase,
    onClose,
    children,
    className,
    style,
    ...rest
  }) {
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        ...rest,
        className: cx("mimicus-tag", `mimicus-tag--${variant}`, shape && `mimicus-tag--${shape}`, uppercase && "mimicus-tag--upper", className),
        style: mergeSurfaceStyle(color, style)
      },
      icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-tag__icon" }, icon),
      /* @__PURE__ */ React.createElement("span", { className: "mimicus-tag__text" }, children),
      closable && /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-tag__close", "aria-label": "Cerrar", onClick: onClose }, "\xD7")
    );
  }
  var Chip = Tag;
  function Avatar({ src, alt, size = "medium", variant = "circular", children, className, style, ...rest }) {
    const label = alt ?? (typeof children === "string" ? children : "?");
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        ...rest,
        className: cx("mimicus-avatar", `mimicus-avatar--${size}`, `mimicus-avatar--${variant}`, className),
        style,
        title: alt
      },
      src ? /* @__PURE__ */ React.createElement("img", { className: "mimicus-avatar__img", src, alt: alt ?? "" }) : /* @__PURE__ */ React.createElement("span", { className: "mimicus-avatar__fallback", style: { background: hashColor(label) } }, children ?? initials(label))
    );
  }
  function AvatarGroup({ max = 5, total, spacing = "medium", children, className, style, ...rest }) {
    const items = import_react10.Children.toArray(children);
    const shown = items.slice(0, max);
    const surplus = (total ?? items.length) - shown.length;
    return /* @__PURE__ */ React.createElement("span", { ...rest, className: cx("mimicus-avatar-group", `mimicus-avatar-group--${spacing}`, className), style }, shown, surplus > 0 && /* @__PURE__ */ React.createElement(Avatar, { size: "medium", className: "mimicus-avatar-group__surplus" }, "+", surplus));
  }
  function Carousel({
    autoplay = false,
    autoplaySpeed = 3e3,
    arrows = false,
    dots = true,
    infinite = true,
    speed = 500,
    dotPlacement = "bottom",
    fade,
    children,
    className,
    style,
    defaultActiveIndex = 0,
    ...rest
  }) {
    const ref = (0, import_react10.useRef)(null);
    const slides = import_react10.Children.toArray(children);
    useDisplayBinding(ref, "carousel", [slides.length, autoplay, arrows, dots]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-carousel", fade && "mimicus-carousel--fade", `mimicus-carousel--dots-${dotPlacement}`, className),
        style,
        "data-mimicus-display": "carousel",
        "data-autoplay": autoplay,
        "data-autoplay-speed": autoplaySpeed,
        "data-infinite": infinite,
        "data-speed": speed,
        "data-active-index": defaultActiveIndex
      },
      arrows && /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--prev", "data-mimicus-carousel-prev": true, "aria-label": "Anterior" }, "\u2039"),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-carousel__viewport" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-carousel__track", "data-mimicus-carousel-track": true }, slides.map((slide, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: cx("mimicus-carousel__slide", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-slide": true }, slide)))),
      arrows && /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--next", "data-mimicus-carousel-next": true, "aria-label": "Siguiente" }, "\u203A"),
      dots && slides.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "mimicus-carousel__dots", role: "tablist" }, slides.map((_, i) => /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: cx("mimicus-carousel__dot", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-dot": true, "aria-label": `Slide ${i + 1}` })))
    );
  }
  function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }) {
    const autoId = (0, import_react10.useId)();
    const key = panelKey ?? autoId;
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-collapse__panel", defaultOpen && "is-open", className), "data-mimicus-collapse-panel": key, "data-default-open": defaultOpen }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-collapse__trigger", "data-mimicus-collapse-trigger": true, "aria-expanded": defaultOpen ? "true" : "false" }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-collapse__arrow", "aria-hidden": true }, "\u25B8"), /* @__PURE__ */ React.createElement("span", { className: "mimicus-collapse__header" }, header)), /* @__PURE__ */ React.createElement("div", { className: "mimicus-collapse__body", "data-mimicus-collapse-body": true, hidden: !defaultOpen }, children));
  }
  function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const keys = activeKey ?? defaultActiveKey;
    useDisplayBinding(ref, "collapse", [accordion, keys]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-collapse", className),
        style,
        "data-mimicus-display": "collapse",
        "data-accordion": accordion,
        "data-active-key": Array.isArray(keys) ? keys.join(",") : keys ?? ""
      },
      children
    );
  }
  Collapse.Panel = CollapsePanel;
  var Accordion = Collapse;
  function DescriptionsItem({ label, span = 1, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-descriptions__item", className), style: { gridColumn: `span ${span}` } }, /* @__PURE__ */ React.createElement("dt", { className: "mimicus-descriptions__label" }, label), /* @__PURE__ */ React.createElement("dd", { className: "mimicus-descriptions__content" }, children));
  }
  function Descriptions({ title, bordered = false, column = 3, size = "medium", children, className, style, ...rest }) {
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", `mimicus-descriptions--${size}`, className), style }, title && /* @__PURE__ */ React.createElement("div", { className: "mimicus-descriptions__title" }, title), /* @__PURE__ */ React.createElement("dl", { className: "mimicus-descriptions__list", style: { "--mimicus-desc-cols": column } }, children));
  }
  Descriptions.Item = DescriptionsItem;
  function Empty({ description = "No data", image = "default", children, className, style, ...rest }) {
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-empty", image === "simple" && "mimicus-empty--simple", className), style }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-empty__image", "aria-hidden": true }), description && /* @__PURE__ */ React.createElement("p", { className: "mimicus-empty__desc" }, description), children && /* @__PURE__ */ React.createElement("div", { className: "mimicus-empty__footer" }, children));
  }
  function paintQr(canvas, value, size) {
    const ctx = canvas.getContext("2d");
    const n = 21;
    const cell = Math.floor(size / n);
    const pad = Math.floor((size - cell * n) / 2);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#111";
    const bit = (r, c) => {
      const code = String(value).charCodeAt((r * n + c) % Math.max(1, String(value).length)) ^ r * 7 + c * 13;
      if (r < 7 && c < 7) return r === 0 || r === 6 || c === 0 || c === 6 || r >= 2 && r <= 4 && c >= 2 && c <= 4;
      if (r < 7 && c >= n - 7) return r === 0 || r === 6 || c === n - 7 || c === n - 1 || r >= 2 && r <= 4 && c >= n - 5 && c <= n - 3;
      if (r >= n - 7 && c < 7) return r === n - 7 || r === n - 1 || c === 0 || c === 6 || r >= n - 5 && r <= n - 3 && c >= 2 && c <= 4;
      return code % 3 === 0;
    };
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (bit(r, c)) ctx.fillRect(pad + c * cell, pad + r * cell, cell, cell);
  }
  function QRCode({ value = "", size = 128, bordered = true, className, style, ...rest }) {
    const ref = (el) => {
      if (el) paintQr(el, value, size);
    };
    return /* @__PURE__ */ React.createElement("span", { ...rest, className: cx("mimicus-qrcode", bordered && "mimicus-qrcode--bordered", className), style }, /* @__PURE__ */ React.createElement("canvas", { ref, width: size, height: size, className: "mimicus-qrcode__canvas", "aria-label": `QR: ${value}` }));
  }
  function Segmented({ options = [], value, defaultValue, onChange, block, size = "medium", className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const cur = value ?? defaultValue ?? options[0]?.value;
    useDisplayBinding(ref, "segmented", [cur, options.length]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-segmented", `mimicus-segmented--${size}`, block && "mimicus-segmented--block", className),
        style,
        "data-mimicus-display": "segmented",
        "data-value": cur,
        role: "group"
      },
      options.map((opt) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: opt.value,
          type: "button",
          className: cx("mimicus-segmented__item", cur === opt.value && "is-active"),
          "data-mimicus-segmented": opt.value,
          "aria-pressed": cur === opt.value ? "true" : "false",
          onClick: () => onChange?.(opt.value)
        },
        opt.icon,
        opt.label ?? opt.value
      ))
    );
  }
  function Statistic({ title, value, prefix, suffix, precision, className, style, ...rest }) {
    const fmt = precision != null && Number.isFinite(Number(value)) ? Number(value).toFixed(precision) : value;
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-statistic", className), style }, title && /* @__PURE__ */ React.createElement("div", { className: "mimicus-statistic__title" }, title), /* @__PURE__ */ React.createElement("div", { className: "mimicus-statistic__value" }, prefix && /* @__PURE__ */ React.createElement("span", { className: "mimicus-statistic__prefix" }, prefix), /* @__PURE__ */ React.createElement("span", { className: "mimicus-statistic__number" }, fmt), suffix && /* @__PURE__ */ React.createElement("span", { className: "mimicus-statistic__suffix" }, suffix)));
  }
  function Table({ columns = [], dataSource = [], bordered, size = "medium", sortable, pagination, className, style, children, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, sortable ? "table" : null, [sortable, dataSource.length]);
    if (children) {
      return /* @__PURE__ */ React.createElement("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", `mimicus-table--${size}`, className), style, "data-mimicus-display": sortable ? "table" : void 0 }, children);
    }
    return /* @__PURE__ */ React.createElement("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", `mimicus-table--${size}`, className), style, "data-mimicus-display": sortable ? "table" : void 0 }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, columns.map((col, i) => /* @__PURE__ */ React.createElement("th", { key: col.key ?? i, "data-mimicus-table-sort": sortable && col.sorter ? i : void 0, className: sortable && col.sorter ? "mimicus-table__sortable" : void 0 }, col.title)))), /* @__PURE__ */ React.createElement("tbody", null, dataSource.map((row2, ri) => /* @__PURE__ */ React.createElement("tr", { key: row2.key ?? ri }, columns.map((col, ci) => /* @__PURE__ */ React.createElement("td", { key: col.key ?? ci }, col.render ? col.render(row2[col.dataIndex], row2) : row2[col.dataIndex]))))));
  }
  function TimelineItem({ label, color, dot, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("li", { ...rest, className: cx("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className) }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__dot" }, dot), /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__content" }, label && /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__label" }, label), /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__body" }, children)));
  }
  function Timeline({ mode = "left", pending, children, className, style, ...rest }) {
    return /* @__PURE__ */ React.createElement("ul", { ...rest, className: cx("mimicus-timeline", `mimicus-timeline--${mode}`, className), style }, children, pending && /* @__PURE__ */ React.createElement("li", { className: "mimicus-timeline__item mimicus-timeline__item--pending" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__dot" }), /* @__PURE__ */ React.createElement("div", { className: "mimicus-timeline__content" }, pending)));
  }
  Timeline.Item = TimelineItem;
  function Tooltip({ title, placement = "top", arrow, children, className, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tooltip", [title, placement]);
    return /* @__PURE__ */ React.createElement("span", { ...rest, ref, className: cx("mimicus-tooltip", className), "data-mimicus-display": "tooltip", "data-placement": placement }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-tooltip__trigger", "data-mimicus-tooltip-trigger": true, tabIndex: 0 }, children), /* @__PURE__ */ React.createElement("span", { className: cx("mimicus-tooltip__popup", arrow && "mimicus-tooltip__popup--arrow"), "data-mimicus-tooltip-popup": true, role: "tooltip", hidden: true }, title));
  }
  function Tour({ steps = [], open = false, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tour", [open, steps.length]);
    return /* @__PURE__ */ React.createElement("div", { ...rest, ref, className: cx("mimicus-tour", open && "is-active", className), style, "data-mimicus-display": "tour", "data-open": open }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-tour__overlay", "data-mimicus-tour-overlay": true, hidden: true }), steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, "data-mimicus-tour-step": true, "data-target": s.target, "data-title": s.title, "data-description": s.description, hidden: true })), /* @__PURE__ */ React.createElement("div", { className: "mimicus-tour__card", "data-mimicus-tour-card": true }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-tour__close", "data-mimicus-tour-close": true, "aria-label": "Cerrar" }, "\xD7"), /* @__PURE__ */ React.createElement("strong", { "data-mimicus-tour-title": true }), /* @__PURE__ */ React.createElement("p", { "data-mimicus-tour-desc": true }), /* @__PURE__ */ React.createElement("div", { className: "mimicus-tour__actions" }, /* @__PURE__ */ React.createElement("button", { type: "button", "data-mimicus-tour-prev": true }, "Anterior"), /* @__PURE__ */ React.createElement("button", { type: "button", "data-mimicus-tour-next": true }, "Siguiente"))));
  }
  function TreeNode({ node, checkable, level = 0 }) {
    const hasKids = Boolean(node.children?.length);
    const key = node.key ?? node.title;
    return /* @__PURE__ */ React.createElement("div", { className: cx("mimicus-tree__node", hasKids && "is-expanded"), "data-mimicus-tree-node": key, style: { paddingLeft: `${level * 1.1}rem` } }, hasKids ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-tree__switcher", "data-mimicus-tree-switcher": true, "aria-expanded": "true" }, "\u25BE") : /* @__PURE__ */ React.createElement("span", { className: "mimicus-tree__switcher mimicus-tree__switcher--leaf" }), checkable && /* @__PURE__ */ React.createElement("input", { type: "checkbox", className: "mimicus-tree__check", "data-mimicus-tree-check": true }), /* @__PURE__ */ React.createElement("span", { className: "mimicus-tree__title" }, node.title), hasKids && /* @__PURE__ */ React.createElement("div", { className: "mimicus-tree__children", "data-mimicus-tree-children": true }, node.children.map((c) => /* @__PURE__ */ React.createElement(TreeNode, { key: c.key ?? c.title, node: c, checkable, level: level + 1 }))));
  }
  function Tree({ treeData = [], checkable, defaultExpandAll, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tree", [checkable, treeData.length]);
    return /* @__PURE__ */ React.createElement("div", { ...rest, ref, className: cx("mimicus-tree", className), style, "data-mimicus-display": "tree", "data-checkable": checkable, "data-default-expand-all": defaultExpandAll }, treeData.map((n) => /* @__PURE__ */ React.createElement(TreeNode, { key: n.key ?? n.title, node: n, checkable })));
  }
  function Calendar({ fullscreen, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const now = /* @__PURE__ */ new Date();
    useDisplayBinding(ref, "calendar", []);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-calendar", fullscreen && "mimicus-calendar--fullscreen", className),
        style,
        "data-mimicus-display": "calendar",
        "data-year": now.getFullYear(),
        "data-month": now.getMonth()
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-calendar__header" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-prev": true, "aria-label": "Mes anterior" }, "\u2039"), /* @__PURE__ */ React.createElement("span", { className: "mimicus-calendar__title", "data-mimicus-calendar-title": true }), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-next": true, "aria-label": "Mes siguiente" }, "\u203A")),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-calendar__weekdays" }, ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => /* @__PURE__ */ React.createElement("span", { key: d, className: "mimicus-calendar__weekday" }, d))),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-calendar__grid", "data-mimicus-calendar-grid": true })
    );
  }
  function ListItemText({ primary, secondary, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx("mimicus-list-item__text", className) }, primary && /* @__PURE__ */ React.createElement("span", { className: "mimicus-list-item__primary" }, primary), secondary && /* @__PURE__ */ React.createElement("span", { className: "mimicus-list-item__secondary" }, secondary));
  }
  function ListItemIcon({ children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("span", { ...rest, className: cx("mimicus-list-item__icon", className) }, children);
  }
  function ListItemAvatar({ children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("span", { ...rest, className: cx("mimicus-list-item__avatar", className) }, children);
  }
  function ListItem({ button, secondaryAction, children, className, ...rest }) {
    const Tag2 = button ? "button" : "li";
    return /* @__PURE__ */ React.createElement(Tag2, { ...rest, className: cx("mimicus-list-item", button && "mimicus-list-item--button", className), type: button ? "button" : void 0 }, children, secondaryAction && /* @__PURE__ */ React.createElement("span", { className: "mimicus-list-item__secondary-action" }, secondaryAction));
  }
  function List({ dense, disableGutters, subheader, children, className, style, ...rest }) {
    return /* @__PURE__ */ React.createElement("ul", { ...rest, className: cx("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className), style }, subheader && /* @__PURE__ */ React.createElement("li", { className: "mimicus-list__subheader" }, subheader), children);
  }
  List.Item = ListItem;
  List.ItemText = ListItemText;
  List.ItemIcon = ListItemIcon;
  List.ItemAvatar = ListItemAvatar;

  // src/layout/SidePanelSection.jsx
  function StatusDot({ color, size = "0.48rem" }) {
    return /* @__PURE__ */ React.createElement("span", { className: "mimicus-side-panel-section__status-dot", style: { width: size, height: size, borderRadius: "50%", background: resolveColor(color), display: "inline-block", flexShrink: 0 }, "aria-hidden": true });
  }
  function PanelIcon({ icon, style }) {
    if (!icon) return null;
    return /* @__PURE__ */ React.createElement("iconify-icon", { icon, style: { fontSize: "1.1rem", flexShrink: 0, ...style }, "aria-hidden": true });
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
    return /* @__PURE__ */ React.createElement("div", { className: ["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" "), style: accentStyle, "data-section-color": color }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" } }, /* @__PURE__ */ React.createElement(Button, { variant: active ? "soft" : "text", shape: "rect", color, onClick: onHeaderClick, style: { flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }, title: label }, /* @__PURE__ */ React.createElement(PanelIcon, { icon, style: collapsed ? { fontSize: "1.2rem" } : void 0 }), !collapsed && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "sm-title-group" }, /* @__PURE__ */ React.createElement("span", { className: "sm-label" }, label), statusDotsUnique.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "sm-status-dots" }, statusDotsUnique.map((dotColor) => /* @__PURE__ */ React.createElement(StatusDot, { key: dotColor, color: dotColor })))), count != null && /* @__PURE__ */ React.createElement("span", { className: "sm-trail" }, /* @__PURE__ */ React.createElement(Badge, null, count)))), !forceOpen && !collapsed && /* @__PURE__ */ React.createElement(Button, { variant: "text", shape: "rect", color, onClick: (e) => {
      e.stopPropagation();
      onToggle?.();
    }, style: { flex: "0 0 auto", width: "fit-content", minWidth: "2rem", paddingInline: "0.25rem" }, title: open ? "Contraer" : "Expandir", "aria-expanded": open }, /* @__PURE__ */ React.createElement(PanelIcon, { icon: "mdi:chevron-down", style: { transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" } }))), open && !collapsed && /* @__PURE__ */ React.createElement("div", { className: "sm-content mimicus-side-panel-section__content", style: { paddingLeft: "0.35rem" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "0.1rem" } }, children)));
  }

  // src/layout/Space.jsx
  var import_react11 = __require("react");
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
    const items = import_react11.Children.toArray(children).filter((c) => c != null && c !== false);
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
      return /* @__PURE__ */ React.createElement("div", { className: cls, style: rootStyle, ...rest }, items.map((child, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "mimicus-space__item" }, child)));
    }
    return /* @__PURE__ */ React.createElement("div", { className: cls, style: rootStyle, ...rest }, items.map((child, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "mimicus-space__item" }, child, i < items.length - 1 ? /* @__PURE__ */ React.createElement("span", { className: "mimicus-space__sep", "aria-hidden": "true" }, separator) : null)));
  }

  // src/layout/Stack.jsx
  var import_react12 = __require("react");
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
    const items = import_react12.Children.toArray(children).filter((c) => c != null && c !== false);
    return /* @__PURE__ */ React.createElement(
      FlexLayout,
      {
        direction: flexDir,
        gap: gap || void 0,
        items: alignItems,
        justify: justifyContent,
        className: ["mimicus-stack", className].filter(Boolean).join(" "),
        style,
        ...rest
      },
      divider ? items.flatMap((child, i) => i < items.length - 1 ? [child, /* @__PURE__ */ React.createElement("span", { key: `d-${i}`, className: "mimicus-stack__divider" }, divider)] : [child]) : children
    );
  }

  // src/layout/Box.jsx
  var import_react13 = __require("react");
  function Box({ component: Component = "div", className, style, sx, children, ...rest }) {
    const mergedStyle = joinStyle(style, sx && typeof sx === "object" ? objectToStyle(sx) : "");
    const cls = ["mimicus-box", className].filter(Boolean).join(" ");
    return (0, import_react13.createElement)(Component, { className: cls, style: mergedStyle || void 0, ...rest }, children);
  }
  function objectToStyle(sx) {
    return Object.entries(sx).map(([k, v]) => `${camelToKebab(k)}:${v}`).join("; ");
  }
  function camelToKebab(s) {
    return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  }

  // src/layout/Container.jsx
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
    return /* @__PURE__ */ React.createElement("div", { className: cls, style: mergedStyle, ...rest }, children);
  }

  // src/layout/Masonry.jsx
  var import_react14 = __require("react");
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
      return /* @__PURE__ */ React.createElement("div", { className: cls, style: rootStyle, ...rest }, items.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.key ?? item.id, className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap } }, itemRender ? itemRender(item) : item.children)));
    }
    return /* @__PURE__ */ React.createElement("div", { className: cls, style: rootStyle, ...rest }, import_react14.Children.map(children, (child, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap } }, child)));
  }

  // src/layout/ImageList.jsx
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
    return /* @__PURE__ */ React.createElement("li", { className: ["mimicus-image-list__item", className].filter(Boolean).join(" "), style: spanStyle, ...rest }, children);
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
      return /* @__PURE__ */ React.createElement("ul", { className: cls, style: joinStyle(`column-count: ${cols}`, `column-gap: ${g}`, "list-style: none", "margin: 0", "padding: 0", style), ...rest }, children);
    }
    return /* @__PURE__ */ React.createElement(
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
        ...rest
      },
      children
    );
  }
  ImageList.Item = ImageListItem;

  // src/layout/Separator.jsx
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
      ...style
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
      ...style
    };
    return /* @__PURE__ */ React.createElement("span", { className: cls, role: "separator", "aria-orientation": axis, style: mergedStyle, ...rest });
  }

  // src/layout/GridResponsiveForm.jsx
  var CELLS_BY_SIZEW = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };
  function computeCells(sizew, maxcells, mincells) {
    const base = CELLS_BY_SIZEW[sizew] ?? 1;
    const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
    return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
  }
  function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }) {
    const { sizew } = useLayoutSlot();
    const cells = computeCells(sizew ?? "md", maxcells, mincells);
    return /* @__PURE__ */ React.createElement(GridLayout, { sizew, cells: String(cells), gap, ...gridProps }, children);
  }
  function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }) {
    return /* @__PURE__ */ React.createElement(BlockLayout, { className: ["mimicus-grid-responsive-form", className].filter(Boolean).join(" "), style }, /* @__PURE__ */ React.createElement(GridResponsiveFormInner, { maxcells, mincells, gap, ...gridProps }, children));
  }

  // src/components/FloatButton.jsx
  var import_react15 = __require("react");
  function FloatButtonBase({
    icon,
    content,
    children,
    type = "default",
    shape = "circle",
    size = "large",
    href,
    target,
    tooltip,
    disabled = false,
    className,
    style,
    onClick,
    ...rest
  }) {
    const label = content ?? children;
    const extended = Boolean(label);
    const surface = mergeSurfaceStyle(type === "primary" ? "primary" : void 0, { style });
    const cls = [
      "mimicus-float-btn",
      extended && "mimicus-float-btn--extended",
      className
    ].filter(Boolean).join(" ");
    const inner = /* @__PURE__ */ React.createElement(React.Fragment, null, icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-float-btn__icon", "aria-hidden": true }, icon), extended && /* @__PURE__ */ React.createElement("span", { className: "mimicus-float-btn__content" }, label));
    const dataProps = {
      "data-type": type,
      "data-shape": shape,
      "data-size": size,
      ...surface,
      className: cls,
      style: surface.style,
      title: typeof tooltip === "string" ? tooltip : void 0,
      "aria-label": rest["aria-label"] ?? (typeof tooltip === "string" ? tooltip : extended ? String(label) : "Acci\xF3n flotante"),
      onClick: disabled ? void 0 : onClick
    };
    if (href && !disabled) {
      return /* @__PURE__ */ React.createElement("a", { href, target, ...rest, ...dataProps }, inner);
    }
    return /* @__PURE__ */ React.createElement("button", { type: "button", disabled, ...rest, ...dataProps }, inner);
  }
  function FloatButtonGroup({
    children,
    trigger = "click",
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    shape = "circle",
    placement = "top",
    className,
    style,
    closeIcon
  }) {
    const [internalOpen, setInternalOpen] = (0, import_react15.useState)(defaultOpen);
    const open = openProp ?? internalOpen;
    const setOpen = (v) => {
      if (openProp === void 0) setInternalOpen(v);
      onOpenChange?.(v);
    };
    const items = import_react15.Children.toArray(children).filter(Boolean);
    const main = items[0];
    const extras = items.slice(1);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: ["mimicus-float-btn-group", open && "is-open", className].filter(Boolean).join(" "),
        style,
        "data-trigger": trigger,
        "data-placement": placement,
        "data-shape": shape,
        onMouseEnter: trigger === "hover" ? () => setOpen(true) : void 0,
        onMouseLeave: trigger === "hover" ? () => setOpen(false) : void 0
      },
      open && extras.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mimicus-float-btn-group__menu", role: "menu" }, extras.map((child, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mimicus-float-btn-group__item", role: "none" }, child))),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-float-btn-group__trigger", role: "none" }, trigger === "click" && extras.length > 0 ? /* @__PURE__ */ React.createElement(
        FloatButtonBase,
        {
          ...main?.props ?? {},
          icon: open ? closeIcon ?? main?.props?.icon : main?.props?.icon,
          onClick: (e) => {
            setOpen(!open);
            main?.props?.onClick?.(e);
          }
        }
      ) : main)
    );
  }
  function FloatButtonBackTop({
    visibilityHeight = 400,
    duration = 450,
    target,
    onClick,
    icon,
    className,
    style
  }) {
    const [visible, setVisible] = (0, import_react15.useState)(false);
    (0, import_react15.useEffect)(() => {
      const el = target?.() ?? (typeof window !== "undefined" ? window : null);
      if (!el) return void 0;
      const onScroll = () => setVisible((el.scrollY ?? el.scrollTop ?? 0) > visibilityHeight);
      onScroll();
      el.addEventListener("scroll", onScroll, { passive: true });
      return () => el.removeEventListener("scroll", onScroll);
    }, [target, visibilityHeight]);
    if (!visible) return null;
    const scrollTop = () => {
      const el = target?.() ?? window;
      el.scrollTo?.({ top: 0, behavior: duration > 0 ? "smooth" : "auto" });
      onClick?.();
    };
    return /* @__PURE__ */ React.createElement(
      FloatButtonBase,
      {
        type: "primary",
        shape: "circle",
        className: ["mimicus-float-btn--back-top", className].filter(Boolean).join(" "),
        style,
        icon: icon ?? /* @__PURE__ */ React.createElement("span", { className: "mimicus-text-icon" }, "\u2191"),
        tooltip: "Volver arriba",
        onClick: scrollTop
      }
    );
  }
  function FloatButton(props) {
    return /* @__PURE__ */ React.createElement(FloatButtonBase, { ...props });
  }
  FloatButton.Group = FloatButtonGroup;
  FloatButton.BackTop = FloatButtonBackTop;
  function Fab(props) {
    return /* @__PURE__ */ React.createElement(FloatButton, { type: props.color === "secondary" ? "default" : "primary", ...props });
  }
  function IconButton({ size = "medium", color, variant = "text", className, style, children, icon, ...rest }) {
    const mappedSize = size === "small" ? "small" : size === "large" ? "large" : "medium";
    return /* @__PURE__ */ React.createElement(
      Button,
      {
        ...rest,
        variant,
        color,
        size: mappedSize,
        shape: "circle",
        icon: icon ?? children,
        className: ["mimicus-icon-btn", className].filter(Boolean).join(" "),
        style: { width: "fit-content", ...style }
      }
    );
  }

  // src/lib/colorTransform.js
  var colorTransform_exports = {};
  __export(colorTransform_exports, {
    applyColorTransform: () => applyColorTransform,
    bg2font: () => bg2font,
    bgTransparent2font: () => bgTransparent2font,
    joinColorStyle: () => joinColorStyle,
    mkAlpha: () => mkAlpha,
    mkBow: () => mkBow,
    mkDarken: () => mkDarken,
    mkHeadingColor: () => mkHeadingColor,
    mkInvertL: () => mkInvertL,
    mkLighten: () => mkLighten,
    mkOklchShiftL: () => mkOklchShiftL,
    mkSemanticBorder: () => mkSemanticBorder,
    mkSoftBg: () => mkSoftBg,
    mkUnbow: () => mkUnbow,
    mkWinChromeAccent: () => mkWinChromeAccent,
    paletteBaseStyle: () => paletteBaseStyle,
    paletteStateVarRules: () => paletteStateVarRules,
    paletteSurfaceTint: () => paletteSurfaceTint
  });
  var mkDarken = (c, p = 0) => colorMix(c, "black", p);
  var mkLighten = (c, p = 0) => colorMix(c, "white", p);
  var mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);
  var mkInvertL = (c) => `hsl(from ${resolveColor(c)} h s calc(100 - l))`;
  var mkBow = (color, percent = 0) => colorMix(color, "color", percent);
  var mkUnbow = (color, percent = 0) => colorMix(color, mkInvertL("color"), percent);
  var bg2font = (c) => `oklch(from ${c} calc((sign(0.75 - l) + 1) / 2 * 100%) 0 h / 1)`;
  var bgTransparent2font = (c, alphaPct, bg) => bg2font(colorMix(bg, c, 100 - alphaPct));
  var mkWinChromeAccent = (color = "primary") => `oklch(from ${resolveColor(color)} l calc(min(0.26, max(c, 0.14) + 0.05)) h)`;
  var mkOklchShiftL = (c, delta, min = 0.06, max = 0.98) => `oklch(from ${resolveColor(c)} calc(clamp(${min}, l + ${delta}, ${max})) c h)`;
  var mkSoftBg = (color, veilPct = 88) => mkAlpha(color, veilPct);
  function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
    return mkAlpha(mkUnbow(color, bowPct), alphaPct);
  }
  var mkHeadingColor = (color = "primary", bowPct) => mkBow(color, bowPct);
  function paletteBaseStyle(color = "primary") {
    return { "--ct-base": resolveColor(color) };
  }
  function paletteSurfaceTint(color, opts = {}) {
    const accent = resolveColor(color);
    const bg = colorMix(resolveColor(opts.surface ?? "card"), color, opts.cardMix ?? 15);
    const fg = colorMix(bg2font(bg), color, opts.fgMix ?? 40);
    const border = colorMix(bg, color, opts.borderMix ?? 35);
    return { accent, bg, fg, border };
  }
  function joinColorStyle(...parts) {
    return parts.filter(Boolean).join("; ");
  }
  function applyColorTransform(base, kind, amount = 0) {
    switch (kind) {
      case "darken":
        return mkDarken(base, amount);
      case "lighten":
        return mkLighten(base, amount);
      case "alpha":
        return mkAlpha(base, amount);
      case "bow":
        return mkBow(base, amount);
      case "unbow":
        return mkUnbow(base, amount);
      case "invertL":
        return mkInvertL(base);
      case "bg2font":
        return bg2font(resolveColor(base));
      default:
        return resolveColor(base);
    }
  }
  function paletteStateVarRules(cssVarName) {
    const ref = cssVarName.startsWith("var(") ? cssVarName : `var(${cssVarName})`;
    return [`${cssVarName}-hvr: ${mkLighten(ref, 15)}`, `${cssVarName}-ctv: ${mkDarken(ref, 20)}`];
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
    const cardStyle = {
      color: resolveColor("color"),
      padding: PADDING_BY_SIZE[sizew] || PADDING_BY_SIZE.md,
      border: `1px solid ${borderColor}`,
      ...boxShadow ? { boxShadow } : {},
      ...autoBackground ? { backgroundColor: fillBg } : {},
      ...style && typeof style === "object" ? style : {}
    };
    const Tag2 = inline ? "span" : "div";
    return /* @__PURE__ */ React.createElement(
      Tag2,
      {
        ...rest,
        className: ["card-root", className].filter(Boolean).join(" "),
        style: cardStyle,
        "data-variant": normalizedVariant
      },
      children
    );
  }

  // src/components/CodeBlock.jsx
  var import_react16 = __require("react");

  // src/codemirror/constants.js
  var CODEMIRROR_VERSION = "5.65.18";
  var CODEMIRROR_CDN = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}`;

  // src/codemirror/lazyLoad.js
  var LAZY_CSS_ATTR = "data-mimicus-cm-href";
  var LAZY_SCRIPT_ATTR = "data-mimicus-cm-src";
  var LAZY_SCRIPT_READY = "data-mimicus-cm-ready";
  var CM_STYLES = [
    `${CODEMIRROR_CDN}/codemirror.min.css`,
    `${CODEMIRROR_CDN}/theme/dracula.min.css`
  ];
  var CM_SCRIPT_SQL = `${CODEMIRROR_CDN}/mode/sql/sql.min.js`;
  var CM_SCRIPT_CSS = `${CODEMIRROR_CDN}/mode/css/css.min.js`;
  var CM_SCRIPTS = [
    `${CODEMIRROR_CDN}/codemirror.min.js`,
    `${CODEMIRROR_CDN}/mode/javascript/javascript.min.js`
  ];
  function ensureStylesheet(href) {
    const url = String(href || "").trim();
    if (!url || typeof document === "undefined") return Promise.resolve();
    const sel = `link[${LAZY_CSS_ATTR}="${url}"]`;
    if (document.querySelector(sel)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.setAttribute(LAZY_CSS_ATTR, url);
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`CSS no carg\xF3: ${url}`));
      document.head.appendChild(link);
    });
  }
  function loadScript(src) {
    const url = String(src || "").trim();
    if (!url || typeof document === "undefined") return Promise.resolve();
    const sel = `script[${LAZY_SCRIPT_ATTR}="${url}"]`;
    const existing = document.querySelector(sel);
    if (existing) {
      return existing.getAttribute(LAZY_SCRIPT_READY) === "1" ? Promise.resolve() : new Promise((resolve, reject) => {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`Script no carg\xF3: ${url}`)), { once: true });
      });
    }
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.src = url;
      el.async = false;
      el.setAttribute(LAZY_SCRIPT_ATTR, url);
      el.onload = () => {
        el.setAttribute(LAZY_SCRIPT_READY, "1");
        resolve();
      };
      el.onerror = () => reject(new Error(`Script no carg\xF3: ${url}`));
      document.head.appendChild(el);
    });
  }
  async function loadScriptsSequential(urls) {
    for (const src of urls) await loadScript(src);
  }
  var cmLoad = null;
  function ensureCodeMirrorLoaded(opts = {}) {
    if (typeof window !== "undefined" && window.CodeMirror) return Promise.resolve();
    if (cmLoad) return cmLoad;
    const scripts = [...CM_SCRIPTS];
    if (opts.sql) scripts.splice(1, 0, CM_SCRIPT_SQL);
    if (opts.css) scripts.push(CM_SCRIPT_CSS);
    cmLoad = (async () => {
      await Promise.all(CM_STYLES.map(ensureStylesheet));
      await loadScriptsSequential(scripts);
      if (typeof window.CodeMirror === "undefined") throw new Error("CodeMirror no disponible tras carga CDN");
    })().catch((err) => {
      cmLoad = null;
      throw err;
    });
    return cmLoad;
  }
  function ensureCodeMirrorCss() {
    if (typeof document === "undefined") return Promise.resolve();
    return Promise.all(CM_STYLES.map(ensureStylesheet));
  }

  // src/codemirror/mount.js
  function readMimicusLuminance() {
    if (typeof document === "undefined") return "dark";
    const l = document.documentElement.getAttribute("data-luminance");
    if (l === "light" || l === "dark") return l;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  }
  function resolveCodeMirrorTheme(luminance = readMimicusLuminance()) {
    return luminance === "light" ? "default" : "dracula";
  }
  function resolveMode(opts = {}) {
    if (opts.json) return { name: "javascript", json: true };
    if (opts.mode === "sql" || opts.mode === "text/x-sql") return "text/x-sql";
    return opts.mode || "javascript";
  }
  function parseCssLength(value, fallback = 160) {
    if (value == null || value === "") return fallback;
    const s = String(value).trim();
    if (s.endsWith("rem")) return parseFloat(s) * 16;
    if (s.endsWith("px")) return parseFloat(s);
    if (s.endsWith("dvh") || s.endsWith("vh")) return parseFloat(s) / 100 * window.innerHeight;
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : fallback;
  }
  function syncCmBoundedSize(cm, maxHeight, host, minHeight) {
    if (!cm || !maxHeight) return;
    const minH = parseCssLength(minHeight ?? "0", 0);
    const maxH = parseCssLength(maxHeight, 160);
    const wrap = cm.getOption?.("lineWrapping") === true;
    cm.refresh();
    const contentH = cm.getScrollInfo?.().height || minH;
    const h = Math.min(Math.max(contentH + 4, minH), maxH);
    const chain = [host?.closest?.(".mimicus-cm-panel--bounded"), host].filter(Boolean);
    for (const el of chain) {
      el.style.height = `${h}px`;
      el.style.maxHeight = String(maxHeight);
      if (minHeight) el.style.minHeight = String(minHeight);
      el.style.overflow = "hidden";
    }
    const wrapper = cm.getWrapperElement?.();
    if (wrapper) {
      wrapper.style.height = `${h}px`;
      wrapper.style.maxHeight = `${h}px`;
      wrapper.style.overflow = "hidden";
    }
    const scroller = cm.getScrollerElement?.();
    if (scroller) {
      scroller.style.height = `${h}px`;
      scroller.style.maxHeight = `${h}px`;
      scroller.style.overflowY = "auto";
      scroller.style.overflowX = wrap ? "hidden" : "auto";
    }
    cm.setSize(null, h);
    cm.refresh();
  }
  function mountCodeMirror(host, opts = {}) {
    ensureCodeMirrorCss();
    const CM = window.CodeMirror;
    if (!CM || !host) return null;
    const readOnly = !!opts.readOnly;
    const extraKeys = readOnly ? { "Ctrl-A": (cm2) => cm2.execCommand("selectAll"), "Cmd-A": (cm2) => cm2.execCommand("selectAll"), ...opts.extraKeys || {} } : { Tab: (ed) => ed.replaceSelection("  ", "end"), "Ctrl-A": (cm2) => cm2.execCommand("selectAll"), "Cmd-A": (cm2) => cm2.execCommand("selectAll"), ...opts.extraKeys || {} };
    const cm = CM(host, {
      value: opts.value ?? "",
      mode: resolveMode(opts),
      theme: opts.theme ?? resolveCodeMirrorTheme(),
      lineNumbers: opts.lineNumbers !== false,
      lineWrapping: !!opts.lineWrapping,
      readOnly,
      tabSize: 2,
      indentUnit: 2,
      indentWithTabs: false,
      viewportMargin: opts.viewportMargin ?? (readOnly && !opts.maxHeight ? Infinity : 10),
      extraKeys
    });
    if (typeof opts.onChange === "function") cm.on("change", () => opts.onChange(cm.getValue(), cm));
    return cm;
  }
  function destroyCodeMirror(cm) {
    if (!cm) return;
    const wrapper = cm.getWrapperElement?.();
    wrapper?.parentNode?.removeChild(wrapper);
  }
  async function copyEditorText(text) {
    const s = String(text ?? "");
    if (!s) return false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(s);
        return true;
      }
    } catch {
    }
    const ta = document.createElement("textarea");
    ta.value = s;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }

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

  // src/components/CodeBlock.jsx
  function cx2(...p) {
    return p.filter(Boolean).join(" ");
  }
  function needsSqlMode(mode) {
    return mode === "sql" || mode === "text/x-sql";
  }
  function needsCssMode(mode) {
    return mode === "css" || mode === "text/css";
  }
  function CodeBlock({
    value = "",
    onChange,
    readOnly = true,
    json = false,
    mode,
    lang,
    minHeight = "8rem",
    maxHeight,
    lineWrapping = true,
    lineNumbers = true,
    className,
    style,
    copyTitle = "Copiar",
    placeholder = ""
  }) {
    const hostRef = (0, import_react16.useRef)(null);
    const cmRef = (0, import_react16.useRef)(null);
    const onChangeRef = (0, import_react16.useRef)(onChange);
    const syncingRef = (0, import_react16.useRef)(false);
    const [cmReady, setCmReady] = (0, import_react16.useState)(() => typeof window !== "undefined" && !!window.CodeMirror);
    const [copied, setCopied] = (0, import_react16.useState)(false);
    (0, import_react16.useEffect)(() => {
      onChangeRef.current = onChange;
    }, [onChange]);
    (0, import_react16.useEffect)(() => {
      if (cmReady) return void 0;
      let cancelled = false;
      ensureCodeMirrorLoaded({ sql: needsSqlMode(mode), css: needsCssMode(mode) }).then(() => {
        if (!cancelled) setCmReady(true);
      }).catch((err) => console.warn("[mimicus] CodeMirror:", err));
      return () => {
        cancelled = true;
      };
    }, [cmReady, json, mode, lang]);
    (0, import_react16.useEffect)(() => {
      const host = hostRef.current;
      if (!host || !cmReady || typeof window.CodeMirror === "undefined") return void 0;
      const cm = mountCodeMirror(host, {
        value: value || "",
        json,
        mode: mode || (lang === "jsx" ? "javascript" : void 0),
        readOnly,
        lineWrapping,
        lineNumbers,
        maxHeight,
        onChange: readOnly ? void 0 : (next) => {
          if (syncingRef.current) return;
          onChangeRef.current?.(next);
        }
      });
      cmRef.current = cm;
      const resize = () => {
        if (maxHeight) syncCmBoundedSize(cm, maxHeight, host, minHeight);
        else cm?.refresh?.();
      };
      window.addEventListener("resize", resize);
      const t = setTimeout(resize, 0);
      const t2 = setTimeout(resize, 120);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
        window.removeEventListener("resize", resize);
        destroyCodeMirror(cm);
        cmRef.current = null;
      };
    }, [cmReady, json, mode, lang, readOnly, lineWrapping, lineNumbers, maxHeight, minHeight]);
    (0, import_react16.useEffect)(() => {
      const cm = cmRef.current;
      if (!cm) return;
      const cur = cm.getValue();
      const next = value ?? "";
      if (cur === next) return;
      syncingRef.current = true;
      const scroll = cm.getScrollInfo();
      const cursor = cm.getCursor();
      cm.setValue(next);
      cm.scrollTo(scroll.left, scroll.top);
      if (next && !readOnly) cm.setCursor(cursor);
      syncingRef.current = false;
      if (maxHeight) syncCmBoundedSize(cm, maxHeight, hostRef.current, minHeight);
    }, [value, readOnly, maxHeight, minHeight]);
    (0, import_react16.useEffect)(() => {
      if (!cmReady) return void 0;
      const apply = () => {
        const cm = cmRef.current;
        if (!cm?.setOption) return;
        const next = resolveCodeMirrorTheme();
        if (cm.getOption("theme") !== next) {
          cm.setOption("theme", next);
          cm.refresh();
        }
      };
      apply();
      const unsub = subscribeTheme(apply);
      const obs = new MutationObserver(apply);
      obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-luminance", "class"] });
      return () => {
        unsub();
        obs.disconnect();
      };
    }, [cmReady]);
    const panelClass = cx2("mimicus-cm-panel", maxHeight && "mimicus-cm-panel--bounded", className);
    const hostStyle = { minHeight, ...maxHeight ? { maxHeight, overflow: "hidden" } : {} };
    async function handleCopy() {
      const text = cmRef.current?.getValue?.() ?? value;
      const ok = await copyEditorText(text);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }
    }
    if (!cmReady) {
      return /* @__PURE__ */ React.createElement("div", { className: panelClass, style }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-cm-panel__toolbar" }, /* @__PURE__ */ React.createElement(IconButton, { type: "button", size: "small", "aria-label": copyTitle, onClick: () => copyEditorText(value), title: copyTitle }, "\u29C9")), /* @__PURE__ */ React.createElement("pre", { className: "mimicus-cm-fallback", style: hostStyle }, value || placeholder));
    }
    return /* @__PURE__ */ React.createElement("div", { className: panelClass, style }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-cm-panel__toolbar" }, /* @__PURE__ */ React.createElement(IconButton, { type: "button", size: "small", className: "mimicus-cm-panel__copy", "aria-label": copyTitle, title: copied ? "Copiado" : copyTitle, onClick: handleCopy }, copied ? "\u2713" : "\u29C9")), /* @__PURE__ */ React.createElement("div", { className: "mimicus-cm-host", ref: hostRef, style: hostStyle }));
  }
  var CodeMirrorPanel = CodeBlock;

  // src/components/typography/typographyHelpers.js
  var TYPOGRAPHY_VARIANTS = {
    h1: { tag: "h1", fontSize: "2.125rem", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" },
    h2: { tag: "h2", fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.015em" },
    h3: { tag: "h3", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
    h4: { tag: "h4", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35 },
    h5: { tag: "h5", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 },
    h6: { tag: "h6", fontSize: "1rem", fontWeight: 600, lineHeight: 1.45 },
    body1: { tag: "p", fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
    body2: { tag: "p", fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    caption: { tag: "span", fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.45 },
    overline: { tag: "span", fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.5, letterSpacing: "0.08em", textTransform: "uppercase" }
  };
  function levelToVariant(level) {
    const n = Math.round(Number(level)) || 1;
    return `h${Math.min(6, Math.max(1, n))}`;
  }
  function buildTypographyStyle({ color, variant, style, lines, ellipsis }) {
    const v = TYPOGRAPHY_VARIANTS[variant] ?? TYPOGRAPHY_VARIANTS.body1;
    const surface = mergeSurfaceStyle(color, { style });
    const clamp = (lines > 0 || ellipsis) && lines !== 0 ? {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: Math.max(1, Math.round(Number(lines)) || 1),
      overflow: "hidden",
      textOverflow: "ellipsis"
    } : {};
    return {
      ...surface,
      style: {
        fontSize: v.fontSize,
        fontWeight: v.fontWeight,
        lineHeight: v.lineHeight,
        letterSpacing: v.letterSpacing,
        textTransform: v.textTransform,
        ...color ? { color: resolveColor(color) } : {},
        margin: 0,
        ...clamp,
        ...surface.style ?? {},
        ...style && typeof style === "object" ? style : {}
      }
    };
  }
  function typographyClass(parts) {
    return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
  }

  // src/components/typography/Typography.jsx
  function TypographyText({
    color,
    variant = "body1",
    lines = 0,
    ellipsis = false,
    strong = false,
    italic = false,
    underline = false,
    delete: del = false,
    disabled = false,
    component,
    className,
    style,
    children,
    ...rest
  }) {
    const v = variant === "text" ? "body1" : variant;
    const spec = buildTypographyStyle({ color, variant: v, style, lines, ellipsis });
    const Tag2 = component ?? (v.startsWith("h") ? v : v === "body1" || v === "body2" ? "p" : "span");
    const mods = [strong && "mimicus-typography--strong", italic && "mimicus-typography--italic", underline && "mimicus-typography--underline", del && "mimicus-typography--delete", disabled && "mimicus-typography--disabled"].filter(Boolean);
    return /* @__PURE__ */ React.createElement(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${v}`, ...mods, className]), "data-variant": v, "aria-disabled": disabled || void 0 }, children);
  }
  function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
    const variant = levelToVariant(level);
    const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
    const Tag2 = variant;
    return /* @__PURE__ */ React.createElement(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className]), "data-level": level, "data-variant": variant }, children);
  }
  function TypographyParagraph(props) {
    return /* @__PURE__ */ React.createElement(TypographyText, { ...props, variant: props.variant ?? "body1", component: "p", className: ["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ") });
  }
  function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
    const spec = buildTypographyStyle({ color, variant: "body1", style });
    if (target === "_blank" && !rel) rel = "noopener noreferrer";
    return /* @__PURE__ */ React.createElement("a", { ...rest, href: disabled ? void 0 : href, target, rel, ...spec, className: typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className]), "aria-disabled": disabled || void 0 }, children);
  }
  function Text({ sampleText, children, ...rest }) {
    const content = children ?? sampleText;
    return /* @__PURE__ */ React.createElement(TypographyText, { ...rest }, content);
  }
  function Headings({ color, lines = 0, sampleText, children, className, style }) {
    const text = children ?? sampleText ?? "Heading";
    return /* @__PURE__ */ React.createElement("div", { className: ["mimicus-typography-headings-demo", className].filter(Boolean).join(" "), style }, [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ React.createElement(TypographyTitle, { key: level, level, color, lines }, text, " \u2014 H", level)));
  }
  function TypographyRoot(props) {
    return /* @__PURE__ */ React.createElement(TypographyText, { ...props });
  }
  TypographyRoot.Text = TypographyText;
  TypographyRoot.Title = TypographyTitle;
  TypographyRoot.Paragraph = TypographyParagraph;
  TypographyRoot.Link = TypographyLink;
  var Typography = TypographyRoot;

  // src/components/navigation/Navigation.jsx
  var import_react18 = __require("react");

  // src/nav/useNavBinding.js
  var import_react17 = __require("react");

  // src/nav/paginationMath.js
  function buildPageRange(count, page, siblingCount = 1) {
    const total = Math.max(1, Math.round(Number(count)) || 1);
    const current = Math.min(total, Math.max(1, Math.round(Number(page)) || 1));
    const siblings = Math.max(0, Math.round(Number(siblingCount)) || 0);
    const items = [];
    const pageItem = (n) => ({ type: "page", page: n, key: `p-${n}` });
    const ellipsis = (key) => ({ type: "ellipsis", key });
    if (total <= 5 + siblings * 2) {
      for (let i = 1; i <= total; i++) items.push(pageItem(i));
      return { items, current, total };
    }
    items.push(pageItem(1));
    const left = Math.max(2, current - siblings);
    const right = Math.min(total - 1, current + siblings);
    if (left > 2) items.push(ellipsis("start"));
    for (let i = left; i <= right; i++) items.push(pageItem(i));
    if (right < total - 1) items.push(ellipsis("end"));
    items.push(pageItem(total));
    return { items, current, total };
  }

  // src/nav/controllers.js
  function setActiveLink(links, href) {
    for (const a of links) {
      const match = a.getAttribute("href") === href;
      a.classList.toggle("is-active", match);
      a.setAttribute("aria-current", match ? "true" : "false");
    }
  }
  function bindAnchor(root) {
    const affix = parseBool(root.dataset.affix);
    const offset = parseNum(root.dataset.targetOffset, 0);
    const bounds = parseNum(root.dataset.bounds, 5);
    const container = resolveScrollRoot(root, root.dataset.container);
    const links = qsa("[data-mimicus-anchor-link], a[href^='#']", root);
    const sections = links.map((a) => {
      const id = (a.getAttribute("href") ?? "").slice(1);
      return id ? qs(`#${CSS.escape(id)}`, container) : null;
    }).filter(Boolean);
    const cleanups = [];
    const activateById = (id) => setActiveLink(links, `#${id}`);
    for (const a of links) {
      cleanups.push(on(a, "click", (e) => {
        const href = a.getAttribute("href");
        if (!href?.startsWith("#")) return;
        e.preventDefault();
        const target = qs(href, container);
        scrollToTarget(target, { offset, root: container === document ? null : container });
        activateById(href.slice(1));
        emit(root, "mimicus-anchor-change", { href });
      }));
    }
    if (affix && sections.length) {
      const scrollEl = container === document ? window : container;
      const onScroll = () => {
        const scrollTop = container === document ? window.scrollY : container.scrollTop;
        let active = sections[0];
        for (const sec of sections) {
          const top = (container === document ? sec.offsetTop : sec.offsetTop) - offset - bounds;
          if (scrollTop >= top) active = sec;
        }
        if (active?.id) activateById(active.id);
      };
      cleanups.push(on(scrollEl, "scroll", onScroll, { passive: true }));
      onScroll();
    }
    return () => cleanups.forEach((fn) => fn());
  }
  function readTabKey(el) {
    return el.dataset.mimicusTab ?? el.dataset.key ?? el.getAttribute("data-key");
  }
  function setTabActive(root, key) {
    const tabs = qsa("[data-mimicus-tab]", root);
    const panels = qsa("[data-mimicus-tab-panel]", root);
    for (const tab of tabs) {
      const on2 = readTabKey(tab) === key;
      tab.classList.toggle("is-active", on2);
      tab.setAttribute("aria-selected", on2 ? "true" : "false");
      tab.tabIndex = on2 ? 0 : -1;
    }
    for (const panel of panels) {
      const on2 = panel.dataset.mimicusTabPanel === key || panel.dataset.key === key;
      panel.classList.toggle("is-active", on2);
      panel.hidden = !on2;
    }
    root.dataset.activeKey = key;
  }
  function bindTabs(root) {
    const defaultKey = root.dataset.defaultActiveKey ?? root.dataset.activeKey;
    const tabs = qsa("[data-mimicus-tab]", root);
    const cleanups = [];
    let active = defaultKey ?? readTabKey(tabs.find((t) => t.classList.contains("is-active")) ?? tabs[0]);
    if (active) setTabActive(root, active);
    for (const tab of tabs) {
      if (tab.disabled || tab.getAttribute("aria-disabled") === "true") continue;
      cleanups.push(on(tab, "click", () => {
        const key = readTabKey(tab);
        if (!key || key === root.dataset.activeKey) return;
        setTabActive(root, key);
        emit(root, "mimicus-tabs-change", { activeKey: key });
      }));
    }
    return () => cleanups.forEach((fn) => fn());
  }
  function bindDropdown(root) {
    const trigger = qs("[data-mimicus-dropdown-trigger]", root) ?? qs("button, [role='button']", root);
    const panel = qs("[data-mimicus-dropdown-panel]", root);
    if (!trigger || !panel) return () => {
    };
    const open = () => {
      root.classList.add("is-open");
      root.setAttribute("data-open", "true");
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    };
    const close = () => {
      root.classList.remove("is-open");
      root.removeAttribute("data-open");
      trigger.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    };
    const toggle = () => root.classList.contains("is-open") ? close() : open();
    const cleanups = [
      on(trigger, "click", (e) => {
        e.stopPropagation();
        toggle();
      }),
      on(root, "keydown", (e) => {
        if (e.key === "Escape") close();
      }),
      clickOutside(root, close)
    ];
    for (const item of qsa("[data-mimicus-menu-item], [role='menuitem']", panel)) {
      cleanups.push(on(item, "click", () => {
        if (!parseBool(item.dataset.keepOpen)) close();
        emit(root, "mimicus-dropdown-select", { key: item.dataset.key });
      }));
    }
    close();
    return () => {
      close();
      cleanups.forEach((fn) => fn());
    };
  }
  function bindMenu(root) {
    const items = qsa("[role='menuitem']:not([aria-disabled='true'])", root);
    let idx = Math.max(0, items.findIndex((el) => el.classList.contains("is-active")));
    const focusAt = (i) => {
      idx = (i + items.length) % items.length;
      items[idx]?.focus();
    };
    const cleanups = [
      on(root, "keydown", (e) => {
        if (!items.length) return;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusAt(idx + 1);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusAt(idx - 1);
        } else if (e.key === "Home") {
          e.preventDefault();
          focusAt(0);
        } else if (e.key === "End") {
          e.preventDefault();
          focusAt(items.length - 1);
        }
      })
    ];
    for (const item of items) {
      cleanups.push(on(item, "click", () => {
        items.forEach((el) => el.classList.toggle("is-active", el === item));
        emit(root, "mimicus-menu-select", { key: item.dataset.key });
      }));
    }
    return () => cleanups.forEach((fn) => fn());
  }
  function paintPagination(root, count, page, siblingCount) {
    const { items, current, total } = buildPageRange(count, page, siblingCount);
    const list = qs("[data-mimicus-pagination-list]", root);
    if (!list) return;
    list.innerHTML = "";
    const mkBtn = (label, action, disabled, active) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = ["mimicus-pagination__btn", active && "is-active", disabled && "is-disabled"].filter(Boolean).join(" ");
      b.textContent = label;
      b.dataset.mimicusPage = action;
      if (disabled) b.disabled = true;
      if (active) b.setAttribute("aria-current", "page");
      return b;
    };
    list.appendChild(mkBtn("\u2039", "prev", current <= 1, false));
    for (const it of items) {
      if (it.type === "ellipsis") {
        const s = document.createElement("span");
        s.className = "mimicus-pagination__ellipsis";
        s.textContent = "\u2026";
        list.appendChild(s);
      } else list.appendChild(mkBtn(String(it.page), String(it.page), false, it.page === current));
    }
    list.appendChild(mkBtn("\u203A", "next", current >= total, false));
    root.dataset.page = String(current);
    root.dataset.count = String(total);
  }
  function bindPagination(root) {
    const count = parseNum(root.dataset.count, 10);
    let page = parseNum(root.dataset.page ?? root.dataset.defaultPage, 1);
    const sibling = parseNum(root.dataset.siblingCount, 1);
    const setPage = (next) => {
      page = Math.min(count, Math.max(1, next));
      paintPagination(root, count, page, sibling);
      emit(root, "mimicus-pagination-change", { page, count });
    };
    paintPagination(root, count, page, sibling);
    const cleanups = [on(root, "click", (e) => {
      const btn = e.target.closest("[data-mimicus-page]");
      if (!btn || btn.disabled) return;
      const action = btn.dataset.mimicusPage;
      if (action === "prev") setPage(page - 1);
      else if (action === "next") setPage(page + 1);
      else setPage(parseNum(action, page));
    })];
    return () => cleanups.forEach((fn) => fn());
  }
  function bindSteps(root) {
    const clickable = parseBool(root.dataset.clickable);
    if (!clickable) return () => {
    };
    const steps = qsa("[data-mimicus-step]", root);
    const cleanups = steps.map((step, i) => on(step, "click", () => {
      root.dataset.current = String(i);
      steps.forEach((s, j) => {
        s.classList.toggle("is-finish", j < i);
        s.classList.toggle("is-process", j === i);
        s.classList.toggle("is-wait", j > i);
      });
      emit(root, "mimicus-steps-change", { current: i });
    }));
    return () => cleanups.forEach((fn) => fn());
  }
  function bindDrawer(root) {
    const backdrop = qs("[data-mimicus-drawer-backdrop]", root) ?? qs(".mimicus-drawer__backdrop", root);
    const panel = qs("[data-mimicus-drawer-panel]", root) ?? qs(".mimicus-drawer__panel", root);
    const closeBtn = qs("[data-mimicus-drawer-close]", root);
    const sync = () => {
      const open = parseBool(root.dataset.open);
      root.classList.toggle("is-open", open);
      root.setAttribute("aria-hidden", open ? "false" : "true");
      if (panel) panel.inert = !open;
      document.documentElement.classList.toggle("mimicus-drawer-open", open);
    };
    const close = () => {
      root.dataset.open = "false";
      sync();
      emit(root, "mimicus-drawer-close", {});
    };
    sync();
    const cleanups = [
      on(backdrop, "click", close),
      on(closeBtn, "click", close),
      on(document, "keydown", (e) => {
        if (e.key === "Escape" && parseBool(root.dataset.open)) close();
      })
    ];
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["data-open"] });
    return () => {
      obs.disconnect();
      cleanups.forEach((fn) => fn());
      document.documentElement.classList.remove("mimicus-drawer-open");
    };
  }
  function bindBottomNav(root) {
    const actions = qsa("[data-mimicus-bottom-action]", root);
    const cleanups = [];
    const setValue = (val) => {
      root.dataset.value = val;
      for (const a of actions) {
        const on2 = a.dataset.mimicusBottomAction === val;
        a.classList.toggle("is-active", on2);
        a.setAttribute("aria-selected", on2 ? "true" : "false");
      }
    };
    setValue(root.dataset.value ?? actions[0]?.dataset.mimicusBottomAction ?? "");
    for (const a of actions) {
      cleanups.push(on(a, "click", () => {
        const v = a.dataset.mimicusBottomAction;
        setValue(v);
        emit(root, "mimicus-bottom-nav-change", { value: v });
      }));
    }
    return () => cleanups.forEach((fn) => fn());
  }
  function bindSpeedDial(root) {
    const fab = qs("[data-mimicus-speed-dial-trigger]", root) ?? qs(".mimicus-speed-dial__trigger", root);
    const openCls = "is-open";
    const close = () => {
      root.classList.remove(openCls);
      fab?.setAttribute("aria-expanded", "false");
    };
    const open = () => {
      root.classList.add(openCls);
      fab?.setAttribute("aria-expanded", "true");
    };
    const toggle = () => root.classList.contains(openCls) ? close() : open();
    const cleanups = [
      on(fab, "click", (e) => {
        e.stopPropagation();
        toggle();
      }),
      on(root, "keydown", (e) => {
        if (e.key === "Escape") close();
      }),
      clickOutside(root, close)
    ];
    for (const action of qsa("[data-mimicus-speed-dial-action]", root)) {
      cleanups.push(on(action, "click", () => {
        close();
        emit(root, "mimicus-speed-dial-action", { key: action.dataset.mimicusSpeedDialAction });
      }));
    }
    close();
    return () => {
      close();
      cleanups.forEach((fn) => fn());
    };
  }
  var BINDERS2 = {
    anchor: bindAnchor,
    tabs: bindTabs,
    dropdown: bindDropdown,
    menu: bindMenu,
    pagination: bindPagination,
    steps: bindSteps,
    drawer: bindDrawer,
    "bottom-nav": bindBottomNav,
    "speed-dial": bindSpeedDial
  };
  function bindNavComponent(root) {
    const type = root?.dataset?.mimicusNav;
    root.__mimicusNavCleanup?.();
    const cleanup = BINDERS2[type]?.(root) ?? (() => {
    });
    root.__mimicusNavCleanup = cleanup;
    return () => {
      cleanup();
      delete root.__mimicusNavCleanup;
    };
  }
  function mountNavigation(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-nav]", document) : [scope].filter((el) => el?.dataset?.mimicusNav);
    const cleanups = roots.map(bindNavComponent);
    return () => cleanups.forEach((fn) => fn());
  }

  // src/nav/useNavBinding.js
  function useNavBinding(ref, type, deps = []) {
    (0, import_react17.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      el.dataset.mimicusNav = type;
      return bindNavComponent(el);
    }, deps);
  }

  // src/components/navigation/Navigation.jsx
  function cx3(...p) {
    return p.filter(Boolean).join(" ");
  }
  function AnchorLink({ href, title, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("a", { ...rest, href, title, className: cx3("mimicus-anchor__link", className), "data-mimicus-anchor-link": true }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-anchor__link-title" }, children ?? title));
  }
  function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "anchor", [direction, affix, targetOffset, bounds, container]);
    const body = children ?? items?.map((it, i) => /* @__PURE__ */ React.createElement(AnchorLink, { key: it.href ?? i, href: it.href, title: it.title }, it.title));
    return /* @__PURE__ */ React.createElement(
      "nav",
      {
        ref,
        ...rest,
        className: cx3("mimicus-anchor", `mimicus-anchor--${direction}`, className),
        style,
        "data-direction": direction,
        "data-affix": affix ? "true" : void 0,
        "data-target-offset": targetOffset,
        "data-bounds": bounds,
        "data-container": container,
        "data-mimicus-nav": "anchor"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-anchor__list" }, body)
    );
  }
  Anchor.Link = AnchorLink;
  function BreadcrumbItem({ href, children, className, ...rest }) {
    const inner = href ? /* @__PURE__ */ React.createElement("a", { href, className: "mimicus-breadcrumbs__link", ...rest }, children) : /* @__PURE__ */ React.createElement("span", { className: "mimicus-breadcrumbs__page", "aria-current": "page", ...rest }, children);
    return /* @__PURE__ */ React.createElement("li", { className: cx3("mimicus-breadcrumbs__item", className) }, inner);
  }
  function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }) {
    const nodes = children ?? items?.map((it, i) => /* @__PURE__ */ React.createElement(BreadcrumbItem, { key: i, href: it.href }, it.label));
    const list = (0, import_react18.useMemo)(() => import_react18.Children.toArray(nodes), [nodes]);
    const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
    const withSep = [];
    visible.forEach((node, i) => {
      if (i > 0) withSep.push(/* @__PURE__ */ React.createElement("li", { key: `sep-${i}`, className: "mimicus-breadcrumbs__sep", "aria-hidden": true }, separator));
      withSep.push(node);
    });
    return /* @__PURE__ */ React.createElement("nav", { ...rest, "aria-label": "breadcrumb", className: cx3("mimicus-breadcrumbs", className), style }, /* @__PURE__ */ React.createElement("ol", { className: "mimicus-breadcrumbs__list" }, withSep));
  }
  Breadcrumbs.Item = BreadcrumbItem;
  var Breadcrumb = Breadcrumbs;
  function MenuItem({ itemKey, disabled, icon, children, className, ...rest }) {
    const dataKey = itemKey ?? rest["data-key"];
    return /* @__PURE__ */ React.createElement("li", { role: "none" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        role: "menuitem",
        disabled,
        "data-key": dataKey,
        "data-mimicus-menu-item": true,
        className: cx3("mimicus-menu__item", disabled && "is-disabled", className),
        ...rest
      },
      icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-menu__icon", "aria-hidden": true }, icon),
      /* @__PURE__ */ React.createElement("span", { className: "mimicus-menu__label" }, children)
    ));
  }
  function MenuDivider() {
    return /* @__PURE__ */ React.createElement("li", { role: "separator", className: "mimicus-menu__divider" });
  }
  function Menu({ mode = "vertical", selectable, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "menu", [mode]);
    return /* @__PURE__ */ React.createElement(
      "ul",
      {
        ref,
        role: "menu",
        ...rest,
        className: cx3("mimicus-menu", `mimicus-menu--${mode}`, selectable && "mimicus-menu--selectable", className),
        style,
        "data-mode": mode,
        "data-mimicus-nav": "menu"
      },
      children
    );
  }
  Menu.Item = MenuItem;
  Menu.Divider = MenuDivider;
  function Dropdown({ trigger, menu, placement = "bottomLeft", open, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "dropdown", [placement, open]);
    const body = children ?? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mimicus-dropdown__trigger", "data-mimicus-dropdown-trigger": true }, trigger), /* @__PURE__ */ React.createElement("div", { className: "mimicus-dropdown__panel", "data-mimicus-dropdown-panel": true, role: "menu" }, menu));
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-dropdown", `mimicus-dropdown--${placement}`, open && "is-open", className),
        style,
        "data-placement": placement,
        "data-open": open ? "true" : void 0,
        "data-mimicus-nav": "dropdown"
      },
      body
    );
  }
  function TabItem() {
    return null;
  }
  function normalizeTabItems(items, children) {
    if (items?.length) return items.map((it, i) => ({ key: it.key ?? it.tabKey ?? `tab-${i}`, label: it.label, disabled: it.disabled, icon: it.icon, content: it.children ?? it.content }));
    return import_react18.Children.map(children, (child, i) => {
      if (!child?.props) return null;
      const p = child.props;
      return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
    }).filter(Boolean);
  }
  function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    const tabItems = normalizeTabItems(items, children);
    const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
    useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
    const tabs = [];
    const panels = [];
    tabItems.forEach((it) => {
      const k = it.key;
      const on2 = (activeKey ?? defaultKey) === k;
      tabs.push(
        /* @__PURE__ */ React.createElement(
          "button",
          {
            key: `t-${k}`,
            type: "button",
            role: "tab",
            "data-mimicus-tab": k,
            "data-key": k,
            disabled: it.disabled,
            className: cx3("mimicus-tabs__tab", on2 && "is-active"),
            "aria-selected": on2 ? "true" : "false"
          },
          it.icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-tabs__icon", "aria-hidden": true }, it.icon),
          /* @__PURE__ */ React.createElement("span", { className: "mimicus-tabs__label" }, it.label)
        )
      );
      panels.push(
        /* @__PURE__ */ React.createElement(
          "div",
          {
            key: `p-${k}`,
            role: "tabpanel",
            "data-mimicus-tab-panel": k,
            "data-key": k,
            className: cx3("mimicus-tabs__panel", on2 && "is-active"),
            hidden: !on2
          },
          it.content
        )
      );
    });
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-tabs", `mimicus-tabs--${type}`, `mimicus-tabs--${tabPosition}`, className),
        style,
        "data-type": type,
        "data-tab-position": tabPosition,
        "data-active-key": activeKey,
        "data-default-active-key": defaultKey,
        "data-mimicus-nav": "tabs"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-tabs__nav", role: "tablist" }, tabs),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-tabs__content" }, panels)
    );
  }
  Tabs.Tab = TabItem;
  function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, size, simple, className, style, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
    return /* @__PURE__ */ React.createElement(
      "nav",
      {
        ref,
        ...rest,
        "aria-label": "pagination",
        className: cx3("mimicus-pagination", size && `mimicus-pagination--${size}`, simple && "mimicus-pagination--simple", className),
        style,
        "data-count": count,
        "data-page": page,
        "data-default-page": defaultPage,
        "data-sibling-count": siblingCount,
        "data-boundary-count": boundaryCount,
        "data-mimicus-nav": "pagination"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-pagination__list", "data-mimicus-pagination-list": true, role: "navigation" })
    );
  }
  function Step({ title, description, status, icon, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("div", { ...rest, className: cx3("mimicus-steps__item", status && `is-${status}`, className), "data-mimicus-step": true }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-steps__icon" }, icon ?? /* @__PURE__ */ React.createElement("span", { className: "mimicus-steps__dot" })), /* @__PURE__ */ React.createElement("div", { className: "mimicus-steps__content" }, title && /* @__PURE__ */ React.createElement("div", { className: "mimicus-steps__title" }, title), description && /* @__PURE__ */ React.createElement("div", { className: "mimicus-steps__desc" }, description)));
  }
  function Steps({ current = 0, direction = "horizontal", size, clickable, items, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "steps", [current, direction, clickable]);
    const body = children ?? items?.map((it, i) => {
      const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
      return /* @__PURE__ */ React.createElement(Step, { key: i, title: it.title, description: it.description, status: st, icon: it.icon });
    });
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-steps", `mimicus-steps--${direction}`, size && `mimicus-steps--${size}`, className),
        style,
        "data-current": current,
        "data-direction": direction,
        "data-clickable": clickable ? "true" : void 0,
        "data-mimicus-nav": "steps"
      },
      body
    );
  }
  Steps.Step = Step;
  var Stepper = Steps;
  function Drawer({ open = false, placement = "left", width = 280, title, footer, className, style, children, onClose, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "drawer", [open, placement, width]);
    (0, import_react18.useEffect)(() => {
      const el = ref.current;
      if (!el || !onClose) return void 0;
      const fn = () => onClose();
      el.addEventListener("mimicus-drawer-close", fn);
      return () => el.removeEventListener("mimicus-drawer-close", fn);
    }, [onClose]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-drawer", `mimicus-drawer--${placement}`, open && "is-open", className),
        style: { ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width },
        "data-open": open ? "true" : "false",
        "data-placement": placement,
        "data-mimicus-nav": "drawer",
        "aria-hidden": open ? "false" : "true"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-drawer__backdrop", "data-mimicus-drawer-backdrop": true, "aria-hidden": true }),
      /* @__PURE__ */ React.createElement("aside", { className: "mimicus-drawer__panel", "data-mimicus-drawer-panel": true, role: "dialog", "aria-modal": "true" }, title && /* @__PURE__ */ React.createElement("header", { className: "mimicus-drawer__header" }, title, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-drawer__close", "data-mimicus-drawer-close": true, "aria-label": "Cerrar" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "mimicus-drawer__body" }, children), footer && /* @__PURE__ */ React.createElement("footer", { className: "mimicus-drawer__footer" }, footer))
    );
  }
  function BottomNavigationAction({ value, label, icon, className, ...rest }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        ...rest,
        className: cx3("mimicus-bottom-nav__action", className),
        "data-mimicus-bottom-action": value,
        "aria-label": label
      },
      icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-bottom-nav__icon", "aria-hidden": true }, icon),
      label && /* @__PURE__ */ React.createElement("span", { className: "mimicus-bottom-nav__label" }, label)
    );
  }
  function BottomNavigation({ value, showLabels, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "bottom-nav", [value, showLabels]);
    return /* @__PURE__ */ React.createElement(
      "nav",
      {
        ref,
        ...rest,
        className: cx3("mimicus-bottom-nav", showLabels && "mimicus-bottom-nav--labels", className),
        style,
        "data-value": value,
        "data-show-labels": showLabels ? "true" : void 0,
        "data-mimicus-nav": "bottom-nav"
      },
      children
    );
  }
  BottomNavigation.Action = BottomNavigationAction;
  function NavLink({ href = "#", underline = "hover", color = "primary", className, style, children, disabled, component: Comp, ...rest }) {
    const Tag2 = Comp ?? "a";
    const props = Tag2 === "a" ? { href: disabled ? void 0 : href } : {};
    return /* @__PURE__ */ React.createElement(
      Tag2,
      {
        ...rest,
        ...props,
        className: cx3("mimicus-nav-link", `mimicus-nav-link--underline-${underline}`, `mimicus-nav-link--${color}`, disabled && "is-disabled", className),
        style,
        "aria-disabled": disabled || void 0
      },
      children
    );
  }
  var Link = NavLink;
  function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }) {
    const key = actionKey ?? rest.key;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        ...rest,
        className: cx3("mimicus-speed-dial__action", className),
        "data-mimicus-speed-dial-action": key,
        title: tooltip,
        "aria-label": tooltip
      },
      /* @__PURE__ */ React.createElement("span", { className: "mimicus-speed-dial__action-icon", "aria-hidden": true }, icon),
      tooltip && /* @__PURE__ */ React.createElement("span", { className: "mimicus-speed-dial__tooltip" }, tooltip)
    );
  }
  function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }) {
    const ref = (0, import_react18.useRef)(null);
    useNavBinding(ref, "speed-dial", [direction, open]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-speed-dial", `mimicus-speed-dial--${direction}`, open && "is-open", className),
        style,
        "data-direction": direction,
        "data-mimicus-nav": "speed-dial"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-speed-dial__actions", role: "menu" }, children),
      /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-speed-dial__trigger", "data-mimicus-speed-dial-trigger": true, "aria-label": ariaLabel, "aria-haspopup": "menu" }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-speed-dial__icon", "aria-hidden": true }, icon ?? "+"))
    );
  }
  SpeedDial.Action = SpeedDialAction;

  // src/forms/controllers.js
  function bindSlider(root) {
    const input = qs("input[type='range']", root) ?? qs("[data-mimicus-slider-input]", root);
    const fill = qs("[data-mimicus-slider-fill]", root);
    const label = qs("[data-mimicus-slider-value]", root);
    if (!input) return () => {
    };
    const paint = () => {
      const min = parseNum(input.min, 0);
      const max = parseNum(input.max, 100);
      const val = parseNum(input.value, min);
      const pct = max === min ? 0 : (val - min) / (max - min) * 100;
      if (fill) fill.style.width = `${pct}%`;
      if (label) label.textContent = String(val);
      root.dataset.value = String(val);
    };
    paint();
    const clean = on(input, "input", () => {
      paint();
      emit(root, "mimicus-slider-change", { value: parseNum(input.value) });
    });
    return () => {
      clean();
      delete root.__mimicusFormCleanup;
    };
  }
  function bindRate(root) {
    const allowHalf = parseBool(root.dataset.allowHalf);
    const allowClear = root.dataset.allowClear !== "false";
    const count = parseNum(root.dataset.count, 5);
    const stars = qsa("[data-mimicus-rate-star]", root);
    let value = parseNum(root.dataset.value ?? root.dataset.defaultValue, 0);
    const paint = (v, hover = false) => {
      value = v;
      root.dataset.value = String(v);
      stars.forEach((star, i) => {
        const idx = i + 1;
        const full = v >= idx;
        const half = allowHalf && v + 0.5 >= idx && v < idx;
        star.classList.toggle("is-full", full);
        star.classList.toggle("is-half", half);
        star.classList.toggle("is-hover", hover && v >= idx - (allowHalf ? 0.5 : 0));
      });
    };
    paint(value);
    const cleanups = stars.map((star) => {
      const idx = parseNum(star.dataset.mimicusRateStar, 1);
      return [
        on(star, "mousemove", (e) => {
          if (parseBool(root.dataset.disabled)) return;
          const rect = star.getBoundingClientRect();
          const half = allowHalf && e.clientX - rect.left < rect.width / 2;
          paint(half ? idx - 0.5 : idx, true);
        }),
        on(star, "mouseleave", () => paint(parseNum(root.dataset.value, value))),
        on(star, "click", () => {
          if (parseBool(root.dataset.disabled)) return;
          const next = allowClear && parseNum(root.dataset.value) === idx ? 0 : idx;
          paint(next);
          emit(root, "mimicus-rate-change", { value: next });
        })
      ];
    }).flat();
    return () => cleanups.forEach((fn) => fn());
  }
  function bindAutocomplete(root) {
    const input = qs("input", root);
    const panel = qs("[data-mimicus-autocomplete-panel]", root);
    if (!input || !panel) return () => {
    };
    const options = () => qsa("[data-mimicus-autocomplete-option]", panel);
    const open = () => {
      root.classList.add("is-open");
      panel.hidden = false;
    };
    const close = () => {
      root.classList.remove("is-open");
      panel.hidden = true;
    };
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      options().forEach((opt) => {
        const show = !q || String(opt.textContent).toLowerCase().includes(q);
        opt.hidden = !show;
        if (show) visible += 1;
      });
      visible ? open() : close();
    };
    const cleanups = [
      on(input, "input", filter),
      on(input, "focus", filter),
      on(root, "keydown", (e) => {
        if (e.key === "Escape") close();
      }),
      clickOutside(root, close),
      ...options().map((opt) => on(opt, "click", () => {
        input.value = opt.dataset.value ?? opt.textContent ?? "";
        close();
        emit(root, "mimicus-autocomplete-select", { value: input.value });
      }))
    ];
    close();
    return () => cleanups.forEach((fn) => fn());
  }
  function bindToggleGroup(root) {
    const exclusive = root.dataset.exclusive !== "false";
    const btns = qsa("[data-mimicus-toggle]", root);
    const setActive = (vals) => {
      btns.forEach((b) => {
        const on2 = vals.includes(b.dataset.mimicusToggle);
        b.classList.toggle("is-active", on2);
        b.setAttribute("aria-pressed", on2 ? "true" : "false");
      });
      root.dataset.value = exclusive ? vals[0] ?? "" : vals.join(",");
    };
    const initial2 = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
    setActive(exclusive ? initial2 ? [initial2] : [] : String(initial2).split(",").filter(Boolean));
    const cleanups = btns.map((b) => on(b, "click", () => {
      if (b.disabled) return;
      const v = b.dataset.mimicusToggle;
      if (exclusive) setActive([v]);
      else {
        const cur = String(root.dataset.value ?? "").split(",").filter(Boolean);
        setActive(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
      }
      emit(root, "mimicus-toggle-change", { value: root.dataset.value });
    }));
    return () => cleanups.forEach((fn) => fn());
  }
  function moveSelected(from, to) {
    const selected = qsa("[data-mimicus-transfer-item].is-selected", from);
    selected.forEach((el) => to.appendChild(el));
  }
  function bindTransfer(root) {
    const left = qs("[data-mimicus-transfer-left]", root);
    const right = qs("[data-mimicus-transfer-right]", root);
    if (!left || !right) return () => {
    };
    const toggleSelect = (item) => item.classList.toggle("is-selected");
    const cleanups = [
      on(root, "click", (e) => {
        const item = e.target.closest("[data-mimicus-transfer-item]");
        if (item && !parseBool(root.dataset.disabled)) toggleSelect(item);
        const action = e.target.closest("[data-mimicus-transfer-action]")?.dataset.mimicusTransferAction;
        if (!action || parseBool(root.dataset.disabled)) return;
        if (action === "toRight") moveSelected(left, right);
        if (action === "toLeft") moveSelected(right, left);
        emit(root, "mimicus-transfer-change", {});
      })
    ];
    return () => cleanups.forEach((fn) => fn());
  }
  function bindTransferBoard(root) {
    if (parseBool(root.dataset.disabled)) return () => {
    };
    let dragEl = null;
    const stacks = qsa("[data-mimicus-transfer-stack]", root);
    const cleanups = stacks.flatMap((stack) => [
      on(stack, "dragover", (e) => {
        e.preventDefault();
        stack.classList.add("is-drag-over");
      }),
      on(stack, "dragleave", () => stack.classList.remove("is-drag-over")),
      on(stack, "drop", (e) => {
        e.preventDefault();
        stack.classList.remove("is-drag-over");
        if (dragEl) stack.querySelector("[data-mimicus-transfer-list]")?.appendChild(dragEl);
        dragEl = null;
        emit(root, "mimicus-transfer-board-change", {});
      })
    ]);
    qsa("[data-mimicus-transfer-item]", root).forEach((item) => {
      item.draggable = true;
      cleanups.push(on(item, "dragstart", () => {
        dragEl = item;
        item.classList.add("is-dragging");
      }));
      cleanups.push(on(item, "dragend", () => item.classList.remove("is-dragging")));
    });
    return () => cleanups.forEach((fn) => fn());
  }
  function bindCascader(root) {
    const trigger = qs("[data-mimicus-cascader-trigger]", root);
    const panel = qs("[data-mimicus-cascader-panel]", root);
    if (!trigger || !panel) return () => {
    };
    const open = () => {
      root.classList.add("is-open");
      panel.hidden = false;
    };
    const close = () => {
      root.classList.remove("is-open");
      panel.hidden = true;
    };
    const cleanups = [
      on(trigger, "click", (e) => {
        e.stopPropagation();
        root.classList.contains("is-open") ? close() : open();
      }),
      clickOutside(root, close),
      ...qsa("[data-mimicus-cascader-option]", panel).map((opt) => on(opt, "click", () => {
        trigger.textContent = opt.dataset.label ?? opt.textContent;
        root.dataset.value = opt.dataset.value ?? "";
        close();
        emit(root, "mimicus-cascader-change", { value: root.dataset.value });
      }))
    ];
    close();
    return () => cleanups.forEach((fn) => fn());
  }
  function bindTreeSelect(root) {
    const trigger = qs("[data-mimicus-tree-trigger]", root);
    const panel = qs("[data-mimicus-tree-panel]", root);
    if (!trigger || !panel) return () => {
    };
    const open = () => {
      root.classList.add("is-open");
      panel.hidden = false;
    };
    const close = () => {
      root.classList.remove("is-open");
      panel.hidden = true;
    };
    const cleanups = [
      on(trigger, "click", (e) => {
        e.stopPropagation();
        root.classList.contains("is-open") ? close() : open();
      }),
      clickOutside(root, close),
      ...qsa("[data-mimicus-tree-node]", panel).map((node) => on(node, "click", (e) => {
        const toggle = e.target.closest("[data-mimicus-tree-toggle]");
        if (toggle) {
          const sub = node.querySelector("[data-mimicus-tree-children]");
          if (sub) sub.hidden = !sub.hidden;
          return;
        }
        const label = node.dataset.label ?? node.textContent;
        trigger.textContent = label?.trim();
        root.dataset.value = node.dataset.value ?? "";
        close();
        emit(root, "mimicus-tree-select-change", { value: root.dataset.value });
      }))
    ];
    close();
    return () => cleanups.forEach((fn) => fn());
  }
  function bindMentions(root) {
    const area = qs("textarea", root);
    const panel = qs("[data-mimicus-mentions-panel]", root);
    if (!area || !panel) return () => {
    };
    const show = (q) => {
      const opts = qsa("[data-mimicus-mentions-option]", panel);
      let n = 0;
      opts.forEach((o) => {
        const showIt = !q || String(o.dataset.value).toLowerCase().includes(q.toLowerCase());
        o.hidden = !showIt;
        if (showIt) n += 1;
      });
      panel.hidden = n === 0;
      root.classList.toggle("is-open", n > 0);
    };
    const cleanups = [
      on(area, "input", () => {
        const m = area.value.slice(0, area.selectionStart).match(/@([\w]*)$/);
        show(m ? m[1] : "");
      }),
      ...qsa("[data-mimicus-mentions-option]", panel).map((opt) => on(opt, "click", () => {
        const m = area.value.slice(0, area.selectionStart).match(/@([\w]*)$/);
        if (!m) return;
        const before = area.value.slice(0, m.index);
        const after = area.value.slice(area.selectionStart);
        area.value = `${before}@${opt.dataset.value} ${after}`;
        panel.hidden = true;
        emit(root, "mimicus-mentions-change", { value: area.value });
      }))
    ];
    panel.hidden = true;
    return () => cleanups.forEach((fn) => fn());
  }
  function bindInputNumber(root) {
    const input = qs("input", root);
    const dec = qs("[data-mimicus-input-number-dec]", root);
    const inc = qs("[data-mimicus-input-number-inc]", root);
    if (!input) return () => {
    };
    const step = () => parseNum(root.dataset.step, 1);
    const min = () => parseNum(root.dataset.min, -Infinity);
    const max = () => parseNum(root.dataset.max, Infinity);
    const clamp = (v) => Math.min(max(), Math.max(min(), v));
    const set2 = (v) => {
      input.value = String(clamp(v));
      root.dataset.value = input.value;
      emit(root, "mimicus-input-number-change", { value: parseNum(input.value) });
    };
    const cleanups = [
      on(input, "change", () => set2(parseNum(input.value, 0))),
      dec && on(dec, "click", () => set2(parseNum(input.value, 0) - step())),
      inc && on(inc, "click", () => set2(parseNum(input.value, 0) + step()))
    ].filter(Boolean);
    return () => cleanups.forEach((fn) => fn());
  }
  function bindUpload(root) {
    const input = qs("input[type='file']", root);
    const list = qs("[data-mimicus-upload-list]", root);
    if (!input) return () => {
    };
    const paint = () => {
      if (!list) return;
      list.innerHTML = "";
      [...input.files ?? []].forEach((f) => {
        const li = document.createElement("li");
        li.className = "mimicus-upload__file";
        li.textContent = f.name;
        list.appendChild(li);
      });
    };
    return on(input, "change", () => {
      paint();
      emit(root, "mimicus-upload-change", { count: input.files?.length ?? 0 });
    });
  }
  function bindColorPicker(root) {
    const input = qs("input[type='color']", root) ?? qs("input", root);
    const swatch = qs("[data-mimicus-color-swatch]", root);
    const hex = qs("[data-mimicus-color-hex]", root);
    if (!input) return () => {
    };
    const paint = () => {
      const v = input.value;
      if (swatch) swatch.style.background = v;
      if (hex) hex.textContent = v;
      root.dataset.value = v;
    };
    paint();
    return on(input, "input", () => {
      paint();
      emit(root, "mimicus-color-change", { value: input.value });
    });
  }
  var BINDERS3 = {
    slider: bindSlider,
    rate: bindRate,
    autocomplete: bindAutocomplete,
    "toggle-group": bindToggleGroup,
    transfer: bindTransfer,
    "transfer-board": bindTransferBoard,
    cascader: bindCascader,
    "tree-select": bindTreeSelect,
    mentions: bindMentions,
    "input-number": bindInputNumber,
    upload: bindUpload,
    "color-picker": bindColorPicker
  };
  function bindFormComponent(root) {
    const type = root?.dataset?.mimicusForm;
    root.__mimicusFormCleanup?.();
    const cleanup = BINDERS3[type]?.(root) ?? (() => {
    });
    root.__mimicusFormCleanup = cleanup;
    return () => {
      cleanup();
      delete root.__mimicusFormCleanup;
    };
  }
  function mountForms(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-form]", document) : [scope].filter((el) => el?.dataset?.mimicusForm);
    return () => roots.map(bindFormComponent).forEach((fn) => fn());
  }

  // src/forms/useFormBinding.js
  var import_react19 = __require("react");
  function useFormBinding(ref, type, deps = []) {
    (0, import_react19.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      el.dataset.mimicusForm = type;
      return bindFormComponent(el);
    }, deps);
  }

  // src/components/forms/Forms.jsx
  var import_react20 = __require("react");
  function cx4(...p) {
    return p.filter(Boolean).join(" ");
  }
  function useCtrl(value, defaultValue, onChange) {
    const [inner, setInner] = (0, import_react20.useState)(defaultValue);
    const v = value ?? inner;
    const set2 = (next) => {
      if (value === void 0) setInner(next);
      onChange?.(next);
    };
    return [v, set2];
  }
  function FormItem({ label, required, help, error, children, className, layout = "vertical", ...rest }) {
    return /* @__PURE__ */ React.createElement("label", { ...rest, className: cx4("mimicus-form-item", `mimicus-form-item--${layout}`, error && "has-error", className) }, label && /* @__PURE__ */ React.createElement("span", { className: "mimicus-form-item__label" }, label, required && /* @__PURE__ */ React.createElement("span", { className: "mimicus-form-item__req" }, "*")), /* @__PURE__ */ React.createElement("span", { className: "mimicus-form-item__control" }, children), (help || error) && /* @__PURE__ */ React.createElement("span", { className: "mimicus-form-item__extra" }, error ?? help));
  }
  function Form({ layout = "vertical", className, style, children, ...rest }) {
    return /* @__PURE__ */ React.createElement("form", { ...rest, className: cx4("mimicus-form", `mimicus-form--${layout}`, className), style, onSubmit: (e) => e.preventDefault() }, children);
  }
  Form.Item = FormItem;
  function Input({
    value,
    defaultValue,
    onChange,
    size = "medium",
    status,
    prefix,
    suffix,
    allowClear,
    disabled,
    readOnly,
    placeholder,
    type = "text",
    className,
    style,
    ...rest
  }) {
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ React.createElement("span", { className: cx4("mimicus-input", `mimicus-input--${size}`, status && `is-${status}`, disabled && "is-disabled", className), style }, prefix && /* @__PURE__ */ React.createElement("span", { className: "mimicus-input__affix mimicus-input__prefix" }, prefix), /* @__PURE__ */ React.createElement(
      "input",
      {
        ...rest,
        type,
        className: "mimicus-input__native",
        value: val ?? "",
        readOnly,
        disabled,
        placeholder,
        onChange: (e) => set(e.target.value)
      }
    ), allowClear && val && !disabled && /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-input__clear", "aria-label": "Limpiar", onClick: () => set("") }, "\xD7"), suffix && /* @__PURE__ */ React.createElement("span", { className: "mimicus-input__affix mimicus-input__suffix" }, suffix));
  }
  var TextField = Input;
  function TextArea({ value, defaultValue, onChange, rows = 4, autoSize, className, style, ...rest }) {
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ React.createElement(
      "textarea",
      {
        ...rest,
        rows,
        className: cx4("mimicus-textarea", autoSize && "mimicus-textarea--autosize", className),
        style,
        value: val ?? "",
        onChange: (e) => set(e.target.value)
      }
    );
  }
  function InputNumber({ value, defaultValue = 0, onChange, min, max, step = 1, size = "medium", disabled, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "input-number", [min, max, step, val]);
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        ref,
        className: cx4("mimicus-input-number", `mimicus-input-number--${size}`, disabled && "is-disabled", className),
        style,
        "data-min": min,
        "data-max": max,
        "data-step": step,
        "data-value": val,
        "data-mimicus-form": "input-number"
      },
      /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-dec": true, disabled, tabIndex: -1 }, "\u2212"),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          ...rest,
          type: "text",
          inputMode: "decimal",
          className: "mimicus-input-number__native",
          value: val ?? 0,
          disabled,
          onChange: (e) => set(Number(e.target.value) || 0)
        }
      ),
      /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-inc": true, disabled, tabIndex: -1 }, "+")
    );
  }
  function Checkbox({
    checked,
    defaultChecked = false,
    onChange,
    indeterminate,
    disabled,
    loading,
    size = "medium",
    children,
    className,
    style,
    ...rest
  }) {
    const [on2, setOn] = useCtrl(checked, defaultChecked, onChange);
    const id = (0, import_react20.useId)();
    return /* @__PURE__ */ React.createElement("label", { className: cx4("mimicus-checkbox", `mimicus-checkbox--${size}`, on2 && "is-checked", indeterminate && "is-indeterminate", disabled && "is-disabled", loading && "is-loading", className), style }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ...rest,
        id,
        type: "checkbox",
        className: "mimicus-checkbox__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "mimicus-checkbox__box", "aria-hidden": true }), children != null && /* @__PURE__ */ React.createElement("span", { className: "mimicus-checkbox__label" }, children));
  }
  function CheckboxIcon({ checked, defaultChecked, onChange, disabled, loading, color, variant, children, icon, iconChecked, iconUnchecked, className, ...rest }) {
    const surface = mergeSurfaceStyle(color, { variant: variant ?? "solid" });
    return /* @__PURE__ */ React.createElement(
      Checkbox,
      {
        ...rest,
        checked,
        defaultChecked,
        onChange,
        disabled,
        loading,
        className: cx4("mimicus-checkbox--icon", variant === "glass" && "mimicus-checkbox--glass", className),
        style: surface.style
      },
      /* @__PURE__ */ React.createElement("span", { className: "mimicus-checkbox__icons" }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-checkbox__icon mimicus-checkbox__icon--on" }, iconChecked ?? icon ?? "\u2713"), /* @__PURE__ */ React.createElement("span", { className: "mimicus-checkbox__icon mimicus-checkbox__icon--off" }, iconUnchecked ?? "\u25CB")),
      children
    );
  }
  function CheckboxChip({ value, options, onChange, className, style }) {
    return /* @__PURE__ */ React.createElement(ToggleButtonGroup, { exclusive: true, value, onChange, className: cx4("mimicus-checkbox-chip", className), style }, options?.map((opt) => /* @__PURE__ */ React.createElement(ToggleButton, { key: opt.value, value: opt.value, icon: opt.icon }, opt.label ?? opt.value)));
  }
  function Switch({ checked, defaultChecked = false, onChange, disabled, loading, size = "medium", children, className, style, ...rest }) {
    const [on2, setOn] = useCtrl(checked, defaultChecked, onChange);
    return /* @__PURE__ */ React.createElement("label", { className: cx4("mimicus-switch", `mimicus-switch--${size}`, on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className), style }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ...rest,
        type: "checkbox",
        role: "switch",
        className: "mimicus-switch__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "mimicus-switch__track" }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-switch__thumb" })), children != null && /* @__PURE__ */ React.createElement("span", { className: "mimicus-switch__label" }, children));
  }
  function LabeledSwitch({ label, checked, defaultChecked, onChange, readonly, ...rest }) {
    return /* @__PURE__ */ React.createElement(FormItem, { label, layout: "horizontal", className: "mimicus-labeled-switch" }, /* @__PURE__ */ React.createElement(Switch, { checked, defaultChecked, onChange, disabled: readonly, ...rest }));
  }
  function Radio({ value, checked, defaultChecked, onChange, disabled, children, className, name, ...rest }) {
    return /* @__PURE__ */ React.createElement("label", { className: cx4("mimicus-radio", checked && "is-checked", disabled && "is-disabled", className) }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ...rest,
        type: "radio",
        name,
        value,
        className: "mimicus-radio__native",
        checked,
        defaultChecked,
        disabled,
        onChange
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "mimicus-radio__dot", "aria-hidden": true }), children != null && /* @__PURE__ */ React.createElement("span", { className: "mimicus-radio__label" }, children));
  }
  function RadioGroup({ value, defaultValue, onChange, name, direction = "horizontal", options, children, className, style, ...rest }) {
    const groupName = (0, import_react20.useId)();
    const [val, setVal] = useCtrl(value, defaultValue, onChange);
    const resolvedName = name ?? groupName;
    const body = children ?? options?.map((opt) => /* @__PURE__ */ React.createElement(
      Radio,
      {
        key: opt.value,
        name: resolvedName,
        value: opt.value,
        checked: val === opt.value,
        disabled: opt.disabled,
        onChange: () => set(opt.value)
      },
      opt.label
    ));
    return /* @__PURE__ */ React.createElement("div", { ...rest, role: "radiogroup", className: cx4("mimicus-radio-group", `mimicus-radio-group--${direction}`, className), style, "data-value": val }, body);
  }
  function Slider({ value, defaultValue = 0, onChange, min = 0, max = 100, step = 1, disabled, vertical, className, style, showValue, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "slider", [min, max, step]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        className: cx4("mimicus-slider", vertical && "mimicus-slider--vertical", disabled && "is-disabled", className),
        style,
        "data-value": val,
        "data-mimicus-form": "slider"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-slider__rail" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-slider__fill", "data-mimicus-slider-fill": true })),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "range",
          className: "mimicus-slider__input",
          "data-mimicus-slider-input": true,
          min,
          max,
          step,
          value: val,
          disabled,
          onInput: (e) => set(Number(e.target.value)),
          onChange: (e) => set(Number(e.target.value))
        }
      ),
      showValue && /* @__PURE__ */ React.createElement("span", { className: "mimicus-slider__value", "data-mimicus-slider-value": true }, val)
    );
  }
  function Rate({ value, defaultValue = 0, onChange, count = 5, allowHalf, allowClear = true, disabled, character = "\u2605", size = "medium", className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "rate", [count, allowHalf, allowClear, val, disabled]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        role: "radiogroup",
        className: cx4("mimicus-rate", `mimicus-rate--${size}`, disabled && "is-disabled", className),
        style,
        "data-count": count,
        "data-value": val,
        "data-default-value": defaultValue,
        "data-allow-half": allowHalf ? "true" : void 0,
        "data-allow-clear": allowClear ? "true" : "false",
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "rate"
      },
      Array.from({ length: count }, (_, i) => /* @__PURE__ */ React.createElement("button", { key: i, type: "button", className: "mimicus-rate__star", "data-mimicus-rate-star": i + 1, disabled, "aria-label": `${i + 1} estrellas` }, character))
    );
  }
  var Rating = Rate;
  function Select({ value, defaultValue, onChange, options, placeholder, disabled, size = "medium", className, style, children, ...rest }) {
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ React.createElement("span", { className: cx4("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", className), style }, /* @__PURE__ */ React.createElement("select", { ...rest, className: "mimicus-select__native", value: val ?? "", disabled, onChange: (e) => set(e.target.value) }, placeholder && /* @__PURE__ */ React.createElement("option", { value: "" }, placeholder), children ?? options?.map((opt) => /* @__PURE__ */ React.createElement("option", { key: opt.value, value: opt.value, disabled: opt.disabled }, opt.label))), /* @__PURE__ */ React.createElement("span", { className: "mimicus-select__arrow", "aria-hidden": true }, "\u25BE"));
  }
  function AutoComplete({ options = [], value, defaultValue, onChange, onSelect, placeholder, disabled, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    useFormBinding(ref, "autocomplete", [options.length]);
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx4("mimicus-autocomplete", disabled && "is-disabled", className), style, "data-mimicus-form": "autocomplete" }, /* @__PURE__ */ React.createElement(Input, { ...rest, value: val, onChange: set, placeholder, disabled }), /* @__PURE__ */ React.createElement("div", { className: "mimicus-autocomplete__panel", "data-mimicus-autocomplete-panel": true, role: "listbox", hidden: true }, options.map((opt) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: opt.value ?? opt,
        type: "button",
        role: "option",
        className: "mimicus-autocomplete__option",
        "data-mimicus-autocomplete-option": true,
        "data-value": opt.value ?? opt,
        onClick: () => {
          set(opt.value ?? opt);
          onSelect?.(opt.value ?? opt);
        }
      },
      opt.label ?? opt
    ))));
  }
  function ToggleButton({ value, selected, onChange, disabled, children, icon, className, ...rest }) {
    const on2 = selected ?? rest["aria-pressed"] === "true";
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        ...rest,
        type: "button",
        className: cx4("mimicus-toggle-btn", on2 && "is-active", className),
        "data-mimicus-toggle": value,
        "aria-pressed": on2 ? "true" : "false",
        disabled,
        onClick: () => onChange?.(!on2)
      },
      icon && /* @__PURE__ */ React.createElement("span", { className: "mimicus-toggle-btn__icon", "aria-hidden": true }, icon),
      children
    );
  }
  function ToggleButtonGroup({ value, defaultValue, onChange, exclusive = true, orientation = "horizontal", size, children, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue ?? (exclusive ? "" : []), onChange);
    useFormBinding(ref, "toggle-group", [exclusive, val, orientation]);
    const normalized = exclusive ? val : Array.isArray(val) ? val.join(",") : val;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        ...rest,
        role: "group",
        className: cx4("mimicus-toggle-group", `mimicus-toggle-group--${orientation}`, size && `mimicus-toggle-group--${size}`, className),
        style,
        "data-exclusive": exclusive ? "true" : "false",
        "data-value": normalized,
        "data-mimicus-form": "toggle-group"
      },
      import_react20.Children.map(children, (child) => {
        if (!child?.props) return child;
        const v = child.props.value;
        const active = exclusive ? val === v : Array.isArray(val) ? val.includes(v) : String(val).split(",").includes(v);
        return /* @__PURE__ */ React.createElement(ToggleButton, { ...child.props, selected: active, onChange: () => {
          if (exclusive) set(v);
          else {
            const arr = Array.isArray(val) ? [...val] : String(val || "").split(",").filter(Boolean);
            set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
          }
        } });
      })
    );
  }
  function Transfer({ dataSource, targetKeys, onChange, titles = ["Origen", "Destino"], disabled, className, style }) {
    const ref = (0, import_react20.useRef)(null);
    const left = (dataSource ?? []).filter((d) => !(targetKeys ?? []).includes(d.key));
    const right = (dataSource ?? []).filter((d) => (targetKeys ?? []).includes(d.key));
    useFormBinding(ref, "transfer", [left.length, right.length, disabled]);
    const Item = ({ item }) => /* @__PURE__ */ React.createElement("li", { className: "mimicus-transfer__item", "data-mimicus-transfer-item": true, "data-key": item.key }, item.title);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        className: cx4("mimicus-transfer", disabled && "is-disabled", className),
        style,
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "transfer"
      },
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer__panel" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer__title" }, titles[0]), /* @__PURE__ */ React.createElement("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-left": true }, left.map((item) => /* @__PURE__ */ React.createElement(Item, { key: item.key, item })))),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer__actions" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toRight" }, "\u203A"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toLeft" }, "\u2039")),
      /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer__panel" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer__title" }, titles[1]), /* @__PURE__ */ React.createElement("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-right": true }, right.map((item) => /* @__PURE__ */ React.createElement(Item, { key: item.key, item }))))
    );
  }
  var TransferList = Transfer;
  function TransferBoard({ stackCount = 3, stackWidth = 248, disabled, itemsPerStack = 3, className, style }) {
    const ref = (0, import_react20.useRef)(null);
    useFormBinding(ref, "transfer-board", [stackCount, stackWidth, disabled, itemsPerStack]);
    const stacks = Array.from({ length: stackCount }, (_, s) => /* @__PURE__ */ React.createElement("div", { key: s, className: "mimicus-transfer-board__stack", "data-mimicus-transfer-stack": true, style: { width: stackWidth } }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-transfer-board__stack-title" }, "Stack ", s + 1), /* @__PURE__ */ React.createElement("ul", { className: "mimicus-transfer-board__list", "data-mimicus-transfer-list": true }, Array.from({ length: itemsPerStack }, (_2, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "mimicus-transfer-board__card", "data-mimicus-transfer-item": true, draggable: !disabled }, "Tarjeta ", s * itemsPerStack + i + 1)))));
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        className: cx4("mimicus-transfer-board", disabled && "is-disabled", className),
        style,
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "transfer-board"
      },
      stacks
    );
  }
  function Upload({ accept, multiple, disabled, children, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    useFormBinding(ref, "upload", [accept, multiple]);
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx4("mimicus-upload", disabled && "is-disabled", className), style, "data-mimicus-form": "upload" }, /* @__PURE__ */ React.createElement("label", { className: "mimicus-upload__trigger" }, /* @__PURE__ */ React.createElement("input", { ...rest, type: "file", className: "mimicus-upload__native", accept, multiple, disabled }), children ?? /* @__PURE__ */ React.createElement("span", { className: "mimicus-upload__btn" }, "Subir archivo")), /* @__PURE__ */ React.createElement("ul", { className: "mimicus-upload__list", "data-mimicus-upload-list": true }));
  }
  function ColorPicker({ value = "#1677ff", defaultValue, onChange, disabled, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue ?? "#1677ff", onChange);
    useFormBinding(ref, "color-picker", [val]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        className: cx4("mimicus-color-picker", disabled && "is-disabled", className),
        style,
        "data-value": val,
        "data-mimicus-form": "color-picker"
      },
      /* @__PURE__ */ React.createElement("span", { className: "mimicus-color-picker__swatch", "data-mimicus-color-swatch": true, style: { background: val } }),
      /* @__PURE__ */ React.createElement("input", { ...rest, type: "color", value: val, disabled, onChange: (e) => set(e.target.value) }),
      /* @__PURE__ */ React.createElement("code", { className: "mimicus-color-picker__hex", "data-mimicus-color-hex": true }, val)
    );
  }
  function DatePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ React.createElement(Input, { ...rest, type: "date", className: cx4("mimicus-date-picker", className), style, value: val, disabled, onChange: set });
  }
  function TimePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ React.createElement(Input, { ...rest, type: "time", className: cx4("mimicus-time-picker", className), style, value: val, disabled, onChange: set });
  }
  function Cascader({ options = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
    const ref = (0, import_react20.useRef)(null);
    useFormBinding(ref, "cascader", [options.length]);
    const flat = options.flatMap((o) => o.children ? o.children.map((c) => ({ ...c, parent: o.label })) : [o]);
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx4("mimicus-cascader", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "cascader" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-cascader__trigger", "data-mimicus-cascader-trigger": true, disabled }, placeholder), /* @__PURE__ */ React.createElement("div", { className: "mimicus-cascader__panel", "data-mimicus-cascader-panel": true, hidden: true }, flat.map((opt) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: opt.value,
        type: "button",
        className: "mimicus-cascader__option",
        "data-mimicus-cascader-option": true,
        "data-value": opt.value,
        "data-label": opt.parent ? `${opt.parent} / ${opt.label}` : opt.label,
        onClick: () => onChange?.(opt.value)
      },
      opt.parent ? `${opt.parent} / ${opt.label}` : opt.label
    ))));
  }
  function TreeSelect({ treeData = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
    const ref = (0, import_react20.useRef)(null);
    useFormBinding(ref, "tree-select", [treeData.length]);
    const Node = ({ node, depth = 0 }) => /* @__PURE__ */ React.createElement("li", { className: "mimicus-tree-select__node", "data-mimicus-tree-node": true, "data-value": node.value, "data-label": node.title, style: { paddingLeft: `${depth * 0.75}rem` } }, node.children?.length ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-tree-select__toggle", "data-mimicus-tree-toggle": true }, "\u25B8") : /* @__PURE__ */ React.createElement("span", { className: "mimicus-tree-select__spacer" }), /* @__PURE__ */ React.createElement("span", { className: "mimicus-tree-select__label" }, node.title), node.children?.length > 0 && /* @__PURE__ */ React.createElement("ul", { className: "mimicus-tree-select__children", "data-mimicus-tree-children": true, hidden: true }, node.children.map((c) => /* @__PURE__ */ React.createElement(Node, { key: c.value ?? c.title, node: c, depth: depth + 1 }))));
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx4("mimicus-tree-select", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "tree-select" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-tree-select__trigger", "data-mimicus-tree-trigger": true, disabled }, placeholder), /* @__PURE__ */ React.createElement("div", { className: "mimicus-tree-select__panel", "data-mimicus-tree-panel": true, hidden: true }, /* @__PURE__ */ React.createElement("ul", { className: "mimicus-tree-select__tree" }, treeData.map((n) => /* @__PURE__ */ React.createElement(Node, { key: n.value ?? n.title, node: n })))));
  }
  function Mentions({ options = [], value, defaultValue, onChange, rows = 3, placeholder, disabled, className, style, ...rest }) {
    const ref = (0, import_react20.useRef)(null);
    const [val, setVal] = useCtrl(value, defaultValue ?? "", onChange);
    useFormBinding(ref, "mentions", [options.length]);
    return /* @__PURE__ */ React.createElement("div", { ref, className: cx4("mimicus-mentions", disabled && "is-disabled", className), style, "data-mimicus-form": "mentions" }, /* @__PURE__ */ React.createElement(TextArea, { ...rest, rows, value: val, onChange: set, placeholder: placeholder ?? "Escribe @ para mencionar", disabled }), /* @__PURE__ */ React.createElement("div", { className: "mimicus-mentions__panel", "data-mimicus-mentions-panel": true, hidden: true }, options.map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt.value ?? opt, type: "button", className: "mimicus-mentions__option", "data-mimicus-mentions-option": true, "data-value": opt.value ?? opt }, "@", opt.label ?? opt))));
  }

  // src/theme/ThemeProvider.jsx
  var import_react21 = __require("react");

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
    const [theme, setTheme] = (0, import_react21.useState)(() => getThemeState());
    (0, import_react21.useEffect)(() => subscribeTheme(setTheme), []);
    return theme;
  }
  function useLooknfeel() {
    const [look, setLook] = (0, import_react21.useState)(() => getLooknfeelState());
    (0, import_react21.useEffect)(() => subscribeLooknfeel(setLook), []);
    return look;
  }
  function ThemeProvider({ children }) {
    useTheme();
    useLooknfeel();
    return children;
  }

  // src/spa/SpaRouter.jsx
  var import_react22 = __require("react");

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
  var SpaContext = (0, import_react22.createContext)({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });
  function useSpa() {
    return (0, import_react22.useContext)(SpaContext);
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
    const [nav, setNav] = (0, import_react22.useState)(() => urlState.get());
    (0, import_react22.useEffect)(() => urlState.subscribe(setNav), []);
    const route = nav.r ?? defaultRoute;
    const navigate = (next) => urlState.setRoute(next);
    const value = (0, import_react22.useMemo)(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);
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
        className: ["mimicus-nav-link", isActive && "is-active", className].filter(Boolean).join(" "),
        onClick: () => navigate(route),
        "aria-current": isActive ? "page" : void 0
      },
      children
    );
  }
  function MimicusSidebar({ title, children, className, ...rest }) {
    return /* @__PURE__ */ React.createElement("nav", { ...rest, className: ["mimicus-sidebar", className].filter(Boolean).join(" ") }, title != null && /* @__PURE__ */ React.createElement("div", { className: "mimicus-sidebar-header pg-sidebar-header" }, title), /* @__PURE__ */ React.createElement("div", { className: "mimicus-sidebar-body pg-sidebar-body" }, children));
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
  function camelToKebab2(key) {
    return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  }
  function declarations(decls) {
    return Object.entries(decls).filter(([, v]) => v != null && v !== "").map(([k, v]) => `${camelToKebab2(k)}:${v}`).join(";");
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
    "script-mimicus-react-iife": {
      kind: "script-src",
      src: (base) => base + "mimicus-react.iife.min.js",
      defer: false,
      attrs: { "data-mimicus-react-iife": "1", "data-mimicus-cdn": "mimicus-react-iife" }
    },
    /** @deprecated alias de script-mimicus-react-iife */
    "script-mimicus-ui": {
      kind: "script-src",
      src: (base) => base + "mimicus-react.iife.min.js",
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
    /** Modo variable — React global + CSS + MimicusUI en globalThis */
    "mimicus-ui": ["link-mimicus-ui-css", "script-mimicus-react-iife"],
    "importmap-mimicus": ["importmap-mimicus-ui"],
    "app-boot-css": ["link-app-boot-css"],
    /** Modo import — React importmap + CSS + alias @jeff-aporta/mimicus-react */
    "stack-esm": ["preconnect", "react18", "iconify", "mimicus-ui-css", "importmap-mimicus-ui"],
    /** Modo variable — React UMD/global + CSS + mimicus-react.iife */
    "stack-global": ["preconnect", "react18", "iconify", "mimicus-ui-css", "script-mimicus-react-iife"],
    /** Stack mínimo Mimicus React ESM (sin MUI). */
    "stack-mimicus": ["stack-esm"],
    /** Stack mínimo Mimicus React global (sin MUI). */
    "stack-mimicus-global": ["stack-global"],
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

  // src/contapyme/components/LoginButton.jsx
  var import_react25 = __require("react");

  // src/contapyme/auth/loginCredentials.js
  var STORAGE_KEY = "jeffaporta:login-creds";
  var PREFIX = "abc123";
  var SUFFIX = "xyz987";
  function encodeStoredSecret(plain) {
    if (!plain) return "";
    try {
      return btoa(unescape(encodeURIComponent(PREFIX + plain + SUFFIX)));
    } catch {
      return "";
    }
  }
  function decodeStoredSecret(enc) {
    if (!enc) return "";
    try {
      const raw = decodeURIComponent(escape(atob(enc)));
      if (raw.indexOf(PREFIX) === 0 && raw.slice(-SUFFIX.length) === SUFFIX) {
        return raw.slice(PREFIX.length, raw.length - SUFFIX.length);
      }
      return "";
    } catch {
      return "";
    }
  }
  function readLoginCredentials() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { username: "", password: "", remember: true };
      const saved = JSON.parse(raw);
      return {
        username: saved.username || "",
        password: saved.passwordEnc ? decodeStoredSecret(saved.passwordEnc) : "",
        remember: saved.remember !== false
      };
    } catch {
      return { username: "", password: "", remember: true };
    }
  }
  function saveLoginCredentials(username, password, remember) {
    try {
      if (!remember) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          username: String(username || "").trim(),
          passwordEnc: encodeStoredSecret(password),
          remember: true
        })
      );
    } catch {
    }
  }
  function clearLoginCredentials() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
  }

  // src/contapyme/auth/loginFormat.js
  var CONTAPYME_EMAIL_SUFFIX = /@contapyme\.com$/i;
  var CONTAPYME_LOGIN_DOMAIN = "@contapyme.com";
  function normalizeContapymeLoginId(value) {
    const s = String(value ?? "").trim();
    if (!s) return "";
    if (s.includes("@")) return s.toLowerCase();
    return `${s.toLowerCase()}${CONTAPYME_LOGIN_DOMAIN}`;
  }
  function titleCaseWord(word) {
    const s = String(word || "").trim();
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
  function stripContapymeEmail(value) {
    return String(value ?? "").trim().replace(CONTAPYME_EMAIL_SUFFIX, "");
  }
  function formatContapymeLoginInput(value) {
    const id = normalizeContapymeLoginId(value);
    if (!id) return "";
    return stripContapymeEmail(id) || id;
  }
  function formatSessionChipLabel(value, fallback = "Usuario") {
    const raw = stripContapymeEmail(value) || String(value ?? "").trim();
    if (!raw) return fallback;
    const display = /\s/.test(raw) ? raw.split(/\s+/).filter(Boolean).map(titleCaseWord).join(" ") : titleCaseWord(raw);
    return display.split(/\s+/).filter(Boolean)[0] || fallback;
  }
  function resolveSessionHeaderLabel(displayName, username, fallback = "Usuario") {
    const dn = String(displayName ?? "").trim();
    if (dn) return formatSessionChipLabel(dn, fallback);
    return formatSessionChipLabel(username, fallback);
  }

  // src/contapyme/auth/loginMultiempresa.js
  var DEFAULT_APP_ITERCERO = "810000630";
  function defaultIterceroFromTerceros(terceros) {
    const list = Array.isArray(terceros) ? terceros : [];
    const insoft = list.find((t) => String(t?.itercero ?? "").trim() === DEFAULT_APP_ITERCERO);
    return String(insoft?.itercero ?? list[0]?.itercero ?? "").trim();
  }
  async function loginWithInsoftAutoRetry(loginFn, loginId, pass, opts = {}) {
    if (String(opts.itercero ?? "").trim()) {
      return loginFn(loginId, pass, opts);
    }
    try {
      return await loginFn(loginId, pass, opts);
    } catch (e) {
      if (e?.code !== "MULTI_EMPRESA" || !Array.isArray(e.terceros) || !e.terceros.length) {
        throw e;
      }
      const terceros = e.terceros;
      try {
        return await loginFn(loginId, pass, { ...opts, itercero: DEFAULT_APP_ITERCERO });
      } catch (retryErr) {
        const err = new Error(
          retryErr instanceof Error ? retryErr.message : String(retryErr?.message || e.message || "Elija la empresa para continuar.")
        );
        err.code = "MULTI_EMPRESA";
        err.terceros = terceros;
        throw err;
      }
    }
  }

  // src/contapyme/auth/sessionContext.jsx
  var import_react23 = __require("react");
  var ContapymeSessionContext = (0, import_react23.createContext)(null);
  function ContapymeSessionProvider({ session, children }) {
    const value = (0, import_react23.useMemo)(() => session ?? null, [session]);
    return /* @__PURE__ */ React.createElement(ContapymeSessionContext.Provider, { value }, children);
  }
  function useContapymeSession() {
    return (0, import_react23.useContext)(ContapymeSessionContext);
  }
  function resolveContapymeSession({ session, ns } = {}) {
    if (session?.login) return session;
    const ctx = typeof window !== "undefined" ? null : null;
    void ctx;
    if (ns && typeof window !== "undefined") {
      const bag = window[ns];
      const api = bag?.Session || bag?.Auth;
      if (api?.login) return api;
    }
    return null;
  }
  function useResolvedContapymeSession(props = {}) {
    const fromCtx = useContapymeSession();
    if (props.session?.login) return props.session;
    if (fromCtx?.login) return fromCtx;
    return resolveContapymeSession({ ns: props.ns });
  }

  // src/contapyme/components/ContapymeIcon.jsx
  function ContapymeIcon({ icon, size = 20, className, style, ...rest }) {
    return /* @__PURE__ */ React.createElement(
      "iconify-icon",
      {
        icon,
        width: size,
        height: size,
        class: className,
        style: { display: "inline-flex", verticalAlign: "middle", ...style },
        ...rest
      }
    );
  }

  // src/contapyme/components/LoginDialog.jsx
  var import_react24 = __require("react");
  function LoginDialog({ open, busy, title = "Iniciar sesi\xF3n", icon = "mdi:account-key-outline", onClose, children, footer }) {
    const ref = (0, import_react24.useRef)(null);
    (0, import_react24.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      const onDialogCancel = (e) => {
        e.preventDefault();
        if (!busy) onClose?.();
      };
      el.addEventListener("cancel", onDialogCancel);
      if (open && !el.open) el.showModal();
      else if (!open && el.open) el.close();
      return () => el.removeEventListener("cancel", onDialogCancel);
    }, [open, busy, onClose]);
    (0, import_react24.useEffect)(() => {
      if (!open) return void 0;
      const onKey = (e) => {
        if (e.key === "Escape" && !busy) onClose?.();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open, busy, onClose]);
    return /* @__PURE__ */ React.createElement("dialog", { ref, className: "mimicus-login-dialog isa-login-dialog", "aria-labelledby": "mimicus-login-dialog-title" }, /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-dialog__card isa-login-card mimicus-glass-card" }, /* @__PURE__ */ React.createElement("header", { className: "mimicus-login-dialog__header isa-login-header" }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-login-dialog__icon-box", "aria-hidden": true }, /* @__PURE__ */ React.createElement(ContapymeIcon, { icon, size: 22 })), /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-dialog__titles" }, /* @__PURE__ */ React.createElement("h2", { id: "mimicus-login-dialog-title", className: "mimicus-login-dialog__title" }, title), /* @__PURE__ */ React.createElement("p", { className: "mimicus-login-dialog__subtitle" }, "Use su usuario y contrase\xF1a de la organizaci\xF3n.")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mimicus-login-dialog__close", "aria-label": "Cerrar", disabled: busy, onClick: () => !busy && onClose?.() }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-dialog__body" }, children), footer && /* @__PURE__ */ React.createElement("footer", { className: "mimicus-login-dialog__footer" }, footer)));
  }

  // src/contapyme/constants.js
  var MAIN_ORCHESTRATOR_URL_PROD = "https://main-orchestrator.jeffaporta.workers.dev";
  var MAIN_ORCHESTRATOR_URL_LOCAL = "http://localhost:8790";
  var MAIN_ORCHESTRATOR_LS_KEY = "jeff:gateway-local";
  var AUTH_DEFAULTS = {
    sessionKey: "system-login:session",
    authEvent: "system-login:auth",
    authLocal: MAIN_ORCHESTRATOR_URL_LOCAL,
    authOnline: MAIN_ORCHESTRATOR_URL_PROD
  };
  var LOGIN_SUBTITLE_DEFAULT = "Use su usuario y contrase\xF1a de la organizaci\xF3n. La misma sesi\xF3n sirve en todas las aplicaciones.";
  var CONTAPYME_LOGIN_ID_HELPER = "Puede omitir @contapyme.com; se env\xEDa en min\xFAsculas.";
  var LOGIN_REMEMBER_LABEL = "Recordarme";

  // src/contapyme/components/LoginFormFields.jsx
  function LoginFormFields({
    user,
    setUser,
    pass,
    setPass,
    remember,
    setRemember,
    showPass,
    setShowPass,
    err,
    busy,
    showRemember = true,
    showPasswordToggle = true,
    onEnter,
    terceros = [],
    selectedItercero,
    setSelectedItercero
  }) {
    const empresaOptions = Array.isArray(terceros) ? terceros : [];
    const needsEmpresa = empresaOptions.length > 0;
    return /* @__PURE__ */ React.createElement(Stack, { spacing: "0.75rem", className: "mimicus-login-form" }, err ? /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-form__alert", role: "alert" }, err) : null, needsEmpresa ? /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-form__info" }, "Seleccione la empresa con la que desea ingresar.") : null, /* @__PURE__ */ React.createElement(FormItem, { label: "Usuario", help: CONTAPYME_LOGIN_ID_HELPER }, /* @__PURE__ */ React.createElement(
      Input,
      {
        value: user,
        onChange: (e) => setUser(e.target.value),
        onBlur: () => {
          const v = String(user ?? "").trim().toLowerCase();
          if (v && !v.includes("@")) setUser(v);
        },
        autoComplete: "username",
        disabled: busy,
        autoFocus: !busy && !needsEmpresa,
        onKeyDown: (e) => {
          if (e.key === "Enter" && onEnter) {
            e.preventDefault();
            onEnter();
          }
        }
      }
    )), /* @__PURE__ */ React.createElement(FormItem, { label: "Contrase\xF1a" }, /* @__PURE__ */ React.createElement(
      Input,
      {
        type: showPasswordToggle && showPass ? "text" : "password",
        value: pass,
        onChange: (e) => setPass(e.target.value),
        autoComplete: "current-password",
        disabled: busy,
        suffix: showPasswordToggle ? /* @__PURE__ */ React.createElement(
          Button,
          {
            type: "button",
            variant: "text",
            color: "neutral",
            shape: "rect",
            disabled: busy,
            title: showPass ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a",
            onClick: () => setShowPass((v) => !v),
            style: { width: "auto", minWidth: "2rem", padding: "0 0.35rem" }
          },
          /* @__PURE__ */ React.createElement(ContapymeIcon, { icon: showPass ? "mdi:eye-off-outline" : "mdi:eye-outline", size: 18 })
        ) : null,
        onKeyDown: (e) => {
          if (e.key === "Enter" && onEnter) {
            e.preventDefault();
            onEnter();
          }
        }
      }
    )), needsEmpresa ? /* @__PURE__ */ React.createElement(FormItem, { label: "Empresa" }, /* @__PURE__ */ React.createElement(
      Select,
      {
        value: selectedItercero,
        onChange: setSelectedItercero,
        disabled: busy,
        options: empresaOptions.map((t) => ({
          value: String(t.itercero ?? ""),
          label: String(t.nombre ?? t.razonsocial ?? t.itercero ?? "")
        }))
      }
    )) : null, showRemember ? /* @__PURE__ */ React.createElement(Checkbox, { checked: remember, onChange: setRemember, disabled: busy }, LOGIN_REMEMBER_LABEL) : null);
  }
  function LoginFormActions({ busy, canSubmit, onCancel, onSubmit, showCancel = true }) {
    return /* @__PURE__ */ React.createElement("div", { className: "mimicus-login-form__actions" }, showCancel ? /* @__PURE__ */ React.createElement(Button, { type: "button", variant: "text", color: "neutral", shape: "rect", disabled: busy, onClick: onCancel, style: { width: "auto" } }, "Cancelar") : null, /* @__PURE__ */ React.createElement(Button, { type: "button", variant: "solid", color: "primary", shape: "rect", disabled: busy || !canSubmit, loading: busy, onClick: onSubmit, style: { width: "auto" } }, "Iniciar sesi\xF3n"));
  }

  // src/contapyme/components/LoginButton.jsx
  function sessionView(auth) {
    const s = auth.current?.() ?? auth.getSession?.();
    if (!s) return null;
    return {
      username: s.username ?? auth.username?.(),
      displayName: s.displayName ?? auth.displayName?.() ?? null,
      role: s.role ?? null,
      expiresAt: s.expiresAt ?? null
    };
  }
  function defaultToast(kind, message, onToast) {
    if (onToast?.[kind]) {
      onToast[kind](message);
      return;
    }
    const fb = typeof window !== "undefined" ? window.ISAFront?.[`toast${kind.charAt(0).toUpperCase()}${kind.slice(1)}`] : null;
    if (typeof fb === "function") fb(message);
  }
  function LoginButton({
    session: sessionProp,
    ns,
    loginOpen: loginOpenProp,
    onLoginOpenChange,
    onLoggedIn,
    onToast,
    showPasswordToggle = true,
    showRemember = true,
    wrapClass = "header-session-wrap",
    btnClass = "header-session-btn",
    className,
    style
  }) {
    const auth = useResolvedContapymeSession({ session: sessionProp, ns });
    if (!auth?.login) {
      throw new Error("LoginButton: provea session (createOrchestratorSession), ContapymeSessionProvider o window[ns].Session");
    }
    const authEvt = auth.EVENT;
    const [openInternal, setOpenInternal] = (0, import_react25.useState)(false);
    const open = loginOpenProp != null ? loginOpenProp : openInternal;
    const setOpen = onLoginOpenChange || setOpenInternal;
    const [user, setUser] = (0, import_react25.useState)("");
    const [pass, setPass] = (0, import_react25.useState)("");
    const [remember, setRemember] = (0, import_react25.useState)(true);
    const [showPass, setShowPass] = (0, import_react25.useState)(false);
    const [err, setErr] = (0, import_react25.useState)("");
    const [busy, setBusy] = (0, import_react25.useState)(false);
    const [terceros, setTerceros] = (0, import_react25.useState)([]);
    const [selectedItercero, setSelectedItercero] = (0, import_react25.useState)("");
    const [, tick] = (0, import_react25.useState)(0);
    (0, import_react25.useEffect)(() => {
      if (!authEvt || typeof window === "undefined") return void 0;
      const onAuth = () => tick((n) => n + 1);
      window.addEventListener(authEvt, onAuth);
      return () => window.removeEventListener(authEvt, onAuth);
    }, [authEvt]);
    (0, import_react25.useEffect)(() => {
      if (!open) return;
      const saved = readLoginCredentials();
      setUser(saved.username || "");
      setPass(saved.password || "");
      setRemember(saved.remember !== false);
      setErr("");
      setTerceros([]);
      setSelectedItercero("");
    }, [open]);
    const submit = (0, import_react25.useCallback)(async () => {
      if (!user.trim() || !pass) {
        setErr("Usuario y contrase\xF1a requeridos");
        return;
      }
      if (terceros.length && !selectedItercero) {
        setErr("Seleccione la empresa para continuar");
        return;
      }
      const loginId = normalizeContapymeLoginId(user);
      setBusy(true);
      setErr("");
      try {
        if (showRemember) saveLoginCredentials(formatContapymeLoginInput(user) || user.trim(), pass, remember);
        const itercero = String(selectedItercero || "").trim();
        const loginOpts = itercero ? { itercero } : {};
        const result = await loginWithInsoftAutoRetry(
          (id, p, o) => auth.login(id, p, o),
          loginId,
          pass,
          loginOpts
        );
        setPass("");
        setShowPass(false);
        setTerceros([]);
        setSelectedItercero("");
        setOpen(false);
        const sv = sessionView(auth) || result;
        defaultToast("success", "Sesi\xF3n iniciada", onToast);
        onLoggedIn?.(sv || result);
        tick((n) => n + 1);
      } catch (e) {
        if (e?.code === "MULTI_EMPRESA" && Array.isArray(e.terceros) && e.terceros.length) {
          setTerceros(e.terceros);
          setSelectedItercero(defaultIterceroFromTerceros(e.terceros));
          setErr("");
          return;
        }
        const msg = e instanceof Error ? e.message : String(e);
        setErr(msg);
        defaultToast("error", msg, onToast);
      } finally {
        setBusy(false);
      }
    }, [auth, user, pass, remember, showRemember, terceros.length, selectedItercero, setOpen, onLoggedIn, onToast]);
    const logout = (0, import_react25.useCallback)(() => {
      auth.logout();
      tick((n) => n + 1);
      defaultToast("info", "Sesi\xF3n cerrada", onToast);
    }, [auth, onToast]);
    const logged = sessionView(auth) || (auth.isLoggedIn?.() ? { username: auth.username?.() } : null);
    if (logged?.username) {
      const label = resolveSessionHeaderLabel(logged.displayName, logged.username, logged.username);
      return /* @__PURE__ */ React.createElement("span", { className: [wrapClass, "mimicus-login-button", "mimicus-login-button--session", className].filter(Boolean).join(" "), style }, /* @__PURE__ */ React.createElement(FlexLayout, { items: "center", gap: "0.35rem", className: btnClass }, /* @__PURE__ */ React.createElement(
        Dropdown,
        {
          placement: "bottomRight",
          trigger: /* @__PURE__ */ React.createElement(Button, { type: "button", variant: "soft", color: "primary", shape: "rect", className: "header-session-chip mimicus-login-button__chip", style: { width: "auto" } }, /* @__PURE__ */ React.createElement(ContapymeIcon, { icon: "mdi:account-circle-outline", size: 18 }), /* @__PURE__ */ React.createElement("span", null, label)),
          menu: /* @__PURE__ */ React.createElement(Menu, null, /* @__PURE__ */ React.createElement(Menu.Item, { disabled: true }, /* @__PURE__ */ React.createElement("span", { className: "mimicus-login-button__menu-user" }, logged.username), logged.role ? /* @__PURE__ */ React.createElement("span", { className: "mimicus-login-button__menu-role" }, logged.role) : null), /* @__PURE__ */ React.createElement(Menu.Divider, null), /* @__PURE__ */ React.createElement(Menu.Item, { onClick: logout }, /* @__PURE__ */ React.createElement(ContapymeIcon, { icon: "mdi:logout", size: 16 }), "Cerrar sesi\xF3n"))
        }
      )));
    }
    return /* @__PURE__ */ React.createElement("span", { className: [wrapClass, "mimicus-login-button", className].filter(Boolean).join(" "), style }, /* @__PURE__ */ React.createElement(FlexLayout, { items: "center", gap: "0.35rem", className: btnClass }, /* @__PURE__ */ React.createElement(Button, { type: "button", variant: "outlined", color: "neutral", shape: "rect", onClick: () => setOpen(true), style: { width: "auto" } }, /* @__PURE__ */ React.createElement(ContapymeIcon, { icon: "mdi:login", size: 18 }), "Iniciar sesi\xF3n")), /* @__PURE__ */ React.createElement(
      LoginDialog,
      {
        open,
        busy,
        onClose: () => {
          if (!busy) {
            setOpen(false);
            setShowPass(false);
          }
        },
        footer: /* @__PURE__ */ React.createElement(
          LoginFormActions,
          {
            busy,
            canSubmit: !!user.trim() && !!pass && (!terceros.length || !!selectedItercero),
            onCancel: () => {
              setOpen(false);
              setShowPass(false);
            },
            onSubmit: submit
          }
        )
      },
      /* @__PURE__ */ React.createElement(
        LoginFormFields,
        {
          user,
          setUser,
          pass,
          setPass,
          remember,
          setRemember,
          showPass,
          setShowPass,
          err,
          busy,
          showRemember,
          showPasswordToggle,
          onEnter: submit,
          terceros,
          selectedItercero,
          setSelectedItercero
        }
      )
    ));
  }

  // src/contapyme/auth/caesar.js
  var CAESAR_PREFIX = "abc123";
  var CAESAR_SUFFIX = "xyz987";
  function caesarShiftForDate(date = /* @__PURE__ */ new Date()) {
    return date.getUTCDate();
  }
  function shiftChar(c, delta) {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCharCode((code - 65 + delta + 26) % 26 + 65);
    if (code >= 97 && code <= 122) return String.fromCharCode((code - 97 + delta + 26) % 26 + 97);
    return c;
  }
  function caesarEncode(plain, shift) {
    return [...plain].map((c) => shiftChar(c, shift)).join("");
  }
  function wrapPassword(plain) {
    if (!plain) return plain;
    return caesarEncode(CAESAR_PREFIX + plain + CAESAR_SUFFIX, caesarShiftForDate(/* @__PURE__ */ new Date()));
  }

  // src/contapyme/auth/tokenStore.js
  function createTokenStore(sessionKey) {
    function read() {
      try {
        let raw = localStorage.getItem(sessionKey);
        if (!raw) {
          const legacy = sessionStorage.getItem(sessionKey);
          if (legacy) {
            localStorage.setItem(sessionKey, legacy);
            sessionStorage.removeItem(sessionKey);
            raw = legacy;
          }
        }
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    }
    function save(data) {
      localStorage.setItem(sessionKey, JSON.stringify(data));
      try {
        sessionStorage.removeItem(sessionKey);
      } catch {
      }
    }
    function clear() {
      localStorage.removeItem(sessionKey);
      try {
        sessionStorage.removeItem(sessionKey);
      } catch {
      }
    }
    return { read, save, clear };
  }
  function isTokenValid(record) {
    if (!record?.token) return false;
    if (record.expiresAt && new Date(record.expiresAt).getTime() < Date.now()) return false;
    return true;
  }

  // src/contapyme/auth/orchestratorSession.js
  function sanitizeLoginError(raw) {
    const msg = String(raw ?? "").trim();
    if (!msg || /^HTTP \d{3}$/.test(msg)) return "No se pudo iniciar sesi\xF3n";
    return msg;
  }
  function createOrchestratorSession(opts = {}) {
    const appId = String(opts.appId || opts.app || "").trim();
    if (!appId) throw new Error("createOrchestratorSession: appId requerido");
    const sessionKey = opts.sessionKey || `${AUTH_DEFAULTS.sessionKey}:${appId}`;
    const authEvt = opts.authEvent || AUTH_DEFAULTS.authEvent;
    const authLocal = opts.authLocal || AUTH_DEFAULTS.authLocal;
    const authOnline = opts.authOnline || AUTH_DEFAULTS.authOnline;
    const store = createTokenStore(sessionKey);
    function authBase() {
      try {
        if (localStorage.getItem(MAIN_ORCHESTRATOR_LS_KEY) === "1") return authLocal;
      } catch {
      }
      return authOnline;
    }
    function authUrl(path) {
      return authBase().replace(/\/$/, "") + (path.charAt(0) === "/" ? path : `/${path}`);
    }
    function readSession() {
      const data = store.read();
      if (!data) return null;
      if (data.app && data.app !== appId) {
        store.clear();
        return null;
      }
      if (!isTokenValid(data)) {
        store.clear();
        return null;
      }
      return data;
    }
    function saveSession(data) {
      store.save({
        username: data.username,
        displayName: data.displayName ?? null,
        role: data.role ?? null,
        token: data.token,
        expiresAt: data.expiresAt ?? null,
        app: appId
      });
      if (typeof window !== "undefined") window.dispatchEvent(new Event(authEvt));
    }
    function clearSession() {
      store.clear();
      if (typeof window !== "undefined") window.dispatchEvent(new Event(authEvt));
    }
    function current() {
      return readSession();
    }
    function isLoggedIn() {
      return isTokenValid(readSession());
    }
    function username() {
      return current()?.username ?? null;
    }
    function displayName() {
      const dn = String(current()?.displayName ?? "").trim();
      return dn || null;
    }
    function authHeader() {
      const token = current()?.token;
      return token ? { Authorization: `Bearer ${token}` } : {};
    }
    function loginErrorMessage(res, data) {
      if (data?.code === "MULTI_EMPRESA" && Array.isArray(data.terceros) && data.terceros.length) {
        const e = new Error(String(data.error || "Elija la empresa para continuar."));
        e.code = "MULTI_EMPRESA";
        e.terceros = data.terceros;
        return e;
      }
      const apiErr = String(data?.error || "").trim();
      if (apiErr && !/^HTTP \d{3}$/.test(apiErr)) return sanitizeLoginError(apiErr);
      if (res.status === 403) {
        if (data?.app) return `No tiene acceso a la aplicaci\xF3n (${data.app}). Solicite permiso al administrador.`;
        return "No tiene acceso a esta aplicaci\xF3n.";
      }
      if (res.status === 401) return "Usuario o contrase\xF1a incorrectos.";
      if (res.status >= 500) return "El servicio de acceso no est\xE1 disponible. Intente m\xE1s tarde.";
      return "No se pudo iniciar sesi\xF3n";
    }
    async function login(user, pass, loginOpts = {}) {
      const loginId = normalizeContapymeLoginId(user);
      if (!loginId) throw new Error("Usuario y contrase\xF1a requeridos");
      const credBody = {
        password: wrapPassword(pass),
        app: appId,
        semail: loginId
      };
      const itercero = String(loginOpts.itercero ?? "").trim();
      if (itercero) credBody.itercero = itercero;
      let res;
      try {
        res = await fetch(authUrl("/api/auth/token"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credBody)
        });
      } catch (e) {
        throw new Error(e instanceof Error ? e.message : "No se pudo conectar con el servicio de acceso");
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.token) {
        const err = loginErrorMessage(res, data);
        if (err instanceof Error && err.code === "MULTI_EMPRESA") throw err;
        throw new Error(typeof err === "string" ? err : "No se pudo iniciar sesi\xF3n");
      }
      if (data.app && data.app !== appId) {
        throw new Error("Token emitido para otra aplicaci\xF3n");
      }
      const session = {
        username: data.username || user,
        displayName: data.displayName || null,
        role: data.role || null,
        token: data.token,
        expiresAt: data.expiresAt || null,
        app: appId
      };
      saveSession(session);
      return session;
    }
    function logout() {
      clearSession();
    }
    return {
      appId: () => appId,
      EVENT: authEvt,
      current,
      isLoggedIn,
      username,
      displayName,
      authHeader,
      login,
      logout,
      authBase,
      authUrl
    };
  }
  function createDemoSession(initial2 = null) {
    let session = initial2;
    const EVENT = "mimicus-demo-session";
    const api = {
      EVENT,
      appId: () => "mimicus-playground",
      current: () => session,
      isLoggedIn: () => Boolean(session),
      username: () => session?.username ?? null,
      displayName: () => session?.displayName ?? null,
      authHeader: () => session?.token ? { Authorization: `Bearer ${session.token}` } : {},
      async login(user, pass) {
        if (!String(user).trim() || !pass) throw new Error("Usuario y contrase\xF1a requeridos");
        session = {
          username: normalizeContapymeLoginId(user),
          displayName: formatDemoName(user),
          token: "demo-token",
          role: "demo"
        };
        if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
        return session;
      },
      logout() {
        session = null;
        if (typeof window !== "undefined") window.dispatchEvent(new Event(EVENT));
      }
    };
    return api;
  }
  function formatDemoName(user) {
    const s = String(user ?? "").trim().split("@")[0];
    if (!s) return "Usuario";
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  // src/shell/shellNavResolver.js
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
  function resolveNavRowTabs(row2, ctx) {
    const tabs = [];
    for (const child of row2.children ?? []) tabs.push(...resolveNavNode(child, ctx));
    return tabs;
  }
  function resolveNavRowValue(row2, ctx) {
    const type = row2.active?.type ?? row2.activeType ?? (row2.tier === "secondary" ? "slug" : "primary");
    if (type === "slug") return ctx.route?.slug ?? "";
    if (type === "category") return ctx.route?.category ?? "";
    if (type === "primary") {
      if (ctx.isPaletteLabView || ctx.isCatalogView) return "__home__";
      return ctx.route?.category ?? "__home__";
    }
    if (type === "id" && row2.active?.id) return row2.active.id;
    return ctx.route?.category ?? "";
  }
  function resolveShellNavigation(shellConfig, ctx) {
    return {
      rows: normalizeShellNavRows(shellConfig).map((row2) => ({
        id: row2.id ?? row2.tier ?? "nav",
        tier: row2.tier ?? "primary",
        when: row2.when ?? "always",
        visible: evaluateNavWhen(row2.when, ctx),
        tabs: resolveNavRowTabs(row2, ctx),
        value: resolveNavRowValue(row2, ctx)
      }))
    };
  }
  function dispatchShellNav(tabId, ctx, shellConfig) {
    for (const row2 of normalizeShellNavRows(shellConfig)) {
      for (const child of row2.children ?? []) {
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

  // src/shell/NavTabRow.jsx
  var import_react26 = __require("react");
  function NavTabRow({ tabs = [], value, onChange, tier = "primary", className, tabHref }) {
    const secondary = tier === "secondary";
    const scrollerRef = (0, import_react26.useRef)(null);
    (0, import_react26.useEffect)(() => {
      if (!value || !scrollerRef.current) return;
      const active = scrollerRef.current.querySelector(".pg-nav-tab.is-active, .pg-nav-tab[aria-selected='true']");
      active?.scrollIntoView?.({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }, [value, tabs.length]);
    return /* @__PURE__ */ React.createElement("div", { className: ["pg-nav-row", secondary ? "pg-nav-row--secondary" : "pg-nav-row--primary", className].filter(Boolean).join(" "), role: "tablist" }, /* @__PURE__ */ React.createElement("div", { ref: scrollerRef, className: "pg-nav-row__scroller custom-scrollbar" }, tabs.map((tab) => {
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
      return /* @__PURE__ */ React.createElement(
        Button,
        {
          key: tab.id,
          type: "button",
          role: "tab",
          "aria-selected": selected,
          disabled: Boolean(tab.disabled),
          variant: selected ? "soft" : "text",
          shape: "rect",
          color: tabColor,
          className: ["pg-nav-tab", selected && "is-active"].filter(Boolean).join(" "),
          "data-section-color": tab.kind === "action" || tab.id?.startsWith("__") ? void 0 : tabColor,
          title: tab.disabled ? tab.disabledTitle || "No disponible" : label,
          onClick,
          onAuxClick: onClick,
          icon: tab.icon ? /* @__PURE__ */ React.createElement("iconify-icon", { className: "pg-nav-tab__icon", icon: tab.disabled ? "mdi:lock-outline" : tab.icon, "aria-hidden": true }) : void 0
        },
        /* @__PURE__ */ React.createElement("span", { className: "pg-nav-tab__label" }, label)
      );
    })));
  }

  // src/shell/ShellHeaderNav.jsx
  var import_react27 = __require("react");
  function ShellHeaderNav({ shellConfig, ctx, onTab, className }) {
    const nav = (0, import_react27.useMemo)(() => resolveShellNavigation(shellConfig, ctx), [shellConfig, ctx]);
    const handleTab = onTab ?? ((id) => dispatchShellNav(id, ctx, shellConfig));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, nav.rows.filter((row2) => row2.visible && row2.tabs.length > 0).map((row2) => /* @__PURE__ */ React.createElement(NavTabRow, { key: row2.id, tier: row2.tier, tabs: row2.tabs, value: row2.value, onChange: handleTab, className })));
  }

  // src/index.jsx
  function bootMimicusUI() {
    bootTheme();
    bootLooknfeel();
  }

  // src/entry-iife.jsx
  globalThis.MimicusUI = { ...index_exports };
  if (!globalThis.MimicusBootstrap) globalThis.MimicusBootstrap = {};
  Object.assign(globalThis.MimicusBootstrap, cdn_exports, snippets_exports, cdn_exports);
})();
