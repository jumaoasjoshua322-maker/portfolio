import { Reveal } from "@/components/reveal";
import { skillsProse } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-shell scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <h2
            id="skills-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            How I work.
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-400 sm:text-lg">
            Tools I lean on day-to-day. No checklists, no percentages — just
            what&apos;s earned a place in the way I ship.
          </p>

          <dl className="mt-10 space-y-8 border-l border-white/10 pl-6">
            {skillsProse.map((group) => (
              <div key={group.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {group.label}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-300">
                  {group.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
