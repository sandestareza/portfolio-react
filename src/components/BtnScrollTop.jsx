import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa' 
import { animateScroll as scroll } from "react-scroll";

const BtnScrollTop = () => {

    const onTop = () =>  scroll.scrollToTop()    

    return (
        <div className='flex fixed flex-col right-5 bottom-5'>
            <button onClick={onTop} className='rounded-full p-3 bg-green-800 text-2xl text-white font-bold'><FaArrowAltCircleUp/></button>
        </div>
    )
}

export default BtnScrollTop