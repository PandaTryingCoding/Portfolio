import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  target,
  rel,
}: ButtonLinkProps) {
  const baseClassName =
    "rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5";

  const variantClassName =
    variant === "solid"
      ? "bg-(--accent) text-(--accent-foreground) hover:bg-(--accent-strong)"
      : "border-2 border-solid border-(--border) text-foreground hover:border-(--accent) hover:text-(--accent)";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${baseClassName} ${variantClassName}`}
    >
      {children}
    </Link>
  );
}
