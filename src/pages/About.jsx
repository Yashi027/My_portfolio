import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import hero from "../assets/hero.jpeg";

const profiles = [
  {
    name: "GeeksforGeeks",
    image: "/gfg.png",
    link: "https://www.geeksforgeeks.org/profile/bansalyashi",
  },
  {
    name: "LeetCode",
    image: "/lc.webp",
    link: "https://leetcode.com/u/Yashi_bansal/",
  },
  {
    name: "GitHub",
    image: "/git.png",
    link: "https://github.com/Yashi027",
  },
];

const About = () => {
  return (
    <section className="w-full px-5 sm:px-6 md:px-8 lg:px-12 pt-24 pb-10">

      <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center items-center gap-2 sm:gap-3 text-blue-950 font-bold mb-8 sm:mb-10">

        <FaUser className="text-3xl sm:text-4xl md:text-5xl" />

        <h2>
          About <span className="text-lime-400">Me</span>
        </h2>

      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-14">

        <div className="w-full lg:w-3/5 text-white text-center lg:text-left">

          <h1 className="text-2xl sm:text-3xl font-bold">
            I'm Yashi
          </h1>

          <p className="text-lime-400 font-semibold text-base sm:text-lg mt-1 mb-5">
            B.Tech CSE | KIET'28
          </p>

          <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">

            <p>
              I am a{" "}
              <span className="text-lime-400 font-semibold">
                Computer Science student
              </span>{" "}
              at KIET Group of Institutions, Ghaziabad, India.
            </p>

            <p>
              I am a passionate developer who enjoys exploring technologies
              and solving real-world problems through code. I have hands-on
              experience with C, Python, Java, C++, JavaScript, and the MERN
              stack, with a strong interest in building modern web
              applications.
            </p>

            <p>
              I enjoy turning ideas into{" "}
              <span className="text-lime-400 font-semibold">
                scalable, user-focused, and practical solutions
              </span>{" "}
              while continuously improving my problem-solving and development
              skills.
            </p>

            <p>
              I am looking for opportunities where I can contribute to
              meaningful projects, work with experienced developers, and
              continue growing as a software engineer.
            </p>

          </div>


          <div className="mt-6 space-y-2 text-sm sm:text-base md:text-lg">

            <p className="break-words">
              <span className="font-semibold">Mail:</span>{" "}
              <span className="text-lime-400">
                bansalyashi163@gmail.com
              </span>
            </p>

            <p>
              <span className="font-semibold">Place:</span>{" "}
              <span className="text-lime-400">
                Lakhimpur-Kheri, Uttar Pradesh, India
              </span>
            </p>

          </div>

        </div>

        <div className="w-full lg:w-2/5 flex justify-center items-center">

          <motion.img
            src={hero}
            alt="Yashi Bansal"
            className="h-56 sm:h-64 md:h-72 lg:h-80 w-auto max-w-[80%] object-cover rounded-3xl shadow-2xl border border-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            whileHover={{ y: -15, scale: 1.04 }}
          />

        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 sm:mt-16">

        <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center items-center gap-2 sm:gap-3 text-blue-950 font-bold mb-7 sm:mb-9">

          <FaUser className="text-3xl sm:text-4xl md:text-5xl" />

          <h2>
            Other <span className="text-lime-400">Profiles</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {profiles.map((profile, index) => (

            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[140px] sm:min-h-[160px] bg-white/10 backdrop-blur-sm border border-white/40 rounded-2xl p-5 flex flex-col items-center justify-center shadow-[0_15px_20px_rgba(0,0,0,0.45)] hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-all duration-300"
            >

              <img
                src={profile.image}
                alt={profile.name}
                className="h-14 sm:h-16 md:h-20 w-auto mb-3 sm:mb-4 object-contain"
              />

              <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-800">
                {profile.name}
              </p>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;