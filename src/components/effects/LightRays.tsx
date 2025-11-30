import { motion } from "framer-motion";

export function LightRays() {
  const rays = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    rotation: (i * 360) / 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {rays.map((ray) => (
          <div
            key={ray.id}
            className="absolute top-1/2 left-1/2 w-1 h-[150%] origin-top"
            style={{
              transform: `translateX(-50%) rotate(${ray.rotation}deg)`,
              background: `linear-gradient(to bottom, hsl(var(--primary) / 0.3), transparent)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
