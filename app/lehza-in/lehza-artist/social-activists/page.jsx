import Link from 'next/link'
import { socialact } from '@/constants/data';
import { AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className='text-white'>
      <div className='mt-10 text-center'>
          <h2 className='px-10 md:px-[60px] text-2xl md:text-3xl lg:text-4xl mb-10'>
            It is not enough to be compassionate.
            <br /> 
            You must act.
          </h2>
          <a 
            href='https://en.wikipedia.org/wiki/Dalai_Lama'
            className='italic underline text-lg mb-10'> 
              — Dalai Lama
          </a>
          <h1 className='text-4xl md:text-5xl lg:text-7xl md:px-[300px] mt-10'>
            Lehza.in x Social Activists
          </h1>
        </div>

        <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
          {socialact.map((socialact, index) => {
            return (
              <div className='relative' key={index}>
              <Link
                href={socialact.url}>
                  <img 
                    src={socialact.img} 
                    alt="could not load the image"
                    className='md:w-[340px] md:h-[270px] lg:w-[450px] lg:h-[380px]'/>
              </Link>
            </div>
            )
            })}
        </div>

        <Link
          href="/lehza-in/lehza-artist/author"
          className="flex flex-row items-center justify-start md:mt-[100px] mt-[50px] ">
          <AiOutlineLeft
            className="w-5 h-5 md:w-8 md:h-8 px-1 flex flex-row items-center justify-center"/>
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
              Author
          </p>
        </Link>
    </div>
  )
}

export default page