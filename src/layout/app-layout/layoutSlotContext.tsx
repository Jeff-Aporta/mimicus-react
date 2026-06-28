import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { getBreakPoint, getSlotResume } from "../shared/layoutHelpers.ts";

// getSlotResume devuelve un "resume" de slot desde helpers .js (any); lo tipamos como SlotResume pragmático.
type SlotResume = ReturnType<typeof getSlotResume>;

const DEFAULT_SLOT: SlotResume = getSlotResume("md", 0);
export const LayoutSlotContext = createContext<SlotResume>(DEFAULT_SLOT);

/** Recupera, en cualquier punto del árbol, el tamaño/breakpoint del layout contenedor más cercano (en tiempo real). */
export function useLayoutSlot(): SlotResume {
  return useContext(LayoutSlotContext) ?? DEFAULT_SLOT;
}
/** Alias semántico de useLayoutSlot: {sizew, boolszw, lerpw, width}. */
export const useLayoutSize = useLayoutSlot;

export function useLayoutContainer(sizewProp?: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [clientWidth, setClientWidth] = useState(0);
  const sizew = sizewProp ?? getBreakPoint(clientWidth);
  const slot = getSlotResume(sizew, clientWidth);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(([entry]) => setClientWidth(entry.contentRect.width));
    ro.observe(el);
    setClientWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Vars recuperables en tiempo real desde CSS/JS: data-sizew + --mlg-w (ancho) + --mlg-bp (índice de breakpoint).
  const bpIndex = ["xs", "sm", "md", "lg", "xl"].indexOf(sizew);
  const vars = { "--mlg-w": `${Math.round(clientWidth)}px`, "--mlg-bp": String(bpIndex) } as CSSProperties;

  return { ref, sizew, slot, clientWidth, dataSizew: sizew, vars };
}
