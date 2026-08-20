import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaUser,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/education", label: "Education", icon: <FaGraduationCap /> },
    { to: "/skills", label: "Skills", icon: <FaLaptopCode /> },
    { to: "/projects", label: "Projects", icon: <FaCode /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-3">
      <nav className="max-w-5xl mx-auto flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-lg">

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-lime-400 text-blue-950 shadow-md"
                  : "text-white hover:bg-white/20 hover:text-lime-300"
              }`
            }
          >
            {link.icon}

            <span className="hidden md:inline">
              {link.label}
            </span>
          </NavLink>
        ))}

      </nav>
    </header>
  );
};

export default Sidebar;