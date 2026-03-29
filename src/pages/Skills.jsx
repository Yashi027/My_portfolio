import React from 'react';
import { FaLaptopCode } from 'react-icons/fa6';

const skills = [
  {name: "HTML5", image: '/html.webp'},
  {name: "CSS3", image: '/css.png'},
  {name: "Java Script", image: '/js.png'},
  {name: "React", image: '/react.png'},
  {name: "GitHub", image: '/git.png'},
  {name: "Node.js", image: '/node.png'},
  {name: "MongoDB", image: '/mongo.png'},
  {name: "Postman", image: '/postman.webp'},
  {name: "C++", image: '/c.png'},
  {name: "Java", image: '/java.png'},
  {name: 'VS Code',image: '/vs.png'}
]
const Skills = () => {
  return (
    <div className='min-h-screen px-6 py-16 '>
      <div className='text-center mb-16 flex justify-center text-5xl text-blue-950 font-bold gap-1'>
        <FaLaptopCode className='text-6xl mb-4'/>
        <h1 className='mb-4 '>Skills</h1>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto'>
        {
          skills.map((skill,index) => (
            <div key={index} 
            className='bg-transparent border border-white/40 rounded-2xl p-6 flex flex-col items-center shadow-[0_20px_20px_rgba(0,0,0,0.7)] hover:scale-105 hover:shadow-[0_25px_25px_rgba(0,0,0,0.8)] hover:bg-gray-100'>
              <img src={skill.image} alt={skill.name} 
              className=' h-20 mb-4 object-contain'/>
              <p className='font-semibold text-lg text-gray-800'>{skill.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Skills;
