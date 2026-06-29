// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * demoShellUi — devkit
 * llm:  ./demoShellUi.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/demo-shell/demoShellUi.tsx
 * UI del shell de un demo: DemoController, renderer de campos de config y AccordionDemo.
 */
import { Button, CodeBlock, Switch, Input, InputNumber, Slider, Modal } from "../../_ui.ts";
import { useMemo, useState } from "react";
import { buildTag, colorOptions, columnsConfig, iconEnum, mergeStyleString, optionsToItems, parseStyleString, stepCssLength, defaultOptionIcon, NONE_ICON, COLOR_ICONS } from "../playgroundKit.ts";
import { Icon } from "../../../components/Icon.tsx";

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

export function ConfigCard({ children, className, variant = "field" }) {
  const isSection = variant === "section";
  return (
    <div
      className={[
        isSection ? "pg-demo-config-section demo-config-shell" : "pg-demo-config-card",
        "card-root",
        className,
      ].filter(Boolean).join(" ")}
      data-variant={isSection ? "glass" : "flat"}
      data-pg-config={variant}
    >
      {children}
    </div>
  );
}

export function InputDecorated({ label, icon, asTitle, info, infoTitle, children, className, rowBetween }) {
  const Tag = asTitle ? "h3" : rowBetween ? "div" : "label";
  const [open, setOpen] = useState(false);
  const hasInfo = Boolean(info && String(info).trim());
  const modalTitle = useMemo(() => (
    <span className="pg-input-decorated__info-title">
      {icon && <Icon icon={icon} />}
      <span>{infoTitle || label}</span>
    </span>
  ), [icon, infoTitle, label]);
  return (
    <div className={["pg-input-decorated", asTitle && "pg-input-decorated--title", rowBetween && "pg-input-decorated--row-between", className].filter(Boolean).join(" ")}>
      {(label || icon || hasInfo) && (
        <Tag className="pg-input-decorated__label">
          {icon && <span className="pg-input-decorated__icon" aria-hidden><iconify-icon icon={icon} /></span>}
          <span className="pg-input-decorated__label-text">{label}</span>
          {hasInfo && (
            <button
              type="button"
              className="pg-input-decorated__info"
              aria-label={`Más información sobre ${label || "esta sección"}`}
              title={`Más información sobre ${label || "esta sección"}`}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
            >
              <iconify-icon icon="mdi:information-outline" />
            </button>
          )}
        </Tag>
      )}
      <div className="pg-input-decorated__body">{children}</div>
      {hasInfo && (
        <Modal open={open} onClose={() => setOpen(false)} title={modalTitle} variant="solid" showCloseHeader>
          <div className="pg-input-decorated__info-body" dangerouslySetInnerHTML={{ __html: String(info) }} />
        </Modal>
      )}
    </div>
  );
}

const SIDE_CROSS_SLOTS = [null, "top", null, "left", "", "right", null, "bottom", null];

function paletteOptionIcon(val, getIcon) {
  const isNone = val === "" || val == null;
  if (isNone) return NONE_ICON;
  return getIcon ? getIcon(val) : undefined;
}

function PaletteOptionButton({ lbl, val, selected, accent, getIcon, showLabel, onPick, shape = "pill", align = "center" }) {
  const isNone = val === "" || val == null;
  const icon = paletteOptionIcon(val, getIcon);
  const title = isNone ? "Ninguno" : (lbl || String(val ?? "Ninguno"));
  const color = accent === "semantic" && val ? val : "primary";
  return (
    <Button type="button" variant={selected ? "soft" : "text"} color={color} shape={shape} block onClick={() => onPick?.(isNone ? undefined : val)} title={title} style={{ justifyContent: align === "start" ? "flex-start" : "center", paddingBlock: "0.2em", paddingInline: showLabel && !isNone ? "0.65em" : "0.4em", minHeight: "1.85em", gap: "0.45em", minWidth: 0, textAlign: align === "start" ? "left" : "center" }}>
      {icon && <Icon icon={icon} />}
      {showLabel && !isNone && (lbl || val) != null && String(lbl || val) !== "" && <span>{lbl || String(val ?? "Ninguno")}</span>}
    </Button>
  );
}

