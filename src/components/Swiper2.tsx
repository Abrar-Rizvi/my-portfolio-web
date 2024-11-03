"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar'
            
        }}
       
          
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full  md:w-[70%] mx-auto bg-[#F09319] text-white  rounded-[20px] mt-10"
      >
        <SwiperSlide className='w-[70%] h-[300px] '>
       <div className='flex flex-col justify-center items-center p-10 '>
       <Image src="/abrar blue cot.jpeg" alt="Slide 1" width={800} height={600} className='w-[150px] h-[150px] rounded-full  border-white border-[10px]' />
        <p className=' text-center mt-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat assumenda obcaecati accusantium iure ipsa consequuntur deserunt tenetur, ipsum nostrum odit reiciendis id esse unde quaerat quibusdam beatae, voluptates doloremque?
        Alias eligendi </p>
        <h3 className=' text-center text-2xl font-bold mt-5'>Abrar Rizvi  | USA</h3>
       
       </div>
        </SwiperSlide>
        
        <SwiperSlide className='w-[70%] h-[300px] '>
       <div className='flex flex-col justify-center items-center p-10'>
       <Image src="/abrar blue cot.jpeg" alt="Slide 1" width={800} height={600} className='w-[150px] h-[150px] rounded-full  border-white border-[10px]' />
        <p className='text-white text-center mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat assumenda obcaecati accusantium iure ipsa consequuntur deserunt tenetur, ipsum nostrum odit reiciendis id esse unde quaerat quibusdam beatae, voluptates doloremque?
        Alias eligendi </p>
        <h3 className='text-white text-center text-2xl font-bold mt-5'>Abrar Rizvi  | USA</h3>
       </div>
        </SwiperSlide>

        <SwiperSlide className='w-[70%] h-[300px] '>
       <div className='flex flex-col justify-center items-center p-10'>
       <Image src="/abrar blue cot.jpeg" alt="Slide 1" width={800} height={600} className='w-[150px] h-[150px] rounded-full  border-white border-[10px]' />
        <p className='text-white text-center mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat assumenda obcaecati accusantium iure ipsa consequuntur deserunt tenetur, ipsum nostrum odit reiciendis id esse unde quaerat quibusdam beatae, voluptates doloremque?
        Alias eligendi </p>
        <h3 className='text-white text-center text-2xl font-bold mt-5'>Abrar Rizvi | USA</h3>
       </div>
        </SwiperSlide>

        <SwiperSlide className='w-[70%] h-[300px] '>
       <div className='flex flex-col justify-center items-center p-10'>
       <Image src="/abrar blue cot.jpeg" alt="Slide 1" width={800} height={600} className='w-[150px] h-[150px] rounded-full  border-white border-[10px]' />
        <p className='text-white text-center mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat assumenda obcaecati accusantium iure ipsa consequuntur deserunt tenetur, ipsum nostrum odit reiciendis id esse unde quaerat quibusdam beatae, voluptates doloremque?
        Alias eligendi </p>
        <h3 className='text-white text-center text-2xl font-bold mt-5'>Abrar Rizvi  | USA</h3>
       </div>
        </SwiperSlide>

         <SwiperSlide className='w-[70%] h-[300px] '>
       <div className='flex flex-col justify-center items-center p-10'>
       <Image src="/abrar blue cot.jpeg" alt="Slide 1" width={800} height={600} className='w-[150px] h-[150px] rounded-full  border-white border-[10px]' />
        <p className='text-white text-center mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat assumenda obcaecati accusantium iure ipsa consequuntur deserunt tenetur, ipsum nostrum odit reiciendis id esse unde quaerat quibusdam beatae, voluptates doloremque?
        Alias eligendi </p>
        <h3 className='text-white text-center text-2xl font-bold mt-5'>Abrar Rizvi  | USA</h3>
       </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
