// src/components/Icon.tsx
import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
function Icon({ icon, className, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (className) el.setAttribute("class", className);
    else el.removeAttribute("class");
  }, [className]);
  if (!icon) return null;
  return /* @__PURE__ */ jsx("iconify-icon", { ref, icon, style: style && typeof style === "object" ? style : void 0 });
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
function surfaceVariantAttrs(variant, fallback = "solid") {
  return { "data-variant": normalizeVariant(variant, fallback) };
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
function colorMix(c1, c2, p) {
  const r1 = resolveColor(c1);
  if (p <= 0) return r1;
  const r2 = resolveColor(c2);
  if (p >= 100) return r2;
  return `color-mix(in srgb, ${r1}, ${r2} ${p}%)`;
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
  const [busy, setBusy] = useState(false);
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
  const iconNode = (icon || isLoading) && (isLoading ? /* @__PURE__ */ jsx2("span", { className: "mimicus-text-icon mimicus-btn-spinner", "aria-hidden": true, children: "\u2026" }) : icon);
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
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children: finalChildren }),
    finalIcon
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    finalIcon,
    finalChildren != null && finalChildren !== "" && /* @__PURE__ */ jsx2("span", { className: "button-content", children: finalChildren })
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

// src/components/FloatButton.tsx
import { Children, useEffect as useEffect2, useState as useState2 } from "react";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const inner = /* @__PURE__ */ jsxs2(Fragment2, { children: [
    icon && /* @__PURE__ */ jsx3("span", { className: "mimicus-float-btn__icon", "aria-hidden": true, children: icon }),
    extended && /* @__PURE__ */ jsx3("span", { className: "mimicus-float-btn__content", children: label })
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
    return /* @__PURE__ */ jsx3("a", { href, target, ...rest, ...dataProps, children: inner });
  }
  return /* @__PURE__ */ jsx3("button", { type: "button", disabled, ...rest, ...dataProps, children: inner });
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
  const [internalOpen, setInternalOpen] = useState2(defaultOpen);
  const open = openProp ?? internalOpen;
  const setOpen = (v) => {
    if (openProp === void 0) setInternalOpen(v);
    onOpenChange?.(v);
  };
  const items = Children.toArray(children).filter(Boolean);
  const main = items[0];
  const extras = items.slice(1);
  return /* @__PURE__ */ jsxs2(
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
        open && extras.length > 0 && /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__menu", role: "menu", children: extras.map((child, i) => /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__item", role: "none", children: child }, i)) }),
        /* @__PURE__ */ jsx3("div", { className: "mimicus-float-btn-group__trigger", role: "none", children: trigger === "click" && extras.length > 0 ? /* @__PURE__ */ jsx3(
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
  const [visible, setVisible] = useState2(false);
  useEffect2(() => {
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
  return /* @__PURE__ */ jsx3(
    FloatButtonBase,
    {
      type: "primary",
      shape: "circle",
      className: ["mimicus-float-btn--back-top", className].filter(Boolean).join(" "),
      style,
      icon: icon ?? /* @__PURE__ */ jsx3("span", { className: "mimicus-text-icon", children: "\u2191" }),
      tooltip: "Volver arriba",
      onClick: scrollTop
    }
  );
}
function FloatButtonRoot(props) {
  return /* @__PURE__ */ jsx3(FloatButtonBase, { ...props });
}
var FloatButton = Object.assign(FloatButtonRoot, {
  Group: FloatButtonGroup,
  BackTop: FloatButtonBackTop
});
function Fab(props) {
  return /* @__PURE__ */ jsx3(FloatButton, { type: props.color === "secondary" ? "default" : "primary", ...props });
}
function IconButton({ color, variant = "text", className, style, children, icon, ...rest }) {
  return /* @__PURE__ */ jsx3(
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
var mkAlpha = (c, p = 0) => applyOpts(resolveAny(c), { transparent: p });
var mkUnbow = (color, percent = 0) => applyOpts(resolveAny(color), { unbow: percent });
function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
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

// src/components/Card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx4(
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

// src/components/GlassHeaderBand.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function GlassHeaderBand({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  compact = false,
  className = "",
  as: Tag = "header",
  sectionColor,
  children
}) {
  const rootClass = ["mimicus-glass-header", compact && "mimicus-glass-header--compact", className].filter(Boolean).join(" ");
  const bow = sectionColor ? `color-mix(in oklch, ${resolveColor(sectionColor)} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)` : void 0;
  const accentStyle = sectionColor ? { "--sm-accent": resolveColor(sectionColor), "--sm-accent-fg": bow } : void 0;
  return /* @__PURE__ */ jsxs3(Tag, { className: rootClass, "data-section-color": sectionColor || void 0, style: accentStyle, children: [
    icon !== false && icon ? /* @__PURE__ */ jsx5("span", { className: "mimicus-glass-header__icon", "aria-hidden": true, children: /* @__PURE__ */ jsx5(Icon, { icon }) }) : null,
    /* @__PURE__ */ jsxs3("div", { className: "mimicus-glass-header__body", children: [
      /* @__PURE__ */ jsx5("span", { id: titleId, className: "mimicus-glass-header__title", children: title }),
      subtitle ? /* @__PURE__ */ jsx5("span", { className: "mimicus-glass-header__subtitle", children: subtitle }) : null
    ] }),
    children ? /* @__PURE__ */ jsx5("div", { className: "mimicus-glass-header__tools", children }) : null
  ] });
}

// src/components/TitleCard.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function TitleCard({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  sectionColor,
  className = "",
  as = "div",
  children
}) {
  return /* @__PURE__ */ jsx6(
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

// src/components/CodeBlock.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";

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
var listeners = /* @__PURE__ */ new Set();
function subscribeTheme(fn) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// src/components/CodeBlock.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function cx(...p) {
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
  const hostRef = useRef2(null);
  const cmRef = useRef2(null);
  const onChangeRef = useRef2(onChange);
  const syncingRef = useRef2(false);
  const [cmReady, setCmReady] = useState3(() => typeof window !== "undefined" && !!window.CodeMirror);
  const [copied, setCopied] = useState3(false);
  useEffect3(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  useEffect3(() => {
    if (cmReady) return void 0;
    let cancelled = false;
    ensureCodeMirrorLoaded({ sql: needsSqlMode(mode), css: needsCssMode(mode) }).then(() => {
      if (!cancelled) setCmReady(true);
    }).catch((err) => console.warn("[mimicus] CodeMirror:", err));
    return () => {
      cancelled = true;
    };
  }, [cmReady, json, mode, lang]);
  useEffect3(() => {
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
  useEffect3(() => {
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
  useEffect3(() => {
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
  const panelClass = cx("mimicus-cm-panel", maxHeight && "mimicus-cm-panel--bounded", className);
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
    return /* @__PURE__ */ jsxs4("div", { className: panelClass, style, children: [
      /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx7(IconButton, { "aria-label": copyTitle, onClick: () => copyEditorText(value), title: copyTitle, children: "\u29C9" }) }),
      /* @__PURE__ */ jsx7("pre", { className: "mimicus-cm-fallback", style: hostStyle, children: value || placeholder })
    ] });
  }
  return /* @__PURE__ */ jsxs4("div", { className: panelClass, style, children: [
    /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx7(IconButton, { className: "mimicus-cm-panel__copy", "aria-label": copyTitle, title: copied ? "Copiado" : copyTitle, onClick: handleCopy, children: copied ? "\u2713" : "\u29C9" }) }),
    /* @__PURE__ */ jsx7("div", { className: "mimicus-cm-host", ref: hostRef, style: hostStyle })
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
  const clamp2 = (nLines > 0 || ellipsis) && nLines !== 0 ? {
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
      ...clamp2,
      ...surface.style ?? {},
      ...style && typeof style === "object" ? style : {}
    }
  };
}
function typographyClass(parts) {
  return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
}

// src/components/typography/Typography.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const Tag = component ?? (v.startsWith("h") ? v : v === "body1" || v === "body2" ? "p" : "span");
  const mods = [strong && "mimicus-typography--strong", italic && "mimicus-typography--italic", underline && "mimicus-typography--underline", del && "mimicus-typography--delete", disabled && "mimicus-typography--disabled"].filter(Boolean);
  return /* @__PURE__ */ jsx8(Tag, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${v}`, ...mods, className]), "data-variant": v, "aria-disabled": disabled || void 0, children });
}
function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
  const variant = levelToVariant(level);
  const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
  const Tag = variant;
  return /* @__PURE__ */ jsx8(Tag, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className]), "data-level": level, "data-variant": variant, children });
}
function TypographyParagraph(props) {
  return /* @__PURE__ */ jsx8(TypographyText, { ...props, variant: props.variant ?? "body1", component: "p", className: ["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ") });
}
function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
  const spec = buildTypographyStyle({ color, variant: "body1", style, lines: 0, ellipsis: false });
  if (target === "_blank" && !rel) rel = "noopener noreferrer";
  return /* @__PURE__ */ jsx8("a", { ...rest, href: disabled ? void 0 : href, target, rel, ...spec, className: typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className]), "aria-disabled": disabled || void 0, children });
}
function Text({ sampleText, children, ...rest }) {
  const content = children ?? sampleText;
  return /* @__PURE__ */ jsx8(TypographyText, { ...rest, children: content });
}
function Headings({ color, lines = 0, sampleText, children, className, style }) {
  const text = children ?? sampleText ?? "Heading";
  return /* @__PURE__ */ jsx8("div", { className: ["mimicus-typography-headings-demo", className].filter(Boolean).join(" "), style, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ jsxs5(TypographyTitle, { level, color, lines, children: [
    text,
    " \u2014 H",
    level
  ] }, level)) });
}
function TypographyRoot(props) {
  return /* @__PURE__ */ jsx8(TypographyText, { ...props });
}
var Typography = Object.assign(TypographyRoot, {
  Text: TypographyText,
  Title: TypographyTitle,
  Paragraph: TypographyParagraph,
  Link: TypographyLink
});
export {
  Button,
  Card,
  CodeBlock,
  CodeMirrorPanel,
  Fab,
  FloatButton,
  Headings,
  Icon,
  IconButton,
  Text,
  TitleCard,
  Typography,
  copyEditorText,
  destroyCodeMirror,
  ensureCodeMirrorCss,
  ensureCodeMirrorLoaded,
  mountCodeMirror,
  resolveCodeMirrorTheme
};
