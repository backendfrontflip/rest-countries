import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)"; 
    }
  }, [darkMode]);

  return (
    <>
      <header className="flex justify-between items-center p-4 text-black dark:text-white font-bold shadow-md bg-white dark:bg-gray-900 rounded-2xl">
        <h1 className="text-lg">Where in the world?</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 bg-transparent text-black dark:text-white text-sm font-semibold"
        >
          {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </>
  );
};

export default Header;
