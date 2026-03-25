"use client"

import { cn } from "../lib/utils"
import { CheckCircle2, Flame, Target, BarChart3, Users, Calendar, Trophy, AlertTriangle, Quote, Layers, Shield, FileCode, GitBranch } from "lucide-react"

type CardType = "streak" | "tasks" | "progress" | "section" | "feasibility" | "milestone" | "competitor"
  | "topProblem" | "keyQuote" | "metaThemes" | "edgeCases" | "featureSpecs" | "userFlow"

interface DashboardCardProps {
    type: CardType
    className?: string
    showLabel?: boolean
    label?: string
    /** Dark frosted cards for footer / dark sections */
    variant?: "default" | "dark"
}

interface CardContentData {
    icon: typeof Flame
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

export function DashboardCard({ type, className, showLabel = false, label, variant = "default" }: DashboardCardProps) {
    const cardContent: Record<CardType, CardContentData> = {
        streak: {
            icon: Flame,
            title: "7 Day Streak",
            subtitle: "You're on fire!",
            accent: "text-primary",
            bg: "bg-primary/10",
            defaultLabel: "Streak",
        },
        tasks: {
            icon: CheckCircle2,
            title: "Today's Focus",
            items: ["Research competitors", "Define MVP scope", "Draft landing copy"],
            defaultLabel: "Top Tasks",
        },
        progress: {
            icon: BarChart3,
            title: "Week 2 Progress",
            progress: 65,
            defaultLabel: "Progress",
        },
        section: {
            icon: Target,
            title: "Current Phase",
            subtitle: "Validation",
            detail: "3 of 5 tasks complete",
            defaultLabel: "Current Section",
        },
        feasibility: {
            icon: Trophy,
            title: "Feasibility Score",
            score: "8.2",
            detail: "High potential",
            defaultLabel: "Feasibility",
        },
        milestone: {
            icon: Calendar,
            title: "Next Milestone",
            subtitle: "MVP Launch",
            detail: "In 3 weeks",
            defaultLabel: "Milestone",
        },
        competitor: {
            icon: Users,
            title: "Competitors Found",
            count: "4",
            detail: "2 direct, 2 indirect",
            defaultLabel: "Competitors",
        },
        topProblem: {
            icon: AlertTriangle,
            title: "Top Problem",
            subtitle: "Onboarding drop-off after step 2",
            count: "11",
            detail: "across 14 interviews",
            defaultLabel: "Top Problem",
        },
        keyQuote: {
            icon: Quote,
            title: "Key Quote",
            subtitle: '"I gave up when it asked me to connect my calendar."',
            detail: "— Sarah, YC Founder",
            defaultLabel: "Key Quote",
        },
        metaThemes: {
            icon: Layers,
            title: "Meta Themes",
            items: ["Setup friction too high", "Value unclear pre-activation", "Mobile UX lagging desktop"],
            defaultLabel: "Meta Themes",
        },
        edgeCases: {
            icon: Shield,
            title: "Edge Cases Found",
            items: ["Offline-first workflows break sync", "Multi-seat orgs hit permission walls", "SSO bypass on trial accounts"],
            defaultLabel: "Edge Cases",
        },
        featureSpecs: {
            icon: FileCode,
            title: "Feature Specs",
            subtitle: "Smart Onboarding Wizard",
            progress: 82,
            detail: "High priority · Medium complexity",
            defaultLabel: "Feature Specs",
        },
        userFlow: {
            icon: GitBranch,
            title: "User Flow",
            items: ["Upload interview transcript", "AI extracts themes & quotes", "Export spec to Notion or Jira"],
            defaultLabel: "User Flow",
        },
    }

    const content = cardContent[type]
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
                {type === "streak" && (
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg", content.bg)}>
                            <Icon className={cn("w-5 h-5", content.accent)} />
                        </div>
                        <div>
                            <p className={cn("font-semibold", tf)}>{content.title}</p>
                            <p className={cn("text-sm", tm)}>{content.subtitle}</p>
                        </div>
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

                {type === "section" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-lg font-semibold", tb)}>{content.subtitle}</p>
                        <p className={cn("text-sm", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "feasibility" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className="text-3xl font-bold text-primary">{content.score}</p>
                        <p className={cn("text-sm", tm)}>{content.detail}</p>
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

                {type === "competitor" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-3xl font-bold", tb)}>{content.count}</p>
                        <p className={cn("text-sm", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "topProblem" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-sm font-semibold leading-snug", tb)}>{content.subtitle}</p>
                        <p className={cn("text-xs mt-1", tm)}>
                            <span className="font-bold text-primary">{content.count}x</span> {content.detail}
                        </p>
                    </div>
                )}

                {type === "keyQuote" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <div className={cn("rounded-lg px-3 py-2 mb-2", quoteBg)}>
                            <p className={cn("text-xs italic leading-snug", tb)}>{content.subtitle}</p>
                        </div>
                        <p className={cn("text-xs", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "metaThemes" && (
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

                {type === "edgeCases" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-amber-500" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className={cn("flex items-center gap-2 text-xs", tm)}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/70 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {type === "featureSpecs" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <p className={cn("text-sm font-semibold mb-2", tb)}>{content.subtitle}</p>
                        <div className="flex items-center justify-between mb-1">
                            <span className={cn("text-xs", tm)}>Confidence</span>
                            <span className="text-xs font-medium text-primary">{content.progress}%</span>
                        </div>
                        <div className={cn("h-1.5 rounded-full overflow-hidden mb-2", track)}>
                            <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${content.progress}%` }}
                            />
                        </div>
                        <p className={cn("text-xs", tm)}>{content.detail}</p>
                    </div>
                )}

                {type === "userFlow" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className={cn("font-semibold text-sm", tf)}>{content.title}</p>
                        </div>
                        <ol className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className={cn("flex items-start gap-2 text-xs", tm)}>
                                    <span className="w-4 h-4 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[10px]">
                                        {i + 1}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    )
}
