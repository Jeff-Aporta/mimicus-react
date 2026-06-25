import { useMemo } from "react";
import { NavTabRow } from "./NavTabRow.jsx";
import { dispatchShellNav, resolveShellNavigation } from "./shellNavResolver.js";

/** Header nav completo desde JSON del shell (`navigation.rows`). */
export function ShellHeaderNav({ shellConfig, ctx, onTab, className }) {
  const nav = useMemo(() => resolveShellNavigation(shellConfig, ctx), [shellConfig, ctx]);
  const handleTab = onTab ?? ((id) => dispatchShellNav(id, ctx, shellConfig));
  return (
    <>
      {nav.rows.filter((row) => row.visible && row.tabs.length > 0).map((row) => (
        <NavTabRow key={row.id} tier={row.tier} tabs={row.tabs} value={row.value} onChange={handleTab} className={className} />
      ))}
    </>
  );
}
