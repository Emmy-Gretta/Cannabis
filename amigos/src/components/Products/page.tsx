import Image from "next/image";

const Products = () => {
   return ( 
      <section className="grid grid-cols-3 mt-20 gap-10 mx-16 md:text-[15px]">
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 product-shadow ">
            <Image src="/Shop/SideKick.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-x-[21px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 product-shadow">
            <Image src="/Shop/Brain.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 product-shadow">
            <Image src="/Shop/Cubcs.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 mt-24 product-shadow">
            <Image src="/Shop/Void.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 mt-24 product-shadow">
            <Image src="/Shop/Shafaa.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
         <section className="flex items-center justify-center flex-col rounded-[21px] product-back mb-5 mt-24 product-shadow">
            <Image src="/Shop/Brighten.svg" alt="SideKick" width={250} height={40} />
            <div className="flex gap-10 items-center justify-center bg-[#EEE] p-[7px] rounded-b-[20px]">
               <div className="pl-[5px] font-[400]">
                 <p>Visionary Brew Magic</p>
                 <p>Mushroom Tea</p>
               </div>
               <div className="flex items-center justify-center">
                  <h1 className="font-[600] text-[40px] mr-5">$25</h1>
               </div>
            </div>
         </section>
      </section>
    );
}
 
export default Products;   