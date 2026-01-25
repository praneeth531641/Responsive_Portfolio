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
    company: "Caliber Technologies",
    startDate: "2023-09-04",
    endDate: "2025-09-30",
    roles: [
      {
        role: "Software Engineer",
        period: "Sep 2024 – Sep 2025",
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
  },
  {
    company: "AMD – Senior Software / Platform Engineer",
    startDate: "2025-10-01",
    description: "Built and operated cloud-native data and AI platforms, owning CI/CD automation, Kubernetes deployments, Snowflake data systems, and LLM-powered analytics."
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
