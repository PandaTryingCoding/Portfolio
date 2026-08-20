import type { SkillGroup } from "@/lib/site-data";
import { Tag } from "@/components/ui/tag";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <div className='rounded-3xl border-2 border-(--border) bg-(--surface-strong) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40'>
      <h3 className='text-xl font-semibold text-foreground'>{group.title}</h3>
      <div className='mt-5 flex flex-wrap gap-3'>
        {group.items.map((item) => (
          <Tag key={item} variant='filled'>
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
}
