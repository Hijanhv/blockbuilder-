"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const mevTypes = [
  {
    icon: "⚡",
    name: "Arbitrage",
    color: "#6366f1",
    desc: "Same asset, different prices on different exchanges. Builder spots the gap and profits.",
    example: "ETH is $3000 on Uniswap, $3005 on Sushi → buy low, sell high instantly",
    risk: "Low",
  },
  {
    icon: "💧",
    name: "Liquidation",
    color: "#10b981",
    desc: "When a loan becomes undercollateralized, the builder can liquidate it and claim a bonus.",
    example: "User borrowed $1000 against $1200 ETH — ETH drops → builder triggers liquidation",
    risk: "Low",
  },
  {
    icon: "🥪",
    name: "Sandwich Attack",
    color: "#ef4444",
    desc: "Builder spots your big swap, places one trade before and one after it to profit at your expense.",
    example: "You swap 10 ETH → builder front-runs, price worsens for you, builder profits",
    risk: "High (harmful)",
  },
  {
    icon: "🔄",
    name: "Backrun",
    color: "#f59e0b",
    desc: "After a large trade creates a price impact, the builder places a profitable trade right after it.",
    example: "Whale buys 500 ETH → price spikes → builder instantly sells at higher price",
    risk: "Medium",
  },
];

function BlockSimulator() {
  const [optimized, setOptimized] = useState(false);

  const naiveBlock = [
    { tx: "A - Token Swap", fee: "$5", color: "#6366f1" },
    { tx: "B - NFT Buy", fee: "$10", color: "#a855f7" },
    { tx: "C - Transfer", fee: "$3", color: "#06b6d4" },
  ];

  const optimizedBlock = [
    { tx: "A - Token Swap", fee: "$5", color: "#6366f1" },
    { tx: "Builder Arb", fee: "$40 MEV", color: "#10b981" },
    { tx: "B - NFT Buy", fee: "$10", color: "#a855f7" },
  ];

  return (
    <div className="glass rounded-2xl p-6 border border-indigo-500/20 mt-10">
      <h3 className="text-lg font-black text-white mb-1 text-center">
        Block Value Simulator
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        See how a builder turns $18 into $55+ by reordering transactions
      </p>

      <div className="flex gap-3 mb-6 justify-center">
        <button
          onClick={() => setOptimized(false)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
            !optimized
              ? "bg-indigo-600 text-white"
              : "glass text-gray-400 border border-gray-600"
          }`}
        >
          Naive Block
        </button>
        <button
          onClick={() => setOptimized(true)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
            optimized
              ? "bg-green-600 text-white"
              : "glass text-gray-400 border border-gray-600"
          }`}
        >
          Builder Optimized
        </button>
      </div>

      <div className="space-y-3 max-w-sm mx-auto">
        {(optimized ? optimizedBlock : naiveBlock).map((item, i) => (
          <motion.div
            key={item.tx + optimized}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm"
            style={{
              background: `${item.color}15`,
              border: `1px solid ${item.color}40`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: item.color }}
              >
                {i + 1}
              </div>
              <span style={{ color: item.color }} className="font-medium">
                {item.tx}
              </span>
            </div>
            <span className="text-gray-300 font-bold">{item.fee}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        key={optimized ? "opt" : "naive"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mt-5 pt-4 border-t border-gray-700"
      >
        <span className="text-gray-400 text-sm">Total block value: </span>
        <span
          className={`text-2xl font-black ${
            optimized ? "text-green-400" : "text-gray-300"
          }`}
        >
          {optimized ? "$55+" : "$18"}
        </span>
        {optimized && (
          <p className="text-green-400 text-xs mt-1">
            3× more profitable by inserting one arbitrage tx!
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function MEVSection() {
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
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-pink-400 mb-4 border border-pink-500/30">
          💸 The money-making engine
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          What is{" "}
          <span className="gradient-text">MEV?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          MEV = <strong className="text-white">Maximal Extractable Value.</strong> It&apos;s the extra profit a builder can make
          by cleverly ordering transactions. Sometimes harmless — sometimes sneaky.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
        {mevTypes.map((mev, i) => (
          <motion.div
            key={mev.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
            className="glass rounded-2xl p-5 border tx-card"
            style={{ borderColor: `${mev.color}33` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{mev.icon}</span>
                <span
                  className="font-black text-base"
                  style={{ color: mev.color }}
                >
                  {mev.name}
                </span>
              </div>
              <span
                className="text-xs px-2 py-1 rounded-full font-bold"
                style={{
                  background:
                    mev.risk === "High (harmful)"
                      ? "#ef444422"
                      : mev.risk === "Low"
                      ? "#10b98122"
                      : "#f59e0b22",
                  color:
                    mev.risk === "High (harmful)"
                      ? "#ef4444"
                      : mev.risk === "Low"
                      ? "#10b981"
                      : "#f59e0b",
                }}
              >
                {mev.risk}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{mev.desc}</p>
            <div
              className="text-xs px-3 py-2 rounded-lg font-mono"
              style={{ background: `${mev.color}10`, color: `${mev.color}bb` }}
            >
              {mev.example}
            </div>
          </motion.div>
        ))}
      </div>

      <BlockSimulator />
    </section>
  );
}
