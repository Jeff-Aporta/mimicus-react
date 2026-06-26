import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getBreakPoint, getSlotResume } from "../shared/layoutHelpers.ts";

// getSlotResume devuelve un "resume" de slot desde helpers .js (any); lo tipamos como SlotResume pragmático.
type SlotResume = ReturnType<typeof getSlotResume>;

const DEFAULT_SLOT: SlotResume = getSlotResume("md", 0);
export const LayoutSlotContext = createContext<SlotResume>(DEFAULT_SLOT);

export function useLayoutSlot(): SlotResume {
  return useContext(LayoutSlotContext) ?? DEFAULT_SLOT;
}

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

  return { ref, sizew, slot };
}
