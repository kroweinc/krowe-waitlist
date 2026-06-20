// FeaturesB.tsx — Feature 03 (Contract) + 04 (Tasks / Build Board), mirroring the Krowe Portal.
import { type ReactNode } from 'react';
import { Icon, I, I2, FeatureRow, FeatureHeader, PortalCard, Pill, ModeToggle, StatusBadge, SIGNUP_URL, type Tone } from './common';

// ───────────────────────── Feature 03 · Contract ─────────────────────────
function ContractMock() {
  return (
    <PortalCard
      name="contract.pdf"
      right={
        <div className="flex items-center gap-2">
          <ModeToggle active="preview" />
          <StatusBadge status="sent" />
        </div>
      }
    >
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground">Master services agreement</h3>
        <div className="mt-1 font-mono text-[0.625rem] text-muted-foreground">
          acme co. · internal invoicing tool · effective Jun 18, 2026
        </div>

        {/* parties */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { who: 'Provider (builder)', name: 'Maya R.', sub: 'AI-native builder' },
            { who: 'Client (operator)', name: 'Acme Co.', sub: 'J. Rivera, Ops' },
          ].map((p) => (
            <div key={p.who} className="surface-subtle rounded-xl border border-border p-3">
              <div className="font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">{p.who}</div>
              <div className="mt-0.5 text-[0.875rem] font-semibold text-foreground">{p.name}</div>
              <div className="font-mono text-[0.625rem] text-muted-foreground">{p.sub}</div>
            </div>
          ))}
        </div>

        {/* clause titles */}
        <div className="surface-subtle mt-3 rounded-xl border border-border p-3">
          <div className="mb-1.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Terms</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.75rem] text-foreground/70">
            <span>1 · Payment</span>
            <span>2 · IP assignment</span>
            <span>3 · Confidentiality</span>
            <span>4 · Warranty</span>
          </div>
        </div>

        {/* exhibits: scope + price snapshots aggregated from PRD + quote */}
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          <div className="surface-subtle rounded-xl border border-border p-3">
            <div className="mb-2 flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
              <Icon path={I2.doc} size={12} /> Exhibit A · scope · prd-v2.md
            </div>
            <div className="space-y-1 text-[0.75rem] text-foreground/70">
              <div className="flex items-center gap-2">
                <Icon path={I.check} size={12} className="text-[hsl(var(--success))]" /> Stripe → ledger sync
              </div>
              <div className="flex items-center gap-2">
                <Icon path={I.check} size={12} className="text-[hsl(var(--success))]" /> AR aging report
              </div>
              <div className="flex items-center gap-2">
                <Icon path={I.check} size={12} className="text-[hsl(var(--success))]" /> Role-based access
              </div>
            </div>
          </div>
          <div className="surface-subtle rounded-xl border border-border p-3">
            <div className="mb-2 flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">
              <Icon path={I2.receipt} size={12} /> Exhibit B · price · quote.pdf
            </div>
            <div className="space-y-1 font-mono text-[0.6875rem] text-muted-foreground">
              <div className="flex justify-between">
                <span>build labor</span>
                <span className="tabular-nums">$7,800</span>
              </div>
              <div className="flex justify-between">
                <span>third-party</span>
                <span className="tabular-nums">$20</span>
              </div>
              <div className="flex justify-between">
                <span>warranty</span>
                <span className="tabular-nums">$820</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
              <span className="text-[0.625rem] uppercase tracking-wide text-muted-foreground">Total</span>
              <span className="font-mono text-sm font-bold tabular-nums text-foreground">$8,640</span>
            </div>
          </div>
        </div>

        {/* signature line */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--success)/0.25)] bg-[hsl(var(--success)/0.06)] p-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--success)/0.15)] text-[hsl(var(--success))]">
              <Icon path={I2.pen} size={14} />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Builder · signed</div>
              <div className="truncate text-[0.8125rem] font-medium text-foreground">Maya R.</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--warning)/0.25)] bg-[hsl(var(--warning)/0.06)] p-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--warning)/0.15)] text-[hsl(var(--warning))]">
              <Icon path={I2.clock} size={14} />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">Client · awaiting</div>
              <div className="truncate text-[0.8125rem] font-medium text-foreground">Acme Co.</div>
            </div>
          </div>
        </div>
      </div>
    </PortalCard>
  );
}

export function FeatureContract() {
  return (
    <FeatureRow
      id="feature-contract"
      n="03"
      icon={I2.handshake}
      eyebrow="Contract"
      title="One agreement that aggregates both ends."
      body="On signature, Krowe assembles a single contract — the accepted PRD scope plus the signed quote plus terms — into one canonical agreement both parties e-sign. It's pinned in the workspace as the definitive 'what we agreed to.'"
    >
      <ContractMock />
    </FeatureRow>
  );
}

// ───────────────────────── Feature 04 · Tasks (Build Board) ─────────────────────────
type Priority = 'urgent' | 'high' | 'medium' | 'low';

const RAIL: Record<Priority, string> = {
  urgent: 'bg-[hsl(var(--danger))]',
  high: 'bg-[hsl(var(--warning))]',
  medium: 'bg-[hsl(var(--primary-accent))]',
  low: 'bg-[hsl(var(--success))]',
};

