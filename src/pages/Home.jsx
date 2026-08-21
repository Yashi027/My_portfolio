import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import hero from "../assets/hero.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);

  const skills = [
    "Full Stack Developer",
    "Problem Solver",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [skills.length]);

  const skillVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <section className="min-h-[calc(100vh-6rem)] w-full px-5 sm:px-6 md:px-8 lg:px-12">

      <div className="max-w-6xl mx-auto min-h-[calc(100vh-6rem)] flex items-center">

        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 md:gap-10 lg:gap-14">

          <div className="w-full sm:w-[60%] md:w-[62%] lg:w-3/5 flex flex-col justify-center text-center sm:text-left">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-500 leading-tight"
            >
              Hello, I'm{" "}
              <span className="text-slate-900 drop-shadow-sm">
                Yashi Bansal
              </span>
            </motion.h1>

            <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 min-h-[40px]">

              <span className="shrink-0">
                I'm a
              </span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={skills[index]}
                  variants={skillVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  className="text-amber-600"
                >
                  {skills[index]}
                </motion.span>
              </AnimatePresence>

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5 max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg md:text-lg lg:text-xl text-slate-600 leading-relaxed"
            >
              I build{" "}
              <span className="text-amber-600 font-semibold">
                modern, fast, and interactive web applications
              </span>
              . I focus on clean UI, scalable backends, well-designed APIs,
              and smooth user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-3 max-w-2xl mx-auto sm:mx-0 text-base sm:text-lg md:text-lg text-slate-500 leading-relaxed"
            >
              I enjoy turning ideas into{" "}
              <span className="text-amber-600 font-semibold">
                reliable and production-ready products
              </span>{" "}
              while continuously learning and improving as a developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-6"
            >

              <a
                href="https://drive.google.com/file/d/1zAfAeOGP9rTRE4XuiZOnsIcXUooqKbpG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-slate-900 text-white border border-slate-800 shadow-lg shadow-slate-300 hover:bg-amber-500 hover:scale-105 font-bold text-sm sm:text-base transition-all duration-300"
              >
                View Resume
              </a>

              <Link
                to="/projects"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-slate-800 border border-slate-300 hover:bg-slate-900 hover:text-white hover:scale-105 font-bold text-sm sm:text-base transition-all duration-300"
              >
                View Projects
              </Link>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-6"
            >

              <a
                href="https://www.linkedin.com/in/yashi-bansal-66aa09332"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:bg-amber-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://github.com/Yashi027"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:bg-amber-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bansalyashi163@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:bg-amber-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://web.telegram.org/k/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:bg-amber-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaTelegramPlane className="text-lg sm:text-xl" />
              </a>

            </motion.div>

          </div>

          <div className="hidden sm:flex w-[40%] md:w-[38%] lg:w-2/5 justify-center items-center shrink-0">

            <motion.img
              src={hero}
              alt="Yashi Bansal"
              className="h-44 sm:h-52 md:h-60 lg:h-80 xl:h-96 w-auto max-w-full object-cover rounded-3xl shadow-2xl border border-slate-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.04 }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;