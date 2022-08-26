import React from 'react'
import { HiArrowNarrowUp } from "react-icons/hi";

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-slate-300'>Sandesta Reza</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-slate-500'>I'm Frontend Developer</h2>
          <p className='text-slate-500 py-4 max-w-[700px]'>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md'>Hire me <HiArrowNarrowUp className='ml-3'/></button>
          </div>
        </div>
    </div>
  )
}

export default Home