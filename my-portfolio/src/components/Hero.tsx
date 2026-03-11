import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById("what-i-do")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden" id="hero">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 title-reveal">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-slate-100">
              AI Data Platform Engineer
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
              MLOps • Cloud-Native Analytics • Full Stack
            </h2>
          </div>
          
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-slate-300 leading-relaxed slide-up" style={{animationDelay: '0.2s'}}>
            I architect production-grade analytics systems integrating Snowflake data warehouses with modern AI/ML workflows, Kubernetes-based MLOps infrastructure, and REST API microservices.
            </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#flagship"
              className="btn-primary pop-in"
              style={{animationDelay: '0.3s'}}
            >
              View Architecture
              <FaArrowDown className="inline ml-2 text-sm" />
            </a>

            <a
              href="#projects"
              className="btn-secondary pop-in"
              style={{animationDelay: '0.4s'}}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-secondary pop-in"
              style={{animationDelay: '0.5s'}}
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8 text-3xl">
            <a
              href="https://github.com/praneeth531641"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan transition-all duration-300 hover:scale-125 icon-float"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan transition-all duration-300 hover:scale-125 icon-float"
              style={{animationDelay: '0.5s'}}
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
