"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const analogy = [
  { emoji: "👤", label: "Passengers", equals: "Transactions", color: "#6366f1", desc: "People waiting to board = transactions waiting to be included" },
  { emoji: "💰", label: "Cargo Fees", equals: "Gas Fees / Tips", color: "#f59e0b", desc: "What you pay to get on the plane = gas fees you pay for a tx" },
  { emoji: "✈️", label: "Plane Capacity", equals: "Block Gas Limit", color: "#06b6d4", desc: "Only so many seats = only so much gas in one block" },
  { emoji: "📦", label: "Cargo Loader", equals: "Block Builder", color: "#a855f7", desc: "Decides who boards and in what order = that's the builder!" },
  { emoji: "🧑‍✈️", label: "Pilot", equals: "Validator / Proposer", color: "#10b981", desc: "Flies the plane (signs & proposes the block)" },
];

export default function AnalogySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-yellow-400 mb-4 border border-yellow-500/30">
          ✈️ Think of it like a flight
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          A Simple{" "}
          <span className="gradient-text-gold">Analogy</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Blockchain sounds complex — but here&apos;s all you need to know, using something familiar.
        </p>
      </motion.div>

      {/* Airplane visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass rounded-3xl p-8 mb-12 border border-yellow-500/20 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="text-7xl mb-4">✈️</div>
        <p className="text-xl font-bold text-yellow-400 mb-2">Loading a Flight</p>
        <p className="text-gray-400 max-w-lg mx-auto">
          Imagine you&apos;re the person loading a plane. You decide which passengers
          board, in what order, and how to maximize cargo value before takeoff.
          <br />
          <span className="text-white font-semibold">That&apos;s literally what a block builder does.</span>
        </p>
      </motion.div>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {analogy.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
            className="glass rounded-2xl p-5 border tx-card"
            style={{ borderColor: `${item.color}33` }}
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-sm font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${item.color}22`, color: item.color }}
              >
                {item.label}
              </span>
              <span className="text-gray-500 text-xs">=</span>
              <span className="text-sm font-bold text-white">{item.equals}</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
