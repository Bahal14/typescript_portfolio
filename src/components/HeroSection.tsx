import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import asbahalPhoto from '@/assets/asbahal-foto.png';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Bahal14',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/asbahal-munawaroh-41b121353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/halmnaw._?igsh=eXI3Z2t6NTZmaHk2',
    label: 'Instagram',
  },
];

const skills = ['React', 'Javascript', 'Node.js', 'Tailwind'];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-10 lg:pt-20">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-muted-foreground uppercase tracking-widest text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello World, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="glow-text">ASBAHAL MUNAWAROH</span>
              <br />
              <span className="text-gradient">MY PORTFOLIO</span> 
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-primary font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              UI/UX Designer & Front End Developer
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Passionate about creating beautiful, responsive, and user-friendly web applications 
              with modern technologies and clean code practices.
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - ID Card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl animate-pulse" />
              
              {/* ID Card */}
              <div className="relative card-glass p-6 w-72 md:w-80 glow-border">
                {/* Photo */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50" />
                  <img
                    src={asbahalPhoto}
                    alt="Asbahal Munawaroh"
                    className="relative w-full h-full object-cover rounded-full border-2 border-primary"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    ASBAHAL MUNAWAROH
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    UI/UX Designer & Front End Developer
                  </p>
                  <div className="flex justify-center gap-2">
                    {['Figma', 'React'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-4 right-4 w-8 h-8">
                  <div className="w-full h-0.5 bg-primary/50 mb-1" />
                  <div className="w-2/3 h-0.5 bg-primary/30 mb-1" />
                  <div className="w-1/3 h-0.5 bg-primary/20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center text-muted-foreground"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
