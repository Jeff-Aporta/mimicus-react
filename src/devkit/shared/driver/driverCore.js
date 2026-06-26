/**
 * driverCore — devkit
 * llm:  ./driverCore.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/driverCore.js
 * Núcleo del driver de demos: adaptador JSON→controlador (JsonDemoAdapter) y componente DemoPage.
 */
import { useMemo, useState } from "react";
import { AccordionDemo, DemoController } from "../demo-shell/demoShellUi.jsx";
import { hydrateFields } from "./fieldHydration.js";
import { buildCodeFromStrategy } from "./codeStrategies.js";
import { PreviewRenderer } from "./previewRenderer.jsx";

export { stateForPreview } from "./previewBuiltins.jsx";
export { resolveComponent, isStubComponent } from "./componentRegistry.js";

export class JsonDemoAdapter extends DemoController {
  constructor(def) {
    super();
    this.def = def;
    this.componentName = def.component.name;
    this.componentPath = def.component.path;
    this.previewScale = def.preview?.scale;
    this.previewStyle = def.preview?.style;
    this.hydratedFields = hydrateFields(def.fields);
    this.hydratedDetailFields = hydrateFields(def.detailFields ?? []);
    this.hydratedDemoConfigFields = hydrateFields(def.demoConfigFields ?? []);
  }

  initialState() { return structuredClone(this.def.state ?? {}); }
  initialDetails() { return structuredClone(this.def.details ?? {}); }
  initialDemoConfig() { return structuredClone(this.def.demoConfig ?? {}); }
  fields() { return this.hydratedFields; }
  detailFields() { return this.hydratedDetailFields; }
  demoConfigFields() { return this.hydratedDemoConfigFields; }
  presets() { return this.def.presets ?? []; }
  tagOpts() { return this.def.code?.tagOpts ?? {}; }

  buildCode(state, details = {}, demoStyle = "", demoClass = "", demoConfig = {}) {
    const strategy = this.def.code?.strategy ?? "default";
    return buildCodeFromStrategy(strategy, { def: this.def, collectAttrs: (s) => this.collectAttrs(s) }, state, details, demoStyle, demoClass, demoConfig);
  }
}

export function createJsonAdapter(def) {
  return new JsonDemoAdapter(def);
}

export function DemoPage({ definition }) {
  const adapter = useMemo(() => createJsonAdapter(definition), [definition]);
  const [state, setState] = useState(() => adapter.initialState());
  const [details, setDetails] = useState(() => adapter.initialDetails());
  const [demoConfig, setDemoConfig] = useState(() => adapter.initialDemoConfig());
  const [demoStyle, setDemoStyle] = useState("");
  const [demoClass, setDemoClass] = useState("");
  const shell = definition.shell ?? {};

  return (
    <AccordionDemo
      flat adapter={adapter} title={definition.title ?? definition.label} titleIcon={definition.titleIcon} reviewStatus={definition.status}
      relieve={shell.relieve} configBlockCount={shell.configBlockCount} className={shell.class} previewScale={definition.preview?.scale} previewStyle={definition.preview?.style}
      demoId={definition.id} state={state} details={details} demoConfig={demoConfig} demoStyle={demoStyle} demoClass={demoClass}
      onStateChange={setState} onDetailsChange={setDetails} onDemoConfigChange={setDemoConfig} onDemoStyleChange={setDemoStyle} onDemoClassChange={setDemoClass}
      intro={definition.intro}
      preview={(ctx) => <div className="demo-preview-root"><PreviewRenderer definition={definition} {...ctx} /></div>}
    />
  );
}
