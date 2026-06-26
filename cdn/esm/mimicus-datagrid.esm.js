// src/datagrid/core/valueFormatter.ts
function getCellValue(col, node) {
  const def = col.def;
  if (typeof def.valueGetter === "function") return def.valueGetter(node.data);
  return node.data[col.field];
}
function formatCellValue(col, value, node) {
  const def = col.def;
  if (typeof def.valueFormatter === "function") return def.valueFormatter(value, node.data);
  if (value == null) return "";
  if (col.type === "number" && typeof value === "number") return String(value);
  if (col.type === "boolean") return value ? "\u2713" : "";
  if (col.type === "date") {
    const d = value instanceof Date ? value : new Date(String(value));
    return Number.isNaN(d.getTime()) ? String(value) : d.toISOString().slice(0, 10);
  }
  return String(value);
}
function cellText(col, node) {
  return formatCellValue(col, getCellValue(col, node), node);
}

// src/datagrid/core/columnState.ts
var DEFAULT_WIDTH = 160;
var DEFAULT_MIN = 60;
var DEFAULT_MAX = 2e3;
function filterTypeOf(def) {
  if (def.filter === false || def.filter == null) return def.filter === void 0 ? defaultFilterFor(def) : null;
  if (def.filter === true) return defaultFilterFor(def) ?? "text";
  return def.filter;
}
function defaultFilterFor(def) {
  if (def.type === "number") return "number";
  if (def.type === "date") return "date";
  return "text";
}
function resolveColumns(defs, defaultColWidth = DEFAULT_WIDTH) {
  return defs.map((def, i) => ({
    colId: def.colId ?? def.field ?? `col-${i}`,
    field: def.field,
    headerName: def.headerName ?? def.field,
    type: def.type ?? "text",
    width: def.width ?? defaultColWidth,
    minWidth: def.minWidth ?? DEFAULT_MIN,
    maxWidth: def.maxWidth ?? DEFAULT_MAX,
    flex: def.flex,
    sortable: def.sortable !== false,
    resizable: def.resizable !== false,
    filterType: def.filter === false ? null : filterTypeOf(def),
    pinned: def.pinned ?? null,
    hide: def.hide === true,
    align: def.align ?? (def.type === "number" ? "right" : "left"),
    checkboxSelection: def.checkboxSelection === true,
    def
  }));
}
var clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
function setColumnWidth(cols, colId, width) {
  return cols.map((c) => c.colId === colId ? { ...c, width: clamp(Math.round(width), c.minWidth, c.maxWidth), flex: void 0 } : c);
}
function setColumnPinned(cols, colId, pinned) {
  return cols.map((c) => c.colId === colId ? { ...c, pinned } : c);
}
function setColumnHidden(cols, colId, hide) {
  return cols.map((c) => c.colId === colId ? { ...c, hide } : c);
}
function moveColumn(cols, colId, toIndex) {
  const from = cols.findIndex((c) => c.colId === colId);
  if (from < 0) return cols;
  const next = cols.slice();
  const [moved] = next.splice(from, 1);
  if (moved) next.splice(clamp(toIndex, 0, next.length), 0, moved);
  return next;
}
function autosizeColumn(cols, colId, rows, charPx = 7.4, padding = 28) {
  const col = cols.find((c) => c.colId === colId);
  if (!col) return cols;
  let max = col.headerName.length;
  for (const node of rows) max = Math.max(max, cellText(col, node).length);
  const width = clamp(Math.round(max * charPx + padding), col.minWidth, col.maxWidth);
  return setColumnWidth(cols, colId, width);
}
function orderedForLayout(cols) {
  const visible = cols.filter((c) => !c.hide);
  return {
    left: visible.filter((c) => c.pinned === "left"),
    center: visible.filter((c) => !c.pinned),
    right: visible.filter((c) => c.pinned === "right")
  };
}

