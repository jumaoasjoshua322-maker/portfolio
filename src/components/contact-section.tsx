"use client";

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";

const opportunityTypes = [
  "Junior developer role",
  "Associate software engineer role",
  "Freelance full-stack project",
  "Startup collaboration",
];

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formState.status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      type: String(data.get("type") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    setFormState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const json = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(
          json.error ??
            "Something went wrong sending your message. Try again in a moment.",
        );
      }

      form.reset();
      setFormState({ status: "success" });
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Try again in a moment.",
      });
    }
  }

  const isSubmitting = formState.status === "submitting";

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Open to opportunities and collaborations.
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-400 sm:text-lg">
            Open for junior, associate, and freelance work. Replies usually
            within a day or two — or email{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:decoration-cyan-300"
            >
              {profile.email}
            </a>
            {" "}directly.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-2xl rounded-xl border border-white/10 bg-white/4.5 p-5 shadow-[0_24px_100px_rgba(0,0,0,0.28)] sm:p-7"
          noValidate
        >
          {/* Honeypot — hidden from real users, visible to bots. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10000px] top-[-10000px] h-0 w-0 overflow-hidden"
          >
            <label>
              Leave this field empty
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-300">Name</span>
              <Input
                name="name"
                placeholder="Your name"
                required
                minLength={2}
                maxLength={80}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-300">Email</span>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                maxLength={120}
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-zinc-300">
              Opportunity type
            </span>
            <select
              name="type"
              defaultValue={opportunityTypes[0]}
              className="h-11 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
            >
              {opportunityTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-[#090b10] text-white"
                >
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-zinc-300">Message</span>
            <Textarea
              name="message"
              placeholder="Tell me about the role, project, or next step. (10+ characters)"
              required
              minLength={10}
              maxLength={4000}
            />
          </label>

          <div className="mt-6 flex justify-end">
            <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>

          {formState.status === "success" ? (
            <p
              className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100"
              role="status"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              Message sent. I&apos;ll reply to your email shortly.
            </p>
          ) : null}

          {formState.status === "error" ? (
            <div
              className="mt-4 flex items-start gap-2 rounded-lg border border-rose-300/25 bg-rose-300/10 px-3 py-2 text-sm text-rose-100"
              role="alert"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                {formState.message}{" "}
                <a
                  className="underline underline-offset-2"
                  href={`mailto:${profile.email}`}
                >
                  Email me directly.
                </a>
              </p>
            </div>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
}
