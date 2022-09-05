import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from "react-scroll";
import BtnScrollTop from './BtnScrollTop';
import BtnSocialMedia from './BtnSocialMedia'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const clickHamburger = () => setNav(!nav)


  useEffect(() => {
      
    window.addEventListener('scroll', function(){
      if(window.scrollY > 400) setIsShow(true)
      else setIsShow(false)
    })


  }, [])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-slate-300 bg-slate-900 shadow-md'>
        <div className='w-14 h-14 border-2 bottom-3 rounded-full border-green-500 p-3 font-bold text-xl'>
           SR
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
          <li><LinkScroll to='home' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Home</LinkScroll></li>
          <li><LinkScroll to='about' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >About</LinkScroll></li>
          <li><LinkScroll to='skills' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Skills</LinkScroll></li>
          <li><LinkScroll to='portfolio' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Portfolio</LinkScroll></li>
          <li><LinkScroll to='contact' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Contact</LinkScroll></li>
        </ul>

        {/* Hambuger */}
        <div onClick={clickHamburger} className='md:hidden z-10 cursor-pointer'>
          { !nav ? <FaBars /> : <FaTimes />}          
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 opacity-95 flex flex-col justify-center items-center'}>
          <li className='py-6 text-3xl'><LinkScroll to='home' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Home</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='about' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >About</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='skills' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Skills</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='portfolio' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Portfolio</LinkScroll></li>
          <li className='py-6 text-3xl'><LinkScroll to='contact' activeClass='text-green-400 font-bold' spy={true} smooth={true} className={'hover:text-green-400 hover:font-bold '} >Contact</LinkScroll></li>
        </ul>

        {/* Social Media */}
        <BtnSocialMedia/>
        {
            isShow &&
            <BtnScrollTop/>
        }
    </div>
  )
}

export default Navbar