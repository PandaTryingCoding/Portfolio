import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-20 border-b border-(--border) bg-(--surface-strong) backdrop-blur opacity-80'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8'>
        <Link
          href='/'
          className='text-sm font-semibold tracking-[0.24em] text-foreground'
        >
          {siteConfig.name}
        </Link>

        <div className='flex items-center gap-3'>
          <nav className='hidden items-center gap-6 text-sm text-(--muted-foreground) md:flex'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='transition hover:text-(--accent)'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
