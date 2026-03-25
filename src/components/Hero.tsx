"use client"

import { Button } from "./ui/button"
import { DashboardCard } from "./dashboard-card"
import { useEffect, useState } from "react"

interface HeroProps {
  onJoinWaitlist?: () => void
}

export function Hero({ onJoinWaitlist }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* 
   * MAX_SCROLL_THRESHOLD controls the point (in pixels) where the cards stop "following" the scroll.
   * After 500px of scrolling, the cards will move normally with the page.
   */
  const MAX_SCROLL_THRESHOLD = 60
  const effectiveScrollY = Math.min(scrollY, MAX_SCROLL_THRESHOLD)

  const cards = [
    { type: "topProblem" as const,   rotation: -3, x: -380, y: -31,  blur: 2, z: 1 },
    { type: "keyQuote" as const,     rotation:  2, x:  380, y: -31,  blur: 1, z: 2 },
    { type: "metaThemes" as const,   rotation: -2, x: -500, y: -250, blur: 3, z: 0 },
    { type: "featureSpecs" as const, rotation:  3, x:  500, y: -250, blur: 2, z: 1 },
    { type: "edgeCases" as const,    rotation: -1, x: -500, y:  160, blur: 2, z: 1 },
    { type: "userFlow" as const,     rotation:  2, x:  500, y:  160, blur: 2, z: 1 },
  ]

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Stacked cards behind headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {cards.map((card, i) => (
            <div
            key={i}
            className="absolute transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${card.x}px, ${card.y + effectiveScrollY * 0.1 * (card.z + 1)}px) rotate(${card.rotation}deg)`,
              filter: `blur(${card.blur}px)`,
              zIndex: card.z,
              opacity: 0.7 + card.z * 0.1,
            }}
          >
            <DashboardCard type={card.type} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-foreground text-balance">
          <span className="sm:whitespace-nowrap">Turn Customer Interviews.</span>
          <br />
          <span className="text-primary">Into Decisions.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
           We analyze real user feedback that helps you validate your idea, know when to pivot, and makes dev ready specs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button
            type="button"
            onClick={() => onJoinWaitlist?.()}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium text-white font-bold"
          >
            Join Waitlist
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium border-border hover:bg-secondary bg-white font-bold"
            onClick={() => {
              const element = document.getElementById("benefits")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            See how it works
          </Button>
        </div>

        {/*<p className="mt-8 text-sm text-muted-foregroun font-semibold">Built for first-time founders • No fluff • Action-first</p>*/}
      </div>

      {/* Ivy League Carousel */}
      <div className="container mx-auto px-6 mt-0 relative z-10">
        <p className="text-center text-slate-400 font-semibold text-sm uppercase tracking-[0.2em] mb-6">Trusted by students at</p>
        <div className="overflow-hidden opacity-50 grayscale hover:grayscale-0 hover:[animation-play-state:paused] transition-all duration-300">
          <div className="flex items-center ticker-animate hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {(() => {
              // These `src` values map to the exact filenames in `public/ivy/`.
              // Several files contain spaces, so we URL-encode them here.
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

              // Repeat to keep the ticker flowing.
              const repeatedSchools = [...schools, ...schools, ...schools]
              return repeatedSchools.map((school, i) => (
              <div key={i} className="flex items-center mx-10">
                {/* NYU PNG has extra transparent padding; `object-cover` fills the same box without changing carousel spacing. */}
                <img
                  src={school.src}
                  alt={school.name}
                  width={school.name === "Yale" ? 72 : 96}
                  height={school.name === "Yale" ? 72 : 96}
                  className={school.name === "NYU" ? "object-cover" : "object-contain"}
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
