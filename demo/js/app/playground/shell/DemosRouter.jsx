import { useEffect, useMemo, useState } from "react";

import catalogDef from "../../../../config/catalog.json";

import { catalogItems } from "../catalog/catalogItems.js";

import { CatalogHome, ThemeLab } from "../catalog/catalogUi.jsx";

import { itemsInSection, sectionLabel, sectionOrder, sectionsWithItems } from "../catalog/catalogSections.js";

import { DemoPage, isStubComponent } from "../shared/driver/driverCore.js";

import { MIMICUS_UI, mimicusPageTitle } from "../shared/playgroundKit.js";

import { bootViewTransitionRoute, isEmbedView, setNav, setPaletteLab, stateToRoute, syncViewTransitionRoute, urlState } from "./routing.js";

import { bootPlaygroundAppLayout } from "./playgroundAppLayout.js";

import { HeaderSkinBar, PlaygroundAppShell, FpsCounter } from "./shellChrome.jsx";

import { PlaygroundJsonPanel } from "../shared/jsonRenderer.jsx";

import { ShellHeaderNav, dispatchShellNav } from "@jeff-aporta/mimicus-react";

import { getDemoIcon } from "../catalog/catalogUi.jsx";

import { sectionColors, shellConfig } from "./resolveShellConfig.js";



const catalog = catalogDef;



const implementedCatalogItems = catalogItems.filter((it) => {

  const name = it.definition?.component?.name ?? it.id;

  return !isStubComponent(name);

});



const implementedSections = sectionsWithItems(implementedCatalogItems);



export function DemosRouter() {

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

  }, [route, isCatalogView]);



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



  const panelCtx = useMemo(() => ({

    route,

    catalog,

    catalogItems: implementedCatalogItems,

    categories: implementedSections,

    sectionOrder,

    sectionColors: sectionColors(),

    sectionOpen,

    setSectionOpen,

    isPaletteLabView,

    isCatalogView,

    onHome: () => setNav(null),

    onPalette: () => setPaletteLab(),

    onCategory: (cat) => setNav(cat),

    onDemo: (cat, slug) => setNav(cat, slug),

    getDemoIcon: (it) => getDemoIcon(it.id, it),

  }), [route, sectionOpen, isPaletteLabView, isCatalogView]);



  const collapsedPanel = <PlaygroundJsonPanel node={shellConfig.views?.collapsed} ctx={panelCtx} />;

  const expandedPanel = <PlaygroundJsonPanel node={shellConfig.views?.expanded} ctx={panelCtx} />;



  return (

    <PlaygroundAppShell
      brandTitle={MIMICUS_UI.name}
      onBrandClick={() => setNav(null)}
      headerCenter={routeTitle ? <span className="title pg-route-title pg-shell-route-title pg-vt-header">{routeTitle}</span> : null}
      headerTools={<><FpsCounter /><HeaderSkinBar /></>}
      shellNavigation={<ShellHeaderNav shellConfig={shellConfig} ctx={panelCtx} onTab={(id) => dispatchShellNav(id, panelCtx, shellConfig)} />}
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

