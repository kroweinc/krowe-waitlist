import { cn } from "../../../lib/utils"

const stats = [
    { label: "Comments", count: "3", highlight: true },
    { label: "Deliverables", count: "2", highlight: false },
    { label: "Decisions", count: "5", highlight: false },
    { label: "Files", count: "14", highlight: false },
] as const

export function KroweStepPreview() {
    return (
        <>
            <div className="bg-secondary/80 rounded-xl p-4 border border-border/60">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Workspace
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden />
                        <span>live</span>
                        <span className="sr-only">Workspace is live</span>
                    </span>
                </div>
                <ul className="space-y-1">
                    {stats.map((row) => (
                        <li
                            key={row.label}
                            className={cn(
                                "flex items-center justify-between rounded-lg px-3 py-2 text-sm",
                                row.highlight ? "bg-primary/10" : "",
                            )}
                        >
                            <span
                                className={cn(
                                    "font-medium",
                                    row.highlight ? "text-foreground" : "text-muted-foreground",
                                )}
                            >
                                {row.label}
                            </span>
                            <span
                                className={cn(
                                    "text-xs font-bold tabular-nums",
                                    row.highlight
                                        ? "flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-primary-foreground px-1.5"
                                        : "text-muted-foreground",
                                )}
                            >
                                {row.count}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="text-primary" aria-hidden>
                    ✱
                </span>
                Linked to <span className="font-semibold text-foreground">Brand Kit v2</span>
            </p>
        </>
    )
}

export function KroweStepAvatar() {
    return (
        <span className="flex h-8 w-8 shrink-0 rounded-full overflow-hidden">
            <img src="/KroweSocialicon.png" alt="" className="h-full w-full object-cover" />
        </span>
    )
}
