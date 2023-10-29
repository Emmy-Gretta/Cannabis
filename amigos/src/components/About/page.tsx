import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
   return ( 
      <section className="flex items-center justify-center flex-col mb-10 mt-20">
         <h1 className="font-[400] text-[25px]">FAQ About <span className="text-main-color">Lorem Ipsum</span></h1>
         <hr className="w-[600px] border border-[#000] mt-5" />
         <section className="mb-[15px] mt-10">
            <button className="bg-[#EEE] w-[600px] rounded-[7px] flex items-center justify-center gap-72 h-[40px]">
               Lorem ipsum dolor sit amet
               <FiArrowRight className="border font-bold" />
            </button>
         </section>
         <section>
            <button className="bg-[#EEE] w-[600px] rounded-[7px] flex items-center justify-center gap-72 h-[40px]">
               Lorem ipsum dolor sit amet
               <FiArrowRight className="border font-bold" />
            </button>
         </section>
      </section>
    );
}
 
export default About;