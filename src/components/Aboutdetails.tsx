import Image from "next/image"

const Aboutdetails = () => {
  return (
    
   <>
  
    <div className=" bg-black py-44 px-6 lg:px-16 flex flex-col-reverse justify-center
    lg:flex lg:flex-row lg:justify-center items-center  ">
        
        <div className="text text-white mt-6 lg:px-2 lg:w-[70%] lg:h-[70%]  ">
            <p className="text-center  text-3xl leading-relaxed">
            I craft immersive digital experiences as a seasoned Front-End Developer, fluent in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Node.js, React.js, and Next.js. I transform ideas into dynamic, user-friendly interfaces.
            </p>
        </div>
        
        <div className="image bg-slate-500 mt-10 lg:w-[30%] lg:h-[30%]">
            <Image src="/abrar blue cot.jpeg" width={200} height={200}  alt="Image-person" 
            className="w-full h-auto object-cover object-center rounded "
            />
        </div>
        {/* <h2 className=" text-white text-2xl font-bold 
        sm:text-blue-500 md:text-red-600 lg:text-yellow-300 xl:text-[crimson]">About Me</h2> */}

    </div>
   
   </>
  )
}

export default Aboutdetails