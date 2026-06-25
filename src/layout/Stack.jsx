import { Children } from "react";
import { FlexLayout } from "./FlexLayout.jsx";

const SPACING_PRESET = { small: "0.5rem", medium: "0.75rem", large: "1rem" };

function resolveSpacing(spacing) {
  if (spacing == null || spacing === "") return 0;
  if (typeof spacing === "number") return `${spacing * 8}px`;
  if (typeof spacing === "string" && SPACING_PRESET[spacing]) return SPACING_PRESET[spacing];
  return String(spacing);
}

/** MUI Stack — layout 1D; delega en FlexLayout con defaults Mimicus. */
export function Stack({
  direction = "column",
  spacing = 0,
  divider,
  alignItems,
  justifyContent,
  className,
  style,
  children,
  ...rest
}) {
  const gap = resolveSpacing(spacing);
  const flexDir = direction === "row" || direction === "row-reverse" ? direction : direction === "column-reverse" ? "column-reverse" : "column";
  const items = Children.toArray(children).filter((c) => c != null && c !== false);

  return (
    <FlexLayout
      direction={flexDir}
      gap={gap || undefined}
      items={alignItems}
      justify={justifyContent}
      className={["mimicus-stack", className].filter(Boolean).join(" ")}
      style={style}
      {...rest}
    >
      {divider
        ? items.flatMap((child, i) => (i < items.length - 1 ? [child, <span key={`d-${i}`} className="mimicus-stack__divider">{divider}</span>] : [child]))
        : children}
    </FlexLayout>
  );
}
