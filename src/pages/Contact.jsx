import React from 'react'
import { FaEnvelope } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='min-h-screen px-6 py-16'>
      <div className='text-center mb-16'>
        <div className='flex justify-center text-5xl text-blue-950 font-bold gap-1'>
          <FaEnvelope className=' text-6xl mb-4'/>
          <h1 className='mb-4'>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact