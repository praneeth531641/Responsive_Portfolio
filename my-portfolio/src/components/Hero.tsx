import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById("what-i-do")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-32 overflow-hidden" id="hero">
      {/* Light mode background */}
      <div className="absolute inset-0 light-only pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl float-animation opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl float-animation opacity-30" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Dark mode background */}
      <div className="absolute inset-0 dark-only pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl float-animation opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl float-animation opacity-20" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              Full Stack Engineer
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Building Scalable Applications with Cloud & AI Focus
            </h2>
          </div>
          
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I design and build full-stack applications using Angular, React, and ASP.NET. I have expertise in cloud technologies, DevOps automation, and AI systems.
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
              className="border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-lift"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover-lift border border-gray-200 dark:border-slate-700"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8 text-3xl">
            <a
              href="https://github.com/praneeth531641"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 hover-lift hover:scale-125"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 hover-lift hover:scale-125"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:praneethrayavarapu@gmail.com"
              className="text-gray-800 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 hover-lift hover:scale-125"
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
