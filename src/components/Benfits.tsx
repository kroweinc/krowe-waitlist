"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"
import { AlertTriangle, Quote, Layers } from "lucide-react"

// Typing animation hook
function useTypingEffect(text: string, speed = 30, trigger = true) {
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (!trigger) {
            setDisplayedText("")
            return
        }

        setIsTyping(true)
        setDisplayedText("")
        let i = 0

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1))
                i++
            } else {
                setIsTyping(false)
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed, trigger])

    return { displayedText, isTyping }
}

// Tab content data
const directionOptions = {
    build: {
        label: "Build",
        badge: "Ready to Build",
        badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        explanation: "Your interviews show clear pain + willingness to pay. The problem is real — build it.",
        reasons: [
            "Pain mentioned in 9 of 12 interviews",
            "3 buyers asked about pricing",
            "Scope is achievable in 6–8 weeks",
        ],
    },
    niche: {
        label: "Niche Down",
        badge: "Needs Focus",
        badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        explanation: "Strong signal, but scattered across buyer types. Narrow your ICP before building.",
        reasons: [
            "Pain resonates but buyers vary widely",
            "No single ICP emerged from transcripts",
            "Narrowing will unlock faster traction",
        ],
    },
    pivot: {
        label: "Pivot",
        badge: "Shift Angle",
        badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
        explanation: "Your interviews surfaced a more pressing adjacent problem. Shift angle — don't restart.",
        reasons: [
            "Adjacent pain came up 8x unprompted",
            "Current angle has high execution risk",
            "Interviews point to a clearer opportunity",
        ],
    },
}

const tabs = ["Insights", "Decisions", "Specs"] as const
type TabType = (typeof tabs)[number]

interface DecisionConsoleBenefitsProps {
  onJoinWaitlist?: () => void
}

