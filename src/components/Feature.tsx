import {cards} from '@/Varauble'
import Link from 'next/link'
import Image from 'next/image'

const Feature = () => {
  return (
    <div id="featured-container "  className='bg-black p-10 mt-10' >
    <h2 className='text-center text-white text-3xl font-bold mt-[50px] uppercase
    sm:text-yellow-400 md:text-blue-500  lg:text-gray-600 xl:text-red-600
    '>creative Projects</h2>
    <div id="cards" className='mt-[50px] flex flex-col space-y-4 '>
     
        {cards.map((card, idx) => {
          return <div key={idx} className="card-of-image-description w-full lg:w-[60%] xl:w-[80%]  shadow-lg mx-auto   ">
            <Link id="link" href={card.href}>
            <Image id="img" src={card.image} width={200} height={200} alt="card image" 
            className='w-full h-full'
            />
            </Link>
            <h1 className='text-white border-b  text-center text-2xl mt-2 font-semibold'>{card.hone}</h1>

          </div>
        }) }
   
    </div>
  </div>
  )
}

export default Feature