import { Sparkles } from "lucide-react"
import { cn } from "../../lib/utils"
import { featuredWorkspace } from "./whyKroweContent"

function Avatar({ initial, className }: { initial: string; className: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
        className,
      )}
      aria-hidden
    >
      {initial}
    </span>
  )
}

export function FeaturedWorkspaceCard() {
  const { eyebrow, title, avatars, stats, activities, nudge } = featuredWorkspace

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h3 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">{title}</h3>
        </div>
        <div className="flex -space-x-2" aria-hidden>
          {avatars.map((a) => (
            <Avatar key={a.initial} initial={a.initial} className={a.className} />
          ))}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 border-b border-border pb-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
            <p
              className={cn(
                "font-serif text-2xl md:text-3xl",
                stat.highlight ? "text-primary" : "text-foreground",
              )}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <ul className="mb-6 flex-1 space-y-4">
        {activities.map((item) => (
          <li key={`${item.initial}-${item.time}`} className="flex gap-3">
            <Avatar initial={item.initial} className={item.avatarClass} />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{item.initial}</span> {item.actionPrefix}{" "}
                <span className="font-medium text-foreground">{item.actionTarget}</span>
                {item.badge && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
                    {item.badge}
                  </span>
                )}
              </p>
              {item.quote && (
                <p className="mt-1 text-sm italic text-foreground/80">{item.quote}</p>
              )}
              <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 rounded-xl border border-primary/10 bg-primary/5 p-4">
        <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <p className="text-sm leading-relaxed text-muted-foreground">{nudge}</p>
      </div>
    </div>
  )
}
