import Footeristpart from'@/components/Footer-ist-part'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <Footeristpart />
     
        <div className="secondPart h-[300px] flex justify-center space-x-16 items-center text-[20px] border-b-2 border-gray-600 w-[80%] mx-auto">
            <div className="worketc  flex flex-col justify-center items-start">
               <p className='text-2xl font-semibold text-[#6b7280]'> Pages</p>
               <Link 
               className='border-b-2 border-[#000] font-bold  hover:text-blue-500 ' href="/">Portfolio.</Link>
               <Link
                className='border-b-2 border-[#000] font-bold  hover:text-blue-500'  href="about">About Us</Link>
               <Link
                className='border-b-2 border-[#000] font-bold hover:text-blue-500 '  href="contact">Get in Touch</Link>
            </div>
            <div className="socialChannels flex flex-col justify-center items-start ">
                <p className='text-2xl font-semibold text-[#6b7280]'>Find Me At</p>
                <Link
                   className='border-b-2 border-[#000] font-bold  hover:text-blue-500'   href="https://www.linkedin.com/in/abrar-rizvi/">LinkedIn</Link>
               <Link
                  className='border-b-2 border-[#000] font-bold  hover:text-blue-500'   href="about">Facebook</Link>
               <Link 
                  className='border-b-2 border-[#000] font-bold  hover:text-blue-500'  href="https://github.com/Abrar-Rizvi?tab=repositories">GitHub</Link>

            </div>
        </div>
        <p className='text-center text-xl md:text-2xl pb-6'> @M.ABRAR RIZVI ALL RIGHTS RESERVED</p>
          
        </div>
       
  
  )
}

export default Footer