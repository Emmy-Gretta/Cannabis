import Image from "next/image";

const Edibles = () => {
   return ( 
      <section className="my-10 ml-[50px] ">
         <h1 className="font-semibold text-[25px]">Explore some <span className="text-main-color">Edibles</span></h1>
         <section className="my-10 flex gap-10">
            <section className="relative w-[70%] ">
               <div className="edibles-back flex flex-col gap-5 justify-center">
               <div className="ml-10 mb-5">
                    <h1 className="font-[600] text-[27px]">Tomorrows Reason Why</h1>
                    <p className="font-[500] text-[18px]">Dosing protocol</p>
                  </div>
                  <div className="ml-[140px]">
                     <button className="bg-main-color rounded-[5px] flex items-center justify-center text-[14px] h-[25px] p-5 text-white">Available to buy</button>
                  </div>
               </div>
               <div className="absolute -top-[30px] left-[500px]">
               <Image src="/Shop/Bloom.svg" alt="Edibles" width={260} height={50} />
                  </div>
            </section>
            <section className=" w-[30%] md:mr-10 md:h-[50px]">
               <Image src="/Shop/Moons.svg" alt="Moons" width={320} height={50} />
            </section>
         </section>
      </section>
    );
}
 
export default Edibles;