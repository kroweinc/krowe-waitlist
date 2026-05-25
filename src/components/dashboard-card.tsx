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
    sparkline?: number[]
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
        detail: "Active",
        defaultLabel: "Client",
        items: ["Brand Kit v2 review", "Logo approval"],
        progress: 65,
    },
    delivery: {
        icon: Package,
        title: "Deliverable",
        subtitle: "Brand Kit v2",
        detail: "Due in 3 days",
        defaultLabel: "Delivery",
        items: ["Draft complete", "Awaiting approval"],
        progress: 87,
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
        progress: 65,
        sparkline: [10, 22, 18, 35, 42, 38, 55, 62, 65],
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
                {type === "clientWorkspace" && (() => {
                    const initials = (content.subtitle ?? "")
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                    const pct = content.progress ?? 0
                    return (
                        <div className="flex flex-col h-full gap-2.5">
                            {/* header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Icon className="w-4 h-4 text-primary" />
                                    <p className={cn("font-semibold text-xs", tf)}>{content.title}</p>
                                </div>
                                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/15 text-[0.625rem] font-semibold text-green-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    {content.detail}
                                </span>
                            </div>

                            {/* client identity */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-primary">{initials}</span>
                                </div>
                                <div>
                                    <p className={cn("text-sm font-semibold leading-tight", tb)}>{content.subtitle}</p>
                                    <p className={cn("text-[0.625rem]", tm)}>{content.items?.length ?? 0} open items</p>
                                </div>
                            </div>

                            {/* open items */}
                            <ul className="flex-1 space-y-1.5">
                                {content.items?.map((item, i) => (
                                    <li key={i} className={cn("flex items-center gap-2 text-[0.6875rem]", tm)}>
                                        <div className="w-3 h-3 rounded border border-current opacity-40 shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* progress */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className={cn("text-[0.625rem]", tm)}>Overall progress</span>
                                    <span className="text-[0.625rem] font-semibold text-primary">{pct}%</span>
                                </div>
                                <div className={cn("w-full h-1 rounded-full", track)}>
                                    <div
                                        className="h-full rounded-full bg-primary"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })()}

                {type === "delivery" && (() => {
                    const pct = content.progress ?? 0
                    const stages = content.items ?? []
                    const doneCount = Math.round((pct / 100) * stages.length)
                    return (
                        <div className="flex flex-col h-full gap-2.5">
                            {/* header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Icon className="w-4 h-4 text-primary" />
                                    <p className={cn("font-semibold text-xs", tf)}>{content.title}</p>
                                </div>
                                <span className="text-[0.625rem] font-semibold text-amber-400 bg-amber-400/10 rounded-full px-1.5 py-0.5">
                                    Due soon
                                </span>
                            </div>

                            {/* deliverable identity */}
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className={cn("text-sm font-semibold leading-tight", tb)}>{content.subtitle}</p>
                                    <p className={cn("text-[0.625rem]", tm)}>{content.detail}</p>
                                </div>
                            </div>

                            {/* stages */}
                            <ul className="flex-1 space-y-1.5">
                                {stages.map((stage, i) => {
                                    const done = i < doneCount
                                    return (
                                        <li key={i} className="flex items-center gap-2 text-[0.6875rem]">
                                            {done
                                                ? <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                                                : <div className={cn("w-3 h-3 rounded-full border border-current opacity-40 shrink-0", tm)} />
                                            }
                                            <span className={cn(done ? "line-through opacity-50" : "", done ? "text-primary" : tm)}>{stage}</span>
                                        </li>
                                    )
                                })}
                            </ul>

                            {/* progress bar */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className={cn("text-[0.625rem]", tm)}>Completion</span>
                                    <span className="text-[0.625rem] font-semibold text-primary">{pct}%</span>
                                </div>
                                <div className={cn("w-full h-1 rounded-full", track)}>
                                    <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                                </div>
                            </div>
                        </div>
                    )
                })()}

                {type === "comments" && (
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                            </div>
                            {content.count && (
                                <span className="text-[0.625rem] font-bold text-primary bg-primary/10 rounded-full px-1.5 py-0.5">
                                    {content.count} new
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col mt-4 mb-auto">
                            <div className={cn("rounded-lg px-3 py-2", quoteBg)}>
                                <p className={cn("text-xs italic leading-snug", tb)}>{content.subtitle}</p>
                            </div>
                            <p className={cn("text-xs mt-4", tm)}>{content.detail}</p>
                        </div>
                    </div>
                )}

                {type === "activity" && (
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ul className="space-y-2 my-auto">
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
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ul className="space-y-2 my-auto">
                            {content.items?.map((item, i) => (
                                <li key={i} className={cn("flex items-center gap-2 text-sm", tm)}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === "progress" && (() => {
                    const pct = content.progress ?? 0
                    const r = 32
                    const circ = 2 * Math.PI * r
                    const dash = (pct / 100) * circ
                    return (
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                            </div>
                            <div className="flex justify-center items-center my-auto">
                                <svg className="w-3/5" viewBox="0 0 100 100">
                                    <circle
                                        cx="50" cy="50" r={r}
                                        fill="none"
                                        className={dark ? "stroke-white/10" : "stroke-secondary"}
                                        strokeWidth="8"
                                    />
                                    <circle
                                        cx="50" cy="50" r={r}
                                        fill="none"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray={`${dash} ${circ}`}
                                        strokeDashoffset={circ / 4}
                                        style={{ transition: "stroke-dasharray 0.5s ease" }}
                                    />
                                    <text
                                        x="50" y="50"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="hsl(var(--primary))"
                                        style={{ fontSize: "18px", fontWeight: 700 }}
                                    >
                                        {pct}%
                                    </text>
                                </svg>
                            </div>
                        </div>
                    )
                })()}

                {type === "milestone" && (() => {
                    const pts = content.sparkline ?? []
                    const pct = content.progress ?? 0
                    const W = 176, H = 36, pad = 2
                    const min = Math.min(...pts)
                    const max = Math.max(...pts)
                    const range = max - min || 1
                    const points = pts.map((v, i) => {
                        const x = pad + (i / (pts.length - 1)) * (W - pad * 2)
                        const y = H - pad - ((v - min) / range) * (H - pad * 2)
                        return `${x},${y}`
                    }).join(" ")
                    const lastX = W - pad
                    const lastY = H - pad - ((pts[pts.length - 1] - min) / range) * (H - pad * 2)
                    return (
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="w-4 h-4 text-primary" />
                                <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                            </div>
                            <div className="mt-auto mb-3">
                                <p className={cn("text-lg font-semibold", tb)}>{content.subtitle}</p>
                                <p className={cn("text-sm", tm)}>{content.detail}</p>
                            </div>
                            {pts.length > 1 && (
                                <div className="mt-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={cn("text-[0.625rem]", tm)}>Progress</span>
                                        <span className="text-[0.625rem] font-semibold text-primary">{pct}%</span>
                                    </div>
                                    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible">
                                        <defs>
                                            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                                                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <polyline
                                            points={`${points} ${lastX},${H - pad} ${pad},${H - pad}`}
                                            fill="url(#sparkFill)"
                                            stroke="none"
                                        />
                                        <polyline
                                            points={points}
                                            fill="none"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx={lastX} cy={lastY} r="2.5" fill="hsl(var(--primary))" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    )
                })()}
            </div>
        </div>
    )
}
