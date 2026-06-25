import { ThemeProvider } from "@jeff-aporta/mimicus-react";
import { DemosRouter } from "./playground/shell/DemosRouter.jsx";

export function App() {
  return (
    <ThemeProvider>
      <DemosRouter />
    </ThemeProvider>
  );
}
