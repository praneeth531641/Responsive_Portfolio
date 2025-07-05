// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

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
    <div className="flex items-center gap-2">
      <FaSun className="text-yellow-400" />
      <Switch
        onChange={() => setDark(!dark)}
        checked={dark}
        offColor="#facc15"
        onColor="#4b5563"
        onHandleColor="#fff"
        offHandleColor="#000"
        uncheckedIcon={false}
        checkedIcon={false}
        height={24}
        width={48}
        handleDiameter={20}
      />
      <FaMoon className="text-blue-200" />
    </div>
  );
}
