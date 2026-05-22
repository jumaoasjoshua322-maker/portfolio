import { Bug, FlaskConical, GitBranch, Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";

const icons = [FlaskConical, Users, GitBranch];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-shell"
      aria-labelledby="experience-heading"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Experience and Training"
          title="Academic work framed as professional development practice."
          description="Joshua's experience is strongest when presented as applied software delivery: collaboration, capstone development, debugging, testing, research, and iterative implementation."
          icon={<Bug className="h-3.5 w-3.5" />}
        />
      </Reveal>

      <div className="relative grid gap-5 lg:grid-cols-3">
        {experience.map((item, index) => {
          const Icon = icons[index] ?? FlaskConical;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group h-full rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/[0.065]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-white/10 bg-black/[0.24] px-2.5 py-1 text-xs text-zinc-500">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-5 grid gap-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 rounded-md border border-white/10 bg-black/[0.18] px-3 py-2 text-sm text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
