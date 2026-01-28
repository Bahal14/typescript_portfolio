import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Award, Layers, ExternalLink, Github, Figma, Eye, FileText } from 'lucide-react';

type TabType = 'projects' | 'certificates' | 'techstack';

const tabs = [
  { id: 'projects' as TabType, label: 'Projects', icon: Code },
  { id: 'certificates' as TabType, label: 'Certificates', icon: Award },
  { id: 'techstack' as TabType, label: 'Tech Stack', icon: Layers },
];

const webProjects = [
  {
    title: 'Personal Profile',
    description: 'A personal portfolio website built with React and Tailwind CSS',
    tags: ['React.js', 'Tailwind'],
    link: 'https://github.com/Bahal14/personal-profile',
    type: 'github',
  },
  {
    title: 'Monitoring CHR Web App',
    description: 'Front end monitoring CHR web application',
    tags: ['React.js'],
    link: 'https://github.com/Bahal14/app-mik-mon',
    type: 'github',
  },
  {
    title: 'Monitoring CHR Web App',
    description: 'Backend monitoring CHR web application',
    tags: ['Python'],
    link: 'https://github.com/Bahal14/server-mik-mon',
    type: 'github',
  },
  {
    title: 'Productivity Web App',
    description: 'Productivity web app for fun sessions fiture mood tracker and employee performance',
    tags: ['React.js', 'Express.js'],
    link: 'https://github.com/andyna23028-art/proactive-corevo-group-5',
    type: 'github',
  },
  {
    title: 'Letter Track Web App',
    description: 'A web-based application designed to streamline the tracking, recording, and archiving of incoming and outgoing correspondence.',
    tags: ['PHP', 'JavaScript', 'MySQL'],
    link: 'https://github.com/Bahal14/Surat-Web-App',
    type: 'github',
  },
];

const uiuxProjects = [
  {
    title: 'Course Mobile App Design',
    description: 'UI/UX design for a course mobile application',
    tags: ['Figma', 'UI/UX'],
    link: 'https://www.figma.com/design/XCsVPey2NCqotv9Z3O3Q8f/Untitled?node-id=0-1&t=S6iPtA6mF3Yocn82-1',
    type: 'figma',
  },
  {
    title: 'Web App Design with Theme Employee Productivity',
    description: 'Member Task About of Employee and HRD prototype',
    tags: ['Figma', 'Prototype'],
    link: 'https://www.figma.com/design/984Fyetjl21MxCwQZ2B0W6/Wireframe-Hi-Fi?node-id=0-1&p=f&t=VQSYXLkyLQPGNaj9-0',
    type: 'figma',
  },
  {
    title: 'Web App Design Decision Support System',
    description: 'Decision Support System for Giving Annual Employee Rewards',
    tags: ['Figma', 'Prototype'],
    link: 'https://www.figma.com/design/t6hCPHG2JhzEehBsHQueku/Web-Sistem-Pendukung-Keputusan--Community-?node-id=0-1&t=MeE01PRU6aaGEDvk-1',
    type: 'figma',
  },
];

