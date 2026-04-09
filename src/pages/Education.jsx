import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="min-h-screen px-6 py-16 text-white ml-60">

      <div className="text-center mb-16 flex justify-center">
        <FaGraduationCap className="text-5xl font-bold mb-4 text-blue-950"/>
        <h1 className="text-5xl font-bold mb-4 text-blue-950">Education and Achievements</h1>
      </div>

      <div className="relative border-l-4 border-lime-400 max-w-4xl mx-auto">

        <div className="mb-12 ml-6">
          <div className="absolute w-5 h-5 bg-lime-400 rounded-full -left-2.5"></div>
          <h2 className="text-2xl text-lime-400 font-semibold">Bachelor of Technology (B.Tech)</h2>
          <h3 className="text-xl font-semibold">KIET Group of Institutions</h3>
          <p >Computer Science Engineering</p>
          <p >2024 – 2028</p>
          <p className="mt-3 opacity-90">
            • Selected as a semi-finalist at Flipkart Grid 7.0
          </p>
          <p className="opacity-90">
            • Solved 600+ problems on GeeksForGeeks and 300+ on LeetCode which strengthened my problem-solving skills
          </p>
        </div>

        <div className="mb-12 ml-6">
          <div className="absolute w-5 h-5 bg-lime-400 rounded-full -left-2.5"></div>
          <h2 className="text-2xl text-lime-400 font-semibold">Senior Secondary (12th Grade)</h2>
          <h3 className="text-xl font-semibold">Lucknow Public School</h3>
          <p >Science Stream (PCM)</p>
          <p>2023-2024</p>
          <p className=" mt-3 opacity-90">
            • Top 3 District Ranker
          </p>
          <p className="opacity-90">
            • Won Inter-House English Speech Competition 
          </p>
        </div>

        <div className="mb-12 ml-6">
          <div className="absolute w-5 h-5 bg-lime-400 rounded-full -left-2.5"></div>
          <h2 className="text-2xl text-lime-400 font-semibold">Secondary Education (10th Grade)</h2>
          <h3 className="text-xl font-semibold">Lucknow Public School</h3>
          <p>2021-2022</p>
          <p className="mt-3 opacity-90">
            • Won Inter-College Hindi Debate Competition
          </p>
        </div>

      </div>

    </div>
  );
};

export default Education;