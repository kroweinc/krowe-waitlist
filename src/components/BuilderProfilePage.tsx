import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navbar, Footer } from './landing';
import {
  PortalCard,
  Pill,
  Ring,
  Bar,
  Icon,
  I,
  StatStrip,
  SIGNUP_URL,
} from './landing/common';
import { profile, type SectionKey } from './landing/profileData';
import { SectionPanelBody } from './landing/profilePanels';

const { basics, sections, tags, projects } = profile;

// ── identity header (shown on every section) ──
function IdentityHeader() {
  return (
    <PortalCard
      name="krowe · profile"
      right={
        <Pill tone="green" dot>
          {basics.availability}
        </Pill>
      }
    >
      <div className="p-5 sm:p-6">
        {/* identity row */}
        <div className="flex items-center gap-4">
          <img
            src={basics.avatar}
            alt={basics.name}
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div className="min-w-0 flex-1">
            <div className="text-xl font-bold text-foreground">{basics.name}</div>
            <div className="font-mono text-[0.6875rem] text-muted-foreground">{basics.tagline}</div>
            <div className="mt-1 font-mono text-[0.625rem] text-muted-foreground/80">{basics.location}</div>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-primary/25 bg-primary/[0.08] px-3 py-1.5">
            <span className="flex items-center gap-1 font-mono text-[0.5625rem] uppercase tracking-wide text-primary">
              <Icon path={I.badge} size={11} /> Skill
            </span>
            <span className="font-mono text-lg font-bold text-foreground">{basics.skillScore}</span>
          </div>
        </div>

        {/* profile strength */}
        <div className="mt-5 flex items-center gap-4 border-t border-border pt-5">
          <Ring value={basics.profileStrength} size={56} stroke={6}>
            <span className="font-mono text-sm font-bold text-foreground">{basics.profileStrength}</span>
          </Ring>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[0.8125rem] font-semibold text-foreground">Profile strength</span>
              <span className="font-mono text-[0.625rem] text-muted-foreground">{basics.itemsLeft} items left</span>
            </div>
            <div className="mt-2">
              <Bar value={basics.profileStrength} gradient />
            </div>
            <div className="mt-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">client-ready</div>
          </div>
        </div>

        {/* at-a-glance stats */}
        <div className="mt-4">
          <StatStrip
            items={[
              { label: 'projects', value: String(projects.length) },
              { label: 'tags', value: String(tags.length) },
              { label: 'skill', value: String(basics.skillScore) },
              { label: 'rate', value: basics.rate, sub: basics.rateUnit },
            ]}
          />
        </div>

        {/* rate + github + CTA */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <a
            href={basics.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon path={I.git} size={12} /> {basics.github}
          </a>
          <a
            href={SIGNUP_URL}
            className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-[#ff7d5e] active:scale-[0.98]"
          >
            Create yours now <Icon path={I.arrow} size={15} />
          </a>
        </div>
      </div>
    </PortalCard>
  );
}

// ── tab strip (navigate between the six sections) ──
function TabStrip({ current }: { current: SectionKey }) {
  return (
    <PortalCard className="mt-4">
      <div className="flex flex-wrap gap-1.5 p-3">
        {sections.map((s) => {
          const active = s.key === current;
          return (
            <Link
              key={s.key}
              to={`/builder/${s.key}`}
              aria-current={active ? 'page' : undefined}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] transition-colors ${
                active
                  ? 'border-primary/30 bg-primary/[0.08] text-foreground'
                  : 'surface-subtle border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${s.done ? 'bg-[hsl(var(--success))]' : 'bg-border'}`} />
              {s.label}
            </Link>
          );
        })}
      </div>
    </PortalCard>
  );
}

// ── per-section detail panel (panels live in landing/profilePanels) ──
function SectionPanel({ current }: { current: SectionKey }) {
  return (
    <PortalCard name={`krowe · ${current}`} className="mt-4">
      <SectionPanelBody current={current} />
    </PortalCard>
  );
}

export default function BuilderProfilePage() {
  const { section } = useParams<{ section: string }>();

  useEffect(() => {
    // 'instant' (not 'auto') so the global `scroll-behavior: smooth` doesn't animate the jump.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [section]);

  const validKeys = sections.map((s) => s.key) as string[];
  if (!section || !validKeys.includes(section)) {
    return <Navigate to="/builder/basics" replace />;
  }
  const current = section as SectionKey;

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <IdentityHeader />
        <TabStrip current={current} />
        <SectionPanel current={current} />

        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-orange-500"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to home
          </Link>
          <Link
            to={{ pathname: '/', hash: '#feature-builder' }}
            className="text-sm text-gray-500 transition-colors hover:text-orange-500"
          >
            Builder profile
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
