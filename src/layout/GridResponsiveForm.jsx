import { BlockLayout } from "./BlockLayout.jsx";
import { GridLayout } from "./GridLayout.jsx";
import { useLayoutSlot } from "./layoutSlotContext.jsx";
import { BREAKPOINT_W } from "./layoutHelpers.js";

const CELLS_BY_SIZEW = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };

function computeCells(sizew, maxcells, mincells) {
  const base = CELLS_BY_SIZEW[sizew] ?? 1;
  const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
  return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
}

function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }) {
  const { sizew } = useLayoutSlot();
  const cells = computeCells(sizew ?? "md", maxcells, mincells);
  return (
    <GridLayout sizew={sizew} cells={String(cells)} gap={gap} {...gridProps}>
      {children}
    </GridLayout>
  );
}

/** Formulario responsive: BlockLayout + GridLayout con cells según breakpoint Mimicus. */
export function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }) {
  return (
    <BlockLayout className={["mimicus-grid-responsive-form", className].filter(Boolean).join(" ")} style={style}>
      <GridResponsiveFormInner maxcells={maxcells} mincells={mincells} gap={gap} {...gridProps}>
        {children}
      </GridResponsiveFormInner>
    </BlockLayout>
  );
}

export { BREAKPOINT_W };
