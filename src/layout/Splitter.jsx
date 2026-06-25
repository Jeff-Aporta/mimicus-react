import { useEffect, useRef, useState } from "react";
import { subscribeNarrowViewport } from "./layoutBreakpoints.js";
import { clampSplitterSize, readSplitterStorage, writeSplitterStorage } from "./splitterResize.js";

export function Splitter({
  direction = "horizontal",
  panelSize: panelSizeProp = 280,
  minSize = 180,
  maxSize = 720,
  collapsed = false,
  collapsedSize = 52,
  resizable = true,
  storageKey = "",
  responsive = true,
  panelEnd = false,
  inline = false,
  className,
  style,
  panel,
  children,
  ...rest
}) {
  const [panelSize, setPanelSize] = useState(panelSizeProp);
  const [dragging, setDragging] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, size: panelSizeProp });
  const resizeHandle = useRef(null);

  useEffect(() => { setPanelSize(panelSizeProp); }, [panelSizeProp]);

  useEffect(() => {
    if (storageKey) setPanelSize(readSplitterStorage(storageKey, panelSizeProp, minSize, maxSize));
    return subscribeNarrowViewport(setNarrow);
  }, [storageKey, panelSizeProp, minSize, maxSize]);

  const sizePx = collapsed ? collapsedSize : panelSize;
  const isHorizontal = direction === "horizontal";
  const stacked = responsive && narrow && isHorizontal;
  const resizeAlongX = isHorizontal && !stacked;
  const panelStyle = resizeAlongX
    ? { width: sizePx, flex: `0 0 ${sizePx}px` }
    : stacked
      ? { width: "100%", flex: `0 0 ${sizePx}px`, maxWidth: "100%" }
      : { height: sizePx, flex: `0 0 ${sizePx}px` };
  const resizeCursor = resizeAlongX ? "col-resize" : "row-resize";
  const bodyResizeClass = resizeAlongX ? "is-split-resize-active--horizontal" : "is-split-resize-active--vertical";

  const rootClass = [
    "is-splitter",
    isHorizontal ? "is-splitter--horizontal" : "is-splitter--vertical",
    inline && "is-splitter--inline",
    stacked && "is-splitter--stacked",
    responsive && "is-splitter--responsive",
    panelEnd && "is-splitter--panel-end",
    collapsed && "is-splitter--collapsed",
    dragging && "is-splitter--dragging",
    className,
  ].filter(Boolean).join(" ");

  function onResizeStart(e) {
    if (collapsed || !resizable) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    resizeHandle.current?.setPointerCapture(e.pointerId);
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, size: panelSize };
    document.body.classList.add("is-split-resize-active", bodyResizeClass);
  }

  function onResizeMove(e) {
    if (!dragging) return;
    const delta = resizeAlongX ? e.clientX - dragStart.current.x : e.clientY - dragStart.current.y;
    setPanelSize(clampSplitterSize(dragStart.current.size + delta, minSize, maxSize));
  }

  function onResizeEnd(e) {
    if (!dragging) return;
    setDragging(false);
    setPanelSize((s) => {
      const next = clampSplitterSize(s, minSize, maxSize);
      writeSplitterStorage(storageKey, next);
      return next;
    });
    document.body.classList.remove("is-split-resize-active", bodyResizeClass);
    try { resizeHandle.current?.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
  }

  return (
    <div className={rootClass} style={style} {...rest}>
      <div className="is-splitter__panel" style={panelStyle}>
        <div className="is-splitter__panel-body">{panel}</div>
        {resizable && !collapsed && (
          <div
            ref={resizeHandle}
            className={["is-splitter__resize-handle", resizeAlongX ? "is-splitter__resize-handle--col" : "is-splitter__resize-handle--row", dragging && "is-dragging"].filter(Boolean).join(" ")}
            role="presentation"
            aria-hidden="true"
            title="Arrastrar para cambiar tamaño"
            style={{ cursor: resizeCursor }}
            onPointerDown={onResizeStart}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeEnd}
            onPointerCancel={onResizeEnd}
          />
        )}
      </div>
      <div className="is-splitter__main">{children}</div>
    </div>
  );
}
