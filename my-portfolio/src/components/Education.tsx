import { useEffect, useState } from "react";
import { FaGraduationCap, FaCertificate, FaCheckCircle } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "ANITS, Andhra Pradesh",
    year: "2023",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Andhra Pradesh Board",
    year: "2017",
  },
  {
    degree: "SSC",
    institution: "Andhra Pradesh",
    year: "2015",
  },
];

const certifications = [
  { name: "Essentials of Python - Coursera", badge: true },
  { name: "Java Certification - HackerRank", badge: true },
  { name: "Python Certification - HackerRank", badge: true },
];

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("education");
      if (section && window.scrollY + window.innerHeight >= section.offsetTop + 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      id="education"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">My academic background and credentials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu, i) => (
                <li
                  key={i}
                  className={`transition duration-700 ease-out transform ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  } bg-white dark:bg-slate-800 p-5 rounded-lg shadow border-l-4 border-indigo-500 dark:border-indigo-400 card-hover`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {edu.institution} — <span className="italic">{edu.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6 flex items-center gap-2">
              <FaCertificate /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className={`transition duration-700 ease-out transform ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  } bg-white dark:bg-slate-800 p-4 rounded-lg shadow border-l-4 border-purple-500 dark:border-purple-400 flex items-center justify-between card-hover`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <span className="text-gray-800 dark:text-white">{cert.name}</span>
                  {cert.badge && (
                    <span className="ml-2 inline-flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded text-xs font-semibold">
                      <FaCheckCircle className="text-green-500" /> Verified
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
