import React from 'react'
import Link from 'next/link'
import { AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className='text-white'>
        {/* heading */}
        <div 
            className='mt-10 flex flex-col text-center items-center justify-center text-xl md:text-3xl lg:text-4xl lg:leading-[60px]'>
            <h1 className=''>
                LetUsNotDisturb - Social Activities
            </h1>

            <p className='mt-10 px-6 lg:px-[270px] text-xl'>
                Unless someone like you cares a whole awful lot, nothing is going to get better.
                <br />
                It's not.
            </p>
            <p className='italic text-lg'>
                - The Lorax by Dr. Seuss
            </p>
        </div>

        {/* Images and Videos */}
        <div></div>

        <Link
          href="/letusnotdisturb/discover-letusnotdisturb/artcorner"
          className="flex flex-row items-center justify-start md:mt-[100px] mt-[50px] ">
          <AiOutlineLeft
            className="w-5 h-5 md:w-8 md:h-8 px-1 flex flex-row items-center justify-center"/>
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            LetUsNotDisturb - Artist Corner
          </p>
        </Link>
    </div>
  )
}

export default page