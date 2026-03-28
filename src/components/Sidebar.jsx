import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCode, FaEnvelope, FaGraduationCap, FaLaptopCode, FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='fixed left-6 top-1/2 -translate-y-1/2 text-blue-950 p-6 text-2xl'>
      <NavLink to='/' className='m-1 hover:text-lime-400'>
        <FaHome/>
      </NavLink>

      <NavLink to='/about' className='m-1 hover:text-lime-400'>
        <FaUser/>
      </NavLink>

      <NavLink to='/education' className='m-1 hover:text-lime-400'>
        <FaGraduationCap/>
      </NavLink>

      <NavLink to='/skills' className='m-1 hover:text-lime-400'>
        <FaLaptopCode/>
      </NavLink>

      <NavLink to='/projects' className='m-1 hover:text-lime-400'>
        <FaCode/>
      </NavLink>

      <NavLink to='/contact' className='m-1 hover:text-lime-400'>
        <FaEnvelope/>
      </NavLink>
    </div>
  );
}

export default Sidebar;
