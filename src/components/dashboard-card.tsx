"use client"

import { cn } from "../lib/utils"
import { CheckCircle2, BarChart3, Calendar, Briefcase, Package, MessageSquare, Activity } from "lucide-react"

type CardType = "clientWorkspace" | "delivery" | "comments" | "activity" | "tasks" | "progress" | "milestone"

interface CardContentData {
    icon: typeof Activity
    title: string
    subtitle?: string
    accent?: string
    bg?: string
    defaultLabel: string
    items?: string[]
    progress?: number
    detail?: string
    score?: string
    count?: string
}

interface DashboardCardProps {
    type: CardType
    data?: Partial<CardContentData>
    className?: string
    showLabel?: boolean
    label?: string
    variant?: "default" | "dark"
}

const defaults: Record<CardType, CardContentData> = {
    clientWorkspace: {
        icon: Briefcase,
        title: "Client Workspace",
        subtitle: "Acme Co.",
        detail: "Active · 3 open items",
        defaultLabel: "Client",
    },
    delivery: {
        icon: Package,
        title: "Deliverable",
        subtitle: "Brand Kit v2",
        detail: "Due in 3 days",
        defaultLabel: "Delivery",
    },
    comments: {
        icon: MessageSquare,
        title: "Comments",
        subtitle: '"Can we tighten the intro section?"',
        detail: "— Jordan, 2 hrs ago",
        count: "3",
        defaultLabel: "Comments",
    },
    activity: {
        icon: Activity,
        title: "Recent Activity",
        items: ["Approved scope · Acme Co.", "Sent draft v2 · Ridge Media", "Replied to Sarah · FounderOS"],
        defaultLabel: "Activity",
    },
    tasks: {
        icon: CheckCircle2,
        title: "Today's Focus",
        items: ["Review Acme deliverable", "Send proposal to Ridge", "Schedule kickoff call"],
        defaultLabel: "Top Tasks",
    },
    progress: {
        icon: BarChart3,
        title: "Overall Progress",
        progress: 72,
        defaultLabel: "Progress",
    },
    milestone: {
        icon: Calendar,
        title: "Next Milestone",
        subtitle: "Phase 2 Launch",
        detail: "In 2 weeks",
        defaultLabel: "Milestone",
    },
}

export function DashboardCard({ type, data, className, showLabel = false, label, variant = "default" }: DashboardCardProps) {
    const content: CardContentData = { ...defaults[type], ...data }
    const Icon = content.icon
    const dark = variant === "dark"
    const tf = dark ? "text-zinc-100" : "text-card-foreground"
    const tm = dark ? "text-zinc-400" : "text-muted-foreground"
    const tb = dark ? "text-zinc-200" : "text-foreground"
    const track = dark ? "bg-white/10" : "bg-secondary"
    const quoteBg = dark ? "bg-white/10" : "bg-secondary/60"

    return (
        <div className="flex flex-col gap-1.5">
            {showLabel && (
                <span className={cn("text-xs uppercase tracking-wider pl-1", tm)}>
                    {label || content.defaultLabel}
                </span>
            )}
            <div
                className={cn(
                    "w-56 rounded-xl border p-4 shadow-lg hover:shadow-xl transition-all duration-300",
                    dark
                        ? "bg-white/[0.07] border-white/10 shadow-black/20 hover:border-primary/35"
                        : "bg-card border-border hover:border-primary/20",
                    className,
                )}
            >
                {type === "clientWorkspace" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-lg font-semibold", tb)}>{content.subtitle}</p>
                        <p className={cn("text-sm mt-1", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "delivery" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-sm font-semibold leading-snug", tb)}>{content.subtitle}</p>
                        <p className={cn("text-xs mt-1", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "comments" && (
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                            </div>
                            {content.count && (
                                <span className="text-[10px] font-bold text-primary bg-primary/10 rounded-full px-1.5 py-0.5">
                                    {content.count} new
                                </span>
                            )}
                        </div>
                        <div className={cn("rounded-lg px-3 py-2 mb-2", quoteBg)}>
                            <p className={cn("text-xs italic leading-snug", tb)}>{content.subtitle}</p>
                        </div>
                        <p className={cn("text-xs", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "activity" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className={cn("flex items-center gap-2 text-xs", tm)}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === "tasks" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className={cn("flex items-center gap-2 text-sm", tm)}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === "progress" && (
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                            </div>
                            <span className="text-sm font-medium text-primary">{content.progress}%</span>
                        </div>
                        <div className={cn("h-2 rounded-full overflow-hidden", track)}>
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: `${content.progress}%` }}
                            />
                        </div>
                    </div>
                )}

                {type === "milestone" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-lg font-semibold", tb)}>{content.subtitle}</p>
                        <p className={cn("text-sm", tm)}>{content.detail}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
