"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chains = [
  {
    name: "Ethereum",
    icon: "💎",
    color: "#627eea",
    bg: "rgba(98,126,234,0.08)",
    border: "rgba(98,126,234,0.25)",
    maturity: 95,
    desc: "The most advanced builder market. Flashbots ecosystem dominates, with MEV-Boost used by most validators.",
    facts: ["Flashbots / MEV-Boost", "PBS fully live", "~$500M+ MEV extracted", "Relay marketplace"],
  },
  {
    name: "Solana",
    icon: "⚡",
    color: "#9945ff",
    bg: "rgba(153,69,255,0.08)",
    border: "rgba(153,69,255,0.25)",
    maturity: 70,
    desc: "Extremely fast (50,000 TPS). Jito protocol introduced a similar MEV marketplace. Searchers and validators interact at speed.",
    facts: ["Jito MEV marketplace", "Ultra-fast blocks (400ms)", "Different architecture", "Growing ecosystem"],
  },
  {
    name: "Bitcoin",
    icon: "₿",
    color: "#f7931a",
    bg: "rgba(247,147,26,0.08)",
    border: "rgba(247,147,26,0.25)",
    maturity: 30,
    desc: "Mining pools choose which transactions to include based on fees. No smart contracts = less MEV, simpler selection.",
    facts: ["Mining pools decide", "Fee-priority selection", "No formal builder market", "Simple & reliable"],
  },
];

export default function ChainsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-blue-600 mb-4 border border-blue-500/30">
          🌐 Across the ecosystem
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          Block Builders on{" "}
          <span className="gradient-text">Different Chains</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Not all blockchains work the same way. Here&apos;s how the builder market
          varies across the big three.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {chains.map((chain, i) => (
          <motion.div
            key={chain.name}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
            className="rounded-2xl p-6 tx-card"
            style={{ background: chain.bg, border: `1px solid ${chain.border}` }}
          >
            <div className="text-4xl mb-3">{chain.icon}</div>
            <h3 className="text-xl font-black mb-1" style={{ color: chain.color }}>
              {chain.name}
            </h3>

            {/* Maturity bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Builder Market Maturity</span>
                <span style={{ color: chain.color }}>{chain.maturity}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${chain.maturity}%` } : {}}
                  transition={{ duration: 1, delay: i * 0.15 + 0.5 }}
                  className="h-full rounded-full"
                  style={{ background: chain.color }}
                />
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{chain.desc}</p>
            <ul className="space-y-1.5">
              {chain.facts.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                  <span style={{ color: chain.color }}>▸</span> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
