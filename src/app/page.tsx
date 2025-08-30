import { ArrowRight, Sparkles, TrendingUp, LineChart, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="relative glow grain">
                <div className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rotate-[12deg] bg-[conic-gradient(at_30%_30%,_#1e90ff_0deg,_#6d28d9_90deg,_#0ea5e9_180deg,_#f59e0b_270deg,_#1e90ff_360deg)] opacity-30 blur-3xl mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] -rotate-[8deg] bg-[radial-gradient(closest-side,_rgba(99,102,241,0.35),_rgba(14,165,233,0)_70%)] blur-2xl" />

                <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                        <div>
                            <h1 className="display-font text-5xl sm:text-6xl leading-[1.05] tracking-tight">
                                Scale your SaaS with compound growth, not chaos
                            </h1>
                            <p className="mt-6 text-zinc-300 text-lg max-w-2xl">
                                I help founders engineer predictable revenue systems, sharpen activation and retention, and unlock pricing power—without bloated teams or fragile funnels.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a href="#work-with-me" className="inline-flex items-center justify-center gap-2 rounded-none bg-zinc-100 px-6 py-3 text-zinc-900 font-medium hover:bg-white/90 active:scale-[0.99] transition will-change-transform">
                                    <span>Work with me</span>
                                    <ArrowRight className="size-4" />
                                </a>
                                <a href="/principles" className="inline-flex items-center justify-center gap-2 rounded-none border border-zinc-700/80 px-6 py-3 text-zinc-100 hover:bg-zinc-800/50 transition">
                                    <Sparkles className="size-4" />
                                    <span>See outcomes</span>
                                </a>
                            </div>

                            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="size-4 text-emerald-400" />
                                    <span>MRR acceleration</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LineChart className="size-4 text-sky-400" />
                                    <span>Activation lift</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="size-4 text-violet-400" />
                                    <span>Churn defense</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4 text-amber-300" />
                                    <span>Pricing power</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-first lg:order-none">
                            <div className="absolute -inset-6 -z-10 bg-gradient-to-br from-sky-400/20 via-fuchsia-400/10 to-amber-300/20 blur-2xl" />
                            <div className="relative aspect-[4/5] border border-zinc-800/80 bg-zinc-950/40">
                                <Image src="/moon.jpg" alt="Moon" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="case-studies" className="relative border-t border-zinc-800/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div>
                            <h2 className="display-font text-2xl">About my approach</h2>
                            <p className="mt-4 text-zinc-300">
                                Growth compounds when activation, retention, and monetization reinforce one another. I map your value loops, eliminate friction in the first-run experience, and align pricing to realized outcomes so expansion becomes inevitable.
                            </p>
                        </div>
                        <ul className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                            <li className="p-5 border border-zinc-800/80 bg-zinc-950/40">
                                <h3 className="text-zinc-100 font-medium">Activation & onboarding</h3>
                                <p className="mt-2 text-zinc-400 text-sm">Shorten time-to-value, clarify aha moments, and drive setup completion with crisp product guidance.</p>
                            </li>
                            <li className="p-5 border border-zinc-800/80 bg-zinc-950/40">
                                <h3 className="text-zinc-100 font-medium">Retention mechanics</h3>
                                <p className="mt-2 text-zinc-400 text-sm">Design usage habits and trigger-driven loops that keep users returning for the core job-to-be-done.</p>
                            </li>
                            <li className="p-5 border border-zinc-800/80 bg-zinc-950/40">
                                <h3 className="text-zinc-100 font-medium">Pricing & packaging</h3>
                                <p className="mt-2 text-zinc-400 text-sm">Monetize value, not features. Introduce usage-aligned tiers and expansion paths that feel fair.</p>
                            </li>
                            <li className="p-5 border border-zinc-800/80 bg-zinc-950/40">
                                <h3 className="text-zinc-100 font-medium">Go-to-market enablement</h3>
                                <p className="mt-2 text-zinc-400 text-sm">Tighten the story, sharpen ICP focus, and align product, marketing, and sales around one metric.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="work-with-me" className="relative border-t border-zinc-800/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                        <div>
                            <h2 className="display-font text-3xl">Let’s engineer predictable growth</h2>
                            <p className="mt-4 text-zinc-300 max-w-2xl">I partner with SaaS teams to diagnose bottlenecks and implement durable systems—not hacks—that move the only numbers that matter.</p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a href="mailto:founder@yourdomain.com?subject=Growth%20Engagement" className="inline-flex items-center justify-center gap-2 rounded-none bg-zinc-100 px-6 py-3 text-zinc-900 font-medium hover:bg-white/90 active:scale-[0.99] transition">
                                    <span>Book an intro</span>
                                    <ArrowRight className="size-4" />
                                </a>
                                <a href="/principles" className="inline-flex items-center justify-center gap-2 rounded-none border border-zinc-700/80 px-6 py-3 text-zinc-100 hover:bg-zinc-800/50 transition">
                                    <span>View principles</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-6 border border-zinc-800/80 bg-zinc-950/50">
                                <ul className="space-y-4 text-sm text-zinc-300">
                                    <li className="flex items-start gap-3"><TrendingUp className="size-4 text-emerald-400 mt-0.5" /><span>Identify and remove the highest-leverage growth bottlenecks.</span></li>
                                    <li className="flex items-start gap-3"><LineChart className="size-4 text-sky-400 mt-0.5" /><span>Design experiments that drive activation and pay back in weeks.</span></li>
                                    <li className="flex items-start gap-3"><Shield className="size-4 text-violet-400 mt-0.5" /><span>Build retention moats that make churn the outlier, not the norm.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
