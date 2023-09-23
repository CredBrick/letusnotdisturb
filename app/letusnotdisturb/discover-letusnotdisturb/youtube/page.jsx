import { videos } from '@/constants/data';
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';

const page = () => {
  return (
    <div className='text-white'>
        {/* Heading */}
        <div 
            className='mt-10 flex flex-col text-center items-center justify-center text-xl md:text-3xl lg:text-4xl lg:leading-[60px]'>
            <h1 className=''>
                LetUsNotDisturb - YouTube
            </h1>

            <p className='mt-10 mb-10 px-6 md:px-[170px] lg:px-[270px]'>
                Comforting the disturbed and disturbing the comfortable! Our intention is to do exactly 
                what we've been doing, TALK. We went, We saw, We heard, We forgot. But we'll discuss, 
                because nothing escapes our experienced eyes. Let us just be what we are, we have no 
                intention to disturb your sweet lives. 
            </p>
        </div>

        {/* Youtube Videos */}
        <div 
            className="mt-8 md:pb-[90px] pb-[40px] grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-4 lg:px-10 cursor-pointer">
            {videos.map((item, index) => (
                <iframe 
                    key={index} 
                    src={item.url}
                    width="100%"
                    height="315" 
                    title="YouTube video player" 
                    >
                </iframe>   
            ))} 
        </div>
        
        {/* next page */}
        <Link
          href="/letusnotdisturb/discover-letusnotdisturb/artcorner"
          className="flex flex-row items-end justify-end md:mt-[100px] mt-[50px] ">
            <p className="md:text-3xl text-lg">
                LetUsNotDisturb - Artist Corner
            </p> 
            <AiOutlineRight
            className="md:px-1 md:py-1 p-1"
            size={30}/>
        </Link>
    </div>
  )
}

export default page