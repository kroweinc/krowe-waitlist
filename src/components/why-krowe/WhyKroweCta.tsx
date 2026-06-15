import { Button } from "../ui/button"
import { ctaCopy } from "./whyKroweContent"

const PORTAL_SIGNUP_URL = "https://krowehub.com/signup"

export function WhyKroweCta() {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center md:p-8">
      <div>
        <h3 className="font-serif text-xl tracking-tight text-foreground md:text-2xl">{ctaCopy.headline}</h3>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">{ctaCopy.subtext}</p>
      </div>
      <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Button
          asChild
          className="rounded-lg bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <a href={PORTAL_SIGNUP_URL}>{ctaCopy.primaryLabel}</a>
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="font-medium text-muted-foreground hover:text-foreground"
        >
          {ctaCopy.secondaryLabel}
        </Button>
      </div>
    </div>
  )
}
