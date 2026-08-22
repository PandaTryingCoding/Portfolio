import { BlogCard } from "@/components/cards/blog-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SkillCard } from "@/components/cards/skill-card";
import { StatCard } from "@/components/cards/stat-card";
import { StrengthCard } from "@/components/cards/strength-card";
import {
  FadeIn,
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-elements";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { isBlogEnabled } from "@/lib/features";
import {
  blogPosts,
  experiences,
  projects,
  siteConfig,
  skillGroups,
  stats,
  strengths,
} from "@/lib/site-data";

export default function Home() {
  const blogLive = isBlogEnabled();

  return (
    <div className='text-foreground'>
      <section className='border-b border-(--border)'>
        <div className='mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28'>
          <FadeIn className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)'>
              {siteConfig.role}
            </p>
            <h1 className='mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl'>
              Building scalable frontend experiences with clarity and craft.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-(--muted-foreground)'>
              {siteConfig.intro} {siteConfig.summary}
            </p>
            <div className='mt-10 flex flex-wrap gap-4'>
              <ButtonLink href='#projects' variant='solid'>
                View Projects
              </ButtonLink>
              {blogLive ? (
                <ButtonLink href='/blog'>Read Blog</ButtonLink>
              ) : (
                <ButtonLink href='#contact'>Contact Me</ButtonLink>
              )}
            </div>
          </FadeIn>

          <StaggerGroup className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard label={stat.label} value={stat.value} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <MotionSection
        id='about'
        className='mx-auto w-full max-w-6xl px-6 py-20 lg:px-8'
      >
        <SectionHeading
          eyebrow='About'
          title='How I approach frontend work.'
          description='I care about systems that scale with the product — reusable UI, clear state boundaries, and experiences that feel reliable under real-world conditions.'
        />

        <StaggerGroup className='mt-12 grid gap-6 lg:grid-cols-2'>
          {strengths.map((strength) => (
            <StaggerItem key={strength}>
              <StrengthCard>{strength}</StrengthCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>

      <MotionSection
        id='experience'
        className='border-y border-(--border) py-20'
      >
        <div className='mx-auto w-full max-w-6xl px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Experience'
            title='Roles where ownership and measurable impact mattered.'
            description='From learning platforms to audio creator tools — shipping features end-to-end with product, design, and backend partners.'
          />

          <StaggerGroup className='mt-12 space-y-6'>
            {experiences.map((experience) => (
              <StaggerItem key={`${experience.company}-${experience.role}`}>
                <ExperienceCard experience={experience} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection
        id='projects'
        className='mx-auto w-full max-w-6xl px-6 py-20 lg:px-8'
      >
        <SectionHeading
          eyebrow='Projects'
          title='Selected work and builds.'
          description='A mix of production platform work and full-stack projects that show how I think about product UI, data, and real integrations.'
        />

        <StaggerGroup className='mt-12 grid gap-6 lg:grid-cols-3'>
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>

      <MotionSection id='skills' className='border-y border-(--border) py-20'>
        <div className='mx-auto w-full max-w-6xl px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Skills'
            title='Tools and practices I use day to day.'
            description='Grouped by how I actually ship — languages, UI systems, data layers, and the tooling around them.'
          />

          <StaggerGroup className='mt-12 grid gap-6 md:grid-cols-2'>
            {skillGroups.map((group) => (
              <StaggerItem key={group.title}>
                <SkillCard group={group} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      {blogLive ? (
        <MotionSection className='mx-auto w-full max-w-6xl px-6 py-20 lg:px-8'>
          <SectionHeading
            eyebrow='Latest Writing'
            title='A built-in blog section for your articles.'
            description='Your blog content is driven from a single TypeScript data file today, making it easy to launch now and migrate to MDX or a CMS later.'
          />

          <StaggerGroup className='mt-12 grid gap-6 lg:grid-cols-3'>
            {blogPosts.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </MotionSection>
      ) : null}

      <MotionSection id='contact' className='border-t border-(--border)'>
        <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 lg:px-8 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)'>
              Contact
            </p>
            <h2 className='mt-4 text-4xl font-semibold tracking-tight text-foreground'>
              Let&apos;s build thoughtful frontend products.
            </h2>
            <p className='mt-4 text-base leading-7 text-(--muted-foreground)'>
              {siteConfig.availability}
            </p>
          </div>

          <div className='flex flex-wrap gap-4'>
            <ButtonLink
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
              target='_blank'
              rel='noopener noreferrer'
              variant='solid'
            >
              {siteConfig.email}
            </ButtonLink>
            <a
              href={`tel:${siteConfig.phone}`}
              className='inline-flex items-center gap-2 rounded-full border-2 border-solid border-(--border) px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)'
            >
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4'
                aria-hidden='true'
              >
                <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
              </svg>
              Give me a call
            </a>
            {siteConfig.socialLinks.map((link) => (
              <ButtonLink
                key={link.label}
                href={link.href}
                target={link.target ?? "_blank"}
                rel='noopener noreferrer'
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
