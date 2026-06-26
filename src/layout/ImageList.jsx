/**
 * ImageList — isla: layout
 * demo: demo/config/demos/lib/ImageList.json
 * llm:  ./ImageList.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/ImageList.jsx
 * Cuadrícula de imágenes estilo MUI (standard/masonry/quilted); expone ImageList.Item con cols/rows span.
 */
import { joinStyle } from "./layoutHelpers.js";

function resolveGap(gap) {
  if (gap == null || gap === "") return "4px";
  if (typeof gap === "number") return `${gap}px`;
  return String(gap);
}

export function ImageListItem({ cols = 1, rows = 1, className, style, children, ...rest }) {
  const spanStyle = joinStyle(
    cols > 1 && `grid-column: span ${cols}`,
    rows > 1 && `grid-row: span ${rows}`,
    style,
  );
  return (
    <li className={["mimicus-image-list__item", className].filter(Boolean).join(" ")} style={spanStyle} {...rest}>
      {children}
    </li>
  );
}

/** MUI ImageList — cuadrícula de imágenes (standard / masonry via variant). */
export function ImageList({
  cols = 3,
  rowHeight = 164,
  gap = 4,
  variant = "standard",
  className,
  style,
  children,
  ...rest
}) {
  const g = resolveGap(gap);
  const cls = ["mimicus-image-list", variant === "masonry" && "mimicus-image-list--masonry", className].filter(Boolean).join(" ");

  if (variant === "masonry") {
    return (
      <ul className={cls} style={joinStyle(`column-count: ${cols}`, `column-gap: ${g}`, "list-style: none", "margin: 0", "padding: 0", style)} {...rest}>
        {children}
      </ul>
    );
  }

  return (
    <ul
      className={cls}
      style={joinStyle(
        "display: grid",
        `grid-template-columns: repeat(${cols}, minmax(0, 1fr))`,
        `gap: ${g}`,
        variant === "quilted" && "grid-auto-rows: auto",
        `grid-auto-rows: ${rowHeight}px`,
        "list-style: none",
        "margin: 0",
        "padding: 0",
        style,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}

ImageList.Item = ImageListItem;
