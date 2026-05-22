export type SkillCategory = "Frontend" | "Backend" | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  proof: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
  /** Width and height in pixels of the source image, for next/image. */
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  label: string;
  summary: string;
  impact: string;
  stack: string[];
  features: string[];
  challenges: string[];
  process: string[];
  architecture: string[];
  performance: string;
  githubUrl: string;
  demoUrl: string;
  accent: "teal";
  /**
   * Real product screenshots. When present, the project card renders
   * these instead of the stylized fallback mockup.
   */
  screenshots?: {
    /** Browser chrome label (e.g. "ariat-na.onrender.com"). */
    chromeLabel: string;
    /** Hero shot — shown full-width at the top of the mockup card. */
    hero: ProjectScreenshot;
    /** Two supporting shots, rendered side-by-side beneath the hero. */
    supporting: [ProjectScreenshot, ProjectScreenshot];
  };
};

export const profile = {
  name: "Joshua Jumao-as",
  role: "Computer Engineering Student | Aspiring Software Engineer",
  location: "Mandaue City, Cebu, Philippines",
  headline:
    "Based in Cebu, Philippines · Finishing Computer Engineering in June 2026.",
  availability: "Available for junior roles and freelance builds",
  email: "jumaoas.joshuaa@gmail.com",
  phone: "+63 967-093-7612",
  github: "https://github.com/jumaoasjoshua322-maker",
  linkedin: "https://www.linkedin.com/in/joshua-jumao-as-492772251/",
  resumePath: "/Joshua-Jumao-as-Resume.pdf",
  portraitPath: "/joshua-portrait.png",
};

export const heroStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "AI-assisted",
];

export const aboutTimeline = [
  {
    year: "Jun 2026",
    title: "BS Computer Engineering",
    description:
      "Expected graduation from the University of Cebu Lapu-Lapu and Mandaue. Building a foundation in systems thinking, logic design, programming, and practical engineering.",
  },
  {
    year: "THESIS",
    title: "ARIAT-Na thesis project",
    description:
      "Contributed to a smart tourist assistance system providing fare estimation, route guidance, and itinerary planning for Cebu Province, with kiosk and mobile-friendly interfaces.",
  },
  {
    year: "Workflow",
    title: "AI-assisted development",
    description:
      "Uses ChatGPT, Claude Code, and GitHub Copilot to speed up research, debugging, and implementation planning while keeping engineering judgment in the loop.",
  },
  {
    year: "2023–2024",
    title: "Top 8, Differential Equations Exam",
    description:
      "Placed in the Top 8 in the Engineering Departmental Differential Equations Exam.",
  },
];

export const achievements = [
  "Top 8 in the Engineering Departmental Differential Equations Exam (2023–2024)",
  "Built a multi-tenant catering SaaS and a smart tourism capstone end-to-end",
  "Comfortable collaborating through Git, structured debugging, and iterative testing",
];

export const skills: Skill[] = [
  {
    name: "HTML & CSS",
    category: "Frontend",
    proof: "Semantic, accessible layouts and responsive component-level styling.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proof: "Interactive interfaces, form behavior, and client-side workflows.",
  },
  {
    name: "React.js",
    category: "Frontend",
    proof: "Component-driven dashboards and reusable UI shipped in real projects.",
  },
  {
    name: "Node.js",
    category: "Backend",
    proof: "Backend routes, API workflows, and full-stack integration in catering SaaS.",
  },
  {
    name: "REST APIs",
    category: "Backend",
    proof: "Structured client-server communication and data-driven features.",
  },
  {
    name: "MongoDB",
    category: "Backend",
    proof: "Document data modeling for the multi-tenant catering platform.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    proof: "Version control, repository organization, and shared-project collaboration.",
  },
  {
    name: "AI-assisted workflow",
    category: "Tools",
    proof: "ChatGPT, Claude Code, and Copilot for research, debugging, and iteration.",
  },
  {
    name: "Responsive UI",
    category: "Tools",
    proof: "Kiosk and mobile layouts validated against real-world usage contexts.",
  },
];

