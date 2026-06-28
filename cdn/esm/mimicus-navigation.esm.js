// src/components/navigation/Navigation.tsx
import { Children, useEffect as useEffect2, useMemo, useRef } from "react";

// src/nav/useNavBinding.ts
import { useEffect } from "react";

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
var BINDERS = {
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
  const cleanup = (type ? BINDERS[type]?.(r) : void 0) ?? (() => {
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
  useEffect(() => {
    const el = ref.current;
    if (!el) return void 0;
    el.dataset.mimicusNav = type;
    return bindNavComponent(el);
  }, deps);
}

// src/components/navigation/Navigation.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function cx(...p) {
  return p.filter(Boolean).join(" ");
}
function AnchorLink({ href, title, children, className, ...rest }) {
  return /* @__PURE__ */ jsx("a", { ...rest, href, title: typeof title === "string" ? title : void 0, className: cx("mimicus-anchor__link", className), "data-mimicus-anchor-link": true, children: /* @__PURE__ */ jsx("span", { className: "mimicus-anchor__link-title", children: children ?? title }) });
}
function Anchor({ direction = "vertical", affix = false, targetOffset = 0, bounds = 5, container, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "anchor", [direction, affix, targetOffset, bounds, container]);
  const body = children ?? items?.map((it, i) => /* @__PURE__ */ jsx(AnchorLink, { href: it.href, title: it.title, children: it.title }, it.href ?? i));
  return /* @__PURE__ */ jsx(
    "nav",
    {
      ref,
      ...rest,
      className: cx("mimicus-anchor", `mimicus-anchor--${direction}`, className),
      style,
      "data-direction": direction,
      "data-affix": affix ? "true" : void 0,
      "data-target-offset": targetOffset,
      "data-bounds": bounds,
      "data-container": container,
      "data-mimicus-nav": "anchor",
      children: /* @__PURE__ */ jsx("div", { className: "mimicus-anchor__list", children: body })
    }
  );
}
Anchor.Link = AnchorLink;
function BreadcrumbItem({ href, children, className, ...rest }) {
  const inner = href ? /* @__PURE__ */ jsx("a", { href, className: "mimicus-breadcrumbs__link", ...rest, children }) : /* @__PURE__ */ jsx("span", { className: "mimicus-breadcrumbs__page", "aria-current": "page", ...rest, children });
  return /* @__PURE__ */ jsx("li", { className: cx("mimicus-breadcrumbs__item", className), children: inner });
}
function Breadcrumbs({ separator = "/", items, className, style, children, maxItems, ...rest }) {
  const nodes = children ?? items?.map((it, i) => /* @__PURE__ */ jsx(BreadcrumbItem, { href: it.href, children: it.label }, i));
  const list = useMemo(() => Children.toArray(nodes), [nodes]);
  const visible = maxItems && list.length > maxItems ? [list[0], ...list.slice(-(maxItems - 1))] : list;
  const withSep = [];
  visible.forEach((node, i) => {
    if (i > 0) withSep.push(/* @__PURE__ */ jsx("li", { className: "mimicus-breadcrumbs__sep", "aria-hidden": true, children: separator }, `sep-${i}`));
    withSep.push(node);
  });
  return /* @__PURE__ */ jsx("nav", { ...rest, "aria-label": "breadcrumb", className: cx("mimicus-breadcrumbs", className), style, children: /* @__PURE__ */ jsx("ol", { className: "mimicus-breadcrumbs__list", children: withSep }) });
}
Breadcrumbs.Item = BreadcrumbItem;
var Breadcrumb = Breadcrumbs;
function MenuItem({ itemKey, disabled, icon, children, className, ...rest }) {
  const dataKey = itemKey ?? rest["data-key"];
  return /* @__PURE__ */ jsx("li", { role: "none", children: /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "menuitem",
      disabled,
      "data-key": dataKey,
      "data-mimicus-menu-item": true,
      className: cx("mimicus-menu__item", disabled && "is-disabled", className),
      ...rest,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "mimicus-menu__icon", "aria-hidden": true, children: icon }),
        /* @__PURE__ */ jsx("span", { className: "mimicus-menu__label", children })
      ]
    }
  ) });
}
function MenuDivider() {
  return /* @__PURE__ */ jsx("li", { role: "separator", className: "mimicus-menu__divider" });
}
function Menu({ mode = "vertical", selectable, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "menu", [mode]);
  return /* @__PURE__ */ jsx(
    "ul",
    {
      ref,
      role: "menu",
      ...rest,
      className: cx("mimicus-menu", `mimicus-menu--${mode}`, selectable && "mimicus-menu--selectable", className),
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
  const ref = useRef(null);
  useNavBinding(ref, "dropdown", [placement, open]);
  const body = children ?? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mimicus-dropdown__trigger", "data-mimicus-dropdown-trigger": true, children: trigger }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-dropdown__panel", "data-mimicus-dropdown-panel": true, role: "menu", children: menu })
  ] });
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-dropdown", `mimicus-dropdown--${placement}`, open && "is-open", className),
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
  return Children.map(children, (child, i) => {
    const node = child;
    if (!node?.props) return null;
    const p = node.props;
    return { key: p.tabKey ?? p.key ?? `tab-${i}`, label: p.label, disabled: p.disabled, icon: p.icon, content: p.children };
  })?.filter(Boolean) ?? [];
}
function Tabs({ type = "line", tabPosition = "top", activeKey, defaultActiveKey, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  const tabItems = normalizeTabItems(items, children);
  const defaultKey = defaultActiveKey ?? activeKey ?? tabItems[0]?.key;
  useNavBinding(ref, "tabs", [type, tabPosition, activeKey, defaultKey, tabItems.length]);
  const tabs = [];
  const panels = [];
  tabItems.forEach((it) => {
    const k = it.key;
    const on2 = (activeKey ?? defaultKey) === k;
    tabs.push(
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          role: "tab",
          "data-mimicus-tab": k,
          "data-key": k,
          disabled: it.disabled,
          className: cx("mimicus-tabs__tab", on2 && "is-active"),
          "aria-selected": on2 ? "true" : "false",
          children: [
            it.icon && /* @__PURE__ */ jsx("span", { className: "mimicus-tabs__icon", "aria-hidden": true, children: it.icon }),
            /* @__PURE__ */ jsx("span", { className: "mimicus-tabs__label", children: it.label })
          ]
        },
        `t-${k}`
      )
    );
    panels.push(
      /* @__PURE__ */ jsx(
        "div",
        {
          role: "tabpanel",
          "data-mimicus-tab-panel": k,
          "data-key": k,
          className: cx("mimicus-tabs__panel", on2 && "is-active"),
          hidden: !on2,
          children: it.content
        },
        `p-${k}`
      )
    );
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-tabs", `mimicus-tabs--${type}`, `mimicus-tabs--${tabPosition}`, className),
      style,
      "data-type": type,
      "data-tab-position": tabPosition,
      "data-active-key": activeKey,
      "data-default-active-key": defaultKey,
      "data-mimicus-nav": "tabs",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mimicus-tabs__nav", role: "tablist", children: tabs }),
        /* @__PURE__ */ jsx("div", { className: "mimicus-tabs__content", children: panels })
      ]
    }
  );
}
Tabs.Tab = TabItem;
function Pagination({ count = 10, page, defaultPage = 1, siblingCount = 1, boundaryCount = 1, simple, className, style, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "pagination", [count, page, defaultPage, siblingCount, boundaryCount]);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      ref,
      ...rest,
      "aria-label": "pagination",
      className: cx("mimicus-pagination", simple && "mimicus-pagination--simple", className),
      style,
      "data-count": count,
      "data-page": page,
      "data-default-page": defaultPage,
      "data-sibling-count": siblingCount,
      "data-boundary-count": boundaryCount,
      "data-mimicus-nav": "pagination",
      children: /* @__PURE__ */ jsx("div", { className: "mimicus-pagination__list", "data-mimicus-pagination-list": true, role: "navigation" })
    }
  );
}
function Step({ title, description, status, icon, className, ...rest }) {
  return /* @__PURE__ */ jsxs("div", { ...rest, className: cx("mimicus-steps__item", status && `is-${status}`, className), "data-mimicus-step": true, children: [
    /* @__PURE__ */ jsx("div", { className: "mimicus-steps__icon", children: icon ?? /* @__PURE__ */ jsx("span", { className: "mimicus-steps__dot" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mimicus-steps__content", children: [
      title && /* @__PURE__ */ jsx("div", { className: "mimicus-steps__title", children: title }),
      description && /* @__PURE__ */ jsx("div", { className: "mimicus-steps__desc", children: description })
    ] })
  ] });
}
function Steps({ current = 0, direction = "horizontal", clickable, items, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "steps", [current, direction, clickable]);
  const body = children ?? items?.map((it, i) => {
    const st = it.status ?? (i < current ? "finish" : i === Number(current) ? "process" : "wait");
    return /* @__PURE__ */ jsx(Step, { title: it.title, description: it.description, status: st, icon: it.icon }, i);
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-steps", `mimicus-steps--${direction}`, className),
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
  const ref = useRef(null);
  useNavBinding(ref, "drawer", [open, placement, width]);
  useEffect2(() => {
    const el = ref.current;
    if (!el || !onClose) return void 0;
    const fn = () => onClose();
    el.addEventListener("mimicus-drawer-close", fn);
    return () => el.removeEventListener("mimicus-drawer-close", fn);
  }, [onClose]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-drawer", `mimicus-drawer--${placement}`, open && "is-open", className),
      style: { ...style, "--mimicus-drawer-size": typeof width === "number" ? `${width}px` : width },
      "data-open": open ? "true" : "false",
      "data-placement": placement,
      "data-mimicus-nav": "drawer",
      "aria-hidden": open ? "false" : "true",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mimicus-drawer__backdrop", "data-mimicus-drawer-backdrop": true, "aria-hidden": true }),
        /* @__PURE__ */ jsxs("aside", { className: "mimicus-drawer__panel", "data-mimicus-drawer-panel": true, role: "dialog", "aria-modal": "true", children: [
          title && /* @__PURE__ */ jsxs("header", { className: "mimicus-drawer__header", children: [
            title,
            /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-drawer__close", "data-mimicus-drawer-close": true, "aria-label": "Cerrar", children: "\xD7" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mimicus-drawer__body", children }),
          footer && /* @__PURE__ */ jsx("footer", { className: "mimicus-drawer__footer", children: footer })
        ] })
      ]
    }
  );
}
function BottomNavigationAction({ value, label, icon, className, ...rest }) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      ...rest,
      className: cx("mimicus-bottom-nav__action", className),
      "data-mimicus-bottom-action": value,
      "aria-label": typeof label === "string" ? label : void 0,
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "mimicus-bottom-nav__icon", "aria-hidden": true, children: icon }),
        label && /* @__PURE__ */ jsx("span", { className: "mimicus-bottom-nav__label", children: label })
      ]
    }
  );
}
function BottomNavigation({ value, showLabels, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "bottom-nav", [value, showLabels]);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      ref,
      ...rest,
      className: cx("mimicus-bottom-nav", showLabels && "mimicus-bottom-nav--labels", className),
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
  const Tag = Comp ?? "a";
  const props = Tag === "a" ? { href: disabled ? void 0 : href } : {};
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ...rest,
      ...props,
      className: cx("mimicus-nav-link", `mimicus-nav-link--underline-${underline}`, `mimicus-nav-link--${color}`, disabled && "is-disabled", className),
      style,
      "aria-disabled": disabled || void 0,
      children
    }
  );
}
var Link = NavLink;
function SpeedDialAction({ icon, tooltip, actionKey, className, ...rest }) {
  const key = actionKey ?? rest.key;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      ...rest,
      className: cx("mimicus-speed-dial__action", className),
      "data-mimicus-speed-dial-action": key,
      title: typeof tooltip === "string" ? tooltip : void 0,
      "aria-label": typeof tooltip === "string" ? tooltip : void 0,
      children: [
        /* @__PURE__ */ jsx("span", { className: "mimicus-speed-dial__action-icon", "aria-hidden": true, children: icon }),
        tooltip && /* @__PURE__ */ jsx("span", { className: "mimicus-speed-dial__tooltip", children: tooltip })
      ]
    }
  );
}
function SpeedDial({ direction = "up", ariaLabel = "Acciones", icon, open, className, style, children, ...rest }) {
  const ref = useRef(null);
  useNavBinding(ref, "speed-dial", [direction, open]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-speed-dial", `mimicus-speed-dial--${direction}`, open && "is-open", className),
      style,
      "data-direction": direction,
      "data-mimicus-nav": "speed-dial",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mimicus-speed-dial__actions", role: "menu", children }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-speed-dial__trigger", "data-mimicus-speed-dial-trigger": true, "aria-label": ariaLabel, "aria-haspopup": "menu", children: /* @__PURE__ */ jsx("span", { className: "mimicus-speed-dial__icon", "aria-hidden": true, children: icon ?? "+" }) })
      ]
    }
  );
}
SpeedDial.Action = SpeedDialAction;
export {
  Anchor,
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumb,
  Breadcrumbs,
  Drawer,
  Dropdown,
  Link,
  Menu,
  NavLink,
  Pagination,
  SpeedDial,
  SpeedDialAction,
  Step,
  Stepper,
  Steps,
  TabItem,
  Tabs,
  mountNavigation
};
