"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm text-(--muted-foreground)">
        Theme
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
