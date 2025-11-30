import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Palette, Server, Smartphone } from "lucide-react";
import { GlowCard } from "@/components/effects/GlowCard";
import { BackgroundBeams } from "@/components/effects/BackgroundBeams";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Database,
    title: "Database & APIs",
    items: ["REST APIs", "GraphQL", "SQL", "Redis"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "JavaScript", "WebGL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    items: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Palette,
    title: "Design & Tools",
    items: ["Figma", "Git", "Docker", "AWS"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <BackgroundBeams />
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlowCard className="h-full">
                    <div className="p-6">
                      <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                      <ul className="space-y-2">
                        {skill.items.map((item) => (
                          <li key={item} className="text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
