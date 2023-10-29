import Link from 'next/link'
const Subscribe = () => {
    return (
        <>
        <section className="flex justify-center my-10">
        <div className="w-3/4 bg-white flex  justify-around rounded-lg items-center h-24">
            <div>
            <p className="font-[700] text-[25px]">Subscribing to our newsletter</p>
            <p className=" text-main-color font-light text-[12px]">Get weekly insights on a new product and offers available</p>
            </div>
            <div className="relative text-white">
            <input type="text" placeholder="Your email address" className="border border-main-color h-10 w-72  p-2 rounded-md"/>
            <button className=" bg-[#006838] p-2 rounded-md absolute right-1 top-1 font-bold text-xs" ><Link href="/subscribe">Subscribe</Link></button>
            </div>



     </div>
     </section>
     </>
     );
}

export default Subscribe;