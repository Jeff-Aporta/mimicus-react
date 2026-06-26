/**
 * Icon — isla: primitives
 * demo: demo/config/demos/lib/Iconify.json
 * llm:  ./Icon.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/components/Icon.tsx
 * Wrapper de <iconify-icon> (web component) para usar íconos por nombre en React.
 */
import type { CSSProperties, ReactElement } from "react";

export interface IconProps {
  icon?: string;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ icon, className, style }: IconProps): ReactElement | null {
  if (!icon) return null;
  return <iconify-icon icon={icon} className={className} style={style && typeof style === "object" ? style : undefined} />;
}
