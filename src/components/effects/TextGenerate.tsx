import { motion } from "framer-motion";

interface TextGenerateProps {
  text: string;
  className?: string;
}

export function TextGenerate({ text, className = "" }: TextGenerateProps) {
  const words = text.split(" ");

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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
