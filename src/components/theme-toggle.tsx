"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      aria-hidden='true'
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M18.01 18.01l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M18.01 5.99l1.06-1.06' />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5 w-5'
      aria-hidden='true'
    >
      <path d='M17.5 15.2A7.5 7.5 0 1 1 8.8 6.5 6 6 0 0 0 17.5 15.2z' />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className='h-10 w-10 rounded-full border border-(--border) bg-(--surface)'
        aria-hidden='true'
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className={`${isDark ? "" : "mb-1 ml-1"}`}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
}
