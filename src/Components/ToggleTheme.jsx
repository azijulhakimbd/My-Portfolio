import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle text-xl"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <MdDarkMode className="text-primary" size={30}/> : <MdLightMode className="text-primary" size={30}/>}
    </button>
  );
};

export default ToggleTheme;
