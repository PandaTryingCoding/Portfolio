import type { ExperienceItem } from "@/lib/site-data";
import { Tag } from "@/components/ui/tag";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className='rounded-3xl border-2 border-(--border) bg-(--surface-strong) p-8 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40'>
      <div className='flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
        <div>
          <h3 className='text-2xl font-semibold text-foreground'>
            {experience.role}
          </h3>
          <p className='mt-1 text-(--accent)'>{experience.company}</p>
        </div>
        <p className='text-sm text-(--muted-foreground)'>
          {experience.duration}
        </p>
      </div>

      <p className='mt-5 max-w-3xl text-(--muted-foreground)'>
        {experience.summary}
      </p>

      <ul className='mt-6 space-y-3 text-foreground'>
        {experience.highlights.map((highlight) => (
          <li key={highlight} className='flex items-start gap-3'>
            <span className='mt-2 size-2 shrink-0 rounded-full bg-(--accent)' />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className='mt-6 flex flex-wrap gap-3'>
        {experience.stack.map((item) => (
          <Tag key={item} variant='filled'>
            {item}
          </Tag>
        ))}
      </div>
    </article>
  );
}
