import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://joshuajumaoas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Jumao-as | Full-Stack Developer Portfolio",
    template: "%s | Joshua Jumao-as",
  },
  description:
    "Premium developer portfolio for Joshua Jumao-as, a Computer Engineering student and full-stack developer from Cebu building modern web systems with React, Node.js, MongoDB, REST APIs, and responsive UI.",
  keywords: [
    "Joshua Jumao-as",
    "Full-Stack Developer Cebu",
    "Computer Engineering student",
    "React developer",
    "Node.js developer",
    "SaaS portfolio",
    "Junior software engineer",
    "OJT developer Philippines",
  ],
  authors: [{ name: "Joshua Jumao-as" }],
  creator: "Joshua Jumao-as",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    title: "Joshua Jumao-as | Full-Stack Developer Portfolio",
    description:
      "Modern portfolio showcasing full-stack systems, SaaS workflows, smart tourism software, responsive UI, and practical engineering.",
    siteName: "Joshua Jumao-as Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Jumao-as | Full-Stack Developer Portfolio",
    description:
      "Computer Engineering student and full-stack developer building modern web systems with clean design and practical engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#07080b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth dark">
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
