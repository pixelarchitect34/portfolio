import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronRight, Download, MapPin, Calendar, Star, Phone, Building, GraduationCap, Award, Users, Zap } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: Code },
    { name: 'JavaScript', level: 90, category: 'Frontend', icon: Code },
    { name: 'React', level: 88, category: 'Frontend', icon: Globe },
    { name: 'Node.js', level: 85, category: 'Backend', icon: Database },
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: Database },
    { name: 'Git/GitHub', level: 92, category: 'Tools', icon: Code },
    { name: 'IT Support', level: 88, category: 'Technical', icon: Smartphone },
    { name: 'Networking', level: 80, category: 'Technical', icon: Globe },
    { name: 'Cloud Basics', level: 75, category: 'Cloud', icon: Database }
  ];

  const projects = [
    {
      title: 'Kazi Konnect Africa',
      description: 'Job-matching platform connecting employers with skilled professionals across Africa. Features advanced search, profile matching, and application tracking.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Gilbertech/kazi-konnect',
      live: 'https://kazikonnect.netlify.app/',
      highlights: ['Job Matching Algorithm', 'Real-time Notifications', 'Advanced Search Filters', 'Profile Management']
    },
    {
      title: 'Cyberwave IT Consultancy',
      description: 'Professional consultancy website showcasing IT services, cybersecurity solutions, and digital transformation expertise.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Gilbertech/cyberwave-consultancy',
      live: 'https://cyberwaveitconsultancy.netlify.app/',
      highlights: ['Modern UI/UX', 'Service Showcase', 'Contact Integration', 'SEO Optimized']
    },
    {
      title: 'Vermi Farm Management',
      description: 'Agricultural technology solution for farm management, crop monitoring, and resource optimization with data analytics.',
      tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/Gilbertech/vermi-farm',
      highlights: ['Farm Analytics', 'Resource Tracking', 'Weather Integration', 'Mobile Responsive']
    },
    {
      title: 'FindThem Backend System',
      description: 'Robust backend API system with PostgreSQL database integration for user management and data processing.',
      tech: ['Node.js', 'PostgreSQL', 'Express', 'API Design'],
      github: 'https://github.com/Gilbertech/findthem-backend',
      highlights: ['RESTful API', 'Database Optimization', 'Authentication', 'Error Handling']
    }
  ];

  const experiences = [
    {
      title: 'Founder & Lead Consultant',
      company: 'Cyberwave IT Consultancy',
      period: '2025 - Present',
      location: 'Thika, Kenya',
      description: 'Founded and leading an IT consultancy specializing in cybersecurity, digital transformation, and software solutions for businesses.',
      achievements: [
        'Established consultancy serving 10+ clients',
        'Developed comprehensive IT security frameworks',
        'Led digital transformation projects',
        'Built team of skilled IT professionals'
      ]
    },
    {
      title: 'IT Support Specialist',
      company: 'Industrial Attachment Program',
      period: '2024 (3 months)',
      location: 'Kenya',
      description: 'Provided comprehensive IT support including hardware troubleshooting, network maintenance, and user assistance.',
      achievements: [
        'Resolved 95% of technical issues within SLA',
        'Implemented network optimization solutions',
        'Trained staff on new software systems',
        'Documented IT procedures and protocols'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Independent',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Developing custom web applications and providing IT consultancy services for various clients.',
      achievements: [
        'Delivered 15+ successful projects',
        'Maintained 100% client satisfaction rate',
        'Specialized in React and Node.js development',
        'Built long-term client relationships'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in ICT',
      institution: 'Murang\'a University of Technology',
      period: '2022 - Present',
      status: 'Ongoing',
      description: 'Comprehensive program covering software development, networking, database management, and IT project management.',
      achievements: ['Dean\'s List recognition', 'Active in tech clubs', 'Leadership roles in student projects']
    },
    {
      degree: 'Software Engineering Certification',
      institution: 'Power Learn Project (PLP)',
      period: '2024 - Present',
      status: 'In Progress',
      description: 'Intensive program focusing on modern software development practices, full-stack development, and industry best practices.',
      achievements: ['Top 10% performance', 'Completed advanced React modules', 'Built portfolio projects']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent"
            >
              Gilbert Ngaruiya
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.05 }}
                  className={`capitalize transition-colors duration-200 hover:text-purple-600 ${
                    activeSection === section ? 'text-purple-600' : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <img 
                src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" 
                alt="Gilbert Ngaruiya"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Hi, I'm Gilbert
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-4 text-white/90"
            >
              ICT Specialist & Software Engineer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg mb-12 text-white/80"
            >
              Founder of Cyberwave IT Consultancy
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ChevronRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/Gilbertech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/gilbert-ngaruiya-a08762375/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:gilbertngaruiya@gmail.com"
              className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Passionate ICT Specialist & Entrepreneur</h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a dedicated ICT specialist and software engineer based in Thika, Kenya, with a passion for 
                creating innovative digital solutions. As the founder of Cyberwave IT Consultancy, I lead a team 
                that specializes in cybersecurity, digital transformation, and custom software development.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Currently pursuing my BSc in ICT at Murang'a University of Technology while completing advanced 
                software engineering certification at Power Learn Project. My expertise spans full-stack development, 
                IT support, and business consultancy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Thika, Kenya</span>
                </div>
                <div className="flex items-center gap-4">
                  <Building className="w-5 h-5 text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Founder, Cyberwave IT Consultancy</span>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>BSc ICT Student & PLP Certified</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
              >
                <Code className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Building scalable web applications with React, Node.js, and modern databases.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
              >
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">IT Consultancy</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Providing cybersecurity solutions and digital transformation strategies.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}
              >
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="font-semibold mb-2">Leadership & Innovation</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Leading teams and driving innovation in technology solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-purple-600" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-purple-600">{skill.level}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mb-2`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-xs text-gray-500">{skill.category}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`rounded-lg p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className={`text-xs flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Star className="w-3 h-3 text-yellow-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <ChevronRight className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Education & Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-purple-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{edu.period}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      edu.status === 'Ongoing' || edu.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className={`text-sm flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Star className="w-3 h-3 text-yellow-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always interested in new opportunities, exciting projects, and collaborations. 
                Whether you need IT consultancy, software development, or want to discuss a project, 
                let's connect and explore how we can work together.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-purple-600" />
                  <a href="mailto:gilbertngaruiya@gmail.com" className="hover:text-purple-600 transition-colors">
                    gilbertngaruiya@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-purple-600" />
                  <a href="tel:+254768299985" className="hover:text-purple-600 transition-colors">
                    +254 768 299 985
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>Thika, Kenya</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Github className="w-5 h-5 text-purple-600" />
                  <a href="https://github.com/Gilbertech" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-purple-600 transition-colors">
                    github.com/Gilbertech
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5 text-purple-600" />
                  <a href="https://www.linkedin.com/in/gilbert-ngaruiya-a08762375/" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-purple-600 transition-colors">
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 focus:border-purple-500' 
                      : 'bg-white border-gray-300 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 focus:border-purple-500' 
                      : 'bg-white border-gray-300 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 focus:border-purple-500' 
                      : 'bg-white border-gray-300 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-200`}
                ></motion.textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © Gilbert Ngaruiya 2025 — Founder, Cyberwave IT Consultancy
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Gilbertech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/gilbert-ngaruiya-a08762375/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:gilbertngaruiya@gmail.com"
                className={`p-2 rounded-lg transition-all duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;