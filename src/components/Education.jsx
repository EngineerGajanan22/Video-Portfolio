import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Sinhgad Institute of Technology and Science",
    location: "Pune, Maharashtra",
    degree: "B.E. in Information Technology",
    period: "Sept. 2021 – June 2024",
    score: "GPA: 8.07 / 10",
    badge: "Graduation",
    description: "Rigorous 4-year engineering program focusing on modern software engineering principles, database architectures, distributed systems, and web application development.",
    highlights: [
      "Database Management Systems & SQL Query Design",
      "Data Structures, Algorithms & Object-Oriented Programming (OOP)",
      "Web Technologies & RESTful Web Services",
      "Software Development Life Cycle (SDLC) & Agile Methodologies"
    ]
  },
  {
    institution: "Gramin Polytechnic, Vishnupuri, Nanded",
    location: "Nanded, Maharashtra",
    degree: "Diploma in Computer Engineering",
    period: "Aug. 2018 – Aug. 2021",
    score: "Percentage: 87.77%",
    badge: "Diploma with Distinction",
    description: "Strong foundational technical training in computer hardware, networking, procedural & object-oriented programming, and relational database management.",
    highlights: [
      "Graduated with 87.77% (First Class with Distinction)",
      "C, C++, and Core Programming Paradigms",
      "Relational Database Basics & Schema Normalization",
      "Operating Systems & Computer System Architecture"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]"></span>
            Academic Foundation
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            Education & Qualifications
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Formal technical education combining degree-level software engineering with comprehensive computer science fundamentals.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold inline-block mb-2">
                      {edu.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-gray-300 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      📍 {edu.location}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-gray-400 block mb-1">
                      {edu.period}
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded bg-white text-black font-black text-xs shadow">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-300 mb-6 font-normal">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="text-[#ff2a2a] text-sm">▸</span>
                      <span>{h}</span>
                    </div>
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

export default Education;