// src/datagrid/core/pipeline/filtering.ts
function toNum(v) {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function toTime(v) {
  if (v == null || v === "") return null;
  const t = v instanceof Date ? v.getTime() : new Date(String(v)).getTime();
  return Number.isNaN(t) ? null : t;
}
function matchText(raw, f) {
  const hay = raw.toLowerCase();
  const needle = (f.value ?? "").toLowerCase();
  switch (f.op) {
    case "contains":
      return hay.includes(needle);
    case "notContains":
      return !hay.includes(needle);
    case "equals":
      return hay === needle;
    case "notEqual":
      return hay !== needle;
    case "startsWith":
      return hay.startsWith(needle);
    case "endsWith":
      return hay.endsWith(needle);
    case "blank":
      return raw.trim() === "";
    case "notBlank":
      return raw.trim() !== "";
    default:
      return true;
  }
}
function matchNumber(value, f) {
  const n = toNum(value);
  if (f.op === "blank") return n === null;
  if (f.op === "notBlank") return n !== null;
  if (n === null) return false;
  const a = f.value ?? null;
  if (a === null && f.op !== "inRange") return true;
  switch (f.op) {
    case "eq":
      return n === a;
    case "neq":
      return n !== a;
    case "gt":
      return a !== null && n > a;
    case "gte":
      return a !== null && n >= a;
    case "lt":
      return a !== null && n < a;
    case "lte":
      return a !== null && n <= a;
    case "inRange":
      return (a === null || n >= a) && (f.to == null || n <= f.to);
    default:
      return true;
  }
}
function matchDate(value, f) {
  const t = toTime(value);
  if (t === null) return false;
  const a = toTime(f.value);
  switch (f.op) {
    case "eq":
      return a !== null && new Date(t).toISOString().slice(0, 10) === new Date(a).toISOString().slice(0, 10);
    case "before":
      return a !== null && t < a;
    case "after":
      return a !== null && t > a;
    case "inRange": {
      const b = toTime(f.to ?? "");
      return (a === null || t >= a) && (b === null || t <= b);
    }
    default:
      return true;
  }
}
function matchOne(col, node, f) {
  if (f.type === "set") return f.values.length === 0 || f.values.includes(cellText(col, node));
  if (f.type === "text") return matchText(cellText(col, node), f);
  if (f.type === "number") return matchNumber(getCellValue(col, node), f);
  if (f.type === "date") return matchDate(getCellValue(col, node), f);
  return true;
}
function filterRows(rows, filterModel, quickFilter, columns, colById) {
  const entries = Object.entries(filterModel);
  const q = quickFilter.trim().toLowerCase();
  if (!entries.length && !q) return rows;
  const visibleCols = columns.filter((c) => !c.hide);
  return rows.filter((node) => {
    for (const [colId, f] of entries) {
      const col = colById.get(colId);
      if (col && !matchOne(col, node, f)) return false;
    }
    if (q) {
      const hit = visibleCols.some((c) => cellText(c, node).toLowerCase().includes(q));
      if (!hit) return false;
    }
    return true;
  });
}
function uniqueValues(rows, col) {
  const set = /* @__PURE__ */ new Set();
  for (const node of rows) set.add(cellText(col, node));
  return [...set].sort((a, b) => a.localeCompare(b, void 0, { numeric: true }));
}

// src/datagrid/core/pipeline/sorting.ts
function defaultCompare(a, b, type) {
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  if (type === "number") return Number(a) - Number(b);
  if (type === "boolean") return (a ? 1 : 0) - (b ? 1 : 0);
  if (type === "date") {
    const ta = a instanceof Date ? a.getTime() : new Date(String(a)).getTime();
    const tb = b instanceof Date ? b.getTime() : new Date(String(b)).getTime();
    return (Number.isNaN(ta) ? 0 : ta) - (Number.isNaN(tb) ? 0 : tb);
  }
  return String(a).localeCompare(String(b), void 0, { numeric: true, sensitivity: "base" });
}
function sortRows(rows, sortModel, colById) {
  if (!sortModel.length) return rows;
  const active = sortModel.map((s) => ({ col: colById.get(s.colId), dir: s.dir })).filter((s) => Boolean(s.col));
  if (!active.length) return rows;
  const indexed = rows.map((node, i) => ({ node, i }));
  indexed.sort((x, y) => {
    for (const { col, dir } of active) {
      const va = getCellValue(col, x.node);
      const vb = getCellValue(col, y.node);
      const c = typeof col.def.comparator === "function" ? col.def.comparator(va, vb, x.node.data, y.node.data) : defaultCompare(va, vb, col.type);
      if (c !== 0) return dir === "asc" ? c : -c;
    }
    return x.i - y.i;
  });
  return indexed.map((e) => e.node);
}
function cycleSort(model, colId, additive) {
  const existing = model.find((s) => s.colId === colId);
  const next = additive ? model.filter((s) => s.colId !== colId) : [];
  if (!existing) return [...next, { colId, dir: "asc" }];
  if (existing.dir === "asc") return [...next, { colId, dir: "desc" }];
  return next;
}

// src/datagrid/core/gridModel.ts
function createGridModel(options) {
  const getRowId = options.getRowId ?? ((_row, i) => `row-${i}`);
  const s = {
    rawRows: options.rows ?? [],
    nodes: [],
    columns: resolveColumns(options.columns ?? [], options.defaultColWidth),
    sortModel: [],
    filterModel: {},
    quickFilter: options.quickFilter ?? "",
    selection: /* @__PURE__ */ new Set(),
    density: options.density ?? "normal",
    pagination: options.pagination ?? false,
    page: 0,
    pageSize: options.pageSize ?? 50,
    getRowId
  };
  rebuildNodes();
  const listeners = /* @__PURE__ */ new Set();
  let cache = null;
  function rebuildNodes() {
    s.nodes = s.rawRows.map((data, index) => ({ id: s.getRowId(data, index), index, data }));
  }
  function colById() {
    return new Map(s.columns.map((c) => [c.colId, c]));
  }
  function compute() {
    const byId = colById();
    const filtered = filterRows(s.nodes, s.filterModel, s.quickFilter, s.columns, byId);
    const sorted = sortRows(filtered, s.sortModel, byId);
    const totalRows = sorted.length;
    let pageRows = sorted;
    let page = s.page;
    if (s.pagination) {
      const pages = Math.max(1, Math.ceil(totalRows / s.pageSize));
      page = Math.min(s.page, pages - 1);
      pageRows = sorted.slice(page * s.pageSize, page * s.pageSize + s.pageSize);
    }
    return {
      columns: s.columns,
      sortModel: s.sortModel,
      filterModel: s.filterModel,
      quickFilter: s.quickFilter,
      selection: s.selection,
      density: s.density,
      pagination: s.pagination,
      page,
      pageSize: s.pageSize,
      displayedRows: sorted,
      pageRows,
      totalRows
    };
  }
  function notify() {
    cache = compute();
    for (const fn of listeners) {
      try {
        fn(cache);
      } catch {
      }
    }
  }
  const api = {
    getState() {
      return cache ?? (cache = compute());
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => {
        listeners.delete(fn);
      };
    },
    setRows(rows) {
      s.rawRows = rows ?? [];
      rebuildNodes();
      notify();
    },
    setColumnDefs(defs) {
      s.columns = resolveColumns(defs ?? [], options.defaultColWidth);
      notify();
    },
    setSortModel(model) {
      s.sortModel = model;
      notify();
    },
    toggleSort(colId, additive = false) {
      s.sortModel = cycleSort(s.sortModel, colId, additive);
      notify();
    },
    setFilter(colId, filter) {
      const next = { ...s.filterModel };
      if (filter == null) delete next[colId];
      else next[colId] = filter;
      s.filterModel = next;
      s.page = 0;
      notify();
    },
    setQuickFilter(text) {
      s.quickFilter = text ?? "";
      s.page = 0;
      notify();
    },
    setSelection(ids) {
      s.selection = ids;
      notify();
    },
    setDensity(d) {
      s.density = d;
      notify();
    },
    setPage(page) {
      s.page = Math.max(0, page);
      notify();
    },
    setPageSize(size) {
      s.pageSize = Math.max(1, size);
      s.page = 0;
      notify();
    },
    resizeColumn(colId, width) {
      s.columns = setColumnWidth(s.columns, colId, width);
      notify();
    },
    pinColumn(colId, side) {
      s.columns = setColumnPinned(s.columns, colId, side);
      notify();
    },
    hideColumn(colId, hide) {
      s.columns = setColumnHidden(s.columns, colId, hide);
      notify();
    },
    reorderColumn(colId, toIndex) {
      s.columns = moveColumn(s.columns, colId, toIndex);
      notify();
    },
    autosizeColumn(colId) {
      s.columns = autosizeColumn(s.columns, colId, s.nodes);
      notify();
    },
    getColumns() {
      return s.columns;
    },
    getDisplayedRows() {
      return api.getState().displayedRows;
    },
    getAllRows() {
      return s.nodes;
    }
  };
  cache = compute();
  return api;
}

// src/datagrid/core/selection.ts
function toggleRowSelection(selection, rowId, mode, opts = {}) {
  if (mode === "none") return selection;
  if (mode === "single") {
    const next2 = /* @__PURE__ */ new Set();
    if (!selection.has(rowId)) next2.add(rowId);
    return next2;
  }
  const next = new Set(selection);
  if (opts.range && opts.rangeFrom && opts.orderedIds) {
    const a = opts.orderedIds.indexOf(opts.rangeFrom);
    const b = opts.orderedIds.indexOf(rowId);
    if (a >= 0 && b >= 0) {
      const [lo, hi] = a < b ? [a, b] : [b, a];
      for (let i = lo; i <= hi; i++) {
        const id = opts.orderedIds[i];
        if (id) next.add(id);
      }
      return next;
    }
  }
  if (!opts.additive && !opts.range) {
    if (next.has(rowId) && next.size === 1) {
      next.delete(rowId);
      return next;
    }
    next.clear();
    next.add(rowId);
    return next;
  }
  if (next.has(rowId)) next.delete(rowId);
  else next.add(rowId);
  return next;
}
function selectAll(rows) {
  return new Set(rows.map((r) => r.id));
}
function clearSelection() {
  return /* @__PURE__ */ new Set();
}
function headerCheckboxState(selection, rows) {
  if (!rows.length) return "none";
  let sel = 0;
  for (const r of rows) if (selection.has(r.id)) sel++;
  if (sel === 0) return "none";
  if (sel === rows.length) return "all";
  return "some";
}

// src/datagrid/core/viewport.ts
function rowWindow(rowCount, rowHeight, scrollTop, viewportHeight, overscan = 6) {
  const totalHeight = rowCount * rowHeight;
  if (rowCount === 0 || rowHeight <= 0) return { startIndex: 0, endIndex: 0, topPad: 0, totalHeight };
  const first = Math.floor(scrollTop / rowHeight);
  const visible = Math.ceil(viewportHeight / rowHeight);
  const startIndex = Math.max(0, first - overscan);
  const endIndex = Math.min(rowCount, first + visible + overscan);
  return { startIndex, endIndex, topPad: startIndex * rowHeight, totalHeight };
}
function columnLayout(center, left, right) {
  const positions = [];
  let x = 0;
  for (const c of center) {
    positions.push(x);
    x += c.width;
  }
  const totalWidth = x;
  const leftWidth = left.reduce((s, c) => s + c.width, 0);
  const rightWidth = right.reduce((s, c) => s + c.width, 0);
  return { positions, totalWidth, leftWidth, rightWidth };
}
function colWindow(layout, scrollLeft, viewportWidth, overscan = 2) {
  const { positions, totalWidth } = layout;
  if (!positions.length) return { start: 0, end: 0 };
  let start = 0;
  while (start < positions.length - 1 && positions[start + 1] <= scrollLeft) start++;
  let end = start;
  const right = scrollLeft + viewportWidth;
  while (end < positions.length && positions[end] < right) end++;
  void totalWidth;
  return { start: Math.max(0, start - overscan), end: Math.min(positions.length, end + overscan) };
}
function applyFlex(cols, availableWidth) {
  const flexCols = cols.filter((c) => !c.hide && c.flex && c.flex > 0);
  if (!flexCols.length) return cols;
  const fixed = cols.filter((c) => !c.hide && !(c.flex && c.flex > 0)).reduce((s, c) => s + c.width, 0);
  const totalFlex = flexCols.reduce((s, c) => s + (c.flex ?? 0), 0);
  const remaining = Math.max(0, availableWidth - fixed);
  return cols.map((c) => {
    if (!c.flex || c.flex <= 0 || c.hide) return c;
    const w = Math.max(c.minWidth, Math.min(c.maxWidth, Math.round(remaining * c.flex / totalFlex)));
    return { ...c, width: w };
  });
}

// src/datagrid/core/csvExport.ts
function escapeCsv(value, sep) {
  if (value.includes(sep) || value.includes('"') || value.includes("\n") || value.includes("\r")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
function rowsToCsv(columns, rows, opts = {}) {
  const sep = opts.separator ?? ",";
  const cols = columns.filter((c) => !c.hide);
  const src = opts.onlySelected && opts.selection ? rows.filter((r) => opts.selection.has(r.id)) : rows;
  const head = cols.map((c) => escapeCsv(c.headerName, sep)).join(sep);
  const body = src.map((node) => cols.map((c) => escapeCsv(cellText(c, node), sep)).join(sep));
  return [head, ...body].join("\r\n");
}

// src/datagrid/react/DataGrid.tsx
import { useCallback, useEffect as useEffect4, useLayoutEffect, useMemo as useMemo2, useRef as useRef5, useState as useState2 } from "react";

// src/datagrid/react/useGridModel.ts
import { useEffect, useRef, useSyncExternalStore } from "react";
function useGridModel(options) {
  const ref = useRef(null);
  if (ref.current == null) ref.current = createGridModel(options);
  const api = ref.current;
  const state = useSyncExternalStore(api.subscribe, api.getState, api.getState);
  useEffect(() => {
    api.setRows(options.rows ?? []);
  }, [api, options.rows]);
  useEffect(() => {
    api.setColumnDefs(options.columns ?? []);
  }, [api, options.columns]);
  useEffect(() => {
    if (options.quickFilter != null) api.setQuickFilter(options.quickFilter);
  }, [api, options.quickFilter]);
  return { api, state };
}

// src/datagrid/react/GridHeader.tsx
import { useRef as useRef2 } from "react";

// src/components/Icon.tsx
import { jsx } from "react/jsx-runtime";
function Icon({ icon, className, style }) {
  if (!icon) return null;
  return /* @__PURE__ */ jsx("iconify-icon", { icon, className, style: style && typeof style === "object" ? style : void 0 });
}

// src/datagrid/react/GridHeader.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var sortIcon = { asc: "mdi:arrow-up", desc: "mdi:arrow-down" };
function GridHeader(props) {
  const { columns, sortModel, selectionMode, headerCheckbox, totalWidth, headerHeight, pinStyles, checkPinStyle, filteredCols, onSort, onToggleAll, onResize, onReorder, onMenu } = props;
  const drag = useRef2(null);
  const startResize = (col) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startW = col.width;
    const move = (ev) => onResize(col.colId, startW + (ev.clientX - startX));
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  const handleSort = (col) => (e) => {
    if (e.target.closest(".mim-dg__resizer, .mim-dg__head-menu-btn")) return;
    if (col.sortable) onSort(col.colId, e.shiftKey);
  };
  const onDragStart = (col) => (e) => {
    drag.current = col.colId;
    e.dataTransfer.effectAllowed = "move";
  };
  const onDrop = (col) => (e) => {
    e.preventDefault();
    if (drag.current && drag.current !== col.colId) onReorder(drag.current, col.colId);
    drag.current = null;
  };
  return /* @__PURE__ */ jsxs("div", { className: "mim-dg__header", style: { width: totalWidth, height: headerHeight }, role: "row", children: [
    selectionMode !== "none" && /* @__PURE__ */ jsx2("div", { className: "mim-dg__cell mim-dg__cell--check mim-dg__head-cell is-pinned is-pinned-left", style: checkPinStyle, role: "columnheader", children: selectionMode === "multiple" && /* @__PURE__ */ jsx2("button", { type: "button", className: `mim-dg__checkbox mim-dg__checkbox--${headerCheckbox}`, "aria-label": "Seleccionar todo", onClick: onToggleAll, children: /* @__PURE__ */ jsx2(Icon, { icon: headerCheckbox === "all" ? "mdi:checkbox-marked" : headerCheckbox === "some" ? "mdi:minus-box" : "mdi:checkbox-blank-outline" }) }) }),
    columns.map((col) => {
      const idx = sortModel.findIndex((s) => s.colId === col.colId);
      const dir = idx >= 0 ? sortModel[idx].dir : null;
      const pinClass = col.pinned ? ` is-pinned is-pinned-${col.pinned}` : "";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `mim-dg__cell mim-dg__cell--${col.align} mim-dg__head-cell${col.sortable ? " is-sortable" : ""}${dir ? " is-sorted" : ""}${pinClass}${col.def.headerClass ? ` ${col.def.headerClass}` : ""}`,
          style: { width: col.width, height: headerHeight, ...pinStyles[col.colId] },
          role: "columnheader",
          "aria-sort": dir === "asc" ? "ascending" : dir === "desc" ? "descending" : "none",
          draggable: true,
          onDragStart: onDragStart(col),
          onDragOver: (e) => e.preventDefault(),
          onDrop: onDrop(col),
          onClick: handleSort(col),
          children: [
            /* @__PURE__ */ jsx2("span", { className: "mim-dg__head-label", children: col.headerName }),
            filteredCols.has(col.colId) && /* @__PURE__ */ jsx2(Icon, { icon: "mdi:filter", className: "mim-dg__filter-icon" }),
            dir && /* @__PURE__ */ jsx2(Icon, { icon: sortIcon[dir], className: "mim-dg__sort-icon" }),
            dir && sortModel.length > 1 && /* @__PURE__ */ jsx2("span", { className: "mim-dg__sort-order", children: idx + 1 }),
            /* @__PURE__ */ jsx2(
              "button",
              {
                type: "button",
                className: "mim-dg__head-menu-btn",
                "aria-label": "Men\xFA de columna",
                onClick: (e) => {
                  e.stopPropagation();
                  const r = e.currentTarget.getBoundingClientRect();
                  onMenu(col, r.left, r.bottom);
                },
                children: /* @__PURE__ */ jsx2(Icon, { icon: "mdi:dots-vertical" })
              }
            ),
            col.resizable && /* @__PURE__ */ jsx2("span", { className: "mim-dg__resizer", onPointerDown: startResize(col), role: "separator", "aria-orientation": "vertical" })
          ]
        },
        col.colId
      );
    })
  ] });
}

// src/datagrid/react/cellRenderers.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var registry = /* @__PURE__ */ new Map();
function registerCellRenderer(name, renderer) {
  registry.set(name, renderer);
}
function getCellRenderer(name) {
  return name ? registry.get(name) : void 0;
}
registerCellRenderer("boolean", ({ value }) => /* @__PURE__ */ jsx3(Icon, { icon: value ? "mdi:check-circle" : "mdi:close-circle-outline", className: value ? "mim-dg-bool mim-dg-bool--on" : "mim-dg-bool mim-dg-bool--off" }));
registerCellRenderer("tag", ({ formatted }) => /* @__PURE__ */ jsx3("span", { className: "mim-dg-tag", children: formatted }));
registerCellRenderer("link", ({ formatted, value }) => /* @__PURE__ */ jsx3("a", { className: "mim-dg-link", href: typeof value === "string" ? value : "#", children: formatted }));

// src/datagrid/react/GridCell.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function GridCell({ column, node, pinStyle }) {
  const value = getCellValue(column, node);
  const formatted = formatCellValue(column, value, node);
  const renderer = getCellRenderer(column.def.cellRenderer);
  const extra = typeof column.def.cellClass === "function" ? column.def.cellClass(value, node.data) : column.def.cellClass;
  const content = renderer ? renderer({ value, formatted, data: node.data, node, column }) : formatted;
  const pinClass = column.pinned ? ` is-pinned is-pinned-${column.pinned}` : "";
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: `mim-dg__cell mim-dg__cell--${column.align}${pinClass}${extra ? ` ${extra}` : ""}`,
      style: { width: column.width, ...pinStyle },
      role: "gridcell",
      title: typeof content === "string" ? content : void 0,
      children: /* @__PURE__ */ jsx4("span", { className: "mim-dg__cell-inner", children: content })
    }
  );
}

