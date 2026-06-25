import { useEffect } from "react";
import { bindNavComponent } from "./controllers.js";

/** Monta controlador vanilla en el nodo raíz del componente React. */
export function useNavBinding(ref, type, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.dataset.mimicusNav = type;
    return bindNavComponent(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
