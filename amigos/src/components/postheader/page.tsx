import Image from 'next/image';
import Link from 'next/link'
const Postheader = () => {
    return (
        <>
        <section className=" home-body">
            <div className='hero flex flex-col justify-center items-center w-full '>
                <div className='w-full flex justify-around'>
                <div className="bg-white   w-[340px] mt-24 card  ml-10 text-white  flex h-40  relative top-[230px]">
    <div className=' bg-white h-fit w-20  flex justify-center items-center -rotate-45 p-2 rounded-md absolute top-10 -left-3  '>
    <Image src="/assets/Discount-2.png" alt='discount' width={40} height={40} className='' />
    </div>
    <div className='ml-20 p-2 '>
    <p className='font-bold mt-2 text-xl'>Get 20% off <br/>Your 1st order</p>
    <p className='mt-2'>You get over <span className='font-bold'>$99</span></p>
   <p className='mt-4'>Coupon code <span className=' bg-main-color rounded-md  text-[15px] p-1'>FIRST20</span></p>
   </div>
   </div>

   <div className='flex flex-col mb-[-3rem] justify-end self-bottom'>
    <div className='flex justify-center'>
        <div className='bg-white w-[320px] rounded-2xl leading-8  flex justify-center relative '>
        <Image src="/assets/Delivery Van.png " alt='van' width={20} height={20} className='w-20 h-20 absolute top-4 -left-6' />

            <div className="p-2">
            <p className='font-bold text-xl'>Free Express <br/> Shipping </p>
            <p className='text-[20px]'>Orders above <span className='font-bold'>$5</span></p>
            <p className='text-[15px] font-bold'>Discreet , undetectable</p>
            </div>
        </div>
    </div>
   </div>

   <div className='rec relative mt-48 '>
    <p className=' font-semibold'>“Psychedelics prove to you that there’s more than one way of seeing the world”</p>
     <button className=' bg-main-color absolute top-44 -left-8 rounded-md p-1'><Link href="/shop">Shop Now</Link></button>
    </div>
                </div>

                <div className='w-full px-24 mt-52'>
                <p className='text-white font-bold flex justify-center text-[25px]'>Top Categories</p>
        <div className=" carousel flex justify-around ">
        <div className='flex justify-center items-center flex-col gap-y-[10px] w-[25%] bg-[#FFDAC0]'>
         <Image src="/assets/prod4.png" alt='prod1' width={120} height={80} className=' '/>
         <p>Dried Magic Mushrooms</p>
        </div>
        <div className='flex justify-center items-center flex-col  gap-[10px] bg-[#FFDAC0]'>
            <Image src="/assets/prod2.png" alt='prod1' width={120} height={80} className=''/>
            <p>Shrom Edibles</p>
        </div>
        <div className='flex justify-center items-center flex-col  gap-[10px] bg-[#FFDAC0]'>
            <Image src="/assets/prod3.png" alt='prod1' width={120} height={80} className=''/>
            <p>Magic Mushrooms Tea</p>
        </div>
        <div className='flex justify-center items-center flex-col  gap-[10px] bg-[#FFDAC0]'>
            <Image src="/assets/tablets.png" alt='prod1' width={120} height={80} className=' '/>
            <p>Microdosing Capsules</p>
        </div>
       </div>
                </div>
            </div>
            <p className='absolute top-28 left-20 font-bold text-[30px]'> Canada's<br/><span className='ml-4'>Best Spot</span><br/> to Buy <span className=' text-main-color'>Shrooms</span> Online</p>
        </section>
    </>
     );
}

export default Postheader;
