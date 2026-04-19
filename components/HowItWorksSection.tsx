"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "👁️",
    title: "Scan the Mempool",
    subtitle: "The Waiting Room",
    color: "#6366f1",
    desc: "Every transaction you send sits in a public waiting area called the mempool. Think of it like a ticket queue. The builder watches this 24/7.",
    detail: "Swap tokens · Buy NFTs · Transfer ETH · DeFi loans · Liquidations",
  },
  {
    number: "02",
    icon: "🧪",
    title: "Simulate Transactions",
    subtitle: "Will it work? Is there profit?",
    color: "#a855f7",
    desc: "Before packing the block, the builder runs thousands of simulations per second — like a chess engine thinking ahead — to find the best ordering.",
    detail: "Will it succeed? · How much gas? · Arbitrage opportunity? · Profit from ordering?",
  },
  {
    number: "03",
    icon: "🎯",
    title: "Optimize the Order",
    subtitle: "The Magic Sauce",
    color: "#ec4899",
    desc: "This is where MEV happens. By placing a profitable trade right after a big swap, the builder can extract extra value from the same transactions.",
    detail: "User swaps → price moves → builder arbitrages → extra profit extracted",
  },
  {
    number: "04",
    icon: "📦",
    title: "Build the Block",
    subtitle: "Pack it perfectly",
    color: "#f59e0b",
    desc: "The builder assembles the final block — highest fees first, profitable bundles included, all fitting within the gas limit. Like packing a suitcase by value.",
    detail: "High-fee txs · Profitable bundles · Normal user txs · Valid state",
  },
  {
    number: "05",
    icon: "🏆",
    title: "Send to Validator",
    subtitle: "The Auction",
    color: "#10b981",
    desc: "Multiple builders compete! Each sends their best block to the validator. Highest paying builder wins — their block gets proposed to the chain.",
    detail: "Builder A bids $200 · Builder B bids $350 → Builder B wins",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-indigo-600 mb-4 border border-indigo-500/30">
          ⚙️ Step-by-step breakdown
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          How It{" "}
          <span className="gradient-text">Actually Works</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Five steps. From your transaction entering the waiting room to landing on-chain.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line opacity-30 hidden sm:block" />

        <div className="space-y-12">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Step number badge - center on timeline */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 step-badge rounded-full items-center justify-center z-10 text-white font-black text-sm">
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className={`glass rounded-2xl p-6 border tx-card w-full sm:w-5/12 ${
                    isLeft ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                  style={{ borderColor: `${step.color}33` }}
                >
                  {/* Mobile step badge */}
                  <div
                    className="sm:hidden inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: `${step.color}22`, color: step.color }}
                  >
                    Step {step.number}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{step.icon}</div>
                    <div>
                      <h3
                        className="text-lg font-black mb-0.5"
                        style={{ color: step.color }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2 font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      <div
                        className="text-xs px-3 py-2 rounded-lg font-mono leading-relaxed"
                        style={{ background: `${step.color}11`, color: `${step.color}cc` }}
                      >
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
