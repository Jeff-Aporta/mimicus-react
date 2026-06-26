/**
 * ShellHeaderNav — isla: shell
 * repo: Jeff-Aporta/mimicus-react · src/shell/ShellHeaderNav.tsx
 * Header nav completo desde JSON del shell (`navigation.rows`).
 */
import { useMemo } from "react";
import { NavTabRow } from "./NavTabRow.tsx";
import type { NavTab } from "./NavTabRow.tsx";
import { dispatchShellNav, resolveShellNavigation } from "./shellNavResolver.ts";

// shellConfig/ctx provienen del JSON del shell (heterogéneos); `any` puntual de buena fe.
export interface ShellHeaderNavProps {
  shellConfig?: any;
  ctx?: any;
  onTab?: (id: string, tab?: NavTab) => void;
  className?: string;
}

interface NavRow {
  id: string;
  tier?: "primary" | "secondary";
  tabs: NavTab[];
  value?: string;
  visible?: boolean;
}

export function ShellHeaderNav({ shellConfig, ctx, onTab, className }: ShellHeaderNavProps) {
  const nav = useMemo(() => resolveShellNavigation(shellConfig, ctx), [shellConfig, ctx]);
  const handleTab = onTab ?? ((id: string) => dispatchShellNav(id, ctx, shellConfig));
  return (
    <>
      {(nav.rows as NavRow[]).filter((row) => row.visible && row.tabs.length > 0).map((row) => (
        <NavTabRow key={row.id} tier={row.tier} tabs={row.tabs} value={row.value} onChange={handleTab} className={className} />
      ))}
    </>
  );
}
