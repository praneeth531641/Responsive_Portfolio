// src/components/Experience.jsx

const experiences = [
  {
    role: "Software Engineer",
    company: "Caliber Technologies",
    period: "Sep 2023 – Present",
    points: [
      "Built scalable, modular Angular components integrated with ASP.NET Core APIs",
      "Delivered 20+ user stories across 3 modules in an Agile team",
      "Collaborated with QA, Product Owners, and DBAs for smooth releases"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16" id="experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Companies where I’ve gained hands-on experience
        </p>
      </div>

      <div className="relative border-l-2 border-blue-500 ml-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-1.5"></div>
            <h3 className="text-xl font-semibold text-blue-600">{exp.role}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {exp.company} &mdash; <em>{exp.period}</em>
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}