// profilePanels.tsx — per-section detail panels for the builder profile.
// Shared by the landing ProfileMock (FeaturesC.tsx) and the BuilderProfilePage
// detail pages so the two never drift. Each panel owns its own padding and reads
// from profileData.ts; SectionPanelBody switches between them by section key.
import { useEffect, useState } from 'react';
import { Pill, Icon, I, I2 } from './common';
import { BrandMark } from './brands';
import { profile, type SectionKey } from './profileData';

const { basics, tags, suggestedTags, projects, experience, education, certifications, tools } = profile;

// tiny spinning ring used by the auto-fill analyzing feed
function Spinner({ size = 12 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0 animate-spin rounded-full border-[1.5px] border-primary/25 border-t-primary"
      style={{ width: size, height: size }}
    />
  );
}

// AnalyzingFeed — mock "generating" component that streams small status lines as
// the imported portfolio/résumé is parsed, then loops. Pure presentation.
const ANALYZE_STEPS = [
  'Reading your portfolio',
  'Adding work experience',
  'Adding projects',
  'Adding skills & tags',
  'Scoring your profile',
];

function AnalyzingFeed() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % (ANALYZE_STEPS.length + 1));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const complete = active >= ANALYZE_STEPS.length;
  const label = complete ? 'Profile updated' : ANALYZE_STEPS[active];

  return (
    <div className="surface-subtle mt-4 rounded-xl border border-border p-4">
      <div className="flex items-center justify-between gap-2 font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">
        <span>{complete ? 'Auto-fill complete' : 'Analyzing import'}</span>
        {!complete && (
          <span>
            {active + 1}/{ANALYZE_STEPS.length}
          </span>
        )}
      </div>
      {/* a single line that rotates through each step one at a time */}
      <div className="mt-3 flex items-center gap-2">
        {complete ? (
          <span className="text-[hsl(var(--success))]">
            <Icon path={I.check} size={13} />
          </span>
        ) : (
          <Spinner size={13} />
        )}
        <span
          key={active}
          className="text-[0.8125rem] font-medium text-foreground"
          style={{ animation: 'kw-fade-in-up 360ms cubic-bezier(0.16, 1, 0.3, 1) both' }}
        >
          {label}
          {complete ? '' : '…'}
        </span>
      </div>
    </div>
  );
}

function BasicsPanel() {
  return (
    <div className="p-5 sm:p-6">
      {/* auto-fill — import a portfolio or résumé to populate the basics for you */}
      <div className="rounded-xl border border-primary/25 bg-primary/[0.05] p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Icon path={I2.sparkle} size={15} />
          </span>
          <div className="min-w-0">
            <div className="text-[0.8125rem] font-semibold text-foreground">Auto-fill your profile</div>
            <div className="font-mono text-[0.625rem] text-muted-foreground">Import a portfolio or résumé — we fill in the rest.</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="surface-subtle flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left transition-colors hover:border-primary/30"
          >
            <Icon path={I2.globe} size={16} className="shrink-0 text-primary" />
            <div className="min-w-0">
              <div className="text-[0.75rem] font-medium text-foreground">Import portfolio</div>
              <div className="font-mono text-[0.5625rem] text-muted-foreground">paste a link</div>
            </div>
          </button>
          <button
            type="button"
            className="surface-subtle flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left transition-colors hover:border-primary/30"
          >
            <Icon path={I.file} size={16} className="shrink-0 text-primary" />
            <div className="min-w-0">
              <div className="text-[0.75rem] font-medium text-foreground">Upload résumé</div>
              <div className="font-mono text-[0.5625rem] text-muted-foreground">PDF file</div>
            </div>
          </button>
        </div>
      </div>

      {/* analyzing feed — streams what the import is filling in */}
      <AnalyzingFeed />
    </div>
  );
}

