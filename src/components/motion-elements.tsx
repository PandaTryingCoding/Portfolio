import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type MotionSectionProps = MotionProps & {
  id?: string;
};

function joinClassNames(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  return (
    <div
      className={joinClassNames("motion-enter", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
}: MotionSectionProps) {
  return (
    <section
      id={id}
      className={joinClassNames("motion-enter", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </section>
  );
}

export function StaggerGroup({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className, delay = 0 }: MotionProps) {
  return (
    <div
      className={joinClassNames("motion-enter", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
