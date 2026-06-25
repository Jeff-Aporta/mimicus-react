import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getBreakPoint, getSlotResume } from "./layoutHelpers.js";

const DEFAULT_SLOT = getSlotResume("md", 0);
export const LayoutSlotContext = createContext(DEFAULT_SLOT);

export function useLayoutSlot() {
  return useContext(LayoutSlotContext) ?? DEFAULT_SLOT;
}

export function useLayoutContainer(sizewProp) {
  const ref = useRef(null);
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
