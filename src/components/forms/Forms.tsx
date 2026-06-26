/**
 * Forms — isla: forms
 * repo: Jeff-Aporta/mimicus-react · src/components/forms/Forms.tsx
 * Monolito de componentes de formulario (Input, Select, Checkbox, Switch, Radio, Slider, etc.).
 */
import { Children, useId, useRef, useState } from "react";
import type { CSSProperties, ReactElement, ReactNode } from "react";
import { mergeSurfaceStyle } from "../../lib/surfaceColor.ts";
import { useFormBinding } from "../../forms/useFormBinding.ts";

type Size = "small" | "medium" | "large";
interface Option { value: string; label?: ReactNode; disabled?: boolean; icon?: ReactNode }
interface BaseProps { className?: string; style?: CSSProperties; children?: ReactNode }

function cx(...p: unknown[]): string { return p.filter(Boolean).join(" "); }

export function useCtrl<T>(value: T | undefined, defaultValue: T, onChange?: (v: T) => void): [T, (v: T) => void] {
  const [inner, setInner] = useState<T>(defaultValue);
  const v = (value ?? inner) as T;
  const set = (next: T) => { if (value === undefined) setInner(next); onChange?.(next); };
  return [v, set];
}

/* ── Form ── */
export interface FormItemProps extends BaseProps {
  label?: ReactNode; required?: boolean; help?: ReactNode; error?: ReactNode; layout?: "vertical" | "horizontal";
  [key: string]: unknown;
}
export function FormItem({ label, required, help, error, children, className, layout = "vertical", ...rest }: FormItemProps) {
  return (
    <label {...rest} className={cx("mimicus-form-item", `mimicus-form-item--${layout}`, error && "has-error", className)}>
      {label && <span className="mimicus-form-item__label">{label}{required && <span className="mimicus-form-item__req">*</span>}</span>}
      <span className="mimicus-form-item__control">{children}</span>
      {(help || error) && <span className="mimicus-form-item__extra">{error ?? help}</span>}
    </label>
  );
}

export interface FormProps extends BaseProps { layout?: "vertical" | "horizontal" | "inline"; [key: string]: unknown }
export function Form({ layout = "vertical", className, style, children, ...rest }: FormProps) {
  return <form {...rest} className={cx("mimicus-form", `mimicus-form--${layout}`, className)} style={style} onSubmit={(e) => e.preventDefault()}>{children}</form>;
}
Form.Item = FormItem;

/* ── Input / TextField ── */
export interface InputProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; size?: Size; status?: string;
  prefix?: ReactNode; suffix?: ReactNode; allowClear?: boolean; disabled?: boolean; readOnly?: boolean;
  placeholder?: string; type?: string; [key: string]: unknown;
}
export function Input({
  value, defaultValue, onChange, size = "medium", status, prefix, suffix, allowClear, disabled, readOnly,
  placeholder, type = "text", className, style, ...rest
}: InputProps) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return (
    <span className={cx("mimicus-input", `mimicus-input--${size}`, status && `is-${status}`, disabled && "is-disabled", className)} style={style}>
      {prefix && <span className="mimicus-input__affix mimicus-input__prefix">{prefix}</span>}
      <input {...rest} type={type} className="mimicus-input__native" value={val ?? ""} readOnly={readOnly} disabled={disabled}
        placeholder={placeholder} onChange={(e) => set(e.target.value)} />
      {allowClear && val && !disabled && <button type="button" className="mimicus-input__clear" aria-label="Limpiar" onClick={() => set("")}>×</button>}
      {suffix && <span className="mimicus-input__affix mimicus-input__suffix">{suffix}</span>}
    </span>
  );
}
export const TextField = Input;

export interface TextAreaProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; rows?: number; autoSize?: boolean; [key: string]: unknown;
}
export function TextArea({ value, defaultValue, onChange, rows = 4, autoSize, className, style, ...rest }: TextAreaProps) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return (
    <textarea {...rest} rows={rows} className={cx("mimicus-textarea", autoSize && "mimicus-textarea--autosize", className)} style={style}
      value={val ?? ""} onChange={(e) => set(e.target.value)} />
  );
}

