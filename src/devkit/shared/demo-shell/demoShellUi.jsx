/**
 * demoShellUi — devkit
 * llm:  ./demoShellUi.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/demo-shell/demoShellUi.jsx
 * UI del shell de un demo: DemoController, renderer de campos de config y AccordionDemo.
 */
import { Button, CodeBlock, Switch, Input, Select, InputNumber } from "../../_ui.js";
import { useMemo, useState } from "react";
import { buildTag, colorOptions, columnsConfig, iconEnum, mergeStyleString, optionsToItems, parseStyleString, stepCssLength } from "../playgroundKit.js";
import { Icon } from "../../../components/Icon.jsx";
import { ReviewStatusDot } from "../../catalog/catalogUi.jsx";

export class DemoController {
  componentName = "Component";
  componentPath;
  previewScale;
  previewStyle;

  initialState() { return {}; }
  initialDetails() { return {}; }
  initialDemoConfig() { return {}; }
  fields() { return []; }
  detailFields() { return []; }
  demoConfigFields() { return []; }
  presets() { return []; }
  tagOpts() { return {}; }

  buildCode(state, details = {}, demoStyle = "", demoClass = "", demoConfig = {}) {
    const attrs = [...this.collectAttrs(state), ...this.extraAttrs(state, details), ...this.styleClassAttrs(demoStyle, demoClass)];
    return buildTag(this.componentName, attrs, this.tagOpts(state, details), this.buildBody ? (h) => this.buildBody(state, details, h) : undefined);
  }

  extraAttrs() { return []; }

  reset() {
    return { state: this.initialState(), details: this.initialDetails(), demoConfig: this.initialDemoConfig() };
  }

  previewKey(state, details = {}, demoStyle = "", demoClass = "", extras = [], demoConfig = {}) {
    return [JSON.stringify(state), JSON.stringify(details), JSON.stringify(demoConfig), demoStyle, demoClass, ...extras.map((e) => String(e ?? ""))].join("|");
  }

  styleClassAttrs(demoStyle, demoClass) {
    return [
      { name: "style", value: demoStyle || null, type: "str", default: null },
      { name: "className", value: demoClass || null, type: "str", default: null },
    ];
  }

  collectAttrs(state) {
    const attrs = [];
    for (const f of this.fields()) this.collectFieldAttrs(state, f, attrs);
    return attrs;
  }

  collectFieldAttrs(state, f, attrs) {
    if (f.kind === "icon-text") return;
    if (f.kind === "select-enum-row") {
      for (const sub of f.selects) this.collectFieldAttrs(state, sub, attrs);
      return;
    }
    if (f.kind === "switch-group") {
      for (const sw of f.switches) {
        if (sw.attrOmit) continue;
        const raw = state[sw.key];
        const value = sw.attrEmit ? sw.attrEmit(raw) : raw;
        attrs.push({ name: sw.attrName ?? String(sw.key), value, type: sw.attrType ?? "bool", default: sw.attrDefault });
      }
      return;
    }
    if (f.attrOmit) return;
    const raw = state[f.key];
    const value = f.attrEmit ? f.attrEmit(raw) : raw;
    attrs.push({ name: f.attrName ?? String(f.key), value, type: f.attrType, default: f.attrDefault });
  }
}

export function ConfigCard({ children, className }) {
  return <div className={["pg-demo-config-card", "card-root", className].filter(Boolean).join(" ")}>{children}</div>;
}

export function InputDecorated({ label, icon, asTitle, children, className }) {
  const Tag = asTitle ? "h3" : "label";
  return (
    <div className={["pg-input-decorated", asTitle && "pg-input-decorated--title", className].filter(Boolean).join(" ")}>
      {(label || icon) && (
        <Tag className="pg-input-decorated__label">
          {icon && <span className="pg-input-decorated__icon" aria-hidden><iconify-icon icon={icon} /></span>}
          {label}
        </Tag>
      )}
      <div className="pg-input-decorated__body">{children}</div>
    </div>
  );
}

