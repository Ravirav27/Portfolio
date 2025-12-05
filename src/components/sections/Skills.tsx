import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { BackgroundBeams } from "@/components/effects/BackgroundBeams";
import AdvancedMagicBento from "@/components/effects/AdvancedMagicBento";
import { LampContainer } from "@/components/ui/lamp";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <BackgroundBeams />
      
      {/* Lamp Light Effect - Positioned Above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full h-96 pointer-events-none">
        <LampContainer className="!min-h-96 !py-0">
          <div />
        </LampContainer>
      </div>

      {/* Skills Content */}
      <div className="container px-4 relative z-10 pt-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Skills Title with Gradient */}
          <div className="mb-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 blur-lg opacity-75"></span>
                <span className="relative bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent">Skills</span>
              </span>
            </h2>
          </div>

          <AdvancedMagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </motion.div>
      </div>
    </section>
  );
}
