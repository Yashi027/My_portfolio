import React from 'react'
import { motion } from 'framer-motion'
import { FaUser } from 'react-icons/fa6'
import hero from '../assets/hero.jpeg'

const profiles = [
  { name: "GeeksforGeeks", image: '/gfg.png', link: 'https://www.geeksforgeeks.org/profile/bansalyashi' },
  { name: "Leetcode", image: '/lc.webp', link: 'https://leetcode.com/u/Yashi_bansal/' },
  { name: "Github", image: '/git.png', link: 'https://github.com/Yashi027' }
]
const About = () => {
  return (
    <>
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

      <div>
        <div className='text-4xl flex justify-center p-5 text-blue-950'>
          <FaUser className='mt-10' />
          <h2 className='font-extrabold mt-10'> Other <span className='text-lime-400'>Profiles</span></h2>
        </div>
        <div className='grid grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {
            profiles.map((profile, index) => (
              <a key={index}
                href={profile.link}
                className='bg-transparent border border-white/40 rounded-2xl p-4 flex flex-col items-center shadow-[0_20px_20px_rgba(0,0,0,0.7)] hover:scale-105 hover:shadow-[0_25px_25px_rgba(0,0,0,0.8)] hover:bg-gray-100 mb-20 mt-10'>
                <img src={profile.image} alt={profile.name}
                  className=' h-20 mb-4 object-contain' />
                <p className='font-semibold text-lg text-gray-800'>{profile.name}</p>
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default About