import React from 'react';
import { FaArrowUp } from 'react-icons/fa' 
import { animateScroll as scroll } from "react-scroll";

const BtnScrollTop = () => {

    const onTop = () =>  scroll.scrollToTop()    

    return (
        <div className='flex fixed flex-col right-5 bottom-5'>
            <button onClick={onTop} className='rounded-full p-3 bg-green-800 text-md text-white font-bold transition-all hover:-translate-y-2'><FaArrowUp/></button>
        </div>
    )
}

export default BtnScrollTop