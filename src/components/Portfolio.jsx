import React from 'react'
import TaskApp from '../assets/taskApp.png'
import SisfoSchool from '../assets/sisfoSchool.png'
import whatsappBot from '../assets/whatsappBot.png'
import SimRs from '../assets/simrs.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full md:h-screen bg-slate-900 text-gray-300'>
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Portfolio</p>
                <p className='py-6'>Here are some of the projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>                
                <div style={{backgroundImage:`url(${TaskApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Task App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://receipts-app.netlify.app" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${SisfoSchool})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Sisfo School
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://sisfoschool.loko.co.id">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${whatsappBot})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Whatsapp Bot
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/sandestareza/whatsapp-bot">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${SimRs})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SIM RS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://todos-item.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio