import { cn } from "../../lib/utils"

type ClientStatusCardProps = {
  client: string
  badge: string
  badgeClass: string
  quote: string
  footer: string
}

export function ClientStatusCard({ client, badge, badgeClass, quote, footer }: ClientStatusCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h4 className="font-serif text-lg text-foreground">{client}</h4>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide",
            badgeClass,
          )}
        >
          {badge}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{quote}</p>
      <p className="mt-3 text-xs text-muted-foreground">{footer}</p>
    </div>
  )
}
