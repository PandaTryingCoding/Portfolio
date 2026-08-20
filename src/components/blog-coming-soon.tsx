import { FadeIn } from "@/components/motion-elements";
import { ButtonLink } from "@/components/ui/button-link";

export function BlogComingSoon() {
  return (
    <div className='mx-auto flex w-full max-w-3xl flex-col items-start px-6 py-24 lg:px-8'>
      <FadeIn className='max-w-2xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)'>
          Blog
        </p>
        <h1 className='mt-6 text-5xl font-semibold tracking-tight text-foreground'>
          Coming soon.
        </h1>
        <p className='mt-6 text-lg leading-8 text-(--muted-foreground)'>
          I&apos;m building a blog CMS that will power writing from this
          portfolio. Articles on frontend architecture, React, Next.js, and some
          other topics like football, anime, technology and other stuff will
          land here once it&apos;s ready.
        </p>
        <div className='mt-10'>
          <ButtonLink href='/' variant='solid'>
            Back to home
          </ButtonLink>
        </div>
      </FadeIn>
    </div>
  );
}
