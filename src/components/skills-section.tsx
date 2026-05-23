import {
  Code2,
  MonitorSmartphone,
  Server,
  TerminalSquare,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills, type SkillCategory } from "@/data/portfolio";

const categoryOrder: SkillCategory[] = ["Frontend", "Backend", "Tools"];

const categoryMeta: Record<
  SkillCategory,
  {
    label: string;
    description: string;
    icon: typeof Code2;
    tone: string;
  }
> = {
  Frontend: {
    label: "Frontend",
    description: "Interfaces I design, build, and ship.",
    icon: MonitorSmartphone,
    tone: "text-cyan-100 border-cyan-300/20 bg-cyan-300/10",
  },
  Backend: {
    label: "Backend & data",
    description: "APIs, persistence, and full-stack glue.",
    icon: Server,
    tone: "text-zinc-100 border-white/15 bg-white/8",
  },
  Tools: {
    label: "Tooling & engineering",
    description: "How I move from idea to running product.",
    icon: TerminalSquare,
    tone: "text-zinc-100 border-white/15 bg-white/8",
  },
};

export function SkillsSection() {
  const grouped = categoryOrder.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section
      id="skills"
      className="section-shell scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <SectionHeading
          headingId="skills-heading"
          eyebrow="Technical Skills"
          title="The stack I work in."
          description="Tools I use day-to-day, with proof from shipped projects."
          icon={<Code2 className="h-3.5 w-3.5" />}
          align="center"
        />
      </Reveal>

      <div className="space-y-10">
        {grouped.map(({ category, items }, groupIndex) => {
          const meta = categoryMeta[category];
          const Icon = meta.icon;
          return (
            <Reveal key={category} delay={groupIndex * 0.06}>
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg border ${meta.tone}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {meta.label}
                    </h3>
                    <p className="text-sm text-zinc-400">{meta.description}</p>
                  </div>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-xl border border-white/10 bg-white/4.5 p-4 transition hover:border-cyan-300/25 hover:bg-white/6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-base font-semibold text-white">
                          {skill.name}
                        </h4>
                        <span className="shrink-0 rounded-md border border-white/10 bg-black/24 px-2 py-0.5 text-[11px] uppercase tracking-wide text-zinc-400">
                          {meta.label.split(" ")[0]}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {skill.proof}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
