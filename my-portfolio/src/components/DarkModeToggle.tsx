// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded shadow hover:scale-105 transition"
      >
        {dark ? "🌞 Light" : "🌙 Dark"}
      </button>
    </div>
  );
}
