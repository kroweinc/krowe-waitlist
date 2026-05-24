import { clientProgress } from "./whyKroweContent"

export function ClientProgressCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Where everyone stands
      </p>
      <ul className="space-y-3">
        {clientProgress.map((row) => (
          <li key={row.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{row.name}</span>
              <span className="text-muted-foreground">{row.percent}%</span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-valuenow={row.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${row.name} progress`}
            >
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${row.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
