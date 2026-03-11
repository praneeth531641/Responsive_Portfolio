const projects = [
  {
    title: "Enterprise Data & AI Platform",
    description:
      "Cloud-native analytics platform processing 2TB+ daily data. Architected end-to-end system with Snowflake data warehouse and Kubernetes-orchestrated microservices serving 10K+ concurrent users.",
    features: [
      "Natural language-to-SQL using LangChain and OpenAI APIs enabling business users to query complex datasets without SQL knowledge",
      "Semantic layer integration translating business terms to technical schemas, reducing data discovery time by 70%",
      "Containerized services on AWS EKS with auto-scaling handling 10K+ concurrent users",
      "Achieved 99.9% uptime SLA with Prometheus/Grafana monitoring and cost optimizations",
    ],
    stack: ["Snowflake", "LangChain", "Python", "FastAPI", "Kubernetes", "Docker", "AWS EKS", "GitHub Actions"],
    ownership: "Full Stack • DevOps • Data Engineering • MLOps",
    github: "https://github.com/praneeth531641",
    impact: "2TB+ daily data | 10K+ concurrent users | 99.9% uptime"
  },
  {
    title: "Enterprise Monitoring & Analytics Platform",
    description:
      "Full-stack monitoring solution with real-time dashboards tracking system health, data pipeline status, and AI model performance metrics. Built to handle enterprise-scale observability.",
    features: [
      "Backend APIs processing 1M+ events daily with sub-second latency",
      "Interactive data visualization with D3.js and Chart.js improving incident response time by 45%",
      "Real-time alerting and metric collection for distributed systems",
      "Secure integration with enterprise identity and access management",
    ],
    stack: ["Angular", "React", "FastAPI", "PostgreSQL", "Grafana", "D3.js", "GitHub Actions"],
    ownership: "Full Stack • DevOps",
    github: "https://github.com/praneeth531641",
    impact: "1M+ events daily | Sub-second latency | 45% incident response improvement"
  },
  {
    title: "Snowflake Data & CI/CD Architecture",
    description:
      "Engineered automated data ingestion and transformation pipelines for analytics-ready architectures. Built 12+ Snowflake datamarts with optimized compute reducing query latency by 40% and monthly costs by $12K.",
    features: [
      "Data pipeline automation using Snowpipe, Streams, and Tasks",
      "Semantic model creation enabling business intelligence workflows",
      "Analytics-ready data marts with dbt for data transformation",
      "GitHub Actions orchestration with infrastructure-as-code (Terraform)",
    ],
    stack: ["Snowflake", "dbt", "Python", "GitHub Actions", "Terraform"],
    ownership: "Data Engineering • DevOps",
    github: "https://github.com/praneeth531641",
    impact: "12+ datamarts | 40% latency reduction | $12K/month cost savings"
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
          Production Platform Projects
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
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1 tracking-wide uppercase opacity-90">
                    {project.ownership}
                  </p>
                  {(project as any).impact && (
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-3 tracking-wide uppercase opacity-85">
                      📊 Impact: {(project as any).impact}
                    </p>
                  )}
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
