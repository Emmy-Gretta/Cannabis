import Image from "next/image";
import Link from "next/link";
import {FiSearch} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci';

const ShopHeader = () => {
    return (
        <>
        <header className=" bg-[#EEE]">
            <div className=" flex justify-around  items-center text-sm h-[100px] mr-[15px]">
                <Image src="/assets/Log.png" width={120} height={120} alt="logo" className="  ml-[15px] mt-2 mr-20"/>
                <Link href='/marijuana'>MARIJUANA</Link>
                <Link href='/mushroom'>MUSHROOM</Link>
                <div className="flex">
                <div className="searchbar relative">
              <input type="text" className=" w-[300px] h-6  bg-white rounded-md"/>
                    <FiSearch className=" text-orange-500 absolute top-1 right-2   "/>
                </div>
                <div className="flex h-6 px-5 items-center rounded-md  justify-center gap-[3px]">
                <Image src="/Shop/Account.svg" alt="Accout" width={25} height={20} />
                <Link href="/signin" className="ml-1 text-main-color">Account</Link>
                </div>
                    <div className=" bg-orange-500 w-5 h-5  text-white mx-2 rounded-md flex justify-center items-center">
                     <AiOutlineHeart/>
                    </div>
                    <div  className="bg-orange-500 w-5 h-5 text-white rounded-md flex justify-center items-center ">
                    <BsCart2/>
                    </div>
             </div>
            </div>
        </header>

        </>
     );
}

export default ShopHeader;