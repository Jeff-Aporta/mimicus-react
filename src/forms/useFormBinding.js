import { useEffect } from "react";
import { bindFormComponent } from "./controllers.js";

/** Monta controlador vanilla en el nodo raíz del componente React. */
export function useFormBinding(ref, type, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.dataset.mimicusForm = type;
    return bindFormComponent(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
