import { motion } from "framer-motion";

export function FloatingCube() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border-2 border-primary/30"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            transform: "rotate(45deg)",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
