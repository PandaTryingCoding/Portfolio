type TagProps = {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "xs";
};

export function Tag({ children, variant = "filled", size = "sm" }: TagProps) {
  const sizeClassName =
    size === "xs" ? "px-3 py-1 text-xs font-medium" : "px-3 py-1 text-sm";

  const variantClassName =
    variant === "filled"
      ? "bg-(--tag-background) text-(--accent)"
      : "border-2 border-(--border) text-(--muted-foreground)";

  return (
    <span className={`rounded-full ${sizeClassName} ${variantClassName}`}>
      {children}
    </span>
  );
}
