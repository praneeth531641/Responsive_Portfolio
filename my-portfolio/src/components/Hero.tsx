// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const titles = [
  "Full Stack Developer",
  "MERN & .NET Specialist",
  "React & Angular Expert",
  "API & Database Integrator",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      timeout = setTimeout(() => {
        setDisplayed(titles[index].substring(0, displayed.length + 1));
        if (displayed.length + 1 === titles[index].length) {
          setTyping(false);
          setTimeout(() => setTyping(true), 1500);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(titles[index].substring(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIndex((index + 1) % titles.length);
          setTyping(true);
        }
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-600 text-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-white bg-opacity-5 backdrop-blur-md p-10 rounded-xl shadow-2xl border border-white/10 transition-all">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Rayavarapu Praneeth
          </h1>

          <p className="text-xl md:text-2xl font-medium h-10 mb-6 text-white">
            <span className="border-r-2 border-white pr-2 animate-pulse">{displayed}</span>
            <span className="blinking-cursor">|</span>
          </p>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-10">
            Passionate developer with 2 years of experience building modern web applications using Angular, React, Node.js, and ASP.NET Core. I love creating impactful software and delivering great user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:praneethrayavarapu@gmail.com"
              className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              <FaEnvelope /> Contact Me
            </a>

            <a
              href="https://github.com/praneeth531641"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-indigo-700 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="/PRANEETH_RAYAVARAPU_RESUME.pdf"
              download
              className="flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full shadow hover:bg-gray-100 transition font-semibold"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-4 flex justify-center gap-4 text-lg text-gray-100">
            <a
              href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-2 underline"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <span className="hidden sm:inline-block">|</span>
            <span>📍 Hyderabad, India</span>
          </div>
        </div>
      </div>

      {/* Optional Scroll Down Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white opacity-70 animate-bounce">
        ↓ Scroll Down
      </div>

      {/* Cursor blinking effect */}
      <style>
        {`
          .blinking-cursor {
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
