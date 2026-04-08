import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6'
import portfolioimg from '../assets/portfolio.png'
import skill_gap from '../assets/skill_gap.png'
import cart from '../assets/green_cart.png'
import restaurant from '../assets/restaurant.png'
import book from '../assets/book.png'
import portal from '../assets/portal.png'
import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'My_Portfolio',
    skill: ['React', 'Tailwind CSS'],
    description: "You are here!",
    image: portfolioimg,
    link: '/'
  },
  {
    name: 'Skill Gap Analysis',
    skill: ['React', 'Tailwind CSS'],
    description: "An interactive platform that analyzes GitHub data and user ratings to identify missing skills and recommend targeted improvement plans.",
    image: skill_gap,
    link: 'https://github.com/Yashi027/Skill_Gap_Analysis'
  },
  {
    name: 'Green Cart',
    skill: ['React', 'Node.Js', 'Express', 'MongoDb', 'Tailwind CSS'],
    description: "A modern, user-friendly grocery shopping app that allows users to browse, select, and purchase fresh groceries online. The app emphasizes convenience, personalization, and a seamless shopping experience.",
    image: cart,
    link: 'https://greencart-eight-ruby.vercel.app/'
  },
  {
    name: 'Job Portal',
    skill: ['React', 'Node.Js', 'Express', 'MogoDb', 'Tailwind CSS'],
    description: "A full-featured web application that allows user authentication, job posting management, search filters, and real-time application handling.",
    image: portal,
    link: 'https://github.com/Yashi027/Job_Portal'
  },
  {
    name: 'Book Review Platform',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'Express', 'MongoDB'],
    description: "A full-stack web application where users can explore, add, and review books. It supports user authentication, book management, image uploads, and a responsive, interactive UI with pagination.",
    image: book,
    link: 'https://github.com/Yashi027/Book-Review-Platform'
  },
  {
    name: 'The Golden Spoon',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'Express', 'MongoDB'],
    description: "The Golden Spoon is a modern restaurant website with clean UI/UX, responsive layout and structured sections for menu and restaurant details.",
    image: restaurant,
    link: 'https://github.com/Yashi027/My_restaurant_website'
  }
]
const Projects = () => {
  return (
    <div className='min-h-screen px-6 py-16 ml-32'>
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
              className='group relative overflow-hidden bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
              <div className='relative h-48 w-full overflow-hidden'>
                <img
                  src={pro.image}
                  alt={pro.name}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-5'>
                <h3 className='text-xl font-bold text-blue-950 mb-2'>{pro.name}</h3>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {pro.skill.map((s, i) => (
                    <span key={i} className='text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-md'>
                      {s}
                    </span>
                  ))}
                </div>
                <p className='text-gray-600 text-sm line-clamp-2'>
                  {pro.description}
                </p>
              </div>

              <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5'>
                <Link to={pro.link} className='text-white font-semibold'>View Project →</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects