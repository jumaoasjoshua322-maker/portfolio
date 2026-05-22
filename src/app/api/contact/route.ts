import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { profile } from "@/data/portfolio";

// Mark this route as dynamic — never pre-render or cache.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ContactPayload = z.object({
  name: z.string().trim().min(2, "Name is too short.").max(80),
  email: z.string().trim().email("Enter a valid email."),
  type: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10, "Tell me a bit more.").max(4000),
  // Honeypot field — real users leave it blank. Bots fill every input.
  website: z.string().max(0).optional(),
});

const TO_EMAIL = profile.email;
// Resend's sandbox sender works without domain verification.
// Once a custom domain is verified in Resend, swap this to e.g.
// "Joshua Portfolio <hello@joshuajumaoas.dev>".
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactPayload.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, type, message, website } = parsed.data;

  // Honeypot tripped — pretend success so bots get no signal.
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const subject = `[Portfolio] ${type} — ${name}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeType = escapeHtml(type);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const html = `
    <div style="font-family: -apple-system, Segoe UI, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
      <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
      <p><strong>Opportunity:</strong> ${safeType}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
      <p>${safeMessage}</p>
    </div>
  `.trim();

  const textBody = [
    `New portfolio inquiry`,
    ``,
    `From: ${name} <${email}>`,
    `Opportunity: ${type}`,
    ``,
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      text: textBody,
      replyTo: email,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { error: "Could not send the message. Try again or email directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Try again or email directly." },
      { status: 500 },
    );
  }
}
