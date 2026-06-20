// FeaturesC.tsx — Feature 05 (Repo) + 06 (Builder profile) + CTA band, mirroring the Krowe Portal.
import { useState } from 'react';
import {
  Icon,
  I,
  I2,
  Ember,
  FeatureRow,
  FeatureHeader,
  PortalCard,
  Pill,
  Bar,
  Ring,
  LiveDot,
  StatStrip,
  PrimaryCta,
  SecondaryCta,
  SIGNUP_URL,
  LOGIN_URL,
} from './common';
import { profile, type SectionKey } from './profileData';
import { SectionPanelBody } from './profilePanels';

// ───────────────────────── Feature 05 · Repo ("The Read" project profile) ─────────────────────────
function RepoMock() {
  const langs = [
    { l: 'TypeScript', v: 68, c: '#f97316' },
    { l: 'SQL', v: 20, c: '#0ea5e9' },
    { l: 'CSS', v: 12, c: '#8b5cf6' },
  ];
  const commits: { m: string; t: string }[] = [
    { m: 'feat: invoice sync', t: '2h' },
    { m: 'fix: aging report rounding', t: '1d' },
    { m: 'chore: seed ledger schema', t: '2d' },
  ];
  return (
    <PortalCard
      name="krowe · project profile"
      right={
        <Pill tone="green" dot>
          actively developed
        </Pill>
      }
    >
      <div className="p-5 sm:p-6">
        {/* AI summary — "The Read" */}
        <div className="flex items-center gap-2">
          <Icon path={I2.sparkle} size={14} className="text-primary" />
          <span className="font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">The Read · AI summary</span>
        </div>
        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-foreground/80">
          An internal tool that syncs paid Stripe invoices into a ledger and emails a weekly AR aging report.
        </p>

        {/* 4-stat row */}
        <div className="mt-4">
          <StatStrip
            items={[
              { label: 'commits · 2w', value: '23' },
              { label: 'contributors', value: '1' },
              { label: 'branches', value: '3' },
              { label: 'last sync', value: '2h', sub: 'ago' },
            ]}
          />
        </div>

        {/* languages + recent commits */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="surface-subtle rounded-xl border border-border p-3">
            <div className="mb-2.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Languages</div>
            <div className="flex h-2 w-full overflow-hidden rounded-full">
              {langs.map((l) => (
                <span key={l.l} style={{ width: `${l.v}%`, backgroundColor: l.c }} />
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
              {langs.map((l) => (
                <span key={l.l} className="flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.c }} /> {l.l} {l.v}%
                </span>
              ))}
            </div>
          </div>
          <div className="surface-subtle rounded-xl border border-border p-3">
            <div className="mb-2 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Recent commits</div>
            <div className="space-y-1.5">
              {commits.map((c) => (
                <div key={c.m} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 truncate font-mono text-[0.6875rem] text-foreground/70">
                    <Icon path={I.git} size={11} className="shrink-0 text-muted-foreground/50" /> {c.m}
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    <span className="font-mono text-[0.625rem] text-muted-foreground/60">{c.t}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* folded-in live deployment preview cue */}
        <div className="mt-3 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.04] p-3">
          <div className="flex items-center gap-2 font-mono text-[0.6875rem] text-foreground">
            <Icon path={I2.globe} size={12} className="text-primary" /> vercel.app/acme-invoicing
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] text-[hsl(var(--success))]">
            <LiveDot /> live · main
          </span>
        </div>
      </div>
    </PortalCard>
  );
}

export function FeatureRepo() {
  return (
    <section className="py-16 sm:py-24">
      <FeatureHeader
        id="feature-repo"
        n="05"
        icon={I2.branch}
        eyebrow="Repo, made legible"
        title="See and understand the build — without opening GitHub."
        body="The operator is non-technical, so Krowe narrates the repo: a plain-English project profile with an AI feature read, languages, and commits — paired with a live deployment they can actually click around."
      />
      <div className="reveal mx-auto mt-12 max-w-2xl px-4 sm:px-6">
        <RepoMock />
      </div>
    </section>
  );
}

// ───────────────────────── Feature 06 · Builder profile ─────────────────────────
function ProfileMock() {
  const { basics, sections, tags, featuredWork } = profile;
  const [active, setActive] = useState<SectionKey | null>(null);
  return (
    <PortalCard
      name="krowe · profile"
      right={
        <Pill tone="green" dot>
          available
        </Pill>
      }
    >
      {/* persistent: profile-strength header + section tabs */}
      <div className="p-5 pb-4 sm:p-6 sm:pb-4">
        <div className="flex items-center gap-4">
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

        {/* section tabs — switch the panel below in place */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {sections.map((s) => {
            const isActive = s.key === active;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive((prev) => (prev === s.key ? null : s.key))}
                aria-pressed={isActive}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] transition-colors ${
                  isActive
                    ? 'border-primary/30 bg-primary/[0.08] text-foreground'
                    : 'surface-subtle border-border text-muted-foreground hover:border-primary/30 hover:bg-primary/[0.06] hover:text-foreground'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${s.done ? 'bg-[hsl(var(--success))]' : 'bg-border'}`} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* body — the overview is always in flow so it defines the mockup's height;
          section panels overlay it and scroll inside, so the card never resizes. */}
      <div className="relative border-t border-border">
        <div
          className={`px-5 pt-4 pb-5 sm:px-6 sm:pb-6 ${active === null ? '' : 'invisible'}`}
          aria-hidden={active !== null}
        >
          {/* identity + skill score */}
          <div className="flex items-center gap-3">
            <img
              src={basics.avatar}
              alt={basics.name}
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="min-w-0 flex-1">
              <div className="text-[1.0625rem] font-bold text-foreground">{basics.name}</div>
              <div className="font-mono text-[0.6875rem] text-muted-foreground">{basics.tagline}</div>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-primary/25 bg-primary/[0.08] px-3 py-1.5">
              <span className="flex items-center gap-1 font-mono text-[0.5625rem] uppercase tracking-wide text-primary">
                <Icon path={I.badge} size={11} /> Skill
              </span>
              <span className="font-mono text-lg font-bold text-foreground">{basics.skillScore}</span>
            </div>
          </div>

          {/* skill / vertical tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Pill key={t.label} tone={t.tone}>
                {t.label}
              </Pill>
            ))}
          </div>

          {/* proof of work */}
          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
              <span>Proof of work</span>
              <span className="flex items-center gap-1">
                <Icon path={I.git} size={11} /> {basics.github}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {featuredWork.map((w) => (
                <div key={w.name} className="relative mx-auto aspect-square w-4/5 overflow-hidden rounded-xl border border-border bg-white">
                  <img src={w.logo} alt={`${w.name} logo`} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 flex h-1/4 flex-col justify-end bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_45%,rgba(0,0,0,0.2)_75%,transparent_100%)] px-2 pb-1.5">
                    <div className="truncate font-mono text-[0.625rem] font-medium text-white">{w.name}</div>
                    <div className="font-mono text-[0.5625rem] text-white/75">{w.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {active !== null && (
          <div className="scrollbar-slim absolute inset-0 overflow-y-auto">
            <SectionPanelBody current={active} />
          </div>
        )}
      </div>

      {/* persistent footer — rate (original) when nothing selected, else availability */}
      <div className="flex items-center justify-between gap-3 border-t border-border p-5 sm:p-6">
        {active === null ? (
          <div>
            <div className="font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Rate</div>
            <div className="font-mono text-[0.9375rem] font-bold text-foreground">
              {basics.rate}<span className="text-muted-foreground">{basics.rateUnit}</span>
            </div>
          </div>
        ) : (
          <span className="flex items-center gap-1.5 font-mono text-[0.625rem] text-[hsl(var(--success))]">
            <LiveDot /> {basics.availability}
          </span>
        )}
        <a
          href={SIGNUP_URL}
          className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-[#ff7d5e] active:scale-[0.98]"
        >
          Create yours now <Icon path={I.arrow} size={15} />
        </a>
      </div>
    </PortalCard>
  );
}

export function FeatureBuilder() {
  return (
    <FeatureRow
      id="feature-builder"
      n="06"
      icon={I.badge}
      eyebrow="Builder profile"
      title="Credibility you can actually trust."
      body="Every builder carries one synced profile — skills and build-types, the verticals they know, proof of work pulled straight from their repos, rate, availability, and a Krowe Skill Score. Enough for an operator to hire an unproven builder with confidence."
    >
      <ProfileMock />
    </FeatureRow>
  );
}

// ───────────────────────── CTA band ─────────────────────────
export function CtaBand() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="reveal mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-white/80 px-6 py-12 text-center shadow-card backdrop-blur-md sm:px-12 sm:py-16">
        <div className="mx-auto inline-flex items-center gap-2">
          <Ember size={16} />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            PRD → Quote → Contract → Tasks → Repo
          </span>
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-serif leading-[1.06] tracking-tight sm:text-5xl">
          Automate the engagement — from discovery call to shipped repo.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground" style={{ textWrap: 'pretty' }}>
          Scoping, pricing, contracts, the build, the ship — Krowe runs each step and tracks it in one portal, for operators and builders alike.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta href={SIGNUP_URL}>Get Started</PrimaryCta>
          <SecondaryCta href={LOGIN_URL}>Log in</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
