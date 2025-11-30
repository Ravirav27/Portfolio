import { motion } from "framer-motion";

export function BackgroundBeams() {
  const beams = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: (i * 100) / 5,
    delay: i * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute w-px h-full"
          style={{
            left: `${beam.x}%`,
            background: `linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.5), transparent)`,
          }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: beam.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
