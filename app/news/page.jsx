import Link from 'next/link'

import { instapostdata } from '@/constants/data';


const page = () => {
  return (
    <div className=''>

        {/* heading */}
        <div className='md:pt-[90px] md:pb-[90px] pt-[40px] pb-[40px] px-8 flex flex-col items-center justify-center text-white text-center font-normal md:text-3xl text-xl'>
            <p>Stay Connected With The Latest News From</p>
            <p className='mt-6'>LetUsNotDisturb</p>
        </div>

        {/* instagram posts */}
        <div className="mt-8 md:pb-[90px] pb-[40px] grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-4 px-5 md:px-4 cursor-pointer">
            {instapostdata.map((instapostdata, index) => {
            return (
            <Link
                key={index}
                href={instapostdata.instaurl}
                >
                <img 
                    src={instapostdata.imgurl} 
                    alt="instagram posts" 
                />
            </Link>
            );
            })}
        </div>
        
        {/* youtube videos pages start */}
        {/* corona 3rd wave lallantop page */}
        <div className="mt-8 flex md:flex-row flex-col space-y-8 md:space-y-0 items-center justify-center md:pb-[90px] pb-[40px]">
            <Link href="/news/corona3rdwave" className="relative flex-grow md:pl-8">
                <div className="relative w-[350px] h-[200px] lg:w-[600px] lg:h-[300px] ">
                    <img
                        className="absolute inset-0 object-cover opacity-80 hover:opacity-100 "
                        src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625861439275-QU38E47CJR7ME9X7HWQD/Untitled-2.jpg"
                        alt="Lallantop news thumbnail"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white transition-opacity opacity-100 hover:opacity-0">
                        <p className="md:text-4xl text-3xl">Corona 3rd Wave - Lallantop</p>
                    </div>
                </div>
            </Link>

            {/* BCC News page */}
            <Link href="/news/bbc-news" className="relative flex-grow md:right-[60px] lg:right-[200px]">
                <div className="relative w-[350px] h-[200px] lg:w-[600px] lg:h-[300px] px-8 ">
                    <img
                        className="absolute inset-0 object-cover opacity-80 hover:opacity-100"
                        src="https://images.squarespace-cdn.com/content/v1/60bcdce3539722187fb73258/1625861651925-2K7BC3XW3XMC2ZC2CSAC/az.jpg"
                        alt="Bcc news thumbnail"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white transition-opacity opacity-100 hover:opacity-0">
                        <p className="md:text-4xl text-3xl">BBC News</p>
                    </div>
                </div>
            </Link>
        </div>


    </div>
  )
}

export default page