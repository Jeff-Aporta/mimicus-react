// src/spa/SpaRouter.tsx
import { createContext, useContext, useEffect, useMemo, useState as useState2 } from "react";

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
function slimForUrl(state) {
  const out = { v: state.v ?? STATE_VERSION };
  if (state.r) out.r = state.r;
  if (state.e === 1) out.e = 1;
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
  let state = initial();
  const listeners = /* @__PURE__ */ new Set();
  let writeTimer = null;
  let booted = false;
  const getSnapshot = () => ({ ...state });
  const writeUrl = () => {
    try {
      const slimmed = slimForUrl(state);
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
  const notify = () => {
    const snap = getSnapshot();
    listeners.forEach((fn) => {
      try {
        fn(snap);
      } catch {
      }
    });
  };
  const api = {
    get: getSnapshot,
    setRoute(route) {
      state = normalize({ v: STATE_VERSION, r: route || void 0, e: state.e });
      notify();
      scheduleWrite();
      return getSnapshot();
    },
    reset() {
      state = initial();
      notify();
      if (writeTimer) clearTimeout(writeTimer);
      writeTimer = null;
      writeUrl();
      return getSnapshot();
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => {
        listeners.delete(fn);
      };
    },
    boot() {
      if (booted) return getSnapshot();
      booted = true;
      const fromUrl = readUrl();
      const fromHash = fromUrl ? null : migrateLegacyHash();
      state = fromUrl ?? fromHash ?? initial();
      if (fromHash) scheduleWrite();
      if (typeof window !== "undefined") {
        window.addEventListener("popstate", () => {
          state = readUrl() ?? initial();
          notify();
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

// src/components/Button.tsx
import { useState } from "react";

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
var THEME_COLOR_OPTIONS = palette_catalog_default.map(({ id, label, icon }) => ({ id, label, icon }));
var THEME_COLOR_DESIGN_SCHEME = Object.fromEntries(
  palette_catalog_default.map((p) => [p.id, p.scheme])
);
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
    style: { width: block ? "100%" : "fit-content", maxWidth: block ? void 0 : "100%", ...surfaceStyle.style, ...style }
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

// src/spa/SpaRouter.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SpaContext = createContext({ route: null, navigate: setSpaRoute, routes: {}, defaultRoute: "home" });
function useSpa() {
  return useContext(SpaContext);
}
function useSpaRoute() {
  const { route, defaultRoute } = useSpa();
  return route ?? defaultRoute ?? null;
}
function SpaOutlet({ routes = {}, defaultRoute = "home", fallback = null }) {
  const route = useSpaRoute() ?? defaultRoute;
  const Page = routes[route] ?? routes[defaultRoute] ?? fallback;
  if (!Page) return null;
  return typeof Page === "function" ? /* @__PURE__ */ jsx2(Page, {}) : Page;
}
function SpaRouter({ routes, defaultRoute = "home", children }) {
  const [nav, setNav] = useState2(() => urlState.get());
  useEffect(() => {
    const off = urlState.subscribe(setNav);
    return () => {
      off();
    };
  }, []);
  const route = nav.r ?? defaultRoute;
  const navigate = (next) => urlState.setRoute(next);
  const value = useMemo(() => ({ route, navigate, routes, defaultRoute }), [route, routes, defaultRoute]);
  return /* @__PURE__ */ jsx2(SpaContext.Provider, { value, children });
}
function SpaNavLink({ route, children, className, variant = "text", ...rest }) {
  const { route: active, navigate } = useSpa();
  const isActive = active === route;
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs2("nav", { ...rest, className: ["mimicus-sidebar", className].filter(Boolean).join(" "), children: [
    title != null && /* @__PURE__ */ jsx2("div", { className: "mimicus-sidebar-header pg-sidebar-header", children: title }),
    /* @__PURE__ */ jsx2("div", { className: "mimicus-sidebar-body pg-sidebar-body", children })
  ] });
}
export {
  MimicusSidebar,
  SpaNavLink,
  SpaOutlet,
  SpaRouter,
  getSpaRoute,
  setSpaRoute,
  urlState,
  useSpa,
  useSpaRoute
};
