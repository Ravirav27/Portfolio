import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface FlipWordsProps {
  words: string[];
  className?: string;
}

export function FlipWords({ words, className = "" }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`inline-block text-primary ${className}`}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
}