export function PaletteGrid({ label, labelIcon, value, onValueChange, options, name, columns, accent = "primary", layout = "chips", getIcon }) {
  const items = optionsToItems(options);
  const cols = typeof columns === "number" ? columns : columnsConfig(items.length);
  const groupName = name || `pg-palette-${label}`;

  if (layout === "chips") {
    return (
      <InputDecorated label={label} icon={labelIcon}>
        <div className="pg-palette-chips" style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {items.map(([lbl, val]) => {
            const selected = String(value ?? "") === String(val ?? "");
            const icon = getIcon ? getIcon(val) : undefined;
            return (
              <Button key={`${groupName}-${String(val)}`} type="button" variant={selected ? "soft" : "text"} color={accent === "semantic" && val ? val : "primary"} shape="pill" onClick={() => onValueChange?.(val === "" ? undefined : val)} style={{ fontSize: "0.78rem" }}>
                {icon && <Icon icon={icon} />}
                {lbl || String(val ?? "Ninguno")}
              </Button>
            );
          })}
        </div>
      </InputDecorated>
    );
  }

  return (
    <InputDecorated label={label} icon={labelIcon}>
      <div className="pg-palette-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: "0.35rem", width: "100%" }}>
        {items.map(([lbl, val]) => {
          const selected = String(value ?? "") === String(val ?? "");
          return (
            <label key={`${groupName}-${String(val)}`} className="pg-palette-grid__item" style={{ display: "flex", alignItems: "center", gap: "0.35rem", cursor: "pointer" }}>
              <input type="radio" name={groupName} checked={selected} onChange={() => onValueChange?.(val === "" ? undefined : val)} />
              <span>{lbl || String(val ?? "Ninguno")}</span>
            </label>
          );
        })}
      </div>
    </InputDecorated>
  );
}

function orderFields(arr) {
  const states = [];
  const rest = [];
  for (const f of arr) {
    if (f.kind === "switch" || f.kind === "switch-group") states.push(f);
    else rest.push(f);
  }
  return [...states, ...rest];
}

function fieldId(f) {
  if (f.kind === "switch-group" || f.kind === "icon-text") return `${f.kind}-${f.key}`;
  return `${f.kind}-${String(f.key)}`;
}

function withNoneOption(options) {
  const items = optionsToItems(options);
  const hasNone = items.some(([, v]) => v === "" || v == null);
  const mapped = items.map(([label, value]) => ({ label, value }));
  return hasNone ? mapped : [{ label: "", value: "" }, ...mapped];
}

function SwitchRow({ checked, label, onChange }) {
  return <Switch className="pg-switch-row" size="small" checked={!!checked} onChange={(v) => onChange?.(v)}>{label}</Switch>;
}

function ConfigRangeField({ value, min = 0, max = 100, step = 1, onChange }) {
  const num = Number(value ?? min);
  const pct = max === min ? 0 : ((num - min) / (max - min)) * 100;
  const handle = (e) => onChange(Number(e.target.value));
  return (
    <div className="mimicus-slider pg-config-range" style={{ width: "100%" }}>
      <div className="mimicus-slider__rail"><div className="mimicus-slider__fill" style={{ width: `${pct}%` }} /></div>
      <input type="range" className="mimicus-slider__input" min={min} max={max} step={step} value={num} onInput={handle} onChange={handle} />
      <span className="mimicus-slider__value">{num}</span>
    </div>
  );
}

function IconTextField({ field, state, patchState }) {
  const iconVal = state[field.iconKey] ?? "";
  const textVal = state[field.textKey] ?? "";
  return (
    <InputDecorated label={field.label} icon={field.labelIcon}>
      <div style={{ display: "grid", gap: "0.6rem" }}>
        <label style={{ display: "grid", gap: "0.3rem" }}>
          <span style={{ fontSize: "0.8rem", opacity: 0.85 }}>Ícono</span>
          <Select
            value={String(iconVal)}
            onChange={(v) => patchState(String(field.iconKey), v)}
            options={Object.entries(iconEnum).map(([k, lbl]) => ({ value: k, label: lbl }))}
          />
        </label>
        <label style={{ display: "grid", gap: "0.3rem" }}>
          <span style={{ fontSize: "0.8rem", opacity: 0.85 }}>Texto</span>
          <Input value={String(textVal)} onChange={(v) => patchState(String(field.textKey), v)} prefix={iconVal ? <Icon icon={String(iconVal)} /> : undefined} />
        </label>
      </div>
    </InputDecorated>
  );
}

