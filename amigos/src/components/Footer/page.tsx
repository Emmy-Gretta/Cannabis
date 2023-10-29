import Link from "next/link";
import Image from "next/image";

const Footer = () => {
   return ( 
      <footer className="flex flex-col items-center justify-center bg-[#EEE]">
         <section className="flex gap-28 gap-y-10 text-[15px] my-10">
            <section className="">
               <h1 className="mb-[7px] font-[700]">Cannabisses Strains</h1>
               <h3 className="mb-[7px] text-[#969696]">Hybrid</h3>
               <h3 className="mb-[7px] text-[#969696]">Sativa</h3>
               <h3 className="mb-[7px] text-[#969696]">Indica</h3>
            </section>
            <section>
               <h1 className="mb-[7px] font-[700]">Mushroom Species</h1>
               <h3 className="mb-[7px] text-[#969696]">Mirodosing Capsules</h3>
               <h3 className="mb-[7px] text-[#969696]">Dried magic mushrooms</h3>
               <h3 className="mb-[7px] text-[#969696]">Edibles</h3>
               <h3 className="mb-[7px] text-[#969696]">Tecis</h3>
            </section>
            <section className="grid grid-rows-5">
               <h1 className="mb-[7px] font-[700]">Interested Links</h1>
               <Link href="/" className="mb-[7px] text-[#969696]">Blog</Link>
               <Link href="/" className="mb-[7px] text-[#969696]">FAQ</Link>
               <Link href="/" className="mb-[7px] text-[#969696]">Coupons</Link>
               <Link href="/" className="mb-[7px] text-[#969696]">Contact Us</Link>
            </section>
            <section>
               <h1 className="mb-[7px] font-[700]">Follow Us</h1>
               <div className="flex gap-[5px]">
               <Image src="/Shop/FaceB.svg" alt="Facebook logo" width={20} height={50} />
               <Image src="/Shop/Insta.svg" alt="Facebook logo" width={20} height={50} />
               </div>
            </section>
         </section>
         <hr className="w-[1040px] border" />
         <section className="text-[15px] flex gap-28 my-5">
            <section>
               <p>Copyright &copy; 2023 Three Amigos </p>
            </section>
            <section className="flex gap-40">
               <div className="flex text-[#969696]">
                  <p>Terms and Conditions <span className="mx-5 text-[#000]">|</span></p>
                  <p>Privacy Policy <span className="mx-5 text-[#000]">|</span></p> 
                  <p>Sales and Refunds</p>
               </div>
               <div>
                  <Image src="/Shop/Positive.png" alt="Positive" width={100} height={100} />
               </div>
            </section>
         </section>
      </footer>
    );28
}
 
export default Footer;