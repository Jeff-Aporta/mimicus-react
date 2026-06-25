const LAYOUT_BP_NARROW = 768;

export function subscribeNarrowViewport(onChange) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW - 1}px)`);
  const sync = () => onChange(mq.matches);
  sync();
  mq.addEventListener("change", sync);
  return () => mq.removeEventListener("change", sync);
}
