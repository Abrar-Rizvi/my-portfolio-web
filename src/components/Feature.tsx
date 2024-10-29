import {cards} from '@/Varauble'
import Link from 'next/link'
import Image from 'next/image'

const Feature = () => {
  return (
    <div id="featured-container "  className='bg-black p-10 mt-10' >
    <h2 className='text-center text-white text-3xl font-bold mt-[50px] uppercase'>creative Projects</h2>
    <div id="cards" className='mt-[50px] flex justify-start flex-wrap'>
     
        {cards.map((card, idx) => {
          return <div key={idx} className="card-of-image-description w-[30%] shadow-lg mx-auto ">
            <Link id="link" href={card.href}>
            <Image id="img" src={card.image} width={200} height={200} alt="card image" 
            className='w-full h-full'
            />
            </Link>

          </div>
        }) }
   
    </div>
  </div>
  )
}

export default Feature