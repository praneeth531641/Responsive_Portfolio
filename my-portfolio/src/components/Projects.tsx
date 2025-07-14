// src/components/Projects.jsx

const projects = [
  
  {
    title: "Courses Portal - LMS",
    description:
      "A full-stack learning management system for student course enrollment and admin control.",
    features: [
      "Role-based access (Admin/Student)",
      "JWT authentication",
      "Filtering & real-time seat tracking",
    ],
    stack: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/praneeth531641/proj_1",
  },
  {
    title: "OpenAI Prompt UI",
    description:
      "ChatGPT UI for users to interact with OpenAI's API using customizable prompt templates.",
    features: [
      "Prompt template selection",
      "Clipboard & error handling",
      "Input history tracking",
    ],
    stack: ["HTML", "CSS", "JavaScript", "OpenAI API"],
    github: "https://github.com/praneeth531641/PrancoAi",
  },
  {
    title: "Recycling Management System",
    description:
      "Smart platform encouraging eco-friendly practices through digital waste tracking and scheduling.",
    features: ["User onboarding", "Pickup calendar", "Eco-score analytics"],
    stack: ["Node.js", "MySQL", "EJS", "Bootstrap"],
    github: "https://github.com/praneeth531641/recycling_service",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern mobile-first personal portfolio to highlight skills, projects, and resume.",
    features: [
      "Animated sections",
      "Downloadable resume",
      "Contact form via EmailJS",
    ],
    stack: ["React", "Tailwind CSS", "EmailJS"],
    github: "https://github.com/praneeth531641/portfolio-app",
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-sky-50 via-white to-purple-50 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-14">
          🚀 Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-500 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-3">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