export default function DecisionConsoleBenefits({ onJoinWaitlist }: DecisionConsoleBenefitsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("Insights")
    const [directionChoice, setDirectionChoice] = useState<"build" | "niche" | "pivot">("build")
    const [isTransitioning, setIsTransitioning] = useState(false)

    const topProblemText = "Users consistently abandon after being asked to connect their calendar — 11 mentions across 14 interviews."
    const { displayedText, isTyping } = useTypingEffect(topProblemText, 25, activeTab === "Insights")

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

    const handleDirectionChange = useCallback((choice: "build" | "niche" | "pivot") => {
        setDirectionChoice(choice)
    }, [])

    const currentDirection = directionOptions[directionChoice]

    return (
        <section id="benefits" className="w-full py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block text-xs font-extrabold tracking-[0.3em] uppercase text-primary mb-4">
                        Why Krowe
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-foreground mb-4">
                        From raw interviews to clear decisions.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Krowe turns hours of raw feedback into structured insights, product decisions, and dev-ready specs — in minutes.
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
                        <span className="text-sm font-medium text-foreground font-serif">Krowe Console</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Output
                        </span>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-border">
                        <div className="flex justify-center">
                            <div className="inline-flex" role="tablist" aria-label="Console sections">
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
                        {/* Insights Tab */}
                        {activeTab === "Insights" && (
                            <div id="panel-Insights" role="tabpanel" aria-labelledby="tab-Insights">
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground font-serif">
                                        Analyzed 12 interviews
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 border border-border rounded-full px-2.5 py-1 font-serif">
                                        3 min 42 sec
                                    </span>
                                </div>

                                {/* Top Problem card */}
                                <div className="bg-gray-50 border border-border rounded-xl p-4 mb-4">
                                    <div className="flex items-start gap-3 mb-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                        <p className="text-sm font-semibold text-foreground font-serif">
                                            Onboarding drop-off after step 2
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed font-serif min-h-[40px]">
                                        {displayedText}
                                        {isTyping && <span className="inline-block w-0.5 h-4 bg-gray-600 ml-0.5 animate-pulse" />}
                                    </p>
                                    <p className="text-xs text-amber-600 font-medium mt-2 font-serif">11x · Highest priority</p>
                                </div>

                                {/* Two-column row */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Key Quote card */}
                                    <div className="bg-gray-50 border border-border rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Quote className="w-4 h-4 text-primary shrink-0" />
                                            <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground font-serif">
                                                Key Quote
                                            </span>
                                        </div>
                                        <p className="text-sm italic text-gray-700 leading-relaxed font-serif mb-2">
                                            "I knew what it did, I just couldn't get started."
                                        </p>
                                        <p className="text-xs text-muted-foreground font-serif">— Sarah, YC Founder</p>
                                    </div>

                                    {/* Meta Themes card */}
                                    <div className="bg-gray-50 border border-border rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Layers className="w-4 h-4 text-muted-foreground shrink-0" />
                                            <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground font-serif">
                                                Meta Themes
                                            </span>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {[
                                                "Friction in first-run experience",
                                                "Unclear value before commitment",
                                                "Mobile experience gaps",
                                            ].map((theme) => (
                                                <li key={theme} className="text-sm text-gray-600 font-serif flex items-start gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0" />
                                                    {theme}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Decisions Tab */}
                        {activeTab === "Decisions" && (
                            <div id="panel-Decisions" role="tabpanel" aria-labelledby="tab-Decisions">
                                {/* Label above segmented control */}
                                <p className="text-center text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                    Krowe's read on your interviews
                                </p>

                                {/* Segmented Control */}
                                <div className="flex justify-center mb-8">
                                    <div className="inline-flex p-1 bg-gray-100 rounded-lg" role="radiogroup" aria-label="Direction choice">
                                        {(["build", "niche", "pivot"] as const).map((option) => (
                                            <button
                                                key={option}
                                                role="radio"
                                                aria-checked={directionChoice === option}
                                                onClick={() => handleDirectionChange(option)}
                                                className={cn(
                                                    "relative px-5 py-2 text-sm font-serif font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                    directionChoice === option
                                                        ? "text-black"
                                                        : "text-muted-foreground hover:text-foreground",
                                                )}
                                            >
                                                <span className="relative z-10 font-serif">{directionOptions[option].label}</span>
                                                {directionChoice === option && (
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

                                {/* Decision Badge */}
                                <div className="flex justify-center mb-6">
                                    <span
                                        className={cn(
                                            "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-all",
                                            currentDirection.badgeColor,
                                        )}
                                    >
                                        {currentDirection.badge}
                                    </span>
                                </div>

                                {/* Explanation */}
                                <div className="text-center mb-8">
                                    <p className="text-base md:text-lg text-black font-medium min-h-[28px] font-serif">
                                        {currentDirection.explanation}
                                    </p>
                                </div>

                                {/* Two Column Layout */}
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {/* Left Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Signals from interviews
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Pain frequency", "Buyer specificity", "Willingness to pay"].map((chip) => (
                                                <span
                                                    key={chip}
                                                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-900 rounded-full font-serif"
                                                >
                                                    {chip}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Why this decision
                                        </h4>
                                        <ul className="space-y-2.5 list-disc pl-5">
                                            {currentDirection.reasons.map((reason, i) => (
                                                <li key={i} className="text-sm text-gray-500 font-medium font-serif">
                                                    {reason}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Specs Tab */}
                        {activeTab === "Specs" && (
                            <div id="panel-Specs" role="tabpanel" aria-labelledby="tab-Specs">
                                {/* Header */}
                                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-6 font-serif">
                                    Generated from your interviews
                                </p>

                                {/* Two-column spec preview */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Feature Specs */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Feature Specs
                                        </h4>
                                        <div className="space-y-3">
                                            {[
                                                { text: "Skip calendar connect — offer manual entry fallback", priority: "High" },
                                                { text: "Add progress indicator showing steps remaining", priority: "High" },
                                                { text: "Surface core value before asking for permissions", priority: "Med" },
                                            ].map((spec, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-4 h-4 rounded border border-border mt-0.5 shrink-0" />
                                                    <p className="text-sm text-gray-700 font-serif flex-1">{spec.text}</p>
                                                    <span
                                                        className={cn(
                                                            "text-xs font-medium px-2 py-0.5 rounded-full shrink-0 font-serif",
                                                            spec.priority === "High"
                                                                ? "bg-rose-500/10 text-rose-600"
                                                                : "bg-gray-100 text-gray-600",
                                                        )}
                                                    >
                                                        {spec.priority}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Edge Cases */}
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                            Edge Cases
                                        </h4>
                                        <div className="space-y-3">
                                            {[
                                                "User has no existing calendar tool",
                                                "First session on mobile device",
                                                "Team account with multiple users",
                                            ].map((edgeCase, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                                    <p className="text-sm text-gray-600 font-serif">{edgeCase}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* User Flow preview */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4 font-serif">
                                        User Flow
                                    </h4>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {["Sign Up", "Onboarding"].map((step) => (
                                            <span
                                                key={step}
                                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-full font-serif"
                                            >
                                                {step}
                                            </span>
                                        ))}
                                        <span className="text-gray-400">→</span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-amber-500/10 text-amber-700 rounded-full font-serif">
                                            <AlertTriangle className="w-3.5 h-3.5" />
                                            Drop-off point
                                        </span>
                                        <span className="text-gray-400">→</span>
                                        <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-full font-serif">
                                            Core Value
                                        </span>
                                    </div>
                                </div>

                                {/* Micro copy */}
                                <p className="text-sm text-gray-500 font-serif">
                                    Dev-ready specs from real user signals — no guesswork.
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
                                    Analyze my interviews
                                </button>
                                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-serif">
                                    See a sample report
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center sm:text-left mt-3">
                            Upload your first transcript. Results in under 5 minutes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
