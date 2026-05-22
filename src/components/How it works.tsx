import { Sparkles, ChevronRight } from "lucide-react"
import { DashboardCard } from "./dashboard-card"

export default function Features() {
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h4 className="text-primary text-xs font-extrabold tracking-[0.3em] uppercase mb-4">How it works</h4>
                <h1 className="font-serif text-foreground text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                    Bring every client into <span className="text-primary">one workspace.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Clients upload, comment, and sign off. Operators deliver — all in one place.
                </p>
            </div>

            <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                {/* Mobile layout */}
                <div className="flex flex-col md:hidden">
                    {/* Left panel mobile */}
                    <div className="p-5 border-b border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Client Uploads</span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">4 active</span>
                        </div>
                        <ClientCards />
                        <p className="text-xs text-muted-foreground mt-4 text-center">+ 2 more workspaces pending setup</p>
                    </div>
                    {/* Center mobile */}
                    <div className="flex items-center justify-center gap-3 py-4 bg-secondary/30 border-b border-border">
                        <span className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1 text-xs font-semibold">
                            <Sparkles className="w-3 h-3 text-primary" />
                            Krowe
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    {/* Right panel mobile */}
                    <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Workspace</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                        </div>
                        <OperatorCards />
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-12 min-h-[560px]">
                    {/* Left column */}
                    <div className="col-span-5 p-6 border-r border-border flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Client Uploads</span>
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">4 active</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <ClientCards />
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 text-center">+ 2 more workspaces pending setup</p>
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
                                Krowe
                            </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Right column */}
                    <div className="col-span-5 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Workspace</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <OperatorCards />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function ClientCards() {
    return (
        <>
            <DashboardCard
                type="clientWorkspace"
                data={{ subtitle: "Acme Co.", detail: "Active · 3 open items" }}
                className="w-full"
            />
            <DashboardCard
                type="clientWorkspace"
                data={{ subtitle: "Ridge Media", detail: "Onboarding · 1 deliverable pending" }}
                className="w-full"
            />
            <DashboardCard
                type="clientWorkspace"
                data={{ subtitle: "FounderOS", detail: "Active · Awaiting sign-off" }}
                className="w-full"
            />
        </>
    )
}

function OperatorCards() {
    return (
        <>
            <DashboardCard
                type="delivery"
                data={{ subtitle: "Brand Kit v2", detail: "Due in 3 days · Acme Co." }}
                className="w-full"
            />
            <DashboardCard
                type="comments"
                data={{
                    subtitle: '"The revised scope looks great — ready to proceed."',
                    detail: "— Marcus, Ridge Media · 2 hrs ago",
                    count: "3",
                }}
                className="w-full"
            />
            <DashboardCard
                type="activity"
                data={{
                    items: ["Approved scope · Acme Co.", "Sent draft v2 · Ridge Media", "Replied to Sarah · FounderOS"],
                }}
                className="w-full"
            />
        </>
    )
}