/* ── InputNumber ── */
export interface InputNumberProps extends BaseProps {
  value?: number; defaultValue?: number; onChange?: (v: number) => void; min?: number; max?: number; step?: number;
  size?: Size; disabled?: boolean; [key: string]: unknown;
}
export function InputNumber({ value, defaultValue = 0, onChange, min, max, step = 1, size = "medium", disabled, className, style, ...rest }: InputNumberProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "input-number", [min, max, step, val]);
  return (
    <span ref={ref} className={cx("mimicus-input-number", `mimicus-input-number--${size}`, disabled && "is-disabled", className)} style={style}
      data-min={min} data-max={max} data-step={step} data-value={val} data-mimicus-form="input-number">
      <button type="button" className="mimicus-input-number__btn" data-mimicus-input-number-dec disabled={disabled} tabIndex={-1}>−</button>
      <input {...rest} type="text" inputMode="decimal" className="mimicus-input-number__native" value={val ?? 0} disabled={disabled}
        onChange={(e) => set(Number(e.target.value) || 0)} />
      <button type="button" className="mimicus-input-number__btn" data-mimicus-input-number-inc disabled={disabled} tabIndex={-1}>+</button>
    </span>
  );
}

/* ── Checkbox ── */
export interface CheckboxProps extends BaseProps {
  checked?: boolean; defaultChecked?: boolean; onChange?: (v: boolean) => void; indeterminate?: boolean;
  disabled?: boolean; loading?: boolean; size?: Size; [key: string]: unknown;
}
export function Checkbox({
  checked, defaultChecked = false, onChange, indeterminate, disabled, loading, size = "medium", children, className, style, ...rest
}: CheckboxProps) {
  const [on, set] = useCtrl(checked, defaultChecked, onChange);
  const id = useId();
  return (
    <label className={cx("mimicus-checkbox", `mimicus-checkbox--${size}`, on && "is-checked", indeterminate && "is-indeterminate", disabled && "is-disabled", loading && "is-loading", className)} style={style}>
      <input {...rest} id={id} type="checkbox" className="mimicus-checkbox__native" checked={Boolean(on)} disabled={disabled || loading}
        onChange={(e) => set(e.target.checked)} />
      <span className="mimicus-checkbox__box" aria-hidden />
      {children != null && <span className="mimicus-checkbox__label">{children}</span>}
    </label>
  );
}

export interface CheckboxIconProps extends CheckboxProps {
  color?: string; variant?: string; icon?: ReactNode; iconChecked?: ReactNode; iconUnchecked?: ReactNode;
}
export function CheckboxIcon({ checked, defaultChecked, onChange, disabled, loading, color, variant, children, icon, iconChecked, iconUnchecked, className, ...rest }: CheckboxIconProps) {
  const surface = mergeSurfaceStyle(color, { variant: variant ?? "solid" });
  return (
    <Checkbox {...rest} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} loading={loading}
      className={cx("mimicus-checkbox--icon", variant === "glass" && "mimicus-checkbox--glass", className)} style={surface.style}>
      <span className="mimicus-checkbox__icons">
        <span className="mimicus-checkbox__icon mimicus-checkbox__icon--on">{iconChecked ?? icon ?? "✓"}</span>
        <span className="mimicus-checkbox__icon mimicus-checkbox__icon--off">{iconUnchecked ?? "○"}</span>
      </span>
      {children}
    </Checkbox>
  );
}

export interface CheckboxChipProps extends BaseProps { value?: string | string[]; options?: Option[]; onChange?: (v: string) => void }
export function CheckboxChip({ value, options, onChange, className, style }: CheckboxChipProps) {
  return (
    <ToggleButtonGroup exclusive value={value} onChange={onChange} className={cx("mimicus-checkbox-chip", className)} style={style}>
      {options?.map((opt) => <ToggleButton key={opt.value} value={opt.value} icon={opt.icon}>{opt.label ?? opt.value}</ToggleButton>)}
    </ToggleButtonGroup>
  );
}

