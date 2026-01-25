import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById("what-i-do")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl float-animation opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl float-animation opacity-20" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Full Stack Engineer
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-300 gradient-text">
              Building Scalable Applications with Cloud & AI Focus
            </h2>
          </div>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            I design and build full-stack applications using Angular, React, and ASP.NET. Passionate about cloud technologies, DevOps automation, and exploring AI systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#flagship"
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover-lift flex items-center gap-2"
            >
              View Architecture
              <FaArrowDown className="text-sm" />
            </a>

            <a
              href="#projects"
              className="border-2 border-indigo-400 hover:bg-indigo-600 text-indigo-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-lift"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover-lift"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8 text-3xl">
            <a
              href="https://github.com/praneeth531641"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-all duration-300 hover-lift hover:scale-125"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-all duration-300 hover-lift hover:scale-125"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:praneethrayavarapu@gmail.com"
              className="hover:text-indigo-400 transition-all duration-300 hover-lift hover:scale-125"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70 cursor-pointer hover:opacity-100 transition-opacity" onClick={scrollToSection}>
          <div className="animate-bounce flex flex-col items-center gap-2">
            <span className="text-sm font-semibold">Scroll Down</span>
            <FaArrowDown className="text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
