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
var mkAlpha = (c, p = 0) => colorMix(c, "transparent", p);
var mkInvertL = (c) => `hsl(from ${resolveColor(c)} h s calc(100 - l))`;
var mkUnbow = (color, percent = 0) => colorMix(color, mkInvertL("color"), percent);
function mkSemanticBorder(color = "neutral", bowPct = 50, alphaPct = 85) {
  return mkAlpha(mkUnbow(color, bowPct), alphaPct);
}

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
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs3("div", { className: panelClass, style, children: [
      /* @__PURE__ */ jsx5("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx5(IconButton, { "aria-label": copyTitle, onClick: () => copyEditorText(value), title: copyTitle, children: "\u29C9" }) }),
      /* @__PURE__ */ jsx5("pre", { className: "mimicus-cm-fallback", style: hostStyle, children: value || placeholder })
    ] });
  }
  return /* @__PURE__ */ jsxs3("div", { className: panelClass, style, children: [
    /* @__PURE__ */ jsx5("div", { className: "mimicus-cm-panel__toolbar", children: /* @__PURE__ */ jsx5(IconButton, { className: "mimicus-cm-panel__copy", "aria-label": copyTitle, title: copied ? "Copiado" : copyTitle, onClick: handleCopy, children: copied ? "\u2713" : "\u29C9" }) }),
    /* @__PURE__ */ jsx5("div", { className: "mimicus-cm-host", ref: hostRef, style: hostStyle })
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
  const clamp = (nLines > 0 || ellipsis) && nLines !== 0 ? {
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
      ...clamp,
      ...surface.style ?? {},
      ...style && typeof style === "object" ? style : {}
    }
  };
}
function typographyClass(parts) {
  return ["mimicus-typography", ...parts].filter(Boolean).join(" ");
}

// src/components/typography/Typography.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(Tag, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${v}`, ...mods, className]), "data-variant": v, "aria-disabled": disabled || void 0, children });
}
function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
  const variant = levelToVariant(level);
  const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
  const Tag = variant;
  return /* @__PURE__ */ jsx6(Tag, { ...rest, ...spec, className: typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className]), "data-level": level, "data-variant": variant, children });
}
function TypographyParagraph(props) {
  return /* @__PURE__ */ jsx6(TypographyText, { ...props, variant: props.variant ?? "body1", component: "p", className: ["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ") });
}
function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
  const spec = buildTypographyStyle({ color, variant: "body1", style, lines: 0, ellipsis: false });
  if (target === "_blank" && !rel) rel = "noopener noreferrer";
  return /* @__PURE__ */ jsx6("a", { ...rest, href: disabled ? void 0 : href, target, rel, ...spec, className: typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className]), "aria-disabled": disabled || void 0, children });
}
function Text({ sampleText, children, ...rest }) {
  const content = children ?? sampleText;
  return /* @__PURE__ */ jsx6(TypographyText, { ...rest, children: content });
}
function Headings({ color, lines = 0, sampleText, children, className, style }) {
  const text = children ?? sampleText ?? "Heading";
  return /* @__PURE__ */ jsx6("div", { className: ["mimicus-typography-headings-demo", className].filter(Boolean).join(" "), style, children: [1, 2, 3, 4, 5, 6].map((level) => /* @__PURE__ */ jsxs4(TypographyTitle, { level, color, lines, children: [
    text,
    " \u2014 H",
    level
  ] }, level)) });
}
function TypographyRoot(props) {
  return /* @__PURE__ */ jsx6(TypographyText, { ...props });
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
  Typography,
  copyEditorText,
  destroyCodeMirror,
  ensureCodeMirrorCss,
  ensureCodeMirrorLoaded,
  mountCodeMirror,
  resolveCodeMirrorTheme
};