/* ── Switch ── */
export interface SwitchProps extends BaseProps {
  checked?: boolean; defaultChecked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; loading?: boolean; size?: Size; [key: string]: unknown;
}
export function Switch({ checked, defaultChecked = false, onChange, disabled, loading, size = "medium", children, className, style, ...rest }: SwitchProps) {
  const [on, set] = useCtrl(checked, defaultChecked, onChange);
  return (
    <label className={cx("mimicus-switch", `mimicus-switch--${size}`, on && "is-checked", disabled && "is-disabled", loading && "is-loading", className)} style={style}>
      <input {...rest} type="checkbox" role="switch" className="mimicus-switch__native" checked={Boolean(on)} disabled={disabled || loading}
        onChange={(e) => set(e.target.checked)} />
      <span className="mimicus-switch__track"><span className="mimicus-switch__thumb" /></span>
      {children != null && <span className="mimicus-switch__label">{children}</span>}
    </label>
  );
}

export interface LabeledSwitchProps extends SwitchProps { label?: ReactNode; readonly?: boolean }
export function LabeledSwitch({ label, checked, defaultChecked, onChange, readonly, ...rest }: LabeledSwitchProps) {
  return (
    <FormItem label={label} layout="horizontal" className="mimicus-labeled-switch">
      <Switch checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={readonly} {...rest} />
    </FormItem>
  );
}

/* ── Radio ── */
export interface RadioProps extends BaseProps {
  value?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; name?: string; [key: string]: unknown;
}
export function Radio({ value, checked, defaultChecked, onChange, disabled, children, className, name, ...rest }: RadioProps) {
  return (
    <label className={cx("mimicus-radio", checked && "is-checked", disabled && "is-disabled", className)}>
      <input {...rest} type="radio" name={name} value={value} className="mimicus-radio__native" checked={checked} defaultChecked={defaultChecked}
        disabled={disabled} onChange={onChange} />
      <span className="mimicus-radio__dot" aria-hidden />
      {children != null && <span className="mimicus-radio__label">{children}</span>}
    </label>
  );
}

export interface RadioGroupProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; name?: string;
  direction?: "horizontal" | "vertical"; options?: Option[]; [key: string]: unknown;
}
export function RadioGroup({ value, defaultValue, onChange, name, direction = "horizontal", options, children, className, style, ...rest }: RadioGroupProps) {
  const groupName = useId();
  const [val, set] = useCtrl(value, defaultValue as string, onChange);
  const resolvedName = name ?? groupName;
  const body = children ?? options?.map((opt) => (
    <Radio key={opt.value} name={resolvedName} value={opt.value} checked={val === opt.value} disabled={opt.disabled}
      onChange={() => set(opt.value)}>{opt.label}</Radio>
  ));
  return (
    <div {...rest} role="radiogroup" className={cx("mimicus-radio-group", `mimicus-radio-group--${direction}`, className)} style={style} data-value={val}>
      {body}
    </div>
  );
}

/* ── Slider ── */
export interface SliderProps extends BaseProps {
  value?: number; defaultValue?: number; onChange?: (v: number) => void; min?: number; max?: number; step?: number;
  disabled?: boolean; vertical?: boolean; showValue?: boolean; [key: string]: unknown;
}
export function Slider({ value, defaultValue = 0, onChange, min = 0, max = 100, step = 1, disabled, vertical, className, style, showValue, ...rest }: SliderProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "slider", [min, max, step]);
  return (
    <div ref={ref} {...rest} className={cx("mimicus-slider", vertical && "mimicus-slider--vertical", disabled && "is-disabled", className)}
      style={style} data-value={val} data-mimicus-form="slider">
      <div className="mimicus-slider__rail"><div className="mimicus-slider__fill" data-mimicus-slider-fill /></div>
      <input type="range" className="mimicus-slider__input" data-mimicus-slider-input min={min} max={max} step={step} value={val} disabled={disabled}
        onInput={(e) => set(Number((e.target as HTMLInputElement).value))} onChange={(e) => set(Number(e.target.value))} />
      {showValue && <span className="mimicus-slider__value" data-mimicus-slider-value>{val}</span>}
    </div>
  );
}