// a single Build Board card — mirrors the portal .krowe-card with a priority left-rail
function TaskCard({
  id,
  title,
  priority,
  source,
  done,
  fill,
  children,
}: {
  id: string;
  title: string;
  priority: Priority;
  source: string;
  done?: boolean;
  fill?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-3 pl-4 shadow-soft ${
        done ? 'border-[hsl(var(--success)/0.25)] bg-[hsl(var(--success)/0.05)]' : 'border-border bg-white'
      } ${fill ? 'flex flex-1 flex-col' : ''}`}
    >
      <span className={`absolute inset-y-0 left-0 w-[3px] ${RAIL[priority]}`} aria-hidden />
      <div className="flex items-start gap-2">
        {done && <Icon path={I.check} size={13} className="mt-0.5 shrink-0 text-[hsl(var(--success))]" />}
        <div className="text-[0.8125rem] font-semibold leading-snug text-foreground">{title}</div>
      </div>
      {children}
      <div className={`flex items-center justify-between ${fill ? 'mt-auto' : 'mt-2'}`}>
        <Pill tone="blue">{source}</Pill>
        <span className="font-mono text-[0.625rem] text-muted-foreground">{id}</span>
      </div>
    </div>
  );
}

function ColHeader({ label, count, tone = 'white' }: { label: string; count: number; tone?: Tone }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[0.625rem] uppercase tracking-wide text-muted-foreground">{label}</span>
      <Pill tone={tone}>{count}</Pill>
    </div>
  );
}

// Build Board — In progress · Approval · Done; the approval workflow folds into its column
function BuildBoardMock() {
  return (
    <PortalCard
      name="krowe · build board"
      right={
        <Pill tone="blue" dot>
          builder
        </Pill>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-3">
          {/* In progress */}
          <div className="surface-subtle rounded-2xl border border-border p-3">
            <ColHeader label="In progress" count={3} />
            <div className="mt-2.5 space-y-2.5">
              <TaskCard id="KRW-4821" title="Sync paid Stripe invoices → ledger" priority="high" source="from intake">
                <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.625rem] text-primary">
                  <Icon path={I2.sparkle} size={12} /> AI · 4 subtasks · 8–11 hrs
                </div>
              </TaskCard>
              <TaskCard id="KRW-4822" title="Weekly AR aging report" priority="medium" source="operator">
                <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                  <Icon path={I2.list} size={12} /> 3 subtasks · 5–7 hrs
                </div>
              </TaskCard>
            </div>
          </div>

          {/* Approval — deliverable submitted back for one-tap sign-off */}
          <div className="flex flex-col rounded-2xl border border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.05)] p-3">
            <ColHeader label="Approval" count={1} tone="amber" />
            <div className="mt-2.5 flex flex-1 flex-col">
              <TaskCard id="KRW-4818" title="feat: stripe → ledger sync" priority="high" source="builder" fill>
                <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                  <Icon path={I2.list} size={12} /> 4 subtasks · 8–11 hrs
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Pill tone="white">PR #38</Pill>
                  <Pill tone="white">+412 −37</Pill>
                </div>
                <a
                  href={SIGNUP_URL}
                  className="mt-2.5 flex h-8 items-center justify-center gap-1.5 rounded-full bg-primary text-[0.75rem] font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-[#ff7d5e] active:scale-[0.98]"
                >
                  <Icon path={I.check} size={13} /> Sign up to approve
                </a>
                <a
                  href={SIGNUP_URL}
                  className="mt-auto flex items-center gap-1.5 font-mono text-[0.625rem] text-primary"
                >
                  <Icon path={I2.external} size={12} /> preview · vercel.app/acme-invoicing
                </a>
              </TaskCard>
            </div>
          </div>

          {/* Done */}
          <div className="surface-subtle rounded-2xl border border-border p-3">
            <ColHeader label="Done" count={14} tone="green" />
            <div className="mt-2.5 space-y-2.5">
              <TaskCard id="KRW-4801" title="Stripe webhook endpoint" priority="medium" source="builder" done>
                <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                  <Icon path={I2.list} size={12} /> 2 subtasks · 3–4 hrs
                </div>
              </TaskCard>
              <TaskCard id="KRW-4799" title="Ledger schema + migrations" priority="low" source="builder" done>
                <div className="mt-1.5 flex items-center gap-1.5 font-mono text-[0.625rem] text-muted-foreground">
                  <Icon path={I2.list} size={12} /> 3 subtasks · 4–6 hrs
                </div>
              </TaskCard>
            </div>
          </div>
        </div>
      </div>
    </PortalCard>
  );
}

export function FeatureTasks() {
  return (
    <section className="py-16 sm:py-24">
      <FeatureHeader
        id="feature-tasks"
        n="04"
        icon={I2.list}
        eyebrow="Tasks & approval"
        title="Plain words in. Subtasks, hours, and sign-off out."
        body="Type what you need in plain English; AI breaks it into subtasks, each with an hour estimate. When the builder ships, the deliverable is submitted right back to the operator — PR, files changed, live preview — for a one-tap Approve."
      />
      <div className="reveal mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-12">
        <BuildBoardMock />
      </div>
    </section>
  );
}
