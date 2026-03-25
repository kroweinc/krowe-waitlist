import { Button } from "./ui/button"

export default function Features() {
    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 relative">
            <div className="max-w-3xl mx-auto text-center mb-32">
                <h4 className="text-primary text-xs font-extrabold tracking-[0.3em] uppercase mb-4">How it works</h4>
                <h1 className="font-serif text-foreground text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                Turn user insights into product decision.
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Each step builds on real user signals, narrowing down to one clear decision on what to build.
                </p>
            </div>
            <div className="relative max-w-5xl mx-auto">
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-visible" preserveAspectRatio="none">
                    <path className="staircase-path stroke-border" strokeWidth="2" fill="none" d="M 50% 120 L 50% 280 L 50% 280 L 50% 440" id="connector" style={{ display: 'none' }}></path>
                    <line className="staircase-path opacity-20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" x1="50%" x2="50%" y1="60" y2="1090"></line>
                    <path className="staircase-path" d="M 50% 60 L 50% 180 L 50% 180 L 50% 320 L 50% 320 L 50% 460 L 50% 460 L 50% 600 L 50% 600 L 50% 740"></path>
                    <path className="staircase-path" d="M 50% 60 Q 50% 130, 50% 200"></path>
                    <path className="staircase-path" d="M 50% 200 Q 50% 270, 50% 340"></path>
                    <path className="staircase-path" d="M 50% 340 Q 50% 410, 50% 480"></path>
                    <path className="staircase-path" d="M 50% 480 Q 50% 550, 50% 620"></path>
                </svg>
                <div className="space-y-16 lg:space-y-0 relative">
                    <div className="lg:grid lg:grid-cols-2 lg:h-[280px] items-start">
                        <div className="relative group cursor-pointer flex flex-col items-center lg:items-end lg:pr-16">
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                                <div className="size-10 rounded-full border-2 border-border bg-background flex items-center justify-center text-foreground font-bold text-sm transition-all group-hover:border-primary group-hover:text-primary">01</div>
                            </div>
                            <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                                <div className="flex items-center justify-between mb-6 lg:flex-row-reverse">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Phase 1: Discovery</span>
                                    <span className="material-symbols-outlined text-primary/40">lightbulb</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight text-foreground">Validate Your Idea</h3>
                                <div className="bg-secondary/50 rounded-lg p-5 border border-dashed border-border">
                                    <p className="text-xs uppercase font-bold text-primary/60 tracking-widest mb-2">Your Founder Report</p>
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span className="text-foreground">Feasibility Analysis Complete</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                                    We anaylze you and your idea to come up with the best plan for you to get to market.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block"></div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:h-[280px] items-start">
                        <div className="hidden lg:block"></div>
                        <div className="relative group cursor-pointer flex flex-col items-center lg:items-start lg:pl-16">
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                                <div className="size-10 rounded-full border-2 border-border bg-background flex items-center justify-center text-foreground font-bold text-sm transition-all group-hover:border-primary group-hover:text-primary">02</div>
                            </div>
                            <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Phase 2: Planning</span>
                                    <span className="material-symbols-outlined text-primary/40">map</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight text-foreground">Real Roadmap</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest opacity-40">
                                        <span>Week 4</span>
                                        <span>Week 12</span>
                                    </div>
                                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden flex">
                                        <div className="h-full w-1/3 bg-primary border-r border-background"></div>
                                        <div className="h-full w-2/3 bg-primary/10"></div>
                                    </div>
                                    <p className="text-xs font-medium italic opacity-60">Status: Timeline confirmed</p>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                                    Get a structured plan to take your idea to market. The correct way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:h-[280px] items-start">
                        <div className="relative group cursor-pointer flex flex-col items-center lg:items-end lg:pr-16">
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                                <div className="size-10 rounded-full border-2 border-border bg-background flex items-center justify-center text-foreground font-bold text-sm transition-all group-hover:border-primary group-hover:text-primary">03</div>
                            </div>
                            <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                                <div className="flex items-center justify-between mb-6 lg:flex-row-reverse">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Phase 3: Execution</span>
                                    <span className="material-symbols-outlined text-primary/40">biotech</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight text-foreground">Practical Research</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border-l-2 border-primary/20 pl-3 py-1">
                                        <p className="text-[10px] uppercase font-bold text-primary/60 mb-1">Find</p>
                                        <p className="text-xs font-semibold text-foreground">Target Customer</p>
                                    </div>
                                    <div className="border-l-2 border-primary/20 pl-3 py-1">
                                        <p className="text-[10px] uppercase font-bold text-primary/60 mb-1">Decide</p>
                                        <p className="text-xs font-semibold text-foreground">3 Pain Points</p>
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                                    Krowe helps you complete the important part  researching your idea.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block"></div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:h-[280px] items-start">
                        <div className="hidden lg:block"></div>
                        <div className="relative group cursor-pointer flex flex-col items-center lg:items-start lg:pl-16">
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                                <div className="size-10 rounded-full border-2 border-border bg-background flex items-center justify-center text-foreground font-bold text-sm transition-all group-hover:border-primary group-hover:text-primary">04</div>
                            </div>
                            <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-2">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Phase 4: Launch</span>
                                    <span className="material-symbols-outlined text-primary/40">speed</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight text-foreground">Speed to MVP</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs bg-primary/5 p-2 rounded">
                                        <span className="material-symbols-outlined text-sm text-primary">verified</span>
                                        <span className="text-foreground">Find a Technical Co-founder</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs bg-primary/5 p-2 rounded opacity-70">
                                        <span className="material-symbols-outlined text-sm text-primary">circle</span>
                                        <span className="text-foreground">Conduct 10 Customer Interviews</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                                    Get tailored tasks on your idea, that takes you all the way to launch!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
