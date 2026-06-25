import shellConfig from "../../../../config/playground-shell.json";

export { shellConfig };

export function panelSizePx(open) {
  const s = shellConfig.panel?.size ?? {};
  const n = open ? s.expanded : s.collapsed;
  return Number(n) || (open ? 260 : 52);
}

export function panelSizeCss(open) {
  const s = shellConfig.panel?.size ?? {};
  const unit = s.unit || "px";
  return `${panelSizePx(open)}${unit}`;
}

export function panelStorageKey() {
  return shellConfig.panel?.storageKey || "mimicus:sidebarOpen";
}

export function sectionColors() {
  return shellConfig.theme?.sectionColors ?? ["primary", "info", "success", "warning", "error", "danger", "color"];
}
