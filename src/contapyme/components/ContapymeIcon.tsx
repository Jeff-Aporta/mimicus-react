/**
 * ContapymeIcon — isla: contapyme
 * repo: Jeff-Aporta/mimicus-react · src/contapyme/components/ContapymeIcon.tsx
 * Wrapper del web component <iconify-icon> con tamaño y estilo en línea.
 */
import type { CSSProperties, HTMLAttributes } from "react";

export interface ContapymeIconProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  icon: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function ContapymeIcon({ icon, size = 20, className, style, ...rest }: ContapymeIconProps) {
  return (
    <iconify-icon
      icon={icon}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-flex", verticalAlign: "middle", ...(style && typeof style === "object" ? style : {}) }}
      {...rest}
    />
  );
}
