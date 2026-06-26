/**
 * GridLayout — isla: layout
 * demo: demo/config/demos/lib/GridLayout.json
 * llm:  ./GridLayout.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/GridLayout.jsx
 * Contenedor CSS grid con plantilla de celdas (columns/rows), dirección, justify, align y gap.
 */
import { LayoutSlotContext, useLayoutContainer } from "./layoutSlotContext.jsx";
import { dataDebug, getScrollbarClass, joinStyle, resolveGap, resolveGridTemplate, resolveJustify } from "./layoutHelpers.js";

export function GridLayout({
  cells = "",
  cellsFit = false,
  direction = "column",
  justify,
  items,
  gap,
  inline = false,
  sizew: sizewProp,
  cscroll = false,
  className,
  style,
  children,
  ...rest
}) {
  const { ref, sizew, slot } = useLayoutContainer(sizewProp);
  const isColumn = (direction || "column") === "column";
  const isRow = direction === "row";
  const gridTemplate = resolveGridTemplate(cells, cellsFit);
  const cls = [getScrollbarClass(cscroll, style), className].filter(Boolean).join(" ");
  const mergedStyle = joinStyle(
    `gap: ${resolveGap(gap, sizew)}`,
    isColumn && gridTemplate && `grid-template-columns: ${gridTemplate}`,
    isRow && gridTemplate && `grid-template-rows: ${gridTemplate}`,
    isRow && "grid-auto-flow: column",
    justify && `justify-content: ${resolveJustify(justify)}`,
    items && `align-items: ${items}`,
    style,
    `display: ${inline ? "inline-grid" : "grid"}`,
  );

  return (
    <LayoutSlotContext.Provider value={slot}>
      <div ref={ref} className={cls} style={mergedStyle} {...rest} {...dataDebug(rest, "grid-layout")}>
        {children}
      </div>
    </LayoutSlotContext.Provider>
  );
}
