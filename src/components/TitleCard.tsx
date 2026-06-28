/**
 * TitleCard — isla: display
 * repo: Jeff-Aporta/mimicus-react · src/components/TitleCard.tsx
 * Banda título compacta (icono + label) reutilizable en tarjetas, listas y footers glass.
 */
import type { ElementType, ReactNode } from "react";
import { GlassHeaderBand } from "./GlassHeaderBand.tsx";

export interface TitleCardProps {
  title: ReactNode;
  titleId?: string;
  icon?: string | false;
  subtitle?: ReactNode;
  sectionColor?: string;
  className?: string;
  as?: ElementType;
  children?: ReactNode;
}

export function TitleCard({
  title,
  titleId,
  icon = "mdi:circle-small",
  subtitle,
  sectionColor,
  className = "",
  as = "div",
  children,
}: TitleCardProps) {
  return (
    <GlassHeaderBand
      as={as}
      compact
      title={title}
      titleId={titleId}
      icon={icon}
      subtitle={subtitle}
      sectionColor={sectionColor}
      className={["mimicus-title-card", className].filter(Boolean).join(" ")}
    >
      {children}
    </GlassHeaderBand>
  );
}
