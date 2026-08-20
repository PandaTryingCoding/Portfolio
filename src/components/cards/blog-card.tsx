import Link from "next/link";
import type { BlogPost } from "@/lib/site-data";
import { Tag } from "@/components/ui/tag";

type BlogCardProps = {
  post: BlogPost;
  variant?: "grid" | "list";
};

export function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  const isList = variant === "list";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`block rounded-3xl border-2 border-(--border) bg-(--surface) transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40 ${
        isList ? "p-8" : "p-6"
      }`}
    >
      <div className='flex flex-wrap items-center gap-3 text-sm text-(--muted-foreground)'>
        <span>{post.publishedAt}</span>
        {isList ? <span className='h-1 w-1 rounded-full bg-(--dot)' /> : null}
        <span>{post.readTime}</span>
      </div>

      <h3
        className={`font-semibold text-foreground ${
          isList ? "mt-4 text-3xl" : "mt-5 text-2xl"
        }`}
      >
        {post.title}
      </h3>

      <p
        className={`text-(--muted-foreground) ${
          isList
            ? "mt-4 max-w-3xl text-base leading-7"
            : "mt-4 text-sm leading-7"
        }`}
      >
        {post.description}
      </p>

      <div className='mt-5 flex flex-wrap gap-2'>
        {post.tags.map((tag) => (
          <Tag key={tag} size='xs'>
            {tag}
          </Tag>
        ))}
      </div>
    </Link>
  );
}
