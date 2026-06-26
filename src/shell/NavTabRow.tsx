/**
 * NavTabRow — isla: shell
 * repo: Jeff-Aporta/mimicus-react · src/shell/NavTabRow.tsx
 * Fila de tabs del shell — datos desde `resolveShellNavigation` (JSON).
 */
import { useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Button } from "../components/Button.tsx";

// Tab proviene del JSON del shell (resolveShellNavigation), forma heterogénea; `any` puntual.
export interface NavTab {
  id: string;
  label?: ReactNode;
  title?: ReactNode;
  color?: string;
  icon?: string;
  kind?: string;
  disabled?: boolean;
  disabledTitle?: string;
  [key: string]: any;
}

export interface NavTabRowProps {
  tabs?: NavTab[];
  value?: string;
  onChange?: (id: string, tab: NavTab) => void;
  tier?: "primary" | "secondary";
  className?: string;
  tabHref?: (id: string) => string | undefined;
}

export function NavTabRow({ tabs = [], value, onChange, tier = "primary", className, tabHref }: NavTabRowProps) {
  const secondary = tier === "secondary";
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value || !scrollerRef.current) return;
    const active = scrollerRef.current.querySelector(".pg-nav-tab.is-active, .pg-nav-tab[aria-selected='true']");
    active?.scrollIntoView?.({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [value, tabs.length]);

  return (
    <div className={["pg-nav-row", secondary ? "pg-nav-row--secondary" : "pg-nav-row--primary", className].filter(Boolean).join(" ")} role="tablist">
      <div ref={scrollerRef} className="pg-nav-row__scroller custom-scrollbar">
        {tabs.map((tab) => {
          const selected = value === tab.id;
          const label = tab.label || tab.title || tab.id;
          const tabColor = tab.color ?? "primary";
          const onClick = (e: MouseEvent<HTMLElement>) => {
            if (tab.disabled) return;
            if (tabHref && (e.ctrlKey || e.metaKey || e.button === 1)) {
              const url = tabHref(tab.id);
              if (url) {
                e.preventDefault();
                window.open(url, "_blank", "noopener,noreferrer");
                return;
              }
            }
            onChange?.(tab.id, tab);
          };
          return (
            <Button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              disabled={Boolean(tab.disabled)}
              variant={selected ? "soft" : "text"}
              shape="rect"
              color={tabColor}
              className={["pg-nav-tab", selected && "is-active"].filter(Boolean).join(" ")}
              data-section-color={tab.kind === "action" || tab.id?.startsWith("__") ? undefined : tabColor}
              title={tab.disabled ? tab.disabledTitle || "No disponible" : String(label)}
              onClick={onClick}
              onAuxClick={onClick}
              icon={tab.icon ? <iconify-icon className="pg-nav-tab__icon" icon={tab.disabled ? "mdi:lock-outline" : tab.icon} aria-hidden /> : undefined}
            >
              <span className="pg-nav-tab__label">{label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
