import React from 'react'
import TaskApp from '../assets/taskApp.png'
import SisfoSchool from '../assets/sisfoSchool.png'
import whatsappBot from '../assets/whatsappBot.png'
import SimRs from '../assets/simrs.png'
import QuranPlayer from '../assets/quranPlayer.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full md:h-screen bg-slate-100 dark:bg-slate-900 dark:text-gray-300 text-green-800 '>
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 dark:border-green-600 border-green-800'>Portfolio</p>
                <p className='py-6'>Here are some of the projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>                
                <div style={{backgroundImage:`url(${TaskApp})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                    <div className='opacity-0 group-hover:opacity-100 p-5'>
                        <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                            Task App
                        </p>
                        <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                            Task app is a note management app built with React Js and Talwind css technology
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="https://tasks-todosapp.netlify.app" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Demo</button>
                            </a>
                            <a href="https://github.com/sandestareza/task-app" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${SisfoSchool})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                    <div className='opacity-0 group-hover:opacity-100 p-5'>
                        <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                            Sisfo School
                        </p>
                        <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                            Responsive website landing page as an effective promotional medium and attracts the attention of clients
                        </p>                    
                        <div className='pt-8 text-center'>
                            <a href="https://sisfoschool.loko.co.id">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${whatsappBot})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                    <div className='opacity-0 group-hover:opacity-100 p-5'>
                        <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                           Whatsapp Bot
                        </p>
                        <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                            Whatsapp bot is a chat bot that has been integrated with ChatGPT built using Node Js technology
                        </p> 
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/sandestareza/whatsapp-bot">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${SimRs})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                    <div className='opacity-0 group-hover:opacity-100 p-5'>
                     <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                            SIM RS
                        </p>
                        <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                            Responsive website landing page as an effective promotional medium and attracts the attention of clients
                        </p> 
                        <div className='pt-8 text-center'>
                            <a href="https://simrsloko.loko.co.id">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${QuranPlayer})`}} className='shadow-lg dark:shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div z-auto'>                    
                    <div className='opacity-0 group-hover:opacity-100 p-5'>
                        <p className='text-2xl text-center font-bold dark:text-slate-100 text-green-600 tracking-wider'>
                           Quran Player
                        </p>
                        <p className='text-sm text-center tracking-wider dark:text-gray-200'>
                            Quran player is an audio media player application built using Next Js technology
                        </p> 
                        <div className='pt-8 text-center'>
                            <a href="https://quranplayer-media.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Demo</button>
                            </a>
                            <a href="https://github.com/sandestareza/Quran-Player" target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-green-800 hover:text-slate-100'>Github</button>
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