const certificates = [
  {
    title: 'Sertifikat Studi Independen UI/UX Design & Web Development',
    issuer: 'Celerates',
    date: 'Des 2025',
    link: 'https://drive.google.com/file/d/112aD5ecn78GFC1N_ExqCMw4Tuj-l4suD/view',
    type: 'drive',
  },
  {
    title: 'Junior Web Developer (BNSP)',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    date: 'Des 2023 - 3 tahun',
    link: 'https://drive.google.com/file/d/1Omt4FdZkMtzJSYKUA4-yy2lmoa5w4PYc/view?usp=sharing',
    type: 'drive',
  },
  {
    title: 'Sertifikat Web Developer Terra Course',
    issuer: 'Terra Computer System Kediri',
    date: 'Jan 2025',
    link: 'https://drive.google.com/file/d/1TzyJO4F-aIWEBeg9pKRIGcQJ0X-ex81d/view?usp=sharing',
    type: 'drive',
  },
  {
    title: 'Sertifikat Soft Skill: Personal Branding',
    issuer: 'Celerates',
    date: 'Sept 2025',
    link: 'https://drive.google.com/file/d/1Y_pmTsmO9I0jIzTq7ONVanHKGBvenrnV/view',
    type: 'drive',
  },
  {
    title: 'Sertifikat Soft Skill: Self Management',
    issuer: 'Celerates',
    date: 'Okt 2025',
    link: 'https://drive.google.com/file/d/1G5g7O6uxmcAqyUsvc5eBKMgsB0R7ilpn/view',
    type: 'drive',
  },
  {
    title: 'Sertifikat Soft Skill: Project Management',
    issuer: 'Celerates',
    date: 'Nov 2025',
    link: 'https://drive.google.com/file/d/1utpzEDRNfStONqxOhjAp4sRf1NAvs0EU/view',
    type: 'drive',
  },
  {
    title: 'Sertifikat Soft Skill: Career Preparation',
    issuer: 'Celerates',
    date: 'Des 2025',
    link: 'https://drive.google.com/file/d/1zBaSwupMaiKjLJcD7b1HRyGC4og33l1M/view',
    type: 'drive',
  },
];

const techStack = {
  languages: [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Kotlin', icon: '📱' },
    { name: 'Python', icon: '🐍' },
  ],
  frameworks: [
    { name: 'Node.js', icon: '💚' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '💨' },
  ],
  databases: [
    { name: 'MySQL', icon: '🗃️' },
    { name: 'PostgreSQL', icon: '🐘' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: '📦' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Balsamiq', icon: '📝' },
    { name: 'VS Code', icon: '💻' },
    { name: 'SQLyog', icon: '🗄️' },
    { name: 'DBeaver', icon: '🦫' },
  ],
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [projectFilter, setProjectFilter] = useState<'web' | 'uiux'>('web');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">PORTFOLIO SHOWCASE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-glass p-2 rounded-xl flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Filter */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setProjectFilter('web')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    projectFilter === 'web'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Web/Apps
                </button>
                <button
                  onClick={() => setProjectFilter('uiux')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    projectFilter === 'uiux'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  UI/UX Design
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(projectFilter === 'web' ? webProjects : uiuxProjects).map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          {project.type === 'github' ? (
                            <Github className="text-primary" size={24} />
                          ) : (
                            <Figma className="text-primary" size={24} />
                          )}
                        </div>
                        <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                /* PASTIKAN motion.a MEMBUNGKUS SELURUH KONTEN KARTU */
                <motion.a
                  key={cert.title}
                  href={cert.link} // Link ditaruh di sini
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-card group block cursor-pointer relative" // Tambahkan relative
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Konten Visual Kartu */}
                  <div className="aspect-video bg-gradient-to-br from-secondary to-card rounded-lg mb-4 flex items-center justify-center border border-primary/20 relative overflow-hidden">
                    <Award className="text-primary/50 group-hover:scale-110 transition-transform duration-300" size={48} />
                    
                    {/* Overlay Hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Konten Teks */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="inline-block px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                          {cert.issuer}
                        </span>
                        <span className="inline-block px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    
                    {/* Indikator Klik */}
                    <div className="p-2 text-muted-foreground group-hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </motion.a> // Tag penutup harus motion.a
              ))}
            </motion.div>
          )}

          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Languages */}
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-6">Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {techStack.languages.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-card text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-3xl mb-2 block">{tech.icon}</span>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-6">Frameworks</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {techStack.frameworks.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-card text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-3xl mb-2 block">{tech.icon}</span>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-6">Databases</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {techStack.databases.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-card text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-3xl mb-2 block">{tech.icon}</span>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-6">Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                  {techStack.tools.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="tech-card text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-3xl mb-2 block">{tech.icon}</span>
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