/* ── Rate / Rating ── */
export interface RateProps extends BaseProps {
  value?: number; defaultValue?: number; onChange?: (v: number) => void; count?: number; allowHalf?: boolean;
  allowClear?: boolean; disabled?: boolean; character?: ReactNode; size?: Size; [key: string]: unknown;
}
export function Rate({ value, defaultValue = 0, onChange, count = 5, allowHalf, allowClear = true, disabled, character = "★", size = "medium", className, style, ...rest }: RateProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue, onChange);
  useFormBinding(ref, "rate", [count, allowHalf, allowClear, val, disabled]);
  return (
    <div ref={ref} {...rest} role="radiogroup" className={cx("mimicus-rate", `mimicus-rate--${size}`, disabled && "is-disabled", className)} style={style}
      data-count={count} data-value={val} data-default-value={defaultValue} data-allow-half={allowHalf ? "true" : undefined}
      data-allow-clear={allowClear ? "true" : "false"} data-disabled={disabled ? "true" : undefined} data-mimicus-form="rate">
      {Array.from({ length: count }, (_, i) => (
        <button key={i} type="button" className="mimicus-rate__star" data-mimicus-rate-star={i + 1} disabled={disabled} aria-label={`${i + 1} estrellas`}>{character}</button>
      ))}
    </div>
  );
}
export const Rating = Rate;

