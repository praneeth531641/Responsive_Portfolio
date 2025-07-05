// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a
            href="https://linkedin.com/in/praneeth-rayavarapu-8602811a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/praneeth531641"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white"
          >
            💻 GitHub
          </a>
          <a href="mailto:praneethrayavarapu@gmail.com" className="hover:text-red-600">
            📧 Email
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Rayavarapu Praneeth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}