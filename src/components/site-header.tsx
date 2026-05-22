"use client";

import { FileText, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07080b]/[0.78] backdrop-blur-2xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Joshua Jumao-as home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.06] text-sm font-semibold text-white shadow-[0_12px_40px_rgba(45,212,191,0.12)]">
            JJ
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Joshua Jumao-as
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="icon">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={profile.resumePath} download>
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "grid border-t border-white/[0.08] transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile primary"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button asChild variant="secondary">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </Button>
              <Button asChild>
                <a href={profile.resumePath} download>
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
