import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Palette, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Vibe Code',
    description: 'Writing maintainable and scalable code',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful user interfaces',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Thinking',
    description: 'Finding creative solutions',
  },
];

const AboutSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Asbahal_Munawaroh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">ABOUT ME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Hi, I'm <span className="text-primary">Asbahal Munawaroh</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A highly motivated and detail-oriented graduate with a Associate Degree in Information Management, currently pursuing a Bachelor 
              in Information Systems. Passionate about leveraging technology and problem-solving to create innovative solutions. Possesses a solid 
              foundation in Data analyst, Web and Mobile UI/UX design, Frontend web developer, and Web developer, got through diploma 
              studies and continuous self-learning. Eager to apply and expand technical skills in a real-world setting, and confident in the ability to 
              contribute effectively to a dynamic team to get invaluable industry experience. 
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enhancing my UI/UX design and Web development skills. 
              I believe in continuous learning and staying updated with the latest trends 
              in web development.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="btn-primary flex items-center gap-2"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.button>

              <motion.button
                className="btn-outline flex items-center gap-2"
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-glass p-6 flex items-start gap-4 hover:glow-border transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: '5+', label: 'Projects' },
                { value: '5+', label: 'Certificates' },
                { value: '5+', label: 'Skills' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 card-glass rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
