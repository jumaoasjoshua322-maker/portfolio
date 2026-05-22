import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Layers3,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon } from "@/components/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentStyles = {
  teal: {
    badge: "cyan" as const,
    glow: "from-cyan-300/18 via-cyan-300/8 to-transparent",
    border: "border-cyan-300/20",
    text: "text-cyan-100",
    bar: "bg-[linear-gradient(90deg,#22d3ee,#67e8f9,#a5f3fc)]",
  },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <SectionHeading
          headingId="projects-heading"
          eyebrow="Featured Projects"
          title="Case studies that show real product-building capability."
          description="These projects are positioned as evidence of system thinking: multi-layer architecture, responsive UI, debugging, workflow validation, and the discipline to turn requirements into usable software."
          icon={<Layers3 className="h-3.5 w-3.5" />}
          align="center"
        />
      </Reveal>

      <div className="space-y-8">
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
  const accent = accentStyles[project.accent];
  return (
    <Reveal delay={index * 0.08}>
      <article
        id={project.id}
        className={cn(
          "relative overflow-hidden rounded-xl border bg-white/4 shadow-[0_24px_100px_rgba(0,0,0,0.3)]",
          accent.border,
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-64 bg-gradient-to-br opacity-80",
            accent.glow,
          )}
        />
        <div className="relative grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.04fr_0.96fr] lg:p-8">
          <ProjectMockup project={project} />

          <div className="flex flex-col justify-center">
            <Badge variant={accent.badge} className="mb-4 w-fit">
              <MonitorSmartphone className="h-3.5 w-3.5" />
              {project.label}
            </Badge>
            <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              {project.summary}
            </p>
            <p className="mt-4 rounded-lg border border-white/10 bg-black/24 p-4 text-sm leading-6 text-zinc-300">
              <span className={cn("font-medium", accent.text)}>Impact: </span>
              {project.impact}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5.5 px-2.5 py-1.5 text-xs font-medium text-zinc-200"
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
              {(() => {
                const isLiveDemo = /^https?:\/\//i.test(project.demoUrl);
                return (
                  <Button asChild>
                    <a
                      href={project.demoUrl}
                      {...(isLiveDemo
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {isLiveDemo ? "Live Demo" : "Request Demo"}
                      {isLiveDemo ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : null}
                    </a>
                  </Button>
                );
              })()}
            </div>
          </div>
        </div>

        <div className="relative grid gap-4 border-t border-white/10 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:p-8">
          <CaseStudyColumn
            icon={<CheckCircle2 className="h-4 w-4" />}
            title="Core Features"
            items={project.features}
          />
          <CaseStudyColumn
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Challenges Solved"
            items={project.challenges}
          />
          <CaseStudyColumn
            icon={<Network className="h-4 w-4" />}
            title="Development Process"
            items={project.process}
          />
          <CaseStudyColumn
            icon={<Gauge className="h-4 w-4" />}
            title="Architecture"
            items={project.architecture}
            footer={project.performance}
          />
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudyColumn({
  icon,
  title,
  items,
  footer,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  footer?: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/6 text-cyan-100">
          {icon}
        </span>
        {title}
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-400">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {footer ? (
        <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-zinc-300">
          {footer}
        </p>
      ) : null}
    </div>
  );
}

function ProjectMockup({ project }: { project: Project }) {
  if (project.screenshots) {
    return <ProjectScreenshots project={project} />;
  }
  return <ProjectStylizedMockup project={project} />;
}

function ProjectScreenshots({ project }: { project: Project }) {
  const { hero, supporting, chromeLabel } = project.screenshots!;

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-white/12 bg-[#090c11] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-4">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.03))]" />

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

      <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
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
                sizes="(min-width: 640px) 25vw, 50vw"
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
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f141b]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="font-mono text-xs text-zinc-500">{label}</span>
      </div>
      {children}
    </div>
  );
}

function ProjectStylizedMockup({ project }: { project: Project }) {
  const accent = accentStyles[project.accent];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-white/12 bg-[#090c11] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-4">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.03))]" />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f141b]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="font-mono text-xs text-zinc-500">tenant.dashboard</span>
        </div>

        <SaasDashboard accentBar={accent.bar} />
      </div>

      <div className="relative mt-4 grid gap-3 sm:grid-cols-[0.72fr_0.28fr]">
        <div className="rounded-lg border border-white/10 bg-white/4.5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-white">Responsive preview</p>
            <Smartphone className={cn("h-4 w-4", accent.text)} />
          </div>
          <div className="grid grid-cols-[1fr_0.62fr_0.42fr] gap-3">
            <div className="h-20 rounded-lg border border-white/10 bg-black/24 p-2">
              <div className={cn("mb-2 h-2 rounded-md", accent.bar)} />
              <div className="grid grid-cols-3 gap-1">
                <span className="h-10 rounded-md bg-white/8" />
                <span className="h-10 rounded-md bg-white/8" />
                <span className="h-10 rounded-md bg-white/8" />
              </div>
            </div>
            <div className="h-20 rounded-lg border border-white/10 bg-black/24 p-2">
              <div className="mb-2 h-2 rounded-md bg-white/12" />
              <div className="space-y-1">
                <span className="block h-3 rounded-md bg-white/8" />
                <span className="block h-3 rounded-md bg-white/8" />
                <span className="block h-3 rounded-md bg-white/8" />
              </div>
            </div>
            <div className="h-20 rounded-lg border border-white/10 bg-black/24 p-2">
              <div className={cn("mx-auto h-full w-8 rounded-md", accent.bar)} />
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/4.5 p-4">
          <p className="text-sm font-medium text-white">UI showcase</p>
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Dashboard density, auth states, and staff-friendly controls.
          </p>
        </div>
      </div>
    </div>
  );
}

function SaasDashboard({ accentBar }: { accentBar: string }) {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-[0.28fr_0.72fr]">
      <aside className="hidden rounded-lg border border-white/10 bg-black/22 p-3 lg:block">
        <p className="mb-4 text-xs font-medium text-zinc-500">Camilo&apos;s SaaS</p>
        {["Overview", "Bookings", "Clients", "Menus", "Tenant"].map((item, index) => (
          <div
            key={item}
            className={cn(
              "mb-2 rounded-md px-3 py-2 text-xs",
              index === 0 ? "bg-white text-black" : "bg-white/4 text-zinc-400",
            )}
          >
            {item}
          </div>
        ))}
      </aside>
      <main className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {["Active tenants", "Orders", "Revenue"].map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/4.5 p-3">
              <p className="text-xs text-zinc-500">{item}</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {index === 0 ? "04" : index === 1 ? "128" : "82%"}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/10 bg-black/24 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-white">Catering workflow</p>
            <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 text-xs text-emerald-100">
              Auth ready
            </span>
          </div>
          <div className="flex h-28 items-end gap-2">
            {[42, 58, 34, 76, 64, 90, 72].map((height, index) => (
              <span
                key={index}
                className={cn("flex-1 rounded-md", accentBar)}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
