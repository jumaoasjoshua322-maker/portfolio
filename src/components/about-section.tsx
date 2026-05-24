import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { aboutBio, aboutTimeline, profile } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left — portrait + bio */}
        <Reveal>
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              <Image
                src={profile.portraitPath}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                About
              </p>
              <h2
                id="about-heading"
                className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-3xl"
              >
                {profile.name}
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-300">
            {aboutBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Right — timeline */}
        <Reveal delay={0.06}>
          <div className="relative pl-5">
            <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />

            <div className="space-y-8">
              {aboutTimeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute left-[-21px] top-[6px] h-2.5 w-2.5 rounded-full border border-cyan-300/40 bg-cyan-300/20" />
                  <p className="text-xs font-medium uppercase tracking-wide text-cyan-200/80">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
