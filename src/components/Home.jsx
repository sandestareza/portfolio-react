import React, { useState, useEffect } from 'react'
import { HiArrowNarrowUp } from "react-icons/hi";

const Home = () => {

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  
  
  useEffect(() => {
    
    let fullText = "I'm Frontend Developer"

    const typeWrite =  () => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 40)
        }
    }

    typeWrite()

  }, [index])

  return (
    <div id='home' className='w-full h-screen bg-slate-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-green-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-slate-300'>Sandesta Reza</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-slate-500'>{text}</h2>
          <p className='text-slate-500 py-4 max-w-[700px]'>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 rounded-md'>Hire me <HiArrowNarrowUp className='ml-3'/></button>
          </div>
        </div>
    </div>
  )
}

export default Home