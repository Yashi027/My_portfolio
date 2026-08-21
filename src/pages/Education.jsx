import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  const education = [
    {
      title: "B.Tech",
      school: "KIET Group of Institutions",
      desc: "Computer Science Engineering",
      year: "2024 – 2028",
      points: [
        "Flipkart Grid 7.0 Semi-finalist",
        "650+ GFG & 400+ LeetCode problems",
      ],
    },
    {
      title: "12th Grade",
      school: "Lucknow Public School",
      desc: "PCM",
      year: "2023 – 2024",
      points: [
        "Top 3 District Ranker",
        "English Speech Winner",
      ],
    },
    {
      title: "10th Grade",
      school: "Lucknow Public School",
      desc: "",
      year: "2021 – 2022",
      points: ["Hindi Debate Winner"],
    },
  ];

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-12">

      <div className="text-center mb-12 sm:mb-16 lg:mb-20 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">

        <FaGraduationCap className="text-4xl sm:text-5xl text-slate-800" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
          Education and Achievements
        </h1>

      </div>

      <div className="lg:hidden max-w-3xl mx-auto">

        <div className="relative">

          <div className="absolute left-[10px] sm:left-[11px] top-0 bottom-0 w-1 bg-amber-500 rounded-full" />

          <div className="space-y-8 sm:space-y-10">

            {education.map((item, index) => (

              <div
                key={index}
                className="relative pl-8 sm:pl-10"
              >

                <div className="absolute left-0 top-7 w-5 h-5 bg-amber-500 rounded-full z-10 border-4 border-white" />

                <div className="w-full p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300">

                  <h2 className="text-lg sm:text-xl text-amber-600 font-semibold mb-1">
                    {item.title}
                  </h2>

                  <h3 className="font-semibold text-base sm:text-lg mb-1 break-words text-slate-800">
                    {item.school}
                  </h3>

                  {item.desc && (
                    <p className="text-sm sm:text-base text-slate-500 break-words">
                      {item.desc}
                    </p>
                  )}

                  <p className="text-sm sm:text-base mb-4 text-slate-500">
                    {item.year}
                  </p>

                  <ul className="text-sm sm:text-base text-slate-600 space-y-2">

                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="break-words leading-relaxed"
                      >
                        • {point}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="hidden lg:block">

        <div className="relative max-w-6xl mx-auto">

          <div className="absolute top-[10px] left-0 right-0 h-1 bg-amber-500 rounded-full z-0" />

          <div className="grid grid-cols-3 gap-8">

            {education.map((item, index) => (

              <div
                key={index}
                className="relative flex flex-col items-center"
              >

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full z-10 border-4 border-white" />

                <div className="mt-16 w-full min-h-[260px] p-6 rounded-xl bg-white border border-slate-200 shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300">

                  <div>

                    <h2 className="text-xl text-amber-600 font-semibold mb-1">
                      {item.title}
                    </h2>

                    <h3 className="font-semibold text-lg mb-1 break-words text-slate-800">
                      {item.school}
                    </h3>

                    {item.desc && (
                      <p className="text-sm text-slate-500 break-words">
                        {item.desc}
                      </p>
                    )}

                    <p className="text-sm mb-4 text-slate-500">
                      {item.year}
                    </p>

                  </div>

                  <ul className="text-sm text-slate-600 space-y-2">

                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="break-words leading-relaxed"
                      >
                        • {point}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;