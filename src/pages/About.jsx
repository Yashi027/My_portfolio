import React from 'react'
import { motion } from 'framer-motion'
import { FaUser } from 'react-icons/fa6'
import hero from '../assets/hero.jpeg'

const About = () => {
  return (
    <div className='min-h-screen'>
      <div className='text-4xl flex justify-center p-5 text-blue-950'>
        <FaUser className='mt-10' />
        <h2 className='font-extrabold mt-10'> About <span className='text-lime-400'>Me</span></h2>
      </div>
      <div className='flex justify-around mt-20 text-xl'>
        <div className='font-bold text-white max-w-3xl'>
          <h1 className='text-2xl'>I'm Yashi</h1>
          <p className='text-lime-400'>B.Tech-CSE | KIET'28</p>
          <br />
          <p>I am a <span className='text-lime-400'>Computer Science student</span> at KIET Group of Institutions, Ghaziabad, India.</p>
          <br />
          <p>Being a keen learner, I am always passionate about exploring new areas in tech world.
            I have experience with several programming languages like C, Python, Java... while my my proficiency lies in C++.
            I aim to utilize my tachnical skills to develop innovative solutions that can elevate technological progress while
            further seeking opportunities for my contributions in the field that aligns with my skills and interests.</p>
            <br />
          <p>Mail : <span className='text-lime-400'>bansalyashi163@gmail.com</span></p>
          <p>Place : <span className='text-lime-400'>Lakhimpur-Kheri, Uttar Pradesh, India-262701</span></p>
        </div>
        <div className='flex justify-center items-center'>
          <motion.img src={hero}
            className='h-80 rounded-2xl shadow-2xl'
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            whileHover={{ y: -20, scale: 1.05 }} />
        </div>
      </div>
    </div>
  )
}

export default About