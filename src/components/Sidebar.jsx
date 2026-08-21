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
      <nav className="max-w-5xl mx-auto flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg shadow-slate-200/50">

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-amber-500 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-amber-600"
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