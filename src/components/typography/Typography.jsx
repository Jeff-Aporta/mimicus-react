/**
 * Typography — isla: primitives
 * demo: demo/config/demos/lib/Text.json
 * llm:  ./Typography.llm.md
 * css:  css/components/typography.css
 * repo: Jeff-Aporta/mimicus-react · src/components/typography/Typography.jsx
 * Sistema tipográfico: Typography (Text/Title/Paragraph/Link) + alias demo Text y Headings.
 */
import { buildTypographyStyle, levelToVariant, typographyClass } from "./typographyHelpers.js";

export function TypographyText({
  color,
  variant = "body1",
  lines = 0,
  ellipsis = false,
  strong = false,
  italic = false,
  underline = false,
  delete: del = false,
  disabled = false,
  component,
  className,
  style,
  children,
  ...rest
}) {
  const v = variant === "text" ? "body1" : variant;
  const spec = buildTypographyStyle({ color, variant: v, style, lines, ellipsis });
  const Tag = component ?? (v.startsWith("h") ? v : v === "body1" || v === "body2" ? "p" : "span");
  const mods = [strong && "mimicus-typography--strong", italic && "mimicus-typography--italic", underline && "mimicus-typography--underline", del && "mimicus-typography--delete", disabled && "mimicus-typography--disabled"].filter(Boolean);
  return (
    <Tag {...rest} {...spec} className={typographyClass([`mimicus-typography-${v}`, ...mods, className])} data-variant={v} aria-disabled={disabled || undefined}>
      {children}
    </Tag>
  );
}

export function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }) {
  const variant = levelToVariant(level);
  const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
  const Tag = variant;
  return (
    <Tag {...rest} {...spec} className={typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className])} data-level={level} data-variant={variant}>
      {children}
    </Tag>
  );
}

export function TypographyParagraph(props) {
  return <TypographyText {...props} variant={props.variant ?? "body1"} component="p" className={["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ")} />;
}

export function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }) {
  const spec = buildTypographyStyle({ color, variant: "body1", style });
  if (target === "_blank" && !rel) rel = "noopener noreferrer";
  return (
    <a {...rest} href={disabled ? undefined : href} target={target} rel={rel} {...spec} className={typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className])} aria-disabled={disabled || undefined}>
      {children}
    </a>
  );
}

/** Alias demo Text */
export function Text({ sampleText, children, ...rest }) {
  const content = children ?? sampleText;
  return <TypographyText {...rest}>{content}</TypographyText>;
}

/** Vista demo H1–H6 */
export function Headings({ color, lines = 0, sampleText, children, className, style }) {
  const text = children ?? sampleText ?? "Heading";
  return (
    <div className={["mimicus-typography-headings-demo", className].filter(Boolean).join(" ")} style={style}>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <TypographyTitle key={level} level={level} color={color} lines={lines}>
          {text} — H{level}
        </TypographyTitle>
      ))}
    </div>
  );
}

function TypographyRoot(props) {
  return <TypographyText {...props} />;
}

TypographyRoot.Text = TypographyText;
TypographyRoot.Title = TypographyTitle;
TypographyRoot.Paragraph = TypographyParagraph;
TypographyRoot.Link = TypographyLink;

export const Typography = TypographyRoot;
