import Link from 'next/link'
import { mentalhealth } from '@/constants/data';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className='text-white'>
      <div className='mt-10 text-center'>
        <h2 className='px-10 md:px-[60px] text-2xl md:text-3xl lg:text-4xl mb-10'>
          "What mental health needs is more sunlight,
          <br />
          more candor, and more unashamed conversation." 
        </h2>
        <a 
          href='https://en.wikipedia.org/wiki/Gianni_Versace'
          className='italic underline text-lg mb-10'> 
          - Glenn Close
        </a>
        <h1 className='text-4xl md:text-5xl lg:text-7xl md:px-[300px] mt-10'>
          Lehza.in x Mental Health/Lifestyle
        </h1>
      </div>

      <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
          {mentalhealth.map((mentalhealth, index) => {
            return (
              <div className='relative' key={index}>
              <Link
                href={mentalhealth.url}>
                  <img 
                    src={mentalhealth.img} 
                    alt="could not load the image"
                    className='md:w-[340px] md:h-[270px] lg:w-[450px] lg:h-[380px]'/>
              </Link>
            </div>
            )
            })}
      </div>

      <div className="flex flex-row items-end justify-end mt-10 md:mt-[100px]">
        <Link
          href="/lehza-in/lehza-artist/fashion"
          className="basis-1/2 flex flex-row items-center justify-start">
          <AiOutlineLeft
            className="w-5 h-5 md:w-8 md:h-8 px-1"
          />
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            Fashion
          </p>
        </Link>
        <Link
          href="/lehza-in/lehza-artist/entrepreneurship"
          className="basis-1/2 flex flex-row items-center justify-end">
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            Entrepreneurship
          </p>
          <AiOutlineRight
            className="w-5 h-5 md:w-8 md:h-8 px-1"
          />
        </Link>
      </div>

    </div>
  )
}

export default page