function ConfigCodeField({ value = "", onChange, placeholder, mode, lang, minHeight = "4.5rem", maxHeight = "8.5rem" }) {
  return (
    <div className="code-edit-field">
      <CodeBlock
        className="code-edit-field__preview pg-demo-config-code"
        value={value}
        onChange={onChange}
        readOnly={false}
        mode={mode}
        lang={lang}
        placeholder={placeholder}
        minHeight={minHeight}
        maxHeight={maxHeight}
        lineNumbers={false}
        lineWrapping
      />
    </div>
  );
}

export function DemoConfigRenderer({ fields, state, onStateChange }) {
  const typedFields = orderFields(fields ?? []);

  function patchState(key, value) {
    const normalized = value === undefined || value === "" ? null : value;
    onStateChange?.({ ...state, [key]: normalized });
  }

  return typedFields.map((field) => {
    const key = fieldId(field);
    const wrap = (node) => <ConfigCard key={key}>{node}</ConfigCard>;

    if (field.kind === "palette") {
      const opts = field.layout === "sideCross" || field.layout === "chips" ? field.options : withNoneOption(field.options);
      return wrap(<PaletteGrid label={field.label} labelIcon={field.labelIcon} value={state[field.key]} onValueChange={(v) => patchState(String(field.key), v)} options={opts} name={field.name ?? `pg-${String(field.key)}`} columns={field.columns} accent={field.accent ?? "primary"} layout={field.layout ?? "chips"} getIcon={field.getIcon} />);
    }

    if (field.kind === "color") {
      return wrap(<PaletteGrid label={field.label} labelIcon={field.labelIcon} value={state[field.key]} onValueChange={(v) => patchState(String(field.key), v)} options={colorOptions} name={`pg-color-${String(field.key)}`} layout="chips" />);
    }

    if (field.kind === "switch") {
      return wrap(<InputDecorated label={field.label} icon={field.labelIcon ?? "mdi:tune"}><SwitchRow checked={state[field.key]} label={field.label} onChange={(v) => patchState(String(field.key), v)} /></InputDecorated>);
    }

    if (field.kind === "switch-group") {
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {field.switches.map((sw) => <SwitchRow key={String(sw.key)} checked={state[sw.key]} label={sw.label} onChange={(v) => patchState(String(sw.key), v)} />)}
          </div>
        </InputDecorated>,
      );
    }

    if (field.kind === "text") {
      if (field.normalize) {
        const fkey = String(field.key);
        const normalize = field.normalize;
        return wrap(
          <InputDecorated label={field.label} icon={field.labelIcon}>
            <Input
              className="input-decorated-number"
              placeholder={field.placeholder}
              value={String(state[fkey] ?? "")}
              onChange={(v) => patchState(fkey, v === "" ? undefined : v)}
              onBlur={(e) => { const next = normalize(e.target.value); patchState(fkey, next === "" ? undefined : next); }}
              onKeyDown={(e) => {
                if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
                e.preventDefault();
                const next = stepCssLength(e.currentTarget.value, e.key === "ArrowUp" ? 0.5 : -0.5);
                patchState(fkey, next === "" ? undefined : next);
              }}
            />
          </InputDecorated>,
        );
      }
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon}>
          <Input placeholder={field.placeholder} value={String(state[field.key] ?? "")} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "range") {
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon}>
          <ConfigRangeField value={state[field.key]} min={field.min} max={field.max} step={field.step} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "number") {
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon}>
          <InputNumber min={field.min} max={field.max} step={field.step} value={Number(state[field.key] ?? 0)} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "select-enum") {
      const entries = Object.entries(field.enumValue ?? {});
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon}>
          <Select value={String(state[field.key] ?? "")} onChange={(v) => patchState(String(field.key), v)}
            options={entries.map(([k, v]) => ({ value: String(v), label: k }))} />
        </InputDecorated>,
      );
    }

    if (field.kind === "code") {
      const fkey = String(field.key);
      const mode = field.lang === "css" ? "css" : field.mode ?? (field.lang === "html" ? undefined : field.lang);
      return wrap(
        <InputDecorated label={field.label} icon={field.labelIcon ?? "mdi:code-braces"}>
          <ConfigCodeField
            value={String(state[fkey] ?? "")}
            onChange={(v) => patchState(fkey, v)}
            placeholder={field.placeholder}
            mode={mode}
            lang={field.lang}
            minHeight={field.minHeight ?? "6rem"}
            maxHeight={field.maxHeight ?? "16rem"}
          />
        </InputDecorated>,
      );
    }

    if (field.kind === "icon-text") {
      return wrap(<IconTextField field={field} state={state} patchState={patchState} />);
    }

    return wrap(<p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.75 }}>Campo «{field.kind}» aún no soportado en React playground.</p>);
  });
}

