/**
 * Typography — isla: primitives
 * demo: demo/config/demos/lib/Text.json
 * llm:  ./Typography.llm.md
 * css:  css/components/typography.css
 * repo: Jeff-Aporta/mimicus-react · src/components/typography/Typography.tsx
 * Sistema tipográfico: Typography (Text/Title/Paragraph/Link) + alias demo Text y Headings.
 */
import type { AnchorHTMLAttributes, CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { buildTypographyStyle, levelToVariant, typographyClass } from "./typographyHelpers.ts";

export interface TypographyTextProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  color?: string;
  variant?: string;
  lines?: number;
  ellipsis?: boolean;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  disabled?: boolean;
  component?: ElementType;
  style?: CSSProperties;
  children?: ReactNode;
}

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
}: TypographyTextProps) {
  const v = variant === "text" ? "body1" : variant;
  const spec = buildTypographyStyle({ color, variant: v, style, lines, ellipsis });
  const Tag = (component ?? (v.startsWith("h") ? v : v === "body1" || v === "body2" ? "p" : "span")) as ElementType;
  const mods = [strong && "mimicus-typography--strong", italic && "mimicus-typography--italic", underline && "mimicus-typography--underline", del && "mimicus-typography--delete", disabled && "mimicus-typography--disabled"].filter(Boolean);
  return (
    <Tag {...rest} {...spec} className={typographyClass([`mimicus-typography-${v}`, ...mods, className])} data-variant={v} aria-disabled={disabled || undefined}>
      {children}
    </Tag>
  );
}

export interface TypographyTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "color"> {
  level?: number;
  color?: string;
  lines?: number;
  ellipsis?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export function TypographyTitle({ level = 1, color, lines = 0, ellipsis, className, style, children, ...rest }: TypographyTitleProps) {
  const variant = levelToVariant(level);
  const spec = buildTypographyStyle({ color, variant, style, lines, ellipsis });
  const Tag = variant as ElementType;
  return (
    <Tag {...rest} {...spec} className={typographyClass([`mimicus-typography-${variant}`, "mimicus-typography-title", className])} data-level={level} data-variant={variant}>
      {children}
    </Tag>
  );
}

export function TypographyParagraph(props: TypographyTextProps) {
  return <TypographyText {...props} variant={props.variant ?? "body1"} component="p" className={["mimicus-typography-paragraph", props.className].filter(Boolean).join(" ")} />;
}

export interface TypographyLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  color?: string;
  disabled?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export function TypographyLink({ href, color = "primary", target, rel, className, style, children, disabled, ...rest }: TypographyLinkProps) {
  const spec = buildTypographyStyle({ color, variant: "body1", style, lines: 0, ellipsis: false });
  if (target === "_blank" && !rel) rel = "noopener noreferrer";
  return (
    <a {...rest} href={disabled ? undefined : href} target={target} rel={rel} {...spec} className={typographyClass(["mimicus-typography-link", disabled && "mimicus-typography--disabled", className])} aria-disabled={disabled || undefined}>
      {children}
    </a>
  );
}

export interface TextProps extends TypographyTextProps {
  sampleText?: ReactNode;
}

/** Alias demo Text */
export function Text({ sampleText, children, ...rest }: TextProps) {
  const content = children ?? sampleText;
  return <TypographyText {...rest}>{content}</TypographyText>;
}

export interface HeadingsProps {
  color?: string;
  lines?: number;
  sampleText?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/** Vista demo H1–H6 */
export function Headings({ color, lines = 0, sampleText, children, className, style }: HeadingsProps) {
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

interface TypographyComponent {
  (props: TypographyTextProps): ReactNode;
  Text: typeof TypographyText;
  Title: typeof TypographyTitle;
  Paragraph: typeof TypographyParagraph;
  Link: typeof TypographyLink;
}

function TypographyRoot(props: TypographyTextProps) {
  return <TypographyText {...props} />;
}

export const Typography: TypographyComponent = Object.assign(TypographyRoot, {
  Text: TypographyText,
  Title: TypographyTitle,
  Paragraph: TypographyParagraph,
  Link: TypographyLink,
});
