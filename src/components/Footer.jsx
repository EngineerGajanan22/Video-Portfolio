const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1 text-gray-400">
          <p className="text-white font-bold tracking-wider uppercase">Gajanan Gangakhedkar</p>
          <p>PHP & Full Stack Software Developer</p>
          <p>Laravel MVC • RESTful APIs • MySQL • React</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-white font-bold">1+ Year Experience</p>
          <p className="text-gray-400">Cyber Rafting • Amazon • Codec Tech</p>
          <a href="#projects" className="underline hover:text-white text-red-400 transition-colors mt-1 underline-offset-4 decoration-1">
            View Featured Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-white font-bold">Pune, Maharashtra, India</p>
          <p className="text-gray-400">Open to Relocation & Remote</p>
          <p className="text-gray-400">Batch {new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-white/90 w-full text-center hover:text-[#ff2a2a] transition-colors duration-700">
          GAJANAN
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full items-end font-medium border-t border-white/5 pt-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-xs font-bold">
            <a href="https://github.com/EngineerGajanan22" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">GitHub</a>
            <a href={`${import.meta.env.BASE_URL}Gajanan_Gangakhedkar_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Resume PDF</a>
            <a href="#contact" className="underline hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-white/50 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Gajanan Gangakhedkar • Built with React & Vite
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:gangakhedkargajanan91@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 text-gray-300">
            gangakhedkargajanan91@gmail.com
          </a>
          <span className="text-gray-500 font-mono text-[10px]">+91-9373444585</span>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
