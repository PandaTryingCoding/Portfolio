/**
 * Feature flags for the portfolio.
 * Toggle via env vars in `.env.local` (see `.env.example`).
 */
export function isBlogEnabled(): boolean {
  return process.env.NEXT_PUBLIC_BLOG_ENABLED === "true";
}
