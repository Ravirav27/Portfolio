import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { CardDemo } from "@/components/ui/card-demo";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className="max-w-6xl mx-auto flex justify-center">
            <CardDemo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
