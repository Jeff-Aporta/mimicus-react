/**
 * SidePanelSection — isla: layout
 * llm:  ./SidePanelSection.llm.md
 * css:  css/components/side-panel.css
 * repo: Jeff-Aporta/mimicus-react · src/layout/SidePanelSection.jsx
 * Sección tipo acordeón para SidePanel: encabezado con icono, label, conteo y dots de estado.
 */
import { Button } from "../components/Button.jsx";
import { Badge } from "../components/display/Display.jsx";
import { resolveColor } from "../lib/resolveColor.js";

function StatusDot({ color, size = "0.48rem" }) {
  return <span className="mimicus-side-panel-section__status-dot" style={{ width: size, height: size, borderRadius: "50%", background: resolveColor(color), display: "inline-block", flexShrink: 0 }} aria-hidden />;
}

function PanelIcon({ icon, style }) {
  if (!icon) return null;
  return <iconify-icon icon={icon} style={{ fontSize: "1.1rem", flexShrink: 0, ...style }} aria-hidden />;
}

/**
 * Sección acordeón del panel lateral — alimentación típica vía JSON (`catalog-categories` mode sections).
 */
export function SidePanelSection({
  icon = "mdi:folder-outline", label, open, active, forceOpen, count, statusDots = [], color = "primary", collapsed, onToggle, onHeaderClick, children,
}) {
  const statusDotsUnique = [...new Set(statusDots)];
  const accentStyle = { "--sm-accent": resolveColor(color) };
  return (
    <div className={["mimicus-side-panel-section", "sm-section", collapsed && "is-collapsed", open && !collapsed && "is-open", active && "is-active"].filter(Boolean).join(" ")} style={accentStyle} data-section-color={color}>
      <div style={{ display: "flex", alignItems: "stretch", gap: "0.1rem", width: "100%" }}>
        <Button variant={active ? "soft" : "text"} shape="rect" color={color} onClick={onHeaderClick} style={{ flex: "1 1 auto", minWidth: 0, justifyContent: collapsed ? "center" : "flex-start", fontSize: "0.78rem", fontWeight: 600 }} title={label}>
          <PanelIcon icon={icon} style={collapsed ? { fontSize: "1.2rem" } : undefined} />
          {!collapsed && (
            <>
              <span className="sm-title-group">
                <span className="sm-label">{label}</span>
                {statusDotsUnique.length > 0 && (
                  <span className="sm-status-dots">
                    {statusDotsUnique.map((dotColor) => <StatusDot key={dotColor} color={dotColor} />)}
                  </span>
                )}
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
