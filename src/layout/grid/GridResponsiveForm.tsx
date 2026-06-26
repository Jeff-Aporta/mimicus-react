/**
 * GridResponsiveForm — isla: layout
 * llm:  ./GridResponsiveForm.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/layout/grid/GridResponsiveForm.tsx
 * Rejilla de formulario responsive: nº de columnas según breakpoint (sizew), acotado por min/maxcells.
 */
import type { CSSProperties, ReactNode } from "react";
import { BlockLayout } from "./BlockLayout.tsx";
import { GridLayout } from "./GridLayout.tsx";
import { useLayoutSlot } from "../app-layout/layoutSlotContext.tsx";
import { BREAKPOINT_W } from "../shared/layoutHelpers.ts";

const CELLS_BY_SIZEW: Record<string, number> = { xs: 1, sm: 1, md: 3, lg: 4, xl: 5 };

export interface GridResponsiveFormProps {
  maxcells?: number;
  mincells?: number;
  gap?: string | number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
}

function computeCells(sizew: string, maxcells: number | undefined, mincells: number | undefined): number {
  const base = CELLS_BY_SIZEW[sizew] ?? 1;
  const capped = typeof maxcells === "number" && maxcells > 0 ? Math.min(base, maxcells) : base;
  return typeof mincells === "number" && mincells > 0 ? Math.max(capped, mincells) : capped;
}

function GridResponsiveFormInner({ maxcells, mincells, gap = "1rem", children, ...gridProps }: GridResponsiveFormProps) {
  const { sizew } = useLayoutSlot();
  const cells = computeCells(sizew ?? "md", maxcells, mincells);
  return (
    <GridLayout sizew={sizew} cells={String(cells)} gap={gap} {...gridProps}>
      {children}
    </GridLayout>
  );
}

/** Formulario responsive: BlockLayout + GridLayout con cells según breakpoint Mimicus. */
export function GridResponsiveForm({ maxcells, mincells, gap = "1rem", className, style, children, ...gridProps }: GridResponsiveFormProps) {
  return (
    <BlockLayout className={["mimicus-grid-responsive-form", className].filter(Boolean).join(" ")} style={style}>
      <GridResponsiveFormInner maxcells={maxcells} mincells={mincells} gap={gap} {...gridProps}>
        {children}
      </GridResponsiveFormInner>
    </BlockLayout>
  );
}

export { BREAKPOINT_W };
