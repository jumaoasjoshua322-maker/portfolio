import {
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
} from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile, projects, resumeHighlights, skills } from "@/data/portfolio";

export function ResumeSection() {
  const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] ?? []), skill.name];
    return acc;
  }, {});

  return (
    <section
      id="resume"
      className="section-shell scroll-mt-20"
      aria-labelledby="resume-heading"
    >
      <Reveal>
        <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="resume-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Get my resume.
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-400 sm:text-lg">
              One-page, June 2026 graduate.
            </p>
          </div>
          <Button asChild size="lg">
            <a href={profile.resumePath} download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <article className="mx-auto max-w-4xl rounded-xl border border-white/12 bg-[#f8fafc] p-5 text-slate-950 shadow-[0_24px_100px_rgba(0,0,0,0.32)] sm:p-10">
          <header className="border-b border-slate-200 pb-5">
            <p className="text-sm font-medium uppercase text-slate-500">
              {profile.role}
            </p>
            <h3 className="mt-2 text-3xl font-semibold">{profile.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {profile.location} |{" "}
              <a
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>{" "}
              | {profile.phone} |{" "}
              <a
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </header>

          <ResumeBlock title="Professional Summary" icon={<FileText className="h-4 w-4" />}>
            <p>{resumeHighlights.summary}</p>
          </ResumeBlock>

          <ResumeBlock title="Education" icon={<GraduationCap className="h-4 w-4" />}>
            <ul className="space-y-1">
              {resumeHighlights.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Skills" icon={<CheckCircle2 className="h-4 w-4" />}>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(groupedSkills).map(([category, values]) => (
                <div key={category}>
                  <p className="font-semibold text-slate-900">{category}</p>
                  <p className="mt-1 text-slate-600">{values.join(", ")}</p>
                </div>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Projects" icon={<BriefcaseBusiness className="h-4 w-4" />}>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.title}>
                  <p className="font-semibold text-slate-900">{project.title}</p>
                  <p className="mt-1 text-slate-600">{project.summary}</p>
                  <p className="mt-1 text-slate-500">
                    Stack: {project.stack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </ResumeBlock>
        </article>
      </Reveal>
    </section>
  );
}

function ResumeBlock({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 py-5 last:border-b-0">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-slate-500">
        {icon}
        <h4>{title}</h4>
      </div>
      <div className="text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}
