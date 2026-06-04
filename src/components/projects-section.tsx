import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { GitHubIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <h2
            id="projects-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Selected projects.
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-400 sm:text-lg">
            Two deployed projects with real screens, live demos, GitHub repos,
            and full-stack product decisions.
          </p>
        </div>
      </Reveal>

      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCaseStudy({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 0.06}>
      <article
        id={project.id}
        className="grid items-start gap-8 lg:grid-cols-[1.04fr_0.96fr]"
      >
        <ProjectScreenshots project={project} className="order-2 lg:order-1" />

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <span className="font-mono text-cyan-300">{projectNumber}</span>
            <span>{project.meta}</span>
            <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-cyan-100">
              {project.label}
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            {project.summary}
          </p>

          <div className="mt-6 grid gap-4 text-sm leading-7 text-zinc-400">
            <ProseBlock label="My role">{project.role}</ProseBlock>
            <ProseBlock label="Problem">{project.problem}</ProseBlock>
            <ProseBlock label="Approach">{project.approach}</ProseBlock>
            <div className="grid gap-4 sm:grid-cols-2">
              <ListBlock label="What I built" items={project.features} />
              <ListBlock
                label="Technical decisions"
                items={project.technicalDecisions}
              />
            </div>
            <ProseBlock label="Result">{project.impact}</ProseBlock>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/4.5 px-2 py-1 text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon className="h-4 w-4" />
                View Repo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProseBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-l-2 border-white/10 pl-4">
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="text-zinc-400">{children}</p>
    </div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-l-2 border-white/10 pl-4">
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-zinc-400">
            <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectScreenshots({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (!project.screenshots) return null;
  const { hero, supporting, chromeLabel } = project.screenshots;
  const supportingGrid =
    supporting.length === 3
      ? "sm:grid-cols-3"
      : supporting.length === 1
      ? "sm:grid-cols-1"
      : "sm:grid-cols-2";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/12 bg-[#090c11] p-3 shadow-[0_24px_100px_rgba(0,0,0,0.3)] sm:p-4",
        className,
      )}
    >
      <BrowserFrame label={chromeLabel}>
        <div
          className="relative w-full bg-black"
          style={{ aspectRatio: `${hero.width} / ${hero.height}` }}
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </BrowserFrame>

      <div className={cn("relative mt-3 grid gap-3", supportingGrid)}>
        {supporting.map((shot) => (
          <div
            key={shot.src}
            className="overflow-hidden rounded-lg border border-white/10 bg-black"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowserFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0f141b]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <span className="font-mono text-xs text-zinc-500">{label}</span>
      </div>
      {children}
    </div>
  );
}
