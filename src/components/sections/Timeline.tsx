import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "University Name",
    period: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning",
  },
  {
    degree: "Bachelor of Technology",
    institution: "College Name",
    period: "2016 - 2020",
    description: "Computer Science and Engineering",
  },
];

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using modern tech stack",
  },
  {
    title: "Full Stack Developer",
    company: "Startup XYZ",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects with React and Node.js",
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Developed responsive websites and learned modern development practices",
  },
];

interface TimelineItemProps {
  items: typeof education | typeof experience;
  icon: typeof GraduationCap;
  delay: number;
}

function TimelineItem({ items, icon: Icon, delay }: TimelineItemProps) {
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

          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <h3 className="text-xl font-semibold">
                {'degree' in item ? item.degree : item.title}
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                {item.period}
              </span>
            </div>
            <p className="text-primary font-medium mb-2">
              {'institution' in item ? item.institution : item.company}
            </p>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
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
              <TimelineItem items={education} icon={GraduationCap} delay={0.2} />
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-gradient">Experience</span>
              </h2>
              <TimelineItem items={experience} icon={Briefcase} delay={0.4} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
