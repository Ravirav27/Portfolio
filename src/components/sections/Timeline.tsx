import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import ElectricBorder from "@/components/effects/ElectricBorder";

// Tech stack icon mapping
const techStackIconMap: Record<string, { devicon: string; emoji: string }> = {
  "Node.js": { devicon: "devicon-nodejs-plain", emoji: "🟢" },
  "Shell Script": { devicon: "devicon-bash-plain", emoji: "🖥️" },
  "OpenShift": { devicon: "devicon-kubernetes-plain", emoji: "☸️" },
  "GitLab Pipelines": { devicon: "devicon-gitlab-plain", emoji: "🔄" },
  "Docker": { devicon: "devicon-docker-plain", emoji: "🐳" },
  "Python": { devicon: "devicon-python-plain", emoji: "🐍" },
  "Streamlit": { devicon: "devicon-python-plain", emoji: "🎨" },
  "Deep Learning": { devicon: "devicon-tensorflow-original", emoji: "🧠" },
  "Transformers": { devicon: "devicon-pytorch-original", emoji: "⚡" },
  "Vector Databases": { devicon: "devicon-postgresql-plain", emoji: "🔍" },
};

function getTechIcon(tech: string): string {
  const cleanTech = tech.trim();
  return techStackIconMap[cleanTech]?.devicon || "devicon-devicon-plain";
}

const education = [
  // {
  //   degree: "Master of Computer Science",
  //   institution: "University Name",
  //   period: "2020 - 2022",
  //   description: "Specialized in Artificial Intelligence and Machine Learning",
  // },
  {
    degree: "Bachelor of Technology",
    specialization: "Information Technology",
    college: "Madras Institute of Technology",
    location: "Anna University, Chennai",
    period: "2022 - 2026",
    cgpa: "9.18/10.0",
  },
];

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Barclays",
    location: "Pune, Maharashtra",
    period: "June 2025 – July 2025",
    description: "Developed a centralized tool for resource optimization for OpenShift by automating container resource allocation and horizontal pod autoscaling. Integrated comprehensive pods health reporting and multicluster management, significantly reducing manual monitoring efforts.",
    highlights: [
      "Achieved nearly 10% cost savings through efficient resource allocation and processing efficiency by 87.5%",
      "Reduced frontend latency to under 1 second (from 5–6 seconds)",
    ],
    techStack: "Node.js, Shell Script, OpenShift, GitLab Pipelines, Docker",
  },
  {
    title: "AI Engineer Intern",
    company: "Bank of New York (BNY Mellon)",
    location: "Chennai, Tamil Nadu",
    period: "March 2025 – September 2025",
    description: "Worked at the Centre for Artificial Intelligence and Data Science Research (CAInDRA), collaborating with Madras Medical College (MMC) on oral cancer detection and contributing to financial RAG development initiatives.",
    highlights: [
      "Built an AI model achieving 98.87% accuracy using EfficientNet-B2 with a voting ensemble mechanism",
      "Published research in the IEEE ICNGCS 2025 Conference: 'A Hybrid Ensemble Model Using DenseNet121 and EfficientNetB2 for Improved Oral Cancer Detection' (Paper ID: ICNGCS2025-308)",
      "Contributed to Financial RAG (Retrieval-Augmented Generation) for the icaif-24-finance-rag-challenge",
    ],
    techStack: "Python, Streamlit, Deep Learning, Transformers, Vector Databases",
  },
];

interface TimelineItemProps {
  items: typeof education | typeof experience;
  icon: typeof GraduationCap;
  delay: number;
  borderColor?: string;
}

function TimelineItem({ items, icon: Icon, delay, borderColor = "#a78bfa" }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: delay + index * 0.2 }}
          className="relative pl-8 pb-12 last:pb-0"
        >
          {/* Timeline line */}
          {index !== items.length - 1 && (
            <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-8 h-8 rounded-full glass flex items-center justify-center glow-primary">
            <Icon className="w-4 h-4 text-primary" />
          </div>

          <ElectricBorder color={borderColor} speed={0.8} chaos={0.4} thickness={1.5} style={{ borderRadius: '12px' }}>
            <div className="glass rounded-xl p-6 hover-lift">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    {'degree' in item ? item.degree : item.title}
                  </h3>
                  {'specialization' in item && (
                    <p className="text-sm text-primary font-medium mt-1">
                      {item.specialization}
                    </p>
                  )}
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {item.period}
                </span>
              </div>
              {'college' in item ? (
                <>
                  <p className="text-primary font-medium mb-1">
                    {item.college}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.location}
                  </p>
                  {item.cgpa && (
                    <p className="text-sm text-muted-foreground">
                      CGPA: <span className="font-semibold text-primary">{item.cgpa}</span>
                    </p>
                  )}
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.company}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {item.title}
                    </p>
                  </div>
                  
                  {item.location && (
                    <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                      📍 {item.location}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-3 space-y-1.5">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {item.techStack && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-xs font-semibold text-primary mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.split(",").map((tech, idx) => {
                          const deviconClass = getTechIcon(tech);
                          return (
                            <div
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium flex items-center gap-1.5 hover:border-purple-500/50 transition-colors"
                            >
                              {deviconClass ? (
                                <i className={`${deviconClass} text-sm`}></i>
                              ) : null}
                              <span>{tech.trim()}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </ElectricBorder>
        </motion.div>
      ))}
    </div>
  );
}

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-gradient">Education</span>
              </h2>
              <TimelineItem items={education} icon={GraduationCap} delay={0.2} borderColor="#fbbf24" />
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-gradient">Experience</span>
              </h2>
              <TimelineItem items={experience} icon={Briefcase} delay={0.4} borderColor="#a78bfa" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
