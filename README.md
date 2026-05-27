# Joshua Jumao-as Portfolio

Joshua Jumao-as Portfolio, a Computer Engineering student and aspiring full-stack software engineer from Cebu, Philippines.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN-style UI primitives
- Lucide React

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact form (Resend)

The contact form posts to `/api/contact`, which sends mail through
[Resend](https://resend.com).

1. Create a free Resend account and grab an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.
3. Run `npm run dev` — submissions arrive in the inbox set in
   `profile.email` (`src/data/portfolio.ts`).

In production, set `RESEND_API_KEY` in your Vercel project's
**Environment Variables** for the matching environment.

The route uses Resend's sandbox sender (`onboarding@resend.dev`)
until a custom domain is verified. Replace `FROM_EMAIL` in
`src/app/api/contact/route.ts` once that's done.

## Production Checks

```bash
npm run lint
npm run build
```

## Content

Main portfolio content lives in `src/data/portfolio.ts`. Update the contact links, project repository URLs, demo URLs, and resume file there before deployment if Joshua uses different accounts.