// src/datagrid/react/GridBody.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function GridBody(props) {
  const { rows, columns, rowHeight, topPad, totalHeight, totalWidth, selection, selectionMode, focusedId, pinStyles, checkPinStyle, onRowSelect } = props;
  return /* @__PURE__ */ jsx5("div", { className: "mim-dg__body", style: { height: totalHeight, width: totalWidth }, role: "rowgroup", children: /* @__PURE__ */ jsx5("div", { className: "mim-dg__rows", style: { transform: `translateY(${topPad}px)` }, children: rows.map((node) => {
    const selected = selection.has(node.id);
    return /* @__PURE__ */ jsxs2(
      "div",
      {
        className: `mim-dg__row${selected ? " is-selected" : ""}${focusedId === node.id ? " is-focused" : ""}${node.index % 2 ? " is-odd" : ""}`,
        style: { height: rowHeight },
        role: "row",
        "aria-selected": selected,
        onClick: selectionMode !== "none" ? (e) => onRowSelect(node, e) : void 0,
        children: [
          selectionMode !== "none" && /* @__PURE__ */ jsx5("div", { className: "mim-dg__cell mim-dg__cell--check is-pinned is-pinned-left", style: checkPinStyle, role: "gridcell", children: /* @__PURE__ */ jsx5("span", { className: `mim-dg__checkbox mim-dg__checkbox--${selected ? "all" : "none"}`, children: /* @__PURE__ */ jsx5(Icon, { icon: selected ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline" }) }) }),
          columns.map((col) => /* @__PURE__ */ jsx5(GridCell, { column: col, node, pinStyle: pinStyles[col.colId] }, col.colId))
        ]
      },
      node.id
    );
  }) }) });
}

// src/nav/paginationMath.ts
function buildPageRange(count, page, siblingCount = 1) {
  const total = Math.max(1, Math.round(Number(count)) || 1);
  const current = Math.min(total, Math.max(1, Math.round(Number(page)) || 1));
  const siblings = Math.max(0, Math.round(Number(siblingCount)) || 0);
  const items = [];
  const pageItem = (n) => ({ type: "page", page: n, key: `p-${n}` });
  const ellipsis = (key) => ({ type: "ellipsis", key });
  if (total <= 5 + siblings * 2) {
    for (let i = 1; i <= total; i++) items.push(pageItem(i));
    return { items, current, total };
  }
  items.push(pageItem(1));
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  if (left > 2) items.push(ellipsis("start"));
  for (let i = left; i <= right; i++) items.push(pageItem(i));
  if (right < total - 1) items.push(ellipsis("end"));
  items.push(pageItem(total));
  return { items, current, total };
}

// src/datagrid/react/GridFooter.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function GridFooter(props) {
  const { page, pageSize, totalRows, selectedCount, pagination, onPage } = props;
  const pageCount = Math.max(1, Math.ceil(totalRows / pageSize));
  const range = buildPageRange(pageCount, page + 1, 1);
  const from = totalRows === 0 ? 0 : page * pageSize + 1;
  const to = pagination ? Math.min(totalRows, (page + 1) * pageSize) : totalRows;
  return /* @__PURE__ */ jsxs3("div", { className: "mim-dg__footer", role: "row", children: [
    /* @__PURE__ */ jsxs3("span", { className: "mim-dg__count", children: [
      from.toLocaleString(),
      "\u2013",
      to.toLocaleString(),
      " de ",
      totalRows.toLocaleString(),
      selectedCount > 0 && /* @__PURE__ */ jsxs3("span", { className: "mim-dg__count-sel", children: [
        " \xB7 ",
        selectedCount.toLocaleString(),
        " seleccionadas"
      ] })
    ] }),
    pagination && /* @__PURE__ */ jsxs3("div", { className: "mim-dg__pager", children: [
      /* @__PURE__ */ jsx6("button", { type: "button", className: "mim-dg__pager-btn", disabled: page <= 0, "aria-label": "Anterior", onClick: () => onPage(page - 1), children: /* @__PURE__ */ jsx6(Icon, { icon: "mdi:chevron-left" }) }),
      range.items.map((it) => it.type === "ellipsis" ? /* @__PURE__ */ jsx6("span", { className: "mim-dg__pager-gap", children: "\u2026" }, it.key) : /* @__PURE__ */ jsx6("button", { type: "button", className: `mim-dg__pager-btn${it.page === page + 1 ? " is-active" : ""}`, onClick: () => onPage(it.page - 1), children: it.page }, it.key)),
      /* @__PURE__ */ jsx6("button", { type: "button", className: "mim-dg__pager-btn", disabled: page >= pageCount - 1, "aria-label": "Siguiente", onClick: () => onPage(page + 1), children: /* @__PURE__ */ jsx6(Icon, { icon: "mdi:chevron-right" }) })
    ] })
  ] });
}

// src/datagrid/react/GridToolbar.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var DENSITIES = [
  { key: "compact", icon: "mdi:view-headline", label: "Compacta" },
  { key: "normal", icon: "mdi:view-sequential", label: "Normal" },
  { key: "comfortable", icon: "mdi:view-stream", label: "C\xF3moda" }
];
function GridToolbar(props) {
  const { quickFilter, onQuickFilter, density, onDensity, onExport, showQuickFilter = true, showDensity = true, showExport = true } = props;
  return /* @__PURE__ */ jsxs4("div", { className: "mim-dg__toolbar", role: "toolbar", children: [
    showQuickFilter && /* @__PURE__ */ jsxs4("label", { className: "mim-dg__quick", children: [
      /* @__PURE__ */ jsx7(Icon, { icon: "mdi:magnify", className: "mim-dg__quick-icon" }),
      /* @__PURE__ */ jsx7("input", { type: "search", className: "mim-dg__quick-input", placeholder: "Buscar\u2026", value: quickFilter, onChange: (e) => onQuickFilter(e.target.value) })
    ] }),
    /* @__PURE__ */ jsx7("div", { className: "mim-dg__toolbar-spacer" }),
    showDensity && /* @__PURE__ */ jsx7("div", { className: "mim-dg__density", role: "group", "aria-label": "Densidad", children: DENSITIES.map((d) => /* @__PURE__ */ jsx7("button", { type: "button", className: `mim-dg__density-btn${density === d.key ? " is-active" : ""}`, title: d.label, "aria-label": d.label, "aria-pressed": density === d.key, onClick: () => onDensity(d.key), children: /* @__PURE__ */ jsx7(Icon, { icon: d.icon }) }, d.key)) }),
    showExport && /* @__PURE__ */ jsxs4("button", { type: "button", className: "mim-dg__tool-btn", onClick: onExport, children: [
      /* @__PURE__ */ jsx7(Icon, { icon: "mdi:file-delimited-outline" }),
      "Exportar CSV"
    ] })
  ] });
}

// src/datagrid/react/HeaderMenu.tsx
import { useEffect as useEffect2, useRef as useRef3 } from "react";
import { Fragment, jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function HeaderMenu(props) {
  const { column, x, y, onClose, onSort, onPin, onHide, onAutosize, onFilter } = props;
  const ref = useRef3(null);
  useEffect2(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", close, true);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") onClose();
    });
    return () => {
      document.removeEventListener("mousedown", close, true);
    };
  }, [onClose]);
  const act = (fn) => () => {
    fn();
    onClose();
  };
  return /* @__PURE__ */ jsxs5("div", { ref, className: "mim-dg__menu pg-scrollbar", style: { left: x, top: y }, role: "menu", children: [
    column.sortable && /* @__PURE__ */ jsxs5(Fragment, { children: [
      /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, "asc")), children: [
        /* @__PURE__ */ jsx8(Icon, { icon: "mdi:sort-ascending" }),
        "Ordenar ascendente"
      ] }),
      /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, "desc")), children: [
        /* @__PURE__ */ jsx8(Icon, { icon: "mdi:sort-descending" }),
        "Ordenar descendente"
      ] }),
      /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onSort(column.colId, null)), children: [
        /* @__PURE__ */ jsx8(Icon, { icon: "mdi:sort-variant-remove" }),
        "Quitar orden"
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "mim-dg__menu-sep" })
    ] }),
    column.filterType && /* @__PURE__ */ jsxs5(Fragment, { children: [
      /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onFilter(column)), children: [
        /* @__PURE__ */ jsx8(Icon, { icon: "mdi:filter-outline" }),
        "Filtrar\u2026"
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "mim-dg__menu-sep" })
    ] }),
    /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, "left")), children: [
      /* @__PURE__ */ jsx8(Icon, { icon: "mdi:pin" }),
      "Fijar a la izquierda"
    ] }),
    /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, "right")), children: [
      /* @__PURE__ */ jsx8(Icon, { icon: "mdi:pin" }),
      "Fijar a la derecha"
    ] }),
    /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onPin(column.colId, null)), children: [
      /* @__PURE__ */ jsx8(Icon, { icon: "mdi:pin-off-outline" }),
      "No fijar"
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "mim-dg__menu-sep" }),
    /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onAutosize(column.colId)), children: [
      /* @__PURE__ */ jsx8(Icon, { icon: "mdi:arrow-expand-horizontal" }),
      "Autoajustar ancho"
    ] }),
    /* @__PURE__ */ jsxs5("button", { type: "button", className: "mim-dg__menu-item", role: "menuitem", onClick: act(() => onHide(column.colId)), children: [
      /* @__PURE__ */ jsx8(Icon, { icon: "mdi:eye-off-outline" }),
      "Ocultar columna"
    ] })
  ] });
}

