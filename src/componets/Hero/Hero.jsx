import React from 'react'
import Navbar from '../Navbar/Navbar';
import { IoIosArrowRoundDown, IoIosArrowRoundForward, IoIosArrowRoundUp } from 'react-icons/io';
import HeroPng from "../../Assets/Hero.png";
import {animate, motion} from "framer-motion";

export const FadeUp = (delay) => {
    return {
        initial:{
            opacity:0,
            y:50,

        }
        ,
        animate:{
            opacity:1,
        y:0,
        transition: {
            type:"spring",
            stiffness:100,
            duration:0.5,
            delay:delay,
            ease:"easeInOut",
        },
    }
    }
}

const Hero = () => {
  return (
  <section className='bg-slate-800 overflow-hidden relative'>

<div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
    {/* Brand Info */}

    <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>

    <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
    <motion.h1
    variants={FadeUp(0.6)}
    initial="initial"
    animate="animate"
     className='text-3xl lg:text-5xl font-bold !leading-snug'>Let's create stunning a{" "}<span className='text-sky-500'>websites </span> through hands-on learning.</motion.h1>
      <motion.div 
      variants={FadeUp(0.8)}
      initial="initial"
      animate="animate"
      className='flex py-5 justify-center md:justify-start' >
      <button className='primary-btn  flex items-center gap-2 group'>
      Let's Start
      <IoIosArrowRoundDown className='text-xl group-hover:translate-x-2 group-hover:-rotate-90 duration-300'/>
      </button>
        </motion.div>
    </div>
   
    </div>
     {/* Hero Image */}
     <div className='flex justify-center items-center'>
        <motion.img
        initial={{x:50,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
         src={HeroPng} alt="Hero img" className='w-[400px] xl:w-[600px] relative z-10 drop-shadow animate-up-down'/>
     </div>
</div>
  </section>
  ); 
  
};

export default Hero