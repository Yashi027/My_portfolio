import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaFileArrowDown,
  FaCode,
} from 'react-icons/fa6'
import { FiMapPin } from 'react-icons/fi'

const Contact = () => {

  const openGmail = () => {
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=bansalyashi163@gmail.com' +
      '&su=Portfolio%20Contact'

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 px-5 py-20 sm:px-8 lg:px-16"
    >

      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />


      <div className="relative mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-amber-500" />

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
              Contact
            </span>

            <span className="h-[2px] w-10 bg-amber-500" />

          </div>


          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's Connect
            <span className="text-amber-500">.</span>
          </h1>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I'm always interested in new opportunities, exciting
            projects, and meaningful collaborations. Let's connect
            and build something impactful.
          </p>

        </div>


        <div className="grid gap-8 lg:grid-cols-5">

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-300/50 sm:p-10 lg:col-span-2">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[45px] border-white/10" />

            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[45px] border-amber-400/20" />


            <div className="relative z-10 flex h-full flex-col">

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-3xl text-white shadow-lg">
                <FaCode />
              </div>


              <h2 className="text-3xl font-bold">
                Let's build something great.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Whether you have a project idea, an internship
                opportunity, or simply want to connect, I'd love
                to hear from you.
              </p>


              <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400" />

                </span>


                <span className="text-sm font-medium">
                  Open to opportunities
                </span>

              </div>

              <div className="mt-auto pt-10">

                <div className="flex items-center gap-3 text-slate-300">

                  <FiMapPin className="text-xl text-amber-400" />

                  <span>
                    India
                  </span>

                </div>

              </div>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">

            <button
              type="button"
              onClick={openGmail}
              className="group text-left rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">

                  <FaEnvelope />

                </div>


                <FaArrowRight className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-600" />

              </div>

              <p className="mt-8 text-sm font-medium text-slate-500">
                Email
              </p>

              <h3 className="mt-2 break-all text-lg font-bold text-slate-800">
                bansalyashi163@gmail.com
              </h3>


              <p className="mt-3 text-sm text-slate-500">
                Open Gmail and send me a message
              </p>

            </button>


            <a
              href="https://www.linkedin.com/in/yashi-bansal-66aa09332"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">

                  <FaLinkedin />

                </div>


                <FaArrowRight className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-600" />

              </div>


              <p className="mt-8 text-sm font-medium text-slate-500">
                LinkedIn
              </p>


              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Let's connect professionally
              </h3>


              <p className="mt-3 text-sm text-slate-500">
                View my profile & experience
              </p>

            </a>


            <a
              href="https://github.com/Yashi027"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-200/60"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl text-slate-800 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">

                  <FaGithub />

                </div>


                <FaArrowRight className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-900" />

              </div>


              <p className="mt-8 text-sm font-medium text-slate-500">
                GitHub
              </p>


              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Explore my projects
              </h3>


              <p className="mt-3 text-sm text-slate-500">
                Check out my code & repositories
              </p>

            </a>


            <a
              href="/resume.pdf"
              download
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">

                  <FaFileArrowDown />

                </div>


                <FaArrowRight className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-600" />

              </div>


              <p className="mt-8 text-sm font-medium text-slate-500">
                Resume
              </p>


              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Download my resume
              </h3>


              <p className="mt-3 text-sm text-slate-500">
                View my skills & experience
              </p>

            </a>

          </div>

        </div>


        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Have something interesting in mind?
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            I'd love to hear from you.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            The best way to reach me is through email or LinkedIn.
            I'm always happy to discuss projects, opportunities,
            and new ideas.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <button
              type="button"
              onClick={openGmail}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-600"
            >

              <FaEnvelope />

              Email Me

            </button>

            <a
              href="https://www.linkedin.com/in/yashi-bansal-66aa09332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
            >

              <FaLinkedin />

              LinkedIn

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact