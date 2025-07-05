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
  { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
  { name: "Flask", icon: <SiFlask />, level: "Intermediate" },
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
    <section className="py-12 bg-gray-100 dark:bg-gray-800" id="tech">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-center"
              title={tech.name}
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="font-semibold text-sm">{tech.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{tech.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}