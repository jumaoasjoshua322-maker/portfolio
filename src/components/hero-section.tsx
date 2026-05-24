"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroStack, profile } from "@/data/portfolio";

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
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            I build full-stack web apps with React, Node, and MongoDB, with a focus on practical systems people can actually use.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {profile.headline}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
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
