
// import {motion} from 'framer-motion'
// import { Scale } from 'lucide-react';
type btnT = {
    text: string;
    className?: string
}

const Button = (props: btnT) => {
 
  return (
 
    <button 
   
    className={`font-extrabold w-full border border-gray-600 rounded px-5 py-2 bg-red-600 hover:text-blue-600 text-white cursor-pointer ${props.className}`}>{props.text} </button>
 
  )
}

export default Button