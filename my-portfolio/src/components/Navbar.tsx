import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import {
  HiHome,
  HiCode,
  HiBriefcase,
  HiCollection,
  HiMail,
  HiAcademicCap,
} from "react-icons/hi";

const links = [
  {
    name: "Home",
    href: "#hero",
    icon: <HiHome className="text-indigo-500 text-lg" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <HiCollection className="text-indigo-500 text-lg" />,
  },
  {
    name: "Tech Stack",
    href: "#tech",
    icon: <HiCode className="text-indigo-500 text-lg" />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <HiBriefcase className="text-indigo-500 text-lg" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <HiAcademicCap className="text-indigo-500 text-lg" />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <HiMail className="text-indigo-500 text-lg" />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg transition-all hover:shadow-xl border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center gap-3 group hover-lift">
          <img
            src="/praneeth.png"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-indigo-600 dark:border-indigo-400 shadow-md group-hover:shadow-lg transition-shadow"
          />
          <span className="text-xl font-bold gradient-text hidden sm:inline">
            Praneeth
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300 focus:outline-none hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-black/30 backdrop-blur-sm pointer-events-none animate-fadeIn">
          <div
            className="absolute right-4 top-[70px] w-[50%] max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-indigo-200 dark:border-indigo-700/30 px-4 py-4 space-y-2 pointer-events-auto fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover-lift"
              >
                {link.icon}
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-300 dark:border-gray-700 flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
