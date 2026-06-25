import { LayoutSlotContext, useLayoutContainer } from "./layoutSlotContext.jsx";
import { dataDebug, getScrollbarClass, joinStyle } from "./layoutHelpers.js";

export function BlockLayout({ inline = false, sizew: sizewProp, cscroll = false, className, style, children, ...rest }) {
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
