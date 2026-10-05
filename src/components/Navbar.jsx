import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to track positioning parameters safely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Expertise', 'Education', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-white/80 backdrop-blur-xl py-3 border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.04)]' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Dynamic Logo font node configurations */}
        <div className="flex items-center">
          <a 
            href="#home" 
            className={`text-2xl font-black tracking-tight transition-colors duration-500 ${
              isOpen || !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
          >
            Gajanan <span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Links with dynamic contrasting rules */}
        <div className="hidden lg:flex space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-semibold text-xs xl:text-sm tracking-wide relative group transition-colors duration-500 ${
                isScrolled ? 'text-gray-600 hover:text-gray-950' : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              {/* Active animated custom alignment tracking baseline highlight */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Responsive CTA Frame Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href={`${import.meta.env.BASE_URL}Gajanan_Gangakhedkar_Resume.pdf`} 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              isScrolled
                ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            Resume ↓
          </a>
          <a 
            href="#contact" 
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all duration-500 shadow-md ${
              isScrolled
                ? 'bg-gray-900 text-white hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.25)]'
                : 'bg-[#ff2a2a] text-white hover:bg-white hover:text-black'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Trigger Controllers */}
        <div className="lg:hidden flex items-center gap-2">
          <a 
            href={`${import.meta.env.BASE_URL}Gajanan_Gangakhedkar_Resume.pdf`} 
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-xs font-bold px-3 py-1.5 rounded-full bg-white/20 text-white"
          >
            CV
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-500 ${
              isOpen || !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle navigation drawer menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel Expansion Drawer Overlay */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[520px] py-6 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-extrabold text-sm border-b border-white/10 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
             <a 
               href={`${import.meta.env.BASE_URL}Gajanan_Gangakhedkar_Resume.pdf`} 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-5 py-2.5 rounded-full bg-black/20 text-white font-bold hover:bg-black transition-all duration-300 w-full text-center border border-white/20"
             >
               View / Download Resume PDF
             </a>
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-5 py-2.5 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-gray-950 hover:text-white transition-all duration-300 w-full text-center shadow-xl"
             >
               Get In Touch
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;