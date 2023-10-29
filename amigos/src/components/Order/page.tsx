import Image from "next/image";

const Order = () => {
   return ( 
      <section className="mt-28 mb-10">
         <section className="flex items-center justify-center flex-col mb-10">
            <h1 className="font-bold text-[25px]">How your order works</h1>
            <p>Let's get you started</p>
         </section>
         <section>
         <div className="flex flex-row md:flex-row justify-center items-center gap-16">
        <div className="flex flex-col p-4 bg-white gap-6 rounded-[25px] shadow">
          <h6>We Aim to Provide The Best Customer Experience</h6>
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col p-3 bg-[#FFDAC0] text-xs font-semibold text-[#F47820] rounded-md w-32 h-32">
              <div className="flex justify-center items-center rounded-full p-2 text-white bg-[#F47820] w-8 h-8 font-bold relative bottom-6 right-6">
                1
              </div>
              Place your Order
            </div>
            <div className="flex flex-col p-3 bg-[#F47820] text-xs font-semibold text-white rounded-md w-32 h-32">
              <div className="flex justify-center items-center rounded-full p-2 text-white bg-black w-8 h-8 font-bold relative bottom-6 right-6">
                2
              </div>
              Receive a confirmation email
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col p-3 bg-[#F47820] text-xs font-semibold text-white rounded-md w-32 h-32">
              <div className="flex justify-center items-center rounded-full p-2 text-white bg-black w-8 h-8 font-bold relative bottom-6 right-6">
                3
              </div>
              Receive product tracking details
            </div>
            <div className="flex flex-col p-3 bg-[#FFDAC0] text-xs font-semibold text-[#F47820] rounded-md w-32 h-32">
              <div className="flex justify-center items-center rounded-full p-2 text-white bg-[#F47820] w-8 h-8 font-bold relative bottom-6 right-6">
                4
              </div>
              Get product to your door steps
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 bg-[#FFDAC0] rounded-[25px] w-[410px] h-[360px] gap-4 shadow">
          <h6 className="font-bold">We are delighted to let you know</h6>
          <div className="w-[300px] h-[250px] bg-[#F47820] rounded-[25px] relative">
            <Image src="/Shop/Rectangle.svg" alt="Rectangle" width={220} height={200} className="ml-[40px] mt-[30px]" />
            <p className="font-bold text-white absolute bottom-11 left-2 text-center text-[35px]">
              We serve all  Provinces in Canada
            </p>
          </div>
        </div>
      </div>
         </section>
      </section>
    );
}
 
export default Order;