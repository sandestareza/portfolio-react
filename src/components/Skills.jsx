import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import Reactjs from '../assets/reactjs.png'
import Nextjs from '../assets/nextjs.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-slate-900 text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
                <p className='py-4'>These are the Thechnologies I've worked with</p>
            </div>
            {/* Icon */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Reactjs Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="Reactjs Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-28 mx-auto' src={JS} alt="Reactjs Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactjs} alt="Reactjs Icon" />
                    <p className='my-4'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Nextjs} alt="Reactjs Icon" />
                    <p className='my-4'>Next JS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills