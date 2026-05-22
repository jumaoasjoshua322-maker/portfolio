import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutTimeline, profile, resumeHighlights } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <Reveal>
        <SectionHeading
          headingId="about-heading"
          eyebrow="About"
          title="A Cebu-based builder with an engineering brain and product taste."
          description="My portfolio story is strongest when framed around practical systems: responsive interfaces, database-backed workflows, debugging discipline, and the ability to learn fast with modern tools."
          icon={<BrainCircuit className="h-3.5 w-3.5" />}
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left column — personal story + education */}
        <Reveal className="space-y-5">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <Image
                  src={profile.portraitPath}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <CardTitle>Personal Story</CardTitle>
                <p className="text-xs text-zinc-500">{profile.name}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
              <p>
                I&apos;m a Computer Engineering student from Cebu, Philippines,
                focused on becoming a software engineer who can connect technical
                implementation with thoughtful user experience.
              </p>
              <p>
                My strongest direction is practical product building: web-based
                systems that move beyond static pages into authentication,
                dashboards, route workflows, database integration, testing, and
                responsive interfaces that feel usable on real devices.
              </p>
              <p>
                I work with a continuous-learning mindset, using AI-assisted
                development tools to accelerate exploration while still relying on
                debugging, analytical thinking, and organized implementation to
                make the final system reliable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {resumeHighlights.education[0]}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {resumeHighlights.education[1]}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/4.5 px-2.5 py-1 text-xs text-zinc-300">
                    <MapPin className="h-3.5 w-3.5 text-emerald-200" />
                    {profile.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        {/* Right column — clean timeline, no numbers, no achievement cards */}
        <Reveal delay={0.06}>
          <div className="relative pl-5">
            {/* Continuous left border line */}
            <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />

            <div className="space-y-8">
              {aboutTimeline.map((item) => (
                <div key={item.title} className="relative">
                  {/* Dot on the line */}
                  <span className="absolute -left-[21px] top-[6px] h-2.5 w-2.5 rounded-full border border-cyan-300/40 bg-cyan-300/20" />
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
