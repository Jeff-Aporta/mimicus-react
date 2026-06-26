/**
 * Card — isla: primitives
 * demo: demo/config/demos/lib/Card.json
 * llm:  ./Card.llm.md
 * css:  css/components/card.css
 * repo: Jeff-Aporta/mimicus-react · src/components/Card.jsx
 * Contenedor de superficie con variantes (solid/onion/flat), relieve (sombra) y tamaño de padding.
 */
import { surfaceVariantAttrs } from "../theme/constants.js";
import { resolveColor } from "../lib/resolveColor.js";
import { mkSemanticBorder } from "../lib/colorTransform.js";
import { cardBg, cardShadow } from "../lib/cardHelpers.js";
import { colorMix } from "../lib/resolveColor.js";

const PADDING_BY_SIZE = { xs: "0.35rem", sm: "0.4rem", md: "0.5rem", lg: "0.5rem", xl: "0.5rem" };
const DEFAULT_RELIEVE = 55;

export function Card({
  inline = false,
  variant = "",
  relieve = -1,
  sizew = "md",
  className,
  style,
  children,
  ...rest
}) {
  const variantAttrs = surfaceVariantAttrs(variant, "solid");
  const normalizedVariant = variantAttrs["data-variant"];
  const resolvedRelieve = (relieve ?? -1) < 0 ? DEFAULT_RELIEVE : relieve;
  const borderColor = mkSemanticBorder("neutral", 50, 85);
  const autoBoxShadow = normalizedVariant === "solid" || normalizedVariant === "onion";
  const autoBackground = normalizedVariant === "solid" || normalizedVariant === "onion" || normalizedVariant === "flat";
  const baseBg = cardBg(normalizedVariant, resolvedRelieve, resolveColor("card"));
  const fillBg = normalizedVariant === "onion" ? colorMix(baseBg, "transparent", 60) : baseBg;
  const boxShadow = autoBoxShadow ? cardShadow(normalizedVariant, resolvedRelieve) : undefined;

  const cardStyle = {
    color: resolveColor("color"),
    padding: PADDING_BY_SIZE[sizew] || PADDING_BY_SIZE.md,
    border: `1px solid ${borderColor}`,
    ...(boxShadow ? { boxShadow } : {}),
    ...(autoBackground ? { backgroundColor: fillBg } : {}),
    ...(style && typeof style === "object" ? style : {}),
  };

  const Tag = inline ? "span" : "div";

  return (
    <Tag
      {...rest}
      className={["card-root", className].filter(Boolean).join(" ")}
      style={cardStyle}
      data-variant={normalizedVariant}
    >
      {children}
    </Tag>
  );
}
