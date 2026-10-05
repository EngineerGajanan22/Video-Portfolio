import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Resume & Interview Coach",
    subtitle: "Generative AI Platform for Course & Interview Preparation",
    year: "2026",
    badge: "AI & Full Stack",
    description: "An AI-powered web platform that generates structured learning paths and chapter content dynamically based on user input using the Google Gemini API. Engineered RESTful APIs in Node.js and Express to orchestrate course workflows and external YouTube integrations.",
    highlights: [
      "AI Course Generation with Google Gemini API",
      "Dynamic YouTube API integration for rich study materials",
      "Robust PostgreSQL database architecture & schema design",
      "Structured learning paths with chapter milestone tracking"
    ],
    tech: ["Google Gemini API", "Node.js", "Express.js", "React.js", "PostgreSQL", "YouTube API"],
    gradient: "from-purple-900/40 via-red-900/30 to-black",
    borderColor: "border-purple-500/30 hover:border-purple-500/60"
  },
  {
    title: "Shopify-Inspired E-Commerce",
    subtitle: "Full-Stack Storefront & Cart State Management",
    year: "2026",
    badge: "E-Commerce",
    description: "A production-ready full-stack online storefront inspired by Shopify. Features fluid product catalog browsing, nested category navigation, centralized cart management with Redux Toolkit, and comprehensive RESTful API endpoints for inventory and orders.",
    highlights: [
      "Centralized state management powered by Redux Toolkit",
      "Responsive, mobile-optimized catalog with instant search & filter",
      "Scalable MongoDB document models for products and transactions",
      "Express.js & Node.js backend with secure API data validation"
    ],
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-emerald-900/40 via-red-900/30 to-black",
    borderColor: "border-emerald-500/30 hover:border-emerald-500/60"
  },
  {
    title: "Product & Item Hub",
    subtitle: "Modern RESTful CRUD & Nested Inventory Engine",
    year: "2026",
    badge: "CRUD & Systems",
    description: "A robust RESTful CRUD application designed for managing multi-tiered product catalogs and nested inventory items. Implements high-speed item searching, quantity management, containerized deployment, and resilient error-handling business logic.",
    highlights: [
      "Multi-tiered product catalog with nested item hierarchy",
      "Instant client-side & server-side search and quantity tracking",
      "Complete RESTful lifecycle: Create, Read, Update, Delete with validation",
      "Dockerized container containerization for consistent deployment"
    ],
    tech: ["C#", "JavaScript", "HTML5", "CSS3", "Docker", "RESTful APIs"],
    gradient: "from-blue-900/40 via-red-900/30 to-black",
    borderColor: "border-blue-500/30 hover:border-blue-500/60"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0d0d0d] text-white py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff2a2a]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"></span>
              Portfolio Showcase
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              Real-world software engineering applications combining AI automation, e-commerce architectures, and enterprise CRUD APIs.
            </p>
          </div>

          <a 
            href="https://github.com/EngineerGajanan22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs md:text-sm transition-all duration-300 border border-white/20 self-start md:self-auto"
          >
            <span>Visit GitHub (@EngineerGajanan22)</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl bg-gradient-to-b ${proj.gradient} p-6 border ${proj.borderColor} transition-all duration-300 flex flex-col justify-between shadow-xl`}
            >
              <div>
                {/* Card header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white font-bold border border-white/10">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {proj.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-1 tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-red-400 mb-4">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs leading-relaxed text-gray-300 mb-5 font-normal">
                  {proj.description}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-gray-300 flex items-start gap-2">
                      <span className="text-[#ff2a2a] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {proj.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/50 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
