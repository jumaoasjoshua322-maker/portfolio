import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#07080b]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">Joshua Jumao-as</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-500">
            Aspiring Software Engineer
          </p>
        </div>
        <div className="flex items-center gap-2">
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
          <Button asChild variant="ghost" size="icon">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
