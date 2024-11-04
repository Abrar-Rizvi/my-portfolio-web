
// import {motion} from 'framer-motion'
// import { Scale } from 'lucide-react';
type btnT = {
    text: string;
    className?: string
}

const Button = (props: btnT) => {
 
  return (
 <>
  <button  className={`group relative font-extrabold w-full border border-gray-600 rounded px-5 py-2 bg-[#F09319] hover:text-blue-600 text-white cursor-pointer ${props.className}`}> 
  <span className="relative z-10">{props.text} </span>
  <span className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0"></span>

  </button>

 </>
    
   
   
 
  )
}

export default Button