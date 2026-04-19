"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    icon: "🏗️",
    title: "Builder",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.25)",
    points: [
      "Watches the mempool 24/7",
      "Simulates thousands of tx combinations",
      "Finds MEV opportunities",
      "Assembles the most profitable block",
      "Bids for the right to propose it",
    ],
    badge: "Optimizer",
  },
  {
    icon: "🧑‍✈️",
    title: "Validator / Proposer",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
    points: [
      "Stakes ETH to participate in consensus",
      "Gets chosen to propose the next block",
      "Receives bids from multiple builders",
      "Picks the highest bidder",
      "Signs & broadcasts the winning block",
    ],
    badge: "Proposer",
  },
  {
    icon: "📡",
    title: "Relay",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
    points: [
      "Trusted middle-man",
      "Receives blocks from builders",
      "Keeps block contents private until chosen",
      "Passes winning block to validator",
      "Prevents front-running the builder",
    ],
    badge: "Bridge",
  },
];

const flow = [
  { from: "Mempool", to: "Builder", label: "Raw txs", icon: "📥", color: "#6366f1" },
  { from: "Builder", to: "Relay", label: "Block + bid", icon: "📤", color: "#a855f7" },
  { from: "Relay", to: "Validator", label: "Best block", icon: "📡", color: "#f59e0b" },
  { from: "Validator", to: "Blockchain", label: "Proposed block", icon: "⛓️", color: "#10b981" },
];

export default function PBSSection() {
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
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-green-600 mb-4 border border-green-500/30">
          🔗 Ethereum ecosystem
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          <span className="gradient-text">PBS</span> — Who Does What?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Proposer-Builder Separation splits the job in two. Validators focus on
          security. Builders focus on profit. Everyone wins — mostly.
        </p>
      </motion.div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass rounded-3xl p-6 mb-12 border border-gray-200"
      >
        <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-6">
          Data Flow
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {flow.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="px-3 py-2 rounded-xl text-sm font-bold text-center min-w-[90px]"
                style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.from}
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="text-gray-500 text-lg"
                >
                  →
                </motion.div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
              {i === flow.length - 1 && (
                <div
                  className="px-3 py-2 rounded-xl text-sm font-bold min-w-[90px] text-center"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                >
                  {item.to}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 + 0.4 }}
            className="rounded-2xl p-6 tx-card"
            style={{ background: role.bg, border: `1px solid ${role.border}` }}
          >
            <div className="text-4xl mb-3">{role.icon}</div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-black text-lg" style={{ color: role.color }}>
                {role.title}
              </h3>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: `${role.color}22`, color: role.color }}
              >
                {role.badge}
              </span>
            </div>
            <ul className="space-y-2">
              {role.points.map((p) => (
                <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                  <span style={{ color: role.color }} className="mt-0.5 shrink-0">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Before/after PBS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div className="glass rounded-2xl p-5 border border-red-500/20">
          <h4 className="text-red-600 font-black mb-3">😵 Before PBS</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Validators had to do everything",
              "Run a staking node",
              "Search for MEV manually",
              "Optimize transaction ordering",
              "Way too complex for most",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-red-600">✗</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-5 border border-green-500/20">
          <h4 className="text-green-600 font-black mb-3">✅ After PBS</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Roles are clearly separated",
              "Validators just stake and sign",
              "Builders specialize in MEV",
              "Both earn more by specializing",
              "Healthier, more efficient ecosystem",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-green-600">✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
