import { buildPageRange } from "./paginationMath.ts";
import { clickOutside, emit, on, parseBool, parseNum, qs, qsa, resolveScrollRoot, scrollToTarget } from "./core.ts";

type Cleanup = () => void;

function setActiveLink(links: Element[], href: string): void {
  for (const a of links) {
    const match = a.getAttribute("href") === href;
    a.classList.toggle("is-active", match);
    a.setAttribute("aria-current", match ? "true" : "false");
  }
}

export function bindAnchor(root: HTMLElement): Cleanup {
  const affix = parseBool(root.dataset.affix);
  const offset = parseNum(root.dataset.targetOffset, 0);
  const bounds = parseNum(root.dataset.bounds, 5);
  const container = resolveScrollRoot(root, root.dataset.container);
  const links = qsa("[data-mimicus-anchor-link], a[href^='#']", root);
  const sections = links.map((a) => {
    const id = (a.getAttribute("href") ?? "").slice(1);
    return id ? qs<HTMLElement>(`#${CSS.escape(id)}`, container) : null;
  }).filter(Boolean) as HTMLElement[];

  const cleanups: Cleanup[] = [];

  const activateById = (id: string) => setActiveLink(links, `#${id}`);

  for (const a of links) {
    cleanups.push(on(a, "click", (e: Event) => {
      const href = a.getAttribute("href");
      if (!href?.startsWith("#")) return;
      e.preventDefault();
      const target = qs(href, container);
      scrollToTarget(target, { offset, root: container === document ? null : (container as Element) });
      activateById(href.slice(1));
      emit(root, "mimicus-anchor-change", { href });
    }));
  }

  if (affix && sections.length) {
    const scrollEl: EventTarget = container === document ? window : (container as Element);
    const onScroll = () => {
      const scrollTop = container === document ? window.scrollY : (container as Element).scrollTop;
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

function readTabKey(el: HTMLElement): string | null {
  return el.dataset.mimicusTab ?? el.dataset.key ?? el.getAttribute("data-key");
}

function setTabActive(root: HTMLElement, key: string): void {
  const tabs = qsa<HTMLElement>("[data-mimicus-tab]", root);
  const panels = qsa<HTMLElement>("[data-mimicus-tab-panel]", root);
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

export function bindTabs(root: HTMLElement): Cleanup {
  const defaultKey = root.dataset.defaultActiveKey ?? root.dataset.activeKey;
  const tabs = qsa<HTMLElement>("[data-mimicus-tab]", root);
  const cleanups: Cleanup[] = [];
  let active = defaultKey ?? readTabKey(tabs.find((t) => t.classList.contains("is-active")) ?? tabs[0]);

  if (active) setTabActive(root, active);

  for (const tab of tabs) {
    // `disabled` no existe en HTMLElement genérico; lectura laxa del DOM dinámico.
    if ((tab as HTMLButtonElement).disabled || tab.getAttribute("aria-disabled") === "true") continue;
    cleanups.push(on(tab, "click", () => {
      const key = readTabKey(tab);
      if (!key || key === root.dataset.activeKey) return;
      setTabActive(root, key);
      emit(root, "mimicus-tabs-change", { activeKey: key });
    }));
  }

  return () => cleanups.forEach((fn) => fn());
}

export function bindDropdown(root: HTMLElement): Cleanup {
  const trigger = qs("[data-mimicus-dropdown-trigger]", root) ?? qs("button, [role='button']", root);
  const panel = qs<HTMLElement>("[data-mimicus-dropdown-panel]", root);
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

  const cleanups: Cleanup[] = [
    on(trigger, "click", (e: Event) => { e.stopPropagation(); toggle(); }),
    on(root, "keydown", (e: KeyboardEvent) => { if (e.key === "Escape") close(); }),
    clickOutside(root, close),
  ];

  for (const item of qsa<HTMLElement>("[data-mimicus-menu-item], [role='menuitem']", panel)) {
    cleanups.push(on(item, "click", () => {
      if (!parseBool(item.dataset.keepOpen)) close();
      emit(root, "mimicus-dropdown-select", { key: item.dataset.key });
    }));
  }

  close();
  return () => { close(); cleanups.forEach((fn) => fn()); };
}

export function bindMenu(root: HTMLElement): Cleanup {
  const items = qsa<HTMLElement>("[role='menuitem']:not([aria-disabled='true'])", root);
  let idx = Math.max(0, items.findIndex((el) => el.classList.contains("is-active")));
  const focusAt = (i: number) => { idx = (i + items.length) % items.length; items[idx]?.focus(); };

  const cleanups: Cleanup[] = [
    on(root, "keydown", (e: KeyboardEvent) => {
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

function paintPagination(root: HTMLElement, count: number, page: number, siblingCount: number): void {
  const { items, current, total } = buildPageRange(count, page, siblingCount);
  const list = qs<HTMLElement>("[data-mimicus-pagination-list]", root);
  if (!list) return;
  list.innerHTML = "";
  const mkBtn = (label: string, action: string, disabled: boolean, active: boolean) => {
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

export function bindPagination(root: HTMLElement): Cleanup {
  const count = parseNum(root.dataset.count, 10);
  let page = parseNum(root.dataset.page ?? root.dataset.defaultPage, 1);
  const sibling = parseNum(root.dataset.siblingCount, 1);

  const setPage = (next: number) => {
    page = Math.min(count, Math.max(1, next));
    paintPagination(root, count, page, sibling);
    emit(root, "mimicus-pagination-change", { page, count });
  };

  paintPagination(root, count, page, sibling);

  const cleanups: Cleanup[] = [on(root, "click", (e: Event) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>("[data-mimicus-page]");
    if (!btn || btn.disabled) return;
    const action = btn.dataset.mimicusPage;
    if (action === "prev") setPage(page - 1);
    else if (action === "next") setPage(page + 1);
    else setPage(parseNum(action, page));
  })];

  return () => cleanups.forEach((fn) => fn());
}

export function bindSteps(root: HTMLElement): Cleanup {
  const clickable = parseBool(root.dataset.clickable);
  if (!clickable) return () => {};
  const steps = qsa<HTMLElement>("[data-mimicus-step]", root);
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

export function bindDrawer(root: HTMLElement): Cleanup {
  const backdrop = qs("[data-mimicus-drawer-backdrop]", root) ?? qs(".mimicus-drawer__backdrop", root);
  const panel = qs<HTMLElement>("[data-mimicus-drawer-panel]", root) ?? qs<HTMLElement>(".mimicus-drawer__panel", root);
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
  const cleanups: Cleanup[] = [
    on(backdrop, "click", close),
    on(closeBtn, "click", close),
    on(document, "keydown", (e: KeyboardEvent) => { if (e.key === "Escape" && parseBool(root.dataset.open)) close(); }),
  ];

  const obs = new MutationObserver(sync);
  obs.observe(root, { attributes: true, attributeFilter: ["data-open"] });

  return () => { obs.disconnect(); cleanups.forEach((fn) => fn()); document.documentElement.classList.remove("mimicus-drawer-open"); };
}

export function bindBottomNav(root: HTMLElement): Cleanup {
  const actions = qsa<HTMLElement>("[data-mimicus-bottom-action]", root);
  const cleanups: Cleanup[] = [];

  const setValue = (val: string) => {
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
      const v = a.dataset.mimicusBottomAction ?? "";
      setValue(v);
      emit(root, "mimicus-bottom-nav-change", { value: v });
    }));
  }

  return () => cleanups.forEach((fn) => fn());
}

export function bindSpeedDial(root: HTMLElement): Cleanup {
  const fab = qs("[data-mimicus-speed-dial-trigger]", root) ?? qs(".mimicus-speed-dial__trigger", root);
  const openCls = "is-open";
  const close = () => { root.classList.remove(openCls); fab?.setAttribute("aria-expanded", "false"); };
  const open = () => { root.classList.add(openCls); fab?.setAttribute("aria-expanded", "true"); };
  const toggle = () => (root.classList.contains(openCls) ? close() : open());

  const cleanups: Cleanup[] = [
    on(fab, "click", (e: Event) => { e.stopPropagation(); toggle(); }),
    on(root, "keydown", (e: KeyboardEvent) => { if (e.key === "Escape") close(); }),
    clickOutside(root, close),
  ];

  for (const action of qsa<HTMLElement>("[data-mimicus-speed-dial-action]", root)) {
    cleanups.push(on(action, "click", () => {
      close();
      emit(root, "mimicus-speed-dial-action", { key: action.dataset.mimicusSpeedDialAction });
    }));
  }

  close();
  return () => { close(); cleanups.forEach((fn) => fn()); };
}

const BINDERS: Record<string, (root: HTMLElement) => Cleanup> = {
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

// El nodo raíz lleva un cleanup adosado de forma dinámica; tipado laxo puntual.
type MimicusRoot = HTMLElement & { __mimicusNavCleanup?: Cleanup };

export function bindNavComponent(root: HTMLElement): Cleanup {
  const r = root as MimicusRoot;
  const type = r?.dataset?.mimicusNav;
  r.__mimicusNavCleanup?.();
  const cleanup: Cleanup = (type ? BINDERS[type]?.(r) : undefined) ?? (() => {});
  r.__mimicusNavCleanup = cleanup;
  return () => {
    cleanup();
    delete r.__mimicusNavCleanup;
  };
}

export function mountNavigation(scope: ParentNode | HTMLElement = document): Cleanup {
  const roots = scope === document
    ? qsa<HTMLElement>("[data-mimicus-nav]", document)
    : [scope as HTMLElement].filter((el) => el?.dataset?.mimicusNav);
  const cleanups = roots.map(bindNavComponent);
  return () => cleanups.forEach((fn) => fn());
}