export const projects: Project[] = [
  {
    id: "camilos-catering-saas",
    title: "Camilo's Catering SaaS Platform",
    label: "Personal full-stack development project · 2026",
    summary:
      "A multi-tenant catering management web application with a modern user interface and organized digital workflows for staff and operators.",
    impact:
      "Positions a local catering business like a scalable digital product: cleaner workflows, authenticated roles, responsive access, and a foundation for tenant-aware growth.",
    stack: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "GitHub",
      "AI-Assisted Development Tools",
    ],
    features: [
      "Multi-tenant account structure",
      "Authentication and protected workflows",
      "Modern dashboard-style management UI",
      "Customer and order data organization",
      "Responsive layouts for admin and staff usage",
      "Structured debugging, testing, and optimization",
    ],
    challenges: [
      "Separated business logic from interface concerns so the app could scale beyond a single static website.",
      "Built authenticated workflows that protect operational pages without making the UX feel heavy.",
      "Designed dashboard sections around fast scanning, status clarity, and repeat staff usage.",
    ],
    process: [
      "Mapped core catering workflows and user roles",
      "Modeled data around customers, services, and tenant context",
      "Implemented a React UI connected to backend routes",
      "Validated responsive behavior and fixed full-stack issues",
    ],
    architecture: [
      "React dashboard client",
      "Node.js API layer",
      "MongoDB document storage",
      "Authentication guard",
      "Tenant-aware data access pattern",
    ],
    performance:
      "Focused on organized state, reusable components, and lean dashboard screens so frequent actions stay quick on everyday devices.",
    githubUrl: "https://github.com/jumaoasjoshua322-maker/camilocatering",
    demoUrl:
      "mailto:jumaoas.joshuaa@gmail.com?subject=Camilo's%20Catering%20SaaS%20demo%20request",
    accent: "teal",
  },
  {
    id: "ariat-na-tourist-guide",
    title: "ARIAT-Na Smart Tourist Guide & Fare Estimation System",
    label: "Capstone / thesis project · 2025–2026",
    summary:
      "A smart tourist assistance system providing fare estimation, route guidance, and itinerary planning for Cebu Province, with kiosk and mobile-friendly access.",
    impact:
      "Turns tourism assistance into a practical self-service system that helps visitors make faster movement decisions, with workflows validated against real user scenarios.",
    stack: [
      "JavaScript",
      "HTML/CSS",
      "QR Code Integration",
      "Responsive Interface Design",
      "GitHub",
    ],
    features: [
      "Fare estimation for Cebu Province trips",
      "Route guidance for tourist destinations",
      "Itinerary planning workflows",
      "QR code integration for physical-to-digital touchpoints",
      "Kiosk and mobile-accessible interfaces",
      "System testing and workflow validation",
    ],
    challenges: [
      "Balanced kiosk readability with mobile density so the same system worked across very different contexts.",
      "Validated fare and route flows around real visitor decisions instead of treating them as static information pages.",
      "Designed QR interactions to reduce friction for tourists moving between physical and digital touchpoints.",
    ],
    process: [
      "Identified visitor scenarios and tourism guidance needs",
      "Designed route, fare, and itinerary flows for quick access",
      "Built responsive interfaces for kiosk and phone usage",
      "Tested workflows for accuracy, clarity, and reliability",
    ],
    architecture: [
      "Responsive web client",
      "Route guidance module",
      "Fare estimation logic",
      "QR code entry points",
      "Kiosk and mobile layout modes",
    ],
    performance:
      "Prioritized fast-loading screens, clear touch targets, and direct route information for users who may be on unstable mobile connections.",
    githubUrl: "https://github.com/Shaloh69/ARIAT-Na",
    demoUrl: "https://ariat-na.onrender.com/",
    accent: "teal",
    screenshots: {
      chromeLabel: "ariat-na.onrender.com",
      hero: {
        src: "/projects/ariat-na/discover-cebu.png",
        alt: "ARIAT-Na kiosk landing page with the Discover Cebu hero and a prompt to scan a QR code to continue on a phone.",
        width: 1919,
        height: 881,
      },
      supporting: [
        {
          src: "/projects/ariat-na/plan-my-trip.png",
          alt: "Plan My Trip screen offering two paths: Pick Destinations or AI Suggest, with the AI option highlighted as recommended.",
          width: 1913,
          height: 807,
        },
        {
          src: "/projects/ariat-na/cebu-trip.png",
          alt: "1-Day Cebu Day Trip itinerary card showing trip metadata and a Start Journey QR call to action.",
          width: 1919,
          height: 878,
        },
      ],
    },
  },
];

export const experience = [
  {
    period: "2026 · Personal full-stack project",
    title: "Camilo's Catering SaaS — full-stack implementation",
    description:
      "Developed a multi-tenant catering management web application with modern UI, organized digital workflows, authentication, database integration, and responsive layouts.",
    points: [
      "Frontend + backend integration",
      "Authentication and tenant context",
      "Database integration",
      "Debugging, testing, and optimization",
    ],
  },
  {
    period: "2025–2026 · Capstone / thesis",
    title: "ARIAT-Na — smart tourism collaboration",
    description:
      "Contributed to a smart tourist assistance system for Cebu Province with fare estimation, route guidance, and itinerary planning. Helped design kiosk and mobile interfaces and participated in system testing and workflow validation.",
    points: [
      "Fare and route workflows",
      "QR code integration",
      "Kiosk and mobile UX",
      "System testing and validation",
    ],
  },
  {
    period: "Modern development workflow",
    title: "AI-assisted engineering with human judgment",
    description:
      "Uses ChatGPT, Claude Code, and GitHub Copilot to accelerate learning, inspect errors, plan implementation options, and refine code while staying accountable for final decisions.",
    points: [
      "Prompted research",
      "Code review support",
      "Error analysis",
      "Faster iteration loops",
    ],
  },
];

export const resumeHighlights = {
  summary:
    "Computer Engineering student with experience in full-stack development, web-based systems, and software project collaboration. Familiar with front-end development, database integration, AI-assisted workflows, debugging, and responsive interface design. Passionate about building practical systems and continuously improving technical skills through academic and personal projects.",
  education: [
    "Bachelor of Science in Computer Engineering",
    "University of Cebu Lapu-Lapu and Mandaue",
    "Mandaue City, Cebu, Philippines",
    "Expected Graduation: June 16, 2026",
  ],
};
