// src/components/Projects.jsx
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Empro - Microbial Management System",
    description:
      "Enterprise-grade pharmaceutical platform for managing microbial test results and ensuring compliance.",
    features: [
      "Zone-wise sample tracking",
      "Microbial trend graphs",
      "Auto-trigger alerts",
      "PDF/Excel reports",
      "Audit trail for CFR 21 compliance",
    ],
    stack: ["Angular", ".NET Core", "SQL Server"],
    github: "#",
  },
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
    features: [
      "User onboarding",
      "Pickup calendar",
      "Eco-score analytics",
    ],
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section && window.scrollY + window.innerHeight >= section.offsetTop + 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 dark:text-blue-300 hover:underline"
                >
                  🔗 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
