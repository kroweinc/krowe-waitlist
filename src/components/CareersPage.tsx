import { Link } from 'react-router-dom';

const jobs = [
  {
    title: 'Growth Intern',
    type: 'Internship · Remote',
    description:
      "Help us grow the Krowe brand from the ground up. You'll work directly with the founding team to craft messaging, run campaigns, and shape how the world first hears about us.",
    responsibilities: [
      'Create and schedule content across social channels (LinkedIn, Twitter/X, Instagram)',
      'Draft newsletters, blog posts, and other written assets aligned with brand voice',
      'Research and engage relevant communities, influencers, and press contacts',
      'Analyze campaign performance and surface actionable insights',
      'Assist in coordinating product launches, beta programs, and waitlist campaigns',
    ],
  },
  {
    title: 'Frontend / UI & UX Intern',
    type: 'Internship · Remote',
    description:
      "Own the visual and interactive experience of the Krowe platform. You'll translate product requirements into polished, accessible interfaces that feel fast and effortless to use.",
    responsibilities: [
      'Design and iterate on web and mobile UI across the Krowe product suite',
      'Build high-fidelity prototypes and interactive mockups in Figma',
      'Implement UI components in React with Tailwind CSS and maintain the design system',
      'Conduct lightweight usability sessions and synthesize findings into improvements',
      'Collaborate closely with the founding team on product direction and information architecture',
    ],
  },
];

export { jobs };

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden w-full blueprint-grid-light font-serif">
      {/* Header */}
      <header className="w-full py-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <nav className="mx-auto max-w-5xl px-4 w-full pointer-events-auto">
          <div className="bg-surface-light backdrop-blur-md bg-opacity-80 border border-gray-200 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
            <Link to="/">
              <img src="/KroweLogo.png" alt="Krowe Logo" className="h-6 sm:h-8 w-auto" width={100} height={100} />
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-text-muted-light hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>←</span>
              <span>Back to home</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="h-20" />

      <div className="glow-line-light" />

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          We're hiring
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
          Join our team
        </h1>
        <p className="text-lg text-text-muted-light max-w-xl mx-auto">
          Build the future of customer insight. We're a small, focused team moving fast — every role has real impact from day one.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div key={job.title} className="glass-panel rounded-2xl p-8 shadow-card flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 bg-gray-100 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Applications Closed
                </span>
                <span className="text-xs text-text-muted-light">{job.type}</span>
              </div>

              <h2 className="text-xl font-bold text-navy">{job.title}</h2>
              <p className="text-sm text-text-muted-light leading-relaxed">{job.description}</p>

              <ul className="flex flex-col gap-2 flex-1">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="mt-2 w-full inline-flex items-center justify-center bg-gray-200 text-gray-400 text-sm font-semibold py-3 px-6 rounded-xl opacity-50 cursor-not-allowed"
              >
                Applications Closed
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
