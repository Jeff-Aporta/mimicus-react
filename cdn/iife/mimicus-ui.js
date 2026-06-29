var require=function(m){if(m==="react")return globalThis.React;if(m==="react-dom"||m==="react-dom/client")return globalThis.ReactDOM;throw new Error("Cannot require "+m)};
"use strict";
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

  // src/index.tsx
  var index_exports = {};
  __export(index_exports, {
    APP_LAYOUT_VARIANT_OPTIONS: () => APP_LAYOUT_VARIANT_OPTIONS,
    AUTH_DEFAULTS: () => AUTH_DEFAULTS,
    Accordion: () => Accordion,
    ActionDrawer: () => ActionDrawer,
    Alert: () => Alert,
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
    CARD_INLINE_FLOW_AFTER: () => CARD_INLINE_FLOW_AFTER,
    CARD_INLINE_FLOW_BEFORE: () => CARD_INLINE_FLOW_BEFORE,
    CARD_INLINE_SAMPLE_TEXT: () => CARD_INLINE_SAMPLE_TEXT,
    CARD_PREVIEW_SAMPLE_TEXT: () => CARD_PREVIEW_SAMPLE_TEXT,
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
    Color: () => Color,
    ColorPicker: () => ColorPicker,
    Container: () => Container,
    ContapymeIcon: () => ContapymeIcon,
    ContapymeSessionProvider: () => ContapymeSessionProvider,
    DEFAULT_APP_ITERCERO: () => DEFAULT_APP_ITERCERO,
    DESIGN_SCHEME_OPTIONS: () => DESIGN_SCHEME_OPTIONS,
    DESIGN_SCHEME_STORAGE_KEY: () => DESIGN_SCHEME_STORAGE_KEY,
    DataGrid: () => DataGrid,
    DatePicker: () => DatePicker,
    DemoPage: () => DemoPage,
    Descriptions: () => Descriptions,
    DescriptionsItem: () => DescriptionsItem,
    Dialog: () => Dialog,
    Divider: () => Divider,
    Drawer: () => Drawer,
    Dropdown: () => Dropdown,
    Empty: () => Empty,
    Fab: () => Fab,
    FlexLayout: () => FlexLayout,
    FloatButton: () => FloatButton,
    FloatingComponent: () => FloatingComponent,
    Form: () => Form,
    FormItem: () => FormItem,
    GridLayout: () => GridLayout,
    GridResponsiveForm: () => GridResponsiveForm,
    Headings: () => Headings,
    Icon: () => Icon,
    IconButton: () => IconButton,
    ImageList: () => ImageList,
    Input: () => Input,
    InputNumber: () => InputNumber,
    InvokedFloater: () => InvokedFloater,
    JsonDemoAdapter: () => JsonDemoAdapter,
    JsonRenderer: () => JsonRenderer,
    LAYOUT_PREVIEW_EMOJIS: () => LAYOUT_PREVIEW_EMOJIS,
    LEGACY_LOOKNFEEL_MAP: () => LEGACY_LOOKNFEEL_MAP,
    LEGACY_LUMINANCE_KEYS: () => LEGACY_LUMINANCE_KEYS,
    LEGACY_THEME_COLOR_MAP: () => LEGACY_THEME_COLOR_MAP,
    LOGIN_REMEMBER_LABEL: () => LOGIN_REMEMBER_LABEL,
    LOGIN_SUBTITLE_DEFAULT: () => LOGIN_SUBTITLE_DEFAULT,
    LOOKNFEEL_DEFAULT: () => LOOKNFEEL_DEFAULT,
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
    Loading: () => Loading,
    LoginButton: () => LoginButton,
    LoginDialog: () => LoginDialog,
    LoginFormActions: () => LoginFormActions,
    LoginFormFields: () => LoginFormFields,
    MAIN_ORCHESTRATOR_LS_KEY: () => MAIN_ORCHESTRATOR_LS_KEY,
    MAIN_ORCHESTRATOR_URL_LOCAL: () => MAIN_ORCHESTRATOR_URL_LOCAL,
    MAIN_ORCHESTRATOR_URL_PROD: () => MAIN_ORCHESTRATOR_URL_PROD,
    MIMICUS_UI: () => MIMICUS_UI,
    Masonry: () => Masonry,
    Mentions: () => Mentions,
    Menu: () => Menu,
    MimicusSidebar: () => MimicusSidebar,
    Modal: () => Modal,
    NEON_LOOKNFEELS: () => NEON_LOOKNFEELS,
    NavLink: () => NavLink,
    NavTabRow: () => NavTabRow,
    PLAYGROUND_APP_LAYOUT_OPTIONS: () => PLAYGROUND_APP_LAYOUT_OPTIONS,
    Pagination: () => Pagination,
    Playground: () => Playground,
    PlaygroundJsonPanel: () => PlaygroundJsonPanel,
    PreviewRenderer: () => PreviewRenderer,
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
    THEME_COLOR_DESIGN_SCHEME: () => THEME_COLOR_DESIGN_SCHEME,
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
    TipInfo: () => TipInfo,
    Toaster: () => Toaster,
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
    applyFlex: () => applyFlex,
    applyLooknfeel: () => applyLooknfeel,
    applyTheme: () => applyTheme,
    autosizeColumn: () => autosizeColumn,
    backdrop: () => backdrop,
    bg2font: () => bg2font,
    bgTransparent2font: () => bgTransparent2font,
    bootLooknfeel: () => bootLooknfeel,
    bootMimicusUI: () => bootMimicusUI,
    bootTheme: () => bootTheme,
    border: () => border,
    buildDisplayRows: () => buildDisplayRows,
    buildJsxTag: () => buildJsxTag,
    buildTag: () => buildTag,
    cdn: () => cdn_exports,
    cellText: () => cellText,
    clearLoginCredentials: () => clearLoginCredentials,
    clearSelection: () => clearSelection,
    colWindow: () => colWindow,
    collectGroupIds: () => collectGroupIds,
    colorMix: () => colorMix,
    colorOptions: () => colorOptions,
    colorTransform: () => colorTransform_exports,
    columnLayout: () => columnLayout,
    columnsConfig: () => columnsConfig,
    columnsGridPlayground: () => columnsGridPlayground,
    configurePlayground: () => configurePlayground,
    copyEditorText: () => copyEditorText,
    createDemoSession: () => createDemoSession,
    createGridModel: () => createGridModel,
    createJsonAdapter: () => createJsonAdapter,
    createOrchestratorSession: () => createOrchestratorSession,
    cycleSort: () => cycleSort,
    danger: () => danger,
    defaultIterceroFromTerceros: () => defaultIterceroFromTerceros,
    demoSlug: () => demoSlug,
    designSchemeColorCount: () => designSchemeColorCount,
    designSchemeForThemeColor: () => designSchemeForThemeColor,
    destroyCodeMirror: () => destroyCodeMirror,
    dispatchShellNav: () => dispatchShellNav,
    drawer_overlay: () => drawer_overlay,
    ensureCodeMirrorCss: () => ensureCodeMirrorCss,
    ensureCodeMirrorLoaded: () => ensureCodeMirrorLoaded,
    error: () => error,
    evaluateNavWhen: () => evaluateNavWhen,
    filterRows: () => filterRows,
    fluidCss: () => fluidCss,
    fontcolor: () => fontcolor,
    formatCellValue: () => formatCellValue,
    formatContapymeLoginInput: () => formatContapymeLoginInput,
    formatValue: () => formatValue,
    getCellRenderer: () => getCellRenderer,
    getCellValue: () => getCellValue,
    getLooknfeelState: () => getLooknfeelState,
    getSpaRoute: () => getSpaRoute,
    getThemeState: () => getThemeState,
    headerCheckboxState: () => headerCheckboxState,
    iconEnum: () => iconEnum,
    info: () => info,
    isAppLayoutVariant: () => isAppLayoutVariant,
    isDesignScheme: () => isDesignScheme,
    isGlassVariant: () => isGlassVariant,
    isLooknfeel: () => isLooknfeel,
    isLuminance: () => isLuminance,
    isNgVariant: () => isNgVariant,
    isStubComponent: () => isStubComponent,
    isThemeColor: () => isThemeColor,
    joinColorStyle: () => joinColorStyle,
    js2css: () => js2css,
    loginWithInsoftAutoRetry: () => loginWithInsoftAutoRetry,
    mergeStyleString: () => mergeStyleString,
    mergeSurfaceStyle: () => mergeSurfaceStyle,
    mimicusPageTitle: () => mimicusPageTitle,
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
    modal_overlay: () => modal_overlay,
    mountCodeMirror: () => mountCodeMirror,
    mountDisplay: () => mountDisplay,
    mountForms: () => mountForms,
    mountNavigation: () => mountNavigation,
    moveColumn: () => moveColumn,
    neutral: () => neutral,
    ngBaseVariant: () => ngBaseVariant,
    normalizeAppLayoutVariant: () => normalizeAppLayoutVariant,
    normalizeContapymeLoginId: () => normalizeContapymeLoginId,
    normalizeCssLength: () => normalizeCssLength,
    normalizeDesignScheme: () => normalizeDesignScheme,
    normalizeLooknfeel: () => normalizeLooknfeel,
    normalizePlaygroundAppLayoutVariant: () => normalizePlaygroundAppLayoutVariant,
    normalizeShellNavRows: () => normalizeShellNavRows,
    normalizeThemeColor: () => normalizeThemeColor,
    normalizeVariant: () => normalizeVariant,
    optionsToItems: () => optionsToItems,
    orderedForLayout: () => orderedForLayout,
    packCardRelieve: () => packCardRelieve,
    paletteBaseStyle: () => paletteBaseStyle,
    paletteStateVarRules: () => paletteStateVarRules,
    paletteSurfaceTint: () => paletteSurfaceTint,
    parseStyleString: () => parseStyleString,
    playgroundData: () => playgroundData,
    primary: () => primary,
    readDesignSchemeFromDom: () => readDesignSchemeFromDom,
    readLoginCredentials: () => readLoginCredentials,
    readLooknfeelFromDom: () => readLooknfeelFromDom,
    readLuminanceFromDom: () => readLuminanceFromDom,
    readThemeColorFromDom: () => readThemeColorFromDom,
    registerCellRenderer: () => registerCellRenderer,
    resolveCatalogDemoTabDescriptors: () => resolveCatalogDemoTabDescriptors,
    resolveCategoryTabDescriptors: () => resolveCategoryTabDescriptors,
    resolveCodeMirrorTheme: () => resolveCodeMirrorTheme,
    resolveColor: () => resolveColor,
    resolveColumns: () => resolveColumns2,
    resolveComponent: () => resolveComponent,
    resolveContapymeSession: () => resolveContapymeSession,
    resolveNavRowTabs: () => resolveNavRowTabs,
    resolveNavRowValue: () => resolveNavRowValue,
    resolveSessionHeaderLabel: () => resolveSessionHeaderLabel,
    resolveShellNavigation: () => resolveShellNavigation,
    responsiveGridCols: () => responsiveGridCols,
    rowWindow: () => rowWindow,
    rowsToCsv: () => rowsToCsv,
    saveLoginCredentials: () => saveLoginCredentials,
    secondary: () => secondary,
    sectionColorFor: () => sectionColorFor,
    sectionMeta: () => sectionMeta,
    selectAll: () => selectAll,
    setColumnHidden: () => setColumnHidden,
    setColumnPinned: () => setColumnPinned,
    setColumnWidth: () => setColumnWidth,
    setDesignScheme: () => setDesignScheme,
    setLuminance: () => setLuminance,
    setSpaRoute: () => setSpaRoute,
    setThemeColor: () => setThemeColor,
    snippets: () => snippets_exports,
    softBorder: () => softBorder,
    sortRows: () => sortRows,
    sortedCategories: () => sortedCategories,
    stepCssLength: () => stepCssLength,
    subscribeLooknfeel: () => subscribeLooknfeel,
    subscribeTheme: () => subscribeTheme,
    success: () => success,
    surfaceVariantAttrs: () => surfaceVariantAttrs,
    toastError: () => toastError,
    toastLoading: () => toastLoading,
    toastRemove: () => toastRemove2,
    toastSuccess: () => toastSuccess,
    toggleRowSelection: () => toggleRowSelection,
    uniqueValues: () => uniqueValues,
    urlState: () => urlState,
    useContapymeSession: () => useContapymeSession,
    useGridModel: () => useGridModel,
    useLayoutSize: () => useLayoutSize,
    useLayoutSlot: () => useLayoutSlot,
    useResolvedContapymeSession: () => useResolvedContapymeSession,
    useSpa: () => useSpa,
    useSpaRoute: () => useSpaRoute,
    warning: () => warning,
    wrapPassword: () => wrapPassword
  });

  // src/layout/app-layout/AppLayout.tsx
  var import_react5 = __require("react");

  // src/layout/app-layout/appLayoutVariants.ts
  var PLAYGROUND_APP_LAYOUT_OPTIONS = [
    { id: "side", label: "Panel izquierdo", icon: "mdi:dock-left" },
    { id: "top-side-2", label: "Panel derecho", icon: "mdi:dock-right" }
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
  var import_react = __require("react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var AppLayoutContext = (0, import_react.createContext)(null);
  function AppLayoutProvider({ children, defaultSiderWidth = "200px" }) {
    const [siderWidth, setSiderWidth] = (0, import_react.useState)(defaultSiderWidth);
    const value = (0, import_react.useMemo)(() => ({ siderWidth, setSiderWidth }), [siderWidth]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayoutContext.Provider, { value, children });
  }
  function useAppLayoutContext() {
    return (0, import_react.useContext)(AppLayoutContext);
  }

  // src/layout/app-layout/AppLayoutSider.tsx
  var import_react3 = __require("react");

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
  function colorMix(c1, c2, p) {
    const r1 = resolveColor(c1);
    if (p <= 0) return r1;
    const r2 = resolveColor(c2);
    if (p >= 100) return r2;
    return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
  }

  // src/components/Button.tsx
  var import_react2 = __require("react");

  // src/theme/palette-catalog.json
  var palette_catalog_default = [
    {
      id: "grafito",
      label: "Grafito",
      icon: "mdi:square",
      scheme: "mono",
      note: "gris pizarra fr\xEDo",
      aliases: []
    },
    {
      id: "menta",
      label: "Menta",
      icon: "mdi:sprout",
      scheme: "mono",
      note: "verde menta / agua fresca",
      aliases: []
    },
    {
      id: "vulcano",
      label: "Vulcano",
      icon: "mdi:fire",
      scheme: "mono",
      note: "grises volc\xE1nicos",
      aliases: []
    },
    {
      id: "carbon",
      label: "Carb\xF3n",
      icon: "mdi:hexagon-outline",
      scheme: "mono",
      note: "carb\xF3n neutro",
      aliases: []
    },
    {
      id: "plata",
      label: "Plata",
      icon: "mdi:brightness-6",
      scheme: "mono",
      note: "plata azulada",
      aliases: []
    },
    {
      id: "humo",
      label: "Humo",
      icon: "mdi:smoke",
      scheme: "mono",
      note: "gris c\xE1lido humo",
      aliases: []
    },
    {
      id: "marfil",
      label: "Marfil",
      icon: "mdi:feather",
      scheme: "mono",
      note: "marfil c\xE1lido",
      aliases: []
    },
    {
      id: "azabache",
      label: "Azabache",
      icon: "mdi:circle-slice-8",
      scheme: "mono",
      note: "negro azulado",
      aliases: []
    },
    {
      id: "nieve",
      label: "Nieve",
      icon: "mdi:snowflake",
      scheme: "mono",
      note: "blanco helado",
      aliases: []
    },
    {
      id: "piedra",
      label: "Piedra",
      icon: "mdi:wall",
      scheme: "mono",
      note: "piedra tostada",
      aliases: []
    },
    {
      id: "oceano",
      label: "Oc\xE9ano",
      icon: "mdi:waves",
      scheme: "dual",
      note: "teal + cielo",
      aliases: []
    },
    {
      id: "ambar",
      label: "\xC1mbar",
      icon: "mdi:weather-sunny",
      scheme: "dual",
      note: "\xE1mbar + oro",
      aliases: []
    },
    {
      id: "indigo",
      label: "\xCDndigo",
      icon: "mdi:moon-waning-crescent",
      scheme: "dual",
      note: "\xEDndigo + violeta",
      aliases: []
    },
    {
      id: "tierra",
      label: "Tierra",
      icon: "mdi:terrain",
      scheme: "dual",
      note: "marr\xF3n + ocre",
      aliases: []
    },
    {
      id: "cobre",
      label: "Cobre",
      icon: "mdi:gold",
      scheme: "dual",
      note: "cobre + turquesa",
      aliases: []
    },
    {
      id: "oliva",
      label: "Oliva",
      icon: "mdi:fruit-grapes",
      scheme: "dual",
      note: "oliva + oro",
      aliases: []
    },
    {
      id: "glaciar",
      label: "Glaciar",
      icon: "mdi:snowflake-variant",
      scheme: "dual",
      note: "hielo + azul profundo",
      aliases: []
    },
    {
      id: "bosque",
      label: "Bosque",
      icon: "mdi:tree",
      scheme: "dual",
      note: "verde bosque + musgo",
      aliases: []
    },
    {
      id: "medianoche",
      label: "Medianoche",
      icon: "mdi:weather-night",
      scheme: "dual",
      note: "navy + cian",
      aliases: []
    },
    {
      id: "ciruela",
      label: "Ciruela",
      icon: "mdi:flower-tulip-outline",
      scheme: "dual",
      note: "ciruela + rosa",
      aliases: []
    },
    {
      id: "hues-dodgerblue",
      label: "Dodger",
      icon: "mdi:palette-swatch",
      scheme: "triad",
      note: "azul dodger ContaPyme",
      aliases: [
        "contapyme"
      ]
    },
    {
      id: "natural",
      label: "Natural",
      icon: "mdi:leaf",
      scheme: "triad",
      note: "verde + azul + naranja",
      aliases: []
    },
    {
      id: "coral",
      label: "Coral",
      icon: "mdi:flower-tulip",
      scheme: "triad",
      note: "coral + melocot\xF3n + violeta",
      aliases: []
    },
    {
      id: "lavanda",
      label: "Lavanda",
      icon: "mdi:flower",
      scheme: "triad",
      note: "violeta + rosa + cian",
      aliases: []
    },
    {
      id: "cereza",
      label: "Cereza",
      icon: "mdi:fruit-cherries",
      scheme: "triad",
      note: "cereza + rosa + violeta",
      aliases: []
    },
    {
      id: "fucsia",
      label: "Fucsia",
      icon: "mdi:star-four-points",
      scheme: "triad",
      note: "magenta + rosa + \xEDndigo",
      aliases: []
    },
    {
      id: "aurora",
      label: "Aurora",
      icon: "mdi:aurora",
      scheme: "triad",
      note: "verde + cian + rosa",
      aliases: []
    },
    {
      id: "tropico",
      label: "Tr\xF3pico",
      icon: "mdi:palm-tree",
      scheme: "triad",
      note: "amarillo + verde + azul",
      aliases: []
    },
    {
      id: "electrico",
      label: "El\xE9ctrico",
      icon: "mdi:flash",
      scheme: "triad",
      note: "magenta + cian + amarillo",
      aliases: []
    },
    {
      id: "crepusculo",
      label: "Crep\xFAsculo",
      icon: "mdi:weather-sunset",
      scheme: "triad",
      note: "violeta + naranja + azul",
      aliases: []
    }
  ];

  // src/theme/constants.ts
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
  var THEME_COLOR_OPTIONS = palette_catalog_default.map(({ id, label, icon }) => ({ id, label, icon }));
  var DESIGN_SCHEME_OPTIONS = [
    { id: "mono", label: "Mono", icon: "mdi:circle" },
    { id: "dual", label: "Dual", icon: "mdi:circle-half-full" },
    { id: "triad", label: "Tr\xEDada", icon: "mdi:triangle-outline" }
  ];
  var THEME_COLOR_DESIGN_SCHEME = Object.fromEntries(
    palette_catalog_default.map((p) => [p.id, p.scheme])
  );
  var LOOKNFEEL_STORAGE_KEY = "looknfeel";
  var LOOKNFEEL_DEFAULT = "contapyme";
  var NEON_LOOKNFEELS = ["neon"];
  var LOOKNFEEL_OPTIONS = [
    { id: "contapyme", label: "ContaPyme", icon: "mdi:office-building" },
    { id: "neon", label: "Neon", icon: "mdi:lightbulb-on-outline" }
  ];
  var LEGACY_LOOKNFEEL_MAP = {
    classic: "contapyme",
    "neon-glass": "neon",
    "neon-mono": "neon",
    "neon-dual": "neon",
    "neon-triad": "neon"
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
  function designSchemeForThemeColor(value) {
    return THEME_COLOR_DESIGN_SCHEME[value] ?? "mono";
  }
  function designSchemeColorCount(scheme) {
    if (scheme === "mono") return 1;
    if (scheme === "dual") return 2;
    return 3;
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
    if (isNgVariant(variant)) return variant.slice(3);
    return variant;
  }
  function surfaceVariantAttrs(variant, fallback = "solid") {
    return { "data-variant": normalizeVariant(variant, fallback) };
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
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  function resolveButtonVariant(variant, { danger: danger2, ghost, dashed, link }) {
    if (link) return "text";
    if (ghost) return "ghost";
    if (dashed) return "dashed";
    return normalizeVariant(variant, "solid");
  }
  function resolveButtonColor(color, { danger: danger2 }) {
    if (color) return color;
    if (danger2) return "danger";
    return color;
  }
  function Button({
    type: htmlType = "button",
    disabled = false,
    variant = "solid",
    color,
    shape = "round",
    block = false,
    danger: danger2 = false,
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
    const normalizedVariant = resolveButtonVariant(variant, { danger: danger2, ghost, dashed, link: isLink && !href });
    const resolvedColor = resolveButtonColor(color, { danger: danger2 });
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
      "data-danger": danger2 ? "true" : void 0,
      "data-icon-placement": icon && children != null && children !== "" ? iconPlacement : void 0,
      "data-glass-active": isGlassVariant(variant) && glassActive ? "true" : void 0,
      ...surfaceStyle,
      className: cls,
      style: { width: block ? "100%" : "fit-content", maxWidth: block ? void 0 : "100%", ...surfaceStyle.style, ...style }
    };
    const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true, children: "\u2026" }) : icon);
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
    const content = iconPlacement === "end" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      finalChildren != null && finalChildren !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "button-content", children: finalChildren }),
      finalIcon
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      finalIcon,
      finalChildren != null && finalChildren !== "" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "button-content", children: finalChildren })
    ] });
    if (href && !wrap) {
      const linkRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { ...rest, ...dataProps, href: isDisabled ? void 0 : href, target, rel: linkRel, role: "button", "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, children: content });
    }
    if (wrap) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...rest, ...dataProps, role: "button", tabIndex: isDisabled ? -1 : 0, "aria-disabled": isDisabled ? "true" : void 0, onClick: handleClick, onKeyDown: onWrapKeydown, children: content });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { ...rest, ...dataProps, type: htmlType, disabled: isDisabled, onClick: handleClick, children: content });
  }

  // src/layout/app-layout/AppLayoutSider.tsx
  var import_jsx_runtime3 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("aside", { ...rest, className: rootClass, style: mergedStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: bodyClass, children }),
      collapsible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mimicus-app-layout-sider__trigger", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "text", color: isDark ? "neutral" : "primary", onClick: toggle, style: { width: "100%", justifyContent: "center", color: "inherit" }, children: collapsed ? "\u203A" : "\u2039" }) })
    ] });
  }

  // src/layout/app-layout/AppLayoutHeader.tsx
  var import_react4 = __require("react");
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  function HeaderZone({ children }) {
    return children;
  }
  var Brand = Object.assign((props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "brand" });
  var Center = Object.assign((props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "center" });
  var Tools = Object.assign((props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "tools" });
  var Nav = Object.assign((props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(HeaderZone, { ...props }), { __appLayoutHeaderSlot: "nav" });
  function collectHeaderSlots(children) {
    const slots = { brand: null, center: null, tools: null, nav: null, extra: [] };
    import_react4.Children.forEach(children, (child) => {
      if (!(0, import_react4.isValidElement)(child)) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className, children: slot.props.children });
  }
  function AppLayoutHeaderBase({ className, barClassName, navClassName, children, ...rest }) {
    const slots = collectHeaderSlots(children);
    const hasZones = Boolean(slots.brand || slots.center || slots.tools || slots.nav);
    const rootClass = ["mimicus-app-layout-header", "content-header", className].filter(Boolean).join(" ");
    if (!hasZones) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { ...rest, className: rootClass, children });
    }
    const barClass = ["mimicus-app-layout-header__bar", "content-header-inner", barClassName].filter(Boolean).join(" ");
    const navClass = ["mimicus-app-layout-header__nav", "pg-shell-header-nav", navClassName].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { ...rest, className: rootClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: barClass, children: [
        renderZone(slots.brand, "mimicus-app-layout-header__brand pg-shell-toolbar__brand"),
        renderZone(slots.center, "mimicus-app-layout-header__center pg-shell-toolbar__center"),
        renderZone(slots.tools, "mimicus-app-layout-header__tools pg-shell-toolbar__tools")
      ] }),
      slots.nav ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: navClass, children: slots.nav.props.children }) : null,
      slots.extra.length > 0 ? slots.extra : null
    ] });
  }
  var AppLayoutHeader = Object.assign(AppLayoutHeaderBase, { Brand, Center, Tools, Nav });

  // src/layout/app-layout/AppLayout.tsx
  var import_jsx_runtime5 = __require("react/jsx-runtime");
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
  var Header = Object.assign(
    (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AppLayoutHeader, { ...props }),
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
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Slot, { ...props }),
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { ...rest, className: rootClass, style: rootStyle, children: [
      hasHeader && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--header", children: slots.header }),
      hasSider && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--sider", children: slots.sider }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--content", children: slots.default }),
      hasFooter && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mimicus-app-layout__cell mimicus-app-layout__cell--footer", children: slots.footer })
    ] });
  }
  var AppLayout = Object.assign(AppLayoutRoot, { Header, Sider, Footer, SLOT_TYPES });

  // src/layout/app-layout/layoutSlotContext.tsx
  var import_react6 = __require("react");

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
    return { sizew, boolszw: getSizeFlags(sizew), lerpw: buildLerpw(clientWidth), width: clientWidth };
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
  var LayoutSlotContext = (0, import_react6.createContext)(DEFAULT_SLOT);
  function useLayoutSlot() {
    return (0, import_react6.useContext)(LayoutSlotContext) ?? DEFAULT_SLOT;
  }
  var useLayoutSize = useLayoutSlot;
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
    const bpIndex = ["xs", "sm", "md", "lg", "xl"].indexOf(sizew);
    const vars = { "--mlg-w": `${Math.round(clientWidth)}px`, "--mlg-bp": String(bpIndex) };
    return { ref, sizew, slot, clientWidth, dataSizew: sizew, vars };
  }

  // src/layout/grid/BlockLayout.tsx
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }) {
    const { ref, slot, dataSizew, vars } = useLayoutContainer(sizewProp);
    const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
    const mergedStyle = { ...joinStyle(style, `display: ${inline ? "inline-block" : "block"}`), ...vars };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref, className: cls, style: mergedStyle, "data-sizew": dataSizew, ...rest, ...dataDebug(rest, "block-layout"), children }) });
  }

  // src/layout/grid/FlexLayout.tsx
  var import_jsx_runtime7 = __require("react/jsx-runtime");
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
    const { ref, sizew, slot, dataSizew, vars } = useLayoutContainer(sizewProp);
    const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
    const mergedStyle = {
      ...joinStyle(
        `gap: ${resolveGap(gap, sizew)}`,
        direction && `flex-direction: ${direction}`,
        `flex-wrap: ${wrap ? "wrap" : "nowrap"}`,
        justify && `justify-content: ${resolveJustify(justify)}`,
        items && `align-items: ${items}`,
        style,
        `display: ${inline ? "inline-flex" : "flex"}`
      ),
      ...vars
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ref, className: cls, style: mergedStyle, "data-sizew": dataSizew, ...rest, ...dataDebug(rest, "flex-layout"), children }) });
  }

  // src/layout/grid/GridLayout.tsx
  var import_jsx_runtime8 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LayoutSlotContext.Provider, { value: slot, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref, className: cls, style: mergedStyle, ...rest, ...dataDebug(rest, "grid-layout"), children }) });
  }

  // src/layout/dividers/Divider.tsx
  var import_react7 = __require("react");
  var import_jsx_runtime9 = __require("react/jsx-runtime");
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
    const marginCss = axis === "horizontal" ? `1em 0` : `0 0.5em`;
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
    const mergedStyle = joinStyle(
      `--is-divider-color: ${lineColor}`,
      `margin: ${marginCss}`,
      axis === "horizontal" && titlePlacement !== "center" && `--is-divider-edge: ${edgeBasis}`,
      style
    );
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: cls, style: mergedStyle, role: "separator", "aria-orientation": axis, ...dataDebug(rest, "divider"), ...rest, children: hasText ? axis === "horizontal" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__rail is-divider__rail--before", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__content", children }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__rail is-divider__rail--after", "aria-hidden": "true" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__content", children }) : axis === "horizontal" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__rail is-divider__rail--solo", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "is-divider__rail is-divider__rail--solo-vertical", "aria-hidden": "true" }) });
  }

  // src/layout/panels/Splitter.tsx
  var import_react8 = __require("react");

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
  var import_jsx_runtime10 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: rootClass, style, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "is-splitter__panel", style: panelStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "is-splitter__panel-body", children: panel }),
        resizable && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "is-splitter__main", children })
    ] });
  }

  // src/layout/panels/SidePanel.tsx
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  function View({ mode = "expanded", gap = "0.25rem", className, style, children, ...rest }) {
    const rail = mode === "rail";
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "aside",
      {
        ...rest,
        className: ["mimicus-side-panel", "sidebar", "pg-sidebar", "pg-vt-sidebar", drawer && "mimicus-side-panel--drawer pg-sidebar--drawer", rail && "mimicus-side-panel--rail is-collapsed"].filter(Boolean).join(" "),
        style: { ...style && typeof style === "object" ? style : {} },
        children: [
          drawer && onClose && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mimicus-side-panel__drawer-bar pg-sidebar-drawer-bar", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onClose, className: "sidebar-toggle-btn", title: closeTitle, style: { width: "auto", marginLeft: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("iconify-icon", { icon: closeIcon, "aria-hidden": true }) }) }),
          !drawer && onToggle && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ["mimicus-side-panel__header", "pg-sidebar-header", "pg-sidebar-header--panel", rail && "pg-sidebar-header--rail"].filter(Boolean).join(" "), children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onToggle, className: ["sidebar-header-btn", rail ? "sidebar-header-btn--rail" : "sidebar-toggle-btn"].filter(Boolean).join(" "), title: open ? collapseTitle : expandTitle, style: rail ? { width: "100%", justifyContent: "center" } : { flexShrink: 0, width: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("iconify-icon", { icon: open ? "mdi:menu-open" : "mdi:menu", "aria-hidden": true, style: { width: "1.05rem", height: "1.05rem", fontSize: "1.05rem", color: "currentColor", display: "inline-block", flexShrink: 0 } }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: bodyClass, children: content })
        ]
      }
    );
  }
  var SidePanel = Object.assign(SidePanelBase, { View });

  // src/components/display/Display.tsx
  var import_react10 = __require("react");

  // src/display/useDisplayBinding.ts
  var import_react9 = __require("react");

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
    let hideTimer = null;
    const clearHideTimer = () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    };
    const show = () => {
      clearHideTimer();
      if (open) return;
      open = true;
      root.classList.add("is-open");
      tip.hidden = false;
      tip.setAttribute("aria-hidden", "false");
      tip.dataset.placement = placement;
    };
    const hide = () => {
      clearHideTimer();
      if (!open) return;
      open = false;
      root.classList.remove("is-open");
      hideTimer = setTimeout(() => {
        if (!open) {
          tip.hidden = true;
          tip.setAttribute("aria-hidden", "true");
        }
        hideTimer = null;
      }, 120);
    };
    const scheduleHide = () => {
      clearHideTimer();
      hideTimer = setTimeout(hide, 60);
    };
    hide();
    const cleanups = [
      on(root, "pointerenter", show),
      on(root, "pointerleave", scheduleHide),
      on(root, "focusin", show),
      on(root, "focusout", (e) => {
        const next = e.relatedTarget;
        if (next && root.contains(next)) return;
        scheduleHide();
      }),
      on(root, "keydown", (e) => {
        if (e.key === "Escape" && open) hide();
      }),
      () => clearHideTimer()
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
    const scope = root.closest(".mimicus-tour-demo");
    const local = Boolean(scope);
    let idx = 0;
    const clearTargets = () => {
      qsa(".mimicus-tour-target", document).forEach((el) => el.classList.remove("mimicus-tour-target"));
    };
    const resetCard = () => {
      if (!card) return;
      card.style.top = "";
      card.style.left = "";
      card.style.right = "";
      card.style.bottom = "";
      card.style.transform = "";
      card.style.position = local ? "absolute" : "fixed";
    };
    const placeCard = (target) => {
      if (!card) return;
      resetCard();
      const box = local && scope ? scope.getBoundingClientRect() : { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      if (!target) {
        card.style.top = "50%";
        card.style.left = "50%";
        card.style.transform = "translate(-50%, -50%)";
        return;
      }
      const rect = target.getBoundingClientRect();
      const top = rect.bottom - box.top + 8;
      let left = rect.left - box.left;
      const maxLeft = Math.max(8, box.width - card.offsetWidth - 8);
      left = Math.max(8, Math.min(left, maxLeft));
      card.style.top = `${Math.max(8, top)}px`;
      card.style.left = `${left}px`;
    };
    const paint = () => {
      const open = parseBool(root.dataset.open);
      if (!open || !steps.length) {
        root.classList.remove("is-active");
        if (overlay) overlay.hidden = true;
        clearTargets();
        return;
      }
      root.classList.add("is-active");
      if (overlay) {
        overlay.hidden = false;
        overlay.style.position = local ? "absolute" : "fixed";
      }
      const step = steps[idx];
      const targetSel = step?.dataset.target;
      const target = targetSel ? qs(targetSel, scope ?? root) ?? qs(targetSel, document) : null;
      steps.forEach((s, i) => s.classList.toggle("is-current", i === idx));
      if (titleEl) titleEl.textContent = step?.dataset.title ?? "";
      if (descEl) descEl.textContent = step?.dataset.description ?? "";
      clearTargets();
      if (target) target.classList.add("mimicus-tour-target");
      requestAnimationFrame(() => placeCard(target));
      if (prev) prev.disabled = idx <= 0;
      if (next) next.textContent = idx >= steps.length - 1 ? "Finalizar" : "Siguiente";
    };
    const end = () => {
      root.dataset.open = "false";
      clearTargets();
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
      on(overlay, "click", end),
      () => clearTargets()
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
  function mountDisplay(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-display]", document) : [scope].filter((el) => el?.dataset?.mimicusDisplay);
    return () => roots.map(bindDisplayComponent).forEach((fn) => fn());
  }

  // src/display/useDisplayBinding.ts
  function useDisplayBinding(ref, type, deps = []) {
    (0, import_react9.useEffect)(() => {
      const el = ref.current;
      if (!el || !type) return void 0;
      el.dataset.mimicusDisplay = type;
      return bindDisplayComponent(el);
    }, deps);
  }

  // src/components/display/Display.tsx
  var import_jsx_runtime12 = __require("react/jsx-runtime");
  function cx(...p) {
    return p.filter(Boolean).join(" ");
  }
  function initials(name) {
    return String(name ?? "?").trim().split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  }
  function hashColor(s) {
    let h = 0;
    const str = String(s);
    for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
    return `hsl(${Math.abs(h) % 360} 55% 45%)`;
  }
  function Badge({
    count,
    dot,
    showZero = false,
    max = 99,
    color = "primary",
    offset,
    children,
    className,
    style,
    ...rest
  }) {
    const n = Number(count);
    const show = dot || (showZero ? n >= 0 : n > 0);
    const label = Number.isFinite(n) && n > max ? `${max}+` : count;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { ...rest, className: cx("mimicus-badge-wrap", className), style, children: [
      children,
      show && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "sup",
        {
          className: cx("mimicus-badge", dot && "mimicus-badge--dot", `mimicus-badge--${color}`),
          style: offset ? { transform: `translate(${offset[0] ?? 0}px, ${offset[1] ?? 0}px)` } : void 0,
          children: !dot && label
        }
      )
    ] });
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "span",
      {
        ...rest,
        className: cx("mimicus-tag", `mimicus-tag--${variant}`, shape && `mimicus-tag--${shape}`, uppercase && "mimicus-tag--upper", className),
        style: mergeSurfaceStyle(color, style),
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-tag__icon", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-tag__text", children }),
          closable && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-tag__close", "aria-label": "Cerrar", onClick: onClose, children: "\xD7" })
        ]
      }
    );
  }
  var Chip = Tag;
  function Avatar({ src, alt, variant = "circular", children, className, style, ...rest }) {
    const label = alt ?? (typeof children === "string" ? children : "?");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "span",
      {
        ...rest,
        className: cx("mimicus-avatar", `mimicus-avatar--${variant}`, className),
        style,
        title: alt,
        children: src ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { className: "mimicus-avatar__img", src, alt: alt ?? "" }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-avatar__fallback", style: { background: hashColor(label) }, children: children ?? initials(label) })
      }
    );
  }
  function AvatarGroup({ max = 5, total, spacing = "medium", children, className, style, ...rest }) {
    const items = import_react10.Children.toArray(children);
    const shown = items.slice(0, max);
    const surplus = (total ?? items.length) - shown.length;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { ...rest, className: cx("mimicus-avatar-group", `mimicus-avatar-group--${spacing}`, className), style, children: [
      shown,
      surplus > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Avatar, { className: "mimicus-avatar-group__surplus", children: [
        "+",
        surplus
      ] })
    ] });
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
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
        "data-active-index": defaultActiveIndex,
        children: [
          arrows && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--prev", "data-mimicus-carousel-prev": true, "aria-label": "Anterior", children: "\u2039" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-carousel__viewport", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-carousel__track", "data-mimicus-carousel-track": true, children: slides.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: cx("mimicus-carousel__slide", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-slide": true, children: slide }, i)) }) }),
          arrows && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--next", "data-mimicus-carousel-next": true, "aria-label": "Siguiente", children: "\u203A" }),
          dots && slides.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-carousel__dots", role: "tablist", children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: cx("mimicus-carousel__dot", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-dot": true, "aria-label": `Slide ${i + 1}` }, i)) })
        ]
      }
    );
  }
  function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }) {
    const autoId = (0, import_react10.useId)();
    const key = panelKey ?? autoId;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-collapse__panel", defaultOpen && "is-open", className), "data-mimicus-collapse-panel": key, "data-default-open": defaultOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: "mimicus-collapse__trigger", "data-mimicus-collapse-trigger": true, "aria-expanded": defaultOpen ? "true" : "false", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-collapse__arrow", "aria-hidden": true, children: "\u25B8" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-collapse__header", children: header })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-collapse__body", "data-mimicus-collapse-body": true, hidden: !defaultOpen, children })
    ] });
  }
  function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const keys = activeKey ?? defaultActiveKey;
    useDisplayBinding(ref, "collapse", [accordion, keys]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
  var Accordion = Collapse;
  function DescriptionsItem({ label, span = 1, children, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-descriptions__item", className), style: { gridColumn: `span ${span}` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("dt", { className: "mimicus-descriptions__label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("dd", { className: "mimicus-descriptions__content", children })
    ] });
  }
  function Descriptions({ title, bordered = false, column = 3, children, className, style, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", className), style, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-descriptions__title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("dl", { className: "mimicus-descriptions__list", style: { "--mimicus-desc-cols": column }, children })
    ] });
  }
  Descriptions.Item = DescriptionsItem;
  function Empty({ description = "No data", image = "default", children, className, style, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-empty", image === "simple" && "mimicus-empty--simple", className), style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-empty__image", "aria-hidden": true }),
      description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mimicus-empty__desc", children: description }),
      children && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-empty__footer", children })
    ] });
  }
  function paintQr(canvas, value, size) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { ...rest, className: cx("mimicus-qrcode", bordered && "mimicus-qrcode--bordered", className), style, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("canvas", { ref, width: size, height: size, className: "mimicus-qrcode__canvas", "aria-label": `QR: ${value}` }) });
  }
  function Segmented({ options = [], value, defaultValue, onChange, block, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const cur = value ?? defaultValue ?? options[0]?.value;
    useDisplayBinding(ref, "segmented", [cur, options.length]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-segmented", block && "mimicus-segmented--block", className),
        style,
        "data-mimicus-display": "segmented",
        "data-value": cur,
        role: "group",
        children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "button",
          {
            type: "button",
            className: cx("mimicus-segmented__item", cur === opt.value && "is-active"),
            "data-mimicus-segmented": opt.value,
            "aria-pressed": cur === opt.value ? "true" : "false",
            onClick: () => onChange?.(opt.value),
            children: [
              opt.icon,
              opt.label ?? opt.value
            ]
          },
          opt.value
        ))
      }
    );
  }
  function Statistic({ title, value, prefix, suffix, precision, className, style, ...rest }) {
    const fmt = precision != null && Number.isFinite(Number(value)) ? Number(value).toFixed(precision) : value;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-statistic", className), style, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-statistic__title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mimicus-statistic__value", children: [
        prefix && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-statistic__prefix", children: prefix }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-statistic__number", children: fmt }),
        suffix && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-statistic__suffix", children: suffix })
      ] })
    ] });
  }
  function Table({ columns = [], dataSource = [], bordered, sortable, pagination, className, style, children, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, sortable ? "table" : null, [sortable, dataSource.length]);
    if (children) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: columns.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { "data-mimicus-table-sort": sortable && col.sorter ? i : void 0, className: sortable && col.sorter ? "mimicus-table__sortable" : void 0, children: col.title }, col.key ?? i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { children: dataSource.map((row2, ri) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: columns.map((col, ci) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: col.render ? col.render(row2[col.dataIndex], row2) : row2[col.dataIndex] }, col.key ?? ci)) }, row2.key ?? ri)) })
    ] });
  }
  function TimelineItem({ label, color, dot, children, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { ...rest, className: cx("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-timeline__dot", children: dot }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mimicus-timeline__content", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-timeline__label", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-timeline__body", children })
      ] })
    ] });
  }
  function Timeline({ mode = "left", pending, children, className, style, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("ul", { ...rest, className: cx("mimicus-timeline", `mimicus-timeline--${mode}`, className), style, children: [
      children,
      pending && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { className: "mimicus-timeline__item mimicus-timeline__item--pending", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-timeline__dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-timeline__content", children: pending })
      ] })
    ] });
  }
  Timeline.Item = TimelineItem;
  function Tooltip({ title, placement = "top", arrow, children, className, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tooltip", [title, placement]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { ...rest, ref, className: cx("mimicus-tooltip", className), "data-mimicus-display": "tooltip", "data-placement": placement, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-tooltip__trigger", "data-mimicus-tooltip-trigger": true, tabIndex: 0, children }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: cx("mimicus-tooltip__popup", arrow && "mimicus-tooltip__popup--arrow"), "data-mimicus-tooltip-popup": true, role: "tooltip", hidden: true, children: title })
    ] });
  }
  function Tour({ steps = [], open = false, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tour", [open, steps.length]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, ref, className: cx("mimicus-tour", open && "is-active", className), style, "data-mimicus-display": "tour", "data-open": open ? "true" : "false", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-tour__overlay", "data-mimicus-tour-overlay": true, hidden: !open }),
      steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { "data-mimicus-tour-step": true, "data-target": s.target, "data-title": s.title, "data-description": s.description, hidden: true }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mimicus-tour__card", "data-mimicus-tour-card": true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-tour__close", "data-mimicus-tour-close": true, "aria-label": "Cerrar", children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { "data-mimicus-tour-title": true }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { "data-mimicus-tour-desc": true }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mimicus-tour__actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", "data-mimicus-tour-prev": true, children: "Anterior" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", "data-mimicus-tour-next": true, children: "Siguiente" })
        ] })
      ] })
    ] });
  }
  function TreeNode({ node, checkable, level = 0 }) {
    const hasKids = Boolean(node.children?.length);
    const key = node.key ?? node.title;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cx("mimicus-tree__node", hasKids && "is-expanded"), "data-mimicus-tree-node": key, style: { paddingLeft: `${level * 1.1}rem` }, children: [
      hasKids ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-tree__switcher", "data-mimicus-tree-switcher": true, "aria-expanded": "true", children: "\u25BE" }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-tree__switcher mimicus-tree__switcher--leaf" }),
      checkable && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "checkbox", className: "mimicus-tree__check", "data-mimicus-tree-check": true }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-tree__title", children: node.title }),
      hasKids && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-tree__children", "data-mimicus-tree-children": true, children: node.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TreeNode, { node: c, checkable, level: level + 1 }, c.key ?? c.title)) })
    ] });
  }
  function Tree({ treeData = [], checkable, defaultExpandAll, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    useDisplayBinding(ref, "tree", [checkable, treeData.length]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ...rest, ref, className: cx("mimicus-tree", className), style, "data-mimicus-display": "tree", "data-checkable": checkable, "data-default-expand-all": defaultExpandAll, children: treeData.map((n) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TreeNode, { node: n, checkable }, n.key ?? n.title)) });
  }
  function Calendar({ fullscreen, className, style, ...rest }) {
    const ref = (0, import_react10.useRef)(null);
    const now = /* @__PURE__ */ new Date();
    useDisplayBinding(ref, "calendar", []);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        ...rest,
        ref,
        className: cx("mimicus-calendar", fullscreen && "mimicus-calendar--fullscreen", className),
        style,
        "data-mimicus-display": "calendar",
        "data-year": now.getFullYear(),
        "data-month": now.getMonth(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mimicus-calendar__header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-prev": true, "aria-label": "Mes anterior", children: "\u2039" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-calendar__title", "data-mimicus-calendar-title": true }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-next": true, "aria-label": "Mes siguiente", children: "\u203A" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-calendar__weekdays", children: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-calendar__weekday", children: d }, d)) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mimicus-calendar__grid", "data-mimicus-calendar-grid": true })
        ]
      }
    );
  }
  function ListItemText({ primary: primary2, secondary: secondary2, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ...rest, className: cx("mimicus-list-item__text", className), children: [
      primary2 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-list-item__primary", children: primary2 }),
      secondary2 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-list-item__secondary", children: secondary2 })
    ] });
  }
  function ListItemIcon({ children, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { ...rest, className: cx("mimicus-list-item__icon", className), children });
  }
  function ListItemAvatar({ children, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { ...rest, className: cx("mimicus-list-item__avatar", className), children });
  }
  function ListItem({ button, secondaryAction, children, className, ...rest }) {
    const Tag2 = button ? "button" : "li";
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Tag2, { ...rest, className: cx("mimicus-list-item", button && "mimicus-list-item--button", className), type: button ? "button" : void 0, children: [
      children,
      secondaryAction && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "mimicus-list-item__secondary-action", children: secondaryAction })
    ] });
  }
  function List({ dense, disableGutters, subheader, children, className, style, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("ul", { ...rest, className: cx("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className), style, children: [
      subheader && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { className: "mimicus-list__subheader", children: subheader }),
      children
    ] });
  }
  List.Item = ListItem;
  List.ItemText = ListItemText;
  List.ItemIcon = ListItemIcon;
  List.ItemAvatar = ListItemAvatar;

  // src/layout/panels/SidePanelSection.tsx
  var import_jsx_runtime13 = __require("react/jsx-runtime");
  function PanelIcon({ icon, style }) {
    if (!icon) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("iconify-icon", { icon, style: { fontSize: "1.1rem", flexShrink: 0, ...style }, "aria-hidden": true });
  }
  function SidePanelSection({
    icon = "mdi:folder-outline",
    label,
    open,
    active,
    forceOpen,
    count,
    color = "primary",
    colorSlot,
    collapsed,
    onToggle,
    onHeaderClick,
    children
  }) {
    const bow = `color-mix(in oklch, ${resolveColor(color)} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
    const accentStyle = { "--sm-accent": resolveColor(color), "--sm-accent-fg": bow };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: ["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" "), style: accentStyle, "data-section-color": colorSlot ?? color, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Button, { variant: active ? "soft" : "text", shape: "rect", color, onClick: onHeaderClick, style: { flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }, title: typeof label === "string" ? label : void 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PanelIcon, { icon, style: collapsed ? { fontSize: "1.2rem" } : void 0 }),
          !collapsed && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sm-title-group", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sm-label", children: label }) }),
            count != null && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sm-trail", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Badge, { children: count }) })
          ] })
        ] }),
        !forceOpen && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { variant: "text", shape: "rect", color, onClick: (e) => {
          e.stopPropagation();
          onToggle?.();
        }, style: { flex: "0 0 auto", width: "fit-content", minWidth: "2rem", paddingInline: "0.25rem" }, title: open ? "Contraer" : "Expandir", "aria-expanded": open, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PanelIcon, { icon: "mdi:chevron-down", style: { transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" } }) })
      ] }),
      open && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "sm-content mimicus-side-panel-section__content", style: { paddingLeft: "0.35rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.1rem" }, children }) })
    ] });
  }

  // src/layout/containers/Space.tsx
  var import_react11 = __require("react");
  var import_jsx_runtime14 = __require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "mimicus-space__item", children: child }, i)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: cls, style: rootStyle, ...rest, children: items.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "mimicus-space__item", children: [
      child,
      i < items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "mimicus-space__sep", "aria-hidden": "true", children: separator }) : null
    ] }, i)) });
  }

  // src/layout/containers/Stack.tsx
  var import_react12 = __require("react");
  var import_jsx_runtime15 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      FlexLayout,
      {
        direction: flexDir,
        gap: gap || void 0,
        items: alignItems,
        justify: justifyContent,
        className: ["mimicus-stack", className].filter(Boolean).join(" "),
        style,
        ...rest,
        children: divider ? items.flatMap((child, i) => i < items.length - 1 ? [child, /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mimicus-stack__divider", children: divider }, `d-${i}`)] : [child]) : children
      }
    );
  }

  // src/layout/containers/Box.tsx
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

  // src/layout/containers/Container.tsx
  var import_jsx_runtime16 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: cls, style: mergedStyle, ...rest, children });
  }

  // src/layout/grid/Masonry.tsx
  var import_react14 = __require("react");
  var import_jsx_runtime17 = __require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: cls, style: rootStyle, ...rest, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: itemRender ? itemRender(item) : item.children }, item.key ?? item.id)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: cls, style: rootStyle, ...rest, children: import_react14.Children.map(children, (child, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mimicus-masonry__item", style: { breakInside: "avoid", marginBottom: gap }, children: child }, i)) });
  }

  // src/layout/grid/ImageList.tsx
  var import_jsx_runtime18 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { className: ["mimicus-image-list__item", className].filter(Boolean).join(" "), style: spanStyle, ...rest, children });
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
    const g2 = resolveGap2(gap);
    const cls = ["mimicus-image-list", variant === "masonry" && "mimicus-image-list--masonry", className].filter(Boolean).join(" ");
    if (variant === "masonry") {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: cls, style: joinStyle(`column-count: ${cols}`, `column-gap: ${g2}`, "list-style: none", "margin: 0", "padding: 0", style), ...rest, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "ul",
      {
        className: cls,
        style: joinStyle(
          "display: grid",
          `grid-template-columns: repeat(${cols}, minmax(0, 1fr))`,
          `gap: ${g2}`,
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
  var import_jsx_runtime19 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: cls, role: "separator", "aria-orientation": axis, style: mergedStyle, ...rest });
  }

  // src/layout/grid/GridResponsiveForm.tsx
  var import_jsx_runtime20 = __require("react/jsx-runtime");
  var CELLS_BY_SIZEW = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };
  function computeCells(sizew, maxcells, mincells) {
    const base = CELLS_BY_SIZEW[sizew] ?? 1;
    const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
    return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
  }
  function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }) {
    const { sizew } = useLayoutSlot();
    const cells = computeCells(sizew ?? "md", maxcells, mincells);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(GridLayout, { sizew, cells: String(cells), gap, ...gridProps, children });
  }
  function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(BlockLayout, { className: ["mimicus-grid-responsive-form", className].filter(Boolean).join(" "), style, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(GridResponsiveFormInner, { maxcells, mincells, gap, ...gridProps, children }) });
  }

  // src/components/Icon.tsx
  var import_react15 = __require("react");
  var import_jsx_runtime21 = __require("react/jsx-runtime");
  function Icon({ icon, className, style }) {
    const ref = (0, import_react15.useRef)(null);
    (0, import_react15.useEffect)(() => {
      const el = ref.current;
      if (!el) return;
      if (className) el.setAttribute("class", className);
      else el.removeAttribute("class");
    }, [className]);
    if (!icon) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("iconify-icon", { ref, icon, style: style && typeof style === "object" ? style : void 0 });
  }

  // src/components/FloatButton.tsx
  var import_react16 = __require("react");
  var import_jsx_runtime22 = __require("react/jsx-runtime");
  function FloatButtonBase({
    icon,
    content,
    children,
    type = "default",
    shape = "circle",
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
    const inner = /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "mimicus-float-btn__icon", "aria-hidden": true, children: icon }),
      extended && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "mimicus-float-btn__content", children: label })
    ] });
    const dataProps = {
      "data-type": type,
      "data-shape": shape,
      ...surface,
      className: cls,
      style: surface.style,
      title: typeof tooltip === "string" ? tooltip : void 0,
      "aria-label": rest["aria-label"] ?? (typeof tooltip === "string" ? tooltip : extended ? String(label) : "Acci\xF3n flotante"),
      onClick: disabled ? void 0 : onClick
    };
    if (href && !disabled) {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { href, target, ...rest, ...dataProps, children: inner });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { type: "button", disabled, ...rest, ...dataProps, children: inner });
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
    const [internalOpen, setInternalOpen] = (0, import_react16.useState)(defaultOpen);
    const open = openProp ?? internalOpen;
    const setOpen = (v) => {
      if (openProp === void 0) setInternalOpen(v);
      onOpenChange?.(v);
    };
    const items = import_react16.Children.toArray(children).filter(Boolean);
    const main = items[0];
    const extras = items.slice(1);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        className: ["mimicus-float-btn-group", open && "is-open", className].filter(Boolean).join(" "),
        style,
        "data-trigger": trigger,
        "data-placement": placement,
        "data-shape": shape,
        onMouseEnter: trigger === "hover" ? () => setOpen(true) : void 0,
        onMouseLeave: trigger === "hover" ? () => setOpen(false) : void 0,
        children: [
          open && extras.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mimicus-float-btn-group__menu", role: "menu", children: extras.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mimicus-float-btn-group__item", role: "none", children: child }, i)) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mimicus-float-btn-group__trigger", role: "none", children: trigger === "click" && extras.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            FloatButtonBase,
            {
              ...main?.props ?? {},
              icon: open ? closeIcon ?? main?.props?.icon : main?.props?.icon,
              onClick: (e) => {
                setOpen(!open);
                main?.props?.onClick?.(e);
              }
            }
          ) : main })
        ]
      }
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
    const [visible, setVisible] = (0, import_react16.useState)(false);
    (0, import_react16.useEffect)(() => {
      const el = target?.() ?? (typeof window !== "undefined" ? window : null);
      if (!el) return void 0;
      const node = el;
      const onScroll = () => setVisible((node.scrollY ?? node.scrollTop ?? 0) > visibilityHeight);
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
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      FloatButtonBase,
      {
        type: "primary",
        shape: "circle",
        className: ["mimicus-float-btn--back-top", className].filter(Boolean).join(" "),
        style,
        icon: icon ?? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "mimicus-text-icon", children: "\u2191" }),
        tooltip: "Volver arriba",
        onClick: scrollTop
      }
    );
  }
  function FloatButtonRoot(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FloatButtonBase, { ...props });
  }
  var FloatButton = Object.assign(FloatButtonRoot, {
    Group: FloatButtonGroup,
    BackTop: FloatButtonBackTop
  });
  function Fab(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(FloatButton, { type: props.color === "secondary" ? "default" : "primary", ...props });
  }
  function IconButton({ color, variant = "text", className, style, children, icon, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Button,
      {
        ...rest,
        variant,
        color,
        shape: "circle",
        icon: icon ?? children,
        className: ["mimicus-icon-btn", className].filter(Boolean).join(" "),
        style: { width: "fit-content", ...style }
      }
    );
  }

  // src/lib/colorTransform.ts
  var colorTransform_exports = {};
  __export(colorTransform_exports, {
    Color: () => Color,
    applyColorTransform: () => applyColorTransform,
    backdrop: () => backdrop,
    bg2font: () => bg2font,
    bgTransparent2font: () => bgTransparent2font,
    border: () => border,
    danger: () => danger,
    drawer_overlay: () => drawer_overlay,
    error: () => error,
    fontcolor: () => fontcolor,
    info: () => info,
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
    modal_overlay: () => modal_overlay,
    neutral: () => neutral,
    paletteBaseStyle: () => paletteBaseStyle,
    paletteStateVarRules: () => paletteStateVarRules,
    paletteSurfaceTint: () => paletteSurfaceTint,
    primary: () => primary,
    secondary: () => secondary,
    softBorder: () => softBorder,
    success: () => success,
    warning: () => warning
  });
  var clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
  var fval = (v, p = 3) => +v.toFixed(p);
  var toFactor = (v) => clamp(v) / 100;
  function resolveAny(input) {
    if (!input) return "";
    if (input === "transparent" || input === "inherit" || input === "currentColor") return input;
    if (/^#|^rgb|^rgba|^hsl|^hsla|^oklch|^oklab|^color\(|^var\(|^white|^black/i.test(input)) return input;
    const resolved = resolveColor(input);
    return resolved || input;
  }
  function unwrapOklch(color) {
    const trimmed = color.trim();
    if (!trimmed.startsWith("oklch(")) return null;
    const inner = trimmed.slice(6, -1).trim();
    const fromMatch = inner.match(/^from\s+(.+?)\s+(.+)$/i);
    if (!fromMatch) {
      const parts = inner.split(/\s+/);
      return { base: "currentColor", L: parts[0] ?? "l", C: parts[1] ?? "c", H: parts[2] ?? "h", A: (parts[3] ?? "").replace(/^\//, "") || "alpha" };
    }
    const base = fromMatch[1].trim();
    const rest = fromMatch[2].trim();
    const comps = [];
    let depth = 0, current = "";
    for (const ch of rest) {
      if (ch === "(") depth++;
      else if (ch === ")") depth--;
      if (ch === " " && depth === 0) {
        if (current) {
          comps.push(current);
          current = "";
        }
      } else current += ch;
    }
    if (current) comps.push(current);
    const wrap = (s) => s === "l" || s === "c" || s === "h" || s === "alpha" ? s : `(${s})`;
    const L = wrap((comps[0] ?? "l").replace(/^\//, ""));
    const C = wrap((comps[1] ?? "c").replace(/^\//, ""));
    const hSplit = (comps[2] ?? "h").split(/\s*\/\s*/);
    const H = wrap(hSplit[0]);
    const A = wrap((hSplit[1] ?? comps[3] ?? "").replace(/^\//, "") || "alpha");
    return { base, L, C, H, A };
  }
  function applyOpts(color, opts) {
    const { blacken = 0, whiten = 0, saturate = 0, desaturate = 0, huerotate = 0, transparent = 0, bow = 0, unbow = 0, alpha, hue, saturation, bright } = opts;
    if (alpha === 0 || transparent === 100) return "transparent";
    if (!color) return "";
    const hasBlacken = blacken > 0;
    const hasWhiten = whiten > 0;
    const hasSaturate = saturate > 0;
    const hasDesaturate = desaturate > 0;
    const hasHuerotate = huerotate % 360 !== 0;
    const hasTransparent = transparent > 0;
    const hasBow = bow > 0;
    const hasUnbow = unbow > 0;
    const hasAlpha = alpha !== void 0 && alpha > 0;
    const hasHue = hue !== void 0;
    const hasSaturation = saturation !== void 0 && saturation > 0;
    const hasBright = bright !== void 0 && bright > 0;
    const flags = [hasBlacken, hasWhiten, hasSaturate, hasDesaturate, hasHuerotate, hasTransparent, hasBow, hasUnbow, hasAlpha, hasHue, hasSaturation, hasBright];
    const active = flags.filter(Boolean).length;
    if (active === 0) return color;
    let single;
    if (active === 1) {
      if (hasBlacken) single = `color-mix(in srgb, ${color}, black ${clamp(blacken)}%)`;
      else if (hasWhiten) single = `color-mix(in srgb, ${color}, white ${clamp(whiten)}%)`;
      else if (hasTransparent) single = `color-mix(in srgb, ${color}, transparent ${clamp(transparent)}%)`;
      else if (hasBow) single = `color-mix(in srgb, ${color}, rgb(0 0 0) ${clamp(bow)}%)`;
      else if (hasUnbow) single = `color-mix(in srgb, ${color}, rgb(255 255 255) ${clamp(unbow)}%)`;
      else if (hasDesaturate) single = `color-mix(in srgb, ${color}, oklch(from ${color} l 0 h) ${clamp(desaturate)}%)`;
      else if (hasSaturate) {
        const boost = clamp(saturate) * 2e-3;
        single = `color-mix(in srgb, ${color}, oklch(from ${color} calc(l + ${boost}) 0.4 h) ${clamp(saturate)}%)`;
      } else if (hasAlpha) single = `oklch(from ${color} l c h / ${fval((alpha ?? 0) / 100)})`;
      else if (hasHue) single = `oklch(from ${color} l c ${hue})`;
      else if (hasHuerotate) single = `oklch(from ${color} l c calc(h + ${huerotate}))`;
      else if (hasSaturation) single = `oklch(from ${color} l ${fval((saturation ?? 0) / 100)} h)`;
      else if (hasBright) single = `oklch(from ${color} ${fval((bright ?? 0) / 100)} c h)`;
    }
    if (single) return single;
    const unwrapped = unwrapOklch(color);
    let base, eL, eC, eH, eA;
    if (unwrapped) {
      base = unwrapped.base === "currentColor" ? "currentColor" : unwrapped.base;
      eL = unwrapped.L;
      eC = unwrapped.C;
      eH = unwrapped.H;
      eA = unwrapped.A;
    } else {
      base = color;
      eL = "l";
      eC = "c";
      eH = "h";
      eA = "alpha";
    }
    const netBow = Math.max(0, bow - unbow);
    const netUnbow = Math.max(0, unbow - bow);
    const bowFactor = toFactor(netBow);
    const unbowFactor = toFactor(netUnbow);
    const blackenFactor = toFactor(blacken);
    const whitenFactor = toFactor(whiten);
    let huePart = eH;
    if (hue !== void 0) huePart = `${hue}`;
    else if (huerotate % 360 !== 0) huePart = `calc(${eH} + ${huerotate})`;
    let alphaPart = "";
    if (alpha !== void 0) alphaPart = ` / ${fval(alpha / 100)}`;
    else if (transparent > 0) alphaPart = ` / calc(${eA} * ${fval(1 - toFactor(transparent))})`;
    else if (eA !== "alpha") alphaPart = ` / ${eA}`;
    let satPart = eC;
    if (hasSaturation) {
      satPart = `${fval(saturation / 100)}`;
    } else {
      const pieces = [];
      if (hasBow) pieces.push(`(1 - ${fval(bowFactor)})`);
      if (hasUnbow) pieces.push(`(1 - ${fval(unbowFactor)})`);
      if (hasBlacken) pieces.push(`(1 - ${fval(blackenFactor)})`);
      if (hasWhiten) pieces.push(`(1 - ${fval(whitenFactor)})`);
      const chromaMult = pieces.length > 0 ? pieces.join(" * ") : "";
      let currentSat = eC;
      if (hasSaturate) currentSat = `calc(${eC} + (0.5 - ${eC}) * ${fval(toFactor(saturate), 2)})`;
      else if (hasDesaturate) currentSat = `calc(${eC} * ${fval(1 - toFactor(desaturate), 2)})`;
      if (chromaMult) satPart = `calc(${currentSat} * ${chromaMult})`;
      else if (hasSaturate || hasDesaturate) satPart = currentSat;
    }
    let lightPart = eL;
    if (hasBright) {
      lightPart = `${fval(bright / 100)}`;
    } else {
      const lOps = [];
      let baseL = eL;
      if (hasBlacken || hasWhiten) {
        baseL = `(${eL} * ${fval(1 - blackenFactor)} + (1 - ${eL}) * ${fval(whitenFactor)})`;
      }
      const neonL = hasSaturate ? ` + (1 - ${baseL}) * ${fval(toFactor(saturate), 2)}` : "";
      if (hasBow) lOps.push(`((1 - ${baseL}) * ${fval(bowFactor)} - ${baseL} * ${fval(bowFactor)})`);
      if (hasUnbow) lOps.push(`(${baseL} * ${fval(unbowFactor)} - (1 - ${baseL}) * ${fval(unbowFactor)})`);
      if (lOps.length > 0 || hasBlacken || hasWhiten || hasSaturate) {
        const opsStr = lOps.length > 0 ? " + " + lOps.join(" + ") : "";
        lightPart = `calc(${baseL}${neonL}${opsStr})`;
      }
    }
    return `oklch(from ${base} ${lightPart} ${satPart} ${huePart}${alphaPart})`;
  }
  var mkDarken = (c, p = 0) => applyOpts(resolveAny(c), { blacken: p });
  var mkLighten = (c, p = 0) => applyOpts(resolveAny(c), { whiten: p });
  var mkAlpha = (c, p = 0) => applyOpts(resolveAny(c), { transparent: p });
  var mkInvertL = (c) => `oklch(from ${resolveAny(c)} l c calc(100% - l))`;
  var mkBow = (color, percent = 0) => applyOpts(resolveAny(color), { bow: percent });
  var mkUnbow = (color, percent = 0) => applyOpts(resolveAny(color), { unbow: percent });
  var bg2font = (c) => `oklch(from ${resolveAny(c)} calc((sign(0.75 - l) + 1) / 2 * 100%) 0 h / 1)`;
  var bgTransparent2font = (c, alphaPct, bg) => bg2font(colorMix(bg, c, 100 - alphaPct));
  var mkWinChromeAccent = (color = "primary") => `oklch(from ${resolveAny(color)} l calc(min(0.26, max(c, 0.14) + 0.05)) h)`;
  var mkOklchShiftL = (c, delta, min = 0.06, max = 0.98) => `oklch(from ${resolveAny(c)} calc(clamp(${min}, l + ${delta}, ${max})) c h)`;
  var mkSoftBg = (color, veilPct = 88) => mkAlpha(color, veilPct);
  function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
    return mkAlpha(mkUnbow(color, bowPct), alphaPct);
  }
  var mkHeadingColor = (color = "primary", bowPct) => mkBow(color, bowPct);
  function paletteBaseStyle(color = "primary") {
    return { "--ct-base": resolveAny(color) };
  }
  function paletteSurfaceTint(color, opts = {}) {
    const accent2 = resolveAny(color);
    const bg = colorMix(resolveAny(opts.surface ?? "card"), color, opts.cardMix ?? 15);
    const fg = colorMix(bg2font(bg), color, opts.fgMix ?? 40);
    const border2 = colorMix(bg, color, opts.borderMix ?? 35);
    return { accent: accent2, bg, fg, border: border2 };
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
        return bg2font(resolveAny(base));
      default:
        return resolveAny(base);
    }
  }
  function paletteStateVarRules(cssVarName) {
    const ref = cssVarName.startsWith("var(") ? cssVarName : `var(${cssVarName})`;
    return [`${cssVarName}-hvr: ${mkLighten(ref, 15)}`, `${cssVarName}-ctv: ${mkDarken(ref, 20)}`];
  }
  var border = "#80808050";
  var backdrop = "rgba(0, 128, 255, 0.05)";
  var modal_overlay = "rgba(0, 0, 0, 0.1)";
  var drawer_overlay = "rgba(0, 0, 0, 0.05)";
  var neutral = "#808080";
  var softBorder = "#80808018";
  var especiales = { modal_overlay, drawer_overlay, neutral, softBorder, border, backdrop };
  function unwrapColorDef(input) {
    if (!input) return null;
    if (typeof input === "string") return { base: input, opts: {} };
    const entries = Object.entries(input);
    if (!entries.length) return null;
    const [base, opts] = entries[0];
    return { base, opts: opts ?? {} };
  }
  var Color = {
    get: (name) => {
      const parsed = unwrapColorDef(name);
      if (!parsed) return "";
      return Color.transform(parsed.base, parsed.opts);
    },
    primary: (opts = {}) => Color.transform("primary", opts),
    info: (opts = {}) => Color.transform("info", opts),
    success: (opts = {}) => Color.transform("success", opts),
    warning: (opts = {}) => Color.transform("warning", opts),
    error: (opts = {}) => Color.transform("error", opts),
    danger: (opts = {}) => Color.transform("danger", opts),
    design1: (opts = {}) => Color.transform("design-1", opts),
    design2: (opts = {}) => Color.transform("design-2", opts),
    design3: (opts = {}) => Color.transform("design-3", opts),
    bg: (opts = {}) => Color.transform("bg", opts),
    card: (opts = {}) => Color.transform("card", opts),
    fontcolor: (opts = {}) => Color.transform("color", opts),
    paper: (opts = {}) => Color.transform("bg", opts),
    background: (opts = {}) => Color.transform("bg", opts),
    border: (opts = {}) => Color.transform("border", opts),
    readonly: (opts = {}) => Color.transform("border", opts),
    currentColor: (opts = {}) => Color.transform("currentColor", opts),
    /* Resuelve todos los colores base del tema (token → CSS var resuelto). */
    getColors: () => ({ ...especiales, primary: resolveAny("primary"), info: resolveAny("info"), success: resolveAny("success"), warning: resolveAny("warning"), error: resolveAny("error"), danger: resolveAny("danger"), design1: resolveAny("design-1"), design2: resolveAny("design-2"), design3: resolveAny("design-3"), bg: resolveAny("bg"), card: resolveAny("card"), fontcolor: resolveAny("color"), border: resolveAny("border") }),
    /* Aplica mods. Acepta objeto `{ base: opts }`. */
    transform: (c, opts = {}) => {
      const parsed = unwrapColorDef(c);
      if (!parsed) return "";
      const merged = { ...parsed.opts, ...opts };
      if (merged.mixColor) merged.mixColor = resolveAny(merged.mixColor);
      const resolved = resolveAny(parsed.base);
      let result = applyOpts(resolved, merged);
      if (opts.mixColor && opts.pmix !== void 0) result = `color-mix(in srgb, ${result}, ${resolveAny(opts.mixColor)} ${clamp(opts.pmix)}%)`;
      return result;
    },
    /* Mezcla dos colores. */
    mix: (c1, c2, p = 50) => `color-mix(in srgb, ${resolveAny(c1)} ${clamp(p)}%, ${resolveAny(c2)})`,
    /* Sombra basada en elevación (0-100). */
    elevation: (p, opts = {}) => {
      const { dx = 0, dy = 1, col, darkshadow = 1 } = opts;
      p = clamp(p);
      const dshadow = clamp(darkshadow, 0, 1);
      if (p === 0 || dshadow === 0) return "none";
      const f = p / 100;
      const ox = (f * 25 * dx).toFixed(2);
      const oy = (f * 25 * dy).toFixed(2);
      const b = (2.5 + f * 47.5).toFixed(2);
      const s = (f * -12).toFixed(2);
      const a = +((0.18 + Math.sqrt(f) * 0.12) * 0.7 * dshadow).toFixed(3);
      const c = col ? Color.transform(col, { alpha: Math.round(a * 100) }) : `rgb(0 0 0 / ${a})`;
      return `${ox}px ${oy}px ${b}px ${s}px ${c}`;
    },
    /* Contraste óptimo (blanco/negro) por luminancia. */
    getContrastColor: (c) => {
      const resolved = resolveAny(Color.get(c) || (typeof c === "string" ? c : ""));
      return resolved ? `oklch(from ${resolved} calc((sign(0.7 - l) + 1) * 50%) 0 h / 1)` : "";
    },
    /* Opuesto al contraste óptimo. */
    getUncontrastColor: (c) => {
      const resolved = resolveAny(Color.get(c) || (typeof c === "string" ? c : ""));
      return resolved ? `oklch(from ${resolved} calc(((sign(0.7 - l) * -1) + 1) * 50%) 0 h / 1)` : "";
    }
  };
  var { primary, info, success, warning, error, danger, fontcolor } = Color.getColors();
  var secondary = Color.transform("primary", { huerotate: 60 });

  // src/lib/cardHelpers.ts
  var px = (n) => `${n.toFixed(2)}px`;
  var clamp01 = (n) => Math.max(0, Math.min(1, n));
  var rgba = (r, g2, b, a) => `rgba(${r},${g2},${b},${a.toFixed(4)})`;
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

  // src/components/Card.tsx
  var import_jsx_runtime23 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Tag2,
      {
        ...rest,
        className: ["card-root", className].filter(Boolean).join(" "),
        style: cardStyle,
        "data-variant": normalizedVariant,
        children
      }
    );
  }

  // src/components/CodeBlock.tsx
  var import_react17 = __require("react");

  // src/codemirror/constants.ts
  var CODEMIRROR_VERSION = "5.65.18";
  var CODEMIRROR_CDN = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}`;

  // src/codemirror/lazyLoad.ts
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

  // src/codemirror/mount.ts
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

  // src/theme/themeEngine.ts
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
    return () => {
      listeners.delete(fn);
    };
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
    const scheme = designSchemeForThemeColor(value);
    applyTheme(state.luminance, value, scheme);
  }
  function setDesignScheme(value) {
    if (state.designScheme === value && readDesignSchemeFromDom() === value) return;
    applyTheme(state.luminance, state.themeColor, value);
  }
  function bootTheme() {
    applyTheme(readStoredLuminance(), readStoredThemeColor(), readStoredDesignScheme());
  }

  // src/components/CodeBlock.tsx
  var import_jsx_runtime24 = __require("react/jsx-runtime");
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
    const hostRef = (0, import_react17.useRef)(null);
    const cmRef = (0, import_react17.useRef)(null);
    const onChangeRef = (0, import_react17.useRef)(onChange);
    const syncingRef = (0, import_react17.useRef)(false);
    const [cmReady, setCmReady] = (0, import_react17.useState)(() => typeof window !== "undefined" && !!window.CodeMirror);
    const [copied, setCopied] = (0, import_react17.useState)(false);
    (0, import_react17.useEffect)(() => {
      onChangeRef.current = onChange;
    }, [onChange]);
    (0, import_react17.useEffect)(() => {
      if (cmReady) return void 0;
      let cancelled = false;
      ensureCodeMirrorLoaded({ sql: needsSqlMode(mode), css: needsCssMode(mode) }).then(() => {
        if (!cancelled) setCmReady(true);
      }).catch((err) => console.warn("[mimicus] CodeMirror:", err));
      return () => {
        cancelled = true;
      };
    }, [cmReady, json, mode, lang]);
    (0, import_react17.useEffect)(() => {
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
    (0, import_react17.useEffect)(() => {
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
    (0, import_react17.useEffect)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: panelClass, style, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(IconButton, { "aria-label": copyTitle, onClick: () => copyEditorText(value), title: copyTitle, children: "\u29C9" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("pre", { className: "mimicus-cm-fallback", style: hostStyle, children: value || placeholder })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: panelClass, style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(IconButton, { className: "mimicus-cm-panel__copy", "aria-label": copyTitle, title: copied ? "Copiado" : copyTitle, onClick: handleCopy, children: copied ? "\u2713" : "\u29C9" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mimicus-cm-host", ref: hostRef, style: hostStyle })
    ] });
  }
  var CodeMirrorPanel = CodeBlock;

  // src/components/typography/typographyHelpers.ts
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
    const v = (variant ? TYPOGRAPHY_VARIANTS[variant] : void 0) ?? TYPOGRAPHY_VARIANTS.body1;
    const surface = mergeSurfaceStyle(color, { style });
    const nLines = Number(lines);
    const clamp3 = (nLines > 0 || ellipsis) && nLines !== 0 ? {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: Math.max(1, Math.round(nLines) || 1),
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
        ...clamp3,
        ...surface.style ?? {},
        ...style && typeof style === "object" ? style : {}
      }
    };
  }
  function typographyClass(parts) {
    return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
  }

  // src/components/typography/Typography.tsx
  var import_jsx_runtime25 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${v}`, ...mods, className]), "data-variant": v, "aria-disabled": disabled || void 0, children });
  }
  function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
    const variant = levelToVariant(level);
    const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
    const Tag2 = variant;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Tag2, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className]), "data-level": level, "data-variant": variant, children });
  }
  function TypographyParagraph(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TypographyText, { ...props, variant: props.variant ?? "body1", component: "p", className: ["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ") });
  }
  function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
    const spec = buildTypographyStyle({ color, variant: "body1", style, lines: 0, ellipsis: false });
    if (target === "_blank" && !rel) rel = "noopener noreferrer";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("a", { ...rest, href: disabled ? void 0 : href, target, rel, ...spec, className: typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className]), "aria-disabled": disabled || void 0, children });
  }
  function Text({ sampleText, children, ...rest }) {
    const content = children ?? sampleText;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TypographyText, { ...rest, children: content });
  }
  function Headings({ color, lines = 0, sampleText, children, className, style }) {
    const text = children ?? sampleText ?? "Heading";
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: ["mimicus-typography-headings-demo", className].filter(Boolean).join(" "), style, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(TypographyTitle, { level, color, lines, children: [
      text,
      " \u2014 H",
      level
    ] }, level)) });
  }
  function TypographyRoot(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TypographyText, { ...props });
  }
  var Typography = Object.assign(TypographyRoot, {
    Text: TypographyText,
    Title: TypographyTitle,
    Paragraph: TypographyParagraph,
    Link: TypographyLink
  });

  // src/components/navigation/Navigation.tsx
  var import_react19 = __require("react");

  // src/nav/useNavBinding.ts
  var import_react18 = __require("react");

  // src/nav/paginationMath.ts
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

  // src/nav/controllers.ts
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
          const top = sec.offsetTop - offset - bounds;
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
    const backdrop2 = qs("[data-mimicus-drawer-backdrop]", root) ?? qs(".mimicus-drawer__backdrop", root);
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
      on(backdrop2, "click", close),
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
        const v = a.dataset.mimicusBottomAction ?? "";
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
    const r = root;
    const type = r?.dataset?.mimicusNav;
    r.__mimicusNavCleanup?.();
    const cleanup = (type ? BINDERS2[type]?.(r) : void 0) ?? (() => {
    });
    r.__mimicusNavCleanup = cleanup;
    return () => {
      cleanup();
      delete r.__mimicusNavCleanup;
    };
  }
  function mountNavigation(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-nav]", document) : [scope].filter((el) => el?.dataset?.mimicusNav);
    const cleanups = roots.map(bindNavComponent);
    return () => cleanups.forEach((fn) => fn());
  }

  // src/nav/useNavBinding.ts
  function useNavBinding(ref, type, deps = []) {
    (0, import_react18.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      el.dataset.mimicusNav = type;
      return bindNavComponent(el);
    }, deps);
  }

  // src/components/navigation/Navigation.tsx
  var import_jsx_runtime26 = __require("react/jsx-runtime");
  function cx3(...p) {
    return p.filter(Boolean).join(" ");
  }
  function AnchorLink({ href, title, children, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { ...rest, href, title: typeof title === "string" ? title : void 0, className: cx3("mimicus-anchor__link", className), "data-mimicus-anchor-link": true, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-anchor__link-title", children: children ?? title }) });
  }
  function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "anchor", [direction, affix, targetOffset, bounds, container]);
    const body = children ?? items?.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(AnchorLink, { href: it.href, title: it.title, children: it.title }, it.href ?? i));
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
        "data-mimicus-nav": "anchor",
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-anchor__list", children: body })
      }
    );
  }
  Anchor.Link = AnchorLink;
  function BreadcrumbItem({ href, children, className, ...rest }) {
    const inner = href ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("a", { href, className: "mimicus-breadcrumbs__link", ...rest, children }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-breadcrumbs__page", "aria-current": "page", ...rest, children });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { className: cx3("mimicus-breadcrumbs__item", className), children: inner });
  }
  function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }) {
    const nodes = children ?? items?.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(BreadcrumbItem, { href: it.href, children: it.label }, i));
    const list = (0, import_react19.useMemo)(() => import_react19.Children.toArray(nodes), [nodes]);
    const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
    const withSep = [];
    visible.forEach((node, i) => {
      if (i > 0) withSep.push(/* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { className: "mimicus-breadcrumbs__sep", "aria-hidden": true, children: separator }, `sep-${i}`));
      withSep.push(node);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("nav", { ...rest, "aria-label": "breadcrumb", className: cx3("mimicus-breadcrumbs", className), style, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("ol", { className: "mimicus-breadcrumbs__list", children: withSep }) });
  }
  Breadcrumbs.Item = BreadcrumbItem;
  var Breadcrumb = Breadcrumbs;
  function MenuItem({ itemKey, disabled, icon, children, className, ...rest }) {
    const dataKey = itemKey ?? rest["data-key"];
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { role: "none", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "button",
      {
        type: "button",
        role: "menuitem",
        disabled,
        "data-key": dataKey,
        "data-mimicus-menu-item": true,
        className: cx3("mimicus-menu__item", disabled && "is-disabled", className),
        ...rest,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-menu__icon", "aria-hidden": true, children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-menu__label", children })
        ]
      }
    ) });
  }
  function MenuDivider() {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("li", { role: "separator", className: "mimicus-menu__divider" });
  }
  function Menu({ mode = "vertical", selectable, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "menu", [mode]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "ul",
      {
        ref,
        role: "menu",
        ...rest,
        className: cx3("mimicus-menu", `mimicus-menu--${mode}`, selectable && "mimicus-menu--selectable", className),
        style,
        "data-mode": mode,
        "data-mimicus-nav": "menu",
        children
      }
    );
  }
  Menu.Item = MenuItem;
  Menu.Divider = MenuDivider;
  function Dropdown({ trigger, menu, placement = "bottomLeft", open, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "dropdown", [placement, open]);
    const body = children ?? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-dropdown__trigger", "data-mimicus-dropdown-trigger": true, children: trigger }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-dropdown__panel", "data-mimicus-dropdown-panel": true, role: "menu", children: menu })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-dropdown", `mimicus-dropdown--${placement}`, open && "is-open", className),
        style,
        "data-placement": placement,
        "data-open": open ? "true" : void 0,
        "data-mimicus-nav": "dropdown",
        children: body
      }
    );
  }
  function TabItem() {
    return null;
  }
  function normalizeTabItems(items, children) {
    if (items?.length) return items.map((it, i) => ({ key: it.key ?? it.tabKey ?? `tab-${i}`, label: it.label, disabled: it.disabled, icon: it.icon, content: it.children ?? it.content }));
    return import_react19.Children.map(children, (child, i) => {
      const node = child;
      if (!node?.props) return null;
      const p = node.props;
      return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
    })?.filter(Boolean) ?? [];
  }
  function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    const tabItems = normalizeTabItems(items, children);
    const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
    useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
    const tabs = [];
    const panels = [];
    tabItems.forEach((it) => {
      const k = it.key;
      const on2 = (activeKey ?? defaultKey) === k;
      tabs.push(
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "button",
          {
            type: "button",
            role: "tab",
            "data-mimicus-tab": k,
            "data-key": k,
            disabled: it.disabled,
            className: cx3("mimicus-tabs__tab", on2 && "is-active"),
            "aria-selected": on2 ? "true" : "false",
            children: [
              it.icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-tabs__icon", "aria-hidden": true, children: it.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-tabs__label", children: it.label })
            ]
          },
          `t-${k}`
        )
      );
      panels.push(
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "div",
          {
            role: "tabpanel",
            "data-mimicus-tab-panel": k,
            "data-key": k,
            className: cx3("mimicus-tabs__panel", on2 && "is-active"),
            hidden: !on2,
            children: it.content
          },
          `p-${k}`
        )
      );
    });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
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
        "data-mimicus-nav": "tabs",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-tabs__nav", role: "tablist", children: tabs }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-tabs__content", children: panels })
        ]
      }
    );
  }
  Tabs.Tab = TabItem;
  function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, simple, className, style, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "nav",
      {
        ref,
        ...rest,
        "aria-label": "pagination",
        className: cx3("mimicus-pagination", simple && "mimicus-pagination--simple", className),
        style,
        "data-count": count,
        "data-page": page,
        "data-default-page": defaultPage,
        "data-sibling-count": siblingCount,
        "data-boundary-count": boundaryCount,
        "data-mimicus-nav": "pagination",
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-pagination__list", "data-mimicus-pagination-list": true, role: "navigation" })
      }
    );
  }
  function Step({ title, description, status, icon, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { ...rest, className: cx3("mimicus-steps__item", status && `is-${status}`, className), "data-mimicus-step": true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-steps__icon", children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-steps__dot" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "mimicus-steps__content", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-steps__title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-steps__desc", children: description })
      ] })
    ] });
  }
  function Steps({ current = 0, direction = "horizontal", clickable, items, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "steps", [current, direction, clickable]);
    const body = children ?? items?.map((it, i) => {
      const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Step, { title: it.title, description: it.description, status: st, icon: it.icon }, i);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-steps", `mimicus-steps--${direction}`, className),
        style,
        "data-current": current,
        "data-direction": direction,
        "data-clickable": clickable ? "true" : void 0,
        "data-mimicus-nav": "steps",
        children: body
      }
    );
  }
  Steps.Step = Step;
  var Stepper = Steps;
  function Drawer({ open = false, placement = "right", width = 280, title, footer, className, style, children, onClose, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "drawer", [open, placement, width]);
    (0, import_react19.useEffect)(() => {
      const el = ref.current;
      if (!el || !onClose) return void 0;
      const fn = () => onClose();
      el.addEventListener("mimicus-drawer-close", fn);
      return () => el.removeEventListener("mimicus-drawer-close", fn);
    }, [onClose]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-drawer", `mimicus-drawer--${placement}`, open && "is-open", className),
        style: { ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width },
        "data-open": open ? "true" : "false",
        "data-placement": placement,
        "data-mimicus-nav": "drawer",
        "aria-hidden": open ? "false" : "true",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-drawer__backdrop", "data-mimicus-drawer-backdrop": true, "aria-hidden": true }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("aside", { className: "mimicus-drawer__panel", "data-mimicus-drawer-panel": true, role: "dialog", "aria-modal": "true", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("header", { className: "mimicus-drawer__header", children: [
              title,
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { type: "button", className: "mimicus-drawer__close", "data-mimicus-drawer-close": true, "aria-label": "Cerrar", children: "\xD7" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-drawer__body", children }),
            footer && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("footer", { className: "mimicus-drawer__footer", children: footer })
          ] })
        ]
      }
    );
  }
  function BottomNavigationAction({ value, label, icon, className, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "button",
      {
        type: "button",
        ...rest,
        className: cx3("mimicus-bottom-nav__action", className),
        "data-mimicus-bottom-action": value,
        "aria-label": typeof label === "string" ? label : void 0,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-bottom-nav__icon", "aria-hidden": true, children: icon }),
          label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-bottom-nav__label", children: label })
        ]
      }
    );
  }
  function BottomNavigation({ value, showLabels, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "bottom-nav", [value, showLabels]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "nav",
      {
        ref,
        ...rest,
        className: cx3("mimicus-bottom-nav", showLabels && "mimicus-bottom-nav--labels", className),
        style,
        "data-value": value,
        "data-show-labels": showLabels ? "true" : void 0,
        "data-mimicus-nav": "bottom-nav",
        children
      }
    );
  }
  BottomNavigation.Action = BottomNavigationAction;
  function NavLink({ href = "#", underline = "hover", color = "primary", className, style, children, disabled, component: Comp, ...rest }) {
    const Tag2 = Comp ?? "a";
    const props = Tag2 === "a" ? { href: disabled ? void 0 : href } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      Tag2,
      {
        ...rest,
        ...props,
        className: cx3("mimicus-nav-link", `mimicus-nav-link--underline-${underline}`, `mimicus-nav-link--${color}`, disabled && "is-disabled", className),
        style,
        "aria-disabled": disabled || void 0,
        children
      }
    );
  }
  var Link = NavLink;
  function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }) {
    const key = actionKey ?? rest.key;
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "button",
      {
        type: "button",
        ...rest,
        className: cx3("mimicus-speed-dial__action", className),
        "data-mimicus-speed-dial-action": key,
        title: typeof tooltip === "string" ? tooltip : void 0,
        "aria-label": typeof tooltip === "string" ? tooltip : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-speed-dial__action-icon", "aria-hidden": true, children: icon }),
          tooltip && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-speed-dial__tooltip", children: tooltip })
        ]
      }
    );
  }
  function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }) {
    const ref = (0, import_react19.useRef)(null);
    useNavBinding(ref, "speed-dial", [direction, open]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      "div",
      {
        ref,
        ...rest,
        className: cx3("mimicus-speed-dial", `mimicus-speed-dial--${direction}`, open && "is-open", className),
        style,
        "data-direction": direction,
        "data-mimicus-nav": "speed-dial",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mimicus-speed-dial__actions", role: "menu", children }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("button", { type: "button", className: "mimicus-speed-dial__trigger", "data-mimicus-speed-dial-trigger": true, "aria-label": ariaLabel, "aria-haspopup": "menu", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "mimicus-speed-dial__icon", "aria-hidden": true, children: icon ?? "+" }) })
        ]
      }
    );
  }
  SpeedDial.Action = SpeedDialAction;

  // src/forms/controllers.ts
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
        const on2 = vals.includes(b.dataset.mimicusToggle ?? "");
        b.classList.toggle("is-active", on2);
        b.setAttribute("aria-pressed", on2 ? "true" : "false");
      });
      root.dataset.value = exclusive ? vals[0] ?? "" : vals.join(",");
    };
    const initial3 = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
    setActive(exclusive ? initial3 ? [initial3] : [] : String(initial3).split(",").filter(Boolean));
    const cleanups = btns.map((b) => on(b, "click", () => {
      if (b.disabled) return;
      const v = b.dataset.mimicusToggle ?? "";
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
        const target = e.target;
        const item = target.closest("[data-mimicus-transfer-item]");
        if (item && !parseBool(root.dataset.disabled)) toggleSelect(item);
        const action = target.closest("[data-mimicus-transfer-action]")?.dataset.mimicusTransferAction;
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
        trigger.textContent = label?.trim() ?? "";
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
        const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
        show(m ? m[1] : "");
      }),
      ...qsa("[data-mimicus-mentions-option]", panel).map((opt) => on(opt, "click", () => {
        const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
        if (!m) return;
        const before = area.value.slice(0, m.index);
        const after = area.value.slice(area.selectionStart ?? 0);
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
    const clamp3 = (v) => Math.min(max(), Math.max(min(), v));
    const set = (v) => {
      input.value = String(clamp3(v));
      root.dataset.value = input.value;
      emit(root, "mimicus-input-number-change", { value: parseNum(input.value) });
    };
    const cleanups = [
      on(input, "change", () => set(parseNum(input.value, 0))),
      dec && on(dec, "click", () => set(parseNum(input.value, 0) - step())),
      inc && on(inc, "click", () => set(parseNum(input.value, 0) + step()))
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
    const r = root;
    const type = r?.dataset?.mimicusForm;
    r.__mimicusFormCleanup?.();
    const cleanup = (type ? BINDERS3[type]?.(r) : void 0) ?? (() => {
    });
    r.__mimicusFormCleanup = cleanup;
    return () => {
      cleanup();
      delete r.__mimicusFormCleanup;
    };
  }
  function mountForms(scope = document) {
    const roots = scope === document ? qsa("[data-mimicus-form]", document) : [scope].filter((el) => el?.dataset?.mimicusForm);
    return () => roots.map(bindFormComponent).forEach((fn) => fn());
  }

  // src/forms/useFormBinding.ts
  var import_react20 = __require("react");
  function useFormBinding(ref, type, deps = []) {
    (0, import_react20.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      el.dataset.mimicusForm = type;
      return bindFormComponent(el);
    }, deps);
  }

  // src/components/overlays/Overlays.tsx
  var import_react21 = __require("react");
  var import_jsx_runtime27 = __require("react/jsx-runtime");
  function cx4(...p) {
    return p.filter(Boolean).join(" ");
  }
  function Dialog({
    open = false,
    loading = false,
    notClose = false,
    lockViewportScroll = true,
    backeffect = "blur",
    _scope = "global",
    className,
    style,
    children,
    onCloseCancel,
    onClose,
    onClick,
    onMouseDown,
    ...rest
  }) {
    const ref = (0, import_react21.useRef)(null);
    const blockCloseClickRef = (0, import_react21.useRef)(false);
    const scope = _scope === "local" ? "local" : "global";
    const lockScroll = scope === "global" && lockViewportScroll;
    (0, import_react21.useEffect)(() => {
      const el = ref.current;
      if (!el) return void 0;
      const onDialogCancel = async (e) => {
        e.preventDefault();
        if (loading) return;
        if (notClose) {
          const force = await Promise.resolve(onCloseCancel?.(e));
          if (!force) return;
        }
        onClose?.();
      };
      el.addEventListener("cancel", onDialogCancel);
      if (open) {
        if (scope === "local") {
          if (!el.open) el.show();
        } else if (!el.open) el.showModal();
      } else if (el.open) el.close();
      return () => el.removeEventListener("cancel", onDialogCancel);
    }, [open, loading, notClose, onClose, onCloseCancel, scope]);
    (0, import_react21.useEffect)(() => {
      if (!open || !lockScroll) return void 0;
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }, [open, lockScroll]);
    const isBlockCloseClick = (target) => target instanceof HTMLElement && Boolean(target.closest(".blockCloseClick"));
    const handleMouseDown = (e) => {
      blockCloseClickRef.current = isBlockCloseClick(e.target);
      onMouseDown?.(e);
    };
    const isBackdropClick = (target) => {
      if (target === ref.current) return true;
      return target instanceof HTMLElement && target.classList.contains("mimicus-action-drawer__wrap");
    };
    const handleClick = async (e) => {
      onClick?.(e);
      if (loading) return;
      if (isBlockCloseClick(e.target) || blockCloseClickRef.current) {
        blockCloseClickRef.current = false;
        return;
      }
      if (!isBackdropClick(e.target)) return;
      if (notClose) {
        const force = await Promise.resolve(onCloseCancel?.(e.nativeEvent));
        if (!force) return;
      }
      onClose?.();
    };
    if (!open) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "dialog",
      {
        ref,
        ...rest,
        className: cx4("mimicus-dialog", "is-dialog", loading && "loading", lockScroll && "lockViewportScroll", className),
        style,
        "data-scope": scope,
        "data-backeffect": backeffect,
        onMouseDown: handleMouseDown,
        onClick: handleClick,
        children
      }
    );
  }
  function Modal({
    bshow,
    open,
    showCloseHeader = true,
    variant = "solid",
    title,
    loading,
    notClose,
    className,
    style,
    children,
    onClose,
    ...dialogProps
  }) {
    const isOpen = open ?? bshow ?? false;
    const close = (0, import_react21.useCallback)(() => onClose?.(), [onClose]);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Dialog, { ...dialogProps, open: isOpen, loading, notClose, className: cx4("is-modal", className), onClose: close, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Card, { variant, id: "modal-window", className: "blockCloseClick mimicus-modal__card", style: { padding: 0, border: "none", ...style }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mimicus-modal__layout", children: [
      (title || showCloseHeader) && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("header", { className: "mimicus-modal__header", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-modal__title", children: title }),
        showCloseHeader && !notClose && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", className: "mimicus-modal__close", "aria-label": "Cerrar", title: "Cerrar", disabled: loading || notClose, onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon: "mdi:close" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: cx4("mimicus-modal__content", loading && "loading"), children })
    ] }) }) });
  }
  var DRAWER_SIDE_ALIGN = {
    right: { justifyContent: "flex-end" },
    bottom: { alignItems: "flex-end" },
    left: { justifyContent: "flex-start" },
    top: { alignItems: "flex-start" }
  };
  function ActionDrawer({
    bshow,
    open,
    side = "right",
    className,
    style,
    children,
    onClose,
    ...dialogProps
  }) {
    const isOpen = open ?? bshow ?? false;
    const placement = side ?? "right";
    const close = (0, import_react21.useCallback)(() => onClose?.(), [onClose]);
    const isLR = placement === "left" || placement === "right";
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Dialog, { ...dialogProps, open: isOpen, className: cx4("is-action-drawer", className), onClose: close, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "div",
      {
        className: cx4("mimicus-action-drawer__wrap", `mimicus-action-drawer__wrap--${placement}`),
        style: { ...DRAWER_SIDE_ALIGN[placement], ...style },
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          Card,
          {
            variant: "solid",
            className: cx4("blockCloseClick", "mimicus-action-drawer__card", isLR ? "is-lr" : "is-tb"),
            style: { padding: 0, border: "none" },
            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-action-drawer__body", children })
          }
        )
      }
    ) });
  }
  function Loading({ bShow, bshow, open, color, className, style, children, onClose, ...dialogProps }) {
    const isOpen = open ?? bshow ?? bShow ?? false;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Dialog, { ...dialogProps, open: isOpen, loading: true, notClose: true, className: cx4("is-loading", className), onClose, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-loading__panel", style, "data-color": color ?? void 0, children: children ?? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-loading__spinner", "aria-hidden": true }) }) });
  }
  var toastListeners = /* @__PURE__ */ new Set();
  var toastItems = [];
  function emitToasts() {
    toastListeners.forEach((fn) => fn([...toastItems]));
  }
  function pushToast(message, kind, duration) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    toastItems = [...toastItems, { id, message, kind, duration }];
    emitToasts();
    if (duration > 0 && duration < 999999999) {
      window.setTimeout(() => toastRemove2(id), duration);
    }
    return id;
  }
  function toastSuccess(message, duration = 3e3) {
    return pushToast(message, "success", duration);
  }
  function toastError(message, duration = 5e3) {
    return pushToast(message, "error", duration);
  }
  function toastLoading(message, duration = 999999999) {
    return pushToast(message, "loading", duration);
  }
  function toastRemove2(id) {
    toastItems = toastItems.filter((t) => t.id !== id);
    emitToasts();
  }
  function Toaster() {
    const [items, setItems] = (0, import_react21.useState)([]);
    (0, import_react21.useEffect)(() => {
      toastListeners.add(setItems);
      setItems([...toastItems]);
      return () => {
        toastListeners.delete(setItems);
      };
    }, []);
    if (!items.length) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-toaster", "aria-live": "polite", children: items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cx4("mimicus-toast", `mimicus-toast--${t.kind}`), children: [
      t.kind === "loading" && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-toast__spinner", "aria-hidden": true }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: t.message }),
      t.kind !== "loading" && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", className: "mimicus-toast__close", "aria-label": "Cerrar", onClick: () => toastRemove2(t.id), children: "\xD7" })
    ] }, t.id)) });
  }
  var ALERT_ICONS = {
    error: "mdi:alert-circle",
    danger: "mdi:alert-circle",
    warning: "mdi:alert",
    success: "mdi:check-circle"
  };
  function Alert({ color = "info", title, inline, className, style, children, ...rest }) {
    const tone = color || "info";
    const surface = mergeSurfaceStyle(tone, { style });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "div",
      {
        ...rest,
        ...surface["data-surface-color"] ? { "data-surface-color": surface["data-surface-color"] } : {},
        className: cx4("mimicus-alert", `mimicus-alert--${tone}`, inline && "mimicus-alert--inline", className),
        style: surface.style,
        role: "alert",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon: ALERT_ICONS[tone] ?? "mdi:information", className: "mimicus-alert__icon", "aria-hidden": true }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mimicus-alert__content", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { className: "mimicus-alert__title", children: title }),
            children && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-alert__body", children })
          ] })
        ]
      }
    );
  }
  function TipInfo({ label, descripcion, kind = "info", trigger = "click", useModal = false, className, style }) {
    const [modalOpen, setModalOpen] = (0, import_react21.useState)(false);
    const icon = kind === "warn" ? "mdi:alert-circle-outline" : "mdi:information-outline";
    const triggerBtn = /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { type: "button", className: cx4("mimicus-tip-info__btn", `mimicus-tip-info__btn--${kind}`), "aria-label": "Ayuda", onClick: useModal ? () => setModalOpen(true) : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon }) });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: cx4("mimicus-tip-info", className), style, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-tip-info__label", children: label }),
      useModal ? triggerBtn : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tooltip, { title: descripcion, placement: "top", children: triggerBtn }),
      useModal && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Modal, { open: modalOpen, title: label ?? "Ayuda", onClose: () => setModalOpen(false), _scope: "global", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { style: { margin: 0 }, children: descripcion }) })
    ] });
  }
  function InvokedFloater({
    anchorLabel = "Abrir panel",
    panelText = "Contenido del floater",
    side = "bottom",
    align = "center",
    trigger = "click",
    className,
    style
  }) {
    const [open, setOpen] = (0, import_react21.useState)(false);
    const closeTimer = (0, import_react21.useRef)();
    const anchorRef = (0, import_react21.useRef)(null);
    (0, import_react21.useEffect)(() => {
      setOpen(trigger === "manual");
      return () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
      };
    }, [trigger]);
    const keepOpen = () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = void 0;
      }
    };
    const scheduleClose = () => {
      keepOpen();
      closeTimer.current = setTimeout(() => setOpen(false), 140);
    };
    const hoverWrapProps = trigger === "hover" ? { onMouseEnter: () => {
      keepOpen();
      setOpen(true);
    }, onMouseLeave: scheduleClose } : {};
    const anchorProps = trigger === "hover" ? {} : trigger === "contextmenu" ? { onContextMenu: (e) => {
      e.preventDefault();
      setOpen(true);
    } } : trigger === "manual" ? {} : { onClick: () => setOpen((v) => !v) };
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: cx4("mimicus-invoked-floater", open && "is-open", className), style, ...hoverWrapProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { ref: anchorRef, type: "button", className: cx4("mimicus-invoked-floater__anchor", open && "is-active"), ...anchorProps, children: anchorLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cx4("mimicus-invoked-floater__panel", open && "is-visible", `is-${side}`, `align-${align}`), role: "dialog", "aria-hidden": !open, children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-invoked-floater__caret", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mimicus-invoked-floater__panel-inner", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "mimicus-invoked-floater__panel-text", children: panelText }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mimicus-invoked-floater__panel-foot", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Button, { variant: "text", onClick: () => setOpen(false), children: "Cerrar" }) })
        ] })
      ] })
    ] });
  }
  function FloatingComponent({
    showfloat = false,
    rowText = "Fila de ejemplo",
    horizontal = "right",
    vertical = "center",
    className,
    style
  }) {
    const [hover, setHover] = (0, import_react21.useState)(false);
    const visible = showfloat || hover;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "div",
      {
        className: cx4("mimicus-floating-component", showfloat && "is-pinned", visible && "is-active", className),
        style,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mimicus-floating-component__row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-floating-component__row-text", children: rowText }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mimicus-floating-component__row-hint", "aria-hidden": visible, children: "Acciones" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cx4("mimicus-floating-component__panel", visible && "is-visible", `h-${horizontal}`, `v-${vertical}`), "aria-hidden": !visible, children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tooltip, { title: "Editar", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(IconButton, { variant: "text", icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon: "mdi:pencil-outline" }), "aria-label": "Editar", tabIndex: visible ? 0 : -1 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tooltip, { title: "Eliminar", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(IconButton, { variant: "text", color: "danger", icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Icon, { icon: "mdi:delete-outline" }), "aria-label": "Eliminar", tabIndex: visible ? 0 : -1 }) })
          ] })
        ]
      }
    );
  }

  // src/components/forms/Forms.tsx
  var import_react22 = __require("react");
  var import_jsx_runtime28 = __require("react/jsx-runtime");
  function cx5(...p) {
    return p.filter(Boolean).join(" ");
  }
  function useCtrl(value, defaultValue, onChange) {
    const [inner, setInner] = (0, import_react22.useState)(defaultValue);
    const v = value ?? inner;
    const set = (next) => {
      if (value === void 0) setInner(next);
      onChange?.(next);
    };
    return [v, set];
  }
  function FormItem({ label, required, help, error: error2, children, className, layout = "vertical", ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { ...rest, className: cx5("mimicus-form-item", `mimicus-form-item--${layout}`, error2 && "has-error", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: "mimicus-form-item__label", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-form-item__req", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-form-item__control", children }),
      (help || error2) && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-form-item__extra", children: error2 ?? help })
    ] });
  }
  function Form({ layout = "vertical", className, style, children, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("form", { ...rest, className: cx5("mimicus-form", `mimicus-form--${layout}`, className), style, onSubmit: (e) => e.preventDefault(), children });
  }
  Form.Item = FormItem;
  function Input({
    value,
    defaultValue,
    onChange,
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
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: cx5("mimicus-input", status && `is-${status}`, disabled && "is-disabled", className), style, children: [
      prefix && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-input__affix mimicus-input__prefix", children: prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      ),
      allowClear && val && !disabled && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-input__clear", "aria-label": "Limpiar", onClick: () => set(""), children: "\xD7" }),
      suffix && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-input__affix mimicus-input__suffix", children: suffix })
    ] });
  }
  var TextField = Input;
  function TextArea({ value, defaultValue, onChange, rows = 4, autoSize, className, style, ...rest }) {
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "textarea",
      {
        ...rest,
        rows,
        className: cx5("mimicus-textarea", autoSize && "mimicus-textarea--autosize", className),
        style,
        value: val ?? "",
        onChange: (e) => set(e.target.value)
      }
    );
  }
  function InputNumber({ value, defaultValue = 0, onChange, min, max, step = 1, disabled, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "input-number", [min, max, step, val]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "span",
      {
        ref,
        className: cx5("mimicus-input-number", disabled && "is-disabled", className),
        style,
        "data-min": min,
        "data-max": max,
        "data-step": step,
        "data-value": val,
        "data-mimicus-form": "input-number",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-dec": true, disabled, tabIndex: -1, children: "\u2212" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-inc": true, disabled, tabIndex: -1, children: "+" })
        ]
      }
    );
  }
  function Checkbox({
    checked,
    defaultChecked = false,
    onChange,
    indeterminate,
    disabled,
    loading,
    children,
    className,
    style,
    ...rest
  }) {
    const [on2, set] = useCtrl(checked, defaultChecked, onChange);
    const id = (0, import_react22.useId)();
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: cx5("mimicus-checkbox", on2 && "is-checked", indeterminate && "is-indeterminate", disabled && "is-disabled", loading && "is-loading", className), style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      ),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-checkbox__box", "aria-hidden": true }),
      children != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-checkbox__label", children })
    ] });
  }
  function resolveIconNode(icon) {
    if (icon == null || icon === "") return null;
    if (typeof icon === "string") return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("iconify-icon", { icon });
    return icon;
  }
  function CheckboxIcon({ checked, defaultChecked, onChange, disabled, loading, color, variant, children, icon, iconChecked, iconUnchecked, colorChecked, colorUnchecked, className, ...rest }) {
    const surface = mergeSurfaceStyle(color, { variant: variant ?? "solid" });
    const [on2, set] = useCtrl(checked, defaultChecked ?? false, onChange);
    const id = (0, import_react22.useId)();
    const onNode = resolveIconNode(iconChecked ?? icon) ?? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("iconify-icon", { icon: "mdi:check" });
    const offNode = resolveIconNode(iconUnchecked) ?? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("iconify-icon", { icon: "mdi:circle-outline" });
    const activeNode = on2 ? onNode : offNode;
    const fgVar = on2 ? "--cb-on-fg" : "--cb-off-fg";
    const fgValue = on2 ? colorChecked : colorUnchecked;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "label",
      {
        className: cx5("mimicus-checkbox", "mimicus-checkbox--icon", variant === "glass" && "mimicus-checkbox--glass", on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className),
        style: { ...surface.style, "--cb-on-fg": colorChecked || void 0, "--cb-off-fg": colorUnchecked || void 0 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: cx5("mimicus-checkbox__icon-box", on2 && "is-on"), style: fgValue ? { [fgVar]: fgValue } : void 0, "aria-hidden": true, children: activeNode }),
          children != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-checkbox__label", children })
        ]
      }
    );
  }
  function CheckboxChip({ value, options, onChange, className, style }) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ToggleButtonGroup, { exclusive: true, value, onChange, className: cx5("mimicus-checkbox-chip", className), style, children: options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ToggleButton, { value: opt.value, icon: opt.icon, children: opt.label ?? opt.value }, opt.value)) });
  }
  function resolveIcon(icon) {
    if (icon == null || icon === "") return null;
    if (typeof icon === "string") return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("iconify-icon", { icon });
    return icon;
  }
  function Switch({ checked, defaultChecked = false, onChange, disabled, loading, icon, iconOn, iconOff, colorOn, colorOff, children, className, style, ...rest }) {
    const [on2, set] = useCtrl(checked, defaultChecked, onChange);
    const activeIcon = resolveIcon(iconOn ?? icon ?? "mdi:toggle-switch");
    const offIcon = resolveIcon(iconOff ?? icon ?? "mdi:toggle-switch-outline");
    const activeNode = on2 ? activeIcon : offIcon;
    const fgVar = on2 ? "--sw-on-fg" : "--sw-off-fg";
    const fgValue = on2 ? colorOn : colorOff;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: cx5("mimicus-switch", on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className), style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      ),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "span",
        {
          className: cx5("mimicus-switch__icon-box", on2 && "is-on"),
          style: fgValue ? { [fgVar]: fgValue } : void 0,
          "aria-hidden": true,
          children: activeNode
        }
      ),
      children != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-switch__label", children })
    ] });
  }
  function LabeledSwitch({ label, checked, defaultChecked, onChange, readonly, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FormItem, { label, layout: "horizontal", className: "mimicus-labeled-switch", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Switch, { checked, defaultChecked, onChange, disabled: readonly, ...rest }) });
  }
  function Radio({ value, checked, defaultChecked, onChange, disabled, children, className, name, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: cx5("mimicus-radio", checked && "is-checked", disabled && "is-disabled", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
      ),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-radio__dot", "aria-hidden": true }),
      children != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-radio__label", children })
    ] });
  }
  function RadioGroup({ value, defaultValue, onChange, name, direction = "horizontal", options, children, className, style, ...rest }) {
    const groupName = (0, import_react22.useId)();
    const [val, set] = useCtrl(value, defaultValue, onChange);
    const resolvedName = name ?? groupName;
    const body = children ?? options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      Radio,
      {
        name: resolvedName,
        value: opt.value,
        checked: val === opt.value,
        disabled: opt.disabled,
        onChange: () => set(opt.value),
        children: opt.label
      },
      opt.value
    ));
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { ...rest, role: "radiogroup", className: cx5("mimicus-radio-group", `mimicus-radio-group--${direction}`, className), style, "data-value": val, children: body });
  }
  function Slider({ value, defaultValue = 0, onChange, min = 0, max = 100, step = 1, disabled, vertical, className, style, showValue, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "slider", [min, max, step]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "div",
      {
        ref,
        ...rest,
        className: cx5("mimicus-slider", vertical && "mimicus-slider--vertical", disabled && "is-disabled", className),
        style,
        "data-value": val,
        "data-mimicus-form": "slider",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-slider__rail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-slider__fill", "data-mimicus-slider-fill": true }) }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
          showValue && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-slider__value", "data-mimicus-slider-value": true, children: val })
        ]
      }
    );
  }
  function Rate({ value, defaultValue = 0, onChange, count = 5, allowHalf, allowClear = true, disabled, character = "\u2605", className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue, onChange);
    useFormBinding(ref, "rate", [count, allowHalf, allowClear, val, disabled]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        ref,
        ...rest,
        role: "radiogroup",
        className: cx5("mimicus-rate", disabled && "is-disabled", className),
        style,
        "data-count": count,
        "data-value": val,
        "data-default-value": defaultValue,
        "data-allow-half": allowHalf ? "true" : void 0,
        "data-allow-clear": allowClear ? "true" : "false",
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "rate",
        children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-rate__star", "data-mimicus-rate-star": i + 1, disabled, "aria-label": `${i + 1} estrellas`, children: character }, i))
      }
    );
  }
  var Rating = Rate;
  function Select({ value, defaultValue, onChange, options, placeholder, disabled, size = "medium", className, style, children, ...rest }) {
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    const [open, setOpen] = (0, import_react22.useState)(false);
    const rootRef = (0, import_react22.useRef)(null);
    const dialogRef = (0, import_react22.useRef)(null);
    const triggerRef = (0, import_react22.useRef)(null);
    const refocusTriggerAfterPickRef = (0, import_react22.useRef)(false);
    const pickOption = (next) => {
      refocusTriggerAfterPickRef.current = true;
      set(next);
      setOpen(false);
    };
    const isStructured = Array.isArray(options) && options.every((o) => o && typeof o === "object" && "value" in o);
    const items = isStructured ? options : [];
    const current = items.find((o) => String(o.value) === String(val));
    const fallbackLabel = children ? void 0 : items.find((o) => String(o.value) === String(val))?.label;
    const enabledItems = items.filter((o) => !o.disabled);
    const stepSelect = (dir) => {
      if (!enabledItems.length) return;
      const i = enabledItems.findIndex((o) => String(o.value) === String(val));
      const nextIdx = i < 0 ? dir === 1 ? 0 : enabledItems.length - 1 : (i + dir + enabledItems.length) % enabledItems.length;
      set(enabledItems[nextIdx].value);
    };
    const onSelectKeyStep = (e) => {
      if (disabled) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        stepSelect(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        stepSelect(-1);
      } else if (e.key === "Enter" && open) {
        e.preventDefault();
        pickOption(String(val ?? ""));
      }
    };
    (0, import_react22.useLayoutEffect)(() => {
      if (!open) return;
      const dlg = dialogRef.current;
      const trg = triggerRef.current;
      if (!dlg || !trg) return;
      const place = () => {
        const r = trg.getBoundingClientRect();
        const w = Math.round(r.width);
        const left = Math.round(r.left);
        const top = Math.round(r.bottom) - 1;
        const maxLeft = window.innerWidth - w - 8;
        const x = `${Math.max(8, Math.min(left, maxLeft))}px`;
        dlg.style.setProperty("--mimicus-select-w", `${w}px`);
        dlg.style.setProperty("--mimicus-select-left", x);
        dlg.style.setProperty("--mimicus-select-top", `${top}px`);
        const panel = dlg.querySelector(".mimicus-select__panel");
        if (rootRef.current) dlg.style.fontSize = getComputedStyle(rootRef.current).fontSize;
        if (panel) {
          panel.style.width = `${w}px`;
          panel.style.minWidth = `${w}px`;
          panel.style.maxWidth = `${w}px`;
          panel.style.left = x;
          panel.style.top = `${top}px`;
        }
      };
      place();
      const raf = requestAnimationFrame(place);
      window.addEventListener("resize", place);
      window.addEventListener("scroll", place, true);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", place);
        window.removeEventListener("scroll", place, true);
      };
    }, [open]);
    (0, import_react22.useEffect)(() => {
      const dlg = dialogRef.current;
      if (!dlg) return;
      if (open) {
        if (!dlg.open) dlg.showModal();
      } else if (dlg.open) {
        dlg.close();
      }
    }, [open]);
    (0, import_react22.useEffect)(() => {
      if (open || !refocusTriggerAfterPickRef.current) return;
      refocusTriggerAfterPickRef.current = false;
      const btn = triggerRef.current;
      if (!btn) return;
      requestAnimationFrame(() => btn.focus());
    }, [open, val]);
    (0, import_react22.useEffect)(() => {
      if (!open) return;
      function onKey(e) {
        if (e.key === "Escape") setOpen(false);
      }
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [open]);
    if (!isStructured) {
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: cx5("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", className), style, children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("select", { ...rest, className: "mimicus-select__native", value: val ?? "", disabled, onChange: (e) => set(e.target.value), children: [
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: "", children: placeholder }),
          children ?? options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__arrow", "aria-hidden": true, children: "\u25BE" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "span",
      {
        ref: rootRef,
        className: cx5("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", open && "is-open", className),
        style,
        "data-value": val ?? "",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
            "button",
            {
              ref: triggerRef,
              type: "button",
              className: "mimicus-select__trigger",
              disabled,
              "aria-haspopup": "dialog",
              "aria-expanded": open,
              onClick: () => !disabled && setOpen((o) => !o),
              onKeyDown: onSelectKeyStep,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: "mimicus-select__value", children: [
                  current?.icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__icon", "aria-hidden": true, children: current.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__label", children: current?.label ?? placeholder ?? "" }),
                  current?.suffix && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__suffix", children: current.suffix })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__arrow", "aria-hidden": true, children: "\u25BE" })
              ]
            }
          ),
          open && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "dialog",
            {
              ref: dialogRef,
              className: "mimicus-select__dialog",
              "data-mimicus-select-dialog": true,
              onClose: () => setOpen(false),
              onCancel: (e) => {
                e.preventDefault();
                setOpen(false);
              },
              onKeyDown: onSelectKeyStep,
              onClick: (e) => {
                const panel = dialogRef.current?.querySelector(".mimicus-select__panel");
                if (panel && !panel.contains(e.target)) setOpen(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("ul", { role: "listbox", className: "mimicus-select__panel", "data-mimicus-select-panel": true, onClick: (e) => e.stopPropagation(), children: [
                placeholder && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { role: "option", "aria-selected": !val, className: cx5("mimicus-select__option", !val && "is-selected"), onClick: () => pickOption(""), children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__label", children: placeholder }) }),
                items.map((opt) => {
                  const selected = String(opt.value) === String(val);
                  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
                    "li",
                    {
                      role: "option",
                      "aria-selected": selected,
                      "aria-disabled": opt.disabled,
                      className: cx5("mimicus-select__option", selected && "is-selected", opt.disabled && "is-disabled"),
                      onClick: () => {
                        if (!opt.disabled) pickOption(String(opt.value));
                      },
                      children: [
                        opt.icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__icon", "aria-hidden": true, children: opt.icon }),
                        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__label", children: opt.label ?? opt.value }),
                        opt.suffix && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-select__suffix", children: opt.suffix })
                      ]
                    },
                    String(opt.value)
                  );
                })
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("select", { ...rest, tabIndex: -1, "aria-hidden": true, className: "mimicus-select__native mimicus-select__native--sr", value: val ?? "", disabled, onChange: (e) => set(e.target.value), children: items.map((o) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("option", { value: String(o.value), children: typeof fallbackLabel === "string" ? fallbackLabel : "" }, String(o.value))) })
        ]
      }
    );
  }
  function AutoComplete({ options = [], value, defaultValue, onChange, onSelect, placeholder, disabled, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    useFormBinding(ref, "autocomplete", [options.length]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { ref, className: cx5("mimicus-autocomplete", disabled && "is-disabled", className), style, "data-mimicus-form": "autocomplete", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Input, { ...rest, value: val, onChange: set, placeholder, disabled }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-autocomplete__panel", "data-mimicus-autocomplete-panel": true, role: "listbox", hidden: true, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "button",
        {
          type: "button",
          role: "option",
          className: "mimicus-autocomplete__option",
          "data-mimicus-autocomplete-option": true,
          "data-value": opt.value ?? opt,
          onClick: () => {
            set(opt.value ?? opt);
            onSelect?.(opt.value ?? opt);
          },
          children: opt.label ?? opt
        },
        opt.value ?? opt
      )) })
    ] });
  }
  function ToggleButton({ value, selected, onChange, disabled, children, icon, className, ...rest }) {
    const on2 = selected ?? rest["aria-pressed"] === "true";
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "button",
      {
        ...rest,
        type: "button",
        className: cx5("mimicus-toggle-btn", on2 && "is-active", className),
        "data-mimicus-toggle": value,
        "aria-pressed": on2 ? "true" : "false",
        disabled,
        onClick: () => onChange?.(!on2),
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-toggle-btn__icon", "aria-hidden": true, children: icon }),
          children
        ]
      }
    );
  }
  function ToggleButtonGroup({ value, defaultValue, onChange, exclusive = true, orientation = "horizontal", children, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue ?? (exclusive ? "" : []), onChange);
    const normalized = exclusive ? val : Array.isArray(val) ? val.join(",") : val;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        ref,
        ...rest,
        role: "group",
        className: cx5("mimicus-toggle-group", `mimicus-toggle-group--${orientation}`, className),
        style,
        "data-exclusive": exclusive ? "true" : "false",
        "data-value": normalized,
        "data-mimicus-form": "toggle-group",
        children: import_react22.Children.map(children, (child) => {
          const node = child;
          if (!node?.props) return child;
          const v = node.props.value;
          const active = exclusive ? val === v : Array.isArray(val) ? val.includes(v) : String(val).split(",").includes(v);
          return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ToggleButton, { ...node.props, selected: active, onChange: () => {
            if (exclusive) set(v);
            else {
              const arr = Array.isArray(val) ? [...val] : String(val || "").split(",").filter(Boolean);
              set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
            }
          } });
        })
      }
    );
  }
  function Transfer({ dataSource, targetKeys, onChange, titles = ["Origen", "Destino"], disabled, className, style }) {
    const ref = (0, import_react22.useRef)(null);
    const left = (dataSource ?? []).filter((d) => !(targetKeys ?? []).includes(d.key));
    const right = (dataSource ?? []).filter((d) => (targetKeys ?? []).includes(d.key));
    useFormBinding(ref, "transfer", [left.length, right.length, disabled]);
    const Item = ({ item }) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { className: "mimicus-transfer__item", "data-mimicus-transfer-item": true, "data-key": item.key, children: item.title });
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "div",
      {
        ref,
        className: cx5("mimicus-transfer", disabled && "is-disabled", className),
        style,
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "transfer",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mimicus-transfer__panel", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-transfer__title", children: titles[0] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-left": true, children: left.map((item) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Item, { item }, item.key)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mimicus-transfer__actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toRight", children: "\u203A" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toLeft", children: "\u2039" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mimicus-transfer__panel", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-transfer__title", children: titles[1] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-right": true, children: right.map((item) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Item, { item }, item.key)) })
          ] })
        ]
      }
    );
  }
  var TransferList = Transfer;
  function TransferBoard({ stackCount = 3, stackWidth = 248, disabled, itemsPerStack = 3, className, style }) {
    const ref = (0, import_react22.useRef)(null);
    useFormBinding(ref, "transfer-board", [stackCount, stackWidth, disabled, itemsPerStack]);
    const stacks = Array.from({ length: stackCount }, (_, s) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mimicus-transfer-board__stack", "data-mimicus-transfer-stack": true, style: { width: stackWidth }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "mimicus-transfer-board__stack-title", children: [
        "Stack ",
        s + 1
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-transfer-board__list", "data-mimicus-transfer-list": true, children: Array.from({ length: itemsPerStack }, (_2, i) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("li", { className: "mimicus-transfer-board__card", "data-mimicus-transfer-item": true, draggable: !disabled, children: [
        "Tarjeta ",
        s * itemsPerStack + i + 1
      ] }, i)) })
    ] }, s));
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        ref,
        className: cx5("mimicus-transfer-board", disabled && "is-disabled", className),
        style,
        "data-disabled": disabled ? "true" : void 0,
        "data-mimicus-form": "transfer-board",
        children: stacks
      }
    );
  }
  function Upload({ accept, multiple, disabled, children, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    useFormBinding(ref, "upload", [accept, multiple]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { ref, className: cx5("mimicus-upload", disabled && "is-disabled", className), style, "data-mimicus-form": "upload", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "mimicus-upload__trigger", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("input", { ...rest, type: "file", className: "mimicus-upload__native", accept, multiple, disabled }),
        children ?? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-upload__btn", children: "Subir archivo" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-upload__list", "data-mimicus-upload-list": true })
    ] });
  }
  function ColorPicker({ value = "#1677ff", defaultValue, onChange, disabled, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue ?? "#1677ff", onChange);
    useFormBinding(ref, "color-picker", [val]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "div",
      {
        ref,
        className: cx5("mimicus-color-picker", disabled && "is-disabled", className),
        style,
        "data-value": val,
        "data-mimicus-form": "color-picker",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-color-picker__swatch", "data-mimicus-color-swatch": true, style: { background: val } }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("input", { ...rest, type: "color", value: val, disabled, onChange: (e) => set(e.target.value) }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("code", { className: "mimicus-color-picker__hex", "data-mimicus-color-hex": true, children: val })
        ]
      }
    );
  }
  function DatePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Input, { ...rest, type: "date", className: cx5("mimicus-date-picker", className), style, value: val, disabled, onChange: set });
  }
  function TimePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Input, { ...rest, type: "time", className: cx5("mimicus-time-picker", className), style, value: val, disabled, onChange: set });
  }
  function Cascader({ options = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
    const ref = (0, import_react22.useRef)(null);
    useFormBinding(ref, "cascader", [options.length]);
    const flat = options.flatMap((o) => o.children ? o.children.map((c) => ({ ...c, parent: o.label })) : [o]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { ref, className: cx5("mimicus-cascader", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "cascader", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-cascader__trigger", "data-mimicus-cascader-trigger": true, disabled, children: placeholder }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-cascader__panel", "data-mimicus-cascader-panel": true, hidden: true, children: flat.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "button",
        {
          type: "button",
          className: "mimicus-cascader__option",
          "data-mimicus-cascader-option": true,
          "data-value": opt.value,
          "data-label": opt.parent ? `${opt.parent} / ${opt.label}` : opt.label,
          onClick: () => onChange?.(opt.value),
          children: opt.parent ? `${opt.parent} / ${opt.label}` : opt.label
        },
        opt.value
      )) })
    ] });
  }
  function TreeSelect({ treeData = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
    const ref = (0, import_react22.useRef)(null);
    useFormBinding(ref, "tree-select", [treeData.length]);
    const Node = ({ node, depth = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("li", { className: "mimicus-tree-select__node", "data-mimicus-tree-node": true, "data-value": node.value, "data-label": node.title, style: { paddingLeft: `${depth * 0.75}rem` }, children: [
      node.children?.length ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-tree-select__toggle", "data-mimicus-tree-toggle": true, children: "\u25B8" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-tree-select__spacer" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mimicus-tree-select__label", children: node.title }),
      node.children?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-tree-select__children", "data-mimicus-tree-children": true, hidden: true, children: node.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Node, { node: c, depth: depth + 1 }, c.value ?? c.title)) })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { ref, className: cx5("mimicus-tree-select", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "tree-select", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("button", { type: "button", className: "mimicus-tree-select__trigger", "data-mimicus-tree-trigger": true, disabled, children: placeholder }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-tree-select__panel", "data-mimicus-tree-panel": true, hidden: true, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("ul", { className: "mimicus-tree-select__tree", children: treeData.map((n) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Node, { node: n }, n.value ?? n.title)) }) })
    ] });
  }
  function Mentions({ options = [], value, defaultValue, onChange, rows = 3, placeholder, disabled, className, style, ...rest }) {
    const ref = (0, import_react22.useRef)(null);
    const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
    useFormBinding(ref, "mentions", [options.length]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { ref, className: cx5("mimicus-mentions", disabled && "is-disabled", className), style, "data-mimicus-form": "mentions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TextArea, { ...rest, rows, value: val, onChange: set, placeholder: placeholder ?? "Escribe @ para mencionar", disabled }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mimicus-mentions__panel", "data-mimicus-mentions-panel": true, hidden: true, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("button", { type: "button", className: "mimicus-mentions__option", "data-mimicus-mentions-option": true, "data-value": opt.value ?? opt, children: [
        "@",
        opt.label ?? opt
      ] }, opt.value ?? opt)) })
    ] });
  }

  // src/datagrid/react/DataGrid.tsx
  var import_react28 = __require("react");

  // src/datagrid/core/valueFormatter.ts
  function getCellValue(col, node) {
    const def = col.def;
    if (typeof def.valueGetter === "function") return def.valueGetter(node.data);
    return node.data[col.field];
  }
  function formatCellValue(col, value, node) {
    const def = col.def;
    if (typeof def.valueFormatter === "function") return def.valueFormatter(value, node.data);
    if (value == null) return "";
    if (col.type === "number" && typeof value === "number") return String(value);
    if (col.type === "boolean") return value ? "\u2713" : "";
    if (col.type === "date") {
      const d = value instanceof Date ? value : new Date(String(value));
      return Number.isNaN(d.getTime()) ? String(value) : d.toISOString().slice(0, 10);
    }
    return String(value);
  }
  function cellText(col, node) {
    return formatCellValue(col, getCellValue(col, node), node);
  }
  function formatValue(col, value) {
    const def = col.def;
    if (typeof def.valueFormatter === "function") return def.valueFormatter(value, {});
    if (value == null || value === "") return "";
    if (col.type === "boolean") return value ? "\u2713" : "\u2014";
    if (col.type === "date") {
      const d = value instanceof Date ? value : new Date(String(value));
      return Number.isNaN(d.getTime()) ? String(value) : d.toISOString().slice(0, 10);
    }
    return String(value);
  }

  // src/datagrid/core/columnState.ts
  var DEFAULT_WIDTH = 160;
  var DEFAULT_MIN = 60;
  var DEFAULT_MAX = 2e3;
  function filterTypeOf(def) {
    if (def.filter === false || def.filter == null) return def.filter === void 0 ? defaultFilterFor(def) : null;
    if (def.filter === true) return defaultFilterFor(def) ?? "text";
    return def.filter;
  }
  function defaultFilterFor(def) {
    if (def.type === "number") return "number";
    if (def.type === "date") return "date";
    return "text";
  }
  function resolveColumns2(defs, defaultColWidth = DEFAULT_WIDTH) {
    return defs.map((def, i) => ({
      colId: def.colId ?? def.field ?? `col-${i}`,
      field: def.field,
      headerName: def.headerName ?? def.field,
      type: def.type ?? "text",
      width: def.width ?? defaultColWidth,
      minWidth: def.minWidth ?? DEFAULT_MIN,
      maxWidth: def.maxWidth ?? DEFAULT_MAX,
      flex: def.flex,
      sortable: def.sortable !== false,
      resizable: def.resizable !== false,
      filterType: def.filter === false ? null : filterTypeOf(def),
      pinned: def.pinned ?? null,
      hide: def.hide === true,
      align: def.align ?? (def.type === "number" ? "right" : "left"),
      enableRowGroup: def.enableRowGroup !== false,
      aggFunc: def.aggFunc ?? null,
      checkboxSelection: def.checkboxSelection === true,
      def
    }));
  }
  var clamp2 = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  function setColumnWidth(cols, colId, width) {
    return cols.map((c) => c.colId === colId ? { ...c, width: clamp2(Math.round(width), c.minWidth, c.maxWidth), flex: void 0 } : c);
  }
  function setColumnPinned(cols, colId, pinned) {
    return cols.map((c) => c.colId === colId ? { ...c, pinned } : c);
  }
  function setColumnHidden(cols, colId, hide) {
    return cols.map((c) => c.colId === colId ? { ...c, hide } : c);
  }
  function moveColumn(cols, colId, toIndex) {
    const from = cols.findIndex((c) => c.colId === colId);
    if (from < 0) return cols;
    const next = cols.slice();
    const [moved] = next.splice(from, 1);
    if (moved) next.splice(clamp2(toIndex, 0, next.length), 0, moved);
    return next;
  }
  function autosizeColumn(cols, colId, rows, charPx = 7.4, padding = 28) {
    const col = cols.find((c) => c.colId === colId);
    if (!col) return cols;
    let max = col.headerName.length;
    for (const node of rows) max = Math.max(max, cellText(col, node).length);
    const width = clamp2(Math.round(max * charPx + padding), col.minWidth, col.maxWidth);
    return setColumnWidth(cols, colId, width);
  }
  function orderedForLayout(cols) {
    const visible = cols.filter((c) => !c.hide);
    return {
      left: visible.filter((c) => c.pinned === "left"),
      center: visible.filter((c) => !c.pinned),
      right: visible.filter((c) => c.pinned === "right")
    };
  }

  // src/datagrid/core/viewport.ts
  function rowWindow(rowCount, rowHeight, scrollTop, viewportHeight, overscan = 6) {
    const totalHeight = rowCount * rowHeight;
    if (rowCount === 0 || rowHeight <= 0) return { startIndex: 0, endIndex: 0, topPad: 0, totalHeight };
    const first = Math.floor(scrollTop / rowHeight);
    const visible = Math.ceil(viewportHeight / rowHeight);
    const startIndex = Math.max(0, first - overscan);
    const endIndex = Math.min(rowCount, first + visible + overscan);
    return { startIndex, endIndex, topPad: startIndex * rowHeight, totalHeight };
  }
  function columnLayout(center, left, right) {
    const positions = [];
    let x = 0;
    for (const c of center) {
      positions.push(x);
      x += c.width;
    }
    const totalWidth = x;
    const leftWidth = left.reduce((s, c) => s + c.width, 0);
    const rightWidth = right.reduce((s, c) => s + c.width, 0);
    return { positions, totalWidth, leftWidth, rightWidth };
  }
  function colWindow(layout, scrollLeft, viewportWidth, overscan = 2) {
    const { positions, totalWidth } = layout;
    if (!positions.length) return { start: 0, end: 0 };
    let start = 0;
    while (start < positions.length - 1 && positions[start + 1] <= scrollLeft) start++;
    let end = start;
    const right = scrollLeft + viewportWidth;
    while (end < positions.length && positions[end] < right) end++;
    void totalWidth;
    return { start: Math.max(0, start - overscan), end: Math.min(positions.length, end + overscan) };
  }
  function applyFlex(cols, availableWidth) {
    const flexCols = cols.filter((c) => !c.hide && c.flex && c.flex > 0);
    if (!flexCols.length) return cols;
    const fixed = cols.filter((c) => !c.hide && !(c.flex && c.flex > 0)).reduce((s, c) => s + c.width, 0);
    const totalFlex = flexCols.reduce((s, c) => s + (c.flex ?? 0), 0);
    const remaining = Math.max(0, availableWidth - fixed);
    return cols.map((c) => {
      if (!c.flex || c.flex <= 0 || c.hide) return c;
      const w = Math.max(c.minWidth, Math.min(c.maxWidth, Math.round(remaining * c.flex / totalFlex)));
      return { ...c, width: w };
    });
  }

  // src/datagrid/core/selection.ts
  function toggleRowSelection(selection, rowId, mode, opts = {}) {
    if (mode === "none") return selection;
    if (mode === "single") {
      const next2 = /* @__PURE__ */ new Set();
      if (!selection.has(rowId)) next2.add(rowId);
      return next2;
    }
    const next = new Set(selection);
    if (opts.range && opts.rangeFrom && opts.orderedIds) {
      const a = opts.orderedIds.indexOf(opts.rangeFrom);
      const b = opts.orderedIds.indexOf(rowId);
      if (a >= 0 && b >= 0) {
        const [lo, hi] = a < b ? [a, b] : [b, a];
        for (let i = lo; i <= hi; i++) {
          const id = opts.orderedIds[i];
          if (id) next.add(id);
        }
        return next;
      }
    }
    if (!opts.additive && !opts.range) {
      if (next.has(rowId) && next.size === 1) {
        next.delete(rowId);
        return next;
      }
      next.clear();
      next.add(rowId);
      return next;
    }
    if (next.has(rowId)) next.delete(rowId);
    else next.add(rowId);
    return next;
  }
  function selectAll(rows) {
    return new Set(rows.map((r) => r.id));
  }
  function clearSelection() {
    return /* @__PURE__ */ new Set();
  }
  function headerCheckboxState(selection, rows) {
    if (!rows.length) return "none";
    let sel = 0;
    for (const r of rows) if (selection.has(r.id)) sel++;
    if (sel === 0) return "none";
    if (sel === rows.length) return "all";
    return "some";
  }

  // src/datagrid/core/pipeline/filtering.ts
  function toNum(v) {
    if (v == null || v === "") return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }
  function toTime(v) {
    if (v == null || v === "") return null;
    const t = v instanceof Date ? v.getTime() : new Date(String(v)).getTime();
    return Number.isNaN(t) ? null : t;
  }
  function matchText(raw, f) {
    const hay = raw.toLowerCase();
    const needle = (f.value ?? "").toLowerCase();
    switch (f.op) {
      case "contains":
        return hay.includes(needle);
      case "notContains":
        return !hay.includes(needle);
      case "equals":
        return hay === needle;
      case "notEqual":
        return hay !== needle;
      case "startsWith":
        return hay.startsWith(needle);
      case "endsWith":
        return hay.endsWith(needle);
      case "blank":
        return raw.trim() === "";
      case "notBlank":
        return raw.trim() !== "";
      default:
        return true;
    }
  }
  function matchNumber(value, f) {
    const n = toNum(value);
    if (f.op === "blank") return n === null;
    if (f.op === "notBlank") return n !== null;
    if (n === null) return false;
    const a = f.value ?? null;
    if (a === null && f.op !== "inRange") return true;
    switch (f.op) {
      case "eq":
        return n === a;
      case "neq":
        return n !== a;
      case "gt":
        return a !== null && n > a;
      case "gte":
        return a !== null && n >= a;
      case "lt":
        return a !== null && n < a;
      case "lte":
        return a !== null && n <= a;
      case "inRange":
        return (a === null || n >= a) && (f.to == null || n <= f.to);
      default:
        return true;
    }
  }
  function matchDate(value, f) {
    const t = toTime(value);
    if (t === null) return false;
    const a = toTime(f.value);
    switch (f.op) {
      case "eq":
        return a !== null && new Date(t).toISOString().slice(0, 10) === new Date(a).toISOString().slice(0, 10);
      case "before":
        return a !== null && t < a;
      case "after":
        return a !== null && t > a;
      case "inRange": {
        const b = toTime(f.to ?? "");
        return (a === null || t >= a) && (b === null || t <= b);
      }
      default:
        return true;
    }
  }
  function matchOne(col, node, f) {
    if (f.type === "set") return f.values.length === 0 || f.values.includes(cellText(col, node));
    if (f.type === "text") return matchText(cellText(col, node), f);
    if (f.type === "number") return matchNumber(getCellValue(col, node), f);
    if (f.type === "date") return matchDate(getCellValue(col, node), f);
    return true;
  }
  function filterRows(rows, filterModel, quickFilter, columns, colById) {
    const entries = Object.entries(filterModel);
    const q = quickFilter.trim().toLowerCase();
    if (!entries.length && !q) return rows;
    const visibleCols = columns.filter((c) => !c.hide);
    return rows.filter((node) => {
      for (const [colId, f] of entries) {
        const col = colById.get(colId);
        if (col && !matchOne(col, node, f)) return false;
      }
      if (q) {
        const hit = visibleCols.some((c) => cellText(c, node).toLowerCase().includes(q));
        if (!hit) return false;
      }
      return true;
    });
  }
  function uniqueValues(rows, col) {
    const set = /* @__PURE__ */ new Set();
    for (const node of rows) set.add(cellText(col, node));
    return [...set].sort((a, b) => a.localeCompare(b, void 0, { numeric: true }));
  }

  // src/datagrid/core/csvExport.ts
  function escapeCsv(value, sep) {
    if (value.includes(sep) || value.includes('"') || value.includes("\n") || value.includes("\r")) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
  function rowsToCsv(columns, rows, opts = {}) {
    const sep = opts.separator ?? ",";
    const cols = columns.filter((c) => !c.hide);
    const src = opts.onlySelected && opts.selection ? rows.filter((r) => opts.selection.has(r.id)) : rows;
    const head = cols.map((c) => escapeCsv(c.headerName, sep)).join(sep);
    const body = src.map((node) => cols.map((c) => escapeCsv(cellText(c, node), sep)).join(sep));
    return [head, ...body].join("\r\n");
  }

  // src/datagrid/react/useGridModel.ts
  var import_react23 = __require("react");

  // src/datagrid/core/pipeline/sorting.ts
  function defaultCompare(a, b, type) {
    if (a == null && b == null) return 0;
    if (a == null) return -1;
    if (b == null) return 1;
    if (type === "number") return Number(a) - Number(b);
    if (type === "boolean") return (a ? 1 : 0) - (b ? 1 : 0);
    if (type === "date") {
      const ta = a instanceof Date ? a.getTime() : new Date(String(a)).getTime();
      const tb = b instanceof Date ? b.getTime() : new Date(String(b)).getTime();
      return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
    }
    return String(a).localeCompare(String(b), void 0, { numeric: true, sensitivity: "base" });
  }
  function sortRows(rows, sortModel, colById) {
    if (!sortModel.length) return rows;
    const active = sortModel.map((s) => ({ col: colById.get(s.colId), dir: s.dir })).filter((s) => Boolean(s.col));
    if (!active.length) return rows;
    const indexed = rows.map((node, i) => ({ node, i }));
    indexed.sort((x, y) => {
      for (const { col, dir } of active) {
        const va = getCellValue(col, x.node);
        const vb = getCellValue(col, y.node);
        const c = typeof col.def.comparator === "function" ? col.def.comparator(va, vb, x.node.data, y.node.data) : defaultCompare(va, vb, col.type);
        if (c !== 0) return dir === "asc" ? c : -c;
      }
      return x.i - y.i;
    });
    return indexed.map((e) => e.node);
  }
  function cycleSort(model, colId, additive) {
    const existing = model.find((s) => s.colId === colId);
    const next = additive ? model.filter((s) => s.colId !== colId) : [];
    if (!existing) return [...next, { colId, dir: "asc" }];
    if (existing.dir === "asc") return [...next, { colId, dir: "desc" }];
    return next;
  }

  // src/datagrid/core/pipeline/grouping.ts
  function applyAgg(fn, values) {
    if (fn === "count") return values.length;
    if (fn === "first") return values.length ? values[0] : null;
    if (fn === "last") return values.length ? values[values.length - 1] : null;
    const nums = values.filter((v) => typeof v === "number" && !Number.isNaN(v));
    if (!nums.length) return null;
    if (fn === "sum") return nums.reduce((a, b) => a + b, 0);
    if (fn === "avg") return nums.reduce((a, b) => a + b, 0) / nums.length;
    if (fn === "min") return Math.min(...nums);
    if (fn === "max") return Math.max(...nums);
    return null;
  }
  function aggregateGroup(leaves, colById) {
    const agg = {};
    for (const col of colById.values()) {
      if (!col.aggFunc) continue;
      agg[col.colId] = applyAgg(col.aggFunc, leaves.map((n) => getCellValue(col, n)));
    }
    return agg;
  }
  function groupLevel(leaves, col) {
    const map = /* @__PURE__ */ new Map();
    for (const node of leaves) {
      const value = getCellValue(col, node);
      const key = String(value ?? "");
      let g2 = map.get(key);
      if (!g2) {
        g2 = { value, label: formatValue(col, value) || "(vac\xEDo)", leaves: [] };
        map.set(key, g2);
      }
      g2.leaves.push(node);
    }
    return [...map.values()];
  }
  function buildDisplayRows(leaves, rowGroupCols, colById, expandedGroups) {
    if (!rowGroupCols.length) return leaves.map((node) => ({ kind: "leaf", level: 0, node }));
    const out = [];
    const walk = (rows, depth, prefix) => {
      const colId = rowGroupCols[depth];
      const col = colById.get(colId);
      if (!col) return;
      for (const g2 of groupLevel(rows, col)) {
        const id = prefix ? `${prefix}|${colId}=${String(g2.value ?? "")}` : `${colId}=${String(g2.value ?? "")}`;
        const expanded = expandedGroups.has(id);
        out.push({
          kind: "group",
          id,
          colId,
          field: col.field,
          value: g2.value,
          label: g2.label,
          level: depth,
          count: g2.leaves.length,
          expanded,
          agg: aggregateGroup(g2.leaves, colById),
          leafIds: g2.leaves.map((n) => n.id)
        });
        if (!expanded) continue;
        if (depth + 1 < rowGroupCols.length) walk(g2.leaves, depth + 1, id);
        else for (const node of g2.leaves) out.push({ kind: "leaf", level: depth + 1, node });
      }
    };
    walk(leaves, 0, "");
    return out;
  }
  function collectGroupIds(leaves, rowGroupCols, colById) {
    if (!rowGroupCols.length) return [];
    const ids = [];
    const walk = (rows, depth, prefix) => {
      const col = colById.get(rowGroupCols[depth]);
      if (!col) return;
      for (const g2 of groupLevel(rows, col)) {
        const id = prefix ? `${prefix}|${col.colId}=${String(g2.value ?? "")}` : `${col.colId}=${String(g2.value ?? "")}`;
        ids.push(id);
        if (depth + 1 < rowGroupCols.length) walk(g2.leaves, depth + 1, id);
      }
    };
    walk(leaves, 0, "");
    return ids;
  }

  // src/datagrid/core/gridModel.ts
  function createGridModel(options) {
    const getRowId = options.getRowId ?? ((_row, i) => `row-${i}`);
    const s = {
      rawRows: options.rows ?? [],
      nodes: [],
      columns: resolveColumns2(options.columns ?? [], options.defaultColWidth),
      sortModel: [],
      filterModel: {},
      quickFilter: options.quickFilter ?? "",
      selection: /* @__PURE__ */ new Set(),
      density: options.density ?? "normal",
      pagination: options.pagination ?? false,
      page: 0,
      pageSize: options.pageSize ?? 50,
      rowGroupCols: options.rowGroupCols ?? [],
      expandedGroups: /* @__PURE__ */ new Set(),
      getRowId
    };
    rebuildNodes();
    const groupDefaultExpanded = options.groupDefaultExpanded ?? 0;
    const listeners3 = /* @__PURE__ */ new Set();
    let cache = null;
    function rebuildNodes() {
      s.nodes = s.rawRows.map((data, index) => ({ id: s.getRowId(data, index), index, data }));
    }
    function colById() {
      return new Map(s.columns.map((c) => [c.colId, c]));
    }
    function compute() {
      const byId = colById();
      const filtered = filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, byId);
      const sorted = sortRows(filtered, s.sortModel, byId);
      const totalRows = sorted.length;
      const grouped = s.rowGroupCols.filter((c) => byId.has(c));
      const displayRows = buildDisplayRows(sorted, grouped, byId, s.expandedGroups);
      let page = s.page;
      let pageRows = sorted;
      let pageDisplayRows = displayRows;
      if (s.pagination) {
        const pages = Math.max(1, Math.ceil(displayRows.length / s.pageSize));
        page = Math.min(s.page, pages - 1);
        pageDisplayRows = displayRows.slice(page * s.pageSize, page * s.pageSize + s.pageSize);
        pageRows = sorted.slice(page * s.pageSize, page * s.pageSize + s.pageSize);
      }
      return {
        columns: s.columns,
        sortModel: s.sortModel,
        filterModel: s.filterModel,
        quickFilter: s.quickFilter,
        selection: s.selection,
        density: s.density,
        pagination: s.pagination,
        page,
        pageSize: s.pageSize,
        displayedRows: sorted,
        pageRows,
        rowGroupCols: grouped,
        expandedGroups: s.expandedGroups,
        displayRows,
        pageDisplayRows,
        totalRows
      };
    }
    function reseedExpansion() {
      if (groupDefaultExpanded === -1 && s.rowGroupCols.length) {
        s.expandedGroups = new Set(collectGroupIds(sortRows(filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, colById()), s.sortModel, colById()), s.rowGroupCols, colById()));
      }
    }
    reseedExpansion();
    function notify2() {
      cache = compute();
      for (const fn of listeners3) {
        try {
          fn(cache);
        } catch {
        }
      }
    }
    const api = {
      getState() {
        return cache ?? (cache = compute());
      },
      subscribe(fn) {
        listeners3.add(fn);
        return () => {
          listeners3.delete(fn);
        };
      },
      setRows(rows) {
        s.rawRows = rows ?? [];
        rebuildNodes();
        notify2();
      },
      setColumnDefs(defs) {
        s.columns = resolveColumns2(defs ?? [], options.defaultColWidth);
        notify2();
      },
      setSortModel(model) {
        s.sortModel = model;
        notify2();
      },
      toggleSort(colId, additive = false) {
        s.sortModel = cycleSort(s.sortModel, colId, additive);
        notify2();
      },
      setFilter(colId, filter) {
        const next = { ...s.filterModel };
        if (filter == null) delete next[colId];
        else next[colId] = filter;
        s.filterModel = next;
        s.page = 0;
        notify2();
      },
      setQuickFilter(text) {
        s.quickFilter = text ?? "";
        s.page = 0;
        notify2();
      },
      setSelection(ids) {
        s.selection = ids;
        notify2();
      },
      setDensity(d) {
        s.density = d;
        notify2();
      },
      setPage(page) {
        s.page = Math.max(0, page);
        notify2();
      },
      setPageSize(size) {
        s.pageSize = Math.max(1, size);
        s.page = 0;
        notify2();
      },
      resizeColumn(colId, width) {
        s.columns = setColumnWidth(s.columns, colId, width);
        notify2();
      },
      pinColumn(colId, side) {
        s.columns = setColumnPinned(s.columns, colId, side);
        notify2();
      },
      hideColumn(colId, hide) {
        s.columns = setColumnHidden(s.columns, colId, hide);
        notify2();
      },
      reorderColumn(colId, toIndex) {
        s.columns = moveColumn(s.columns, colId, toIndex);
        notify2();
      },
      autosizeColumn(colId) {
        s.columns = autosizeColumn(s.columns, colId, s.nodes);
        notify2();
      },
      setRowGroupCols(colIds) {
        s.rowGroupCols = [...colIds];
        s.page = 0;
        reseedExpansion();
        notify2();
      },
      addRowGroupCol(colId, index) {
        if (s.rowGroupCols.includes(colId)) return;
        const next = s.rowGroupCols.slice();
        next.splice(index == null ? next.length : Math.max(0, Math.min(index, next.length)), 0, colId);
        s.rowGroupCols = next;
        s.page = 0;
        reseedExpansion();
        notify2();
      },
      removeRowGroupCol(colId) {
        s.rowGroupCols = s.rowGroupCols.filter((c) => c !== colId);
        s.page = 0;
        reseedExpansion();
        notify2();
      },
      toggleGroup(groupId) {
        const next = new Set(s.expandedGroups);
        if (next.has(groupId)) next.delete(groupId);
        else next.add(groupId);
        s.expandedGroups = next;
        notify2();
      },
      expandAllGroups() {
        const byId = colById();
        const sorted = sortRows(filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, byId), s.sortModel, byId);
        s.expandedGroups = new Set(collectGroupIds(sorted, s.rowGroupCols, byId));
        notify2();
      },
      collapseAllGroups() {
        s.expandedGroups = /* @__PURE__ */ new Set();
        notify2();
      },
      getColumns() {
        return s.columns;
      },
      getDisplayedRows() {
        return api.getState().displayedRows;
      },
      getAllRows() {
        return s.nodes;
      }
    };
    cache = compute();
    return api;
  }

  // src/datagrid/react/useGridModel.ts
  function useGridModel(options) {
    const ref = (0, import_react23.useRef)(null);
    if (ref.current == null) ref.current = createGridModel(options);
    const api = ref.current;
    const state2 = (0, import_react23.useSyncExternalStore)(api.subscribe, api.getState, api.getState);
    (0, import_react23.useEffect)(() => {
      api.setRows(options.rows ?? []);
    }, [api, options.rows]);
    (0, import_react23.useEffect)(() => {
      api.setColumnDefs(options.columns ?? []);
    }, [api, options.columns]);
    (0, import_react23.useEffect)(() => {
      if (options.quickFilter != null) api.setQuickFilter(options.quickFilter);
    }, [api, options.quickFilter]);
    return { api, state: state2 };
  }

  // src/datagrid/react/GridHeader.tsx
  var import_react24 = __require("react");
  var import_jsx_runtime29 = __require("react/jsx-runtime");
  var sortIcon = { asc: "mdi:arrow-up", desc: "mdi:arrow-down" };
  function GridHeader(props) {
    const { columns, sortModel, selectionMode, headerCheckbox, totalWidth, headerHeight, pinStyles, checkPinStyle, filteredCols, onSort, onToggleAll, onResize, onReorder, onMenu } = props;
    const drag = (0, import_react24.useRef)(null);
    const startResize = (col) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      const startX = e.clientX;
      const startW = col.width;
      const move = (ev) => onResize(col.colId, startW + (ev.clientX - startX));
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    const handleSort = (col) => (e) => {
      if (e.target.closest(".mim-dg__resizer, .mim-dg__head-menu-btn")) return;
      if (col.sortable) onSort(col.colId, e.shiftKey);
    };
    const onDragStart = (col) => (e) => {
      drag.current = col.colId;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("application/x-mim-col", col.colId);
    };
    const onDrop = (col) => (e) => {
      e.preventDefault();
      if (drag.current && drag.current !== col.colId) onReorder(drag.current, col.colId);
      drag.current = null;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "mim-dg__header", style: { width: totalWidth, height: headerHeight }, role: "row", children: [
      selectionMode !== "none" && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mim-dg__cell mim-dg__cell--check mim-dg__head-cell is-pinned is-pinned-left", style: checkPinStyle, role: "columnheader", children: selectionMode === "multiple" && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("button", { type: "button", className: `mim-dg__checkbox mim-dg__checkbox--${headerCheckbox}`, "aria-label": "Seleccionar todo", onClick: onToggleAll, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: headerCheckbox === "all" ? "mdi:checkbox-marked" : headerCheckbox === "some" ? "mdi:minus-box" : "mdi:checkbox-blank-outline" }) }) }),
      columns.map((col) => {
        const idx = sortModel.findIndex((s) => s.colId === col.colId);
        const dir = idx >= 0 ? sortModel[idx].dir : null;
        const pinClass = col.pinned ? ` is-pinned is-pinned-${col.pinned}` : "";
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
          "div",
          {
            className: `mim-dg__cell mim-dg__cell--${col.align} mim-dg__head-cell${col.sortable ? " is-sortable" : ""}${dir ? " is-sorted" : ""}${pinClass}${col.def.headerClass ? ` ${col.def.headerClass}` : ""}`,
            style: { width: col.width, height: headerHeight, ...pinStyles[col.colId] },
            role: "columnheader",
            "aria-sort": dir === "asc" ? "ascending" : dir === "desc" ? "descending" : "none",
            draggable: true,
            onDragStart: onDragStart(col),
            onDragOver: (e) => e.preventDefault(),
            onDrop: onDrop(col),
            onClick: handleSort(col),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "mim-dg__head-label", children: col.headerName }),
              filteredCols.has(col.colId) && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: "mdi:filter", className: "mim-dg__filter-icon" }),
              dir && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: sortIcon[dir], className: "mim-dg__sort-icon" }),
              dir && sortModel.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "mim-dg__sort-order", children: idx + 1 }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                "button",
                {
                  type: "button",
                  className: "mim-dg__head-menu-btn",
                  "aria-label": "Men\xFA de columna",
                  onClick: (e) => {
                    e.stopPropagation();
                    const r = e.currentTarget.getBoundingClientRect();
                    onMenu(col, r.left, r.bottom);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { icon: "mdi:dots-vertical" })
                }
              ),
              col.resizable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "mim-dg__resizer", onPointerDown: startResize(col), role: "separator", "aria-orientation": "vertical" })
            ]
          },
          col.colId
        );
      })
    ] });
  }

  // src/datagrid/react/cellRenderers.tsx
  var import_jsx_runtime30 = __require("react/jsx-runtime");
  var registry = /* @__PURE__ */ new Map();
  function registerCellRenderer(name, renderer) {
    registry.set(name, renderer);
  }
  function getCellRenderer(name) {
    return name ? registry.get(name) : void 0;
  }
  registerCellRenderer("boolean", ({ value }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: value ? "mim-dg-bool mim-dg-bool--on" : "mim-dg-bool mim-dg-bool--off", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Icon, { icon: value ? "mdi:check-circle" : "mdi:close-circle-outline" }) }));
  registerCellRenderer("tag", ({ formatted }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "mim-dg-tag", children: formatted }));
  registerCellRenderer("link", ({ formatted, value }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("a", { className: "mim-dg-link", href: typeof value === "string" ? value : "#", children: formatted }));

  // src/datagrid/react/GridCell.tsx
  var import_jsx_runtime31 = __require("react/jsx-runtime");
  function GridCell({ column, node, pinStyle }) {
    const value = getCellValue(column, node);
    const formatted = formatCellValue(column, value, node);
    const renderer = getCellRenderer(column.def.cellRenderer);
    const extra = typeof column.def.cellClass === "function" ? column.def.cellClass(value, node.data) : column.def.cellClass;
    const content = renderer ? renderer({ value, formatted, data: node.data, node, column }) : formatted;
    const pinClass = column.pinned ? ` is-pinned is-pinned-${column.pinned}` : "";
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "div",
      {
        className: `mim-dg__cell mim-dg__cell--${column.align}${pinClass}${extra ? ` ${extra}` : ""}`,
        style: { width: column.width, ...pinStyle },
        role: "gridcell",
        title: typeof content === "string" ? content : void 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "mim-dg__cell-inner", children: content })
      }
    );
  }

  // src/datagrid/react/GridBody.tsx
  var import_jsx_runtime32 = __require("react/jsx-runtime");
  var INDENT = 18;
  function GridBody(props) {
    const { rows, columns, rowHeight, topPad, totalHeight, totalWidth, selection, selectionMode, focusedId, pinStyles, checkPinStyle, onRowSelect, onToggleGroup } = props;
    const aggCols = columns.filter((c) => c.aggFunc && !c.hide);
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mim-dg__body", style: { height: totalHeight, width: totalWidth }, role: "rowgroup", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mim-dg__rows", style: { transform: `translateY(${topPad}px)` }, children: rows.map((dr) => {
      if (dr.kind === "group") {
        return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "div",
          {
            className: `mim-dg__row mim-dg__group-row${focusedId === dr.id ? " is-focused" : ""}`,
            style: { height: rowHeight },
            role: "row",
            onClick: () => onToggleGroup(dr.id),
            children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "mim-dg__group-cell", style: { paddingLeft: 8 + dr.level * INDENT }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Icon, { icon: dr.expanded ? "mdi:chevron-down" : "mdi:chevron-right", className: "mim-dg__group-chevron" }),
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "mim-dg__group-label", children: dr.label }),
              /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "mim-dg__group-count", children: [
                "(",
                dr.count.toLocaleString(),
                ")"
              ] }),
              aggCols.map((c) => dr.agg[c.colId] != null && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("span", { className: "mim-dg__group-agg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("b", { children: [
                  c.headerName,
                  ":"
                ] }),
                " ",
                formatValue(c, dr.agg[c.colId])
              ] }, c.colId))
            ] })
          },
          dr.id
        );
      }
      const node = dr.node;
      const selected = selection.has(node.id);
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
        "div",
        {
          className: `mim-dg__row${selected ? " is-selected" : ""}${focusedId === node.id ? " is-focused" : ""}${node.index % 2 ? " is-odd" : ""}`,
          style: { height: rowHeight },
          role: "row",
          "aria-selected": selected,
          onClick: selectionMode !== "none" ? (e) => onRowSelect(node, e) : void 0,
          children: [
            selectionMode !== "none" && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mim-dg__cell mim-dg__cell--check is-pinned is-pinned-left", style: checkPinStyle, role: "gridcell", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: `mim-dg__checkbox mim-dg__checkbox--${selected ? "all" : "none"}`, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Icon, { icon: selected ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline" }) }) }),
            columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(GridCell, { column: col, node, pinStyle: pinStyles[col.colId] }, col.colId))
          ]
        },
        node.id
      );
    }) }) });
  }

  // src/datagrid/react/GridFooter.tsx
  var import_jsx_runtime33 = __require("react/jsx-runtime");
  function GridFooter(props) {
    const { page, pageSize, totalRows, selectedCount, pagination, onPage } = props;
    const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
    const range = buildPageRange(pageCount, page + 1, 1);
    const from = totalRows === 0 ? 0 : page * pageSize + 1;
    const to = pagination ? Math.min(totalRows, (page + 1) * pageSize) : totalRows;
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "mim-dg__footer", role: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "mim-dg__count", children: [
        from.toLocaleString(),
        "\u2013",
        to.toLocaleString(),
        " de ",
        totalRows.toLocaleString(),
        selectedCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { className: "mim-dg__count-sel", children: [
          " \xB7 ",
          selectedCount.toLocaleString(),
          " seleccionadas"
        ] })
      ] }),
      pagination && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "mim-dg__pager", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("button", { type: "button", className: "mim-dg__pager-btn", disabled: page <= 0, "aria-label": "Anterior", onClick: () => onPage(page - 1), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { icon: "mdi:chevron-left" }) }),
        range.items.map((it) => it.type === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "mim-dg__pager-gap", children: "\u2026" }, it.key) : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("button", { type: "button", className: `mim-dg__pager-btn${it.page === page + 1 ? " is-active" : ""}`, onClick: () => onPage(it.page - 1), children: it.page }, it.key)),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("button", { type: "button", className: "mim-dg__pager-btn", disabled: page >= pageCount - 1, "aria-label": "Siguiente", onClick: () => onPage(page + 1), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Icon, { icon: "mdi:chevron-right" }) })
      ] })
    ] });
  }

  // src/datagrid/react/GridToolbar.tsx
  var import_jsx_runtime34 = __require("react/jsx-runtime");
  var DENSITIES = [
    { key: "compact", icon: "mdi:view-headline", label: "Compacta" },
    { key: "normal", icon: "mdi:view-sequential", label: "Normal" },
    { key: "comfortable", icon: "mdi:view-stream", label: "C\xF3moda" }
  ];
  function GridToolbar(props) {
    const { quickFilter, onQuickFilter, density, onDensity, onExport, showQuickFilter = true, showDensity = true, showExport = true } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mim-dg__toolbar", role: "toolbar", children: [
      showQuickFilter && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("label", { className: "mim-dg__quick", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Icon, { icon: "mdi:magnify", className: "mim-dg__quick-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("input", { type: "search", className: "mim-dg__quick-input", placeholder: "Buscar\u2026", value: quickFilter, onChange: (e) => onQuickFilter(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "mim-dg__toolbar-spacer" }),
      showDensity && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "mim-dg__density", role: "group", "aria-label": "Densidad", children: DENSITIES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("button", { type: "button", className: `mim-dg__density-btn${density === d.key ? " is-active" : ""}`, title: d.label, "aria-label": d.label, "aria-pressed": density === d.key, onClick: () => onDensity(d.key), children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Icon, { icon: d.icon }) }, d.key)) }),
      showExport && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("button", { type: "button", className: "mim-dg__tool-btn", onClick: onExport, children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Icon, { icon: "mdi:file-delimited-outline" }),
        "Exportar CSV"
      ] })
    ] });
  }

  // src/datagrid/react/GroupPanel.tsx
  var import_react25 = __require("react");
  var import_jsx_runtime35 = __require("react/jsx-runtime");
  var COL_DND_TYPE = "application/x-mim-col";
  function GroupPanel(props) {
    const { columns, rowGroupCols, onAdd, onRemove, onExpandAll, onCollapseAll } = props;
    const [over, setOver] = (0, import_react25.useState)(false);
    const byId = new Map(columns.map((c) => [c.colId, c]));
    const onDrop = (e) => {
      e.preventDefault();
      setOver(false);
      const colId = e.dataTransfer.getData(COL_DND_TYPE);
      if (colId) onAdd(colId);
    };
    const chipDragStart = (colId) => (e) => e.dataTransfer.setData(COL_DND_TYPE, colId);
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
      "div",
      {
        className: `mim-dg__group-panel${over ? " is-over" : ""}${rowGroupCols.length ? " has-groups" : ""}`,
        role: "toolbar",
        onDragOver: (e) => {
          e.preventDefault();
          setOver(true);
        },
        onDragLeave: () => setOver(false),
        onDrop,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:group", className: "mim-dg__group-panel-icon" }),
          rowGroupCols.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "mim-dg__group-hint", children: "Arrastra una columna aqu\xED para agrupar por sus valores" }),
          rowGroupCols.map((colId, i) => {
            const col = byId.get(colId);
            return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "mim-dg__group-chip-wrap", children: [
              i > 0 && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:chevron-right", className: "mim-dg__group-chip-arrow" }),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "mim-dg__group-chip", draggable: true, onDragStart: chipDragStart(colId), children: [
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:drag-vertical", className: "mim-dg__group-chip-grip" }),
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "mim-dg__group-chip-label", children: col?.headerName ?? colId }),
                /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { type: "button", className: "mim-dg__group-chip-x", "aria-label": `Quitar ${col?.headerName ?? colId}`, onClick: () => onRemove(colId), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:close" }) })
              ] })
            ] }, colId);
          }),
          rowGroupCols.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("span", { className: "mim-dg__group-panel-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { type: "button", className: "mim-dg__group-panel-btn", title: "Expandir todo", onClick: onExpandAll, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:unfold-more-horizontal" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("button", { type: "button", className: "mim-dg__group-panel-btn", title: "Colapsar todo", onClick: onCollapseAll, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { icon: "mdi:unfold-less-horizontal" }) })
          ] })
        ]
      }
    );
  }

  // src/datagrid/react/HeaderMenu.tsx
  var import_react26 = __require("react");
  var import_jsx_runtime36 = __require("react/jsx-runtime");
  function HeaderMenu(props) {
    const { column, x, y, onClose, onSort, onPin, onHide, onAutosize, onFilter, onToggleRowGroup, isGrouped } = props;
    const ref = (0, import_react26.useRef)(null);
    (0, import_react26.useEffect)(() => {
      const close = (e) => {
        if (ref.current && !ref.current.contains(e.target)) onClose();
      };
      document.addEventListener("mousedown", close, true);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") onClose();
      });
      return () => {
        document.removeEventListener("mousedown", close, true);
      };
    }, [onClose]);
    const act = (fn) => () => {
      fn();
      onClose();
    };
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { ref, className: "mim-dg__menu pg-scrollbar", style: { left: x, top: y }, role: "menu", children: [
      column.sortable && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, "asc")), children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:sort-ascending" }),
          "Ordenar ascendente"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, "desc")), children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:sort-descending" }),
          "Ordenar descendente"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, null)), children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:sort-variant-remove" }),
          "Quitar orden"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mim-dg__menu-sep" })
      ] }),
      column.filterType && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onFilter(column)), children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:filter-outline" }),
          "Filtrar\u2026"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mim-dg__menu-sep" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, "left")), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:pin" }),
        "Fijar a la izquierda"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, "right")), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:pin" }),
        "Fijar a la derecha"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, null)), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:pin-off-outline" }),
        "No fijar"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mim-dg__menu-sep" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onAutosize(column.colId)), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:arrow-expand-horizontal" }),
        "Autoajustar ancho"
      ] }),
      column.enableRowGroup && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onToggleRowGroup(column.colId)), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: isGrouped ? "mdi:ungroup" : "mdi:group" }),
        isGrouped ? "Quitar agrupaci\xF3n" : "Agrupar por esta columna"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onHide(column.colId)), children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { icon: "mdi:eye-off-outline" }),
        "Ocultar columna"
      ] })
    ] });
  }

  // src/datagrid/react/FilterPopover.tsx
  var import_react27 = __require("react");
  var import_jsx_runtime37 = __require("react/jsx-runtime");
  var TEXT_OPS = [
    { v: "contains", t: "Contiene" },
    { v: "notContains", t: "No contiene" },
    { v: "equals", t: "Igual a" },
    { v: "notEqual", t: "Distinto de" },
    { v: "startsWith", t: "Empieza con" },
    { v: "endsWith", t: "Termina con" },
    { v: "blank", t: "Vac\xEDo" },
    { v: "notBlank", t: "No vac\xEDo" }
  ];
  var NUM_OPS = [
    { v: "eq", t: "=" },
    { v: "neq", t: "\u2260" },
    { v: "gt", t: ">" },
    { v: "gte", t: "\u2265" },
    { v: "lt", t: "<" },
    { v: "lte", t: "\u2264" },
    { v: "inRange", t: "Entre" },
    { v: "blank", t: "Vac\xEDo" },
    { v: "notBlank", t: "No vac\xEDo" }
  ];
  var DATE_OPS = [
    { v: "eq", t: "Igual a" },
    { v: "before", t: "Antes de" },
    { v: "after", t: "Despu\xE9s de" },
    { v: "inRange", t: "Entre" }
  ];
  function FilterPopover(props) {
    const { column, filter, uniqueValues: uniqueValues2, x, y, onApply, onClose } = props;
    const type = column.filterType ?? "text";
    const ref = (0, import_react27.useRef)(null);
    (0, import_react27.useEffect)(() => {
      const onDoc = (e) => {
        if (ref.current && !ref.current.contains(e.target)) onClose();
      };
      document.addEventListener("mousedown", onDoc, true);
      return () => document.removeEventListener("mousedown", onDoc, true);
    }, [onClose]);
    const tf = filter?.type === "text" ? filter : null;
    const nf = filter?.type === "number" ? filter : null;
    const df = filter?.type === "date" ? filter : null;
    const sf = filter?.type === "set" ? filter : null;
    const [textOp, setTextOp] = (0, import_react27.useState)(tf?.op ?? "contains");
    const [textVal, setTextVal] = (0, import_react27.useState)(tf?.value ?? "");
    const [numOp, setNumOp] = (0, import_react27.useState)(nf?.op ?? "eq");
    const [numVal, setNumVal] = (0, import_react27.useState)(nf?.value != null ? String(nf.value) : "");
    const [numTo, setNumTo] = (0, import_react27.useState)(nf?.to != null ? String(nf.to) : "");
    const [dateOp, setDateOp] = (0, import_react27.useState)(df?.op ?? "eq");
    const [dateVal, setDateVal] = (0, import_react27.useState)(df?.value ?? "");
    const [dateTo, setDateTo] = (0, import_react27.useState)(df?.to ?? "");
    const [setSel, setSetSel] = (0, import_react27.useState)(new Set(sf?.values ?? uniqueValues2));
    const [setSearch, setSetSearch] = (0, import_react27.useState)("");
    const shownVals = (0, import_react27.useMemo)(() => uniqueValues2.filter((v) => v.toLowerCase().includes(setSearch.toLowerCase())), [uniqueValues2, setSearch]);
    const needsValue = (op) => op !== "blank" && op !== "notBlank";
    const apply = () => {
      if (type === "text") onApply(textOp && (textVal || !needsValue(textOp)) ? { type: "text", op: textOp, value: textVal } : null);
      else if (type === "number") {
        const v = numVal === "" ? null : Number(numVal);
        const to = numTo === "" ? null : Number(numTo);
        onApply(needsValue(numOp) && v == null ? null : { type: "number", op: numOp, value: v, to });
      } else if (type === "date") onApply(dateVal || !needsValue(dateOp) ? { type: "date", op: dateOp, value: dateVal, to: dateTo } : null);
      else onApply(setSel.size === uniqueValues2.length ? null : { type: "set", values: [...setSel] });
      onClose();
    };
    const clear = () => {
      onApply(null);
      onClose();
    };
    const toggleVal = (v) => setSetSel((p) => {
      const n = new Set(p);
      if (n.has(v)) n.delete(v);
      else n.add(v);
      return n;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { ref, className: "mim-dg__filter pg-scrollbar", style: { left: x, top: y }, role: "dialog", "aria-label": `Filtrar ${column.headerName}`, children: [
      type === "text" && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("select", { className: "mim-dg__filter-field", value: textOp, onChange: (e) => setTextOp(e.target.value), children: TEXT_OPS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: o.v, children: o.t }, o.v)) }),
        needsValue(textOp) && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { className: "mim-dg__filter-field", placeholder: "Valor\u2026", autoFocus: true, value: textVal, onChange: (e) => setTextVal(e.target.value), onKeyDown: (e) => e.key === "Enter" && apply() })
      ] }),
      type === "number" && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("select", { className: "mim-dg__filter-field", value: numOp, onChange: (e) => setNumOp(e.target.value), children: NUM_OPS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: o.v, children: o.t }, o.v)) }),
        needsValue(numOp) && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "number", className: "mim-dg__filter-field", placeholder: "Valor\u2026", autoFocus: true, value: numVal, onChange: (e) => setNumVal(e.target.value), onKeyDown: (e) => e.key === "Enter" && apply() }),
        numOp === "inRange" && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "number", className: "mim-dg__filter-field", placeholder: "Hasta\u2026", value: numTo, onChange: (e) => setNumTo(e.target.value) })
      ] }),
      type === "date" && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("select", { className: "mim-dg__filter-field", value: dateOp, onChange: (e) => setDateOp(e.target.value), children: DATE_OPS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: o.v, children: o.t }, o.v)) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "date", className: "mim-dg__filter-field", value: dateVal, onChange: (e) => setDateVal(e.target.value) }),
        dateOp === "inRange" && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "date", className: "mim-dg__filter-field", value: dateTo, onChange: (e) => setDateTo(e.target.value) })
      ] }),
      type === "set" && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { className: "mim-dg__filter-field", placeholder: "Buscar valores\u2026", value: setSearch, onChange: (e) => setSetSearch(e.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "mim-dg__filter-actions-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { type: "button", className: "mim-dg__filter-link", onClick: () => setSetSel(new Set(uniqueValues2)), children: "Todo" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { type: "button", className: "mim-dg__filter-link", onClick: () => setSetSel(/* @__PURE__ */ new Set()), children: "Nada" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "mim-dg__filter-set pg-scrollbar", children: shownVals.map((v) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("label", { className: "mim-dg__filter-set-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { type: "button", className: `mim-dg__checkbox mim-dg__checkbox--${setSel.has(v) ? "all" : "none"}`, onClick: () => toggleVal(v), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Icon, { icon: setSel.has(v) ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: v || "(vac\xEDo)" })
        ] }, v)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "mim-dg__filter-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { type: "button", className: "mim-dg__tool-btn", onClick: clear, children: "Limpiar" }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { type: "button", className: "mim-dg__tool-btn is-primary", onClick: apply, children: "Aplicar" })
      ] })
    ] });
  }

  // src/datagrid/react/DataGrid.tsx
  var import_jsx_runtime38 = __require("react/jsx-runtime");
  var DENSITY_ROW = { compact: 32, normal: 40, comfortable: 52 };
  function DataGrid(props) {
    const {
      columns,
      rows,
      getRowId,
      selectionMode = "none",
      pagination = false,
      pageSize,
      height = 480,
      toolbar = true,
      rowGroupPanel = true,
      exportFileName = "datagrid.csv",
      className,
      style,
      onSelectionChange
    } = props;
    const headerHeight = props.headerHeight ?? 44;
    const [density, setDensity] = (0, import_react28.useState)(props.density ?? "normal");
    const rowHeight = props.rowHeight ?? DENSITY_ROW[density];
    const options = (0, import_react28.useMemo)(
      () => ({ columns, rows, getRowId, selectionMode, pagination, pageSize, density, rowGroupCols: props.rowGroupCols }),
      [columns, rows, getRowId, selectionMode, pagination, pageSize, density, props.rowGroupCols]
    );
    const { api, state: state2 } = useGridModel(options);
    (0, import_react28.useEffect)(() => {
      api.setDensity(density);
    }, [api, density]);
    const viewportRef = (0, import_react28.useRef)(null);
    const [scrollTop, setScrollTop] = (0, import_react28.useState)(0);
    const [size, setSize] = (0, import_react28.useState)({ width: 0, height: 0 });
    const [menu, setMenu] = (0, import_react28.useState)(null);
    const [filterPop, setFilterPop] = (0, import_react28.useState)(null);
    const [focusRow, setFocusRow] = (0, import_react28.useState)(-1);
    const lastRangeFrom = (0, import_react28.useRef)(null);
    (0, import_react28.useLayoutEffect)(() => {
      const el = viewportRef.current;
      if (!el || typeof ResizeObserver === "undefined") return void 0;
      const ro = new ResizeObserver(() => setSize({ width: el.clientWidth, height: el.clientHeight }));
      ro.observe(el);
      setSize({ width: el.clientWidth, height: el.clientHeight });
      return () => ro.disconnect();
    }, []);
    const onScroll = (0, import_react28.useCallback)((e) => setScrollTop(e.currentTarget.scrollTop), []);
    const dataRows = pagination ? state2.pageDisplayRows : state2.displayRows;
    const leafRows = pagination ? state2.pageRows : state2.displayedRows;
    const checkColWidth = selectionMode === "none" ? 0 : 44;
    const layout = orderedForLayout(state2.columns);
    const flat = (0, import_react28.useMemo)(() => {
      const merged = [...layout.left, ...layout.center, ...layout.right];
      const available = Math.max(0, size.width - checkColWidth);
      return applyFlex(merged, available);
    }, [layout.left, layout.center, layout.right, size.width, checkColWidth]);
    const totalWidth = flat.reduce((s, c) => s + c.width, 0) + checkColWidth;
    const { pinStyles, checkPinStyle } = (0, import_react28.useMemo)(() => {
      const styles = {};
      let lx = checkColWidth;
      for (const c of flat) if (c.pinned === "left") {
        styles[c.colId] = { position: "sticky", left: lx, zIndex: 3 };
        lx += c.width;
      }
      let rx = 0;
      for (let i = flat.length - 1; i >= 0; i--) {
        const c = flat[i];
        if (c.pinned === "right") {
          styles[c.colId] = { position: "sticky", right: rx, zIndex: 3 };
          rx += c.width;
        }
      }
      const check = checkColWidth ? { position: "sticky", left: 0, zIndex: 4 } : void 0;
      return { pinStyles: styles, checkPinStyle: check };
    }, [flat, checkColWidth]);
    const viewportHeight = Math.max(0, size.height - headerHeight);
    const win = rowWindow(dataRows.length, rowHeight, scrollTop, viewportHeight);
    const visible = dataRows.slice(win.startIndex, win.endIndex);
    const orderedIds = (0, import_react28.useMemo)(() => leafRows.map((r) => r.id), [leafRows]);
    const headerCheckbox = headerCheckboxState(state2.selection, leafRows);
    const filteredCols = (0, import_react28.useMemo)(() => new Set(Object.keys(state2.filterModel)), [state2.filterModel]);
    const groupedSet = (0, import_react28.useMemo)(() => new Set(state2.rowGroupCols), [state2.rowGroupCols]);
    const emit2 = (0, import_react28.useCallback)((next) => {
      api.setSelection(next);
      if (onSelectionChange) {
        const map = new Map(state2.displayedRows.map((r) => [r.id, r]));
        onSelectionChange([...next], [...next].map((id) => map.get(id)).filter(Boolean));
      }
    }, [api, onSelectionChange, state2.displayedRows]);
    const onRowSelect = (0, import_react28.useCallback)((node, e) => {
      const next = toggleRowSelection(
        state2.selection,
        node.id,
        selectionMode,
        { additive: e.ctrlKey || e.metaKey, range: e.shiftKey, rangeFrom: lastRangeFrom.current ?? void 0, orderedIds }
      );
      if (!e.shiftKey) lastRangeFrom.current = node.id;
      emit2(next);
    }, [state2.selection, selectionMode, orderedIds, emit2]);
    const onToggleAll = (0, import_react28.useCallback)(() => emit2(headerCheckbox === "all" ? clearSelection() : selectAll(leafRows)), [emit2, headerCheckbox, leafRows]);
    const onToggleGroup = (0, import_react28.useCallback)((groupId) => api.toggleGroup(groupId), [api]);
    const onToggleRowGroup = (0, import_react28.useCallback)((colId) => {
      if (groupedSet.has(colId)) api.removeRowGroupCol(colId);
      else api.addRowGroupCol(colId);
    }, [api, groupedSet]);
    const onSort = (0, import_react28.useCallback)((colId, additive) => api.toggleSort(colId, additive), [api]);
    const onResize = (0, import_react28.useCallback)((colId, width) => api.resizeColumn(colId, width), [api]);
    const onReorder = (0, import_react28.useCallback)((colId, targetColId) => {
      const toIndex = state2.columns.findIndex((c) => c.colId === targetColId);
      if (toIndex >= 0) api.reorderColumn(colId, toIndex);
    }, [api, state2.columns]);
    const onMenu = (0, import_react28.useCallback)((col, x, y) => setMenu({ col, x, y }), []);
    const onMenuSort = (0, import_react28.useCallback)((colId, dir) => {
      const others = state2.sortModel.filter((sm) => sm.colId !== colId);
      api.setSortModel(dir ? [...others, { colId, dir }] : others);
    }, [api, state2.sortModel]);
    const onPage = (0, import_react28.useCallback)((p) => {
      api.setPage(p);
      setScrollTop(0);
      if (viewportRef.current) viewportRef.current.scrollTop = 0;
    }, [api]);
    const onExport = (0, import_react28.useCallback)(() => {
      const sel = state2.selection;
      const csv = rowsToCsv(state2.columns, state2.displayedRows, { onlySelected: sel.size > 0, selection: sel });
      if (typeof document === "undefined") return;
      const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = exportFileName;
      a.click();
      URL.revokeObjectURL(url);
    }, [state2.columns, state2.displayedRows, state2.selection, exportFileName]);
    const onFilterOpen = (0, import_react28.useCallback)((col) => {
      setFilterPop({ col, x: menu?.x ?? 120, y: menu?.y ?? 120 });
      setMenu(null);
    }, [menu]);
    const onFilterApply = (0, import_react28.useCallback)((colId, filter) => api.setFilter(colId, filter), [api]);
    const popUnique = (0, import_react28.useMemo)(() => filterPop ? uniqueValues(api.getAllRows(), filterPop.col) : [], [filterPop, api]);
    const scrollRowIntoView = (0, import_react28.useCallback)((idx) => {
      const el = viewportRef.current;
      if (!el) return;
      const top = idx * rowHeight;
      const bottom = top + rowHeight;
      if (top < el.scrollTop) el.scrollTop = top;
      else if (bottom > el.scrollTop + viewportHeight) el.scrollTop = bottom - viewportHeight;
    }, [rowHeight, viewportHeight]);
    const onKeyDown = (0, import_react28.useCallback)((e) => {
      const last = dataRows.length - 1;
      const move = (idx) => {
        const c = Math.max(0, Math.min(last, idx));
        setFocusRow(c);
        scrollRowIntoView(c);
        e.preventDefault();
      };
      const pageStep = Math.max(1, Math.floor(viewportHeight / rowHeight) - 1);
      if (e.key === "ArrowDown") move(focusRow + 1);
      else if (e.key === "ArrowUp") move(focusRow < 0 ? 0 : focusRow - 1);
      else if (e.key === "Home") move(0);
      else if (e.key === "End") move(last);
      else if (e.key === "PageDown") move(focusRow + pageStep);
      else if (e.key === "PageUp") move(focusRow - pageStep);
      else if ((e.key === " " || e.key === "Enter") && focusRow >= 0) {
        const dr = dataRows[focusRow];
        if (dr?.kind === "group") api.toggleGroup(dr.id);
        else if (dr?.kind === "leaf" && selectionMode !== "none") {
          lastRangeFrom.current = dr.node.id;
          emit2(toggleRowSelection(state2.selection, dr.node.id, selectionMode, { additive: true }));
        }
        e.preventDefault();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && selectionMode === "multiple") {
        emit2(selectAll(leafRows));
        e.preventDefault();
      } else if (e.key === "Escape") {
        if (state2.selection.size) emit2(clearSelection());
      }
    }, [dataRows, leafRows, focusRow, viewportHeight, rowHeight, selectionMode, state2.selection, emit2, api, scrollRowIntoView]);
    const focusedId = focusRow >= 0 && focusRow < dataRows.length ? dataRows[focusRow].kind === "group" ? dataRows[focusRow].id : dataRows[focusRow].node.id : null;
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `mim-dg${className ? ` ${className}` : ""}`, "data-density": density, style: { height, ...style }, children: [
      toolbar && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        GridToolbar,
        {
          quickFilter: state2.quickFilter,
          onQuickFilter: (t) => api.setQuickFilter(t),
          density,
          onDensity: setDensity,
          onExport
        }
      ),
      rowGroupPanel && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        GroupPanel,
        {
          columns: flat,
          rowGroupCols: state2.rowGroupCols,
          onAdd: (colId) => api.addRowGroupCol(colId),
          onRemove: (colId) => api.removeRowGroupCol(colId),
          onExpandAll: () => api.expandAllGroups(),
          onCollapseAll: () => api.collapseAllGroups()
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "mim-dg__viewport pg-scrollbar", ref: viewportRef, onScroll, onKeyDown, tabIndex: 0, role: "grid", "aria-rowcount": state2.totalRows, children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          GridHeader,
          {
            columns: flat,
            sortModel: state2.sortModel,
            selectionMode,
            headerCheckbox,
            totalWidth,
            headerHeight,
            pinStyles,
            checkPinStyle,
            filteredCols,
            onSort,
            onToggleAll,
            onResize,
            onReorder,
            onMenu
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          GridBody,
          {
            rows: visible,
            columns: flat,
            rowHeight,
            topPad: win.topPad,
            totalHeight: win.totalHeight,
            totalWidth,
            selection: state2.selection,
            selectionMode,
            focusedId,
            pinStyles,
            checkPinStyle,
            onRowSelect,
            onToggleGroup
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(GridFooter, { page: state2.page, pageSize: state2.pageSize, totalRows: state2.totalRows, selectedCount: state2.selection.size, pagination, onPage }),
      menu && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        HeaderMenu,
        {
          column: menu.col,
          x: menu.x,
          y: menu.y,
          onClose: () => setMenu(null),
          onSort: onMenuSort,
          onPin: (colId, side) => api.pinColumn(colId, side),
          onHide: (colId) => api.hideColumn(colId, true),
          onAutosize: (colId) => api.autosizeColumn(colId),
          onFilter: onFilterOpen,
          onToggleRowGroup,
          isGrouped: groupedSet.has(menu.col.colId)
        }
      ),
      filterPop && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        FilterPopover,
        {
          column: filterPop.col,
          filter: state2.filterModel[filterPop.col.colId] ?? null,
          uniqueValues: popUnique,
          x: filterPop.x,
          y: filterPop.y,
          onApply: (f) => onFilterApply(filterPop.col.colId, f),
          onClose: () => setFilterPop(null)
        }
      )
    ] });
  }

  // src/theme/ThemeProvider.tsx
  var import_react29 = __require("react");

  // src/theme/looknfeelEngine.ts
  var looknfeel = LOOKNFEEL_DEFAULT;
  var listeners2 = /* @__PURE__ */ new Set();
  function getLooknfeelState() {
    return looknfeel;
  }
  function subscribeLooknfeel(fn) {
    listeners2.add(fn);
    return () => {
      listeners2.delete(fn);
    };
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

  // src/theme/ThemeProvider.tsx
  function useTheme() {
    const [theme, setTheme] = (0, import_react29.useState)(() => getThemeState());
    (0, import_react29.useEffect)(() => {
      const off = subscribeTheme(setTheme);
      return () => {
        off();
      };
    }, []);
    return theme;
  }
  function useLooknfeel() {
    const [look, setLook] = (0, import_react29.useState)(() => getLooknfeelState());
    (0, import_react29.useEffect)(() => {
      const off = subscribeLooknfeel(setLook);
      return () => {
        off();
      };
    }, []);
    return look;
  }
  function ThemeProvider({ children }) {
    useTheme();
    useLooknfeel();
    return children;
  }

  // src/spa/SpaRouter.tsx
  var import_react30 = __require("react");

  // src/spa/urlState.ts
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
        return () => {
          listeners3.delete(fn);
        };
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

  // src/spa/SpaRouter.tsx
  var import_jsx_runtime39 = __require("react/jsx-runtime");
  var SpaContext = (0, import_react30.createContext)({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });
  function useSpa() {
    return (0, import_react30.useContext)(SpaContext);
  }
  function useSpaRoute() {
    const { route, defaultRoute } = useSpa();
    return route ?? defaultRoute ?? null;
  }
  function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }) {
    const route = useSpaRoute() ?? defaultRoute;
    const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
    if (!Page) return null;
    return typeof Page === "function" ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Page, {}) : Page;
  }
  function SpaRouter({ routes, defaultRoute = "home", children }) {
    const [nav, setNav2] = (0, import_react30.useState)(() => urlState.get());
    (0, import_react30.useEffect)(() => {
      const off = urlState.subscribe(setNav2);
      return () => {
        off();
      };
    }, []);
    const route = nav.r ?? defaultRoute;
    const navigate = (next) => urlState.setRoute(next);
    const value = (0, import_react30.useMemo)(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(SpaContext.Provider, { value, children });
  }
  function SpaNavLink({ route, children, className, variant = "text", ...rest }) {
    const { route: active, navigate } = useSpa();
    const isActive = active === route;
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("nav", { ...rest, className: ["mimicus-sidebar", className].filter(Boolean).join(" "), children: [
      title != null && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mimicus-sidebar-header pg-sidebar-header", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mimicus-sidebar-body pg-sidebar-body", children })
    ] });
  }

  // src/snippets/index.ts
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

  // src/cdn/index.ts
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

  // src/cdn/baseUrl.ts
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

  // src/cdn/packs.ts
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
      href: (base) => base + "css/mimicus-ui.min.css",
      attrs: { "data-mimicus-ui-css": "1", "data-mimicus-cdn": "mimicus-ui-css" }
    },
    "script-mimicus-react-iife": {
      kind: "script-src",
      src: (base) => base + "iife/mimicus-react.iife.min.js",
      defer: false,
      attrs: { "data-mimicus-react-iife": "1", "data-mimicus-cdn": "mimicus-react-iife" }
    },
    /** @deprecated alias de script-mimicus-react-iife */
    "script-mimicus-ui": {
      kind: "script-src",
      src: (base) => base + "iife/mimicus-react.iife.min.js",
      defer: false,
      attrs: { "data-mimicus-ui-js": "1", "data-mimicus-cdn": "mimicus-ui" }
    },
    "link-app-boot-css": {
      kind: "link-css",
      href: (base) => base + "css/app-boot.min.css",
      attrs: { "data-mimicus-cdn": "app-boot-css" }
    },
    "importmap-mimicus-ui": {
      kind: "importmap",
      imports: (base) => ({
        "@jeff-aporta/mimicus-react": base + "esm/mimicus-react.esm.min.js",
        "@jeff-aporta/mimicus-react/bootstrap": base + "esm/mimicus-react.bootstrap.esm.min.js"
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

  // src/cdn/loadCdns.ts
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
  function resolveImportMap(raw, base) {
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
        Object.assign(importMaps, resolveImportMap(pack.imports, base));
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
    const snippetsSrc = opts.snippetsSrc || mimicusCdnBase() + "iife/mimicus-snippets.min.js";
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
        Object.assign(importMaps, resolveImportMap(pack.imports, base));
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

  // src/contapyme/components/LoginButton.tsx
  var import_react33 = __require("react");

  // src/contapyme/auth/loginCredentials.ts
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

  // src/contapyme/auth/loginFormat.ts
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

  // src/contapyme/auth/loginMultiempresa.ts
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

  // src/contapyme/auth/sessionContext.tsx
  var import_react31 = __require("react");
  var import_jsx_runtime40 = __require("react/jsx-runtime");
  var ContapymeSessionContext = (0, import_react31.createContext)(null);
  function ContapymeSessionProvider({ session, children }) {
    const value = (0, import_react31.useMemo)(() => session ?? null, [session]);
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(ContapymeSessionContext.Provider, { value, children });
  }
  function useContapymeSession() {
    return (0, import_react31.useContext)(ContapymeSessionContext);
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

  // src/contapyme/components/ContapymeIcon.tsx
  var import_jsx_runtime41 = __require("react/jsx-runtime");
  function ContapymeIcon({ icon, size = 20, className, style, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "iconify-icon",
      {
        icon,
        width: size,
        height: size,
        className,
        style: { display: "inline-flex", verticalAlign: "middle", ...style && typeof style === "object" ? style : {} },
        ...rest
      }
    );
  }

  // src/contapyme/components/LoginDialog.tsx
  var import_react32 = __require("react");

  // src/components/GlassHeaderBand.tsx
  var import_jsx_runtime42 = __require("react/jsx-runtime");
  function GlassHeaderBand({
    title,
    titleId,
    icon = "mdi:circle-small",
    subtitle,
    compact = false,
    className = "",
    as: Tag2 = "header",
    sectionColor,
    children
  }) {
    const rootClass = ["mimicus-glass-header", compact && "mimicus-glass-header--compact", className].filter(Boolean).join(" ");
    const bow = sectionColor ? `color-mix(in oklch, ${resolveColor(sectionColor)} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)` : void 0;
    const accentStyle = sectionColor ? { "--sm-accent": resolveColor(sectionColor), "--sm-accent-fg": bow } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Tag2, { className: rootClass, "data-section-color": sectionColor || void 0, style: accentStyle, children: [
      icon !== false && icon ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "mimicus-glass-header__icon", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Icon, { icon }) }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "mimicus-glass-header__body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { id: titleId, className: "mimicus-glass-header__title", children: title }),
        subtitle ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "mimicus-glass-header__subtitle", children: subtitle }) : null
      ] }),
      children ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mimicus-glass-header__tools", children }) : null
    ] });
  }

  // src/contapyme/components/LoginDialog.tsx
  var import_jsx_runtime43 = __require("react/jsx-runtime");
  function LoginDialog({ open, busy, title = "Iniciar sesi\xF3n", icon = "mdi:account-key-outline", onClose, children, footer }) {
    const ref = (0, import_react32.useRef)(null);
    (0, import_react32.useEffect)(() => {
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
    (0, import_react32.useEffect)(() => {
      if (!open) return void 0;
      const onKey = (e) => {
        if (e.key === "Escape" && !busy) onClose?.();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open, busy, onClose]);
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("dialog", { ref, className: "mimicus-login-dialog isa-login-dialog", "aria-labelledby": "mimicus-login-dialog-title", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "mimicus-login-dialog__card isa-login-card mimicus-glass-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        GlassHeaderBand,
        {
          title,
          titleId: "mimicus-login-dialog-title",
          subtitle: "Use su usuario y contrase\xF1a de la organizaci\xF3n.",
          icon,
          className: "mimicus-login-dialog__header isa-login-header",
          children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("button", { type: "button", className: "mimicus-login-dialog__close", "aria-label": "Cerrar", disabled: busy, onClick: () => !busy && onClose?.(), children: "\xD7" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mimicus-login-dialog__body", children }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("footer", { className: "mimicus-login-dialog__footer", children: footer })
    ] }) });
  }

  // src/contapyme/constants.ts
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

  // src/contapyme/components/LoginFormFields.tsx
  var import_jsx_runtime44 = __require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(Stack, { spacing: "0.75rem", className: "mimicus-login-form", children: [
      err ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "mimicus-login-form__alert", role: "alert", children: err }) : null,
      needsEmpresa ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "mimicus-login-form__info", children: "Seleccione la empresa con la que desea ingresar." }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FormItem, { label: "Usuario", help: CONTAPYME_LOGIN_ID_HELPER, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FormItem, { label: "Contrase\xF1a", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        Input,
        {
          type: showPasswordToggle && showPass ? "text" : "password",
          value: pass,
          onChange: (e) => setPass(e.target.value),
          autoComplete: "current-password",
          disabled: busy,
          suffix: showPasswordToggle ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Button,
            {
              type: "button",
              variant: "text",
              color: "neutral",
              shape: "rect",
              disabled: busy,
              title: showPass ? "Ocultar contrase\xF1a" : "Mostrar contrase\xF1a",
              onClick: () => setShowPass((v) => !v),
              style: { width: "auto", minWidth: "2rem", padding: "0 0.35rem" },
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ContapymeIcon, { icon: showPass ? "mdi:eye-off-outline" : "mdi:eye-outline", size: 18 })
            }
          ) : null,
          onKeyDown: (e) => {
            if (e.key === "Enter" && onEnter) {
              e.preventDefault();
              onEnter();
            }
          }
        }
      ) }),
      needsEmpresa ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FormItem, { label: "Empresa", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
      ) }) : null,
      showRemember ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Checkbox, { checked: remember, onChange: setRemember, disabled: busy, children: LOGIN_REMEMBER_LABEL }) : null
    ] });
  }
  function LoginFormActions({ busy, canSubmit, onCancel, onSubmit, showCancel = true }) {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "mimicus-login-form__actions", children: [
      showCancel ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Button, { type: "button", variant: "text", color: "neutral", shape: "rect", disabled: busy, onClick: onCancel, style: { width: "auto" }, children: "Cancelar" }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Button, { type: "button", variant: "solid", color: "primary", shape: "rect", disabled: busy || !canSubmit, loading: busy, onClick: onSubmit, style: { width: "auto" }, children: "Iniciar sesi\xF3n" })
    ] });
  }

  // src/contapyme/components/LoginButton.tsx
  var import_jsx_runtime45 = __require("react/jsx-runtime");
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
      onToast[kind]?.(message);
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
    const [openInternal, setOpenInternal] = (0, import_react33.useState)(false);
    const open = loginOpenProp != null ? loginOpenProp : openInternal;
    const setOpen = onLoginOpenChange || setOpenInternal;
    const [user, setUser] = (0, import_react33.useState)("");
    const [pass, setPass] = (0, import_react33.useState)("");
    const [remember, setRemember] = (0, import_react33.useState)(true);
    const [showPass, setShowPass] = (0, import_react33.useState)(false);
    const [err, setErr] = (0, import_react33.useState)("");
    const [busy, setBusy] = (0, import_react33.useState)(false);
    const [terceros, setTerceros] = (0, import_react33.useState)([]);
    const [selectedItercero, setSelectedItercero] = (0, import_react33.useState)("");
    const [, tick] = (0, import_react33.useState)(0);
    (0, import_react33.useEffect)(() => {
      if (!authEvt || typeof window === "undefined") return void 0;
      const onAuth = () => tick((n) => n + 1);
      window.addEventListener(authEvt, onAuth);
      return () => window.removeEventListener(authEvt, onAuth);
    }, [authEvt]);
    (0, import_react33.useEffect)(() => {
      if (!open) return;
      const saved = readLoginCredentials();
      setUser(saved.username || "");
      setPass(saved.password || "");
      setRemember(saved.remember !== false);
      setErr("");
      setTerceros([]);
      setSelectedItercero("");
    }, [open]);
    const submit = (0, import_react33.useCallback)(async () => {
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
    const logout = (0, import_react33.useCallback)(() => {
      auth.logout?.();
      tick((n) => n + 1);
      defaultToast("info", "Sesi\xF3n cerrada", onToast);
    }, [auth, onToast]);
    const logged = sessionView(auth) || (auth.isLoggedIn?.() ? { username: auth.username?.() } : null);
    if (logged?.username) {
      const loggedAny = logged;
      const label = resolveSessionHeaderLabel(loggedAny.displayName, logged.username, logged.username);
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: [wrapClass, "mimicus-login-button", "mimicus-login-button--session", className].filter(Boolean).join(" "), style, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(FlexLayout, { items: "center", gap: "0.35rem", className: btnClass, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        Dropdown,
        {
          placement: "bottomRight",
          trigger: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Button, { type: "button", variant: "soft", color: "primary", shape: "rect", className: "header-session-chip mimicus-login-button__chip", style: { width: "auto" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ContapymeIcon, { icon: "mdi:account-circle-outline", size: 18 }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: label })
          ] }),
          menu: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Menu.Item, { disabled: true, children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "mimicus-login-button__menu-user", children: logged.username }),
              loggedAny.role ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "mimicus-login-button__menu-role", children: loggedAny.role }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Menu.Divider, {}),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Menu.Item, { onClick: logout, children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ContapymeIcon, { icon: "mdi:logout", size: 16 }),
              "Cerrar sesi\xF3n"
            ] })
          ] })
        }
      ) }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("span", { className: [wrapClass, "mimicus-login-button", className].filter(Boolean).join(" "), style, children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(FlexLayout, { items: "center", gap: "0.35rem", className: btnClass, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Button, { type: "button", variant: "outlined", color: "neutral", shape: "rect", onClick: () => setOpen(true), style: { width: "auto" }, className: "mimicus-login-button__trigger", children: "Iniciar sesi\xF3n" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
          footer: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
        }
      )
    ] });
  }

  // src/contapyme/auth/caesar.ts
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

  // src/contapyme/auth/tokenStore.ts
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

  // src/contapyme/auth/orchestratorSession.ts
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
  function createDemoSession(initial3 = null) {
    let session = initial3;
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

  // src/shell/shellNavResolver.ts
  function sortedCategories(ctx) {
    const order = ctx.sectionOrder ?? [];
    return [...ctx.categories ?? []].sort(
      (a, b) => (order.indexOf(a) === -1 ? 99 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 99 : order.indexOf(b))
    );
  }
  function sectionMeta(ctx, sectionId) {
    return ctx.sectionsMeta?.[sectionId] ?? ctx.catalog?.sections?.[sectionId] ?? ctx.catalog?.categories?.[sectionId] ?? {};
  }
  function humanizeId(id) {
    if (!id) return "";
    return id.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().split(" ").map((w) => w ? w[0].toUpperCase() + w.slice(1) : "").join(" ");
  }
  function sectionAccentIndexFor(ctx, categoryId) {
    const i = sortedCategories(ctx).indexOf(categoryId);
    return i >= 0 ? i : 0;
  }
  function sectionAccentColorFor(ctx, categoryId) {
    const palette = ctx.sectionAccentColors ?? ctx.sectionColors ?? ["var(--mimicus-primary)"];
    const i = sectionAccentIndexFor(ctx, categoryId);
    return palette[i % palette.length];
  }
  function sectionColorSlotFor(ctx, categoryId) {
    return `accent-${sectionAccentIndexFor(ctx, categoryId)}`;
  }
  function sectionColorFor(ctx, categoryId) {
    return sectionAccentColorFor(ctx, categoryId);
  }
  function resolveCategoryTabDescriptors(ctx) {
    return sortedCategories(ctx).map((cat) => {
      const meta = sectionMeta(ctx, cat);
      return { id: cat, label: meta.label ?? humanizeId(cat), icon: meta.icon ?? "mdi:folder-outline", color: sectionColorFor(ctx, cat), colorSlot: sectionColorSlotFor(ctx, cat), kind: "category" };
    });
  }
  function resolveCatalogDemoTabDescriptors(ctx) {
    const { route, catalogItems } = ctx;
    if (!route?.category) return [];
    const color = sectionColorFor(ctx, route.category);
    const colorSlot = sectionColorSlotFor(ctx, route.category);
    return catalogItems.filter((it) => (it.section ?? it.category) === route.category).map((it) => ({
      id: it.slug,
      label: it.displayLabel ?? it.slug,
      icon: ctx.getDemoIcon?.(it) ?? it.icon ?? it.definition?.titleIcon ?? "mdi:file-document-outline",
      color,
      colorSlot,
      kind: "demo",
      category: route.category
    }));
  }
  function normalizeShellNavRows(shellConfig2) {
    if (shellConfig2?.navigation?.rows?.length) return shellConfig2.navigation.rows;
    const legacy = shellConfig2?.headerNav;
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
  function resolveShellNavigation(shellConfig2, ctx) {
    return {
      rows: normalizeShellNavRows(shellConfig2).map((row2) => ({
        id: row2.id ?? row2.tier ?? "nav",
        tier: row2.tier ?? "primary",
        when: row2.when ?? "always",
        visible: evaluateNavWhen(row2.when, ctx),
        tabs: resolveNavRowTabs(row2, ctx),
        value: resolveNavRowValue(row2, ctx)
      }))
    };
  }
  function dispatchShellNav(tabId, ctx, shellConfig2) {
    for (const row2 of normalizeShellNavRows(shellConfig2)) {
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

  // src/shell/NavTabRow.tsx
  var import_react34 = __require("react");
  var import_jsx_runtime46 = __require("react/jsx-runtime");
  function NavTabRow({ tabs = [], value, onChange, tier = "primary", className, tabHref }) {
    const secondary2 = tier === "secondary";
    const scrollerRef = (0, import_react34.useRef)(null);
    (0, import_react34.useEffect)(() => {
      if (!value || !scrollerRef.current) return;
      const active = scrollerRef.current.querySelector(".pg-nav-tab.is-active, .pg-nav-tab[aria-selected='true']");
      active?.scrollIntoView?.({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }, [value, tabs.length]);
    const onClick = (e, tab) => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: ["pg-nav-row", secondary2 ? "pg-nav-row--secondary" : "pg-nav-row--primary", className].filter(Boolean).join(" "), role: "tablist", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { ref: scrollerRef, className: "pg-nav-row__scroller custom-scrollbar", children: tabs.map((tab) => {
      const selected = value === tab.id;
      const label = tab.label || tab.title || tab.id;
      const tabColor = tab.color ?? "primary";
      const bowMix = `color-mix(in oklch, ${tabColor} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
      const wrapStyle = { "--sm-accent": tabColor, "--sm-accent-fg": bowMix };
      return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "pg-nav-tab__wrap", "data-section-color": tab.colorSlot ?? tabColor, style: wrapStyle, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
          title: tab.disabled ? tab.disabledTitle || "No disponible" : String(label),
          onClick: (e) => onClick(e, tab),
          onAuxClick: (e) => onClick(e, tab),
          icon: tab.icon ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("iconify-icon", { className: "pg-nav-tab__icon", icon: tab.disabled ? "mdi:lock-outline" : tab.icon, "aria-hidden": true }) : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "pg-nav-tab__label", children: label })
        }
      ) }, tab.id);
    }) }) });
  }

  // src/shell/ShellHeaderNav.tsx
  var import_react35 = __require("react");
  var import_jsx_runtime47 = __require("react/jsx-runtime");
  function ShellHeaderNav({ shellConfig: shellConfig2, ctx, onTab, className }) {
    const nav = (0, import_react35.useMemo)(() => resolveShellNavigation(shellConfig2, ctx), [shellConfig2, ctx]);
    const handleTab = onTab ?? ((id) => dispatchShellNav(id, ctx, shellConfig2));
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children: nav.rows.filter((row2) => row2.visible && row2.tabs.length > 0).map((row2) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(NavTabRow, { tier: row2.tier, tabs: row2.tabs, value: row2.value, onChange: handleTab, className }, row2.id)) });
  }

  // src/devkit/Playground.tsx
  var import_react42 = __require("react");

  // src/devkit/core/playgroundData.ts
  var _d = { catalogMeta: { sections: {} }, sectionsMeta: {}, shellConfig: {}, previewTemplates: {}, brand: {} };
  function configurePlayground(d) {
    _d = { ..._d, ...d || {} };
  }
  function playgroundData() {
    return _d;
  }

  // src/devkit/catalog/catalogUi.tsx
  var import_react37 = __require("react");

  // src/components/TitleCard.tsx
  var import_jsx_runtime48 = __require("react/jsx-runtime");
  function TitleCard2({
    title,
    titleId,
    icon = "mdi:circle-small",
    subtitle,
    sectionColor,
    className = "",
    as = "div",
    children
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      GlassHeaderBand,
      {
        as,
        compact: true,
        title,
        titleId,
        icon,
        subtitle,
        sectionColor,
        className: ["mimicus-title-card", className].filter(Boolean).join(" "),
        children
      }
    );
  }

  // src/devkit/catalog/sectionAccentPalette.ts
  var VARIED_HUES = [210, 350, 30, 270, 160, 220, 12, 290, 140, 340, 50, 250];
  function buildSectionAccentPalette(count = 12) {
    return Array.from({ length: count }, (_, i) => {
      const h = VARIED_HUES[i % VARIED_HUES.length];
      const s = 70 + i % 3 * 4;
      const l = 48 + i % 2 * 5;
      return `hsl(${h} ${s}% ${l}%)`;
    });
  }
  var DEFAULT_SECTION_ACCENT_PALETTE = buildSectionAccentPalette(12);
  function sectionAccentByIndex(index, palette = DEFAULT_SECTION_ACCENT_PALETTE) {
    if (index < 0) return palette[0];
    return palette[index % palette.length];
  }
  function sectionAccentSlot(index) {
    return `accent-${index >= 0 ? index : 0}`;
  }

  // src/devkit/shell/resolveShellConfig.ts
  function shellConfig() {
    return playgroundData().shellConfig ?? {};
  }
  function panelSizePx(open) {
    const s = shellConfig().panel?.size ?? {};
    const n = open ? s.expanded : s.collapsed;
    return Number(n) || (open ? 260 : 52);
  }
  function panelSizeCss(open) {
    const s = shellConfig().panel?.size ?? {};
    const unit = s.unit || "px";
    return `${panelSizePx(open)}${unit}`;
  }
  function panelStorageKey() {
    return shellConfig().panel?.storageKey || "mimicus:sidebarOpen";
  }
  function sectionColors() {
    const custom = shellConfig().theme?.sectionColors;
    if (Array.isArray(custom) && custom.length) return custom;
    return DEFAULT_SECTION_ACCENT_PALETTE;
  }

  // src/devkit/catalog/catalogSections.ts
  function catalogDef() {
    return playgroundData().catalogMeta ?? {};
  }
  function sectionsDef() {
    return playgroundData().sectionsMeta ?? {};
  }
  function sectionOrder() {
    return sectionsDef().order ?? Object.keys(catalogDef().sections ?? {});
  }
  function sectionMeta2() {
    return catalogDef().sections ?? sectionsDef().sections ?? {};
  }
  function overviewMeta() {
    return sectionsDef().overview ?? {};
  }
  function resolveItemSection(item) {
    const s = sectionsDef();
    return item.section ?? s.demoSection?.[item.id] ?? s.legacyCategory?.[item.category] ?? "other";
  }
  function sectionLabel(sectionId) {
    return sectionMeta2()[sectionId]?.label ?? sectionId;
  }
  function sectionDescription(sectionId) {
    return sectionMeta2()[sectionId]?.description ?? "";
  }
  function sectionIcon(sectionId) {
    return sectionMeta2()[sectionId]?.icon ?? "mdi:folder-outline";
  }
  function sectionAccentIndex(sectionId) {
    const i = sectionOrder().indexOf(sectionId);
    return i >= 0 ? i : 0;
  }
  function sectionAccentColor(sectionId) {
    return sectionAccentByIndex(sectionAccentIndex(sectionId), sectionColors());
  }
  function sectionColorToken(sectionId) {
    return sectionAccentSlot(sectionAccentIndex(sectionId));
  }
  function sectionsWithItems(items, filterFn = () => true) {
    return sectionOrder().filter((sid) => items.some((it) => resolveItemSection(it) === sid && filterFn(it)));
  }
  function itemsInSection(items, sectionId, filterFn = () => true) {
    return items.filter((it) => resolveItemSection(it) === sectionId && filterFn(it));
  }

  // src/devkit/shared/playgroundKit.ts
  var CSS_LEN_RE = /^(-?\d*\.?\d+)(px|rem|em|%|vh|vw|ch|ex)?$/i;
  var NONE_ICON = "mdi:block-helper";
  var COLOR_ICONS = {
    "": NONE_ICON,
    primary: "mdi:palette",
    "design-1": "mdi:circle",
    "design-2": "mdi:circle-half-full",
    "design-3": "mdi:triangle-outline",
    info: "mdi:information",
    success: "mdi:check-circle",
    warning: "mdi:alert",
    error: "mdi:close-circle",
    danger: "mdi:fire",
    color: "mdi:palette-swatch",
    neutral: "mdi:palette-swatch"
  };
  var VARIANT_ICONS = {
    solid: "mdi:checkbox-blank-circle",
    outlined: "mdi:checkbox-blank-circle-outline",
    ghost: "mdi:ghost-outline",
    soft: "mdi:blur",
    text: "mdi:format-text",
    glass: "mdi:shimmer",
    dashed: "mdi:vector-square",
    flat: "mdi:card-outline"
  };
  var SHAPE_ICONS = {
    round: "mdi:rounded-corner",
    rect: "mdi:square-outline",
    square: "mdi:square-outline",
    pill: "mdi:pill",
    circle: "mdi:circle-outline"
  };
  var TYPE_ICONS = { button: "mdi:gesture-tap", submit: "mdi:form-select", reset: "mdi:restore" };
  var PLACEMENT_ICONS = { start: "mdi:arrow-left", end: "mdi:arrow-right", top: "mdi:arrow-up", bottom: "mdi:arrow-down", left: "mdi:arrow-left", right: "mdi:arrow-right" };
  function defaultOptionIcon(fieldKey, value) {
    const v = String(value ?? "");
    const k = String(fieldKey ?? "").toLowerCase();
    if (k.includes("variant")) return VARIANT_ICONS[v];
    if (k.includes("shape")) return SHAPE_ICONS[v];
    if (k.includes("color")) return COLOR_ICONS[v];
    if (k === "type" || k.includes("htmltype")) return TYPE_ICONS[v];
    if (k.includes("placement") || k.includes("side") || k.includes("position")) return PLACEMENT_ICONS[v];
    return void 0;
  }
  var LAYOUT_PREVIEW_EMOJIS = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(
    "\u{1F602}\u2764\uFE0F\u{1F525}\u{1F60D}\u2728\u{1F389}\u{1F64F}\u{1F44D}\u2B50\u{1F4AF}\u{1F60A}\u{1F60E}\u{1F923}\u{1F622}\u{1F64C}\u{1F480}\u{1F64B}\u{1F64A}\u{1F31F}\u{1F680}\u{1F970}\u{1F618}\u{1F914}\u{1F605}\u{1F61C}\u{1F929}\u{1F631}\u{1F62D}\u{1F621}\u{1F97A}\u{1F634}\u{1F924}\u{1F92F}\u{1F917}\u{1F91D}\u{1F44F}\u{1F648}\u{1F436}\u{1F431}\u{1F984}\u{1F355}\u{1F354}\u{1F35F}\u{1F369}\u{1F366}\u{1F353}\u{1F34E}\u{1F347}\u{1F308}\u2600\uFE0F\u{1F319}"
  )].map((seg) => seg.segment);
  var CARD_PREVIEW_SAMPLE_TEXT = "Texto de ejemplo para la vista previa. Sirve \xFAnicamente para ver la tarjeta con contenido; no est\xE1 ligado a los valores del panel.";
  var CARD_INLINE_SAMPLE_TEXT = "Tarjeta inline";
  var CARD_INLINE_FLOW_BEFORE = "En el flujo del p\xE1rrafo, ";
  var CARD_INLINE_FLOW_AFTER = " y el texto contin\xFAa en la misma l\xEDnea cuando hay espacio.";
  function packCardRelieve(details) {
    const relieve = Math.round(Number(details?.relieve));
    return Number.isFinite(relieve) ? relieve : 65;
  }
  var colorOptions = [
    { label: "Ninguno", value: "" },
    { label: "Primario", value: "primary" },
    { label: "Design 1", value: "design-1" },
    { label: "Design 2", value: "design-2" },
    { label: "Design 3", value: "design-3" },
    { label: "Info", value: "info" },
    { label: "\xC9xito", value: "success" },
    { label: "Aviso", value: "warning" },
    { label: "Error", value: "error" },
    { label: "Peligro", value: "danger" },
    { label: "Neutro", value: "neutral" }
  ];
  var iconEnum = {
    "": "Ninguno",
    "mdi:gesture-tap": "Tap",
    "mdi:heart": "Coraz\xF3n",
    "mdi:star": "Estrella",
    "mdi:check": "Check",
    "mdi:alert": "Alerta",
    "mdi:home": "Inicio"
  };
  var MIMICUS_UI = {
    name: "Mimicus React",
    tagline: "Design system React",
    catalogLabel: "Components Overview",
    author: "Mimicus",
    description: "Cat\xE1logo y playground interactivo de Mimicus React: primitivas, layouts, navegaci\xF3n e inputs.",
    catalogLead: "Explora la biblioteca por categor\xEDas. Cada tarjeta abre un demo interactivo con vista previa, ejemplos y referencia de API."
  };
  function mimicusPageTitle(suffix) {
    if (suffix) return `${suffix} \xB7 ${MIMICUS_UI.name}`;
    return `${MIMICUS_UI.name} \u2014 ${MIMICUS_UI.tagline}`;
  }
  function demoSlug(id) {
    return String(id).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function optionsToItems(options) {
    if (Array.isArray(options)) return options.map((o) => [o.label ?? String(o.value ?? ""), o.value]);
    return Object.entries(options ?? {});
  }
  function columnsConfig(count, size = "md") {
    const n = Math.max(1, Number(count) || 1);
    if (size === "xs" || size === "sm") return Math.min(2, n);
    if (size === "lg" || size === "xl") return Math.min(4, n);
    return Math.min(3, n);
  }
  function columnsGridPlayground(size = "md") {
    return size === "xs" || size === "sm" ? 2 : size === "lg" || size === "xl" ? 4 : 3;
  }
  function mergeStyleString(base, extra) {
    const parts = [base, extra].filter((s) => s && String(s).trim());
    return parts.length ? parts.join("; ") : void 0;
  }
  function parseStyleString(str) {
    if (!str || typeof str !== "string") return void 0;
    const out = {};
    for (const part of str.split(";")) {
      const idx = part.indexOf(":");
      if (idx < 1) continue;
      const key = part.slice(0, idx).trim();
      const val = part.slice(idx + 1).trim();
      if (!key || !val) continue;
      const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      out[camel] = val;
    }
    return Object.keys(out).length ? out : void 0;
  }
  function normalizeCssLength(raw) {
    const s = String(raw ?? "").trim();
    if (!s) return "";
    const m = s.match(CSS_LEN_RE);
    if (!m) return s;
    const n = parseFloat(m[1]);
    if (!Number.isFinite(n)) return s;
    const unit = m[2] || "rem";
    return `${Math.round(n * 100) / 100}${unit}`;
  }
  function stepCssLength(raw, delta) {
    const s = String(raw ?? "").trim();
    const m = s.match(CSS_LEN_RE);
    if (!m) return normalizeCssLength(String((parseFloat(s) || 0) + delta));
    const n = (parseFloat(m[1]) || 0) + delta;
    return normalizeCssLength(`${n}${m[2] || "rem"}`);
  }
  function responsiveGridCols(count) {
    if (count <= 2) return 2;
    if (count <= 4) return Math.min(count, 3);
    if (count <= 6) return 3;
    return Math.min(4, count);
  }
  var filterAttrs = (attrs) => attrs.filter((a) => {
    if (!a || typeof a.name !== "string") return false;
    const t = a.type ?? (typeof a.value === "boolean" ? "bool" : typeof a.value === "number" ? "num" : typeof a.value === "string" ? "str" : void 0);
    if (t === "bind") return true;
    if (a.value === void 0 || a.value === null) return false;
    const def = a.default !== void 0 ? a.default : t === "str" ? "" : void 0;
    if (def !== void 0 && a.value === def) return false;
    return true;
  });
  var renderAttr = (a) => {
    const t = a.type ?? (typeof a.value === "boolean" ? "bool" : typeof a.value === "number" ? "num" : "str");
    if (t === "bool") return a.value ? a.name : a.explicitFalse ? `${a.name}={false}` : "";
    if (t === "bind") return a.value && a.value !== a.name ? `${a.name}={${a.value}}` : `${a.name}={${a.name}}`;
    if (t === "num") return `${a.name}={${a.value}}`;
    if (t === "color" || t === "str") return `${a.name}="${a.value}"`;
    return `${a.name}="${a.value}"`;
  };
  var plainHelpers = {
    txt: (s) => s,
    pt: (s) => s,
    comm: (s) => `/* ${s} */`,
    punc: (s) => s,
    cl: (s) => s,
    str: (s) => `"${s}"`,
    prop: (s) => s,
    kw: (s) => s
  };
  function buildTag(name, attrs = [], opts = {}, bodyFn) {
    const parts = filterAttrs(attrs).map(renderAttr).filter(Boolean);
    const open = parts.length ? `<${name} ${parts.join(" ")}>` : `<${name}>`;
    if (!bodyFn) return `${open} />`;
    const content = bodyFn(plainHelpers).split("\n").map((l) => l.trim()).filter(Boolean).join("\n  ");
    if (!content) return `${open}</${name}>`;
    return `${open}
  ${content}
</${name}>`;
  }
  var buildJsxTag = buildTag;

  // src/devkit/shell/routing.ts
  var VT_CARD_SOURCE = "pg-vt-card-source";
  var lastRoute = { category: null, slug: null };
  function navDepth(route) {
    if (!route.category) return 0;
    if (!route.slug) return 1;
    return 2;
  }
  function modeFor(from, to) {
    const df = navDepth(from);
    const dt = navDepth(to);
    if (dt === 0 && df > 0) return "home";
    if (dt > df) return "forward";
    if (dt < df) return "back";
    return "swap";
  }
  function supportsViewTransitions() {
    return typeof document !== "undefined" && "startViewTransition" in document;
  }
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function syncViewTransitionRoute(route) {
    lastRoute = { category: route.category, slug: route.slug };
  }
  function markViewTransitionCardSource(el) {
    if (!(el instanceof HTMLElement)) return;
    document.querySelectorAll(`.${VT_CARD_SOURCE}`).forEach((n) => n.classList.remove(VT_CARD_SOURCE));
    el.classList.add(VT_CARD_SOURCE);
  }
  async function flushDom() {
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }
  async function runViewTransition(update, nextRoute) {
    const from = { ...lastRoute };
    const to = nextRoute ?? from;
    const mode = modeFor(from, to);
    const apply = async () => {
      await Promise.resolve(update());
      await flushDom();
    };
    if (!supportsViewTransitions() || prefersReducedMotion()) {
      await apply();
      lastRoute = { category: to.category, slug: to.slug };
      return;
    }
    const root = document.documentElement;
    root.dataset.vt = mode;
    if (to.slug) root.dataset.vtSlug = to.slug;
    else delete root.dataset.vtSlug;
    try {
      const vt = document.startViewTransition(apply);
      await vt.finished;
    } catch {
      await apply();
    } finally {
      delete root.dataset.vt;
      delete root.dataset.vtSlug;
      document.querySelectorAll(`.${VT_CARD_SOURCE}`).forEach((n) => n.classList.remove(VT_CARD_SOURCE));
      lastRoute = { category: to.category, slug: to.slug };
    }
  }
  function routeFromNav(category, slug = null) {
    return { category, slug: slug ?? null };
  }
  function bootViewTransitionRoute() {
    syncViewTransitionRoute({ category: null, slug: null });
  }
  var URL_STATE_PARAM2 = "s";
  var STATE_VERSION2 = 1;
  function initial2() {
    return { v: STATE_VERSION2 };
  }
  function normalize2(raw) {
    if (!raw || typeof raw !== "object") return initial2();
    const o = raw;
    const out = { v: typeof o.v === "number" ? o.v : STATE_VERSION2 };
    if (typeof o.c === "string" && o.c.trim()) out.c = o.c.trim();
    if (typeof o.d === "string" && o.d.trim()) out.d = o.d.trim();
    if (o.e === 1 || o.e === true) out.e = 1;
    if (o.p === "palette" || o.p === "theme") out.p = "palette";
    if (out.p === "palette") {
      delete out.c;
      delete out.d;
    }
    if (out.d && !out.c) delete out.d;
    return out;
  }
  function slimForUrl2(state2) {
    const out = { v: state2.v ?? STATE_VERSION2 };
    if (state2.p === "palette") {
      out.p = "palette";
      if (state2.e === 1) out.e = 1;
      return out;
    }
    if (state2.c) out.c = state2.c;
    if (state2.d && state2.c) out.d = state2.d;
    if (state2.e === 1) out.e = 1;
    return out;
  }
  function mergeState(state2, partial) {
    if ("c" in partial && !partial.c) return initial2();
    if (partial.p === "palette") {
      const next2 = { v: STATE_VERSION2, p: "palette" };
      if (partial.e === 1 || state2.e === 1) next2.e = 1;
      return next2;
    }
    if (!partial.c) return state2;
    const next = { v: STATE_VERSION2, c: partial.c };
    if ("d" in partial) {
      if (partial.d) next.d = partial.d;
    } else if (state2.c === partial.c && state2.d) {
      next.d = state2.d;
    }
    if (partial.e === 1) next.e = 1;
    else if (partial.e === void 0 && state2.e === 1) next.e = 1;
    return next;
  }
  function stateToRoute(state2) {
    return { category: state2.c ?? null, slug: state2.d ?? null };
  }
  function isEmbedView(state2) {
    return state2.e === 1;
  }
  function b64urlEncode2(str) {
    return btoa(unescape(encodeURIComponent(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function b64urlDecode2(str) {
    let b = String(str).replace(/-/g, "+").replace(/_/g, "/");
    while (b.length % 4) b += "=";
    return decodeURIComponent(escape(atob(b)));
  }
  function createUrlState2() {
    let state2 = initial2();
    const listeners3 = /* @__PURE__ */ new Set();
    let writeTimer = null;
    let booted = false;
    const getSnapshot = () => ({ ...state2 });
    const readUrl2 = () => {
      const raw = new URLSearchParams(location.search).get(URL_STATE_PARAM2);
      if (!raw) return null;
      try {
        return normalize2(JSON.parse(b64urlDecode2(raw)));
      } catch {
        return null;
      }
    };
    const writeUrl = () => {
      try {
        const slimmed = slimForUrl2(state2);
        const json = JSON.stringify(slimmed);
        const url = new URL(location.href);
        if (json === "{}" || json === `{"v":${STATE_VERSION2}}`) url.searchParams.delete(URL_STATE_PARAM2);
        else url.searchParams.set(URL_STATE_PARAM2, b64urlEncode2(json));
        url.hash = "";
        history.replaceState({ pgNav: true }, "", url);
      } catch (e) {
        console.warn("urlState: no se pudo escribir ?s=", e);
      }
    };
    const scheduleWrite = () => {
      if (writeTimer) clearTimeout(writeTimer);
      writeTimer = setTimeout(writeUrl, 200);
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
      merge(partial) {
        state2 = mergeState(state2, partial);
        notify2();
        scheduleWrite();
        return getSnapshot();
      },
      reset() {
        state2 = initial2();
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
        state2 = readUrl2() ?? initial2();
        if (typeof window !== "undefined") {
          window.addEventListener("popstate", () => {
            const next = readUrl2() ?? initial2();
            void runViewTransition(() => {
              state2 = next;
              notify2();
            }, stateToRoute(next));
          });
        }
        return getSnapshot();
      }
    };
    return api;
  }
  var urlState2 = createUrlState2();
  if (typeof window !== "undefined") urlState2.boot();
  function setPaletteLab() {
    return urlState2.merge({ p: "palette" });
  }
  function setNav(category, slug = null) {
    if (!category) urlState2.reset();
    else if (slug) urlState2.merge({ c: category, d: slug });
    else urlState2.merge({ c: category, d: void 0 });
    void runViewTransition(() => {
    }, routeFromNav(category, slug));
  }

  // src/devkit/catalog/catalogUi.tsx
  var import_jsx_runtime49 = __require("react/jsx-runtime");
  var demoIcons = {
    Button: "mdi:gesture-tap-button",
    ButtonIconify: "mdi:button-pointer",
    FloatButton: "mdi:plus-circle-outline",
    Fab: "mdi:plus-circle",
    Switch: "mdi:toggle-switch-outline",
    CheckboxIcon: "mdi:check-bold",
    BlockLayout: "mdi:rectangle-outline",
    Card: "mdi:card-outline",
    FlexLayout: "mdi:view-week-outline",
    GridLayout: "mdi:grid",
    Box: "mdi:checkbox-blank-outline",
    Container: "mdi:page-layout-body",
    Stack: "mdi:view-agenda-outline",
    Space: "mdi:arrow-expand-horizontal",
    Masonry: "mdi:view-dashboard-variant",
    ImageList: "mdi:image-multiple-outline",
    ActionDrawer: "mdi:dock-right",
    Loading: "mdi:loading",
    Modal: "mdi:application-outline",
    Headings: "mdi:format-header-pound",
    Iconify: "mdi:emoticon-outline",
    Text: "mdi:format-text",
    Chip: "mdi:tag-outline",
    CheckboxChip: "mdi:checkbox-multiple-blank-circle-outline",
    Accordion: "mdi:unfold-more-horizontal",
    Tabs: "mdi:tab",
    Toaster: "mdi:bell-badge-outline",
    Tooltip: "mdi:tooltip-text-outline",
    CodeBlock: "mdi:code-tags",
    Anchor: "mdi:anchor",
    TransferBoard: "mdi:view-column-outline",
    Splitter: "mdi:arrow-split-vertical",
    Divider: "mdi:minus",
    AppLayout: "mdi:view-dashboard-outline",
    SidePanel: "mdi:dock-left",
    Separator: "mdi:minus",
    Alert: "mdi:alert-circle-outline",
    TipInfo: "mdi:information-outline",
    FlexOptions: "mdi:dots-horizontal-circle-outline",
    InvokedFloater: "mdi:message-arrow-right-outline",
    FloatingComponent: "mdi:arrange-bring-forward",
    GridResponsiveForm: "mdi:form-select",
    LabeledSwitch: "mdi:toggle-switch-outline",
    FpsHistogram: "mdi:chart-timeline-variant-shimmer"
  };
  function getDemoIcon(demoId, item) {
    return item?.definition?.titleIcon ?? demoIcons[demoId] ?? "mdi:circle-small";
  }
  var accent = "var(--catalog-sketch-accent, var(--mimicus-primary))";
  var stroke = "currentColor";
  var faint = 0.32;
  function DefaultSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "32", y: "24", width: "56", height: "32", rx: "7", stroke, strokeWidth: "1.3", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "7", fill: accent, fillOpacity: "0.2", stroke: accent, strokeWidth: "1.5" })
    ] });
  }
  function ButtonSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "14", y: "30", width: "40", height: "16", rx: "5", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "22", y1: "38", x2: "46", y2: "38", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "66", y: "30", width: "40", height: "16", rx: "5", stroke, strokeWidth: "1.3", opacity: 0.32 })
    ] });
  }
  function FloatButtonSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "16", width: "84", height: "48", rx: "6", stroke, strokeWidth: "1.1", opacity: 0.22 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "86", cy: "52", r: "11", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "86", y1: "47", x2: "86", y2: "57", stroke: accent, strokeWidth: "1.7", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "81", y1: "52", x2: "91", y2: "52", stroke: accent, strokeWidth: "1.7", strokeLinecap: "round" })
    ] });
  }
  function LinkSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "30", y1: "44", x2: "74", y2: "44", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M52 34 h22 a6 6 0 0 1 0 12 h-10", stroke: accent, strokeWidth: "1.5", fill: "none", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M68 34 h-22 a6 6 0 0 0 0 12 h10", stroke, strokeWidth: "1.4", fill: "none", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function CardSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "16", width: "68", height: "52", rx: "7", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "16", width: "68", height: "14", rx: "7", fill: accent, fillOpacity: "0.25" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "34", y1: "40", x2: "86", y2: "40", stroke, strokeWidth: "1.3", opacity: faint })
    ] });
  }
  function BoxSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "20", width: "60", height: "40", rx: "5", fill: accent, fillOpacity: "0.12", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "38", y: "28", width: "44", height: "24", rx: "3", stroke, strokeWidth: "1.2", opacity: faint, strokeDasharray: "3 3" })
    ] });
  }
  function ContainerSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "14", y: "16", width: "92", height: "48", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "22", width: "52", height: "36", rx: "4", fill: accent, fillOpacity: "0.14", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "16", x2: "28", y2: "64", stroke, strokeWidth: "1", opacity: 0.22, strokeDasharray: "3 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "92", y1: "16", x2: "92", y2: "64", stroke, strokeWidth: "1", opacity: 0.22, strokeDasharray: "3 3" })
    ] });
  }
  function GridSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: [26, 50, 74].map(
      (x) => [22, 46].map((y) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x, y, width: "18", height: "14", rx: "3", fill: accent, fillOpacity: "0.14", stroke: accent, strokeWidth: "1.2" }, `${x}-${y}`))
    ) });
  }
  function MasonrySketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "20", width: "20", height: "24", rx: "3", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "48", width: "20", height: "14", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "50", y: "20", width: "20", height: "14", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "50", y: "38", width: "20", height: "24", rx: "3", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "74", y: "20", width: "20", height: "20", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "74", y: "44", width: "20", height: "18", rx: "3", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.2" })
    ] });
  }
  function ImageListSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      [26, 50, 74].map(
        (x) => [22, 46].map((y) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x, y, width: "18", height: "14", rx: "2", fill: accent, fillOpacity: "0.1", stroke: accent, strokeWidth: "1.1" }, `${x}-${y}`))
      ),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "32", cy: "28", r: "2.2", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M28 36 l5 -5 l4 4 l3 -3 l4 4", stroke: accent, strokeWidth: "1.2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function FlexSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "18", width: "84", height: "44", rx: "6", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "26", width: "20", height: "28", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "50", y: "26", width: "20", height: "28", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "76", y: "26", width: "20", height: "28", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" })
    ] });
  }
  function StackSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "20", width: "52", height: "11", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "35", width: "52", height: "11", rx: "3", fill: accent, fillOpacity: "0.14", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "50", width: "52", height: "11", rx: "3", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function SpaceSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "32", width: "18", height: "16", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "80", y: "32", width: "18", height: "16", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "44", y1: "40", x2: "76", y2: "40", stroke, strokeWidth: "1.2", opacity: faint, strokeDasharray: "3 3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M48 36 l-4 4 l4 4 M72 36 l4 4 l-4 4", stroke: accent, strokeWidth: "1.3", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function AppShellSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "16", width: "88", height: "48", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "16", width: "88", height: "11", rx: "5", fill: accent, fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "27", width: "22", height: "37", fill: accent, fillOpacity: "0.12", stroke: accent, strokeWidth: "1.1" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "46", y1: "36", x2: "96", y2: "36", stroke, strokeWidth: "1.1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "46", y1: "46", x2: "96", y2: "46", stroke, strokeWidth: "1.1", opacity: faint })
    ] });
  }
  function SplitterSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "20", width: "84", height: "40", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "60", y1: "20", x2: "60", y2: "60", stroke: accent, strokeWidth: "1.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "6", fill: accent, fillOpacity: "0.2", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M50 36 l-4 4 l4 4 M70 36 l4 4 l-4 4", stroke: accent, strokeWidth: "1.3", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function DividerSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "30", x2: "94", y2: "30", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "40", x2: "94", y2: "40", stroke: accent, strokeWidth: "1.8", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "50", x2: "94", y2: "50", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function SwitchSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "34", width: "52", height: "20", rx: "10", fill: accent, fillOpacity: "0.15", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "48", cy: "44", r: "7", fill: accent, fillOpacity: "0.85" })
    ] });
  }
  function ToggleButtonSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "32", width: "72", height: "18", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "32", width: "36", height: "18", rx: "5", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "60", y1: "32", x2: "60", y2: "50", stroke, strokeWidth: "1.1", opacity: faint })
    ] });
  }
  function CheckboxChipSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "32", width: "68", height: "18", rx: "9", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "37", cy: "41", r: "5", fill: accent, fillOpacity: "0.3", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M34.5 41 l1.8 1.8 l3.2 -3.6", stroke: accent, strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "48", y1: "41", x2: "86", y2: "41", stroke, strokeWidth: "1.4", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function CheckRadioSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "28", width: "16", height: "16", rx: "3", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M33.5 36 l3 3 l6 -7", stroke: accent, strokeWidth: "1.7", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "78", cy: "36", r: "9", stroke, strokeWidth: "1.4", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "78", cy: "36", r: "4", fill: accent, fillOpacity: "0.85" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "30", y1: "54", x2: "90", y2: "54", stroke, strokeWidth: "1.2", opacity: 0.2 })
    ] });
  }
  function InputSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "32", width: "80", height: "18", rx: "4", stroke: accent, strokeWidth: "1.4", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "41", x2: "28", y2: "41", stroke: accent, strokeWidth: "0" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "27", y: "36", width: "1.6", height: "10", rx: "1", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "33", y1: "41", x2: "70", y2: "41", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function InputNumberSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "32", width: "80", height: "18", rx: "4", stroke: accent, strokeWidth: "1.4", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "41", x2: "60", y2: "41", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "84", y1: "32", x2: "84", y2: "50", stroke, strokeWidth: "1.1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M88 39 l3 -3 l3 3 M88 43 l3 3 l3 -3", stroke: accent, strokeWidth: "1.3", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function SelectSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "28", width: "80", height: "18", rx: "4", stroke: accent, strokeWidth: "1.4", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "37", x2: "68", y2: "37", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M85 34 l4 4 l4 -4", stroke: accent, strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "50", width: "80", height: "12", rx: "3", fill: accent, fillOpacity: "0.1", stroke, strokeWidth: "1", opacity: 0.5 })
    ] });
  }
  function CalendarSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "28", y: "20", width: "64", height: "44", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "28", y: "20", width: "64", height: "12", rx: "5", fill: accent, fillOpacity: "0.22" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "40", y1: "16", x2: "40", y2: "24", stroke: accent, strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "80", y1: "16", x2: "80", y2: "24", stroke: accent, strokeWidth: "1.5", strokeLinecap: "round" }),
      [38, 50, 62, 74].map(
        (x) => [40, 52].map((y) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: x, cy: y, r: "2.2", fill: x === 50 && y === 52 ? accent : stroke, opacity: x === 50 && y === 52 ? 1 : faint }, `${x}-${y}`))
      )
    ] });
  }
  function TimeSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "22", stroke, strokeWidth: "1.3", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "60", y1: "40", x2: "60", y2: "26", stroke: accent, strokeWidth: "1.7", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "60", y1: "40", x2: "72", y2: "44", stroke: accent, strokeWidth: "1.7", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "2.4", fill: accent })
    ] });
  }
  function ColorPickerSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "20", width: "60", height: "36", rx: "5", stroke, strokeWidth: "1.2", opacity: faint, fill: accent, fillOpacity: "0.1" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "56", cy: "36", r: "7", fill: accent, fillOpacity: "0.5", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "60", width: "60", height: "6", rx: "3", fill: accent, fillOpacity: "0.25", stroke: accent, strokeWidth: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "70", cy: "63", r: "3.5", fill: accent, stroke, strokeWidth: "1" })
    ] });
  }
  function SliderSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "24", y1: "40", x2: "96", y2: "40", stroke, strokeWidth: "1.4", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "24", y1: "40", x2: "64", y2: "40", stroke: accent, strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "64", cy: "40", r: "7", fill: accent, fillOpacity: "0.25", stroke: accent, strokeWidth: "1.6" })
    ] });
  }
  function RateSketch() {
    const star = (cx6, on2) => `M${cx6} 32 l2.4 5 l5.4 .6 l-4 3.7 l1.1 5.3 l-4.9 -2.7 l-4.9 2.7 l1.1 -5.3 l-4 -3.7 l5.4 -.6 z`;
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: star(36), fill: accent, fillOpacity: "0.7", stroke: accent, strokeWidth: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: star(60), fill: accent, fillOpacity: "0.7", stroke: accent, strokeWidth: "1" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: star(84), fill: "none", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function UploadSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "22", width: "68", height: "40", rx: "6", stroke: accent, strokeWidth: "1.4", strokeDasharray: "4 3", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M60 52 l0 -18 M52 40 l8 -8 l8 8", stroke: accent, strokeWidth: "1.7", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function TransferSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "22", width: "32", height: "36", rx: "4", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "68", y: "22", width: "32", height: "36", rx: "4", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "25", y: "28", width: "22", height: "6", rx: "2", fill: accent, fillOpacity: "0.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "73", y: "28", width: "22", height: "6", rx: "2", fill: accent, fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M55 36 l8 0 M60 33 l4 3 l-4 3", stroke: accent, strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M65 46 l-8 0 M60 43 l-4 3 l4 3", stroke: accent, strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function FormSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "16", width: "72", height: "48", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "32", y1: "26", x2: "52", y2: "26", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "32", y: "30", width: "56", height: "9", rx: "2", stroke: accent, strokeWidth: "1.2", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "32", y1: "46", x2: "48", y2: "46", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "32", y: "50", width: "30", height: "9", rx: "2", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.2" })
    ] });
  }
  function TextSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "28", x2: "94", y2: "28", stroke, strokeWidth: "1.6", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "38", x2: "86", y2: "38", stroke, strokeWidth: "1.6", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "48", x2: "90", y2: "48", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "26", y1: "58", x2: "60", y2: "58", stroke, strokeWidth: "1.6", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function HeadingsSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("text", { x: "30", y: "48", fontSize: "34", fontWeight: "700", fill: accent, fillOpacity: "0.85", fontFamily: "sans-serif", children: "H" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "58", y1: "30", x2: "92", y2: "30", stroke, strokeWidth: "1.5", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "58", y1: "42", x2: "86", y2: "42", stroke, strokeWidth: "1.5", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "58", y1: "54", x2: "90", y2: "54", stroke, strokeWidth: "1.5", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function CodeBlockSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "20", width: "76", height: "40", rx: "5", stroke, strokeWidth: "1.2", opacity: faint, fill: accent, fillOpacity: "0.05" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M44 32 l-7 8 l7 8 M76 32 l7 8 l-7 8", stroke: accent, strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "56", y1: "30", x2: "64", y2: "50", stroke: accent, strokeWidth: "1.5", strokeLinecap: "round" })
    ] });
  }
  function TabsSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "24", width: "80", height: "36", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "24", width: "28", height: "13", rx: "5", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "48", y1: "37", x2: "100", y2: "37", stroke, strokeWidth: "1.1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "56", y1: "31", x2: "70", y2: "31", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "80", y1: "31", x2: "94", y2: "31", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function MenuSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "20", width: "52", height: "44", rx: "5", stroke, strokeWidth: "1.2", opacity: faint, fill: accent, fillOpacity: "0.05" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "20", width: "52", height: "12", rx: "5", fill: accent, fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "42", y1: "42", x2: "78", y2: "42", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "42", y1: "52", x2: "70", y2: "52", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function BreadcrumbSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "22", y1: "40", x2: "40", y2: "40", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M46 35 l5 5 l-5 5", stroke, strokeWidth: "1.3", fill: "none", opacity: faint, strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "56", y1: "40", x2: "72", y2: "40", stroke, strokeWidth: "1.5", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M78 35 l5 5 l-5 5", stroke, strokeWidth: "1.3", fill: "none", opacity: faint, strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "88", y1: "40", x2: "98", y2: "40", stroke, strokeWidth: "1.5", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function PaginationSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: [26, 46, 66, 86].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x, y: "32", width: "16", height: "16", rx: "4", fill: i === 1 ? accent : "none", fillOpacity: i === 1 ? 0.22 : 0, stroke: i === 1 ? accent : stroke, strokeWidth: i === 1 ? 1.4 : 1.2, opacity: i === 1 ? 1 : faint }, x)) });
  }
  function StepsSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "30", y1: "40", x2: "90", y2: "40", stroke, strokeWidth: "1.3", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "30", cy: "40", r: "6", fill: accent, fillOpacity: "0.3", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M27.5 40 l1.8 1.8 l3.2 -3.6", stroke: accent, strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "6", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "90", cy: "40", r: "6", stroke, strokeWidth: "1.3", opacity: faint })
    ] });
  }
  function BottomNavSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "20", width: "84", height: "40", rx: "5", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "18", y1: "48", x2: "102", y2: "48", stroke, strokeWidth: "1.1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "38", cy: "54", r: "3", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "54", r: "3", fill: stroke, opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "82", cy: "54", r: "3", fill: stroke, opacity: faint })
    ] });
  }
  function SpeedDialSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "84", cy: "56", r: "10", fill: accent, fillOpacity: "0.22", stroke: accent, strokeWidth: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "84", y1: "51", x2: "84", y2: "61", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "79", y1: "56", x2: "89", y2: "56", stroke: accent, strokeWidth: "1.6", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "84", cy: "34", r: "5", stroke, strokeWidth: "1.3", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "62", cy: "48", r: "5", stroke, strokeWidth: "1.3", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "84", y1: "46", x2: "84", y2: "39", stroke, strokeWidth: "1", opacity: 0.25, strokeDasharray: "2 2" })
    ] });
  }
  function DrawerSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "18", width: "84", height: "44", rx: "5", stroke, strokeWidth: "1.1", opacity: 0.22 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "66", y: "18", width: "36", height: "44", rx: "5", fill: accent, fillOpacity: "0.14", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "74", y1: "30", x2: "94", y2: "30", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "74", y1: "40", x2: "90", y2: "40", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function ModalSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "14", width: "76", height: "52", rx: "6", stroke, strokeWidth: "1.1", opacity: 0.22 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "22", width: "60", height: "36", rx: "5", fill: accent, fillOpacity: "0.12", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "38", y1: "32", x2: "82", y2: "32", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function AlertSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "30", width: "76", height: "20", rx: "5", fill: accent, fillOpacity: "0.12", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "34", cy: "40", r: "6", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "34", y1: "37", x2: "34", y2: "41", stroke: accent, strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "34", cy: "44", r: "0.9", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "46", y1: "40", x2: "88", y2: "40", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function TooltipSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "22", width: "52", height: "22", rx: "5", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M54 44 l6 7 l6 -7 z", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "42", y1: "33", x2: "78", y2: "33", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "58", r: "3", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function TourSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "18", y: "18", width: "84", height: "44", rx: "5", stroke, strokeWidth: "1.1", opacity: 0.22 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "40", cy: "40", r: "11", stroke: accent, strokeWidth: "1.5", strokeDasharray: "3 2", fill: accent, fillOpacity: "0.08" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "58", y: "32", width: "38", height: "18", rx: "4", fill: accent, fillOpacity: "0.14", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "64", y1: "41", x2: "90", y2: "41", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function BadgeSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "30", y: "34", width: "40", height: "16", rx: "8", fill: accent, fillOpacity: "0.2", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "38", y1: "42", x2: "62", y2: "42", stroke: accent, strokeWidth: "1.4", opacity: 0.6, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "78", cy: "30", r: "7", fill: accent, fillOpacity: "0.85" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "78", cy: "30", r: "7", stroke, strokeWidth: "1.1", opacity: 0.2 })
    ] });
  }
  function AvatarSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "20", fill: accent, fillOpacity: "0.12", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "34", r: "6", fill: accent, fillOpacity: "0.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M48 54 a12 10 0 0 1 24 0", fill: accent, fillOpacity: "0.3" })
    ] });
  }
  function TableSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "20", width: "80", height: "40", rx: "4", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "20", width: "80", height: "11", fill: accent, fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "20", y1: "42", x2: "100", y2: "42", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "46", y1: "20", x2: "46", y2: "60", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "73", y1: "20", x2: "73", y2: "60", stroke, strokeWidth: "1", opacity: faint })
    ] });
  }
  function DataGridSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "18", width: "88", height: "46", rx: "4", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "18", width: "88", height: "11", fill: accent, fillOpacity: "0.22" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "16", y: "18", width: "16", height: "46", fill: accent, fillOpacity: "0.08" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "32", y1: "18", x2: "32", y2: "64", stroke: accent, strokeWidth: "1.1", opacity: "0.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "58", y1: "18", x2: "58", y2: "64", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "82", y1: "18", x2: "82", y2: "64", stroke, strokeWidth: "1", opacity: faint }),
      [40, 51, 62].map((y) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "16", y1: y, x2: "104", y2: y, stroke, strokeWidth: "0.9", opacity: faint }, y)),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M88 21 l3 3 l3 -3", stroke: accent, strokeWidth: "1.3", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "20", y: "33", width: "8", height: "4", rx: "1", fill: accent, fillOpacity: "0.6" })
    ] });
  }
  function ListSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: [26, 38, 50].map((y) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "32", cy: y, r: "3", fill: accent, fillOpacity: "0.7" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "42", y1: y, x2: "92", y2: y, stroke, strokeWidth: "1.4", opacity: faint, strokeLinecap: "round" })
    ] }, y)) });
  }
  function TreeSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "26", y: "24", width: "14", height: "9", rx: "2", fill: accent, fillOpacity: "0.3", stroke: accent, strokeWidth: "1.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M33 33 v8 h10 M33 41 v8 h10", stroke, strokeWidth: "1.2", opacity: faint, fill: "none" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "46", y: "37", width: "14", height: "9", rx: "2", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "46", y: "45", width: "14", height: "9", rx: "2", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "66", y: "24", width: "26", height: "9", rx: "2", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function TimelineSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "36", y1: "20", x2: "36", y2: "60", stroke, strokeWidth: "1.3", opacity: faint }),
      [26, 40, 54].map((y, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "36", cy: y, r: "4", fill: i === 0 ? accent : "none", fillOpacity: i === 0 ? 0.4 : 0, stroke: accent, strokeWidth: "1.4" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "46", y1: y, x2: i === 0 ? 90 : 78, y2: y, stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" })
      ] }, y))
    ] });
  }
  function AccordionSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "20", width: "72", height: "14", rx: "3", fill: accent, fillOpacity: "0.18", stroke: accent, strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M84 25 l4 4 l4 -4", stroke: accent, strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "38", width: "72", height: "22", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "32", y1: "46", x2: "80", y2: "46", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "32", y1: "53", x2: "68", y2: "53", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function CarouselSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "40", y: "24", width: "40", height: "32", rx: "4", fill: accent, fillOpacity: "0.16", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "24", y: "30", width: "14", height: "20", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "82", y: "30", width: "14", height: "20", rx: "3", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "54", cy: "62", r: "2", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "62", r: "2", fill: stroke, opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "66", cy: "62", r: "2", fill: stroke, opacity: faint })
    ] });
  }
  function StatisticSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "30", y1: "26", x2: "58", y2: "26", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("text", { x: "29", y: "48", fontSize: "20", fontWeight: "700", fill: accent, fillOpacity: "0.85", fontFamily: "sans-serif", children: "1.2K" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M76 50 l6 -8 l5 4 l8 -12", stroke: accent, strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M95 34 l0 5 l-5 0", stroke: accent, strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  function QRCodeSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "20", width: "14", height: "14", rx: "2", stroke: accent, strokeWidth: "1.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "72", y: "20", width: "14", height: "14", rx: "2", stroke: accent, strokeWidth: "1.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "34", y: "46", width: "14", height: "14", rx: "2", stroke: accent, strokeWidth: "1.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "38", y: "24", width: "6", height: "6", fill: accent, fillOpacity: "0.7" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "72", y: "46", width: "5", height: "5", fill: stroke, opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "81", y: "46", width: "5", height: "5", fill: accent, fillOpacity: "0.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "72", y: "55", width: "5", height: "5", fill: accent, fillOpacity: "0.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "81", y: "55", width: "5", height: "5", fill: stroke, opacity: faint })
    ] });
  }
  function EmptySketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("ellipse", { cx: "60", cy: "56", rx: "26", ry: "5", fill: stroke, opacity: 0.14 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "40", y: "28", width: "40", height: "24", rx: "4", stroke: accent, strokeWidth: "1.4", strokeDasharray: "4 3", fill: accent, fillOpacity: "0.06" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "48", y1: "40", x2: "72", y2: "40", stroke, strokeWidth: "1.2", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function DescriptionsSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "22", width: "76", height: "36", rx: "4", stroke, strokeWidth: "1.2", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "56", y1: "22", x2: "56", y2: "58", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "22", y1: "34", x2: "98", y2: "34", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "22", y1: "46", x2: "98", y2: "46", stroke, strokeWidth: "1", opacity: faint }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "28", x2: "48", y2: "28", stroke: accent, strokeWidth: "1.3", opacity: 0.6, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "28", y1: "40", x2: "48", y2: "40", stroke: accent, strokeWidth: "1.3", opacity: 0.6, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "62", y1: "28", x2: "90", y2: "28", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "62", y1: "40", x2: "84", y2: "40", stroke, strokeWidth: "1.3", opacity: faint, strokeLinecap: "round" })
    ] });
  }
  function LoadingSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "16", stroke, strokeWidth: "2.4", opacity: 0.2 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M60 24 a16 16 0 0 1 16 16", stroke: accent, strokeWidth: "2.6", fill: "none", strokeLinecap: "round" })
    ] });
  }
  function FpsHistogramSketch() {
    const bars = [14, 22, 12, 28, 18, 24, 10, 20];
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      bars.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: 26 + i * 9, y: 58 - h, width: "6", height: h, rx: "1.5", fill: accent, fillOpacity: i % 2 ? 0.3 : 0.55, stroke: accent, strokeWidth: "0.8" }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "24", y1: "58", x2: "98", y2: "58", stroke, strokeWidth: "1.2", opacity: faint })
    ] });
  }
  function IconifySketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "60", cy: "40", r: "20", stroke: accent, strokeWidth: "1.5", fill: accent, fillOpacity: "0.08" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "53", cy: "36", r: "2.4", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("circle", { cx: "67", cy: "36", r: "2.4", fill: accent }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M51 47 a10 8 0 0 0 18 0", stroke: accent, strokeWidth: "1.6", fill: "none", strokeLinecap: "round" })
    ] });
  }
  function LoginButtonSketch() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("rect", { x: "22", y: "30", width: "56", height: "18", rx: "5", fill: accent, fillOpacity: "0.2", stroke: accent, strokeWidth: "1.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("line", { x1: "30", y1: "39", x2: "58", y2: "39", stroke: accent, strokeWidth: "1.4", opacity: 0.6, strokeLinecap: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("path", { d: "M82 33 l8 6 l-8 6 M74 39 l14 0", stroke: accent, strokeWidth: "1.6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  var SKETCHES = {
    // Botones
    Button: ButtonSketch,
    ButtonIconify: ButtonSketch,
    FloatButton: FloatButtonSketch,
    Fab: FloatButtonSketch,
    Link: LinkSketch,
    // Superficie
    Card: CardSketch,
    Box: BoxSketch,
    Container: ContainerSketch,
    // Layout grid
    GridLayout: GridSketch,
    BlockLayout: GridSketch,
    Masonry: MasonrySketch,
    ImageList: ImageListSketch,
    GridResponsiveForm: GridSketch,
    // Layout flex
    FlexLayout: FlexSketch,
    Stack: StackSketch,
    Space: SpaceSketch,
    FlexOptions: FlexSketch,
    // App shell
    AppLayout: AppShellSketch,
    SidePanel: AppShellSketch,
    // Splitter / Divider
    Splitter: SplitterSketch,
    Divider: DividerSketch,
    Separator: DividerSketch,
    // Toggles
    Switch: SwitchSketch,
    LabeledSwitch: SwitchSketch,
    ToggleButton: ToggleButtonSketch,
    CheckboxChip: CheckboxChipSketch,
    CheckboxIcon: CheckRadioSketch,
    // Check / Radio
    Checkbox: CheckRadioSketch,
    Radio: CheckRadioSketch,
    // Inputs
    Input: InputSketch,
    TextField: InputSketch,
    InputNumber: InputNumberSketch,
    Mentions: InputSketch,
    AutoComplete: InputSketch,
    // Selects
    Select: SelectSketch,
    Cascader: SelectSketch,
    TreeSelect: SelectSketch,
    // Fecha / hora
    DatePicker: CalendarSketch,
    Calendar: CalendarSketch,
    TimePicker: TimeSketch,
    // ColorPicker / Slider / Rate / Upload / Transfer / Form
    ColorPicker: ColorPickerSketch,
    Slider: SliderSketch,
    Rate: RateSketch,
    Rating: RateSketch,
    Upload: UploadSketch,
    Transfer: TransferSketch,
    TransferBoard: TransferSketch,
    Form: FormSketch,
    // Texto
    Text: TextSketch,
    Headings: HeadingsSketch,
    CodeBlock: CodeBlockSketch,
    // Nav
    Tabs: TabsSketch,
    Segmented: TabsSketch,
    Menu: MenuSketch,
    Dropdown: MenuSketch,
    Breadcrumb: BreadcrumbSketch,
    Anchor: BreadcrumbSketch,
    Pagination: PaginationSketch,
    Steps: StepsSketch,
    Stepper: StepsSketch,
    BottomNavigation: BottomNavSketch,
    SpeedDial: SpeedDialSketch,
    // Overlays
    Drawer: DrawerSketch,
    ActionDrawer: DrawerSketch,
    InvokedFloater: DrawerSketch,
    FloatingComponent: DrawerSketch,
    Modal: ModalSketch,
    Alert: AlertSketch,
    Toaster: AlertSketch,
    TipInfo: AlertSketch,
    Tooltip: TooltipSketch,
    Tour: TourSketch,
    // Display
    Badge: BadgeSketch,
    Tag: BadgeSketch,
    Chip: BadgeSketch,
    Avatar: AvatarSketch,
    Table: TableSketch,
    DataGrid: DataGridSketch,
    List: ListSketch,
    Descriptions: DescriptionsSketch,
    Tree: TreeSketch,
    Timeline: TimelineSketch,
    Accordion: AccordionSketch,
    Collapse: AccordionSketch,
    Carousel: CarouselSketch,
    Statistic: StatisticSketch,
    QRCode: QRCodeSketch,
    Empty: EmptySketch,
    // Misc
    Loading: LoadingSketch,
    Spinner: LoadingSketch,
    FpsHistogram: FpsHistogramSketch,
    Iconify: IconifySketch,
    LoginButton: LoginButtonSketch
  };
  function DemoSketch({ demoId }) {
    const Inner = SKETCHES[demoId] ?? DefaultSketch;
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("svg", { className: "demo-sketch", viewBox: "0 0 120 80", "aria-hidden": true, fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Inner, {}) });
  }
  function CatalogCard({ demoId, displayLabel, sectionId, onSelect }) {
    const sectionSlot = sectionColorToken(sectionId);
    const accent2 = sectionAccentColor(sectionId);
    const accentStyle = { "--sm-accent": accent2 };
    const handleSelect = (e) => {
      markViewTransitionCardSource(e.currentTarget);
      onSelect?.();
    };
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
      "button",
      {
        type: "button",
        className: "catalog-card",
        "data-section-color": sectionSlot,
        style: accentStyle,
        onClick: handleSelect,
        title: `Abrir demo ${displayLabel}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "catalog-card__preview", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DemoSketch, { demoId }) }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(TitleCard2, { title: displayLabel, icon: getDemoIcon(demoId), sectionColor: accent2 })
        ]
      }
    );
  }
  function CatalogHome({
    items = [],
    onSelect,
    onOpenPaletteLab,
    filterSection = null
  }) {
    const [query, setQuery] = (0, import_react37.useState)("");
    const q = query.trim().toLowerCase();
    const filtered = (0, import_react37.useMemo)(() => {
      if (!q) return items;
      return items.filter((it) => [it.displayLabel, it.id, it.label, sectionLabel(it.section)].some((s) => String(s ?? "").toLowerCase().includes(q)));
    }, [items, q]);
    const visibleSections = filterSection ? [filterSection] : sectionsWithItems(filtered);
    const showHero = !filterSection;
    const overview = overviewMeta();
    const heroTitle = filterSection ? sectionLabel(filterSection) : overview.title ?? "Components Overview";
    const heroLead = filterSection ? sectionDescription(filterSection) : overview.lead ?? MIMICUS_UI.catalogLead;
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "catalog-overview", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "catalog-overview__main catalog-home", children: [
      showHero && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("header", { className: "catalog-overview__hero pg-vt-hero", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "catalog-overview__hero-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "catalog-overview__hero-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "catalog-home__kicker mimicus-ui-brand", children: overview.kicker ?? MIMICUS_UI.name }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "catalog-home__title", children: heroTitle }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "catalog-home__lead", children: heroLead }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "catalog-overview__toolbar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
              Input,
              {
                className: "catalog-search",
                type: "search",
                placeholder: "Buscar componente\u2026",
                "aria-label": "Buscar componente",
                value: query,
                onChange: (v) => setQuery(v),
                allowClear: true,
                prefix: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Icon, { icon: "mdi:magnify", className: "catalog-search__icon" })
              }
            ),
            onOpenPaletteLab && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(Button, { variant: "outlined", color: "primary", onClick: onOpenPaletteLab, style: { width: "fit-content", flexShrink: 0 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Icon, { icon: "mdi:palette-swatch-outline" }),
              "Paleta & Look"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "catalog-overview__hero-logo-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("img", { src: "./assets/mimicus-logo.svg", alt: "Mimicus", className: "catalog-overview__hero-logo" }) })
      ] }) }),
      !showHero && filterSection && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("header", { className: "catalog-overview__hero catalog-overview__hero--section pg-vt-hero pg-vt-category", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "catalog-section-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Icon, { icon: sectionIcon(filterSection), className: "catalog-section-heading__icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "catalog-home__title", children: heroTitle }),
          heroLead && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "catalog-home__lead", children: heroLead })
        ] })
      ] }) }),
      visibleSections.map((sid) => {
        const sectionItems = itemsInSection(filtered, sid);
        if (!sectionItems.length) return null;
        const accent2 = sectionAccentColor(sid);
        const sectionSlot = sectionColorToken(sid);
        return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
          "section",
          {
            id: `section-${sid}`,
            className: "catalog-section",
            "data-section-color": sectionSlot,
            style: { "--sm-accent": accent2 },
            "aria-labelledby": `heading-${sid}`,
            children: [
              !filterSection && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "catalog-section-heading", id: `heading-${sid}`, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h2", { className: "catalog-section-heading__title", children: sectionLabel(sid) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "catalog-grid catalog-grid--overview", children: sectionItems.map((it) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(CatalogCard, { sectionId: sid, demoId: it.id, displayLabel: it.displayLabel, onSelect: () => onSelect?.(it.section, it.slug) }, `${it.section}/${it.slug}`)) })
            ]
          },
          sid
        );
      }),
      filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("p", { className: "catalog-home__lead", children: [
        "No hay componentes que coincidan con \xAB",
        query,
        "\xBB."
      ] })
    ] }) });
  }
  function ThemeLab() {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "catalog-home catalog-overview__main pg-vt-main", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("header", { className: "catalog-overview__hero pg-vt-hero", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "catalog-home__kicker mimicus-ui-brand", children: MIMICUS_UI.name }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h1", { className: "catalog-home__title", children: "Paleta & Look" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "catalog-home__lead", children: "Laboratorio visual de paletas, look & feel y luminancia. Usa los selectores del header para probar combinaciones en tiempo real." })
    ] }) });
  }

  // src/devkit/shared/driver/driverCore.tsx
  var import_react40 = __require("react");

  // src/devkit/shared/demo-shell/demoShellUi.tsx
  var import_react38 = __require("react");
  var import_jsx_runtime50 = __require("react/jsx-runtime");
  var DemoController = class {
    constructor() {
      this.componentName = "Component";
    }
    initialState() {
      return {};
    }
    initialDetails() {
      return {};
    }
    initialDemoConfig() {
      return {};
    }
    fields() {
      return [];
    }
    detailFields() {
      return [];
    }
    demoConfigFields() {
      return [];
    }
    presets() {
      return [];
    }
    tagOpts() {
      return {};
    }
    buildCode(state2, details = {}, demoStyle = "", demoClass = "", demoConfig = {}) {
      const attrs = [...this.collectAttrs(state2), ...this.extraAttrs(state2, details), ...this.styleClassAttrs(demoStyle, demoClass)];
      return buildTag(this.componentName, attrs, this.tagOpts(state2, details), this.buildBody ? (h) => this.buildBody(state2, details, h) : void 0);
    }
    extraAttrs() {
      return [];
    }
    reset() {
      return { state: this.initialState(), details: this.initialDetails(), demoConfig: this.initialDemoConfig() };
    }
    previewKey(state2, details = {}, demoStyle = "", demoClass = "", extras = [], demoConfig = {}) {
      return [JSON.stringify(state2), JSON.stringify(details), JSON.stringify(demoConfig), demoStyle, demoClass, ...extras.map((e) => String(e ?? ""))].join("|");
    }
    styleClassAttrs(demoStyle, demoClass) {
      return [
        { name: "style", value: demoStyle || null, type: "str", default: null },
        { name: "className", value: demoClass || null, type: "str", default: null }
      ];
    }
    collectAttrs(state2) {
      const attrs = [];
      for (const f of this.fields()) this.collectFieldAttrs(state2, f, attrs);
      return attrs;
    }
    collectFieldAttrs(state2, f, attrs) {
      if (f.kind === "icon-text") return;
      if (f.kind === "select-enum-row") {
        for (const sub of f.selects) this.collectFieldAttrs(state2, sub, attrs);
        return;
      }
      if (f.kind === "switch-group") {
        for (const sw of f.switches) {
          if (sw.attrOmit) continue;
          const raw2 = state2[sw.key];
          const value2 = sw.attrEmit ? sw.attrEmit(raw2) : raw2;
          attrs.push({ name: sw.attrName ?? String(sw.key), value: value2, type: sw.attrType ?? "bool", default: sw.attrDefault });
        }
        return;
      }
      if (f.attrOmit) return;
      const raw = state2[f.key];
      const value = f.attrEmit ? f.attrEmit(raw) : raw;
      attrs.push({ name: f.attrName ?? String(f.key), value, type: f.attrType, default: f.attrDefault });
    }
  };
  function ConfigCard({ children, className, variant = "field" }) {
    const isSection = variant === "section";
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "div",
      {
        className: [
          isSection ? "pg-demo-config-section demo-config-shell" : "pg-demo-config-card",
          "card-root",
          className
        ].filter(Boolean).join(" "),
        "data-variant": isSection ? "glass" : "flat",
        "data-pg-config": variant,
        children
      }
    );
  }
  function InputDecorated({ label, icon, asTitle, info: info2, infoTitle, children, className, rowBetween }) {
    const Tag2 = asTitle ? "h3" : rowBetween ? "div" : "label";
    const [open, setOpen] = (0, import_react38.useState)(false);
    const hasInfo = Boolean(info2 && String(info2).trim());
    const modalTitle = (0, import_react38.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "pg-input-decorated__info-title", children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: infoTitle || label })
    ] }), [icon, infoTitle, label]);
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: ["pg-input-decorated", asTitle && "pg-input-decorated--title", rowBetween && "pg-input-decorated--row-between", className].filter(Boolean).join(" "), children: [
      (label || icon || hasInfo) && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Tag2, { className: "pg-input-decorated__label", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pg-input-decorated__icon", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("iconify-icon", { icon }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pg-input-decorated__label-text", children: label }),
        hasInfo && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "button",
          {
            type: "button",
            className: "pg-input-decorated__info",
            "aria-label": `M\xE1s informaci\xF3n sobre ${label || "esta secci\xF3n"}`,
            title: `M\xE1s informaci\xF3n sobre ${label || "esta secci\xF3n"}`,
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("iconify-icon", { icon: "mdi:information-outline" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-input-decorated__body", children }),
      hasInfo && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Modal, { open, onClose: () => setOpen(false), title: modalTitle, variant: "solid", showCloseHeader: true, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-input-decorated__info-body", dangerouslySetInnerHTML: { __html: String(info2) } }) })
    ] });
  }
  var SIDE_CROSS_SLOTS = [null, "top", null, "left", "", "right", null, "bottom", null];
  function paletteOptionIcon(val, getIcon) {
    const isNone = val === "" || val == null;
    if (isNone) return NONE_ICON;
    return getIcon ? getIcon(val) : void 0;
  }
  function PaletteOptionButton({ lbl, val, selected, accent: accent2, getIcon, showLabel, onPick, shape = "pill", align = "center" }) {
    const isNone = val === "" || val == null;
    const icon = paletteOptionIcon(val, getIcon);
    const title = isNone ? "Ninguno" : lbl || String(val ?? "Ninguno");
    const color = accent2 === "semantic" && val ? val : "primary";
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Button, { type: "button", variant: selected ? "soft" : "text", color, shape, block: true, onClick: () => onPick?.(isNone ? void 0 : val), title, style: { justifyContent: align === "start" ? "flex-start" : "center", paddingBlock: "0.2em", paddingInline: showLabel && !isNone ? "0.65em" : "0.4em", minHeight: "1.85em", gap: "0.45em", minWidth: 0, textAlign: align === "start" ? "left" : "center" }, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon }),
      showLabel && !isNone && (lbl || val) != null && String(lbl || val) !== "" && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: lbl || String(val ?? "Ninguno") })
    ] });
  }
  function PaletteGrid({ label, labelIcon, value, onValueChange, options, name, columns, accent: accent2 = "primary", layout = "chips", getIcon, chipShape, chipAlign }) {
    const items = optionsToItems(options);
    const cols = typeof columns === "number" ? columns : columnsConfig(items.length);
    const groupName = name || `pg-palette-${label}`;
    const isChips = layout === "chips";
    const shape = chipShape ?? (isChips ? "rect" : "pill");
    const align = chipAlign ?? (isChips ? "start" : "center");
    function pick(val) {
      onValueChange?.(val === "" || val == null ? void 0 : val);
    }
    function renderOption(lbl, val, showLabel) {
      const selected = String(value ?? "") === String(val ?? "");
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PaletteOptionButton, { lbl, val, selected, accent: accent2, getIcon, showLabel, onPick: pick, shape, align }, `${groupName}-${String(val)}`);
    }
    if (layout === "sideCross") {
      const byVal = Object.fromEntries(items.map(([lbl, val]) => [String(val ?? ""), [lbl, val]]));
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-palette-grid pg-palette-grid--side-cross", style: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.35em", width: "100%" }, children: SIDE_CROSS_SLOTS.map((slotVal, idx) => {
        if (slotVal === null) return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pg-palette-grid__spatial-cell pg-palette-grid__spatial-cell--empty", "aria-hidden": true }, `side-cross-empty-${idx}`);
        const pair = byVal[String(slotVal ?? "")];
        if (!pair) return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pg-palette-grid__spatial-cell pg-palette-grid__spatial-cell--empty", "aria-hidden": true }, `side-cross-miss-${idx}`);
        const [lbl, val] = pair;
        return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-palette-grid__spatial-cell", children: renderOption(lbl, val, true) }, `side-cross-${String(val)}`);
      }) });
    }
    if (layout === "chips") {
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-palette-chips pg-palette-chips--list", style: { display: "flex", flexDirection: "column", gap: "0.35em", width: "100%" }, children: items.map(([lbl, val]) => renderOption(lbl, val, true)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-palette-grid", style: { display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: "0.35em", width: "100%" }, children: items.map(([lbl, val]) => renderOption(lbl, val, true)) });
  }
  function fieldInfoKey(field) {
    return String(field?.key || field?.attrName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  function fieldInfo(field) {
    if (field.info) return { title: field.infoTitle || field.label, body: field.info };
    const key = fieldInfoKey(field);
    const kind = String(field.kind || "");
    const map = {
      variant: { title: "Variante visual", body: "Cambia el aspecto del componente: <code>solid</code> (fondo lleno), <code>outlined</code> (s\xF3lo borde), <code>text</code> (sin fondo, transparente), <code>ghost</code> (vidrio transl\xFAcido), <code>soft</code> (tinte accent al 15%), <code>dashed</code> (borde discontinuo) y <code>glass</code> (efecto glass con backdrop-filter)." },
      shape: { title: "Forma del borde", body: "Define el radio del borde: <code>round</code> (esquinas redondeadas suaves), <code>rect</code> (recto, 0px), <code>pill</code> (c\xE1psula, radio total) y <code>circle</code> (c\xEDrculo perfecto cuando el contenido es s\xF3lo un icono)." },
      size: { title: "Tama\xF1o", body: "Escala interna del componente. En Mimicus UI el tama\xF1o es contextual: depende del <code>font-size</code> del contenedor (unidades <code>em</code>)." },
      color: { title: "Color de acento", body: "Color sem\xE1ntico que tintar\xE1 el componente. Puede ser un color del sistema (<code>primary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>, <code>neutral</code>) o un valor custom." },
      icon: { title: "\xCDcono", body: "\xCDcono Iconify que se mostrar\xE1. Escribe el nombre (<code>mdi:check</code>) o elige uno de las opciones." },
      iconplacement: { title: "Posici\xF3n del \xEDcono", body: "Define si el \xEDcono aparece al inicio (<code>start</code>) o al final (<code>end</code>) del texto." },
      htmltype: { title: "Tipo HTML", body: "Atributo <code>type</code> nativo del bot\xF3n: <code>button</code>, <code>submit</code> o <code>reset</code>." },
      block: { title: "block", body: "Hace que el componente ocupe todo el ancho disponible." },
      danger: { title: "danger", body: "Aplica el color sem\xE1ntico <code>danger</code> (rojo), t\xEDpicamente para acciones destructivas." },
      ghost: { title: "ghost", body: "Fondo transl\xFAcido (vidrio) en hover/active; en idle se ve como <code>outlined</code>." },
      dashed: { title: "dashed", body: "Borde discontinuo en lugar de s\xF3lido." },
      disabled: { title: "disabled", body: "Deshabilita la interacci\xF3n y aplica opacidad reducida." },
      loading: { title: "loading", body: "Muestra un indicador de progreso y bloquea clicks mientras dura la operaci\xF3n." },
      placement: { title: "Ubicaci\xF3n del panel", body: "Lado desde el que aparece el panel deslizante: <code>left</code>, <code>right</code>, <code>top</code> o <code>bottom</code>." },
      side: { title: "Lado del flotante", body: "Posici\xF3n relativa al elemento ancla: <code>top</code>, <code>bottom</code>, <code>left</code> o <code>right</code>." },
      width: { title: "Ancho del panel", body: "Ancho en p\xEDxeles cuando el panel entra por los lados (<code>left</code> / <code>right</code>). No aplica en orientaci\xF3n vertical." },
      height: { title: "Alto del panel", body: "Alto en p\xEDxeles cuando el panel entra por arriba o abajo (<code>top</code> / <code>bottom</code>)." },
      defaultopen: { title: "Abierto por defecto", body: "Si es <code>true</code>, el panel o overlay inicia visible sin interacci\xF3n del usuario." },
      open: { title: "Abierto", body: "Controla si el overlay o panel est\xE1 visible (modo controlado)." },
      align: { title: "Alineaci\xF3n", body: "Alineaci\xF3n respecto al ancla: <code>start</code> (inicio), <code>center</code> (centro) o <code>end</code> (final)." },
      trigger: { title: "Disparador", body: "Evento que abre el flotante: <code>click</code>, <code>hover</code> o <code>focus</code>." },
      inline: { title: "Inline", body: "Si es <code>true</code>, el componente se renderiza en l\xEDnea sin portal ni overlay flotante." },
      arrow: { title: "Flecha", body: "Muestra u oculta la punta/flecha que apunta al elemento ancla." },
      title: { title: "T\xEDtulo", body: "Texto del encabezado del panel, modal o alerta." },
      severity: { title: "Severidad", body: "Nivel sem\xE1ntico del mensaje: <code>info</code>, <code>success</code>, <code>warning</code> o <code>error</code>." },
      dismissible: { title: "Cerrable", body: "Permite al usuario cerrar manualmente el componente (bot\xF3n \xD7 o similar)." },
      showfloat: { title: "Mostrar flotante", body: "Controla la visibilidad del panel flotante asociado al hover o focus." },
      scope: { title: "\xC1mbito", body: "Define d\xF3nde se monta el overlay: <code>local</code> (contenedor) o <code>global</code> (documento)." },
      orientation: { title: "Orientaci\xF3n", body: "Direcci\xF3n del layout interno: <code>horizontal</code> o <code>vertical</code>." },
      direction: { title: "Direcci\xF3n", body: "Sentido de lectura o flujo visual: <code>ltr</code> o <code>rtl</code>." },
      value: { title: "Valor", body: "Valor actual del control (modo controlado)." },
      multiline: { title: "Multil\xEDnea", body: "Permite varias l\xEDneas de texto en lugar de una sola." },
      readonly: { title: "S\xF3lo lectura", body: "Muestra el valor pero impide editarlo." },
      required: { title: "Requerido", body: "Marca el campo como obligatorio para env\xEDo de formulario." },
      placeholder: { title: "Placeholder", body: "Texto de ayuda que aparece cuando el campo est\xE1 vac\xEDo." },
      maxlength: { title: "Longitud m\xE1xima", body: "N\xFAmero m\xE1ximo de caracteres permitidos." },
      fullwidth: { title: "Ancho completo", body: "El control ocupa el 100% del ancho del contenedor padre." },
      elevation: { title: "Elevaci\xF3n", body: "Nivel de sombra/depth del componente (t\xEDpicamente 0\u201324 en estilo Material)." },
      bordered: { title: "Con borde", body: "Dibuja un borde visible alrededor del componente." },
      sticky: { title: "Sticky", body: "Mantiene el elemento fijo al hacer scroll dentro de su contenedor." },
      collapsible: { title: "Colapsable", body: "Permite expandir y contraer la secci\xF3n con un control interactivo." },
      defaultexpanded: { title: "Expandido por defecto", body: "Si es <code>true</code>, la secci\xF3n inicia abierta." },
      delay: { title: "Retardo", body: "Milisegundos de espera antes de mostrar u ocultar el flotante." },
      offset: { title: "Desplazamiento", body: "Distancia en p\xEDxeles entre el ancla y el panel flotante." },
      zindex: { title: "z-index", body: "Capa de apilamiento CSS del overlay respecto a otros elementos." },
      backdrop: { title: "Backdrop", body: "Capa semitransparente detr\xE1s del overlay; suele cerrar al hacer clic." },
      modal: { title: "Modal", body: "Si es <code>true</code>, bloquea la interacci\xF3n con el resto de la p\xE1gina mientras est\xE1 abierto." },
      persistent: { title: "Persistente", body: "Impide cerrar el overlay con clic fuera o Escape." },
      animated: { title: "Animado", body: "Activa transiciones de entrada/salida del componente." },
      rounded: { title: "Redondeado", body: "Aplica esquinas redondeadas al contenedor." },
      dense: { title: "Denso", body: "Reduce padding y altura para mayor densidad visual." },
      nowrap: { title: "Sin salto de l\xEDnea", body: "Evita que el texto haga wrap en una sola l\xEDnea." },
      truncate: { title: "Truncar", body: "Recorta el texto largo con puntos suspensivos (<code>\u2026</code>)." },
      href: { title: "Enlace", body: "URL de destino cuando el componente act\xFAa como enlace." },
      target: { title: "Target", body: "Destino del enlace: <code>_blank</code>, <code>_self</code>, etc." },
      type: { title: "Tipo", body: "Variante o tipo sem\xE1ntico del componente seg\xFAn su API." },
      label: { title: "Etiqueta", body: "Texto visible asociado al control o acci\xF3n." },
      name: { title: "Nombre", body: "Identificador del campo en formularios (<code>name</code> HTML)." },
      id: { title: "ID", body: "Identificador \xFAnico del elemento en el DOM." },
      classname: { title: "className", body: "Clases CSS adicionales aplicadas al elemento ra\xEDz." },
      style: { title: "style", body: "Estilos inline adicionales en el elemento ra\xEDz." }
    };
    if (map[key]) return map[key];
    if (kind === "switch") return { title: field.label, body: `Interruptor booleano. Cuando est\xE1 <code>true</code> activa el flag <code>${field.key}</code>.` };
    if (kind === "switch-group") return { title: field.label, body: `Grupo de interruptores booleanos. Cada toggle activa un flag independiente del componente.` };
    if (kind === "palette") return { title: field.label, body: `Selector de paleta. Elige una de las opciones disponibles; el componente adoptar\xE1 la variante visual correspondiente.` };
    if (kind === "select-enum") return { title: field.label, body: `Selector enumerado. Elige uno de los valores disponibles para <code>${field.key}</code>.` };
    if (kind === "number") return { title: field.label, body: `Valor num\xE9rico entre el m\xEDnimo y m\xE1ximo definidos.` };
    if (kind === "range") return { title: field.label, body: `Rango num\xE9rico continuo (slider).` };
    if (kind === "text") return { title: field.label, body: `Entrada de texto libre.` };
    if (kind === "color") return { title: field.label, body: `Selector de color. Acepta cualquier valor CSS (hex, rgb, hsl, oklch, named).` };
    if (kind === "code") return { title: field.label, body: `Editor de c\xF3digo inline. \xDAtil para estilos CSS o clases personalizadas.` };
    if (kind === "icon-text") return { title: field.label, body: `Combina un \xEDcono Iconify con un texto libre.` };
    return null;
  }
  function orderFields(arr) {
    const states = [];
    const rest = [];
    for (const f of arr) {
      if (f.kind === "switch" || f.kind === "switch-group") states.push(f);
      else rest.push(f);
    }
    return [...states, ...rest];
  }
  function fieldId(f) {
    if (f.kind === "switch-group" || f.kind === "icon-text") return `${f.kind}-${f.key}`;
    return `${f.kind}-${String(f.key)}`;
  }
  function withNoneOption(options) {
    const items = optionsToItems(options);
    const hasNone = items.some(([, v]) => v === "" || v == null);
    const mapped = items.map(([label, value]) => ({ label, value }));
    return hasNone ? mapped : [{ label: "", value: "" }, ...mapped];
  }
  function SwitchRow({ checked, label, onChange, iconOn, iconOff, colorOn, colorOff }) {
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      Switch,
      {
        className: "pg-switch-row",
        checked: !!checked,
        onChange: (v) => onChange?.(v),
        iconOn: iconOn ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: iconOn }) : void 0,
        iconOff: iconOff ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: iconOff ?? iconOn ?? "mdi:circle-outline" }) : void 0,
        colorOn,
        colorOff,
        children: label
      }
    );
  }
  function ConfigRangeField({ value, min = 0, max = 100, step = 1, onChange }) {
    const num = Number(value ?? min);
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Slider, { className: "pg-config-range", min, max, step, value: num, onChange: (v) => onChange(Number(v)), showValue: true, style: { width: "100%" } });
  }
  function IconTextField({ field, state: state2, patchState }) {
    const iconVal = state2[field.iconKey] ?? "";
    const textVal = state2[field.textKey] ?? "";
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: field.label, icon: field.labelIcon, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { style: { display: "grid", gap: "0.6em" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: "\xCDcono", icon: "mdi:emoticon-outline", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-field-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        PaletteGrid,
        {
          value: String(iconVal),
          onValueChange: (v) => patchState(String(field.iconKey), v),
          options: Object.entries(iconEnum).map(([val, lbl]) => ({ label: lbl, value: val })),
          layout: "chips",
          getIcon: (v) => v ? String(v) : void 0
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("label", { className: "pg-icon-text-field__text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pg-input-decorated__label", children: "Texto" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Input, { value: String(textVal), onChange: (v) => patchState(String(field.textKey), v), prefix: iconVal ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: String(iconVal) }) : void 0 })
      ] })
    ] }) });
  }
  function ConfigCodeField({ value = "", onChange, placeholder, mode, lang, minHeight = "4.5em", maxHeight = "8.5em" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "code-edit-field", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      CodeBlock,
      {
        className: "code-edit-field__preview pg-demo-config-code",
        value,
        onChange,
        readOnly: false,
        mode,
        lang,
        placeholder,
        minHeight,
        maxHeight,
        lineNumbers: false,
        lineWrapping: true
      }
    ) });
  }
  function DemoConfigRenderer({ fields, state: state2, onStateChange }) {
    const typedFields = orderFields(fields ?? []);
    function patchState(key, value) {
      const normalized = value === void 0 || value === "" ? null : value;
      onStateChange?.({ ...state2, [key]: normalized });
    }
    function decorate(field, props = {}) {
      const info2 = fieldInfo(field);
      return {
        label: field.label,
        icon: props.icon ?? field.labelIcon,
        info: info2?.body,
        infoTitle: info2?.title
      };
    }
    return typedFields.map((field) => {
      const key = fieldId(field);
      const wrap = (node) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ConfigCard, { children: node }, key);
      if (field.kind === "palette") {
        const opts = field.layout === "sideCross" || field.layout === "chips" ? field.options : withNoneOption(field.options);
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-field-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PaletteGrid, { value: state2[field.key], onValueChange: (v) => patchState(String(field.key), v), options: opts, name: field.name ?? `pg-${String(field.key)}`, columns: field.columns, accent: field.accent ?? "primary", layout: field.layout ?? "chips", getIcon: field.getIcon ?? ((v) => defaultOptionIcon(field.key, v)) }) }) })
        );
      }
      if (field.kind === "color") {
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-field-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PaletteGrid, { value: state2[field.key], onValueChange: (v) => patchState(String(field.key), v), options: colorOptions, name: `pg-color-${String(field.key)}`, layout: "chips", accent: "semantic", getIcon: (v) => COLOR_ICONS[String(v)] }) }) })
        );
      }
      if (field.kind === "switch") {
        const d = decorate(field, { icon: field.labelIcon ?? "mdi:tune" });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { rowBetween: true, label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(SwitchRow, { checked: state2[field.key], onChange: (v) => patchState(String(field.key), v), iconOn: field.iconOn ?? field.icon ?? "mdi:check", iconOff: field.iconOff ?? field.icon ?? "mdi:circle-outline", colorOn: field.colorOn ?? "var(--mimicus-success, #2e9e5a)", colorOff: field.colorOff ?? "var(--mimicus-color)" }) })
        );
      }
      if (field.kind === "switch-group") {
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-field-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(7.5em, 1fr))", gap: "0.35em 0.75em", width: "100%" }, children: field.switches.map((sw) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(SwitchRow, { checked: state2[sw.key], label: sw.label, onChange: (v) => patchState(String(sw.key), v), iconOn: sw.iconOn ?? sw.icon ?? "mdi:check", iconOff: sw.iconOff ?? sw.icon ?? "mdi:circle-outline", colorOn: sw.colorOn ?? "var(--mimicus-success, #2e9e5a)", colorOff: sw.colorOff ?? "var(--mimicus-color)" }, String(sw.key))) }) }) })
        );
      }
      if (field.kind === "text") {
        if (field.normalize) {
          const fkey = String(field.key);
          const normalize3 = field.normalize;
          const d2 = decorate(field, { icon: field.labelIcon });
          return wrap(
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d2.label, icon: d2.icon, info: d2.info, infoTitle: d2.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
              Input,
              {
                className: "input-decorated-number",
                placeholder: field.placeholder,
                value: String(state2[fkey] ?? ""),
                onChange: (v) => patchState(fkey, v === "" ? void 0 : v),
                onBlur: (e) => {
                  const next = normalize3(e.target.value);
                  patchState(fkey, next === "" ? void 0 : next);
                },
                onKeyDown: (e) => {
                  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
                  e.preventDefault();
                  const next = stepCssLength(e.currentTarget.value, e.key === "ArrowUp" ? 0.5 : -0.5);
                  patchState(fkey, next === "" ? void 0 : next);
                }
              }
            ) })
          );
        }
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Input, { placeholder: field.placeholder, value: String(state2[field.key] ?? ""), onChange: (v) => patchState(String(field.key), v) }) })
        );
      }
      if (field.kind === "range") {
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ConfigRangeField, { value: state2[field.key], min: field.min, max: field.max, step: field.step, onChange: (v) => patchState(String(field.key), v) }) })
        );
      }
      if (field.kind === "number") {
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputNumber, { min: field.min, max: field.max, step: field.step, value: Number(state2[field.key] ?? 0), onChange: (v) => patchState(String(field.key), v) }) })
        );
      }
      if (field.kind === "select-enum") {
        const d = decorate(field, { icon: field.labelIcon });
        const layout = field.layout ?? "chips";
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-field-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PaletteGrid, { value: state2[field.key], onValueChange: (v) => patchState(String(field.key), v), options: field.enumValue ?? {}, name: `pg-${String(field.key)}`, layout, accent: field.accent ?? "primary", getIcon: field.getIcon ?? ((v) => defaultOptionIcon(field.key, v)) }) }) })
        );
      }
      if (field.kind === "code") {
        const fkey = String(field.key);
        const mode = field.lang === "css" ? "css" : field.mode ?? (field.lang === "html" ? void 0 : field.lang);
        const d = decorate(field, { icon: field.labelIcon ?? "mdi:code-braces" });
        return wrap(
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: d.label, icon: d.icon, info: d.info, infoTitle: d.infoTitle, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            ConfigCodeField,
            {
              value: String(state2[fkey] ?? ""),
              onChange: (v) => patchState(fkey, v),
              placeholder: field.placeholder,
              mode,
              lang: field.lang,
              minHeight: field.minHeight ?? "6em",
              maxHeight: field.maxHeight ?? "16em"
            }
          ) })
        );
      }
      if (field.kind === "icon-text") {
        return wrap(/* @__PURE__ */ (0, import_jsx_runtime50.jsx)(IconTextField, { field, state: state2, patchState }));
      }
      return wrap(/* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { style: { margin: 0, fontSize: "0.85rem", opacity: 0.75 }, children: [
        "Campo \xAB",
        field.kind,
        "\xBB a\xFAn no soportado en React playground."
      ] }));
    });
  }
  function formatApiDefault(value) {
    if (value === void 0) return "\u2014";
    if (value === null) return "null";
    if (typeof value === "boolean") return String(value);
    if (typeof value === "number") return String(value);
    if (typeof value === "string") return value === "" ? '""' : value;
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  function resolveApiDefault(field, values, { switchFallback = false } = {}) {
    if (field.attrDefault !== void 0) return field.attrDefault;
    if (field.key != null && Object.prototype.hasOwnProperty.call(values, field.key)) return values[field.key];
    if (switchFallback || field.kind === "switch") return false;
    return void 0;
  }
  function formatFieldEnumOptions(field) {
    if (!field) return "";
    const opts = field.options;
    if (Array.isArray(opts) && opts.length) {
      const parts = opts.map((o) => {
        if (o && typeof o === "object") {
          const val = o.value ?? o;
          const lbl = o.label;
          return lbl && lbl !== val ? `<code>${val}</code> (${lbl})` : `<code>${val}</code>`;
        }
        return `<code>${o}</code>`;
      });
      return `<p><strong>Valores posibles:</strong> ${parts.join(", ")}.</p>`;
    }
    const ev = field.enumValue;
    if (ev && typeof ev === "object" && Object.keys(ev).length) {
      const parts = Object.entries(ev).map(([lbl, val]) => `<code>${val}</code> (${lbl})`);
      return `<p><strong>Valores posibles:</strong> ${parts.join(", ")}.</p>`;
    }
    return "";
  }
  function formatFieldRange(field) {
    if (!field || field.min == null && field.max == null && field.step == null) return "";
    const parts = [];
    if (field.min != null) parts.push(`m\xEDnimo <code>${field.min}</code>`);
    if (field.max != null) parts.push(`m\xE1ximo <code>${field.max}</code>`);
    if (field.step != null) parts.push(`paso <code>${field.step}</code>`);
    return `<p><strong>Rango:</strong> ${parts.join(", ")}.</p>`;
  }
  function buildApiPropModalContent(field, row2) {
    const lookupField = field ?? { key: row2.name, label: row2.desc, kind: row2.type, attrType: row2.type };
    const info2 = fieldInfo(lookupField);
    const title = info2?.title ?? row2.desc ?? String(row2.name);
    const parts = [];
    if (info2?.body) parts.push(`<p>${info2.body}</p>`);
    else {
      const shortDesc = row2.desc && row2.desc !== row2.name ? ` \u2014 ${row2.desc}` : "";
      parts.push(`<p>Propiedad del componente <code>${row2.name}</code>${shortDesc}.</p>`);
    }
    if (field) {
      const enumHtml = formatFieldEnumOptions(field);
      const rangeHtml = formatFieldRange(field);
      if (enumHtml) parts.push(enumHtml);
      if (rangeHtml) parts.push(rangeHtml);
    }
    parts.push(`<dl class="pg-api-prop-modal__meta"><dt>Tipo</dt><dd><code>${row2.type}</code></dd><dt>Valor por defecto</dt><dd><code>${row2.def}</code></dd></dl>`);
    return { title, body: parts.join("") };
  }
  function ApiTable({ adapter }) {
    const [activeRow, setActiveRow] = (0, import_react38.useState)(null);
    const state2 = adapter?.initialState?.() ?? {};
    const details = adapter?.initialDetails?.() ?? {};
    const demoConfig = adapter?.initialDemoConfig?.() ?? {};
    const rows = [];
    const pushField = (f, values) => {
      if (!f || f.kind === "icon-text" || f.attrOmit) return;
      if (f.kind === "switch-group") {
        for (const sw of f.switches ?? []) {
          if (sw.attrOmit) continue;
          rows.push({
            name: sw.attrName ?? sw.key,
            desc: sw.label,
            type: sw.attrType ?? "boolean",
            def: formatApiDefault(resolveApiDefault(sw, values, { switchFallback: true })),
            field: sw
          });
        }
        return;
      }
      if (f.kind === "select-enum-row") {
        for (const sub of f.selects ?? []) pushField(sub, values);
        return;
      }
      rows.push({
        name: f.attrName ?? f.key,
        desc: f.label,
        type: f.attrType ?? f.kind,
        def: formatApiDefault(resolveApiDefault(f, values)),
        field: f
      });
    };
    for (const f of adapter?.fields?.() ?? []) pushField(f, state2);
    for (const f of adapter?.detailFields?.() ?? []) pushField(f, details);
    for (const f of adapter?.demoConfigFields?.() ?? []) pushField(f, demoConfig);
    const modalContent = (0, import_react38.useMemo)(() => activeRow ? buildApiPropModalContent(activeRow.field, activeRow) : null, [activeRow]);
    if (!rows.length) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-api-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("table", { className: "pg-api-table", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { children: "Property" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { children: "Description" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("th", { children: "Default" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("button", { type: "button", className: "pg-api-table__prop-btn", onClick: () => setActiveRow(r), "aria-label": `Ver explicaci\xF3n de ${r.name}`, title: `Ver explicaci\xF3n de ${r.name}`, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("code", { className: "pg-api-table__prop", children: String(r.name) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: r.desc ?? "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("code", { className: "pg-api-table__type", children: String(r.type) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("code", { className: "pg-api-table__default", children: String(r.def) }) })
        ] }, String(r.name))) })
      ] }) }),
      activeRow && modalContent && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Modal, { open: true, onClose: () => setActiveRow(null), variant: "solid", showCloseHeader: true, title: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "pg-input-decorated__info-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: "mdi:code-braces" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("code", { children: String(activeRow.name) })
      ] }), children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "pg-api-prop-modal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h4", { className: "pg-api-prop-modal__title", children: modalContent.title }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-input-decorated__info-body", dangerouslySetInnerHTML: { __html: modalContent.body } })
      ] }) })
    ] });
  }
  function AccordionDemo({
    adapter,
    title,
    titleIcon,
    flat = false,
    relieve,
    className,
    previewScale,
    previewStyle,
    demoId,
    configBlockCount = 3,
    state: stateProp,
    details: detailsProp,
    demoConfig: demoConfigProp,
    demoStyle: demoStyleProp,
    demoClass: demoClassProp,
    onStateChange,
    onDetailsChange,
    onDemoConfigChange,
    onDemoStyleChange,
    onDemoClassChange,
    intro,
    preview,
    configExtra
  }) {
    const [showCode, setShowCode] = (0, import_react38.useState)(false);
    const [previewResetKey, setPreviewResetKey] = (0, import_react38.useState)(0);
    const state2 = stateProp ?? adapter?.initialState?.() ?? {};
    const details = detailsProp ?? adapter?.initialDetails?.() ?? {};
    const demoConfig = demoConfigProp ?? adapter?.initialDemoConfig?.() ?? {};
    const demoStyle = demoStyleProp ?? "";
    const demoClass = demoClassProp ?? "";
    const finalTitle = title ?? adapter?.componentName ?? "Demo";
    const finalCodeStr = adapter ? adapter.buildCode(state2, details, demoStyle, demoClass, demoConfig) : void 0;
    const previewKey = adapter ? `${previewResetKey}|${adapter.previewKey(state2, details, demoStyle, demoClass, [], demoConfig)}` : String(previewResetKey);
    const finalPreviewScale = previewScale ?? adapter?.previewScale ?? 1;
    const finalPreviewStyle = previewStyle ?? adapter?.previewStyle ?? "";
    const configFields = adapter?.fields?.() ?? [];
    const detailFields = adapter?.detailFields?.() ?? [];
    const demoConfigFields = adapter?.demoConfigFields?.() ?? [];
    const configCols = columnsConfig(configBlockCount + configFields.length + detailFields.length);
    function handleReset() {
      if (!adapter) return;
      onStateChange?.(adapter.initialState());
      onDetailsChange?.(adapter.initialDetails());
      onDemoConfigChange?.(adapter.initialDemoConfig());
      onDemoStyleChange?.("");
      onDemoClassChange?.("");
      setPreviewResetKey((k) => k + 1);
    }
    const previewStageStyle = (0, import_react38.useMemo)(() => parseStyleString(mergeStyleString("transform-origin: center center", finalPreviewStyle)), [finalPreviewStyle]);
    const scaleStyle = finalPreviewScale && finalPreviewScale !== 1 ? { transform: `scale(${finalPreviewScale})` } : void 0;
    const hasApi = [...configFields, ...detailFields, ...demoConfigFields].length > 0;
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("article", { className: ["pg-demo-doc", "pg-vt-demo-morph", className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("header", { className: "pg-demo-doc__hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "pg-demo-doc__title-row", children: [
          titleIcon && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: titleIcon, className: "pg-demo-doc__icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { className: "pg-demo-doc__title", children: finalTitle })
        ] }),
        intro && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-demo-doc__intro intro", dangerouslySetInnerHTML: { __html: intro } })
      ] }),
      preview && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("section", { className: "pg-demo-doc__section", "aria-labelledby": `${demoId ?? finalTitle}-examples`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { className: "pg-demo-doc__section-title", id: `${demoId ?? finalTitle}-examples`, children: "Examples" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "pg-demo-example", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "pg-demo-example__preview preview-frame pg-vt-preview", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "preview-viewport", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "preview-scale-track", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "preview-stage", style: { ...previewStageStyle, ...scaleStyle }, "data-preview-key": previewKey, children: preview({ state: state2, details, demoConfig, previewKey, demoStyle, demoClass }) }) }) }) }),
          finalCodeStr && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "pg-demo-example__toolbar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Button, { type: "button", variant: "text", color: "primary", onClick: () => setShowCode((v) => !v), children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: showCode ? "mdi:chevron-up" : "mdi:code-tags" }),
              showCode ? "Ocultar c\xF3digo" : "Ver c\xF3digo"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Button, { type: "button", variant: "text", color: "neutral", onClick: () => {
              try {
                navigator.clipboard?.writeText(finalCodeStr);
              } catch {
              }
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: "mdi:content-copy" }),
              "Copiar"
            ] })
          ] }),
          finalCodeStr && showCode && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CodeBlock, { value: finalCodeStr, readOnly: true, lang: "jsx", minHeight: "7em", maxHeight: "22em", lineWrapping: true, className: "pg-demo-example__code" })
        ] })
      ] }),
      adapter && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("section", { className: "pg-demo-doc__section pg-demo-doc__section--playground", "aria-labelledby": `${demoId ?? finalTitle}-playground`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { className: "pg-demo-doc__section-title", id: `${demoId ?? finalTitle}-playground`, children: "Playground" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(ConfigCard, { variant: "section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { style: { display: "grid", gridTemplateColumns: `repeat(${configCols}, minmax(0, 1fr))`, gap: "0.75rem", width: "100%", alignItems: "start" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ConfigCard, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { label: "style", icon: "mdi:palette-swatch-outline", info: "Estilos CSS inline que se aplican directamente al contenedor del demo. \xDAtil para ajustes r\xE1pidos sin modificar la hoja de estilos global.", infoTitle: "Estilo inline", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ConfigCodeField, { value: demoStyle, onChange: (v) => onDemoStyleChange?.(v), placeholder: "inline style", mode: "css", minHeight: "4.5em", maxHeight: "8.5em" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(DemoConfigRenderer, { fields: configFields, state: state2, onStateChange }),
            detailFields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(DemoConfigRenderer, { fields: detailFields, state: details, onStateChange: onDetailsChange }),
            configExtra
          ] }),
          demoConfigFields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { style: { marginTop: "0.85rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(InputDecorated, { asTitle: true, label: "Config de demo", icon: "mdi:television-play", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(DemoConfigRenderer, { fields: demoConfigFields, state: demoConfig, onStateChange: onDemoConfigChange }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(Button, { type: "button", variant: "soft", color: "primary", onClick: handleReset, children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Icon, { icon: "mdi:refresh" }),
            "Reiniciar valores"
          ] }) })
        ] })
      ] }),
      hasApi && /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("section", { className: "pg-demo-doc__section", "aria-labelledby": `${demoId ?? finalTitle}-api`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { className: "pg-demo-doc__section-title", id: `${demoId ?? finalTitle}-api`, children: "API" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ApiTable, { adapter })
      ] })
    ] });
  }

  // src/devkit/shared/driver/fieldHydration.ts
  var ENUM_REFS = { iconEnum };
  var ATTR_EMITS = {
    emptyToUndefined: (v) => v === "" ? void 0 : v,
    emptyToNull: (v) => v === "" ? null : v,
    floorPositive: (v) => Math.max(0, Math.floor(Number(v))) || void 0,
    colorDefaultNeutral: (v) => !v ? "neutral" : v
  };
  var NORMALIZERS = { cssLength: normalizeCssLength };
  var SIDE_ICON_MAP = {
    top: "mdi:arrow-up",
    right: "mdi:arrow-right",
    bottom: "mdi:arrow-down",
    left: "mdi:arrow-left",
    "": "mdi:block-helper"
  };
  var CARDINAL_PLACEMENT_KEYS = /* @__PURE__ */ new Set(["placement", "side"]);
  var CARDINAL_PLACEMENT_VALUES = /* @__PURE__ */ new Set(["top", "bottom", "left", "right"]);
  var CARDINAL_PLACEMENT_LABELS = { top: "Top", bottom: "Bottom", left: "Left", right: "Right" };
  function enumValueToOptions(enumValue) {
    const out = {};
    for (const [lbl, val] of Object.entries(enumValue ?? {})) {
      const key = CARDINAL_PLACEMENT_LABELS[val] ?? lbl;
      out[key] = val;
    }
    return out;
  }
  function isCardinalPlacementField(f) {
    if (!CARDINAL_PLACEMENT_KEYS.has(String(f.key ?? ""))) return false;
    const vals = Object.values(f.enumValue ?? f.options ?? {});
    return vals.length === 4 && vals.every((v) => CARDINAL_PLACEMENT_VALUES.has(String(v)));
  }
  function hydrateField(raw) {
    const f = { ...raw };
    if (typeof f.enumRef === "string") {
      f.enumValue = ENUM_REFS[f.enumRef] ?? {};
      delete f.enumRef;
    }
    if (f.kind === "select-enum" && isCardinalPlacementField(f)) {
      f.kind = "palette";
      f.layout = "sideCross";
      f.iconMapRef = "drawerSide";
      f.options = enumValueToOptions(f.enumValue);
      f.accent = f.accent ?? "primary";
      delete f.enumValue;
    }
    if (typeof f.iconMap === "object" && f.iconMap !== null) {
      const iconMap = f.iconMap;
      f.getIcon = (val) => iconMap[String(val ?? "")] ?? iconMap[""] ?? "mdi:block-helper";
      delete f.iconMap;
    }
    if (f.iconMapRef === "drawerSide") {
      f.getIcon = (val) => SIDE_ICON_MAP[String(val ?? "")] ?? "mdi:block-helper";
      f.layout = f.layout ?? "sideCross";
      delete f.iconMapRef;
    }
    if (typeof f.attrEmit === "string") f.attrEmit = ATTR_EMITS[f.attrEmit];
    if (typeof f.normalize === "string") f.normalize = NORMALIZERS[f.normalize];
    if (f.kind === "select-enum-row" && Array.isArray(f.selects)) f.selects = f.selects.map(hydrateField);
    return f;
  }
  function hydrateFields(fields) {
    return (fields ?? []).map(hydrateField);
  }

  // src/devkit/shared/driver/codeStrategies.ts
  var styleAttrs = (demoStyle, demoClass) => [
    { name: "style", value: demoStyle || null, type: "str", default: null },
    { name: "className", value: demoClass || null, type: "str", default: null }
  ];
  var nClampGrid = (v) => Math.min(50, Math.max(3, Math.round(Number(v)) || 7));
  var clampFlexItems = (n) => Math.min(50, Math.max(1, Math.round(Number(n)) || 4));
  function layoutItemSnippet(emoji, useCard) {
    if (useCard) return buildTag("Card", [{ name: "variant", value: "flat", type: "str" }, { name: "inline", value: true, type: "bool" }], {}, () => emoji);
    return buildTag("div", [{ name: "style", value: "padding: 0.45rem", type: "str" }], {}, (h) => h.txt(emoji));
  }
  function readPaneGrid(demoConfig, pane, fallback) {
    const prefix = pane === "panel" ? "panel" : "main";
    return {
      itemCount: Math.round(Number(demoConfig?.[`${prefix}ItemCount`])) || fallback.items,
      cells: Math.round(Number(demoConfig?.[`${prefix}Cells`])) || fallback.cells,
      direction: "column"
    };
  }
  function buildCodeFromStrategy(strategy, ctx, state2, details, demoStyle, demoClass, demoConfig = {}) {
    const { def, collectAttrs } = ctx;
    const name = def.component.name;
    const tagOpts = def.code?.tagOpts ?? {};
    const opts = def.code?.options ?? {};
    switch (strategy) {
      case "icon-text-body": {
        const iconKey = String(opts.iconKey ?? "icon");
        const textKey = String(opts.textKey ?? "text");
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
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
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto")));
      }
      case "bind-checked-body": {
        const textKey = String(opts.textKey ?? "label");
        const attrs = [{ name: "checked", type: "bind", value: "checked" }, ...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        return buildTag(name, attrs, tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto")));
      }
      case "checkbox-icon-body": {
        const attrs = [{ name: "checked", type: "bind", value: "checked" }, ...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        return buildTag("CheckboxIcon", attrs, tagOpts, (h) => h.txt(String(details.previewLabel ?? "Texto")));
      }
      case "checkbox-chip-body": {
        const valueKey = String(opts.valueKey ?? "color");
        return buildTag("CheckboxChip", [{ name: "value", value: details[valueKey] ?? "primary", type: "str" }, ...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      }
      case "transfer-board":
        return buildTag("TransferBoard", [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "form-entry":
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "layout-items": {
        const useCard = Boolean(opts.useCard);
        const n = opts.layout === "flex" ? clampFlexItems(details.itemCount) : nClampGrid(details.itemCount);
        return buildTag(
          name,
          [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => Array.from({ length: n }, (_, i) => layoutItemSnippet(LAYOUT_PREVIEW_EMOJIS[i % LAYOUT_PREVIEW_EMOJIS.length], useCard)).join("\n")
        );
      }
      case "splitter-layout": {
        const panel = readPaneGrid(demoConfig, "panel", { items: 2, cells: 1 });
        const main = readPaneGrid(demoConfig, "main", { items: 4, cells: 2 });
        const itemLine = (idx) => layoutItemSnippet(LAYOUT_PREVIEW_EMOJIS[idx % LAYOUT_PREVIEW_EMOJIS.length], true);
        const paneBody = (grid, offset) => buildTag(
          "GridLayout",
          [{ name: "cells", value: String(grid.cells), type: "str" }, { name: "gap", value: "0.45rem", type: "str" }],
          { multiline: true },
          () => Array.from({ length: grid.itemCount }, (_, i) => itemLine(offset + i)).join("\n")
        );
        return buildTag(
          name,
          [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => [buildTag("div", [{ name: "slot", value: "panel", type: "str" }], { multiline: true }, () => paneBody(panel, 0)), paneBody(main, panel.itemCount)].join("\n")
        );
      }
      case "divider-layout": {
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        const margin = String(details.orientationMargin ?? "").trim();
        if (margin) attrs.push({ name: "orientationMargin", value: margin, type: "str" });
        const showTitle = Boolean(details.showTitle) && String(details.title ?? "").trim();
        return buildTag(name, attrs, tagOpts, (h) => showTitle ? h.txt(String(details.title)) : "");
      }
      case "applayout-pattern": {
        const variant = String(state2.variant ?? state2.pattern ?? "side");
        const shellAttrs = [{ name: "variant", value: variant, type: "str" }, ...styleAttrs(demoStyle || "min-height: 18rem;", demoClass)];
        if (state2.fixedHeader) shellAttrs.push({ name: "fixedHeader", value: true, type: "bool" });
        if (state2.fixedSider) shellAttrs.push({ name: "fixedSider", value: true, type: "bool" });
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
          buildTag("AppLayout.Header.Tools", [], {}, (h) => h.txt(tools))
        ].join("\n");
        const header = buildTag("AppLayout.Header", [{ name: "slot", value: "header", type: "str" }], { multiline: true }, () => headerBlock);
        const children = variant === "top" ? [header, slot("AppLayout.Content", null, cnt), slot("AppLayout.Footer", "footer", ftr)] : [header, slot("AppLayout.Sider", "sider", sid), slot("AppLayout.Content", null, cnt), slot("AppLayout.Footer", "footer", ftr)];
        return buildTag("AppLayout", shellAttrs, tagOpts, () => children.join("\n"));
      }
      case "block-layout":
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], { multiline: true }, (h) => h.txt("Contenido del bloque"));
      case "text-wrap": {
        const textKey = String(opts.textKey ?? "sampleText");
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        return buildTag("Text", attrs, tagOpts, (h) => h.txt(String(details[textKey] ?? "Texto de ejemplo")));
      }
      case "headings-all": {
        const textKey = String(opts.textKey ?? "sampleText");
        const text = String(details[textKey] ?? "Heading");
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        return buildTag(
          "Headings",
          attrs,
          { multiline: true },
          () => [1, 2, 3, 4, 5, 6].map((l) => buildTag("Typography.Title", [{ name: "level", value: l, type: "num" }, ...attrs], {}, (h) => h.txt(`${text} \u2014 H${l}`))).join("\n")
        );
      }
      case "anchor-nav": {
        const n = Math.min(8, Math.max(2, Math.round(Number(details.sectionCount)) || 5));
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        const links = Array.from({ length: n }, (_, i) => buildTag("Anchor.Link", [{ name: "href", value: `#sec-${i + 1}`, type: "str" }, { name: "title", value: `Secci\xF3n ${i + 1}`, type: "str" }], {}, (h) => h.txt(`Secci\xF3n ${i + 1}`)));
        return buildTag("Anchor", attrs, { multiline: true }, () => links.join("\n"));
      }
      case "nav-tabs": {
        const n = Math.min(5, Math.max(2, Math.round(Number(details.tabCount)) || 3));
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        return buildTag(
          name,
          attrs,
          { multiline: true },
          () => Array.from({ length: n }, (_, i) => buildTag("TabItem", [{ name: "tabKey", value: `t${i + 1}`, type: "str" }, { name: "label", value: `Tab ${i + 1}`, type: "str" }], { multiline: true }, (h) => h.txt(`Panel ${i + 1}`))).join("\n")
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
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "disp-badge":
        return buildTag("Badge", [{ name: "count", value: state2.count ?? 5, type: "num" }, { name: "dot", value: Boolean(state2.dot), type: "bool" }, ...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt("\u2026"));
      case "disp-tag":
        return buildTag(def.id === "Chip" ? "Chip" : "Tag", [{ name: "variant", value: state2.variant ?? "ghost", type: "str" }, ...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts, (h) => h.txt(String(details.text ?? "Nuevo")));
      case "disp-collapse":
        return buildTag(
          def.id === "Accordion" ? "Accordion" : "Collapse",
          [{ name: "accordion", value: Boolean(state2.accordion), type: "bool" }, ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => [1, 2].map((i) => buildTag("Collapse.Panel", [{ name: "panelKey", value: String(i), type: "str" }, { name: "header", value: `Panel ${i}`, type: "str" }], { multiline: true }, (h) => h.txt(`Contenido ${i}`))).join("\n")
        );
      case "disp-carousel":
        return buildTag(
          "Carousel",
          [{ name: "autoplay", value: Boolean(state2.autoplay), type: "bool" }, { name: "arrows", value: Boolean(state2.arrows), type: "bool" }, ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => [1, 2, 3].map((i) => buildTag("Card", [{ name: "variant", value: "flat", type: "str" }], {}, (h) => h.txt(`Slide ${i}`))).join("\n")
        );
      case "disp-table":
        return buildTag("Table", [{ name: "bordered", value: Boolean(state2.bordered), type: "bool" }, { name: "sortable", value: Boolean(state2.sortable), type: "bool" }, ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "disp-timeline":
        return buildTag(
          "Timeline",
          [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => buildTag("Timeline.Item", [{ name: "label", value: "2024", type: "str" }], {}, (h) => h.txt("Evento"))
        );
      case "disp-list":
        return buildTag(
          "List",
          [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)],
          { multiline: true },
          () => buildTag("List.Item", [{ name: "button", value: true, type: "bool" }], {}, () => buildTag("List.ItemText", [{ name: "primary", value: "\xCDtem", type: "str" }], {}))
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
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "modal":
      case "action-drawer":
      case "loading":
      case "toaster":
      case "cmp-alert":
      case "cmp-tip-info":
      case "cmp-invoked-floater":
      case "cmp-floating-component":
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
      case "side-panel-pattern": {
        const open = state2.open !== false;
        const drawer = Boolean(state2.drawer);
        return [
          'import { SidePanel, SidePanelSection } from "@jeff-aporta/mimicus-react";',
          "",
          "// Vistas t\xEDpicas desde JSON (playground-shell.json \u2192 views.collapsed / views.expanded)",
          "const collapsedView = (",
          '  <SidePanel.View mode="rail" gap="0.35rem">{/* iconos categor\xEDa */}</SidePanel.View>',
          ");",
          "const expandedView = (",
          '  <SidePanel.View mode="expanded" gap="0.25rem">',
          '    <SidePanelSection icon="mdi:folder-outline" label="Layout" open count={12}>',
          "      {/* enlaces demo */}",
          "    </SidePanelSection>",
          "  </SidePanel.View>",
          ");",
          "",
          `<SidePanel open={${open}} drawer={${drawer}} collapsedView={collapsedView} expandedView={expandedView} />`
        ].join("\n");
      }
      case "contapyme-login": {
        const attrs = [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)];
        const setup = [
          'const session = createOrchestratorSession({ app: "mi-app-front" });',
          "",
          "<ContapymeSessionProvider session={session}>",
          "  <AppLayout.Header.Tools>",
          "    <LoginButton />",
          "  </AppLayout.Header.Tools>",
          "</ContapymeSessionProvider>"
        ].join("\n");
        return `import { AppLayout, LoginButton, ContapymeSessionProvider, createOrchestratorSession } from "@jeff-aporta/mimicus-react";

${setup}`;
      }
      case "datagrid": {
        const setup = [
          "const columns = [",
          '  { field: "id", headerName: "#", type: "number", pinned: "left", filter: true },',
          '  { field: "producto", headerName: "Producto", flex: 2, filter: true },',
          '  { field: "categoria", headerName: "Categor\xEDa", filter: "set" },',
          '  { field: "total", headerName: "Total", type: "number", filter: true,',
          '    valueFormatter: (v) => `$ ${Number(v).toLocaleString("es-CO")}` },',
          '  { field: "activo", headerName: "Activo", type: "boolean", cellRenderer: "boolean" },',
          "];",
          "",
          `<DataGrid columns={columns} rows={rows} selectionMode="${state2.selectionMode ?? "multiple"}"`,
          `  pagination={${Boolean(state2.pagination)}} density="${state2.density ?? "normal"}" />`
        ].join("\n");
        return `import { DataGrid } from "@jeff-aporta/mimicus-react/datagrid";
import "@jeff-aporta/mimicus-react/datagrid.css";

${setup}`;
      }
      case "preview":
        return `// Vista previa interactiva \u2014 ver panel de configuraci\xF3n`;
      default:
        return buildTag(name, [...collectAttrs(state2), ...styleAttrs(demoStyle, demoClass)], tagOpts);
    }
  }

  // src/devkit/shared/driver/previewBuiltins.tsx
  var import_react39 = __require("react");

  // src/devkit/shared/driver/componentRegistry.tsx
  var import_jsx_runtime51 = __require("react/jsx-runtime");
  var IMPLEMENTED = {
    Button,
    Card,
    CodeBlock,
    FloatButton,
    Fab,
    IconButton,
    Text,
    Headings,
    Typography,
    AppLayout,
    AppLayoutProvider,
    BlockLayout,
    FlexLayout,
    GridLayout,
    SidePanel,
    SidePanelSection,
    Divider,
    Splitter,
    Space,
    Stack,
    Box,
    Container,
    Masonry,
    ImageList,
    Separator,
    GridResponsiveForm,
    Anchor,
    Breadcrumbs,
    Dropdown,
    Menu,
    Tabs,
    TabItem,
    Pagination,
    Steps,
    Step,
    Drawer,
    BottomNavigation,
    BottomNavigationAction,
    NavLink,
    SpeedDial,
    SpeedDialAction,
    Breadcrumb: Breadcrumbs,
    Stepper: Steps,
    Link: NavLink,
    Form,
    FormItem,
    Input,
    TextField,
    TextArea,
    InputNumber,
    Checkbox,
    CheckboxIcon,
    CheckboxChip,
    Switch,
    LabeledSwitch,
    Radio,
    RadioGroup,
    Slider,
    Rate,
    Rating,
    Select,
    AutoComplete,
    ToggleButton,
    ToggleButtonGroup,
    Transfer,
    TransferList,
    TransferBoard,
    Upload,
    ColorPicker,
    DatePicker,
    TimePicker,
    Cascader,
    TreeSelect,
    Mentions,
    Badge,
    Tag,
    Chip,
    Avatar,
    AvatarGroup,
    Carousel,
    Collapse,
    CollapsePanel,
    Accordion,
    Descriptions,
    DescriptionsItem,
    Empty,
    QRCode,
    Segmented,
    Statistic,
    Table,
    Timeline,
    TimelineItem,
    Tooltip,
    Tour,
    Tree,
    Calendar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    Dialog,
    Modal,
    ActionDrawer,
    Loading,
    Toaster,
    toastSuccess,
    toastError,
    toastLoading,
    toastRemove: toastRemove2,
    Alert,
    TipInfo,
    InvokedFloater,
    FloatingComponent,
    LoginButton,
    ContapymeSessionProvider,
    createOrchestratorSession,
    createDemoSession,
    DataGrid
  };
  var stubCache = /* @__PURE__ */ new Map();
  function makeStub(name) {
    if (stubCache.has(name)) return stubCache.get(name);
    function StubComponent({ className, style, children, ...rest }) {
      const label = rest["data-label"] ?? name;
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: ["mimicus-preview-stub", className].filter(Boolean).join(" "), style, "data-component": name, children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "mimicus-preview-stub__badge", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Icon, { icon: "mdi:package-variant" }),
          " ",
          label
        ] }),
        children && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mimicus-preview-stub__body", children }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "mimicus-preview-stub__hint", children: "Componente pendiente de port a React" })
      ] });
    }
    StubComponent.__mimicusStub = true;
    StubComponent.displayName = `Stub(${name})`;
    stubCache.set(name, StubComponent);
    return StubComponent;
  }
  function resolveComponent(name) {
    return IMPLEMENTED[name] ?? makeStub(name);
  }
  function isStubComponent(name) {
    const C = resolveComponent(name);
    return C.__mimicusStub === true;
  }

  // src/devkit/shared/driver/previewBuiltins.tsx
  var import_jsx_runtime52 = __require("react/jsx-runtime");
  function stateForPreview(state2) {
    const out = {};
    for (const [k, v] of Object.entries(state2 ?? {})) {
      if (v === null || v === void 0 || v === "") continue;
      out[k] = v;
    }
    return out;
  }
  var LAYOUT_BP_NARROW2 = 768;
  function useNarrowViewport() {
    const [narrow, setNarrow] = (0, import_react39.useState)(false);
    (0, import_react39.useEffect)(() => {
      const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW2 - 1}px)`);
      const sync = () => setNarrow(mq.matches);
      sync();
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    }, []);
    return narrow;
  }
  function LayoutAppPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const variant = state2.variant === "top-side-2" ? "top-side-2" : "side";
    const narrow = useNarrowViewport();
    const [siderCollapsed, setSiderCollapsed] = (0, import_react39.useState)(Boolean(state2.siderCollapsed));
    const shellStyle = parseStyleString(mergeStyleString("width:100%;min-height:clamp(14rem,45vh,20rem);height:clamp(14rem,45vh,20rem);border:1px solid var(--mimicus-border, rgba(255,255,255,0.12));border-radius:0.5rem;overflow:hidden", demoStyle));
    const siderWidth = Math.round(Number(state2.siderWidth)) || 200;
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["layout-app-preview", narrow && "layout-app-preview--drawer"].filter(Boolean).join(" "), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayoutProvider, { defaultSiderWidth: `${siderWidth}px`, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AppLayout, { variant, fixedHeader: Boolean(state2.fixedHeader), fixedSider: Boolean(state2.fixedSider), responsive: true, responsiveDrawer: narrow, style: shellStyle, className: demoClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AppLayout.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayout.Header.Brand, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }, children: String(details.brandLabel ?? "Brand") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayout.Header.Center, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: String(details.headerLabel ?? "Header") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayout.Header.Tools, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.75rem", opacity: 0.85 }, children: String(details.toolsLabel ?? "Tools") }) })
      ] }),
      !narrow && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayout.Sider, { collapsed: siderCollapsed, collapsible: Boolean(state2.siderCollapsible), width: siderWidth, theme: state2.siderTheme === "light" ? "light" : "dark", onCollapse: setSiderCollapsed, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.8rem", fontWeight: 600 }, children: String(details.siderLabel ?? "Sider") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "pg-shell-main", style: { padding: "0.75rem", flex: "1 1 auto", minHeight: 0, overflow: "auto" }, children: String(details.contentLabel ?? "Content") }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AppLayout.Footer, { children: String(details.footerLabel ?? "Footer") })
    ] }) }) }, previewKey);
  }
  function CardPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const inline = Boolean(state2.inline);
    const relievePacked = packCardRelieve(details);
    const cardPreviewVariant = ["solid", "flat", "glass"].includes(state2.variant) ? state2.variant : void 0;
    const cardStyle = parseStyleString(inline ? mergeStyleString("width: fit-content; max-width: min(14rem, 100%); margin: 0 0.2rem; vertical-align: middle; padding: 0.35rem 0.55rem", demoStyle) : mergeStyleString("min-width: min(320px, 100%); max-width: 100%; margin: 0.75rem 0", demoStyle));
    if (inline) {
      return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "card-inline-demo card-inline-demo--inline", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "card-inline-flow", children: [
        CARD_INLINE_FLOW_BEFORE,
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { inline: true, relieve: relievePacked, variant: cardPreviewVariant, style: cardStyle, className: demoClass, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.85rem", lineHeight: 1.35, whiteSpace: "nowrap" }, children: CARD_INLINE_SAMPLE_TEXT }) }),
        CARD_INLINE_FLOW_AFTER
      ] }) }, previewKey);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "card-inline-demo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "card-block-lead", children: "En modo bloque, la tarjeta interrumpe el p\xE1rrafo y ocupa el ancho disponible." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { relieve: relievePacked, variant: cardPreviewVariant, style: cardStyle, className: demoClass, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { style: { display: "flex", gap: "0.65rem", width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:text-box-outline", style: { fontSize: "1.25rem", flexShrink: 0, opacity: 0.88 } }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.9rem", lineHeight: 1.45 }, children: CARD_PREVIEW_SAMPLE_TEXT })
      ] }) })
    ] }, previewKey);
  }
  function DividerPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const orientation = state2.orientation === "vertical" ? "vertical" : "horizontal";
    const variant = ["dashed", "dotted", "glow"].includes(String(state2.variant)) ? state2.variant : "solid";
    const dividerProps = { orientation, variant, titlePlacement: state2.titlePlacement ?? "center", plain: Boolean(state2.plain), dashed: Boolean(state2.dashed), orientationMargin: String(details.orientationMargin ?? "").trim() || void 0 };
    const shellStyle = mergeStyleString(`border: ${resolveColor("border")} 1px solid; border-radius: 0.5rem; padding: 0.75rem; box-sizing: border-box`, demoStyle);
    const showTitle = Boolean(details.showTitle) && String(details.title ?? "").trim();
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BlockLayout, { children: orientation === "vertical" ? /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(FlexLayout, { items: "center", gap: "0.35rem", wrap: true, style: parseStyleString(shellStyle), className: demoClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { color: resolveColor("primary") }, children: "Inicio" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Divider, { ...dividerProps }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "Cat\xE1logo" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Divider, { ...dividerProps, variant: variant === "solid" ? "dotted" : variant }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "Layouts" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Divider, { ...dividerProps }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { variant: "flat", inline: true, style: { border: `1px solid ${resolveColor("neutral")}` }, children: "Demo" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(FlexLayout, { direction: "column", gap: "0.35rem", style: parseStyleString(shellStyle), className: demoClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.85rem", opacity: 0.9 }, children: "Bloque superior con contenido de ejemplo antes del separador." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Divider, { ...dividerProps, children: showTitle ? String(details.title) : null }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { style: { fontSize: "0.85rem", opacity: 0.9 }, children: "Bloque inferior: el divider respeta size, variant y titlePlacement." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Divider, { ...dividerProps }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { variant: "flat", style: { border: `1px solid ${resolveColor("neutral")}`, padding: "0.5rem" }, children: "Contenido tras l\xEDnea simple" })
    ] }) }, previewKey);
  }
  function SplitterPreview({ state: state2, demoConfig, previewKey, demoStyle, demoClass }) {
    const inline = Boolean(state2.inline);
    const direction = state2.direction === "vertical" ? "vertical" : "horizontal";
    const panelCount = Math.round(Number(demoConfig?.panelItemCount)) || 2;
    const mainCount = Math.round(Number(demoConfig?.mainItemCount)) || 4;
    const shellStyle = mergeStyleString(inline ? "width: fit-content; max-width: 100%; height: clamp(10rem, 32vh, 16rem)" : "width: 100%; min-height: clamp(12rem, 36vh, 18rem)", demoStyle);
    const Pane = ({ title, count, cells, offset = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { style: { padding: "0.5rem", height: "100%", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.35rem", opacity: 0.85 }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(GridLayout, { cells: String(cells), gap: "0.35rem", children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { variant: "flat", inline: true, style: { padding: "0.35rem", textAlign: "center", minHeight: "2rem" }, children: LAYOUT_PREVIEW_EMOJIS[(i + offset) % LAYOUT_PREVIEW_EMOJIS.length] }, i)) })
    ] });
    const Surround = inline ? "span" : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Surround, { className: inline ? "layout-inline-demo layout-inline-demo--inline" : "layout-inline-demo", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Splitter, { inline, direction, panelSize: Math.round(Number(state2.panelSize)) || 240, minSize: Math.round(Number(state2.minSize)) || 160, maxSize: Math.round(Number(state2.maxSize)) || 480, responsive: false, className: demoClass, style: parseStyleString(shellStyle), panel: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Pane, { title: "Panel", count: panelCount, cells: demoConfig?.panelCells ?? 1 }), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Pane, { title: "Contenido", count: mainCount, cells: demoConfig?.mainCells ?? 2, offset: panelCount }) }) }, previewKey);
  }
  var SCROLL_ID = "mimicus-anchor-scroll";
  function AnchorPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const n = Math.min(8, Math.max(2, Math.round(Number(details.sectionCount)) || 5));
    const direction = state2.direction === "horizontal" ? "horizontal" : "vertical";
    const containerSel = `#${SCROLL_ID}`;
    const links = Array.from({ length: n }, (_, i) => ({ href: `#sec-${i + 1}`, title: `Secci\xF3n ${i + 1}` }));
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-anchor-demo", direction === "horizontal" && "mimicus-anchor-demo--horizontal", "mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Anchor, { direction, affix: Boolean(state2.affix), targetOffset: Math.round(Number(state2.targetOffset)) || 0, bounds: Math.round(Number(state2.bounds)) || 5, container: containerSel, items: links }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { id: SCROLL_ID, "data-mimicus-anchor-container": true, className: "mimicus-anchor-demo__scroll", children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("section", { id: l.href.slice(1), className: "mimicus-anchor-demo__section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("strong", { children: l.title }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { style: { margin: "0.35rem 0 0", fontSize: "0.85rem", opacity: 0.85 }, children: [
          "Contenido de ejemplo para scroll ",
          state2.affix ? "con scroll spy" : "est\xE1tico",
          "."
        ] })
      ] }, l.href)) })
    ] }, previewKey);
  }
  function TabsPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const count = Math.min(5, Math.max(2, Math.round(Number(details.tabCount)) || 3));
    const items = Array.from({ length: count }, (_, i) => ({ key: `t${i + 1}`, label: `Tab ${i + 1}`, content: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Card, { variant: "flat", style: { padding: "0.65rem" }, children: [
      "Panel ",
      i + 1
    ] }) }));
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Tabs, { type: state2.type === "card" ? "card" : "line", tabPosition: state2.tabPosition ?? "top", defaultActiveKey: items[0].key, items }) }, previewKey);
  }
  function BreadcrumbsPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const items = [{ label: "Inicio", href: "#" }, { label: "Cat\xE1logo", href: "#" }, { label: String(details.currentLabel ?? "Componente") }];
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Breadcrumbs, { separator: state2.separator ?? "/", maxItems: state2.maxItems ? Math.round(Number(state2.maxItems)) : void 0, items }) }, previewKey);
  }
  function DropdownPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Dropdown, { placement: state2.placement ?? "bottomLeft", trigger: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", children: "Men\xFA \u25BE" }), menu: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "1", children: "Perfil" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "2", children: "Ajustes" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "3", children: "Salir" })
    ] }) }) }, previewKey);
  }
  function MenuPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Menu, { mode: state2.mode === "horizontal" ? "horizontal" : "vertical", selectable: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "home", children: "Inicio" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "docs", children: "Documentaci\xF3n" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Menu.Item, { itemKey: "about", children: "Acerca de" })
    ] }) }, previewKey);
  }
  function PaginationPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Pagination, { count: Math.round(Number(state2.count)) || 10, defaultPage: Math.round(Number(state2.defaultPage)) || 1, siblingCount: Math.round(Number(state2.siblingCount)) || 1 }) }, previewKey);
  }
  function StepsPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const current = Math.max(0, Math.round(Number(state2.current)) || 1);
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Steps, { current, direction: state2.direction === "vertical" ? "vertical" : "horizontal", clickable: Boolean(state2.clickable), items: [
      { title: "Inicio", description: "Datos b\xE1sicos" },
      { title: "Proceso", description: "Validaci\xF3n" },
      { title: "Fin", description: "Confirmaci\xF3n" }
    ] }) }, previewKey);
  }
  function DrawerPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const [open, setOpen] = (0, import_react39.useState)(Boolean(state2.defaultOpen));
    (0, import_react39.useEffect)(() => {
      setOpen(Boolean(state2.defaultOpen));
    }, [state2.defaultOpen]);
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-drawer-preview", "mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", onClick: () => setOpen(true), children: "Abrir drawer" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Drawer, { open, placement: state2.placement ?? "right", width: Math.round(Number(state2.width)) || 280, title: "Panel lateral", onClose: () => setOpen(false), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { style: { margin: 0, fontSize: "0.9rem" }, children: "Contenido del drawer. Clic fuera o Escape para cerrar (controlador vanilla)." }) })
    ] }, previewKey);
  }
  function BottomNavPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const icons = ["\u2302", "\u2661", "\u25CE", "\u2630"];
    const labels = ["Inicio", "Favoritos", "Cerca", "M\xE1s"];
    const n = Math.min(5, Math.max(3, Math.round(Number(state2.actionCount)) || 4));
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BottomNavigation, { value: state2.value ?? "0", showLabels: state2.showLabels !== false, children: Array.from({ length: n }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(BottomNavigationAction, { value: String(i), label: labels[i], icon: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: icons[i] }) }, i)) }) }, previewKey);
  }
  function LinkPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { children: [
      "Ejemplo de ",
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(NavLink, { href: "#", underline: state2.underline ?? "hover", color: state2.color ?? "primary", children: "enlace tem\xE1tico" }),
      " en un p\xE1rrafo."
    ] }) }, previewKey);
  }
  function SpeedDialPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-nav-preview", demoClass].filter(Boolean).join(" "), style: { ...parseStyleString(demoStyle), minHeight: "10rem", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(SpeedDial, { direction: state2.direction ?? "up", ariaLabel: "Acciones r\xE1pidas", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SpeedDialAction, { actionKey: "copy", icon: "\u{1F4CB}", tooltip: "Copiar" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SpeedDialAction, { actionKey: "save", icon: "\u{1F4BE}", tooltip: "Guardar" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SpeedDialAction, { actionKey: "share", icon: "\u2197", tooltip: "Compartir" })
    ] }) }, previewKey);
  }
  var DEMO_AUTOCOMPLETE = [{ value: "react", label: "React" }, { value: "svelte", label: "Svelte" }, { value: "vue", label: "Vue" }];
  var DEMO_TRANSFER = [{ key: "1", title: "Item 1" }, { key: "2", title: "Item 2" }, { key: "3", title: "Item 3" }, { key: "4", title: "Item 4" }];
  var DEMO_CASCADER = [{ label: "Colombia", value: "co", children: [{ label: "Bogot\xE1", value: "bog" }, { label: "Medell\xEDn", value: "med" }] }, { label: "M\xE9xico", value: "mx", children: [{ label: "CDMX", value: "cdmx" }] }];
  var DEMO_TREE = [{ title: "General", value: "gen", children: [{ title: "Button", value: "btn" }, { title: "Input", value: "inp" }] }, { title: "Navigation", value: "nav" }];
  var CHIP_OPTIONS = [{ value: "primary", label: "Primary" }, { value: "success", label: "Success" }, { value: "warning", label: "Warning" }, { value: "danger", label: "Danger" }];
  function SwitchPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Switch, { checked: state2.checked, disabled: state2.disabled, loading: state2.loading, children: details.label ?? "Texto de demostraci\xF3n" }) }, previewKey);
  }
  function CheckboxIconPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      CheckboxIcon,
      {
        checked: state2.checked,
        disabled: state2.disabled,
        loading: state2.loading,
        variant: state2.variant,
        iconChecked: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: String(details.previewIconTrue ?? "mdi:check") }),
        iconUnchecked: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: String(details.previewIconFalse ?? "mdi:close") }),
        children: details.previewLabel ?? "Texto de demostraci\xF3n"
      }
    ) }, previewKey);
  }
  function CheckboxChipPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CheckboxChip, { value: state2.color ?? "primary", options: CHIP_OPTIONS }) }, previewKey);
  }
  function LabeledSwitchPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(LabeledSwitch, { label: state2.label ?? "Publicar en cat\xE1logo", checked: state2.checked, readonly: state2.readonly }) }, previewKey);
  }
  function TransferBoardPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      TransferBoard,
      {
        stackCount: Math.round(Number(state2.stackCount)) || 3,
        stackWidth: Math.round(Number(state2.stackWidth)) || 248,
        disabled: Boolean(state2.disabled),
        itemsPerStack: Math.round(Number(details.itemsPerStack)) || 3
      }
    ) }, previewKey);
  }
  function InputPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FormItem, { label: "Campo de texto", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Input, { disabled: state2.disabled, allowClear: Boolean(state2.allowClear), placeholder: details.placeholder ?? "Escribe aqu\xED\u2026", status: state2.status }) }) }, previewKey);
  }
  function AutoCompletePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AutoComplete, { options: DEMO_AUTOCOMPLETE, disabled: state2.disabled, placeholder: "Buscar framework\u2026" }) }, previewKey);
  }
  function SelectPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Select, { disabled: state2.disabled, placeholder: "Elige una opci\xF3n", options: DEMO_AUTOCOMPLETE, defaultValue: "react" }) }, previewKey);
  }
  function SliderPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Slider, { defaultValue: Math.round(Number(state2.defaultValue)) || 40, min: 0, max: 100, disabled: state2.disabled, showValue: true }) }, previewKey);
  }
  function RatePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Rate, { defaultValue: 2.5, allowHalf: Boolean(state2.allowHalf), disabled: state2.disabled }) }, previewKey);
  }
  function RadioPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(RadioGroup, { direction: state2.direction ?? "horizontal", defaultValue: "a", options: [{ value: "a", label: "Opci\xF3n A" }, { value: "b", label: "Opci\xF3n B" }, { value: "c", label: "Opci\xF3n C", disabled: state2.disabled }] }) }, previewKey);
  }
  function CheckboxPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Checkbox, { defaultChecked: true, indeterminate: Boolean(state2.indeterminate), disabled: state2.disabled, children: "Acepto t\xE9rminos" }) }, previewKey);
  }
  function InputNumberPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(InputNumber, { defaultValue: 3, min: 0, max: 10, step: 1, disabled: state2.disabled }) }, previewKey);
  }
  function TransferPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Transfer, { dataSource: DEMO_TRANSFER, targetKeys: ["2"], disabled: state2.disabled }) }, previewKey);
  }
  function UploadPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Upload, { multiple: Boolean(state2.multiple), disabled: state2.disabled }) }, previewKey);
  }
  function ColorPickerPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ColorPicker, { defaultValue: state2.defaultValue ?? "#1677ff", disabled: state2.disabled }) }, previewKey);
  }
  function DatePickerPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DatePicker, { disabled: state2.disabled }) }, previewKey);
  }
  function TimePickerPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TimePicker, { disabled: state2.disabled }) }, previewKey);
  }
  function CascaderPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Cascader, { options: DEMO_CASCADER, disabled: state2.disabled, placeholder: "Ciudad" }) }, previewKey);
  }
  function TreeSelectPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TreeSelect, { treeData: DEMO_TREE, disabled: state2.disabled, placeholder: "Componente" }) }, previewKey);
  }
  function MentionsPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Mentions, { options: [{ value: "paty", label: "Paty" }, { value: "mimicus", label: "Mimicus" }], disabled: state2.disabled }) }, previewKey);
  }
  function ToggleButtonPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ToggleButtonGroup, { exclusive: state2.exclusive !== false, orientation: state2.orientation ?? "horizontal", defaultValue: "web", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ToggleButton, { value: "web", children: "Web" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ToggleButton, { value: "android", children: "Android" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ToggleButton, { value: "ios", children: "iOS" })
    ] }) }, previewKey);
  }
  function FormPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-form-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Form, { layout: state2.layout ?? "vertical", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FormItem, { label: "Nombre", required: true, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Input, { placeholder: "Tu nombre" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FormItem, { label: "Framework", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Select, { options: DEMO_AUTOCOMPLETE, defaultValue: "react" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FormItem, { label: "Notas", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TextArea, { rows: 2, placeholder: details.placeholder ?? "Comentarios" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", type: "submit", children: "Enviar" })
    ] }) }, previewKey);
  }
  var DEMO_TABLE_COLS = [{ title: "Nombre", dataIndex: "name", key: "name", sorter: true }, { title: "Edad", dataIndex: "age", key: "age", sorter: true }, { title: "Ciudad", dataIndex: "city", key: "city" }];
  var DEMO_TABLE_DATA = [{ key: "1", name: "Ana", age: 28, city: "Bogot\xE1" }, { key: "2", name: "Luis", age: 34, city: "Medell\xEDn" }, { key: "3", name: "Sof\xEDa", age: 22, city: "Cali" }];
  var DEMO_DISPLAY_TREE = [{ key: "0", title: "Ra\xEDz", children: [{ key: "0-0", title: "Hijo A", children: [{ key: "0-0-0", title: "Nieto A1" }] }, { key: "0-1", title: "Hijo B" }] }];
  function BadgePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const count = Math.round(Number(state2.count)) || 5;
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Badge, { count: state2.dot ? void 0 : count, dot: Boolean(state2.dot), showZero: Boolean(state2.showZero), max: Math.round(Number(state2.max)) || 99, color: state2.color ?? "primary", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "ghost", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:bell-outline" }) }) }) }, previewKey);
  }
  function TagPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Tag, { variant: state2.variant ?? "ghost", shape: state2.shape ?? "pill", uppercase: Boolean(state2.upper), color: state2.color, icon: details.icon ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: String(details.icon) }) : void 0, children: details.text ?? "Nuevo" }) }, previewKey);
  }
  function AvatarPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: state2.group ? /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AvatarGroup, { max: Math.round(Number(state2.max)) || 4, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "Ana", children: "A" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "Luis", children: "L" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "Sof\xEDa", children: "S" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "Mar\xEDa", children: "M" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "Pedro", children: "P" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { variant: state2.variant ?? "circular", alt: "Remy Sharp", children: state2.withImage ? void 0 : "RS" }) }, previewKey);
  }
  function CarouselPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const slides = ["#1", "#2", "#3", "#4"].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Card, { variant: "flat", style: { minHeight: "7rem", display: "flex", alignItems: "center", justifyContent: "center", background: `hsl(${i * 70} 45% 35%)` }, children: n }, i));
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("max-width: 24rem", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Carousel, { autoplay: Boolean(state2.autoplay), arrows: Boolean(state2.arrows), dots: state2.dots !== false, infinite: state2.infinite !== false, children: slides }) }, previewKey);
  }
  function CollapsePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("max-width: 28rem", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Collapse, { accordion: Boolean(state2.accordion), defaultActiveKey: state2.accordion ? "1" : ["1"], children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CollapsePanel, { panelKey: "1", header: "Panel 1", defaultOpen: true, children: "Contenido del primer panel." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CollapsePanel, { panelKey: "2", header: "Panel 2", children: "Segundo panel colapsable." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CollapsePanel, { panelKey: "3", header: "Panel 3", children: "Tercer panel de ejemplo." })
    ] }) }, previewKey);
  }
  function DescriptionsPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Descriptions, { title: "Usuario", bordered: Boolean(state2.bordered), column: Math.round(Number(state2.column)) || 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DescriptionsItem, { label: "Nombre", children: "Patricia" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DescriptionsItem, { label: "Tel\xE9fono", children: "+57 300 000 0000" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DescriptionsItem, { label: "Ciudad", children: "Bogot\xE1" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DescriptionsItem, { label: "Rol", span: 2, children: "Administrador" })
    ] }) }, previewKey);
  }
  function EmptyPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Empty, { description: state2.description ?? "No data", image: state2.image ?? "default", children: state2.showAction && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", children: "Crear" }) }) }, previewKey);
  }
  function QRCodePreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(QRCode, { value: details.value ?? "https://mimicus.dev", size: Math.round(Number(state2.size)) || 128, bordered: state2.bordered !== false }) }, previewKey);
  }
  function SegmentedPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Segmented, { block: Boolean(state2.block), defaultValue: "list", options: [{ value: "list", label: "Lista" }, { value: "kanban", label: "Kanban" }, { value: "grid", label: "Grid" }] }) }, previewKey);
  }
  function StatisticPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Statistic, { title: state2.title ?? "Balance", value: state2.value ?? 112893, prefix: state2.prefix ?? "$", precision: state2.precision != null ? Math.round(Number(state2.precision)) : void 0, suffix: state2.suffix }) }, previewKey);
  }
  function TablePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Table, { columns: DEMO_TABLE_COLS, dataSource: DEMO_TABLE_DATA, bordered: Boolean(state2.bordered), sortable: Boolean(state2.sortable) }) }, previewKey);
  }
  function TimelinePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Timeline, { mode: state2.mode ?? "left", pending: state2.pending ? "Cargando\u2026" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TimelineItem, { label: "2024-01", color: "success", children: "Cuenta creada" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TimelineItem, { label: "2024-03", children: "Primer login" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TimelineItem, { label: "2024-06", color: "error", children: "Intento fallido" })
    ] }) }, previewKey);
  }
  function TooltipPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("padding: 1.5rem", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Tooltip, { title: state2.title ?? "Texto de ayuda", placement: state2.placement ?? "top", arrow: Boolean(state2.arrow), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", children: "Hover me" }) }) }, previewKey);
  }
  function TourPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-display-preview mimicus-tour-demo", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("min-height: 12rem", demoStyle)), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "ghost", "data-tour-a": true, id: "tour-a", children: "Paso 1" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "ghost", "data-tour-b": true, id: "tour-b", children: "Paso 2" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Tour, { open: Boolean(state2.open), steps: [{ target: "#tour-a", title: "Bienvenida", description: "Primer paso del tour." }, { target: "#tour-b", title: "Siguiente", description: "Segundo objetivo." }] })
    ] }, previewKey);
  }
  function TreePreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Tree, { treeData: DEMO_DISPLAY_TREE, checkable: Boolean(state2.checkable), defaultExpandAll: state2.defaultExpandAll !== false }) }, previewKey);
  }
  function CalendarPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Calendar, { fullscreen: Boolean(state2.fullscreen) }) }, previewKey);
  }
  function ListPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("max-width: 22rem", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(List, { dense: Boolean(state2.dense), subheader: state2.subheader ? "Carpetas" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ListItem, { button: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItemAvatar, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "F", children: "F" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItemText, { primary: "Fotos", secondary: "Ene 9, 2024" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ListItem, { button: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItemAvatar, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { alt: "W", children: "W" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItemText, { primary: "Trabajo", secondary: "Ene 7, 2024" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItem, { button: true, secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:chevron-right" }), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ListItemText, { primary: "Vacaciones", secondary: "Jul 20, 2024" }) })
    ] }) }, previewKey);
  }
  function CodeBlockPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CodeBlock, { value: state2.code ?? details.code ?? "", readOnly: true, minHeight: state2.minHeight ?? "7rem", maxHeight: "18rem", lang: "jsx", lineWrapping: true }) }, previewKey);
  }
  function SidePanelPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const [open, setOpen] = (0, import_react39.useState)(state2.open !== false);
    const drawer = Boolean(state2.drawer);
    (0, import_react39.useEffect)(() => {
      setOpen(state2.open !== false);
    }, [state2.open]);
    const sectionCount = Math.min(6, Math.max(1, Math.round(Number(details.sectionCount)) || 3));
    const colors = ["primary", "info", "success", "warning", "error", "danger"];
    const sections = Array.from({ length: sectionCount }, (_, i) => ({
      id: `sec-${i}`,
      icon: ["mdi:gesture-tap-button", "mdi:view-grid-outline", "mdi:compass-outline", "mdi:form-select", "mdi:card-text-outline", "mdi:message-alert-outline"][i % 6],
      label: ["General", "Layout", "Navigation", "Data Entry", "Data Display", "Feedback"][i % 6],
      color: colors[i % colors.length],
      count: 4 + i
    }));
    const railView = /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SidePanel.View, { mode: "rail", gap: "0.35rem", children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "text", shape: "rect", color: s.color, className: "pg-panel-rail__btn", title: s.label, style: { width: "100%", justifyContent: "center", minHeight: "2.35rem", paddingInline: "0.25rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: s.icon, style: { fontSize: "1.2rem" } }) }, s.id)) });
    const expandedView = /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SidePanel.View, { mode: "expanded", gap: "0.25rem", children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SidePanelSection, { icon: s.icon, label: s.label, color: s.color, open: i === 0, count: s.count, onToggle: () => {
    }, onHeaderClick: () => {
    }, children: Array.from({ length: 2 }, (_, j) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Button, { variant: "text", shape: "rect", color: s.color, style: { justifyContent: "flex-start", fontSize: "0.85rem", width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:file-document-outline" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("span", { className: "sm-item-text", children: [
        "Demo ",
        j + 1
      ] })
    ] }, j)) }, s.id)) });
    const shellStyle = parseStyleString(mergeStyleString("width:100%;height:clamp(14rem,42vh,18rem);border:1px solid var(--mimicus-b-color);border-radius:var(--mimicus-ui-radius,0.5rem);overflow:hidden;display:flex", demoStyle));
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["layout-side-panel-preview", demoClass].filter(Boolean).join(" "), style: shellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SidePanel, { open, drawer, onToggle: drawer ? void 0 : () => setOpen((v) => !v), onClose: drawer ? () => {
    } : void 0, collapsedView: railView, expandedView, style: { flex: "1 1 auto", minHeight: 0 } }) }, previewKey);
  }
  function LoginButtonPreview({ previewKey, demoStyle, demoClass }) {
    const session = (0, import_react39.useMemo)(() => createDemoSession(), []);
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ContapymeSessionProvider, { session, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-login-button-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("width:100%;padding:0.65rem 0.75rem;border:1px solid var(--mimicus-b-color);border-radius:var(--mimicus-ui-radius,0.5rem);background:color-mix(in srgb,var(--mimicus-bg-secondary),transparent 8%)", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FlexLayout, { items: "center", justify: "flex-end", gap: "0.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(LoginButton, { showPasswordToggle: true, showRemember: true }) }) }, previewKey) });
  }
  var DG_CATS = ["Papeler\xEDa", "Tecnolog\xEDa", "Aseo", "Cafeter\xEDa", "Mobiliario", "Empaques"];
  var DG_REGS = ["Andina", "Caribe", "Pac\xEDfica", "Orinoqu\xEDa"];
  var DG_PRODS = ["Resma carta", "T\xF3ner l\xE1ser", "Jab\xF3n l\xEDquido", "Caf\xE9 molido", "Silla ergon\xF3mica", "Caja kraft", "Marcador", "Disco SSD", "Servilletas", "Escritorio"];
  function buildDataGridRows(n) {
    const rows = [];
    for (let i = 0; i < n; i++) {
      const cant = i * 7 % 120 + 1;
      const precio = 1500 + i * 13 % 90 * 950;
      const dia = i * 3 % 27 + 1;
      rows.push({
        id: i + 1,
        producto: `${DG_PRODS[i % DG_PRODS.length]} ${100 + i}`,
        categoria: DG_CATS[i % DG_CATS.length],
        region: DG_REGS[i % DG_REGS.length],
        cantidad: cant,
        precio,
        total: cant * precio,
        activo: i % 3 !== 0,
        fecha: `2026-${String(i % 12 + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`
      });
    }
    return rows;
  }
  var DG_COLUMNS = [
    { field: "id", headerName: "#", type: "number", width: 70, pinned: "left", filter: true, enableRowGroup: false },
    { field: "producto", headerName: "Producto", flex: 2, minWidth: 180, filter: true },
    { field: "categoria", headerName: "Categor\xEDa", filter: "set", width: 140 },
    { field: "region", headerName: "Regi\xF3n", filter: "set", width: 120 },
    { field: "cantidad", headerName: "Cantidad", type: "number", filter: true, width: 110, aggFunc: "sum" },
    { field: "precio", headerName: "Precio", type: "number", filter: true, width: 130, aggFunc: "avg", valueFormatter: (v) => `$ ${Math.round(Number(v)).toLocaleString("es-CO")}` },
    { field: "total", headerName: "Total", type: "number", filter: true, width: 150, aggFunc: "sum", valueFormatter: (v) => `$ ${Math.round(Number(v)).toLocaleString("es-CO")}` },
    { field: "activo", headerName: "Activo", type: "boolean", cellRenderer: "boolean", width: 90, align: "center" },
    { field: "fecha", headerName: "Fecha", type: "date", filter: "date", width: 130 }
  ];
  function DataGridPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const rowCount = Math.max(0, Math.round(Number(state2.rowCount)) || 1e3);
    const rows = (0, import_react39.useMemo)(() => buildDataGridRows(rowCount), [rowCount]);
    const rowGroupCols = (0, import_react39.useMemo)(() => state2.groupBy ? [state2.groupBy] : [], [state2.groupBy]);
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-display-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("width:100%", demoStyle)), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      DataGrid,
      {
        columns: DG_COLUMNS,
        rows,
        getRowId: (r) => String(r.id),
        selectionMode: state2.selectionMode ?? "multiple",
        pagination: Boolean(state2.pagination),
        pageSize: Math.round(Number(state2.pageSize)) || 50,
        density: state2.density ?? "normal",
        toolbar: state2.toolbar !== false,
        rowGroupPanel: state2.rowGroupPanel !== false,
        rowGroupCols,
        height: Math.round(Number(state2.height)) || 460
      }
    ) }, previewKey);
  }
  function overlayScopeProps(scope) {
    return { _scope: scope === "local" ? "local" : "global" };
  }
  function ModalPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const [open, setOpen] = (0, import_react39.useState)(false);
    const [loading, setLoading] = (0, import_react39.useState)(false);
    const scope = state2._scope ?? "global";
    const localShell = scope === "local";
    (0, import_react39.useEffect)(() => {
      if (!open || !details.bSimularLoading) {
        setLoading(false);
        return void 0;
      }
      setLoading(true);
      const t = window.setTimeout(() => setLoading(false), 5e3);
      return () => window.clearTimeout(t);
    }, [open, details.bSimularLoading]);
    const title = details.bTituloPorSlot !== false && (details.titulo || details.icono) ? /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: "0.4rem" }, children: [
      details.icono && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: String(details.icono) }),
      details.titulo ?? "Modal"
    ] }) : void 0;
    const body = /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", onClick: () => setOpen(true), children: "Abrir modal" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        Modal,
        {
          open,
          loading,
          variant: state2.variant ?? "solid",
          showCloseHeader: state2.showCloseHeader !== false,
          title,
          onClose: () => setOpen(false),
          ...overlayScopeProps(scope),
          children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { style: { margin: 0, maxWidth: "22rem" }, children: [
            "Contenido del modal. Clic fuera o Escape para cerrar (salvo ",
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("code", { children: "notClose" }),
            ")."
          ] })
        }
      )
    ] });
    return localShell ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview--local", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: body }, previewKey) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: body }, previewKey);
  }
  function ActionDrawerPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    const [open, setOpen] = (0, import_react39.useState)(false);
    const [loading, setLoading] = (0, import_react39.useState)(false);
    const scope = state2._scope ?? "global";
    const side = state2.side ?? "right";
    (0, import_react39.useEffect)(() => {
      if (!open || !details.bSimularLoading) {
        setLoading(false);
        return void 0;
      }
      setLoading(true);
      const t = window.setTimeout(() => setLoading(false), 5e3);
      return () => window.clearTimeout(t);
    }, [open, details.bSimularLoading]);
    const body = /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", onClick: () => setOpen(true), children: "Abrir action drawer" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ActionDrawer, { open, loading, side, onClose: () => setOpen(false), ...overlayScopeProps(scope), children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("strong", { style: { display: "block", marginBottom: "0.35rem" }, children: "Acciones secundarias" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { style: { margin: 0, fontSize: "0.9rem" }, children: [
          "Panel deslizante desde ",
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("code", { children: side }),
          "."
        ] })
      ] })
    ] });
    return scope === "local" ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview--local", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: body }, previewKey) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: body }, previewKey);
  }
  function LoadingPreview({ state: state2, previewKey, demoStyle, demoClass, demoConfig }) {
    const [open, setOpen] = (0, import_react39.useState)(false);
    const autoCloseSec = Number(demoConfig?.autoCloseSec) || 3;
    (0, import_react39.useEffect)(() => {
      if (!open) return void 0;
      const t = window.setTimeout(() => setOpen(false), autoCloseSec * 1e3);
      return () => window.clearTimeout(t);
    }, [open, autoCloseSec]);
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", onClick: () => setOpen(true), children: "Mostrar loading" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Loading, { open, color: state2.color, onClose: () => setOpen(false) })
    ] }, previewKey);
  }
  function ToasterPreview({ previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("flex-direction: column; gap: 0.5rem", demoStyle)), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Toaster, {}),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", color: "success", onClick: () => toastSuccess("Operaci\xF3n completada"), children: "toastSuccess" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "solid", color: "error", onClick: () => toastError("Ha ocurrido un error"), children: "toastError" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Button, { variant: "outlined", onClick: () => {
        const id = toastLoading("Procesando\u2026");
        window.setTimeout(() => toastRemove(id), 2500);
      }, children: "toastLoading" })
    ] }, previewKey);
  }
  function AlertPreview({ state: state2, details, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Alert, { color: state2.color ?? "info", title: state2.title, inline: Boolean(state2.inline), style: { width: state2.inline ? void 0 : "100%", maxWidth: "28rem" }, children: details.body ?? "Texto descriptivo del alert." }) }, previewKey);
  }
  function TipInfoPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: ["mimicus-overlay-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(demoStyle), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TipInfo, { label: state2.label, descripcion: state2.descripcion, kind: state2.kind ?? "info", trigger: state2.trigger ?? "click", useModal: Boolean(state2.useModal) }) }, previewKey);
  }
  function InvokedFloaterPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const trigger = state2.trigger ?? "click";
    const hint = trigger === "hover" ? "Pasa el cursor sobre el bot\xF3n para abrir el panel." : trigger === "contextmenu" ? "Clic derecho sobre el bot\xF3n para abrir el panel." : "Haz clic en el bot\xF3n para abrir el popover anclado.";
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-invoked-floater-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("width: 100%", demoStyle)), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "mimicus-invoked-floater-preview__hint", children: hint }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-invoked-floater-preview__card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-invoked-floater-preview__head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:file-document-outline", className: "mimicus-invoked-floater-preview__head-icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-invoked-floater-preview__title", children: "Factura #1042" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-invoked-floater-preview__badge", children: "Pendiente" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "mimicus-invoked-floater-preview__meta", children: "Cliente Acme Corp \xB7 $1.240.000 \xB7 vence en 3 d\xEDas" }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "mimicus-invoked-floater-preview__actions", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          InvokedFloater,
          {
            anchorLabel: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:information-outline" }),
              " ",
              state2.anchorLabel ?? "Abrir panel"
            ] }),
            panelText: state2.panelText,
            side: state2.side ?? "bottom",
            align: state2.align ?? "center",
            trigger
          }
        ) })
      ] })
    ] }, previewKey);
  }
  function FloatingComponentPreview({ state: state2, previewKey, demoStyle, demoClass }) {
    const showfloat = Boolean(state2.showfloat);
    const rowText = state2.rowText ?? "Factura #1042 \u2014 pendiente de revisi\xF3n";
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: ["mimicus-floating-component-preview", demoClass].filter(Boolean).join(" "), style: parseStyleString(mergeStyleString("width: 100%", demoStyle)), children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "mimicus-floating-component-preview__hint", children: showfloat ? "Panel de acciones fijado con showfloat." : "Pasa el cursor sobre la fila resaltada para editar o eliminar." }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-floating-component-preview__list", role: "list", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-floating-component-preview__row", role: "listitem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-floating-component-preview__row-label", children: "Factura #1041 \u2014 Acme Corp" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-floating-component-preview__status is-paid", children: "Pagada" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "mimicus-floating-component-preview__row mimicus-floating-component-preview__row--active", role: "listitem", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(FloatingComponent, { showfloat, rowText, horizontal: state2.horizontal ?? "right", vertical: state2.vertical ?? "center" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-floating-component-preview__row", role: "listitem", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-floating-component-preview__row-label", children: "Factura #1043 \u2014 Globex S.A." }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "mimicus-floating-component-preview__status is-draft", children: "Borrador" })
        ] })
      ] })
    ] }, previewKey);
  }
  var previewBuiltins = {
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
    "action-drawer": ActionDrawerPreview,
    loading: LoadingPreview,
    toaster: ToasterPreview,
    "cmp-alert": AlertPreview,
    "cmp-tip-info": TipInfoPreview,
    "cmp-invoked-floater": InvokedFloaterPreview,
    "cmp-floating-component": FloatingComponentPreview
  };
  function PreviewStub({ template, componentName }) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-preview-stub mimicus-preview-stub--template", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "mimicus-preview-stub__badge", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: "mdi:television-play" }),
        " Vista \xAB",
        template,
        "\xBB"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "mimicus-preview-stub__hint", children: [
        "Preview ",
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("strong", { children: componentName ?? template }),
        " sin plantilla JSON."
      ] })
    ] });
  }
  function buildDemoComponentProps(node, ctx) {
    const { state: state2, details, demoStyle, demoClass, definition } = ctx;
    const props = { style: parseStyleString(demoStyle), className: demoClass };
    if (node.passState === true) Object.assign(props, stateForPreview(state2));
    else if (Array.isArray(node.passState)) {
      for (const k of node.passState) if (state2[k] != null && state2[k] !== "") props[k] = state2[k];
    }
    if (node.gapDefault && !props.gap) props.gap = node.gapDefault;
    if (node.inline != null) props.inline = node.inline;
    if (node.className) props.className = [props.className, node.className].filter(Boolean).join(" ");
    let children;
    if (node.iconFromDetails && details[node.iconFromDetails]) props.icon = /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { icon: String(details[node.iconFromDetails]) });
    if (node.textFromDetails) children = details[node.textFromDetails];
    if (node.childrenFromDetails) children = details[node.childrenFromDetails];
    const name = node.name ?? definition?.component?.name;
    return { Comp: resolveComponent(name), props, children, name };
  }

  // src/devkit/shared/jsonRenderer.tsx
  var import_jsx_runtime53 = __require("react/jsx-runtime");
  function stackStyle(gap) {
    return { display: "flex", flexDirection: "column", gap: gap || "0.25rem", width: "100%", minWidth: 0 };
  }
  function readCount(ctx, spec) {
    const raw = spec.countFrom?.startsWith("details.") ? ctx.details?.[spec.countFrom.slice(8)] : spec.countFrom?.startsWith("state.") ? ctx.state?.[spec.countFrom.slice(6)] : ctx.details?.itemCount;
    const n = Math.round(Number(raw)) || spec.default || 1;
    return Math.min(spec.max ?? 50, Math.max(spec.min ?? 1, n));
  }
  function CatalogCategories({ node, ctx }) {
    const mode = node.mode || "sections";
    const categories = sortedCategories(ctx);
    const { route, catalogItems, sectionOpen, setSectionOpen } = ctx;
    if (mode === "rail") {
      return categories.map((cat) => {
        const color = sectionColorFor(ctx, cat);
        const colorSlot = sectionColorSlotFor(ctx, cat);
        const active = route.category === cat;
        const meta = sectionMeta(ctx, cat);
        const bow = `color-mix(in oklch, ${color} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
        const wrapStyle = { "--sm-accent": color, "--sm-accent-fg": bow, width: "100%" };
        return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "pg-rail-btn-wrap", "data-section-color": colorSlot, style: wrapStyle, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Button, { variant: active ? "soft" : "text", shape: "rect", color, className: "pg-panel-rail__btn", title: meta.label ?? cat, onClick: () => ctx.onCategory?.(cat), style: { width: "100%", justifyContent: "center", minHeight: "2.35rem", paddingInline: "0.25rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Icon, { icon: meta.icon ?? "mdi:folder-outline", style: { fontSize: "1.2rem" } }) }) }, cat);
      });
    }
    if (mode === "tabs") return null;
    return categories.map((cat) => {
      const color = sectionColorFor(ctx, cat);
      const colorSlot = sectionColorSlotFor(ctx, cat);
      const meta = sectionMeta(ctx, cat);
      const items = catalogItems.filter((it) => (it.section ?? it.category) === cat);
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(SidePanelSection, { icon: meta.icon ?? "mdi:folder-outline", label: meta.label ?? cat, color, colorSlot, open: sectionOpen?.[cat], collapsed: false, active: route.category === cat && !route.slug, forceOpen: route.category === cat && !!route.slug, count: items.length, onToggle: () => setSectionOpen?.((prev) => ({ ...prev, [cat]: !prev[cat] })), onHeaderClick: () => ctx.onCategory?.(cat), children: items.map((it) => {
        const selected = route.category === cat && route.slug === it.slug;
        const bow = `color-mix(in oklch, ${color} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
        return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { "data-section-color": colorSlot, style: { "--sm-accent": color, "--sm-accent-fg": bow }, className: "pg-demo-link-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(Button, { variant: selected ? "soft" : "text", shape: "rect", color, onClick: () => ctx.onDemo?.(cat, it.slug), className: "pg-panel-demo-link", title: it.displayLabel, style: { justifyContent: "flex-start", fontSize: "0.85rem", width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Icon, { icon: getDemoIcon(it.id, it) }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "sm-item-label", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "sm-item-text", children: it.displayLabel }) })
        ] }) }, it.slug);
      }) }, cat);
    });
  }
  function PlaygroundJsonPanel({ node, ctx }) {
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node, ctx });
  }
  function JsonRenderer({ node, ctx, keyPrefix = "" }) {
    if (!node) return null;
    if (node.type === "action") {
      const isHome = node.id === "__home__" || node.nav === "home";
      const active = isHome && ctx.route?.category == null && ctx.route?.slug == null;
      const IconComp = node.icon ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Icon, { icon: node.icon }) : void 0;
      const actionColor = node.color ?? "primary";
      const bow = `color-mix(in oklch, ${actionColor} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
      const wrapStyle = { "--sm-accent": actionColor, "--sm-accent-fg": bow, width: "100%" };
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "pg-action-wrap", "data-section-color": actionColor, style: wrapStyle, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
        Button,
        {
          variant: node.variant ?? (active ? "soft" : "text"),
          shape: node.shape ?? "rect",
          color: actionColor,
          className: node.className ?? "pg-panel-demo-link",
          title: node.label,
          onClick: () => {
            if (node.id === "__home__" || node.nav === "home") ctx.onHome?.();
            else ctx.onAction?.(node.id, node);
          },
          style: { justifyContent: "flex-start", fontSize: "0.85rem", width: "100%" },
          children: [
            IconComp,
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "sm-item-label", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "sm-item-text", children: node.label }) })
          ]
        }
      ) });
    }
    if (node.type === "separator") return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("hr", { className: "sidebar-separator" });
    if (node.type === "builtin") {
      const Builtin = previewBuiltins[node.id];
      return Builtin ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Builtin, { ...ctx }) : null;
    }
    if (node.type === "wrap") {
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { style: parseStyleString(node.style), children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node: node.child, ctx, keyPrefix: `${keyPrefix}-w` }) }, keyPrefix);
    }
    if (node.type === "surround") {
      const inline = Boolean(ctx.state?.[node.inlineFromState ?? "inline"]);
      const Tag2 = inline ? "span" : "div";
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Tag2, { className: inline ? "layout-inline-demo layout-inline-demo--inline" : "layout-inline-demo", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node: node.child, ctx, keyPrefix: `${keyPrefix}-s` }) }, keyPrefix);
    }
    if (node.type === "repeat") {
      const count = readCount(ctx, node);
      return Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node: node.child, ctx: { ...ctx, repeatIndex: i }, keyPrefix: `${keyPrefix}-r${i}` }, `${keyPrefix}-r${i}`));
    }
    if (node.type === "emoji-card") {
      const i = ctx.repeatIndex ?? 0;
      const emoji = LAYOUT_PREVIEW_EMOJIS[i % LAYOUT_PREVIEW_EMOJIS.length];
      const label = node.labelPrefix ? `${node.labelPrefix}${i + 1} ${emoji}` : emoji;
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Card, { variant: "flat", inline: node.inline !== false, style: parseStyleString(node.cardStyle), children: node.labelPrefix ? label : emoji }, keyPrefix);
    }
    if (node.type === "demo-component") {
      const inline = node.widthFromInline && Boolean(ctx.state?.inline);
      const { Comp, props, children } = buildDemoComponentProps(node, ctx);
      if (!Comp) return null;
      const style = { ...inline ? { width: "fit-content" } : { width: "100%" }, maxWidth: "100%", ...props.style };
      const inner = node.children ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node: node.children, ctx }) : children;
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Comp, { ...props, style, children: inner });
    }
    if (node.type === "stack") {
      const rendered = (node.children ?? []).flatMap((child, idx) => {
        if (child.type === "catalog-categories") {
          const out = CatalogCategories({ node: child, ctx });
          return Array.isArray(out) ? out : out ? [out] : [];
        }
        if (child.type === "separator") return [/* @__PURE__ */ (0, import_jsx_runtime53.jsx)("hr", { className: "sidebar-separator" }, `sep-${idx}`)];
        return [/* @__PURE__ */ (0, import_jsx_runtime53.jsx)(JsonRenderer, { node: child, ctx, keyPrefix: `${keyPrefix}-${idx}` }, child.id || idx)];
      });
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: node.className, style: stackStyle(node.gap), children: rendered });
    }
    if (node.type === "catalog-categories") {
      const out = CatalogCategories({ node, ctx });
      return Array.isArray(out) ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, { children: out }) : out;
    }
    return null;
  }

  // src/devkit/shared/driver/previewRenderer.tsx
  var import_jsx_runtime54 = __require("react/jsx-runtime");
  function resolvePreviewNode(definition) {
    if (definition.preview?.tree) return definition.preview.tree;
    const previewTemplates = playgroundData().previewTemplates ?? {};
    const tpl = definition.preview?.template ?? "component";
    return previewTemplates[tpl] ?? previewTemplates.component;
  }
  function PreviewRenderer(props) {
    const { definition } = props;
    const node = resolvePreviewNode(definition);
    const ctx = { ...props, repeatIndex: 0 };
    if (node?.type === "builtin") {
      const Builtin = previewBuiltins[node.id];
      return Builtin ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Builtin, { ...props }) : /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(PreviewStub, { template: node.id, componentName: definition.component?.name });
    }
    const rendered = /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(JsonRenderer, { node, ctx });
    if (rendered) return rendered;
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(PreviewStub, { template: definition.preview?.template, componentName: definition.component?.name });
  }

  // src/devkit/shared/driver/driverCore.tsx
  var import_jsx_runtime55 = __require("react/jsx-runtime");
  var JsonDemoAdapter = class extends DemoController {
    constructor(def) {
      super();
      this.def = def;
      this.componentName = def.component.name;
      this.componentPath = def.component.path;
      this.previewScale = def.preview?.scale;
      this.previewStyle = def.preview?.style;
      this.hydratedFields = hydrateFields(def.fields);
      this.hydratedDetailFields = hydrateFields(def.detailFields ?? []);
      this.hydratedDemoConfigFields = hydrateFields(def.demoConfigFields ?? []);
    }
    initialState() {
      return structuredClone(this.def.state ?? {});
    }
    initialDetails() {
      return structuredClone(this.def.details ?? {});
    }
    initialDemoConfig() {
      return structuredClone(this.def.demoConfig ?? {});
    }
    fields() {
      return this.hydratedFields;
    }
    detailFields() {
      return this.hydratedDetailFields;
    }
    demoConfigFields() {
      return this.hydratedDemoConfigFields;
    }
    presets() {
      return this.def.presets ?? [];
    }
    tagOpts() {
      return this.def.code?.tagOpts ?? {};
    }
    buildCode(state2, details = {}, demoStyle = "", demoClass = "", demoConfig = {}) {
      const strategy = this.def.code?.strategy ?? "default";
      return buildCodeFromStrategy(strategy, { def: this.def, collectAttrs: (s) => this.collectAttrs(s) }, state2, details, demoStyle, demoClass, demoConfig);
    }
  };
  function createJsonAdapter(def) {
    return new JsonDemoAdapter(def);
  }
  function DemoPage({ definition }) {
    const adapter = (0, import_react40.useMemo)(() => createJsonAdapter(definition), [definition]);
    const [state2, setState] = (0, import_react40.useState)(() => adapter.initialState());
    const [details, setDetails] = (0, import_react40.useState)(() => adapter.initialDetails());
    const [demoConfig, setDemoConfig] = (0, import_react40.useState)(() => adapter.initialDemoConfig());
    const [demoStyle, setDemoStyle] = (0, import_react40.useState)("");
    const [demoClass, setDemoClass] = (0, import_react40.useState)("");
    const shell = definition.shell ?? {};
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      AccordionDemo,
      {
        flat: true,
        adapter,
        title: definition.title ?? definition.label,
        titleIcon: definition.titleIcon,
        relieve: shell.relieve,
        configBlockCount: shell.configBlockCount,
        className: shell.class,
        previewScale: definition.preview?.scale,
        previewStyle: definition.preview?.style,
        demoId: definition.id,
        state: state2,
        details,
        demoConfig,
        demoStyle,
        demoClass,
        onStateChange: setState,
        onDetailsChange: setDetails,
        onDemoConfigChange: setDemoConfig,
        onDemoStyleChange: setDemoStyle,
        onDemoClassChange: setDemoClass,
        intro: definition.intro,
        preview: (ctx) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "div",
          {
            className: "demo-preview-root",
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              minHeight: "2.5rem",
              boxSizing: "border-box"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(PreviewRenderer, { definition, ...ctx })
          }
        )
      }
    );
  }

  // src/devkit/shell/playgroundAppLayout.ts
  var PLAYGROUND_LAYOUT_SELECT_OPTIONS = PLAYGROUND_APP_LAYOUT_OPTIONS;
  var PLAYGROUND_APP_LAYOUT_STORAGE_KEY = "pg-app-layout-variant";
  var layoutVariant = "side";
  var layoutListeners = /* @__PURE__ */ new Set();
  function getPlaygroundAppLayoutVariant() {
    return layoutVariant;
  }
  function applyPlaygroundAppLayoutVariant(next) {
    layoutVariant = normalizePlaygroundAppLayoutVariant(next);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.appLayoutVariant = layoutVariant;
    }
    try {
      localStorage.setItem(PLAYGROUND_APP_LAYOUT_STORAGE_KEY, layoutVariant);
    } catch {
    }
    layoutListeners.forEach((fn) => {
      try {
        fn(layoutVariant);
      } catch {
      }
    });
  }
  function setPlaygroundAppLayoutVariant(next) {
    const value = normalizePlaygroundAppLayoutVariant(next);
    if (value === layoutVariant) return;
    applyPlaygroundAppLayoutVariant(value);
  }
  function subscribePlaygroundAppLayoutVariant(fn) {
    layoutListeners.add(fn);
    return () => layoutListeners.delete(fn);
  }
  function bootPlaygroundAppLayout() {
    let stored = "side";
    try {
      const v = localStorage.getItem(PLAYGROUND_APP_LAYOUT_STORAGE_KEY);
      if (v) stored = v;
    } catch {
    }
    applyPlaygroundAppLayoutVariant(stored);
  }
  function playgroundShellAppLayoutVariant(shellVariant) {
    return shellVariant === "top-side-2" ? "top-side-2" : "top-side";
  }
  if (typeof document !== "undefined") bootPlaygroundAppLayout();

  // src/devkit/shell/shellChrome.tsx
  var import_react41 = __require("react");

  // src/devkit/shell/playgroundNav.tsx
  var import_jsx_runtime56 = __require("react/jsx-runtime");
  function PlaygroundBrand({ title, icon = "assets/mimicus-logo.svg", onClick }) {
    const Tag2 = onClick ? "button" : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
      Tag2,
      {
        type: onClick ? "button" : void 0,
        className: ["pg-app-brand", "mimicus-ui-brand", onClick && "pg-app-brand--clickable"].filter(Boolean).join(" "),
        onClick,
        title: onClick ? "Inicio" : title,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { src: icon, alt: "", width: "22", height: "22", className: "pg-app-brand__icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "pg-app-brand__title", children: title })
        ]
      }
    );
  }

  // src/devkit/shell/shellChrome.tsx
  var import_jsx_runtime57 = __require("react/jsx-runtime");
  var LAYOUT_BP_NARROW3 = 768;
  function useNarrowViewport2() {
    const [narrow, setNarrow] = (0, import_react41.useState)(false);
    (0, import_react41.useEffect)(() => {
      const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW3 - 1}px)`);
      const sync = () => setNarrow(mq.matches);
      sync();
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    }, []);
    return narrow;
  }
  function usePlaygroundBodyScrollLock(active) {
    (0, import_react41.useEffect)(() => {
      if (!active) return void 0;
      const html = document.documentElement;
      const body = document.body;
      const prevHtml = html.style.overflow;
      const prevBody = body.style.overflow;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      return () => {
        html.style.overflow = prevHtml;
        body.style.overflow = prevBody;
      };
    }, [active]);
  }
  function FpsCounter({ collapsed = false }) {
    const [fps, setFps] = (0, import_react41.useState)(60);
    (0, import_react41.useEffect)(() => {
      let frames = 0;
      let last = performance.now();
      let raf = 0;
      const tick = (now) => {
        frames += 1;
        if (now - last >= 1e3) {
          setFps(Math.round(frames * 1e3 / (now - last)));
          frames = 0;
          last = now;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("span", { className: "fps-histogram-chip", title: "FPS \xB7 \xFAltimo segundo", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "fps-histogram-chip__value", children: fps }),
      !collapsed && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "fps-histogram-chip__unit", children: "FPS" })
    ] });
  }
  function paletteColorCountChip(paletteId) {
    const count = designSchemeColorCount(designSchemeForThemeColor(paletteId));
    const schemeLabel = count === 1 ? "Mono" : count === 2 ? "Dual" : "Tr\xEDada";
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "pg-skin-palette-chip", title: schemeLabel, "aria-label": `${count} ${count === 1 ? "color" : "colores"} (${schemeLabel})`, children: count });
  }
  function PlaygroundSkinSelect({ label, value, options, onChange, accent: accent2 = "palette" }) {
    const dataProps = accent2 === "palette" ? { "data-palette": value } : { "data-look": value };
    const selectOptions = options.map((o) => ({
      value: o.id,
      label: o.label,
      icon: o.icon ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("iconify-icon", { icon: o.icon }) : void 0,
      suffix: accent2 === "palette" ? paletteColorCountChip(o.id) : void 0
    }));
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: ["pg-skin-toggle", accent2 === "palette" ? "pg-skin-toggle--palette" : "pg-skin-toggle--look"].join(" "), ...dataProps, title: label, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Select, { className: "pg-skin-toggle__select", size: "small", value, options: selectOptions, onChange: (v) => onChange?.(v), "aria-label": label }) });
  }
  function HeaderSkinBar() {
    const [theme, setTheme] = (0, import_react41.useState)(() => getThemeState());
    const [look, setLook] = (0, import_react41.useState)(() => getLooknfeelState());
    const [layout, setLayout] = (0, import_react41.useState)(() => getPlaygroundAppLayoutVariant());
    (0, import_react41.useEffect)(() => subscribeTheme(setTheme), []);
    (0, import_react41.useEffect)(() => subscribeLooknfeel(setLook), []);
    (0, import_react41.useEffect)(() => subscribePlaygroundAppLayoutVariant(setLayout), []);
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "pg-header-skin-bar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(PlaygroundSkinSelect, { label: "Layout", accent: "look", value: layout, options: PLAYGROUND_LAYOUT_SELECT_OPTIONS, onChange: setPlaygroundAppLayoutVariant }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(PlaygroundSkinSelect, { label: "Paleta", accent: "palette", value: theme.themeColor, options: THEME_COLOR_OPTIONS, onChange: setThemeColor }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(PlaygroundSkinSelect, { label: "Look n feel", accent: "look", value: look, options: LOOKNFEEL_OPTIONS, onChange: applyLooknfeel }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Button, { variant: theme.luminance === "dark" ? "soft" : "text", color: "neutral", shape: "rect", className: "pg-header-skin-bar__theme-btn", onClick: () => setLuminance(theme.luminance === "dark" ? "light" : "dark"), title: theme.luminance === "dark" ? "Modo claro" : "Modo oscuro", "aria-label": theme.luminance === "dark" ? "Modo claro" : "Modo oscuro", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { "aria-hidden": true, children: theme.luminance === "dark" ? "\u2600" : "\u263E" }) })
    ] });
  }
  function PlaygroundShellHeader({
    brandTitle,
    onBrandClick,
    headerCenter,
    headerTools,
    title,
    headerEnd,
    shellNavigation,
    primaryNav,
    secondaryNav,
    showShellMenuBtn,
    menuTitle,
    onShellMenuClick
  }) {
    const center = headerCenter ?? (title ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "title pg-route-title pg-shell-route-title pg-vt-header", children: title }) : null);
    const tools = headerTools ?? headerEnd;
    const nav = shellNavigation ?? /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, { children: [
      primaryNav,
      secondaryNav
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(AppLayout.Header, { barClassName: "pg-shell-toolbar pg-shell-toolbar--cols-2", className: "pg-shell-header-stack pg-content-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(AppLayout.Header.Brand, { children: [
        showShellMenuBtn && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Button, { variant: "text", shape: "rect", color: "neutral", onClick: onShellMenuClick, className: "sidebar-header-btn pg-shell-menu-btn", title: menuTitle, style: { flexShrink: 0, width: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Icon, { icon: "mdi:menu" }) }),
        brandTitle && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(PlaygroundBrand, { title: brandTitle, onClick: onBrandClick })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Header.Center, { children: center }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Header.Tools, { children: tools }),
      nav ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Header.Nav, { children: nav }) : null
    ] });
  }
  function PlaygroundAppShell({
    title,
    brandTitle,
    onBrandClick,
    headerCenter,
    headerTools,
    headerEnd,
    shellNavigation,
    primaryNav,
    secondaryNav,
    collapsedPanel,
    expandedPanel,
    children,
    embedMode = false
  }) {
    const narrow = useNarrowViewport2();
    const [open, setOpen] = (0, import_react41.useState)(true);
    const [drawerOpen, setDrawerOpen] = (0, import_react41.useState)(false);
    const [variant, setVariant] = (0, import_react41.useState)(() => getPlaygroundAppLayoutVariant());
    const storageKey = panelStorageKey();
    usePlaygroundBodyScrollLock(true);
    (0, import_react41.useEffect)(() => subscribePlaygroundAppLayoutVariant(setVariant), []);
    (0, import_react41.useEffect)(() => {
      try {
        const s = localStorage.getItem(storageKey);
        if (s !== null) setOpen(s === "1");
      } catch {
      }
    }, [storageKey]);
    (0, import_react41.useEffect)(() => {
      try {
        localStorage.setItem(storageKey, open ? "1" : "0");
      } catch {
      }
    }, [open, storageKey]);
    (0, import_react41.useEffect)(() => {
      if (!narrow) setDrawerOpen(false);
    }, [narrow]);
    const shellVariant = normalizePlaygroundAppLayoutVariant(variant);
    const gridVariant = playgroundShellAppLayoutVariant(shellVariant);
    const showSider = !embedMode;
    const panelEnd = shellVariant === "top-side-2";
    const useDrawer = narrow && showSider;
    const showShellMenuBtn = useDrawer;
    const toggleSidebar = (0, import_react41.useCallback)(() => setOpen((v) => !v), []);
    const closeDrawer = (0, import_react41.useCallback)(() => setDrawerOpen(false), []);
    const onShellMenuClick = (0, import_react41.useCallback)(() => setDrawerOpen((v) => !v), []);
    const shellClass = [
      "pg-shell",
      "pg-playground-shell",
      `pg-playground-shell--${shellVariant}`,
      !open && showSider && !useDrawer && "is-collapsed",
      useDrawer && "pg-playground-shell--drawer",
      embedMode && "pg-shell--embed"
    ].filter(Boolean).join(" ");
    const menuTitle = drawerOpen ? "Cerrar men\xFA" : "Abrir men\xFA";
    const siderWidth = panelSizeCss(useDrawer ? true : open);
    const shellStyle = { "--pg-shell-sider-w": siderWidth, "--mimicus-app-layout-sider-w": siderWidth };
    const shellHeader = /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      PlaygroundShellHeader,
      {
        brandTitle,
        onBrandClick,
        title,
        headerCenter,
        headerTools,
        headerEnd,
        shellNavigation,
        primaryNav,
        secondaryNav,
        showShellMenuBtn,
        menuTitle,
        onShellMenuClick
      }
    );
    if (embedMode) {
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: shellClass, style: shellStyle, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "pg-shell-stage pg-shell-stage--embed", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(AppLayout.Header, { className: "pg-content-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Header.Center, { children: title && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "title pg-route-title", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Header.Tools, { children: headerEnd })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "pg-shell-main custom-scrollbar pg-scrollbar", children })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: shellClass, style: shellStyle, children: [
      useDrawer && drawerOpen && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("button", { type: "button", className: "pg-shell-drawer-backdrop", "aria-label": "Cerrar men\xFA", onClick: closeDrawer }),
      useDrawer && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: ["pg-shell-drawer-panel", panelEnd ? "pg-shell-drawer-panel--right" : "pg-shell-drawer-panel--left", drawerOpen && "is-open"].filter(Boolean).join(" "), "aria-hidden": !drawerOpen, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SidePanel, { open: true, drawer: true, collapsedView: collapsedPanel, expandedView: expandedPanel, onClose: closeDrawer }) }),
      shellHeader,
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
        AppLayout,
        {
          variant: gridVariant,
          fixedSider: showSider,
          responsive: true,
          responsiveDrawer: useDrawer,
          className: "pg-playground-app-layout mimicus-shell",
          style: { minHeight: 0, flex: "1 1 auto", ...shellStyle },
          children: [
            showSider && !useDrawer && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AppLayout.Sider, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SidePanel, { open, onToggle: toggleSidebar, collapsedView: collapsedPanel, expandedView: expandedPanel }) }),
            /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "pg-shell-main custom-scrollbar pg-scrollbar pg-vt-main", children })
          ]
        },
        gridVariant
      )
    ] });
  }

  // src/devkit/Playground.tsx
  var import_jsx_runtime58 = __require("react/jsx-runtime");
  function Playground({ catalog = [], catalogMeta, sectionsMeta, shellConfig: shellConfigProp, previewTemplates, brand }) {
    configurePlayground({ catalogMeta, sectionsMeta, shellConfig: shellConfigProp, previewTemplates, brand });
    const implementedCatalogItems = (0, import_react42.useMemo)(() => (catalog ?? []).filter((it) => {
      const name = it.definition?.component?.name ?? it.id;
      return !isStubComponent(name);
    }), [catalog]);
    const implementedSections = (0, import_react42.useMemo)(() => sectionsWithItems(implementedCatalogItems), [implementedCatalogItems]);
    const [navState, setNavState] = (0, import_react42.useState)(() => urlState2.get());
    const route = (0, import_react42.useMemo)(() => stateToRoute(navState), [navState]);
    const [sectionOpen, setSectionOpen] = (0, import_react42.useState)(() => Object.fromEntries(implementedSections.map((s) => [s, true])));
    (0, import_react42.useEffect)(() => {
      bootPlaygroundAppLayout();
      document.documentElement.classList.add("pg-playground-doc");
      bootViewTransitionRoute();
      const unsub = urlState2.subscribe((s) => {
        setNavState(s);
        syncViewTransitionRoute(stateToRoute(s));
        document.querySelector(".pg-shell-main")?.scrollTo({ top: 0, behavior: "smooth" });
      });
      syncViewTransitionRoute(stateToRoute(urlState2.get()));
      return () => {
        unsub();
        document.documentElement.classList.remove("pg-playground-doc");
      };
    }, []);
    const isPaletteLabView = navState.p === "palette";
    const embedMode = isEmbedView(navState);
    const isCatalogView = !isPaletteLabView && route.category == null && route.slug == null;
    const isSectionView = !isCatalogView && route.category != null && !route.slug;
    const filteredItems = (0, import_react42.useMemo)(() => {
      if (!route.category || isCatalogView) return [];
      const inSection = itemsInSection(implementedCatalogItems, route.category);
      if (!route.slug) return inSection;
      return inSection.filter((i) => i.slug === route.slug);
    }, [route, isCatalogView, implementedCatalogItems]);
    const routeTitle = isPaletteLabView ? "Paleta & Look" : isCatalogView ? MIMICUS_UI.catalogLabel ?? "Components Overview" : !route.slug ? sectionLabel(route.category) ?? route.category : `${sectionLabel(route.category)} / ${filteredItems[0]?.displayLabel ?? route.slug}`;
    (0, import_react42.useEffect)(() => {
      document.title = mimicusPageTitle(routeTitle);
    }, [routeTitle]);
    (0, import_react42.useEffect)(() => {
      if (route.category && route.slug) {
        setSectionOpen((prev) => ({ ...prev, [route.category]: true }));
      }
    }, [route.category, route.slug]);
    const cfg = shellConfig();
    const panelCtx = (0, import_react42.useMemo)(() => ({
      route,
      catalog: catalogMeta,
      sectionsMeta,
      catalogItems: implementedCatalogItems,
      categories: implementedSections,
      sectionOrder: sectionOrder(),
      sectionColors: sectionColors(),
      sectionAccentColors: sectionColors(),
      sectionOpen,
      setSectionOpen,
      isPaletteLabView,
      isCatalogView,
      onHome: () => setNav(null),
      onPalette: () => setPaletteLab(),
      onCategory: (cat) => setNav(cat),
      onDemo: (cat, slug) => setNav(cat, slug),
      getDemoIcon: (it) => getDemoIcon(it.id, it)
    }), [route, sectionOpen, isPaletteLabView, isCatalogView, implementedCatalogItems, implementedSections, catalogMeta]);
    const collapsedPanel = /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PlaygroundJsonPanel, { node: cfg.views?.collapsed, ctx: panelCtx });
    const expandedPanel = /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PlaygroundJsonPanel, { node: cfg.views?.expanded, ctx: panelCtx });
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
      PlaygroundAppShell,
      {
        brandTitle: MIMICUS_UI.name,
        onBrandClick: () => setNav(null),
        headerCenter: routeTitle ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "title pg-route-title pg-shell-route-title pg-vt-header", children: routeTitle }) : null,
        headerTools: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(HeaderSkinBar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(FpsCounter, {})
        ] }),
        shellNavigation: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ShellHeaderNav, { shellConfig: cfg, ctx: panelCtx, onTab: (id) => dispatchShellNav(id, panelCtx, cfg) }),
        collapsedPanel,
        expandedPanel,
        embedMode,
        children: [
          isPaletteLabView && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ThemeLab, {}),
          isCatalogView && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            CatalogHome,
            {
              items: implementedCatalogItems,
              onSelect: (section, slug) => setNav(section, slug),
              onOpenPaletteLab: () => setPaletteLab()
            }
          ),
          isSectionView && route.category && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            CatalogHome,
            {
              filterSection: route.category,
              items: implementedCatalogItems,
              onSelect: (section, slug) => setNav(section, slug)
            }
          ),
          !isPaletteLabView && !isCatalogView && !isSectionView && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "pg-vt-demo pg-demo-doc-page", children: [
            filteredItems.map((it) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(DemoPage, { definition: it.definition }, `${it.section}/${it.slug}`)),
            filteredItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "catalog-home__lead", children: "No hay demos para esta ruta." })
          ] })
        ]
      }
    );
  }

  // src/index.tsx
  function bootMimicusUI() {
    bootTheme();
    bootLooknfeel();
  }

  // src/entry-iife.tsx
  var g = globalThis;
  g.MimicusUI = { ...index_exports };
  if (!g.MimicusBootstrap) g.MimicusBootstrap = {};
  Object.assign(g.MimicusBootstrap, cdn_exports, snippets_exports, cdn_exports);
})();
