import Image from "next/image";
import Link from "next/link";

const PostShopHeader = () => {
   return ( 
      <section className="w-full bg-main-color text-[#fff] h-[54px] flex items-center justify-center whitespace-nowrap  xl-min:flex-wrap">
           <section className="flex gap-[60px] ml-[38px] mr-[35px] text-[15px]">
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">All</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Aphrodisiac</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Cognitive</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Energy</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Immune support</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Pure Mushroom</Link>
         </div>
         <div className="flex flex-row gap-[5px]">
            <Image src="/Shop/Bar.svg" alt="Bar" width={20} height={20} />
            <Link href="/">Trip Stopper</Link>
         </div>
      </section>
      </section>
    );
}
 
export default PostShopHeader;