export function ApiTable({ adapter }) {
  const rows = [];
  const pushField = (f) => {
    if (!f || f.kind === "icon-text") return;
    if (f.kind === "switch-group") {
      for (const sw of f.switches ?? []) rows.push({ name: sw.attrName ?? sw.key, desc: sw.label, type: sw.attrType ?? "boolean", def: sw.attrDefault ?? "false" });
      return;
    }
    if (f.kind === "select-enum-row") {
      for (const sub of f.selects ?? []) pushField(sub);
      return;
    }
    rows.push({ name: f.attrName ?? f.key, desc: f.label, type: f.attrType ?? f.kind, def: f.attrDefault ?? "—" });
  };
  for (const f of [...(adapter?.fields?.() ?? []), ...(adapter?.detailFields?.() ?? []), ...(adapter?.demoConfigFields?.() ?? [])]) pushField(f);
  if (!rows.length) return null;
  return (
    <div className="pg-api-table-wrap">
      <table className="pg-api-table">
        <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={String(r.name)}>
              <td><code className="pg-api-table__prop">{String(r.name)}</code></td>
              <td>{r.desc ?? "—"}</td>
              <td><code className="pg-api-table__type">{String(r.type)}</code></td>
              <td><code className="pg-api-table__default">{String(r.def)}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AccordionDemo({
  adapter, title, titleIcon, reviewStatus, flat = false, relieve, className, previewScale, previewStyle, demoId, configBlockCount = 3,
  state: stateProp, details: detailsProp, demoConfig: demoConfigProp, demoStyle: demoStyleProp, demoClass: demoClassProp,
  onStateChange, onDetailsChange, onDemoConfigChange, onDemoStyleChange, onDemoClassChange, intro, preview, configExtra,
}) {
  const [showCode, setShowCode] = useState(false);
  const [previewResetKey, setPreviewResetKey] = useState(0);

  const state = stateProp ?? adapter?.initialState?.() ?? {};
  const details = detailsProp ?? adapter?.initialDetails?.() ?? {};
  const demoConfig = demoConfigProp ?? adapter?.initialDemoConfig?.() ?? {};
  const demoStyle = demoStyleProp ?? "";
  const demoClass = demoClassProp ?? "";

  const finalTitle = title ?? adapter?.componentName ?? "Demo";
  const finalCodeStr = adapter ? adapter.buildCode(state, details, demoStyle, demoClass, demoConfig) : undefined;
  const previewKey = adapter ? `${previewResetKey}|${adapter.previewKey(state, details, demoStyle, demoClass, [], demoConfig)}` : String(previewResetKey);
  const finalPreviewScale = previewScale ?? adapter?.previewScale ?? 1;
  const finalPreviewStyle = previewStyle ?? adapter?.previewStyle ?? "";

  const configFields = adapter?.fields?.() ?? [];
  const detailFields = adapter?.detailFields?.() ?? [];
  const demoConfigFields = adapter?.demoConfigFields?.() ?? [];
  const configCols = columnsConfig(configBlockCount + configFields.length + detailFields.length);

  function handleReset() {
    if (!adapter) return;
    onStateChange?.(adapter.initialState());
    onDetailsChange?.(adapter.initialDetails());
    onDemoConfigChange?.(adapter.initialDemoConfig());
    onDemoStyleChange?.("");
    onDemoClassChange?.("");
    setPreviewResetKey((k) => k + 1);
  }

  const previewStageStyle = useMemo(() => parseStyleString(mergeStyleString("transform-origin: center center", finalPreviewStyle)), [finalPreviewStyle]);
  const scaleStyle = finalPreviewScale && finalPreviewScale !== 1 ? { transform: `scale(${finalPreviewScale})` } : undefined;
  const hasApi = [...configFields, ...detailFields, ...demoConfigFields].length > 0;

  return (
    <article className={["pg-demo-doc", "pg-vt-demo-morph", className].filter(Boolean).join(" ")}>
      <header className="pg-demo-doc__hero">
        <div className="pg-demo-doc__title-row">
          {titleIcon && <Icon icon={titleIcon} className="pg-demo-doc__icon" />}
          <h1 className="pg-demo-doc__title">{finalTitle}</h1>
          {reviewStatus && <ReviewStatusDot status={reviewStatus} size="0.62rem" />}
        </div>
        {intro && <div className="pg-demo-doc__intro intro" dangerouslySetInnerHTML={{ __html: intro }} />}
      </header>

      {preview && (
        <section className="pg-demo-doc__section" aria-labelledby={`${demoId ?? finalTitle}-examples`}>
          <h2 className="pg-demo-doc__section-title" id={`${demoId ?? finalTitle}-examples`}>Examples</h2>
          <div className="pg-demo-example">
            <div className="pg-demo-example__preview preview-frame pg-vt-preview">
              <div className="preview-viewport">
                <div className="preview-scale-track">
                  <div className="preview-stage" style={{ ...previewStageStyle, ...scaleStyle }} data-preview-key={previewKey}>
                    {preview({ state, details, demoConfig, previewKey, demoStyle, demoClass })}
                  </div>
                </div>
              </div>
            </div>
            {finalCodeStr && (
              <div className="pg-demo-example__toolbar">
                <Button type="button" variant="text" color="primary" onClick={() => setShowCode((v) => !v)}>
                  <Icon icon={showCode ? "mdi:chevron-up" : "mdi:code-tags"} />
                  {showCode ? "Ocultar código" : "Ver código"}
                </Button>
                <Button type="button" variant="text" color="neutral" onClick={() => { try { navigator.clipboard?.writeText(finalCodeStr); } catch { /* ignore */ } }}>
                  <Icon icon="mdi:content-copy" />
                  Copiar
                </Button>
              </div>
            )}
            {finalCodeStr && showCode && (
              <CodeBlock value={finalCodeStr} readOnly lang="jsx" minHeight="7rem" maxHeight="22rem" lineWrapping className="pg-demo-example__code" />
            )}
          </div>
        </section>
      )}

      {hasApi && (
        <section className="pg-demo-doc__section" aria-labelledby={`${demoId ?? finalTitle}-api`}>
          <h2 className="pg-demo-doc__section-title" id={`${demoId ?? finalTitle}-api`}>API</h2>
          <ApiTable adapter={adapter} />
        </section>
      )}

      {adapter && (
        <section className="pg-demo-doc__section pg-demo-doc__section--playground" aria-labelledby={`${demoId ?? finalTitle}-playground`}>
          <h2 className="pg-demo-doc__section-title" id={`${demoId ?? finalTitle}-playground`}>Playground</h2>
          <ConfigCard className="pg-demo-config-section demo-config-shell">
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${configCols}, minmax(0, 1fr))`, gap: "0.75rem", width: "100%" }}>
              <ConfigCard>
                <InputDecorated label="style" icon="mdi:palette-swatch-outline">
                  <ConfigCodeField value={demoStyle} onChange={(v) => onDemoStyleChange?.(v)} placeholder="inline style" mode="css" minHeight="4.5rem" maxHeight="8.5rem" />
                </InputDecorated>
              </ConfigCard>
              <ConfigCard>
                <InputDecorated label="className" icon="mdi:code-braces">
                  <ConfigCodeField value={demoClass} onChange={(v) => onDemoClassChange?.(v)} placeholder="clases CSS" minHeight="4.5rem" maxHeight="8.5rem" />
                </InputDecorated>
              </ConfigCard>
              <DemoConfigRenderer fields={configFields} state={state} onStateChange={onStateChange} />
              {detailFields.length > 0 && <DemoConfigRenderer fields={detailFields} state={details} onStateChange={onDetailsChange} />}
              {configExtra}
            </div>
            {demoConfigFields.length > 0 && (
              <div style={{ marginTop: "0.85rem" }}>
                <InputDecorated asTitle label="Config de demo" icon="mdi:television-play">
                  <DemoConfigRenderer fields={demoConfigFields} state={demoConfig} onStateChange={onDemoConfigChange} />
                </InputDecorated>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "0.75rem" }}>
              <Button type="button" variant="soft" color="primary" onClick={handleReset}>
                <Icon icon="mdi:refresh" />
                Reiniciar valores
              </Button>
            </div>
          </ConfigCard>
        </section>
      )}
    </article>
  );
}
