import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Web Developer (PHP, Laravel)",
    company: "Cyber Rafting",
    location: "Pune, Maharashtra",
    period: "Dec. 2025 – Sept. 2026",
    type: "Full-Time",
    badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
    bullets: [
      "Developed and maintained PHP/Laravel web applications using Laravel MVC, MySQL, JavaScript, HTML, and CSS, implementing reusable modules, CRUD operations, authentication, validation, and business logic.",
      "Built and integrated RESTful APIs and database-driven features to improve application functionality, data flow, and system reliability while reducing manual business processes.",
      "Optimized MySQL queries, backend logic, and application performance to improve page and API response times and overall user experience."
    ],
    skills: ["Laravel MVC", "PHP", "MySQL", "RESTful APIs", "Authentication", "Validation", "Business Logic", "Query Optimization"]
  },
  {
    role: "Associate – Data Operations",
    company: "Amazon",
    location: "Corporate Operations",
    period: "Mar. 2025 – Apr. 2025",
    type: "Contract / Ops",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    bullets: [
      "Implemented and monitored data compliance processes using SQL to support internal data governance and quality requirements.",
      "Wrote and optimized SQL queries to extract, validate, and analyze datasets for reporting and audit requirements."
    ],
    skills: ["SQL", "Data Compliance", "Query Optimization", "Data Governance", "Reporting & Audits"]
  },
  {
    role: "Software Developer Intern",
    company: "Codec Technologies",
    location: "Software Division",
    period: "Dec. 2024 – Mar. 2025",
    type: "Internship",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    bullets: [
      "Developed responsive and reusable React.js components using JavaScript (ES6+), HTML, CSS, and modern UI practices to build user-friendly web applications.",
      "Integrated RESTful APIs with frontend applications, implementing dynamic data rendering, form handling, validation, and state management for interactive user experiences."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "REST APIs", "State Management", "Form Validation", "Dynamic Rendering"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"></span>
            Career Milestones
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Hands-on software development experience across enterprise Laravel MVC applications, Amazon data operations, and high-performance React frontends.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="relative border-l border-white/10 ml-3 md:ml-8 pl-6 md:pl-12 flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#ff2a2a] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(255,42,42,0.6)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(255,42,42,0.08)]">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-gray-400">
                      <span className="text-white font-bold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#ff2a2a] text-base leading-none mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-red-500/30 transition-colors"
                    >
                      {skill}
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

export default Experience;
