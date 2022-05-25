import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const clickHamburger = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-slate-300 bg-slate-900'>
        <div>
            <img src={Logo} alt='logo' className='w-8'/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>

        {/* Hambuger */}
        <div onClick={clickHamburger} className='md:hidden z-10'>
          { !nav ? <FaBars /> : <FaTimes />}          
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
          <li className='py-6 text-3xl'>Home</li>
          <li className='py-6 text-3xl'>About</li>
          <li className='py-6 text-3xl'>Skills</li>
          <li className='py-6 text-3xl'>Portfolio</li>
          <li className='py-6 text-3xl'>Contact</li>
        </ul>

        {/* Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
              <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  Github <FaGithub size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar