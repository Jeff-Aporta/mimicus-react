import { clickOutside, emit, on, parseBool, parseNum, qs, qsa } from "../nav/core.js";

function cleanupPrev(root, fn) {
  root.__mimicusDisplayCleanup?.();
  root.__mimicusDisplayCleanup = fn;
}

export function bindCarousel(root) {
  const track = qs("[data-mimicus-carousel-track]", root);
  const slides = qsa("[data-mimicus-carousel-slide]", root);
  const dots = qsa("[data-mimicus-carousel-dot]", root);
  const prev = qs("[data-mimicus-carousel-prev]", root);
  const next = qs("[data-mimicus-carousel-next]", root);
  if (!track || !slides.length) return () => {};
  const infinite = root.dataset.infinite !== "false";
  const autoplay = parseBool(root.dataset.autoplay);
  const speed = parseNum(root.dataset.speed, 500);
  const autoplaySpeed = parseNum(root.dataset.autoplaySpeed, 3000);
  let idx = parseNum(root.dataset.activeIndex, 0);
  let timer;

  const go = (n, animate = true) => {
    const max = slides.length;
    if (!max) return;
    if (infinite) idx = ((n % max) + max) % max;
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

  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  const start = () => {
    stop();
    if (autoplay && slides.length > 1) timer = setInterval(() => go(idx + 1), autoplaySpeed);
  };

  go(idx, false);
  start();
  const cleanups = [
    on(prev, "click", () => { go(idx - 1); start(); }),
    on(next, "click", () => { go(idx + 1); start(); }),
    ...dots.map((d, i) => on(d, "click", () => { go(i); start(); })),
    () => stop(),
  ];
  return () => cleanups.forEach((fn) => fn());
}

export function bindCollapse(root) {
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
    emit(root, "mimicus-collapse-change", { activeKey: accordion ? (keys[0] ?? "") : keys });
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

export function bindTooltip(root) {
  const tip = qs("[data-mimicus-tooltip-popup]", root);
  const trigger = qs("[data-mimicus-tooltip-trigger]", root) ?? root.firstElementChild;
  if (!tip || !trigger) return () => {};
  const placement = root.dataset.placement ?? "top";
  let open = false;
  const show = () => { open = true; root.classList.add("is-open"); tip.hidden = false; tip.dataset.placement = placement; };
  const hide = () => { open = false; root.classList.remove("is-open"); tip.hidden = true; };
  hide();
  const cleanups = [
    on(trigger, "mouseenter", show),
    on(trigger, "focus", show),
    on(trigger, "mouseleave", hide),
    on(trigger, "blur", hide),
    on(root, "keydown", (e) => { if (e.key === "Escape" && open) hide(); }),
  ];
  return () => cleanups.forEach((fn) => fn());
}

export function bindSegmented(root) {
  const btns = qsa("[data-mimicus-segmented]", root);
  const set = (v) => {
    root.dataset.value = v;
    btns.forEach((b) => {
      const on = b.dataset.mimicusSegmented === v;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    emit(root, "mimicus-segmented-change", { value: v });
  };
  set(root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusSegmented ?? btns[0]?.dataset.mimicusSegmented ?? "");
  return btns.map((b) => on(b, "click", () => set(b.dataset.mimicusSegmented)));
}

export function bindTree(root) {
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
      if (switcher) outs.push(on(switcher, "click", (e) => { e.stopPropagation(); toggleExpand(node); }));
      if (checkable && checkbox) outs.push(on(checkbox, "change", () => {
        node.classList.toggle("is-checked", checkbox.checked);
        emit(root, "mimicus-tree-check", { key: node.dataset.mimicusTreeNode, checked: checkbox.checked });
      }));
      return outs;
    });
  return () => cleanups.forEach((fn) => fn());
}

export function bindCalendar(root) {
  const grid = qs("[data-mimicus-calendar-grid]", root);
  const title = qs("[data-mimicus-calendar-title]", root);
  const prev = qs("[data-mimicus-calendar-prev]", root);
  const next = qs("[data-mimicus-calendar-next]", root);
  if (!grid) return () => {};
  let year = parseNum(root.dataset.year, new Date().getFullYear());
  let month = parseNum(root.dataset.month, new Date().getMonth());

  const paint = () => {
    root.dataset.year = String(year);
    root.dataset.month = String(month);
    if (title) title.textContent = new Date(year, month, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });
    grid.innerHTML = "";
    const first = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const today = new Date();
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
    on(prev, "click", () => { month -= 1; if (month < 0) { month = 11; year -= 1; } paint(); }),
    on(next, "click", () => { month += 1; if (month > 11) { month = 0; year += 1; } paint(); }),
  ];
}

export function bindTableSort(root) {
  const headers = qsa("[data-mimicus-table-sort]", root);
  if (!headers.length) return () => {};
  const tbody = qs("tbody", root);
  const cleanups = headers.map((th) => on(th, "click", () => {
    const col = parseNum(th.dataset.mimicusTableSort, 0);
    const asc = th.dataset.sortDir !== "asc";
    headers.forEach((h) => { h.dataset.sortDir = ""; h.classList.remove("is-asc", "is-desc"); });
    th.dataset.sortDir = asc ? "asc" : "desc";
    th.classList.add(asc ? "is-asc" : "is-desc");
    if (!tbody) return;
    const rows = [...tbody.querySelectorAll("tr")];
    rows.sort((a, b) => {
      const av = a.children[col]?.textContent?.trim() ?? "";
      const bv = b.children[col]?.textContent?.trim() ?? "";
      const an = Number(av); const bn = Number(bv);
      const cmp = Number.isFinite(an) && Number.isFinite(bn) ? an - bn : av.localeCompare(bv);
      return asc ? cmp : -cmp;
    });
    rows.forEach((r) => tbody.appendChild(r));
    emit(root, "mimicus-table-sort", { column: col, direction: asc ? "asc" : "desc" });
  }));
  return () => cleanups.forEach((fn) => fn());
}

export function bindTour(root) {
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
    if (!open || !steps.length) { root.classList.remove("is-active"); if (overlay) overlay.hidden = true; return; }
    root.classList.add("is-active");
    if (overlay) overlay.hidden = false;
    const step = steps[idx];
    const targetSel = step?.dataset.target;
    const target = targetSel ? (qs(targetSel, root) ?? qs(targetSel, document)) : null;
    steps.forEach((s, i) => s.classList.toggle("is-current", i === idx));
    if (titleEl) titleEl.textContent = step?.dataset.title ?? "";
    if (descEl) descEl.textContent = step?.dataset.description ?? "";
    if (card && target) {
      const rect = target.getBoundingClientRect();
      card.style.position = "fixed";
      card.style.top = `${rect.bottom + 8}px`;
      card.style.left = `${rect.left}px`;
      target.classList.add("mimicus-tour-target");
      steps.forEach((s, i) => { if (i !== idx) { const el = qs(s.dataset.target, root) ?? qs(s.dataset.target, document); el?.classList.remove("mimicus-tour-target"); } });
    }
    if (prev) prev.disabled = idx <= 0;
    if (next) next.textContent = idx >= steps.length - 1 ? "Finalizar" : "Siguiente";
  };

  const end = () => { root.dataset.open = "false"; qsa(".mimicus-tour-target", root).forEach((el) => el.classList.remove("mimicus-tour-target")); paint(); emit(root, "mimicus-tour-close"); };
  paint();
  return [
    on(next, "click", () => { if (idx >= steps.length - 1) end(); else { idx += 1; paint(); } }),
    on(prev, "click", () => { if (idx > 0) { idx -= 1; paint(); } }),
    on(close, "click", end),
    on(overlay, "click", end),
  ];
}

const BINDERS = {
  carousel: bindCarousel,
  collapse: bindCollapse,
  tooltip: bindTooltip,
  segmented: bindSegmented,
  tree: bindTree,
  calendar: bindCalendar,
  table: bindTableSort,
  tour: bindTour,
};

export function bindDisplayComponent(root) {
  const type = root?.dataset?.mimicusDisplay;
  cleanupPrev(root, () => {});
  const cleanup = BINDERS[type]?.(root) ?? (() => {});
  const fn = Array.isArray(cleanup) ? () => cleanup.forEach((c) => c?.()) : cleanup;
  root.__mimicusDisplayCleanup = fn;
  return () => { fn(); delete root.__mimicusDisplayCleanup; };
}

export function mountDisplay(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-display]", document) : [scope].filter((el) => el?.dataset?.mimicusDisplay);
  return () => roots.map(bindDisplayComponent).forEach((fn) => fn());
}
