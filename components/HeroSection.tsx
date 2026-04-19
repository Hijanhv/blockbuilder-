"use client";
import { motion } from "framer-motion";

const txItems = [
  { label: "ETH Transfer", fee: "$12", color: "#6366f1", delay: 0 },
  { label: "NFT Purchase", fee: "$8", color: "#a855f7", delay: 0.2 },
  { label: "Token Swap", fee: "$15", color: "#ec4899", delay: 0.4 },
  { label: "DeFi Borrow", fee: "$5", color: "#06b6d4", delay: 0.6 },
  { label: "Liquidation", fee: "$22", color: "#f59e0b", delay: 0.8 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 mb-4"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-indigo-600 mb-6 border border-indigo-500/30">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Blockchain Explained Simply
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-tight">
          <span className="gradient-text">Block Builder</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
          The invisible architect that decides which transactions make it into
          the next blockchain block — and{" "}
          <span className="text-yellow-600 font-bold">how much money it makes doing so.</span>
        </p>
      </motion.div>

      {/* Animated visual: mempool → builder → block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10 w-full max-w-4xl mt-10"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
          {/* Mempool */}
          <div className="glass rounded-2xl p-5 w-full sm:w-52 border border-indigo-500/20">
            <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-3 text-center">
              Mempool (Waiting Room)
            </p>
            <div className="space-y-2">
              {txItems.map((tx) => (
                <motion.div
                  key={tx.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + tx.delay }}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs"
                  style={{ background: `${tx.color}22`, border: `1px solid ${tx.color}44` }}
                >
                  <span style={{ color: tx.color }} className="font-medium">
                    {tx.label}
                  </span>
                  <span className="text-gray-700">{tx.fee}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrow + Builder box */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
            {/* Left arrow */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-indigo-400 text-2xl hidden sm:block"
            >
              →
            </motion.div>
            <motion.div
              className="text-indigo-400 text-2xl sm:hidden"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ↓
            </motion.div>

            {/* Builder */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" } as object}
              className="glass rounded-2xl p-5 w-full sm:w-44 text-center border border-purple-500/30"
              style={{ boxShadow: "0 0 40px rgba(168,85,247,0.2)" }}
            >
              <div className="text-4xl mb-2">🏗️</div>
              <p className="text-sm font-bold text-purple-700">Block Builder</p>
              <p className="text-xs text-gray-600 mt-1">
                Sorts, simulates & optimizes
              </p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mt-3"
              />
            </motion.div>

            {/* Right arrow */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
              className="text-indigo-400 text-2xl hidden sm:block"
            >
              →
            </motion.div>
            <motion.div
              className="text-indigo-400 text-2xl sm:hidden"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            >
              ↓
            </motion.div>
          </div>

          {/* Resulting Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
            className="glass rounded-2xl p-5 w-full sm:w-52 border border-green-500/30"
            style={{ boxShadow: "0 0 30px rgba(34,197,94,0.15)" }}
          >
            <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-3 text-center">
              Final Block ✓
            </p>
            <div className="space-y-2">
              {[
                { label: "Liquidation", fee: "$22", color: "#f59e0b" },
                { label: "Builder Arb", fee: "$40 MEV", color: "#10b981" },
                { label: "Token Swap", fee: "$15", color: "#ec4899" },
              ].map((tx) => (
                <div
                  key={tx.label}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs"
                  style={{ background: `${tx.color}22`, border: `1px solid ${tx.color}44` }}
                >
                  <span style={{ color: tx.color }} className="font-medium">
                    {tx.label}
                  </span>
                  <span className="text-gray-700">{tx.fee}</span>
                </div>
              ))}
              <div className="text-center text-green-600 text-xs font-bold mt-2 pt-2 border-t border-green-500/20">
                Total Value: $77+
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="z-10 mt-12 flex flex-col items-center gap-2 text-gray-500 text-sm"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-indigo-400 text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
