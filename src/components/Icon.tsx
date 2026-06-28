/**
 * Icon — isla: primitives
 * demo: demo/config/demos/lib/Iconify.json
 * llm:  ./Icon.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/components/Icon.tsx
 * Wrapper de <iconify-icon> (web component) para usar íconos Iconify por nombre en React.
 */
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactElement } from "react";

export interface IconProps {
  icon?: string;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ icon, className, style }: IconProps): ReactElement | null {
  // <iconify-icon> es un custom element: React no refleja `className`→`class` en él
  // (deja un atributo `classname` inerte). Fijamos el `class` real vía ref para que el CSS aplique.
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (className) el.setAttribute("class", className);
    else el.removeAttribute("class");
  }, [className]);
  if (!icon) return null;
  return <iconify-icon ref={ref} icon={icon} style={style && typeof style === "object" ? style : undefined} />;
}
