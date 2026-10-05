import gajananImage from '../assets/about/gajanan.jpg';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[340px] shrink-0 mt-8 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-950 w-full max-w-[290px] rounded-2xl p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-950 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black rounded-full shadow-inner"></div>
              </div>
              
              {/* Image Container with Gajanan's picture */}
              <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 border border-white/10 relative shadow-inner">
                <img 
                  src={gajananImage} 
                  alt="Gajanan Gangakhedkar" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-white border border-white/20">
                  DEVELOPER PASS
                </div>
              </div>

              {/* Badge Footer Info */}
              <div className="mt-3 px-1 text-left flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xs font-black tracking-wider uppercase">
                    Gajanan Gangakhedkar
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-red-400 text-[11px] font-bold">
                  PHP & Full Stack Developer
                </p>
                <div className="flex justify-between items-center pt-2 mt-1 border-t border-white/10 text-[9px] font-mono text-gray-400">
                  <span>EXP: 1+ YR</span>
                  <span>ID: GG-2026</span>
                  <span>PUNE, IN</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-6 md:mt-0 relative z-20">
          
          <div className="inline-block bg-black text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Hello, I’m Gajanan!
          </h2>
          
          <p className="text-base sm:text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50">
            I am a <span className="text-black text-lg sm:text-xl font-black mx-1 tracking-wide uppercase underline decoration-black decoration-2">PHP Software Developer</span> with 1 year of professional experience in PHP, Laravel, MySQL, JavaScript, HTML, and CSS. Skilled in Laravel MVC, RESTful APIs, CRUD operations, authentication, validation, database integration, business logic, OOP, and modern web development.
          </p>

          <p className="text-sm sm:text-base font-medium mb-8 leading-relaxed max-w-3xl text-white/95">
            Throughout my experience at <span className="font-bold underline decoration-white/50">Cyber Rafting</span>, <span className="font-bold underline decoration-white/50">Amazon</span>, and <span className="font-bold underline decoration-white/50">Codec Technologies</span>, I have engineered scalable web applications, designed reliable RESTful APIs, optimized complex MySQL queries, and built user-friendly interfaces with React.js.
          </p>

          {/* Quick Contact & Credential Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">Location</p>
                <p className="text-xs font-extrabold text-white">Pune, Maharashtra</p>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-3">
              <span className="text-xl">🎓</span>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">Education</p>
                <p className="text-xs font-extrabold text-white">B.E. in IT (8.07 GPA)</p>
              </div>
            </div>

            <a 
              href="mailto:gangakhedkargajanan91@gmail.com" 
              className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-3 hover:bg-black/30 transition-colors"
            >
              <span className="text-xl">✉️</span>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-white/70">Email</p>
                <p className="text-xs font-extrabold text-white truncate">gangakhedkargajanan91@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+919373444585" 
              className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center gap-3 hover:bg-black/30 transition-colors"
            >
              <span className="text-xl">📞</span>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/70">Phone</p>
                <p className="text-xs font-extrabold text-white">+91-9373444585</p>
              </div>
            </a>
          </div>

          {/* Primary Tech Stack Display */}
          <div>
            <h4 className="text-xs font-black tracking-widest uppercase text-black/80 mb-3">
              Core Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Laravel Pill */}
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d20]"></span>
                <span className="text-xs font-black text-gray-900 tracking-wide">Laravel MVC</span>
              </div>
              
              {/* PHP Pill */}
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-[#777bb4]"></span>
                <span className="text-xs font-black text-gray-900 tracking-wide">PHP & OOP</span>
              </div>

              {/* MySQL Pill */}
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00758f]"></span>
                <span className="text-xs font-black text-gray-900 tracking-wide">MySQL & SQL</span>
              </div>

              {/* React Image */}
              <img 
                data-aos="zoom-in" data-aos-delay="300"
                src={reactImage} 
                alt="React" 
                title="React.js"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl bg-white/10 p-1.5 rounded-xl" 
              />
              {/* Node Image */}
              <img 
                data-aos="zoom-in" data-aos-delay="400"
                src={nodeImage} 
                alt="Node.js" 
                title="Node.js"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl bg-white/10 p-1.5 rounded-xl" 
              />
              {/* Mongo Image */}
              <img 
                data-aos="zoom-in" data-aos-delay="500"
                src={mongoImage} 
                alt="MongoDB" 
                title="MongoDB"
                className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl bg-white/10 p-1.5 rounded-xl" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
