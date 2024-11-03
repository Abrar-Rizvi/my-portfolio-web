"use client"
import React from 'react'
import Link from 'next/link'
import Button1 from "@/components/Button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {motion} from 'framer-motion'





const Navigation = () => {
  return (
    <motion.nav
    initial={{x:-250,
      opacity:0
    }}
    animate={{x:0,
      opacity:1,
     
    }}


    className="overflow-hidden  h-[150px] border-b border-white bg-[#ABBA7C]  flex justify-between  items-center p-10
    fixed  w-full z-10
    ">
    <motion.div 
   
  
    >
      <Link id="rizvi-name" href="/" className=" text-[4.5vh] sm:text-6xl  font-bold text-black no-underline">
        M.Abrar Rizvi <span id="rizvi" className="text-blue-500">.</span>
      </Link>
    </motion.div>

    <motion.div 
     initial={{y:-330,
      opacity:0
    }}
    animate={{y:0,
      opacity:1,
      rotate:360
    }}
    transition={{
     
      delay:1
    }}



    id="links" className="hidden md:w-[50%]   lg:flex lg:justify-center items-center space-x-5 text-lg">
      <Link className="anchor text-xl text-black font-extrabold no-underline hover:text-cornflowerblue" href="/">
        Portfolio.
      </Link>
      <Link className="anchor text-xl text-black font-extrabold no-underline hover:text-cornflowerblue" href="/about">
        About Us
      </Link>
      <Link className="anchor text-xl text-black font-extrabold no-underline hover:text-cornflowerblue" href="/contact">
        Get in Touch
      </Link>
     
    </motion.div>
    {/* <Button1 text="Download CV" /> */}
    
    <Sheet>
  <SheetTrigger className='text-white lg:hidden'> 
  <Menu  />
  </SheetTrigger>
  <SheetContent className=''>         
  <div id="links" className="w-full h-screen  flex flex-col justify-start items-start text-lg space-y-5 bg-black">
      <Link className="anchor w-full text-xl text-center  text-white hover:text-blue-600 font-extrabold no-underline hover:text-cornflowerblue" href="/">
        Portfolio.
      </Link>
      <Link className="anchor w-full text-xl text-white text-center hover:text-blue-600 font-extrabold no-underline hover:text-cornflowerblue" href="/about">
        About Us
      </Link>
      <Link className="anchor w-full text-xl text-white hover:text-blue-600 text-center font-extrabold no-underline hover:text-cornflowerblue" href="/contact">
        Get in Touch
      </Link>
      <Button1 text="Download CV" />
    </div>
  </SheetContent>
</Sheet>
    
  </motion.nav>
  
  )
}

export default Navigation