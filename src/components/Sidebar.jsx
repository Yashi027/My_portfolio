import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCode, FaEnvelope, FaGraduationCap, FaLaptopCode, FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const linkClasses = ({ isActive }) =>
    `m-3 block border rounded-2xl p-2 text-xl flex items-center gap-2 font-bold transition-all duration-300
     ${isActive 
        ? "bg-blue-300 text-blue-950 scale-105 shadow-lg" 
        : "bg-blue-600 text-lime-400 hover:bg-blue-300 hover:text-blue-950 hover:scale-105"
     }`;

  return (
    <div className='fixed left-6 top-1/2 -translate-y-1/2 p-6 text-2xl space-y-3'>
      
      <NavLink to='/' className={linkClasses}>
        <FaHome /> Home
      </NavLink>

      <NavLink to='/about' className={linkClasses}>
        <FaUser /> About Me
      </NavLink>

      <NavLink to='/education' className={linkClasses}>
        <FaGraduationCap /> Education
      </NavLink>

      <NavLink to='/skills' className={linkClasses}>
        <FaLaptopCode /> Skills
      </NavLink>

      <NavLink to='/projects' className={linkClasses}>
        <FaCode /> Projects
      </NavLink>

      <NavLink to='/contact' className={linkClasses}>
        <FaEnvelope /> Contact
      </NavLink>

    </div>
  );
}

export default Sidebar;