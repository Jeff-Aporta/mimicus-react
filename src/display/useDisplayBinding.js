import { useEffect } from "react";
import { bindDisplayComponent } from "./controllers.js";

/** Monta controlador vanilla en el nodo raíz del componente React. */
export function useDisplayBinding(ref, type, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !type) return undefined;
    el.dataset.mimicusDisplay = type;
    return bindDisplayComponent(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
