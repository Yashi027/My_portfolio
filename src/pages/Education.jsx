import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="min-h-screen px-6 py-16 text-white">

      <div className="text-center mb-20 flex justify-center items-center gap-3 mt-15">
        <FaGraduationCap className="text-5xl text-blue-950" />
        <h1 className="text-5xl font-bold text-blue-950">
          Education and Achievements
        </h1>
      </div>

      <div className="overflow-x-auto">
        <div className="flex justify-between w-full max-w-6xl mx-auto relative items-start">

          <div className="absolute top-14 left-0 w-full h-1 bg-lime-400"></div>
          {[
            {
              title: "B.Tech",
              school: "KIET Group of Institutions",
              desc: "Computer Science Engineering",
              year: "2024 – 2028",
              points: [
                "Flipkart Grid 7.0 Semi-finalist",
                "600+ GFG & 300+ LeetCode problems"
              ]
            },
            {
              title: "12th Grade",
              school: "Lucknow Public School",
              desc: "PCM",
              year: "2023-2024",
              points: [
                "Top 3 District Ranker",
                "English Speech Winner"
              ]
            },
            {
              title: "10th Grade",
              school: "Lucknow Public School",
              desc: "",
              year: "2021-2022",
              points: [
                "Hindi Debate Winner"
              ]
            }
          ].map((item, index) => (

            <div key={index} className="relative w-80 flex flex-col items-center group">

              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-lime-400 rounded-full z-10"></div>

              <div className="mt-25 w-full h-[260px] p-6 rounded-xl 
                              shadow-lg border border-gray-700 flex flex-col justify-between
                              group-hover:-translate-y-2 group-hover:shadow-lime-400/30 
                              transition duration-300">

                <div>
                  <h2 className="text-xl text-lime-400 font-semibold mb-1">
                    {item.title}
                  </h2>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.school}
                  </h3>
                  {item.desc && (
                    <p className="text-sm opacity-80">{item.desc}</p>
                  )}
                  <p className="text-sm mb-3">{item.year}</p>
                </div>

                <ul className="text-sm opacity-90 space-y-1">
                  {item.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>

              </div>
            </div>

          ))}

        </div>
      </div>

    </div>
  );
};

export default Education;