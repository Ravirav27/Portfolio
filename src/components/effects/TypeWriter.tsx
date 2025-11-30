import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypeWriter({ text, className = "", delay = 0 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-5 bg-primary ml-1"
      />
    </span>
  );
}
