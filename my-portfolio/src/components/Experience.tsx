import { FaBriefcase } from "react-icons/fa";

function calculateTenure(startDateStr: string | number | Date, endDateStr?: string | number | Date) {
  const startDate = new Date(startDateStr);
  const endDate = endDateStr ? new Date(endDateStr) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearLabel = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthLabel = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return [yearLabel, monthLabel].filter(Boolean).join(" ");
}

const experiences = [
  {
    company: "AMD – Senior Platform Engineer",
    startDate: "2025-10-16",
    description: "Architected and deployed Kubernetes-based platforms serving 500+ internal users with 99.9% uptime. Engineered 12+ Snowflake datamarts reducing query latency by 40% and cutting compute costs by $12K/month. Built GitHub Actions CI/CD pipelines reducing deployment time from 4 hours to 45 minutes, enabling 3x faster release cycles. Developed AI-enabled analytics workflows integrating LLMs with structured data, enabling natural language querying for non-technical stakeholders. Implemented infrastructure-as-code using Terraform and established Prometheus/Grafana monitoring ensuring platform scalability."
  },
  {
    company: "Caliber Technologies",
    startDate: "2023-09-04",
    endDate: "2025-09-05",
    roles: [
      {
        role: "Software Engineer",
        period: "Sep 2024 – Sep 2025",
        points: [
          "Developed 15+ RESTful APIs using ASP.NET Core and FastAPI, handling 50K+ daily requests with role-based access control.",
          "Engineered Angular and React.js frontend modules for enterprise monitoring dashboards, improving data visibility by 60%.",
          "Optimized SQL queries and database schemas in MySQL/MSSQL, reducing report generation time from 2 hours to 15 minutes.",
          "Implemented secure microservices architecture with OAuth2 and API gateway patterns, ensuring enterprise security compliance.",
          "Managed CI/CD pipelines using GitHub Actions and Azure DevOps, automating testing across 4 environments."
        ]
      },
      {
        role: "Junior Software Engineer",
        period: "Mar 2024 – Aug 2024",
        points: [
          "Implemented independent Angular modules connected to backend ASP.NET Core APIs with JWT authentication.",
          "Collaborated with QA and product teams to deliver sprint goals on schedule, improving feature delivery speed by 25%.",
          "Optimized database queries and enhanced API response times, contributing to performance improvements."
        ]
      },
      {
        role: "Trainee Software Engineer",
        period: "Sep 2023 – Feb 2024",
        points: [
          "Trained in Angular and ASP.NET Core for full-stack enterprise development with hands-on projects.",
          "Assisted senior developers in bug fixing and wrote unit tests for critical modules.",
          "Learned and supported DevOps deployment practices using Azure infrastructure."
        ]
      }
    ]
  }
  
];
export default function Experience() {
  return (
    <section
      className="py-20 bg-white dark:bg-gray-900"
      id="experience"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Experience Snapshot
        </h2>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="card-hover bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-indigo-200 dark:border-indigo-700/40 mb-6 shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-start gap-3 mb-3">
              <FaBriefcase className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {exp.company}
              </h3>
            </div>

            {exp.roles ? (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                  Tenure: {new Date(exp.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} – {exp.endDate ? new Date(exp.endDate).toLocaleString('default', { month: 'short', year: 'numeric' }) : "Present"} ({calculateTenure(exp.startDate, exp.endDate)})
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
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                  Tenure: {new Date(exp.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} – Present ({calculateTenure(exp.startDate)})
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {exp.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
