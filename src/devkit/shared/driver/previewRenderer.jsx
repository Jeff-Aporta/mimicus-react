/**
 * previewRenderer — devkit
 * llm:  ./previewRenderer.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/driver/previewRenderer.jsx
 * Resuelve y renderiza la vista previa de un demo (tree explícito, plantilla JSON inyectada o builtin).
 */
import { playgroundData } from "../../core/playgroundData.js";
import { JsonRenderer } from "../jsonRenderer.jsx";
import { PreviewStub, previewBuiltins } from "./previewBuiltins.jsx";

function resolvePreviewNode(definition) {
  if (definition.preview?.tree) return definition.preview.tree;
  const previewTemplates = playgroundData().previewTemplates ?? {};
  const tpl = definition.preview?.template ?? "component";
  return previewTemplates[tpl] ?? previewTemplates.component;
}

export function PreviewRenderer(props) {
  const { definition } = props;
  const node = resolvePreviewNode(definition);
  const ctx = { ...props, repeatIndex: 0 };

  if (node?.type === "builtin") {
    const Builtin = previewBuiltins[node.id];
    return Builtin ? <Builtin {...props} /> : <PreviewStub template={node.id} componentName={definition.component?.name} />;
  }

  const rendered = <JsonRenderer node={node} ctx={ctx} />;
  if (rendered) return rendered;
  return <PreviewStub template={definition.preview?.template} componentName={definition.component?.name} />;
}
