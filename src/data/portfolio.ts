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
  /** One-line context shown above the title (e.g. "2026 · Multi-tenant SaaS"). */
  meta: string;
  summary: string;
  /** What Joshua personally owned or contributed. */
  role: string;
  /** Two short paragraphs replacing the old 4-column breakdown. */
  problem: string;
  approach: string;
  features: string[];
  technicalDecisions: string[];
  impact: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  accent: "teal";
  /**
   * Real product screenshots. When present, the project card renders
   * these instead of the stylized fallback mockup.
   */
  screenshots?: {
    chromeLabel: string;
    hero: ProjectScreenshot;
    supporting: ProjectScreenshot[];
  };
};

export const profile = {
  name: "Joshua Jumao-as",
  role: "Full-Stack Developer · Cebu, Philippines",
  location: "Mandaue City, Cebu, Philippines",
  headline:
    "Computer Engineering student in Cebu focused on practical software: dashboards, forms, APIs, database-backed workflows, and responsive interfaces that work on real devices.",
  availability: "Available after graduation: June 2026",
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

/**
 * Short prose used in the About section's bio.
 * Two paragraphs, no marketing fluff.
 */
export const aboutBio = [
  "I'm a Computer Engineering student in Cebu, finishing in June 2026. I build full-stack web systems — the kind that move beyond static pages into real authentication, database-connected workflows, and interfaces that still work well outside of desktop previews.",
  "Most of what I know comes from shipping. I work in React, Node, and MongoDB. I use Git daily and rely on AI tools mostly for research, debugging, and reviewing ideas while building.",
];

export const aboutTimeline = [
  {
    year: "Jun 2026",
    title: "BS Computer Engineering",
    description:
      "Expected graduation from the University of Cebu Lapu-Lapu and Mandaue.",
  },
  {
    year: "2025–2026",
    title: "ARIAT-Na — Capstone thesis",
    description:
      "Smart tourist assistance for Cebu Province: fare estimation, route guidance, itinerary planning. Live.",
  },
  {
    year: "2026",
    title: "Camilo's Catering SaaS",
    description:
      "Multi-tenant catering platform with React, Node, and MongoDB. Shipped and live.",
  },
  {
    year: "2023–2024",
    title: "Top 8, Differential Equations Exam",
    description:
      "Engineering Departmental recognition — strongest academic result to date.",
  },
];

/** One sentence per skills group. Replaces the old 9-card grid. */
export const skillsProse = [
  {
    label: "Frontend",
    body: "Most of my shipped UI is built in React, TypeScript, HTML, CSS, and JavaScript, with attention to readable layouts, form behavior, and responsive screens.",
  },
  {
    label: "Backend & data",
    body: "I use Node.js for API work, REST for client-server communication, and MongoDB for document data in full-stack projects that need authentication and persistent records.",
  },
  {
    label: "Workflow",
    body: "Git is part of my daily workflow. I also use AI tools for research, debugging, and review, while validating the final behavior in the browser instead of trusting generated output blindly.",
  },
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
    title: "Camilo's Catering SaaS",
    label: "Multi-tenant SaaS",
    meta: "2026 · Personal project · Live",
    summary:
      "A deployed catering platform that brings package, booking, customer, and staff workflows into one web system.",
    role:
      "Full-stack developer. I handled the React interface, Node/REST integration, authentication flow, MongoDB-backed data structure, and production deployment.",
    problem:
      "A local Cebu catering business was running operations through messages and spreadsheets — bookings, menus, and customer records scattered across tools. The team needed one place to manage tenants, orders, and staff access without rebuilding from scratch every time the business grew.",
    approach:
      "I designed and shipped a React dashboard backed by a Node API and MongoDB, with tenant-aware data access, authentication, and a layout built for fast scanning by repeat staff users. The system gave the business a more organized way to manage bookings, staff access, and customer data in one place.",
    features: [
      "Public pages for packages, company information, and customer inquiries.",
      "Authenticated workflows for organizing bookings, customers, and staff access.",
      "Responsive screens designed for both browsing customers and repeat business users.",
    ],
    technicalDecisions: [
      "Kept the product dashboard-first so operational data is easy to scan.",
      "Used MongoDB documents for flexible catering packages, bookings, and customer records.",
      "Separated public marketing pages from authenticated management workflows.",
    ],
    impact:
      "Turned scattered catering operations into a live system that can be shared, tested, and improved around real business workflows.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Authentication"],
    githubUrl: "https://github.com/jumaoasjoshua322-maker/camilocatering",
    demoUrl: "https://camilocatering.vercel.app/",
    accent: "teal",
    screenshots: {
      chromeLabel: "camilocatering.vercel.app",
      hero: {
        src: "/projects/camilos-catering/hero.png",
        alt: "Camilo's Catering homepage — hero with 'Premium Catering for Every Occasion', a wedding photo background, View packages and Get a quote CTAs.",
        width: 1920,
        height: 888,
      },
      supporting: [
        {
          src: "/projects/camilos-catering/packages.png",
          alt: "Our packages screen showing filterable catering packages — Classic Wedding, Corporate Gala, and Premium Wedding cards with prices.",
          width: 1920,
          height: 888,
        },
        {
          src: "/projects/camilos-catering/about.png",
          alt: "About Camilo's Catering page with the founding story and a wedding venue image.",
          width: 1920,
          height: 888,
        },
        {
          src: "/projects/camilos-catering/contact.png",
          alt: "Contact page with phone, email, address, business hours, and a Send Us a Message form.",
          width: 1920,
          height: 888,
        },
      ],
    },
  },
  {
    id: "ariat-na-tourist-guide",
    title: "ARIAT-Na",
    label: "Smart tourism · Capstone",
    meta: "2025–2026 · BS Computer Engineering thesis · Live",
    summary:
      "A smart tourist assistance system with fare estimation, route guidance, and itinerary planning across Cebu Province.",
    role:
      "Front-end contributor for the capstone team. I worked on responsive React/JavaScript flows, route and itinerary screens, QR handoff behavior, and kiosk/mobile usability.",
    problem:
      "Tourists in Cebu often rely on scattered information from blogs, signages, and social media posts, especially when checking fares, routes, and what to visit next.",
    approach:
      "I contributed to a responsive React/JavaScript front-end that handles fare estimates, route guidance, and itinerary planning, plus QR code integration so visitors can move between physical signage and the digital app. The system was designed for both kiosk readability and one-handed mobile use. We tested it using actual travel scenarios to check if the routes, fare estimates, and mobile flow were practical.",
    features: [
      "Fare estimation and route guidance for Cebu travel scenarios.",
      "Itinerary planning flow for visitors choosing destinations.",
      "QR handoff from kiosk-style screens to a phone-friendly trip view.",
    ],
    technicalDecisions: [
      "Designed screens to work for both public kiosk readability and mobile use.",
      "Kept the trip-planning choices simple so tourists can continue quickly.",
      "Validated the flow against actual travel scenarios instead of only desktop previews.",
    ],
    impact:
      "Helped turn scattered tourist information into a live capstone system that connects physical signage with a digital guide for Cebu travel.",
    stack: ["React", "JavaScript", "QR Integration", "Responsive UI"],
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

export const resumeHighlights = {
  summary:
    "Computer Engineering student with experience in full-stack development, web-based systems, and software project collaboration. Familiar with front-end development, database integration, AI-assisted workflows, debugging, and responsive interface design.",
  education: [
    "Bachelor of Science in Computer Engineering",
    "University of Cebu Lapu-Lapu and Mandaue",
    "Mandaue City, Cebu, Philippines",
    "Expected Graduation: June 16, 2026",
  ],
};
