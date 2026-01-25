import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-950 dark:to-black py-12 mt-20 text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 text-lg font-medium">
          <a
            href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover-lift group"
          >
            <FaLinkedin className="text-2xl group-hover:scale-125 transition-transform" /> 
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/praneeth531641"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover-lift group"
          >
            <FaGithub className="text-2xl group-hover:scale-125 transition-transform" /> 
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="mailto:praneethrayavarapu@gmail.com"
            className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-all duration-300 hover-lift group"
          >
            <FaEnvelope className="text-2xl group-hover:scale-125 transition-transform" /> 
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-gray-300">Rayavarapu Praneeth</span> — Full Stack Engineer with Cloud & AI Focus
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-500 mt-2">Crafted with <span className="text-red-600 dark:text-red-400">❤️</span> using React, TypeScript & Tailwind CSS</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 animate-bounce hover-lift"
          aria-label="Back to top"
          title="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
