import React from 'react'
import BannerPng from "../../Assets/Banner.png";
import {GrUserExpert} from "react-icons/gr";
import {MdOutlineAccessTime} from "react-icons/md";
import {FaBookReader} from "react-icons/fa";
import {FadeUp} from "../Hero/Hero"
import {motion} from "framer-motion"

const Banner = () => {
  return (
    <section>
     
    <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>

    {/* Banner Image */}
    <div className='flex justify-center  items-center'>
        <motion.img
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        viewport={{onece:true}}
        transition={{duration:0.5,ease:"easeInOut"}}
         src={BannerPng} alt='Banner img ' className='w-[350px] md:w-[450px] object-cover mt-40 drop-shadow animate-up-down'/>
    </div>

{/* Banner Text */}
<div className='flex flex-col  justify-center'>
 
  <div className='text-center md:text-left  space-y-12'>
  <motion.h1
  initial={{opacity:0,scale:0.5}}
  whileInView={{opacity:1,scale:1}}
  viewport={{once:true}}
  transition={{duration:0.5}}
   className='p-9 flex text-center text-3xl md:text-4xl font-bold !leading-snug'>India's Leading Online Learning Platform</motion.h1>

  </div>
  <div className='flex flex-col gap-6'>
    <motion.div
    variants={FadeUp(0.2)}
    initial="initial"
    whileInView={"animate"}
    viewport={{once:true}}
     className='flex items-center gap-4 p-6 bg-slate-400 rounded-2xl hover:bg-dark duration-300 hover:shadow-[0_0_15px_3px_rgba(225,225,225,1)] cursor-pointer '>
      <FaBookReader className='text-2xl'/>
      <p className='text-lg'>10,000+ Courses</p>
    </motion.div>
    <motion.div
    variants={FadeUp(0.4)}
    initial="initial"
    whileInView={"animate"}
    viewport={{once:true}}
     className='flex items-center gap-4 p-6 bg-slate-400 rounded-2xl hover:bg-dark duration-300 hover:shadow-[0_0_15px_3px_rgba(225,225,225,1)] cursor-pointer '>
      <GrUserExpert className='text-2xl'/>
      <p className='text-lg'>Expert Teachers</p>
    </motion.div>
    <motion.div
    variants={FadeUp(0.6)}
    initial="initial"
    whileInView={"animate"}
    viewport={{once:true}}
     className='flex items-center gap-4 p-6 bg-slate-400 rounded-2xl hover:bg-dark duration-300 hover:shadow-[0_0_15px_3px_rgba(225,225,225,1)] cursor-pointer '>
      <MdOutlineAccessTime className='text-2xl'/>
      <p className='text-lg'>Lifetime Access</p>
    </motion.div>
  
  </div>
</div>
    </div>
</section>
  )
}

export default Banner