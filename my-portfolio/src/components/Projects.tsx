const projects = [
  {
    title: "LLM-Powered Analytics Platform",
    description:
      "Production-grade platform enabling natural-language analytics over Snowflake using LLMs and semantic models. Full end-to-end ownership from UI to data layer.",
    features: [
      "React/Angular UI with LLM gateway integration",
      "MCP servers exposing semantic models as tools",
      "Prompt-to-SQL execution over Snowflake data marts",
      "Kubernetes deployment with GitHub Actions CI/CD",
    ],
    stack: ["React", "FastAPI", "Snowflake", "Kubernetes", "Docker", "GitHub Actions"],
    ownership: "Full Stack • DevOps • Data Engineering",
    github: "https://github.com/praneeth531641",
  },
  {
    title: "Cloud-Native Full Stack Application",
    description:
      "Scalable enterprise application with containerized microservices, automated CI/CD pipelines, and Kubernetes orchestration.",
    features: [
      "ASP.NET Web API backend with SQL Server",
      "Angular frontend with responsive design",
      "Docker containerization and Kubernetes deployment",
      "GitHub Actions for continuous integration and deployment",
    ],
    stack: ["Angular", "ASP.NET Core", "SQL Server", "Docker", "Kubernetes", "GitHub Actions"],
    ownership: "Full Stack • DevOps",
    github: "https://github.com/praneeth531641",
  },
  {
    title: "Snowflake Data Platform",
    description:
      "Automated data ingestion, transformation, and data mart creation for analytics-ready architectures.",
    features: [
      "Data pipeline automation",
      "Semantic model creation",
      "Analytics-ready data marts",
      "dbt for data transformation",
    ],
    stack: ["Snowflake", "dbt", "Python", "GitHub Actions"],
    ownership: "Data Engineering",
    github: "https://github.com/praneeth531641",
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
          Key Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden border-2 border-indigo-200 dark:border-indigo-700/40 shadow-md dark:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 mb-2 group-hover:to-purple-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase opacity-90">
                    {project.ownership}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1.5 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="premium-chip text-gray-800 dark:text-indigo-100 text-xs px-3 py-1.5 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold group/link transition text-sm"
              >
                View on GitHub <span className="inline-block group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
