import { AlertTriangle, Quote, Layers, Sparkles, ChevronRight } from "lucide-react"

export default function Features() {
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h4 className="text-primary text-xs font-extrabold tracking-[0.3em] uppercase mb-4">How it works</h4>
                <h1 className="font-serif text-foreground text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                    Turn <span className="text-primary">user insights</span> into product decisions.
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Upload your customer interviews. Krowe extracts what matters.
                </p>
            </div>

            <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                {/* Mobile layout */}
                <div className="flex flex-col md:hidden">
                    {/* Left panel mobile */}
                    <div className="p-5 border-b border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Customer Interviews</span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">12 uploaded</span>
                        </div>
                        <TranscriptCards />
                        <p className="text-xs text-muted-foreground mt-4 text-center">+ 9 more interviews processed</p>
                    </div>
                    {/* Center mobile */}
                    <div className="flex items-center justify-center gap-3 py-4 bg-secondary/30 border-b border-border">
                        <span className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1 text-xs font-semibold">
                            <Sparkles className="w-3 h-3 text-primary" />
                            Krowe AI
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    {/* Right panel mobile */}
                    <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Insights Generated</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                        </div>
                        <InsightCards />
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-12 min-h-[560px]">
                    {/* Left column */}
                    <div className="col-span-5 p-6 border-r border-border flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Customer Interviews</span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">12 uploaded</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <TranscriptCards />
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 text-center">+ 9 more interviews processed</p>
                    </div>

                    {/* Center divider */}
                    <div className="col-span-2 bg-secondary/30 border-r border-border flex flex-col items-center justify-center gap-4">
                        <div className="relative flex flex-col items-center pt-3">
                            <div className="absolute -top-0.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "200ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "400ms" }} />
                            </div>
                            <span className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm">
                                <Sparkles className="w-3 h-3 text-primary" />
                                Krowe AI
                            </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Right column */}
                    <div className="col-span-5 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Insights Generated</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <InsightCards />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function TranscriptCards() {
    return (
        <>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-foreground">Sarah K.</span>
                    <span className="bg-secondary text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">YC Founder</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    "...I gave up when it asked me to{" "}
                    <span className="bg-primary/10 text-primary rounded px-0.5">connect my calendar</span>
                    ..."
                </p>
                <p className="text-[10px] text-muted-foreground/60">Interview · 24 min</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-foreground">Marcus T.</span>
                    <span className="bg-secondary text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">B2B Founder</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    "...The setup took forever and{" "}
                    <span className="bg-primary/10 text-primary rounded px-0.5">I never saw the value</span>
                    ..."
                </p>
                <p className="text-[10px] text-muted-foreground/60">Interview · 18 min</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-foreground">Priya M.</span>
                    <span className="bg-secondary text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">Indie Hacker</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    "...Works great on desktop but{" "}
                    <span className="bg-primary/10 text-primary rounded px-0.5">mobile is unusable</span>
                    ..."
                </p>
                <p className="text-[10px] text-muted-foreground/60">Interview · 31 min</p>
            </div>
        </>
    )
}

function InsightCards() {
    return (
        <>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Top Problem</span>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">Onboarding drop-off after step 2</p>
                <p className="text-[10px] text-muted-foreground">Mentioned 11x across 14 interviews</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <Quote className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key Quote</span>
                </div>
                <p className="text-xs italic text-foreground leading-relaxed mb-2">
                    "I knew what it did, I just couldn't get started."
                </p>
                <p className="text-[10px] text-muted-foreground">— Sarah, YC Founder</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Meta Themes</span>
                </div>
                <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 text-xs text-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        Friction in first-run experience
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        Unclear value before commitment
                    </li>
                    <li className="flex items-center gap-2 text-xs text-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        Mobile experience gaps
                    </li>
                </ul>
            </div>
        </>
    )
}