// src/datagrid/react/FilterPopover.tsx
import { useEffect as useEffect3, useMemo, useRef as useRef4, useState } from "react";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var TEXT_OPS = [
  { v: "contains", t: "Contiene" },
  { v: "notContains", t: "No contiene" },
  { v: "equals", t: "Igual a" },
  { v: "notEqual", t: "Distinto de" },
  { v: "startsWith", t: "Empieza con" },
  { v: "endsWith", t: "Termina con" },
  { v: "blank", t: "Vac\xEDo" },
  { v: "notBlank", t: "No vac\xEDo" }
];
var NUM_OPS = [
  { v: "eq", t: "=" },
  { v: "neq", t: "\u2260" },
  { v: "gt", t: ">" },
  { v: "gte", t: "\u2265" },
  { v: "lt", t: "<" },
  { v: "lte", t: "\u2264" },
  { v: "inRange", t: "Entre" },
  { v: "blank", t: "Vac\xEDo" },
  { v: "notBlank", t: "No vac\xEDo" }
];
var DATE_OPS = [
  { v: "eq", t: "Igual a" },
  { v: "before", t: "Antes de" },
  { v: "after", t: "Despu\xE9s de" },
  { v: "inRange", t: "Entre" }
];
function FilterPopover(props) {
  const { column, filter, uniqueValues: uniqueValues2, x, y, onApply, onClose } = props;
  const type = column.filterType ?? "text";
  const ref = useRef4(null);
  useEffect3(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", onDoc, true);
    return () => document.removeEventListener("mousedown", onDoc, true);
  }, [onClose]);
  const tf = filter?.type === "text" ? filter : null;
  const nf = filter?.type === "number" ? filter : null;
  const df = filter?.type === "date" ? filter : null;
  const sf = filter?.type === "set" ? filter : null;
  const [textOp, setTextOp] = useState(tf?.op ?? "contains");
  const [textVal, setTextVal] = useState(tf?.value ?? "");
  const [numOp, setNumOp] = useState(nf?.op ?? "eq");
  const [numVal, setNumVal] = useState(nf?.value != null ? String(nf.value) : "");
  const [numTo, setNumTo] = useState(nf?.to != null ? String(nf.to) : "");
  const [dateOp, setDateOp] = useState(df?.op ?? "eq");
  const [dateVal, setDateVal] = useState(df?.value ?? "");
  const [dateTo, setDateTo] = useState(df?.to ?? "");
  const [setSel, setSetSel] = useState(new Set(sf?.values ?? uniqueValues2));
  const [setSearch, setSetSearch] = useState("");
  const shownVals = useMemo(() => uniqueValues2.filter((v) => v.toLowerCase().includes(setSearch.toLowerCase())), [uniqueValues2, setSearch]);
  const needsValue = (op) => op !== "blank" && op !== "notBlank";
  const apply = () => {
    if (type === "text") onApply(textOp && (textVal || !needsValue(textOp)) ? { type: "text", op: textOp, value: textVal } : null);
    else if (type === "number") {
      const v = numVal === "" ? null : Number(numVal);
      const to = numTo === "" ? null : Number(numTo);
      onApply(needsValue(numOp) && v == null ? null : { type: "number", op: numOp, value: v, to });
    } else if (type === "date") onApply(dateVal || !needsValue(dateOp) ? { type: "date", op: dateOp, value: dateVal, to: dateTo } : null);
    else onApply(setSel.size === uniqueValues2.length ? null : { type: "set", values: [...setSel] });
    onClose();
  };
  const clear = () => {
    onApply(null);
    onClose();
  };
  const toggleVal = (v) => setSetSel((p) => {
    const n = new Set(p);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    return n;
  });
  return /* @__PURE__ */ jsxs6("div", { ref, className: "mim-dg__filter pg-scrollbar", style: { left: x, top: y }, role: "dialog", "aria-label": `Filtrar ${column.headerName}`, children: [
    type === "text" && /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx9("select", { className: "mim-dg__filter-field", value: textOp, onChange: (e) => setTextOp(e.target.value), children: TEXT_OPS.map((o) => /* @__PURE__ */ jsx9("option", { value: o.v, children: o.t }, o.v)) }),
      needsValue(textOp) && /* @__PURE__ */ jsx9("input", { className: "mim-dg__filter-field", placeholder: "Valor\u2026", autoFocus: true, value: textVal, onChange: (e) => setTextVal(e.target.value), onKeyDown: (e) => e.key === "Enter" && apply() })
    ] }),
    type === "number" && /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx9("select", { className: "mim-dg__filter-field", value: numOp, onChange: (e) => setNumOp(e.target.value), children: NUM_OPS.map((o) => /* @__PURE__ */ jsx9("option", { value: o.v, children: o.t }, o.v)) }),
      needsValue(numOp) && /* @__PURE__ */ jsx9("input", { type: "number", className: "mim-dg__filter-field", placeholder: "Valor\u2026", autoFocus: true, value: numVal, onChange: (e) => setNumVal(e.target.value), onKeyDown: (e) => e.key === "Enter" && apply() }),
      numOp === "inRange" && /* @__PURE__ */ jsx9("input", { type: "number", className: "mim-dg__filter-field", placeholder: "Hasta\u2026", value: numTo, onChange: (e) => setNumTo(e.target.value) })
    ] }),
    type === "date" && /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx9("select", { className: "mim-dg__filter-field", value: dateOp, onChange: (e) => setDateOp(e.target.value), children: DATE_OPS.map((o) => /* @__PURE__ */ jsx9("option", { value: o.v, children: o.t }, o.v)) }),
      /* @__PURE__ */ jsx9("input", { type: "date", className: "mim-dg__filter-field", value: dateVal, onChange: (e) => setDateVal(e.target.value) }),
      dateOp === "inRange" && /* @__PURE__ */ jsx9("input", { type: "date", className: "mim-dg__filter-field", value: dateTo, onChange: (e) => setDateTo(e.target.value) })
    ] }),
    type === "set" && /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx9("input", { className: "mim-dg__filter-field", placeholder: "Buscar valores\u2026", value: setSearch, onChange: (e) => setSetSearch(e.target.value) }),
      /* @__PURE__ */ jsxs6("div", { className: "mim-dg__filter-actions-row", children: [
        /* @__PURE__ */ jsx9("button", { type: "button", className: "mim-dg__filter-link", onClick: () => setSetSel(new Set(uniqueValues2)), children: "Todo" }),
        /* @__PURE__ */ jsx9("button", { type: "button", className: "mim-dg__filter-link", onClick: () => setSetSel(/* @__PURE__ */ new Set()), children: "Nada" })
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "mim-dg__filter-set pg-scrollbar", children: shownVals.map((v) => /* @__PURE__ */ jsxs6("label", { className: "mim-dg__filter-set-item", children: [
        /* @__PURE__ */ jsx9("button", { type: "button", className: `mim-dg__checkbox mim-dg__checkbox--${setSel.has(v) ? "all" : "none"}`, onClick: () => toggleVal(v), children: /* @__PURE__ */ jsx9(Icon, { icon: setSel.has(v) ? "mdi:checkbox-marked" : "mdi:checkbox-blank-outline" }) }),
        /* @__PURE__ */ jsx9("span", { children: v || "(vac\xEDo)" })
      ] }, v)) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "mim-dg__filter-actions", children: [
      /* @__PURE__ */ jsx9("button", { type: "button", className: "mim-dg__tool-btn", onClick: clear, children: "Limpiar" }),
      /* @__PURE__ */ jsx9("button", { type: "button", className: "mim-dg__tool-btn is-primary", onClick: apply, children: "Aplicar" })
    ] })
  ] });
}

