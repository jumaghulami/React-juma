import { useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiTrendingUp,
  FiFilm,
} from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function TechWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Web Development", icon: <FiCode />, color: "border-indigo-600" },
    {
      title: "MIS Development",
      icon: <FiDatabase />,
      color: "border-emerald-600",
    },
    {
      title: "Mobile Application",
      icon: <FiSmartphone />,
      color: "border-amber-600",
    },
    {
      title: "Digital Marketing",
      icon: <FiTrendingUp />,
      color: "border-rose-600",
    },
    {
      title: "Design & Motion Studio",
      icon: <FiFilm />,
      color: "border-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">
                TechSolutions
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Full-cycle development and digital solutions for your business
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${service.color} hover:shadow-xl transition-all hover:scale-105`}
            >
              <div className="text-4xl text-indigo-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">
                Professional development and implementation services tailored to
                your business needs.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
              <p className="text-gray-400">
                Innovating digital solutions for tomorrow's challenges
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>MIS Systems</li>
                <li>Mobile Apps</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@techsolutions.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, USA</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebook className="text-2xl hover:text-indigo-500 cursor-pointer" />
                <FaTwitter className="text-2xl hover:text-indigo-500 cursor-pointer" />
                <FaLinkedin className="text-2xl hover:text-indigo-500 cursor-pointer" />
                <FaInstagram className="text-2xl hover:text-indigo-500 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 TechSolutions. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
