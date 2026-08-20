import React from 'react';
import { FaLaptopCode } from 'react-icons/fa6';

const skills = [
  { name: "HTML5", image: "/html.webp" },
  { name: "CSS3", image: "/css.png" },
  { name: "JavaScript", image: "/js.png" },
  { name: "React", image: "/react.png" },
  { name: "GitHub", image: "/git.png" },
  { name: "Node.js", image: "/node.png" },
  { name: "Express.js", image: "/express.png" },
  { name: "MongoDB", image: "/mongo.png" },
  { name: "Postman", image: "/postman.webp" },
  { name: "SQL", image: "/sql.webp" },
  { name: "Python", image: "/python.jpg" },
  { name: "C++", image: "/c.png" },
  { name: "Java", image: "/java.png" },
  { name: "VS Code", image: "/vs.png" }
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-12">


      <div className="text-center mb-12 sm:mb-14 md:mb-16 flex justify-center items-center gap-2 text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold">

        <FaLaptopCode className="text-4xl sm:text-5xl md:text-6xl" />

        <h1>
          Skills
        </h1>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="w-full min-h-[150px] sm:min-h-[165px] md:min-h-[175px] bg-white/10 backdrop-blur-sm border border-white/40 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center shadow-[0_15px_20px_rgba(0,0,0,0.45)] hover:-translate-y-2 hover:scale-105 hover:bg-white/20 hover:shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-300"
          >

            <img
              src={skill.image}
              alt={skill.name}
              className="h-14 sm:h-16 md:h-20 w-auto mb-3 sm:mb-4 object-contain"
            />

            <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
              {skill.name}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;