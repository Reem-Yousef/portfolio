import spaceExamImg from "/space-exam.png";

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
    title: "Space Examination System",
    desc: "Interactive online exam platform with a space theme — features a countdown timer, question flagging, dynamic result pages, and localStorage-based routing. Built entirely with vanilla HTML, CSS, and ES6.",
    tags: ["HTML", "CSS", "ES6", "LocalStorage"],
    img: spaceExamImg,
    github: "https://github.com/Reem-Yousef/Space-Exam",
    demo: "https://reem-yousef.github.io/Space-Exam/",
    type: "dev",
    status: null,
  },
  {
    title: "Plants E-Commerce",
    desc: "Full-stack plant shop with product listings, cart, checkout, and Stripe payment integration. Features a clean Angular frontend powered by a Node.js/Express backend.",
    tags: ["Angular", "Node.js", "Express", "Stripe"],
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80",
    github: "https://github.com/Reem-Yousef/E-commerce-website",
    demo: "#",
    type: "dev",
    status: null,
  },
  {
    title: "Dental Clinic Platform",
    desc: "Online dental clinic with patient-facing appointment booking and a full admin dashboard for managing schedules, patient records, and clinic operations.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop&q=80",
    github: "#",
    demo: "#",
    type: "dev",
    status: null,
  },
  {
    title: "Tmkun — UI/UX Design",
    desc: "End-to-end UI/UX design for an educational assessment platform. Covers user research, wireframes, component system, and high-fidelity prototypes.",
    tags: ["Figma", "UI/UX", "Design System", "Prototyping"],
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&q=80",
    github: "#",
    demo: "https://tmkun.com/",
    behance: "https://www.behance.net/gallery/247576993/UIUX-Design-for-an-Educational-Platform/modules/1432095323",
    type: "design",
    status: null,
  },
  {
    title: "Social Media App",
    desc: "A social platform currently in development — focused on community interaction, real-time feeds, and a clean modern interface.",
    tags: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80",
    github: "#",
    demo: "#",
    type: "dev",
    status: "in-progress",
  },
  {
    title: "Educational Platform",
    desc: "A learning management system in progress — built for structured course delivery, progress tracking, and student–instructor interaction.",
    tags: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&q=80",
    github: "#",
    demo: "#",
    type: "dev",
    status: "in-progress",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTS = [
  {
    title: "UI/UX Design",
    issuer: "ITI",
    duration: "1 Month",
    color: "#e879f9",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=420&h=300&fit=crop&q=80",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><circle cx="13.5" cy="17.5" r="2.5"/><path d="M9 12h4.5"/><path d="M13.5 9v5.5"/></svg>`,
    link: "https://drive.google.com/file/d/1F0CPyBILWdKQG7dkTNS9AdCbi_JKN01s/view?usp=sharing",
  },
  {
    title: "CS50x",
    issuer: "Harvard / edX",
    duration: "1 Month",
    color: "#22d3ee",
    img: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=420&h=300&fit=crop&q=80",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    link: "https://drive.google.com/file/d/1DFkzLHT13m2QeNUeLn-0LjdfpPbBj137/view?usp=sharing",
  },
  {
    title: "Software Fundamentals",
    issuer: "ITI",
    duration: "4 Months",
    color: "#4ade80",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=420&h=300&fit=crop&q=80",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    link: "https://drive.google.com/file/d/1AbPPfq6nIrs-hITJYvGDuSnry6HCkvOz/view?usp=sharing",
  },
  {
    title: "MEARN Full Stack",
    issuer: "ITI",
    duration: "4 Months",
    color: "#a78bfa",
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=420&h=300&fit=crop&q=80",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>`,
    link: "YOUR_MEARN_CERT_LINK_HERE",
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