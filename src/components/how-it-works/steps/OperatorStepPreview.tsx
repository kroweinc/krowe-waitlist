export function OperatorStepPreview() {
    return (
        <>
            <div className="bg-secondary/80 rounded-xl p-4 border border-border/60">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foreground">You · 2 min ago</span>
                    <span className="flex items-center gap-1.5 text-[0.625rem] font-bold text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden />
                        <span>Delivered</span>
                        <span className="sr-only">Status: Delivered</span>
                    </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    Sent draft v2 to Ridge Media
                </p>
            </div>

            <div className="bg-secondary/80 rounded-xl p-4 border border-border/60">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foreground">Up next</span>
                    <span className="text-[0.625rem] text-muted-foreground">today</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Review Acme deliverable
                    </p>
                    <span className="flex shrink-0 items-center gap-1.5 text-[0.625rem] font-bold text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
                        <span>On deck</span>
                        <span className="sr-only">Status: On deck</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export function OperatorStepAvatar() {
    return (
        <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[0.625rem] font-bold text-primary"
            aria-hidden
        >
            You
        </span>
    )
}
