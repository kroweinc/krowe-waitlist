// profileData.ts — single source of truth for the builder profile.
// Consumed by the landing ProfileMock (FeaturesC.tsx) and the BuilderProfilePage
// detail pages so the summary card and the full pages never drift apart.
import type { Tone } from './common';

export type SectionKey = 'basics' | 'tags' | 'projects' | 'experience' | 'education' | 'tools';

export interface SectionMeta {
  key: SectionKey;
  label: string;
  done: boolean;
}

export interface SkillTag {
  label: string;
  tone: Tone;
}

export interface Project {
  name: string;
  meta: string; // e.g. 'TS · live'
  logo: string;
  summary: string;
  stack?: string[];
  url?: string;
}

// Curated "proof of work" tiles for the profile overview (landing summary card).
// Deliberately a marketing subset that can differ from the full `projects` list —
// e.g. surface a work credential as a tile without it being a standalone project.
export interface WorkTile {
  name: string;
  meta: string; // e.g. 'TS · work'
  logo: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
  logo?: string; // company logo; falls back to an org monogram when absent
  tags?: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  period: string;
  logo?: string;
  honors?: string; // honors program / distinction shown beside the credential
  gpa?: string; // e.g. '3.9'
  awards?: string[]; // small badge labels, e.g. ['Dean’s List', 'Cum Laude']
  focus?: string; // one-line focus / concentration summary
  coursework?: string[]; // relevant courses rendered as chips
  activities?: string; // leadership / activities sentence
}

// Continuing education shown beneath the degree — issuer resolves to a BrandMark glyph.
export interface Certification {
  name: string;
  issuer: string;
  mark: string; // BrandMark key, e.g. 'AWS', 'Claude', 'MongoDB'
  year: string;
}

export interface ToolItem {
  name: string;
  category: string;
}

export interface BasicsData {
  name: string;
  tagline: string;
  avatar: string;
  skillScore: number;
  profileStrength: number;
  rate: string;
  rateUnit: string;
  availability: string;
  github: string;
  githubUrl: string;
  itemsLeft: number;
  location: string;
}

