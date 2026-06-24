import { useState, useEffect } from "react";
import {
  AppLayout,
  AppLayoutProvider,
  AppLayoutSider,
  Button,
  Card,
  ThemeProvider,
  SpaRouter,
  SpaNavLink,
  MimicusSidebar,
  SpaOutlet,
  setLuminance,
  setThemeColor,
  applyLooknfeel,
  THEME_COLOR_OPTIONS,
  LOOKNFEEL_OPTIONS,
  getThemeState,
  subscribeTheme,
  getLooknfeelState,
  subscribeLooknfeel,
} from "@jeff-aporta/mimicus-react";

function ThemeBar() {
  const [theme, setTheme] = useState(() => getThemeState());
  const [look, setLook] = useState(() => getLooknfeelState());
  useEffect(() => subscribeTheme(setTheme), []);
  useEffect(() => subscribeLooknfeel(setLook), []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", alignItems: "center", padding: "0.5rem 0.75rem" }}>
      <Button variant={theme.luminance === "dark" ? "solid" : "outlined"} onClick={() => setLuminance("dark")}>Oscuro</Button>
      <Button variant={theme.luminance === "light" ? "solid" : "outlined"} onClick={() => setLuminance("light")}>Claro</Button>
      <select value={theme.themeColor} onChange={(e) => setThemeColor(e.target.value)} style={{ minHeight: "2rem" }}>
        {THEME_COLOR_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
      <select value={look} onChange={(e) => applyLooknfeel(e.target.value)} style={{ minHeight: "2rem" }}>
        {LOOKNFEEL_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </div>
  );
}

function HomePage() {
  return (
    <Card style={{ margin: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Mimicus React</h2>
      <p>Biblioteca UI React temática consumible por CDN vía <code>import from</code>. Contrato en <code>&lt;html data-luminance data-theme-color data-design-scheme data-looknfeel&gt;</code>.</p>
      <p>Usa la barra superior y el panel lateral para cambiar paleta, look y luminancia.</p>
    </Card>
  );
}

function ButtonsPage() {
  const variants = ["solid", "outlined", "ghost", "soft", "text", "glass", "flat"];
  const colors = ["primary", "design-2", "design-3", "info", "success", "warning", "error"];
  return (
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {variants.map((v) => (
        <Card key={v}>
          <div style={{ marginBottom: "0.5rem", fontWeight: 600 }}>{v}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {colors.map((c) => (
              <Button key={c} variant={v} color={c} style={{ width: "auto", minWidth: "6rem" }}>{c}</Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function CardsPage() {
  const variants = ["solid", "flat", "glass"];
  return (
    <div style={{ padding: "1rem", display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
      {variants.map((v) => (
        <Card key={v} variant={v}>
          <strong>Card {v}</strong>
          <p style={{ margin: "0.35rem 0 0" }}>Superficie coherente con el look activo.</p>
        </Card>
      ))}
    </div>
  );
}

const ROUTES = {
  home: HomePage,
  buttons: ButtonsPage,
  cards: CardsPage,
};

export function App() {
  return (
    <ThemeProvider>
      <AppLayoutProvider>
        <SpaRouter routes={ROUTES} defaultRoute="home">
          <div className="mimicus-shell">
            <AppLayout variant="side" fixedHeader fixedSider responsive className="mimicus-shell" style={{ minHeight: "100dvh" }}>
              <AppLayout.Header>
                <ThemeBar />
              </AppLayout.Header>
              <AppLayout.Sider>
                <AppLayoutSider theme="dark">
                  <MimicusSidebar title="Mimicus React">
                    <SpaNavLink route="home">Inicio</SpaNavLink>
                    <SpaNavLink route="buttons">Buttons</SpaNavLink>
                    <SpaNavLink route="cards">Cards</SpaNavLink>
                  </MimicusSidebar>
                </AppLayoutSider>
              </AppLayout.Sider>
              <div className="mimicus-shell-main pg-shell-main">
                <SpaOutlet routes={ROUTES} defaultRoute="home" />
              </div>
            </AppLayout>
          </div>
        </SpaRouter>
      </AppLayoutProvider>
    </ThemeProvider>
  );
}
