/**
 * BlockLayout — isla: layout
 * demo: demo/config/demos/lib/BlockLayout.json
 * llm:  ./BlockLayout.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/grid/BlockLayout.tsx
 * Contenedor block/inline-block que provee el slot de tamaño (sizew) por contenedor responsive.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { LayoutSlotContext, useLayoutContainer } from "../app-layout/layoutSlotContext.tsx";
import { dataDebug, getScrollbarClass, joinStyle } from "../shared/layoutHelpers.ts";

export interface BlockLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  inline?: boolean;
  sizew?: string;
  cscroll?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }: BlockLayoutProps) {
  const { ref, slot } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(style, `display: ${inline ? "inline-block" : "block"}`);

  return (
    <LayoutSlotContext.Provider value={slot}>
      <div ref={ref} className={cls} style={mergedStyle} {...rest} {...dataDebug(rest, "block-layout")}>
        {children}
      </div>
    </LayoutSlotContext.Provider>
  );
}
