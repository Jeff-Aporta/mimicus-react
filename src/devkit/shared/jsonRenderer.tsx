// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * jsonRenderer — devkit
 * llm:  ./jsonRenderer.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shared/jsonRenderer.tsx
 * Renderiza árboles de nodos JSON (stack, repeat, demo-component, catalog-categories…) a React.
 */
import { Card } from "../_ui.ts";
import { Button } from "../_ui.ts";
import { getDemoIcon, ReviewStatusDot, statusDotsFor, statusFor } from "../catalog/catalogUi.tsx";
import { Icon } from "../../components/Icon.tsx";
import { SidePanelSection, sectionColorFor, sortedCategories, sectionMeta } from "../_ui.ts";
import { LAYOUT_PREVIEW_EMOJIS, parseStyleString } from "./playgroundKit.ts";
import { buildDemoComponentProps, previewBuiltins } from "./driver/previewBuiltins.tsx";

function stackStyle(gap) {
  return { display: "flex", flexDirection: "column", gap: gap || "0.25rem", width: "100%", minWidth: 0 };
}

function readCount(ctx, spec) {
  const raw = spec.countFrom?.startsWith("details.") ? ctx.details?.[spec.countFrom.slice(8)] : spec.countFrom?.startsWith("state.") ? ctx.state?.[spec.countFrom.slice(6)] : ctx.details?.itemCount;
  const n = Math.round(Number(raw)) || spec.default || 1;
  return Math.min(spec.max ?? 50, Math.max(spec.min ?? 1, n));
}

function CatalogCategories({ node, ctx }) {
  const mode = node.mode || "sections";
  const categories = sortedCategories(ctx);
  const { route, catalogItems, sectionOpen, setSectionOpen } = ctx;

  if (mode === "rail") {
    return categories.map((cat) => {
      const color = sectionColorFor(ctx, cat);
      const active = route.category === cat;
      const meta = sectionMeta(ctx, cat);
      return (
        <Button key={cat} variant={active ? "soft" : "text"} shape="rect" color={color} data-section-color={color} className="pg-panel-rail__btn" title={meta.label ?? cat} onClick={() => ctx.onCategory?.(cat)} style={{ width: "100%", justifyContent: "center", minHeight: "2.35rem", paddingInline: "0.25rem" }}>
          <Icon icon={meta.icon ?? "mdi:folder-outline"} style={{ fontSize: "1.2rem" }} />
        </Button>
      );
    });
  }

  if (mode === "tabs") return null;

  return categories.map((cat) => {
    const color = sectionColorFor(ctx, cat);
    const meta = sectionMeta(ctx, cat);
    const items = catalogItems.filter((it) => (it.section ?? it.category) === cat);
    return (
      <SidePanelSection key={cat} icon={meta.icon ?? "mdi:folder-outline"} label={meta.label ?? cat} color={color} open={sectionOpen?.[cat]} collapsed={false} active={route.category === cat && !route.slug} forceOpen={route.category === cat && !!route.slug} count={items.length} statusDots={statusDotsFor(items.map((it) => it.id))} onToggle={() => setSectionOpen?.((prev) => ({ ...prev, [cat]: !prev[cat] }))} onHeaderClick={() => ctx.onCategory?.(cat)}>
        {items.map((it) => {
          const selected = route.category === cat && route.slug === it.slug;
          return (
            <Button key={it.slug} variant={selected ? "soft" : "text"} shape="rect" color={color} onClick={() => ctx.onDemo?.(cat, it.slug)} className="pg-panel-demo-link" title={it.displayLabel} style={{ justifyContent: "flex-start", fontSize: "0.85rem", width: "100%" }}>
              <Icon icon={getDemoIcon(it.id, it)} />
              <span className="sm-item-label"><span className="sm-item-text">{it.displayLabel}</span></span>
            </Button>
          );
        })}
      </SidePanelSection>
    );
  });
}

export function PlaygroundJsonPanel({ node, ctx }) {
  return <JsonRenderer node={node} ctx={ctx} />;
}

export function JsonRenderer({ node, ctx, keyPrefix = "" }) {
  if (!node) return null;

  if (node.type === "builtin") {
    const Builtin = previewBuiltins[node.id];
    return Builtin ? <Builtin {...ctx} /> : null;
  }

  if (node.type === "wrap") {
    return (
      <div style={parseStyleString(node.style)} key={keyPrefix}>
        <JsonRenderer node={node.child} ctx={ctx} keyPrefix={`${keyPrefix}-w`} />
      </div>
    );
  }

  if (node.type === "surround") {
    const inline = Boolean(ctx.state?.[node.inlineFromState ?? "inline"]);
    const Tag = inline ? "span" : "div";
    return (
      <Tag className={inline ? "layout-inline-demo layout-inline-demo--inline" : "layout-inline-demo"} key={keyPrefix}>
        <JsonRenderer node={node.child} ctx={ctx} keyPrefix={`${keyPrefix}-s`} />
      </Tag>
    );
  }

  if (node.type === "repeat") {
    const count = readCount(ctx, node);
    return Array.from({ length: count }, (_, i) => <JsonRenderer key={`${keyPrefix}-r${i}`} node={node.child} ctx={{ ...ctx, repeatIndex: i }} keyPrefix={`${keyPrefix}-r${i}`} />);
  }

  if (node.type === "emoji-card") {
    const i = ctx.repeatIndex ?? 0;
    const emoji = LAYOUT_PREVIEW_EMOJIS[i % LAYOUT_PREVIEW_EMOJIS.length];
    const label = node.labelPrefix ? `${node.labelPrefix}${i + 1} ${emoji}` : emoji;
    return (
      <Card key={keyPrefix} variant="flat" inline={node.inline !== false} style={parseStyleString(node.cardStyle)}>
        {node.labelPrefix ? label : emoji}
      </Card>
    );
  }

  if (node.type === "demo-component") {
    const inline = node.widthFromInline && Boolean(ctx.state?.inline);
    const { Comp, props, children } = buildDemoComponentProps(node, ctx);
    if (!Comp) return null;
    const style = { ...(inline ? { width: "fit-content" } : { width: "100%" }), maxWidth: "100%", ...props.style };
    const inner = node.children ? <JsonRenderer node={node.children} ctx={ctx} /> : children;
    return <Comp {...props} style={style}>{inner}</Comp>;
  }

  if (node.type === "stack") {
    const rendered = (node.children ?? []).flatMap((child, idx) => {
      if (child.type === "catalog-categories") {
        const out = CatalogCategories({ node: child, ctx });
        return Array.isArray(out) ? out : out ? [out] : [];
      }
      if (child.type === "separator") return [<hr key={`sep-${idx}`} className="sidebar-separator" />];
      return [<JsonRenderer key={child.id || idx} node={child} ctx={ctx} keyPrefix={`${keyPrefix}-${idx}`} />];
    });
    return <div className={node.className} style={stackStyle(node.gap)}>{rendered}</div>;
  }

  if (node.type === "catalog-categories") {
    const out = CatalogCategories({ node, ctx });
    return Array.isArray(out) ? <>{out}</> : out;
  }

  return null;
}
