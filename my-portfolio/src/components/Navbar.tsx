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
    icon: <HiHome className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <HiCollection className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
  {
    name: "Tech Stack",
    href: "#tech",
    icon: <HiCode className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <HiBriefcase className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <HiAcademicCap className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <HiMail className="text-indigo-500 dark:text-indigo-400 text-lg" />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/85 dark:bg-slate-900/90 backdrop-blur-xl shadow-md dark:shadow-xl transition-all border-b border-gray-200/40 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center gap-3 group hover-lift">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/praneeth.png"
              alt="Logo"
              className="relative h-10 w-10 rounded-full border-2 border-indigo-600 dark:border-indigo-400 shadow-lg group-hover:shadow-indigo-500/50 transition-all"
            />
          </div>
          <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent inline">
            Praneeth
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium group"
            >
              <span className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">{link.name}</span>
              <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 group-hover:w-12 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all p-2 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-sm pointer-events-none animate-fadeIn">
          <div
            className="absolute right-4 top-[68px] w-[60%] max-w-xs bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-indigo-200/50 dark:border-indigo-700/40 px-4 py-4 space-y-2 pointer-events-auto fade-in-up card-hover"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:translate-x-1"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}

            <div className="pt-3 border-t border-gray-200 dark:border-slate-700 flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