export function PaletteGrid({ label, labelIcon, value, onValueChange, options, name, columns, accent = "primary", layout = "chips", getIcon, chipShape, chipAlign }) {
  const items = optionsToItems(options);
  const cols = typeof columns === "number" ? columns : columnsConfig(items.length);
  const groupName = name || `pg-palette-${label}`;
  const isChips = layout === "chips";
  const shape = chipShape ?? (isChips ? "rect" : "pill");
  const align = chipAlign ?? (isChips ? "start" : "center");

  function pick(val) {
    onValueChange?.(val === "" || val == null ? undefined : val);
  }

  function renderOption(lbl, val, showLabel) {
    const selected = String(value ?? "") === String(val ?? "");
    return <PaletteOptionButton key={`${groupName}-${String(val)}`} lbl={lbl} val={val} selected={selected} accent={accent} getIcon={getIcon} showLabel={showLabel} onPick={pick} shape={shape} align={align} />;
  }

  if (layout === "sideCross") {
    const byVal = Object.fromEntries(items.map(([lbl, val]) => [String(val ?? ""), [lbl, val]]));
    return (
      <div className="pg-palette-grid pg-palette-grid--side-cross" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.35em", width: "100%" }}>
        {SIDE_CROSS_SLOTS.map((slotVal, idx) => {
          if (slotVal === null) return <span key={`side-cross-empty-${idx}`} className="pg-palette-grid__spatial-cell pg-palette-grid__spatial-cell--empty" aria-hidden />;
          const pair = byVal[String(slotVal ?? "")];
          if (!pair) return <span key={`side-cross-miss-${idx}`} className="pg-palette-grid__spatial-cell pg-palette-grid__spatial-cell--empty" aria-hidden />;
          const [lbl, val] = pair;
          return <div key={`side-cross-${String(val)}`} className="pg-palette-grid__spatial-cell">{renderOption(lbl, val, true)}</div>;
        })}
      </div>
    );
  }

  if (layout === "chips") {
    return (
      <div className="pg-palette-chips pg-palette-chips--list" style={{ display: "flex", flexDirection: "column", gap: "0.35em", width: "100%" }}>
        {items.map(([lbl, val]) => renderOption(lbl, val, true))}
      </div>
    );
  }

  return (
    <div className="pg-palette-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: "0.35em", width: "100%" }}>
      {items.map(([lbl, val]) => renderOption(lbl, val, true))}
    </div>
  );
}

