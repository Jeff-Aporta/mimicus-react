import { useEffect } from "react";
import type { DependencyList, RefObject } from "react";
import { bindNavComponent } from "./controllers.ts";

/** Monta controlador vanilla en el nodo raíz del componente React. */
export function useNavBinding(
  ref: RefObject<HTMLElement | null>,
  type: string,
  deps: DependencyList = [],
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.dataset.mimicusNav = type;
    return bindNavComponent(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
