/**
 * Resolución de navegación del shell — JS puro (React / Svelte / vanilla).
 * Config: shell JSON → `navigation.rows[]` con nodos `action`, `catalog-categories`, `catalog-demos`, `tabs`.
 */

// La config del shell y el contexto provienen de JSON heterogéneo; tipos laxos a propósito.
export interface NavTab {
  id: string;
  label: string;
  icon?: any;
  color?: string;
  nav?: any;
  target?: any;
  disabled?: any;
  disabledTitle?: any;
  kind?: string;
  category?: any;
}

export type ShellConfig = any;
export type ShellNavCtx = any;
export type NavNode = any;
export type NavRow = any;

export function sortedCategories(ctx: ShellNavCtx): string[] {
  const order: string[] = ctx.sectionOrder ?? [];
  return [...(ctx.categories ?? [])].sort(
    (a, b) => (order.indexOf(a) === -1 ? 99 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 99 : order.indexOf(b)),
  );
}

export function sectionMeta(ctx: ShellNavCtx, sectionId: string): any {
  return ctx.sectionsMeta?.[sectionId] ?? ctx.catalog?.sections?.[sectionId] ?? ctx.catalog?.categories?.[sectionId] ?? {};
}

/* Humaniza un id a un label legible: "contapyme-context" → "Contapyme Context". */
export function humanizeId(id: string): string {
  if (!id) return "";
  return id
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

export function sectionAccentIndexFor(ctx: ShellNavCtx, categoryId: string): number {
  const i = sortedCategories(ctx).indexOf(categoryId);
  return i >= 0 ? i : 0;
}

export function sectionAccentColorFor(ctx: ShellNavCtx, categoryId: string): string {
  const palette: string[] = ctx.sectionAccentColors ?? ctx.sectionColors ?? ["var(--mimicus-primary)"];
  const i = sectionAccentIndexFor(ctx, categoryId);
  return palette[i % palette.length];
}

/** Slot estable (accent-N) para data-section-color. */
export function sectionColorSlotFor(ctx: ShellNavCtx, categoryId: string): string {
  return `accent-${sectionAccentIndexFor(ctx, categoryId)}`;
}

/** Color de acento para superficies (Button, tarjetas). */
export function sectionColorFor(ctx: ShellNavCtx, categoryId: string): string {
  return sectionAccentColorFor(ctx, categoryId);
}

export function resolveCategoryTabDescriptors(ctx: ShellNavCtx): NavTab[] {
  return sortedCategories(ctx).map((cat) => {
    const meta = sectionMeta(ctx, cat);
    return { id: cat, label: meta.label ?? humanizeId(cat), icon: meta.icon ?? "mdi:folder-outline", color: sectionColorFor(ctx, cat), colorSlot: sectionColorSlotFor(ctx, cat), kind: "category" };
  });
}

export function resolveCatalogDemoTabDescriptors(ctx: ShellNavCtx): NavTab[] {
  const { route, catalogItems } = ctx;
  if (!route?.category) return [];
  const color = sectionColorFor(ctx, route.category);
  const colorSlot = sectionColorSlotFor(ctx, route.category);
  return catalogItems
    .filter((it: any) => (it.section ?? it.category) === route.category)
    .map((it: any) => ({
      id: it.slug,
      label: it.displayLabel ?? it.slug,
      icon: ctx.getDemoIcon?.(it) ?? it.icon ?? it.definition?.titleIcon ?? "mdi:file-document-outline",
      color,
      colorSlot,
      kind: "demo",
      category: route.category,
    }));
}

/** Normaliza `navigation.rows` o legacy `headerNav.primary` / `secondary`. */
export function normalizeShellNavRows(shellConfig: ShellConfig): NavRow[] {
  if (shellConfig?.navigation?.rows?.length) return shellConfig.navigation.rows;
  const legacy = shellConfig?.headerNav;
  if (!legacy) return [];
  const rows: NavRow[] = [];
  if (legacy.primary) {
    rows.push({
      id: "primary",
      tier: legacy.primary.tier ?? "primary",
      when: "always",
      active: { type: "primary" },
      children: legacy.primary.children ?? [],
    });
  }
  if (legacy.secondary) {
    rows.push({
      id: "secondary",
      tier: legacy.secondary.tier ?? "secondary",
      when: legacy.secondary.when ?? "category-active",
      active: { type: "slug" },
      children: legacy.secondary.children ?? [],
    });
  }
  return rows;
}

/** Condiciones `when` del JSON — sin lógica en el router de la app. */
export function evaluateNavWhen(when: any, ctx: ShellNavCtx): boolean {
  const w = when ?? "always";
  if (w === true || w === "always") return true;
  if (w === false || w === "never") return false;
  if (w === "palette") return Boolean(ctx.isPaletteLabView);
  if (w === "catalog" || w === "home") return Boolean(ctx.isCatalogView);
  // category-active / category-demos: sección o demo dentro de la categoría (sub-nav siempre visible)
  if (w === "category-active" || w === "category-demos") return Boolean(ctx.route?.category) && !ctx.isPaletteLabView;
  if (w === "category-demo") return Boolean(ctx.route?.category && ctx.route?.slug) && !ctx.isPaletteLabView;
  if (w === "category") return Boolean(ctx.route?.category) && !ctx.isPaletteLabView && !ctx.isCatalogView;
  return true;
}

function resolveNavNode(node: NavNode, ctx: ShellNavCtx): NavTab[] {
  if (!node) return [];
  if (node.type === "action") {
    return [{
      id: node.id,
      label: node.label ?? node.id,
      icon: node.icon,
      color: node.color ?? "neutral",
      nav: node.nav,
      target: node.target,
      disabled: node.disabled,
      disabledTitle: node.disabledTitle,
      kind: "action",
    }];
  }
  if (node.type === "catalog-categories" && (!node.mode || node.mode === "tabs")) {
    return resolveCategoryTabDescriptors(ctx);
  }
  if (node.type === "catalog-demos" && (!node.mode || node.mode === "tabs")) {
    return resolveCatalogDemoTabDescriptors(ctx);
  }
  if (node.type === "tabs" && Array.isArray(node.items)) {
    return node.items.map((item: any) => ({
      id: item.id,
      label: item.label ?? item.id,
      icon: item.icon,
      color: item.color ?? "neutral",
      nav: item.nav,
      target: item.target,
      disabled: item.disabled,
      kind: item.kind ?? "static",
    }));
  }
  return [];
}

export function resolveNavRowTabs(row: NavRow, ctx: ShellNavCtx): NavTab[] {
  const tabs: NavTab[] = [];
  for (const child of row.children ?? []) tabs.push(...resolveNavNode(child, ctx));
  return tabs;
}

export function resolveNavRowValue(row: NavRow, ctx: ShellNavCtx): string {
  const type = row.active?.type ?? row.activeType ?? (row.tier === "secondary" ? "slug" : "primary");
  if (type === "slug") return ctx.route?.slug ?? "";
  if (type === "category") return ctx.route?.category ?? "";
  if (type === "primary") {
    if (ctx.isPaletteLabView || ctx.isCatalogView) return "__home__";
    return ctx.route?.category ?? "__home__";
  }
  if (type === "id" && row.active?.id) return row.active.id;
  return ctx.route?.category ?? "";
}

/** Filas de tabs listas para render (framework-agnostic). */
export function resolveShellNavigation(shellConfig: ShellConfig, ctx: ShellNavCtx): { rows: any[] } {
  return {
    rows: normalizeShellNavRows(shellConfig).map((row) => ({
      id: row.id ?? row.tier ?? "nav",
      tier: row.tier ?? "primary",
      when: row.when ?? "always",
      visible: evaluateNavWhen(row.when, ctx),
      tabs: resolveNavRowTabs(row, ctx),
      value: resolveNavRowValue(row, ctx),
    })),
  };
}

export function dispatchShellNav(tabId: string, ctx: ShellNavCtx, shellConfig: ShellConfig): any {
  for (const row of normalizeShellNavRows(shellConfig)) {
    for (const child of row.children ?? []) {
      if (child.type !== "action" || child.id !== tabId) continue;
      const nav = child.nav ?? child.id;
      if (nav === "home" || tabId === "__home__") return ctx.onHome?.();
      if (nav === "palette" || tabId === "__palette__") return ctx.onPalette?.();
      if (nav === "category" && child.target) return ctx.onCategory?.(child.target);
      if (nav === "demo" && child.target && child.category) return ctx.onDemo?.(child.category, child.target);
    }
  }
  const cat = ctx.route?.category;
  if (cat && ctx.catalogItems?.some((it: any) => (it.section ?? it.category) === cat && it.slug === tabId)) {
    return ctx.onDemo?.(cat, tabId);
  }
  if (ctx.categories?.includes(tabId) || ctx.catalogItems?.some((it: any) => (it.section ?? it.category) === tabId)) {
    return ctx.onCategory?.(tabId);
  }
  return undefined;
}
