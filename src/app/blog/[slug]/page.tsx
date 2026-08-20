import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogComingSoon } from "@/components/blog-coming-soon";
import { isBlogEnabled } from "@/lib/features";
import { blogPosts } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  if (!isBlogEnabled()) {
    return [];
  }

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  if (!isBlogEnabled()) {
    return {
      title: "Coming Soon",
      description: "Blog articles are coming soon.",
    };
  }

  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  if (!isBlogEnabled()) {
    return <BlogComingSoon />;
  }

  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-20 lg:px-8">
      <Link
        href="/blog"
        className="text-sm font-medium text-(--accent) transition hover:text-(--accent-strong)"
      >
        Back to blog
      </Link>

      <header className="mt-8 border-b border-(--border) pb-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-(--muted-foreground)">
          <span>{post.publishedAt}</span>
          <span className="h-1 w-1 rounded-full bg-(--dot)" />
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-(--muted-foreground)">
          {post.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-(--tag-background) px-3 py-1 text-xs font-medium text-(--accent)"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10 space-y-6 text-base leading-8 text-foreground">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
