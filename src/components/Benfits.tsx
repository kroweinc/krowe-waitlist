"use client"

import { useState, useCallback } from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"
import { DashboardCard } from "./dashboard-card"

const statusOptions = {
    onTrack: {
        label: "On Track",
        badge: "Running Smoothly",
        badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        explanation: "Active clients are progressing on schedule. All deliverables have been acknowledged.",
        reasons: [
            "3 of 4 clients responded within 24 hrs",
            "No overdue items across active workspaces",
            "Next milestone confirmed for all accounts",
        ],
    },
    atRisk: {
        label: "At Risk",
        badge: "Needs Attention",
        badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        explanation: "One or more clients have open comments or overdue deliverables that need a follow-up.",
        reasons: [
            "Ridge Media has 2 unanswered comments",
            "Acme Co. deliverable is 3 days overdue",
            "FounderOS kickoff hasn't been scheduled",
        ],
    },
    completed: {
        label: "Delivered",
        badge: "Signed Off",
        badgeColor: "bg-primary/10 text-primary border-primary/20",
        explanation: "Scope completed and signed off. Client approved the final deliverable.",
        reasons: [
            "Final assets uploaded and acknowledged",
            "Client left a 5-star review",
            "Invoice marked paid",
        ],
    },
}

const tabs = ["Activity", "Delivery", "Conversations"] as const
type TabType = (typeof tabs)[number]

interface DecisionConsoleBenefitsProps {
  onJoinWaitlist?: () => void
}

