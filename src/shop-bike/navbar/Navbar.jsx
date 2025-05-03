// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // Icons from react-icons
// import { href } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const options = [
//     { name: "Project1", href: "/project1" },
//     { name: "Project2", href: "/project2" },
//     { name: "Project3", href: "/project3" },
//     { name: "Porjecr4", href: "/project4" },
//     { name: "Porjecr5", href: "/project5" },
//     { name: "Project6", href: "/project6" },
//     { name: "Project7", href: "/project7" },
//   ];

//   const handleSelectChange = (e) => {
//     const selectedHref = e.target.value;
//     if (selectedHref) {
//       setIsOpen(false); // Close mobile menu if open
//       window.location.href = selectedHref;
//     }
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo section */}
//           <div className="flex items-center">
//             <a href="/" className="text-2xl font-bold text-gray-800">
//               Logo
//             </a>
//           </div>
//           <div className=" border p-2 rounded-lg shadow border-gray-300 text-gray-500 ">
//             <h1>usr Dark Mode</h1>
//           </div>

//           {/* Desktop links + Select Option */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-blue-600 transition duration-300"
//               >
//                 {item.name}
//               </a>
//             ))}
//             {/* Select dropdown */}
//             <select
//               onChange={handleSelectChange}
//               className="border rounded-md px-2 py-1 text-gray-700"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select Project
//               </option>
//               {options.map((option) => (
//                 <option key={option.name} value={option.href}>
//                   {option.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center ">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-800"
//             >
//               {isOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           {/* Mobile Select */}
//           <select
//             onChange={handleSelectChange}
//             className="block w-full mt-2 border rounded-md px-3 py-2 text-gray-700"
//             defaultValue=""
//           >
//             <option value="" disabled>
//               Select Project
//             </option>
//             {options.map((option) => (
//               <option key={option.name} value={option.href}>
//                 {option.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons from react-icons
import { href } from "react-router-dom";

const Navbar = () => {
  // darl mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  // dark mode

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const options = [
    { name: "Project1", href: "/project1" },
    { name: "Project2", href: "/project2" },
    { name: "Project3", href: "/project3" },
    { name: "Porjecr4", href: "/project4" },
    { name: "Porjecr5", href: "/project5" },
    { name: "Project6", href: "/project6" },
    { name: "Project7", href: "/project7" },
  ];

  const handleSelectChange = (e) => {
    const selectedHref = e.target.value;
    if (selectedHref) {
      setIsOpen(false); // Close mobile menu if open
      window.location.href = selectedHref;
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo section */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Logo
            </a>
          </div>
          {/* dark mode */}

          {/* جایگزینی بخش فعلی Dark Mode با این کد */}
          <div className="border p-2 rounded-lg shadow border-gray-300 dark:border-gray-600 transition-all duration-300">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? (
                <>
                  <FiSun className="w-5 h-5 animate-pulse" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5 animate-spin-once" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* dark mode */}

          {/* Desktop links + Select Option */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </a>
            ))}
            {/* Select dropdown */}
            <select
              onChange={handleSelectChange}
              className="border rounded-md px-2 py-1 text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select Project
              </option>
              {options.map((option) => (
                <option key={option.name} value={option.href}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Mobile Select */}
          <select
            onChange={handleSelectChange}
            className="block w-full mt-2 border rounded-md px-3 py-2 text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select Project
            </option>
            {options.map((option) => (
              <option key={option.name} value={option.href}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