function fieldInfoKey(field) {
  return String(field?.key || field?.attrName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function fieldInfo(field) {
  if (field.info) return { title: field.infoTitle || field.label, body: field.info };
  const key = fieldInfoKey(field);
  const kind = String(field.kind || "");
  const map = {
    variant: { title: "Variante visual", body: "Cambia el aspecto del componente: <code>solid</code> (fondo lleno), <code>outlined</code> (sólo borde), <code>text</code> (sin fondo, transparente), <code>ghost</code> (vidrio translúcido), <code>soft</code> (tinte accent al 15%), <code>dashed</code> (borde discontinuo) y <code>glass</code> (efecto glass con backdrop-filter)." },
    shape: { title: "Forma del borde", body: "Define el radio del borde: <code>round</code> (esquinas redondeadas suaves), <code>rect</code> (recto, 0px), <code>pill</code> (cápsula, radio total) y <code>circle</code> (círculo perfecto cuando el contenido es sólo un icono)." },
    size: { title: "Tamaño", body: "Escala interna del componente. En Mimicus UI el tamaño es contextual: depende del <code>font-size</code> del contenedor (unidades <code>em</code>)." },
    color: { title: "Color de acento", body: "Color semántico que tintará el componente. Puede ser un color del sistema (<code>primary</code>, <code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>, <code>neutral</code>) o un valor custom." },
    icon: { title: "Ícono", body: "Ícono Iconify que se mostrará. Escribe el nombre (<code>mdi:check</code>) o elige uno de las opciones." },
    iconplacement: { title: "Posición del ícono", body: "Define si el ícono aparece al inicio (<code>start</code>) o al final (<code>end</code>) del texto." },
    htmltype: { title: "Tipo HTML", body: "Atributo <code>type</code> nativo del botón: <code>button</code>, <code>submit</code> o <code>reset</code>." },
    block: { title: "block", body: "Hace que el componente ocupe todo el ancho disponible." },
    danger: { title: "danger", body: "Aplica el color semántico <code>danger</code> (rojo), típicamente para acciones destructivas." },
    ghost: { title: "ghost", body: "Fondo translúcido (vidrio) en hover/active; en idle se ve como <code>outlined</code>." },
    dashed: { title: "dashed", body: "Borde discontinuo en lugar de sólido." },
    disabled: { title: "disabled", body: "Deshabilita la interacción y aplica opacidad reducida." },
    loading: { title: "loading", body: "Muestra un indicador de progreso y bloquea clicks mientras dura la operación." },
    placement: { title: "Ubicación del panel", body: "Lado desde el que aparece el panel deslizante: <code>left</code>, <code>right</code>, <code>top</code> o <code>bottom</code>." },
    side: { title: "Lado del flotante", body: "Posición relativa al elemento ancla: <code>top</code>, <code>bottom</code>, <code>left</code> o <code>right</code>." },
    width: { title: "Ancho del panel", body: "Ancho en píxeles cuando el panel entra por los lados (<code>left</code> / <code>right</code>). No aplica en orientación vertical." },
    height: { title: "Alto del panel", body: "Alto en píxeles cuando el panel entra por arriba o abajo (<code>top</code> / <code>bottom</code>)." },
    defaultopen: { title: "Abierto por defecto", body: "Si es <code>true</code>, el panel o overlay inicia visible sin interacción del usuario." },
    open: { title: "Abierto", body: "Controla si el overlay o panel está visible (modo controlado)." },
    align: { title: "Alineación", body: "Alineación respecto al ancla: <code>start</code> (inicio), <code>center</code> (centro) o <code>end</code> (final)." },
    trigger: { title: "Disparador", body: "Evento que abre el flotante: <code>click</code>, <code>hover</code> o <code>focus</code>." },
    inline: { title: "Inline", body: "Si es <code>true</code>, el componente se renderiza en línea sin portal ni overlay flotante." },
    arrow: { title: "Flecha", body: "Muestra u oculta la punta/flecha que apunta al elemento ancla." },
    title: { title: "Título", body: "Texto del encabezado del panel, modal o alerta." },
    severity: { title: "Severidad", body: "Nivel semántico del mensaje: <code>info</code>, <code>success</code>, <code>warning</code> o <code>error</code>." },
    dismissible: { title: "Cerrable", body: "Permite al usuario cerrar manualmente el componente (botón × o similar)." },
    showfloat: { title: "Mostrar flotante", body: "Controla la visibilidad del panel flotante asociado al hover o focus." },
    scope: { title: "Ámbito", body: "Define dónde se monta el overlay: <code>local</code> (contenedor) o <code>global</code> (documento)." },
    orientation: { title: "Orientación", body: "Dirección del layout interno: <code>horizontal</code> o <code>vertical</code>." },
    direction: { title: "Dirección", body: "Sentido de lectura o flujo visual: <code>ltr</code> o <code>rtl</code>." },
    value: { title: "Valor", body: "Valor actual del control (modo controlado)." },
    multiline: { title: "Multilínea", body: "Permite varias líneas de texto en lugar de una sola." },
    readonly: { title: "Sólo lectura", body: "Muestra el valor pero impide editarlo." },
    required: { title: "Requerido", body: "Marca el campo como obligatorio para envío de formulario." },
    placeholder: { title: "Placeholder", body: "Texto de ayuda que aparece cuando el campo está vacío." },
    maxlength: { title: "Longitud máxima", body: "Número máximo de caracteres permitidos." },
    fullwidth: { title: "Ancho completo", body: "El control ocupa el 100% del ancho del contenedor padre." },
    elevation: { title: "Elevación", body: "Nivel de sombra/depth del componente (típicamente 0–24 en estilo Material)." },
    bordered: { title: "Con borde", body: "Dibuja un borde visible alrededor del componente." },
    sticky: { title: "Sticky", body: "Mantiene el elemento fijo al hacer scroll dentro de su contenedor." },
    collapsible: { title: "Colapsable", body: "Permite expandir y contraer la sección con un control interactivo." },
    defaultexpanded: { title: "Expandido por defecto", body: "Si es <code>true</code>, la sección inicia abierta." },
    delay: { title: "Retardo", body: "Milisegundos de espera antes de mostrar u ocultar el flotante." },
    offset: { title: "Desplazamiento", body: "Distancia en píxeles entre el ancla y el panel flotante." },
    zindex: { title: "z-index", body: "Capa de apilamiento CSS del overlay respecto a otros elementos." },
    backdrop: { title: "Backdrop", body: "Capa semitransparente detrás del overlay; suele cerrar al hacer clic." },
    modal: { title: "Modal", body: "Si es <code>true</code>, bloquea la interacción con el resto de la página mientras está abierto." },
    persistent: { title: "Persistente", body: "Impide cerrar el overlay con clic fuera o Escape." },
    animated: { title: "Animado", body: "Activa transiciones de entrada/salida del componente." },
    rounded: { title: "Redondeado", body: "Aplica esquinas redondeadas al contenedor." },
    dense: { title: "Denso", body: "Reduce padding y altura para mayor densidad visual." },
    nowrap: { title: "Sin salto de línea", body: "Evita que el texto haga wrap en una sola línea." },
    truncate: { title: "Truncar", body: "Recorta el texto largo con puntos suspensivos (<code>…</code>)." },
    href: { title: "Enlace", body: "URL de destino cuando el componente actúa como enlace." },
    target: { title: "Target", body: "Destino del enlace: <code>_blank</code>, <code>_self</code>, etc." },
    type: { title: "Tipo", body: "Variante o tipo semántico del componente según su API." },
    label: { title: "Etiqueta", body: "Texto visible asociado al control o acción." },
    name: { title: "Nombre", body: "Identificador del campo en formularios (<code>name</code> HTML)." },
    id: { title: "ID", body: "Identificador único del elemento en el DOM." },
    classname: { title: "className", body: "Clases CSS adicionales aplicadas al elemento raíz." },
    style: { title: "style", body: "Estilos inline adicionales en el elemento raíz." },
  };
  if (map[key]) return map[key];
  if (kind === "switch") return { title: field.label, body: `Interruptor booleano. Cuando está <code>true</code> activa el flag <code>${field.key}</code>.` };
  if (kind === "switch-group") return { title: field.label, body: `Grupo de interruptores booleanos. Cada toggle activa un flag independiente del componente.` };
  if (kind === "palette") return { title: field.label, body: `Selector de paleta. Elige una de las opciones disponibles; el componente adoptará la variante visual correspondiente.` };
  if (kind === "select-enum") return { title: field.label, body: `Selector enumerado. Elige uno de los valores disponibles para <code>${field.key}</code>.` };
  if (kind === "number") return { title: field.label, body: `Valor numérico entre el mínimo y máximo definidos.` };
  if (kind === "range") return { title: field.label, body: `Rango numérico continuo (slider).` };
  if (kind === "text") return { title: field.label, body: `Entrada de texto libre.` };
  if (kind === "color") return { title: field.label, body: `Selector de color. Acepta cualquier valor CSS (hex, rgb, hsl, oklch, named).` };
  if (kind === "code") return { title: field.label, body: `Editor de código inline. Útil para estilos CSS o clases personalizadas.` };
  if (kind === "icon-text") return { title: field.label, body: `Combina un ícono Iconify con un texto libre.` };
  return null;
}

function withInfo(passed) {
  const info = fieldInfo(passed);
  return info ? { ...passed, _info: info.body, _infoTitle: info.title } : passed;
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

function SwitchRow({ checked, label, onChange, iconOn, iconOff, colorOn, colorOff }) {
  return (
    <Switch
      className="pg-switch-row"
      checked={!!checked}
      onChange={(v) => onChange?.(v)}
      iconOn={iconOn ? <Icon icon={iconOn} /> : undefined}
      iconOff={iconOff ? <Icon icon={iconOff ?? iconOn ?? "mdi:circle-outline"} /> : undefined}
      colorOn={colorOn}
      colorOff={colorOff}
    >
      {label}
    </Switch>
  );
}

function ConfigRangeField({ value, min = 0, max = 100, step = 1, onChange }) {
  const num = Number(value ?? min);
  return (
    <Slider className="pg-config-range" min={min} max={max} step={step} value={num} onChange={(v) => onChange(Number(v))} showValue style={{ width: "100%" }} />
  );
}

function IconTextField({ field, state, patchState }) {
  const iconVal = state[field.iconKey] ?? "";
  const textVal = state[field.textKey] ?? "";
  return (
    <InputDecorated label={field.label} icon={field.labelIcon}>
      <div style={{ display: "grid", gap: "0.6em" }}>
        <InputDecorated label="Ícono" icon="mdi:emoticon-outline">
          <div className="pg-field-cluster">
            <PaletteGrid
              value={String(iconVal)}
              onValueChange={(v) => patchState(String(field.iconKey), v)}
              options={Object.entries(iconEnum).map(([val, lbl]) => ({ label: lbl, value: val }))}
              layout="chips"
              getIcon={(v) => (v ? String(v) : undefined)}
            />
          </div>
        </InputDecorated>
        <label className="pg-icon-text-field__text">
          <span className="pg-input-decorated__label">Texto</span>
          <Input value={String(textVal)} onChange={(v) => patchState(String(field.textKey), v)} prefix={iconVal ? <Icon icon={String(iconVal)} /> : undefined} />
        </label>
      </div>
    </InputDecorated>
  );
}

function ConfigCodeField({ value = "", onChange, placeholder, mode, lang, minHeight = "4.5em", maxHeight = "8.5em" }) {
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

  function decorate(field, props = {}) {
    const info = fieldInfo(field);
    return {
      label: field.label,
      icon: props.icon ?? field.labelIcon,
      info: info?.body,
      infoTitle: info?.title,
    };
  }

  return typedFields.map((field) => {
    const key = fieldId(field);
    const wrap = (node) => <ConfigCard key={key}>{node}</ConfigCard>;

    if (field.kind === "palette") {
      const opts = field.layout === "sideCross" || field.layout === "chips" ? field.options : withNoneOption(field.options);
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <div className="pg-field-cluster">
            <PaletteGrid value={state[field.key]} onValueChange={(v) => patchState(String(field.key), v)} options={opts} name={field.name ?? `pg-${String(field.key)}`} columns={field.columns} accent={field.accent ?? "primary"} layout={field.layout ?? "chips"} getIcon={field.getIcon ?? ((v) => defaultOptionIcon(field.key, v))} />
          </div>
        </InputDecorated>,
      );
    }

    if (field.kind === "color") {
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <div className="pg-field-cluster">
            <PaletteGrid value={state[field.key]} onValueChange={(v) => patchState(String(field.key), v)} options={colorOptions} name={`pg-color-${String(field.key)}`} layout="chips" accent="semantic" getIcon={(v) => COLOR_ICONS[String(v)]} />
          </div>
        </InputDecorated>,
      );
    }

    if (field.kind === "switch") {
      const d = decorate(field, { icon: field.labelIcon ?? "mdi:tune" });
      return wrap(
        <InputDecorated rowBetween label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <SwitchRow checked={state[field.key]} onChange={(v) => patchState(String(field.key), v)} iconOn={field.iconOn ?? field.icon ?? "mdi:check"} iconOff={field.iconOff ?? field.icon ?? "mdi:circle-outline"} colorOn={field.colorOn ?? "var(--mimicus-success, #2e9e5a)"} colorOff={field.colorOff ?? "var(--mimicus-color)"} />
        </InputDecorated>,
      );
    }

    if (field.kind === "switch-group") {
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <div className="pg-field-cluster">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(7.5em, 1fr))", gap: "0.35em 0.75em", width: "100%" }}>
              {field.switches.map((sw) => <SwitchRow key={String(sw.key)} checked={state[sw.key]} label={sw.label} onChange={(v) => patchState(String(sw.key), v)} iconOn={sw.iconOn ?? sw.icon ?? "mdi:check"} iconOff={sw.iconOff ?? sw.icon ?? "mdi:circle-outline"} colorOn={sw.colorOn ?? "var(--mimicus-success, #2e9e5a)"} colorOff={sw.colorOff ?? "var(--mimicus-color)"} />)}
            </div>
          </div>
        </InputDecorated>,
      );
    }

    if (field.kind === "text") {
      if (field.normalize) {
        const fkey = String(field.key);
        const normalize = field.normalize;
        const d = decorate(field, { icon: field.labelIcon });
        return wrap(
          <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
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
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <Input placeholder={field.placeholder} value={String(state[field.key] ?? "")} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "range") {
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <ConfigRangeField value={state[field.key]} min={field.min} max={field.max} step={field.step} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "number") {
      const d = decorate(field, { icon: field.labelIcon });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <InputNumber min={field.min} max={field.max} step={field.step} value={Number(state[field.key] ?? 0)} onChange={(v) => patchState(String(field.key), v)} />
        </InputDecorated>,
      );
    }

    if (field.kind === "select-enum") {
      const d = decorate(field, { icon: field.labelIcon });
      const layout = field.layout ?? "chips";
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <div className="pg-field-cluster">
            <PaletteGrid value={state[field.key]} onValueChange={(v) => patchState(String(field.key), v)} options={field.enumValue ?? {}} name={`pg-${String(field.key)}`} layout={layout} accent={field.accent ?? "primary"} getIcon={field.getIcon ?? ((v) => defaultOptionIcon(field.key, v))} />
          </div>
        </InputDecorated>,
      );
    }

    if (field.kind === "code") {
      const fkey = String(field.key);
      const mode = field.lang === "css" ? "css" : field.mode ?? (field.lang === "html" ? undefined : field.lang);
      const d = decorate(field, { icon: field.labelIcon ?? "mdi:code-braces" });
      return wrap(
        <InputDecorated label={d.label} icon={d.icon} info={d.info} infoTitle={d.infoTitle}>
          <ConfigCodeField
            value={String(state[fkey] ?? "")}
            onChange={(v) => patchState(fkey, v)}
            placeholder={field.placeholder}
            mode={mode}
            lang={field.lang}
            minHeight={field.minHeight ?? "6em"}
            maxHeight={field.maxHeight ?? "16em"}
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

function formatApiDefault(value) {
  if (value === undefined) return "—";
  if (value === null) return "null";
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return String(value);
  if (typeof value === "string") return value === "" ? '""' : value;
  try { return JSON.stringify(value); } catch { return String(value); }
}

function resolveApiDefault(field, values, { switchFallback = false } = {}) {
  if (field.attrDefault !== undefined) return field.attrDefault;
  if (field.key != null && Object.prototype.hasOwnProperty.call(values, field.key)) return values[field.key];
  if (switchFallback || field.kind === "switch") return false;
  return undefined;
}

function formatFieldEnumOptions(field) {
  if (!field) return "";
  const opts = field.options;
  if (Array.isArray(opts) && opts.length) {
    const parts = opts.map((o) => {
      if (o && typeof o === "object") {
        const val = o.value ?? o;
        const lbl = o.label;
        return lbl && lbl !== val ? `<code>${val}</code> (${lbl})` : `<code>${val}</code>`;
      }
      return `<code>${o}</code>`;
    });
    return `<p><strong>Valores posibles:</strong> ${parts.join(", ")}.</p>`;
  }
  const ev = field.enumValue;
  if (ev && typeof ev === "object" && Object.keys(ev).length) {
    const parts = Object.entries(ev).map(([lbl, val]) => `<code>${val}</code> (${lbl})`);
    return `<p><strong>Valores posibles:</strong> ${parts.join(", ")}.</p>`;
  }
  return "";
}

function formatFieldRange(field) {
  if (!field || (field.min == null && field.max == null && field.step == null)) return "";
  const parts = [];
  if (field.min != null) parts.push(`mínimo <code>${field.min}</code>`);
  if (field.max != null) parts.push(`máximo <code>${field.max}</code>`);
  if (field.step != null) parts.push(`paso <code>${field.step}</code>`);
  return `<p><strong>Rango:</strong> ${parts.join(", ")}.</p>`;
}

function buildApiPropModalContent(field, row) {
  const lookupField = field ?? { key: row.name, label: row.desc, kind: row.type, attrType: row.type };
  const info = fieldInfo(lookupField);
  const title = info?.title ?? row.desc ?? String(row.name);
  const parts = [];
  if (info?.body) parts.push(`<p>${info.body}</p>`);
  else {
    const shortDesc = row.desc && row.desc !== row.name ? ` — ${row.desc}` : "";
    parts.push(`<p>Propiedad del componente <code>${row.name}</code>${shortDesc}.</p>`);
  }
  if (field) {
    const enumHtml = formatFieldEnumOptions(field);
    const rangeHtml = formatFieldRange(field);
    if (enumHtml) parts.push(enumHtml);
    if (rangeHtml) parts.push(rangeHtml);
  }
  parts.push(`<dl class="pg-api-prop-modal__meta"><dt>Tipo</dt><dd><code>${row.type}</code></dd><dt>Valor por defecto</dt><dd><code>${row.def}</code></dd></dl>`);
  return { title, body: parts.join("") };
}

export function ApiTable({ adapter }) {
  const [activeRow, setActiveRow] = useState(null);
  const state = adapter?.initialState?.() ?? {};
  const details = adapter?.initialDetails?.() ?? {};
  const demoConfig = adapter?.initialDemoConfig?.() ?? {};
  const rows = [];
  const pushField = (f, values) => {
    if (!f || f.kind === "icon-text" || f.attrOmit) return;
    if (f.kind === "switch-group") {
      for (const sw of f.switches ?? []) {
        if (sw.attrOmit) continue;
        rows.push({
          name: sw.attrName ?? sw.key,
          desc: sw.label,
          type: sw.attrType ?? "boolean",
          def: formatApiDefault(resolveApiDefault(sw, values, { switchFallback: true })),
          field: sw,
        });
      }
      return;
    }
    if (f.kind === "select-enum-row") {
      for (const sub of f.selects ?? []) pushField(sub, values);
      return;
    }
    rows.push({
      name: f.attrName ?? f.key,
      desc: f.label,
      type: f.attrType ?? f.kind,
      def: formatApiDefault(resolveApiDefault(f, values)),
      field: f,
    });
  };
  for (const f of adapter?.fields?.() ?? []) pushField(f, state);
  for (const f of adapter?.detailFields?.() ?? []) pushField(f, details);
  for (const f of adapter?.demoConfigFields?.() ?? []) pushField(f, demoConfig);
  const modalContent = useMemo(() => (activeRow ? buildApiPropModalContent(activeRow.field, activeRow) : null), [activeRow]);
  if (!rows.length) return null;
  return (
    <>
      <div className="pg-api-table-wrap">
        <table className="pg-api-table">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={String(r.name)}>
                <td>
                  <button type="button" className="pg-api-table__prop-btn" onClick={() => setActiveRow(r)} aria-label={`Ver explicación de ${r.name}`} title={`Ver explicación de ${r.name}`}>
                    <code className="pg-api-table__prop">{String(r.name)}</code>
                  </button>
                </td>
                <td>{r.desc ?? "—"}</td>
                <td><code className="pg-api-table__type">{String(r.type)}</code></td>
                <td><code className="pg-api-table__default">{String(r.def)}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {activeRow && modalContent && (
        <Modal open onClose={() => setActiveRow(null)} variant="solid" showCloseHeader title={<span className="pg-input-decorated__info-title"><Icon icon="mdi:code-braces" /><code>{String(activeRow.name)}</code></span>}>
          <div className="pg-api-prop-modal">
            <h4 className="pg-api-prop-modal__title">{modalContent.title}</h4>
            <div className="pg-input-decorated__info-body" dangerouslySetInnerHTML={{ __html: modalContent.body }} />
          </div>
        </Modal>
      )}
    </>
  );
}

export function AccordionDemo({
  adapter, title, titleIcon, flat = false, relieve, className, previewScale, previewStyle, demoId, configBlockCount = 3,
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
              <CodeBlock value={finalCodeStr} readOnly lang="jsx" minHeight="7em" maxHeight="22em" lineWrapping className="pg-demo-example__code" />
            )}
          </div>
        </section>
      )}

      {adapter && (
        <section className="pg-demo-doc__section pg-demo-doc__section--playground" aria-labelledby={`${demoId ?? finalTitle}-playground`}>
          <h2 className="pg-demo-doc__section-title" id={`${demoId ?? finalTitle}-playground`}>Playground</h2>
          <ConfigCard variant="section">
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${configCols}, minmax(0, 1fr))`, gap: "0.75rem", width: "100%", alignItems: "start" }}>
              <ConfigCard>
                <InputDecorated label="style" icon="mdi:palette-swatch-outline" info="Estilos CSS inline que se aplican directamente al contenedor del demo. Útil para ajustes rápidos sin modificar la hoja de estilos global." infoTitle="Estilo inline">
                  <ConfigCodeField value={demoStyle} onChange={(v) => onDemoStyleChange?.(v)} placeholder="inline style" mode="css" minHeight="4.5em" maxHeight="8.5em" />
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

      {hasApi && (
        <section className="pg-demo-doc__section" aria-labelledby={`${demoId ?? finalTitle}-api`}>
          <h2 className="pg-demo-doc__section-title" id={`${demoId ?? finalTitle}-api`}>API</h2>
          <ApiTable adapter={adapter} />
        </section>
      )}
    </article>
  );
}
