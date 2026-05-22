import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile, projects, resumeHighlights, skills } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "ATS-friendly resume for Joshua Jumao-as, Computer Engineering student and aspiring full-stack software engineer from Cebu, Philippines.",
};

export default function ResumePage() {
  const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] ?? []), skill.name];
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 text-slate-950 sm:px-6">
      <div className="mx-auto mb-6 flex max-w-4xl flex-col gap-3 print:hidden sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <Button asChild>
          <a href={profile.resumePath} download>
            <Download className="h-4 w-4" />
            Download ATS Resume
          </a>
        </Button>
      </div>

      <article className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-2xl print:border-0 print:shadow-none sm:p-10">
        <header className="border-b border-slate-200 pb-6">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-slate-500">
            <FileText className="h-4 w-4" />
            {profile.role}
          </p>
          <h1 className="mt-2 text-4xl font-semibold">{profile.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
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

        <ResumeBlock title="Professional Summary">
          <p>{resumeHighlights.summary}</p>
        </ResumeBlock>

        <ResumeBlock title="Education">
          <ul className="space-y-1">
            {resumeHighlights.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 font-medium">
            Achievement: Top 8, Engineering Departmental Differential Equations
            Exam (2023–2024)
          </p>
        </ResumeBlock>

        <ResumeBlock title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, values]) => (
              <div key={category}>
                <p className="font-semibold">{category}</p>
                <p className="text-slate-600">{values.join(", ")}</p>
              </div>
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock title="Projects">
          <div className="space-y-5">
            {projects.map((project) => (
              <section key={project.title}>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="mt-1 text-slate-600">{project.summary}</p>
                <p className="mt-1 text-slate-500">
                  Stack: {project.stack.join(", ")}
                </p>
              </section>
            ))}
          </div>
        </ResumeBlock>

        <ResumeBlock title="Certifications">
          <p>{resumeHighlights.certifications[0]}</p>
        </ResumeBlock>
      </article>
    </main>
  );
}

function ResumeBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 py-5 last:border-b-0">
      <h2 className="mb-3 text-sm font-semibold uppercase text-slate-500">
        {title}
      </h2>
      <div className="text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}
