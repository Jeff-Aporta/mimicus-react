export function ContapymeIcon({ icon, size = 20, className, style, ...rest }) {
  return (
    <iconify-icon
      icon={icon}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-flex", verticalAlign: "middle", ...(style && typeof style === "object" ? style : {}) }}
      {...rest}
    />
  );
}
