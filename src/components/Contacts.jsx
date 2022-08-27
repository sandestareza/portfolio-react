import React from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'

const Contacts = () => {
  return (
    <div id='contact' className='w-full h-screen bg-slate-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>
                        Contact
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='flex justify-evenly md:justify-around'>
                    <div className='flex flex-col items-center py-5'>
                        <div className='w-20 h-20 bg-green-500 mb-3 p-4 rounded-full'><MdOutlineMailOutline className='text-5xl'/></div>
                        <a href='mailto:sandesta24@gmail.com?subject=Requreitment' className='text-sm font-sans cursor-pointer hover:underline'>sandesta24@gmail.com</a>
                    </div>
                    <div className='flex flex-col items-center py-5'>
                        <div className='w-20 h-20 bg-green-500 mb-3 p-5 rounded-full'><BsTelephoneFill className='text-4xl'/></div>
                        <a href='https://wa.link/9ujjhc' className='text-sm font-sans cursor-pointer hover:underline'>Contact me</a>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-left'>My Address</p>                  
                    <p className='font-light font-sans text-center md:text-left'>Jl. Palembang-Sp.Padang KM.19 Desa Sako Kec. Rambutan, Banyuasin, Sumatera Selatan</p>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts