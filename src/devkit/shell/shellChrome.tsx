// @ts-nocheck — devkit interno (renderiza JSON de demo arbitrario); tipado completo pendiente.
/**
 * shellChrome — devkit
 * llm:  ./shellChrome.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/devkit/shell/shellChrome.tsx
 * Cromo del shell del playground: header, barra de skins, FPS y PlaygroundAppShell.
 */
import { useCallback, useEffect, useState } from "react";

import {

  AppLayout,

  SidePanel,

  Button,

  Select,

  setLuminance,

  setThemeColor,

  applyLooknfeel,

  getThemeState,

  subscribeTheme,

  getLooknfeelState,

  subscribeLooknfeel,

  THEME_COLOR_OPTIONS,

  LOOKNFEEL_OPTIONS,

  normalizePlaygroundAppLayoutVariant,

} from "../_ui.ts";

import { Icon } from "../../components/Icon.tsx";

import {

  getPlaygroundAppLayoutVariant,

  setPlaygroundAppLayoutVariant,

  subscribePlaygroundAppLayoutVariant,

  PLAYGROUND_LAYOUT_SELECT_OPTIONS,

  playgroundShellAppLayoutVariant,

} from "./playgroundAppLayout.ts";

import { panelSizeCss, panelStorageKey } from "./resolveShellConfig.ts";

import { designSchemeColorCount, designSchemeForThemeColor } from "../../theme/constants.ts";

import { PlaygroundBrand } from "./playgroundNav.tsx";



export { getPlaygroundAppLayoutVariant, setPlaygroundAppLayoutVariant, subscribePlaygroundAppLayoutVariant } from "./playgroundAppLayout.ts";

export { bootPlaygroundAppLayout } from "./playgroundAppLayout.ts";

export { PlaygroundNavTabRow, PlaygroundBrand } from "./playgroundNav.tsx";

export { SidebarSection } from "./sidebarSection.tsx";



const LAYOUT_BP_NARROW = 768;



function useNarrowViewport() {

  const [narrow, setNarrow] = useState(false);

  useEffect(() => {

    const mq = window.matchMedia(`(max-width: ${LAYOUT_BP_NARROW - 1}px)`);

    const sync = () => setNarrow(mq.matches);

    sync();

    mq.addEventListener("change", sync);

    return () => mq.removeEventListener("change", sync);

  }, []);

  return narrow;

}



function usePlaygroundBodyScrollLock(active) {

  useEffect(() => {

    if (!active) return undefined;

    const html = document.documentElement;

    const body = document.body;

    const prevHtml = html.style.overflow;

    const prevBody = body.style.overflow;

    html.style.overflow = "hidden";

    body.style.overflow = "hidden";

    return () => {

      html.style.overflow = prevHtml;

      body.style.overflow = prevBody;

    };

  }, [active]);

}



export function FpsCounter({ collapsed = false }) {

  const [fps, setFps] = useState(60);

  useEffect(() => {

    let frames = 0;

    let last = performance.now();

    let raf = 0;

    const tick = (now) => {

      frames += 1;

      if (now - last >= 1000) {

        setFps(Math.round((frames * 1000) / (now - last)));

        frames = 0;

        last = now;

      }

      raf = requestAnimationFrame(tick);

    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);

  }, []);

  return (

    <span className="fps-histogram-chip" title="FPS · último segundo">

      <span className="fps-histogram-chip__value">{fps}</span>

      {!collapsed && <span className="fps-histogram-chip__unit">FPS</span>}

    </span>

  );

}



function paletteColorCountChip(paletteId) {
  const count = designSchemeColorCount(designSchemeForThemeColor(paletteId));
  const schemeLabel = count === 1 ? "Mono" : count === 2 ? "Dual" : "Tríada";
  return (
    <span className="pg-skin-palette-chip" title={schemeLabel} aria-label={`${count} ${count === 1 ? "color" : "colores"} (${schemeLabel})`}>
      {count}
    </span>
  );
}

export function PlaygroundSkinSelect({ label, value, options, onChange, accent = "palette" }) {

  const dataProps = accent === "palette" ? { "data-palette": value } : { "data-look": value };

  const selectOptions = options.map((o) => ({
    value: o.id,
    label: o.label,
    icon: o.icon ? <iconify-icon icon={o.icon} /> : undefined,
    suffix: accent === "palette" ? paletteColorCountChip(o.id) : undefined,
  }));

  return (

    <div className={["pg-skin-toggle", accent === "palette" ? "pg-skin-toggle--palette" : "pg-skin-toggle--look"].join(" ")} {...dataProps} title={label}>

      <Select className="pg-skin-toggle__select" size="small" value={value} options={selectOptions} onChange={(v) => onChange?.(v)} aria-label={label} />

    </div>

  );

}



export function HeaderSkinBar() {

  const [theme, setTheme] = useState(() => getThemeState());

  const [look, setLook] = useState(() => getLooknfeelState());

  const [layout, setLayout] = useState(() => getPlaygroundAppLayoutVariant());

  useEffect(() => subscribeTheme(setTheme), []);

  useEffect(() => subscribeLooknfeel(setLook), []);

  useEffect(() => subscribePlaygroundAppLayoutVariant(setLayout), []);

  return (

    <div className="pg-header-skin-bar">

      <PlaygroundSkinSelect label="Layout" accent="look" value={layout} options={PLAYGROUND_LAYOUT_SELECT_OPTIONS} onChange={setPlaygroundAppLayoutVariant} />

      <PlaygroundSkinSelect label="Paleta" accent="palette" value={theme.themeColor} options={THEME_COLOR_OPTIONS} onChange={setThemeColor} />

      <PlaygroundSkinSelect label="Look n feel" accent="look" value={look} options={LOOKNFEEL_OPTIONS} onChange={applyLooknfeel} />

      <Button variant={theme.luminance === "dark" ? "soft" : "text"} color="neutral" shape="rect" className="pg-header-skin-bar__theme-btn" onClick={() => setLuminance(theme.luminance === "dark" ? "light" : "dark")} title={theme.luminance === "dark" ? "Modo claro" : "Modo oscuro"} aria-label={theme.luminance === "dark" ? "Modo claro" : "Modo oscuro"}>

        <span aria-hidden>{theme.luminance === "dark" ? "☀" : "☾"}</span>

      </Button>

    </div>

  );

}



function PlaygroundShellHeader({
  brandTitle, onBrandClick, headerCenter, headerTools, title, headerEnd,
  shellNavigation, primaryNav, secondaryNav, showShellMenuBtn, menuTitle, onShellMenuClick,
}) {
  const center = headerCenter ?? (title ? <span className="title pg-route-title pg-shell-route-title pg-vt-header">{title}</span> : null);
  const tools = headerTools ?? headerEnd;

  const nav = shellNavigation ?? <>{primaryNav}{secondaryNav}</>;

  return (
    <AppLayout.Header barClassName="pg-shell-toolbar" className="pg-shell-header-stack pg-content-header">
      <AppLayout.Header.Brand>
        {showShellMenuBtn && (
          <Button variant="text" shape="rect" color="neutral" onClick={onShellMenuClick} className="sidebar-header-btn pg-shell-menu-btn" title={menuTitle} style={{ flexShrink: 0, width: "auto" }}>
            <Icon icon="mdi:menu" />
          </Button>
        )}
        {brandTitle && <PlaygroundBrand title={brandTitle} onClick={onBrandClick} />}
      </AppLayout.Header.Brand>

      <AppLayout.Header.Center>{center}</AppLayout.Header.Center>

      <AppLayout.Header.Tools>{tools}</AppLayout.Header.Tools>

      {nav ? <AppLayout.Header.Nav>{nav}</AppLayout.Header.Nav> : null}
    </AppLayout.Header>
  );
}



export function PlaygroundAppShell({
  title, brandTitle, onBrandClick, headerCenter, headerTools, headerEnd,
  shellNavigation, primaryNav, secondaryNav, collapsedPanel, expandedPanel, children, embedMode = false,
}) {

  const narrow = useNarrowViewport();

  const [open, setOpen] = useState(true);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [variant, setVariant] = useState(() => getPlaygroundAppLayoutVariant());

  const storageKey = panelStorageKey();



  usePlaygroundBodyScrollLock(true);

  useEffect(() => subscribePlaygroundAppLayoutVariant(setVariant), []);



  useEffect(() => {

    try {

      const s = localStorage.getItem(storageKey);

      if (s !== null) setOpen(s === "1");

    } catch { /* ignore */ }

  }, [storageKey]);



  useEffect(() => {

    try { localStorage.setItem(storageKey, open ? "1" : "0"); } catch { /* ignore */ }

  }, [open, storageKey]);



  useEffect(() => {

    if (!narrow) setDrawerOpen(false);

  }, [narrow]);



  const shellVariant = normalizePlaygroundAppLayoutVariant(variant);

  const gridVariant = playgroundShellAppLayoutVariant(shellVariant);

  const showSider = !embedMode;

  const panelEnd = shellVariant === "top-side-2";

  const useDrawer = narrow && showSider;

  const showShellMenuBtn = useDrawer;



  const toggleSidebar = useCallback(() => setOpen((v) => !v), []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const onShellMenuClick = useCallback(() => setDrawerOpen((v) => !v), []);



  const shellClass = [

    "pg-shell",

    "pg-playground-shell",

    `pg-playground-shell--${shellVariant}`,

    !open && showSider && !useDrawer && "is-collapsed",

    useDrawer && "pg-playground-shell--drawer",

    embedMode && "pg-shell--embed",

  ].filter(Boolean).join(" ");



  const menuTitle = drawerOpen ? "Cerrar menú" : "Abrir menú";

  const siderWidth = panelSizeCss(useDrawer ? true : open);

  const shellStyle = { "--pg-shell-sider-w": siderWidth, "--mimicus-app-layout-sider-w": siderWidth };



  const shellHeader = (
    <PlaygroundShellHeader
      brandTitle={brandTitle}
      onBrandClick={onBrandClick}
      title={title}
      headerCenter={headerCenter}
      headerTools={headerTools}
      headerEnd={headerEnd}
      shellNavigation={shellNavigation}
      primaryNav={primaryNav}
      secondaryNav={secondaryNav}
      showShellMenuBtn={showShellMenuBtn}
      menuTitle={menuTitle}
      onShellMenuClick={onShellMenuClick}
    />
  );



  if (embedMode) {

    return (

      <div className={shellClass} style={shellStyle}>

        <div className="pg-shell-stage pg-shell-stage--embed">

          <AppLayout.Header className="pg-content-header">

            <AppLayout.Header.Center>

              {title && <span className="title pg-route-title">{title}</span>}

            </AppLayout.Header.Center>

            <AppLayout.Header.Tools>{headerEnd}</AppLayout.Header.Tools>

          </AppLayout.Header>

          <div className="pg-shell-main custom-scrollbar pg-scrollbar">{children}</div>

        </div>

      </div>

    );

  }



  return (
    <div className={shellClass} style={shellStyle}>
      {useDrawer && drawerOpen && <button type="button" className="pg-shell-drawer-backdrop" aria-label="Cerrar menú" onClick={closeDrawer} />}
      {useDrawer && (
        <div className={["pg-shell-drawer-panel", panelEnd ? "pg-shell-drawer-panel--right" : "pg-shell-drawer-panel--left", drawerOpen && "is-open"].filter(Boolean).join(" ")} aria-hidden={!drawerOpen}>
          <SidePanel open drawer collapsedView={collapsedPanel} expandedView={expandedPanel} onClose={closeDrawer} />
        </div>
      )}

      {shellHeader}

      <AppLayout
        key={gridVariant}
        variant={gridVariant}
        fixedSider={showSider}
        responsive
        responsiveDrawer={useDrawer}
        className="pg-playground-app-layout mimicus-shell"
        style={{ minHeight: 0, flex: "1 1 auto", ...shellStyle }}
      >
        {showSider && !useDrawer && (
          <AppLayout.Sider>
            <SidePanel open={open} onToggle={toggleSidebar} collapsedView={collapsedPanel} expandedView={expandedPanel} />
          </AppLayout.Sider>
        )}
        <div className="pg-shell-main custom-scrollbar pg-scrollbar pg-vt-main">{children}</div>
      </AppLayout>
    </div>
  );

}

