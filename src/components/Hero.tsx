import { Button } from "./ui/button"
import { HeroCommandCenter } from "./hero-mockup/HeroCommandCenter"

interface HeroProps {
  onJoinWaitlist?: () => void
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-28 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center w-full">
        <div className="mb-6 inline-flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full border border-border bg-white/90 text-xs sm:text-sm shadow-soft overflow-hidden">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 font-medium text-primary border-b sm:border-b-0 sm:border-r border-border bg-primary/5">
            V1.0 · EARLY ACCESS
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-foreground">
            Sign up to be the first to access it!
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight sm:leading-[0.95] text-foreground text-balance">
          <span className="sm:whitespace-nowrap">Build client systems easily</span>
          <br />
          <span className="text-primary">all in 1 portal.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed px-2 sm:px-0">
          Manage every operator-client in one workspace — delivery, comments, and ongoing conversation co-located with the work.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
          <Button
            type="button"
            onClick={() => onJoinWaitlist?.()}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base font-medium text-white font-bold w-full sm:w-auto"
          >
            Join Waitlist
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base font-medium border-border hover:bg-secondary bg-white font-bold w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById("features")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            See how it works
          </Button>
        </div>

        <div className="mt-8 md:mt-10 w-full max-w-6xl mx-auto px-0 sm:px-4 max-h-[32vh] sm:max-h-[38vh] md:max-h-[44vh] overflow-hidden mask-fade-bottom pointer-events-none">
          <HeroCommandCenter />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-auto pt-14 md:pt-20 relative z-10">
        <p className="text-center text-slate-400 font-semibold text-sm uppercase tracking-[0.2em] mb-6">Trusted by students at</p>
        <div className="overflow-hidden mask-fade opacity-50 grayscale hover:grayscale-0 hover:[animation-play-state:paused] transition-all duration-300">
          <div className="flex items-center ticker-animate hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {(() => {
              const schools = [
                { name: "Harvard", src: "/ivy/harvard%20logo%20.png" },
                { name: "Yale", src: "/ivy/yale%20logo.png" },
                { name: "NYU", src: "/ivy/nyu%20logo.png" },
                { name: "MIT", src: "/ivy/MIT%20Logo%20png%20.png" },
                { name: "Stanford", src: "/ivy/stanfordlogo.png" },
                { name: "Penn", src: "/ivy/upenn%20logo.png" },
                { name: "Berkeley", src: "/ivy/uc%20berkley%20logo%20png%20.png" },
                { name: "UT Austin", src: "/ivy/ut%20austin%20logo.png" },
              ]

              const repeatedSchools = [...schools, ...schools, ...schools]
              return repeatedSchools.map((school, i) => (
              <div key={i} className="flex items-center mx-5 sm:mx-10">
                <img
                  src={school.src}
                  alt={school.name}
                  width={school.name === "Yale" ? 72 : 96}
                  height={school.name === "Yale" ? 72 : 96}
                  className={`object-contain ${
                    school.name === "Yale"
                      ? "h-12 w-12 sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]"
                      : "h-16 w-16 sm:h-20 sm:w-20 md:h-[96px] md:w-[96px]"
                  }`}
                />
              </div>
              ))
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
