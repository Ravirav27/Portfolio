import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { TextGenerate } from "@/components/effects/TextGenerate";
import ElectricBorder from "@/components/effects/ElectricBorder";
import TextType from "@/components/effects/TextType";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Array of bio details that will be randomly selected and typed
  const bioDetails = useMemo(() => [
    "I'm a software developer who builds scalable systems, high-accuracy AI models, and strong developer communities.",
    "As an SDE Intern at Barclays, I engineered an OpenShift optimization tool that improved performance by 87.5% and cut latency from 6 seconds to under 1 second.",
    "I delivered a 10% cost reduction across deployments through efficient resource allocation.",
    "As an AI Engineer Intern at BNY Mellon, I developed an oral cancer detection model achieving 98.87% accuracy.",
    "I built a Financial RAG system that was published at IEEE ICNGCS 2025.",
    "I'm a 2025 Amazon ML Summer School Graduate with expertise in machine learning at scale.",
    "Runner-Up at BNY Hackathon and CIPR Ideathon finalist with proven innovation capabilities.",
    "GUVI Hackathon Finalist and NPTEL Elite Competitive Programmer.",
    "As GDG MIT Lead, I've driven large-scale developer initiatives and community-building efforts.",
    "Skilled in Java, Python, C++, AI/ML pipelines, n8n automation, and modern frameworks.",
    "I love creating technology that is fast, scalable, and truly impactful.",
    "My passion is solving complex problems through clean, maintainable code and innovative solutions."
  ], []);

  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

  // Initialize with a random selection of details
  useEffect(() => {
    if (bioDetails.length === 0) return;

    // Shuffle and select a few random details
    const shuffled = [...bioDetails].sort(() => Math.random() - 0.5);
    setSelectedDetails(shuffled.slice(0, 5)); // Show 5 random details
  }, [bioDetails]);

  const handleSentenceComplete = () => {
    // After a sentence completes, optionally fetch a new one
    // This happens automatically as TextType cycles through the array
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50 blur-2xl group-hover:opacity-70 transition-opacity rounded-3xl" />
              <div className="relative glass rounded-3xl p-2">
                <img
                  src="/ravishankar_profile.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <ElectricBorder color="#a78bfa" speed={0.8} chaos={0.4} thickness={1.5} style={{ borderRadius: '16px' }}>
                <div className="glass rounded-2xl p-8 hover-lift">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Bio</h3>
                  
                  {/* TextType Effect for Random Bio Details */}
                  {selectedDetails.length > 0 && (
                    <div className="mb-6 min-h-24">
                      <TextType
                        text={selectedDetails}
                        typingSpeed={30}
                        deletingSpeed={15}
                        pauseDuration={2500}
                        loop={true}
                        showCursor={true}
                        cursorCharacter="▊"
                        cursorClassName="text-gradient"
                        className="text-muted-foreground leading-relaxed text-lg font-medium"
                        onSentenceComplete={handleSentenceComplete}
                      />
                    </div>
                  )}

                  {/* Additional Static Bio */}
                  <TextGenerate 
                    items={[
                      "Software developer building scalable systems, high-accuracy AI models, and strong developer communities",
                      "SDE Intern at Barclays: Engineered an OpenShift optimization tool improving performance by 87.5%, cutting latency from 6s to <1s, delivering 10% cost reduction",
                      "AI Engineer Intern at BNY Mellon: Developed oral cancer detection model achieving 98.87% accuracy and built Financial RAG system published at IEEE ICNGCS 2025",
                      "2025 Amazon ML Summer School Graduate with proven innovation: Runner-Up at BNY Hackathon and CIPR Ideathon, GUVI Hackathon Finalist",
                      "NPTEL Elite Competitive Programmer with leadership experience as Google Developers Group MIT Lead",
                      "Skilled in Java, Python, C++, AI/ML pipelines, n8n automation, and modern frameworks creating technology that is fast, scalable, and impactful",
                      "....To know more about me, connect on LinkedIn!"
                    ]}
                    className="text-muted-foreground leading-relaxed"
                  />
                </div>
              </ElectricBorder>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
