// common.tsx — shared primitives for the Krowe v2 landing experience.
// Ported from the Claude Design project (kw-chrome.jsx + kw-feature-common.jsx).
import { useEffect, type ReactNode } from 'react';

export const SIGNUP_URL = 'https://krowehub.com/signup';
export const LOGIN_URL = 'https://krowehub.com/login';

// ── Icon: thin-stroke lucide-style ──
export function Icon({
  path,
  size = 18,
  stroke = 1.75,
  className = '',
  fill = 'none',
}: {
  path: ReactNode;
  size?: number;
  stroke?: number;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

// ── Icon path maps (chrome basics + feature extras) ──
export const I: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  box: (
    <>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  git: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="9" r="3" />
      <path d="M18 12a9 9 0 0 1-9 9" />
    </>
  ),
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  badge: <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.2 7.7l5.4-.8z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4" />
    </>
  ),
  zap: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2-2 2.6-2.6z" />,
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2a3 3 0 0 0-3-3z" />
      <path d="M9 12a12 12 0 0 1 9-9c1 0 2 1 2 2a12 12 0 0 1-9 9" />
      <path d="M9 12l3 3" />
      <circle cx="14.5" cy="9.5" r="1.5" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export const I2: Record<string, ReactNode> = {
  doc: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 14l.7 1.9L21.6 17l-1.9.7L19 19.6 18.3 17.7 16.4 17l1.9-.7z" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 3v18l2-1.2 2 1.2 2-1.2 2 1.2 2-1.2 2 1.2V3l-2 1.2-2-1.2-2 1.2-2-1.2-2 1.2z" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17l2 2a1 1 0 0 0 1.4 0l3.6-3.6" />
      <path d="M21 7v8l-3 3-4-4" />
      <path d="M3 7v7l3 3 5-5" />
      <path d="M14 9l-2-2-4 4" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M6 9v6M18 9v3a6 6 0 0 1-6 6h-2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  layers: (
    <>
      <path d="M12 2l9 5-9 5-9-5z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
};

// ── Ember glyph (Krowe brand punctuation) ──
export function Ember({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
      <circle cx="8" cy="8" r="6" fill="hsl(var(--primary))" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="hsl(var(--primary))" />
      <circle cx="9" cy="7" r="1" fill="#ffb39e" />
    </svg>
  );
}

// ── reveal-on-scroll hook ──
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ── Primary / secondary CTA buttons ──
export function PrimaryCta({
  href = SIGNUP_URL,
  children,
  className = '',
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-[#ff7d5e] active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5">
        <Icon path={I.arrow} size={18} />
      </span>
    </a>
  );
}

export function SecondaryCta({
  onClick,
  href,
  children,
  className = '',
}: {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-base font-bold text-foreground transition-colors hover:border-foreground/30 hover:bg-[#faf6ef] ${className}`;
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

// ── Section heading wrapper for a feature (two-column) ──
export function FeatureRow({
  id,
  n,
  icon,
  eyebrow,
  title,
  body,
  reverse,
  children,
}: {
  id: string;
  n: string;
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={`reveal ${reverse ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
              <Icon path={icon} size={20} />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Feature {n} <span className="text-muted-foreground/60">·</span> {eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-[2rem] font-serif leading-[1.08] tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground" style={{ textWrap: 'pretty' }}>
            {body}
          </p>
        </div>
        <div className={`reveal ${reverse ? 'lg:order-1' : ''}`}>{children}</div>
      </div>
    </section>
  );
}

// ── full-width feature header (for the two-panel features) ──
export function FeatureHeader({
  id,
  n,
  icon,
  eyebrow,
  title,
  body,
}: {
  id: string;
  n: string;
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
}) {
  return (
    <div id={id} className="reveal mx-auto max-w-3xl px-4 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
          <Icon path={icon} size={20} />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Feature {n} <span className="text-muted-foreground/60">·</span> {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-[2rem] font-serif leading-[1.08] tracking-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground" style={{ textWrap: 'pretty' }}>
        {body}
      </p>
    </div>
  );
}

// ── Light portal window frame (mirrors KrowePortal document/dashboard cards) ──
export function PortalCard({
  name,
  right,
  children,
  className = '',
}: {
  name?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`portal-card relative overflow-hidden ${className}`}>
      {name !== undefined && (
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </span>
            <span className="truncate font-mono text-xs text-muted-foreground">{name}</span>
          </div>
          {right}
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

// ── small status badge (tuned for light portal surfaces) ──
export type Tone = 'green' | 'amber' | 'coral' | 'white' | 'blue';

const TONES: Record<Tone, string> = {
  green: 'text-[hsl(var(--success))] bg-[hsl(var(--success)/0.10)] border-[hsl(var(--success)/0.22)]',
  amber: 'text-[hsl(var(--warning))] bg-[hsl(var(--warning)/0.10)] border-[hsl(var(--warning)/0.22)]',
  coral: 'text-primary bg-primary/10 border-primary/25',
  blue: 'text-[hsl(var(--builder-text))] bg-[hsl(var(--builder-soft))] border-[hsl(var(--builder-text)/0.20)]',
  white: 'text-muted-foreground bg-[hsl(var(--surface-subtle))] border-border',
};

const DOT_TONES: Record<Tone, string> = {
  green: 'bg-[hsl(var(--success))]',
  amber: 'bg-[hsl(var(--warning))]',
  coral: 'bg-primary',
  blue: 'bg-[hsl(var(--builder-text))]',
  white: 'bg-muted-foreground',
};

export function Pill({
  tone = 'white',
  children,
  className = '',
  dot,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] ${TONES[tone]} ${className}`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${DOT_TONES[tone]}`} />}
      {children}
    </span>
  );
}

// blinking live dot with ping
export function LiveDot({ tone = 'green' }: { tone?: 'green' | 'coral' | 'amber' }) {
  const c =
    tone === 'green' ? 'bg-[hsl(var(--success))]' : tone === 'coral' ? 'bg-primary' : 'bg-[hsl(var(--warning))]';
  return (
    <span className="relative flex h-2 w-2" aria-hidden>
      <span
        className={`absolute inline-flex h-full w-full rounded-full ${c} opacity-75`}
        style={{ animation: 'kw-ping 1.8s cubic-bezier(0,0,0.2,1) infinite' }}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${c}`}
        style={{ animation: 'kw-blink 2s ease-in-out infinite' }}
      />
    </span>
  );
}

// ── circular progress ring (mirrors the portal's PerformanceTrackerCard) ──
export function Ring({
  value,
  size = 72,
  stroke = 7,
  className = '',
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  className?: string;
  children?: ReactNode;
}) {
  const v = Math.min(100, Math.max(0, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (v / 100) * c;
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-border" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
        />
      </svg>
      {children && <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>}
    </div>
  );
}

// ── horizontal progress bar; tone controls the fill on light portal surfaces ──
export function Bar({
  value,
  tone = 'coral',
  className = '',
  gradient = false,
}: {
  value: number;
  tone?: Tone;
  className?: string;
  gradient?: boolean;
}) {
  const fill =
    tone === 'green'
      ? 'bg-[hsl(var(--success))]'
      : tone === 'amber'
        ? 'bg-[hsl(var(--warning))]'
        : tone === 'blue'
          ? 'bg-[hsl(var(--builder-text))]'
          : tone === 'white'
            ? 'bg-muted-foreground/40'
            : 'bg-primary';
  const w = `${Math.min(100, Math.max(0, value))}%`;
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-border ${className}`}>
      <span
        className={`block h-full rounded-full ${gradient ? '' : fill}`}
        style={
          gradient
            ? { width: w, backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-accent)))' }
            : { width: w }
        }
      />
    </div>
  );
}

// ── document lifecycle badge (Draft / Sent / Signed / Active) ──
export type DocStatus = 'draft' | 'sent' | 'signed' | 'active';

export function StatusBadge({ status }: { status: DocStatus }) {
  const map: Record<DocStatus, { tone: Tone; label: string; dot?: boolean }> = {
    draft: { tone: 'white', label: 'Draft' },
    sent: { tone: 'amber', label: 'Sent', dot: true },
    signed: { tone: 'green', label: 'Signed', dot: true },
    active: { tone: 'green', label: 'Active', dot: true },
  };
  const s = map[status];
  return (
    <Pill tone={s.tone} dot={s.dot}>
      {s.label}
    </Pill>
  );
}

// ── Preview | Edit segmented pill (mirrors the portal .mode-toggle) ──
export function ModeToggle({ active = 'edit' }: { active?: 'preview' | 'edit' }) {
  return (
    <div className="surface-subtle inline-flex items-center gap-0.5 rounded-full border border-border p-[3px]">
      {(['preview', 'edit'] as const).map((m) => (
        <span
          key={m}
          className={`rounded-full px-2.5 py-1 font-mono text-[0.625rem] capitalize ${
            active === m ? 'bg-white text-foreground shadow-soft' : 'text-muted-foreground'
          }`}
        >
          {m}
        </span>
      ))}
    </div>
  );
}

// ── 3- or 4-up stat strip (mirrors the PRD/Quote/Repo stat rows) ──
export function StatStrip({ items }: { items: { label: string; value: string; sub?: string }[] }) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0,1fr))` }}>
      {items.map((s) => (
        <div key={s.label} className="surface-subtle rounded-xl border border-border px-3 py-2.5">
          <div className="font-mono text-base font-bold tabular-nums text-foreground">{s.value}</div>
          <div className="mt-0.5 font-mono text-[0.5625rem] uppercase tracking-wide text-muted-foreground">{s.label}</div>
          {s.sub && <div className="font-mono text-[0.5625rem] text-muted-foreground/70">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

// ── primary "send to client" action (builder authors → operator receives) ──
// When `href` is provided it renders as a link (used on the landing mockups to
// convert the in-card action into a "create an account to do this" signup CTA).
export function SendToClient({
  children = 'Send to client',
  icon,
  href,
}: {
  children?: ReactNode;
  icon?: ReactNode;
  href?: string;
}) {
  const cls =
    'flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-[#ff7d5e] active:scale-[0.98]';
  return href ? (
    <a href={href} className={cls}>
      {icon}
      {children}
    </a>
  ) : (
    <button type="button" className={cls}>
      {icon}
      {children}
    </button>
  );
}
