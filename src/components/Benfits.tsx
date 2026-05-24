import { FeaturedWorkspaceCard } from "./why-krowe/FeaturedWorkspaceCard"
import { ClientStatusCard } from "./why-krowe/ClientStatusCard"
import { ClientProgressCard } from "./why-krowe/ClientProgressCard"
import { WhyKroweCta } from "./why-krowe/WhyKroweCta"
import { clientStatusCards } from "./why-krowe/whyKroweContent"

interface DecisionConsoleBenefitsProps {
  onJoinWaitlist?: () => void
}

export default function DecisionConsoleBenefits({ onJoinWaitlist }: DecisionConsoleBenefitsProps) {
  return (
    <section id="benefits" className="w-full page-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-block text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-primary">
            Why Krowe
          </span>
          <h2 className="mb-4 font-serif text-4xl tracking-tight text-balance text-foreground leading-[1.1] md:text-6xl">
            One workspace for every client relationship.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Krowe keeps your delivery, conversations, and client context all in one place — so nothing falls through
            the cracks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <FeaturedWorkspaceCard />
          <div className="flex flex-col gap-4">
            {clientStatusCards.map((card) => (
              <ClientStatusCard key={card.client} {...card} />
            ))}
            <ClientProgressCard />
          </div>
        </div>

        <div className="mt-6">
          <WhyKroweCta onJoinWaitlist={onJoinWaitlist} />
        </div>
      </div>
    </section>
  )
}
