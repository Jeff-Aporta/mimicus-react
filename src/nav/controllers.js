import { buildPageRange } from "./paginationMath.js";
import { clickOutside, emit, on, parseBool, parseNum, qs, qsa, resolveScrollRoot, scrollToTarget } from "./core.js";

function setActiveLink(links, href) {
  for (const a of links) {
    const match = a.getAttribute("href") === href;
    a.classList.toggle("is-active", match);
    a.setAttribute("aria-current", match ? "true" : "false");
  }
}

export function bindAnchor(root) {
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
    const on = readTabKey(tab) === key;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", on ? "true" : "false");
    tab.tabIndex = on ? 0 : -1;
  }
  for (const panel of panels) {
    const on = panel.dataset.mimicusTabPanel === key || panel.dataset.key === key;
    panel.classList.toggle("is-active", on);
    panel.hidden = !on;
  }
  root.dataset.activeKey = key;
}

export function bindTabs(root) {
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

export function bindDropdown(root) {
  const trigger = qs("[data-mimicus-dropdown-trigger]", root) ?? qs("button, [role='button']", root);
  const panel = qs("[data-mimicus-dropdown-panel]", root);
  if (!trigger || !panel) return () => {};

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
  const toggle = () => (root.classList.contains("is-open") ? close() : open());

  const cleanups = [
    on(trigger, "click", (e) => { e.stopPropagation(); toggle(); }),
    on(root, "keydown", (e) => { if (e.key === "Escape") close(); }),
    clickOutside(root, close),
  ];

  for (const item of qsa("[data-mimicus-menu-item], [role='menuitem']", panel)) {
    cleanups.push(on(item, "click", () => {
      if (!parseBool(item.dataset.keepOpen)) close();
      emit(root, "mimicus-dropdown-select", { key: item.dataset.key });
    }));
  }

  close();
  return () => { close(); cleanups.forEach((fn) => fn()); };
}

export function bindMenu(root) {
  const items = qsa("[role='menuitem']:not([aria-disabled='true'])", root);
  let idx = Math.max(0, items.findIndex((el) => el.classList.contains("is-active")));
  const focusAt = (i) => { idx = (i + items.length) % items.length; items[idx]?.focus(); };

  const cleanups = [
    on(root, "keydown", (e) => {
      if (!items.length) return;
      if (e.key === "ArrowDown") { e.preventDefault(); focusAt(idx + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); focusAt(idx - 1); }
      else if (e.key === "Home") { e.preventDefault(); focusAt(0); }
      else if (e.key === "End") { e.preventDefault(); focusAt(items.length - 1); }
    }),
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
  list.appendChild(mkBtn("‹", "prev", current <= 1, false));
  for (const it of items) {
    if (it.type === "ellipsis") {
      const s = document.createElement("span");
      s.className = "mimicus-pagination__ellipsis";
      s.textContent = "…";
      list.appendChild(s);
    } else list.appendChild(mkBtn(String(it.page), String(it.page), false, it.page === current));
  }
  list.appendChild(mkBtn("›", "next", current >= total, false));
  root.dataset.page = String(current);
  root.dataset.count = String(total);
}

export function bindPagination(root) {
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

export function bindSteps(root) {
  const clickable = parseBool(root.dataset.clickable);
  if (!clickable) return () => {};
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

export function bindDrawer(root) {
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
    on(document, "keydown", (e) => { if (e.key === "Escape" && parseBool(root.dataset.open)) close(); }),
  ];

  const obs = new MutationObserver(sync);
  obs.observe(root, { attributes: true, attributeFilter: ["data-open"] });

  return () => { obs.disconnect(); cleanups.forEach((fn) => fn()); document.documentElement.classList.remove("mimicus-drawer-open"); };
}

export function bindBottomNav(root) {
  const actions = qsa("[data-mimicus-bottom-action]", root);
  const cleanups = [];

  const setValue = (val) => {
    root.dataset.value = val;
    for (const a of actions) {
      const on = a.dataset.mimicusBottomAction === val;
      a.classList.toggle("is-active", on);
      a.setAttribute("aria-selected", on ? "true" : "false");
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

export function bindSpeedDial(root) {
  const fab = qs("[data-mimicus-speed-dial-trigger]", root) ?? qs(".mimicus-speed-dial__trigger", root);
  const openCls = "is-open";
  const close = () => { root.classList.remove(openCls); fab?.setAttribute("aria-expanded", "false"); };
  const open = () => { root.classList.add(openCls); fab?.setAttribute("aria-expanded", "true"); };
  const toggle = () => (root.classList.contains(openCls) ? close() : open());

  const cleanups = [
    on(fab, "click", (e) => { e.stopPropagation(); toggle(); }),
    on(root, "keydown", (e) => { if (e.key === "Escape") close(); }),
    clickOutside(root, close),
  ];

  for (const action of qsa("[data-mimicus-speed-dial-action]", root)) {
    cleanups.push(on(action, "click", () => {
      close();
      emit(root, "mimicus-speed-dial-action", { key: action.dataset.mimicusSpeedDialAction });
    }));
  }

  close();
  return () => { close(); cleanups.forEach((fn) => fn()); };
}

const BINDERS = {
  anchor: bindAnchor,
  tabs: bindTabs,
  dropdown: bindDropdown,
  menu: bindMenu,
  pagination: bindPagination,
  steps: bindSteps,
  drawer: bindDrawer,
  "bottom-nav": bindBottomNav,
  "speed-dial": bindSpeedDial,
};

export function bindNavComponent(root) {
  const type = root?.dataset?.mimicusNav;
  root.__mimicusNavCleanup?.();
  const cleanup = BINDERS[type]?.(root) ?? (() => {});
  root.__mimicusNavCleanup = cleanup;
  return () => {
    cleanup();
    delete root.__mimicusNavCleanup;
  };
}

export function mountNavigation(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-nav]", document) : [scope].filter((el) => el?.dataset?.mimicusNav);
  const cleanups = roots.map(bindNavComponent);
  return () => cleanups.forEach((fn) => fn());
}
