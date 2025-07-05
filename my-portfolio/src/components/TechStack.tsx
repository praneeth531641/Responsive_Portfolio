// src/components/TechStack.jsx

import {
  SiAngular,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

import { FaDatabase, FaCloud } from "react-icons/fa";

const techs = [
  { name: "Angular", icon: <SiAngular className="text-red-500" />, level: "Expert" },
  { name: "React", icon: <SiReact className="text-blue-400" />, level: "Expert" },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" />, level: "Advanced" },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" />, level: "Advanced" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Advanced" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, level: "Intermediate" },
  { name: ".NET", icon: <SiDotnet className="text-indigo-500" />, level: "Advanced" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: "Advanced" },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: "Intermediate" },
  { name: "Flask", icon: <SiFlask className="text-gray-300" />, level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Advanced" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: "Advanced" },
  { name: "SQL Server", icon: <FaDatabase className="text-slate-600" />, level: "Advanced" },
  { name: "GIT", icon: <SiGit className="text-orange-500" />, level: "Advanced" },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" />, level: "Advanced" },
  { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: "Advanced" },
  { name: "Azure DevOps", icon: <FaCloud className="text-blue-400" />, level: "Intermediate" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, level: "Basic" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-100 to-purple-100 dark:from-gray-900 dark:to-gray-800" id="tech">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          🛠️ Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-110 text-center group"
              title={tech.name}
            >
              <div className="text-5xl mb-3 group-hover:animate-bounce">{tech.icon}</div>
              <p className="font-semibold text-sm text-gray-700 dark:text-white">{tech.name}</p>
              <span
                className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                  tech.level === "Expert"
                    ? "bg-green-100 text-green-600"
                    : tech.level === "Advanced"
                    ? "bg-blue-100 text-blue-600"
                    : tech.level === "Intermediate"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {tech.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
