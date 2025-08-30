import { ArrowLeft, Target, Workflow, Layers, Gauge, Users, Gem } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Principles | Your SEO title",
    description: "Operating principles for scaling SaaS with durable growth systems.",
};

export default function PrinciplesPage() {
    return (
        <main>
            <section className="relative glow grain">
                <div className="absolute -top-32 -left-40 h-[36rem] w-[36rem] rotate-[10deg] bg-[conic-gradient(at_30%_30%,_#1e90ff_0deg,_#6d28d9_90deg,_#0ea5e9_180deg,_#f59e0b_270deg,_#1e90ff_360deg)] opacity-30 blur-3xl mix-blend-screen pointer-events-none" />
                <div className="mx-auto max-w-6xl px-6 pt-24 pb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
                        <ArrowLeft className="size-4" />
                        <span>Back</span>
                    </Link>
                    <h1 className="display-font text-4xl sm:text-5xl mt-6 leading-[1.07]">
                        Principles for predictable SaaS growth
                    </h1>
                    <p className="mt-4 text-zinc-300 max-w-2xl">
                        A short, evolving set of rules that guide how I make decisions, prioritize experiments, and design systems that compound.
                    </p>
                </div>
            </section>

            <section className="relative border-t border-zinc-800/60">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Target className="size-4 text-amber-300" />
                                <h3 className="font-medium">Start with the core job-to-be-done</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Everything aligns to the moment a user gets the job done the first time. Reduce steps to the first value event.</p>
                        </li>
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Workflow className="size-4 text-sky-400" />
                                <h3 className="font-medium">Design loops, not funnels</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Acquisition, activation, retention, and monetization should reinforce each other. Build feedback that compounds.</p>
                        </li>
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Layers className="size-4 text-violet-400" />
                                <h3 className="font-medium">Sequence before scale</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Fix order-of-operations. Activation before acquisition. Retention before monetization expansion.</p>
                        </li>
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Gauge className="size-4 text-emerald-400" />
                                <h3 className="font-medium">Choose one north-star per quarter</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Pick the metric that unlocks the system constraint and route all execution toward it. Everything else waits.</p>
                        </li>
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Users className="size-4 text-blue-300" />
                                <h3 className="font-medium">Obsess over ICP fit</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Narrow the audience, strengthen the promise. Messaging, product, and pricing get sharper as focus tightens.</p>
                        </li>
                        <li className="p-6 border border-zinc-800/80 bg-zinc-950/40">
                            <div className="flex items-center gap-3 text-zinc-100">
                                <Gem className="size-4 text-fuchsia-300" />
                                <h3 className="font-medium">Monetize outcomes, not features</h3>
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">Price aligns with realized value and the path to expansion is obvious and fair. Features are means, not ends.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative border-t border-zinc-800/60">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                        <div>
                            <h2 className="display-font text-3xl">Put the principles to work</h2>
                            <p className="mt-4 text-zinc-300 max-w-2xl">If these resonate, let’s identify your biggest bottleneck and build the minimal system that unlocks the next stage of growth.</p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a href="mailto:founder@yourdomain.com?subject=Principles%20to%20practice" className="inline-flex items-center justify-center gap-2 rounded-none bg-zinc-100 px-6 py-3 text-zinc-900 font-medium hover:bg-white/90 active:scale-[0.99] transition">
                                    <span>Book an intro</span>
                                </a>
                                <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-none border border-zinc-700/80 px-6 py-3 text-zinc-100 hover:bg-zinc-800/50 transition">
                                    <span>Back to home</span>
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 border border-zinc-800/80 bg-zinc-950/50">
                            <ul className="space-y-4 text-sm text-zinc-300">
                                <li>We’ll clarify ICP, promise, and the first value event.</li>
                                <li>We’ll map loops and select a single north-star metric.</li>
                                <li>We’ll ship the first experiment within 14 days.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


