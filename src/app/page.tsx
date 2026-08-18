import Link from "next/link";
import {
  FadeIn,
  MotionSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion-elements";
import { SectionHeading } from "@/components/section-heading";
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
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-(--border)">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)">
              {siteConfig.role}
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Building scalable frontend experiences with clarity and craft.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted-foreground)">
              {siteConfig.intro} {siteConfig.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-foreground) transition hover:-translate-y-0.5 hover:bg-(--accent-strong)"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-(--border) px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
              >
                Read Blog
              </Link>
            </div>
          </FadeIn>

          <StaggerGroup className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm text-(--muted-foreground)">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <MotionSection
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="About"
          title="A portfolio built to reflect how you work."
          description="This starter is designed to help you present your experience, technical strengths, and product thinking without needing to rebuild the structure later."
        />

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          {strengths.map((strength) => (
            <StaggerItem key={strength}>
                <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 text-foreground transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
                {strength}
                </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>

      <MotionSection
        id="experience"
        className="border-y border-(--border) bg-(--surface-soft) py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience with room for impact-focused storytelling."
            description="Replace the placeholder content with your roles, ownership areas, and outcomes. The layout is tuned for concise, high-signal experience summaries."
          />

          <StaggerGroup className="mt-12 space-y-6">
            {experiences.map((experience) => (
              <StaggerItem key={`${experience.company}-${experience.role}`}>
                <article className="rounded-3xl border border-(--border) bg-(--surface-strong) p-8 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-(--accent)">{experience.company}</p>
                    </div>
                    <p className="text-sm text-(--muted-foreground)">{experience.duration}</p>
                  </div>
                  <p className="mt-5 max-w-3xl text-(--muted-foreground)">
                    {experience.summary}
                  </p>
                  <ul className="mt-6 space-y-3 text-foreground">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-(--accent)" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-(--border) px-3 py-1 text-sm text-(--muted-foreground)"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="Projects"
          title="Case-study style project highlights."
          description="These cards are structured to help you talk about problem space, technical depth, and measurable impact rather than only listing technologies."
        />

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <article className="flex h-full flex-col rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
                <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
                  {project.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground">
                  {project.impact}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-(--tag-background) px-3 py-1 text-xs font-medium text-(--accent)"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>

      <MotionSection
        id="skills"
        className="border-y border-(--border) bg-(--surface-soft) py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Grouped by the kind of frontend work you actually do."
            description="The section is intentionally structured around capability areas so the content reads like a professional profile, not a keyword dump."
          />

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="rounded-3xl border border-(--border) bg-(--surface-strong) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40">
                  <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-(--border) px-3 py-1 text-sm text-(--muted-foreground)"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Latest Writing"
          title="A built-in blog section for your articles."
          description="Your blog content is driven from a single TypeScript data file today, making it easy to launch now and migrate to MDX or a CMS later."
        />

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40"
              >
                <div className="flex items-center justify-between text-sm text-(--muted-foreground)">
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
                  {post.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-(--tag-background) px-3 py-1 text-xs font-medium text-(--accent)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </MotionSection>

      <MotionSection
        id="contact"
        className="border-t border-(--border) bg-linear-to-b from-background to-(--surface-soft)"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 lg:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-(--accent)">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
              Let&apos;s build thoughtful frontend products.
            </h2>
            <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
              {siteConfig.availability}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-foreground) transition hover:-translate-y-0.5 hover:bg-(--accent-strong)"
            >
              {siteConfig.email}
            </a>
            {siteConfig.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-(--border) px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
