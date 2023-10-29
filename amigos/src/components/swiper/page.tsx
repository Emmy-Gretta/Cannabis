import React from 'react';
import Image from 'next/image';

const Swiper = () => {
  return (
    <>
    <section className='bg-[#EEE] m-10 p-10 rounded-[20px] mb-24'>
      <h1 className='text-[25px] font-[700] text-main-color'>Some Awesome</h1>
      <h1 className='text-[25px] font-[700]'>View Highlights</h1>
      <section className='flex gap-10'>
      <section className='bg-[#FFF] w-[550px] h-[240px] flex flex-col items-center justify-center gap-5 p-10 pt-15 rounded-[20px] mt-5'>
        <p className='mt-10 text-main-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta rem enim eum et ab incidunt voluptatum sequi labore ad itaque deserunt explicabo ut dolor tenetur nesciunt odio nemo est.</p>
        <div className='gap-5 flex flex-col items-center justify-center mb-10'>
          <Image src="/assets/AccDoe.svg" alt='John Doe' width={30} height={30} />
          <p>John Doe</p>
        </div>
      </section>
      <section className='bg-[#FFF] w-[550px] h-[240px] flex flex-col items-center justify-center gap-5 p-10 pt-15 rounded-[20px] mt-5'>
        <p className='mt-10 text-main-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dicta rem enim eum et ab incidunt voluptatum sequi labore ad itaque deserunt explicabo ut dolor tenetur nesciunt odio nemo est.</p>
        <div className='gap-5 flex flex-col items-center justify-center mb-10'>
          <Image src="/assets/AccDoe.svg" alt='John Doe' width={30} height={30} />
          <p>John Doe</p>
        </div>
      </section>
      </section>
    </section>
    </>
   );
}

export default Swiper;