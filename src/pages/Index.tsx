import { Suspense, lazy } from 'react';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { About } from "@/components/sections/About";
import { InspirationalQuote } from "@/components/sections/InspirationalQuote";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Certifications } from "@/components/sections/Certifications";
import { Projects } from "@/components/sections/Projects";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProfileSection />
      <About />
      <InspirationalQuote />
      <Skills />
      <Timeline />
      <Certifications />
      <Projects />
      <Social />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2025 Ravishankar S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
