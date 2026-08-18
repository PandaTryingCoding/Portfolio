import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-(--border) bg-(--surface-strong)">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-(--muted-foreground) lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          {siteConfig.name} . {siteConfig.role}
        </p>

        <div className="flex flex-wrap gap-4">
          {siteConfig.socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-(--accent)"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
