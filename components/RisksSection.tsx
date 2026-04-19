"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const risks = [
  {
    icon: "🏛️",
    title: "Centralization",
    color: "#ef4444",
    desc: "A small number of builders control the majority of blocks. If 3 builders go offline, the whole network could slow down.",
    severity: 85,
  },
  {
    icon: "🚫",
    title: "Censorship",
    color: "#f97316",
    desc: "Builders can choose to ignore certain transactions — e.g. refusing to include transactions from certain addresses or protocols.",
    severity: 70,
  },
  {
    icon: "🥪",
    title: "Sandwich Attacks",
    color: "#eab308",
    desc: "Builders can exploit regular users by sandwiching their trades — making users get worse prices while the builder profits.",
    severity: 75,
  },
  {
    icon: "📡",
    title: "Relay Dependence",
    color: "#a855f7",
    desc: "Relays have enormous power as the middlemen. If a major relay goes down or acts maliciously, it disrupts the whole system.",
    severity: 65,
  },
];

const future = [
  { icon: "🔐", title: "Encrypted Mempools", desc: "Hide transactions until they're included, preventing MEV extraction", color: "#6366f1" },
  { icon: "⚖️", title: "Fair Ordering", desc: "First-in-first-out ordering so no one can reorder your tx", color: "#10b981" },
  { icon: "🌐", title: "Decentralized Builders", desc: "Many competing builders = no single point of control or failure", color: "#06b6d4" },
  { icon: "🔗", title: "In-Protocol PBS", desc: "Builder separation baked into the blockchain protocol itself", color: "#f59e0b" },
  { icon: "🔄", title: "Shared Sequencing", desc: "For rollups — a neutral party orders transactions fairly across chains", color: "#ec4899" },
];

export default function RisksSection() {
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
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-red-500 mb-4 border border-red-500/30">
          ⚠️ Not all sunshine and profit
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-4">
          The{" "}
          <span style={{ background: "linear-gradient(135deg, #ef4444, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Dark Side
          </span>{" "}
          & The Future
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          The block builder system has real risks. The community is actively working on solutions.
        </p>
      </motion.div>

      {/* Risks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {risks.map((risk, i) => (
          <motion.div
            key={risk.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            className="glass rounded-2xl p-5 border tx-card"
            style={{ borderColor: `${risk.color}33` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{risk.icon}</span>
              <div>
                <h3 className="font-black" style={{ color: risk.color }}>{risk.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 flex-1 rounded-full bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${risk.severity}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                      className="h-full rounded-full"
                      style={{ background: risk.color }}
                    />
                  </div>
                  <span className="text-xs" style={{ color: risk.color }}>
                    Risk {risk.severity}%
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{risk.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Future solutions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-black text-center mb-8">
          But the community is building{" "}
          <span className="gradient-text">solutions</span> →
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {future.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.7 }}
              className="glass rounded-xl p-4 text-center tx-card border"
              style={{ borderColor: `${item.color}30` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-xs font-bold mb-1" style={{ color: item.color }}>
                {item.title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
