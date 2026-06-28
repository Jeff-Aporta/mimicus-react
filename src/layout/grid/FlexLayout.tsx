/**
 * FlexLayout — isla: layout
 * demo: demo/config/demos/lib/FlexLayout.json
 * llm:  ./FlexLayout.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/grid/FlexLayout.tsx
 * Contenedor flexbox con dirección, wrap, justify, align y gap resuelto por breakpoint.
 */
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { LayoutSlotContext, useLayoutContainer } from "../app-layout/layoutSlotContext.tsx";
import { dataDebug, getScrollbarClass, joinStyle, resolveGap, resolveJustify } from "../shared/layoutHelpers.ts";

export interface FlexLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  direction?: CSSProperties["flexDirection"];
  wrap?: boolean;
  inline?: boolean;
  justify?: string;
  items?: CSSProperties["alignItems"];
  gap?: string | number;
  sizew?: string;
  cscroll?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export function FlexLayout({
  direction,
  wrap = false,
  inline = false,
  justify,
  items,
  gap,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}: FlexLayoutProps) {
  const { ref, sizew, slot, dataSizew, vars } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = {
    ...joinStyle(
      `gap: ${resolveGap(gap, sizew)}`,
      direction && `flex-direction: ${direction}`,
      `flex-wrap: ${wrap ? "wrap" : "nowrap"}`,
      justify && `justify-content: ${resolveJustify(justify)}`,
      items && `align-items: ${items}`,
      style,
      `display: ${inline ? "inline-flex" : "flex"}`,
    ),
    ...vars,
  };

  return (
    <LayoutSlotContext.Provider value={slot}>
      <div ref={ref} className={cls} style={mergedStyle} data-sizew={dataSizew} {...rest} {...dataDebug(rest, "flex-layout")}>
        {children}
      </div>
    </LayoutSlotContext.Provider>
  );
}
