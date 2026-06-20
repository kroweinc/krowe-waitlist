// FeaturesA.tsx — Feature 01 (AI-generated PRD) + 02 (Quote), mirroring the Krowe Portal.
import { Icon, I, I2, FeatureRow, PortalCard, ModeToggle, StatusBadge, StatStrip, SendToClient, SIGNUP_URL } from './common';
import { BrandMark } from './brands';

// ───────────────────────── Feature 01 · AI-generated PRD ─────────────────────────
function PrdMock() {
  const toc = ['Overview', 'Requirements', 'Deliverables', 'Stack & cost', 'Timeline'];
  const stack: { name: string; cost: string; fit: 'fits' | 'exceeds'; note: string }[] = [
    { name: 'Supabase', cost: '', fit: 'fits', note: 'est. 8k / 50k MAU' },
    { name: 'GitHub', cost: '', fit: 'fits', note: 'private repo, free tier' },
    { name: 'Vercel', cost: '$20/m', fit: 'exceeds', note: 'exceeds free plan' },
    { name: 'Stripe', cost: '2.9%', fit: 'exceeds', note: 'usage-based' },
  ];
  return (
    <PortalCard
      name="prd-v2.md"
      right={
        <div className="flex items-center gap-2">
          <ModeToggle active="edit" />
          <StatusBadge status="draft" />
        </div>
      }
    >
      <div className="p-5 sm:p-6">
        {/* doc title */}
        <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground">Internal invoicing tool</h3>
        <div className="mt-1 flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
          <Icon path={I2.sparkle} size={12} className="text-primary" /> AI-generated from discovery call · acme co.
        </div>

        {/* stat strip */}
        <div className="mt-4">
          <StatStrip
            items={[
              { label: 'sections', value: '5' },
              { label: 'modules', value: '4' },
              { label: 'est. effort', value: '40–60', sub: 'hours' },
            ]}
          />
        </div>

        <div className="mt-4 grid items-center gap-3 sm:grid-cols-[116px_1fr]">
          {/* table of contents rail */}
          <div className="hidden sm:block">
            <div className="mb-2 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Contents</div>
            <div className="space-y-0.5">
              {toc.map((t, i) => (
                <div
                  key={t}
                  className={`flex items-center gap-2 rounded-md px-2 py-1 text-[0.75rem] ${
                    i === 3 ? 'border-l-2 border-primary bg-primary/[0.08] text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <span className="font-mono text-[0.5625rem] text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* main: stack */}
          <div className="space-y-3">
            <div className="surface-subtle rounded-2xl border border-border p-4">
              <div className="mb-4 flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">
                <Icon path={I.card} size={13} /> Stack &amp; cost · free-tier fit
              </div>
              <div className="space-y-2">
                {stack.map((s) => (
                  <div
                    key={s.name}
                    className="grid grid-cols-[auto_1fr] items-center gap-x-3 sm:grid-cols-[5.5rem_8rem_auto]"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <BrandMark name={s.name} />
                      <span className="truncate font-mono text-[0.8125rem] text-foreground/80">{s.name}</span>
                    </div>
                    <span className="hidden truncate font-mono text-[0.625rem] text-muted-foreground/70 sm:block">{s.note}</span>
                    <span
                      className={`w-[6rem] justify-self-start whitespace-nowrap rounded border px-1.5 py-0.5 text-center font-mono text-[0.5625rem] ${
                        s.fit === 'fits'
                          ? 'border-[hsl(var(--success)/0.22)] bg-[hsl(var(--success)/0.10)] text-[hsl(var(--success))]'
                          : 'border-[hsl(var(--warning)/0.22)] bg-[hsl(var(--warning)/0.10)] text-[hsl(var(--warning))]'
                      }`}
                    >
                      {s.fit === 'fits' ? 'fits free tier' : 'exceeds'}{s.cost ? `: ${s.cost}` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <SendToClient href={SIGNUP_URL} icon={<Icon path={I.plus} size={15} />}>
            Create your own PRD
          </SendToClient>
        </div>
      </div>
    </PortalCard>
  );
}

export function FeaturePRD() {
  return (
    <FeatureRow
      id="feature-prd"
      n="01"
      icon={I2.doc}
      eyebrow="AI-generated PRD"
      title="A real PRD, from a discovery call — not a blank page."
      body="The builder runs a discovery call; Krowe turns the transcript into an in-depth PRD — problem, scope, deliverables, and what's out. It even recommends the third-party services to build on, projects this build against each one's free tier, and estimates the hours."
    >
      <PrdMock />
    </FeatureRow>
  );
}

// ───────────────────────── Feature 02 · Quote ─────────────────────────
function QuoteMock() {
  const lines: { k: string; sub?: string; v: string }[] = [
    { k: 'Build labor', sub: '52 hrs × $150/hr', v: '$7,800' },
    { k: 'Third-party (first mo.)', sub: 'Vercel + add-ons', v: '$20' },
    { k: '30-day warranty', sub: 'post-launch fixes', v: '$820' },
  ];
  return (
    <PortalCard
      name="quote.pdf"
      right={
        <div className="flex items-center gap-2">
          <ModeToggle active="edit" />
          <StatusBadge status="draft" />
        </div>
      }
    >
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground">Quote · internal invoicing tool</h3>
        <div className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
          <Icon path={I.arrow} size={11} className="rotate-180" /> derived from prd-v2.md
        </div>

        {/* line-item table */}
        <div className="surface-subtle mt-4 rounded-2xl border border-border p-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
            <span>Line item</span>
            <span>amount</span>
          </div>
          <div className="space-y-2.5">
            {lines.map((l) => (
              <div key={l.k} className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[0.875rem] font-medium text-foreground">{l.k}</div>
                  {l.sub && <div className="font-mono text-[0.6875rem] text-muted-foreground">{l.sub}</div>}
                </div>
                <div className="font-mono text-[0.875rem] font-semibold tabular-nums text-foreground">{l.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* grand total banner */}
        <div className="mt-3 flex items-center justify-between rounded-2xl border border-primary/20 bg-primary/[0.04] px-4 py-3.5">
          <div>
            <div className="font-mono text-[0.5625rem] uppercase tracking-wide text-primary">Total due</div>
            <div className="font-mono text-[0.625rem] text-muted-foreground">fixed bid · 30-day warranty incl.</div>
          </div>
          <span className="font-mono text-2xl font-bold tabular-nums text-foreground">$8,640</span>
        </div>

        <div className="mt-4">
          <SendToClient href={SIGNUP_URL} icon={<Icon path={I.plus} size={15} />}>
            Send your own quote
          </SendToClient>
        </div>
        <p className="mt-2.5 text-center font-mono text-[0.625rem] text-muted-foreground">
          every number traces back to the PRD estimate — no black box
        </p>
      </div>
    </PortalCard>
  );
}

export function FeatureQuote() {
  return (
    <FeatureRow
      reverse
      id="feature-quote"
      n="02"
      icon={I2.receipt}
      eyebrow="Quote"
      title="A quote you can see straight through."
      body="The quote builds itself from the PRD — the estimated hours times your rate, plus the third-party costs from the stack — so the client sees exactly where the price came from. One click to e-sign, right in the portal."
    >
      <QuoteMock />
    </FeatureRow>
  );
}