function TagsPanel() {
  return (
    <div className="p-5 sm:p-6">
      <p className="text-[0.9375rem] leading-relaxed text-foreground/80">
        The strengths and signals an operator can trust at a glance.
      </p>

      {/* tags the auto-fill applied for you */}
      <div className="mt-4 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
        <Icon path={I2.sparkle} size={11} className="text-primary" />
        Added from your auto-fill
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t.label} tone={t.tone}>
            {t.label}
          </Pill>
        ))}
      </div>

      {/* other tags the builder can add with one tap */}
      <div className="mt-5 border-t border-border pt-4">
        <div className="flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
          <Icon path={I.plus} size={11} />
          Other tags you can add
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {suggestedTags.map((t) => (
            <button
              key={t}
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-dashed border-border bg-[hsl(var(--surface-subtle))] px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon path={I.plus} size={10} />
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <div className="p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
        <span>Proof of work</span>
        <a
          href={basics.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 transition-colors hover:text-primary"
        >
          <Icon path={I.git} size={11} /> {basics.github}
        </a>
      </div>
      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.name} className="surface-subtle flex gap-3 rounded-xl border border-border p-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
              <img src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[0.9375rem] font-bold text-foreground">{p.name}</span>
                <span className="shrink-0 font-mono text-[0.625rem] text-muted-foreground">{p.meta}</span>
              </div>
              <p className="mt-1 text-[0.8125rem] leading-relaxed text-foreground/75">{p.summary}</p>
              {p.stack && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Pill key={s} tone="white">
                      <BrandMark name={s} size={11} fallback={false} />
                      {s}
                    </Pill>
                  ))}
                </div>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-mono text-[0.625rem] text-primary transition-colors hover:text-[#ff7d5e]"
                >
                  <Icon path={I2.external} size={11} /> visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="p-5 sm:p-6">
      <div className="space-y-3">
        {experience.map((e) => (
          <div key={`${e.org}-${e.role}`} className="surface-subtle flex gap-3 rounded-xl border border-border p-3">
            {/* company logo — falls back to an org monogram when no asset exists */}
            {e.logo ? (
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                <img src={e.logo} alt={`${e.org} logo`} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/10 font-bold text-primary">
                {e.org.charAt(0)}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[0.9375rem] font-bold text-foreground">{e.role}</div>
                  <div className="font-mono text-[0.6875rem] text-muted-foreground">{e.org}</div>
                </div>
                <span className="flex shrink-0 items-center gap-1 font-mono text-[0.625rem] text-muted-foreground">
                  <Icon path={I2.clock} size={11} /> {e.period}
                </span>
              </div>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-foreground/75">{e.summary}</p>
              {e.tags && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <Pill key={t} tone="white">
                      <BrandMark name={t} size={11} fallback={false} />
                      {t}
                    </Pill>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="p-5 sm:p-6">
      <div className="space-y-3">
        {education.map((ed) => (
          <div key={ed.school} className="surface-subtle rounded-xl border border-border p-3">
            {/* degree header — logo, school, credential, period */}
            <div className="flex gap-3">
              {ed.logo && (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white p-1.5">
                  <img src={ed.logo} alt={`${ed.school} logo`} className="h-full w-full object-contain" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[0.9375rem] font-bold text-foreground">{ed.school}</div>
                    <div className="font-mono text-[0.6875rem] text-muted-foreground">
                      {ed.credential}
                      {ed.honors && <span className="text-foreground/60"> · {ed.honors}</span>}
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[0.625rem] text-muted-foreground">{ed.period}</span>
                </div>

                {/* gpa + awards */}
                {(ed.gpa || ed.awards) && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    {ed.gpa && (
                      <Pill tone="blue">
                        <Icon path={I.badge} size={10} /> {ed.gpa} GPA
                      </Pill>
                    )}
                    {ed.awards?.map((a) => (
                      <Pill key={a} tone="amber">
                        {a}
                      </Pill>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {ed.focus && <p className="mt-3 text-[0.8125rem] leading-relaxed text-foreground/75">{ed.focus}</p>}

            {/* relevant coursework */}
            {ed.coursework && (
              <div className="mt-3 border-t border-border pt-3">
                <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
                  <Icon path={I2.list} size={11} /> Relevant coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ed.coursework.map((c) => (
                    <span
                      key={c}
                      className="surface-subtle inline-flex items-center rounded-full border border-border px-2.5 py-1 font-mono text-[0.625rem] text-foreground/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* activities & leadership */}
            {ed.activities && (
              <div className="mt-3 flex items-start gap-2 border-t border-border pt-3">
                <span className="mt-0.5 shrink-0 text-primary">
                  <Icon path={I.users} size={13} />
                </span>
                <p className="text-[0.75rem] leading-relaxed text-foreground/70">{ed.activities}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* certifications & continuing education — keeps the empty space working */}
      {certifications.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <div className="mb-3 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
            <Icon path={I2.sparkle} size={11} className="text-primary" /> Certifications & continuing education (coming soon)
          </div>
          <div className="space-y-2">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="surface-subtle flex items-center gap-3 rounded-xl border border-border p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white">
                  <BrandMark name={c.mark} size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[0.8125rem] font-semibold text-foreground">{c.name}</div>
                  <div className="font-mono text-[0.625rem] text-muted-foreground">{c.issuer}</div>
                </div>
                <span className="shrink-0 font-mono text-[0.625rem] text-muted-foreground">{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ToolsPanel() {
  const first = basics.name.split(' ')[0];
  return (
    <div className="p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
        <Icon path={I.wrench} size={11} /> {`${first}'s coding tools`}
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {tools.map((t) => (
          <div
            key={t.name}
            className="surface-subtle flex flex-col items-center justify-center gap-2 rounded-xl border border-border px-2 py-3 text-center"
          >
            <BrandMark name={t.name} size={22} />
            <span className="w-full truncate font-mono text-[0.625rem] text-foreground/80">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionPanelBody({ current }: { current: SectionKey }) {
  switch (current) {
    case 'basics':
      return <BasicsPanel />;
    case 'tags':
      return <TagsPanel />;
    case 'projects':
      return <ProjectsPanel />;
    case 'experience':
      return <ExperiencePanel />;
    case 'education':
      return <EducationPanel />;
    case 'tools':
      return <ToolsPanel />;
    default:
      return null;
  }
}
