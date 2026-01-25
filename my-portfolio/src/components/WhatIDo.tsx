import { FaCloud, FaDatabase, FaBrain, FaCode } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description: "React, Angular, responsive design, modern UI/UX with Tailwind CSS and component architecture.",
    icon: <FaCode className="text-4xl text-indigo-500" />,
  },
  {
    title: "Backend Development",
    description: "ASP.NET Core, Node.js, RESTful APIs, database design with SQL Server and MySQL.",
    icon: <FaCloud className="text-4xl text-blue-500" />,
  },
  {
    title: "Cloud & DevOps ",
    description: "Docker, Azure DevOps, CI/CD pipelines, cloud deployment, infrastructure automation.",
    icon: <FaDatabase className="text-4xl text-green-500" />,
  },
  {
    title: "AI & Data ",
    description: "LLM systems, data pipelines, analytics-ready architectures, prompt engineering.",
    icon: <FaBrain className="text-4xl text-purple-500" />,
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden" id="what-i-do">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
          My Focus Areas
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Full Stack development with growing expertise in cloud & platform engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-lg p-8 text-center transform transition hover:shadow-xl dark:hover:shadow-xl group border-2 border-indigo-200 dark:border-indigo-700/40"
            >
              <div className="flex justify-center mb-4 text-5xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
