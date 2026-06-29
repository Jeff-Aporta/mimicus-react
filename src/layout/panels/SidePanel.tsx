/**
 * SidePanel — isla: layout
 * demo: demo/config/demos/lib/SidePanel.json
 * llm:  ./SidePanel.llm.md
 * css:  css/components/side-panel.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/panels/SidePanel.tsx
 * Panel lateral con modos expandido, rail (colapsado) y drawer; expone SidePanel.View.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Button } from "../../components/Button.tsx";

export interface SidePanelViewProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  mode?: "expanded" | "rail";
  gap?: string | number;
  style?: CSSProperties;
  children?: ReactNode;
}

function View({ mode = "expanded", gap = "0.25rem", className, style, children, ...rest }: SidePanelViewProps) {
  const rail = mode === "rail";
  return (
    <div
      {...rest}
      className={["mimicus-side-panel-view", "pg-panel-view", rail ? "mimicus-side-panel-view--rail pg-panel-view--rail" : "mimicus-side-panel-view--expanded pg-panel-view--expanded", className].filter(Boolean).join(" ")}
      style={{ display: "flex", flexDirection: "column", gap, width: "100%", minWidth: 0, ...(style && typeof style === "object" ? style : {}) }}
    >
      {children}
    </div>
  );
}

export interface SidePanelProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  open?: boolean;
  drawer?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
  collapsedView?: ReactNode;
  expandedView?: ReactNode;
  railView?: ReactNode;
  closeIcon?: string;
  closeTitle?: string;
  expandTitle?: string;
  collapseTitle?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

interface SidePanelComponent {
  (props: SidePanelProps): ReactNode;
  View: typeof View;
}

/**
 * Panel lateral estándar — expandido, rail (colapsado) o drawer.
 * Las vistas suelen definirse en JSON (`views.collapsed` / `views.expanded` como nodos `stack`).
 */
function SidePanelBase({
  open = true,
  drawer = false,
  onClose,
  onToggle,
  collapsedView,
  expandedView,
  railView,
  children,
  closeIcon = "mdi:close",
  closeTitle = "Cerrar menú",
  expandTitle = "Expandir panel",
  collapseTitle = "Compactar panel",
  className,
  style,
  ...rest
}: SidePanelProps) {
  const rail = !open && !drawer;
  const collapsed = collapsedView ?? railView;
  const bodyClass = [
    "mimicus-side-panel__body",
    "pg-sidebar-body",
    "sidebar-body",
    !rail && "custom-scrollbar pg-scrollbar",
    rail && "mimicus-side-panel__body--rail pg-sidebar-body--rail mimicus-scrollbar--hidden",
  ].filter(Boolean).join(" ");

  const content = children ?? ((drawer || open) ? expandedView : collapsed);

  return (
    <aside
      {...rest}
      className={["mimicus-side-panel", "sidebar", "pg-sidebar", "pg-vt-sidebar", drawer && "mimicus-side-panel--drawer pg-sidebar--drawer", rail && "mimicus-side-panel--rail is-collapsed"].filter(Boolean).join(" ")}
      style={{ ...(style && typeof style === "object" ? style : {}) }}
    >
      {drawer && onClose && (
        <div className="mimicus-side-panel__drawer-bar pg-sidebar-drawer-bar">
          <Button variant="text" shape="rect" color="neutral" onClick={onClose} className="sidebar-toggle-btn" title={closeTitle} style={{ width: "auto", marginLeft: "auto" }}>
            <iconify-icon icon={closeIcon} aria-hidden />
          </Button>
        </div>
      )}
      {!drawer && onToggle && (
        <div className={["mimicus-side-panel__header", "pg-sidebar-header", "pg-sidebar-header--panel", rail && "pg-sidebar-header--rail"].filter(Boolean).join(" ")}>
          <Button variant="text" shape="rect" color="neutral" onClick={onToggle} className={["sidebar-header-btn", rail ? "sidebar-header-btn--rail" : "sidebar-toggle-btn"].filter(Boolean).join(" ")} title={open ? collapseTitle : expandTitle} style={rail ? { width: "100%", justifyContent: "center" } : { flexShrink: 0, width: "auto" }}>
            <iconify-icon icon={open ? "mdi:menu-open" : "mdi:menu"} aria-hidden style={{ width: "1.05rem", height: "1.05rem", fontSize: "1.05rem", color: "currentColor", display: "inline-block", flexShrink: 0 }} />
          </Button>
        </div>
      )}
      <div className={bodyClass}>{content}</div>
    </aside>
  );
}

export const SidePanel: SidePanelComponent = Object.assign(SidePanelBase, { View });
