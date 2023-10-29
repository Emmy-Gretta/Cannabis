import Image from 'next/image';
const About = () => {
    return (
        <>
        <section className="main mt-36">
            <div className='flex justify-around items-center  '>
            <p className="font-bold text-[40px] "><span className="ml-2">Getting to </span><br/> knowing <span className=" text-main-color">us</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className='flex'>
            <div className='pop border rounded-xl mx-10 h-64 w-[450px]'>
                <h1 className='font-bold text-2xl'>Lorem ipsum dolor sit a <br/>sectetur <span>adipiscing</span> elit sed do <br/><span>eiusmod</span> tempor </h1>
                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do  eiusmod tempor incididunt ut labore et dolore.</p>
                <button className='bg-black text-white border border-none rounded-md p-2 mt-4 w-[420px]'>Lorem ipsum dolor sit amet</button>
            </div>
            <div className='ellipse -mt-24 ml-1'>
                <Image src="/assets/ellipse.png" alt='ellipse' width={450} height={450} className='' />
            </div>
            </div>
</section>
        </>
    );
}

export default About;