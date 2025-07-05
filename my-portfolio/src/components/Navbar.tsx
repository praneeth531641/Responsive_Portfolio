import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* ✅ Logo + Name */}
        <a href="#hero" className="flex items-center gap-3">
  <img
    src="/praneeth.png"
    alt="Logo"
    className="h-10 w-10 rounded-full border-2 border-indigo-600 dark:border-white shadow-md"
  />
  <span className="text-xl font-bold text-indigo-600 dark:text-white hidden sm:inline">
    Praneeth
  </span>
</a>


        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ✅ Dark Mode for Desktop */}
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-300 dark:border-gray-700">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
