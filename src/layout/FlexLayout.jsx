import { LayoutSlotContext, useLayoutContainer } from "./layoutSlotContext.jsx";
import { dataDebug, getScrollbarClass, joinStyle, resolveGap, resolveJustify } from "./layoutHelpers.js";

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
}) {
  const { ref, sizew, slot } = useLayoutContainer(sizewProp);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `gap: ${resolveGap(gap, sizew)}`,
    direction && `flex-direction: ${direction}`,
    `flex-wrap: ${wrap ? "wrap" : "nowrap"}`,
    justify && `justify-content: ${resolveJustify(justify)}`,
    items && `align-items: ${items}`,
    style,
    `display: ${inline ? "inline-flex" : "flex"}`,
  );

  return (
    <LayoutSlotContext.Provider value={slot}>
      <div ref={ref} className={cls} style={mergedStyle} {...rest} {...dataDebug(rest, "flex-layout")}>
        {children}
      </div>
    </LayoutSlotContext.Provider>
  );
}
