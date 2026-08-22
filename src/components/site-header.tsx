"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, siteConfig } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";

function MenuIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      className='h-5 w-5'
      aria-hidden='true'
    >
      <path d='M4 7h16M4 12h16M4 17h16' />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      className='h-5 w-5'
      aria-hidden='true'
    >
      <path d='M6 6l12 12M18 6L6 18' />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className='sticky top-0 z-30 border-b border-(--border) bg-(--surface-strong)/90 backdrop-blur'>
      <div className='relative z-40 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8'>
        <Link
          href='/'
          className='text-xl font-semibold tracking-[0.12em] text-foreground'
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

          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-foreground transition hover:border-(--accent) hover:text-(--accent) md:hidden'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <div className='md:hidden'>
            <motion.button
              type='button'
              aria-label='Close menu'
              className='fixed inset-0 z-20 bg-black/45 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className='absolute inset-x-0 top-full z-30 overflow-hidden border-b border-(--border) bg-(--surface-strong)/95 backdrop-blur'
            >
              <div className='mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4 lg:px-8'>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className='rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-(--surface) hover:text-(--accent)'
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
