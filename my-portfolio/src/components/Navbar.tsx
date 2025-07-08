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
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Name */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="fixed inset-0 z-[99] bg-transparent pointer-events-none" // Transparent background
        >
          <div
            className="absolute right-4 top-[64px] w-[85%] max-w-xs bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-4 space-y-3 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-white transition cursor-pointer"
              >
                {link.icon}
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-300 dark:border-gray-700">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
