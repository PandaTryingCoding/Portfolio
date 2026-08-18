import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-elements";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on frontend architecture, React, Next.js, and TypeScript.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
      <FadeIn className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)">
          Blog
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground">
          Writing about frontend engineering, systems, and product experience.
        </h1>
        <p className="mt-6 text-lg leading-8 text-(--muted-foreground)">
          These posts are currently managed from a TypeScript data file so you can
          quickly edit titles, summaries, dates, tags, and content in one place.
        </p>
      </FadeIn>

      <StaggerGroup className="mt-14 space-y-6">
        {blogPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-3xl border border-(--border) bg-(--surface) p-8 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-(--muted-foreground)">
                <span>{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-(--dot)" />
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-(--muted-foreground)">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-(--tag-background) px-3 py-1 text-xs font-medium text-(--accent)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
