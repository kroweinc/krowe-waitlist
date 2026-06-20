// Chrome.tsx — site-wide Navbar + dark Footer for the Krowe v2 experience.
// Ported from the Claude Design project (kw-chrome.jsx).
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon, I, scrollToId, SIGNUP_URL, LOGIN_URL } from './common';

// ── Navbar ──
const NAV_LINKS = [
  { label: 'PRD', id: 'feature-prd' },
  { label: 'Quote', id: 'feature-quote' },
  { label: 'Tasks', id: 'feature-tasks' },
  { label: 'Repo', id: 'feature-repo' },
  { label: 'Builders', id: 'feature-builder' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Same-page → smooth scroll. Other page → SPA-navigate home, then the
  // landing page's hash effect scrolls to the target.
  const onLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (document.getElementById(id)) {
      setTimeout(() => scrollToId(id), 60);
    } else {
      navigate({ pathname: '/', hash: `#${id}` });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full py-4 pointer-events-none font-sans">
      <nav className="mx-auto w-full max-w-5xl px-4 pointer-events-auto">
        <div className="flex items-center justify-between gap-2 rounded-full border border-border bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-md sm:px-6">
          <div className="flex flex-1 items-center">
            <a href="/#top" onClick={(e) => onLink(e, 'top')} className="flex items-center gap-2">
              <img src="/KroweLogo.png" alt="Krowe" className="h-7 w-auto sm:h-8" />
            </a>
          </div>
          <div className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={(e) => onLink(e, l.id)}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-2">
            <a
              href={LOGIN_URL}
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-black/5 sm:inline-flex"
            >
              Log in
            </a>
            <a
              href={SIGNUP_URL}
              className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
            >
              Get Started
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-black/5 md:hidden"
            >
              <Icon path={I.menu} size={22} />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden pointer-events-auto">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-4 top-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-semibold">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-black/5"
              >
                <Icon path={I.x} size={20} />
              </button>
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`/#${l.id}`}
                  onClick={(e) => onLink(e, l.id)}
                  className="border-b border-border py-3 text-base font-medium last:border-0 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-2">
              <a href={LOGIN_URL} className="w-full rounded-full border border-border py-3 text-center text-sm font-semibold">
                Log in
              </a>
              <a
                href={SIGNUP_URL}
                className="w-full rounded-full bg-foreground py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Footer mini-card (dark, software-build artifacts) ──
type FootRow = { k: string; v: string; tone?: 'green' | 'coral' };
type FootTone = 'green' | 'coral' | 'white';

function FootCard({
  title,
  rows,
  tag,
  tagTone = 'green',
}: {
  title: string;
  rows: FootRow[];
  tag?: string;
  tagTone?: FootTone;
}) {
  const tones: Record<FootTone, string> = {
    green: 'text-green-400 bg-green-500/10 border-green-500/20',
    coral: 'text-primary bg-primary/10 border-primary/25',
    white: 'text-white/70 bg-white/5 border-white/10',
  };
  return (
    <div className="portal-glass flex h-44 w-64 shrink-0 flex-col rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[0.6875rem] text-white/40">{title}</span>
        {tag && (
          <span className={`rounded border px-1.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-wide ${tones[tagTone]}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <span className="truncate font-mono text-[0.6875rem] text-white/50">{r.k}</span>
            <span
              className={`shrink-0 font-mono text-[0.6875rem] ${
                r.tone === 'green' ? 'text-green-400' : r.tone === 'coral' ? 'text-primary' : 'text-white/80'
              }`}
            >
              {r.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

type FootCardData = {
  title: string;
  rows: FootRow[];
  tag?: string;
  tagTone?: FootTone;
};

export function Footer() {
  const cards: FootCardData[] = [
    {
      title: 'prd · acme invoicing',
      tag: 'approved',
      tagTone: 'green',
      rows: [
        { k: 'scope', v: '3 deliverables', tone: 'green' },
        { k: 'stack', v: '4 services' },
        { k: 'est.', v: '40–60 hrs', tone: 'coral' },
      ],
    },
    {
      title: 'quote · #4821',
      tag: 'signed',
      tagTone: 'green',
      rows: [
        { k: 'labor', v: '52 hrs', tone: 'coral' },
        { k: 'total', v: '$8,640', tone: 'green' },
        { k: 'source', v: 'prd-v2.md' },
      ],
    },
    {
      title: 'contract · engagement',
      tag: 'active',
      tagTone: 'coral',
      rows: [
        { k: 'operator', v: 'signed', tone: 'green' },
        { k: 'builder', v: 'signed', tone: 'green' },
        { k: 'status', v: 'live', tone: 'coral' },
      ],
    },
    {
      title: 'tasks · KRW-4821',
      tag: 'building',
      tagTone: 'coral',
      rows: [
        { k: 'subtasks', v: '4 of 4', tone: 'coral' },
        { k: 'logged', v: '33 hrs' },
        { k: 'next', v: 'approval', tone: 'coral' },
      ],
    },
    {
      title: 'repo · ledger-sync',
      tag: 'live',
      tagTone: 'green',
      rows: [
        { k: 'deploy', v: 'vercel', tone: 'green' },
        { k: 'commit', v: '#214' },
      ],
    },
    {
      title: 'builder · Maya R.',
      tag: 'available',
      tagTone: 'green',
      rows: [
        { k: 'skill score', v: '92', tone: 'coral' },
        { k: 'rate', v: '$150/hr' },
        { k: 'proof', v: '3 shipped', tone: 'green' },
      ],
    },
  ];
  const loop = [...cards, ...cards, ...cards];
  return (
    <footer className="footer-dark relative w-full overflow-hidden border-t border-white/5 pb-8 pt-24 text-white antialiased font-sans">
      <div className="glow-line absolute inset-x-0 top-0 z-10" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-4xl font-serif leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block">Your whole build in one portal —</span>
              <span className="block text-primary">ship with confidence.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium text-white/55 sm:text-lg">
              PRD, quote, contract, tasks, and the live repo — every step of the build tracked in one portal, for
              operators and builders alike.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="portal-glass group relative w-full overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20 text-primary">
                  <Icon path={I.zap} size={24} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Ready to start?</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/55">
                  Scope it, price it, sign it, and ship it — your whole build, in one portal.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-white transition-all hover:bg-[#ff7d5e] active:scale-[0.98]"
                >
                  Get Started <Icon path={I.arrow} size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mask-fade-x relative mt-16 w-full overflow-hidden sm:mt-20">
        <div className="ticker-animate flex w-max gap-4 px-4 sm:gap-6 sm:px-6">
          {loop.map((c, i) => (
            <FootCard key={i} {...c} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-2">
              <img src="/KroweIcon.svg" className="h-8 w-auto" alt="" />
              <span className="text-lg font-bold">Krowe</span>
            </div>
            <p className="text-xs font-medium text-white/35">© 2026 Krowe Technologies Inc.</p>
          </div>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/45">
              <Link className="transition-colors hover:text-primary" to="/careers">
                Careers
              </Link>
              <Link className="transition-colors hover:text-primary" to="/privacy">
                Privacy
              </Link>
              <Link className="transition-colors hover:text-primary" to="/terms">
                Terms
              </Link>
              <a className="transition-colors hover:text-primary" href="mailto:kroweinc@gmail.com">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/KroweInc"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/45 transition-colors hover:text-primary"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/krowe"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/45 transition-colors hover:text-primary"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
