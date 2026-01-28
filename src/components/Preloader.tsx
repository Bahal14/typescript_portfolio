import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated Robot Icon */}
      <motion.div
        className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="text-8xl md:text-9xl"
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            🤖
          </motion.div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold font-display tracking-wider glow-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        ASBAHAL MUNAWAROH
      </motion.h1>

      {/* Progress Bar */}
      <motion.div
        className="mt-8 w-64 md:w-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground font-mono">
          Loading... {progress}%
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse opacity-20" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full animate-pulse opacity-20" style={{ animationDelay: '1s' }} />
    </motion.div>
  );
};

export default Preloader;
