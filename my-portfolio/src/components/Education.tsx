// src/components/Education.jsx

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "ANITS, Andhra Pradesh",
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
  "Essentials of Python - Coursera",
  "Java Certification - HackerRank",
  "Python Certification - HackerRank",
];

export default function Education() {
  return (
    <section className="py-16" id="education">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Education & Certifications</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          My academic background and credentials
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.institution} ({edu.year})
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}