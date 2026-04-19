import ParticleField from "@/components/ParticleField";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AnalogySection from "@/components/AnalogySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MEVSection from "@/components/MEVSection";
import PBSSection from "@/components/PBSSection";
import ChainsSection from "@/components/ChainsSection";
import RisksSection from "@/components/RisksSection";
import CareerSection from "@/components/CareerSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f7f6ff] text-gray-900 overflow-x-hidden">
      <ParticleField />
      <NavBar />

      <div id="hero">
        <HeroSection />
      </div>

      {/* Section divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div id="analogy">
        <AnalogySection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>

      <div id="mev">
        <MEVSection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>

      <div id="pbs">
        <PBSSection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div id="chains">
        <ChainsSection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </div>

      <div id="risks">
        <RisksSection />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div id="career">
        <CareerSection />
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>
          Built to make blockchain approachable.{" "}
          <span className="gradient-text font-bold">Block Builder Explained.</span>
        </p>
        <p className="mt-1 text-xs">
          Learn more at{" "}
          <a
            href="https://www.nervos.org/knowledge-base/What_is_a_Block_Builder_in_Blockchain_(explainCKBot)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Nervos Knowledge Base
          </a>
        </p>
      </footer>
    </main>
  );
}
