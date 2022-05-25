import React from 'react'

const About = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div>                    
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore.</p>
                </div>
                <div>
                    <p>Innovative and proactive UI designer capable of developing elegant website and app designs for demanding clients, according to my abilities. I like learning new things and working as a team.</p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About