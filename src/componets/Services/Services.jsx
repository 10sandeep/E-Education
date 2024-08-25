import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { MdLaptop } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import {motion} from "framer-motion";

const ServicesData =[
    {
      id:1,
      title:"Machine Learning",
      link:"#",
      icon:<FaComputer />,
      delay:0.2,  
    },
    {
        id:2,
        title:"Web Development",
        link:"#",
        icon:<MdLaptop />,
        delay:0.3,  
      },
      {
        id:3,
        title:"Mobile Development",
        link:"#",
        icon:<CiMobile3 />,
        delay:0.4,  
      },
      {
        id:4,
        title:"Software Development",
        link:"#",
        icon:<LiaLaptopCodeSolid />,
        delay:0.5,  
      },
      {
        id:5,
        title:"Cyber Security",
        link:"#",
        icon:<FaHouseLaptop />,
        delay:0.6,  
      },
      {
        id:6,
        title:"Data Science",
        link:"#",
        icon:<FaLaptopCode />,
        delay:0.7,  
      },
];

const SlideLeft = (delay) =>{
    return{
        initial:{
            opacity:0,
            x:50
        },
        animate:{
            opacity:1,
        transition: {
            duration:0.5,
            delay:delay,
           ease:"easeInOut",
        },
    },
};
};

const Services = () => {
  return (
    <section className='bg-slate-950'>
        <div className='container pb-14 pt-12'>
            <h1 className='text-4xl font-bold text-center pb-10  '> <span className='text-sky-600'>Services</span> We Provide</h1>

            <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-10 pr-20 pt-10'>
                {
                    ServicesData.map((service)=>(
                        <motion.div
                        variants={SlideLeft(service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                         className='bg-slate-700 rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:scale-110  hover:bg-dark hover:shadow-[0_0_15px_3px_rgba(225,225,225,1)]  duration-300 cursor-pointer '>
                          <div className='text-4xl mb-4'>
                            {service.icon}
                          </div>  
                           <h1 className='text-lg font-semibold text-center px-3'>{service.title}</h1>
                        </motion.div>
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Services