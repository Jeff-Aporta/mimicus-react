import { clickOutside, emit, on, parseBool, parseNum, qs, qsa } from "../nav/core.js";

function cleanupPrev(root, fn) {
  root.__mimicusFormCleanup?.();
  root.__mimicusFormCleanup = fn;
}

export function bindSlider(root) {
  const input = qs("input[type='range']", root) ?? qs("[data-mimicus-slider-input]", root);
  const fill = qs("[data-mimicus-slider-fill]", root);
  const label = qs("[data-mimicus-slider-value]", root);
  if (!input) return () => {};
  const paint = () => {
    const min = parseNum(input.min, 0);
    const max = parseNum(input.max, 100);
    const val = parseNum(input.value, min);
    const pct = max === min ? 0 : ((val - min) / (max - min)) * 100;
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = String(val);
    root.dataset.value = String(val);
  };
  paint();
  const clean = on(input, "input", () => { paint(); emit(root, "mimicus-slider-change", { value: parseNum(input.value) }); });
  return () => { clean(); delete root.__mimicusFormCleanup; };
}

export function bindRate(root) {
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
      }),
    ];
  }).flat();
  return () => cleanups.forEach((fn) => fn());
}

export function bindAutocomplete(root) {
  const input = qs("input", root);
  const panel = qs("[data-mimicus-autocomplete-panel]", root);
  if (!input || !panel) return () => {};
  const options = () => qsa("[data-mimicus-autocomplete-option]", panel);
  const open = () => { root.classList.add("is-open"); panel.hidden = false; };
  const close = () => { root.classList.remove("is-open"); panel.hidden = true; };
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
    on(root, "keydown", (e) => { if (e.key === "Escape") close(); }),
    clickOutside(root, close),
    ...options().map((opt) => on(opt, "click", () => {
      input.value = opt.dataset.value ?? opt.textContent ?? "";
      close();
      emit(root, "mimicus-autocomplete-select", { value: input.value });
    })),
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}

export function bindToggleGroup(root) {
  const exclusive = root.dataset.exclusive !== "false";
  const btns = qsa("[data-mimicus-toggle]", root);
  const setActive = (vals) => {
    btns.forEach((b) => {
      const on = vals.includes(b.dataset.mimicusToggle);
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.dataset.value = exclusive ? (vals[0] ?? "") : vals.join(",");
  };
  const initial = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
  setActive(exclusive ? (initial ? [initial] : []) : String(initial).split(",").filter(Boolean));
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

export function bindTransfer(root) {
  const left = qs("[data-mimicus-transfer-left]", root);
  const right = qs("[data-mimicus-transfer-right]", root);
  if (!left || !right) return () => {};
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
    }),
  ];
  return () => cleanups.forEach((fn) => fn());
}

export function bindTransferBoard(root) {
  if (parseBool(root.dataset.disabled)) return () => {};
  let dragEl = null;
  const stacks = qsa("[data-mimicus-transfer-stack]", root);
  const cleanups = stacks.flatMap((stack) => [
    on(stack, "dragover", (e) => { e.preventDefault(); stack.classList.add("is-drag-over"); }),
    on(stack, "dragleave", () => stack.classList.remove("is-drag-over")),
    on(stack, "drop", (e) => {
      e.preventDefault();
      stack.classList.remove("is-drag-over");
      if (dragEl) stack.querySelector("[data-mimicus-transfer-list]")?.appendChild(dragEl);
      dragEl = null;
      emit(root, "mimicus-transfer-board-change", {});
    }),
  ]);
  qsa("[data-mimicus-transfer-item]", root).forEach((item) => {
    item.draggable = true;
    cleanups.push(on(item, "dragstart", () => { dragEl = item; item.classList.add("is-dragging"); }));
    cleanups.push(on(item, "dragend", () => item.classList.remove("is-dragging")));
  });
  return () => cleanups.forEach((fn) => fn());
}

