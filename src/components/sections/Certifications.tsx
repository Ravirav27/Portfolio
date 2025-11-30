import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    link: "#",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2022",
    link: "#",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    link: "#",
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
