import { BiPhone } from 'react-icons/bi'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 flex items-center justify-center ml-25'>
      <div className='w-full max-w-6xl'>
        <div className='flex justify-center text-5xl text-center text-blue-950 font-bold gap-1 space-y-6'>
          <FaEnvelope className='text-6xl mb-4' />
          <h1 className='mb-4'>Get In Touch</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-10'>
          <div className='space-y-6 flex flex-col justify-center'>
            <div className='flex items-center gap-4 text-gray-800'>
              <FiMail className='text-blue-600 text-2xl' />
              <span className='break-all font-semibold'>bansalyashi163@gmail.com</span>
            </div>

            <div className='flex items-center gap-4 text-gray-800'>
              <BiPhone className='text-blue-600 text-2xl' />
              <span className='font-semibold'>+91 8604205838</span>
            </div>

            <div className='flex gap-6 pt-4'>
              <a href="https://github.com/Yashi027" className='p-3 bg-blue-900 text-lime-400 rounded-full hover:bg-lime-400 hover:text-blue-900 transition duration-300'>
                <FaGithub className='h-6 w-6' />
              </a>
              <a href="https://www.linkedin.com/in/yashi-bansal-66aa09332" className='p-3 bg-blue-900 text-lime-400 rounded-full hover:bg-lime-400 hover:text-blue-900 transition duration-300'>
                <FaLinkedin className='h-6 w-6' />
              </a>
            </div>
          </div>

          <form className='space-y-5'>
            <div>
              <label className='block text-gray-700 mb-2 font-medium'>Full Name</label>
              <input type="text"
                placeholder='Enter Your Name'
                className='w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 focus:outline-none focus:ring-2 ' />
            </div>

            <div>
              <label className='block text-gray-700 mb-2 font-medium'>Email</label>
              <input type="email"
                placeholder='Enter Your Email'
                className='w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 focus:outline-none focus:ring-2 ' />
            </div>

            <div>
              <label className='block text-gray-700 mb-2 font-medium'>Message</label>
              <textarea
                rows='4'
                placeholder='Write your message..'
                className='w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 focus:outline-none focus:ring-2 ' />
            </div>

            <button type='submit'
              className='w-full py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl font-semibold text-white shadow-lg'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact