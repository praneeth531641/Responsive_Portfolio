import { FaGraduationCap, FaCertificate, FaCheckCircle, FaBook } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Andhra University",
    year: "2023",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Andhra Pradesh Board",
    year: "2017",
  },
  {
    degree: "SSC",
    institution: "Andhra Pradesh",
    year: "2015",
  },
];

const certifications = [
  { name: "SnowPro Core Certification", badge: false, status: "In Progress" },
  { name: "AWS Certified Cloud Practitioner", badge: false, status: "In Progress" },
  { name: "Kubernetes Administrator (CKA)", badge: false, status: "In Progress" },
];

const professionalDevelopment = [
  { name: "MLOps Specialization", provider: "DeepLearning.AI (Coursera)", status: "Completed" },
  { name: "LLM Engineering: Prompt Engineering & RAG Systems", provider: "Udemy", status: "Completed" },
  { name: "Kubernetes for Data Engineering", provider: "Linux Foundation", status: "Completed" },
];

export default function Education() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      id="education"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 title-reveal">Education, Certifications & Professional Development</h2>
          <p className="text-gray-600 dark:text-slate-400 mt-2 fade-in-up" style={{animationDelay: '0.2s'}}>Academic background, credentials, and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan mb-6 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu, i) => (
                <li
                  key={i}
                  className="glass-effect-dark p-5 rounded-lg card-hover fade-in-up bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan/30"
                  style={{ animationDelay: `${(i + 1) * 0.15}s` }}
                >
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-slate-100">{edu.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {edu.institution} — <span className="italic">{edu.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan mb-6 flex items-center gap-2">
              <FaCertificate /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="glass-effect-dark p-4 rounded-lg card-hover pop-in bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan/30"
                  style={{ animationDelay: `${(i + 1) * 0.15}s` }}
                >
                  <span className="text-gray-900 dark:text-slate-100 font-semibold text-sm">{cert.name}</span>
                  <p className="text-xs text-gray-600 dark:text-slate-500 mt-1 pulse-animation">{cert.status}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Development Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan mb-6 flex items-center gap-2">
              <FaBook /> Professional Development
            </h3>
            <ul className="space-y-4">
              {professionalDevelopment.map((course, i) => (
                <li
                  key={i}
                  className="glass-effect-dark p-4 rounded-lg card-hover slide-up bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan/30"
                  style={{ animationDelay: `${(i + 1) * 0.15}s` }}
                >
                  <span className="text-gray-900 dark:text-slate-100 font-semibold text-sm">{course.name}</span>
                  <p className="text-xs text-gray-600 dark:text-slate-500 mt-1">{course.provider}</p>
                  <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-cyan/20 text-blue-700 dark:text-cyan px-2 py-0.5 rounded text-xs font-semibold mt-2">
                    <FaCheckCircle /> {course.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
