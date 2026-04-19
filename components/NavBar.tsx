"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "analogy", label: "Analogy" },
  { id: "how-it-works", label: "How It Works" },
  { id: "mev", label: "MEV" },
  { id: "pbs", label: "PBS" },
  { id: "chains", label: "Chains" },
  { id: "risks", label: "Risks" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-gray-200 py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-lg gradient-text hover:opacity-80 transition-opacity"
        >
          ⛓️ BlockBuilder
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-black/5 transition-all"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-gray-600 hover:text-gray-900 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden glass border-t border-gray-200 px-4 py-3 space-y-1"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-black/5 transition-all"
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