export function bindCascader(root) {
  const trigger = qs("[data-mimicus-cascader-trigger]", root);
  const panel = qs("[data-mimicus-cascader-panel]", root);
  if (!trigger || !panel) return () => {};
  const open = () => { root.classList.add("is-open"); panel.hidden = false; };
  const close = () => { root.classList.remove("is-open"); panel.hidden = true; };
  const cleanups = [
    on(trigger, "click", (e) => { e.stopPropagation(); root.classList.contains("is-open") ? close() : open(); }),
    clickOutside(root, close),
    ...qsa("[data-mimicus-cascader-option]", panel).map((opt) => on(opt, "click", () => {
      trigger.textContent = opt.dataset.label ?? opt.textContent;
      root.dataset.value = opt.dataset.value ?? "";
      close();
      emit(root, "mimicus-cascader-change", { value: root.dataset.value });
    })),
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}

export function bindTreeSelect(root) {
  const trigger = qs("[data-mimicus-tree-trigger]", root);
  const panel = qs("[data-mimicus-tree-panel]", root);
  if (!trigger || !panel) return () => {};
  const open = () => { root.classList.add("is-open"); panel.hidden = false; };
  const close = () => { root.classList.remove("is-open"); panel.hidden = true; };
  const cleanups = [
    on(trigger, "click", (e) => { e.stopPropagation(); root.classList.contains("is-open") ? close() : open(); }),
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
    })),
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}

export function bindMentions(root) {
  const area = qs("textarea", root);
  const panel = qs("[data-mimicus-mentions-panel]", root);
  if (!area || !panel) return () => {};
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
    })),
  ];
  panel.hidden = true;
  return () => cleanups.forEach((fn) => fn());
}

export function bindInputNumber(root) {
  const input = qs("input", root);
  const dec = qs("[data-mimicus-input-number-dec]", root);
  const inc = qs("[data-mimicus-input-number-inc]", root);
  if (!input) return () => {};
  const step = () => parseNum(root.dataset.step, 1);
  const min = () => parseNum(root.dataset.min, -Infinity);
  const max = () => parseNum(root.dataset.max, Infinity);
  const clamp = (v) => Math.min(max(), Math.max(min(), v));
  const set = (v) => {
    input.value = String(clamp(v));
    root.dataset.value = input.value;
    emit(root, "mimicus-input-number-change", { value: parseNum(input.value) });
  };
  const cleanups = [
    on(input, "change", () => set(parseNum(input.value, 0))),
    dec && on(dec, "click", () => set(parseNum(input.value, 0) - step())),
    inc && on(inc, "click", () => set(parseNum(input.value, 0) + step())),
  ].filter(Boolean);
  return () => cleanups.forEach((fn) => fn());
}

export function bindUpload(root) {
  const input = qs("input[type='file']", root);
  const list = qs("[data-mimicus-upload-list]", root);
  if (!input) return () => {};
  const paint = () => {
    if (!list) return;
    list.innerHTML = "";
    [...(input.files ?? [])].forEach((f) => {
      const li = document.createElement("li");
      li.className = "mimicus-upload__file";
      li.textContent = f.name;
      list.appendChild(li);
    });
  };
  return on(input, "change", () => { paint(); emit(root, "mimicus-upload-change", { count: input.files?.length ?? 0 }); });
}

export function bindColorPicker(root) {
  const input = qs("input[type='color']", root) ?? qs("input", root);
  const swatch = qs("[data-mimicus-color-swatch]", root);
  const hex = qs("[data-mimicus-color-hex]", root);
  if (!input) return () => {};
  const paint = () => {
    const v = input.value;
    if (swatch) swatch.style.background = v;
    if (hex) hex.textContent = v;
    root.dataset.value = v;
  };
  paint();
  return on(input, "input", () => { paint(); emit(root, "mimicus-color-change", { value: input.value }); });
}

const BINDERS = {
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
  "color-picker": bindColorPicker,
};

export function bindFormComponent(root) {
  const type = root?.dataset?.mimicusForm;
  root.__mimicusFormCleanup?.();
  const cleanup = BINDERS[type]?.(root) ?? (() => {});
  root.__mimicusFormCleanup = cleanup;
  return () => { cleanup(); delete root.__mimicusFormCleanup; };
}

export function mountForms(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-form]", document) : [scope].filter((el) => el?.dataset?.mimicusForm);
  return () => roots.map(bindFormComponent).forEach((fn) => fn());
}
