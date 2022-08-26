import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const clickHamburger = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-slate-300 bg-slate-900 shadow-md'>
        <div className='w-14 h-14 border-2 bottom-3 rounded-full border-pink-500 p-3 font-bold text-xl'>
           SR
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
          <li><a href='#home' className='hover:text-blue-400 hover:font-bold'>Home</a></li>
          <li><a href='#about' className='hover:text-blue-400 hover:font-bold'>About</a></li>
          <li><a href='#skills' className='hover:text-blue-400 hover:font-bold'>Skills</a></li>
          <li><a href='#portfolio' className='hover:text-blue-400 hover:font-bold'>Portfolio</a></li>
          <li><a href='#contact' className='hover:text-blue-400 hover:font-bold'>Contact</a></li>
        </ul>

        {/* Hambuger */}
        <div onClick={clickHamburger} className='md:hidden z-10 cursor-pointer'>
          { !nav ? <FaBars /> : <FaTimes />}          
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
          <li><a href='#home' className='py-6 text-3xl hover:text-blue-400 hover:font-bold'>Home</a></li>
          <li><a href='#about' className='py-6 text-3xl hover:text-blue-400 hover:font-bold'>About</a></li>
          <li><a href='#skills' className='py-6 text-3xl hover:text-blue-400 hover:font-bold'>Skills</a></li>
          <li><a href='#portfolio' className='py-6 text-3xl hover:text-blue-400 hover:font-bold'>Portfolio</a></li>
          <li><a href='#contact' className='py-6 text-3xl hover:text-blue-400 hover:font-bold'>Contact</a></li>
        </ul>

        {/* Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/sandesta-reza-456546203/">
                  Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/sandestareza">
                  Github <FaGithub size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar