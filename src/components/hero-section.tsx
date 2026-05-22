"use client";

import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brandSignals, heroMetrics, heroStack, profile } from "@/data/portfolio";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/8 scroll-mt-20"
      aria-labelledby="hero-heading"
    >
      <div className="hero-gradient absolute inset-0 -z-20" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="success" className="mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
              {profile.availability}
            </Badge>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <p className="mb-3 text-sm font-medium uppercase text-cyan-200/90">
              {profile.role}
            </p>
            <h1
              id="hero-heading"
              className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            >
              I build web systems that feel sharp, useful, and ready for real
              users.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              {profile.headline}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href={profile.resumePath} download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="ghost" size="sm">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="mt-8"
          >
            <p className="mb-3 text-xs font-medium uppercase text-zinc-500">
              Core stack and delivery signals
            </p>
            <div className="flex flex-wrap gap-2">
              {heroStack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/4.5 px-3 py-2 text-sm text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative"
          aria-label="Visual summary of my engineering workflow"
        >
          <div className="absolute -inset-4 -z-10 bg-[linear-gradient(135deg,rgba(45,212,191,0.14),rgba(251,191,36,0.09),rgba(244,63,94,0.08))] blur-2xl" />
          <div className="overflow-hidden rounded-lg border border-white/12 bg-[#0c0f14]/88 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-xs text-zinc-500">builder.workflow.ts</span>
            </div>
            <div className="grid gap-4 p-4 sm:p-5">
              <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-cyan-100">
                      Product mindset
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Translate workflows into interfaces, APIs, data models, and
                      tested user paths.
                    </p>
                  </div>
                  <Sparkles className="h-5 w-5 text-cyan-200" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Code2, label: "Frontend", value: "React UI" },
                  { icon: Server, label: "Backend", value: "Node APIs" },
                  { icon: Database, label: "Data", value: "MongoDB" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-white/4.5 p-3"
                  >
                    <item.icon className="mb-3 h-5 w-5 text-emerald-200" />
                    <p className="text-xs text-zinc-500">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-white/10 bg-black/28 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Delivery pipeline</p>
                  <ShieldCheck className="h-5 w-5 text-emerald-200" />
                </div>
                <div className="space-y-3">
                  {brandSignals.slice(0, 5).map((signal, index) => (
                    <div key={signal} className="grid grid-cols-[92px_1fr] items-center gap-3">
                      <span className="text-xs text-zinc-500">0{index + 1}</span>
                      <div className="h-2 overflow-hidden rounded-md bg-white/8">
                        <motion.div
                          className="h-full rounded-md bg-[linear-gradient(90deg,#67e8f9,#6ee7b7,#fcd34d)]"
                          initial={prefersReducedMotion ? false : { width: "18%" }}
                          whileInView={prefersReducedMotion ? undefined : { width: `${74 + index * 4}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.25 + index * 0.08 }}
                        />
                      </div>
                      <span className="col-start-2 text-xs text-zinc-300">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/10 bg-white/4.5 p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
