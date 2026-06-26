import { useEffect } from "react";
import type { DependencyList, RefObject } from "react";
import { bindDisplayComponent } from "./controllers.ts";

/** Monta controlador vanilla en el nodo raíz del componente React. */
export function useDisplayBinding(
  ref: RefObject<HTMLElement | null>,
  type: string | null | undefined,
  deps: DependencyList = [],
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || !type) return undefined;
    el.dataset.mimicusDisplay = type;
    return bindDisplayComponent(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
