import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-slate-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>
                        About
                    </p>
                </div>
                <div>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Education</p>
                </div>
                <div>
                    <p className='font-sans'>Sistem Informasi (S1) - 2020</p>                    
                    <p className='font-bold text-xl'>Indo Global Mandiri University</p>                    
                    <p className='font-sans text-sm font-light'>Grade 3.38</p>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Experience</p>
                </div>
                <div>
                    <p className='font-sans'>Web Developer, 2021 - 2022</p>                    
                    <p className='font-bold text-xl'>PT. Loko Sistem Terintegrasi</p>                    
                    <p className='font-sans text-sm font-light'>Develop and maintain features, Create reusable code and Guarantee the technical feasibility of the UI/UX design</p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About