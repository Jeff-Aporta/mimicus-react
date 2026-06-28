#!/usr/bin/env node
// Añade iconOn/iconOff semánticos a cada switch según su key.
// Mapea: block, danger, ghost, dashed, disabled, loading, etc.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ICON_MAP = {
  block: { on: "mdi:rectangle", off: "mdi:rectangle-outline" },
  danger: { on: "mdi:alert-octagon", off: "mdi:alert-octagon-outline" },
  ghost: { on: "mdi:ghost", off: "mdi:ghost-outline" },
  dashed: { on: "mdi:border-style", off: "mdi:border-none-variant" },
  disabled: { on: "mdi:cancel", off: "mdi:circle-outline" },
  loading: { on: "mdi:loading", off: "mdi:circle-outline" },
  rounded: { on: "mdi:rectangle-rounded", off: "mdi:rectangle" },
  showPasswordToggle: { on: "mdi:eye", off: "mdi:eye-off" },
  showRemember: { on: "mdi:bookmark", off: "mdi:bookmark-outline" },
  collapsible: { on: "mdi:unfold-less-horizontal", off: "mdi:unfold-more-horizontal" },
  siderCollapsible: { on: "mdi:dock-left", off: "mdi:dock-right" },
  showHeader: { on: "mdi:page-layout-header", off: "mdi:page-layout-header-footer" },
  showFooter: { on: "mdi:page-layout-footer", off: "mdi:page-layout-header-footer" },
  showSider: { on: "mdi:page-layout-sidebar-left", off: "mdi:page-layout-sidebar-right" },
  arrows: { on: "mdi:arrow-left-right-bold", off: "mdi:arrow-left-right" },
  iconOnly: { on: "mdi:circle", off: "mdi:circle-outline" },
  visible: { on: "mdi:eye", off: "mdi:eye-off" },
  lazy: { on: "mdi:timer-sand", off: "mdi:timer-sand-empty" },
  closable: { on: "mdi:close-circle", off: "mdi:circle-outline" },
  maskClosable: { on: "mdi:close-box", off: "mdi:close-box-outline" },
  center: { on: "mdi:align-horizontal-center", off: "mdi:align-horizontal-left" },
  striped: { on: "mdi:stripe", off: "mdi:stripe-off" },
  bordered: { on: "mdi:border-all", off: "mdi:border-all-variant" },
  hoverable: { on: "mdi:cursor-default-click-outline", off: "mdi:cursor-default-click" },
  resizable: { on: "mdi:resize", off: "mdi:resize-bottom-right" },
  draggable: { on: "mdi:cursor-move", off: "mdi:cursor-default" },
  animated: { on: "mdi:animation-play", off: "mdi:animation-outline" },
  indeterminate: { on: "mdi:minus-box", off: "mdi:checkbox-blank-outline" },
  showSearch: { on: "mdi:magnify", off: "mdi:magnify-close" },
  allowClear: { on: "mdi:eraser", off: "mdi:circle-outline" },
  multiple: { on: "mdi:format-list-bulleted-square", off: "mdi:format-list-checkbox" },
  compact: { on: "mdi:arrow-collapse", off: "mdi:arrow-expand" },
  glass: { on: "mdi:glass-cocktail", off: "mdi:circle-outline" },
  filled: { on: "mdi:fill-color", off: "mdi:circle-outline" },
  unstyled: { on: "mdi:cursor-default-outline", off: "mdi:cursor-default" },
  // Default fallback
};

const DEFAULT_ICON = { on: "mdi:check", off: "mdi:circle-outline" };

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name.endsWith(".json")) yield p;
  }
}

let changed = 0;
const files = [];
for await (const f of walk("demo/config/demos")) files.push(f);

for (const file of files) {
  const raw = await readFile(file, "utf8");
  let data;
  try { data = JSON.parse(raw); } catch { continue; }
  if (!data.fields || !Array.isArray(data.fields)) continue;
  let touched = false;
  for (const fld of data.fields) {
    if (!fld || typeof fld !== "object") continue;
    const applyIcons = (sw) => {
      if (!sw || typeof sw !== "object") return;
      if (sw.iconOn || sw.iconOff) return;
      const map = ICON_MAP[sw.key] || DEFAULT_ICON;
      sw.iconOn = map.on;
      sw.iconOff = map.off;
      if (!sw.colorOn) sw.colorOn = "var(--mimicus-success, #2e9e5a)";
      if (!sw.colorOff) sw.colorOff = "var(--mimicus-color, currentColor)";
      touched = true;
    };
    if (fld.kind === "switch") applyIcons(fld);
    if (fld.kind === "switch-group" && Array.isArray(fld.switches)) {
      for (const sw of fld.switches) applyIcons(sw);
    }
  }
  if (touched) {
    await writeFile(file, JSON.stringify(data, null, 2) + "\n");
    changed++;
  }
}
console.log(`OK: ${changed} demo JSON files updated with switch icons.`);
