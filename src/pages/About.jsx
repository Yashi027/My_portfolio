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
      <div className='min-h-screen px-6 py-16'>
        <div className='text-5xl flex justify-center p-5 text-blue-950 mt-15'>
          <FaUser />
          <h2 className='font-extrabold'> About <span className='text-lime-400'>Me</span></h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-around mt-12 lg:mt-20 text-xl gap-10 px-6'>
          <div className='font-bold text-white max-w-3xl'>
            <h1 className='text-2xl'>I'm Yashi</h1>
            <p className='text-lime-400'>B.Tech-CSE | KIET'28</p>
            <br />
            <p>I am a <span className='text-lime-400'>Computer Science student</span> at KIET Group of Institutions, Ghaziabad, India.</p>
            <br />
            <p>I am a passionate and driven tech enthusiast with a strong curiosity for exploring emerging technologies and solving real-world problems through code. With hands-on experience in C, Python, and Java, and strong proficiency in C++, I bring both analytical thinking and practical implementation skills to every project I undertake. My goal is not just to write code, but to create impactful, scalable, and innovative solutions that contribute meaningfully to technological advancement.
              <br/>
              I am actively seeking opportunities where I can apply my technical expertise, continuously learn, and deliver value to an organization that aligns with my passion for growth and excellence.</p>
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