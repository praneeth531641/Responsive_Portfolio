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
  SiPython,
  SiPostgresql,
  SiApachespark,
  SiGrafana,
  SiPrometheus,
  SiAmazon,
  SiGoogle,
} from "react-icons/si";
import { FaDatabase, FaBrain, FaCode, FaCloud } from "react-icons/fa";

const skillGroups = [
  {
    category: "Platform & DevOps",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub Actions", icon: <SiGithub /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "CI/CD Pipelines", icon: <FaCode /> },
    ],
  },
  {
    category: "AI & LLM Systems",
    skills: [
      { name: "LangChain", icon: <FaBrain /> },
      { name: "RAG Architecture", icon: <FaBrain /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
      { name: "OpenAI APIs", icon: <FaBrain /> },
      { name: "Vector Databases", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Snowflake", icon: <SiSnowflake /> },
      { name: "dbt", icon: <SiDbt /> },
      { name: "Apache Airflow", icon: <SiApachespark /> },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Optimization", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "MLflow", icon: <FaBrain /> },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS (S3, Lambda, EC2, EKS)", icon: <SiAmazon /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "Google Cloud", icon: <SiGoogle /> },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "ASP.NET Core", icon: <SiDotnet /> },
      { name: "GraphQL", icon: <FaCode /> },
      { name: "REST APIs", icon: <FaCode /> },
      { name: "Microservices", icon: <FaCode /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Responsive Design", icon: <FaCode /> },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript/TypeScript", icon: <FaCode /> },
      { name: "SQL", icon: <FaDatabase /> },
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
          Technical Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
