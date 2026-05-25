import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface HowItWorksStepCardProps {
    step: string
    avatar: ReactNode
    roleLabel: string
    roleClassName?: string
    title: string
    description: string
    children: ReactNode
    className?: string
}

export function HowItWorksStepCard({
    step,
    avatar,
    roleLabel,
    roleClassName,
    title,
    description,
    children,
    className,
}: HowItWorksStepCardProps) {
    return (
        <article
            className={cn(
                "relative z-10 flex flex-col gap-4 bg-card border border-border rounded-2xl shadow-soft p-6 md:p-8 h-full",
                className,
            )}
        >
            <p className="text-[0.625rem] font-mono uppercase tracking-widest text-muted-foreground">
                STEP {step}
            </p>

            <div className="flex items-center gap-2.5">
                {avatar}
                <span
                    className={cn(
                        "text-[0.625rem] font-bold uppercase tracking-widest",
                        roleClassName ?? "text-primary",
                    )}
                >
                    {roleLabel}
                </span>
            </div>

            <div>
                <h3 className="font-serif text-foreground text-2xl md:text-3xl tracking-tight leading-tight mb-2">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-col gap-3 mt-1">{children}</div>
        </article>
    )
}
