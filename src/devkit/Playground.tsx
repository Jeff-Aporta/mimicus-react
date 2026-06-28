// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * Playground — devkit
 * llm:  ./Playground.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/Playground.tsx
 * Componente público raíz del playground: recibe catálogo + metadatos por props y monta el shell completo.
 */
import { useEffect, useMemo, useState } from "react";

import { configurePlayground } from "./core/playgroundData.ts";

import { CatalogHome, ThemeLab, getDemoIcon } from "./catalog/catalogUi.tsx";

import { itemsInSection, sectionLabel, sectionOrder, sectionsWithItems } from "./catalog/catalogSections.ts";

import { DemoPage, isStubComponent } from "./shared/driver/driverCore.tsx";

import { MIMICUS_UI, mimicusPageTitle } from "./shared/playgroundKit.ts";

import { bootViewTransitionRoute, isEmbedView, setNav, setPaletteLab, stateToRoute, syncViewTransitionRoute, urlState } from "./shell/routing.ts";

import { bootPlaygroundAppLayout } from "./shell/playgroundAppLayout.ts";

import { HeaderSkinBar, PlaygroundAppShell, FpsCounter } from "./shell/shellChrome.tsx";

import { PlaygroundJsonPanel } from "./shared/jsonRenderer.tsx";

import { ShellHeaderNav, dispatchShellNav } from "./_ui.ts";

import { sectionColors, shellConfig } from "./shell/resolveShellConfig.ts";

export function Playground({ catalog = [], catalogMeta, sectionsMeta, shellConfig: shellConfigProp, previewTemplates, brand }) {
  configurePlayground({ catalogMeta, sectionsMeta, shellConfig: shellConfigProp, previewTemplates, brand });

  const implementedCatalogItems = useMemo(() => (catalog ?? []).filter((it) => {
    const name = it.definition?.component?.name ?? it.id;
    return !isStubComponent(name);
  }), [catalog]);

  const implementedSections = useMemo(() => sectionsWithItems(implementedCatalogItems), [implementedCatalogItems]);

  const [navState, setNavState] = useState(() => urlState.get());

  const route = useMemo(() => stateToRoute(navState), [navState]);

  const [sectionOpen, setSectionOpen] = useState(() => Object.fromEntries(implementedSections.map((s) => [s, true])));

  useEffect(() => {
    bootPlaygroundAppLayout();
    document.documentElement.classList.add("pg-playground-doc");
    bootViewTransitionRoute();
    const unsub = urlState.subscribe((s) => {
      setNavState(s);
      syncViewTransitionRoute(stateToRoute(s));
      document.querySelector(".pg-shell-main")?.scrollTo({ top: 0, behavior: "smooth" });
    });
    syncViewTransitionRoute(stateToRoute(urlState.get()));
    return () => {
      unsub();
      document.documentElement.classList.remove("pg-playground-doc");
    };
  }, []);

  const isPaletteLabView = navState.p === "palette";
  const embedMode = isEmbedView(navState);
  const isCatalogView = !isPaletteLabView && route.category == null && route.slug == null;
  const isSectionView = !isCatalogView && route.category != null && !route.slug;

  const filteredItems = useMemo(() => {
    if (!route.category || isCatalogView) return [];
    const inSection = itemsInSection(implementedCatalogItems, route.category);
    if (!route.slug) return inSection;
    return inSection.filter((i) => i.slug === route.slug);
  }, [route, isCatalogView, implementedCatalogItems]);

  const routeTitle = isPaletteLabView
    ? "Paleta & Look"
    : isCatalogView
      ? (MIMICUS_UI.catalogLabel ?? "Components Overview")
      : !route.slug
        ? sectionLabel(route.category) ?? route.category
        : `${sectionLabel(route.category)} / ${filteredItems[0]?.displayLabel ?? route.slug}`;

  useEffect(() => {
    document.title = mimicusPageTitle(routeTitle);
  }, [routeTitle]);

  useEffect(() => {
    if (route.category && route.slug) {
      setSectionOpen((prev) => ({ ...prev, [route.category]: true }));
    }
  }, [route.category, route.slug]);

  const cfg = shellConfig();

  const panelCtx = useMemo(() => ({
    route,
    catalog: catalogMeta,
    catalogItems: implementedCatalogItems,
    categories: implementedSections,
    sectionOrder: sectionOrder(),
    sectionColors: sectionColors(),
    sectionAccentColors: sectionColors(),
    sectionOpen,
    setSectionOpen,
    isPaletteLabView,
    isCatalogView,
    onHome: () => setNav(null),
    onPalette: () => setPaletteLab(),
    onCategory: (cat) => setNav(cat),
    onDemo: (cat, slug) => setNav(cat, slug),
    getDemoIcon: (it) => getDemoIcon(it.id, it),
  }), [route, sectionOpen, isPaletteLabView, isCatalogView, implementedCatalogItems, implementedSections, catalogMeta]);

  const collapsedPanel = <PlaygroundJsonPanel node={cfg.views?.collapsed} ctx={panelCtx} />;
  const expandedPanel = <PlaygroundJsonPanel node={cfg.views?.expanded} ctx={panelCtx} />;

  return (
    <PlaygroundAppShell
      brandTitle={MIMICUS_UI.name}
      onBrandClick={() => setNav(null)}
      headerCenter={routeTitle ? <span className="title pg-route-title pg-shell-route-title pg-vt-header">{routeTitle}</span> : null}
      headerTools={<><FpsCounter /><HeaderSkinBar /></>}
      shellNavigation={<ShellHeaderNav shellConfig={cfg} ctx={panelCtx} onTab={(id) => dispatchShellNav(id, panelCtx, cfg)} />}
      collapsedPanel={collapsedPanel}
      expandedPanel={expandedPanel}
      embedMode={embedMode}
    >

      {isPaletteLabView && <ThemeLab />}

      {isCatalogView && (
        <CatalogHome
          items={implementedCatalogItems}
          onSelect={(section, slug) => setNav(section, slug)}
          onOpenPaletteLab={() => setPaletteLab()}
        />
      )}

      {isSectionView && route.category && (
        <CatalogHome
          filterSection={route.category}
          items={implementedCatalogItems}
          onSelect={(section, slug) => setNav(section, slug)}
        />
      )}

      {!isPaletteLabView && !isCatalogView && !isSectionView && (
        <div className="pg-vt-demo pg-demo-doc-page">
          {filteredItems.map((it) => <DemoPage key={`${it.section}/${it.slug}`} definition={it.definition} />)}
          {filteredItems.length === 0 && <p className="catalog-home__lead">No hay demos para esta ruta.</p>}
        </div>
      )}

    </PlaygroundAppShell>
  );
}
