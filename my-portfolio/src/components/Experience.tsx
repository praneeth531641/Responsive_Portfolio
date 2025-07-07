// src/components/Experience.jsx

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Caliber Technologies",
    tenure: "Sep 2023 – Present (1 yr 10 mo)",
    roles: [
      {
        role: "Software Engineer",
        period: "Sep 2024 – Present",
        points: [
          "Led feature implementation for scalable enterprise modules across full stack.",
          "Developed reusable Angular UI components integrated with secure ASP.NET Core APIs.",
          "Mentored junior developers and optimized CI/CD pipelines using Azure DevOps.",
          "Resolved critical bugs and enhanced performance based on analytics."
        ]
      },
      {
        role: "Junior Software Engineer",
        period: "Mar 2024 – Aug 2024",
        points: [
          "Implemented independent modules in Angular connected to backend APIs.",
          "Collaborated with QA and product teams to meet sprint goals.",
          "Improved SQL queries and enhanced backend API responses."
        ]
      },
      {
        role: "Trainee Software Engineer",
        period: "Sep 2023 – Feb 2024",
        points: [
          "Trained in Angular and ASP.NET Core for full-stack enterprise development.",
          "Assisted senior developers in bug fixing and unit testing.",
          "Learned and supported DevOps deployment practices."
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      id="experience"
    >
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
              className="mb-12 ml-4 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 p-6 relative"
            >
              <div className="absolute -left-7 top-6 bg-indigo-500 text-white p-2 rounded-full">
                <FaBriefcase className="text-lg" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                Tenure: {exp.tenure}
              </p>

              {exp.roles.map((role, i) => (
                <div key={i} className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {role.role}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
                    {role.period}
                  </p>
                  <ul className="list-disc ml-5 text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    {role.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
