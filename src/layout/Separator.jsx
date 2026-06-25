import { resolveColor } from "../lib/resolveColor.js";

export function Separator({
  orientation = "horizontal",
  color = "",
  borderStyle = "solid",
  thickness = 1,
  startMargin = 8,
  endMargin = 8,
  className,
  style,
  ...rest
}) {
  const axis = orientation === "vertical" ? "vertical" : "horizontal";
  const lineColor = color ? resolveColor(color) : resolveColor("border");
  const cls = ["mimicus-separator", `mimicus-separator--${axis}`, className].filter(Boolean).join(" ");

  const mergedStyle = axis === "horizontal"
    ? {
        display: "block",
        width: "100%",
        height: 0,
        border: "none",
        borderTop: `${thickness}px ${borderStyle} ${lineColor}`,
        margin: `${startMargin}px 0 ${endMargin}px`,
        ...style,
      }
    : {
        display: "inline-block",
        alignSelf: "stretch",
        width: 0,
        minHeight: "1em",
        height: "auto",
        border: "none",
        borderLeft: `${thickness}px ${borderStyle} ${lineColor}`,
        margin: `0 ${startMargin}px 0 ${endMargin}px`,
        verticalAlign: "middle",
        flexShrink: 0,
        ...style,
      };

  return <span className={cls} role="separator" aria-orientation={axis} style={mergedStyle} {...rest} />;
}