/* ── Select ── */
export interface SelectProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; options?: Option[];
  placeholder?: string; disabled?: boolean; size?: Size; [key: string]: unknown;
}
export function Select({ value, defaultValue, onChange, options, placeholder, disabled, size = "medium", className, style, children, ...rest }: SelectProps) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return (
    <span className={cx("mimicus-select", `mimicus-select--${size}`, disabled && "is-disabled", className)} style={style}>
      <select {...rest} className="mimicus-select__native" value={val ?? ""} disabled={disabled} onChange={(e) => set(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {children ?? options?.map((opt) => <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>)}
      </select>
      <span className="mimicus-select__arrow" aria-hidden>▾</span>
    </span>
  );
}

/* ── AutoComplete ── */
// AutoComplete acepta options sueltas (string) o {value,label}; se usa `any` puntual por la heterogeneidad de opt.
export interface AutoCompleteProps extends BaseProps {
  options?: any[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; onSelect?: (v: string) => void;
  placeholder?: string; disabled?: boolean; [key: string]: unknown;
}
export function AutoComplete({ options = [], value, defaultValue, onChange, onSelect, placeholder, disabled, className, style, ...rest }: AutoCompleteProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "autocomplete", [options.length]);
  return (
    <div ref={ref} className={cx("mimicus-autocomplete", disabled && "is-disabled", className)} style={style} data-mimicus-form="autocomplete">
      <Input {...rest} value={val} onChange={set} placeholder={placeholder} disabled={disabled} />
      <div className="mimicus-autocomplete__panel" data-mimicus-autocomplete-panel role="listbox" hidden>
        {options.map((opt) => (
          <button key={opt.value ?? opt} type="button" role="option" className="mimicus-autocomplete__option" data-mimicus-autocomplete-option
            data-value={opt.value ?? opt} onClick={() => { set(opt.value ?? opt); onSelect?.(opt.value ?? opt); }}>
            {opt.label ?? opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── ToggleButton ── */
export interface ToggleButtonProps extends BaseProps {
  value?: string; selected?: boolean; onChange?: (v: boolean) => void; disabled?: boolean; icon?: ReactNode; [key: string]: unknown;
}
export function ToggleButton({ value, selected, onChange, disabled, children, icon, className, ...rest }: ToggleButtonProps) {
  const on = selected ?? rest["aria-pressed"] === "true";
  return (
    <button {...rest} type="button" className={cx("mimicus-toggle-btn", on && "is-active", className)} data-mimicus-toggle={value}
      aria-pressed={on ? "true" : "false"} disabled={disabled} onClick={() => onChange?.(!on)}>
      {icon && <span className="mimicus-toggle-btn__icon" aria-hidden>{icon}</span>}
      {children}
    </button>
  );
}

export interface ToggleButtonGroupProps extends BaseProps {
  value?: string | string[]; defaultValue?: string | string[]; onChange?: (v: string) => void; exclusive?: boolean;
  orientation?: "horizontal" | "vertical"; size?: Size; [key: string]: unknown;
}
export function ToggleButtonGroup({ value, defaultValue, onChange, exclusive = true, orientation = "horizontal", size, children, className, style, ...rest }: ToggleButtonGroupProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl<string | string[]>(value, defaultValue ?? (exclusive ? "" : []), onChange as (v: string | string[]) => void);
  const normalized = exclusive ? val : (Array.isArray(val) ? val.join(",") : val);
  return (
    <div ref={ref} {...rest} role="group" className={cx("mimicus-toggle-group", `mimicus-toggle-group--${orientation}`, size && `mimicus-toggle-group--${size}`, className)}
      style={style} data-exclusive={exclusive ? "true" : "false"} data-value={normalized as string} data-mimicus-form="toggle-group">
      {Children.map(children, (child) => {
        const node = child as ReactElement<ToggleButtonProps> | null;
        if (!node?.props) return child;
        const v = node.props.value as string;
        const active = exclusive ? val === v : (Array.isArray(val) ? val.includes(v) : String(val).split(",").includes(v));
        return <ToggleButton {...node.props} selected={active} onChange={() => {
          if (exclusive) set(v);
          else {
            const arr = Array.isArray(val) ? [...val] : String(val || "").split(",").filter(Boolean);
            set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
          }
        }} />;
      })}
    </div>
  );
}

/* ── Transfer ── */
interface TransferData { key: string; title: ReactNode }
export interface TransferProps extends BaseProps {
  dataSource?: TransferData[]; targetKeys?: string[]; onChange?: (...a: unknown[]) => void; titles?: [ReactNode, ReactNode]; disabled?: boolean;
}
export function Transfer({ dataSource, targetKeys, onChange, titles = ["Origen", "Destino"], disabled, className, style }: TransferProps) {
  const ref = useRef(null);
  const left = (dataSource ?? []).filter((d) => !(targetKeys ?? []).includes(d.key));
  const right = (dataSource ?? []).filter((d) => (targetKeys ?? []).includes(d.key));
  useFormBinding(ref, "transfer", [left.length, right.length, disabled]);
  const Item = ({ item }: { item: TransferData }) => <li className="mimicus-transfer__item" data-mimicus-transfer-item data-key={item.key}>{item.title}</li>;
  return (
    <div ref={ref} className={cx("mimicus-transfer", disabled && "is-disabled", className)} style={style}
      data-disabled={disabled ? "true" : undefined} data-mimicus-form="transfer">
      <div className="mimicus-transfer__panel">
        <div className="mimicus-transfer__title">{titles[0]}</div>
        <ul className="mimicus-transfer__list" data-mimicus-transfer-left>{left.map((item) => <Item key={item.key} item={item} />)}</ul>
      </div>
      <div className="mimicus-transfer__actions">
        <button type="button" className="mimicus-transfer__action" data-mimicus-transfer-action="toRight">›</button>
        <button type="button" className="mimicus-transfer__action" data-mimicus-transfer-action="toLeft">‹</button>
      </div>
      <div className="mimicus-transfer__panel">
        <div className="mimicus-transfer__title">{titles[1]}</div>
        <ul className="mimicus-transfer__list" data-mimicus-transfer-right>{right.map((item) => <Item key={item.key} item={item} />)}</ul>
      </div>
    </div>
  );
}
export const TransferList = Transfer;

export interface TransferBoardProps extends BaseProps { stackCount?: number; stackWidth?: number; disabled?: boolean; itemsPerStack?: number }
export function TransferBoard({ stackCount = 3, stackWidth = 248, disabled, itemsPerStack = 3, className, style }: TransferBoardProps) {
  const ref = useRef(null);
  useFormBinding(ref, "transfer-board", [stackCount, stackWidth, disabled, itemsPerStack]);
  const stacks = Array.from({ length: stackCount }, (_, s) => (
    <div key={s} className="mimicus-transfer-board__stack" data-mimicus-transfer-stack style={{ width: stackWidth }}>
      <div className="mimicus-transfer-board__stack-title">Stack {s + 1}</div>
      <ul className="mimicus-transfer-board__list" data-mimicus-transfer-list>
        {Array.from({ length: itemsPerStack }, (_, i) => (
          <li key={i} className="mimicus-transfer-board__card" data-mimicus-transfer-item draggable={!disabled}>
            Tarjeta {s * itemsPerStack + i + 1}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div ref={ref} className={cx("mimicus-transfer-board", disabled && "is-disabled", className)} style={style}
      data-disabled={disabled ? "true" : undefined} data-mimicus-form="transfer-board">
      {stacks}
    </div>
  );
}

/* ── Upload ── */
export interface UploadProps extends BaseProps { accept?: string; multiple?: boolean; disabled?: boolean; [key: string]: unknown }
export function Upload({ accept, multiple, disabled, children, className, style, ...rest }: UploadProps) {
  const ref = useRef(null);
  useFormBinding(ref, "upload", [accept, multiple]);
  return (
    <div ref={ref} className={cx("mimicus-upload", disabled && "is-disabled", className)} style={style} data-mimicus-form="upload">
      <label className="mimicus-upload__trigger">
        <input {...rest} type="file" className="mimicus-upload__native" accept={accept} multiple={multiple} disabled={disabled} />
        {children ?? <span className="mimicus-upload__btn">Subir archivo</span>}
      </label>
      <ul className="mimicus-upload__list" data-mimicus-upload-list />
    </div>
  );
}

/* ── ColorPicker ── */
export interface ColorPickerProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; disabled?: boolean; [key: string]: unknown;
}
export function ColorPicker({ value = "#1677ff", defaultValue, onChange, disabled, className, style, ...rest }: ColorPickerProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "#1677ff", onChange);
  useFormBinding(ref, "color-picker", [val]);
  return (
    <div ref={ref} className={cx("mimicus-color-picker", disabled && "is-disabled", className)} style={style}
      data-value={val} data-mimicus-form="color-picker">
      <span className="mimicus-color-picker__swatch" data-mimicus-color-swatch style={{ background: val }} />
      <input {...rest} type="color" value={val} disabled={disabled} onChange={(e) => set(e.target.value)} />
      <code className="mimicus-color-picker__hex" data-mimicus-color-hex>{val}</code>
    </div>
  );
}

/* ── DatePicker / TimePicker ── */
export interface DatePickerProps extends BaseProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void; disabled?: boolean; [key: string]: unknown;
}
export function DatePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }: DatePickerProps) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return <Input {...rest} type="date" className={cx("mimicus-date-picker", className)} style={style} value={val} disabled={disabled} onChange={set} />;
}

export function TimePicker({ value, defaultValue, onChange, disabled, className, style, ...rest }: DatePickerProps) {
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  return <Input {...rest} type="time" className={cx("mimicus-time-picker", className)} style={style} value={val} disabled={disabled} onChange={set} />;
}

/* ── Cascader ── */
// options anidadas con children opcionales; se usa `any` por la forma recursiva/heterogénea.
export interface CascaderProps extends BaseProps {
  options?: any[]; value?: string; onChange?: (v: string) => void; placeholder?: string; disabled?: boolean;
}
export function Cascader({ options = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }: CascaderProps) {
  const ref = useRef(null);
  useFormBinding(ref, "cascader", [options.length]);
  const flat = options.flatMap((o) => (o.children ? o.children.map((c: any) => ({ ...c, parent: o.label })) : [o]));
  return (
    <div ref={ref} className={cx("mimicus-cascader", disabled && "is-disabled", className)} style={style} data-value={value} data-mimicus-form="cascader">
      <button type="button" className="mimicus-cascader__trigger" data-mimicus-cascader-trigger disabled={disabled}>{placeholder}</button>
      <div className="mimicus-cascader__panel" data-mimicus-cascader-panel hidden>
        {flat.map((opt) => (
          <button key={opt.value} type="button" className="mimicus-cascader__option" data-mimicus-cascader-option
            data-value={opt.value} data-label={opt.parent ? `${opt.parent} / ${opt.label}` : opt.label}
            onClick={() => onChange?.(opt.value)}>{opt.parent ? `${opt.parent} / ${opt.label}` : opt.label}</button>
        ))}
      </div>
    </div>
  );
}

/* ── TreeSelect ── */
// treeData recursivo heterogéneo; `any` puntual en node.
export interface TreeSelectProps extends BaseProps {
  treeData?: any[]; value?: string; onChange?: (v: string) => void; placeholder?: string; disabled?: boolean;
}
export function TreeSelect({ treeData = [], value, onChange, placeholder = "Seleccionar", disabled, className, style }: TreeSelectProps) {
  const ref = useRef(null);
  useFormBinding(ref, "tree-select", [treeData.length]);
  const Node = ({ node, depth = 0 }: { node: any; depth?: number }) => (
    <li className="mimicus-tree-select__node" data-mimicus-tree-node data-value={node.value} data-label={node.title} style={{ paddingLeft: `${depth * 0.75}rem` }}>
      {node.children?.length ? <button type="button" className="mimicus-tree-select__toggle" data-mimicus-tree-toggle>▸</button> : <span className="mimicus-tree-select__spacer" />}
      <span className="mimicus-tree-select__label">{node.title}</span>
      {node.children?.length > 0 && (
        <ul className="mimicus-tree-select__children" data-mimicus-tree-children hidden>
          {node.children.map((c: any) => <Node key={c.value ?? c.title} node={c} depth={depth + 1} />)}
        </ul>
      )}
    </li>
  );
  return (
    <div ref={ref} className={cx("mimicus-tree-select", disabled && "is-disabled", className)} style={style} data-value={value} data-mimicus-form="tree-select">
      <button type="button" className="mimicus-tree-select__trigger" data-mimicus-tree-trigger disabled={disabled}>{placeholder}</button>
      <div className="mimicus-tree-select__panel" data-mimicus-tree-panel hidden>
        <ul className="mimicus-tree-select__tree">{treeData.map((n) => <Node key={n.value ?? n.title} node={n} />)}</ul>
      </div>
    </div>
  );
}

/* ── Mentions ── */
// options sueltas (string) o {value,label}; `any` puntual.
export interface MentionsProps extends BaseProps {
  options?: any[]; value?: string; defaultValue?: string; onChange?: (v: string) => void; rows?: number;
  placeholder?: string; disabled?: boolean; [key: string]: unknown;
}
export function Mentions({ options = [], value, defaultValue, onChange, rows = 3, placeholder, disabled, className, style, ...rest }: MentionsProps) {
  const ref = useRef(null);
  const [val, set] = useCtrl(value, defaultValue ?? "", onChange);
  useFormBinding(ref, "mentions", [options.length]);
  return (
    <div ref={ref} className={cx("mimicus-mentions", disabled && "is-disabled", className)} style={style} data-mimicus-form="mentions">
      <TextArea {...rest} rows={rows} value={val} onChange={set} placeholder={placeholder ?? "Escribe @ para mencionar"} disabled={disabled} />
      <div className="mimicus-mentions__panel" data-mimicus-mentions-panel hidden>
        {options.map((opt) => (
          <button key={opt.value ?? opt} type="button" className="mimicus-mentions__option" data-mimicus-mentions-option data-value={opt.value ?? opt}>
            @{opt.label ?? opt}
          </button>
        ))}
      </div>
    </div>
  );
}
