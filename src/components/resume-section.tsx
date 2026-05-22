import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
} from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { profile, projects, resumeHighlights, skills } from "@/data/portfolio";

export function ResumeSection() {
  const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] ?? []), skill.name];
    return acc;
  }, {});

  return (
    <section id="resume" className="section-shell" aria-labelledby="resume-heading">
      <Reveal>
        <SectionHeading
          eyebrow="Resume"
          title="ATS-friendly story, polished for human readers."
          description="The resume section mirrors the portfolio: concise professional summary, education, skill groups, standout projects, and a placeholder area for future certifications."
          icon={<FileText className="h-3.5 w-3.5" />}
          align="center"
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <aside className="sticky top-24 rounded-lg border border-white/10 bg-white/[0.045] p-5">
            <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              Resume Snapshot
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Built for recruiter scanning: role fit, tools, education, projects,
              and evidence of practical engineering all appear above the fold.
            </p>
            <Button asChild className="mt-6 w-full">
              <a href={profile.resumePath} download>
                <Download className="h-4 w-4" />
                Download ATS Resume
              </a>
            </Button>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              {[
                "Junior developer roles",
                "Associate software engineer openings",
                "Internship and OJT opportunities",
                "Freelance full-stack projects",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-lg border border-white/[0.12] bg-[#f8fafc] p-5 text-slate-950 shadow-[0_24px_100px_rgba(0,0,0,0.32)] sm:p-8">
            <header className="border-b border-slate-200 pb-5">
              <p className="text-sm font-medium uppercase text-slate-500">
                {profile.role}
              </p>
              <h3 className="mt-2 text-3xl font-semibold">{profile.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {profile.location} | {profile.email} | GitHub | LinkedIn
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

            <ResumeBlock title="Certifications" icon={<Award className="h-4 w-4" />}>
              <p>{resumeHighlights.certifications[0]}</p>
            </ResumeBlock>
          </article>
        </Reveal>
      </div>
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
