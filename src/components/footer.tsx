import { DashboardCard } from "./dashboard-card"

interface FooterProps {
  onJoinWaitlist?: () => void
}

export default function Footer({ onJoinWaitlist }: FooterProps) {
    // Duplicate content for infinite scroll effect if needed, 
    // or rely on CSS animation. The CSS uses logic that assumes content is wide enough.
    // We'll duplicate the items in the ticker div to ensure smooth infinite loop.

    return (
        <footer className="relative w-full bg-gray-50 border-t border-gray-200 blueprint-grid-light pt-24 pb-8 antialiased overflow-hidden">
            <div className="absolute top-0 left-0 w-full glow-line-light z-10"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-none font-serif">
                                <span className="text-neutral-900 block whitespace-nowrap">Turn Customer Interviews.</span>
                                <span className="text-primary block whitespace-nowrap">Into Decisions.</span>
                            </h2>
                            <p className="text-neutral-600 text-lg font-medium mt-2 max-w-xl pt-4">
                            The only platform you need to decide what to build next, so you can focus on actually building it.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="glass-panel rounded-2xl flex flex-col relative overflow-hidden group w-full p-6 lg:p-8">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="mb-8 relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-neutral-900 font-serif">Ready to build?</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">Transform your idea into reality easily by using Krowe</p>
                            </div>
                            <div className="mt-auto space-y-4 relative z-10">
                                <button
                                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary h-12 px-6 text-white text-base font-bold transition-all hover:bg-orange-500 active:scale-[0.98]"
                                    type="button"
                                    onClick={() => onJoinWaitlist?.()}
                                >
                                    <span>Join the waitlist</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 relative w-full overflow-hidden mask-fade">
                <div className="ticker-animate flex gap-6 px-6 w-max">
                    {/* First Set */}
                    <div className="flex gap-6 items-stretch">
                        <DashboardCard type="topProblem" className="h-44 w-56" />
                        <DashboardCard type="keyQuote" className="h-44 w-56" />
                        <DashboardCard type="metaThemes" className="h-44 w-56" />
                        <DashboardCard type="featureSpecs" className="h-44 w-56" />
                        <DashboardCard type="edgeCases" className="h-44 w-56" />
                        <DashboardCard type="userFlow" className="h-44 w-56" />
                    </div>
                    {/* Second Set (Duplicate for infinite loop) */}
                    <div className="flex gap-6 items-stretch">
                        <DashboardCard type="topProblem" className="h-44 w-56" />
                        <DashboardCard type="keyQuote" className="h-44 w-56" />
                        <DashboardCard type="metaThemes" className="h-44 w-56" />
                        <DashboardCard type="featureSpecs" className="h-44 w-56" />
                        <DashboardCard type="edgeCases" className="h-44 w-56" />
                        <DashboardCard type="userFlow" className="h-44 w-56" />
                    </div>
                    {/* Third Set */}
                    <div className="flex gap-6 items-stretch">
                        <DashboardCard type="topProblem" className="h-44 w-56" />
                        <DashboardCard type="keyQuote" className="h-44 w-56" />
                        <DashboardCard type="metaThemes" className="h-44 w-56" />
                        <DashboardCard type="featureSpecs" className="h-44 w-56" />
                        <DashboardCard type="edgeCases" className="h-44 w-56" />
                        <DashboardCard type="userFlow" className="h-44 w-56" />
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-20">
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img src="KroweIcon.svg" width={35} height={3}></img>
                            <span className="font-bold text-lg text-neutral-900 font-display">Krowe</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-medium">© 2026 Krowe Technologies Inc.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm font-medium text-neutral-600">
                            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms</a>
                            <a className="hover:text-primary transition-colors" href="#">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-gray-100 text-neutral-600 hover:bg-gray-200 hover:text-primary transition-colors" href="https://x.com/KroweInc">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-gray-100 text-neutral-600 hover:bg-gray-200 hover:text-primary transition-colors" href="https://www.linkedin.com/company/krowe">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
