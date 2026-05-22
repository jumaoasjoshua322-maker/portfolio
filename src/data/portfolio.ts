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
  role: "Computer Engineering Student and Full-Stack Developer",
  location: "Cebu, Philippines",
  headline:
    "Building modern web systems with clean design and practical engineering.",
  shortIntro:
    "I design and build responsive, database-connected web systems that turn academic and real-world workflows into usable products.",
  availability: "Available for internships, junior roles, OJT, and freelance builds",
  email: "joshua.jumaoas.dev@gmail.com",
  github: "https://github.com/joshuajumaoas",
  linkedin: "https://www.linkedin.com/in/joshuajumaoas",
  resumePath: "/Joshua-Jumao-as-Resume.txt",
};

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
    value: "2",
    label: "Product-grade systems",
  },
  {
    value: "8+",
    label: "Core technologies",
  },
  {
    value: "Top 8",
    label: "Differential Equations recognition",
  },
];

export const aboutTimeline = [
  {
    year: "Present",
    title: "BS Computer Engineering",
    description:
      "Developing a foundation in systems thinking, logic design, programming, and practical engineering at the University of Cebu Lapu-Lapu and Mandaue.",
  },
  {
    year: "Capstone",
    title: "Full-stack product building",
    description:
      "Built and tested web systems that combine frontend interfaces, backend workflows, database integration, and real user scenarios.",
  },
  {
    year: "Workflow",
    title: "AI-assisted development",
    description:
      "Uses ChatGPT, Claude Code, and GitHub Copilot to speed up research, debugging, implementation planning, and code review while keeping engineering judgment in the loop.",
  },
  {
    year: "Recognition",
    title: "Top 8 Differential Equations Exam",
    description:
      "Recognized for strong analytical performance in a demanding engineering mathematics subject.",
  },
];

export const achievements = [
  "Top 8 Differential Equations Exam recognition",
  "Built multi-tenant and smart tourism systems with full-stack workflows",
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
    level: 82,
    proof: "Component-driven dashboards, responsive views, and reusable UI logic.",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 78,
    proof: "Backend routes, API workflows, authentication logic, and system services.",
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: 77,
    proof: "Structured client-server communication and data-driven features.",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 76,
    proof: "Document data modeling for SaaS and workflow-heavy applications.",
  },
  {
    name: "Database integration",
    category: "Database",
    level: 80,
    proof: "Connecting frontend flows to persistent records and admin-ready data.",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: 82,
    proof: "Repository organization, collaboration, and implementation tracking.",
  },
  {
    name: "VS Code",
    category: "Tools",
    level: 88,
    proof: "Daily development environment for frontend and full-stack work.",
  },
  {
    name: "Git",
    category: "Tools",
    level: 80,
    proof: "Version control, change tracking, and safer project collaboration.",
  },
  {
    name: "AI-assisted tools",
    category: "Tools",
    level: 86,
    proof: "Uses ChatGPT, Claude Code, and Copilot for research, debugging, and iteration.",
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
    level: 84,
    proof: "Systematic issue tracing across UI, API, and data layers.",
  },
  {
    name: "System testing",
    category: "Engineering",
    level: 79,
    proof: "Workflow validation, responsive checks, and user-scenario testing.",
  },
  {
    name: "UI/UX awareness",
    category: "Engineering",
    level: 82,
    proof: "Interfaces designed for clarity, hierarchy, and faster task completion.",
  },
];