export interface ProfileData {
  sections: SectionMeta[];
  basics: BasicsData;
  tags: SkillTag[];
  suggestedTags: string[];
  projects: Project[];
  featuredWork: WorkTile[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  tools: ToolItem[];
}

export const profile: ProfileData = {
  sections: [
    { key: 'basics', label: 'Basics', done: true },
    { key: 'tags', label: 'Tags', done: true },
    { key: 'projects', label: 'Projects', done: true },
    { key: 'experience', label: 'Experience', done: true },
    { key: 'education', label: 'Education', done: true },
    { key: 'tools', label: 'Tools', done: true },
  ],

  basics: {
    name: 'Steven Ortega',
    tagline: 'AI-native full-stack builder · internal tools',
    avatar: '/StevenHeadshot.jpg',
    skillScore: 92,
    profileStrength: 100,
    rate: '$95',
    rateUnit: '/hr',
    availability: 'available',
    github: 'github.com/Jynx-hub',
    githubUrl: 'https://github.com/Jynx-hub',
    itemsLeft: 2,
    location: 'Austin, TX · remote-friendly',
  },

  tags: [
    { label: 'Hackathon winner', tone: 'amber' },
    { label: 'Startup founder', tone: 'coral' },
    { label: '5+ years coding', tone: 'blue' },
    { label: 'Full-stack', tone: 'green' },
  ],

  // tags the auto-fill didn't apply but the builder can add with one tap
  suggestedTags: [
    'Open source',
    'AI / ML',
    'TypeScript',
    'React',
    'Backend',
    'DevOps',
    'Technical lead',
    'Mentor',
    'Product-minded',
    'Remote-first',
    'Fast shipper',
    'Design-minded',
  ],

  projects: [
    {
      name: 'krowe',
      meta: 'TS · live',
      logo: '/KroweSocialicon.png',
      summary:
        'The platform that takes a project from discovery call to shipped repo — PRD, quote, contract, tasks, and a legible repo view, all in one portal for operators and builders.',
      stack: ['React', 'Vite', 'TypeScript', 'Supabase'],
      url: 'https://krowehub.com',
    },
    {
      name: 'JarvisOS',
      meta: 'TS · build',
      logo: '/JarvisOS.svg',
      summary:
        'An agentic personal-OS assistant built on Claude — turns natural-language requests into multi-step action across your calendar, email, and dev tools, with Claude orchestrating planning, tool use, and code generation.',
      stack: ['TypeScript', 'React', 'Python', 'Claude'],
    },
    {
      name: 'f1-strategy-ai',
      meta: 'Py · win',
      logo: '/F1Logo.svg',
      summary:
        'A hackathon-winning race-strategy model that simulates pit windows and tire degradation to recommend the optimal stop sequence in real time.',
      stack: ['Python', 'pandas', 'scikit-learn'],
    },
  ],

  // Overview tiles for the landing summary card — surfaces Anthropic as a work
  // credential instead of JarvisOS (which still lives in the Projects tab).
  featuredWork: [
    { name: 'krowe', meta: 'TS · live', logo: '/KroweSocialicon.png' },
    { name: 'Anthropic', meta: 'TS · work', logo: '/Anthropic.svg' },
    { name: 'f1-strategy-ai', meta: 'Py · win', logo: '/F1Logo.svg' },
  ],

  experience: [
    {
      role: 'Founder & Lead Builder',
      org: 'Krowe',
      period: '2024 – Present',
      logo: '/KroweSocialicon.png',
      summary:
        'Building Krowe end to end — the portal that scopes, prices, signs, builds, and ships software projects. Own product, architecture, and the React/Vite/Supabase stack.',
      tags: ['Product', 'Full-stack', 'Supabase'],
    },
    {
      role: 'Growth Engineer',
      org: 'Cal AI',
      period: '2024 – 2025',
      logo: '/CalAI.png',
      summary:
        'Owned growth engineering for the AI calorie-tracking app — instrumented the funnel end to end and ran a high-velocity experiment program across onboarding, paywall, and retention, shipping A/B tests that lifted activation and subscription conversion.',
      tags: ['Growth', 'Experimentation', 'Analytics'],
    },
    {
      role: 'AI Engineer',
      org: 'Anthropic',
      period: '2025 – Present',
      logo: '/Anthropic.svg',
      summary:
        'Build agentic developer products on Claude — shipping tool-use orchestration, planning loops, and code-generation features that turn natural-language requests into reliable multi-step action.',
      tags: ['Claude', 'TypeScript', 'Agents'],
    },
  ],

  education: [
    {
      school: 'University of Texas at Austin',
      credential: 'B.S. Computer Science',
      honors: 'Turing Scholars Honors',
      period: '2019 – 2023',
      logo: '/ivy/ut%20austin%20logo.png',
      gpa: '3.9',
      awards: ['Dean’s List · 6×', 'Cum Laude'],
      focus:
        'Concentration in distributed systems and machine learning, with a minor in human–computer interaction.',
      coursework: [
        'Distributed Systems',
        'Machine Learning',
        'Operating Systems',
        'Databases',
        'Algorithms',
        'Human–Computer Interaction',
      ],
      activities:
        'Led the AI/ML student org and mentored 20+ underclassmen through their first full-stack builds; TA for Data Structures.',
    },
  ],

  // Continuing education — keeps the profile current after the degree.
  certifications: [
    { name: 'Solutions Architect – Associate', issuer: 'Amazon Web Services', mark: 'AWS', year: '2024' },
    { name: 'Building Agentic Apps with Claude', issuer: 'Anthropic', mark: 'Claude', year: '2025' },
    { name: 'Associate Developer', issuer: 'MongoDB', mark: 'MongoDB', year: '2023' },
  ],

  tools: [
    { name: 'GitHub', category: '3rd party software' },
    { name: 'Stripe', category: '3rd party software' },
    { name: 'Resend', category: '3rd party software' },
    { name: 'AWS', category: '3rd party software' },
    { name: 'Supabase', category: 'Data & infra' },
    { name: 'Vercel', category: 'Data & infra' },
    { name: 'OpenAI', category: 'AI' },
    { name: 'Claude', category: 'AI' },
    { name: 'MongoDB', category: 'Data & infra' },
    { name: 'Docker', category: 'Data & infra' },
    { name: 'Figma', category: 'Design' },
    { name: 'Slack', category: '3rd party software' },
  ],
};
