import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Code2, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/effects/GlareHover";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Ravi2ie",
    color: "hover:text-[#333] dark:hover:text-white",
    external: true,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/s-ravishankar/",
    color: "hover:text-[#0077b5]",
    external: true,
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/Ravishankar27/",
    color: "hover:text-[#FFA116]",
    external: true,
  },
  {
    name: "Buy Me Coffee",
    icon: Coffee,
    url: "https://buymeacoffee.com/ravishankar27",
    color: "hover:text-[#FFDD00]",
    external: true,
  },
  {
    name: "Email",
    icon: Mail,
    url: "#contact",
    color: "hover:text-primary",
    external: false,
  },
];

export function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <GlareHover
              width="500px"
              height="100px"
              background="rgba(0, 0, 0, 0.3)"
              borderRadius="16px"
              borderColor="#a78bfa"
              glareColor="#7df9ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className="flex items-center justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Let's Connect</span>
              </h2>
            </GlareHover>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Find me on these platforms and let's build something amazing together
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlareHover
                    width="180px"
                    height="60px"
                    background="rgba(0, 0, 0, 0.3)"
                    borderRadius="12px"
                    borderColor="#a78bfa"
                    glareColor="#7df9ff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={600}
                    playOnce={false}
                    className="flex items-center justify-center pointer-events-auto"
                  >
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-foreground transition-colors ${link.color} pointer-events-auto`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className={`flex items-center gap-2 text-foreground transition-colors ${link.color} pointer-events-auto`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.name}
                      </button>
                    )}
                  </GlareHover>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
