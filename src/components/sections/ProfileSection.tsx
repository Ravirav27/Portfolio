import { motion } from "framer-motion";
import { useEffect } from "react";
import ProfileCard from "@/components/effects/ProfileCard";

export function ProfileSection() {
  const handleContactClick = () => {
    // Navigate to contact section
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Inject profile card into Hero section on desktop
  useEffect(() => {
    const heroProfileCard = document.getElementById('hero-profile-card');
    if (heroProfileCard && window.innerWidth >= 1024) {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'w-full max-w-md';
      
      // Create a wrapper for the ProfileCard
      const wrapper = (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProfileCard
            name="Ravishankar S"
            title="Full Stack Developer"
            handle="ravishankar"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/ravishankar_profile.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            behindGlowEnabled={true}
            behindGlowColor="rgba(132, 0, 255, 0.5)"
            behindGlowSize="80%"
          />
        </motion.div>
      );
    }
  }, []);

  return (
    <section id="profile" className="relative py-24 overflow-hidden lg:hidden">
      {/* Mobile Profile Section - Only show on mobile/tablet */}
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Logo and Title Container */}
          <div className="flex items-center gap-6 mb-8 w-full justify-center">
            {/* Circular Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gradient-to-r from-purple-500 to-cyan-500 shadow-lg hover:scale-110 transition-transform duration-300">
                <img 
                  src="/RS1 logo.png" 
                  alt="RS1 Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md"
          >
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
              onContactClick={handleContactClick}
              behindGlowEnabled={true}
              behindGlowColor="rgba(132, 0, 255, 0.5)"
              behindGlowSize="80%"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
