/**
 * Masonry — isla: layout
 * demo: demo/config/demos/lib/Masonry.json
 * llm:  ./Masonry.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/grid/Masonry.tsx
 * Distribución en columnas CSS con alturas variables (Ant Masonry); acepta children o items+itemRender.
 */
import { Children } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { joinStyle } from "../shared/layoutHelpers.ts";

type MasonryColumns = number | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", number>>;

interface MasonryItem {
  key?: string | number;
  id?: string | number;
  children?: ReactNode;
  [key: string]: unknown;
}

export interface MasonryProps extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  columns?: MasonryColumns;
  gutter?: string | number;
  style?: CSSProperties;
  children?: ReactNode;
  items?: MasonryItem[];
  itemRender?: (item: MasonryItem) => ReactNode;
}

function resolveGutter(gutter: string | number | undefined): string {
  if (gutter == null || gutter === "") return "0";
  if (typeof gutter === "number") return `${gutter}px`;
  return String(gutter);
}

function resolveColumns(columns: MasonryColumns, sizew: string = "md"): number {
  if (typeof columns === "number") return columns;
  if (columns && typeof columns === "object") {
    const order: Array<"xs" | "sm" | "md" | "lg" | "xl"> = ["xs", "sm", "md", "lg", "xl"];
    const idx = order.indexOf(sizew as "xs" | "sm" | "md" | "lg" | "xl");
    let n = columns.xs ?? 1;
    for (const bp of order) {
      if (columns[bp] != null) n = columns[bp]!;
      if (bp === sizew || order.indexOf(bp) >= idx) break;
    }
    return n;
  }
  return 3;
}

/** Ant Masonry — columnas CSS con alturas variables. */
export function Masonry({ columns = 3, gutter = 0, className, style, children, items, itemRender, ...rest }: MasonryProps) {
  const cols = resolveColumns(columns);
  const gap = resolveGutter(gutter);
  const cls = ["mimicus-masonry", className].filter(Boolean).join(" ");
  const rootStyle = joinStyle(`column-count: ${cols}`, `column-gap: ${gap}`, style);

  if (items?.length) {
    return (
      <div className={cls} style={rootStyle} {...rest}>
        {items.map((item) => (
          <div key={item.key ?? item.id} className="mimicus-masonry__item" style={{ breakInside: "avoid", marginBottom: gap }}>
            {itemRender ? itemRender(item) : item.children}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cls} style={rootStyle} {...rest}>
      {Children.map(children, (child, i) => (
        <div key={i} className="mimicus-masonry__item" style={{ breakInside: "avoid", marginBottom: gap }}>{child}</div>
      ))}
    </div>
  );
}
