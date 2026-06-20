// Hero.tsx — the marketplace narrative hero: one portal, discovery call → shipped repo.
// Implements the vault "Claude Design" brief (claude-design-prompt.md).
import { Fragment } from 'react';
import { Icon, I, I2, Ember, PrimaryCta, SecondaryCta, scrollToId, SIGNUP_URL } from './common';

// the six portal features, in order — the throughline of the whole page
const FLOW = [
  { k: 'PRD', icon: I2.doc },
  { k: 'Quote', icon: I2.receipt },
  { k: 'Contract', icon: I2.handshake },
  { k: 'Tasks', icon: I2.list },
  { k: 'Repo', icon: I2.branch },
  { k: 'Profile', icon: I.badge },
];

// social proof — university logo ticker (ported from the v1 hero)
const SCHOOLS = [
  { name: 'Harvard', src: '/ivy/harvard%20logo%20.png' },
  { name: 'Yale', src: '/ivy/yale%20logo.png' },
  { name: 'NYU', src: '/ivy/nyu%20logo.png' },
  { name: 'MIT', src: '/ivy/MIT%20Logo%20png%20.png' },
  { name: 'Stanford', src: '/ivy/stanfordlogo.png' },
  { name: 'Penn', src: '/ivy/upenn%20logo.png' },
  { name: 'Berkeley', src: '/ivy/uc%20berkley%20logo%20png%20.png' },
  { name: 'UT Austin', src: '/ivy/ut%20austin%20logo.png' },
];

function TrustedBy() {
  // tripled so the -33.333% ticker keyframe loops seamlessly
  const reel = [...SCHOOLS, ...SCHOOLS, ...SCHOOLS];
  return (
    <div className="reveal mt-16 w-full">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
        Trusted by students at
      </p>
      <div className="mask-fade-x overflow-hidden opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
        <div className="ticker-animate flex items-center hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {reel.map((school, i) => (
            <div key={`${school.name}-${i}`} className="mx-5 flex items-center sm:mx-10">
              <img
                src={school.src}
                alt={school.name}
                width={school.name === 'Yale' ? 72 : 96}
                height={school.name === 'Yale' ? 72 : 96}
                className={`object-contain ${
                  school.name === 'Yale'
                    ? 'h-12 w-12 sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]'
                    : 'h-16 w-16 sm:h-20 sm:w-20 md:h-[96px] md:w-[96px]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroFlow() {
  return (
    <div className="reveal mt-14 w-full">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-1.5 gap-y-3">
        {FLOW.map((s, i) => (
          <Fragment key={s.k}>
            <div className="flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-2 shadow-soft backdrop-blur-sm">
              <span className="text-primary">
                <Icon path={s.icon} size={16} />
              </span>
              <span className="text-sm font-semibold text-foreground">{s.k}</span>
            </div>
            {i < FLOW.length - 1 && (
              <span className="text-muted-foreground/40" aria-hidden>
                <Icon path={I.arrow} size={15} />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden pb-8 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-12">
        <div className="reveal mx-auto inline-flex -translate-x-16 items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 shadow-soft backdrop-blur-sm">
          <Ember size={14} />
          <span className="text-sm font-semibold text-primary">Beta live now</span>
          <span className="h-3.5 w-px bg-border" aria-hidden />
          <span className="text-sm font-semibold text-foreground/70">Completely for free</span>
        </div>
        <h1 className="reveal mx-auto mt-6 max-w-4xl text-[2.6rem] font-serif leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
          An <span className="text-primary">AI-native portal</span> that automates your client engagement end to end.
        </h1>
        <p
          className="reveal mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
          style={{ textWrap: 'pretty' }}
        >
          Krowe runs your whole client engagement end to end. PRD, quote, contract, tasks, and live repo — generated,
          priced, tracked, and shipped for one-tap approval.
        </p>
        <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta href={SIGNUP_URL}>Get Started</PrimaryCta>
          <SecondaryCta onClick={() => scrollToId('feature-prd')}>See how it works</SecondaryCta>
        </div>
        <HeroFlow />
        <TrustedBy />
      </div>
    </section>
  );
}
