import type { Metadata } from "next";
import { BlogComingSoon } from "@/components/blog-coming-soon";
import { BlogCard } from "@/components/cards/blog-card";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion-elements";
import { isBlogEnabled } from "@/lib/features";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on frontend architecture, React, Next.js, and TypeScript.",
};

export default function BlogPage() {
  if (!isBlogEnabled()) {
    return <BlogComingSoon />;
  }

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
            <BlogCard post={post} variant="list" />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
