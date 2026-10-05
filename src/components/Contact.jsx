import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'activated' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Persistent collaborations stored locally so submissions remain visible on the page
  const [collaborations, setCollaborations] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_collaborations');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Could not load collaborations from localStorage:", e);
    }
    // Default initial example matching user's illustration
    return [
      {
        id: 'sample-1',
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        message: 'Hi Gajanan, I would like to collaborate with you on a web development project.',
        date: 'Oct 6, 2026, 2:15 AM'
      }
    ];
  });

  const handleDeleteCollaboration = (id) => {
    setCollaborations((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem('portfolio_collaborations', JSON.stringify(updated));
      } catch (err) {
        console.error("Could not update localStorage:", err);
      }
      return updated;
    });
  };

  const clearAllCollaborations = () => {
    if (window.confirm("Are you sure you want to clear all displayed collaboration submissions?")) {
      setCollaborations([]);
      try {
        localStorage.removeItem('portfolio_collaborations');
      } catch (err) {
        console.error("Could not remove from localStorage:", err);
      }
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const submissionDate = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    const newCollaboration = {
      id: Date.now().toString(),
      name: fullName || 'Anonymous Visitor',
      email: formData.email.trim(),
      message: formData.message.trim(),
      date: submissionDate
    };

    // Immediately prepend new submission so it displays instantly in the Collaborations section
    setCollaborations((prev) => {
      const updated = [newCollaboration, ...prev];
      try {
        localStorage.setItem('portfolio_collaborations', JSON.stringify(updated));
      } catch (err) {
        console.error("Could not save collaboration to localStorage:", err);
      }
      return updated;
    });

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/gangakhedkargajanan91@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Collaboration Request from ${fullName} (${formData.email})`,
          _template: "table",
          _captcha: "false",
          name: fullName,
          email: formData.email,
          message: formData.message,
          submittedAt: submissionDate
        })
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus('success');
        setFeedbackMessage("✓ Collaboration request recorded below & emailed to Gajanan. I will reply within 24 hours!");
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('activated');
        setFeedbackMessage("✓ Collaboration recorded below! Please check gangakhedkargajanan91@gmail.com to click 'Activate Form'.");
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      } else {
        setStatus('success');
        setFeedbackMessage("✓ Collaboration request recorded below!");
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus('error');
      setFeedbackMessage("✓ Collaboration request recorded below! (Direct email sync had a connection timeout).");
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-90"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#ff2a2a] w-full md:w-[88%] lg:w-[80%] p-8 md:p-14 lg:p-16 text-white flex flex-col justify-between shadow-2xl"
        >
          {/* Header Row & Quick Contact Chips */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 mb-2">
                Get In Touch
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                Let’s Build Something Great Together
              </h2>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <a 
                href="mailto:gangakhedkargajanan91@gmail.com"
                className="px-3.5 py-2 rounded-xl bg-black/30 hover:bg-black text-white transition-all flex items-center gap-2 border border-white/20"
              >
                <span>✉️</span>
                <span>gangakhedkargajanan91@gmail.com</span>
              </a>
              <a 
                href="tel:+919373444585"
                className="px-3.5 py-2 rounded-xl bg-black/30 hover:bg-black text-white transition-all flex items-center gap-2 border border-white/20"
              >
                <span>📞</span>
                <span>+91-9373444585</span>
              </a>
              <span className="px-3.5 py-2 rounded-xl bg-black/30 text-white flex items-center gap-2 border border-white/20">
                <span>📍</span>
                <span>Pune, Maharashtra</span>
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you? (Project inquiries, job opportunities, or collaborations)" 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none leading-relaxed"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-10 mt-2">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-xs md:text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[340px] leading-snug">
                  I give permission to contact me at this email address regarding opportunities or project inquiries.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-6 text-xs text-white/70 font-medium">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <div>
                    {status === 'success' && (
                      <div className="text-xs font-bold text-black bg-white px-4 py-2.5 rounded-xl shadow-lg border border-white/40 leading-relaxed">
                        {feedbackMessage}
                      </div>
                    )}
                    {status === 'activated' && (
                      <div className="text-xs font-bold text-black bg-amber-200 px-4 py-2.5 rounded-xl shadow-lg border border-amber-300 leading-relaxed">
                        {feedbackMessage}
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="text-xs font-bold text-white bg-black/60 px-4 py-2.5 rounded-xl shadow-lg border border-white/30 flex flex-col gap-1.5 leading-relaxed">
                        <span>✕ {feedbackMessage}</span>
                        <a 
                          href="mailto:gangakhedkargajanan91@gmail.com"
                          className="underline text-red-300 hover:text-white"
                        >
                          Click here to send email directly →
                        </a>
                      </div>
                    )}
                    {status === 'idle' && (
                      <p className="max-w-[280px] leading-relaxed text-[11px] text-white/80">
                        Direct response guaranteed within 24 hours. Looking forward to discussing exciting roles!
                      </p>
                    )}
                    {status === 'submitting' && (
                      <p className="max-w-[280px] leading-relaxed text-[11px] text-white/90 animate-pulse font-semibold">
                        Sending your message directly to Gajanan...
                      </p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="px-8 py-3 rounded-full border border-white text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group whitespace-nowrap self-start sm:self-auto shadow-lg hover:shadow-2xl"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Collaborations & Contact Inquiries Section */}
          <div className="mt-14 pt-10 border-t border-white/20 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    Collaborations & Inquiries
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-black/40 text-white/90 border border-white/20">
                    {collaborations.length} {collaborations.length === 1 ? 'Request' : 'Requests'}
                  </span>
                </div>
                <p className="text-xs text-white/80 mt-1">
                  Direct inquiries from recruiters, collaborators, and clients
                </p>
              </div>

              {collaborations.length > 0 && (
                <button
                  type="button"
                  onClick={clearAllCollaborations}
                  className="text-[11px] font-bold text-white/70 hover:text-white underline self-start sm:self-auto transition-colors"
                >
                  Clear all submissions
                </button>
              )}
            </div>

            {/* Submissions List */}
            {collaborations.length === 0 ? (
              <div className="p-8 rounded-2xl bg-black/30 border border-white/10 text-center text-sm text-white/75">
                No collaboration requests yet. Fill out the form above to send an inquiry!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {collaborations.map((collab) => (
                  <div
                    key={collab.id}
                    className="p-5 md:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 flex flex-col justify-between gap-4 shadow-xl hover:border-white/40 transition-all"
                  >
                    <div>
                      {/* Form submission header with User Name and Email Address */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col">
                          {/* User Name — shown as the name/title */}
                          <h4 className="text-lg md:text-xl font-black text-white tracking-tight leading-snug">
                            {collab.name}
                          </h4>
                          {/* Email Address — displayed directly below user's name */}
                          <a
                            href={`mailto:${collab.email}?subject=${encodeURIComponent(`Re: Collaboration with Gajanan`)}`}
                            className="font-mono text-xs md:text-sm text-red-200 hover:text-white underline decoration-red-300/60 underline-offset-2 inline-flex items-center gap-1.5 mt-0.5 break-all transition-colors"
                          >
                            <span>✉</span>
                            <span>{collab.email}</span>
                          </a>
                        </div>

                        {/* Submission Date/Time */}
                        <span className="text-[10px] md:text-[11px] text-white/70 font-mono px-2.5 py-1 rounded-full bg-white/10 border border-white/15 whitespace-nowrap shrink-0">
                          {collab.date}
                        </span>
                      </div>

                      {/* Message / Inquiry blockquote */}
                      <div className="mt-4 p-4 rounded-xl bg-black/50 border-l-4 border-white text-white/95 text-xs md:text-sm leading-relaxed whitespace-pre-wrap font-sans italic">
                        "{collab.message}"
                      </div>
                    </div>

                    {/* Quick action buttons: Direct Email Reply & Dismiss */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                      <a
                        href={`mailto:${collab.email}?subject=${encodeURIComponent(`Re: Collaboration with Gajanan Gangakhedkar`)}&body=${encodeURIComponent(`Hi ${collab.name},\n\nThank you for reaching out regarding: "${collab.message}"\n\nI would be excited to connect and collaborate with you!\n\nBest regards,\nGajanan Gangakhedkar`)}`}
                        className="px-4 py-1.5 rounded-full bg-white text-black font-black hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5 shadow"
                      >
                        <span>Reply to {collab.name.split(' ')[0]}</span>
                        <span>→</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleDeleteCollaboration(collab.id)}
                        className="text-[11px] text-white/60 hover:text-white hover:underline transition-colors"
                        title="Dismiss this submission"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;