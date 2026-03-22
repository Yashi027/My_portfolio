import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';

const Home = () => {
  const [index,setIndex] = useState(0);
  const skills = ['Full Stack Development','Problem-Solving'];

  useEffect(()=>{
    const timer = setInterval(() => {
      setIndex(prev => (prev+1)%skills.length)
    },2000);
    return () => clearInterval(timer);
  },[skills.length])

  const skillVariants = {
    initial:{opacity:0, y:20},
    animate:{opacity:1, y:0},
    exit:{opacity:0, y:-20}
  };

  return (
    <section id='hero' className='min-h-screen flex flex-col justify-center m-5 px-4'>
      <motion.h1
      initial={{opacity:0, y: -20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.6}}
      className='text-3xl md:text-5xl font-bold text-cyan-950'>
        Hello, I'm <span className='text-white'>Yashi Bansal.</span>
      </motion.h1>
      <div className='text-white font-bold mt-6 text-2xl md:text-3xl overflow-hidden '>
        I am into 
        <AnimatePresence mode='wait'>
          <motion.p
          key={skills[index]}
          variants={skillVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{duration:0.6}}
          className='text-green-400 inline'>
            {skills[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Home