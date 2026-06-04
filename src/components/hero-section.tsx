"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroStack, profile, projects } from "@/data/portfolio";

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

      <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge variant="success" className="mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            {profile.availability}
          </Badge>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            I build deployed full-stack web apps with React, Node.js, and MongoDB.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {profile.headline}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={profile.resumePath} download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:justify-start"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="mt-9 border-l border-cyan-300/30 pl-4"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-cyan-200/80">
            Shipped work
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-200"
              >
                {project.title}
                <ArrowRight className="h-3.5 w-3.5 text-cyan-300 transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          className="mt-12"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {heroStack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/4.5 px-3 py-1.5 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
