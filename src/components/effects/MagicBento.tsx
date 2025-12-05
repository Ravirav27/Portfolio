import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface BentoItem {
  id: string;
  title: string;
  description?: string;
  content?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  gradient?: string;
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
  columns?: number;
}

export function MagicBento({
  items,
  className = "",
  columns = 3,
}: MagicBentoProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sizeMap = {
    small: "col-span-1 row-span-1",
    medium: "col-span-2 row-span-2",
    large: "col-span-2 row-span-1",
  };

  // Assign sizes to create interesting layouts
  const itemsWithSizes = items.map((item, index) => {
    if (!item.size) {
      // Create a pattern: medium, small, small, large, small, small, etc.
      const pattern = [
        { size: "medium", span: 2 },
        { size: "small", span: 1 },
        { size: "small", span: 1 },
        { size: "large", span: 2 },
      ];
      const sizeConfig = pattern[index % pattern.length];
      return { ...item, size: sizeConfig.size as BentoItem["size"] };
    }
    return item;
  });

  return (
    <div
      className={clsx(
        `grid gap-4 auto-rows-[200px] md:auto-rows-[250px]`,
        `grid-cols-1 md:grid-cols-${columns}`,
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {itemsWithSizes.map((item) => (
        <motion.div
          key={item.id}
          className={clsx(
            "relative group cursor-pointer rounded-xl overflow-hidden",
            sizeMap[item.size || "small"],
            item.className
          )}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background gradient */}
          <div
            className={clsx(
              "absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300",
              item.gradient ||
                "bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10"
            )}
          />

          {/* Animated border effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Magic glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={hoveredId === item.id ? { backgroundPosition: "200% 0" } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3), transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between rounded-xl backdrop-blur-sm">
            <div className="space-y-3">
              {item.icon && (
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 transform">
                  {item.icon}
                </div>
              )}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* Custom content */}
            {item.content && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.content}
              </div>
            )}

            {/* Decorative dots */}
            <div className="absolute top-4 right-4 flex gap-1.5">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary/50"
                animate={
                  hoveredId === item.id
                    ? { opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-accent/50"
                animate={
                  hoveredId === item.id
                    ? { opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-primary/50"
                animate={
                  hoveredId === item.id
                    ? { opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
