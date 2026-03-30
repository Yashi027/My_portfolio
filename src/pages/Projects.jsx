import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import portfolioimg from '../assets/portfolio.png'
import skill_gap from '../assets/skill_gap.png'
import cart from '../assets/green_cart.png'
import restaurant from '../assets/restaurant.png'
import book from '../assets/book.png'
import portal from '../assets/portal.png'

const projects = [
  {
    name: 'My_Portfolio',
    skill: ['React', 'Tailwind CSS'],
    description: "You are here!",
    image: portfolioimg
  },
  {
    name: 'Skill Gap Analysis',
    skill: ['React', 'Tailwind CSS'],
    description: "Skill Gap Analysis is an interactive platform that analyzes GitHub data and user ratings to identify missing skills and recommend targeted improvement plans.",
    image: skill_gap
  },
  {
    name: 'Green Cart',
    skill: ['React', 'Node.Js', 'Express', 'MongoDb', 'Tailwind CSS'],
    description: "Green Cart is a modern, user-friendly grocery shopping app that allows users to browse, select, and purchase fresh groceries online. The app emphasizes convenience, personalization, and a seamless shopping experience.",
    image: cart
  },
  {
    name: 'Job Portal',
    skill: ['React', 'Node.Js', 'Express', 'MogoDb', 'Tailwind CSS'],
    description: "Job Portal is a full-featured web application that allows user authentication, job posting management, search filters, and real-time application handling.",
    image: portal
  },
  {
    name: 'Book Review Platform',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'Express', 'MongoDb'],
    description: "A full-stack web application where users can explore, add, and review books. It supports user authentication, book management, image uploads, and a responsive, interactive UI with pagination.",
    image: book
  },
  {
    name: 'The Golden Spoon',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'Express', 'MongoDb'],
    description: "The Golden Spoon is a modern restaurant website with clean UI/UX, responsive layout and structured sections for menu and restaurant details.",
    image: restaurant
  }
]
const Projects = () => {
  return (
    <div className='min-h-screen px-6 py-16'>
      <div className='text-center mb-16 '>
        <div className='flex justify-center text-5xl text-blue-950 font-bold gap-1'>
          <FaLaptopCode className='text-6xl mb-4' />
          <h1 className='mb-4'>Projects</h1>
        </div>
        <p>A Showcase of my Development Journey - Full Stack Applications, UI focused projects and Scalable platforms</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {
          projects.map((pro, index) => (
            <div key={index}
              className='group relative rounded-2xl shadow-lg cursor-pointer'>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects