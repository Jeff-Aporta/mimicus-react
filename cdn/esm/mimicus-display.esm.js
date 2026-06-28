// src/components/display/Display.tsx
import { Children, useId, useRef } from "react";

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

// src/display/useDisplayBinding.ts
import { useEffect } from "react";

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
  useEffect(() => {
    const el = ref.current;
    if (!el || !type) return void 0;
    el.dataset.mimicusDisplay = type;
    return bindDisplayComponent(el);
  }, deps);
}

// src/components/display/Display.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("span", { ...rest, className: cx("mimicus-badge-wrap", className), style, children: [
    children,
    show && /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ...rest,
      className: cx("mimicus-tag", `mimicus-tag--${variant}`, shape && `mimicus-tag--${shape}`, uppercase && "mimicus-tag--upper", className),
      style: mergeSurfaceStyle(color, style),
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "mimicus-tag__icon", children: icon }),
        /* @__PURE__ */ jsx("span", { className: "mimicus-tag__text", children }),
        closable && /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-tag__close", "aria-label": "Cerrar", onClick: onClose, children: "\xD7" })
      ]
    }
  );
}
var Chip = Tag;
function Avatar({ src, alt, variant = "circular", children, className, style, ...rest }) {
  const label = alt ?? (typeof children === "string" ? children : "?");
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...rest,
      className: cx("mimicus-avatar", `mimicus-avatar--${variant}`, className),
      style,
      title: alt,
      children: src ? /* @__PURE__ */ jsx("img", { className: "mimicus-avatar__img", src, alt: alt ?? "" }) : /* @__PURE__ */ jsx("span", { className: "mimicus-avatar__fallback", style: { background: hashColor(label) }, children: children ?? initials(label) })
    }
  );
}
function AvatarGroup({ max = 5, total, spacing = "medium", children, className, style, ...rest }) {
  const items = Children.toArray(children);
  const shown = items.slice(0, max);
  const surplus = (total ?? items.length) - shown.length;
  return /* @__PURE__ */ jsxs("span", { ...rest, className: cx("mimicus-avatar-group", `mimicus-avatar-group--${spacing}`, className), style, children: [
    shown,
    surplus > 0 && /* @__PURE__ */ jsxs(Avatar, { className: "mimicus-avatar-group__surplus", children: [
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
  const ref = useRef(null);
  const slides = Children.toArray(children);
  useDisplayBinding(ref, "carousel", [slides.length, autoplay, arrows, dots]);
  return /* @__PURE__ */ jsxs(
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
        arrows && /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--prev", "data-mimicus-carousel-prev": true, "aria-label": "Anterior", children: "\u2039" }),
        /* @__PURE__ */ jsx("div", { className: "mimicus-carousel__viewport", children: /* @__PURE__ */ jsx("div", { className: "mimicus-carousel__track", "data-mimicus-carousel-track": true, children: slides.map((slide, i) => /* @__PURE__ */ jsx("div", { className: cx("mimicus-carousel__slide", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-slide": true, children: slide }, i)) }) }),
        arrows && /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-carousel__arrow mimicus-carousel__arrow--next", "data-mimicus-carousel-next": true, "aria-label": "Siguiente", children: "\u203A" }),
        dots && slides.length > 1 && /* @__PURE__ */ jsx("div", { className: "mimicus-carousel__dots", role: "tablist", children: slides.map((_, i) => /* @__PURE__ */ jsx("button", { type: "button", className: cx("mimicus-carousel__dot", i === defaultActiveIndex && "is-active"), "data-mimicus-carousel-dot": true, "aria-label": `Slide ${i + 1}` }, i)) })
      ]
    }
  );
}
function CollapsePanel({ panelKey, header, defaultOpen, children, className, ...rest }) {
  const autoId = useId();
  const key = panelKey ?? autoId;
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-collapse__panel", defaultOpen && "is-open", className), "data-mimicus-collapse-panel": key, "data-default-open": defaultOpen, children: [
    /* @__PURE__ */ jsxs("button", { type: "button", className: "mimicus-collapse__trigger", "data-mimicus-collapse-trigger": true, "aria-expanded": defaultOpen ? "true" : "false", children: [
      /* @__PURE__ */ jsx("span", { className: "mimicus-collapse__arrow", "aria-hidden": true, children: "\u25B8" }),
      /* @__PURE__ */ jsx("span", { className: "mimicus-collapse__header", children: header })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-collapse__body", "data-mimicus-collapse-body": true, hidden: !defaultOpen, children })
  ] });
}
function Collapse({ accordion = false, defaultActiveKey, activeKey, children, className, style, ...rest }) {
  const ref = useRef(null);
  const keys = activeKey ?? defaultActiveKey;
  useDisplayBinding(ref, "collapse", [accordion, keys]);
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-descriptions__item", className), style: { gridColumn: `span ${span}` }, children: [
    /* @__PURE__ */ jsx("dt", { className: "mimicus-descriptions__label", children: label }),
    /* @__PURE__ */ jsx("dd", { className: "mimicus-descriptions__content", children })
  ] });
}
function Descriptions({ title, bordered = false, column = 3, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-descriptions", bordered && "mimicus-descriptions--bordered", className), style, children: [
    title && /* @__PURE__ */ jsx("div", { className: "mimicus-descriptions__title", children: title }),
    /* @__PURE__ */ jsx("dl", { className: "mimicus-descriptions__list", style: { "--mimicus-desc-cols": column }, children })
  ] });
}
Descriptions.Item = DescriptionsItem;
function Empty({ description = "No data", image = "default", children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-empty", image === "simple" && "mimicus-empty--simple", className), style, children: [
    /* @__PURE__ */ jsx("div", { className: "mimicus-empty__image", "aria-hidden": true }),
    description && /* @__PURE__ */ jsx("p", { className: "mimicus-empty__desc", children: description }),
    children && /* @__PURE__ */ jsx("div", { className: "mimicus-empty__footer", children })
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
  return /* @__PURE__ */ jsx("span", { ...rest, className: cx("mimicus-qrcode", bordered && "mimicus-qrcode--bordered", className), style, children: /* @__PURE__ */ jsx("canvas", { ref, width: size, height: size, className: "mimicus-qrcode__canvas", "aria-label": `QR: ${value}` }) });
}
function Segmented({ options = [], value, defaultValue, onChange, block, className, style, ...rest }) {
  const ref = useRef(null);
  const cur = value ?? defaultValue ?? options[0]?.value;
  useDisplayBinding(ref, "segmented", [cur, options.length]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...rest,
      ref,
      className: cx("mimicus-segmented", block && "mimicus-segmented--block", className),
      style,
      "data-mimicus-display": "segmented",
      "data-value": cur,
      role: "group",
      children: options.map((opt) => /* @__PURE__ */ jsxs(
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
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-statistic", className), style, children: [
    title && /* @__PURE__ */ jsx("div", { className: "mimicus-statistic__title", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "mimicus-statistic__value", children: [
      prefix && /* @__PURE__ */ jsx("span", { className: "mimicus-statistic__prefix", children: prefix }),
      /* @__PURE__ */ jsx("span", { className: "mimicus-statistic__number", children: fmt }),
      suffix && /* @__PURE__ */ jsx("span", { className: "mimicus-statistic__suffix", children: suffix })
    ] })
  ] });
}
function Table({ columns = [], dataSource = [], bordered, sortable, pagination, className, style, children, ...rest }) {
  const ref = useRef(null);
  useDisplayBinding(ref, sortable ? "table" : null, [sortable, dataSource.length]);
  if (children) {
    return /* @__PURE__ */ jsx("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children });
  }
  return /* @__PURE__ */ jsxs("table", { ...rest, ref, className: cx("mimicus-table", bordered && "mimicus-table--bordered", className), style, "data-mimicus-display": sortable ? "table" : void 0, children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((col, i) => /* @__PURE__ */ jsx("th", { "data-mimicus-table-sort": sortable && col.sorter ? i : void 0, className: sortable && col.sorter ? "mimicus-table__sortable" : void 0, children: col.title }, col.key ?? i)) }) }),
    /* @__PURE__ */ jsx("tbody", { children: dataSource.map((row, ri) => /* @__PURE__ */ jsx("tr", { children: columns.map((col, ci) => /* @__PURE__ */ jsx("td", { children: col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex] }, col.key ?? ci)) }, row.key ?? ri)) })
  ] });
}
function TimelineItem({ label, color, dot, children, className, ...rest }) {
  return /* @__PURE__ */ jsxs("li", { ...rest, className: cx("mimicus-timeline__item", color && `mimicus-timeline__item--${color}`, className), children: [
    /* @__PURE__ */ jsx("div", { className: "mimicus-timeline__dot", children: dot }),
    /* @__PURE__ */ jsxs("div", { className: "mimicus-timeline__content", children: [
      label && /* @__PURE__ */ jsx("div", { className: "mimicus-timeline__label", children: label }),
      /* @__PURE__ */ jsx("div", { className: "mimicus-timeline__body", children })
    ] })
  ] });
}
function Timeline({ mode = "left", pending, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs("ul", { ...rest, className: cx("mimicus-timeline", `mimicus-timeline--${mode}`, className), style, children: [
    children,
    pending && /* @__PURE__ */ jsxs("li", { className: "mimicus-timeline__item mimicus-timeline__item--pending", children: [
      /* @__PURE__ */ jsx("div", { className: "mimicus-timeline__dot" }),
      /* @__PURE__ */ jsx("div", { className: "mimicus-timeline__content", children: pending })
    ] })
  ] });
}
Timeline.Item = TimelineItem;
function Tooltip({ title, placement = "top", arrow, children, className, ...rest }) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tooltip", [title, placement]);
  return /* @__PURE__ */ jsxs("span", { ...rest, ref, className: cx("mimicus-tooltip", className), "data-mimicus-display": "tooltip", "data-placement": placement, children: [
    /* @__PURE__ */ jsx("span", { className: "mimicus-tooltip__trigger", "data-mimicus-tooltip-trigger": true, tabIndex: 0, children }),
    /* @__PURE__ */ jsx("span", { className: cx("mimicus-tooltip__popup", arrow && "mimicus-tooltip__popup--arrow"), "data-mimicus-tooltip-popup": true, role: "tooltip", hidden: true, children: title })
  ] });
}
function Tour({ steps = [], open = false, className, style, ...rest }) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tour", [open, steps.length]);
  return /* @__PURE__ */ jsxs("div", { ...rest, ref, className: cx("mimicus-tour", open && "is-active", className), style, "data-mimicus-display": "tour", "data-open": open ? "true" : "false", children: [
    /* @__PURE__ */ jsx("div", { className: "mimicus-tour__overlay", "data-mimicus-tour-overlay": true, hidden: !open }),
    steps.map((s, i) => /* @__PURE__ */ jsx("div", { "data-mimicus-tour-step": true, "data-target": s.target, "data-title": s.title, "data-description": s.description, hidden: true }, i)),
    /* @__PURE__ */ jsxs("div", { className: "mimicus-tour__card", "data-mimicus-tour-card": true, children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-tour__close", "data-mimicus-tour-close": true, "aria-label": "Cerrar", children: "\xD7" }),
      /* @__PURE__ */ jsx("strong", { "data-mimicus-tour-title": true }),
      /* @__PURE__ */ jsx("p", { "data-mimicus-tour-desc": true }),
      /* @__PURE__ */ jsxs("div", { className: "mimicus-tour__actions", children: [
        /* @__PURE__ */ jsx("button", { type: "button", "data-mimicus-tour-prev": true, children: "Anterior" }),
        /* @__PURE__ */ jsx("button", { type: "button", "data-mimicus-tour-next": true, children: "Siguiente" })
      ] })
    ] })
  ] });
}
function TreeNode({ node, checkable, level = 0 }) {
  const hasKids = Boolean(node.children?.length);
  const key = node.key ?? node.title;
  return /* @__PURE__ */ jsxs("div", { className: cx("mimicus-tree__node", hasKids && "is-expanded"), "data-mimicus-tree-node": key, style: { paddingLeft: `${level * 1.1}rem` }, children: [
    hasKids ? /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-tree__switcher", "data-mimicus-tree-switcher": true, "aria-expanded": "true", children: "\u25BE" }) : /* @__PURE__ */ jsx("span", { className: "mimicus-tree__switcher mimicus-tree__switcher--leaf" }),
    checkable && /* @__PURE__ */ jsx("input", { type: "checkbox", className: "mimicus-tree__check", "data-mimicus-tree-check": true }),
    /* @__PURE__ */ jsx("span", { className: "mimicus-tree__title", children: node.title }),
    hasKids && /* @__PURE__ */ jsx("div", { className: "mimicus-tree__children", "data-mimicus-tree-children": true, children: node.children.map((c) => /* @__PURE__ */ jsx(TreeNode, { node: c, checkable, level: level + 1 }, c.key ?? c.title)) })
  ] });
}
function Tree({ treeData = [], checkable, defaultExpandAll, className, style, ...rest }) {
  const ref = useRef(null);
  useDisplayBinding(ref, "tree", [checkable, treeData.length]);
  return /* @__PURE__ */ jsx("div", { ...rest, ref, className: cx("mimicus-tree", className), style, "data-mimicus-display": "tree", "data-checkable": checkable, "data-default-expand-all": defaultExpandAll, children: treeData.map((n) => /* @__PURE__ */ jsx(TreeNode, { node: n, checkable }, n.key ?? n.title)) });
}
function Calendar({ fullscreen, className, style, ...rest }) {
  const ref = useRef(null);
  const now = /* @__PURE__ */ new Date();
  useDisplayBinding(ref, "calendar", []);
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsxs("div", { className: "mimicus-calendar__header", children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-prev": true, "aria-label": "Mes anterior", children: "\u2039" }),
          /* @__PURE__ */ jsx("span", { className: "mimicus-calendar__title", "data-mimicus-calendar-title": true }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-calendar__nav", "data-mimicus-calendar-next": true, "aria-label": "Mes siguiente", children: "\u203A" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mimicus-calendar__weekdays", children: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"].map((d) => /* @__PURE__ */ jsx("span", { className: "mimicus-calendar__weekday", children: d }, d)) }),
        /* @__PURE__ */ jsx("div", { className: "mimicus-calendar__grid", "data-mimicus-calendar-grid": true })
      ]
    }
  );
}
function ListItemText({ primary, secondary, className, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-list-item__text", className), children: [
    primary && /* @__PURE__ */ jsx("span", { className: "mimicus-list-item__primary", children: primary }),
    secondary && /* @__PURE__ */ jsx("span", { className: "mimicus-list-item__secondary", children: secondary })
  ] });
}
function ListItemIcon({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx("span", { ...rest, className: cx("mimicus-list-item__icon", className), children });
}
function ListItemAvatar({ children, className, ...rest }) {
  return /* @__PURE__ */ jsx("span", { ...rest, className: cx("mimicus-list-item__avatar", className), children });
}
function ListItem({ button, secondaryAction, children, className, ...rest }) {
  const Tag2 = button ? "button" : "li";
  return /* @__PURE__ */ jsxs(Tag2, { ...rest, className: cx("mimicus-list-item", button && "mimicus-list-item--button", className), type: button ? "button" : void 0, children: [
    children,
    secondaryAction && /* @__PURE__ */ jsx("span", { className: "mimicus-list-item__secondary-action", children: secondaryAction })
  ] });
}
function List({ dense, disableGutters, subheader, children, className, style, ...rest }) {
  return /* @__PURE__ */ jsxs("ul", { ...rest, className: cx("mimicus-list", dense && "mimicus-list--dense", disableGutters && "mimicus-list--gutterless", className), style, children: [
    subheader && /* @__PURE__ */ jsx("li", { className: "mimicus-list__subheader", children: subheader }),
    children
  ] });
}
List.Item = ListItem;
List.ItemText = ListItemText;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
export {
  Accordion,
  Avatar,
  AvatarGroup,
  Badge,
  Calendar,
  Carousel,
  Chip,
  Collapse,
  CollapsePanel,
  Descriptions,
  DescriptionsItem,
  Empty,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  QRCode,
  Segmented,
  Statistic,
  Table,
  Tag,
  Timeline,
  TimelineItem,
  Tooltip,
  Tour,
  Tree,
  mountDisplay
};
