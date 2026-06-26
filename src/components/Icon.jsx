/**
 * Icon — isla: primitives
 * demo: demo/config/demos/lib/Iconify.json
 * llm:  ./Icon.llm.md
 * repo: Jeff-Aporta/mimicus-react · src/components/Icon.jsx
 * Wrapper de <iconify-icon> (web component) para usar íconos por nombre en React.
 */
export function Icon({ icon, className, style }) {
  if (!icon) return null;
  return <iconify-icon icon={icon} className={className} style={style && typeof style === "object" ? style : undefined} />;
}
