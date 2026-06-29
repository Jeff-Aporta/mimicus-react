/**
 * SidePanelSection — isla: layout
 * llm:  ./SidePanelSection.llm.md
 * css:  css/components/side-panel.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/panels/SidePanelSection.tsx
 * Sección tipo acordeón para SidePanel: encabezado con icono, label y conteo.
 */
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { Button } from "../../components/Button.tsx";
import { Badge } from "../../components/display/Display.tsx";
import { resolveColor } from "../../lib/resolveColor.ts";

function PanelIcon({ icon, style }: { icon?: string; style?: CSSProperties }) {
  if (!icon) return null;
  return <iconify-icon icon={icon} style={{ fontSize: "1.1rem", flexShrink: 0, ...style }} aria-hidden />;
}

export interface SidePanelSectionProps {
  icon?: string;
  label?: ReactNode;
  open?: boolean;
  active?: boolean;
  forceOpen?: boolean;
  count?: ReactNode;
  color?: string;
  colorSlot?: string;
  collapsed?: boolean;
  onToggle?: () => void;
  onHeaderClick?: (e: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}

/**
 * Sección acordeón del panel lateral — alimentación típica vía JSON (`catalog-categories` mode sections).
 */
export function SidePanelSection({
  icon = "mdi:folder-outline", label, open, active, forceOpen, count, color = "primary", colorSlot, collapsed, onToggle, onHeaderClick, children,
}: SidePanelSectionProps) {
  /* --sm-accent = color puro; --sm-accent-fg = bow 20% (solo para texto). */
  const bow = `color-mix(in oklch, ${resolveColor(color)} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)`;
  const accentStyle = { "--sm-accent": resolveColor(color), "--sm-accent-fg": bow } as CSSProperties;
  return (
    <div className={["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" ")} style={accentStyle} data-section-color={colorSlot ?? color}>
      <div style={{ display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" }}>
        <Button variant={active ? "soft" : "text"} shape="rect" color={color} onClick={onHeaderClick} style={{ flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }} title={typeof label === "string" ? label : undefined}>
          <PanelIcon icon={icon} style={collapsed ? { fontSize: "1.2rem" } : undefined} />
          {!collapsed && (
            <>
              <span className="sm-title-group">
                <span className="sm-label">{label}</span>
              </span>
              {count != null && <span className="sm-trail"><Badge>{count}</Badge></span>}
            </>
          )}
        </Button>
        {!forceOpen && !collapsed && (
          <Button variant="text" shape="rect" color={color} onClick={(e) => { e.stopPropagation(); onToggle?.(); }} style={{ flex: "0 0 auto", width: "fit-content", minWidth: "2rem", paddingInline: "0.25rem" }} title={open ? "Contraer" : "Expandir"} aria-expanded={open}>
            <PanelIcon icon="mdi:chevron-down" style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.15s" }} />
          </Button>
        )}
      </div>
      {open && !collapsed && (
        <div className="sm-content mimicus-side-panel-section__content" style={{ paddingLeft: "0.35rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>{children}</div>
        </div>
      )}
    </div>
  );
}
