import React, { useState, useEffect } from "react";

function Project7() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  // تنظیم کلاس darkMode در تگ html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="p-2 m-4 bg-blue-500 text-white rounded"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h1 className="text-4xl text-center">
        {darkMode ? "Dark Mode" : "Light Mode"} is On
      </h1>
    </div>
  );
}

export default Project7;
