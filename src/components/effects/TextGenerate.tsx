import { motion } from "framer-motion";

interface TextGenerateProps {
  text?: string;
  items?: string[];
  className?: string;
}

export function TextGenerate({ text, items, className = "" }: TextGenerateProps) {
  const isArray = items && items.length > 0;
  const content = isArray ? items : text ? text.split(" ") : [];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isArray) {
    return (
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`space-y-3 ${className}`}
      >
        {items.map((item, index) => (
          <motion.li key={index} variants={child} className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {content.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
