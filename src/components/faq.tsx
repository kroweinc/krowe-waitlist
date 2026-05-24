"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, ArrowLeft, Inbox } from "lucide-react"

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
type Tag = "VALIDATION" | "CLARITY" | "ROADMAP" | "EXECUTION" | "PRICING" | "ACCESS"

interface Ticket {
    id: number
    tag: Tag
    question: string
    answer: string
    bullets: string[]
    minutesToRead: number
    updatedLabel: string
    relatedIds: number[]
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const tickets: Ticket[] = [
    {
        id: 1,
        tag: "CLARITY",
        question: "What is Krowe?",
        answer:
            "Krowe is a portal where operators run every client relationship in one place. Delivery, comments, approvals, and the ongoing conversation all live next to the work itself — so nothing gets lost across email, Slack, Loom, and Notion.",
        bullets: [
            "One workspace per client, isolated and on-brand",
            "Live previews of what you're building, not screenshots",
            "Pinned threads on the actual UI, not a separate doc",
        ],
        minutesToRead: 1,
        updatedLabel: "Updated recently",
        relatedIds: [2, 3, 4],
    },
    {
        id: 2,
        tag: "EXECUTION",
        question: "What does my client see and do inside Krowe?",
        answer:
            "Each client gets their own warm room — a clean workspace where they interact with the live build instead of waiting on screen shares. They upload assets, ask questions, drop click-to-comment notes directly on the UI, and approve milestones without juggling logins or inboxes.",
        bullets: [
            "Click anywhere on the live preview to leave a comment",
            "Reply from email or in-app — both land in the same thread",
            "Sign off on milestones with one tap, no chasing required",
        ],
        minutesToRead: 1,
        updatedLabel: "Updated recently",
        relatedIds: [1, 3, 6],
    },
    {
        id: 3,
        tag: "VALIDATION",
        question: "How is Krowe different from Notion, Slack, or Upwork?",
        answer:
            "Notion is a doc you share, Slack is a chat that buries context, and Upwork is a marketplace that ends at the contract. Krowe is the delivery surface — your client sees the actual system, drops comments where the work lives, and approves it without bouncing between five tools.",
        bullets: [
            "Built around the live build, not around documents or chat",
            "Multi-client by default — every workspace stays isolated",
            "Replaces four to five tools in the typical client handoff stack",
        ],
        minutesToRead: 2,
        updatedLabel: "Updated recently",
        relatedIds: [1, 2, 4],
    },
    {
        id: 4,
        tag: "ACCESS",
        question: "Do I need clients lined up before joining the waitlist?",
        answer:
            "No. Whether you already have operator-clients or you're just starting to take work on, Krowe scales with you. You can port existing relationships in or stand up your first client workspace from scratch.",
        bullets: [
            "Bring current clients over with no migration headaches",
            "Start fresh with a clean operator workspace",
            "Add new clients anytime as your book grows",
        ],
        minutesToRead: 1,
        updatedLabel: "Updated recently",
        relatedIds: [1, 5, 6],
    },
    {
        id: 5,
        tag: "PRICING",
        question: "What does Krowe cost?",
        answer:
            "Pricing isn't public yet — we're still in closed early access. Operators who join the waitlist get first access when workspaces open up, plus grandfathered pricing locked in before the public launch.",
        bullets: [
            "No card and no demo call to join the waitlist",
            "Founding operators get locked-in early pricing",
            "Public pricing announced before general launch",
        ],
        minutesToRead: 1,
        updatedLabel: "Updated recently",
        relatedIds: [6, 1, 2],
    },
    {
        id: 6,
        tag: "ROADMAP",
        question: "When will I actually get access?",
        answer:
            "Krowe is in closed early access right now and we're letting operators in as workspaces open up. Your spot is determined by when you join the waitlist and the kind of work you're already doing — the earlier you're on, the sooner you're in.",
        bullets: [
            "Priority access for the first wave of operators",
            "Early access invites going out continuously",
            "Public launch follows once V1.0 is battle-tested",
        ],
        minutesToRead: 1,
        updatedLabel: "Updated recently",
        relatedIds: [5, 1, 4],
    },
]

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export function KroweHelpdeskFAQ() {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [mobileView, setMobileView] = useState<"list" | "detail">("list")
    const ticketRefs = useRef<Map<number, HTMLButtonElement>>(new Map())

    const selectedTicket = tickets.find((t) => t.id === selectedId)

    const handleSelectTicket = (id: number) => {
        setSelectedId(id)
        setMobileView("detail")
    }

    const handleRelatedClick = (id: number) => {
        setSelectedId(id)
        // Scroll the ticket into view in left panel
        const el = ticketRefs.current.get(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "nearest" })
        }
    }

    const handleBack = () => {
        setMobileView("list")
    }

    // Reset mobile view when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileView("list")
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="w-full py-16 md:py-24">
            <div className="mx-auto max-w-[1150px] px-4 sm:px-6">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl font-serif">
                            FAQ, but built like a helpdesk.
                        </h2>
                        <p className="mt-2 text-base text-neutral-500 md:text-lg font-serif">
                            Open a ticket — get clarity fast.
                        </p>
                    </div>

                </div>

                {/* Helpdesk Panel */}
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-[38%_1fr]">
                        {/* Left Panel - Ticket List */}
                        <div className="relative flex flex-col border-r border-neutral-200">
                            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
                                <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Tickets</span>
                                <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                                    Showing {tickets.length}
                                </span>
                            </div>
                            <div className="relative max-h-[420px] flex-1 overflow-y-auto">
                                {tickets.map((ticket) => (
                                    <TicketRow
                                        key={ticket.id}
                                        ticket={ticket}
                                        isActive={selectedId === ticket.id}
                                        onClick={() => handleSelectTicket(ticket.id)}
                                        ref={(el) => {
                                            if (el) ticketRefs.current.set(ticket.id, el)
                                        }}
                                    />
                                ))}
                                {/* Fade at bottom */}
                                <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FDF9F3] to-transparent" />
                            </div>
                        </div>

                        {/* Right Panel - Ticket Detail */}
                        <div className="relative min-h-[480px] bg-neutral-50/50">
                            {selectedTicket ? (
                                <TicketDetail ticket={selectedTicket} allTickets={tickets} onRelatedClick={handleRelatedClick} />
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center px-8 py-16 text-center">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                                        <Inbox className="h-6 w-6 text-orange-400" />
                                    </div>
                                    <p className="text-base font-medium text-neutral-600">Open a ticket to see the answer.</p>
                                    <p className="mt-1 text-sm text-neutral-400">Select from the list on the left.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                        {mobileView === "list" ? (
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Tickets</span>
                                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                                        Showing {tickets.length}
                                    </span>
                                </div>
                                <div className="max-h-[400px] overflow-y-auto">
                                    {tickets.map((ticket) => (
                                        <TicketRow
                                            key={ticket.id}
                                            ticket={ticket}
                                            isActive={selectedId === ticket.id}
                                            onClick={() => handleSelectTicket(ticket.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-200">
                                {/* Mobile Back Button */}
                                <div className="border-b border-neutral-100 px-4 py-3">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back to tickets
                                    </button>
                                </div>
                                {selectedTicket && (
                                    <TicketDetail
                                        ticket={selectedTicket}
                                        allTickets={tickets}
                                        onRelatedClick={handleRelatedClick}
                                        isMobile
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─────────────────────────────────────────────────────────────
// Subcomponents
// ─────────────────────────────────────────────────────────────
import { forwardRef } from "react"

interface TicketRowProps {
    ticket: Ticket
    isActive: boolean
    onClick: () => void
}

const TicketRow = forwardRef<HTMLButtonElement, TicketRowProps>(({ ticket, isActive, onClick }, ref) => {
    return (
        <button
            ref={ref}
            onClick={onClick}
            className={`relative flex w-full cursor-pointer flex-col gap-1.5 border-b border-neutral-100 px-5 py-4 text-left transition-colors hover:bg-orange-50/50 ${isActive ? "bg-orange-50/70" : ""
                }`}
        >
            {/* Active left accent bar */}
            {isActive && <span className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />}
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium leading-snug text-neutral-800 font-serif">{ticket.question}</h3>
                <ChevronRight
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform ${isActive ? "translate-x-0.5 text-orange-500" : ""
                        }`}
                />
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>
                    {ticket.minutesToRead} min read • {ticket.updatedLabel}
                </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
                <TagChip tag={ticket.tag} />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>
        </button>
    )
})
TicketRow.displayName = "TicketRow"

interface TicketDetailProps {
    ticket: Ticket
    allTickets: Ticket[]
    onRelatedClick: (id: number) => void
    isMobile?: boolean
}

function TicketDetail({ ticket, allTickets, onRelatedClick, isMobile }: TicketDetailProps) {
    const relatedTickets = ticket.relatedIds.map((id) => allTickets.find((t) => t.id === id)).filter(Boolean) as Ticket[]

    return (
        <div
            key={ticket.id}
            className={`flex flex-col gap-5 p-6 md:p-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:duration-200 ${isMobile ? "bg-neutral-50/50" : ""
                }`}
        >
            {/* Header row */}
            <div className="flex items-center gap-3">
                <TagChip tag={ticket.tag} />
                <span className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Opened
                </span>
            </div>

            {/* Question title */}
            <h3 className="text-xl font-semibold leading-snug text-neutral-900 md:text-2xl font-serif">{ticket.question}</h3>

            {/* Answer */}
            <p className="text-base leading-relaxed text-neutral-600">{ticket.answer}</p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
                {ticket.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                        {bullet}
                    </li>
                ))}
            </ul>

            {/* Related questions */}
            <div className="mt-4 border-t border-neutral-200 pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">Related questions</p>
                <div className="flex flex-wrap gap-2">
                    {relatedTickets.map((related) => (
                        <button
                            key={related.id}
                            onClick={() => onRelatedClick(related.id)}
                            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:border-orange-300 hover:bg-orange-50"
                        >
                            {related.question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

function TagChip({ tag }: { tag: Tag }) {
    return (
        <span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-600">
            {tag}
        </span>
    )
}

export default KroweHelpdeskFAQ
