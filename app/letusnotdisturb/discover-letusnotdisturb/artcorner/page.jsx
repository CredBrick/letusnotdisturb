import Link from 'next/link'
import { artcorner, videos } from '@/constants/data';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className='text-white'>
        {/* Heading */}
        <div 
            className='mt-10 flex flex-col text-center items-center justify-center text-xl md:text-3xl lg:text-4xl lg:leading-[60px]'>
            <h1 className=''>
                LetUsNotDisturb - Artist Corner
            </h1>

            <p className='mt-[120px] mb-10 px-6 md:px-[170px] lg:px-[270px]'>
                Its been an incredible journey since 2014 
            </p>
        </div>

        {/* Images */}
        <div 
            className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center'>
          {artcorner.map((artcorner, index) => {
            return (
                <div className='relative' key={index}>
                    <img 
                    src={artcorner.url} 
                    alt="could not load the image"
                    className='md:w-[340px] md:h-[270px] lg:w-[450px] lg:h-[430px]'/>
                </div>
            )
            })}
        </div>

        {/* youtube videos */}
        <div 
            className="mt-[60px] md:pb-[90px] pb-[40px] grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-4 lg:px-10 cursor-pointer">
            {videos
                .filter(item => item.id === 1 || item.id === 2)
                .map((item, index) => (
                <iframe
                    // key={index}
                    src={item.url}
                    width="100%"
                    height="315"
                    title="YouTube video player"
                >
            </iframe>
        ))}
        </div>

        {/* next pages */}
        <div 
            className="flex flex-row items-end justify-end mt-10 md:mt-[50px]">
        {/* previous page */}
        <Link
          href="/letusnotdisturb/discover-letusnotdisturb/youtube"
          className="basis-1/2 flex flex-row items-center justify-start">
          <AiOutlineLeft
            className="w-8 h-8 px-1"
          />
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            LetUsNotDisturb - Youtube
          </p>
        </Link>
        
        {/* next page */}
        <Link
          href="/letusnotdisturb/discover-letusnotdisturb/socialactivities"
          className="basis-1/2 flex flex-row items-center justify-end">
          <p className="md:text-3xl lg:text-5xl px-6 whitespace-pre-wrap">
            LetUsNotDisturb - Social Activities
          </p>
          <AiOutlineRight
            className="w-8 h-8 px-1"
          />
        </Link>

        </div>

    </div>
  )
}

export default page