import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons from react-icons

const Navbar = () => {
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
  ];

  const handleSelectChange = (e) => {
    const selectedHref = e.target.value;
    if (selectedHref) {
      setIsOpen(false); // Close mobile menu if open
      window.location.href = selectedHref;
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo section */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Logo
            </a>
          </div>

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
          <div className="md:hidden flex items-center">
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
