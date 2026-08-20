type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className='rounded-3xl border-2 border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40'>
      <p className='text-3xl font-semibold text-foreground'>{value}</p>
      <p className='mt-2 text-sm text-(--muted-foreground)'>{label}</p>
    </div>
  );
}
