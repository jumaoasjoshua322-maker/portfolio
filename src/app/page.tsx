import { PortfolioPage } from "@/components/portfolio-page";
import { profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Aspiring Software Engineer and Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cebu",
      addressCountry: "PH",
    },
    email: profile.email,
    url: "https://joshuajumaoas.dev",
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skills.map((skill) => skill.name),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "BS Computer Engineering",
      credentialCategory: "Degree Program",
    },
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      keywords: project.stack.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
