import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.main 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
