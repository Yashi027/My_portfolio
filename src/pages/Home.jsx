import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import hero from '../assets/hero.jpeg'

const Home = () => {
  const [index, setIndex] = useState(0);
  const skills = ['Full Stack Development', 'Problem-Solving'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % skills.length)
    }, 2000);
    return () => clearInterval(timer);
  }, [skills.length])

  const skillVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className='flex flex-col md:flex-row justify-center gap-18'>
      <section id='hero' className='min-h-screen flex flex-col justify-center px-4 max-w-2xl'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-5xl font-bold text-cyan-950 leading-tight'>
          Hello, I'm <span className='text-white drop-shadow-sm'>Yashi Bansal.</span>
        </motion.h1>
        <div className='text-white font-bold mt-6 text-2xl md:text-3xl flex items-center gap-2 '>
          I am into
          <AnimatePresence mode='wait'>
            <motion.p
              key={skills[index]}
              variants={skillVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.8 }}
              className='text-lime-400 inline p-1'>
              {skills[index]}.
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white mt-4 max-w-md text-lg leading-relaxed">
          Passionate about creating seamless user experiences and robust back-end systems.
          Currently looking for opportunities to collaborate on innovative MERN Stack projects.
        </motion.p>

        <motion.a
          href='https://drive.google.com/file/d/1nFv9INIHXAJCvsCREsiUxKigywQwmrLr/view?usp=sharing'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='mt-8 px-8 py-3 w-fit bg-blue-900 backdrop-blur-md border border-white/20 hover:bg-lime-400 hover:text-blue-900 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] text-white font-bold text-lg transition-all duration-300 text-center'>
          Resume
        </motion.a>

        <motion.div
          initial={{}}
          animate={{}}
          transition={{}}
          className='flex gap-6 mt-8 text-2xl'>
          <a href="https://www.linkedin.com/in/yashi-bansal-66aa09332"
            className='text-lime-400 text-2xl bg-blue-950 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-all duration-300 border border-white/10 shadow-lg'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/Yashi027"
            className='text-lime-400 text-2xl bg-blue-950 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-all duration-300 border border-white/10 shadow-lg'>
            <FaGithub />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bansalyashi163@gmail.com"
            className='text-lime-400 text-2xl bg-blue-950 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-all duration-300 border border-white/10 shadow-lg'>
            <FaEnvelope />
          </a>
          <a href="https://web.telegram.org/k/"
            className='text-lime-400 text-2xl bg-blue-950 p-3 rounded-full hover:bg-lime-400 hover:text-blue-900 transition-all duration-300 border border-white/10 shadow-lg'>
            <FaTelegramPlane />
          </a>
        </motion.div>

      </section>
      <div className='flex justify-center items-center'>
        <motion.img src={hero}
          className='h-80 rounded-2xl shadow-2xl'
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          whileHover={{ y: -20, scale: 1.05 }} />
      </div>
    </div>
  )
}

export default Home