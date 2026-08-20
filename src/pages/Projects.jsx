import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import portfolioimg from "../assets/portfolio.png";
import skill_gap from "../assets/skill_gap.png";
import cart from "../assets/green_cart.png";
import restaurant from "../assets/restaurant.png";
import book from "../assets/book.png";
import portal from "../assets/portal.png";

const projects = [
  {
    name: "My_Portfolio",
    skill: ["React", "Tailwind CSS"],
    description: "You are here!",
    image: portfolioimg,
    link: "#home",
  },
  {
    name: "Skill Gap Analysis",
    skill: ["React", "Tailwind CSS"],
    description:
      "An interactive platform that analyzes GitHub data and user ratings to identify missing skills and recommend targeted improvement plans.",
    image: skill_gap,
    link: "https://github.com/Yashi027/Skill_Gap_Analysis",
  },
  {
    name: "Green Cart",
    skill: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    description:
      "A modern, user-friendly grocery shopping app that allows users to browse, select, and purchase fresh groceries online. The app emphasizes convenience, personalization, and a seamless shopping experience.",
    image: cart,
    link: "https://greencart-eight-ruby.vercel.app/",
  },
  {
    name: "Job Portal",
    skill: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    description:
      "A full-featured web application that allows user authentication, job posting management, search filters, and real-time application handling.",
    image: portal,
    link: "https://github.com/Yashi027/Job_Portal",
  },
  {
    name: "Book Review Platform",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description:
      "A full-stack web application where users can explore, add, and review books. It supports user authentication, book management, image uploads, and a responsive, interactive UI with pagination.",
    image: book,
    link: "https://github.com/Yashi027/Book-Review-Platform",
  },
  {
    name: "The Golden Spoon",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description:
      "The Golden Spoon is a modern restaurant website with clean UI/UX, responsive layout and structured sections for menu and restaurant details.",
    image: restaurant,
    link: "https://github.com/Yashi027/My_restaurant_website",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-12">

      <div className="text-center mb-10 sm:mb-12 md:mb-14">

        <div className="flex justify-center items-center text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold gap-2 sm:gap-3">

          <FaLaptopCode className="text-4xl sm:text-5xl md:text-6xl" />

          <h1>
            Projects
          </h1>

        </div>

        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto px-2 text-sm sm:text-base text-white font-medium leading-relaxed">
          A showcase of my development journey — full-stack applications,
          UI-focused projects, and scalable web platforms.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">

        {projects.map((pro, index) => (

          <div
            key={index}
            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="relative h-44 sm:h-48 w-full overflow-hidden">

              <img
                src={pro.image}
                alt={pro.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-4 sm:p-5">

              <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2">
                {pro.name}
              </h3>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">

                {pro.skill.map((s, i) => (

                  <span
                    key={i}
                    className="text-[11px] sm:text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
                  >
                    {s}
                  </span>

                ))}

              </div>

              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {pro.description}
              </p>

            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">

              <a
                href={pro.link}
                target={pro.link.startsWith("#") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-lime-400 transition-colors duration-300"
              >
                View Project →
              </a>

            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-center mt-10 sm:mt-12">
        <a
          href="https://github.com/Yashi027"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 sm:px-8 py-3 rounded-full bg-blue-950 text-white font-bold text-base sm:text-lg border border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-lime-400 hover:text-blue-950 hover:scale-105 transition-all duration-300"
        >
          View More Projects →
        </a>
      </div>

    </section>
  );
};

export default Projects;