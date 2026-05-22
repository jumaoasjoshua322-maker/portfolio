"use client";

import {
  Brain,
  Code2,
  Database,
  Filter,
  MonitorSmartphone,
  Server,
  TerminalSquare,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { skills, type SkillCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FilterValue = "All" | SkillCategory;

const filters: FilterValue[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Engineering",
];

const filterIcons: Record<FilterValue, typeof Filter> = {
  All: Filter,
  Frontend: MonitorSmartphone,
  Backend: Server,
  Database,
  Tools: TerminalSquare,
  Engineering: Brain,
};

const categoryTone: Record<SkillCategory, string> = {
  Frontend: "text-cyan-100 border-cyan-300/20 bg-cyan-300/10",
  Backend: "text-emerald-100 border-emerald-300/20 bg-emerald-300/10",
  Database: "text-amber-100 border-amber-300/20 bg-amber-300/10",
  Tools: "text-rose-100 border-rose-300/20 bg-rose-300/10",
  Engineering: "text-violet-100 border-violet-300/20 bg-violet-300/10",
};

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const prefersReducedMotion = useReducedMotion();

  const visibleSkills = useMemo(() => {
    if (activeFilter === "All") return skills;
    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

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
          title="A focused stack for modern web systems."
          description="My skill set is intentionally practical: frontend polish, backend workflows, database integration, collaboration tools, and the testing habits needed to ship dependable student, startup, and freelance projects."
          icon={<Code2 className="h-3.5 w-3.5" />}
          align="center"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div
          className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-2 rounded-lg border border-white/10 bg-white/3.5 p-2"
          role="tablist"
          aria-label="Skill filters"
        >
          {filters.map((filter) => {
            const Icon = filterIcons[filter];
            const selected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
                  selected
                    ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                    : "text-zinc-400 hover:bg-white/6 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                {filter}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div
        layout
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout">
          {visibleSkills.map((skill) => {
            const Icon = filterIcons[skill.category];
            return (
              <motion.article
                key={skill.name}
                layout
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="group rounded-lg border border-white/10 bg-white/4.5 p-4 shadow-[0_16px_60px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/6.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-lg border",
                      categoryTone[skill.category],
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <p className="mt-2 min-h-18 text-sm leading-6 text-zinc-400">
                  {skill.proof}
                </p>
                <div className="mt-5 h-2 overflow-hidden rounded-md bg-white/8">
                  <motion.div
                    className="h-full rounded-md bg-[linear-gradient(90deg,#22d3ee,#34d399,#fbbf24)]"
                    initial={prefersReducedMotion ? false : { width: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-md border border-white/10 bg-black/24 px-2 py-1 text-xs text-zinc-400">
                    {skill.category}
                  </span>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 opacity-0 transition group-hover:opacity-100"
                  >
                    <a href="#projects">
                      <Code2 className="h-3.5 w-3.5" />
                      Projects
                    </a>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