export const projects: Project[] = [
  {
    id: "camilos-catering-saas",
    title: "Camilo's Catering SaaS Platform",
    label: "Multi-tenant catering operations platform",
    summary:
      "A full-stack SaaS platform designed to help a catering business manage customer-facing workflows, authenticated access, and organized operational data from a modern dashboard experience.",
    impact:
      "Positions a local service business like a scalable digital product: cleaner workflows, authenticated roles, responsive access, and a foundation for tenant-aware growth.",
    stack: ["React.js", "Node.js", "MongoDB", "REST APIs", "Authentication", "Responsive UI"],
    features: [
      "Tenant-aware account structure",
      "Authentication and protected workflows",
      "Dashboard-oriented management UI",
      "Customer and order data organization",
      "Responsive views for admin and staff usage",
      "Debugging and optimization across full-stack flows",
    ],
    challenges: [
      "Separated business logic from interface concerns so the app could scale beyond a single static website.",
      "Built authenticated workflows that protect operational pages without making the user experience feel heavy.",
      "Designed dashboard sections around fast scanning, status clarity, and repeat staff usage.",
    ],
    process: [
      "Mapped core catering workflows and user roles",
      "Modeled data around customers, services, and tenant context",
      "Implemented React UI with connected backend routes",
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
    githubUrl: "https://github.com/joshuajumaoas",
    demoUrl: "mailto:joshua.jumaoas.dev@gmail.com?subject=Camilo's%20Catering%20SaaS%20demo%20request",
    accent: "teal",
  },
  {
    id: "ariat-na-tourist-guide",
    title: "ARIAT-Na Smart Tourist Guide & Fare Estimation System",
    label: "Smart tourism, fare estimation, and route guidance",
    summary:
      "A smart tourism platform that supports route guidance, fare estimation, QR code workflows, and kiosk plus mobile access for visitors navigating local destinations.",
    impact:
      "Turns tourism assistance into a practical self-service system, helping visitors make faster movement decisions while supporting real-world validation and accessibility.",
    stack: ["React.js", "JavaScript", "REST APIs", "QR workflows", "System testing", "Responsive design"],
    features: [
      "Tourist route guidance",
      "Fare estimation workflows",
      "QR code integration",
      "Kiosk and mobile interface support",
      "Destination-oriented content structure",
      "Workflow validation and usability testing",
    ],
    challenges: [
      "Balanced kiosk readability with mobile density so the same system could work in different tourism contexts.",
      "Validated fare and route flows around real user decisions instead of treating them as static information pages.",
      "Designed QR interactions to reduce friction for tourists moving between physical and digital touchpoints.",
    ],
    process: [
      "Identified visitor scenarios and tourism guidance needs",
      "Designed route, fare, and QR flows for quick access",
      "Built responsive interfaces for kiosk and phone usage",
      "Tested workflows for clarity, correctness, and practical usability",
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
    githubUrl: "https://github.com/joshuajumaoas",
    demoUrl: "mailto:joshua.jumaoas.dev@gmail.com?subject=ARIAT-Na%20demo%20request",
    accent: "amber",
  },
];

export const experience = [
  {
    period: "Academic and capstone development",
    title: "Full-stack system implementation",
    description:
      "Planned, built, debugged, and refined software systems that combine frontend interfaces, backend workflows, database records, and user-facing validation.",
    points: ["Requirements mapping", "React implementation", "Backend workflow integration", "Testing and optimization"],
  },
  {
    period: "Team collaboration",
    title: "Software collaboration and organized delivery",
    description:
      "Worked through project tasks using structured communication, Git/GitHub collaboration, issue tracing, and practical implementation planning.",
    points: ["Git-based workflow", "Debugging sessions", "Feature iteration", "Documentation habits"],
  },
  {
    period: "Modern development workflow",
    title: "AI-assisted engineering with human judgment",
    description:
      "Uses AI tools to accelerate learning, inspect errors, plan implementation options, and refine code while staying accountable for final decisions.",
    points: ["Prompted research", "Code review support", "Error analysis", "Faster iteration loops"],
  },
];

export const resumeHighlights = {
  summary:
    "Computer Engineering student with full-stack development experience across web-based systems, responsive UI design, REST-style workflows, database integration, debugging, and AI-assisted development.",
  education: [
    "BS Computer Engineering",
    "University of Cebu Lapu-Lapu and Mandaue",
    "Cebu, Philippines",
  ],
  certifications: [
    "Certifications placeholder: add cloud, web development, or database credentials as completed.",
  ],
};
