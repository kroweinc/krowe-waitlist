interface FooterProps {
  onJoinWaitlist?: () => void
}

export default function Footer({ onJoinWaitlist }: FooterProps) {
    // Duplicate content for infinite scroll effect if needed, 
    // or rely on CSS animation. The CSS uses logic that assumes content is wide enough.
    // We'll duplicate the items in the ticker div to ensure smooth infinite loop.

    return (
        <footer className="relative w-full bg-black border-t border-white/5 blueprint-grid pt-24 pb-8 antialiased overflow-hidden">
            <div className="absolute top-0 left-0 w-full glow-line z-10"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-none font-serif">
                                <span className="text-white block whitespace-nowrap">Turn Customer Interviews.</span>
                                <span className="text-primary block whitespace-nowrap">Into Decisions.</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium mt-2 max-w-xl pt-4">
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
                                <h3 className="text-2xl font-bold mb-2 text-white font-serif">Ready to build?</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Transform your idea into reality easily by using Krowe</p>
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
                    <div className="flex gap-6">
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">local_fire_department</span>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Current Streak</p>
                                <p className="text-white font-bold text-sm">12 Days</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">donut_large</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">MVP Progress</p>
                                <div className="h-1.5 w-24 bg-white/10 rounded-full mt-1">
                                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">task_alt</span>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Open Tasks</p>
                                <p className="text-white font-bold text-sm">8 Pending</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Environment</p>
                                <p className="text-white font-bold text-sm">Production</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Engagement</p>
                                <p className="text-white font-bold text-sm">+24% WoW</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">hub</span>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Active Nodes</p>
                                <p className="text-white font-bold text-sm">147 Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Set (Duplicate) */}
                    <div className="flex gap-6">
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">local_fire_department</span>
                            </div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Current Streak</p><p className="text-white font-bold text-sm">12 Days</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-xl">donut_large</span></div>
                            <div className="flex-1"><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">MVP Progress</p><div className="h-1.5 w-24 bg-white/10 rounded-full mt-1"><div className="h-full w-3/4 bg-primary rounded-full"></div></div></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-xl">task_alt</span></div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Open Tasks</p><p className="text-white font-bold text-sm">8 Pending</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Section</p><p className="text-white font-bold text-sm">Problem Research</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Engagement</p><p className="text-white font-bold text-sm">+24% WoW</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">hub</span>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Active Nodes</p><p className="text-white font-bold text-sm">147 Active</p></div>
                        </div>
                    </div>

                    {/* Third Set (Duplicate for smoothness on wide screens if needed, just 2 is probably enough if width is 50% relative to container, but let's stick to 2 for now as per user request code) -- Actually user code had 2 sets, I will keep 2. */}
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-20">
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img src="KroweIcon.svg" width={35} height={3}></img>
                            <span className="font-bold text-lg text-white font-display">Krowe</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">© 2026 Krowe Technologies Inc.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms</a>
                            <a className="hover:text-primary transition-colors" href="#">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-primary transition-colors" href="https://x.com/KroweInc">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-primary transition-colors" href="https://www.linkedin.com/company/krowe">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
