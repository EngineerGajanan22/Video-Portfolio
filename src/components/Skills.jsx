import { motion } from 'framer-motion';
 
const Skills = () => {
  const skillsData = [
    {
      category: 'Languages & Core Foundations',
      description: 'Foundational programming, logic, and standard web formats',
      skills: ['PHP', 'JavaScript (ES6+)', 'C/C++', 'SQL', 'HTML5 / CSS3', 'XML / JSON', 'OOP Concepts', 'Data Structures (DSA)', 'SDLC & Debugging', 'Responsive Web Dev'],
    },
    {
      category: 'Frameworks & Frontend',
      description: 'Modern MVC & reactive client-side frontend architectures',
      skills: ['Laravel MVC', 'React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Backend, RESTful APIs & Databases',
      description: 'Server architecture, API design, security, and persistence',
      skills: ['Laravel MVC Architecture', 'RESTful APIs', 'CRUD Operations', 'Authentication (Auth)', 'Data Validation', 'External Integrations', 'Business Logic Layers', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools, AI & Professional Practices',
      description: 'Productivity accelerators, version control, and team collaboration',
      skills: ['Git / GitHub', 'VS Code', 'Docker', 'Google Gemini API', 'ChatGPT', 'Claude', 'Postman', 'Problem Solving', 'Teamwork', 'Time Management'],
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
 
  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };
 
  const SkillCard = ({ category, description, skills }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -6,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
        className="group relative bg-white border border-gray-200/80 rounded-3xl p-6 md:p-7 h-fit shadow-md hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
      >
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none" />
 
        {/* Card content */}
        <div className="relative z-10">
          <div className="mb-4">
            <h3 className="text-base font-black text-gray-900 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
              {category}
            </h3>
            <p className="text-xs text-gray-500 font-medium mt-1">
              {description}
            </p>
          </div>
 
          {/* Skills pills container */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <motion.button
                key={idx}
                variants={skillPillVariants}
                initial="initial"
                whileHover="hover"
                className="px-3 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-[#ff2a2a] hover:text-white border border-gray-200 rounded-full transition-all duration-300 cursor-default select-none shadow-xs"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
 
  return (
    <section id="skills" className="relative w-full bg-white py-20 md:py-24 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.04)_25%,rgba(0,0,0,.04)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.04)_75%,rgba(0,0,0,.04)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.04)_25%,rgba(0,0,0,.04)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.04)_75%,rgba(0,0,0,.04)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>
 
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-14"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest px-3.5 py-1.5 bg-red-50 border border-red-200 rounded-full">
              Skills & Tech Stack
            </span>
          </div>
 
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 mb-3 tracking-tight">
            Technical Proficiencies
          </h2>
 
          <p className="text-sm md:text-base text-gray-600 font-normal max-w-2xl leading-relaxed">
            Full-stack engineering capabilities spanning PHP/Laravel MVC, React frontend development, relational & NoSQL databases, and generative AI integrations.
          </p>
        </motion.div>
 
        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              category={item.category}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </motion.div>
      </div>
 
      {/* Floating accent elements */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-44 h-44 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
 
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-5 w-48 h-48 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
 
export default Skills;