import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCode, FaEnvelope, FaGraduationCap, FaLaptopCode, FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const linkClasses = ({ isActive }) =>
    `m-3 block border rounded-2xl p-2 text-xl flex items-center gap-2 font-bold transition-all duration-300
     ${isActive 
        ? "bg-blue-300 text-blue-950 scale-105 shadow-lg" 
        : "bg-blue-600 text-lime-400 hover:scale-105"
     }`;

  return (
    <div className='fixed top-0 left-0 w-full z-50 flex justify-center p-4'>
      
      <NavLink to='/' className={linkClasses}>
        <FaHome /> <span className="hidden md:inline">Home</span>
      </NavLink>

      <NavLink to='/about' className={linkClasses}>
        <FaUser /> <span className="hidden md:inline">About Me</span>
      </NavLink>

      <NavLink to='/education' className={linkClasses}>
        <FaGraduationCap /> <span className="hidden md:inline">Education</span>
      </NavLink>

      <NavLink to='/skills' className={linkClasses}>
        <FaLaptopCode /> <span className="hidden md:inline">Skills</span>
      </NavLink>

      <NavLink to='/projects' className={linkClasses}>
        <FaCode /> <span className="hidden md:inline">Projects</span>
      </NavLink>

      <NavLink to='/contact' className={linkClasses}>
        <FaEnvelope /> <span className="hidden md:inline">Reach Out</span>
      </NavLink>

    </div>
  );
}

export default Sidebar;