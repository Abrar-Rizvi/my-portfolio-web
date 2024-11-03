import {cards} from '@/Varauble'
import Link from 'next/link'
import Image from 'next/image'

const Feature = () => {
  return (
    <div id="featured-container "  className='bg-[#3D5300] p-10 mt-10' >
    <h2 className='text-center text-white text-3xl font-bold mt-[50px] uppercase
    
    '>creative Projects</h2>
    <div id="cards" className=' mt-[50px] flex flex-col space-y-10 animate-appear '>
     
        {cards.map((card, idx) => {
          return <div key={idx} className="card-of-image-description group w-full lg:w-[60%] xl:w-[80%] space-y-10  shadow-lg mx-auto hover:scale-110 transition-all  ease-in-out duration-700 animate-appear ">
            <Link id="link" href={card.href}>
            <Image id="img" src={card.image} width={200} height={200} alt="card image" 
            className='w-full h-full'
            />
            </Link>
            <h1 className='text-white border-b  text-center text-xl mt-2 font-medium group-hover:text-yellow-400
            transition-all duration-300
            ' >{card.hone}</h1>

          </div>
        }) }
   
    </div>
  </div>
  )
}

export default Feature