export default function DecisionConsoleBenefits({ onJoinWaitlist }: DecisionConsoleBenefitsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("Activity")
    const [statusChoice, setStatusChoice] = useState<"onTrack" | "atRisk" | "completed">("onTrack")
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleTabChange = useCallback(
        (tab: TabType) => {
            if (tab === activeTab) return
            setIsTransitioning(true)
            setTimeout(() => {
                setActiveTab(tab)
                setIsTransitioning(false)
            }, 150)
        },
        [activeTab],
    )

    const handleStatusChange = useCallback((choice: "onTrack" | "atRisk" | "completed") => {
        setStatusChoice(choice)
    }, [])

    const currentStatus = statusOptions[statusChoice]

    return (
        <section id="benefits" className="w-full py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block text-xs font-extrabold tracking-[0.3em] uppercase text-primary mb-4">
                        Why Krowe
                    </span>
                    <h2 className="font-serif text-foreground text-4xl md:text-6xl tracking-tight leading-[1.1] text-balance mb-4">
                        One workspace for every client relationship.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Krowe keeps your delivery, conversations, and client context all in one place — so nothing falls through the cracks.
                    </p>
                </div>

                {/* Console Card */}
                <div className="bg-card border border-border rounded-3xl shadow-lg shadow-black/5 overflow-hidden">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-gray-100">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="text-sm font-medium text-foreground font-serif">Krowe Portal</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                        </span>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-border">
                        <div className="flex justify-center">
                            <div className="inline-flex" role="tablist" aria-label="Portal sections">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        role="tab"
                                        aria-selected={activeTab === tab}
                                        aria-controls={`panel-${tab}`}
                                        onClick={() => handleTabChange(tab)}
                                        className={cn(
                                            "relative px-6 py-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-serif",
                                            activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                                        )}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div
                        className={cn(
                            "p-6 md:p-8 min-h-[400px] transition-all duration-150",
                            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
                        )}
                    >
                        {/* Activity Tab */}
                        {activeTab === "Activity" && (
                            <div id="panel-Activity" role="tabpanel" aria-labelledby="tab-Activity">
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground font-serif">
                                        4 active client workspaces
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 border border-border rounded-full px-2.5 py-1 font-serif">
                                        Updated just now
                                    </span>
                                </div>

                                {/* Activity card (full-width) */}
                                <div className="mb-4">
                                    <DashboardCard
                                        type="activity"
                                        className="w-full"
                                    />
                                </div>

                                {/* Two-column row */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <DashboardCard
                                        type="comments"
                                        data={{
                                            subtitle: '"The revised scope looks great — ready to proceed."',
                                            detail: "— Marcus, Ridge Media · 1 hr ago",
                                            count: "5",
                                        }}
                                        className="w-full"
                                    />
                                    <DashboardCard
                                        type="tasks"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Delivery Tab */}
                        {activeTab === "Delivery" && (
                            <div id="panel-Delivery" role="tabpanel" aria-labelledby="tab-Delivery">
                                {/* Label above segmented control */}
                                <p className="text-center text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                    Client delivery status
                                </p>

                                {/* Segmented Control */}
                                <div className="flex justify-center mb-8">
                                    <div className="inline-flex p-1 bg-gray-100 rounded-lg" role="radiogroup" aria-label="Status choice">
                                        {(["onTrack", "atRisk", "completed"] as const).map((option) => (
                                            <button
                                                key={option}
                                                role="radio"
                                                aria-checked={statusChoice === option}
                                                onClick={() => handleStatusChange(option)}
                                                className={cn(
                                                    "relative px-5 py-2 text-sm font-serif font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                    statusChoice === option
                                                        ? "text-black"
                                                        : "text-muted-foreground hover:text-foreground",
                                                )}
                                            >
                                                <span className="relative z-10 font-serif">{statusOptions[option].label}</span>
                                                {statusChoice === option && (
                                                    <motion.span
                                                        layoutId="active-pill"
                                                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="flex justify-center mb-6">
                                    <span
                                        className={cn(
                                            "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-all",
                                            currentStatus.badgeColor,
                                        )}
                                    >
                                        {currentStatus.badge}
                                    </span>
                                </div>

                                {/* Explanation */}
                                <div className="text-center mb-8">
                                    <p className="text-base md:text-lg text-black font-medium min-h-[28px] font-serif">
                                        {currentStatus.explanation}
                                    </p>
                                </div>

                                {/* Two Column Layout */}
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {/* Left Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Active clients
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Acme Co.", "Ridge Media", "FounderOS"].map((client) => (
                                                <span
                                                    key={client}
                                                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-900 rounded-full font-serif"
                                                >
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Status breakdown
                                        </h4>
                                        <ul className="space-y-2.5 list-disc pl-5">
                                            {currentStatus.reasons.map((reason, i) => (
                                                <li key={i} className="text-sm text-gray-500 font-medium font-serif">
                                                    {reason}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Conversations Tab */}
                        {activeTab === "Conversations" && (
                            <div id="panel-Conversations" role="tabpanel" aria-labelledby="tab-Conversations">
                                {/* Header */}
                                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-6 font-serif">
                                    Threads across your workspaces
                                </p>

                                {/* Two-column conversation preview */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Client messages */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Open threads
                                        </h4>
                                        <div className="space-y-3">
                                            <DashboardCard
                                                type="comments"
                                                data={{
                                                    subtitle: '"Can we revisit the timeline for phase 2?"',
                                                    detail: "— Priya, Acme Co. · 3 hrs ago",
                                                    count: "2",
                                                }}
                                                className="w-full"
                                            />
                                            <DashboardCard
                                                type="comments"
                                                data={{
                                                    subtitle: '"Logo files look perfect. Approved."',
                                                    detail: "— Jordan, Ridge Media · Yesterday",
                                                    count: "1",
                                                }}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Operator view */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Your workspace
                                        </h4>
                                        <div className="space-y-3">
                                            <DashboardCard
                                                type="delivery"
                                                data={{
                                                    subtitle: "Website Redesign — Final Review",
                                                    detail: "Awaiting client sign-off",
                                                }}
                                                className="w-full"
                                            />
                                            <DashboardCard
                                                type="milestone"
                                                data={{
                                                    subtitle: "Brand Launch",
                                                    detail: "In 5 days",
                                                }}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Micro copy */}
                                <p className="text-sm text-gray-500 font-serif">
                                    All client conversations, co-located with your work — no more scattered DMs.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 md:px-8 py-5 border-t border-border bg-muted/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-serif"
                                    type="button"
                                    onClick={() => onJoinWaitlist?.()}
                                >
                                    Get early access
                                </button>
                                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-serif">
                                    See a demo
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center sm:text-left mt-3">
                            Set up your first client workspace in under 2 minutes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
