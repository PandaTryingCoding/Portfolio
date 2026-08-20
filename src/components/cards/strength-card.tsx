type StrengthCardProps = {
  children: React.ReactNode;
};

export function StrengthCard({ children }: StrengthCardProps) {
  return (
    <div className='rounded-3xl border-2 border-(--border) bg-(--surface) p-6 text-foreground transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40'>
      {children}
    </div>
  );
}
