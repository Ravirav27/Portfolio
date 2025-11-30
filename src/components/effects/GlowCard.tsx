import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 animate-pulse" />
      
      {/* Glow effect following cursor */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.4), transparent)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative glass rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
}
