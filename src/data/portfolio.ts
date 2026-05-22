export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Engineering";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: number;
  proof: string;
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
  accent: "teal" | "amber";
};

export const profile = {
  name: "Joshua Jumao-as",
  role: "Computer Engineering Student | Aspiring Software Engineer",
  location: "Mandaue City, Cebu, Philippines",
  headline:
    "Building modern web systems with clean design and practical engineering.",
  shortIntro:
    "I design and build responsive, database-connected web systems that turn academic and real-world workflows into usable products.",
  availability: "Available for internships, junior roles, OJT, and freelance builds",
  email: "joshua.jumaoas@gmail.com",
  phone: "+63 967-093-7612",
  github: "https://github.com/jumaoasjoshua322-maker",
  linkedin: "https://www.linkedin.com/in/joshua-jumao-as-492772251/",
  // Drop a real PDF named `Joshua-Jumao-as-Resume.pdf` into /public,
  // then change this path to `/Joshua-Jumao-as-Resume.pdf`.
  resumePath: "/Joshua-Jumao-as-Resume.txt",
};

export const heroStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "AI-assisted",
];

export const brandSignals = [
  "Full-stack workflows",
  "SaaS thinking",
  "Responsive UI",
  "Database integration",
  "AI-assisted delivery",
  "Debugging mindset",
];

export const heroMetrics = [
  {
    value: "Full-stack",
    label: "End-to-end web systems",
  },
  {
    value: "2",
    label: "Case-study projects",
  },
  {
    value: "Jun 2026",
    label: "Expected graduation",
  },
];

export const aboutTimeline = [
  {
    year: "Jun 2026",
    title: "BS Computer Engineering",
    description:
      "Expected graduation from the University of Cebu Lapu-Lapu and Mandaue. Building a foundation in systems thinking, logic design, programming, and practical engineering.",
  },
  {
    year: "Capstone",
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
    name: "HTML",
    category: "Frontend",
    level: 92,
    proof: "Semantic layouts, accessible sections, and structured resume content.",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: 88,
    proof: "Responsive layouts, polished UI systems, and component-level styling.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 84,
    proof: "Interactive interfaces, form behavior, and client-side workflows.",
  },
  {
    name: "React.js",
    category: "Frontend",
    level: 78,
    proof: "Component-driven dashboards, responsive views, and reusable UI logic.",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 74,
    proof: "Backend routes, API workflows, and full-stack integration in catering SaaS.",
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: 74,
    proof: "Structured client-server communication and data-driven features.",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 72,
    proof: "Document data modeling for the multi-tenant catering platform.",
  },
  {
    name: "Database integration",
    category: "Database",
    level: 76,
    proof: "Connecting frontend flows to persistent records and admin-ready data.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: 84,
    proof: "Version control, repository organization, and collaboration on shared projects.",
  },
  {
    name: "VS Code",
    category: "Tools",
    level: 88,
    proof: "Daily development environment for frontend and full-stack work.",
  },
  {
    name: "AI-assisted tools",
    category: "Tools",
    level: 86,
    proof: "ChatGPT, Claude Code, and GitHub Copilot for research, debugging, and iteration.",
  },
  {
    name: "QR & responsive UI",
    category: "Engineering",
    level: 82,
    proof: "QR-based touchpoints and kiosk/mobile layouts shipped in ARIAT-Na.",
  },
  {
    name: "Responsive design",
    category: "Engineering",
    level: 86,
    proof: "Mobile, kiosk, tablet, and desktop layouts built around real usage contexts.",
  },
  {
    name: "Debugging",
    category: "Engineering",
    level: 82,
    proof: "Systematic issue tracing across UI, API, and data layers.",
  },
  {
    name: "System testing",
    category: "Engineering",
    level: 78,
    proof: "Workflow validation, responsive checks, and user-scenario testing.",
  },
  {
    name: "Problem-solving",
    category: "Engineering",
    level: 84,
    proof: "Analytical thinking applied to capstone and personal full-stack work.",
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
      "mailto:joshua.jumaoas@gmail.com?subject=Camilo's%20Catering%20SaaS%20demo%20request",
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
    demoUrl:
      "mailto:joshua.jumaoas@gmail.com?subject=ARIAT-Na%20demo%20request",
    accent: "amber",
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
  certifications: [
    "Certifications placeholder: add cloud, web development, or database credentials as completed.",
  ],
};
