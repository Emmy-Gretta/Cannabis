import Image from 'next/image';
const Perks = () => {
    return (
        <>
        <section className='flex flex-col mb-16'>
        <p className=" font-bold text-[25px] ml-16">Top <span  className="text-[#F47820]">Perks  </span>for you </p>
        <div className="flex justify-center items-center gap-[6rem] self-center rounded-xl mt-4 mb-4 mx-9 ">
            <Image src="/assets/prod2.png" width={200} height={200} alt='product1' className=' drop-shadow-lg'/>
            <Image src="/assets/mushroom.png" width={250} height={200} alt='product1' className=' drop-shadow-lg'/>
            <Image src="/assets/capsules.png" width={250} height={200} alt='product1' className=' drop-shadow-lg'/>
        </div>

            <div className=' idk bg-black mx-[3rem]  text-white  h-60 p-4 rounded-2xl  leading-5 flex  justify-between mt-24'>
                <div className=' pl-10 '>
            <p className='font-bold text-2xl mb-7'>Lorem <span className=' text-main-color  '>ipsum dolor</span> <br/>sit amet consectetur </p>
            <p className='text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore.</p>
            <button className=' bg-[#006838] p-2 rounded-md mt-5'>ipsum dolos</button>
            </div>
            <Image src="/assets/dames.png" width={200} height={200} alt='dames' className='rounded-2xl'/>
            </div>
        </section>
        </>
     );
}

export default Perks;