// src/datagrid/react/DataGrid.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var DENSITY_ROW = { compact: 32, normal: 40, comfortable: 52 };
function DataGrid(props) {
  const {
    columns,
    rows,
    getRowId,
    selectionMode = "none",
    pagination = false,
    pageSize,
    height = 480,
    toolbar = true,
    exportFileName = "datagrid.csv",
    className,
    style,
    onSelectionChange
  } = props;
  const headerHeight = props.headerHeight ?? 44;
  const [density, setDensity] = useState2(props.density ?? "normal");
  const rowHeight = props.rowHeight ?? DENSITY_ROW[density];
  const options = useMemo2(
    () => ({ columns, rows, getRowId, selectionMode, pagination, pageSize, density }),
    [columns, rows, getRowId, selectionMode, pagination, pageSize, density]
  );
  const { api, state } = useGridModel(options);
  useEffect4(() => {
    api.setDensity(density);
  }, [api, density]);
  const viewportRef = useRef5(null);
  const [scrollTop, setScrollTop] = useState2(0);
  const [size, setSize] = useState2({ width: 0, height: 0 });
  const [menu, setMenu] = useState2(null);
  const [filterPop, setFilterPop] = useState2(null);
  const [focusRow, setFocusRow] = useState2(-1);
  const lastRangeFrom = useRef5(null);
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") return void 0;
    const ro = new ResizeObserver(() => setSize({ width: el.clientWidth, height: el.clientHeight }));
    ro.observe(el);
    setSize({ width: el.clientWidth, height: el.clientHeight });
    return () => ro.disconnect();
  }, []);
  const onScroll = useCallback((e) => setScrollTop(e.currentTarget.scrollTop), []);
  const dataRows = pagination ? state.pageRows : state.displayedRows;
  const checkColWidth = selectionMode === "none" ? 0 : 44;
  const layout = orderedForLayout(state.columns);
  const flat = useMemo2(() => {
    const merged = [...layout.left, ...layout.center, ...layout.right];
    const available = Math.max(0, size.width - checkColWidth);
    return applyFlex(merged, available);
  }, [layout.left, layout.center, layout.right, size.width, checkColWidth]);
  const totalWidth = flat.reduce((s, c) => s + c.width, 0) + checkColWidth;
  const { pinStyles, checkPinStyle } = useMemo2(() => {
    const styles = {};
    let lx = checkColWidth;
    for (const c of flat) if (c.pinned === "left") {
      styles[c.colId] = { position: "sticky", left: lx, zIndex: 3 };
      lx += c.width;
    }
    let rx = 0;
    for (let i = flat.length - 1; i >= 0; i--) {
      const c = flat[i];
      if (c.pinned === "right") {
        styles[c.colId] = { position: "sticky", right: rx, zIndex: 3 };
        rx += c.width;
      }
    }
    const check = checkColWidth ? { position: "sticky", left: 0, zIndex: 4 } : void 0;
    return { pinStyles: styles, checkPinStyle: check };
  }, [flat, checkColWidth]);
  const viewportHeight = Math.max(0, size.height - headerHeight);
  const win = rowWindow(dataRows.length, rowHeight, scrollTop, viewportHeight);
  const visible = dataRows.slice(win.startIndex, win.endIndex);
  const orderedIds = useMemo2(() => dataRows.map((r) => r.id), [dataRows]);
  const headerCheckbox = headerCheckboxState(state.selection, dataRows);
  const filteredCols = useMemo2(() => new Set(Object.keys(state.filterModel)), [state.filterModel]);
  const emit = useCallback((next) => {
    api.setSelection(next);
    if (onSelectionChange) {
      const map = new Map(state.displayedRows.map((r) => [r.id, r]));
      onSelectionChange([...next], [...next].map((id) => map.get(id)).filter(Boolean));
    }
  }, [api, onSelectionChange, state.displayedRows]);
  const onRowSelect = useCallback((node, e) => {
    const next = toggleRowSelection(
      state.selection,
      node.id,
      selectionMode,
      { additive: e.ctrlKey || e.metaKey, range: e.shiftKey, rangeFrom: lastRangeFrom.current ?? void 0, orderedIds }
    );
    if (!e.shiftKey) lastRangeFrom.current = node.id;
    emit(next);
  }, [state.selection, selectionMode, orderedIds, emit]);
  const onToggleAll = useCallback(() => emit(headerCheckbox === "all" ? clearSelection() : selectAll(dataRows)), [emit, headerCheckbox, dataRows]);
  const onSort = useCallback((colId, additive) => api.toggleSort(colId, additive), [api]);
  const onResize = useCallback((colId, width) => api.resizeColumn(colId, width), [api]);
  const onReorder = useCallback((colId, targetColId) => {
    const toIndex = state.columns.findIndex((c) => c.colId === targetColId);
    if (toIndex >= 0) api.reorderColumn(colId, toIndex);
  }, [api, state.columns]);
  const onMenu = useCallback((col, x, y) => setMenu({ col, x, y }), []);
  const onMenuSort = useCallback((colId, dir) => {
    const others = state.sortModel.filter((sm) => sm.colId !== colId);
    api.setSortModel(dir ? [...others, { colId, dir }] : others);
  }, [api, state.sortModel]);
  const onPage = useCallback((p) => {
    api.setPage(p);
    setScrollTop(0);
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
  }, [api]);
  const onExport = useCallback(() => {
    const sel = state.selection;
    const csv = rowsToCsv(state.columns, state.displayedRows, { onlySelected: sel.size > 0, selection: sel });
    if (typeof document === "undefined") return;
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportFileName;
    a.click();
    URL.revokeObjectURL(url);
  }, [state.columns, state.displayedRows, state.selection, exportFileName]);
  const onFilterOpen = useCallback((col) => {
    setFilterPop({ col, x: menu?.x ?? 120, y: menu?.y ?? 120 });
    setMenu(null);
  }, [menu]);
  const onFilterApply = useCallback((colId, filter) => api.setFilter(colId, filter), [api]);
  const popUnique = useMemo2(() => filterPop ? uniqueValues(api.getAllRows(), filterPop.col) : [], [filterPop, api]);
  const scrollRowIntoView = useCallback((idx) => {
    const el = viewportRef.current;
    if (!el) return;
    const top = idx * rowHeight;
    const bottom = top + rowHeight;
    if (top < el.scrollTop) el.scrollTop = top;
    else if (bottom > el.scrollTop + viewportHeight) el.scrollTop = bottom - viewportHeight;
  }, [rowHeight, viewportHeight]);
  const onKeyDown = useCallback((e) => {
    const last = dataRows.length - 1;
    const move = (idx) => {
      const c = Math.max(0, Math.min(last, idx));
      setFocusRow(c);
      scrollRowIntoView(c);
      e.preventDefault();
    };
    const pageStep = Math.max(1, Math.floor(viewportHeight / rowHeight) - 1);
    if (e.key === "ArrowDown") move(focusRow + 1);
    else if (e.key === "ArrowUp") move(focusRow < 0 ? 0 : focusRow - 1);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(last);
    else if (e.key === "PageDown") move(focusRow + pageStep);
    else if (e.key === "PageUp") move(focusRow - pageStep);
    else if (e.key === " " && focusRow >= 0 && selectionMode !== "none") {
      const node = dataRows[focusRow];
      if (node) {
        lastRangeFrom.current = node.id;
        emit(toggleRowSelection(state.selection, node.id, selectionMode, { additive: true }));
      }
      e.preventDefault();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && selectionMode === "multiple") {
      emit(selectAll(dataRows));
      e.preventDefault();
    } else if (e.key === "Escape") {
      if (state.selection.size) emit(clearSelection());
    }
  }, [dataRows, focusRow, viewportHeight, rowHeight, selectionMode, state.selection, emit, scrollRowIntoView]);
  const focusedId = focusRow >= 0 && focusRow < dataRows.length ? dataRows[focusRow].id : null;
  return /* @__PURE__ */ jsxs7("div", { className: `mim-dg${className ? ` ${className}` : ""}`, "data-density": density, style: { height, ...style }, children: [
    toolbar && /* @__PURE__ */ jsx10(
      GridToolbar,
      {
        quickFilter: state.quickFilter,
        onQuickFilter: (t) => api.setQuickFilter(t),
        density,
        onDensity: setDensity,
        onExport
      }
    ),
    /* @__PURE__ */ jsxs7("div", { className: "mim-dg__viewport pg-scrollbar", ref: viewportRef, onScroll, onKeyDown, tabIndex: 0, role: "grid", "aria-rowcount": state.totalRows, children: [
      /* @__PURE__ */ jsx10(
        GridHeader,
        {
          columns: flat,
          sortModel: state.sortModel,
          selectionMode,
          headerCheckbox,
          totalWidth,
          headerHeight,
          pinStyles,
          checkPinStyle,
          filteredCols,
          onSort,
          onToggleAll,
          onResize,
          onReorder,
          onMenu
        }
      ),
      /* @__PURE__ */ jsx10(
        GridBody,
        {
          rows: visible,
          columns: flat,
          rowHeight,
          topPad: win.topPad,
          totalHeight: win.totalHeight,
          totalWidth,
          selection: state.selection,
          selectionMode,
          focusedId,
          pinStyles,
          checkPinStyle,
          onRowSelect
        }
      )
    ] }),
    /* @__PURE__ */ jsx10(GridFooter, { page: state.page, pageSize: state.pageSize, totalRows: state.totalRows, selectedCount: state.selection.size, pagination, onPage }),
    menu && /* @__PURE__ */ jsx10(
      HeaderMenu,
      {
        column: menu.col,
        x: menu.x,
        y: menu.y,
        onClose: () => setMenu(null),
        onSort: onMenuSort,
        onPin: (colId, side) => api.pinColumn(colId, side),
        onHide: (colId) => api.hideColumn(colId, true),
        onAutosize: (colId) => api.autosizeColumn(colId),
        onFilter: onFilterOpen
      }
    ),
    filterPop && /* @__PURE__ */ jsx10(
      FilterPopover,
      {
        column: filterPop.col,
        filter: state.filterModel[filterPop.col.colId] ?? null,
        uniqueValues: popUnique,
        x: filterPop.x,
        y: filterPop.y,
        onApply: (f) => onFilterApply(filterPop.col.colId, f),
        onClose: () => setFilterPop(null)
      }
    )
  ] });
}
export {
  DataGrid,
  GridToolbar,
  applyFlex,
  autosizeColumn,
  cellText,
  clearSelection,
  colWindow,
  columnLayout,
  createGridModel,
  cycleSort,
  filterRows,
  formatCellValue,
  getCellRenderer,
  getCellValue,
  headerCheckboxState,
  moveColumn,
  orderedForLayout,
  registerCellRenderer,
  resolveColumns,
  rowWindow,
  rowsToCsv,
  selectAll,
  setColumnHidden,
  setColumnPinned,
  setColumnWidth,
  sortRows,
  toggleRowSelection,
  uniqueValues,
  useGridModel
};
