type EventType = 'comment' | 'upload' | 'deliver' | 'sign-off' | 'reply'
type MetricTone = 'success' | 'neutral'

const EVENT_CHIP_STYLES: Record<EventType, { bg: string; text: string }> = {
  comment:    { bg: 'bg-white/8',                          text: 'text-white/70' },
  upload:     { bg: 'bg-[rgba(180,83,9,0.18)]',            text: 'text-amber-300' },
  deliver:    { bg: 'bg-[rgba(21,128,61,0.22)]',           text: 'text-green-400' },
  'sign-off': { bg: 'bg-[rgba(21,128,61,0.22)]',           text: 'text-green-400' },
  reply:      { bg: 'bg-primary/15',                       text: 'text-primary' },
}

interface EventRowProps {
  time: string
  type: EventType
  client: string
  message: string
  delay: number
}

function EventRow({ time, type, client, message, delay }: EventRowProps) {
  const chip = EVENT_CHIP_STYLES[type]
  return (
    <div
      className="flex items-start gap-3 py-2.5 border-b border-white/5 last:border-0 animate-[kw-fade-in-up_500ms_ease-out_both]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono text-[0.625rem] text-white/30 tabular-nums pt-0.5 shrink-0">{time}</span>
      <span className={`shrink-0 px-1.5 py-0.5 rounded text-[0.625rem] font-mono uppercase tracking-wide ${chip.bg} ${chip.text}`}>
        {type}
      </span>
      <span className="font-mono text-[0.625rem] text-primary/80 shrink-0">{client}</span>
      <span className="text-xs text-white/60 leading-tight">{message}</span>
    </div>
  )
}

interface MetricRowProps {
  label: string
  value: string
  tone: MetricTone
}

function MetricRow({ label, value, tone }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-xs text-white/50">{label}</span>
      <span className={`text-sm font-semibold tabular-nums ${tone === 'success' ? 'text-green-400' : 'text-white/80'}`}>
        {value}
      </span>
    </div>
  )
}

function AgentNudge() {
  return (
    <div className="mt-3 rounded-xl border border-primary/30 bg-primary/10 p-3">
      <p className="text-xs text-white/75 leading-relaxed">
        <span className="font-semibold text-white">Krowe agent</span>
        {' — '}Marcus is asking about timeline. Want me to{' '}
        <span className="text-primary underline underline-offset-2 cursor-pointer">draft a reply</span>
        .
      </p>
    </div>
  )
}

function StatusPing() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-[kw-ping_1.6s_ease-out_infinite]" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      <span className="text-xs text-white/60 font-semibold">Active</span>
      <span className="font-mono text-[0.625rem] text-white/40">POST /portal/comments</span>
      <span className="ml-auto font-mono text-[0.625rem] text-green-400">200 OK · 142ms</span>
    </div>
  )
}

export function HeroCommandCenter() {
  const events: Array<Omit<EventRowProps, 'delay'>> = [
    { time: '09:42:18', type: 'comment',    client: 'ridge-media', message: 'Marcus → "The revised scope looks great"' },
    { time: '09:38:02', type: 'upload',     client: 'founder-os',  message: 'brand-bible-v2.pdf · 4.2 MB' },
    { time: '09:31:47', type: 'deliver',    client: 'acme-co',     message: 'Brand Kit v2 sent for review' },
    { time: '09:24:11', type: 'sign-off',   client: 'acme-co',     message: 'Logo set approved (3/3)' },
    { time: '09:18:55', type: 'reply',      client: 'founder-os',  message: "Replied to Sarah's thread" },
  ]

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-[0_40px_80px_-30px_rgba(20,16,14,0.5)]"
      style={{ background: 'linear-gradient(to bottom, #1a1410, #15110e)' }}
    >
      {/* orange blueprint grid overlay */}
      <div className="absolute inset-0 hero-mockup-grid pointer-events-none opacity-50" />

      {/* top glow sheen */}
      <div className="absolute top-0 left-0 right-0 h-px footer-glow-line opacity-30" />

      <div className="relative z-10 p-5 md:p-7">
        {/* top bar */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs text-white/30">krowe.portal/</span>
              <span className="px-2 py-0.5 rounded-md bg-primary/15 border border-primary/25 font-mono text-xs text-primary">
                acme-co
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green-400 animate-[kw-blink_1.4s_ease-in-out_infinite]"
              />
              <span className="text-[0.625rem] text-white/40">4 workspaces · live</span>
            </div>
          </div>
          <div className="flex items-center gap-2 footer-glass-panel rounded-lg px-3 py-1.5 min-w-0">
            <span className="text-xs text-white/30 flex-1 min-w-0 truncate">Ask anything…</span>
            <kbd className="shrink-0 px-1.5 py-0.5 rounded bg-white/8 border border-white/10 font-mono text-[0.625rem] text-white/40">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4">
          {/* left — event log */}
          <div className="footer-glass-panel rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[0.6875rem] text-white/50">tail -f /portal</span>
              <span className="text-[0.625rem] uppercase tracking-widest text-white/30">events · today</span>
            </div>
            <div>
              {events.map((ev, i) => (
                <EventRow key={i} {...ev} delay={i * 85} />
              ))}
            </div>
            <AgentNudge />
          </div>

          {/* right — sidebar */}
          <div className="flex flex-col gap-3">
            {/* this week */}
            <div className="footer-glass-panel rounded-2xl p-4">
              <p className="text-[0.625rem] uppercase tracking-widest text-white/30 mb-2">This week</p>
              <MetricRow label="Sign-offs"   value="+3"    tone="success" />
              <MetricRow label="Open items"  value="−2"    tone="success" />
              <MetricRow label="Reply time"  value="1.2h"  tone="neutral" />
            </div>

            {/* live API ping */}
            <div className="footer-glass-panel rounded-2xl p-4">
              <StatusPing />
            </div>

            {/* integrations */}
            <div className="footer-glass-panel rounded-2xl p-4">
              <p className="text-[0.625rem] uppercase tracking-widest text-white/30 mb-2.5">Integrations</p>
              <div className="flex flex-wrap gap-2">
                {['Slack', 'Stripe', 'Loom', 'Drive'].map((name) => (
                  <span
                    key={name}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* reply time big stat */}
            <div className="footer-glass-panel rounded-2xl p-4 flex-1">
              <p className="text-[0.625rem] uppercase tracking-widest text-white/30 mb-1">Reply time</p>
              <p className="text-3xl font-bold text-white/90 leading-none">1.2h</p>
              <p className="mt-1 text-xs text-green-400 font-semibold">↓ 36%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
