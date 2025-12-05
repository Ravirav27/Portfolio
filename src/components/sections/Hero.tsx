import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/effects/Sparkles";
import { LightRays } from "@/components/effects/LightRays";
import { FloatingCube } from "@/components/effects/FloatingCube";
import { FlipWords } from "@/components/effects/FlipWords";
import { TypeWriter } from "@/components/effects/TypeWriter";
import DotGrid from "@/components/effects/DotGrid";
import ProfileCard from "@/components/effects/ProfileCard";
import { ViewCounter } from "@/components/ViewCounter";

export function Hero() {
  const roles = [
  "Software Developer",
  "Software Engineer Intern @ Barclays (2025)",
  "AI Engineer @ BNY Mellon (2025)",
  "Amazon ML Summer School Graduate (2025)",
  "Runner-up at BNY Mellon 2024 Hackathon",
  "Centre for Intellectual Property Rights (CIPR) IDEATHON 2024",
  "Finalist at GUVI Hackathon 2025",
  "IEEE Published Researcher - Hybrid Ensemble Model for Oral Cancer Detection (ICNGCS 2025)",
  "Web Development Lead at Google Developers Group",
  "Experienced Software Development",
  "Experienced AI/ML Software Engineer",
  "Elite in Competitive Programming from NPTEL (IIT Kharagpur)"
]
;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#a78bfa"
          activeColor="#7df9ff"
          proximity={120}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        />
      </div>

      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/5 z-1" />
      <Sparkles />
      <LightRays />
      <FloatingCube />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 xs:px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-3 flex justify-center lg:justify-start"
        >
          <ViewCounter size="md" showLabel={true} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 lg:mr-auto lg:max-w-lg"
          >
            {/* Name heading */}
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2 xs:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ravishankar S
              </span>
            </motion.h1>


            <motion.div
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2 xs:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FlipWords words={roles} className="text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold" />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start px-2 xs:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="sm"
                className="glow-primary text-xs xs:text-sm"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="glass text-xs xs:text-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="w-full max-w-md">
              <ProfileCard
                name="Ravishankar S"
                title="Software Developer"
                handle="ravishankar"
                status="Available"
                contactText="Contact Me"
                avatarUrl="/ravishankar_profile.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                behindGlowEnabled={true}
                behindGlowColor="rgba(132, 0, 255, 0.5)"
                behindGlowSize="80%"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          style={{ pointerEvents: 'auto', transform: 'translateX(-50%)' }}
          onMouseDown={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ pointerEvents: 'auto' }}
          >
            <ArrowDown className="w-8 h-8 text-cyan-400 hover:text-cyan-300 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
