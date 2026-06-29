/**
 * GlassHeaderBand — isla: primitives
 * repo: Jeff-Aporta/mimicus-react · src/components/GlassHeaderBand.tsx
 * Banda header glass con icono opcional (paridad LoginHeaderBand / swagger dialogs).
 */
import type { CSSProperties, ElementType, ReactNode } from "react";
import { Icon } from "./Icon.tsx";
import { resolveColor } from "../lib/resolveColor.ts";

export interface GlassHeaderBandProps {
  title: ReactNode;
  titleId?: string;
  icon?: string | false;
  subtitle?: ReactNode;
  compact?: boolean;
  className?: string;
  as?: ElementType;
  sectionColor?: string;
  children?: ReactNode;
}

export function GlassHeaderBand({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  compact = false,
  className = "",
  as: Tag = "header",
  sectionColor,
  children,
}: GlassHeaderBandProps) {
  const rootClass = ["mimicus-glass-header", compact && "mimicus-glass-header--compact", className].filter(Boolean).join(" ");
  /* --sm-accent = color puro (superficies); --sm-accent-fg = bow 20% (texto). */
const bow = sectionColor ? `color-mix(in oklch, ${resolveColor(sectionColor)} 20%, var(--pg-sidebar-fg, var(--mimicus-color)) 80%)` : undefined;
const accentStyle = sectionColor
    ? ({ "--sm-accent": resolveColor(sectionColor), "--sm-accent-fg": bow } as CSSProperties)
    : undefined;

  return (
    <Tag className={rootClass} data-section-color={sectionColor || undefined} style={accentStyle}>
      {icon !== false && icon ? (
        <span className="mimicus-glass-header__icon" aria-hidden>
          <Icon icon={icon} />
        </span>
      ) : null}
      <div className="mimicus-glass-header__body">
        <span id={titleId} className="mimicus-glass-header__title">{title}</span>
        {subtitle ? <span className="mimicus-glass-header__subtitle">{subtitle}</span> : null}
      </div>
      {children ? <div className="mimicus-glass-header__tools">{children}</div> : null}
    </Tag>
  );
}
