import type { ProjectItem } from "@/lib/site-data";
import { Tag } from "@/components/ui/tag";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article className="flex h-full flex-col rounded-3xl border-2 border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
      <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
      <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
        {project.description}
      </p>
      <p className="mt-4 text-sm leading-7 text-foreground">{project.impact}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item} size="xs">
            {item}
          </Tag>
        ))}
      </div>

      {hasLinks ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-(--border) px-4 py-1.5 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
            >
              Live site
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-(--border) px-4 py-1.5 text-xs font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
            >
              GitHub
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
