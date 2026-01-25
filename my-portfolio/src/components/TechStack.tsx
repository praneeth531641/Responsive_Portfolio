import {
  SiKubernetes,
  SiDocker,
  SiGithub,
  SiTerraform,
  SiSnowflake,
  SiDbt,
  SiFastapi,
  SiDotnet,
  SiReact,
  SiAngular,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const skillGroups = [
  {
    category: "Platform & DevOps",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub Actions", icon: <SiGithub /> },
      { name: "Terraform", icon: <SiTerraform /> },
    ],
  },
  {
    category: "Data & AI",
    skills: [
      { name: "Snowflake", icon: <SiSnowflake /> },
      { name: "dbt", icon: <SiDbt /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "ASP.NET Web API", icon: <SiDotnet /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden" id="tech">
      {/* Light mode background */}
      <div className="absolute inset-0 light-only pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl opacity-40 float-animation"></div>
      </div>

      {/* Dark mode background */}
      <div className="absolute inset-0 dark-only pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl opacity-40 float-animation"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 fade-in-up">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl p-8 transition-all duration-300 card-hover fade-in-up border-2 border-indigo-200 dark:border-indigo-700/40"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-indigo-400 dark:border-indigo-600">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="premium-chip flex items-center gap-2 text-gray-800 dark:text-indigo-100 px-4 py-2.5 rounded-xl font-medium text-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
