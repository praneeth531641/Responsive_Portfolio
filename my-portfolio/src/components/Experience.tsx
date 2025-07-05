// src/components/Experience.jsx

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Caliber Technologies",
    period: "Sep 2023 – Present",
    points: [
      "Built scalable, modular Angular components integrated with ASP.NET Core APIs",
      "Delivered 20+ user stories across 3 modules in an Agile team",
      "Collaborated with QA, Product Owners, and DBAs for smooth releases"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Companies where I’ve gained hands-on experience
          </p>
        </div>

        <div className="relative border-l-4 border-indigo-500 pl-6 ml-3">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="mb-10 ml-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 relative"
            >
              <div className="absolute -left-7 top-6 bg-indigo-500 text-white p-2 rounded-full">
                <FaBriefcase className="text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">{exp.role}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                {exp.company} &mdash; <em>{exp.period}</em>
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-600 dark:text-gray-400">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
