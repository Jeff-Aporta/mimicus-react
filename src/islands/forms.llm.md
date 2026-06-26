---
isla: forms
subpath: "@jeff-aporta/mimicus-react/forms"
css: "@jeff-aporta/mimicus-react/forms.css"
repo: https://github.com/Jeff-Aporta/mimicus-react
---

# Isla forms

Componentes de entrada de datos (Data Entry), inspirados en Ant Design + MUI: formularios, campos de texto, selección, fechas, sliders, transfers, etc. Para capturar datos del usuario.

## Exporta
- `Form`, `FormItem`
- Texto/número: `Input`, `TextField`, `TextArea`, `InputNumber`
- Selección booleana: `Checkbox`, `CheckboxIcon`, `CheckboxChip`, `Switch`, `LabeledSwitch`, `Radio`, `RadioGroup`, `ToggleButton`, `ToggleButtonGroup`
- Escalas: `Slider`, `Rate`, `Rating`
- Selectores: `Select`, `AutoComplete`, `Cascader`, `TreeSelect`, `Mentions`
- Transferencia: `Transfer`, `TransferList`, `TransferBoard`
- Otros: `Upload`, `ColorPicker`, `DatePicker`, `TimePicker`
- Boot: `mountForms`

## Depende de
Isla `theme`.

## Uso
import { Form, Input, Select } from "@jeff-aporta/mimicus-react/forms";
// + cargar el CSS: @jeff-aporta/mimicus-react/forms.css
