import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ChevronDown } from "lucide-react";
import ElectricBorder from "@/components/effects/ElectricBorder";

const certifications = [
  {
    title: "Node.js Certificate",
    issuer: "Professional Development",
    date: "2024",
    image: "/Node js Certificate.png",
  },
  {
    title: "Springboot Certificate",
    issuer: "Spring Framework",
    date: "2024",
    image: "/Springboot Certificate.png",
  },
  {
    title: "AWS - Amazon GenAI",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/Amazon_gen_AI.png",
  },
  {
    title: "Generative AI",
    issuer: "AI & Machine Learning",
    date: "2024",
    image: "/Gen_ai.png",
  },
  {
    title: "Prompt Engineering",
    issuer: "AI & LLM specialization",
    date: "2024",
    image: "/Prompt_eng.png",
  },
  {
    title: "Docker",
    issuer: "Containerization Technology",
    date: "2024",
    image: "/Docker.png",
  },
  {
    title: "Apache Kafka",
    issuer: "Stream Processing & Message Broker",
    date: "2024",
    image: "/Kafka.png",
  },
  {
    title: "CI/CD Pipeline",
    issuer: "DevOps Engineering",
    date: "2024",
    image: "/CI_CD.png",
  },
  {
    title: "Git and GitHub",
    issuer: "Version Control System",
    date: "2024",
    image: "/Git_and_Github.png",
  },
  {
    title: "IEEE Research Paper 1",
    issuer: "IEEE ICNGCS 2025",
    date: "2025",
    image: "/IEEE_paper_1.png",
  },
  {
    title: "IEEE Research Paper 2",
    issuer: "IEEE ICNGCS 2025",
    date: "2025",
    image: "/IEEE_paper_2.png",
  },
  {
    title: "TechSA Certification",
    issuer: "Technical Skills Academy",
    date: "2024",
    image: "/Techsa.png",
  },
  {
    title: "Walmart Internship Recognition",
    issuer: "Walmart Labs",
    date: "2024",
    image: "/walmart.png",
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(6); // Show 2 rows (6 items for 3 columns)
  const itemsPerRow = 3;
  const rowsToLoad = 2;
  const itemsToLoad = itemsPerRow * rowsToLoad;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + itemsToLoad);
  };

  const visibleCertifications = certifications.slice(0, visibleCount);
  const hasMoreCertifications = visibleCount < certifications.length;

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % itemsToLoad) * 0.1 }}
                layout
              >
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={1.5} style={{ borderRadius: '16px' }}>
                    <div className="rounded-2xl overflow-hidden group relative h-64 bg-gray-900/50 hover-lift cursor-pointer">
                      {/* Certificate Image */}
                      <img 
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay with Details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-accent/20">
                            <Award className="w-5 h-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                            <p className="text-xs text-accent">{cert.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ElectricBorder>
                </a>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {hasMoreCertifications && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={handleViewMore}
                className="group relative px-8 py-3 font-semibold text-white rounded-lg overflow-hidden"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-2">
                  <span>View More Certifications</span>
                  <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
