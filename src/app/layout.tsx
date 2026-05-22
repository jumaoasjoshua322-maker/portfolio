import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Jumao-as | Full-Stack Developer Portfolio",
    template: "%s | Joshua Jumao-as",
  },
  description: siteDescription,
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
    siteName,
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
    <html lang="en" className={`${inter.variable} h-full scroll-smooth dark`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
