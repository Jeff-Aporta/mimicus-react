import { clickOutside, emit, on, parseBool, parseNum, qs, qsa } from "../nav/core.ts";

type Cleanup = () => void;
// El nodo raíz lleva un cleanup adosado de forma dinámica; tipado laxo puntual.
type MimicusFormRoot = HTMLElement & { __mimicusFormCleanup?: Cleanup };

export function bindSlider(root: HTMLElement): Cleanup {
  const input = qs<HTMLInputElement>("input[type='range']", root) ?? qs<HTMLInputElement>("[data-mimicus-slider-input]", root);
  const fill = qs<HTMLElement>("[data-mimicus-slider-fill]", root);
  const label = qs<HTMLElement>("[data-mimicus-slider-value]", root);
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
  return () => { clean(); delete (root as MimicusFormRoot).__mimicusFormCleanup; };
}

export function bindRate(root: HTMLElement): Cleanup {
  const allowHalf = parseBool(root.dataset.allowHalf);
  const allowClear = root.dataset.allowClear !== "false";
  const stars = qsa<HTMLElement>("[data-mimicus-rate-star]", root);
  let value = parseNum(root.dataset.value ?? root.dataset.defaultValue, 0);
  const paint = (v: number, hover = false) => {
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
      on(star, "mousemove", (e: MouseEvent) => {
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

export function bindAutocomplete(root: HTMLElement): Cleanup {
  const input = qs<HTMLInputElement>("input", root);
  const panel = qs<HTMLElement>("[data-mimicus-autocomplete-panel]", root);
  if (!input || !panel) return () => {};
  const options = () => qsa<HTMLElement>("[data-mimicus-autocomplete-option]", panel);
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
  const cleanups: Cleanup[] = [
    on(input, "input", filter),
    on(input, "focus", filter),
    on(root, "keydown", (e: KeyboardEvent) => { if (e.key === "Escape") close(); }),
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

export function bindToggleGroup(root: HTMLElement): Cleanup {
  const exclusive = root.dataset.exclusive !== "false";
  const btns = qsa<HTMLButtonElement>("[data-mimicus-toggle]", root);
  const setActive = (vals: string[]) => {
    btns.forEach((b) => {
      const on = vals.includes(b.dataset.mimicusToggle ?? "");
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.dataset.value = exclusive ? (vals[0] ?? "") : vals.join(",");
  };
  const initial = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
  setActive(exclusive ? (initial ? [initial] : []) : String(initial).split(",").filter(Boolean));
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

function moveSelected(from: Element, to: Element): void {
  const selected = qsa("[data-mimicus-transfer-item].is-selected", from);
  selected.forEach((el) => to.appendChild(el));
}

export function bindTransfer(root: HTMLElement): Cleanup {
  const left = qs<HTMLElement>("[data-mimicus-transfer-left]", root);
  const right = qs<HTMLElement>("[data-mimicus-transfer-right]", root);
  if (!left || !right) return () => {};
  const toggleSelect = (item: Element) => item.classList.toggle("is-selected");
  const cleanups: Cleanup[] = [
    on(root, "click", (e: Event) => {
      const target = e.target as Element;
      const item = target.closest("[data-mimicus-transfer-item]");
      if (item && !parseBool(root.dataset.disabled)) toggleSelect(item);
      const action = target.closest<HTMLElement>("[data-mimicus-transfer-action]")?.dataset.mimicusTransferAction;
      if (!action || parseBool(root.dataset.disabled)) return;
      if (action === "toRight") moveSelected(left, right);
      if (action === "toLeft") moveSelected(right, left);
      emit(root, "mimicus-transfer-change", {});
    }),
  ];
  return () => cleanups.forEach((fn) => fn());
}

export function bindTransferBoard(root: HTMLElement): Cleanup {
  if (parseBool(root.dataset.disabled)) return () => {};
  let dragEl: HTMLElement | null = null;
  const stacks = qsa<HTMLElement>("[data-mimicus-transfer-stack]", root);
  const cleanups: Cleanup[] = stacks.flatMap((stack) => [
    on(stack, "dragover", (e: DragEvent) => { e.preventDefault(); stack.classList.add("is-drag-over"); }),
    on(stack, "dragleave", () => stack.classList.remove("is-drag-over")),
    on(stack, "drop", (e: DragEvent) => {
      e.preventDefault();
      stack.classList.remove("is-drag-over");
      if (dragEl) stack.querySelector("[data-mimicus-transfer-list]")?.appendChild(dragEl);
      dragEl = null;
      emit(root, "mimicus-transfer-board-change", {});
    }),
  ]);
  qsa<HTMLElement>("[data-mimicus-transfer-item]", root).forEach((item) => {
    item.draggable = true;
    cleanups.push(on(item, "dragstart", () => { dragEl = item; item.classList.add("is-dragging"); }));
    cleanups.push(on(item, "dragend", () => item.classList.remove("is-dragging")));
  });
  return () => cleanups.forEach((fn) => fn());
}

export function bindCascader(root: HTMLElement): Cleanup {
  const trigger = qs<HTMLElement>("[data-mimicus-cascader-trigger]", root);
  const panel = qs<HTMLElement>("[data-mimicus-cascader-panel]", root);
  if (!trigger || !panel) return () => {};
  const open = () => { root.classList.add("is-open"); panel.hidden = false; };
  const close = () => { root.classList.remove("is-open"); panel.hidden = true; };
  const cleanups: Cleanup[] = [
    on(trigger, "click", (e: Event) => { e.stopPropagation(); root.classList.contains("is-open") ? close() : open(); }),
    clickOutside(root, close),
    ...qsa<HTMLElement>("[data-mimicus-cascader-option]", panel).map((opt) => on(opt, "click", () => {
      trigger.textContent = opt.dataset.label ?? opt.textContent;
      root.dataset.value = opt.dataset.value ?? "";
      close();
      emit(root, "mimicus-cascader-change", { value: root.dataset.value });
    })),
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}

export function bindTreeSelect(root: HTMLElement): Cleanup {
  const trigger = qs<HTMLElement>("[data-mimicus-tree-trigger]", root);
  const panel = qs<HTMLElement>("[data-mimicus-tree-panel]", root);
  if (!trigger || !panel) return () => {};
  const open = () => { root.classList.add("is-open"); panel.hidden = false; };
  const close = () => { root.classList.remove("is-open"); panel.hidden = true; };
  const cleanups: Cleanup[] = [
    on(trigger, "click", (e: Event) => { e.stopPropagation(); root.classList.contains("is-open") ? close() : open(); }),
    clickOutside(root, close),
    ...qsa<HTMLElement>("[data-mimicus-tree-node]", panel).map((node) => on(node, "click", (e: Event) => {
      const toggle = (e.target as Element).closest("[data-mimicus-tree-toggle]");
      if (toggle) {
        const sub = node.querySelector<HTMLElement>("[data-mimicus-tree-children]");
        if (sub) sub.hidden = !sub.hidden;
        return;
      }
      const label = node.dataset.label ?? node.textContent;
      trigger.textContent = label?.trim() ?? "";
      root.dataset.value = node.dataset.value ?? "";
      close();
      emit(root, "mimicus-tree-select-change", { value: root.dataset.value });
    })),
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}

export function bindMentions(root: HTMLElement): Cleanup {
  const area = qs<HTMLTextAreaElement>("textarea", root);
  const panel = qs<HTMLElement>("[data-mimicus-mentions-panel]", root);
  if (!area || !panel) return () => {};
  const show = (q: string) => {
    const opts = qsa<HTMLElement>("[data-mimicus-mentions-option]", panel);
    let n = 0;
    opts.forEach((o) => {
      const showIt = !q || String(o.dataset.value).toLowerCase().includes(q.toLowerCase());
      o.hidden = !showIt;
      if (showIt) n += 1;
    });
    panel.hidden = n === 0;
    root.classList.toggle("is-open", n > 0);
  };
  const cleanups: Cleanup[] = [
    on(area, "input", () => {
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      show(m ? m[1] : "");
    }),
    ...qsa<HTMLElement>("[data-mimicus-mentions-option]", panel).map((opt) => on(opt, "click", () => {
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      if (!m) return;
      const before = area.value.slice(0, m.index);
      const after = area.value.slice(area.selectionStart ?? 0);
      area.value = `${before}@${opt.dataset.value} ${after}`;
      panel.hidden = true;
      emit(root, "mimicus-mentions-change", { value: area.value });
    })),
  ];
  panel.hidden = true;
  return () => cleanups.forEach((fn) => fn());
}

export function bindInputNumber(root: HTMLElement): Cleanup {
  const input = qs<HTMLInputElement>("input", root);
  const dec = qs<HTMLElement>("[data-mimicus-input-number-dec]", root);
  const inc = qs<HTMLElement>("[data-mimicus-input-number-inc]", root);
  if (!input) return () => {};
  const step = () => parseNum(root.dataset.step, 1);
  const min = () => parseNum(root.dataset.min, -Infinity);
  const max = () => parseNum(root.dataset.max, Infinity);
  const clamp = (v: number) => Math.min(max(), Math.max(min(), v));
  const set = (v: number) => {
    input.value = String(clamp(v));
    root.dataset.value = input.value;
    emit(root, "mimicus-input-number-change", { value: parseNum(input.value) });
  };
  const cleanups = [
    on(input, "change", () => set(parseNum(input.value, 0))),
    dec && on(dec, "click", () => set(parseNum(input.value, 0) - step())),
    inc && on(inc, "click", () => set(parseNum(input.value, 0) + step())),
  ].filter(Boolean) as Cleanup[];
  return () => cleanups.forEach((fn) => fn());
}

export function bindUpload(root: HTMLElement): Cleanup {
  const input = qs<HTMLInputElement>("input[type='file']", root);
  const list = qs<HTMLElement>("[data-mimicus-upload-list]", root);
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

export function bindColorPicker(root: HTMLElement): Cleanup {
  const input = qs<HTMLInputElement>("input[type='color']", root) ?? qs<HTMLInputElement>("input", root);
  const swatch = qs<HTMLElement>("[data-mimicus-color-swatch]", root);
  const hex = qs<HTMLElement>("[data-mimicus-color-hex]", root);
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

const BINDERS: Record<string, (root: HTMLElement) => Cleanup> = {
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

export function bindFormComponent(root: HTMLElement): Cleanup {
  const r = root as MimicusFormRoot;
  const type = r?.dataset?.mimicusForm;
  r.__mimicusFormCleanup?.();
  const cleanup: Cleanup = (type ? BINDERS[type]?.(r) : undefined) ?? (() => {});
  r.__mimicusFormCleanup = cleanup;
  return () => { cleanup(); delete r.__mimicusFormCleanup; };
}

export function mountForms(scope: ParentNode | HTMLElement = document): Cleanup {
  const roots = scope === document
    ? qsa<HTMLElement>("[data-mimicus-form]", document)
    : [scope as HTMLElement].filter((el) => el?.dataset?.mimicusForm);
  return () => roots.map(bindFormComponent).forEach((fn) => fn());
}
