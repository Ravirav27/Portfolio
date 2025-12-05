import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function InspirationalQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quotes = [
    "The only way to predict the future is to invent it.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section id="quote" className="py-12 md:py-24 relative overflow-hidden">
      <div ref={ref}>
        <BackgroundBeamsWithCollision className="min-h-[32rem] md:min-h-[40rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 px-4 text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              A Quote that drives me to 
              <div className="relative mx-auto inline-block w-max mt-4 md:mt-2">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold">
                     create beyond limits
                  </span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold">
                     create beyond limits
                  </span>
                </div>
              </div>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl italic text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-8 md:mt-12"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 font-semibold">
                &ldquo;{randomQuote}&rdquo;
              </span>
              <div className="text-lg md:text-xl mt-4 font-medium text-gray-600 dark:text-gray-400">
                — Alan Kay
              </div>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-6 md:mt-8"
            >
              Every line of code is a masterpiece in progress
            </motion.p>
          </motion.div>
        </BackgroundBeamsWithCollision>
      </div>
    </section>
  );
}
