// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS_DATA = {
  "Programming Languages": {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    color: "#e879f9",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "ECMAScript"],
  },
  Frontend: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M8 9l-2 2 2 2"/><path d="m16 9 2 2-2 2"/></svg>`,
    color: "#22d3ee",
    items: ["React", "Angular", "Next.js", "Tailwind CSS", "Material UI"],
  },
  Backend: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="#4ade80" stroke="none"/><circle cx="6" cy="18" r="1" fill="#4ade80" stroke="none"/></svg>`,
    color: "#4ade80",
    items: ["Node.js", "Express", "NestJS", "REST API"],
  },
  Database: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`,
    color: "#fb923c",
    items: ["MongoDB", "MySQL"],
  },
  "UI/UX Design": {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="m4.93 4.93 2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/></svg>`,
    color: "#f472b6",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
  Others: {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    color: "#a78bfa",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
};

export const SKILL_ICONS = {
  HTML: "🌐", CSS: "🎨", JavaScript: "🟨", TypeScript: "🔷", Python: "🐍",
  React: "⚛", "Tailwind CSS": "🌊", "Framer Motion": "🎭", Redux: "🔄", Figma: "✏️",
  "Node.js": "🟩", Express: "⚡", "REST API": "🔗", NestJS: "🐈",
  MongoDB: "🍃", PostgreSQL: "🐘", Redis: "🔴",
  Git: "📝", GitHub: "🐙", Docker: "🐳", Postman: "📮",
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack shop with cart, payments & admin dashboard. Built with React, Node.js, and Stripe API.",
    tags: ["React", "Node", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "#",
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics dashboard with real-time charts, user management, and role-based access control.",
    tags: ["React", "TypeScript", "Express", "Chart.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "#",
  },
  {
    title: "Portfolio Builder",
    desc: "Drag-and-drop portfolio generator with live preview and export to HTML. Used by 200+ users.",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "#",
  },
  {
    title: "REST API Boilerplate",
    desc: "Production-ready Express starter with JWT auth, rate limiting, Swagger docs, and CI/CD setup.",
    tags: ["Node.js", "Express", "JWT", "Swagger"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "#",
  },
  {
    title: "UI/UX Design System",
    desc: "A complete design system with components, tokens, and guidelines built in Figma and React.",
    tags: ["Figma", "React", "Storybook", "CSS"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "https://www.behance.net/ReemyousefUIUX",
  },
  {
    title: "Blog CMS",
    desc: "A full-featured content management system with markdown editor, tags, and SEO optimization.",
    tags: ["React", "Node.js", "MongoDB", "Markdown"],
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    github: "https://github.com/Reem-Yousef",
    demo: "#",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTS = [
  {
    title: "Frontend Development — Meta",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80",
    color: "#22d3ee",
    link: "#",
  },
  {
    title: "UI/UX Design Certificate — Google",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80",
    color: "#e879f9",
    link: "https://www.behance.net/ReemyousefUIUX",
  },
  {
    title: "React Developer — freeCodeCamp",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&q=80",
    color: "#4ade80",
    link: "#",
  },
  {
    title: "Node.js & Express — Udemy",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80",
    color: "#fb923c",
    link: "#",
  },
];

// ─── About orbit items ────────────────────────────────────────────────────────
export const ABOUT_ORBIT = [
  { 
    label: "Frontend", 
    color: "#22d3ee",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M8 9l-2 2 2 2"/><path d="m16 9 2 2-2 2"/></svg>`
  },
  { 
    label: "Backend", 
    color: "#4ade80",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>`
  },
  { 
    label: "UI/UX", 
    color: "#e879f9",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><circle cx="13.5" cy="17.5" r="2.5"/><path d="M13.5 9v5.5"/><path d="M9 12h4.5"/></svg>`
  },
  { 
    label: "Full Stack", 
    color: "#a78bfa",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>`
  },
];

// ─── Socials ──────────────────────────────────────────────────────────────────
export const SOCIALS = {
  github:   "https://github.com/Reem-Yousef",
  linkedin: "https://www.linkedin.com/in/reem-yousef-mohamed/",
  behance:  "https://www.behance.net/ReemyousefUIUX",
};
