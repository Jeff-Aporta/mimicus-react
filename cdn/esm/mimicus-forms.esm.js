// src/components/forms/Forms.tsx
import { Children, useId, useRef, useState } from "react";

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

// src/forms/useFormBinding.ts
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
function clickOutside(root, onAway) {
  const fn = (e) => {
    if (!root?.contains(e.target)) onAway(e);
  };
  const clean = on(document, "pointerdown", fn, true);
  return clean;
}
function emit(root, name, detail) {
  root?.dispatchEvent?.(new CustomEvent(name, { bubbles: true, detail }));
}

// src/forms/controllers.ts
function bindSlider(root) {
  const input = qs("input[type='range']", root) ?? qs("[data-mimicus-slider-input]", root);
  const fill = qs("[data-mimicus-slider-fill]", root);
  const label = qs("[data-mimicus-slider-value]", root);
  if (!input) return () => {
  };
  const paint = () => {
    const min = parseNum(input.min, 0);
    const max = parseNum(input.max, 100);
    const val = parseNum(input.value, min);
    const pct = max === min ? 0 : (val - min) / (max - min) * 100;
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = String(val);
    root.dataset.value = String(val);
  };
  paint();
  const clean = on(input, "input", () => {
    paint();
    emit(root, "mimicus-slider-change", { value: parseNum(input.value) });
  });
  return () => {
    clean();
    delete root.__mimicusFormCleanup;
  };
}
function bindRate(root) {
  const allowHalf = parseBool(root.dataset.allowHalf);
  const allowClear = root.dataset.allowClear !== "false";
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
      })
    ];
  }).flat();
  return () => cleanups.forEach((fn) => fn());
}
function bindAutocomplete(root) {
  const input = qs("input", root);
  const panel = qs("[data-mimicus-autocomplete-panel]", root);
  if (!input || !panel) return () => {
  };
  const options = () => qsa("[data-mimicus-autocomplete-option]", panel);
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
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
    on(root, "keydown", (e) => {
      if (e.key === "Escape") close();
    }),
    clickOutside(root, close),
    ...options().map((opt) => on(opt, "click", () => {
      input.value = opt.dataset.value ?? opt.textContent ?? "";
      close();
      emit(root, "mimicus-autocomplete-select", { value: input.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindToggleGroup(root) {
  const exclusive = root.dataset.exclusive !== "false";
  const btns = qsa("[data-mimicus-toggle]", root);
  const setActive = (vals) => {
    btns.forEach((b) => {
      const on2 = vals.includes(b.dataset.mimicusToggle ?? "");
      b.classList.toggle("is-active", on2);
      b.setAttribute("aria-pressed", on2 ? "true" : "false");
    });
    root.dataset.value = exclusive ? vals[0] ?? "" : vals.join(",");
  };
  const initial = root.dataset.value ?? btns.find((b) => b.classList.contains("is-active"))?.dataset.mimicusToggle ?? "";
  setActive(exclusive ? initial ? [initial] : [] : String(initial).split(",").filter(Boolean));
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
function moveSelected(from, to) {
  const selected = qsa("[data-mimicus-transfer-item].is-selected", from);
  selected.forEach((el) => to.appendChild(el));
}
function bindTransfer(root) {
  const left = qs("[data-mimicus-transfer-left]", root);
  const right = qs("[data-mimicus-transfer-right]", root);
  if (!left || !right) return () => {
  };
  const toggleSelect = (item) => item.classList.toggle("is-selected");
  const cleanups = [
    on(root, "click", (e) => {
      const target = e.target;
      const item = target.closest("[data-mimicus-transfer-item]");
      if (item && !parseBool(root.dataset.disabled)) toggleSelect(item);
      const action = target.closest("[data-mimicus-transfer-action]")?.dataset.mimicusTransferAction;
      if (!action || parseBool(root.dataset.disabled)) return;
      if (action === "toRight") moveSelected(left, right);
      if (action === "toLeft") moveSelected(right, left);
      emit(root, "mimicus-transfer-change", {});
    })
  ];
  return () => cleanups.forEach((fn) => fn());
}
function bindTransferBoard(root) {
  if (parseBool(root.dataset.disabled)) return () => {
  };
  let dragEl = null;
  const stacks = qsa("[data-mimicus-transfer-stack]", root);
  const cleanups = stacks.flatMap((stack) => [
    on(stack, "dragover", (e) => {
      e.preventDefault();
      stack.classList.add("is-drag-over");
    }),
    on(stack, "dragleave", () => stack.classList.remove("is-drag-over")),
    on(stack, "drop", (e) => {
      e.preventDefault();
      stack.classList.remove("is-drag-over");
      if (dragEl) stack.querySelector("[data-mimicus-transfer-list]")?.appendChild(dragEl);
      dragEl = null;
      emit(root, "mimicus-transfer-board-change", {});
    })
  ]);
  qsa("[data-mimicus-transfer-item]", root).forEach((item) => {
    item.draggable = true;
    cleanups.push(on(item, "dragstart", () => {
      dragEl = item;
      item.classList.add("is-dragging");
    }));
    cleanups.push(on(item, "dragend", () => item.classList.remove("is-dragging")));
  });
  return () => cleanups.forEach((fn) => fn());
}
function bindCascader(root) {
  const trigger = qs("[data-mimicus-cascader-trigger]", root);
  const panel = qs("[data-mimicus-cascader-panel]", root);
  if (!trigger || !panel) return () => {
  };
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
  const cleanups = [
    on(trigger, "click", (e) => {
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    }),
    clickOutside(root, close),
    ...qsa("[data-mimicus-cascader-option]", panel).map((opt) => on(opt, "click", () => {
      trigger.textContent = opt.dataset.label ?? opt.textContent;
      root.dataset.value = opt.dataset.value ?? "";
      close();
      emit(root, "mimicus-cascader-change", { value: root.dataset.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindTreeSelect(root) {
  const trigger = qs("[data-mimicus-tree-trigger]", root);
  const panel = qs("[data-mimicus-tree-panel]", root);
  if (!trigger || !panel) return () => {
  };
  const open = () => {
    root.classList.add("is-open");
    panel.hidden = false;
  };
  const close = () => {
    root.classList.remove("is-open");
    panel.hidden = true;
  };
  const cleanups = [
    on(trigger, "click", (e) => {
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    }),
    clickOutside(root, close),
    ...qsa("[data-mimicus-tree-node]", panel).map((node) => on(node, "click", (e) => {
      const toggle = e.target.closest("[data-mimicus-tree-toggle]");
      if (toggle) {
        const sub = node.querySelector("[data-mimicus-tree-children]");
        if (sub) sub.hidden = !sub.hidden;
        return;
      }
      const label = node.dataset.label ?? node.textContent;
      trigger.textContent = label?.trim() ?? "";
      root.dataset.value = node.dataset.value ?? "";
      close();
      emit(root, "mimicus-tree-select-change", { value: root.dataset.value });
    }))
  ];
  close();
  return () => cleanups.forEach((fn) => fn());
}
function bindMentions(root) {
  const area = qs("textarea", root);
  const panel = qs("[data-mimicus-mentions-panel]", root);
  if (!area || !panel) return () => {
  };
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
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      show(m ? m[1] : "");
    }),
    ...qsa("[data-mimicus-mentions-option]", panel).map((opt) => on(opt, "click", () => {
      const m = area.value.slice(0, area.selectionStart ?? 0).match(/@([\w]*)$/);
      if (!m) return;
      const before = area.value.slice(0, m.index);
      const after = area.value.slice(area.selectionStart ?? 0);
      area.value = `${before}@${opt.dataset.value} ${after}`;
      panel.hidden = true;
      emit(root, "mimicus-mentions-change", { value: area.value });
    }))
  ];
  panel.hidden = true;
  return () => cleanups.forEach((fn) => fn());
}
function bindInputNumber(root) {
  const input = qs("input", root);
  const dec = qs("[data-mimicus-input-number-dec]", root);
  const inc = qs("[data-mimicus-input-number-inc]", root);
  if (!input) return () => {
  };
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
    inc && on(inc, "click", () => set(parseNum(input.value, 0) + step()))
  ].filter(Boolean);
  return () => cleanups.forEach((fn) => fn());
}
function bindUpload(root) {
  const input = qs("input[type='file']", root);
  const list = qs("[data-mimicus-upload-list]", root);
  if (!input) return () => {
  };
  const paint = () => {
    if (!list) return;
    list.innerHTML = "";
    [...input.files ?? []].forEach((f) => {
      const li = document.createElement("li");
      li.className = "mimicus-upload__file";
      li.textContent = f.name;
      list.appendChild(li);
    });
  };
  return on(input, "change", () => {
    paint();
    emit(root, "mimicus-upload-change", { count: input.files?.length ?? 0 });
  });
}
function bindColorPicker(root) {
  const input = qs("input[type='color']", root) ?? qs("input", root);
  const swatch = qs("[data-mimicus-color-swatch]", root);
  const hex = qs("[data-mimicus-color-hex]", root);
  if (!input) return () => {
  };
  const paint = () => {
    const v = input.value;
    if (swatch) swatch.style.background = v;
    if (hex) hex.textContent = v;
    root.dataset.value = v;
  };
  paint();
  return on(input, "input", () => {
    paint();
    emit(root, "mimicus-color-change", { value: input.value });
  });
}
var BINDERS = {
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
  "color-picker": bindColorPicker
};
function bindFormComponent(root) {
  const r = root;
  const type = r?.dataset?.mimicusForm;
  r.__mimicusFormCleanup?.();
  const cleanup = (type ? BINDERS[type]?.(r) : void 0) ?? (() => {
  });
  r.__mimicusFormCleanup = cleanup;
  return () => {
    cleanup();
    delete r.__mimicusFormCleanup;
  };
}
function mountForms(scope = document) {
  const roots = scope === document ? qsa("[data-mimicus-form]", document) : [scope].filter((el) => el?.dataset?.mimicusForm);
  return () => roots.map(bindFormComponent).forEach((fn) => fn());
}

// src/forms/useFormBinding.ts
function useFormBinding(ref, type, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return void 0;
    el.dataset.mimicusForm = type;
    return bindFormComponent(el);
  }, deps);
}

// src/components/forms/Forms.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function cx(...p) {
  return p.filter(Boolean).join(" ");
}
function useCtrl(value, defaultValue, onChange) {
  const [inner, setInner] = useState(defaultValue);
  const v = value ?? inner;
  const set = (next) => {
    if (value === void 0) setInner(next);
    onChange?.(next);
  };
  return [v, set];
}
function FormItem({ label, required, help, error, children, className, layout = "vertical", ...rest }) {
  return /* @__PURE__ */ jsxs("label", { ...rest, className: cx("mimicus-form-item", `mimicus-form-item--${layout}`, error && "has-error", className), children: [
    label && /* @__PURE__ */ jsxs("span", { className: "mimicus-form-item__label", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "mimicus-form-item__req", children: "*" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mimicus-form-item__control", children }),
    (help || error) && /* @__PURE__ */ jsx("span", { className: "mimicus-form-item__extra", children: error ?? help })
  ] });
}
function Form({ layout = "vertical", className, style, children, ...rest }) {
  return /* @__PURE__ */ jsx("form", { ...rest, className: cx("mimicus-form", `mimicus-form--${layout}`, className), style, onSubmit: (e) => e.preventDefault(), children });
}
Form.Item = FormItem;
function Input({
  value,
  defaultValue,
  onChange,
  size = "medium",
  status,
  prefix,
  suffix,
  allowClear,
  disabled,
  readOnly,
  placeholder,
  type = "text",
  className,
  style,
  ...rest
}) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsxs("span", { className: cx("mimicus-input", `mimicus-input--${size}`, status && `is-${status}`, disabled && "is-disabled", className), style, children: [
    prefix && /* @__PURE__ */ jsx("span", { className: "mimicus-input__affix mimicus-input__prefix", children: prefix }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...rest,
        type,
        className: "mimicus-input__native",
        value: val ?? "",
        readOnly,
        disabled,
        placeholder,
        onChange: (e) => set(e.target.value)
      }
    ),
    allowClear && val && !disabled && /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-input__clear", "aria-label": "Limpiar", onClick: () => set(""), children: "\xD7" }),
    suffix && /* @__PURE__ */ jsx("span", { className: "mimicus-input__affix mimicus-input__suffix", children: suffix })
  ] });
}
var TextField = Input;
function TextArea({ value, defaultValue, onChange, rows = 4, autoSize, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      ...rest,
      rows,
      className: cx("mimicus-textarea", autoSize && "mimicus-textarea--autosize", className),
      style,
      value: val ?? "",
      onChange: (e) => set(e.target.value)
    }
  );
}
function InputNumber({ value, defaultValue = 0, onChange, min, max, step = 1, size = "medium", disabled, className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "input-number", [min, max, step, val]);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      className: cx("mimicus-input-number", `mimicus-input-number--${size}`, disabled && "is-disabled", className),
      style,
      "data-min": min,
      "data-max": max,
      "data-step": step,
      "data-value": val,
      "data-mimicus-form": "input-number",
      children: [
        /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-dec": true, disabled, tabIndex: -1, children: "\u2212" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ...rest,
            type: "text",
            inputMode: "decimal",
            className: "mimicus-input-number__native",
            value: val ?? 0,
            disabled,
            onChange: (e) => set(Number(e.target.value) || 0)
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-input-number__btn", "data-mimicus-input-number-inc": true, disabled, tabIndex: -1, children: "+" })
      ]
    }
  );
}
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  indeterminate,
  disabled,
  loading,
  size = "medium",
  children,
  className,
  style,
  ...rest
}) {
  const [on2, set] = useCtrl(checked, defaultChecked, onChange);
  const id = useId();
  return /* @__PURE__ */ jsxs("label", { className: cx("mimicus-checkbox", `mimicus-checkbox--${size}`, on2 && "is-checked", indeterminate && "is-indeterminate", disabled && "is-disabled", loading && "is-loading", className), style, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...rest,
        id,
        type: "checkbox",
        className: "mimicus-checkbox__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "mimicus-checkbox__box", "aria-hidden": true }),
    children != null && /* @__PURE__ */ jsx("span", { className: "mimicus-checkbox__label", children })
  ] });
}
function CheckboxIcon({ checked, defaultChecked, onChange, disabled, loading, color, variant, children, icon, iconChecked, iconUnchecked, className, ...rest }) {
  const surface = mergeSurfaceStyle(color, { variant: variant ?? "solid" });
  return /* @__PURE__ */ jsxs(
    Checkbox,
    {
      ...rest,
      checked,
      defaultChecked,
      onChange,
      disabled,
      loading,
      className: cx("mimicus-checkbox--icon", variant === "glass" && "mimicus-checkbox--glass", className),
      style: surface.style,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "mimicus-checkbox__icons", children: [
          /* @__PURE__ */ jsx("span", { className: "mimicus-checkbox__icon mimicus-checkbox__icon--on", children: iconChecked ?? icon ?? "\u2713" }),
          /* @__PURE__ */ jsx("span", { className: "mimicus-checkbox__icon mimicus-checkbox__icon--off", children: iconUnchecked ?? "\u25CB" })
        ] }),
        children
      ]
    }
  );
}
function CheckboxChip({ value, options, onChange, className, style }) {
  return /* @__PURE__ */ jsx(ToggleButtonGroup, { exclusive: true, value, onChange, className: cx("mimicus-checkbox-chip", className), style, children: options?.map((opt) => /* @__PURE__ */ jsx(ToggleButton, { value: opt.value, icon: opt.icon, children: opt.label ?? opt.value }, opt.value)) });
}
function Switch({ checked, defaultChecked = false, onChange, disabled, loading, size = "medium", children, className, style, ...rest }) {
  const [on2, set] = useCtrl(checked, defaultChecked, onChange);
  return /* @__PURE__ */ jsxs("label", { className: cx("mimicus-switch", `mimicus-switch--${size}`, on2 && "is-checked", disabled && "is-disabled", loading && "is-loading", className), style, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...rest,
        type: "checkbox",
        role: "switch",
        className: "mimicus-switch__native",
        checked: Boolean(on2),
        disabled: disabled || loading,
        onChange: (e) => set(e.target.checked)
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "mimicus-switch__track", children: /* @__PURE__ */ jsx("span", { className: "mimicus-switch__thumb" }) }),
    children != null && /* @__PURE__ */ jsx("span", { className: "mimicus-switch__label", children })
  ] });
}
function LabeledSwitch({ label, checked, defaultChecked, onChange, readonly, ...rest }) {
  return /* @__PURE__ */ jsx(FormItem, { label, layout: "horizontal", className: "mimicus-labeled-switch", children: /* @__PURE__ */ jsx(Switch, { checked, defaultChecked, onChange, disabled: readonly, ...rest }) });
}
function Radio({ value, checked, defaultChecked, onChange, disabled, children, className, name, ...rest }) {
  return /* @__PURE__ */ jsxs("label", { className: cx("mimicus-radio", checked && "is-checked", disabled && "is-disabled", className), children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...rest,
        type: "radio",
        name,
        value,
        className: "mimicus-radio__native",
        checked,
        defaultChecked,
        disabled,
        onChange
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "mimicus-radio__dot", "aria-hidden": true }),
    children != null && /* @__PURE__ */ jsx("span", { className: "mimicus-radio__label", children })
  ] });
}
function RadioGroup({ value, defaultValue, onChange, name, direction = "horizontal", options, children, className, style, ...rest }) {
  const groupName = useId();
  const [val, set] = useCtrl(value, defaultValue, onChange);
  const resolvedName = name ?? groupName;
  const body = children ?? options?.map((opt) => /* @__PURE__ */ jsx(
    Radio,
    {
      name: resolvedName,
      value: opt.value,
      checked: val === opt.value,
      disabled: opt.disabled,
      onChange: () => set(opt.value),
      children: opt.label
    },
    opt.value
  ));
  return /* @__PURE__ */ jsx("div", { ...rest, role: "radiogroup", className: cx("mimicus-radio-group", `mimicus-radio-group--${direction}`, className), style, "data-value": val, children: body });
}
function Slider({ value, defaultValue = 0, onChange, min = 0, max = 100, step = 1, disabled, vertical, className, style, showValue, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "slider", [min, max, step]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      ...rest,
      className: cx("mimicus-slider", vertical && "mimicus-slider--vertical", disabled && "is-disabled", className),
      style,
      "data-value": val,
      "data-mimicus-form": "slider",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mimicus-slider__rail", children: /* @__PURE__ */ jsx("div", { className: "mimicus-slider__fill", "data-mimicus-slider-fill": true }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            className: "mimicus-slider__input",
            "data-mimicus-slider-input": true,
            min,
            max,
            step,
            value: val,
            disabled,
            onInput: (e) => set(Number(e.target.value)),
            onChange: (e) => set(Number(e.target.value))
          }
        ),
        showValue && /* @__PURE__ */ jsx("span", { className: "mimicus-slider__value", "data-mimicus-slider-value": true, children: val })
      ]
    }
  );
}
function Rate({ value, defaultValue = 0, onChange, count = 5, allowHalf, allowClear = true, disabled, character = "\u2605", size = "medium", className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "rate", [count, allowHalf, allowClear, val, disabled]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      ...rest,
      role: "radiogroup",
      className: cx("mimicus-rate", `mimicus-rate--${size}`, disabled && "is-disabled", className),
      style,
      "data-count": count,
      "data-value": val,
      "data-default-value": defaultValue,
      "data-allow-half": allowHalf ? "true" : void 0,
      "data-allow-clear": allowClear ? "true" : "false",
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "rate",
      children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-rate__star", "data-mimicus-rate-star": i + 1, disabled, "aria-label": `${i + 1} estrellas`, children: character }, i))
    }
  );
}
var Rating = Rate;
function Select({ value, defaultValue, onChange, options, placeholder, disabled, size = "medium", className, style, children, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsxs("span", { className: cx("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", className), style, children: [
    /* @__PURE__ */ jsxs("select", { ...rest, className: "mimicus-select__native", value: val ?? "", disabled, onChange: (e) => set(e.target.value), children: [
      placeholder && /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
      children ?? options?.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value))
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mimicus-select__arrow", "aria-hidden": true, children: "\u25BE" })
  ] });
}
function AutoComplete({ options = [], value, defaultValue, onChange, onSelect, placeholder, disabled, className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "autocomplete", [options.length]);
  return /* @__PURE__ */ jsxs("div", { ref, className: cx("mimicus-autocomplete", disabled && "is-disabled", className), style, "data-mimicus-form": "autocomplete", children: [
    /* @__PURE__ */ jsx(Input, { ...rest, value: val, onChange: set, placeholder, disabled }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-autocomplete__panel", "data-mimicus-autocomplete-panel": true, role: "listbox", hidden: true, children: options.map((opt) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        role: "option",
        className: "mimicus-autocomplete__option",
        "data-mimicus-autocomplete-option": true,
        "data-value": opt.value ?? opt,
        onClick: () => {
          set(opt.value ?? opt);
          onSelect?.(opt.value ?? opt);
        },
        children: opt.label ?? opt
      },
      opt.value ?? opt
    )) })
  ] });
}
function ToggleButton({ value, selected, onChange, disabled, children, icon, className, ...rest }) {
  const on2 = selected ?? rest["aria-pressed"] === "true";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...rest,
      type: "button",
      className: cx("mimicus-toggle-btn", on2 && "is-active", className),
      "data-mimicus-toggle": value,
      "aria-pressed": on2 ? "true" : "false",
      disabled,
      onClick: () => onChange?.(!on2),
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "mimicus-toggle-btn__icon", "aria-hidden": true, children: icon }),
        children
      ]
    }
  );
}
function ToggleButtonGroup({ value, defaultValue, onChange, exclusive = true, orientation = "horizontal", size, children, className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? (exclusive ? "" : []), onChange);
  const normalized = exclusive ? val : Array.isArray(val) ? val.join(",") : val;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      ...rest,
      role: "group",
      className: cx("mimicus-toggle-group", `mimicus-toggle-group--${orientation}`, size && `mimicus-toggle-group--${size}`, className),
      style,
      "data-exclusive": exclusive ? "true" : "false",
      "data-value": normalized,
      "data-mimicus-form": "toggle-group",
      children: Children.map(children, (child) => {
        const node = child;
        if (!node?.props) return child;
        const v = node.props.value;
        const active = exclusive ? val === v : Array.isArray(val) ? val.includes(v) : String(val).split(",").includes(v);
        return /* @__PURE__ */ jsx(ToggleButton, { ...node.props, selected: active, onChange: () => {
          if (exclusive) set(v);
          else {
            const arr = Array.isArray(val) ? [...val] : String(val || "").split(",").filter(Boolean);
            set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
          }
        } });
      })
    }
  );
}
function Transfer({ dataSource, targetKeys, onChange, titles = ["Origen", "Destino"], disabled, className, style }) {
  const ref = useRef(null);
  const left = (dataSource ?? []).filter((d) => !(targetKeys ?? []).includes(d.key));
  const right = (dataSource ?? []).filter((d) => (targetKeys ?? []).includes(d.key));
  useFormBinding(ref, "transfer", [left.length, right.length, disabled]);
  const Item = ({ item }) => /* @__PURE__ */ jsx("li", { className: "mimicus-transfer__item", "data-mimicus-transfer-item": true, "data-key": item.key, children: item.title });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cx("mimicus-transfer", disabled && "is-disabled", className),
      style,
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "transfer",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mimicus-transfer__panel", children: [
          /* @__PURE__ */ jsx("div", { className: "mimicus-transfer__title", children: titles[0] }),
          /* @__PURE__ */ jsx("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-left": true, children: left.map((item) => /* @__PURE__ */ jsx(Item, { item }, item.key)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mimicus-transfer__actions", children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toRight", children: "\u203A" }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-transfer__action", "data-mimicus-transfer-action": "toLeft", children: "\u2039" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mimicus-transfer__panel", children: [
          /* @__PURE__ */ jsx("div", { className: "mimicus-transfer__title", children: titles[1] }),
          /* @__PURE__ */ jsx("ul", { className: "mimicus-transfer__list", "data-mimicus-transfer-right": true, children: right.map((item) => /* @__PURE__ */ jsx(Item, { item }, item.key)) })
        ] })
      ]
    }
  );
}
var TransferList = Transfer;
function TransferBoard({ stackCount = 3, stackWidth = 248, disabled, itemsPerStack = 3, className, style }) {
  const ref = useRef(null);
  useFormBinding(ref, "transfer-board", [stackCount, stackWidth, disabled, itemsPerStack]);
  const stacks = Array.from({ length: stackCount }, (_, s) => /* @__PURE__ */ jsxs("div", { className: "mimicus-transfer-board__stack", "data-mimicus-transfer-stack": true, style: { width: stackWidth }, children: [
    /* @__PURE__ */ jsxs("div", { className: "mimicus-transfer-board__stack-title", children: [
      "Stack ",
      s + 1
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mimicus-transfer-board__list", "data-mimicus-transfer-list": true, children: Array.from({ length: itemsPerStack }, (_2, i) => /* @__PURE__ */ jsxs("li", { className: "mimicus-transfer-board__card", "data-mimicus-transfer-item": true, draggable: !disabled, children: [
      "Tarjeta ",
      s * itemsPerStack + i + 1
    ] }, i)) })
  ] }, s));
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cx("mimicus-transfer-board", disabled && "is-disabled", className),
      style,
      "data-disabled": disabled ? "true" : void 0,
      "data-mimicus-form": "transfer-board",
      children: stacks
    }
  );
}
function Upload({ accept, multiple, disabled, children, className, style, ...rest }) {
  const ref = useRef(null);
  useFormBinding(ref, "upload", [accept, multiple]);
  return /* @__PURE__ */ jsxs("div", { ref, className: cx("mimicus-upload", disabled && "is-disabled", className), style, "data-mimicus-form": "upload", children: [
    /* @__PURE__ */ jsxs("label", { className: "mimicus-upload__trigger", children: [
      /* @__PURE__ */ jsx("input", { ...rest, type: "file", className: "mimicus-upload__native", accept, multiple, disabled }),
      children ?? /* @__PURE__ */ jsx("span", { className: "mimicus-upload__btn", children: "Subir archivo" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mimicus-upload__list", "data-mimicus-upload-list": true })
  ] });
}
function ColorPicker({ value = "#1677ff", defaultValue, onChange, disabled, className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "#1677ff", onChange);
  useFormBinding(ref, "color-picker", [val]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cx("mimicus-color-picker", disabled && "is-disabled", className),
      style,
      "data-value": val,
      "data-mimicus-form": "color-picker",
      children: [
        /* @__PURE__ */ jsx("span", { className: "mimicus-color-picker__swatch", "data-mimicus-color-swatch": true, style: { background: val } }),
        /* @__PURE__ */ jsx("input", { ...rest, type: "color", value: val, disabled, onChange: (e) => set(e.target.value) }),
        /* @__PURE__ */ jsx("code", { className: "mimicus-color-picker__hex", "data-mimicus-color-hex": true, children: val })
      ]
    }
  );
}
function DatePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx(Input, { ...rest, type: "date", className: cx("mimicus-date-picker", className), style, value: val, disabled, onChange: set });
}
function TimePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return /* @__PURE__ */ jsx(Input, { ...rest, type: "time", className: cx("mimicus-time-picker", className), style, value: val, disabled, onChange: set });
}
function Cascader({ options = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
  const ref = useRef(null);
  useFormBinding(ref, "cascader", [options.length]);
  const flat = options.flatMap((o) => o.children ? o.children.map((c) => ({ ...c, parent: o.label })) : [o]);
  return /* @__PURE__ */ jsxs("div", { ref, className: cx("mimicus-cascader", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "cascader", children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-cascader__trigger", "data-mimicus-cascader-trigger": true, disabled, children: placeholder }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-cascader__panel", "data-mimicus-cascader-panel": true, hidden: true, children: flat.map((opt) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "mimicus-cascader__option",
        "data-mimicus-cascader-option": true,
        "data-value": opt.value,
        "data-label": opt.parent ? `${opt.parent} / ${opt.label}` : opt.label,
        onClick: () => onChange?.(opt.value),
        children: opt.parent ? `${opt.parent} / ${opt.label}` : opt.label
      },
      opt.value
    )) })
  ] });
}
function TreeSelect({ treeData = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }) {
  const ref = useRef(null);
  useFormBinding(ref, "tree-select", [treeData.length]);
  const Node = ({ node, depth = 0 }) => /* @__PURE__ */ jsxs("li", { className: "mimicus-tree-select__node", "data-mimicus-tree-node": true, "data-value": node.value, "data-label": node.title, style: { paddingLeft: `${depth * 0.75}rem` }, children: [
    node.children?.length ? /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-tree-select__toggle", "data-mimicus-tree-toggle": true, children: "\u25B8" }) : /* @__PURE__ */ jsx("span", { className: "mimicus-tree-select__spacer" }),
    /* @__PURE__ */ jsx("span", { className: "mimicus-tree-select__label", children: node.title }),
    node.children?.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mimicus-tree-select__children", "data-mimicus-tree-children": true, hidden: true, children: node.children.map((c) => /* @__PURE__ */ jsx(Node, { node: c, depth: depth + 1 }, c.value ?? c.title)) })
  ] });
  return /* @__PURE__ */ jsxs("div", { ref, className: cx("mimicus-tree-select", disabled && "is-disabled", className), style, "data-value": value, "data-mimicus-form": "tree-select", children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "mimicus-tree-select__trigger", "data-mimicus-tree-trigger": true, disabled, children: placeholder }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-tree-select__panel", "data-mimicus-tree-panel": true, hidden: true, children: /* @__PURE__ */ jsx("ul", { className: "mimicus-tree-select__tree", children: treeData.map((n) => /* @__PURE__ */ jsx(Node, { node: n }, n.value ?? n.title)) }) })
  ] });
}
function Mentions({ options = [], value, defaultValue, onChange, rows = 3, placeholder, disabled, className, style, ...rest }) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "mentions", [options.length]);
  return /* @__PURE__ */ jsxs("div", { ref, className: cx("mimicus-mentions", disabled && "is-disabled", className), style, "data-mimicus-form": "mentions", children: [
    /* @__PURE__ */ jsx(TextArea, { ...rest, rows, value: val, onChange: set, placeholder: placeholder ?? "Escribe @ para mencionar", disabled }),
    /* @__PURE__ */ jsx("div", { className: "mimicus-mentions__panel", "data-mimicus-mentions-panel": true, hidden: true, children: options.map((opt) => /* @__PURE__ */ jsxs("button", { type: "button", className: "mimicus-mentions__option", "data-mimicus-mentions-option": true, "data-value": opt.value ?? opt, children: [
      "@",
      opt.label ?? opt
    ] }, opt.value ?? opt)) })
  ] });
}
export {
  AutoComplete,
  Cascader,
  Checkbox,
  CheckboxChip,
  CheckboxIcon,
  ColorPicker,
  DatePicker,
  Form,
  FormItem,
  Input,
  InputNumber,
  LabeledSwitch,
  Mentions,
  Radio,
  RadioGroup,
  Rate,
  Rating,
  Select,
  Slider,
  Switch,
  TextArea,
  TextField,
  TimePicker,
  ToggleButton,
  ToggleButtonGroup,
  Transfer,
  TransferBoard,
  TransferList,
  TreeSelect,
  Upload,
  mountForms
};
