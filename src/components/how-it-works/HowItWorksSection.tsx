import { HowItWorksStepCard } from "./HowItWorksStepCard"
import { ClientStepAvatar, ClientStepPreview } from "./steps/ClientStepPreview"
import { KroweStepAvatar, KroweStepPreview } from "./steps/KroweStepPreview"
import { OperatorStepAvatar, OperatorStepPreview } from "./steps/OperatorStepPreview"

const steps = [
    {
        step: "01",
        avatar: <ClientStepAvatar />,
        roleLabel: "Client",
        roleClassName: "text-sky-600",
        title: "Drops the work in",
        description:
            "They post questions, upload assets, and approve milestones in their own warm room — no logins lost in inboxes.",
        preview: <ClientStepPreview />,
    },
    {
        step: "02",
        avatar: <KroweStepAvatar />,
        roleLabel: "Krowe",
        roleClassName: "text-primary",
        title: "Holds the thread",
        description:
            "Every message, file, and decision is co-located with the actual work — so the context never leaves the room.",
        preview: <KroweStepPreview />,
    },
    {
        step: "03",
        avatar: <OperatorStepAvatar />,
        roleLabel: "Operator",
        roleClassName: "text-primary",
        title: "Ships the next thing",
        description:
            "You see what needs your eye in the morning, reply once, and move on — without re-explaining the project to anyone.",
        preview: <OperatorStepPreview />,
    },
] as const

export function HowItWorksSection() {
    return (
        <section
            aria-labelledby="how-it-works-heading"
            className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 relative"
        >
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h4 className="text-primary text-sm md:text-base font-extrabold tracking-[0.25em] uppercase mb-4">
                    How it works
                </h4>
                <h1
                    id="how-it-works-heading"
                    className="font-serif text-foreground text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6"
                >
                    Bring every client into <span className="text-primary">one workspace.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Clients upload, comment, and sign off. Operators deliver — all in one place.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Dashed connector — desktop only */}
                <div
                    className="hidden md:block absolute left-[16.666%] right-[16.666%] top-[42%] h-0 border-t border-dashed border-primary/40 pointer-events-none z-0"
                    aria-hidden
                />

                <div className="relative z-10 flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
                    {steps.map((s) => (
                        <HowItWorksStepCard
                            key={s.step}
                            step={s.step}
                            avatar={s.avatar}
                            roleLabel={s.roleLabel}
                            roleClassName={s.roleClassName}
                            title={s.title}
                            description={s.description}
                        >
                            {s.preview}
                        </HowItWorksStepCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
