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

export function DashboardCard({ type, className, showLabel = false, label }: DashboardCardProps) {
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

    return (
        <div className="flex flex-col gap-1.5">
            {showLabel && (
                <span className="text-xs uppercase tracking-wider text-muted-foreground pl-1">
                    {label || content.defaultLabel}
                </span>
            )}
            <div
                className={cn(
                    "w-56 bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300",
                    className,
                )}
            >
                {type === "streak" && (
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg", content.bg)}>
                            <Icon className={cn("w-5 h-5", content.accent)} />
                        </div>
                        <div>
                            <p className="font-semibold text-card-foreground">{content.title}</p>
                            <p className="text-sm text-muted-foreground">{content.subtitle}</p>
                        </div>
                    </div>
                )}

                {type === "tasks" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
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
                                <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                            </div>
                            <span className="text-sm font-medium text-primary">{content.progress}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
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
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-lg font-semibold text-foreground">{content.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "feasibility" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-3xl font-bold text-primary">{content.score}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "milestone" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-lg font-semibold text-foreground">{content.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "competitor" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-3xl font-bold text-foreground">{content.count}</p>
                        <p className="text-sm text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "topProblem" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-sm font-semibold text-foreground leading-snug">{content.subtitle}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                            <span className="font-bold text-primary">{content.count}x</span> {content.detail}
                        </p>
                    </div>
                )}

                {type === "keyQuote" && (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <div className="bg-secondary/60 rounded-lg px-3 py-2 mb-2">
                            <p className="text-xs italic text-foreground leading-snug">{content.subtitle}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "metaThemes" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
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
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <ul className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
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
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <p className="text-sm font-semibold text-foreground mb-2">{content.subtitle}</p>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">Confidence</span>
                            <span className="text-xs font-medium text-primary">{content.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-2">
                            <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${content.progress}%` }}
                            />
                        </div>
                        <p className="text-xs text-muted-foreground">{content.detail}</p>
                    </div>
                )}

                {type === "userFlow" && (
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-primary" />
                            <p className="font-semibold text-card-foreground text-sm">{content.title}</p>
                        </div>
                        <ol className="space-y-2">
                            {content.items?.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
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
