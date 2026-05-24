import { FileText } from "lucide-react"

export function ClientStepPreview() {
    return (
        <>
            <div className="bg-secondary/80 rounded-xl p-4 border border-border/60">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foreground">Marcus, Ridge Media</span>
                    <span className="text-[10px] text-muted-foreground">9:38 am</span>
                </div>
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-3">
                    Adding the brand brief — also, can we tighten the intro?
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-background border border-border px-3 py-2">
                    <FileText className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span className="text-xs font-medium text-foreground">brand-brief.pdf</span>
                </div>
            </div>

            <div className="bg-secondary/80 rounded-xl p-4 border border-border/60">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foreground">Sarah, FounderOS</span>
                    <span className="text-[10px] text-muted-foreground">9:24 am</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    Approved the logo set <span className="text-foreground font-medium">✓</span>
                </p>
            </div>
        </>
    )
}

export function ClientStepAvatar() {
    return (
        <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white"
            aria-hidden
        >
            M
        </span>
    )
}
