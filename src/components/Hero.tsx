"use client"
import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <div className="min-h-screen w-full bg-[#3D5300] sm:py-40 py-28 text-center px-2  ">
        {/* h1 text */}
        <motion.h1 
         initial={{y:-30,
          opacity:0
        }}
        animate={{y:0,
          opacity:1,
         
        }}
        transition={{
          duration:2,
          delay:1
        }}
        className=" pt-12 text-[4vh] sm:text-[10vh] md:text-6xl lg:text-8xl font-black text-center text-blue-500
       
        ">
          <span className="text-white mr-2 ">Front-End</span>
          Developer
        </motion.h1>
        {/* paragraph */}
        <div className="my-6 sm:my-8 mx-auto px-2  ">
          <motion.p className="text-white  text-2xl  leading-relaxed"
          initial={{y:220, opacity: 0}}
          animate={{y:0, opacity:1}}
          transition={{delay:2, type: "spring", stiffness:120}}
          >
            Front-end developers turn static designs into engaging digital experiences, mastering HTML, CSS, and JavaScript to create responsive, interactive interfaces. Their expertise ensures that websites not only look stunning but also perform seamlessly across all devices.
          </motion.p>
        </div>
        <div className="flex justify-center my-12">
          <input
            type="text"
            className="w-72  px-4 bg-transparent mt-6 outline-none shadow-none border border-white"
            placeholder="Email address"
          />
          <button
            className="w-56 h-14 bg-[#c5b224] text-white rounded-md mt-6 ml-2 text-2xl relative"
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center mt-11">
          <p className="text-white text-xl font-bold uppercase mr-2">scroll</p>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      )
}

export default Hero