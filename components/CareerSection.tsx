"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Daily Ethereum blocks", value: "~7,200" },
  { label: "Annual MEV extracted", value: "$500M+" },
  { label: "Active MEV searchers", value: "1,000s" },
  { label: "Relay block share (top 3)", value: "~80%" },
];

const reasons = [
  {
    icon: "🛡️",
    title: "Build Safer Contracts",
    color: "#6366f1",
    desc: "Knowing MEV lets you design contracts that resist sandwich attacks, frontrunning, oracle manipulation, and liquidation exploitation — skills most Solidity devs lack.",
  },
  {
    icon: "💰",
    title: "Access Higher-Paying Roles",
    color: "#10b981",
    desc: "Validator tooling, MEV systems, RPC infra, mempool analytics, relay ops — these infra roles pay more because fewer people understand them.",
  },
  {
    icon: "🔧",
    title: "Debug Real Production Issues",
    color: "#06b6d4",
    desc: '"Why did my swap fail?" "Why was I frontrun?" "Why did gas spike?" Builder knowledge lets you answer these in seconds.',
  },
  {
    icon: "🏗️",
    title: "Design Better Systems",
    color: "#a855f7",
    desc: "Understanding auction mechanics, latency, incentives, and adversarial environments makes you a stronger protocol or L2 engineer.",
  },
];

const jobPaths = [
  { role: "Smart Contract Dev", level: "Medium", color: "#6366f1", detail: "Safer contracts, MEV-resistant patterns" },
  { role: "Backend / Protocol Eng", level: "High", color: "#10b981", detail: "Core to the role, expected knowledge" },
  { role: "DeFi Engineer", level: "Critical", color: "#ec4899", detail: "You're building directly on top of this" },
  { role: "Solana Developer", level: "High", color: "#9945ff", detail: "Ordering & latency matter heavily on Solana" },
  { role: "Frontend Web3 Dev", level: "Useful", color: "#f59e0b", detail: "Better tx UX, wallet flows, error states" },
];

const levelColor: Record<string, string> = {
  Critical: "#ec4899",
  High: "#10b981",
  Medium: "#6366f1",
  Useful: "#f59e0b",
};

const learnList = [
  { num: "01", topic: "Mempool", detail: "How it works, why it's public, who can see it" },
  { num: "02", topic: "Gas Auctions", detail: "EIP-1559, base fee, priority fee mechanics" },
  { num: "03", topic: "MEV", detail: "Types, scale, real historical examples" },
  { num: "04", topic: "Validators", detail: "How block proposers are selected, staking" },
  { num: "05", topic: "Builders", detail: "What they do, how they compete in auctions" },
  { num: "06", topic: "Relays", detail: "Why they exist, trust assumptions, risks" },
  { num: "07", topic: "Finality", detail: "When is a transaction truly irreversible" },
  { num: "08", topic: "Reorgs", detail: "What happens when the chain briefly forks" },
];

export default function CareerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-cyan-400 mb-4 border border-cyan-500/30">
          💼 Why this matters for your career
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          From Coder to{" "}
          <span className="gradient-text">Real Crypto Engineer</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Crypto jobs are rarely just "write smart contracts." Good teams want developers
          who understand the{" "}
          <span className="text-white font-semibold">full transaction lifecycle</span> —
          from submission to finality.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
            className="glass rounded-2xl p-4 text-center border border-indigo-500/20"
          >
            <p className="text-2xl sm:text-3xl font-black gradient-text mb-1">{s.value}</p>
            <p className="text-xs text-gray-400 leading-tight">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 4 reasons grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
            className="glass rounded-2xl p-5 border tx-card"
            style={{ borderColor: `${r.color}30` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">{r.icon}</span>
              <div>
                <h3 className="font-black mb-1" style={{ color: r.color }}>{r.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interview advantage */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass rounded-3xl p-7 border border-yellow-500/20 mb-14"
        style={{ background: "rgba(245,158,11,0.04)" }}
      >
        <h3 className="text-xl font-black text-yellow-400 mb-5 text-center">
          ⚡ The Interview Advantage
        </h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          Asked: <span className="text-white font-semibold">"How would you build a secure DEX?"</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-4 border border-red-500/20" style={{ background: "rgba(239,68,68,0.06)" }}>
            <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-3">
              ❌ Average candidate
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Write a swap contract</li>
              <li>• Deploy it</li>
              <li>• Add some basic tests</li>
              <li className="text-gray-600 italic">...that&apos;s about it</li>
            </ul>
          </div>
          <div className="rounded-2xl p-4 border border-green-500/20" style={{ background: "rgba(16,185,129,0.06)" }}>
            <p className="text-green-400 font-bold text-xs uppercase tracking-wider mb-3">
              ✅ Builder-aware candidate
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Protect users from sandwich attacks</li>
              <li>• Use TWAP oracles (manipulation-resistant)</li>
              <li>• Optimize slippage handling</li>
              <li>• Consider private order flow / intents</li>
              <li>• Understand builder ordering incentives</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-5">
          This knowledge instantly differentiates you from 90% of applicants.
        </p>
      </motion.div>

      {/* Job paths */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-14"
      >
        <h3 className="text-xl font-black text-center mb-6 text-white">
          How important is this — by role?
        </h3>
        <div className="space-y-3">
          {jobPaths.map((j, i) => (
            <motion.div
              key={j.role}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.65 }}
              className="glass rounded-xl px-5 py-3 flex items-center justify-between border"
              style={{ borderColor: `${j.color}20` }}
            >
              <div>
                <span className="font-bold text-white text-sm">{j.role}</span>
                <span className="text-gray-500 text-xs ml-3">{j.detail}</span>
              </div>
              <span
                className="text-xs font-black px-3 py-1 rounded-full shrink-0"
                style={{
                  background: `${levelColor[j.level]}22`,
                  color: levelColor[j.level],
                  border: `1px solid ${levelColor[j.level]}44`,
                }}
              >
                {j.level}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What to learn list */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="glass rounded-3xl p-7 border border-indigo-500/20 mb-14"
      >
        <h3 className="text-xl font-black text-center mb-2 gradient-text">
          What to Learn (in order)
        </h3>
        <p className="text-gray-500 text-sm text-center mb-7">
          These 8 topics beat most applicants at any blockchain infra interview.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learnList.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06 + 0.75 }}
              className="flex items-start gap-3 rounded-xl px-4 py-3"
              style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}
            >
              <span className="text-xs font-black text-indigo-500 mt-0.5 w-6 shrink-0">{item.num}</span>
              <div>
                <p className="text-sm font-bold text-white">{item.topic}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final summary card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="glass rounded-3xl p-8 border border-indigo-500/30 text-center"
        style={{ boxShadow: "0 0 60px rgba(99,102,241,0.1)" }}
      >
        <div className="text-4xl mb-4">💡</div>
        <h3 className="text-xl font-black text-gray-300 mb-3">One-Line Summary</h3>
        <p className="text-lg sm:text-2xl text-white font-black leading-relaxed max-w-3xl mx-auto">
          A <span className="gradient-text">block builder</span> is a high-speed optimizer
          that constructs the most valuable next blockchain block and sells it to the validator.
        </p>
        <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
          Understanding this moves you from &ldquo;someone who codes contracts&rdquo; to{" "}
          <span className="text-indigo-300 font-semibold">
            a crypto engineer who understands where value, risk, and performance actually live.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
