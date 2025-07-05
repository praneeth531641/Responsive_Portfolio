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
    <footer className="relative bg-gray-100 dark:bg-gray-900 py-10 mt-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6 text-xl font-medium">
          <a
            href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/praneeth531641"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 transition duration-300"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="mailto:praneethrayavarapu@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 dark:hover:text-red-400 transition duration-300"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">Rayavarapu Praneeth</span>. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
